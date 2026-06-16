import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // --- 0. THEME TOGGLE LOGIC ---
            const toggleBtn = document.getElementById('theme-toggle');
            const sunIcon = toggleBtn.querySelector('.dark-icon');
            const moonIcon = toggleBtn.querySelector('.light-icon');
            
            toggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('light-mode');
                const isLight = document.body.classList.contains('light-mode');
                
                if (isLight) {
                    sunIcon.style.transform = 'rotate(-90deg) scale(0)';
                    sunIcon.style.opacity = '0';
                    moonIcon.style.transform = 'rotate(0) scale(1)';
                    moonIcon.style.opacity = '1';
                } else {
                    sunIcon.style.transform = 'rotate(0) scale(1)';
                    sunIcon.style.opacity = '1';
                    moonIcon.style.transform = 'rotate(90deg) scale(0)';
                    moonIcon.style.opacity = '0';
                }
            });

            // --- 1. PRELOADER & CHAINED REVEAL ---
            const preloader = document.getElementById('preloader');
            const progress = document.getElementById('loader-progress');
            const text = document.getElementById('loader-text');
            const trailImagesData = ['https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200','https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200','https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200'];
            trailImagesData.forEach(src => { const img = new Image(); img.src = src; });

            let loadVal = 0;
            const loadInterval = setInterval(() => {
                loadVal += Math.floor(Math.random() * 10) + 1;
                if(loadVal > 100) loadVal = 100;
                progress.style.width = loadVal + '%'; text.innerText = loadVal + '%';
                
                if(loadVal === 100) { 
                    clearInterval(loadInterval); 
                    // Wait briefly before lifting curtain
                    setTimeout(() => {
                        preloader.classList.add('loaded');
                        // Trigger Hero Animations AFTER curtain lifts
                        setTimeout(() => {
                            const heroItems = document.querySelectorAll('.hero-anim');
                            heroItems.forEach((item, index) => {
                                setTimeout(() => item.classList.add('active'), index * 100);
                            });
                        }, 800);
                    }, 500); 
                }
            }, 30);

            // --- 2. CURSOR & TRAIL (UPDATED) ---
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorCircle = document.querySelector('.cursor-circle');
            const trailContainer = document.getElementById('trail-container');
            const magneticSection = document.getElementById('magnetic-section');
            let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px';

                // UPDATED: Restrict trail effect to magnetic-wrap elements only
                if (e.target.closest('.magnetic-wrap')) {
                     if(Math.random() < 0.15) { 
                         const img = document.createElement('img');
                         img.src = trailImagesData[Math.floor(Math.random() * trailImagesData.length)];
                         img.className = 'trail-img';
                         img.style.left = mouseX + 'px'; img.style.top = mouseY + 'px';
                         img.style.setProperty('--r', (Math.random() * 30 - 15) + 'deg');
                         document.body.appendChild(img); setTimeout(() => img.remove(), 600);
                     }
                }
            });

            function animateCursor() {
                cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15;
                cursorCircle.style.left = cursorX + 'px'; cursorCircle.style.top = cursorY + 'px';
                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            document.querySelectorAll('.hoverable').forEach(el => {
                el.addEventListener('mouseenter', () => cursorCircle.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursorCircle.classList.remove('hovered'));
            });

            // --- 3. SCROLL REVEALS ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('active');
                });
            }, { threshold: 0.1 });
            // Only observe generic reveal items, not hero items which are manual
            document.querySelectorAll('.reveal-item, .split-line').forEach(el => observer.observe(el));

            const p = document.querySelector('.reveal-paragraph');
            if(p) {
                const words = p.innerText.split(' ');
                p.innerHTML = words.map((word, i) => `<span style="display:inline-block; opacity:0; transform:translateY(20px); transition:all 0.5s ease-out ${i*0.05}s">${word}</span> `).join('');
                new IntersectionObserver((entries) => { if(entries[0].isIntersecting) entries[0].target.querySelectorAll('span').forEach(s => { s.style.opacity = 1; s.style.transform = 'translateY(0)'; }); }).observe(p);
            }

            // --- 4. SCROLL LOGIC ---
            const progressBar = document.getElementById('progress-bar');
            const videoSection = document.getElementById('video-expand');

            window.addEventListener('scroll', () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                progressBar.style.width = (scrollTop / docHeight * 100) + '%';

                document.querySelectorAll('.parallax-bg').forEach(bg => {
                    const speed = bg.getAttribute('data-speed');
                    if(bg.querySelector('img')) bg.querySelector('img').style.transform = `translateY(${scrollTop * speed}px) scale(1.1)`;
                });

                if(videoSection) {
                    const rect = videoSection.getBoundingClientRect();
                    const centerDist = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
                    if(centerDist < window.innerHeight * 0.6) {
                        const expand = 1 - (centerDist / (window.innerHeight*0.6));
                        videoSection.style.width = Math.min(70 + (expand * 30), 100) + '%';
                        videoSection.style.borderRadius = (20 * (1-expand)) + 'px';
                    }
                }
            });

            // --- 5. INTERACTION ---
            document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
                wrap.addEventListener('mousemove', (e) => {
                    const rect = wrap.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width/2) * 0.8;
                    const y = (e.clientY - rect.top - rect.height/2) * 0.8;
                    wrap.querySelector('.magnetic-content').style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
                });
                wrap.addEventListener('mouseleave', () => wrap.querySelector('.magnetic-content').style.transform = 'translate(0,0) scale(1)');
            });

            const tiltWrap = document.querySelector('.tilt-card-wrapper');
            const tiltCard = document.querySelector('.tilt-card');
            if(tiltWrap) {
                tiltWrap.addEventListener('mousemove', (e) => {
                    const rect = tiltWrap.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
                    tiltCard.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
                });
                tiltWrap.addEventListener('mouseleave', () => tiltCard.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`);
            }

            // --- 6. PARTICLE CANVAS (Reusable) ---
            function initCanvas(id) {
                const canvas = document.getElementById(id);
                if(!canvas) return;
                
                const ctx = canvas.getContext('2d');
                let width, height, particles = [];

                function resize() { 
                    width = canvas.width = canvas.parentElement.offsetWidth; 
                    height = canvas.height = canvas.parentElement.offsetHeight; 
                    initParticles(); 
                }

                function initParticles() {
                    particles = [];
                    const count = window.innerWidth < 768 ? 20 : 50; 
                    for(let i=0; i<count; i++) {
                        particles.push({ 
                            x: Math.random()*width, 
                            y: Math.random()*height, 
                            vx: (Math.random()-0.5)*0.3, 
                            vy: (Math.random()-0.5)*0.3, 
                            size: Math.random()*2 + 0.5
                        });
                    }
                }

                function draw() {
                    ctx.clearRect(0,0,width,height); 
                    
                    // Dynamic Color based on Mode
                    const isLight = document.body.classList.contains('light-mode');
                    ctx.fillStyle = isLight ? '#18181b' : '#fff'; 
                    ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)';
                    
                    particles.forEach(p => {
                        p.x += p.vx; p.y += p.vy;
                        
                        // Bounce
                        if(p.x < 0 || p.x > width) p.vx *= -1; 
                        if(p.y < 0 || p.y > height) p.vy *= -1;
                        
                        ctx.beginPath(); 
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); 
                        ctx.fill();

                        // Mouse connect
                        const rect = canvas.getBoundingClientRect();
                        const dx = (mouseX - rect.left) - p.x; 
                        const dy = (mouseY - rect.top) - p.y;
                        if(Math.sqrt(dx*dx + dy*dy) < 150) { 
                            ctx.beginPath(); 
                            ctx.moveTo(p.x, p.y); 
                            ctx.lineTo(mouseX - rect.left, mouseY - rect.top); 
                            ctx.stroke(); 
                        }
                    });
                    requestAnimationFrame(draw);
                }

                window.addEventListener('resize', resize);
                resize();
                draw();
            }

            // Initialize both canvases
            initCanvas('network-canvas');
            initCanvas('hero-canvas');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="preloader">
<div className="text-6xl font-display font-semibold mb-4 tracking-tighter" id="loader-text">0%</div>
<div className="loader-bar"><div className="loader-progress" id="loader-progress"></div></div>
</div>

<div className="noise-overlay"></div>
<div className="cursor-dot"></div>
<div className="cursor-circle"></div>
<div className="fixed top-0 left-0 h-[2px] bg-[var(--text-main)] z-[100] w-0 transition-all duration-100 ease-linear" id="progress-bar"></div>

<nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center text-[var(--text-main)]">
<div className="font-display font-semibold text-xl tracking-tighter hoverable">DEV.ELOPER</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hoverable opacity-60 hover:opacity-100 transition-opacity" href="#work">WORK</a>
<a className="hoverable opacity-60 hover:opacity-100 transition-opacity" href="#about">ABOUT</a>
<a className="hoverable opacity-60 hover:opacity-100 transition-opacity" href="#network-canvas">CONTACT</a>
</div>
<button className="hoverable p-2 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-sm transition-colors relative overflow-hidden group w-10 h-10 flex items-center justify-center" id="theme-toggle">
<i className="w-4 h-4 theme-icon absolute transition-all duration-500 rotate-0 scale-100 dark-icon" data-lucide="sun"></i>
<i className="w-4 h-4 theme-icon absolute transition-all duration-500 rotate-90 scale-0 opacity-0 light-icon" data-lucide="moon"></i>
</button>
<button className="hoverable border border-[var(--border-color)] px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors">Menu</button>
</div>
</nav>

<main className="main-content">

<header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--bg-color)] transition-colors duration-500">

<canvas className="particle-canvas pointer-events-none" id="hero-canvas"></canvas>
<div className="section-label">[ 00. PROFILE ]</div>
<div className="relative z-10 w-full max-w-6xl px-6 grid md:grid-cols-[auto_1fr] gap-12 md:gap-24 items-center">

<div className="order-1 md:order-none flex justify-center md:justify-start">
<div className="hero-anim fade-scale w-40 h-40 md:w-64 md:h-64 rounded-full border border-[var(--border-color)] p-1 relative group profile-wrapper transition-shadow duration-500">
<div className="w-full h-full rounded-full overflow-hidden bg-[var(--glass-bg)] relative z-10">
<img alt="Profile" className="w-full h-full object-cover img-zoom-bw" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="order-2 md:order-none text-center md:text-left">

<h1 className="font-display text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6 hero-anim fade-up text-[var(--text-main)]">
                        Creative  Developer
                    </h1>
<p className="text-lg text-[var(--text-muted)] leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0 hero-anim fade-up" style={{transitionDelay: '0.1s'}}>
                        I am Himanshu Sharma, a Creative Developer &amp; UI/UX Designer specializing in high-end interactions and motion-centric web experiences. I bridge the gap between design and engineering using Figma, Framer, and AI tools like Aura and Lovable.
                    </p>

<div className="flex flex-wrap justify-center md:justify-start gap-2 hero-anim fade-up" style={{transitionDelay: '0.2s'}}>
<div className="skill-pill hoverable px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] text-[9px] tracking-widest text-[var(--text-muted)] uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors duration-300 cursor-default">
                            [UI/UX DESIGN]
                        </div>
<div className="skill-pill hoverable px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] text-[9px] tracking-widest text-[var(--text-muted)] uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors duration-300 cursor-default">
                            [FIGMA]
                        </div>
<div className="skill-pill hoverable px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] text-[9px] tracking-widest text-[var(--text-muted)] uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors duration-300 cursor-default">
                            [FRAMER]
                        </div>
<div className="skill-pill hoverable px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] text-[9px] tracking-widest text-[var(--text-muted)] uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors duration-300 cursor-default">
                            [AURA.BUILD]
                        </div>
<div className="skill-pill hoverable px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] text-[9px] tracking-widest text-[var(--text-muted)] uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors duration-300 cursor-default">
                            [LOVABLE]
                        </div>
<div className="skill-pill hoverable px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] text-[9px] tracking-widest text-[var(--text-muted)] uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] transition-colors duration-300 cursor-default">
                            [HTML/CSS]
                        </div>
</div>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-12 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative transition-colors duration-500" id="work">
<div className="section-label">[ 01. SELECTED WORKS ]</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Fluidity" className="absolute inset-0 w-full h-full object-cover img-zoom-bw" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-30">
<h3 className="text-xl font-medium text-white">Fluidity</h3>
<p className="text-xs text-neutral-400">Cinematic Focus</p>
</div>
</div>

<div className="md:mt-12 group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Work 2" className="absolute inset-0 w-full h-full object-cover img-zoom-bw" src="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-30">
<h3 className="text-xl font-medium text-white">Depth</h3>
<p className="text-xs text-neutral-400">Lag Effect</p>
</div>
</div>

<div className="group cursor-pointer hoverable tilt-card-wrapper">
<div className="tilt-card aspect-[3/4] rounded-lg bg-neutral-900 border border-[var(--border-color)] relative overflow-hidden flex items-center justify-center">
<img alt="Work 3" className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=2487&amp;auto=format&amp;fit=crop"/>
<div className="tilt-inner text-center z-20 mix-blend-difference">
<i className="w-12 h-12 mx-auto mb-4 text-white" data-lucide="box"></i>
<span className="text-sm tracking-widest uppercase text-white">Interactive 3D</span>
</div>
</div>
</div>

<div className="md:mt-12 group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Neon" className="absolute inset-0 w-full h-full object-cover img-zoom-bw" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-30">
<h3 className="text-xl font-medium text-white">Neon</h3>
<p className="text-xs text-neutral-400">WebGL Experiment</p>
</div>
</div>

<div className="group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Structure" className="absolute inset-0 w-full h-full object-cover img-zoom-bw" src="https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&amp;w=2500"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-30">
<h3 className="text-xl font-medium text-white">Structure</h3>
<p className="text-xs text-neutral-400">Brutalism</p>
</div>
</div>

<div className="md:mt-12 group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Ethereal" className="absolute inset-0 w-full h-full object-cover img-zoom-bw" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-30">
<h3 className="text-xl font-medium text-white">Ethereal</h3>
<p className="text-xs text-neutral-400">Shader Art</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative transition-colors duration-500" id="about">
<div className="section-label">[ 02. PHILOSOPHY ]</div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<h2 className="text-4xl md:text-6xl font-display font-semibold leading-[0.9] mb-8 reveal-item fade-up text-[var(--text-main)]">Digital<br/>Craftsman</h2>
<div className="space-y-6 text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl">
<p className="reveal-item fade-up" style={{transitionDelay: '0.1s'}}>Beyond the code, I focus on the feeling of the interface. Every micro-interaction is an opportunity to delight the user.</p>
<p className="reveal-item fade-up" style={{transitionDelay: '0.2s'}}>Based in India, working globally with forward-thinking brands.</p>
</div>
</div>
</section>

<section className="py-32 bg-[var(--bg-color)] flex flex-col items-center justify-center border-t border-[var(--border-color)] relative overflow-hidden transition-colors duration-500" id="magnetic-section">
<div className="section-label">[ 03. PHYSICS &amp; TRAIL ]</div>
<div className="absolute inset-0 pointer-events-none z-0" id="trail-container"></div>
<div className="relative z-10 text-center mb-16 reveal-item fade-up">
<h2 className="text-3xl font-display font-semibold text-[var(--text-main)]">Magnetic &amp; Trail</h2>
</div>
<div className="relative z-10 flex flex-wrap justify-center gap-12">
<div className="magnetic-wrap hoverable">
<div className="magnetic-content w-40 h-40 md:w-56 md:h-56 rounded-full border border-[var(--border-color)] flex items-center justify-center bg-[var(--glass-bg)] backdrop-blur-sm group hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] hover:scale-110 transition-all duration-300">
<span className="text-sm font-semibold tracking-widest text-[var(--text-main)] group-hover:text-[var(--bg-color)]">DRAG ME</span>
</div>
</div>
<div className="magnetic-wrap hoverable">
<div className="magnetic-content w-40 h-40 md:w-56 md:h-56 rounded-full border border-[var(--border-color)] flex items-center justify-center bg-[var(--glass-bg)] backdrop-blur-sm group hover:bg-[var(--text-main)] hover:text-[var(--bg-color)] hover:scale-110 transition-all duration-300">
<span className="text-sm font-semibold tracking-widest text-[var(--text-main)] group-hover:text-[var(--bg-color)]">PULL ME</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[var(--bg-color)] overflow-hidden relative transition-colors duration-500">
<div className="section-label">[ 04. IMMERSIVE EXPAND ]</div>
<div className="video-expand-wrapper group hoverable" id="video-expand">
<div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"><i className="fill-white text-white" data-lucide="play"></i></div>
</div>
<img alt="Video Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-32 px-6 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative flex items-center justify-center min-h-[50vh] transition-colors duration-500">
<div className="section-label">[ 05. MANIFESTO ]</div>
<div className="text-center max-w-4xl mx-auto"><p className="text-2xl md:text-5xl font-light leading-relaxed text-[var(--text-muted)] reveal-paragraph">We craft digital experiences that defy expectations. Smooth. Silent. Significant.</p></div>
</section>

<section className="py-20 bg-[var(--bg-color)] border-t border-[var(--border-color)] border-b relative transition-colors duration-500">
<div className="section-label">[ 06. INFINITE SCROLL ]</div>
<div className="marquee-container overflow-hidden hoverable">
<div className="marquee-track">
<span className="marquee-item">MOTION LANGUAGE</span>
<span className="marquee-item">GEMINI ENGINE</span>
<span className="marquee-item">KINETIC TYPE</span>
<span className="marquee-item">MOTION LANGUAGE</span>
<span className="marquee-item">GEMINI ENGINE</span>
<span className="marquee-item">KINETIC TYPE</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[var(--bg-color)] border-t border-[var(--border-color)] relative transition-colors duration-500">
<div className="section-label">[ 07. ARCHIVES ]</div>
<div className="mb-12 flex justify-between items-end"><h3 className="text-4xl font-display font-semibold text-[var(--text-main)]">Archives</h3><p className="text-[var(--text-muted)] text-sm">Hover to expand</p></div>
<div className="accordion-container flex-col md:flex-row">
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&amp;w=2500"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-semibold text-white">Structure</h4></div></div>
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-semibold text-white">Robotics</h4></div></div>
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-semibold text-white">Network</h4></div></div>
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-semibold text-white">Orbit</h4></div></div>
</div>
</section>

<section className="h-[80vh] bg-[var(--bg-color)] relative border-t border-[var(--border-color)] flex items-center justify-center overflow-hidden transition-colors duration-500">
<div className="section-label">[ 08. PARTICLE SYSTEM ]</div>

<canvas className="particle-canvas" id="network-canvas"></canvas>
<div className="relative z-10 text-center pointer-events-none">
<h2 className="text-6xl md:text-8xl font-display font-semibold tracking-tighter mb-6 text-[var(--text-main)]">Connect</h2>

<a className="inline-block pointer-events-auto bg-[var(--text-main)] text-[var(--bg-color)] px-8 py-4 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hoverable" href="mailto:himang04sharma@gmail.com">Start Project</a>
</div>
</section>
</main>

<footer className="footer-fixed bg-[var(--bg-color)] text-[var(--text-main)] transition-colors duration-500" id="contact">
<div className="max-w-7xl w-full px-6 flex flex-col items-center text-center">
<h2 className="text-[10vw] font-display font-semibold leading-none tracking-tighter text-[var(--text-muted)]">DEV.ELOPER</h2>

<div className="mt-12 text-[var(--text-muted)] text-xs">© 2025 HIMANSHU SHARMA. ALL RIGHTS RESERVED.</div>
</div>
</footer>



    </>
  );
}
