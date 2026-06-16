import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- 1. LOADER & INIT ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    initPhysics();
                    startSimulation();
                }, 800);
            }, 1000);
        });

        // --- 2. PHYSICS ENGINE (BACKGROUND) ---
        function initPhysics() {
            const canvas = document.getElementById('security-canvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            class Particle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.size = Math.random() * 2;
                    this.opacity = Math.random() * 0.5;
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x < 0) this.x = width;
                    if (this.x > width) this.x = 0;
                    if (this.y < 0) this.y = height;
                    if (this.y > height) this.y = 0;
                }
                draw() {
                    ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            for(let i=0; i<100; i++) particles.push(new Particle());

            function animate() {
                ctx.clearRect(0, 0, width, height);
                // Draw connecting lines
                ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
                ctx.lineWidth = 0.5;
                for(let i=0; i<particles.length; i++) {
                    for(let j=i+1; j<particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        if(dist < 100) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                    particles[i].update();
                    particles[i].draw();
                }
                requestAnimationFrame(animate);
            }
            animate();
        }

        // --- 3. DLP SIMULATION LOGIC ---
        let aiActive = false;
        let packetsScanned = 0;
        let threatsBlocked = 0;
        const simulationLayer = document.getElementById('simulation-layer');
        const logContainer = document.getElementById('log-container');
        const actionLog = document.getElementById('action-log');

        // Toggle Logic
        const toggleBtn = document.getElementById('toggle-ai');
        const toggleKnob = document.getElementById('toggle-knob');
        const aiCoreRing = document.getElementById('ai-core-ring');
        const radarSweep = document.getElementById('radar-sweep');
        const aiIcon = document.getElementById('ai-icon');

        toggleBtn.addEventListener('click', () => {
            aiActive = !aiActive;
            if(aiActive) {
                toggleKnob.style.transform = 'translateX(24px)';
                toggleKnob.style.backgroundColor = '#3B82F6';
                aiCoreRing.style.borderColor = '#3B82F6';
                aiCoreRing.style.boxShadow = '0 0 20px #3B82F6';
                radarSweep.style.opacity = '1';
                aiIcon.style.color = '#3B82F6';
                addLog('SYSTEM', 'Neural IDS Activated', 'text-blue-400');
            } else {
                toggleKnob.style.transform = 'translateX(0)';
                toggleKnob.style.backgroundColor = '#6B7280';
                aiCoreRing.style.borderColor = '#374151';
                aiCoreRing.style.boxShadow = 'none';
                radarSweep.style.opacity = '0';
                aiIcon.style.color = '#6B7280';
                addLog('SYSTEM', 'Neural IDS Standby', 'text-gray-500');
            }
        });

        function addLog(source, msg, colorClass = 'text-gray-400') {
            const div = document.createElement('div');
            const time = new Date().toLocaleTimeString('en-US', {hour12:false, hour:'2-digit', minute:'2-digit', second:'2-digit'});
            div.innerHTML = `<span class="text-gray-600">[${time}]</span> <span class="${colorClass}">${source}:</span> ${msg}`;
            logContainer.prepend(div);
            if(logContainer.children.length > 8) logContainer.lastChild.remove();
        }

        function addAction(msg, type='info') {
            const div = document.createElement('div');
            const color = type === 'block' ? 'text-red-400' : 'text-green-400';
            div.className = `${color} border-l-2 ${type === 'block' ? 'border-red-500' : 'border-green-500'} pl-2`;
            div.innerText = msg;
            actionLog.prepend(div);
            if(actionLog.children.length > 5) actionLog.lastChild.remove();
        }

        function createPacket() {
            if(document.hidden) return;

            const packet = document.createElement('div');
            const isThreat = Math.random() > 0.7;
            
            packet.className = 'packet';
            packet.style.backgroundColor = '#FFFFFF';
            
            const startY = Math.random() * 80 + 10;
            packet.style.top = startY + '%';
            packet.style.left = '0%';
            
            simulationLayer.appendChild(packet);

            let pos = 0;
            const speed = 0.5 + Math.random() * 0.5;
            const id = Math.random().toString(36).substr(2, 5);

            const interval = setInterval(() => {
                pos += speed;
                packet.style.left = pos + '%';

                if (pos > 45 && pos < 55) {
                    if (aiActive) {
                        packet.style.backgroundColor = isThreat ? '#EF4444' : '#3B82F6';
                        
                        if (pos > 48 && pos < 49) {
                            packetsScanned++;
                            document.getElementById('packets-scanned').innerText = packetsScanned;
                            
                            if (isThreat) {
                                clearInterval(interval);
                                packet.style.transform = 'scale(2)';
                                packet.style.opacity = '0';
                                
                                const block = document.createElement('div');
                                block.className = 'absolute border border-red-500 rounded-full animate-ping';
                                block.style.left = '50%';
                                block.style.top = startY + '%';
                                block.style.width = '20px';
                                block.style.height = '20px';
                                simulationLayer.appendChild(block);
                                setTimeout(() => block.remove(), 500);

                                threatsBlocked++;
                                document.getElementById('threats-blocked').innerText = threatsBlocked;
                                document.getElementById('threat-bar').style.width = Math.min(100, (threatsBlocked/packetsScanned)*500) + '%';
                                document.getElementById('threat-score').innerText = 'HIGH';
                                
                                addLog('NET', `Anomaly Detected: ${id}`, 'text-red-500');
                                addAction(`BLOCKED: Exfiltration attempt ${id}`, 'block');
                                setTimeout(() => packet.remove(), 200);
                                return;
                            }
                        }
                    } else {
                        packet.style.backgroundColor = '#E5E7EB';
                    }
                }

                if (pos > 100) {
                    clearInterval(interval);
                    packet.remove();
                    if(isThreat && !aiActive) {
                        addLog('ALERT', `DLP Breach! ${id}`, 'text-red-500 font-bold');
                    }
                }
            }, 16);
        }

        function startSimulation() {
            setInterval(createPacket, 800);
        }

        // --- 4. CURSOR LOGIC ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            setTimeout(() => {
                cursorRing.style.left = e.clientX + 'px';
                cursorRing.style.top = e.clientY + 'px';
            }, 50);
        });

        document.querySelectorAll('a, button, input, textarea, .group').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '50px';
                cursorRing.style.height = '50px';
                cursorRing.style.borderColor = '#3B82F6';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '30px';
                cursorRing.style.height = '30px';
                cursorRing.style.borderColor = 'rgba(59, 130, 246, 0.4)';
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor-dot"></div>
<div id="cursor-ring"></div>
<div id="loader">
<div className="flex flex-col items-center gap-4">
<div className="flex items-center gap-2 text-blue-500">
<iconify-icon icon="solar:shield-warning-linear" width="48"></iconify-icon>
</div>
<div className="font-code text-xs text-gray-500 tracking-[0.3em]">INITIALIZING PROFILE_CORE</div>
<div className="w-48 h-[1px] bg-gray-900 overflow-hidden relative">
<div className="absolute inset-0 bg-blue-500 w-full origin-left animate-[growth_1.5s_ease-in-out]"></div>
</div>
</div>
</div>
<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" id="security-canvas"></canvas>
<nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
<div className="flex items-center gap-3 group cursor-none">
<div className="text-blue-500 transition-transform group-hover:rotate-180 duration-700">
<iconify-icon icon="solar:atom-linear" width="28"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white tracking-tight font-orbitron">ROHIT</span>
</div>
<div className="hidden md:flex gap-10 font-rajdhani font-medium text-sm tracking-widest text-gray-400">
<a className="hover:text-blue-400 transition-colors block" href="#detection">ENGINEERING</a>
<a className="hover:text-blue-400 transition-colors block" href="#skills">CAPABILITIES</a>
<a className="hover:text-blue-400 transition-colors block" href="#experience">TIMELINE</a>
<a className="hover:text-blue-400 transition-colors block" href="#credentials">CREDENTIALS</a>
</div>
<div className="flex items-center gap-4">
<div className="font-code text-[10px] text-green-400 hidden lg:flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                OPEN TO WORK
            </div>
