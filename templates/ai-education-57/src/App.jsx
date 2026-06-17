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



        // Initialize Lenis Smooth Scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Loading Screen Animation
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            // Holds for 1.5s total (css animation is 1.5s), then slides up
            setTimeout(() => {
                loader.style.transform = 'translateY(-100%)';
            }, 1500);
        });

        // Spring Animated Custom Cursor
        const cursor = document.getElementById('custom-cursor');
        const interactives = document.querySelectorAll('.interactive, a, button, .glass-panel');
        
        let cursorX = window.innerWidth / 2;
        let cursorY = window.innerHeight / 2;
        let targetCursorX = cursorX;
        let targetCursorY = cursorY;
        let cursorScale = 1;
        let targetCursorScale = 1;

        if(window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                targetCursorX = e.clientX;
                targetCursorY = e.clientY;
            });

            interactives.forEach(el => {
                // Scales 8px * 5 = 40px
                el.addEventListener('mouseenter', () => targetCursorScale = 5);
                el.addEventListener('mouseleave', () => targetCursorScale = 1);
            });

            function updateCursor() {
                // Spring lerp logic
                cursorX += (targetCursorX - cursorX) * 0.15;
                cursorY += (targetCursorY - cursorY) * 0.15;
                cursorScale += (targetCursorScale - cursorScale) * 0.15;
                
                cursor.style.transform = `translate(-50%, -50%) scale(${cursorScale})`;
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(updateCursor);
            }
            updateCursor();
        }

        // Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        document.addEventListener('mousemove', (e) => {
            magneticBtns.forEach(btn => {
                const rect = btn.getBoundingClientRect();
                const btnCenterX = rect.left + rect.width / 2;
                const btnCenterY = rect.top + rect.height / 2;
                const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
                
                // If within 100px, pull the button towards cursor slightly
                if (distance < 100) {
                    const x = (e.clientX - btnCenterX) * 0.3;
                    const y = (e.clientY - btnCenterY) * 0.3;
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                } else {
                    btn.style.transform = `translate(0px, 0px)`;
                }
            });
        });

        // Navbar Transition (Transparent to Glass after 100px)
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-black/60', 'backdrop-blur-xl', 'border-white/5');
                navbar.classList.remove('bg-transparent', 'border-transparent');
                navbar.classList.remove('opacity-0', '-translate-y-full');
            } else {
                navbar.classList.add('bg-transparent', 'border-transparent');
                navbar.classList.remove('bg-black/60', 'backdrop-blur-xl', 'border-white/5');
                if(window.scrollY < 10 && !navbar.classList.contains('initial-hide')) {
                    navbar.classList.add('opacity-0', '-translate-y-full');
                }
            }
        });
        setTimeout(() => navbar.classList.remove('initial-hide'), 1500);

        // Scroll Reveal & Spring Counters (Slot Machine Effect)
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                    
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        let current = 0;
                        let velocity = 0;
                        const tension = 0.04; // How hard it pulls to target
                        const friction = 0.85; // How much it dampens (lower = more bouncy/overshoot)
                        
                        const updateCounter = () => {
                            const diff = target - current;
                            velocity += diff * tension;
                            velocity *= friction;
                            current += velocity;
                            
                            // Stop condition
                            if (Math.abs(diff) < 0.5 && Math.abs(velocity) < 0.5) {
                                counter.innerText = target.toLocaleString();
                            } else {
                                counter.innerText = Math.round(current).toLocaleString();
                                requestAnimationFrame(updateCounter);
                            }
                        };
                        updateCounter();
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // ----------------------------------------------------------------------
        // 3D KNOWLEDGE GRAPH SIMULATION (Vanilla JS Canvas)
        // Simulates R3F postprocessing (Bloom & Node Pulsing)
        // ----------------------------------------------------------------------
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let nodes = [];
        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;
        
        const colors = ['#22c55e', '#d97706', '#ef4444', '#64748b', '#a855f7'];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        window.addEventListener('mousemove', (e) => {
            targetMouseX = (e.clientX / width) * 2 - 1;
            targetMouseY = (e.clientY / height) * 2 - 1;
        });

        class Node {
            constructor() {
                this.theta = Math.random() * Math.PI * 2;
                this.phi = Math.acos((Math.random() * 2) - 1);
                this.radius = 150 + Math.random() * 250;
                
                this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
                this.y = this.radius * Math.sin(this.phi) * Math.sin(this.theta);
                this.z = this.radius * Math.cos(this.phi);
                
                this.baseSize = 2 + Math.random() * 4;
                
                const rand = Math.random();
                if(rand < 0.4) this.color = colors[0];
                else if(rand < 0.6) this.color = colors[3];
                else if(rand < 0.8) this.color = colors[1];
                else if(rand < 0.9) this.color = colors[2];
                else { this.color = colors[4]; this.baseSize *= 1.5; }

                this.phase = Math.random() * Math.PI * 2;
                
                // Pulsing setup
                this.pulseTimer = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.02 + Math.random() * 0.03;
            }
        }

        const numNodes = window.innerWidth < 768 ? 25 : 50;
        for(let i=0; i<numNodes; i++) nodes.push(new Node());

        let time = 0;

        function render() {
            // Slight trails / simulate Bloom threshold luminance
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'rgba(10, 15, 10, 0.4)';
            ctx.fillRect(0, 0, width, height);
            
            ctx.globalCompositeOperation = 'lighter'; // Enhances Bloom effect
            
            time += 0.005;
            
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            const centerX = width / 2;
            const centerY = height / 2;
            
            const rotY = time + (mouseX * 0.5);
            const rotX = -0.2 + (mouseY * 0.2);

            const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

            let projectedNodes = [];

            nodes.forEach(node => {
                const currentY = node.y + Math.sin(time * 2 + node.phase) * 20;

                let x1 = node.x * cosY - node.z * sinY;
                let z1 = node.z * cosY + node.x * sinY;

                let y2 = currentY * cosX - z1 * sinX;
                let z2 = z1 * cosX + currentY * sinX;

                const fov = 800;
                const distance = fov + z2;
                const scale = distance > 0 ? fov / distance : 0;

                const projX = centerX + x1 * scale;
                const projY = centerY + y2 * scale;
                
                // Pulse size (0.95 to 1.05)
                const pulseScale = 1 + Math.sin(node.pulseTimer) * 0.05;
                node.pulseTimer += node.pulseSpeed;

                projectedNodes.push({
                    x: projX, y: projY, z: z2,
                    scale: scale, size: node.baseSize * scale * pulseScale,
                    color: node.color, original: node
                });
            });

            projectedNodes.sort((a, b) => b.z - a.z);

            ctx.lineWidth = 0.5;
            for(let i=0; i<projectedNodes.length; i++) {
                for(let j=i+1; j<projectedNodes.length; j++) {
                    const n1 = projectedNodes[i];
                    const n2 = projectedNodes[j];
                    
                    const dx = n1.original.x - n2.original.x;
                    const dy = n1.original.y - n2.original.y;
                    const dz = n1.original.z - n2.original.z;
                    const distSq = dx*dx + dy*dy + dz*dz;

                    if(distSq < 25000) {
                        const alpha = Math.max(0.02, 0.15 - (n1.z + 200)/1000);
                        const isFiring = Math.random() < 0.001;

                        ctx.beginPath();
                        ctx.moveTo(n1.x, n1.y);
                        ctx.lineTo(n2.x, n2.y);
                        
                        if(isFiring) {
                            ctx.strokeStyle = '#22c55e';
                            ctx.lineWidth = 1.5;
                            // Bloom effect for signal
                            ctx.shadowBlur = 10;
                            ctx.shadowColor = '#22c55e';
                        } else {
                            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                            ctx.lineWidth = 0.5;
                            ctx.shadowBlur = 0;
                        }
                        
                        ctx.stroke();
                        ctx.shadowBlur = 0; // Reset
                    }
                }
            }

            projectedNodes.forEach(node => {
                if(node.scale <= 0) return;

                const alpha = Math.max(0.1, 1 - (node.z + 200)/600);
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                
                // Simulating Bloom Intensity 0.8
                if(node.z < 150) {
                    ctx.shadowBlur = 20 * node.scale;
                    ctx.shadowColor = node.color;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fillStyle = node.color;
                ctx.globalAlpha = alpha;
                ctx.fill();
                ctx.globalAlpha = 1.0;
                ctx.shadowBlur = 0;
            });

            requestAnimationFrame(render);
        }

        render();
    
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
      

<div id="loader">
<h1 className="font-serif text-3xl md:text-5xl tracking-tight loader-text">Sapling</h1>
</div>
<div className="noise-bg"></div>
<div className="hidden md:block" id="custom-cursor"></div>

<nav className="fixed top-0 w-full z-40 transition-all duration-500 py-4 opacity-0 -translate-y-full bg-transparent border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<a className="font-serif text-xl tracking-tight text-white interactive" href="#">Sapling</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors interactive" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors interactive" href="#features">Features</a>
<a className="hover:text-white transition-colors interactive" href="#pricing">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden md:block interactive" href="#">Sign In</a>
<a className="magnetic-btn text-sm font-semibold bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-full transition-all interactive shadow-[0_0_15px_rgba(34,197,94,0.3)]" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">

<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none" id="hero-canvas"></canvas>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-0 pointer-events-none"></div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0f0a] to-transparent z-10"></div>
<div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<div className="reveal-up" style={{transitionDelay: '0.1s'}}>
<span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-green-400 mb-6 border border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
<span>Sapling AI is now in Beta</span>
</span>
</div>
<h1 className="reveal-up font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[1.1]" style={{transitionDelay: '0.2s'}}>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-green-500/80 drop-shadow-sm">Your mind,</span><br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">mapped.</span>
</h1>
<p className="reveal-up text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light" style={{transitionDelay: '0.3s'}}>
                Sapling is an AI study companion that builds a living knowledge graph as you learn — adapting to how you think, not just what you study.
            </p>
