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
<div className="font-orbitron text-6xl tracking-tighter mb-4 animate-pulse text-[#00FF9D]">WebDevAI</div>
<div className="font-code text-xs text-gray-500 tracking-[0.5em]">WCZYTYWANIE DANYCH</div>
<div className="w-64 h-0.5 bg-gray-800 mt-4 overflow-hidden relative">
<div className="absolute inset-0 bg-[#00FF9D] w-full origin-left animate-[growth_2s_ease-out]"></div>
</div>
</div>
</div>

<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" height="695" id="quantum-canvas" width="1056"></canvas>

<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
<div className="flex items-center gap-2 group cursor-none">
<svg className="lucide lucide-box text-[#00FF9D] w-6 h-6 transition-transform group-hover:rotate-45" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xl font-semibold text-white tracking-tighter font-orbitron">WebDevAI</span>
</div>
<div className="hidden md:flex gap-12 font-rajdhani font-semibold text-sm tracking-widest text-gray-400">
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#about">O NAS</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#services">OFERTA</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#pricing">CENNIK</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" href="#contact">KONTAKT</a>
</div>
<div className="flex items-center gap-4">
<div className="font-code text-xs text-[#00FFF0] hidden lg:block">ONLINE</div>
<button className="bg-white/10 hover:bg-[#00FF9D] hover:text-black transition-all border border-white/20 px-6 py-2 rounded-none font-rajdhani font-semibold text-sm tracking-wider backdrop-blur-md">
                DARMOWA KONSULTACJA
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center perspective-1000 overflow-hidden" id="vision">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/50 to-[#0A0A0F] z-0 transition-all duration-1000 opacity-100 translate-y-0"></div>
<div className="relative z-10 text-center mix-blend-overlay transition-all duration-1000 opacity-100 translate-y-0" style={{transformStyle: 'preserve-3d', transform: 'translateZ(50px)'}}>
<div className="font-rajdhani text-[#00FFF0] tracking-[0.5em] text-xs mb-6 opacity-0 animate-[fadeIn_1s_2s_forwards]">AGENCJA INTERAKTYWNA</div>
<h1 className="font-orbitron font-black text-6xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 leading-[0.95] select-none glitch-hover cursor-none mb-6">
                DOŚWIADCZENIE<br/>I NOWOCZESNOŚĆ
            </h1>
<p className="font-orbitron text-white text-lg md:text-xl tracking-tight mb-8">
                WebDevAI – Doświadczenie od 2010 roku. Nowoczesność od dzisiaj.
            </p>
<p className="font-code text-xs md:text-sm text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed border-l-2 border-[#7B2CBF] pl-4 text-left">
                // TWORZYMY STRONY WWW, SKLEPY I CONTENT, KTÓRE SPRZEDAJĄ.<br/>
                // KOMPLEKSOWE WSPARCIE: OD WDROŻENIA PO OPIEKĘ.<br/>
                // EST. 2010
            </p>
<div className="mt-12">
<a className="inline-block bg-[#00FF9D] text-black px-8 py-4 font-rajdhani font-bold tracking-widest hover:bg-white transition-colors cursor-none" href="#pricing">SPRAWDŹ PAKIETY OPIEKI</a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 transition-all duration-1000 opacity-100 translate-y-0">
<div className="w-[1px] h-24 bg-gradient-to-b from-[#00FF9D] to-transparent"></div>
<span className="font-code text-[10px] tracking-widest">PRZEWIŃ DALEJ</span>
</div>
</section>

<section className="py-32 px-6 md:px-24 relative border-t border-white/5 bg-[#0A0A0F]/80 backdrop-blur-sm" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center transition-all duration-1000 opacity-0 translate-y-10">
<div className="space-y-8" data-aos="fade-right">
<div className="flex items-center gap-4 text-[#FF006E]">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-code text-xs tracking-widest">O NAS</span>
</div>
<h2 className="font-orbitron font-semibold text-4xl md:text-6xl leading-none tracking-tight">
                    15 LAT <span className="text-[#00FF9D]">DOŚWIADCZENIA</span>
</h2>
<p className="font-rajdhani font-medium text-lg text-gray-400 leading-relaxed">
                    Jesteśmy butikową agencją. Łączymy kompetencje programistyczne, graficzne i marketingowe. Działamy na rynku nieprzerwanie od 2010 roku, oferując stabilność, której brakuje freelancerom, i elastyczność, której nie mają korporacje.
                </p>
<div className="text-sm font-code text-gray-500 pt-4 border-t border-white/10">
                    PARTNERZY TECHNOLOGICZNI: AI, CYBER_FOLKS, LH.PL, WORDPRESS, WOOCOMMERCE, SHOPER, SHOPIFY, GOOGLE WORKSPACE.
                </div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