<a className="bg-blue-500/10 hover:bg-blue-500 hover:text-white text-blue-400 transition-all border border-blue-500/30 px-5 py-2 rounded-sm font-rajdhani font-semibold text-xs tracking-wider backdrop-blur-md" href="#contact">
                INIT_CONTACT
            </a>
</div>
</nav>
<section className="relative min-h-screen flex items-center justify-center perspective-1000 overflow-hidden pt-20">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
<div className="relative z-10 text-center max-w-4xl px-4">
<div className="font-code text-blue-400 tracking-[0.5em] text-xs mb-8 opacity-0 animate-[fadeIn_1s_1s_forwards] flex justify-center items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                SECURITY ENGINEERING | SOFTWARE DEV | RISK ANALYSIS
            </div>
<h1 className="font-orbitron font-semibold text-5xl md:text-8xl tracking-tight text-white leading-[0.9] select-none glitch-hover cursor-none mb-6">
                ENGINEERING <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-white">SECURE SYSTEMS</span>
</h1>
<p className="font-rajdhani text-lg md:text-xl text-gray-400 mt-8 max-w-lg mx-auto leading-relaxed border-l border-blue-500/50 pl-6 text-left">
                Bridging the gap between <b>Software Engineering</b> and <b>Cyber Defense</b>. 
                Specializing in "Shift-Left" security, AI-Driven Intrusion Detection, and Financial Risk Modelling.
            </p>
