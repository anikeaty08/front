import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('hero-canvas');
            if(!canvas) return;
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let dots = [];
            let beams = [];
            const spacing = 35; // Grid density

            function initCanvas() {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
                dots = [];
                for (let x = 0; x < width + spacing; x += spacing) {
                    for (let y = 0; y < height + spacing; y += spacing) {
                        dots.push({
                            x: x, 
                            y: y,
                            baseAlpha: Math.random() * 0.15 + 0.02,
                            currentAlpha: 0,
                            flickerSpeed: Math.random() * 0.05 + 0.01,
                            flickerPhase: Math.random() * Math.PI * 2
                        });
                    }
                }
            }

            // Spawn data beams periodically
            setInterval(() => {
                if(beams.length < 6) {
                    const isHorizontal = Math.random() > 0.5;
                    const speed = Math.random() * 4 + 3;
                    beams.push({
                        x: isHorizontal ? -200 : Math.floor(Math.random() * (width/spacing)) * spacing,
                        y: isHorizontal ? Math.floor(Math.random() * (height/spacing)) * spacing : -200,
                        vx: isHorizontal ? speed : 0,
                        vy: isHorizontal ? 0 : speed,
                        length: Math.random() * 300 + 150
                    });
                }
            }, 800);

            function draw() {
                ctx.clearRect(0, 0, width, height);
                const time = Date.now() * 0.001;

                // Draw Beams
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#FF3E00';
                beams.forEach((b, i) => {
                    b.x += b.vx;
                    b.y += b.vy;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x - (b.vx === 0 ? 0 : b.length), b.y - (b.vy === 0 ? 0 : b.length));
                    ctx.strokeStyle = '#FF3E00';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Remove out of bounds
                    if(b.x > width + b.length || b.y > height + b.length) {
                        beams.splice(i, 1);
                    }
                });
                ctx.shadowBlur = 0;

                // Draw Dots & React to Beams
                dots.forEach(d => {
                    // Ambient flicker
                    let alpha = d.baseAlpha + Math.sin(time * d.flickerSpeed * 10 + d.flickerPhase) * 0.05;
                    
                    // Beam interaction glow
                    let beamGlow = 0;
                    beams.forEach(b => {
                        const dist = Math.abs(b.vx > 0 ? (d.y - b.y) : (d.x - b.x));
                        const along = b.vx > 0 ? (d.x - b.x) : (d.y - b.y);
                        if(dist < spacing && along > -b.length && along < 0) {
                            beamGlow = 1 - Math.abs(along)/b.length;
                        }
                    });
                    
                    d.currentAlpha = Math.max(alpha, beamGlow * 0.8);
                    
                    ctx.fillStyle = `rgba(255, 255, 255, ${d.currentAlpha * 0.4})`;
                    if(beamGlow > 0.1) {
                        ctx.fillStyle = `rgba(255, 62, 0, ${d.currentAlpha})`;
                    }
                    
                    ctx.beginPath();
                    ctx.arc(d.x, d.y, beamGlow > 0.1 ? 2 : 1, 0, Math.PI * 2);
                    ctx.fill();
                });

                requestAnimationFrame(draw);
            }

            window.addEventListener('resize', initCanvas);
            initCanvas();
            draw();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-[#FFFFFF]/10 transition-all duration-300">
<div className="max-w-[100rem] mx-auto px-6 h-20 grid grid-cols-12 items-center gap-4">

<div className="col-span-4 md:col-span-3 flex items-center space-x-3 group cursor-pointer relative">
<div className="absolute -inset-2 bg-[#FF3E00]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="w-8 h-8 text-[#FF3E00] group-hover:rotate-90 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] relative z-10" viewbox="0 0 100 100">
<polygon fill="none" points="10,90 45,10 90,10 55,90" stroke="currentColor" strokeWidth="8"></polygon>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" cx="50" cy="50" fill="currentColor" r="15"></circle>
</svg>
<span className="text-xl font-semibold tracking-tighter uppercase text-[#FFFFFF] relative z-10">ZENO</span>
</div>

<div className="hidden md:col-span-6 md:flex items-center justify-center space-x-10">
<a className="text-xs font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors relative group" href="#intelligence">
<span className="flex items-center space-x-1">
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">[</span>
<span>Intelligence</span>
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">]</span>
</span>
</a>
<a className="text-xs font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors relative group" href="#infrastructure">
<span className="flex items-center space-x-1">
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">[</span>
<span>Terminal</span>
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">]</span>
</span>
</a>
<a className="text-xs font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors relative group" href="#logistics">
<span className="flex items-center space-x-1">
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">[</span>
<span>Advantage</span>
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">]</span>
</span>
</a>
<a className="text-xs font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors relative group" href="#access">
<span className="flex items-center space-x-1">
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">[</span>
<span>Clearance</span>
<span className="opacity-0 group-hover:opacity-100 text-[#FF3E00] transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">]</span>
</span>
</a>
</div>

<div className="col-span-8 md:col-span-3 flex items-center justify-end">
<a className="btn-cut relative group inline-flex items-center justify-center bg-[#18181B] border border-[#3F3F46] text-[#FFFFFF] px-6 py-2.5 font-mono text-[10px] uppercase overflow-hidden" href="#apply">
<div className="absolute inset-0 bg-[#FF3E00] -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
<span className="relative z-10 flex items-center space-x-2 group-hover:text-[#FFFFFF] transition-colors duration-300">
<span className="group-hover:tracking-widest transition-all duration-300 font-semibold">Scale Time</span>
<iconify-icon className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden border-b border-[#FFFFFF]/10 bg-[#050505]">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-80 mix-blend-screen" id="hero-canvas"></canvas>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-0"></div>
<div className="relative z-10 max-w-[100rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 flex flex-col items-start">
<div className="flex items-center space-x-3 mb-8 px-4 py-2 bg-[#18181B]/80 backdrop-blur-md border border-[#3F3F46] btn-cut">
<div className="relative flex items-center justify-center w-2 h-2">
<div className="absolute w-full h-full rounded-full bg-[#FF3E00] animate-ring"></div>
<div className="relative w-1.5 h-1.5 rounded-full bg-[#FF3E00]"></div>
</div>
<span className="font-mono text-[10px] text-[#D4D4D8] uppercase tracking-widest">Network Status: Accepting Q3 Operators</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter text-[#FFFFFF] leading-[0.92] mb-8">
                    Reclaim Your Time.<br/>
<span className="text-[#71717A]">Scale Your Output.</span>
</h1>
<p className="text-base md:text-lg text-[#A1A1AA] max-w-[50ch] leading-relaxed mb-10 font-medium">
                    The 0.1% don't wait in line. We engineer frictionless, trust-driven global access. Bypass compromised public systems, eradicate variables, and focus entirely on aggressive growth.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
<a className="btn-cut relative group inline-flex items-center justify-center bg-[#FFFFFF] text-[#050505] px-10 py-5 font-mono text-xs uppercase overflow-hidden shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-500" href="#apply">
<div className="absolute inset-0 bg-[#FF3E00] -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
<span className="relative z-10 flex items-center space-x-3 group-hover:text-[#FFFFFF] transition-colors duration-300">
<span className="font-bold group-hover:tracking-[0.2em] transition-all duration-300">Initiate Advantage</span>
<iconify-icon className="text-lg" icon="solar:lock-keyhole-unlocked-linear"></iconify-icon>
</span>
</a>
<div className="flex flex-col space-y-1">
<span className="font-mono text-[10px] text-[#71717A] uppercase tracking-widest flex items-center space-x-2">
<iconify-icon className="text-[#FF3E00]" icon="solar:shield-check-linear"></iconify-icon>
<span>Absolute Security Guarantee</span>
</span>
<span className="font-mono text-[10px] text-[#71717A] uppercase tracking-widest flex items-center space-x-2">
<iconify-icon className="text-[#FF3E00]" icon="solar:user-id-linear"></iconify-icon>
<span>Strict Vetting Process</span>
</span>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-4 justify-end">
<div className="border-l border-[#3F3F46] pl-8 flex flex-col space-y-12 relative bg-[#050505]/40 backdrop-blur-sm p-8 btn-cut">
<div className="absolute top-0 left-[-1px] w-0.5 h-16 bg-[#FF3E00] animate-scan shadow-[0_0_10px_#FF3E00]"></div>
<div>
<p className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 flex justify-between">
<span>Active Operator Nodes</span>
<span className="text-[#FF3E00]">LIVE</span>
</p>
<p className="text-3xl font-semibold tracking-tighter text-[#FFFFFF]">1,042</p>
</div>
<div>
<p className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 flex justify-between">
<span>Global Friction Eliminated</span>
<span className="text-[#FF3E00]">%</span>
</p>
<p className="text-3xl font-semibold tracking-tighter text-[#FF3E00]">99.97%</p>
</div>
<div>
<p className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 flex justify-between">
<span>Next Vetting Window</span>
<span className="text-[#FF3E00]">T-MINUS</span>
</p>
<p className="text-3xl font-semibold tracking-tighter text-[#FFFFFF] font-mono">14:02:59</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#18181B] border-b border-[#3F3F46] py-3 overflow-hidden relative flex items-center">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#18181B] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#18181B] to-transparent z-10 pointer-events-none"></div>
<div className="flex w-max animate-marquee font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]">
<div className="flex items-center space-x-12 px-6">
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:routing-2-linear"></iconify-icon><span>ZRH-ALPHA // TIME SCALED</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:shield-check-linear"></iconify-icon><span>DXB-PRIME // FRICTION ZERO</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:radar-2-linear"></iconify-icon><span>TYO-NEXUS // GHOST PROTOCOL</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:lock-keyhole-linear"></iconify-icon><span>NYC-APEX // OPERATOR SECURED</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:routing-2-linear"></iconify-icon><span>LDN-CORE // OUTPUT MAXIMIZED</span></span>
</div>
<div className="flex items-center space-x-12 px-6">
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:routing-2-linear"></iconify-icon><span>ZRH-ALPHA // TIME SCALED</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:shield-check-linear"></iconify-icon><span>DXB-PRIME // FRICTION ZERO</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:radar-2-linear"></iconify-icon><span>TYO-NEXUS // GHOST PROTOCOL</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:lock-keyhole-linear"></iconify-icon><span>NYC-APEX // OPERATOR SECURED</span></span>
<span className="flex items-center space-x-3"><iconify-icon className="text-[#FF3E00]" icon="solar:routing-2-linear"></iconify-icon><span>LDN-CORE // OUTPUT MAXIMIZED</span></span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAFAFA] text-[#050505] bg-grid-pattern-dark relative" id="intelligence">
<div className="max-w-[100rem] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-center">
<span className="font-mono text-[10px] text-[#FF3E00] uppercase tracking-widest mb-6 border border-[#FF3E00]/30 px-3 py-1 bg-[#FF3E00]/5 w-max">Human Benefit Matrix</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05] mb-8">
                        Friction is a Tax on the Uninformed.
                    </h2>
<p className="text-[#52525B] font-medium leading-relaxed mb-10 max-w-[50ch]">
                        Every minute spent in a crowded lobby or delayed transit is a failure of logistics. Public infrastructure is designed for mass processing, draining your energy and limiting your growth potential.
                    </p>
<div className="flex items-center space-x-4 border-l-2 border-[#FF3E00] pl-6 py-3 bg-[#FFFFFF] shadow-sm">
<iconify-icon className="text-3xl text-[#FF3E00]" icon="solar:shield-user-linear"></iconify-icon>
<p className="text-sm font-semibold text-[#050505] leading-snug">Our trust-driven architecture completely eliminates the variable of chance, granting you absolute control over your geographic footprint.</p>
</div>
</div>

<div className="bg-[#FFFFFF] border border-[#E4E4E7] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] btn-cut relative group hover:border-[#050505] transition-colors duration-500">
<div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
<div className="absolute top-0 right-0 w-[141%] h-[141%] origin-bottom-left rotate-45 bg-[#FF3E00] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
</div>
<div className="grid grid-cols-3 gap-4 pb-4 border-b border-[#E4E4E7] mb-6 relative z-10">
<div className="col-span-1 font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Metric</div>
<div className="col-span-1 font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Public Layer</div>
<div className="col-span-1 font-mono text-[10px] text-[#FF3E00] uppercase tracking-widest font-semibold">Zeno Protocol</div>
</div>
<div className="space-y-6 relative z-10">
<div className="grid grid-cols-3 gap-4 items-center group/row">
<div className="col-span-1 text-sm font-semibold text-[#050505]">Time Economics</div>
<div className="col-span-1 text-sm text-[#71717A] flex items-center space-x-2"><iconify-icon className="text-[#A1A1AA]" icon="solar:graph-down-linear"></iconify-icon><span>Depreciating</span></div>
<div className="col-span-1 text-sm font-semibold text-[#050505] flex items-center space-x-2 bg-[#FAFAFA] p-2 rounded-sm group-hover/row:bg-[#FFF1ED] transition-colors"><iconify-icon className="text-[#FF3E00]" icon="solar:graph-up-linear"></iconify-icon><span>Exponential Scaling</span></div>
</div>
<div className="grid grid-cols-3 gap-4 items-center group/row">
<div className="col-span-1 text-sm font-semibold text-[#050505]">Latency / Friction</div>
<div className="col-span-1 text-sm text-[#71717A]">High Variance</div>
<div className="col-span-1 text-sm font-semibold text-[#050505] bg-[#FAFAFA] p-2 rounded-sm group-hover/row:bg-[#FFF1ED] transition-colors">Absolute Zero</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center group/row">
<div className="col-span-1 text-sm font-semibold text-[#050505]">Data Sovereignty</div>
<div className="col-span-1 text-sm text-[#71717A]">Commercialized</div>
<div className="col-span-1 text-sm font-semibold text-[#050505] bg-[#FAFAFA] p-2 rounded-sm group-hover/row:bg-[#FFF1ED] transition-colors">Military-Grade Encrypted</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center group/row">
<div className="col-span-1 text-sm font-semibold text-[#050505]">Mental Bandwidth</div>
<div className="col-span-1 text-sm text-[#71717A]">Drained</div>
<div className="col-span-1 text-sm font-semibold text-[#050505] bg-[#FAFAFA] p-2 rounded-sm group-hover/row:bg-[#FFF1ED] transition-colors">100% Preserved</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden border-y border-[#3F3F46]" id="infrastructure">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[800px] h-[800px] bg-[#FF3E00] opacity-[0.04] blur-[100px] rounded-full"></div>
</div>
<div className="max-w-[100rem] mx-auto px-6 relative z-10">
<div className="text-center mb-20 flex flex-col items-center">
<span className="font-mono text-[10px] text-[#FF3E00] uppercase tracking-widest mb-4 border border-[#FF3E00]/30 px-3 py-1 bg-[#FF3E00]/5 shadow-[0_0_15px_rgba(255,62,0,0.1)]">Infrastructure OS</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#FFFFFF] mb-6">The Global Command Center</h2>
<p className="text-[#A1A1AA] max-w-[60ch]">Total oversight of your geographical footprint. Execute encrypted transitions with zero latency. Built strictly for operators who demand absolute security and control.</p>
</div>

<div className="w-full max-w-5xl mx-auto bg-[#0A0A0A] border border-[#27272A] p-2 rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative group hover:scale-[1.01] transition-transform duration-700 ease-out">
<div className="w-full h-full bg-[#121214] border border-[#27272A] rounded-lg overflow-hidden relative">

<div className="h-10 border-b border-[#27272A] flex items-center px-4 justify-between bg-[#0A0A0A]">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#3F3F46] hover:bg-[#FF3E00] transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-[#3F3F46]"></div>
<div className="w-3 h-3 rounded-full bg-[#3F3F46]"></div>
</div>
<div className="font-mono text-[10px] text-[#71717A] tracking-widest flex items-center space-x-2">
<iconify-icon className="text-[#FF3E00]" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span>ZENO.OS // SECURE TERMINAL</span>
</div>
<iconify-icon className="text-[#71717A]" icon="solar:maximize-square-2-linear"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 h-[600px] relative">

<div className="hidden md:block md:col-span-3 border-r border-[#27272A] bg-[#0A0A0A] p-4 flex flex-col space-y-6">
<div className="flex items-center space-x-3 text-[#FFFFFF] bg-[#18181B] p-2 rounded-md border border-[#FF3E00]/30 shadow-[inset_0_0_10px_rgba(255,62,0,0.05)]">
<iconify-icon className="text-[#FF3E00]" icon="solar:route-linear"></iconify-icon>
<span className="text-xs font-semibold">Active Trajectory</span>
</div>
<div className="space-y-2">
<span className="font-mono text-[9px] text-[#71717A] uppercase tracking-widest pl-2 block mb-2">Growth Modules</span>
<div className="flex items-center justify-between text-[#A1A1AA] hover:text-[#FFFFFF] hover:bg-[#18181B] p-2 rounded-md cursor-pointer transition-colors">
<div className="flex items-center space-x-3"><iconify-icon icon="solar:radar-linear"></iconify-icon><span className="text-xs">Scout Radar</span></div>
<div className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full"></div>
</div>
<div className="flex items-center space-x-3 text-[#A1A1AA] hover:text-[#FFFFFF] hover:bg-[#18181B] p-2 rounded-md cursor-pointer transition-colors"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon><span className="text-xs">Density Heatmap</span></div>
<div className="flex items-center space-x-3 text-[#A1A1AA] hover:text-[#FFFFFF] hover:bg-[#18181B] p-2 rounded-md cursor-pointer transition-colors"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon><span className="text-xs">Asset Protection</span></div>
</div>
</div>

<div className="col-span-1 md:col-span-9 bg-[#121214] relative p-6 flex flex-col overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-30">
<div className="w-full h-px bg-[#FF3E00] animate-scan shadow-[0_0_8px_#FF3E00]"></div>
</div>

<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<h3 className="text-2xl font-semibold text-[#FFFFFF] tracking-tight">Project Alpine</h3>
<p className="font-mono text-[10px] text-[#A1A1AA] mt-1">LOC: 46.0207° N, 7.7491° E // ZERMATT, CH</p>
</div>
<div className="bg-[#050505] border border-[#27272A] px-4 py-2 flex items-center space-x-3 btn-cut">
<div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse shadow-[0_0_5px_#10B981]"></div>
<span className="font-mono text-[10px] text-[#10B981] uppercase font-semibold">Signal Locked</span>
</div>
</div>

<div className="flex-grow bg-[#050505] border border-[#27272A] rounded-lg relative overflow-hidden flex items-center justify-center bg-grid-pattern group/map">

<svg className="absolute inset-0 w-full h-full opacity-60" viewbox="0 0 800 400">
<path className="dash-line" d="M100,200 C250,100 350,300 500,150 S700,250 800,100" fill="none" stroke="#3F3F46" strokeWidth="2"></path>
<circle cx="100" cy="200" fill="#FF3E00" r="4"></circle>
<circle className="animate-pulse shadow-[0_0_15px_#FFFFFF]" cx="500" cy="150" fill="#FFFFFF" r="6"></circle>
<circle cx="800" cy="100" fill="#FF3E00" r="4"></circle>

<path className="opacity-0 group-hover/map:opacity-50 transition-opacity duration-1000" d="M500,150 A 100 100 0 0 1 600 250" fill="none" stroke="#FF3E00" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>

<div className="absolute top-[35%] left-[60%] flex flex-col items-center group-hover/map:scale-110 transition-transform duration-500 z-10">
<div className="w-12 h-12 border border-[#FF3E00] rounded-full flex items-center justify-center bg-[#FF3E00]/10 backdrop-blur-md relative">
<div className="absolute inset-0 border border-[#FF3E00] rounded-full animate-ring"></div>
<div className="w-2.5 h-2.5 bg-[#FF3E00] rounded-full shadow-[0_0_10px_#FF3E00]"></div>
</div>
<div className="mt-3 bg-[#000000] border border-[#FF3E00]/50 px-3 py-1 btn-cut">
<span className="font-mono text-[9px] text-[#FFFFFF] font-semibold tracking-widest">ASSET SECURED</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mt-4 relative z-10">
<div className="bg-[#0A0A0A] border border-[#27272A] p-4 btn-cut hover:border-[#3F3F46] transition-colors">
<span className="font-mono text-[9px] text-[#A1A1AA] uppercase block mb-1">Logistics</span>
<span className="text-sm font-semibold text-[#FFFFFF]">Heli Standby // 0m</span>
</div>
<div className="bg-[#0A0A0A] border border-[#27272A] p-4 btn-cut hover:border-[#3F3F46] transition-colors">
<span className="font-mono text-[9px] text-[#A1A1AA] uppercase block mb-1">Density Risk</span>
<span className="text-sm font-semibold text-[#10B981]">Cleared (0.0%)</span>
</div>
<div className="bg-[#0A0A0A] border border-[#27272A] p-4 btn-cut hover:border-[#3F3F46] transition-colors">
<span className="font-mono text-[9px] text-[#A1A1AA] uppercase block mb-1">Time Reclaimed</span>
<span className="text-sm font-semibold text-[#FF3E00]">+14.5 Hours</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFFFF] text-[#050505]" id="logistics">
<div className="max-w-[100rem] mx-auto px-6">
<div className="mb-16 border-b border-[#E4E4E7] pb-8 flex flex-col md:flex-row justify-between items-end">
<div>
<span className="font-mono text-[10px] text-[#FF3E00] uppercase tracking-widest mb-4 block font-semibold">Growth Multipliers</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#050505] leading-[1.05] max-w-[20ch]">
                        Asymmetric Advantages for Market Leaders.
                    </h2>
</div>
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mt-6 md:mt-0 bg-[#FAFAFA] px-4 py-2 border border-[#E4E4E7]">Capability Matrix v3.0</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">

<div className="bg-[#FFFFFF] p-10 md:p-14 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3E00] to-transparent -translate-x-full group-hover:animate-scan-horizontal"></div>
<div className="mb-8 w-14 h-14 bg-[#050505] text-[#FFFFFF] flex items-center justify-center btn-cut group-hover:bg-[#FF3E00] transition-colors duration-300 shadow-md">
<iconify-icon className="text-2xl" icon="solar:programming-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#050505] mb-4">Algorithmic Precision</h3>
<p className="text-sm text-[#52525B] leading-relaxed flex-grow">Human recommendation is inherently flawed. Our proprietary AI processes live geospatial data to secure pristine environments, guaranteeing absolute focus and zero disruptions.</p>
<div className="mt-10 pt-6 border-t border-[#E4E4E7] flex items-center justify-between">
<span className="font-mono text-[10px] text-[#A1A1AA] font-semibold group-hover:text-[#FF3E00] transition-colors tracking-widest">SYS.01 // MAX OUTPUT</span>
<iconify-icon className="text-[#050505] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-[#FFFFFF] p-10 md:p-14 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3E00] to-transparent -translate-x-full group-hover:animate-scan-horizontal" style={{animationDelay: '0.2s'}}></div>
<div className="mb-8 w-14 h-14 bg-[#050505] text-[#FFFFFF] flex items-center justify-center btn-cut group-hover:bg-[#FF3E00] transition-colors duration-300 shadow-md">
<iconify-icon className="text-2xl" icon="solar:shield-network-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#050505] mb-4">Ghost-Protocol Transit</h3>
<p className="text-sm text-[#52525B] leading-relaxed flex-grow">Move seamlessly without breaking workflow. From encrypted private aviation to untraceable ground layers, we maintain your invisibility so you can maintain momentum.</p>
<div className="mt-10 pt-6 border-t border-[#E4E4E7] flex items-center justify-between">
<span className="font-mono text-[10px] text-[#A1A1AA] font-semibold group-hover:text-[#FF3E00] transition-colors tracking-widest">SYS.02 // ZERO LATENCY</span>
<iconify-icon className="text-[#050505] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-[#FFFFFF] p-10 md:p-14 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3E00] to-transparent -translate-x-full group-hover:animate-scan-horizontal" style={{animationDelay: '0.4s'}}></div>
<div className="mb-8 w-14 h-14 bg-[#050505] text-[#FFFFFF] flex items-center justify-center btn-cut group-hover:bg-[#FF3E00] transition-colors duration-300 shadow-md">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#050505] mb-4">Sovereign Authority</h3>
<p className="text-sm text-[#52525B] leading-relaxed flex-grow">We don't request reservations; we secure clearances. ZENO guarantees diplomatic-grade access to geographical exclusion zones, giving you the space to operate at the highest level.</p>
<div className="mt-10 pt-6 border-t border-[#E4E4E7] flex items-center justify-between">
<span className="font-mono text-[10px] text-[#A1A1AA] font-semibold group-hover:text-[#FF3E00] transition-colors tracking-widest">SYS.03 // DOMINANCE</span>
<iconify-icon className="text-[#050505] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] text-[#FFFFFF] border-y border-[#3F3F46]">
<div className="max-w-[100rem] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-4 divide-x-0 md:divide-x divide-[#27272A]">
<div className="flex flex-col md:px-8 first:px-0">
<div className="flex items-center space-x-2 mb-4">
<div className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full shadow-[0_0_8px_#FF3E00]"></div>
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Operational Uptime</span>
</div>
<span className="text-6xl md:text-[5rem] font-semibold tracking-tighter leading-none text-[#FFFFFF]">100<span className="text-3xl text-[#71717A]">%</span></span>
</div>
<div className="flex flex-col md:px-8">
<div className="flex items-center space-x-2 mb-4">
<div className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full"></div>
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Avg Time Reclaimed</span>
</div>
<span className="text-6xl md:text-[5rem] font-semibold tracking-tighter leading-none text-[#FFFFFF]">240<span className="text-3xl text-[#71717A]">h</span></span>
</div>
<div className="flex flex-col md:px-8">
<div className="flex items-center space-x-2 mb-4">
<div className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full"></div>
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Encrypted Nodes</span>
</div>
<span className="text-6xl md:text-[5rem] font-semibold tracking-tighter leading-none text-[#FFFFFF]">142</span>
</div>
<div className="flex flex-col md:px-8">
<div className="flex items-center space-x-2 mb-4">
<div className="w-1.5 h-1.5 bg-[#FF3E00] rounded-full"></div>
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Active Operators</span>
</div>
<span className="text-6xl md:text-[5rem] font-semibold tracking-tighter leading-none text-[#FFFFFF]">&lt;1K</span>
</div>
</div>
</div>
</section>

<section className="bg-[#18181B] border-b border-[#3F3F46]">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative h-[50vh] lg:h-auto min-h-[600px] overflow-hidden group">
<img alt="Private Jet" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[40%] contrast-125 group-hover:scale-105 transition-transform duration-[3s] ease-out" src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#050505]/50 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-80 lg:hidden"></div>

<div className="absolute top-6 left-6 flex items-center space-x-3 bg-[#050505]/80 backdrop-blur-md border border-[#3F3F46] px-4 py-2 btn-cut z-10">
<iconify-icon className="text-[#FF3E00]" icon="solar:plane-linear"></iconify-icon>
<span className="font-mono text-[10px] text-[#FFFFFF] uppercase tracking-widest">Asset: G650ER // SECURED</span>
</div>
</div>

<div className="p-12 md:p-24 flex flex-col justify-center relative bg-grid-pattern-dark">
<iconify-icon className="text-5xl text-[#3F3F46] mb-8" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#FFFFFF] leading-[1.1] mb-12">
                    "ZENO doesn't just manage travel. They architect time. Absolute precision. My operational output has scaled exponentially since outsourcing my coordinates."
                </p>
<div className="flex items-center justify-between border-t border-[#3F3F46] pt-8">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-[#050505] border border-[#3F3F46] flex items-center justify-center btn-cut shadow-inner">
<span className="font-mono text-xs text-[#FFFFFF] font-semibold">M.K</span>
</div>
<div>
<p className="text-sm font-semibold text-[#FFFFFF]">Marcus K.</p>
<p className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-widest mt-1">Founder, Vertex Capital</p>
</div>
</div>
<div className="text-right">
<p className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">Clearance Level</p>
<p className="text-sm font-semibold text-[#FF3E00] flex items-center space-x-1 justify-end mt-1">
<iconify-icon icon="solar:shield-star-linear"></iconify-icon>
<span>APEX</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] text-[#050505]" id="access">
<div className="max-w-[80rem] mx-auto px-6">
<div className="text-center mb-20 flex flex-col items-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">Select Your Trajectory.</h2>
<p className="text-[#52525B] max-w-[50ch] font-medium">Network bandwidth is strictly capped to guarantee zero latency for active operators. Choose your clearance protocol.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-[#FFFFFF] border border-[#E4E4E7] p-10 lg:p-14 flex flex-col relative group hover:border-[#050505] transition-colors duration-500 btn-cut shadow-sm">
<div className="absolute top-0 right-0 bg-[#F4F4F5] px-4 py-2 font-mono text-[10px] text-[#71717A] uppercase tracking-widest border-b border-l border-[#E4E4E7] group-hover:bg-[#050505] group-hover:text-[#FFFFFF] transition-colors font-semibold">Scale</div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Accelerate Protocol</h3>
<p className="text-sm text-[#71717A] mb-8 h-10">Encrypted logistics and automated access for high-frequency growth operators.</p>
<div className="text-5xl font-semibold tracking-tighter mb-8">$25K <span className="text-lg text-[#A1A1AA] font-medium tracking-normal">/ Annually</span></div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-center space-x-3 text-sm text-[#050505] font-medium"><iconify-icon className="text-[#050505]" icon="solar:check-circle-bold"></iconify-icon><span>Full ZENO Terminal Control</span></li>
<li className="flex items-center space-x-3 text-sm text-[#050505] font-medium"><iconify-icon className="text-[#050505]" icon="solar:check-circle-bold"></iconify-icon><span>Algorithmic Environment Scouting</span></li>
<li className="flex items-center space-x-3 text-sm text-[#050505] font-medium"><iconify-icon className="text-[#050505]" icon="solar:check-circle-bold"></iconify-icon><span>Priority Commercial Encryption</span></li>
<li className="flex items-center space-x-3 text-sm text-[#050505] font-medium"><iconify-icon className="text-[#050505]" icon="solar:check-circle-bold"></iconify-icon><span>24/7 Tactical Support Node</span></li>
</ul>
<a className="w-full relative group/btn flex items-center justify-center bg-[#F4F4F5] text-[#050505] px-6 py-4 font-mono text-xs uppercase overflow-hidden btn-cut border border-transparent hover:border-[#050505] transition-colors" href="#apply">
<div className="absolute inset-0 bg-[#050505] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
<span className="relative z-10 group-hover/btn:text-[#FFFFFF] transition-colors duration-300 font-semibold group-hover/btn:tracking-[0.1em]">Request Clearance</span>
</a>
</div>

<div className="bg-[#050505] border border-[#3F3F46] p-10 lg:p-14 flex flex-col relative group hover:border-[#FF3E00] transition-colors duration-500 btn-cut shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF3E00]/5 to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 bg-[#FF3E00] px-4 py-2 font-mono text-[10px] text-[#FFFFFF] uppercase tracking-widest border-b border-l border-[#FF3E00] font-semibold">Dominance</div>
<h3 className="text-3xl font-semibold tracking-tight text-[#FFFFFF] mb-2">Apex Protocol</h3>
<p className="text-sm text-[#A1A1AA] mb-8 h-10">Total atmospheric dominance. Absolute ghost protocol and sovereign authority.</p>
<div className="text-5xl font-semibold tracking-tighter text-[#FFFFFF] mb-8">$100K <span className="text-lg text-[#71717A] font-medium tracking-normal">/ Annually</span></div>
<ul className="space-y-4 mb-12 flex-grow">
<li className="flex items-center space-x-3 text-sm text-[#FFFFFF] font-medium"><iconify-icon className="text-[#FF3E00]" icon="solar:check-circle-bold"></iconify-icon><span>Everything in Accelerate</span></li>
<li className="flex items-center space-x-3 text-sm text-[#FFFFFF] font-medium"><iconify-icon className="text-[#FF3E00]" icon="solar:check-circle-bold"></iconify-icon><span>Private Aviation Command Node</span></li>
<li className="flex items-center space-x-3 text-sm text-[#FFFFFF] font-medium"><iconify-icon className="text-[#FF3E00]" icon="solar:check-circle-bold"></iconify-icon><span>Diplomatic-Level Access</span></li>
<li className="flex items-center space-x-3 text-sm text-[#FFFFFF] font-medium"><iconify-icon className="text-[#FF3E00]" icon="solar:check-circle-bold"></iconify-icon><span>Dedicated Logistics Officer</span></li>
</ul>
<a className="w-full relative group/btn flex items-center justify-center bg-[#FF3E00] text-[#FFFFFF] px-6 py-4 font-mono text-xs uppercase overflow-hidden btn-cut shadow-[0_0_20px_rgba(255,62,0,0.2)] hover:shadow-[0_0_40px_rgba(255,62,0,0.5)] transition-shadow duration-300" href="#apply">
<div className="absolute inset-0 bg-[#FFFFFF] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
<span className="relative z-10 group-hover/btn:text-[#050505] transition-colors duration-300 font-semibold group-hover/btn:tracking-[0.1em]">Initiate Apex</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-[#18181B] text-[#FFFFFF] relative overflow-hidden flex items-center justify-center text-center" id="apply">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[800px] h-[800px] rounded-full border border-[#FF3E00] animate-ring"></div>
<div className="absolute w-[400px] h-[400px] rounded-full border border-[#FF3E00] animate-ring" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
<iconify-icon className="text-5xl text-[#FF3E00] mb-8" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                Stop Accepting<br/>Friction.
            </h2>
<p className="text-lg text-[#A1A1AA] mb-12 max-w-[45ch] font-medium">
                Reclaim your time and secure your growth trajectory today. Only 14 operational slots remain for Q3.
            </p>
<a className="btn-cut relative group inline-flex items-center justify-center bg-[#FF3E00] text-[#FFFFFF] px-12 py-6 font-mono text-xs uppercase overflow-hidden shadow-[0_0_40px_rgba(255,62,0,0.3)] hover:shadow-[0_0_60px_rgba(255,62,0,0.6)] transition-shadow duration-300" href="#">
<div className="absolute inset-0 bg-[#FFFFFF] -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
<span className="relative z-10 flex items-center space-x-3 group-hover:text-[#050505] transition-colors duration-300">
<span className="font-bold group-hover:tracking-[0.2em] transition-all duration-300">Submit Operator Vector</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</section>

<footer className="bg-[#050505] border-t border-[#27272A] pt-20 pb-10">
<div className="max-w-[100rem] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 mb-20">
<div className="md:col-span-4 flex flex-col items-start">
<div className="flex items-center space-x-3 mb-6 relative group cursor-pointer">
<svg className="w-6 h-6 text-[#FF3E00] group-hover:rotate-90 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" viewbox="0 0 100 100">
<polygon fill="none" points="10,90 45,10 90,10 55,90" stroke="currentColor" strokeWidth="8"></polygon>
</svg>
<span className="text-2xl font-semibold tracking-tighter uppercase text-[#FFFFFF]">ZENO</span>
</div>
<p className="text-sm text-[#71717A] max-w-[30ch] mb-8 font-medium">Trust-driven architecture. Scale your time. Command your growth.</p>
</div>
<div className="md:col-span-2 md:col-start-7 flex flex-col space-y-4">
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 border-b border-[#27272A] pb-2 font-semibold">Infrastructure</span>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors" href="#">OS Terminal</a>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors" href="#">Ghost Network</a>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors" href="#">Encryption</a>
</div>
<div className="md:col-span-2 flex flex-col space-y-4">
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 border-b border-[#27272A] pb-2 font-semibold">Protocol</span>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors" href="#">Privacy</a>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors" href="#">Terms of Engagement</a>
</div>
<div className="md:col-span-2 flex flex-col space-y-4">
<span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 border-b border-[#27272A] pb-2 font-semibold">Comms</span>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors flex items-center space-x-2" href="#"><iconify-icon className="text-[#FF3E00]" icon="solar:shield-keyhole-linear"></iconify-icon><span>Secure Channel</span></a>
<a className="text-sm text-[#71717A] hover:text-[#FFFFFF] transition-colors flex items-center space-x-2" href="#"><iconify-icon className="text-[#FF3E00]" icon="solar:radar-linear"></iconify-icon><span>Network Intel</span></a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#27272A]">
<span className="font-mono text-[10px] text-[#71717A] uppercase tracking-widest mb-4 md:mb-0">© 2024 ZENO Corporation. All Rights Reserved.</span>
<div className="flex items-center space-x-3 bg-[#18181B] border border-[#3F3F46] px-4 py-1.5 btn-cut group cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover:shadow-[0_0_8px_#10B981] transition-shadow duration-300"></div>
<span className="font-mono text-[10px] text-[#FFFFFF] uppercase tracking-widest font-semibold">Sys: Secure</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
