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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 0. Data ---
        const experiences = [
            { id: "exp-cto", role: "CTO", company: "TIC Inventors pvt ltd", time: "Nov 2023 – Present", desc: "Overseeing technical operations & strategic tech direction", side: "left" },
            { id: "exp-ophead", role: "Operation HEAD", company: "House Of Hearts", time: "May 2025 – Present", desc: "Connecting people & building strong networks", side: "right" },
            { id: "exp-youth", role: "Youth Ambassador", company: "Virai Fission", time: "Dec 2024 – Present", desc: "Empowering youth initiatives", side: "left" },
            { id: "exp-astra", role: "Founder", company: "ASTRA TRIBE", time: "Nov 2024 – Present", desc: "ENJOYING MY LIFE WEARING THREAD OF CHAOS", side: "right", special: true },
            { id: "exp-president", role: "President", company: "Sanik Seva Sanstha", time: "NGO", desc: "Veteran support & community welfare", side: "left" },
            { id: "exp-r17", role: "Former CEO", company: "R17 Esport", time: "Past", desc: "Competitive gaming leadership", side: "right" }
        ];

        // --- 1. DOM Generation ---
        const expContainer = document.getElementById('experience-container');
        experiences.forEach((exp, index) => {
            const isLeft = exp.side === "left";
            const alignClass = "md:w-1/2 " + (isLeft ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto");
            const dotClass = isLeft ? "md:-right-[5px]" : "md:-left-[5px]";
            
            let specialStyles = exp.special ? `
                <div class="absolute inset-0 rounded-xl border-lightning opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" style="padding: 1px; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
            ` : '';

            let descHTML = exp.special ? 
                `<p class="text-[10px] sm:text-xs font-orbitron tracking-[0.2em] text-[#FF00FF] uppercase mt-4 [text-shadow:0_0_8px_rgba(255,0,255,0.4)] animate-pulse">${exp.desc}</p>` : 
                `<p class="text-sm text-gray-400 mt-3 leading-relaxed random-glitch-target">${exp.desc}</p>`;

            const html = `
                <div class="relative w-full flex flex-col md:flex-row items-center justify-between group exp-card" id="${exp.id}">
                    <!-- Timeline Dot -->
                    <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-[#05050A] border-2 border-white/20 group-hover:border-[#00FFFF] group-hover:bg-[#00FFFF] transition-all duration-300 z-20 ${isLeft ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} shadow-[0_0_0_rgba(0,255,255,0)] group-hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
                    
                    <div class="w-full ${alignClass} pl-10 md:pl-0 relative">
                        <!-- Mobile Line Connector -->
                        <div class="md:hidden absolute left-[15px] top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/20 group-hover:bg-[#00FFFF]"></div>
                        
                        <div class="bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden transform-gpu">
                            ${specialStyles}
                            <div class="relative z-10 card-content">
                                <h4 class="font-orbitron text-lg font-semibold tracking-tight text-white group-hover:text-[#00FFFF] transition-colors">${exp.role}</h4>
                                <h5 class="text-sm font-medium text-gray-300 mt-1">${exp.company}</h5>
                                <div class="text-[10px] font-orbitron tracking-widest text-[#FF3300] mt-2 uppercase">${exp.time}</div>
                                ${descHTML}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            expContainer.innerHTML += html;
        });

        // --- 2. Shatter Intro ---
        const shatterOverlay = document.getElementById('intro-shatter');
        const introText = document.getElementById('intro-text');
        const cols = 10, rows = 10;
        const fragments = [];
        
        // Temporarily show overlay text
        gsap.to(introText, { opacity: 1, duration: 0.5, yoyo: true, repeat: 3, onComplete: () => {
            introText.style.display = 'none';
            // Create grid fragments
            for(let i=0; i<rows; i++) {
                for(let j=0; j<cols; j++) {
                    const frag = document.createElement('div');
                    frag.className = 'absolute bg-[#05050A] border border-white/[0.02]';
                    frag.style.width = `${100/cols}vw`;
                    frag.style.height = `${100/rows}vh`;
                    frag.style.left = `${(j/cols)*100}vw`;
                    frag.style.top = `${(i/rows)*100}vh`;
                    shatterOverlay.appendChild(frag);
                    fragments.push(frag);
                }
            }
            
            // Animate fragments
            gsap.to(fragments, {
                duration: 1.5,
                scale: 0,
                rotation: "random(-180, 180)",
                x: "random(-200, 200)",
                y: "random(-200, 200)",
                opacity: 0,
                stagger: { amount: 0.8, from: "center" },
                ease: "power4.inOut",
                onComplete: () => shatterOverlay.remove()
            });
        }});

        // --- 3. Three.js Torus Knot (Thread of Chaos) ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Two overlapping knots for the cyber/neon look
        const geometry = new THREE.TorusKnotGeometry(12, 1.5, 120, 16);
        
        const matCyan = new THREE.MeshBasicMaterial({ color: 0x00FFFF, wireframe: true, transparent: true, opacity: 0.3 });
        const knotCyan = new THREE.Mesh(geometry, matCyan);
        
        const matFuchsia = new THREE.MeshBasicMaterial({ color: 0xFF00FF, wireframe: true, transparent: true, opacity: 0.3 });
        const knotFuchsia = new THREE.Mesh(geometry, matFuchsia);
        knotFuchsia.scale.set(1.02, 1.02, 1.02); // Slightly larger

        const knotGroup = new THREE.Group();
        knotGroup.add(knotCyan);
        knotGroup.add(knotFuchsia);
        scene.add(knotGroup);

        camera.position.z = 30;

        let mouseX = 0; let mouseY = 0;
        let targetX = 0; let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        let chaosMode = false;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        function animate3D() {
            requestAnimationFrame(animate3D);
            targetX = mouseX * .001;
            targetY = mouseY * .001;
            
            if(chaosMode) {
                knotGroup.rotation.x += 0.05;
                knotGroup.rotation.y += 0.05;
                matCyan.color.setHSL(Math.random(), 1, 0.5);
                matFuchsia.color.setHSL(Math.random(), 1, 0.5);
            } else {
                knotGroup.rotation.x += 0.005 + (targetY - knotGroup.rotation.x) * 0.05;
                knotGroup.rotation.y += 0.01 + (targetX - knotGroup.rotation.y) * 0.05;
                // Reset colors if mode toggled off
                matCyan.color.setHex(0x00FFFF);
                matFuchsia.color.setHex(0xFF00FF);
            }
            renderer.render(scene, camera);
        }
        animate3D();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- 4. Glowing Neon Thread Cursor ---
        const trailContainer = document.getElementById('cursor-trail-container');
        const trails = [];
        const trailLength = 15;
        
        for(let i=0; i<trailLength; i++) {
            const el = document.createElement('div');
            el.className = 'absolute w-1 h-1 rounded-full mix-blend-screen transition-opacity duration-700';
            // Gradient color from Cyan to Fuchsia
            const ratio = i / trailLength;
            el.style.backgroundColor = ratio < 0.5 ? '#00FFFF' : '#FF00FF';
            el.style.opacity = 1 - (i/trailLength);
            el.style.filter = `blur(${i/5}px)`;
            trailContainer.appendChild(el);
            trails.push({ el: el, x: 0, y: 0 });
        }

        let curX = 0, curY = 0;
        document.addEventListener('mousemove', (e) => {
            curX = e.clientX; curY = e.clientY;
        });

        function animateCursor() {
            let x = curX, y = curY;
            trails.forEach((pt, index) => {
                const nextPt = trails[index + 1] || trails[0];
                pt.x = x; pt.y = y;
                pt.el.style.transform = `translate(${x}px, ${y}px)`;
                // Smooth follow logic for the next dot
                x += (nextPt.x - x) * 0.5;
                y += (nextPt.y - y) * 0.5;
            });
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // --- 5. Glitch Name Effect (Constant + Chromatic) ---
        const g1 = document.getElementById('glitch-1');
        const g2 = document.getElementById('glitch-2');
        setInterval(() => {
            if(chaosMode) return; // let chaos mode handle it differently if needed
            gsap.to(g1, { x: `random(-4, 4)`, y: `random(-2, 2)`, opacity: "random(0.5, 0.9)", duration: 0.1 });
            gsap.to(g2, { x: `random(-4, 4)`, y: `random(-2, 2)`, opacity: "random(0.5, 0.9)", duration: 0.1 });
        }, 150);

        // --- 6. Rotating Title ---
        const rotator = document.getElementById('title-rotator');
        let titleIdx = 0;
        const totalTitles = 5;
        setInterval(() => {
            titleIdx = (titleIdx + 1) % totalTitles;
            // Height is defined in Tailwind classes (h-8 md:h-10). Assuming roughly 40px max for translation math.
            // A safer cross-device way is percentage based on the parent's height or children length.
            gsap.to(rotator, { yPercent: -(titleIdx * 20), duration: 0.7, ease: "back.inOut(1.5)" });
        }, 3000);

        // --- 7. Card Hover Destruction & Scroll Jacking (Visual) ---
        const cards = document.querySelectorAll('.exp-card');
        
        cards.forEach(card => {
            const innerContent = card.querySelector('.card-content');
            
            card.addEventListener('mouseenter', () => {
                // Card Explosion effect (Visual only to preserve layout)
                gsap.to(card, { scale: 0.95, duration: 0.2, ease: "power2.out" });
                gsap.to(innerContent, { filter: "blur(2px) contrast(200%) hue-rotate(90deg)", opacity: 0.8, x: "random(-5,5)", duration: 0.1, yoyo: true, repeat: 3 });
                setTimeout(() => {
                    gsap.to(card, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" });
                    gsap.to(innerContent, { filter: "none", opacity: 1, x: 0, duration: 0.2 });
                }, 300);
            });
        });

        // Visual Scroll Jack (Electric whip shake)
        const sections = document.querySelectorAll('.section-snap');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.body.classList.add('screen-shake');
                    setTimeout(() => document.body.classList.remove('screen-shake'), 300);
                }
            });
        }, { threshold: 0.3 });
        sections.forEach(sec => observer.observe(sec));

        // --- 8. ASTRA TRIBE Constellation Effect ---
        const astraCard = document.getElementById('exp-astra');
        const constCanvas = document.getElementById('constellation-canvas');
        const ctx = constCanvas.getContext('2d');
        
        function resizeConstCanvas() {
            constCanvas.width = window.innerWidth;
            constCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeConstCanvas);
        resizeConstCanvas();

        let constellationActive = false;
        
        function drawConstellation() {
            if(!constellationActive) return;
            ctx.clearRect(0, 0, constCanvas.width, constCanvas.height);
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
            ctx.lineWidth = 1;
            
            // Get center of Astra card
            const astraRect = astraCard.getBoundingClientRect();
            const startX = astraRect.left + astraRect.width/2;
            const startY = astraRect.top + astraRect.height/2;

            cards.forEach(card => {
                if(card.id !== 'exp-astra') {
                    const rect = card.getBoundingClientRect();
                    const endX = rect.left + rect.width/2;
                    const endY = rect.top + rect.height/2;
                    
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                    ctx.stroke();
                    
                    // Draw node
                    ctx.beginPath();
                    ctx.arc(endX, endY, 3, 0, Math.PI*2);
                    ctx.fillStyle = '#FF00FF';
                    ctx.fill();
                }
            });
            requestAnimationFrame(drawConstellation);
        }

        astraCard.addEventListener('mouseenter', () => {
            constellationActive = true;
            constCanvas.classList.remove('opacity-0');
            constCanvas.classList.add('opacity-100');
            document.body.style.backgroundColor = '#020205'; // Darken bg
            drawConstellation();
        });
        
        astraCard.addEventListener('mouseleave', () => {
            constellationActive = false;
            constCanvas.classList.add('opacity-0');
            constCanvas.classList.remove('opacity-100');
            document.body.style.backgroundColor = '#05050A';
            ctx.clearRect(0, 0, constCanvas.width, constCanvas.height);
        });

        // --- 9. Glitch Outbreak (Every 7s) ---
        const targetTexts = document.querySelectorAll('.random-glitch-target');
        setInterval(() => {
            if(targetTexts.length === 0) return;
            const target = targetTexts[Math.floor(Math.random() * targetTexts.length)];
            const words = target.innerText.split(' ');
            if(words.length === 0) return;
            
            const wordIdx = Math.floor(Math.random() * words.length);
            const originalWord = words[wordIdx];
            // Wrap in span with class
            words[wordIdx] = `<span class="text-glitch inline-block">${originalWord}</span>`;
            target.innerHTML = words.join(' ');
            
            setTimeout(() => {
                // Restore
                target.innerHTML = target.innerText; // Simple restoration
            }, 1000);
        }, 7000);

        // --- 10. Contact Button Scanline ---
        const contactBtn = document.getElementById('contact-btn');
        contactBtn.addEventListener('click', () => {
            const scan = document.createElement('div');
            scan.className = 'scanline';
            document.body.appendChild(scan);
            
            // Particle burst simple logic
            for(let i=0; i<30; i++) {
                const p = document.createElement('div');
                p.className = 'fixed w-1 h-1 bg-[#00FFFF] rounded-full z-[9998] pointer-events-none';
                p.style.left = '50%'; p.style.top = '50%';
                document.body.appendChild(p);
                gsap.to(p, {
                    x: `random(-300, 300)`, y: `random(-300, 300)`,
                    opacity: 0, scale: "random(0.5, 2)", duration: "random(0.5, 1.5)",
                    onComplete: () => p.remove()
                });
            }

            gsap.to(scan, { top: '100%', duration: 1.5, ease: "power1.inOut", onComplete: () => scan.remove() });
        });

        // --- 11. Keyboard Easter Egg (CHAOS) ---
        let keySequence = [];
        const konamiString = "chaos";
        document.addEventListener('keydown', (e) => {
            keySequence.push(e.key.toLowerCase());
            keySequence = keySequence.slice(-5);
            if(keySequence.join('') === konamiString) {
                // Trigger Chaos Rotation
                gsap.to("section, .exp-card, h1, h2, h3", { 
                    rotation: "random(-10, 10)", 
                    x: "random(-20,20)", 
                    y: "random(-20,20)", 
                    duration: 0.1, 
                    yoyo: true, 
                    repeat: 20,
                    onComplete: () => {
                        gsap.set("section, .exp-card, h1, h2, h3", { clearProps: "all" });
                    }
                });
            }
        });

        // --- 12. Thread of Chaos Toggle Mode ---
        const chaosToggle = document.getElementById('chaos-toggle');
        chaosToggle.addEventListener('change', (e) => {
            chaosMode = e.target.checked;
            if(chaosMode) {
                document.body.classList.add('chaos-active');
                gsap.to('body', { backgroundColor: '#1a001a', duration: 1 });
            } else {
                document.body.classList.remove('chaos-active');
                gsap.to('body', { backgroundColor: '#05050A', duration: 1 });
            }
        });

    
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
      

<div className="fixed inset-0 z-[100] bg-[#05050A] flex items-center justify-center pointer-events-none" id="intro-shatter">
<div className="font-orbitron tracking-tighter text-3xl font-semibold text-[#00FFFF] opacity-0" id="intro-text">INITIALIZING CHAOS...</div>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" id="three-canvas"></canvas>

<canvas className="fixed inset-0 z-[5] pointer-events-none opacity-0 transition-opacity duration-700" id="constellation-canvas"></canvas>

<div className="fixed inset-0 z-50 pointer-events-none" id="cursor-trail-container"></div>

<nav className="fixed top-0 w-full z-40 px-8 py-6 flex justify-between items-center mix-blend-difference">
<div className="font-orbitron font-semibold tracking-tighter text-xl text-white">RR.</div>

<label className="flex items-center cursor-pointer gap-3 text-xs uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-[#00FFFF] transition-colors group">
<span className="hidden md:block">Thread of Chaos</span>
<div className="relative">
<input className="sr-only peer" id="chaos-toggle" type="checkbox"/>
<div className="w-10 h-5 bg-white/10 rounded-full border border-white/20 peer-checked:bg-[#FF00FF]/20 peer-checked:border-[#FF00FF] transition-all duration-300"></div>
<div className="absolute left-[2px] top-[2px] w-4 h-4 bg-gray-400 rounded-full peer-checked:translate-x-5 peer-checked:bg-[#00FFFF] transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0)] peer-checked:shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
</div>
</label>
</nav>

<main className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-40" id="main-content">

<section className="min-h-[70vh] flex flex-col justify-center items-start relative section-snap">

<div className="relative mb-6 cursor-default group">
<h1 className="font-orbitron text-5xl md:text-8xl tracking-tighter font-semibold text-white relative z-10" id="main-name">RUDRAKSH RAUT</h1>
<h1 className="font-orbitron text-5xl md:text-8xl tracking-tighter font-semibold text-[#00FFFF] glitch-layer z-0 opacity-70 translate-x-[-2px]" id="glitch-1">RUDRAKSH RAUT</h1>
<h1 className="font-orbitron text-5xl md:text-8xl tracking-tighter font-semibold text-[#FF00FF] glitch-layer z-0 opacity-70 translate-x-[2px]" id="glitch-2">RUDRAKSH RAUT</h1>
</div>

<div className="h-8 md:h-10 overflow-hidden mb-6 relative w-full">
<div className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" id="title-rotator">
<h2 className="font-orbitron text-lg md:text-2xl tracking-tighter font-medium text-[#00FFFF] h-8 md:h-10 flex items-center">CTO at TIC Inventors</h2>
<h2 className="font-orbitron text-lg md:text-2xl tracking-tighter font-medium text-[#FF00FF] h-8 md:h-10 flex items-center">Founder of ASTRA TRIBE</h2>
<h2 className="font-orbitron text-lg md:text-2xl tracking-tighter font-medium text-white h-8 md:h-10 flex items-center">President at Sanik Seva Sanstha</h2>
<h2 className="font-orbitron text-lg md:text-2xl tracking-tighter font-medium text-[#FF3300] h-8 md:h-10 flex items-center">Founder of R17 Gaming</h2>
<h2 className="font-orbitron text-lg md:text-2xl tracking-tighter font-medium text-[#00FFFF] h-8 md:h-10 flex items-center">Wearing the Thread of Chaos</h2>
</div>
</div>
<p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed random-glitch-target">
                Technology × Social Impact × Esports — One Thread of Chaos
            </p>
<button className="mt-12 group relative px-6 py-3 rounded-md overflow-hidden bg-white/5 border border-white/10 hover:border-[#00FFFF]/50 transition-colors backdrop-blur-sm" id="contact-btn">
<span className="relative z-10 font-orbitron text-xs tracking-[0.15em] uppercase text-white group-hover:text-[#00FFFF] transition-colors flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> Initiate Contact
                </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FFFF]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
</button>
</section>

<section className="section-snap">
<h3 className="font-orbitron text-2xl md:text-3xl tracking-tighter font-semibold text-white mb-12 flex items-center gap-3">
<iconify-icon className="text-[#00FFFF]" icon="solar:cpu-linear"></iconify-icon> TECH ARSENAL
            </h3>
<div className="flex flex-wrap gap-8 items-center justify-start">

<div className="relative w-24 h-28 group [perspective:1000px]">
<div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 hex-shape bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 [backface-visibility:hidden]">
<iconify-icon className="text-2xl text-gray-400" icon="solar:programming-linear"></iconify-icon>
<span className="text-[10px] font-orbitron tracking-wider text-center px-2 text-white">TECH LEAD</span>
</div>
<div className="absolute inset-0 hex-shape bg-[#00FFFF]/10 border border-[#00FFFF]/50 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
<span className="text-xs font-orbitron tracking-wider text-[#00FFFF]">STRATEGY</span>
</div>
</div>
</div>
<div className="relative w-24 h-28 group [perspective:1000px]">
<div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 hex-shape bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 [backface-visibility:hidden]">
<iconify-icon className="text-2xl text-gray-400" icon="solar:server-square-linear"></iconify-icon>
<span className="text-[10px] font-orbitron tracking-wider text-white">NODE.JS</span>
</div>
<div className="absolute inset-0 hex-shape bg-[#339933]/10 border border-[#339933]/50 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
<span className="text-xs font-orbitron tracking-wider text-[#339933]">BACKEND</span>
</div>
</div>
</div>
<div className="relative w-24 h-28 group [perspective:1000px]">
<div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 hex-shape bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 [backface-visibility:hidden]">
<iconify-icon className="text-2xl text-gray-400" icon="solar:code-square-linear"></iconify-icon>
<span className="text-[10px] font-orbitron tracking-wider text-white">PHP</span>
</div>
<div className="absolute inset-0 hex-shape bg-[#777BB4]/10 border border-[#777BB4]/50 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
<span className="text-xs font-orbitron tracking-wider text-[#777BB4]">LEGACY</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative section-snap">

<div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF00FF]/40 to-transparent md:-translate-x-1/2 z-0"></div>
<h3 className="font-orbitron text-2xl md:text-3xl tracking-tighter font-semibold text-white mb-16 text-center relative z-10">EXPERIENCE ARCHIVE</h3>
<div className="flex flex-col gap-12 relative z-10 w-full" id="experience-container">

</div>
</section>

<section className="section-snap border-t border-white/10 pt-16">
<h3 className="font-orbitron text-2xl md:text-3xl tracking-tighter font-semibold text-white mb-8 flex items-center gap-3">
<iconify-icon className="text-[#FF3300]" icon="solar:diploma-linear"></iconify-icon> EDUCATION
            </h3>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl backdrop-blur-sm max-w-md hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF3300]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h4 className="font-orbitron font-medium tracking-tight text-white mb-1">The CDS</h4>
<p className="text-xs tracking-widest text-[#FF3300] mb-3 uppercase font-medium">Indian School Certificate, Science</p>
<p className="text-sm text-gray-500">Class of 2009</p>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-white/10 mt-20 py-12 text-center flex flex-col items-center gap-6 overflow-hidden">
<div className="relative w-12 h-12 flex items-center justify-center [perspective:500px]">
<div className="font-orbitron font-bold text-2xl tracking-tighter text-white animate-[spin_4s_linear_infinite] [transform-style:preserve-3d]">R17</div>
</div>
<p className="font-orbitron text-xs tracking-widest uppercase text-gray-500">Rudraksh Raut — Wearing the Thread of Chaos</p>
</footer>



    </>
  );
}