<div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center opacity-0 animate-[fadeIn_1s_1.5s_forwards]">
<div className="flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 rounded-sm">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="font-code text-xs text-gray-300">NCSC CERTIFIED MSc</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 rounded-sm">
<iconify-icon className="text-blue-400" icon="solar:code-circle-linear" width="20"></iconify-icon>
<span className="font-code text-xs text-gray-300">FULL-STACK EXP</span>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
<div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
</div>
</section>
<section className="py-32 px-6 md:px-24 relative border-t border-white/5 bg-[#050508]" id="detection">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="space-y-8">
<div className="flex items-center gap-3 text-indigo-400">
<iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
<span className="font-code text-xs tracking-widest">THESIS_RESEARCH_TOPIC</span>
</div>
<h2 className="font-orbitron font-semibold text-4xl md:text-5xl leading-none tracking-tight text-white">
                    AI-DRIVEN <span className="text-blue-500">THREAT</span> DETECTION
                </h2>
<p className="font-rajdhani font-medium text-lg text-gray-400 leading-relaxed">
                    My current academic research focuses on utilizing AI/ML to detect network anomalies and prevent Data Loss (DLP). Moving beyond static signatures to identify exfiltration patterns in real-time.
                </p>
<div className="space-y-4 mt-8">
<div className="flex items-start gap-4 p-4 border border-white/5 hover:border-blue-500/30 transition-colors bg-white/[0.02]">
<iconify-icon className="text-white mt-1" icon="solar:database-linear" width="20"></iconify-icon>
<div>
<h4 className="font-orbitron text-sm text-white mb-1">DATA LOSS PREVENTION (DLP)</h4>
<p className="font-code text-[10px] text-gray-500">Analyzing financial data flows to prevent unauthorized egress.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-white/5 hover:border-blue-500/30 transition-colors bg-white/[0.02]">
<iconify-icon className="text-white mt-1" icon="solar:code-scan-linear" width="20"></iconify-icon>
<div>
<h4 className="font-orbitron text-sm text-white mb-1">SECURE DEVELOPMENT</h4>
<p className="font-code text-[10px] text-gray-500">Implementing OAuth, MFA, and input sanitization at the code level.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] w-full perspective-1000 group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-lg border border-white/5 backdrop-blur-sm p-6 overflow-hidden">
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="font-code text-[10px] text-gray-500">thesis_model.py</div>
</div>
<div className="font-code text-xs leading-loose text-gray-400">
<span className="text-purple-400">class</span> <span className="text-yellow-200">AIDetector</span>(Model):<br/>
                          <span className="text-purple-400">def</span> <span className="text-blue-400">analyze_traffic</span>(self, packet):<br/>
                            <span className="text-gray-500"># Feature extraction for ML model</span><br/>
                            features = self.<span className="text-blue-300">extract_metadata</span>(packet)<br/>
                            anomaly_score = self.model.predict(features)<br/>
                            <br/>
                            <span className="text-purple-400">if</span> anomaly_score &gt; <span className="text-orange-400">RISK_THRESHOLD</span>:<br/>
                              <span className="text-gray-500"># Trigger DLP block protocol</span><br/>
                              origin = packet.metadata.source<br/>
                              <span className="text-red-400">self.firewall.block(origin)</span><br/>
                              <span className="text-blue-400">return</span> Alert(TYPE_EXFILTRATION)<br/>
