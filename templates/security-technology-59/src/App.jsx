import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Ecosystem Interaction Logic
        const nodes = [
            { id: 'monitoring', color: 'cyan' },
            { id: 'panic', color: 'red' },
            { id: 'access', color: 'cyan' },
            { id: 'app', color: 'cyan' },
            { id: 'alerts', color: 'cyan' },
            { id: 'recording', color: 'cyan' }
        ];

        const svgContainer = document.getElementById('lines-svg');
        const container = document.getElementById('ecosystem-container');
        const totem = document.getElementById('totem');
        const totemGlow = document.getElementById('totem-screen-glow');

        // Dynamically draw SVG lines connecting the totem to the nodes
        function drawLines() {
            svgContainer.innerHTML = '';
            
            if(!container || !totem) return;
            const containerRect = container.getBoundingClientRect();
            const totemRect = totem.getBoundingClientRect();
            
            // Calculate center of the totem's screen area relative to the container
            const tX = totemRect.left - containerRect.left + (totemRect.width / 2);
            const tY = totemRect.top - containerRect.top + (totemRect.height * 0.35); // Approx screen height

            nodes.forEach(nodeConfig => {
                const nodeEl = document.getElementById(`node-${nodeConfig.id}`);
                if(nodeEl) {
                    const nodeRect = nodeEl.getBoundingClientRect();
                    const nX = nodeRect.left - containerRect.left + (nodeRect.width / 2);
                    const nY = nodeRect.top - containerRect.top + (nodeRect.height / 2);

                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', tX);
                    line.setAttribute('y1', tY);
                    line.setAttribute('x2', nX);
                    line.setAttribute('y2', nY);
                    line.setAttribute('id', `line-${nodeConfig.id}`);
                    line.setAttribute('class', 'stroke-slate-700/40 transition-all duration-500');
                    line.setAttribute('stroke-width', '1.5');
                    svgContainer.appendChild(line);
                }
            });
        }

        // Handle Hover Interactions
        function initInteractions() {
            nodes.forEach(nodeConfig => {
                const nodeEl = document.getElementById(`node-${nodeConfig.id}`);
                
                if(nodeEl) {
                    nodeEl.addEventListener('mouseenter', () => {
                        const lineEl = document.getElementById(`line-${nodeConfig.id}`);
                        if(lineEl) {
                            // Highlight the connection line
                            lineEl.classList.remove('stroke-slate-700/40');
                            if(nodeConfig.color === 'red') {
                                lineEl.classList.add('stroke-red-500');
                                lineEl.style.filter = 'drop-shadow(0 0 6px rgba(239,68,68,0.8))';
                                totemGlow.classList.remove('bg-cyan-500/0');
                                totemGlow.classList.add('bg-red-500/50');
                            } else {
                                lineEl.classList.add('stroke-cyan-400');
                                lineEl.style.filter = 'drop-shadow(0 0 6px rgba(34,211,238,0.8))';
                                totemGlow.classList.remove('bg-cyan-500/0');
                                totemGlow.classList.add('bg-cyan-500/50');
                            }
                            
                            // Emphasize totem reaction
                            totemGlow.classList.remove('opacity-0');
                            totemGlow.classList.add('opacity-100', 'scale-110');
                            totem.classList.add('scale-[1.02]');
                        }
                    });

                    nodeEl.addEventListener('mouseleave', () => {
                        const lineEl = document.getElementById(`line-${nodeConfig.id}`);
                        if(lineEl) {
                            // Reset line
                            lineEl.classList.add('stroke-slate-700/40');
                            lineEl.classList.remove('stroke-cyan-400', 'stroke-red-500');
                            lineEl.style.filter = 'none';

                            // Reset totem
                            totemGlow.classList.add('opacity-0', 'bg-cyan-500/0');
                            totemGlow.classList.remove('opacity-100', 'scale-110', 'bg-red-500/50', 'bg-cyan-500/50');
                            totem.classList.remove('scale-[1.02]');
                        }
                    });
                }
            });
        }

        // Initialize and handle responsive updates
        window.addEventListener('load', () => {
            setTimeout(() => {
                drawLines();
                initInteractions();
            }, 150); // Small delay to ensure external image layout is calculated
        });
        
        // Redraw lines on window resize to maintain connections
        window.addEventListener('resize', () => {
            requestAnimationFrame(drawLines);
        });
        
        // Continuously observe floating animation shifts slightly for perfect connections
        // (Using interval is simpler for a purely vanilla HTML standard without complex observer loops)
        setInterval(() => {
            requestAnimationFrame(drawLines);
        }, 50);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[100px] rounded-full"></div>