<h3 className="font-orbitron text-2xl mb-1 group-hover:text-[#00FFF0]">2010</h3>
<p className="font-code text-[10px] text-gray-500">ROK ZAŁOŻENIA</p>
</div>
<div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
<h3 className="font-orbitron text-2xl mb-1 group-hover:text-[#7B2CBF]">100%</h3>
<p className="font-code text-[10px] text-gray-500">SATYSFAKCJI</p>
</div>
</div>
</div>
<div className="relative h-[400px] w-full perspective-1000 group">

<div className="absolute inset-0 border border-[#00FF9D]/30 bg-[#00FF9D]/5 transform rotate-y-12 rotate-x-6 transition-transform duration-700 group-hover:rotate-y-0 group-hover:rotate-x-0 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
<svg className="lucide lucide-network w-16 h-16 text-[#00FF9D] relative z-10 animate-pulse" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 border border-[#FF006E]/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -bottom-5 -left-5 w-24 h-24 border border-[#7B2CBF]/50 transform rotate-45"></div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="services">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00FF9D] to-transparent opacity-30 transition-all duration-1000 opacity-0 translate-y-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 opacity-0 translate-y-10">
<h2 className="font-orbitron font-semibold text-center text-3xl mb-20 tracking-tight">NASZE USŁUGI</h2>

<div className="flex justify-between items-center mb-32 group">
<div className="w-1/2 pr-12 text-right opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-3xl mb-2 text-white group-hover:text-[#00FFF0]">STRONY WWW</h3>
<p className="font-rajdhani text-sm uppercase tracking-wider text-[#00FFF0]">E-COMMERCE &amp; LANDING PAGES</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#00FF9D] rotate-45 group-hover:scale-150 group-hover:bg-[#00FF9D] transition-all duration-300 shadow-[0_0_20px_#00FF9D]"></div>
<div className="w-1/2 pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs">Responsywne strony wizytówki, Landing Page i sklepy e-commerce (WooCommerce, Shoper, Shopify). Szybkie i bezpieczne.</p>
</div>
</div>

<div className="flex justify-between items-center mb-32 group">
<div className="w-1/2 pr-12 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs ml-auto">Stałe wsparcie techniczne, aktualizacje i bezpieczeństwo. Nie martw się o awarie – my czuwamy.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#FF006E] rotate-45 group-hover:scale-150 group-hover:bg-[#FF006E] transition-all duration-300 shadow-[0_0_20px_#FF006E]"></div>
<div className="w-1/2 pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-3xl mb-2 text-white group-hover:text-[#FF006E]">OPIEKA WWW</h3>
<p className="font-rajdhani text-sm uppercase tracking-wider text-[#FF006E]">ADMINISTRACJA &amp; WSPARCIE</p>
</div>
</div>

<div className="flex justify-between items-center group">
<div className="w-1/2 pr-12 text-right opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-3xl mb-2 text-white group-hover:text-[#7B2CBF]">CONTENT</h3>
<p className="font-rajdhani text-sm uppercase tracking-wider text-[#7B2CBF]">SOCIAL MEDIA &amp; MARKETING</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#7B2CBF] rotate-45 group-hover:scale-150 group-hover:bg-[#7B2CBF] transition-all duration-300 shadow-[0_0_20px_#7B2CBF]"></div>
<div className="w-1/2 pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs">Prowadzenie profili w social media, copywriting i strategia treści. Budujemy Twój wizerunek w sieci.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative" id="pricing">
<div className="flex justify-between items-end mb-16 max-w-[1920px] mx-auto transition-all duration-1000 opacity-0 translate-y-10">
<h2 className="font-orbitron font-semibold text-5xl tracking-tighter">CENNIK<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00FFF0]">PAKIETÓW</span></h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><svg className="lucide lucide-grid-3x3" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1920px] mx-auto transition-all duration-1000 opacity-0 translate-y-10">

<div className="group relative h-[50vh] min-h-[450px] border border-white/10 overflow-hidden cursor-none">
<div className="absolute inset-0 bg-[#0A0A0F] border-b border-[#00FF9D]/20"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#00FF9D]">OPIEKA WWW BASIC</span>
</div>
<h3 className="font-orbitron font-semibold text-4xl mb-2 tracking-tight">od 250 PLN<span className="text-sm font-rajdhani text-gray-400">/mc</span></h3>
</div>
<ul className="font-rajdhani text-gray-300 space-y-3 mb-12">
<li className="flex items-center gap-2"><span className="text-[#00FF9D]">&gt;</span> Aktualizacje wtyczek</li>
<li className="flex items-center gap-2"><span className="text-[#00FF9D]">&gt;</span> Kopie zapasowe</li>
<li className="flex items-center gap-2"><span className="text-[#00FF9D]">&gt;</span> Monitoring 24/7</li>
</ul>
<div className="relative">
<div className="h-[1px] w-0 group-hover:w-full bg-[#00FF9D] transition-all duration-700 ease-out mb-4"></div>
<button className="text-sm font-code tracking-widest hover:text-[#00FF9D] transition-colors">WYBIERZ PAKIET -&gt;</button>
</div>
</div>
</div>

