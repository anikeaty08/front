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



        // --- 1. INITIALIZATION & LOADER ---
        window.addEventListener('load', () => {
            lucide.createIcons();
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1500);
            }, 2000);
        });

        // --- 2. QUANTUM PARTICLE ENGINE (CANVAS) ---
        const canvas = document.getElementById('quantum-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };

        // Resize
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Brick/Particle Class
        class Brick {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 0.5; // Depth
                this.sizeW = (Math.random() * 20 + 10) * this.z;
                this.sizeH = (Math.random() * 10 + 5) * this.z;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.9 ? '#00FF9D' : (Math.random() > 0.9 ? '#7B2CBF' : '#1a1a1a');
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                // Mouse repulsion (Singularity effect)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    const angle = Math.atan2(dy, dx);
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                }

                // Movement
                this.x += this.vx;
                this.y += this.vy;

                // Friction
                this.vx *= 0.99;
                this.vy *= 0.99;

                // Return to subtle drift
                if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.01;
                if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.01;

                // Boundary Loop
                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                // Parallax shift based on scroll
                const scrollY = window.scrollY;
                ctx.translate(0, -scrollY * 0.1 * this.z);
                
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                
                // Draw 3D-ish brick
                ctx.beginPath();
                ctx.rect(0, 0, this.sizeW, this.sizeH);
                ctx.fill();
                
                // Wireframe border for tech feel
                if (this.color !== '#1a1a1a') {
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = this.color;
                }
                
                ctx.restore();
            }
        }

        // Initialize Particles
        for (let i = 0; i < 150; i++) {
            particles.push(new Brick());
        }

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // --- 3. CUSTOM CURSOR & INTERACTION ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Simple lerp for custom cursor
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            
            // Add slight delay to ring for organic feel
            setTimeout(() => {
                cursorRing.style.left = e.clientX + 'px';
                cursorRing.style.top = e.clientY + 'px';
            }, 50);
        });

        // Haptic feel on clickable elements
        const clickables = document.querySelectorAll('a, button, input, .group');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '60px';
                cursorRing.style.height = '60px';
                cursorRing.style.borderColor = '#FF006E';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '40px';
                cursorRing.style.height = '40px';
                cursorRing.style.borderColor = 'rgba(0, 255, 157, 0.5)';
            });
        });

        // --- 4. SCROLL ANIMATION OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        // Select all animate-on-scroll elements (simplified logic)
        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot" style={{left: '132px', top: '54px'}}></div>
<div id="cursor-ring" style={{width: '40px', height: '40px', borderColor: 'rgba(0, 255, 157, 0.5)'}}></div>

<div id="loader" style={{opacity: '0', display: 'none'}}>
<div className="flex flex-col items-center">
<div className="font-orbitron text-6xl tracking-tighter mb-4 animate-pulse text-[#00FF9D]">EAST HOME</div>
<div className="font-code text-xs text-gray-500 tracking-[0.5em]">INITIALIZING QUANTUM ENGINE</div>
<div className="w-64 h-0.5 bg-gray-800 mt-4 overflow-hidden relative">
<div className="absolute inset-0 bg-[#00FF9D] w-full origin-left animate-[growth_2s_ease-out]"></div>
</div>
</div>
</div>

<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" height="695" id="quantum-canvas" width="1056"></canvas>

<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
<div className="flex items-center gap-2 group cursor-none">
<svg className="lucide lucide-box text-[#00FF9D] w-6 h-6 transition-transform group-hover:rotate-45" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xl font-semibold text-white tracking-tighter font-orbitron">EAST HOME</span>
</div>
<div className="hidden md:flex gap-12 font-rajdhani font-semibold text-sm tracking-widest text-gray-400">
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#vision">VISION</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#timeline">TIMELINE</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#matrix">PROJECTS</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#contact">ACCESS</a>
</div>
<div className="flex items-center gap-4">
<div className="font-code text-xs text-[#00FFF0] hidden lg:block">SYS.READY</div>
<button className="bg-white/10 hover:bg-[#00FF9D] hover:text-black transition-all border border-white/20 px-6 py-2 rounded-none font-rajdhani font-semibold text-sm tracking-wider backdrop-blur-md">
                INQUIRE
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center perspective-1000 overflow-hidden" id="vision">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/50 to-[#0A0A0F] z-0 transition-all duration-1000 opacity-100 translate-y-0"></div>
<div className="relative z-10 text-center mix-blend-overlay transition-all duration-1000 opacity-100 translate-y-0" style={{transformStyle: 'preserve-3d', transform: 'translateZ(50px)'}}>
<div className="font-rajdhani text-[#00FFF0] tracking-[1em] text-xs mb-6 opacity-0 animate-[fadeIn_1s_2s_forwards]">ARCHITECTURAL SINGULARITY</div>
<h1 className="font-orbitron font-black text-7xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 leading-[0.85] select-none glitch-hover cursor-none">
                WE BUILD<br/>DREAMS
            </h1>
