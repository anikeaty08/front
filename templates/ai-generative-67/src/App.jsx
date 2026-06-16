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



        // Init Lucide Icons
        lucide.createIcons();

        /* --- 1. HERO BACKGROUND ANIMATION (Canvas) - Updated for Light Mode --- */
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3; // Slower, calmer movement
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 1.5 + 0.5; // Smaller particles
                this.alpha = Math.random() * 0.4 + 0.1;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }
            
            draw() {
                ctx.fillStyle = `rgba(23, 23, 23, ${this.alpha})`; // Dark particles (Neutral-900)
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            for (let i = 0; i < 50; i++) { // Fewer particles for minimalism
                particles.push(new Particle());
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Connect particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        // Grey connections
                        ctx.strokeStyle = `rgba(23, 23, 23, ${0.08 - distance/1500})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            // Draw mouse interaction - Subtle clearing effect
            if (mouse.x) {
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            requestAnimationFrame(animate);
        }
        
        const mouse = { x: undefined, y: undefined };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        
        window.addEventListener('resize', resize);
        resize();
        initParticles();
        animate();


        /* --- 2. 3D INTERACTION (Parallax) --- */
        const splatContainer = document.getElementById('splat-container');
        const splatCard = document.getElementById('splat-card');
        const splatImage = document.getElementById('splat-image');

        splatContainer.addEventListener('mousemove', (e) => {
            const rect = splatContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation (max 10 deg - subtle)
            const xRot = ((y / rect.height) - 0.5) * -10; 
            const yRot = ((x / rect.width) - 0.5) * 10;
            
            splatCard.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;
            
            // Parallax image
            const imgX = ((x / rect.width) - 0.5) * 15;
            const imgY = ((y / rect.height) - 0.5) * 15;
            splatImage.style.transform = `scale(1.1) translate(${imgX}px, ${imgY}px)`;
        });

        splatContainer.addEventListener('mouseleave', () => {
            splatCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
            splatImage.style.transform = `scale(1.1) translate(0px, 0px)`;
        });


        /* --- 3. AI INTERFACE BUILDER - Updated for Light Mode --- */
        const intentForm = document.getElementById('intent-form');
        const intentInput = document.getElementById('intent-input');
        const wall = document.getElementById('interface-wall');
        const placeholder = document.getElementById('wall-placeholder');
        const loader = document.getElementById('loader');

        // Components Database - Redesigned for Light Mode
        const COMPONENTS = {
            calculator: `
                <div class="glass-panel p-8 rounded-xl w-full border-l-2 border-neutral-900 fade-in-up bg-white shadow-lg shadow-neutral-100/50">
                    <div class="flex justify-between items-start mb-8">
                        <div>
                            <h3 class="font-serif italic text-2xl text-neutral-900 font-light">Mortgage Estimator</h3>
                            <p class="text-neutral-500 text-xs font-sans mt-2 tracking-wide uppercase">Regional Rate: 5.2%</p>
                        </div>
                        <div class="p-2 bg-neutral-100 rounded-full">
                            <i data-lucide="calculator" class="text-neutral-900 w-5 h-5"></i>
                        </div>
                    </div>
                    
                    <div class="space-y-8">
                        <div>
                            <div class="flex justify-between text-sm text-neutral-500 mb-3 font-sans">
                                <span>Loan Amount</span>
                                <span class="font-semibold text-neutral-900">$<span id="loan-val">450,000</span></span>
                            </div>
                            <input type="range" min="100000" max="1000000" value="450000" class="w-full" oninput="document.getElementById('loan-val').innerText = parseInt(this.value).toLocaleString()">
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm text-neutral-500 mb-3 font-sans">
                                <span>Down Payment</span>
                                <span class="font-semibold text-neutral-900">20%</span>
                            </div>
                            <input type="range" min="0" max="50" value="20" class="w-full">
                        </div>

                        <div class="pt-6 border-t border-neutral-100 flex justify-between items-center">
                            <span class="text-neutral-500 font-sans text-sm">Est. Monthly Payment</span>
                            <span class="text-4xl font-serif text-neutral-900 italic">$2,480</span>
                        </div>
                    </div>
                </div>
            `,
            steps: `
                <div class="bg-white p-8 rounded-xl w-full fade-in-up shadow-lg shadow-neutral-100/50 border border-neutral-100" style="animation-delay: 0.15s">
                    <h3 class="font-sans font-semibold text-sm uppercase tracking-wider text-neutral-900 mb-6">Process Breakdown</h3>
                    <div class="space-y-2">
                        <div class="flex items-center gap-5 group cursor-pointer p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                            <div class="w-6 h-6 rounded-full border border-neutral-300 text-neutral-500 flex items-center justify-center font-sans text-xs font-medium group-hover:border-black group-hover:text-black transition-colors">1</div>
                            <div class="flex-1">
                                <p class="text-sm font-medium text-neutral-900 font-sans">Pre-approval Check</p>
                            </div>
                            <i data-lucide="arrow-right" class="w-4 h-4 text-neutral-300 group-hover:text-black opacity-0 group-hover:opacity-100 transition-all"></i>
                        </div>
                        <div class="flex items-center gap-5 group cursor-pointer p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                            <div class="w-6 h-6 rounded-full border border-neutral-300 text-neutral-500 flex items-center justify-center font-sans text-xs font-medium group-hover:border-black group-hover:text-black transition-colors">2</div>
                            <div class="flex-1">
                                <p class="text-sm font-medium text-neutral-900 font-sans">Document Submission</p>
                            </div>
                            <i data-lucide="arrow-right" class="w-4 h-4 text-neutral-300 group-hover:text-black opacity-0 group-hover:opacity-100 transition-all"></i>
                        </div>
                        <div class="flex items-center gap-5 group cursor-pointer p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                            <div class="w-6 h-6 rounded-full border border-neutral-300 text-neutral-500 flex items-center justify-center font-sans text-xs font-medium group-hover:border-black group-hover:text-black transition-colors">3</div>
                            <div class="flex-1">
                                <p class="text-sm font-medium text-neutral-900 font-sans">Underwriting Review</p>
                            </div>
                            <i data-lucide="arrow-right" class="w-4 h-4 text-neutral-300 group-hover:text-black opacity-0 group-hover:opacity-100 transition-all"></i>
                        </div>
                    </div>
                </div>
            `,
            docs: `
                <div class="flex gap-6 w-full fade-in-up" style="animation-delay: 0.3s">
                    <div class="flex-1 bg-white p-5 rounded-xl flex items-center gap-4 hover:shadow-md transition cursor-pointer border border-neutral-100 group">
                        <div class="p-2.5 bg-neutral-50 rounded-lg text-neutral-400 group-hover:text-neutral-900 transition-colors"><i data-lucide="file-text" class="w-5 h-5"></i></div>
                        <div>
                            <p class="text-sm text-neutral-900 font-medium font-sans">Checklist.pdf</p>
                            <p class="text-[10px] text-neutral-400 font-sans uppercase tracking-wide">120 KB</p>
                        </div>
                    </div>
                    <div class="flex-1 bg-white p-5 rounded-xl flex items-center gap-4 hover:shadow-md transition cursor-pointer border border-neutral-100 group">
                        <div class="p-2.5 bg-neutral-50 rounded-lg text-neutral-400 group-hover:text-neutral-900 transition-colors"><i data-lucide="help-circle" class="w-5 h-5"></i></div>
                        <div>
                            <p class="text-sm text-neutral-900 font-medium font-sans">Mortgage FAQ</p>
                            <p class="text-[10px] text-neutral-400 font-sans uppercase tracking-wide">Read online</p>
                        </div>
                    </div>
                </div>
            `
        };

        intentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = intentInput.value.toLowerCase();
            
            // UI State updates
            intentInput.blur();
            intentInput.value = "";
            intentInput.placeholder = val; 
            intentForm.classList.add('opacity-50', 'pointer-events-none');
            
            // Clear previous results
            placeholder.style.display = 'none';
            loader.style.display = 'flex';
            
            // Remove old dynamic elements
            Array.from(wall.children).forEach(child => {
                if(child.id !== 'wall-placeholder' && child.id !== 'loader') {
                    child.remove();
                }
            });

            // Simulate System Thinking
            setTimeout(() => {
                loader.style.display = 'none';
                intentForm.classList.remove('opacity-50', 'pointer-events-none');
                
                // Construct Layout
                const container = document.createElement('div');
                container.className = 'w-full flex flex-col gap-6';
                
                // Logic based on keywords
                if (val.includes('mortgage') || val.includes('loan') || val.includes('buy') || val.includes('money')) {
                    container.innerHTML = COMPONENTS.calculator + COMPONENTS.steps + COMPONENTS.docs;
                } else if (val.includes('design') || val.includes('image')) {
                    // Fallback visual
                    container.innerHTML = `
                         <div class="bg-white p-8 rounded-xl w-full fade-in-up shadow-sm border border-neutral-100">
                            <h3 class="font-serif italic text-2xl text-neutral-900 mb-6">Visual Assets</h3>
                            <div class="grid grid-cols-3 gap-6">
                                <div class="aspect-square bg-neutral-100 rounded-lg animate-pulse"></div>
                                <div class="aspect-square bg-neutral-100 rounded-lg animate-pulse" style="animation-delay:0.1s"></div>
                                <div class="aspect-square bg-neutral-100 rounded-lg animate-pulse" style="animation-delay:0.2s"></div>
                            </div>
                        </div>
                    `;
                } else {
                    // Generic Fallback
                     container.innerHTML = `
                         <div class="bg-white p-8 rounded-xl w-full fade-in-up border-l-2 border-neutral-900 shadow-sm">
                            <h3 class="font-serif italic text-2xl text-neutral-900 mb-3">System Processing</h3>
                            <p class="text-neutral-500 font-sans">We identified your intent: <span class="text-neutral-900 font-medium">"${val}"</span>.</p>
                            <div class="mt-6 p-6 bg-neutral-50 rounded-lg border border-neutral-100">
                                <div class="h-2 w-3/4 bg-neutral-200 rounded mb-3"></div>
                                <div class="h-2 w-1/2 bg-neutral-200 rounded"></div>
                            </div>
                        </div>
                    ` + COMPONENTS.steps;
                }

                wall.appendChild(container);
                lucide.createIcons(); 

            }, 1200);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-30" id="hero-canvas"></canvas>

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/50 backdrop-blur-md border-b border-neutral-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">

<div className="w-5 h-5 bg-neutral-900"></div>
<span className="font-sans text-xs tracking-[0.2em] text-neutral-900 font-semibold uppercase">Aether</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="font-sans text-xs font-medium text-neutral-500 hover:text-black transition-colors" href="#">Platform</a>
<a className="font-sans text-xs font-medium text-neutral-500 hover:text-black transition-colors" href="#">Solutions</a>
<a className="font-sans text-xs font-medium text-neutral-500 hover:text-black transition-colors" href="#">Developers</a>
</div>
<button className="font-sans text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-neutral-200">
                Sign In
            </button>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20">
<div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-neutral-200 bg-white shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"></span>
<span className="text-neutral-600 text-xs font-sans tracking-widest uppercase font-medium">System V 2.0 Live</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl text-neutral-900 tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">
<span className="italic font-light">Orchestrate</span> live experience <br/>
<span className="font-sans font-light tracking-tighter block mt-2 text-5xl md:text-7xl text-neutral-400">in real time.</span>
</h1>
<p className="font-sans text-lg md:text-xl text-neutral-500 max-w-lg mx-auto font-light leading-relaxed mb-12">
                A digital environment that builds itself around the user instantly. Intent-driven generation for the modern web.
            </p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="group relative px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-sans text-sm font-medium transition-all shadow-xl shadow-neutral-200 overflow-hidden" onclick="document.getElementById('module-1').scrollIntoView()">
<span className="relative z-10 flex items-center gap-2">
                        Explore Demo <i className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-4 bg-white border border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-300 rounded-full font-sans text-sm font-medium transition-all shadow-sm">
                    Documentation
                </button>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
<i className="w-5 h-5 text-neutral-900" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-32 px-6 relative border-t border-neutral-200/60 bg-white" id="module-1">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

<div className="order-2 md:order-1">
<h2 className="font-serif italic text-4xl md:text-5xl text-neutral-900 mb-6 tracking-tight font-light">
                        Immersive spaces,<br/> reconstructed instantly.
                    </h2>
<p className="font-sans text-lg text-neutral-500 font-light leading-relaxed mb-10">
                        Experience spaces with Gaussian Splatting technology. A volumetric representation created from simple video input. Clean, precise, and depth-aware.
                    </p>
<ul className="space-y-5 font-sans text-neutral-600">
<li className="flex items-center gap-4">
<div className="p-1 rounded-full border border-neutral-200 text-neutral-900"><i className="w-3 h-3" data-lucide="check"></i></div>
<span className="text-sm font-normal">Volumetric depth perception</span>
</li>
<li className="flex items-center gap-4">
<div className="p-1 rounded-full border border-neutral-200 text-neutral-900"><i className="w-3 h-3" data-lucide="check"></i></div>
<span className="text-sm font-normal">Generated from standard photos</span>
</li>
<li className="flex items-center gap-4">
<div className="p-1 rounded-full border border-neutral-200 text-neutral-900"><i className="w-3 h-3" data-lucide="check"></i></div>
<span className="text-sm font-normal">Reacts to cursor movement</span>
</li>
</ul>
</div>

<div className="order-1 md:order-2 perspective-1000 group cursor-grab active:cursor-grabbing" id="splat-container">
<div className="relative w-full aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden shadow-2xl shadow-neutral-200 transition-transform duration-100 ease-out preserve-3d border border-neutral-100" id="splat-card">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-100 scale-110 grayscale-[20%] contrast-[0.9]" id="splat-image"></div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-z-10">
<div className="glass-panel px-4 py-3 rounded-lg flex flex-col gap-1">
<p className="text-[10px] tracking-widest text-neutral-500 font-sans uppercase">Coordinates</p>
<p className="text-xs text-neutral-900 font-sans font-medium">Living Room / North</p>
</div>
<div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-neutral-900 hover:scale-105 transition duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="move-3d"></i>
</div>
</div>

<div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-neutral-200 translate-z-20 cursor-pointer hover:scale-150 transition-transform group-hover:bg-neutral-900"></div>
<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/80 rounded-full border border-white translate-z-15 backdrop-blur-sm shadow-sm"></div>

<div className="absolute inset-0 bg-neutral-900/[0.02] pointer-events-none z-10 mix-blend-multiply"></div>
</div>
<p className="text-center mt-6 text-xs tracking-wide uppercase font-sans text-neutral-400">Interactive View</p>
</div>
</div>
</section>

<div className="py-16 text-center relative overflow-hidden bg-[#FAFAFA]">
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
<span className="relative bg-[#FAFAFA] px-6 text-xs font-sans text-neutral-400 tracking-[0.2em] uppercase font-medium">
                Observation to Interaction
            </span>
</div>

<section className="py-24 px-6 min-h-[800px] bg-[#FAFAFA]" id="ai-builder">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif italic text-4xl md:text-5xl text-neutral-900 mb-5 font-light">
                        What do you want to build?
                    </h2>
<p className="text-neutral-500 text-lg font-sans font-light">
                        Describe your intent. The system constructs the interface.
                    </p>
</div>

<div className="relative max-w-2xl mx-auto mb-20 group z-20">

<div className="absolute -inset-2 bg-neutral-200/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
<form className="relative bg-white rounded-full flex items-center p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-neutral-100 transition-shadow hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)]" id="intent-form">
<div className="pl-4 pr-3 text-neutral-400">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<input autocomplete="off" className="w-full bg-transparent border-none focus:ring-0 text-neutral-900 placeholder-neutral-400 font-sans text-base h-12" id="intent-input" placeholder="e.g. 'Calculate monthly mortgage payments'" type="text"/>
<button className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded-full font-medium font-sans text-sm tracking-wide" type="submit">
                            Generate
                        </button>
</form>
</div>

<div className="flex flex-col gap-8 relative min-h-[400px]" id="interface-wall">

<div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 pointer-events-none border border-dashed border-neutral-300 rounded-3xl bg-white/30" id="wall-placeholder">
<div className="p-4 bg-white rounded-full shadow-sm mb-4">
<i className="w-6 h-6 text-neutral-400" data-lucide="layout-template"></i>
</div>
<p className="text-neutral-400 font-sans text-sm tracking-wide">INTERFACE CANVAS</p>
</div>

<div className="hidden w-full flex-col items-center py-12 fade-in-up" id="loader">
<div className="w-6 h-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin mb-4"></div>
<p className="text-neutral-900 font-sans text-xs tracking-widest uppercase font-medium">Processing Intent</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white py-20 px-6 mt-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-4 h-4 bg-neutral-900"></div>
<span className="font-serif italic text-xl text-neutral-900">Aether Demo</span>
</div>
<p className="text-neutral-500 text-sm font-sans max-w-xs leading-relaxed font-light">
                        A conceptual demonstration of a generative UI system. Modular, semantic, and architecturally precise.
                    </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-5">
<span className="text-neutral-900 text-xs font-semibold font-sans uppercase tracking-wider">Product</span>
<a className="text-neutral-500 hover:text-black text-sm font-sans transition-colors" href="#">Features</a>
<a className="text-neutral-500 hover:text-black text-sm font-sans transition-colors" href="#">Integration</a>
<a className="text-neutral-500 hover:text-black text-sm font-sans transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-5">
<span className="text-neutral-900 text-xs font-semibold font-sans uppercase tracking-wider">Company</span>
<a className="text-neutral-500 hover:text-black text-sm font-sans transition-colors" href="#">About</a>
<a className="text-neutral-500 hover:text-black text-sm font-sans transition-colors" href="#">Careers</a>
<a className="text-neutral-500 hover:text-black text-sm font-sans transition-colors" href="#">Legal</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-100 flex justify-between items-center text-neutral-400 text-xs font-sans">
<span>© 2023 Aether Systems Inc.</span>
<span>Designed for Clarity.</span>
</div>
</footer>
</main>



    </>
  );
}
