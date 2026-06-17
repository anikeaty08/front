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



        // --- Scroll Reveal Logic ---
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(el => revealObserver.observe(el));

        // --- 3D Canvas Hero Animation Logic ---
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d', { alpha: false });
        
        let width, height, cx, cy;
        let particles = [];
        let stars = [];
        let cubes = [];
        const numParticles = 250;
        const sphereRadius = 250;
        const fov = 800; // Field of view for pseudo-3D projection
        
        // Animation State Machine
        let animState = 'forming'; // forming, pulsing, exploding, reconverging
        let stateTimer = 0;
        let globalRotationX = 0;
        let globalRotationY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;
        let pulseRadius = 0;
        let bloomOpacity = 0;

        // Resize handler
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            cx = width / 2;
            cy = height / 2;
        }
        window.addEventListener('resize', resize);
        resize();

        // Mouse interaction
        window.addEventListener('mousemove', (e) => {
            const normalizedX = (e.clientX / width) * 2 - 1;
            const normalizedY = (e.clientY / height) * 2 - 1;
            targetRotationY = normalizedX * 0.5;
            targetRotationX = normalizedY * -0.5;
        });

        // Math utilities for 3D rotation
        function rotate3D(x, y, z, pitch, yaw) {
            // Rotate around X (pitch)
            let cosX = Math.cos(pitch);
            let sinX = Math.sin(pitch);
            let y1 = y * cosX - z * sinX;
            let z1 = y * sinX + z * cosX;
            
            // Rotate around Y (yaw)
            let cosY = Math.cos(yaw);
            let sinY = Math.sin(yaw);
            let x2 = x * cosY + z1 * sinY;
            let z2 = -x * sinY + z1 * cosY;
            
            return { x: x2, y: y1, z: z2 };
        }

        // Initialize structures
        function init() {
            // Init Sphere Particles using golden ratio spiral for even distribution
            const phi = Math.PI * (3 - Math.sqrt(5));
            for (let i = 0; i < numParticles; i++) {
                const y = 1 - (i / (numParticles - 1)) * 2;
                const radiusAtY = Math.sqrt(1 - y * y);
                const theta = phi * i;

                const bx = Math.cos(theta) * radiusAtY * sphereRadius;
                const by = y * sphereRadius;
                const bz = Math.sin(theta) * radiusAtY * sphereRadius;

                // Start scattered
                const startDist = sphereRadius * 3;
                particles.push({
                    baseX: bx, baseY: by, baseZ: bz,
                    x: bx + (Math.random()-0.5)*startDist, 
                    y: by + (Math.random()-0.5)*startDist, 
                    z: bz + (Math.random()-0.5)*startDist,
                    vx: 0, vy: 0, vz: 0,
                    size: Math.random() * 1.5 + 0.5
                });
            }

            // Init background stars
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5,
                    speed: Math.random() * 0.5 + 0.1,
                    alpha: Math.random()
                });
            }

            // Init glowing cubes
            for(let i=0; i<5; i++) {
                cubes.push({
                    x: (Math.random() - 0.5) * width,
                    y: (Math.random() - 0.5) * height,
                    z: (Math.random() - 0.5) * 1000,
                    size: Math.random() * 30 + 10,
                    rotX: Math.random() * Math.PI,
                    rotY: Math.random() * Math.PI,
                    rotSpeedX: (Math.random() - 0.5) * 0.02,
                    rotSpeedY: (Math.random() - 0.5) * 0.02,
                });
            }
        }

        // Render Loop
        function animate() {
            requestAnimationFrame(animate);

            // Dark space background (clearing frame)
            ctx.fillStyle = '#03030a';
            ctx.fillRect(0, 0, width, height);

            // Draw Stars
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });
            ctx.globalAlpha = 1;

            // Update Rotations (smooth interpolation)
            globalRotationX += (targetRotationX - globalRotationX) * 0.05;
            globalRotationY += (targetRotationY - globalRotationY) * 0.05 + 0.002; // Auto spin

            // State Machine Logic
            stateTimer++;
            
            if (animState === 'forming') {
                if (stateTimer > 100) { animState = 'pulsing'; stateTimer = 0; pulseRadius = 0; }
                // Spring towards target
                particles.forEach(p => {
                    let target = rotate3D(p.baseX, p.baseY, p.baseZ, globalRotationX, globalRotationY);
                    p.x += (target.x - p.x) * 0.05;
                    p.y += (target.y - p.y) * 0.05;
                    p.z += (target.z - p.z) * 0.05;
                });

            } else if (animState === 'pulsing') {
                pulseRadius += 5;
                if (stateTimer > 60) { animState = 'exploding'; stateTimer = 0; bloomOpacity = 1; }
                // Stay on sphere
                particles.forEach(p => {
                    let target = rotate3D(p.baseX, p.baseY, p.baseZ, globalRotationX, globalRotationY);
                    p.x = target.x; p.y = target.y; p.z = target.z;
                });

            } else if (animState === 'exploding') {
                if (stateTimer === 1) {
                    // Apply explosion velocity
                    particles.forEach(p => {
                        const dist = Math.sqrt(p.x*p.x + p.y*p.y + p.z*p.z) || 1;
                        const force = (Math.random() * 15 + 10) / dist;
                        p.vx = p.x * force;
                        p.vy = p.y * force;
                        p.vz = p.z * force;
                    });
                }
                
                bloomOpacity *= 0.95;
                if (stateTimer > 80) { animState = 'reconverging'; stateTimer = 0; }
                
                // Move with velocity and friction
                particles.forEach(p => {
                    p.x += p.vx; p.y += p.vy; p.z += p.vz;
                    p.vx *= 0.92; p.vy *= 0.92; p.vz *= 0.92;
                });

            } else if (animState === 'reconverging') {
                if (stateTimer > 120) { animState = 'pulsing'; stateTimer = 0; pulseRadius = 0; }
                // Spring back
                particles.forEach(p => {
                    let target = rotate3D(p.baseX, p.baseY, p.baseZ, globalRotationX, globalRotationY);
                    p.vx += (target.x - p.x) * 0.002;
                    p.vy += (target.y - p.y) * 0.002;
                    p.vz += (target.z - p.z) * 0.002;
                    
                    p.x += p.vx; p.y += p.vy; p.z += p.vz;
                    p.vx *= 0.9; p.vy *= 0.9; p.vz *= 0.9; // Dampening
                });
            }

            // Prepare for rendering particles
            let projected = [];
            particles.forEach((p, index) => {
                // Projection
                const scale = fov / (fov + p.z + 500); // 500 is camera distance offset
                const px = cx + p.x * scale;
                const py = cy + p.y * scale;
                
                // Opacity based on Z depth
                const zAlpha = Math.max(0.1, Math.min(1, (p.z + sphereRadius*2) / (sphereRadius*4)));
                
                projected.push({ x: px, y: py, z: p.z, scale: scale, alpha: zAlpha, origIndex: index, origP: p });
            });

            // Sort by Z for proper rendering depth (optional but looks better for dots)
            projected.sort((a, b) => b.z - a.z);

            // Draw Connections (Wireframe)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < projected.length; i++) {
                const p1 = projected[i];
                // Only draw connections if not fully exploded, to keep it clean
                if (animState !== 'exploding' || stateTimer < 20) {
                    // Check nearby points
                    for (let j = i + 1; j < projected.length; j++) {
                        const p2 = projected[j];
                        // Distance check in 3D space to maintain mesh structure
                        const dx = p1.origP.x - p2.origP.x;
                        const dy = p1.origP.y - p2.origP.y;
                        const dz = p1.origP.z - p2.origP.z;
                        const distSq = dx*dx + dy*dy + dz*dz;
                        
                        if (distSq < 4000) { // Connection threshold
                            
                            // Pulse effect coloring
                            let lineAlpha = p1.alpha * 0.4;
                            let strokeColor = `rgba(100, 150, 255, ${lineAlpha})`;
                            
                            if (animState === 'pulsing') {
                                // Distance from center for pulse wave
                                const distFromCenter = Math.sqrt(p1.origP.x**2 + p1.origP.y**2 + p1.origP.z**2);
                                if (Math.abs(distFromCenter - pulseRadius) < 50) {
                                    strokeColor = `rgba(168, 85, 247, ${Math.min(1, lineAlpha * 3)})`; // Neon purple pulse
                                    ctx.lineWidth = 1.5;
                                } else {
                                    ctx.lineWidth = 0.5;
                                }
                            } else if (animState === 'exploding') {
                                strokeColor = `rgba(168, 85, 247, ${lineAlpha * (1 - stateTimer/20)})`;
                            }

                            ctx.strokeStyle = strokeColor;
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Draw Particles (Nodes)
            projected.forEach(p => {
                let color = `rgba(147, 197, 253, ${p.alpha})`; // blue-300
                if (animState === 'pulsing') {
                    const distFromCenter = Math.sqrt(p.origP.x**2 + p.origP.y**2 + p.origP.z**2);
                    if (Math.abs(distFromCenter - pulseRadius) < 30) {
                        color = `rgba(216, 180, 254, 1)`; // bright purple
                    }
                } else if (animState === 'exploding') {
                    color = `rgba(192, 132, 252, ${Math.max(0.1, 1 - stateTimer/100)})`;
                }

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.origP.size * p.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            // Explosion Bloom Effect
            if (bloomOpacity > 0.01) {
                const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height)/2);
                gradient.addColorStop(0, `rgba(168, 85, 247, ${bloomOpacity * 0.4})`);
                gradient.addColorStop(0.3, `rgba(59, 130, 246, ${bloomOpacity * 0.1})`);
                gradient.addColorStop(1, 'rgba(3, 3, 10, 0)');
                
                ctx.fillStyle = gradient;
                // Additive blending for glow
                ctx.globalCompositeOperation = 'screen';
                ctx.fillRect(0, 0, width, height);
                ctx.globalCompositeOperation = 'source-over'; // reset
            }

            // Draw floating background cubes (simple 2D projection of squares)
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
            ctx.lineWidth = 1;
            cubes.forEach(c => {
                c.rotX += c.rotSpeedX;
                c.rotY += c.rotSpeedY;
                c.y -= 0.5; // float up
                if (c.y < -height/2) c.y = height/2;

                const scale = fov / (fov + c.z + 800);
                const px = cx + c.x * scale;
                const py = cy + c.y * scale;
                const s = c.size * scale;

                ctx.save();
                ctx.translate(px, py);
                // Fake 3D rotation with 2D transforms for simplicity
                ctx.scale(Math.cos(c.rotY), Math.cos(c.rotX));
                ctx.strokeRect(-s/2, -s/2, s, s);
                ctx.restore();
            });
        }

        // Start
        init();
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-[#03030a]/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-1" href="#">
                icertify<span className="text-purple-400">IT</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#testimonials">Stories</a>
</div>
<a className="hidden md:flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all" href="#cta">
                Sign In
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-auto" id="heroCanvas"></canvas>

<div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#03030a]/50 to-[#03030a]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                Next-Gen Learning Platform
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Master Certifications <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">With AI</span>
</h1>
<p className="text-base md:text-lg text-slate-400 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                icertifyIT helps learners prepare for certifications using AI-generated practice exams, smart learning paths, and instant feedback.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-glow px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium border border-slate-700 w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors" href="#cta">
                    Start Learning
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full bg-transparent text-white text-sm font-medium border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all w-full sm:w-auto text-center" href="#features">
                    Explore Certifications
                </a>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 bg-[#03030a] z-10" id="features">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 sm:px-12">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Intelligent Preparation</h2>
<p className="text-base text-slate-400 font-normal max-w-xl mx-auto">Everything you need to pass on your first try, powered by advanced artificial intelligence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-2xl p-6 reveal">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">AI Practice Exams</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Dynamically generated questions tailored to your weak points, simulating real exam environments.</p>
</div>

<div className="glass-card rounded-2xl p-6 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:map-arrow-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Smart Learning Paths</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Adaptive curriculum that evolves based on your progress and comprehension speed.</p>
</div>

<div className="glass-card rounded-2xl p-6 reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Progress Tracking</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Granular analytics detailing your readiness score across specific certification domains.</p>
</div>

<div className="glass-card rounded-2xl p-6 reveal delay-300">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Mobile Experience</h3>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Study anywhere with a seamless, responsive mobile interface designed for quick sessions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden bg-[#05050f]" id="platform">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Neural Sync Technology</h2>
<p className="text-base text-slate-400 font-normal mb-8 leading-relaxed">
                    Our core engine doesn't just grade your answers. It analyzes your decision-making patterns to build a multidimensional profile of your knowledge gaps, constructing a personalized mental framework for complex IT concepts.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
                        Real-time knowledge graph mapping
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
<div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
                        Predictive scoring algorithms
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
                        Automated flashcard generation
                    </li>
</ul>
</div>
<div className="w-full lg:w-1/2 flex justify-center reveal">

<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center animate-float">

<div className="absolute w-20 h-20 bg-indigo-500 rounded-full blur-xl opacity-50"></div>
<div className="relative z-10 w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-linear" width="32"></iconify-icon>
</div>

<div className="absolute inset-0 rounded-full border border-blue-500/20 ring-1"></div>
<div className="absolute inset-4 rounded-full border border-purple-500/30 ring-2"></div>
<div className="absolute inset-8 rounded-full border border-indigo-400/20 ring-3"></div>

<div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] animate-[spin_4s_linear_infinite] origin-[0_160px]"></div>
<div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc] animate-[spin_6s_linear_infinite_reverse] origin-[-100px_0]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#03030a] relative border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6 sm:px-12">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Learner Success</h2>
<p className="text-base text-slate-400 font-normal max-w-xl mx-auto">See how professionals are accelerating their careers with AI-driven certification prep.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 reveal">
<iconify-icon className="text-white/10 mb-4 block" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                        "The AI identified gaps in my networking knowledge that I completely missed during self-study. Passed my AWS Solutions Architect exam on the first try with room to spare."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-xs font-medium text-white">
                            JD
                        </div>
<div>
<div className="text-sm font-medium text-white">James D.</div>
<div className="text-xs text-slate-500">Cloud Engineer</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 reveal delay-100">
<iconify-icon className="text-white/10 mb-4 block" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                        "The interface is gorgeous and the smart learning paths kept me entirely focused. It feels like having a private tutor who knows exactly what the exam will ask."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center text-xs font-medium text-white">
                            SM
                        </div>
<div>
<div className="text-sm font-medium text-white">Sarah M.</div>
<div className="text-xs text-slate-500">Cybersecurity Analyst</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 reveal delay-200">
<iconify-icon className="text-white/10 mb-4 block" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                        "I struggled with CompTIA materials until I used icertifyIT. The instant feedback and explanations for why answers were wrong were total game changers for me."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500/20 to-red-500/20 border border-white/10 flex items-center justify-center text-xs font-medium text-white">
                            RK
                        </div>
<div>
<div className="text-sm font-medium text-white">Raj K.</div>
<div className="text-xs text-slate-500">IT Administrator</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#03030a]" id="cta">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Start mastering certifications <br/> today with AI.
            </h2>
<p className="text-base text-slate-400 font-normal mb-10">
                Join thousands of professionals advancing their careers.
            </p>
<a className="btn-glow inline-flex items-center justify-center px-10 py-4 rounded-full bg-slate-900 text-white text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors gap-2" href="#">
                Access the App
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010105] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 sm:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">
                    icertify<span className="text-purple-400">IT</span>
</a>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Certifications</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-normal border-t border-white/5 pt-8">
<p>© 2024 icertifyIT. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
