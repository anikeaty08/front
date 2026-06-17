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



            const canvas = document.getElementById('grid-canvas');
            const ctx = canvas.getContext('2d');
            
            let cx, cy;
            const focalLength = 300;
            const cameraZ = -100;
            
            // Camera position variables for mouse interaction
            let cameraX = 0;
            let cameraY = -70;
            let targetCameraX = 0;
            let targetCameraY = -70;
    
            // Mouse tracking
            window.addEventListener('mousemove', (e) => {
                const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
                targetCameraX = mouseX * 600; 
                targetCameraY = -70 + mouseY * 40;
            });
    
            function resizeCanvas() {
                const container = canvas.parentElement;
                const width = container.clientWidth;
                const height = container.clientHeight;
                
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
                
                cx = width / 2;
                cy = height * 0.35;
            }
    
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
    
            function project(x, y, z) {
                const dz = z - cameraZ;
                if (dz <= 0) return null;
                const scale = focalLength / dz;
                return {
                    x: cx + (x - cameraX) * scale,
                    y: cy + (y - cameraY) * scale
                };
            }
    
            const gridZMin = 0;
            const gridZMax = 3000;
            const gridXMin = -4000;
            const gridXMax = 4000;
            const spacing = 90;
    
            let zOffset = 0;
            const speed = 2;
    
            const streams = [
                { x: -600, z: 500, length: 500, speed: 7, color: '#3b82f6' },
                { x: -200, z: 1200, length: 350, speed: 10, color: '#60a5fa' },
                { x: 300, z: 200, length: 600, speed: 12, color: '#3b82f6' },
                { x: 700, z: 800, length: 450, speed: 8, color: '#93c5fd' },
                { x: 0, z: 1800, length: 700, speed: 14, color: '#3b82f6' },
                { x: -1200, z: 900, length: 400, speed: 9, color: '#60a5fa' },
                { x: 1100, z: 1500, length: 550, speed: 11, color: '#93c5fd' }
            ];
    
            // Vertical Beams Setup
            const beams = [0, 1, 2, 3, 4].map(id => document.getElementById(`beam-${id}`));
            const beamStates = beams.map(() => ({
                y: Math.random() * -1000,
                speed: 1.5 + Math.random() * 2
            }));
    
            function animate() {
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                ctx.clearRect(0, 0, w, h);
                
                // Smooth camera interpolation
                cameraX += (targetCameraX - cameraX) * 0.03;
                cameraY += (targetCameraY - cameraY) * 0.03;
    
                // Animate Vertical Beams
                beams.forEach((beam, i) => {
                    beamStates[i].y += beamStates[i].speed;
                    if (beamStates[i].y > window.innerHeight) {
                        beamStates[i].y = -300;
                    }
                    beam.style.transform = `translateY(${beamStates[i].y}px)`;
                });
                
                zOffset = (zOffset + speed) % spacing;
                ctx.lineWidth = 1;
    
                for (let x = gridXMin; x <= gridXMax; x += spacing) {
                    const p1 = project(x, 0, gridZMin);
                    const p2 = project(x, 0, gridZMax);
                    if (p1 && p2) {
                        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                        grad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
                        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                        ctx.strokeStyle = grad;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
    
                for (let z = gridZMin; z <= gridZMax; z += spacing) {
                    const actualZ = z - zOffset;
                    if (actualZ < gridZMin) continue;
                    
                    const p1 = project(gridXMin, 0, actualZ);
                    const p2 = project(gridXMax, 0, actualZ);
                    
                    if (p1 && p2) {
                        const alpha = Math.max(0, 1 - (actualZ / gridZMax));
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
    
                streams.forEach(s => {
                    s.z -= s.speed;
                    if (s.z < gridZMin - s.length) {
                        s.z = gridZMax;
                    }
                    
                    const startZ = Math.max(gridZMin, s.z);
                    const endZ = Math.min(gridZMax, s.z + s.length);
                    
                    if (startZ < endZ) {
                        const p1 = project(s.x, 0, startZ);
                        const p2 = project(s.x, 0, endZ);
                        
                        if (p1 && p2) {
                            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                            grad.addColorStop(0, s.color);
                            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                            
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = grad;
                            ctx.lineWidth = 2;
                            ctx.shadowBlur = 12;
                            ctx.shadowColor = s.color;
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                });
    
                requestAnimationFrame(animate);
            }
    
            animate();
        
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
      

<header className="sticky z-50 bg-slate-50/80 border-slate-200/60 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-3xl font-semibold text-slate-900 tracking-tighter">
                MIKE MANZI
            </div>
<a className="inline-flex items-center justify-center transition-colors hover:bg-[#1E3A8A]/90 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/50 focus:ring-offset-2 text-base font-medium text-white bg-blue-700 rounded-lg pt-2 pr-4 pb-2 pl-4" href="#cta">
                Get The System
            </a>
</div>
</header>

<div className="bg-[#0a0a0a] min-h-screen flex flex-col relative overflow-x-hidden antialiased selection:bg-blue-500/30 selection:text-blue-200 text-white" style={{fontFamily: '\'Inter\', sans-serif'}}>


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&amp;display=swap" rel="stylesheet"/>

<div className="fixed inset-0 pointer-events-none flex justify-center z-0 overflow-hidden">
<div className="w-full max-w-7xl flex justify-between px-8">
<div className="w-px h-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white/40 to-transparent" id="beam-0">
</div>
</div>
<div className="w-px h-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-white/30 to-transparent" id="beam-1">
</div>
</div>
<div className="w-px h-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent" id="beam-2">
</div>
</div>
<div className="w-px h-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-white/30 to-transparent" id="beam-3">
</div>
</div>
<div className="w-px h-full bg-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white/40 to-transparent" id="beam-4">
</div>
</div>
</div>
</div>
<main className="flex-1 flex flex-col w-full z-10 relative items-center">
<div className="flex flex-col w-full max-w-7xl max-h-full mt-40 mr-auto ml-auto pr-6 pl-6 items-center">

<h1 className="leading-[1.15] sm:text-4xl md:text-6xl text-3xl font-bold text-center max-w-5xl mt-30 mr-auto ml-auto">
<span className="text-7xl font-black text-white tracking-normal text-center mr-- mb-30 ml--">Build Predictable Pipeline and Close More Deals Using Proven Sales Systems</span><span className="block sm:text-xl leading-relaxed text-lg font-light text-slate-400 tracking-normal max-w-2xl mt-10 mr-auto ml-auto">For B2B Founders, sales reps and Sales Leaders who want structured outreach, higher reply rates, and a repeatable systems to generate qualified meetings consistently</span><span className="mt-12 w-full max-w-4xl mx-auto relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-video shadow-[0_0_60px_-15px_rgba(59,130,246,0.2)] flex items-center justify-center group cursor-pointer z-20 transition-transform duration-700 hover:-translate-y-1">
<span className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-white/5 opacity-50 pointer-events-none"></span>
<img alt="Video Presentation Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay saturate-50" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<span className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90"></span>
<span className="relative z-10 w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500 ease-out">
<svg className="w-[40px] h-[40px] ml-2 drop-shadow-lg" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '40px', height: '40px'}} viewbox="0 0 24 24">
<path d="M7 4v16l13-8z"></path>
</svg>
</span>
<span className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
</span>
<span className="text-xs font-semibold text-slate-200 tracking-widest uppercase">The Pipeline Framework</span>
</span>
<span className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg tracking-wider flex items-center z-10">
        14:20
    </span>
</span>
</h1>

<div className="flex flex-col sm:flex-row w-full mt-10 gap-x-4 gap-y-4 items-center justify-center">
<button className="hover:bg-gray-100 transition-colors [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.3)_noise(0.5,1,0)] sm:w-auto text-2xl font-light text-slate-50 bg-blue-700 w-full border-slate-50 rounded-2xl mt-8 mb-8 pt-3 pr-6 pb-3 pl-6 shadow-sm">Get The Sales System Now -&gt;</button>
</div>
</div>

<div className="mt-24 relative w-full h-[45vh] min-h-[300px] flex justify-center items-end overflow-hidden">

<canvas className="w-full h-full absolute bottom-0 left-0" height="391" id="grid-canvas" width="1901"></canvas>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent">
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#111] border border-gray-800 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.6)] px-3 py-2 flex items-center gap-3 z-20">
<div className="flex items-center gap-2 text-gray-400">
<iconify-icon className="text-white text-xs" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-mono tracking-tight font-extralight">synchronizing feed...</span>
</div>
<div className="w-px h-3 bg-gray-800"></div>
<div className="flex items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-light leading-none">
                            R</div>
</div>
</div>
</div>
</main>

</div>

<section className="border-y border-slate-200/60 pt-20 pb-20 bg-slate-200">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center bg-slate-200 mb-24">
<p className="uppercase text-sm font-medium text-slate-500 tracking-widest mb-8">Strategies used by top performers at</p>
<div className="flex flex-wrap md:gap-16 bg-slate-50 opacity-60 grayscale gap-x-8 gap-y-8 justify-center">
<span className="text-xl font-semibold tracking-tighter text-slate-900">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter text-slate-900">GLOBEX</span>
<span className="text-xl font-semibold text-slate-900 tracking-tighter">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter text-slate-900">INITECH</span>
<span className="text-xl font-semibold tracking-tighter text-slate-900">UMBRELLA</span>
</div>
</div>
<div className="text-center max-w-3xl mr-auto mb-16 ml-auto">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why you're missing revenue targets</h2>
<p className="text-lg text-slate-700">If your pipeline is dry, it's not a motivation problem. It's a system problem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">

<div className="text-gray-800 bg-blue-950 border-slate-200/60 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Inconsistent Pipeline</h3>
<p className="text-sm text-gray-100">Some months are strong. Others are dry. There’s no predictable system behind your meetings.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Winging Outreach</h3>
<p className="text-sm text-gray-100">You’re sending emails and LinkedIn messages without a structured framework that consistently converts.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:mailbox-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Low Reply Rates</h3>
<p className="text-sm text-gray-100">Your cold emails and messages aren’t getting responses — and you don’t know what to fix.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">No Clear Process</h3>
<p className="text-sm text-gray-100">There’s no defined structure from prospecting to close. Reps rely on personality instead of process.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Leadership Struggles</h3>
<p className="text-sm text-gray-100">You’ve been promoted, but you were never taught how to actually lead, coach, and hold reps accountable.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Unproductive 1:1s</h3>
<p className="text-sm text-gray-100">Your sales meetings lack structure and don’t drive actual performance improvements.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Hiring Won't Fix It</h3>
<p className="text-sm text-gray-100">You’re adding headcount (SDRs) without fixing the underlying broken outbound system.</p>
</div>

<div className="bg-blue-950 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-50 tracking-tight mb-2">Reactive Revenue</h3>
<p className="text-sm text-gray-100">Instead of driving pipeline, you’re constantly reacting to missed targets and stalled deals.</p>
</div>
</div>
</div>
</section>

<section className="text-white bg-blue-950 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="lg:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Sales execution - Simplified.</h2>
<p className="leading-relaxed text-base text-zinc-300 bg-blue-950 mb-8">Mike Manzi built Official Sales Tips by sharing practical, real-world sales strategies used inside high-performing B2B sales teams not theory, not motivation, not recycled LinkedIn quotes.</p>
<ul className="space-y-4">
<li className="flex items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-50">Tactical, not theoretical</span>
</li>
<li className="flex text-slate-50 items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">Framework-driven, not personality-driven</span>
</li>
<li className="flex text-slate-50 items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">Focused on systems over hype</span>
</li>
<li className="flex text-slate-50 items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">Built from real sales leadership experience</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-50">Designed for modern B2B outreach (email + LinkedIn)</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-50">Centered on predictable pipeline creation</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#3b82f6] text-xl mr-3 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-50">Structured around accountability and repeatability</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/20 to-transparent rounded-2xl blur-2xl"></div>
<div className="text-blue-700 bg-slate-900 border-slate-700 border rounded-2xl px-8 py-8 relative backdrop-blur-sm">
<div className="flex items-center space-x-4 mb-6">
<div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center font-semibold text-white tracking-tighter">MM</div>
<div className="">
<div className="text-sm font-medium text-white">Mike Manzi</div>
<div className="text-xs text-slate-400">Founder, Official Sales Tips</div>
</div>
</div>
<p className="text-lg font-medium text-slate-200 italic mb-6">
                        "Sales is a system. If you fix the system, you fix the results. Stop relying on hope and start executing a framework."
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-200 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Results from the trenches</h2>
<p className="text-lg text-slate-700">Frameworks driving real pipeline for real teams.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="aspect-[3/4] rounded-xl bg-slate-100 border border-slate-200/60 relative flex items-center justify-center overflow-hidden group cursor-pointer">
<div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-slate-800 transition-transform group-hover:scale-105 z-10">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-slate-500 bg-white/90 backdrop-blur px-2 py-1 rounded-md z-10">VIDEO PLACEHOLDER</span>
</div>

<div className="aspect-[3/4] rounded-xl bg-slate-100 border border-slate-200/60 relative flex items-center justify-center overflow-hidden group cursor-pointer">
<div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-slate-800 transition-transform group-hover:scale-105 z-10">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-slate-500 bg-white/90 backdrop-blur px-2 py-1 rounded-md z-10">VIDEO PLACEHOLDER</span>
</div>

<div className="aspect-[3/4] rounded-xl bg-slate-100 border border-slate-200/60 relative flex items-center justify-center overflow-hidden group cursor-pointer">
<div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-slate-800 transition-transform group-hover:scale-105 z-10">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-slate-500 bg-white/90 backdrop-blur px-2 py-1 rounded-md z-10">VIDEO PLACEHOLDER</span>
</div>

<div className="aspect-[3/4] rounded-xl bg-slate-100 border border-slate-200/60 relative flex items-center justify-center overflow-hidden group cursor-pointer">
<div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-slate-800 transition-transform group-hover:scale-105 z-10">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-slate-500 bg-white/90 backdrop-blur px-2 py-1 rounded-md z-10">VIDEO PLACEHOLDER</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="text-pink-600 bg-pink-700 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-50 bg-pink-700 mb-6">"[Testimonial Text Placeholder. The frameworks provided here completely changed how our SDR team operates. Reply rates doubled in 30 days.]"</p>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Name Placeholder</div>
<div className="text-xs text-slate-50">Title – Company</div>
</div>

<div className="bg-pink-700 border-slate-200/60 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-50 mb-6">"[Testimonial Text Placeholder. Finally, a sales leader who gives actual tactical advice instead of fluff. The 1:1 structure alone is worth it.]"</p>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Name Placeholder</div>
<div className="text-xs text-slate-50">Title – Company</div>
</div>

<div className="bg-pink-700 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-50 mb-6">"[Testimonial Text Placeholder. We installed the predictable pipeline system and immediately saw exactly where our bottlenecks were.]"</p>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Name Placeholder</div>
<div className="text-xs text-slate-50">Title – Company</div>
</div>

<div className="bg-pink-700 border-slate-200/60 border rounded-xl px-6 py-6">
<div className="flex text-yellow-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-50 mb-6">"[Testimonial Text Placeholder. Stop guessing on cold emails. Use these templates. They just work. Highly recommended for any founder.]"</p>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Name Placeholder</div>
<div className="text-xs text-slate-50">Title – Company</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-blue-950 border-slate-200/60 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold text-slate-50 tracking-tight bg-blue-950 mb-4">The Implementation Process</h2>
<p className="text-lg text-slate-50">Sales success comes from installing systems, not hoping for better effort.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="text-slate-200 bg-slate-200 border-slate-200/60 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-4xl font-semibold text-gray-950/10 tracking-tighter absolute top-4 right-6">01</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 mt-4 tracking-tight">Define the ICP Clearly</h3>
<p className="text-sm text-gray-950">Clarify exactly who you’re targeting so outreach isn’t wasted on non-buyers.</p>
</div>

<div className="bg-slate-200 border-slate-200/60 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-4xl font-semibold text-[#1E3A8A]/10 absolute top-4 right-6 tracking-tighter">02</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 mt-4 tracking-tight">Install Proven Templates</h3>
<p className="text-sm text-gray-950">Use structured email and LinkedIn messaging frameworks instead of guessing.</p>
</div>

<div className="bg-slate-200 border-slate-200/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="text-4xl font-semibold text-[#1E3A8A]/10 tracking-tighter absolute top-4 right-6">03</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight mt-4 mb-2">Consistent Cadence</h3>
<p className="text-sm text-gray-950">Create predictable outbound activity using repeatable, daily systems.</p>
</div>

<div className="bg-slate-200 border-slate-200/60 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-4xl font-semibold text-slate-900/10 tracking-tighter absolute top-4 right-6">04</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 mt-4 tracking-tight">Structured Conversations</h3>
<p className="text-sm text-slate-950">Apply defined frameworks to discovery and objection handling.</p>
</div>

<div className="bg-slate-200 border-slate-200/60 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-4xl font-semibold text-[#1E3A8A]/10 absolute top-4 right-6 tracking-tighter">05</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 mt-4 tracking-tight">Improve Leadership</h3>
<p className="text-sm text-gray-950">Install structured 1:1s and coaching systems to drive real rep performance.</p>
</div>

<div className="bg-slate-200 border-slate-200/60 border rounded-2xl px-6 py-6 relative shadow-sm">
<div className="text-4xl font-semibold text-[#1E3A8A]/10 absolute top-4 right-6 tracking-tighter">06</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 mt-4 tracking-tight">Optimize via Metrics</h3>
<p className="text-sm text-gray-950">Track reply rates, meeting rates, and pipeline conversion to improve.</p>
</div>
</div>
</div>
</section>

<section className="bg-blue-950 border-blue-950 pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-slate-50 tracking-tight text-center mb-10">Inside the Playbook</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Proven sales email templates</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">LinkedIn messaging frameworks</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Prospecting cadence structure</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Sales conversation frameworks</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Objection handling scripts</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon className="" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Leadership 1:1 structure guidance</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Pipeline tracking methodology</span>
</div>
<div className="flex items-center p-4 rounded-xl bg-[#FAFAFA] border border-slate-200/60">
<div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-[#1E3A8A] mr-4 shrink-0">
<iconify-icon icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">Practical implementation (no theory)</span>
</div>
</div>
</div>
</section>

<section className="text-blue-950 bg-slate-200 pt-12 pb-12">
<div className="max-w-4xl mx-auto px-6">
<div className="md:p-12 overflow-hidden text-center bg-slate-300 border-[#1E3A8A]/20 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-50"></div>
<h2 className="text-balance md:text-4xl text-2xl font-semibold text-slate-900 mb-6">
                    Install a predictable sales system that generates consistent meetings and pipeline growth.
                </h2>
<p className="text-lg text-slate-800 max-w-xl mr-auto mb-8 ml-auto">
                    Stop guessing what to fix and stop hiring more reps hoping it solves the problem. Get the exact frameworks.
                </p>
<div className="inline-flex text-sm font-medium text-slate-50 bg-pink-700 border-green-200 border rounded-full mb-8 px-3 py-1 items-center">
<iconify-icon className="mr-2 text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                    [Guarantee Structure Placeholder]
                </div>
<div className="">
<a className="inline-flex items-center justify-center transition-colors hover:bg-[#1E3A8A]/90 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/50 focus:ring-offset-2 sm:w-auto text-lg font-medium text-white bg-blue-700 w-full rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#cta">
                        Access The Sales System
                    </a>
</div>
</div>
</div>
</section>

<section className="text-[#ffffff] bg-slate-200 border-slate-200/60 border-t pt-24 pb-24">
<div className="grid grid-cols-1 md:grid-cols-12 bg-slate-300 max-w-5xl rounded-lg mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-16 items-center">
<div className="md:col-span-5 flex justify-center">
<div className="aspect-square w-full max-w-sm rounded-2xl bg-slate-100 border border-slate-200/60 overflow-hidden relative">
<div className="flex flex-col cursor-pointer text-slate-400 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="window.location.href='https://www.linkedin.com/in/mikemanzi7/'" role="button">
<iconify-icon className="text-6xl mb-2" icon="solar:user-circle-linear" strokeWidth="1"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Mike Manzi</span>
</div>
</div>
</div>
<div className="md:col-span-7 text-slate-50 bg-slate-300">
<div className="inline-block uppercase text-xs font-medium text-slate-600 tracking-wide bg-slate-100 rounded-full mt-8 mb-4 pt-1 pr-3 pb-1 pl-3">
                    About The Founder
                </div>
<h2 className="text-3xl font-semibold text-gray-800 tracking-tight bg-slate-300 mb-6">Mike Manzi</h2>
<div className="space-y-4 text-base text-slate-600 leading-relaxed">
<p className="">Mike Manzi is a sales leader and founder of Official Sales Tips. He built his platform by sharing tactical, no-fluff sales frameworks across social platforms.</p>
<p className="">He has helped hundreds of thousands of sales professionals improve their outreach, pipeline creation, and leadership systems. His background includes leading B2B sales teams and building structured processes focused on repeatability and accountability.</p>
<p className="font-medium text-gray-800 tracking-tighter border-slate-200/60 border-t my-2 py-6">His philosophy is simple: Sales is a system. If you fix the system, you fix the results.

</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-blue-950 border-slate-200/60 py-24">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-50 tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">Who is this for?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        B2B sales reps, founders, and sales leaders who want predictable pipeline and structured outreach systems.
                    </div>
</details>

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">Is this only for large sales teams?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        No — the frameworks apply whether you’re a solo founder or leading a team.
                    </div>
</details>

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">Do I need SDRs for this to work?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        No — the focus is on installing the right outreach and sales systems first.
                    </div>
</details>

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">Will this help with low reply rates?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        Yes — the outreach frameworks are designed to improve response rates by focusing on structure and clarity.
                    </div>
</details>

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">Is this theory or practical?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        Everything is built from real-world sales leadership experience and practical implementation. No fluff.
                    </div>
</details>

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">How quickly can I implement this?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        The systems are designed to be installed immediately into your current workflow.
                    </div>
</details>

<details className="group rounded-xl border border-slate-200/60 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium select-none">
<span className="text-base tracking-tight">Do I need to change my CRM?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-100 transition duration-300 group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl text-slate-400 opacity-0 transition duration-300 group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500">
                        No — these frameworks work within your existing tools.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-blue-950 pt-24 pb-24" id="cta">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-50 tracking-tight bg-blue-950 mb-6">
                Stop Winging Sales. Install a System That Produces Predictable Pipeline.
            </h2>
<p className="text-base text-slate-200 text-center mb-10">Schedule a call to see how we can install these frameworks directly into your team's workflow.</p>

<div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/60 shadow-sm p-2 mb-8 h-[600px] flex items-center justify-center flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-slate-50/50"></div>
<iconify-icon className="text-4xl text-slate-300 mb-4 relative z-10" icon="solar:calendar-date-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-500 relative z-10">[Calendly Embed Placeholder]</span>
</div>
<button className="inline-flex transition-colors hover:bg-[#1E3A8A]/90 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/50 focus:ring-offset-2 text-base font-medium text-white bg-pink-700 rounded-lg px-8 py-4 shadow-sm items-center justify-center">
                Get Started Now
            </button>
</div>
</section>

<footer className="text-center bg-slate-50 border-slate-200/60 border-t pt-8 pb-8">
<div className="max-w-7xl mx-auto px-6">
<p className="uppercase text-xs font-medium text-slate-950 tracking-widest">
                © Official Sales Tips. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
