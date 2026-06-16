import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const canvas = document.getElementById('network-canvas');
        const ctx = canvas.getContext('2d');

        let width, height;
        let particles = [];
        
        // Configuration for "Futuristic" feel
        const particleCountMobile = 35;
        const particleCountDesktop = 70;
        const connectionDistance = 160;
        const moveSpeed = 0.4;
        
        // Mouse interaction
        let mouseX = -1000;
        let mouseY = -1000;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
                // Randomly assign slight cyan or white tint
                this.isCyan = Math.random() > 0.7;
                this.size = Math.random() * 1.5 + 0.5;
                this.baseSize = this.size;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction - repel slightly
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 200) {
                    const angle = Math.atan2(dy, dx);
                    const force = (200 - dist) / 200;
                    this.vx -= Math.cos(angle) * force * 0.05;
                    this.vy -= Math.sin(angle) * force * 0.05;
                    this.size = this.baseSize + force * 2; // Grow near mouse
                } else {
                    this.size = this.baseSize;
                }

                // Dampen velocity to limit speed
                const speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
                if (speed > moveSpeed * 2) {
                    this.vx *= 0.95;
                    this.vy *= 0.95;
                }

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                
                // Glowing effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.isCyan ? '#06b6d4' : '#ffffff'; // Cyan or White glow
                
                ctx.fillStyle = this.isCyan ? 'rgba(34, 211, 238, 0.8)' : 'rgba(255, 255, 255, 0.6)';
                ctx.fill();
                
                // Reset shadow for performance or next draws if needed (but we want lines to glow too maybe)
                ctx.shadowBlur = 0;
            }
        }

        function initParticles() {
            particles = [];
            const count = width < 768 ? particleCountMobile : particleCountDesktop;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        // Gradient line transparency based on distance
                        const opacity = (1 - distance / connectionDistance) * 0.2;
                        
                        ctx.strokeStyle = `rgba(103, 232, 249, ${opacity})`; // Cyan-ish lines
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        
                        // Add glow to lines if close enough
                        if (opacity > 0.1) {
                            ctx.shadowBlur = 5;
                            ctx.shadowColor = 'rgba(103, 232, 249, 0.5)';
                        } else {
                            ctx.shadowBlur = 0;
                        }
                        
                        ctx.stroke();
                        ctx.shadowBlur = 0; // Reset
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        resize();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen blob-1"></div>
<div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen blob-2"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen blob-1"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
</div>

<div className="absolute inset-0 z-0 bg-grid opacity-30 pointer-events-none"></div>

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none" id="network-canvas"></canvas>

<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0E245A_100%)] opacity-80 pointer-events-none"></div>

<nav className="relative z-10 w-full px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden group-hover:border-cyan-400/50 transition-colors">
<div className="absolute inset-0 bg-cyan-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white relative z-10" icon="lucide:hexagon" width="18"></iconify-icon>
</div>
<div className="text-white font-medium tracking-tight text-lg">
                NEXUS
            </div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-300">
<a className="hover:text-cyan-300 transition-colors duration-300" href="#">Platform</a>
<a className="hover:text-cyan-300 transition-colors duration-300" href="#">Solutions</a>
<a className="hover:text-cyan-300 transition-colors duration-300" href="#">Developers</a>
<a className="hover:text-cyan-300 transition-colors duration-300" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-light text-slate-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white/5 hover:bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 flex items-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/30">
                Contact Sales
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform text-cyan-400" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto mt-[-5vh]">

<div className="fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-400/20 text-cyan-100 text-xs font-medium mb-8 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
</span>
<span className="tracking-wide">NEXUS V2.0 LIVE</span>
</div>

<h1 className="fade-in delay-100 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 mb-8 leading-[1.05] drop-shadow-lg">
            Intelligent infrastructure <br className="hidden sm:block"/>
            for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 relative">
                connected era
                
<svg className="absolute w-full h-2 bottom-0 left-0 translate-y-2 opacity-50" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="url(#gradient)" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#22d3ee"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</span>
</h1>

<p className="fade-in delay-200 text-slate-300/80 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Deploy secure, scalable AI-ready architectures with a single API. 
            Integrate streams across global endpoints with <span className="text-white font-normal">zero latency</span>.
        </p>

<div className="fade-in delay-300 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
<button className="group w-full sm:w-auto px-8 py-3.5 bg-white text-[#0E245A] hover:bg-cyan-50 text-sm font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 relative overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                    Start Building
                    <iconify-icon className="text-cyan-600 group-hover:text-cyan-500" icon="lucide:zap" strokeWidth="2" width="16"></iconify-icon>
</span>
</button>
<button className="group w-full sm:w-auto px-8 py-3.5 text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon className="group-hover:text-cyan-300 transition-colors" icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                View Documentation
            </button>
</div>

<div className="fade-in delay-300 mt-24 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 text-left relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
<div>
<div className="text-3xl text-white font-semibold tracking-tight">99.99%</div>
<div className="text-xs text-cyan-200/60 font-medium uppercase tracking-wider mt-1">Uptime</div>
</div>
<div>
<div className="text-3xl text-white font-semibold tracking-tight">140ms</div>
<div className="text-xs text-cyan-200/60 font-medium uppercase tracking-wider mt-1">Latency</div>
</div>
<div>
<div className="text-3xl text-white font-semibold tracking-tight">10k+</div>
<div className="text-xs text-cyan-200/60 font-medium uppercase tracking-wider mt-1">Nodes</div>
</div>
<div>
<div className="text-3xl text-white font-semibold tracking-tight">24/7</div>
<div className="text-xs text-cyan-200/60 font-medium uppercase tracking-wider mt-1">Support</div>
</div>
</div>
</main>



    </>
  );
}