<br/>
                          <span className="text-purple-400">async def</span> <span className="text-blue-400">run_pipeline</span>(self):<br/>
                            <span className="text-purple-400">while</span> stream.active:<br/>
                              await self.ingest_data()<br/>
<span className="inline-block w-2 h-4 bg-blue-500 animate-pulse align-middle ml-1"></span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px] pointer-events-none animate-pulse"></div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-black relative overflow-hidden border-t border-white/10" id="visualizer">
<div className="max-w-[1800px] mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="font-orbitron font-semibold text-4xl text-white tracking-tight mb-2">TRAFFIC ANALYSIS</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">INTERACTIVE DEMO // TOGGLE AI PROTECTION</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-gray-500 font-rajdhani text-xs font-semibold">ACTIVATE IDS:</span>
<button className="w-12 h-6 rounded-full bg-blue-900/30 border border-blue-500/30 relative transition-colors" id="toggle-ai">
<div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-gray-500 transition-all duration-300" id="toggle-knob"></div>
</button>
</div>
</div>
</div>
<div className="max-w-[1800px] mx-auto h-[600px] border border-white/10 bg-[#0A0A0F] relative grid grid-cols-12 overflow-hidden">
<div className="col-span-3 border-r border-white/10 p-6 flex flex-col relative z-10 bg-[#0A0A0F]/90">
<div className="font-rajdhani text-gray-400 text-sm mb-6 flex justify-between">
<span>NETFLOW INGEST</span>
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="font-code text-[10px] space-y-3 overflow-hidden h-full opacity-70" id="log-container"></div>
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent"></div>
</div>
<div className="col-span-6 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImgridIiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTAgNDBIMDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center z-20">
<div className="absolute inset-0 border border-gray-700 rounded-full transition-all duration-500" id="ai-core-ring"></div>
<div className="w-16 h-16 bg-gray-900 border border-gray-600 rounded-full flex items-center justify-center transition-all duration-300" id="ai-core-inner">
<iconify-icon className="text-gray-500 transition-colors" icon="solar:shield-linear" id="ai-icon" width="32"></iconify-icon>
</div>
<div className="absolute w-64 h-64 rounded-full border border-blue-500/10 opacity-0 transition-opacity" id="radar-sweep">
<div className="w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent absolute top-0 left-0 origin-bottom animate-[spin_2s_linear_infinite]"></div>
</div>
</div>
<div className="absolute inset-0 overflow-hidden pointer-events-none" id="simulation-layer"></div>
<div className="absolute top-8 left-1/2 -translate-x-1/2 font-code text-[10px] text-gray-500 bg-black/50 px-2 py-1 border border-white/10 rounded">NEURAL INSPECTION LAYER</div>
</div>
<div className="col-span-3 border-l border-white/10 p-6 relative z-10 bg-[#0A0A0F]/90">
<div className="font-rajdhani text-gray-400 text-sm mb-6 flex justify-between">
<span>SECURITY EVENTS</span>
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-code mb-2 text-gray-500">
<span>THREAT CONFIDENCE</span>
<span className="text-white" id="threat-score">0%</span>
</div>
<div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-0 transition-all duration-300" id="threat-bar"></div>
</div>
</div>
<div className="border border-white/5 bg-black/40 p-4 h-64 overflow-hidden relative">
<div className="font-code text-[10px] space-y-2" id="action-log">
<div className="text-gray-600">Waiting for traffic...</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-blue-500/5 border border-blue-500/20 p-3 text-center">
<div className="font-orbitron text-xl text-white" id="packets-scanned">0</div>
<div className="text-[9px] text-blue-400 font-code mt-1">PACKETS SCANNED</div>
</div>
<div className="bg-red-500/5 border border-red-500/20 p-3 text-center">
<div className="font-orbitron text-xl text-white" id="threats-blocked">0</div>
<div className="text-[9px] text-red-400 font-code mt-1">THREATS BLOCKED</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-12 bg-[#020204] border-t border-white/5" id="skills">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-orbitron font-semibold text-3xl mb-2 text-white">TECHNICAL ARSENAL</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">OFFENSIVE &amp; DEFENSIVE CAPABILITIES</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 border border-white/10 hover:border-blue-500/50 bg-[#08080C] transition-all group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-red-400" icon="solar:bug-linear" width="32"></iconify-icon>
<span className="font-code text-[10px] text-gray-600">Lvl. EXP</span>
</div>
<h3 className="font-orbitron text-lg text-white mb-2">Web Security</h3>
<p className="font-rajdhani text-sm text-gray-500 mb-4 h-10">Burp Suite, OWASP Top 10 mitigation, SQLi &amp; XSS remediation.</p>
<div className="skill-track"><div className="skill-fill w-[85%]"></div></div>
</div>
<div className="p-6 border border-white/10 hover:border-blue-500/50 bg-[#08080C] transition-all group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-blue-400" icon="solar:shield-network-linear" width="32"></iconify-icon>
<span className="font-code text-[10px] text-gray-600">Lvl. EXP</span>
</div>
<h3 className="font-orbitron text-lg text-white mb-2">Network Defense</h3>
<p className="font-rajdhani text-sm text-gray-500 mb-4 h-10">Wireshark, Nmap, Firewall Configuration, Metasploit.</p>
<div className="skill-track"><div className="skill-fill w-[90%]"></div></div>
</div>
<div className="p-6 border border-white/10 hover:border-blue-500/50 bg-[#08080C] transition-all group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-green-400" icon="solar:code-circle-linear" width="32"></iconify-icon>
<span className="font-code text-[10px] text-gray-600">Lvl. PRO</span>
</div>
<h3 className="font-orbitron text-lg text-white mb-2">Secure Coding</h3>
<p className="font-rajdhani text-sm text-gray-500 mb-4 h-10">Python, SQL, JavaScript/Node.js, CI/CD (Jenkins, Docker).</p>
<div className="skill-track"><div className="skill-fill w-[95%]"></div></div>
</div>
<div className="p-6 border border-white/10 hover:border-blue-500/50 bg-[#08080C] transition-all group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-indigo-400" icon="solar:cloud-linear" width="32"></iconify-icon>
<span className="font-code text-[10px] text-gray-600">Lvl. INT</span>
</div>
<h3 className="font-orbitron text-lg text-white mb-2">Cloud Security</h3>
<p className="font-rajdhani text-sm text-gray-500 mb-4 h-10">AWS &amp; Azure. Cloud-native architecture &amp; container security.</p>
<div className="skill-track"><div className="skill-fill w-[70%]"></div></div>
</div>
<div className="p-6 border border-white/10 hover:border-blue-500/50 bg-[#08080C] transition-all group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-yellow-400" icon="solar:graph-up-linear" width="32"></iconify-icon>
<span className="font-code text-[10px] text-gray-600">Lvl. UNI</span>
</div>
<h3 className="font-orbitron text-lg text-white mb-2">Risk Analysis</h3>
<p className="font-rajdhani text-sm text-gray-500 mb-4 h-10">Quantitative Risk Modelling, Econometrics, Financial Impact Analysis.</p>
<div className="skill-track"><div className="skill-fill w-[90%]"></div></div>
</div>
<div className="p-6 border border-white/10 hover:border-blue-500/50 bg-[#08080C] transition-all group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white" icon="solar:lock-password-linear" width="32"></iconify-icon>
<span className="font-code text-[10px] text-gray-600">Lvl. INT</span>
</div>
<h3 className="font-orbitron text-lg text-white mb-2">Cryptography</h3>
<p className="font-rajdhani text-sm text-gray-500 mb-4 h-10">PKI Implementation, Digital Certificates (X.509), TLS Config.</p>
<div className="skill-track"><div className="skill-fill w-[75%]"></div></div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-12 relative overflow-hidden" id="experience">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<div className="mb-10">
<h2 className="font-orbitron font-semibold text-3xl mb-2 text-white">DEPLOYMENT ENV</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">CURRENT TECH STACK</p>
</div>
<div className="border border-white/10 bg-[#0A0A0F] p-1 font-code text-xs rounded-sm">
<div className="bg-[#1a1a20] px-4 py-2 flex justify-between items-center border-b border-white/5 mb-4">
<span className="text-gray-400">rohit@terminal:~# neofetch</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4">
<div className="col-span-4 flex items-center justify-center text-blue-500 opacity-80">
<pre className="leading-none text-[8px] md:text-[10px]">   .::::.
 .::::::::.
:::::::::::
':::::::::'
  ':::::'
   ':::'
                            </pre>
</div>
<div className="col-span-8 space-y-2 text-gray-400">
<div className="grid grid-cols-3"><span className="text-blue-400">OS</span> <span>Kali / Ubuntu</span></div>
<div className="grid grid-cols-3"><span className="text-blue-400">Code</span> <span>VS Code</span></div>
<div className="grid grid-cols-3"><span className="text-blue-400">Script</span> <span>Python, Bash</span></div>
<div className="grid grid-cols-3"><span className="text-blue-400">DB</span> <span>PostgreSQL</span></div>
<div className="grid grid-cols-3"><span className="text-blue-400">Container</span> <span>Docker K8s</span></div>
<div className="mt-4 pt-4 border-t border-white/5">
<span className="text-green-400 block mb-1">$$ INSTALLED_TOOLS</span>
<div className="flex flex-wrap gap-2 text-[10px]">
<span className="bg-white/10 px-2 py-1 rounded">BurpSuite</span>
<span className="bg-white/10 px-2 py-1 rounded">Metasploit</span>
<span className="bg-white/10 px-2 py-1 rounded">Wireshark</span>
<span className="bg-white/10 px-2 py-1 rounded">Nmap</span>
<span className="bg-white/10 px-2 py-1 rounded">Jenkins</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="mb-10 pl-8">
<h2 className="font-orbitron font-semibold text-3xl mb-2 text-white">EXECUTION LOGS</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">CAREER TIMELINE</p>
</div>
<div className="border-l-2 border-white/10 ml-8 space-y-12">
<div className="relative pl-10 timeline-item group">
<div className="timeline-node absolute"></div>
<div className="font-code text-xs text-blue-400 mb-1">SEP 2025 - PRESENT</div>
<h3 className="font-orbitron text-xl text-white">MSc Information Security</h3>
<p className="text-sm text-gray-500 font-rajdhani mt-1">Royal Holloway, University of London</p>
<p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md">
                            NCSC Certified Degree. Researching AI-Driven Cybersecurity (IDS/DLP). Specializing in Cryptography, Network Security, and Security Management.
                        </p>
</div>
<div className="relative pl-10 timeline-item group">
<div className="timeline-node absolute"></div>
<div className="font-code text-xs text-blue-400 mb-1">MAR 2023 - JUL 2025</div>
<h3 className="font-orbitron text-xl text-white">Software Development Engineer</h3>
<p className="text-sm text-gray-500 font-rajdhani mt-1">OpsVeda Inc.</p>
<p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md">
                            Implemented "Shift-Left" security. Mitigated OWASP Top 10 vulnerabilities (SQLi, XSS) during coding. Optimized PostgreSQL performance by 40%.
                        </p>
</div>
<div className="relative pl-10 timeline-item group">
<div className="timeline-node absolute"></div>
<div className="font-code text-xs text-blue-400 mb-1">APR 2023 - MAY 2025</div>
<h3 className="font-orbitron text-xl text-white">Full-Stack AI Engineer</h3>
<p className="text-sm text-gray-500 font-rajdhani mt-1">Flable AI (Part-time)</p>
<p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md">
                            Architected secure authentication (OAuth/MFA). Maintained CI/CD pipelines using Docker. Built analytical tools for social media management.
                        </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-12 bg-[#050508] border-t border-white/5" id="credentials">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
<div>
<div className="mb-10">
<h2 className="font-orbitron font-semibold text-3xl mb-2 text-white">VALIDATED CREDENTIALS</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">INDUSTRY CERTIFICATIONS</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-start gap-4 p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 blur-xl rounded-full"></div>
<div className="mt-1 text-blue-500">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="font-orbitron text-white text-lg group-hover:text-blue-400 transition-colors">SECURITY+</h3>
<p className="font-code text-[10px] text-gray-500 mb-2">CompTIA</p>
<p className="font-rajdhani text-sm text-gray-400 leading-tight">Foundation of cybersecurity skills. (In Progress)</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 blur-xl rounded-full"></div>
<div className="mt-1 text-green-500">
<iconify-icon icon="solar:network-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="font-orbitron text-white text-lg group-hover:text-green-400 transition-colors">Intro to Cyber</h3>
<p className="font-code text-[10px] text-gray-500 mb-2">CISCO Academy</p>
<p className="font-rajdhani text-sm text-gray-400 leading-tight">Network defense and threat landscape fundamentals.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 blur-xl rounded-full"></div>
<div className="mt-1 text-indigo-500">
<iconify-icon icon="solar:code-square-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="font-orbitron text-white text-lg group-hover:text-indigo-400 transition-colors">Full Stack Pro</h3>
<p className="font-code text-[10px] text-gray-500 mb-2">BDFL Technologies</p>
<p className="font-rajdhani text-sm text-gray-400 leading-tight">6-Month intensive program on secure web development.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm group relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 blur-xl rounded-full"></div>
<div className="mt-1 text-red-500">
<iconify-icon icon="solar:diploma-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="font-orbitron text-white text-lg group-hover:text-red-400 transition-colors">CS50</h3>
<p className="font-code text-[10px] text-gray-500 mb-2">Harvard Online</p>
<p className="font-rajdhani text-sm text-gray-400 leading-tight">Introduction to Computer Science. Algorithms &amp; Data Structures.</p>
</div>
</div>
</div>
</div>
<div>
<div className="mb-10 flex justify-between items-end">
<div>
<h2 className="font-orbitron font-semibold text-3xl mb-2 text-white">TRAINING GROUNDS</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">CONTINUOUS EVOLUTION</p>
</div>
<div className="hidden md:flex items-center gap-2 text-green-400 bg-green-900/10 border border-green-500/20 px-3 py-1 rounded-full">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="font-code text-[10px]">ONLINE</span>
</div>
</div>
<div className="w-full bg-[#0A0A0F] border border-white/10 rounded-lg overflow-hidden relative group">
<div className="h-24 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-b border-white/5 relative p-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-16 h-16 hex-border bg-gray-800 flex items-center justify-center border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
<span className="font-orbitron font-bold text-white text-xl">R</span>
</div>
<div>
<h3 className="font-orbitron text-xl text-white tracking-wide">ROHIT_PY</h3>
<div className="flex items-center gap-2 mt-1">
<span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[9px] font-code px-2 py-0.5 rounded">ELITE</span>
<span className="text-gray-400 font-rajdhani text-xs">TryHackMe: Top 6%</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-3 border-b border-white/5 divide-x divide-white/5 bg-[#0e0e14]">
<div className="p-4 text-center group-hover:bg-white/5 transition-colors">
<div className="font-orbitron text-xl text-white mb-1">Top 6%</div>
<div className="font-code text-[9px] text-gray-500 tracking-wider">GLOBAL RANK</div>
</div>
<div className="p-4 text-center group-hover:bg-white/5 transition-colors">
<div className="font-orbitron text-xl text-blue-400 mb-1">Hands-On</div>
<div className="font-code text-[9px] text-gray-500 tracking-wider">LABS COMPLETED</div>
</div>
<div className="p-4 text-center group-hover:bg-white/5 transition-colors">
<div className="font-orbitron text-xl text-purple-400 mb-1">Active</div>
<div className="font-code text-[9px] text-gray-500 tracking-wider">STATUS</div>
</div>
</div>
<div className="p-6">
<h4 className="font-code text-[10px] text-gray-500 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:history-linear"></iconify-icon> RECENT LABS
                            </h4>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded hover:border-blue-500/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:server-path-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-rajdhani font-semibold">Web Fundamentals</div>
<div className="text-[10px] text-gray-500 font-code">Burp Suite &amp; OWASP</div>
</div>
</div>
<span className="text-green-400 text-xs font-code">DONE</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded hover:border-blue-500/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-red-500/10 rounded flex items-center justify-center text-red-400">
<iconify-icon icon="solar:bug-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-rajdhani font-semibold">Network Security</div>
<div className="text-[10px] text-gray-500 font-code">Nmap &amp; Packet Analysis</div>
</div>
</div>
<span className="text-green-400 text-xs font-code">DONE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 border-t border-white/10 bg-[#020204]" id="socials">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-12 text-center">
<h2 className="font-orbitron font-semibold text-3xl mb-2 text-white">NETWORK UPLINKS</h2>
<p className="font-code text-xs text-blue-500 tracking-widest">ESTABLISH DIGITAL CONNECTION</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
<a className="group relative p-6 bg-[#08080C] border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-900/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col items-center gap-3">
<iconify-icon className="text-gray-400 group-hover:text-blue-400 transition-colors" icon="solar:link-circle-linear" width="32"></iconify-icon>
<span className="font-orbitron text-sm text-white">LINKEDIN</span>
<span className="font-code text-[9px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity -mt-2">/in/rohityellapu</span>
</div>
</a>
<a className="group relative p-6 bg-[#08080C] border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/10" href="mailto:rohityellapu@gmail.com">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col items-center gap-3">
<iconify-icon className="text-gray-400 group-hover:text-purple-400 transition-colors" icon="solar:letter-linear" width="32"></iconify-icon>
<span className="font-orbitron text-sm text-white">EMAIL</span>
<span className="font-code text-[9px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity -mt-2">rohityellapu@gmail.com</span>
</div>
</a>
</div>
</div>
</section>
<section className="py-24 border-t border-white/10 bg-[#000]" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-blue-500 mb-6" icon="solar:satellite-linear" width="48"></iconify-icon>
<h2 className="font-orbitron font-semibold text-4xl text-white mb-4">ESTABLISH UPLINK</h2>
<p className="font-rajdhani text-gray-400 mb-12">Secure channel ready.</p>
<form className="max-w-md mx-auto space-y-6 text-left" onsubmit="event.preventDefault();">
<div className="group">
<label className="font-code text-[10px] text-blue-400 block mb-2">USER_IDENTITY</label>
<input className="w-full bg-[#0A0A0F] border border-white/10 p-3 text-white focus:border-blue-500 focus:outline-none transition-colors rounded-sm font-rajdhani" placeholder="Enter name..." type="text"/>
</div>
<div className="group">
<label className="font-code text-[10px] text-blue-400 block mb-2">TRANSMISSION_DATA</label>
<textarea className="w-full bg-[#0A0A0F] border border-white/10 p-3 text-white focus:border-blue-500 focus:outline-none transition-colors rounded-sm font-rajdhani h-32" placeholder="Enter message payload..."></textarea>
</div>
<a className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-orbitron font-semibold py-4 tracking-widest transition-all clip-path-polygon" href="mailto:rohityellapu@gmail.com">
                    SEND TRANSMISSION
                </a>
</form>
<div className="flex justify-center gap-8 mt-16 opacity-70">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:mailbox-linear"></iconify-icon>
<span className="font-code text-xs text-gray-500">rohityellapu@gmail.com</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:phone-linear"></iconify-icon>
<span className="font-code text-xs text-gray-500">07344274407</span>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/10 bg-[#020204] py-12 text-center md:text-left relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:atom-linear"></iconify-icon>
<span className="font-orbitron font-semibold text-lg tracking-tight text-white">ROHIT.PY</span>
</div>
<div className="font-code text-[10px] text-gray-600 tracking-widest uppercase">
                // System Status: Online // Location: Egham, Surrey
            </div>
<div className="font-rajdhani text-xs text-gray-500">
                © 2026 Rohit P. Yellapu
            </div>
</div>
</footer>


    </>
  );
}