<div className="reveal-up flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4" style={{transitionDelay: '0.4s'}}>
<a className="magnetic-btn interactive btn-glow w-full sm:w-auto px-8 py-3.5 rounded-full bg-green-500 text-black font-semibold text-sm transition-colors shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center" href="#">
                    Get Started
                </a>
<a className="magnetic-btn interactive w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel text-white font-medium text-sm hover:bg-white/10 flex items-center justify-center group" href="#">
<iconify-icon className="mr-2 text-lg group-hover:text-green-400 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </a>
</div>
</div>
</section>

<section className="py-24 relative z-20" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">How it works</h2>
<p className="text-sm text-slate-400">A seamless process from raw materials to structured understanding.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-up glass-panel rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-green-500/40 hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)] relative overflow-hidden" style={{transitionDelay: '0.1s'}}>
<div className="absolute top-0 right-0 p-6 text-5xl font-serif text-white/5 font-semibold group-hover:text-green-500/10 transition-colors">01</div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-transparent flex items-center justify-center border border-green-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-green-400" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Upload</h3>
<p className="text-sm text-slate-400 leading-relaxed">Drop your syllabus, lecture notes, or slides. Sapling extracts every concept and deadline automatically.</p>
</div>

<div className="reveal-up glass-panel rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_10px_30px_rgba(217,119,6,0.1)] relative overflow-hidden" style={{transitionDelay: '0.2s'}}>
<div className="absolute top-0 right-0 p-6 text-5xl font-serif text-white/5 font-semibold group-hover:text-amber-500/10 transition-colors">02</div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center border border-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-amber-400" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Learn</h3>
<p className="text-sm text-slate-400 leading-relaxed">Chat with your AI tutor in Socratic, Expository, or Teach-Back mode. It adapts to how you learn best.</p>
</div>