<p className="font-code text-xs md:text-sm text-gray-500 mt-8 max-w-md mx-auto leading-relaxed border-l-2 border-[#7B2CBF] pl-4 text-left">
                // TRANSCENDING PHYSICAL LIMITS<br/>
                // QUANTUM REAL ESTATE DEVELOPMENT<br/>
                // EST. 2024
            </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 transition-all duration-1000 opacity-100 translate-y-0">
<div className="w-[1px] h-24 bg-gradient-to-b from-[#00FF9D] to-transparent"></div>
<span className="font-code text-[10px] tracking-widest">SCROLL TO BUILD</span>
</div>
</section>

<section className="py-32 px-6 md:px-24 relative border-t border-white/5 bg-[#0A0A0F]/80 backdrop-blur-sm">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center transition-all duration-1000 opacity-0 translate-y-10">
<div className="space-y-8" data-aos="fade-right">
<div className="flex items-center gap-4 text-[#FF006E]">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-code text-xs tracking-widest">GENESIS_ALGORITHM</span>
</div>
<h2 className="font-orbitron font-semibold text-4xl md:text-6xl leading-none tracking-tight">
                    FORM FOLLOWS <span className="text-[#00FF9D]">DATA</span>
</h2>
<p className="font-rajdhani font-medium text-lg text-gray-400 leading-relaxed">
                    We don't draw blueprints. We cultivate architectural organisms using evolutionary algorithms and real-time environmental data. Every structure is a living entity.
                </p>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
<h3 className="font-orbitron text-2xl mb-1 group-hover:text-[#00FFF0]">98.4%</h3>
<p className="font-code text-[10px] text-gray-500">ENERGY EFFICIENCY</p>
</div>
<div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
<h3 className="font-orbitron text-2xl mb-1 group-hover:text-[#7B2CBF]">0.0s</h3>
<p className="font-code text-[10px] text-gray-500">LATENCY</p>
</div>
</div>
</div>
<div className="relative h-[400px] w-full perspective-1000 group">

<div className="absolute inset-0 border border-[#00FF9D]/30 bg-[#00FF9D]/5 transform rotate-y-12 rotate-x-6 transition-transform duration-700 group-hover:rotate-y-0 group-hover:rotate-x-0 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
<svg className="lucide lucide-box-select w-16 h-16 text-[#00FF9D] relative z-10 animate-pulse" data-lucide="box-select" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 0 0-2 2"></path><path d="M19 3a2 2 0 0 1 2 2"></path><path d="M21 19a2 2 0 0 1-2 2"></path><path d="M5 21a2 2 0 0 1-2-2"></path><path d="M9 3h1"></path><path d="M9 21h1"></path><path d="M14 3h1"></path><path d="M14 21h1"></path><path d="M3 9v1"></path><path d="M21 9v1"></path><path d="M3 14v1"></path><path d="M21 14v1"></path></svg>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 border border-[#FF006E]/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -bottom-5 -left-5 w-24 h-24 border border-[#7B2CBF]/50 transform rotate-45"></div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="timeline">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00FF9D] to-transparent opacity-30 transition-all duration-1000 opacity-0 translate-y-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 opacity-0 translate-y-10">
<h2 className="font-orbitron font-semibold text-center text-3xl mb-20 tracking-tight">GROWTH VECTOR</h2>

<div className="flex justify-between items-center mb-32 group">
<div className="w-1/2 pr-12 text-right opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-4xl mb-2 text-white group-hover:text-[#00FFF0]">2018</h3>
<p className="font-rajdhani text-sm">FOUNDATION LAUNCH</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#00FF9D] rotate-45 group-hover:scale-150 group-hover:bg-[#00FF9D] transition-all duration-300 shadow-[0_0_20px_#00FF9D]"></div>
<div className="w-1/2 pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs">Initialize_Protocol_Alpha. The first brick laid in the Metaverse.</p>
</div>
</div>

<div className="flex justify-between items-center mb-32 group">
<div className="w-1/2 pr-12 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs ml-auto">Expansion of neural architecture networks across 7 continents.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#FF006E] rotate-45 group-hover:scale-150 group-hover:bg-[#FF006E] transition-all duration-300 shadow-[0_0_20px_#FF006E]"></div>
<div className="w-1/2 pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-4xl mb-2 text-white group-hover:text-[#FF006E]">2022</h3>
<p className="font-rajdhani text-sm">GLOBAL SYNAPSE</p>
</div>
</div>