<div className="group relative h-[50vh] min-h-[450px] border border-white/10 overflow-hidden cursor-none">
<div className="absolute inset-0 bg-[#0A0A0F] border-b border-[#7B2CBF]/20"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-[#7B2CBF] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#7B2CBF]">OPIEKA WWW VIP</span>
</div>
<h3 className="font-orbitron font-semibold text-4xl mb-2 tracking-tight">od 500 PLN<span className="text-sm font-rajdhani text-gray-400">/mc</span></h3>
</div>
<ul className="font-rajdhani text-gray-300 space-y-3 mb-12">
<li className="flex items-center gap-2"><span className="text-[#7B2CBF]">&gt;</span> Wszystko z Basic</li>
<li className="flex items-center gap-2"><span className="text-[#7B2CBF]">&gt;</span> 2h prac programisty</li>
<li className="flex items-center gap-2"><span className="text-[#7B2CBF]">&gt;</span> Priorytetowe wsparcie</li>
</ul>
<div className="relative">
<div className="h-[1px] w-0 group-hover:w-full bg-[#7B2CBF] transition-all duration-700 ease-out mb-4"></div>
<button className="text-sm font-code tracking-widest hover:text-[#7B2CBF] transition-colors">WYBIERZ PAKIET -&gt;</button>
</div>
</div>
</div>

<div className="group relative h-[50vh] min-h-[450px] border border-white/10 overflow-hidden cursor-none">
<div className="absolute inset-0 bg-[#0A0A0F] border-b border-[#FF006E]/20"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-[#FF006E] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#FF006E]">SOCIAL MEDIA START</span>
</div>
<h3 className="font-orbitron font-semibold text-4xl mb-2 tracking-tight">od 800 PLN<span className="text-sm font-rajdhani text-gray-400">/mc</span></h3>
</div>
<ul className="font-rajdhani text-gray-300 space-y-3 mb-12">
<li className="flex items-center gap-2"><span className="text-[#FF006E]">&gt;</span> 4 posty miesięcznie</li>
<li className="flex items-center gap-2"><span className="text-[#FF006E]">&gt;</span> Profesjonalne grafiki</li>
<li className="flex items-center gap-2"><span className="text-[#FF006E]">&gt;</span> Moderacja i raporty</li>
</ul>
<div className="relative">
<div className="h-[1px] w-0 group-hover:w-full bg-[#FF006E] transition-all duration-700 ease-out mb-4"></div>
<button className="text-sm font-code tracking-widest hover:text-[#FF006E] transition-colors">WYBIERZ PAKIET -&gt;</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 font-code text-xs text-gray-500 tracking-wider">
            WDROŻENIA STRON WWW OD 1500 PLN | SKLEPY INTERNETOWE OD 3500 PLN | AUDYT GRATIS
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
<h2 className="font-orbitron font-semibold text-5xl mb-2 tracking-tight">SKONTAKTUJ SIĘ</h2>
<p className="font-code text-xs text-gray-500 tracking-widest">FORMULARZ KONTAKTOWY // SZYFR0WANY</p>
</div>
<form className="space-y-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#00FF9D] transition-colors peer placeholder-transparent" required="" type="text"/>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#00FF9D] peer-valid:-top-4 peer-valid:text-[#00FF9D]">IMIĘ I NAZWISKO</label>
<div className="absolute right-0 top-4 opacity-0 peer-focus:opacity-100 transition-opacity">
<span className="font-code text-[10px] text-[#00FF9D] animate-pulse">SKANOWANIE...</span>
</div>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#7B2CBF] transition-colors peer placeholder-transparent" required="" type="email"/>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#7B2CBF] peer-valid:-top-4 peer-valid:text-[#7B2CBF]">ADRES E-MAIL</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#FF006E] transition-colors peer placeholder-transparent resize-none" required="" rows="1"></textarea>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#FF006E] peer-valid:-top-4 peer-valid:text-[#FF006E]">TREŚĆ WIADOMOŚCI</label>
</div>
<div className="flex justify-end pt-8">
<button className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden" type="submit">
<div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative text-white group-hover:text-black font-orbitron font-bold tracking-widest flex items-center gap-2">
                            WYŚLIJ <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<span className="font-orbitron font-semibold text-lg tracking-tight">WebDevAI</span>
</div>
<div className="font-code text-[10px] text-gray-600 tracking-widest text-center md:text-left">
                © 2010-2026 WebDevAI. WSZELKIE PRAWA ZASTRZEŻONE.<br/>
<a className="hover:text-white transition-colors" href="#">POLITYKA PRYWATNOŚCI</a> | <a className="hover:text-white transition-colors" href="#">REGULAMIN</a>
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