<div className="reveal-up glass-panel rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_10px_30px_rgba(124,58,237,0.1)] relative overflow-hidden" style={{transitionDelay: '0.3s'}}>
<div className="absolute top-0 right-0 p-6 text-5xl font-serif text-white/5 font-semibold group-hover:text-violet-500/10 transition-colors">03</div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-transparent flex items-center justify-center border border-violet-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-violet-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Grow</h3>
<p className="text-sm text-slate-400 leading-relaxed">Watch your knowledge graph evolve in real-time. See what you've mastered, what needs work, and what to study next.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 reveal-up">
<div className="glass-panel rounded-3xl p-2 relative aspect-square max-w-md mx-auto shadow-2xl overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 space-x-1.5 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>

<div className="w-full h-full bg-[#050805] rounded-[1.25rem] relative overflow-hidden flex items-center justify-center mt-2 border border-white/5">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="absolute z-10 w-16 h-16 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-transform group-hover:scale-110 duration-500">
<div className="w-6 h-6 rounded-full bg-green-400 animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" opacity="0.4">
<line stroke="#22c55e" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="20%" y1="50%" y2="30%"></line>
<line stroke="#d97706" strokeWidth="1.5" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line stroke="#64748b" strokeWidth="1.5" x1="50%" x2="75%" y1="50%" y2="75%"></line>
<line stroke="#a855f7" strokeWidth="1.5" x1="50%" x2="25%" y1="50%" y2="80%"></line>
<circle fill="#22c55e" r="2"><animatemotion dur="3s" path="M 50% 50% L 20% 30%" repeatcount="indefinite"></animatemotion></circle>
</svg>
<div className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full bg-green-500/10 border border-green-500/50 transform -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-[20%] left-[80%] w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"><div className="w-2 h-2 bg-amber-400 rounded-full"></div></div>
<div className="absolute top-[75%] left-[75%] w-6 h-6 rounded-full bg-slate-500/10 border border-slate-500/50 transform -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-[80%] left-[25%] w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"><div className="w-3 h-3 bg-violet-400 rounded-full"></div></div>
<div className="absolute bottom-6 right-6 glass-panel px-3 py-1.5 rounded-lg text-xs font-medium text-white flex items-center space-x-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Mastery: 84%</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="reveal-up text-3xl md:text-4xl font-serif tracking-tight text-white mb-6">Your knowledge,<br/><span className="text-green-400">visualized.</span></h2>
<ul className="space-y-4 mb-10">
<li className="reveal-up flex items-center space-x-3 text-sm text-slate-300" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-green-400 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Real-time mastery tracking</span>
</li>
<li className="reveal-up flex items-center space-x-3 text-sm text-slate-300" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-green-400 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Concept connections mapped automatically</span>
</li>
<li className="reveal-up flex items-center space-x-3 text-sm text-slate-300" style={{transitionDelay: '0.3s'}}>
<iconify-icon className="text-green-400 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Course-by-course breakdown</span>
</li>
<li className="reveal-up flex items-center space-x-3 text-sm text-slate-300" style={{transitionDelay: '0.4s'}}>
<iconify-icon className="text-green-400 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>AI-powered study recommendations</span>
</li>
</ul>

