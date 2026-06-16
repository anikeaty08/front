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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

            // --- DATA: CODE LIBRARY ---
            const repoData = [
                { id: 'smooth', title: 'Smooth Scroll', desc: 'Lenis implementation wrapper', code: `const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });` },
                { id: 'mag', title: 'Magnetic Button', desc: 'Physics based cursor attract', code: `const x = (e.clientX - rect.left - rect.width/2) * 0.7; element.style.transform = \`translate(\${x}px, \${y}px)\`;` },
                { id: 'para', title: 'Parallax Engine', desc: 'Scroll velocity tracking', code: `window.addEventListener('scroll', () => { offset = window.scrollY * speed; el.style.transform = \`translateY(\${offset}px)\`; });` },
                { id: 'mask', title: 'SVG Text Mask', desc: 'Video clipping technique', code: `<mask id="m"><text fill="white">MASK</text></mask><rect fill="black" mask="url(#m)" />` },
                { id: 'canvas', title: 'Network Canvas', desc: 'Node connector logic', code: `ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();` },
                { id: 'tilt', title: '3D Hover Tilt', desc: 'Perspective transform', code: `rotateX(\${(y - 0.5) * -20}deg) rotateY(\${(x - 0.5) * 20}deg)` }
            ];

            const grid = document.getElementById('code-grid');
            repoData.forEach(item => {
                const card = document.createElement('div');
                card.className = "p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group flex flex-col justify-between h-40";
                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] opacity-50 uppercase tracking-widest">${item.id}</span>
                        <i data-lucide="copy" class="w-4 h-4 opacity-40 group-hover:opacity-100"></i>
                    </div>
                    <div>
                        <h3 class="font-display font-medium text-lg mb-1">${item.title}</h3>
                        <p class="text-xs opacity-60 group-hover:opacity-80">${item.desc}</p>
                    </div>
                `;
                card.onclick = () => {
                    navigator.clipboard.writeText(item.code);
                    const t = document.getElementById('toast');
                    t.classList.add('active');
                    setTimeout(() => t.classList.remove('active'), 2500);
                };
                grid.appendChild(card);
            });
            lucide.createIcons();

            // --- 1. SYSTEM BOOT (PRELOADER) ---
            let load = 0;
            const bar = document.getElementById('loader-bar');
            const txt = document.getElementById('loader-txt');
            const pre = document.getElementById('preloader');
            
            const int = setInterval(() => {
                load += Math.random() * 15;
                if(load > 100) load = 100;
                bar.style.width = load + '%';
                txt.innerText = Math.floor(load) + '%';
                if(load === 100) {
                    clearInterval(int);
                    setTimeout(() => {
                        pre.classList.add('loaded');
                        // Trigger hero entry
                        setTimeout(() => document.querySelectorAll('.split-text').forEach(el => el.classList.add('visible')), 500);
                    }, 500);
                }
            }, 50);

            // --- 2. INPUT HANDLER (CURSOR) ---
            const dot = document.querySelector('.cursor-dot');
            const ring = document.querySelector('.cursor-ring');
            let mouse = { x: 0, y: 0 };
            let cursor = { x: 0, y: 0 };
            
            window.addEventListener('mousemove', e => { 
                mouse.x = e.clientX; mouse.y = e.clientY; 
                dot.style.left = mouse.x + 'px'; dot.style.top = mouse.y + 'px';
                
                // Trail Logic
                const trailArea = document.getElementById('trail-area');
                if(trailArea) {
                    const rect = document.getElementById('lab').getBoundingClientRect();
                    if(e.clientY >= rect.top && e.clientY <= rect.bottom && Math.random() > 0.8) {
                        const t = document.createElement('div');
                        t.className = 'absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none';
                        t.style.left = (mouse.x) + 'px';
                        t.style.top = (mouse.y - rect.top) + 'px'; // Relative to section
                        trailArea.appendChild(t);
                        
                        // Animate out
                        t.animate([
                            { transform: 'scale(1)', opacity: 1 },
                            { transform: 'scale(0) translate(0, 20px)', opacity: 0 }
                        ], { duration: 800, fill: 'forwards' });
                        setTimeout(() => t.remove(), 800);
                    }
                }
            });

            const loop = () => {
                cursor.x += (mouse.x - cursor.x) * 0.15;
                cursor.y += (mouse.y - cursor.y) * 0.15;
                ring.style.left = cursor.x + 'px'; ring.style.top = cursor.y + 'px';
                requestAnimationFrame(loop);
            };
            loop();

            document.querySelectorAll('.hoverable').forEach(el => {
                el.addEventListener('mouseenter', () => ring.classList.add('active'));
                el.addEventListener('mouseleave', () => ring.classList.remove('active'));
            });

            // --- 3. SCROLL PHYSICS ---
            const horzSection = document.getElementById('process');
            const horzTrack = document.getElementById('horz-track');
            const progress = document.getElementById('scroll-progress');

            window.addEventListener('scroll', () => {
                const st = window.scrollY;
                const dh = document.documentElement.scrollHeight - window.innerHeight;
                progress.style.width = (st / dh * 100) + '%';

                // Parallax
                document.querySelectorAll('.parallax-bg').forEach(bg => {
                    const speed = bg.getAttribute('data-speed');
                    bg.querySelector('img').style.transform = `translateY(${st * speed}px) scale(1.1)`;
                });

                // Horizontal
                if(horzSection) {
                    const off = horzSection.offsetTop;
                    const h = horzSection.offsetHeight;
                    const wh = window.innerHeight;
                    if(st >= off && st <= (off + h - wh)) {
                        const pct = (st - off) / (h - wh);
                        const move = (horzTrack.scrollWidth - window.innerWidth) * pct;
                        horzTrack.style.transform = `translateX(-${move}px)`;
                    }
                }
            });

            // --- 4. OBSERVERS ---
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if(e.isIntersecting) {
                        e.target.classList.add('visible');
                        if(e.target.classList.contains('count-up')) {
                            let start = 0; const end = +e.target.dataset.target;
                            const t = setInterval(() => {
                                start++; e.target.innerText = start;
                                if(start >= end) clearInterval(t);
                            }, 20);
                        }
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-y, .count-up').forEach(el => obs.observe(el));

            // --- 5. MAGNETIC BUTTONS ---
            document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
                const item = wrap.querySelector('.magnetic-item');
                wrap.addEventListener('mousemove', e => {
                    const r = wrap.getBoundingClientRect();
                    const x = (e.clientX - r.left - r.width/2) * 0.5;
                    const y = (e.clientY - r.top - r.height/2) * 0.5;
                    item.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
                });
                wrap.addEventListener('mouseleave', () => {
                    item.style.transform = `translate(0px, 0px) scale(1)`;
                });
            });

            // --- 6. CANVAS PARTICLES ---
            const cvs = document.getElementById('net-canvas');
            if(cvs) {
                const ctx = cvs.getContext('2d');
                let w, h, pts = [];
                const resize = () => { w = cvs.width = cvs.parentElement.offsetWidth; h = cvs.height = cvs.parentElement.offsetHeight; init(); };
                const init = () => {
                    pts = [];
                    for(let i=0; i<40; i++) pts.push({x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-.5)*.5, vy: (Math.random()-.5)*.5});
                };
                const draw = () => {
                    ctx.clearRect(0,0,w,h);
                    ctx.fillStyle = 'rgba(255,255,255,0.5)';
                    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
                    pts.forEach((p, i) => {
                        p.x+=p.vx; p.y+=p.vy;
                        if(p.x<0||p.x>w) p.vx*=-1; if(p.y<0||p.y>h) p.vy*=-1;
                        ctx.beginPath(); ctx.arc(p.x,p.y,1,0,Math.PI*2); ctx.fill();
                        pts.slice(i+1).forEach(p2 => {
                            const d = Math.hypot(p.x-p2.x, p.y-p2.y);
                            if(d<150) { ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p2.x,p2.y); ctx.stroke(); }
                        });
                    });
                    requestAnimationFrame(draw);
                };
                window.addEventListener('resize', resize);
                resize(); draw();
            }

            // --- 7. TILT CARD ---
            const tiltWrap = document.querySelector('.tilt-wrapper');
            const tiltCard = document.querySelector('.tilt-card');
            if(tiltWrap) {
                tiltWrap.addEventListener('mousemove', e => {
                    const r = tiltWrap.getBoundingClientRect();
                    const x = (e.clientX - r.left) / r.width;
                    const y = (e.clientY - r.top) / r.height;
                    const rotX = (y - 0.5) * -20;
                    const rotY = (x - 0.5) * 20;
                    tiltCard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
                });
                tiltWrap.addEventListener('mouseleave', () => tiltCard.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>
<div className="cursor-dot"></div>
<div className="cursor-ring"></div>
<div className="fixed top-0 left-0 h-[1px] bg-white z-[100] w-0 transition-all duration-75 ease-linear" id="scroll-progress"></div>
<div id="toast">Code copied to clipboard</div>

<div id="preloader">
<div className="font-display font-bold text-4xl mb-2 tracking-tighter" id="loader-txt">0%</div>
<div className="load-bar"><div className="load-fill" id="loader-bar"></div></div>
</div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
<div className="font-display font-bold text-lg tracking-tighter hoverable cursor-none">NEVRA</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
<a className="hoverable hover:text-cyan-400 transition-colors" href="#work">Index</a>
<a className="hoverable hover:text-cyan-400 transition-colors" href="#lab">Lab</a>
<a className="hoverable hover:text-cyan-400 transition-colors" href="#repo">Repo</a>
</div>
<button className="hoverable border border-white/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            System v1.0
        </button>
</nav>

<main className="relative z-10 bg-[#050505] mb-[80vh] shadow-[0_50px_100px_rgba(0,0,0,1)]">

<header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0 parallax-bg" data-speed="0.5">
<img alt="Neural Texture" className="w-full h-full object-cover opacity-30 scale-110 grayscale" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 mix-blend-overlay">
<div className="inline-block mb-6 reveal-y">
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-md">
                        Animation Library
                    </span>
</div>
<h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter">
<span className="split-text"><span>DIGITAL</span></span>
<span className="split-text" style={{transitionDelay: '0.1s'}}><span>ALCHEMY</span></span>
</h1>
</div>
<div className="absolute bottom-12 left-0 w-full text-center">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 animate-pulse">Scroll to Initialize</p>
</div>
</header>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-[#050505] relative" id="work">
<div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">[ 01_GRID_SYSTEM ]</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] overflow-hidden rounded-md border border-white/5 hoverable">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-display text-xl font-medium text-white mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Fluidity</h3>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">Cinematic Scale</p>
</div>
</div>

<div className="md:mt-24 group relative aspect-[3/4] overflow-hidden rounded-md border border-white/5 hoverable parallax-card">
<div className="w-full h-full overflow-hidden">
<img className="w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-100 duration-700" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=2694&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="font-display text-xl font-medium text-white">Depth</h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">Parallax Engine</p>
</div>
</div>

<div className="tilt-wrapper perspective-1000 group hoverable">
<div className="tilt-card relative aspect-[3/4] bg-neutral-900/50 rounded-md border border-white/5 overflow-hidden flex items-center justify-center transition-transform duration-100 ease-linear transform-style-3d">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="tilt-content transform translate-z-20 text-center mix-blend-screen">
<i className="w-12 h-12 text-white/80 mx-auto mb-4" data-lucide="box" strokeWidth="1"></i>
<span className="block text-xs uppercase tracking-[0.2em] text-white">Interaction</span>
</div>
</div>
<div className="mt-4 ml-2">
<h3 className="font-display text-xl font-medium text-white">Perspective</h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">3D Mouse Tracking</p>
</div>
</div>
</div>
</section>

<section className="horz-section bg-[#050505]" id="process">
<div className="horz-wrapper">
<div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 uppercase tracking-widest z-20">[ 02_TIMELINE ]</div>
<div className="horz-track items-center" id="horz-track">
<div className="w-[80vw] md:w-[600px] flex-shrink-0">
<h2 className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800">
                            Neural<br/>Networks
                        </h2>
</div>
<div className="w-[70vw] md:w-[50vw] aspect-video flex-shrink-0 relative rounded-lg overflow-hidden border border-white/10 group hoverable">
<img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
<i className="text-white w-6 h-6" data-lucide="cpu"></i>
</div>
</div>
</div>
<div className="w-[40vw] md:w-[400px] flex-shrink-0 pl-12 border-l border-white/10 flex flex-col justify-center h-[60%]">
<h3 className="text-3xl font-display font-medium mb-4">Processing Data</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                            Interfacing with the underlying logic of the AI animation engine. Every pixel is calculated.
                        </p>
</div>
<div className="w-[70vw] md:w-[60vw] aspect-video flex-shrink-0 relative rounded-lg overflow-hidden border border-white/10 group hoverable">
<img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#050505] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center" id="lab">
<div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">[ 03_PHYSICS_ENGINE ]</div>
<div className="absolute inset-0 pointer-events-none" id="trail-area"></div>
<div className="relative z-10 text-center mb-20 reveal-y">
<h2 className="text-4xl font-display font-bold tracking-tight">Magnetic Field</h2>
<p className="text-neutral-500 mt-4 text-sm">Interaction forces and particle trails.</p>
</div>
<div className="flex flex-wrap justify-center gap-24 relative z-20">

<div className="magnetic-wrap hoverable">
<button className="magnetic-item w-40 h-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group hover:bg-white hover:text-black transition-colors duration-300">
<span className="text-xs font-bold tracking-[0.2em]">ATTRACT</span>
</button>
</div>

<div className="magnetic-wrap hoverable">
<button className="magnetic-item w-40 h-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center group hover:bg-white hover:text-black transition-colors duration-300">
<span className="text-xs font-bold tracking-[0.2em]">REPEL</span>
</button>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden bg-black border-t border-white/5">
<div className="absolute top-6 left-6 font-mono text-[10px] text-white/50 uppercase tracking-widest z-30">[ 04_CLIPPING_MASK ]</div>

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-2336-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 z-10 w-full h-full bg-black mix-blend-screen">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice">
<defs>
<mask id="txt-mask">
<rect fill="black" height="100%" width="100%"></rect>
<text dominant-baseline="middle" fill="white" fontFamily="'Space Grotesk'" fontSize="18vw" font-weight="800" text-anchor="middle" x="50%" y="50%">NEVRA</text>
</mask>
</defs>
<rect fill="black" height="100%" mask="url(#txt-mask)" width="100%"></rect>
</svg>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row h-[70vh] gap-4">
<div className="acc-item group hoverable">
<img className="acc-img" src="https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&amp;w=2500"/>
<div className="absolute bottom-8 left-8 z-20">
<h4 className="text-2xl font-display font-bold text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Structure</h4>
</div>
<div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="acc-item group hoverable">
<img className="acc-img" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2600"/>
<div className="absolute bottom-8 left-8 z-20">
<h4 className="text-2xl font-display font-bold text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Robotics</h4>
</div>
<div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="acc-item group hoverable">
<img className="acc-img" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2672"/>
<div className="absolute bottom-8 left-8 z-20">
<h4 className="text-2xl font-display font-bold text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Orbit</h4>
</div>
<div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</section>

<section className="h-[80vh] relative border-t border-white/5 flex items-center justify-center overflow-hidden">
<div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 uppercase tracking-widest z-20">[ 05_PARTICLE_WEB ]</div>
<canvas className="absolute inset-0 opacity-40" id="net-canvas"></canvas>
<div className="relative z-10 text-center">
<div className="flex gap-12 md:gap-24 mb-12">
<div className="text-center reveal-y">
<div className="text-5xl md:text-7xl font-display font-bold mb-2 count-up" data-target="98">0</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Accuracy %</div>
</div>
<div className="text-center reveal-y" style={{transitionDelay: '0.1s'}}>
<div className="text-5xl md:text-7xl font-display font-bold mb-2 count-up" data-target="142">0</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Modules</div>
</div>
</div>
<button className="hoverable px-8 py-3 bg-white text-black font-medium text-sm rounded-full tracking-wide hover:scale-105 transition-transform duration-300">
                     Initialize Project
                 </button>
</div>
</section>

<section className="py-32 px-6 bg-[#080808] border-t border-white/5" id="repo">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-display font-bold">Repository</h2>
<p className="text-xs text-neutral-500 font-mono hidden md:block">CLICK TO COPY SOURCE</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="code-grid">

</div>
</div>
</section>

<section className="py-20 border-t border-b border-white/5 bg-[#050505] overflow-hidden marquee-cont hoverable">
<div className="marquee-track">
<span className="marquee-item">SYSTEM V1.0</span>
<span className="marquee-item">NEURAL ENGINE</span>
<span className="marquee-item">KINETIC TYPE</span>
<span className="marquee-item">SYSTEM V1.0</span>
<span className="marquee-item">NEURAL ENGINE</span>
<span className="marquee-item">KINETIC TYPE</span>
</div>
</section>
</main>

<footer className="fixed bottom-0 left-0 w-full h-[80vh] bg-[#020202] -z-10 flex flex-col items-center justify-center text-center">
<h2 className="text-[18vw] font-display font-bold leading-none tracking-tighter text-[#111] select-none">NEVRA</h2>
<div className="mt-8 flex gap-8 text-neutral-600 text-xs tracking-widest uppercase">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Github</a>
<a className="hover:text-white transition-colors" href="#">License</a>
</div>
<div className="absolute bottom-6 font-mono text-[10px] text-neutral-800">
            SYSTEM ARCHITECT: NEVRA AI
        </div>
</footer>



    </>
  );
}