<div className="flex justify-between items-center group">
<div className="w-1/2 pr-12 text-right opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-4xl mb-2 text-white group-hover:text-[#7B2CBF]">2025</h3>
<p className="font-rajdhani text-sm">SINGULARITY</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#7B2CBF] rotate-45 group-hover:scale-150 group-hover:bg-[#7B2CBF] transition-all duration-300 shadow-[0_0_20px_#7B2CBF]"></div>
<div className="w-1/2 pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs">Full integration of physical and digital living spaces.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative" id="matrix">
<div className="flex justify-between items-end mb-16 max-w-[1920px] mx-auto transition-all duration-1000 opacity-0 translate-y-10">
<h2 className="font-orbitron font-semibold text-5xl tracking-tighter">PROJECT<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00FFF0]">MATRIX</span></h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><svg className="lucide lucide-grid-3x3" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg></button>
<button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><svg className="lucide lucide-list" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1920px] mx-auto transition-all duration-1000 opacity-0 translate-y-10">

<div className="group relative h-[50vh] min-h-[400px] border border-white/10 overflow-hidden cursor-none">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
<span className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#00FF9D]">RESIDENTIAL // TOKYO</span>
</div>
<h3 className="font-orbitron font-semibold text-3xl mb-2 tracking-tight">NEO SHIBUYA TOWER</h3>
<div className="h-[1px] w-0 group-hover:w-full bg-[#00FF9D] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="group relative h-[50vh] min-h-[400px] border border-white/10 overflow-hidden cursor-none">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
<span className="w-2 h-2 bg-[#7B2CBF] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#7B2CBF]">COMMERCIAL // DUBAI</span>
</div>
<h3 className="font-orbitron font-semibold text-3xl mb-2 tracking-tight">VOID PLAZA</h3>
<div className="h-[1px] w-0 group-hover:w-full bg-[#7B2CBF] transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="group relative h-[50vh] min-h-[400px] border border-white/10 overflow-hidden cursor-none">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
<span className="w-2 h-2 bg-[#FF006E] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#FF006E]">CULTURAL // NEW YORK</span>
</div>
<h3 className="font-orbitron font-semibold text-3xl mb-2 tracking-tight">THE MONOLITH</h3>
<div className="h-[1px] w-0 group-hover:w-full bg-[#FF006E] transition-all duration-700 ease-out"></div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24" id="contact">

<div className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-1000 opacity-0 translate-y-10">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FF9D] rounded-full mix-blend-screen filter blur-[80px] opacity-10 animate-pulse delay-1000"></div>
</div>
<div className="max-w-2xl w-full px-8 relative z-10 transition-all duration-1000 opacity-0 translate-y-10">
<div className="text-center mb-12">
<svg className="lucide lucide-aperture w-12 h-12 text-[#00FF9D] mx-auto mb-6 animate-[spin_20s_linear_infinite]" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<h2 className="font-orbitron font-semibold text-5xl mb-2 tracking-tight">INITIATE CONTACT</h2>
<p className="font-code text-xs text-gray-500 tracking-widest">SECURE CHANNEL // ENCRYPTED</p>
</div>
<form className="space-y-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#00FF9D] transition-colors peer placeholder-transparent" required="" type="text"/>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#00FF9D] peer-valid:-top-4 peer-valid:text-[#00FF9D]">IDENTIFICATION</label>
<div className="absolute right-0 top-4 opacity-0 peer-focus:opacity-100 transition-opacity">
<span className="font-code text-[10px] text-[#00FF9D] animate-pulse">SCANNING...</span>
</div>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#7B2CBF] transition-colors peer placeholder-transparent" required="" type="email"/>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#7B2CBF] peer-valid:-top-4 peer-valid:text-[#7B2CBF]">DIGITAL ADDRESS</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#FF006E] transition-colors peer placeholder-transparent resize-none" required="" rows="1"></textarea>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#FF006E] peer-valid:-top-4 peer-valid:text-[#FF006E]">TRANSMISSION DATA</label>
</div>
<div className="flex justify-end pt-8">
<button className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden" type="submit">
<div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative text-white group-hover:text-black font-orbitron font-bold tracking-widest flex items-center gap-2">
                            TRANSMIT <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050507] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<svg className="lucide lucide-box text-[#00FF9D] w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="font-orbitron font-semibold text-lg tracking-tight">EAST HOME</span>
</div>
<div className="font-code text-[10px] text-gray-600 tracking-widest">
                © 2024 QUANTUM ARCHITECTURE DIVISION. ALL RIGHTS RESERVED.
            </div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-[#00FF9D] transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-500 hover:text-[#00FFF0] transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-gray-500 hover:text-[#7B2CBF] transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>



    </>
  );
}