</div>
<main className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-24 min-h-screen flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

<div className="w-full lg:w-5/12 flex flex-col items-start z-30 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-sm font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                System Active
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight text-white">
                Centralized Logic. <br/>
<span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">Unified Security.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                Transform your infrastructure into a proactive ecosystem. Our smart kiosk seamlessly orchestrates continuous surveillance, instant alerts, and total access control in real-time.
            </p>
<div className="flex items-center gap-6 pt-4">
<button className="px-8 py-4 rounded-full bg-slate-100 hover:bg-white text-slate-950 font-medium transition-transform hover:scale-105 duration-300 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Deploy System
                </button>
<button className="px-8 py-4 rounded-full bg-transparent hover:bg-slate-800/50 text-slate-200 font-medium transition-colors border border-slate-700 hover:border-slate-500 inline-flex items-center gap-2">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
                    View Demo
                </button>
</div>
</div>

<div className="w-full lg:w-7/12 relative h-[700px] lg:h-[800px] flex items-center justify-center mt-12 lg:mt-0" id="ecosystem-container">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" id="lines-svg"></svg>

<div className="relative z-20 w-44 md:w-56 transition-transform duration-700 ease-out" id="totem">

<div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4/5 h-[40%] bg-cyan-500/0 blur-[40px] rounded-full transition-all duration-500 opacity-0 pointer-events-none" id="totem-screen-glow"></div>
<div className="relative rounded-2xl p-2 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<img alt="Security Totem" className="w-full h-auto rounded-xl object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/60 blur-xl rounded-[100%]"></div>
</div>


<div className="absolute top-[2%] md:top-[8%] left-[0%] md:left-[5%] z-30 w-44 md:w-56 group cursor-pointer float-anim" id="node-monitoring" style={{animationDelay: '0s'}}>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3.5 transition-all duration-500 ease-out group-hover:bg-slate-800/80 group-hover:border-cyan-500/50 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="cctv" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300">24/7 Monitoring</h3>
</div>
<div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-slate-400 font-light leading-relaxed">Continuous visual surveillance powered by deep learning for maximum security.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[40%] left-[-5%] md:left-[2%] z-30 w-44 md:w-56 group cursor-pointer float-anim" id="node-panic" style={{animationDelay: '-1.2s'}}>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3.5 transition-all duration-500 ease-out group-hover:bg-slate-800/80 group-hover:border-red-500/50 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-red-400 group-hover:bg-red-500/10 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="alert-triangle" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300">Panic Button</h3>
</div>
<div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-slate-400 font-light leading-relaxed">Instantly trigger emergency protocols and notify central dispatch.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[2%] md:bottom-[8%] left-[0%] md:left-[5%] z-30 w-44 md:w-56 group cursor-pointer float-anim" id="node-access" style={{animationDelay: '-2.4s'}}>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3.5 transition-all duration-500 ease-out group-hover:bg-slate-800/80 group-hover:border-cyan-500/50 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="scan-face" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300">Access Control</h3>
</div>
<div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-slate-400 font-light leading-relaxed">Frictionless entry via biometric verification and intelligent credentialing.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[2%] md:top-[8%] right-[0%] md:right-[5%] z-30 w-44 md:w-56 group cursor-pointer float-anim" id="node-app" style={{animationDelay: '-0.6s'}}>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3.5 transition-all duration-500 ease-out group-hover:bg-slate-800/80 group-hover:border-cyan-500/50 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300">Mobile App</h3>
</div>
<div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-slate-400 font-light leading-relaxed">Full system control, live feeds, and remote management from anywhere.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[40%] right-[-5%] md:right-[2%] z-30 w-44 md:w-56 group cursor-pointer float-anim" id="node-alerts" style={{animationDelay: '-1.8s'}}>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3.5 transition-all duration-500 ease-out group-hover:bg-slate-800/80 group-hover:border-cyan-500/50 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="bell-ring" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300">Real-time Alerts</h3>
</div>
<div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-slate-400 font-light leading-relaxed">Instant contextual notifications routed instantly to response teams.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[2%] md:bottom-[8%] right-[0%] md:right-[5%] z-30 w-44 md:w-56 group cursor-pointer float-anim" id="node-recording" style={{animationDelay: '-3s'}}>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-3.5 transition-all duration-500 ease-out group-hover:bg-slate-800/80 group-hover:border-cyan-500/50 group-hover:-translate-y-1 shadow-lg group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors duration-300">Event Recording</h3>
</div>
<div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="pt-3 text-sm text-slate-400 font-light leading-relaxed">Secure, encrypted cloud storage for all events with rapid retrieval.</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
