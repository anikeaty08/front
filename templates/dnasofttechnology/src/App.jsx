import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Particle Sphere & Text Morph Logic
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('canvas-container');

        let particles = [];
        let width, height;
        let mouse = { x: 0, y: 0 };
        let rotationSpeed = 0.005;
        let currentRotationX = 0;
        let currentRotationY = 0;
        let isTextMode = false;
        let particleCount = 1000;
        let sphereRadius = 140;

        // Resize
        function resize() {
            width = canvas.width = container.offsetWidth;
            height = canvas.height = container.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Particle Class
        class Particle {
            constructor(x, y, z) {
                this.x = x; // Current pos
                this.y = y;
                this.z = z;
                
                // Sphere target
                this.sphereX = x;
                this.sphereY = y;
                this.sphereZ = z;

                // Text target (will be calculated later)
                this.textX = x; 
                this.textY = y; 
                this.textZ = 0;

                this.size = Math.random() * 2 + 0.5;
                this.baseAlpha = Math.random() * 0.5 + 0.3;
            }

            update(mouseX, mouseY) {
                // Determine target based on mode
                let tx, ty, tz;

                if (isTextMode) {
                    tx = this.textX;
                    ty = this.textY;
                    tz = this.textZ;
                    
                    // In text mode, we reduce rotation significantly to make text readable
                    // but still allow slight parallax
                    const targetRotY = mouseX * 0.2; 
                    const targetRotX = mouseY * 0.2;
                    currentRotationY += (targetRotY - currentRotationY) * 0.05;
                    currentRotationX += (targetRotX - currentRotationX) * 0.05;

                } else {
                    tx = this.sphereX;
                    ty = this.sphereY;
                    tz = this.sphereZ;

                    // Sphere follows mouse rotation aggressively
                    const targetRotY = mouseX * 2;
                    const targetRotX = mouseY * 2;
                    currentRotationY += (targetRotY - currentRotationY) * 0.05;
                    currentRotationX += (targetRotX - currentRotationX) * 0.05;
                }

                // Linear Interpolation (Lerp) actual position to target shape
                // We do this in "model space" before rotation
                this.x += (tx - this.x) * 0.08;
                this.y += (ty - this.y) * 0.08;
                this.z += (tz - this.z) * 0.08;

                // Apply 3D Rotation Matrix
                let y1 = this.y * Math.cos(currentRotationX) - this.z * Math.sin(currentRotationX);
                let z1 = this.y * Math.sin(currentRotationX) + this.z * Math.cos(currentRotationX);
                let x1 = this.x * Math.cos(currentRotationY) + z1 * Math.sin(currentRotationY);
                let z2 = -this.x * Math.sin(currentRotationY) + z1 * Math.cos(currentRotationY);

                // Perspective Projection
                let perspective = 800 / (800 + z2);
                this.sx = width / 2 + x1 * perspective;
                this.sy = height / 2 + y1 * perspective;
                this.scale = perspective;
                this.alpha = this.baseAlpha;

                // Fade out particles not used in text mode if they are "extras"
                // (Handled by setting their textTarget to hidden or scattered, for now we keep them)
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.sx, this.sy, this.size * this.scale, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * this.scale})`;
                ctx.fill();
            }
        }

        // Initialize Sphere
        function initSphere() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                // Golden Angle distribution
                const offset = 2 / particleCount;
                const increment = Math.PI * (3 - Math.sqrt(5));
                
                const y = ((i * offset) - 1) + (offset / 2);
                const r = Math.sqrt(1 - Math.pow(y, 2));
                
                const phi = ((i + 1) % particleCount) * increment;
                
                const x = Math.cos(phi) * r;
                const z = Math.sin(phi) * r;

                particles.push(new Particle(x * sphereRadius, y * sphereRadius, z * sphereRadius));
            }
        }

        // Calculate Text Positions
        function calculateTextPositions() {
            // Create offscreen canvas for text analysis
            const tCanvas = document.createElement('canvas');
            const tCtx = tCanvas.getContext('2d');
            tCanvas.width = 400;
            tCanvas.height = 200;
            
            tCtx.fillStyle = '#000';
            tCtx.fillRect(0, 0, tCanvas.width, tCanvas.height);
            
            // Draw text
            tCtx.font = '900 80px Inter';
            tCtx.textAlign = 'center';
            tCtx.textBaseline = 'middle';
            tCtx.fillStyle = '#fff';
            tCtx.fillText('DNA', tCanvas.width/2, tCanvas.height/2);

            // Get pixel data
            const imageData = tCtx.getImageData(0, 0, tCanvas.width, tCanvas.height).data;
            const textCoords = [];

            // Scan for white pixels
            for (let y = 0; y < tCanvas.height; y += 4) {
                for (let x = 0; x < tCanvas.width; x += 4) {
                    const index = (y * tCanvas.width + x) * 4;
                    if (imageData[index] > 128) {
                        textCoords.push({
                            x: (x - tCanvas.width/2) * 1.5,
                            y: (y - tCanvas.height/2) * 1.5
                        });
                    }
                }
            }

            // Assign text coordinates to particles
            // If more text points than particles, we need more particles (ignored for simplicity)
            // If fewer, extras go to random positions inside
            particles.forEach((p, i) => {
                if (i < textCoords.length) {
                    p.textX = textCoords[i].x;
                    p.textY = textCoords[i].y;
                    p.textZ = 0; // Flat text
                } else {
                    // Extras orbit randomly or hide
                    p.textX = (Math.random() - 0.5) * 50;
                    p.textY = (Math.random() - 0.5) * 50;
                    p.textZ = (Math.random() - 0.5) * 50;
                }
            });
        }

        initSphere();
        calculateTextPositions();

        // Mouse Event
        container.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            // Normalized mouse -1 to 1
            mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
            mouse.y = ((e.clientY - rect.top) / height) * 2 - 1;
        });
        
        container.addEventListener('mouseleave', () => {
            mouse.x = 0;
            mouse.y = 0;
        });

        // Double Click Event
        container.addEventListener('dblclick', () => {
            if (!isTextMode) {
                isTextMode = true;
                
                // Revert after 5 seconds
                setTimeout(() => {
                    isTextMode = false;
                }, 5000);
            }
        });

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connection lines if close (optional style, keeping it simple dots for performance)
            // Sorting for Z-buffer effect not strictly needed for additive particles but looks better
            particles.sort((a, b) => b.z - a.z);

            particles.forEach(p => {
                p.update(mouse.x, mouse.y);
                p.draw(ctx);
            });

            requestAnimationFrame(animate);
        }

        animate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b bg-[#030303]/70 backdrop-blur-xl border-black/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 rounded-full blur-[2px] group-hover:blur-[4px] transition-all bg-black/20"></div>
<div className="relative w-full h-full rounded-full border flex items-center justify-center bg-white border-black/20">
<span className="text-[10px] font-medium text-black">D</span>
</div>
</div>
<span className="font-medium tracking-tighter text-sm text-black">DNA SOFT TECH</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium transition-colors hover:text-black" href="#solutions">Solutions</a>
<a className="text-xs font-medium transition-colors hover:text-black" href="#methodology">Methodology</a>
<a className="text-xs font-medium transition-colors hover:text-black" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-xs font-medium transition-colors text-black hover:text-slate-800" href="#">Log in</a>
<a className="text-xs font-medium px-4 py-2 rounded-full border transition-all bg-black/10 hover:bg-black/20 text-black border-black/10" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="aura-orb aura-1"></div>
<div className="aura-orb aura-2"></div>
<div className="aura-orb aura-3"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm mb-8 animate-[fade-in_1s_ease-out] border-black/10 bg-black/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-indigo-700">New Architecture v2.0</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-[0.95] text-black">
<span className="text-gradient">DNA SOFT TECH</span>
</h1>

<p className="text-lg md:text-xl font-normal tracking-tight max-w-2xl mx-auto mb-10 text-slate-600">
                Three perspectives, one powerful brand. <br className="hidden md:block"/>
                We engineer digital biology for the modern web.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="group relative px-6 py-3 text-sm font-medium rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-black text-white">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 via-black/40"></div>
<span className="relative flex items-center gap-2">
                        Get Started
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 bg-transparent border text-sm font-medium rounded-full transition-all flex items-center gap-2 text-black border-black/10 hover:bg-black/5">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Showreel
                </button>
</div>

<div id="canvas-container" title="Double click to reveal">

<div className="absolute w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<canvas id="hero-canvas"></canvas>
</div>
<p className="text-xs mt-2 font-mono uppercase tracking-widest text-black/20">Double Click Sphere</p>
</div>
</section>

<section className="py-32 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-black">The DNA Trinity</h2>
<p className="max-w-xl text-sm md:text-base text-slate-600">
                    Our methodology combines three critical perspectives to forge a single, unbreakable brand identity.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors overflow-hidden border-black/5">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-all"></div>
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-black/5 border-black/10 text-black">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-black">Aesthetic</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Visually stunning interfaces that captivate users instantly. We craft pixels with surgical precision.
                    </p>
<div className="relative h-24 w-full rounded border overflow-hidden flex items-center justify-center bg-white/40 border-black/5">
<div className="absolute inset-0 flex items-center justify-center gap-2 opacity-50">
<div className="w-8 h-8 rounded-full border border-purple-500/50"></div>
<div className="w-8 h-8 rounded-full border border-purple-500/50 -ml-4 mix-blend-screen"></div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors overflow-hidden border-black/5">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-blue-500/30 transition-all"></div>
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-black/5 border-black/10 text-black">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-black">Synthesis</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Robust architecture meeting fluid motion. Code that scales as effortlessly as it renders.
                    </p>
<div className="relative h-24 w-full rounded border overflow-hidden font-mono text-[10px] p-3 leading-4 bg-white/40 border-black/5 text-blue-700">
<span className="text-purple-600">const</span> dna <span className="text-black">=</span> <span className="text-yellow-700">new</span> <span className="text-blue-600">Tech</span>();
                        dna.<span className="text-blue-800">evolve</span>(<span className="text-green-700">true</span>);
                    </div>
</div>

<div className="group relative p-8 rounded-2xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors overflow-hidden border-black/5">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-pink-500/20 blur-[50px] rounded-full group-hover:bg-pink-500/30 transition-all"></div>
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-black/5 border-black/10 text-black">
<iconify-icon icon="lucide:orbit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-black">Evolution</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Data-driven growth strategies. We don't just launch products; we launch trajectories.
                    </p>
<div className="relative h-24 w-full rounded border overflow-hidden flex items-end px-4 pb-2 gap-1 bg-white/40 border-black/5">
<div className="w-1/5 h-[30%] bg-pink-500/20 rounded-t-sm"></div>
<div className="w-1/5 h-[50%] bg-pink-500/40 rounded-t-sm"></div>
<div className="w-1/5 h-[40%] bg-pink-500/30 rounded-t-sm"></div>
<div className="w-1/5 h-[80%] bg-pink-500/60 rounded-t-sm"></div>
<div className="w-1/5 h-[95%] bg-pink-500 rounded-t-sm shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white/[0.01] border-black/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
<span className="text-xs uppercase tracking-widest text-slate-500 font-medium">System Core</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-black">
                    Precision in every pixel. <br/>
                    Logic in every line.
                </h2>
<p className="mb-8 leading-relaxed text-slate-600">
                    DNA Soft Tech bridges the gap between creative vision and technical reality. We utilize a bespoke component architecture that ensures consistency across all three perspectives of your brand.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle"></iconify-icon>
                        Volumetric rendering engine
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle"></iconify-icon>
                        Real-time data synchronization
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle"></iconify-icon>
                        Adaptive neural branding
                    </li>
</ul>
<a className="text-sm font-medium border-b pb-0.5 transition-colors inline-flex items-center gap-2 text-black border-black/30 hover:border-black" href="#">
                    Explore Documentation <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl rounded-full"></div>
<div className="relative bg-[#050505] border rounded-xl p-6 shadow-2xl border-black/10">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5">
<h4 className="text-sm font-medium text-black">System Config</h4>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-black/20"></span>
<span className="w-2 h-2 rounded-full bg-black/20"></span>
</div>
</div>

<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2 text-slate-600">
<span>Aura Intensity</span>
<span className="text-black">84%</span>
</div>
<div className="h-1 rounded-full w-full relative bg-black/10">
<div className="absolute top-0 left-0 h-full w-[84%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[84%] w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer bg-black"></div>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-slate-700">3D Acceleration</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-500 bg-black/10"></div>
</label>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-slate-700">Neural Sync</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-500 bg-black/10"></div>
</label>
</div>
<div className="pt-4 border-t border-black/5">
<div className="flex items-center gap-3 p-3 rounded border bg-black/5 border-black/5">
<input className="appearance-none h-4 w-4 border rounded bg-transparent custom-checkbox relative cursor-pointer checked:bg-indigo-500 checked:border-indigo-500 transition-all border-black/30" type="checkbox"/>
<span className="text-xs text-slate-600">Enable perspective lock</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none to-indigo-100/10"></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-black">Ready to evolve?</h2>
<p className="mb-8 text-slate-600">
                Join the DNA Soft Tech ecosystem. Meld your brand with the future of digital interaction.
            </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600 bg-black/5 border-black/10 text-black" placeholder="Enter your email" type="email"/>
<button className="px-5 py-2.5 text-sm font-medium rounded-md transition-colors bg-black text-white hover:bg-slate-800" type="button">
                    Join Access
                </button>
</form>
<p className="text-xs mt-4 text-slate-400">No spam. Only evolution.</p>
</div>
</section>

<footer className="border-t bg-[#020202] border-black/5">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full flex items-center justify-center border bg-black/10 border-black/10">
<span className="text-[8px] text-black">D</span>
</div>
<span className="text-slate-500 text-xs font-medium tracking-tight">DNA SOFT TECH © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 transition-colors hover:text-black" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-500 transition-colors hover:text-black" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-slate-500 transition-colors hover:text-black" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
