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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                // Localised ripple effect script for final CTA
                const ctaSection = document.getElementById('final-cta');
                const ripple = document.getElementById('ripple-effect');
                
                function handleRipple(e) {
                    const rect = ctaSection.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                }

                ctaSection.addEventListener('mouseenter', () => ripple.style.opacity = '1');
                ctaSection.addEventListener('mouseleave', () => ripple.style.opacity = '0');
            


        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Custom Magnetic Cursor ---
            const dot = document.getElementById('cursor-dot');
            const ring = document.getElementById('cursor-ring');
            const coords = document.getElementById('cursor-coords');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let ringX = mouseX;
            let ringY = mouseY;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Update Dot immediately
                dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
                
                // Update Coordinates text
                const lat = ((mouseY / window.innerHeight) * 180 - 90).toFixed(2);
                const lon = ((mouseX / window.innerWidth) * 360 - 180).toFixed(2);
                coords.innerText = `LAT:${lat} LON:${lon}`;
                coords.style.left = `${mouseX + 20}px`;
                coords.style.top = `${mouseY + 20}px`;
            });

            // Smooth Ring Follow
            function animateCursor() {
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            // Hover states for interactive elements
            document.querySelectorAll('.interactive, a, button').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering-interactive'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-interactive'));
            });

            // --- Scramble Text Effect ---
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            document.querySelectorAll('.scramble').forEach(el => {
                el.addEventListener('mouseenter', e => {
                    let iterations = 0;
                    const targetText = e.target.dataset.text;
                    if(!targetText) return;
                    
                    clearInterval(el.scrambleInterval);
                    
                    el.scrambleInterval = setInterval(() => {
                        e.target.innerText = targetText.split("").map((letter, index) => {
                            if(index < iterations) return targetText[index];
                            return letters[Math.floor(Math.random() * letters.length)];
                        }).join("");
                        
                        if(iterations >= targetText.length) clearInterval(el.scrambleInterval);
                        iterations += 1 / 2; // Speed of scramble
                    }, 30);
                });
            });

            // --- Glass Panel Mouse Follow Glow ---
            document.querySelectorAll('.glass-panel').forEach(panel => {
                panel.addEventListener('mousemove', e => {
                    const rect = panel.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    panel.style.setProperty('--mouse-x', `${x}px`);
                    panel.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // --- Deep Parallax on Hero Dash ---
            const heroGraphic = document.getElementById('hero-graphic');
            const parallaxLayers = document.querySelectorAll('.parallax-layer');
            
            if(heroGraphic) {
                document.addEventListener('mousemove', (e) => {
                    const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
                    const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

                    parallaxLayers.forEach(layer => {
                        const speed = parseFloat(layer.dataset.speed || 0.1);
                        const moveX = x * speed * 100;
                        const moveY = y * speed * 100;
                        layer.style.transform = `translate(calc(5% + ${moveX}px), calc(-50% + ${moveY}px)) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
                    });
                });
            }

            // --- Nav Shrink on Scroll ---
            const nav = document.getElementById('main-nav');
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    nav.classList.add('border-white/10', 'bg-[#050505]/80');
                    nav.classList.remove('border-transparent');
                } else {
                    nav.classList.remove('border-white/10', 'bg-[#050505]/80');
                    nav.classList.add('border-transparent');
                }
            });

            // --- Horizontal Scroll Logic ---
            const scrollContainer = document.getElementById('architecture-container');
            const horizontalTrack = document.getElementById('horizontal-track');
            
            if(scrollContainer && horizontalTrack) {
                window.addEventListener('scroll', () => {
                    const rect = scrollContainer.getBoundingClientRect();
                    // If container is partially in view at top
                    if(rect.top <= 0 && rect.bottom >= window.innerHeight) {
                        const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight);
                        // Move left based on progress, max ~60% depending on content width
                        horizontalTrack.style.transform = `translateX(-${scrollProgress * 65}%)`;
                    } else if (rect.top > 0) {
                        horizontalTrack.style.transform = `translateX(0%)`;
                    }
                });
            }

            // --- ROI Calculator Logic ---
            const sliderBorders = document.getElementById('slider-borders');
            const sliderRate = document.getElementById('slider-rate');
            const valBorders = document.getElementById('val-borders');
            const valRate = document.getElementById('val-rate');
            const outHours = document.getElementById('out-hours');
            const outRevenue = document.getElementById('out-revenue-num');

            function updateROI() {
                const b = parseInt(sliderBorders.value);
                const r = parseInt(sliderRate.value);
                
                valBorders.innerText = b;
                valRate.innerText = r;

                // Formula: (Borders * 11.5 hours wasted) = Hours Reclaimed
                const hours = b * 11.875; 
                const revenue = hours * r;

                // Animate numbers
                animateValue(outHours, parseFloat(outHours.innerText), hours, 500);
                animateValue(outRevenue, parseFloat(outRevenue.innerText.replace(/,/g, '')), revenue, 500, true);
            }

            sliderBorders.addEventListener('input', updateROI);
            sliderRate.addEventListener('input', updateROI);

            function animateValue(obj, start, end, duration, formatCurrency = false) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // ease out quad
                    const easeProgress = 1 - (1 - progress) * (1 - progress);
                    let current = start + easeProgress * (end - start);
                    
                    if(formatCurrency) {
                        obj.innerText = current.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    } else {
                        obj.innerText = current.toFixed(2);
                    }

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        if(formatCurrency) obj.innerText = end.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        else obj.innerText = end.toFixed(2);
                    }
                };
                window.requestAnimationFrame(step);
            }

            // --- UTC Clock ---
            setInterval(() => {
                const now = new Date();
                const timeStr = now.toISOString().split('T')[1].split('.')[0];
                document.getElementById('utc-clock').innerText = `${timeStr} UTC`;
            }, 1000);

            // --- Hero WebGL-style Canvas (Dotted Glow & Particle Beams) ---
            const canvas = document.getElementById('hero-canvas');
            if(canvas) {
                const ctx = canvas.getContext('2d');
                let width, height, particles;

                function initCanvas() {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    particles = [];
                    // Density based on screen size
                    const particleCount = Math.floor((width * height) / 15000);
                    
                    for(let i=0; i<particleCount; i++) {
                        particles.push(new Particle());
                    }
                }

                class Particle {
                    constructor() {
                        this.x = Math.random() * width;
                        this.y = Math.random() * height;
                        this.vx = (Math.random() - 0.5) * 0.5;
                        this.vy = (Math.random() - 0.5) * 0.5;
                        this.radius = Math.random() * 1.5 + 0.5;
                        this.baseAlpha = Math.random() * 0.5 + 0.1;
                    }

                    update() {
                        this.x += this.vx;
                        this.y += this.vy;

                        // Bounce off edges
                        if(this.x < 0 || this.x > width) this.vx *= -1;
                        if(this.y < 0 || this.y > height) this.vy *= -1;
                    }

                    draw() {
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(0, 240, 255, ${this.baseAlpha})`;
                        ctx.fill();
                    }
                }

                function animateCanvas() {
                    ctx.clearRect(0, 0, width, height);
                    
                    for(let i=0; i<particles.length; i++) {
                        particles[i].update();
                        particles[i].draw();

                        // Connect lines
                        for(let j=i+1; j<particles.length; j++) {
                            const dx = particles[i].x - particles[j].x;
                            const dy = particles[i].y - particles[j].y;
                            const dist = Math.sqrt(dx*dx + dy*dy);

                            if(dist < 150) {
                                ctx.beginPath();
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                // Opacity based on distance
                                const alpha = (1 - dist/150) * 0.2;
                                ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
                                ctx.lineWidth = 0.5;
                                ctx.stroke();
                            }
                        }

                        // Interact with mouse
                        const mdx = particles[i].x - mouseX;
                        const mdy = particles[i].y - mouseY;
                        const mDist = Math.sqrt(mdx*mdx + mdy*mdy);
                        
                        if(mDist < 200) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(mouseX, mouseY);
                            const mAlpha = (1 - mDist/200) * 0.3;
                            ctx.strokeStyle = `rgba(255, 255, 255, ${mAlpha})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            
                            // Slight attraction
                            particles[i].vx -= (mdx / mDist) * 0.01;
                            particles[i].vy -= (mdy / mDist) * 0.01;
                            
                            // Max speed cap
                            const speed = Math.sqrt(particles[i].vx**2 + particles[i].vy**2);
                            if(speed > 2) {
                                particles[i].vx = (particles[i].vx / speed) * 2;
                                particles[i].vy = (particles[i].vy / speed) * 2;
                            }
                        }
                    }
                    requestAnimationFrame(animateCanvas);
                }

                window.addEventListener('resize', initCanvas);
                initCanvas();
                animateCanvas();
            }
            
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div id="cursor-dot"></div>
<div id="cursor-ring"></div>
<div id="cursor-coords">LAT:00 LON:00</div>

<nav className="fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent backdrop-blur-md bg-[#050505]/60" id="main-nav">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] h-[clamp(4rem,6vw,5rem)] flex items-center justify-between">

<a className="flex items-center gap-2 group interactive" href="#">
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="text-white text-xl absolute group-hover:rotate-180 transition-transform duration-1000 ease-in-out" icon="solar:global-linear"></iconify-icon>
<iconify-icon className="text-[#00F0FF] text-xl absolute opacity-0 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-1000 ease-in-out blur-[2px]" icon="solar:global-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-[clamp(1rem,1.5vw,1.25rem)] tracking-tight">VEKTOR</span>
</a>

<div className="hidden md:flex items-center gap-[clamp(1.5rem,3vw,2.5rem)]">
<a className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#888888] hover:text-white transition-colors scramble interactive" data-text="Itineraries" href="#itineraries">Itineraries</a>
<a className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#888888] hover:text-white transition-colors scramble interactive" data-text="Visa Intel" href="#intelligence">Visa Intel</a>
<a className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#888888] hover:text-white transition-colors scramble interactive" data-text="Tax Engine" href="#tax">Tax Engine</a>
<a className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#888888] hover:text-white transition-colors scramble interactive" data-text="Manifest" href="#manifest">Manifest</a>
</div>

<button className="btn-chamfer bg-[#00F0FF] text-[#050505] px-[clamp(1.2rem,2vw,2rem)] py-[clamp(0.6rem,1vw,0.8rem)] text-[clamp(0.65rem,0.8vw,0.75rem)] hover:scale-[1.02] active:scale-[0.98] interactive">
                Deploy Workspace
            </button>
</div>
</nav>
<main>

<section className="relative min-h-[100svh] flex items-center overflow-hidden pt-[clamp(4rem,6vw,5rem)]" id="hero">

<canvas className="absolute inset-0 z-0 pointer-events-none opacity-60" id="hero-canvas"></canvas>
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] w-full grid grid-cols-1 lg:grid-cols-12 gap-[clamp(3rem,6vw,6rem)] items-center relative z-10">

<div className="lg:col-span-6 flex flex-col items-start pt-10 lg:pt-0">
<div className="section-marker">
<iconify-icon icon="solar:radar-linear"></iconify-icon>
                        LAT:00.00 / INITIALIZATION
                    </div>
<h1 className="font-display font-semibold text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-tighter mb-[clamp(1.5rem,3vw,2rem)] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                        Stop planning trips. <br/>Start scaling your life.
                    </h1>
<p className="text-[clamp(0.95rem,1.2vw,1.125rem)] text-[#888888] leading-[1.6] max-w-xl mb-[clamp(2rem,4vw,3rem)] font-light">
                        The command center for 6-figure nomads. Sync flights, optimize global taxes, and automate timezone workflows in one borderless workspace.
                    </p>
<div className="flex flex-wrap items-center gap-[clamp(1rem,2vw,1.5rem)] mb-[clamp(3rem,5vw,4rem)]">
<button className="btn-chamfer bg-[#00F0FF] text-[#050505] px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] text-[clamp(0.75rem,1vw,0.875rem)] hover:scale-[1.02] interactive shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                            Initialize Trial
                        </button>
<button className="flex items-center gap-2 text-[clamp(0.75rem,1vw,0.875rem)] font-mono text-white/70 hover:text-white transition-colors interactive group">
<span className="w-8 h-8 rounded border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 group-hover:border-white/40 transition-all text-xs">␣</span>
                            [Press Space to view manifest]
                        </button>
</div>
<div className="flex items-center gap-3 font-mono text-[clamp(0.6rem,0.8vw,0.7rem)] text-[#888888] uppercase tracking-widest">
<div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse-glow"></div>
                        Live for 12,400+ remote operators.
                    </div>
</div>

<div className="lg:col-span-6 relative h-[clamp(400px,60vh,800px)] w-full hidden md:block perspective-container" id="hero-graphic">
<div className="absolute top-1/2 left-0 w-[120%] -translate-y-1/2 translate-x-[5%] transform-gpu parallax-layer" data-speed="0.05">

<div className="glass-panel w-full h-[clamp(400px,50vw,600px)] rounded-[clamp(1rem,2vw,1.5rem)] overflow-hidden flex flex-col p-[clamp(1rem,2vw,1.5rem)] shadow-2xl relative">

<div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF]/80 shadow-[0_0_10px_#00F0FF]"></div>
</div>
<span className="font-mono text-[10px] text-white/50 tracking-widest">SYS.OP.ACTIVE</span>
</div>
<div className="font-mono text-[10px] text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-1 rounded">SYNCING_NODES</div>
</div>

<div className="grid grid-cols-12 gap-4 flex-grow">

<div className="col-span-8 bg-[#1A1A1A]/50 rounded-lg border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-10 -top-10 text-9xl text-white/[0.02] font-display font-semibold select-none pointer-events-none">HND</div>
<span className="font-mono text-[10px] text-[#888888]">CURRENT_LOC // TYO</span>
<div>
<div className="text-[clamp(1.5rem,3vw,2rem)] font-display font-semibold mt-2">Flight JL007</div>
<div className="flex items-center gap-2 mt-2">
<span className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<span className="block w-[65%] h-full bg-gradient-to-r from-[#00F0FF]/20 to-[#00F0FF]"></span>
</span>
<span className="font-mono text-[10px] text-[#00F0FF]">IN_AIR</span>
</div>
</div>
</div>

<div className="col-span-4 bg-[#1A1A1A]/50 rounded-lg border border-white/5 p-4 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-2xl text-white/40 mb-2" icon="solar:shield-warning-linear"></iconify-icon>
<span className="font-mono text-[10px] text-[#888888]">VISA_EXPIRY</span>
<span className="font-display text-lg text-white mt-1">14 DAYS</span>
</div>

<div className="col-span-12 bg-[#1A1A1A]/50 rounded-lg border border-white/5 p-4 mt-2 h-[120px] flex items-end gap-2 px-6">
<div className="w-full h-[30%] bg-white/10 hover:bg-[#00F0FF]/40 transition-colors rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">$1.2k</div></div>
<div className="w-full h-[50%] bg-white/10 hover:bg-[#00F0FF]/40 transition-colors rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">$2.4k</div></div>
<div className="w-full h-[20%] bg-white/10 hover:bg-[#00F0FF]/40 transition-colors rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">$0.8k</div></div>
<div className="w-full h-[80%] bg-[#00F0FF]/80 shadow-[0_0_15px_rgba(0,240,255,0.4)] rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity">$4.1k</div></div>
<div className="w-full h-[40%] bg-white/10 hover:bg-[#00F0FF]/40 transition-colors rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">$1.8k</div></div>
<div className="w-full h-[60%] bg-white/10 hover:bg-[#00F0FF]/40 transition-colors rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">$3.0k</div></div>
</div>
</div>
</div>

<div className="absolute -bottom-[10%] -left-[10%] glass-panel w-[250px] rounded-lg p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#00F0FF]/20 z-20 parallax-layer" data-speed="0.1">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-[#00F0FF]" icon="solar:map-point-linear"></iconify-icon>
<span className="font-mono text-[10px] text-white tracking-widest">TAX RESIDENCY</span>
</div>
<div className="text-2xl font-display font-semibold">UK: <span className="text-[#00F0FF]">89</span>/90</div>
<div className="text-[10px] font-mono text-[#888888] mt-1">WARNING: THRESHOLD IMMINENT</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
</section>

<section className="border-y border-white/5 py-3 overflow-hidden bg-[#0D0D0D] relative z-20">
<div className="marquee-track flex gap-8 items-center">

<div className="flex gap-8 items-center shrink-0 font-mono text-[clamp(0.6rem,1vw,0.75rem)] text-[#00F0FF] uppercase tracking-widest whitespace-nowrap">
<span>HND</span> <span className="text-white/20">//</span>
<span className="text-white">+430 Hrs Saved</span> <span className="text-white/20">//</span>
<span>LHR</span> <span className="text-white/20">//</span>
<span className="text-white">$12M Tax Optimized</span> <span className="text-white/20">//</span>
<span>JFK</span> <span className="text-white/20">//</span>
<span className="text-white">100% Uptime</span> <span className="text-white/20">//</span>
<span>CDG</span> <span className="text-white/20">//</span>
<span className="text-white">0 Missed Connections</span> <span className="text-white/20">//</span>
</div>
<div className="flex gap-8 items-center shrink-0 font-mono text-[clamp(0.6rem,1vw,0.75rem)] text-[#00F0FF] uppercase tracking-widest whitespace-nowrap">
<span>HND</span> <span className="text-white/20">//</span>
<span className="text-white">+430 Hrs Saved</span> <span className="text-white/20">//</span>
<span>LHR</span> <span className="text-white/20">//</span>
<span className="text-white">$12M Tax Optimized</span> <span className="text-white/20">//</span>
<span>JFK</span> <span className="text-white/20">//</span>
<span className="text-white">100% Uptime</span> <span className="text-white/20">//</span>
<span>CDG</span> <span className="text-white/20">//</span>
<span className="text-white">0 Missed Connections</span> <span className="text-white/20">//</span>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] relative z-10" id="entropy">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative">

<div className="absolute inset-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
<svg className="w-full h-full stroke-red-500 fill-none" strokeWidth="2" vector-effect="non-scaling-stroke" viewbox="0 0 1000 200">
<path className="animate-[dash_20s_linear_infinite]" d="M0,100 L100,90 L150,150 L250,50 L300,180 L400,20 L500,100 L600,120 L700,10 L800,190 L900,80 L1000,100" stroke-dasharray="5,5"></path>
</svg>
</div>
<div className="mb-[clamp(3rem,6vw,6rem)] max-w-2xl">
<div className="section-marker">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                        /002/ THE ENTROPY LOOP
                    </div>
<h2 className="font-display font-semibold text-[clamp(2rem,5vw,3.5rem)] tracking-tight leading-[1.1] mb-6">
                        The cost of geographic friction.
                    </h2>
<p className="text-[clamp(0.95rem,1.2vw,1.125rem)] text-[#888888] leading-[1.6]">
                        Spreadsheets break. Visas expire. Timezone math kills client deals. You're bleeding ROI every time you cross a border.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)] relative z-10">

<div className="glass-panel rounded-xl p-[clamp(1.5rem,3vw,2rem)] md:mt-0 group interactive-card">
<div className="w-10 h-10 rounded border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:plane-broken-linear"></iconify-icon>
</div>
<div className="font-mono text-[10px] text-red-400 mb-2 tracking-widest">CRITICAL_ERROR</div>
<h3 className="font-display text-xl mb-3">Missed Flight</h3>
<p className="text-sm text-[#888888] leading-relaxed">Manual calendar entry failed to account for Daylight Savings shift across GMT+8. Cost: $1,450.</p>
</div>

<div className="glass-panel rounded-xl p-[clamp(1.5rem,3vw,2rem)] md:mt-[clamp(2rem,5vw,4rem)] group interactive-card border-white/5 hover:border-[#00F0FF]/30">
<div className="w-10 h-10 rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] mb-6 group-hover:bg-[#00F0FF]/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="font-mono text-[10px] text-[#00F0FF] mb-2 tracking-widest">SYNC_FAILURE</div>
<h3 className="font-display text-xl mb-3">14-Hour Collision</h3>
<p className="text-sm text-[#888888] leading-relaxed">Attempting mental timezone math led to a 3 AM client pitch. Cognitive load compromised deal closure.</p>
</div>

<div className="glass-panel rounded-xl p-[clamp(1.5rem,3vw,2rem)] md:mt-[clamp(4rem,10vw,8rem)] group interactive-card">
<div className="w-10 h-10 rounded border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:bill-cross-linear"></iconify-icon>
</div>
<div className="font-mono text-[10px] text-orange-400 mb-2 tracking-widest">PENALTY_ASSESSED</div>
<h3 className="font-display text-xl mb-3">Tax Penalty</h3>
<p className="text-sm text-[#888888] leading-relaxed">Accidentally triggered tax residency in a high-tax jurisdiction by overstaying 3 days. Legal fees: $8,000.</p>
</div>
</div>
</div>
</section>

<section className="relative h-[300vh]" id="architecture-container">
<div className="sticky top-0 h-[100vh] flex items-center overflow-hidden bg-[#0A0A0A] border-y border-white/5">
<div className="absolute top-[clamp(4rem,8vw,6rem)] left-[clamp(1.5rem,5vw,4rem)] z-20">
<div className="section-marker">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
                        /003/ SYSTEM ARCHITECTURE
                    </div>
<h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] tracking-tight text-white mix-blend-difference">
                        Engineered for maximum global leverage.
                    </h2>
</div>

<div className="flex gap-[clamp(3rem,6vw,6rem)] px-[clamp(1.5rem,5vw,4rem)] w-[fit-content] pt-[10vh] transition-transform duration-100 ease-out will-change-transform" id="horizontal-track">

<div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] glass-panel rounded-2xl p-[clamp(2rem,4vw,3rem)] flex flex-col justify-between shrink-0 relative overflow-hidden group">
<div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
<iconify-icon className="text-[400px]" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-xs text-[#00F0FF] mb-4 border border-[#00F0FF]/20 px-3 py-1 rounded inline-block">MODULE_01</div>
<h3 className="font-display text-3xl mb-4">Algorithmic Routing</h3>
<p className="text-[#888888] text-lg max-w-md">Auto-fetch visas, flights, and layover lounges based on your passport matrix.</p>
</div>

<div className="h-[200px] w-full bg-[#050505]/80 rounded border border-white/10 p-4 mt-8 font-mono text-xs text-white/40 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
<div className="text-[#00F0FF]">&gt; analyzing_passport_strength...</div>
<div>&gt; US_PASSPORT = rank_07</div>
<div>&gt; finding_optimal_route (JFK -&gt; SIN)...</div>
<div className="text-green-400">&gt; visa_free_entry_confirmed [90_days]</div>
<div>&gt; layover_lounge_access: AMEX_PLATINUM detected</div>
<div>&gt; generating_itinerary_hash: 0x8f7a...</div>
<div>&gt; syncing_to_calendar...</div>
</div>
</div>

<div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] glass-panel rounded-2xl p-[clamp(2rem,4vw,3rem)] flex flex-col justify-between shrink-0 relative overflow-hidden group">
<div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
<iconify-icon className="text-[400px]" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-xs text-[#00F0FF] mb-4 border border-[#00F0FF]/20 px-3 py-1 rounded inline-block">MODULE_02</div>
<h3 className="font-display text-3xl mb-4">Tax &amp; Residency Engine</h3>
<p className="text-[#888888] text-lg max-w-md">Real-time day-tracking to prevent accidental tax residency. Keep your money.</p>
</div>

<div className="h-[200px] w-full bg-[#050505]/80 rounded border border-white/10 p-4 mt-8 flex flex-col gap-3 relative">
<div className="flex justify-between items-center pb-2 border-b border-white/10">
<span className="font-mono text-xs">JURISDICTION</span>
<span className="font-mono text-xs">DAYS_REMAINING</span>
</div>
<div className="flex justify-between items-center">
<span className="font-mono text-sm text-white flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Spain (Schengen)</span>
<span className="font-mono text-sm text-white">42 / 90</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-[46%] h-full bg-green-500"></div></div>
<div className="flex justify-between items-center mt-2">
<span className="font-mono text-sm text-white flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> UAE (Dubai)</span>
<span className="font-mono text-sm text-red-400">178 / 183</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-[97%] h-full bg-red-500"></div></div>
</div>
</div>

<div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] glass-panel rounded-2xl p-[clamp(2rem,4vw,3rem)] flex flex-col justify-between shrink-0 relative overflow-hidden group">
<div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
<iconify-icon className="text-[400px]" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<div className="font-mono text-xs text-[#00F0FF] mb-4 border border-[#00F0FF]/20 px-3 py-1 rounded inline-block">MODULE_03</div>
<h3 className="font-display text-3xl mb-4">Asynchronous Sync</h3>
<p className="text-[#888888] text-lg max-w-md">Deep-link your calendar with local timezones. Never miss a client ping.</p>
</div>

<div className="h-[200px] w-full bg-[#050505]/80 rounded border border-white/10 p-4 mt-8 flex items-center justify-center relative">
<div className="flex items-center gap-6">
<div className="text-center">
<div className="font-mono text-xs text-[#888888] mb-2">LOCAL (TYO)</div>
<div className="font-display text-2xl text-white">14:00</div>
</div>
<div className="w-12 h-[1px] bg-white/20 relative">
<iconify-icon className="absolute top-1/2 -translate-y-1/2 right-0 text-[#00F0FF] bg-[#050505] px-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="text-center">
<div className="font-mono text-xs text-[#888888] mb-2">CLIENT (EST)</div>
<div className="font-display text-2xl text-white">00:00</div>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-orange-400 bg-orange-400/10 px-2 py-1 rounded border border-orange-400/20">
                                COLLISION DETECTED: RESCHEDULING
                            </div>
</div>
</div>

<div className="w-[10vw] shrink-0"></div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] border-b border-white/5 relative bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,6rem)] items-center">

<div className="md:col-span-7">
<div className="section-marker">
<iconify-icon icon="solar:calculator-minimalistic-linear"></iconify-icon>
                        /004/ ROI TELEMETRY
                    </div>
<h2 className="font-display font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.1] mb-[clamp(2rem,4vw,3rem)]">
                        Quantify your borderless advantage.
                    </h2>
<div className="space-y-[clamp(2rem,4vw,3rem)]">

<div>
<div className="flex justify-between font-mono text-sm mb-4">
<span className="text-[#888888]">Borders crossed per year</span>
<span className="text-white" id="val-borders">12</span>
</div>
<input className="interactive" id="slider-borders" max="50" min="1" type="range" value="12"/>
</div>

<div>
<div className="flex justify-between font-mono text-sm mb-4">
<span className="text-[#888888]">Hourly billable rate ($)</span>
<span className="text-white" id="val-rate">150</span>
</div>
<input className="interactive" id="slider-rate" max="1000" min="50" step="10" type="range" value="150"/>
</div>
</div>
</div>

<div className="md:col-span-5 relative">

<div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#00F0FF]"></div>
<div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#00F0FF]"></div>
<div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#00F0FF]"></div>
<div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#00F0FF]"></div>
<div className="glass-panel p-[clamp(2rem,4vw,3rem)] border border-[#00F0FF]/20 bg-[#0D0D0D]/80 backdrop-blur-xl">
<div className="font-mono text-[10px] text-[#00F0FF] mb-8 tracking-widest border-b border-[#00F0FF]/20 pb-2">LIVE_TELEMETRY_FEED</div>
<div className="mb-8">
<div className="font-mono text-sm text-[#888888] mb-2 uppercase tracking-wide">Hours Reclaimed</div>
<div className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-none counter" data-target="142.50" id="out-hours">142.50</div>
</div>
<div className="mb-10">
<div className="font-mono text-sm text-[#888888] mb-2 uppercase tracking-wide">Lost Revenue Saved</div>
<div className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] text-[#00F0FF] leading-none counter flex items-start" data-target="21450.00" id="out-revenue">
<span className="text-xl mt-2 mr-1">$</span><span id="out-revenue-num">21,450.00</span>
</div>
</div>
<button className="btn-chamfer bg-[#00F0FF] text-[#050505] w-full py-[clamp(1rem,1.5vw,1.25rem)] hover:scale-[1.01] interactive">
                            Capture This ROI
                        </button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2">

<div className="bg-[#111] p-[clamp(3rem,6vw,6rem)] flex flex-col justify-center min-h-[50vh] relative overflow-hidden group border-r border-white/5">
<div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="section-marker text-[#888888]">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
                    THE OLD WAY
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] tracking-tight text-white/50 mb-6">
                    End the fragmentation.
                </h2>
<p className="text-xl text-[#888888] mb-12">7 Apps, manual entry, missed dates, permanent anxiety.</p>
<ul className="space-y-6 font-mono text-sm text-[#888888]">
<li className="flex items-center gap-4"><iconify-icon className="text-xl text-red-500/50" icon="solar:close-square-linear"></iconify-icon> Copy-pasting flight PNRs into calendars</li>
<li className="flex items-center gap-4"><iconify-icon className="text-xl text-red-500/50" icon="solar:close-square-linear"></iconify-icon> Guessing tax residency thresholds</li>
<li className="flex items-center gap-4"><iconify-icon className="text-xl text-red-500/50" icon="solar:close-square-linear"></iconify-icon> Googling visa requirements per passport</li>
</ul>
</div>

<div className="bg-[#050505] p-[clamp(3rem,6vw,6rem)] flex flex-col justify-center min-h-[50vh] relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="section-marker">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                    THE VEKTOR PROTOCOL
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] tracking-tight text-white mb-6">
                    Absolute geographic dominance.
                </h2>
<p className="text-xl text-[#00F0FF] mb-12">1 Unified Manifest. Zero friction.</p>
<ul className="space-y-6 font-mono text-sm text-white">
<li className="flex items-center gap-4"><iconify-icon className="text-xl text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" icon="solar:check-square-linear"></iconify-icon> Automated intelligent itinerary parsing</li>
<li className="flex items-center gap-4"><iconify-icon className="text-xl text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" icon="solar:check-square-linear"></iconify-icon> Real-time cryptographic tax logic</li>
<li className="flex items-center gap-4"><iconify-icon className="text-xl text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" icon="solar:check-square-linear"></iconify-icon> Algorithmic visa clearance checks</li>
</ul>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] border-y border-white/5 bg-[#0A0A0A]">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="section-marker">
<iconify-icon icon="solar:database-linear"></iconify-icon>
                    /006/ OPERATOR LOGS
                </div>
<h2 className="font-display font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight mb-[clamp(3rem,6vw,6rem)] max-w-2xl">
                    Verified telemetry from the field.
                </h2>

<div className="columns-1 md:columns-2 lg:columns-3 gap-[clamp(1.5rem,3vw,2.5rem)] space-y-[clamp(1.5rem,3vw,2.5rem)]">

<div className="glass-panel p-8 rounded-xl break-inside-avoid relative overflow-hidden">
<div className="font-mono text-[10px] text-[#00F0FF] mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse-glow"></div>
                            CURRENT_LOC: TYO
                        </div>
<p className="text-[clamp(0.95rem,1vw,1.125rem)] text-white/90 leading-relaxed mb-6 font-light">
                            "Vektor eliminated my entire administrative stack. I scaled my agency to $50k/mo while moving seamlessly between Tokyo and Bali."
                        </p>
<div className="font-mono text-xs text-[#888888]">
<span className="text-white">— E. Chen</span> // Founder
                        </div>
</div>

<div className="glass-panel p-8 rounded-xl break-inside-avoid relative overflow-hidden bg-[#111]">
<div className="font-mono text-[10px] text-[#00F0FF] mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse-glow"></div>
                            CURRENT_LOC: LIS
                        </div>
<p className="text-[clamp(0.95rem,1vw,1.125rem)] text-white/90 leading-relaxed mb-6 font-light">
                            "The residency tax tracker alone saved me $42,000 this year by warning me 48 hours before crossing the UK 90-day threshold. Essential infrastructure."
                        </p>
<div className="font-mono text-xs text-[#888888]">
<span className="text-white">— M. Davis</span> // SaaS Dev
                        </div>
</div>

<div className="glass-panel p-8 rounded-xl break-inside-avoid relative overflow-hidden">
<div className="font-mono text-[10px] text-[#00F0FF] mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse-glow"></div>
                            CURRENT_LOC: DXB
                        </div>
<p className="text-[clamp(0.95rem,1vw,1.125rem)] text-white/90 leading-relaxed mb-6 font-light">
                            "Zero missed meetings since deploying. The asynchronous timezone sync directly into my menubar is black magic."
                        </p>
<div className="font-mono text-xs text-[#888888]">
<span className="text-white">— S. Rahman</span> // Consultant
                        </div>
</div>

<div className="glass-panel p-8 rounded-xl break-inside-avoid relative overflow-hidden bg-[#111]">
<div className="font-mono text-[10px] text-[#00F0FF] mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-pulse-glow"></div>
                            CURRENT_LOC: MEX
                        </div>
<p className="text-[clamp(0.95rem,1vw,1.125rem)] text-white/90 leading-relaxed mb-6 font-light">
                            "I used to hire an assistant just to manage flights and visas. Now Vektor does it perfectly with zero human error."
                        </p>
<div className="font-mono text-xs text-[#888888]">
<span className="text-white">— A. Kovalenko</span> // E-com
                        </div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,15rem)] relative overflow-hidden flex items-center justify-center cursor-crosshair" id="final-cta" onmousemove="handleRipple(event)">

<div className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,transparent_70%)] rounded-full mix-blend-screen pointer-events-none opacity-0 transition-opacity duration-300" id="ripple-effect" style={{transform: 'translate(-50%, -50%)', left: '50%', top: '50%'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center border border-white/10 p-[clamp(3rem,6vw,6rem)] bg-[#050505]/50 backdrop-blur-sm shadow-[0_0_100px_rgba(0,0,0,0.5)] group">

<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00F0FF]/50 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00F0FF]/50 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00F0FF]/50 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00F0FF]/50 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="font-mono text-sm text-[#00F0FF] mb-6 tracking-widest">SYSTEM_READY</div>
<h2 className="font-display font-semibold text-[clamp(3rem,6vw,5rem)] tracking-tighter mb-6 leading-none">
                    Your coordinates await.
                </h2>
<p className="text-xl text-[#888888] mb-10 font-light max-w-xl mx-auto">
                    Deploy Vektor today. 14-day zero-friction trial. Cancel with one click.
                </p>
<button className="btn-chamfer bg-[#00F0FF] text-[#050505] px-[clamp(3rem,6vw,4rem)] py-[clamp(1.25rem,2.5vw,1.5rem)] text-lg hover:scale-[1.05] interactive">
                    Initialize Manifest
                </button>
</div>

</section>
</main>

<footer className="border-t border-[#00F0FF] bg-[#050505] pt-20 pb-10 relative z-20">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-[clamp(3rem,5vw,4rem)] mb-20 font-mono text-sm">
<div>
<h4 className="text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Core</h4>
<ul className="space-y-3 text-[#888888]">
<li><a className="hover:text-[#00F0FF] transition-colors interactive scramble" data-text="Dashboard" href="#">Dashboard</a></li>
<li><a className="hover:text-[#00F0FF] transition-colors interactive scramble" data-text="Mobile App" href="#">Mobile App</a></li>
<li><a className="hover:text-[#00F0FF] transition-colors interactive scramble" data-text="Integrations" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Intelligence</h4>
<ul className="space-y-3 text-[#888888]">
<li><a className="hover:text-[#00F0FF] transition-colors interactive scramble" data-text="Visa API" href="#">Visa API</a></li>
<li><a className="hover:text-[#00F0FF] transition-colors interactive scramble" data-text="Tax Logic" href="#">Tax Logic</a></li>
<li><a className="hover:text-[#00F0FF] transition-colors interactive scramble" data-text="Flight Nodes" href="#">Flight Nodes</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Protocol</h4>
<ul className="space-y-3 text-[#888888]">
<li><a className="hover:text-white transition-colors interactive" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors interactive" href="#">Privacy Engine</a></li>
<li><a className="hover:text-white transition-colors interactive" href="#">Security Status</a></li>
</ul>
</div>
<div>
<h4 className="text-[#00F0FF] mb-6 uppercase tracking-widest border-b border-[#00F0FF]/30 pb-2 inline-block">Intercept Intel</h4>
<form className="relative group interactive">
<span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#00F0FF]">&gt;</span>
<input className="w-full bg-transparent border-b border-white/20 pl-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-[#00F0FF] transition-colors placeholder:text-white/20" placeholder="enter_email_" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#00F0FF] transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:check-read-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 font-mono text-xs text-[#888888]">
<div>Vektor Systems © 2026. All nodes online.</div>
<div className="mt-4 md:mt-0 flex items-center gap-2 text-[#00F0FF]">
<iconify-icon icon="solar:history-linear"></iconify-icon>
<span id="utc-clock">00:00:00 UTC</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
