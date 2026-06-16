import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // --- REPOSITORY DATA (CODE SNIPPETS) ---
            const libraryData = [
                { id: 'smooth-scale', name: 'Smooth Scale & Slide', code: `<div class="group relative overflow-hidden rounded-lg aspect-[3/4]"><img src="image.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"><div class="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"><h3 class="text-white">Title</h3></div></div>` },
                { id: 'parallax', name: 'Parallax Lag', code: `// HTML: <div class="parallax-bg" data-speed="0.05"><img ...></div>\n// JS: window.addEventListener('scroll', () => { document.querySelectorAll('.parallax-bg').forEach(bg => { const speed = bg.getAttribute('data-speed'); bg.querySelector('img').style.transform = \`translateY(\${window.scrollY * speed}px)\`; }); });` },
                { id: '3d-tilt', name: '3D Hover Tilt', code: `// CSS: .tilt-card { transform-style: preserve-3d; }\n// JS: el.addEventListener('mousemove', (e) => { const x = (e.clientX/w - 0.5)*20; const y = (e.clientY/h - 0.5)*-20; el.style.transform = \`rotateX(\${y}deg) rotateY(\${x}deg)\`; });` },
                { id: 'horizontal', name: 'Horizontal Scroll', code: `// JS: const move = (track.scrollWidth - window.innerWidth) * (scrollTop - offset) / (height - winH); track.style.transform = \`translateX(-\${move}px)\`;` },
                { id: 'magnetic', name: 'Magnetic Physics', code: `// JS: const x = (e.clientX - rect.left - rect.width/2) * 0.8; el.style.transform = \`translate(\${x}px, \${y}px)\`;` },
                { id: 'trail', name: 'Image Trail', code: `// JS: const img = document.createElement('img'); img.style.left = e.clientX + 'px'; img.style.top = e.clientY + 'px'; document.body.appendChild(img); setTimeout(() => img.remove(), 600);` },
                { id: 'expand', name: 'Video Expand', code: `// JS: const width = 70 + (1 - distanceToCenter/maxDist) * 30; el.style.width = Math.min(width, 100) + '%';` },
                { id: 'text-mask', name: 'Text Video Mask', code: `.text { color: transparent; -webkit-text-stroke: 1px white; } .video-bg { mix-blend-mode: screen; opacity: 0.6; }` },
                { id: 'canvas', name: 'Canvas Particles', code: `// Standard HTML5 Canvas Context.arc() loop with mouse distance checks.` }
            ];

            const repoGrid = document.getElementById('repo-grid');
            libraryData.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'p-6 border border-white/10 bg-white/5 rounded-lg text-left hover:bg-white hover:text-black transition-all group';
                btn.innerHTML = `<div class="flex justify-between items-center"><span class="font-mono text-sm">${item.name}</span><i data-lucide="copy" class="w-4 h-4 opacity-50 group-hover:opacity-100"></i></div>`;
                btn.onclick = () => {
                    navigator.clipboard.writeText(item.code);
                    const toast = document.getElementById('toast');
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 2000);
                };
                repoGrid.appendChild(btn);
            });
            lucide.createIcons(); // Re-run for new icons

            // --- 1. PRELOADER ---
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
                if(loadVal === 100) { clearInterval(loadInterval); setTimeout(() => preloader.classList.add('loaded'), 500); }
            }, 30);

            // --- 2. CURSOR & TRAIL ---
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorCircle = document.querySelector('.cursor-circle');
            const trailContainer = document.getElementById('trail-container');
            const magneticSection = document.getElementById('magnetic-section');
            let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px';

                if (magneticSection && trailContainer) {
                    const rect = magneticSection.getBoundingClientRect();
                    if (mouseY >= rect.top && mouseY <= rect.bottom) {
                         if(Math.random() < 0.15) { 
                             const img = document.createElement('img');
                             img.src = trailImagesData[Math.floor(Math.random() * trailImagesData.length)];
                             img.className = 'trail-img';
                             img.style.left = mouseX + 'px'; img.style.top = mouseY + 'px';
                             img.style.setProperty('--r', (Math.random() * 30 - 15) + 'deg');
                             document.body.appendChild(img); setTimeout(() => img.remove(), 600);
                         }
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
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        if (entry.target.classList.contains('counter')) startCounter(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-item, .split-line, .draw-path, .counter').forEach(el => observer.observe(el));

            const p = document.querySelector('.reveal-paragraph');
            if(p) {
                const words = p.innerText.split(' ');
                p.innerHTML = words.map((word, i) => `<span style="display:inline-block; opacity:0; transform:translateY(20px); transition:all 0.5s ease-out ${i*0.05}s">${word}</span> `).join('');
                new IntersectionObserver((entries) => { if(entries[0].isIntersecting) entries[0].target.querySelectorAll('span').forEach(s => { s.style.opacity = 1; s.style.transform = 'translateY(0)'; }); }).observe(p);
            }

            // --- 4. SCROLL LOGIC ---
            const horizontalSection = document.getElementById('process');
            const horizontalTrack = document.getElementById('horizontal-track');
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

                if(horizontalSection && horizontalTrack) {
                    const offset = horizontalSection.offsetTop;
                    const height = horizontalSection.offsetHeight;
                    const winH = window.innerHeight;
                    if(scrollTop >= offset && scrollTop <= (offset + height - winH)) {
                        const pct = (scrollTop - offset) / (height - winH);
                        const move = (horizontalTrack.scrollWidth - window.innerWidth) * pct;
                        horizontalTrack.style.transform = `translateX(-${move}px)`;
                    }
                }

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

            // --- 6. CANVAS ---
            const canvas = document.getElementById('network-canvas');
            if(canvas) {
                const ctx = canvas.getContext('2d');
                let width, height, particles = [];
                function resize() { width = canvas.width = canvas.parentElement.offsetWidth; height = canvas.height = canvas.parentElement.offsetHeight; initParticles(); }
                function initParticles() {
                    particles = [];
                    const count = window.innerWidth < 768 ? 30 : 60;
                    for(let i=0; i<count; i++) particles.push({ x: Math.random()*width, y: Math.random()*height, vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5, size: Math.random()*2+1 });
                }
                function draw() {
                    ctx.clearRect(0,0,width,height); ctx.fillStyle = '#fff'; ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                    particles.forEach(p => {
                        p.x += p.vx; p.y += p.vy;
                        if(p.x < 0 || p.x > width) p.vx *= -1; if(p.y < 0 || p.y > height) p.vy *= -1;
                        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
                        const rect = canvas.getBoundingClientRect();
                        const dx = (mouseX - rect.left) - p.x; const dy = (mouseY - rect.top) - p.y;
                        if(Math.sqrt(dx*dx + dy*dy) < 150) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouseX - rect.left, mouseY - rect.top); ctx.stroke(); }
                    });
                    requestAnimationFrame(draw);
                }
                window.addEventListener('resize', resize); resize(); draw();
            }

            function startCounter(el) {
                const target = +el.dataset.target; let count = 0; const inc = target/50;
                const timer = setInterval(() => { count+=inc; if(count>=target){ el.innerText=target; clearInterval(timer); } else el.innerText=Math.ceil(count); }, 30);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="preloader">
<div className="text-6xl font-display font-bold mb-4 tracking-tighter" id="loader-text">0%</div>
<div className="loader-bar"><div className="loader-progress" id="loader-progress"></div></div>
</div>

<div className="noise-overlay"></div>
<div className="cursor-dot"></div>
<div className="cursor-circle"></div>
<div className="fixed top-0 left-0 h-[2px] bg-white z-[100] w-0 transition-all duration-100 ease-linear" id="progress-bar"></div>
<div id="toast">Code Copied!</div>

<nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
<div className="font-display font-bold text-xl tracking-tighter hoverable">AETHER</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hoverable opacity-60 hover:opacity-100 transition-opacity" href="#work">WORK</a>
<a className="hoverable opacity-60 hover:opacity-100 transition-opacity" href="#repository">REPOSITORY</a>
</div>
<button className="hoverable border border-white/20 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Menu</button>
</nav>

<main className="main-content">

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="section-label">[ 00. HERO PARALLAX ]</div>
<div className="absolute inset-0 z-0 parallax-bg" data-speed="0.4">
<img alt="Architecture" className="w-full h-full object-cover opacity-40 grayscale contrast-125 scale-110" src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&amp;w=2553&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6">
<div className="mb-8 flex justify-center"><div className="reveal-item fade-scale border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-neutral-400">System v1.0</div></div>
<h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mix-blend-overlay">
<span className="block split-line">DIGITAL</span>
<span className="block split-line" style={{transitionDelay: '0.1s'}}>ALCHEMY</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-xl mx-auto reveal-item fade-up" style={{transitionDelay: '0.3s'}}>
                    Engineering the <span className="text-white hoverable border-b border-white/50">intangible</span>.
                </p>
</div>
</header>

<section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative" id="work">
<div className="section-label">[ 01. BENTO REVEAL ]</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
<img alt="Fluidity" className="absolute inset-0 w-full h-full object-cover img-zoom-bw" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-30">
<h3 className="text-xl font-medium text-white">Fluidity</h3>
<p className="text-xs text-neutral-400">Cinematic Focus</p>
</div>
</div>

<div className="md:mt-24 group cursor-pointer hoverable parallax-bg" data-speed="0.05">
<div className="reveal-item fade-scale aspect-[3/4] rounded-lg overflow-hidden mb-6 relative">
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" src="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-xl font-medium">Depth</h3>
<p className="text-xs text-neutral-500">Lag Effect</p>
</div>

<div className="group cursor-pointer hoverable tilt-card-wrapper">
<div className="tilt-card aspect-[3/4] rounded-lg mb-6 bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
<img alt="Work 3" className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=2487&amp;auto=format&amp;fit=crop"/>
<div className="tilt-inner text-center z-20 mix-blend-difference">
<i className="w-12 h-12 mx-auto mb-4 text-white" data-lucide="box"></i>
<span className="text-sm tracking-widest uppercase text-white">Interactive 3D</span>
</div>
</div>
<h3 className="text-xl font-medium">Perspective</h3>
<p className="text-xs text-neutral-500">Mouse Tracking</p>
</div>
</div>
</section>

<section className="horizontal-section bg-[#050505]" id="process">
<div className="section-label">[ 02. HORIZONTAL PIPELINE ]</div>
<div className="sticky top-0 h-screen overflow-hidden flex items-center">
<div className="flex gap-24 px-12 md:px-32 will-change-transform items-center" id="horizontal-track">
<div className="w-[80vw] md:w-[600px] flex-shrink-0">
<h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-700">Design<br/>Systems</h2>
</div>
<div className="w-[70vw] md:w-[60vw] aspect-video flex-shrink-0 relative rounded-xl overflow-hidden border border-white/10 group hoverable">
<img alt="Process 1" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[60vw] md:w-[400px] flex-shrink-0 flex flex-col justify-center border-l border-white/10 pl-20">
<svg className="mb-8" height="120" viewbox="0 0 100 100" width="120"><circle className="draw-path reveal-item" cx="50" cy="50" fill="none" r="45" stroke="white" strokeWidth="1"></circle><path className="draw-path reveal-item" d="M30 50 L50 70 L70 30" fill="none" stroke="white" strokeWidth="1" style={{transitionDelay: '0.5s'}}></path></svg>
<h3 className="text-4xl font-display mb-4">Vector Logic</h3>
</div>
<div className="w-[70vw] md:w-[60vw] aspect-video flex-shrink-0 relative rounded-xl overflow-hidden border border-white/10 group hoverable">
<img alt="Process 2" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=2694&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
<div className="section-label">[ 03. ADAPTIVE STACK ]</div>
<div className="max-w-7xl mx-auto sticky-wrapper gap-20 flex-col md:flex-row">
<div className="md:w-1/3 sticky-content pb-20">
<h2 className="text-4xl md:text-6xl font-display font-bold leading-[0.9] mb-8">Adaptive<br/>Stack</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">The interface responds to scroll velocity.</p>
</div>
<div className="md:w-2/3 flex flex-col gap-32 pt-20">
<div className="reveal-item fade-scale aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-item fade-scale aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden" id="magnetic-section">
<div className="section-label">[ 04. PHYSICS &amp; TRAIL ]</div>
<div className="absolute inset-0 pointer-events-none z-0" id="trail-container"></div>
<div className="relative z-10 text-center mb-16 reveal-item fade-up">
<h2 className="text-3xl font-display font-bold">Magnetic &amp; Trail</h2>
</div>
<div className="relative z-10 flex flex-wrap justify-center gap-12">
<div className="magnetic-wrap hoverable">
<div className="magnetic-content w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
<span className="text-sm font-bold tracking-widest">DRAG ME</span>
</div>
</div>
<div className="magnetic-wrap hoverable">
<div className="magnetic-content w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
<span className="text-sm font-bold tracking-widest">PULL ME</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050505] overflow-hidden relative">
<div className="section-label">[ 05. IMMERSIVE EXPAND ]</div>
<div className="video-expand-wrapper group hoverable" id="video-expand">
<div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"><i className="fill-white text-white" data-lucide="play"></i></div>
</div>
<img alt="Video Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] border-t border-white/5 relative">
<div className="section-label">[ 06. COUNTERS &amp; TEXT ]</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32">
<div className="reveal-item fade-up"><div className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Projects</div><div className="text-7xl font-display font-bold counter" data-target="142">0</div></div>
<div className="reveal-item fade-up" style={{transitionDelay: '0.2s'}}><div className="text-xs text-neutral-500 uppercase tracking-widest mb-4">FPS</div><div className="text-7xl font-display font-bold"><span className="counter" data-target="60">0</span>+</div></div>
<div className="reveal-item fade-up" style={{transitionDelay: '0.4s'}}><div className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Awards</div><div className="text-7xl font-display font-bold counter" data-target="28">0</div></div>
</div>
<div className="text-center max-w-4xl mx-auto"><p className="text-2xl md:text-5xl font-light leading-relaxed text-neutral-300 reveal-paragraph">We craft digital experiences that defy expectations. Smooth. Silent. Significant.</p></div>
</section>

<section className="py-20 bg-[#050505] border-t border-white/5 border-b relative">
<div className="section-label">[ 07. INFINITE SCROLL ]</div>
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

<section className="relative h-[80vh] w-full overflow-hidden bg-black border-t border-white/5">
<div className="section-label">[ 08. SVG CLIPPING MASK ]</div>

<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-2527-large.mp4" type="video/mp4"/>
</video>


<div className="absolute inset-0 z-10 w-full h-full">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice">
<defs>
<mask id="text-mask">

<rect fill="white" height="100%" width="100%"></rect>
<text dominant-baseline="middle" fill="black" fontFamily="Space Grotesk, sans-serif" fontSize="15vw" font-weight="900" text-anchor="middle" x="50%" y="50%">IMPACT</text>
</mask>
</defs>

<rect fill="black" height="100%" mask="url(#text-mask)" width="100%"></rect>
</svg>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
<div className="section-label">[ 09. FLEX ACCORDION ]</div>
<div className="mb-12 flex justify-between items-end"><h3 className="text-4xl font-display font-bold">Archives</h3><p className="text-neutral-500 text-sm">Hover to expand</p></div>
<div className="accordion-container flex-col md:flex-row">

<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&amp;w=2500"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-bold">Structure</h4></div></div>
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-bold">Robotics</h4></div></div>
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-bold">Network</h4></div></div>
<div className="accordion-item group cursor-none hoverable"><img className="accordion-img" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div><div className="accordion-text"><h4 className="text-2xl font-bold">Orbit</h4></div></div>
</div>
</section>

<section className="h-[80vh] bg-[#050505] relative border-t border-white/5 flex items-center justify-center overflow-hidden">
<div className="section-label">[ 10. PARTICLE SYSTEM ]</div>
<canvas id="network-canvas"></canvas>
<div className="relative z-10 text-center pointer-events-none mix-blend-difference">
<h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">Connect</h2>
<button className="pointer-events-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition-transform duration-300 hoverable">Start Project</button>
</div>
</section>

<section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5" id="repository">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-display font-bold mb-12 text-white">The Repository</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="contents" id="repo-grid"></div>
</div>
</div>
</section>
</main>

<footer className="footer-fixed bg-black text-white" id="contact">
<div className="max-w-7xl w-full px-6 flex flex-col items-center text-center">
<h2 className="text-[15vw] font-display font-bold leading-none tracking-tighter text-neutral-800">AETHER</h2>
<div className="mt-20 text-neutral-600 text-xs">© 2024 GEMINI MOTION.</div>
</div>
</footer>



    </>
  );
}