<div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
<div className="reveal-up" style={{transitionDelay: '0.5s'}}>
<div className="text-3xl font-serif text-white mb-1 tracking-tight flex items-baseline">
<span className="counter" data-target="10000">0</span>+
                            </div>
<div className="text-xs text-slate-400">Concepts mapped</div>
</div>
<div className="reveal-up" style={{transitionDelay: '0.6s'}}>
<div className="text-3xl font-serif text-white mb-1 tracking-tight flex items-baseline">
<span className="counter" data-target="98">0</span>%
                            </div>
<div className="text-xs text-slate-400">Say they learn faster</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050805]/50 border-y border-white/5 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">Three ways to learn</h2>
<p className="text-sm text-slate-400 max-w-xl mx-auto">Different concepts require different approaches. Sapling adapts its teaching style on the fly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-up glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full" style={{transitionDelay: '0.1s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 group-hover:bg-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-all"></div>
<iconify-icon className="text-3xl text-green-400 mb-6" icon="solar:question-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Socratic Mode</h3>
<p className="text-sm text-slate-400 flex-grow">Guided questions that help you reason through problems instead of just giving you the answer. Builds deep intuition.</p>
</div>

<div className="reveal-up glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full" style={{transitionDelay: '0.2s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-amber-500/50 group-hover:bg-amber-400 group-hover:shadow-[0_0_15px_rgba(217,119,6,0.6)] transition-all"></div>
<iconify-icon className="text-3xl text-amber-400 mb-6" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Expository Mode</h3>
<p className="text-sm text-slate-400 flex-grow">Clear, direct explanations when you are completely stuck or encountering a concept for the very first time.</p>
</div>

<div className="reveal-up glass-panel rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full" style={{transitionDelay: '0.3s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-violet-500/50 group-hover:bg-violet-400 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] transition-all"></div>
<iconify-icon className="text-3xl text-violet-400 mb-6" icon="solar:user-speak-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Teach-Back Mode</h3>
<p className="text-sm text-slate-400 flex-grow">Explain concepts back to the AI in your own words to test true understanding and expose hidden gaps.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">Everything you need</h2>
<p className="text-sm text-slate-400">Built specifically for the rigors of higher education.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="reveal-up glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
<iconify-icon className="text-2xl text-slate-300 mb-4 group-hover:text-green-400 transition-colors" icon="solar:folder-with-files-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Smart Library</h4>
<p className="text-xs text-slate-400">Organize all course materials in one searchable index.</p>
</div>
<div className="reveal-up glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-2xl text-slate-300 mb-4 group-hover:text-green-400 transition-colors" icon="solar:test-tube-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Adaptive Quizzes</h4>
<p className="text-xs text-slate-400">AI generates questions targeting your specific weak areas.</p>
</div>
<div className="reveal-up glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-2xl text-slate-300 mb-4 group-hover:text-green-400 transition-colors" icon="solar:calendar-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Calendar Sync</h4>
<p className="text-xs text-slate-400">Integrates with Google Calendar to plan study sessions.</p>
</div>
<div className="reveal-up glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group" style={{transitionDelay: '0.3s'}}>
<iconify-icon className="text-2xl text-slate-300 mb-4 group-hover:text-green-400 transition-colors" icon="solar:scanner-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Syllabus Extraction</h4>
<p className="text-xs text-slate-400">Automatically pulls dates, readings, and grading rubrics.</p>
</div>
<div className="reveal-up glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group" style={{transitionDelay: '0.4s'}}>
<iconify-icon className="text-2xl text-slate-300 mb-4 group-hover:text-green-400 transition-colors" icon="solar:chart-square-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Class Analytics</h4>
<p className="text-xs text-slate-400">See common misconceptions among your peers.</p>
</div>
<div className="reveal-up glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group" style={{transitionDelay: '0.5s'}}>
<iconify-icon className="text-2xl text-slate-300 mb-4 group-hover:text-green-400 transition-colors" icon="solar:network-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white mb-1">Exportable Graphs</h4>
<p className="text-xs text-slate-400">Export your visual knowledge map for presentations.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 filter blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 text-center max-w-2xl mx-auto px-6 reveal-up">
<h2 className="font-serif text-4xl md:text-6xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-green-400">Ready to grow?</h2>
<p className="text-sm md:text-base text-slate-400 mb-10">Join thousands of students building their knowledge, one concept at a time.</p>
<a className="magnetic-btn interactive inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#1a5c2a] to-teal-800 text-white font-semibold text-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-green-500/30" href="#">
                Get Started — It's Free
            </a>
<p className="text-xs text-slate-500 mt-4">No credit card required. Cancel anytime.</p>
</div>
</section>

<footer className="border-t border-green-500/20 bg-[#050805] pt-16 pb-8 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<a className="font-serif text-2xl tracking-tight text-white mb-4 inline-block" href="#">Sapling</a>
<p className="text-xs text-slate-500 max-w-xs">The AI-powered study companion that builds a living knowledge graph as you learn.</p>
</div>
<div>
<h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h5>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Features</a></li>
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Pricing</a></li>
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Company</h5>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-green-400 transition-colors interactive" href="#">About</a></li>
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Blog</a></li>
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal</h5>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Privacy</a></li>
<li><a className="hover:text-green-400 transition-colors interactive" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-500">
<p>© 2024 Sapling Inc. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors interactive" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors interactive" href="#"><iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
