import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- SCROLL ANIMATIONS (Reveal & Counters) ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        
                        // Handle Number Counters if they exist in the target
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            if(!counter.classList.contains('counted')) {
                                const target = +counter.getAttribute('data-target');
                                const duration = 1500; // ms
                                const start = 0;
                                const increment = target / (duration / 16); // 60fps
                                let current = start;

                                const updateCounter = () => {
                                    current += increment;
                                    if(current < target) {
                                        counter.innerText = Math.ceil(current);
                                        requestAnimationFrame(updateCounter);
                                    } else {
                                        counter.innerText = target;
                                        counter.classList.add('counted');
                                    }
                                }
                                updateCounter();
                            }
                        });

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .in-view-trigger').forEach(el => {
                observer.observe(el);
            });

            // Make the dashboard pulse tracker trigger immediately for demo
            setTimeout(() => {
                document.querySelector('.ecg-line-container')?.classList.add('in-view');
            }, 1000);


            // --- WEBGL CANVAS SIMULATION (Dot Grid with Ripple) ---
            const canvas = document.getElementById('webgl-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                // Configuration
                const dotSpacing = 30; // Distance between dots
                const baseDotSize = 1;
                const baseDotColor = '#1a1a1a';
                const activeDotColor = '#00d4aa';
                const rippleRadius = 250; // How far the effect spreads from mouse
                
                let mouse = { x: -1000, y: -1000 };
                let targetMouse = { x: -1000, y: -1000 };
                let isMouseMoving = false;
                let mouseTimeout;

                function resize() {
                    // Set logical size
                    width = canvas.offsetWidth;
                    height = canvas.offsetHeight;
                    
                    // Handle high-DPI displays
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    ctx.scale(dpr, dpr);
                }

                window.addEventListener('resize', resize);
                resize();

                // Mouse tracking
                canvas.parentElement.addEventListener('mousemove', (e) => {
                    const rect = canvas.getBoundingClientRect();
                    targetMouse.x = e.clientX - rect.left;
                    targetMouse.y = e.clientY - rect.top;
                    isMouseMoving = true;
                    
                    clearTimeout(mouseTimeout);
                    mouseTimeout = setTimeout(() => { isMouseMoving = false; }, 100);
                });

                canvas.parentElement.addEventListener('mouseleave', () => {
                    targetMouse.x = -1000;
                    targetMouse.y = -1000;
                });

                // Linear interpolation for smooth mouse trailing
                function lerp(start, end, factor) {
                    return start + (end - start) * factor;
                }

                function render() {
                    ctx.clearRect(0, 0, width, height);
                    
                    // Smooth mouse tracking
                    mouse.x = lerp(mouse.x, targetMouse.x, 0.1);
                    mouse.y = lerp(mouse.y, targetMouse.y, 0.1);

                    const cols = Math.floor(width / dotSpacing) + 1;
                    const rows = Math.floor(height / dotSpacing) + 1;
                    
                    const offsetX = (width - ((cols - 1) * dotSpacing)) / 2;
                    const offsetY = (height - ((rows - 1) * dotSpacing)) / 2;

                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) {
                            const x = offsetX + (i * dotSpacing);
                            const y = offsetY + (j * dotSpacing);
                            
                            // Calculate distance to mouse
                            const dx = x - mouse.x;
                            const dy = y - mouse.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            
                            let size = baseDotSize;
                            let alpha = 1;
                            let isTeal = false;

                            // Ripple math based on distance
                            if (dist < rippleRadius) {
                                // Normalized distance (0 at center, 1 at edge)
                                const normDist = dist / rippleRadius;
                                
                                // Create a wave effect (sine wave based on distance)
                                const wave = Math.sin((1 - normDist) * Math.PI);
                                
                                size = baseDotSize + (wave * 2.5); // Max size increase
                                
                                // If close to the wave peak, color it teal
                                if (wave > 0.2) {
                                    isTeal = true;
                                    alpha = wave * 0.8; // Max opacity 0.8 for teal dots
                                }
                            }

                            ctx.beginPath();
                            ctx.arc(x, y, size, 0, Math.PI * 2);
                            
                            if (isTeal) {
                                // Convert hex to rgba for opacity support
                                ctx.fillStyle = `rgba(0, 212, 170, ${alpha})`;
                            } else {
                                ctx.fillStyle = baseDotColor;
                            }
                            
                            ctx.fill();
                        }
                    }

                    requestAnimationFrame(render);
                }

                render();
                
                // Fade out CSS fallback if JS canvas is running
                const fallback = document.querySelector('.hero-bg-fallback');
                if(fallback) fallback.style.opacity = '0.3';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-[#222]">
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-[#f5f5f5] font-semibold tracking-tighter text-[1.25rem] uppercase" href="#">
                Menomorph
            </a>
<div className="hidden md:flex items-center gap-8 text-[0.875rem] text-[#8a8a8a]">
<a className="nav-link relative hover:text-[#f5f5f5] transition-colors" href="#product">Product</a>
<a className="nav-link relative hover:text-[#f5f5f5] transition-colors" href="#science">Science</a>
<a className="nav-link relative hover:text-[#f5f5f5] transition-colors" href="#pricing">Pricing</a>
<a className="nav-link relative hover:text-[#f5f5f5] transition-colors" href="#doctors">For Doctors</a>
</div>
<a className="relative overflow-hidden group bg-[#00d4aa] text-[#0a0a0a] rounded-full px-6 py-2.5 text-[0.875rem] font-medium hidden sm:block" href="#pricing">
<div className="relative transition-transform duration-500 group-hover:-translate-y-[150%]">Get the Band</div>
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">Order Now</div>
</a>

<button className="md:hidden text-[#f5f5f5]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">

<canvas id="webgl-canvas"></canvas>
<div className="hero-bg-fallback">
<div className="orb-1"></div>
<div className="orb-2"></div>
</div>
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-[clamp(4rem,8vw,8rem)]">

<div className="lg:col-span-7 flex flex-col items-start reveal">
<div className="font-mono text-[0.75rem] text-[#00d4aa] tracking-widest uppercase mb-6 flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse"></span>
                    Clinical Grade Wearable
                </div>
<h1 className="text-h1 font-semibold leading-[1.05] mb-6 text-balance">
                    Your hormones are sending signals. <span className="text-[#8a8a8a]">Finally, you can listen.</span>
</h1>
<p className="text-body text-[#8a8a8a] max-w-xl mb-10 text-pretty">
                    MenoMorph's wearable predicts hot flashes before they start and maps your nutrition to your unique cycle. Don't just survive the change. Master the data behind it.
                </p>
<div className="flex flex-wrap items-center gap-4 mb-8">
<a className="relative overflow-hidden group bg-[#00d4aa] text-[#0a0a0a] rounded-full px-8 py-4 text-[1rem] font-medium" href="#pricing">
<div className="relative transition-transform duration-500 group-hover:-translate-y-[150%]">Get the Band</div>
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">Start Mastering</div>
</a>
<a className="btn-secondary border border-[#555] text-[#f5f5f5] rounded-full px-8 py-4 text-[1rem] font-medium flex items-center gap-2 transition-colors" href="#science">
                        See How It Works
                        <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-3 font-mono text-[0.75rem] text-[#555]">
<iconify-icon height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
                    Based on 12 peer-reviewed endocrinology studies.
                </div>
</div>

<div className="lg:col-span-5 relative reveal delay-200 perspective-1000">
<div className="relative w-full max-w-md mx-auto aspect-[9/19] bg-[#141414] border border-[#222] rounded-[2.5rem] shadow-2xl overflow-hidden p-4 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a0a0a] rounded-b-xl z-20"></div>

<div className="w-full h-full bg-[#0a0a0a] rounded-[2rem] border border-[#222] p-5 flex flex-col relative overflow-hidden">

<div className="flex justify-between items-center mb-8 mt-4">
<span className="font-mono text-[0.75rem] text-[#8a8a8a]">Live Data</span>
<span className="flex items-center gap-1.5 text-[0.75rem] text-[#00d4aa] font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4aa] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4aa]"></span>
</span>
                                Syncing
                            </span>
</div>

<div className="mb-8">
<div className="text-[0.875rem] text-[#8a8a8a] mb-1">Core Temp Shift</div>
<div className="text-[2.5rem] font-semibold tracking-tighter flex items-baseline gap-1">
                                +0.4<span className="text-[1.25rem] text-[#555]">°F</span>
</div>
</div>

<div className="bg-[#141414] border border-[#222] rounded-xl p-4 mb-4 relative overflow-hidden">
<div className="flex justify-between text-[0.75rem] text-[#8a8a8a] mb-4">
<span>Symptom Pulse Tracker</span>
<span>Live</span>
</div>
<div className="ecg-line-container in-view">
<div className="ecg-line">
<div className="ecg-dot"></div>
</div>
</div>

<div className="absolute inset-0 z-[-1] opacity-10" style={{backgroundImage: 'linear-gradient(#555 1px, transparent 1px), linear-gradient(90deg, #555 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="bg-[#141414] border border-[#222] rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#ff4a4a]/10 flex items-center justify-center text-[#ff4a4a]">
<iconify-icon height="20" icon="solar:flame-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[0.875rem] font-medium">Next Hot Flash</div>
<div className="text-[0.75rem] text-[#8a8a8a]">Probability: High</div>
</div>
</div>
<div className="font-mono text-[1.25rem] font-medium countdown" data-time="14">
                                14m
                            </div>
</div>
</div>

<div className="absolute -right-6 bottom-12 bg-[#141414] border border-[#222] rounded-full p-2 flex items-center gap-3 shadow-xl pr-4 animate-bounce" style={{animationDuration: '3s'}}>
<img alt="Band" className="w-10 h-10 object-contain mix-blend-screen opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%2300d4aa' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm0-13v4m0 4h.01'/%3E%3C/svg%3E"/>
<div className="text-[0.75rem]">
<div className="text-[#8a8a8a]">Paired</div>
<div className="font-medium text-[#f5f5f5]">Meno-Band Pro</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="w-full bg-[#141414] py-[clamp(4rem,8vw,8rem)] border-t border-[#222]" id="problem">
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] mx-auto px-6">
<div className="font-mono text-[0.875rem] text-[#555] mb-8 reveal">/001/</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
<h2 className="text-h2 font-semibold leading-[1.1] max-w-2xl text-balance reveal delay-100">
                    More than a moment. <br/>
<span className="text-[#00d4aa]">A metabolic shift.</span>
</h2>
<div className="text-body text-[#8a8a8a] max-w-lg reveal delay-200">
                    This isn't 'just a phase'—it's a data-rich biological transition that's been under-monitored. Until now.
                </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
<div className="border-t border-[#333] pt-6 reveal delay-100">
<div className="text-[3rem] font-semibold text-[#f5f5f5] mb-2 flex items-baseline gap-1">
<span className="counter" data-target="80">0</span>%
                    </div>
<div className="text-[0.875rem] text-[#8a8a8a]">Experience moderate to severe hot flashes impacting daily performance.</div>
</div>
<div className="border-t border-[#333] pt-6 reveal delay-200">
<div className="text-[3rem] font-semibold text-[#f5f5f5] mb-2 flex items-baseline gap-1">
<span className="counter" data-target="4">0</span>-<span className="counter" data-target="8">0</span> <span className="text-[1.5rem] font-normal text-[#555]">yrs</span>
</div>
<div className="text-[0.875rem] text-[#8a8a8a]">Average duration of the perimenopausal transition phase.</div>
</div>
<div className="border-t border-[#333] pt-6 reveal delay-300">
<div className="text-[3rem] font-semibold text-[#f5f5f5] mb-2 flex items-baseline gap-1">
<span className="counter" data-target="2">0</span>+ <span className="text-[1.5rem] font-normal text-[#555]">hrs</span>
</div>
<div className="text-[0.875rem] text-[#8a8a8a]">Average sleep loss per night due to nocturnal temperature spikes.</div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(4rem,8vw,8rem)]" id="science">
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] mx-auto px-6">
<div className="font-mono text-[0.875rem] text-[#555] mb-8 reveal">/002/</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-h2 font-semibold leading-[1.1] mb-8 text-balance">
                        The Thermo-Sync mechanism.
                    </h2>
<div className="space-y-8 relative">

<div className="absolute left-3 top-2 bottom-2 w-px bg-[#222]"></div>
<div className="flex gap-6 relative z-10 group">
<div className="w-6 h-6 rounded-full bg-[#141414] border border-[#333] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a] mt-1 group-hover:border-[#00d4aa] group-hover:text-[#00d4aa] transition-colors bg-[#0a0a0a]">1</div>
<div>
<h3 className="text-[1.125rem] font-medium text-[#f5f5f5] mb-1">Detect</h3>
<p className="text-[0.875rem] text-[#8a8a8a]">Micro-sensors detect sub-dermal temp spikes 24/7 with 0.01° precision.</p>
</div>
</div>
<div className="flex gap-6 relative z-10 group">
<div className="w-6 h-6 rounded-full bg-[#141414] border border-[#333] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a] mt-1 group-hover:border-[#00d4aa] group-hover:text-[#00d4aa] transition-colors bg-[#0a0a0a]">2</div>
<div>
<h3 className="text-[1.125rem] font-medium text-[#f5f5f5] mb-1">Predict</h3>
<p className="text-[0.875rem] text-[#8a8a8a]">On-board algorithm predicts flash 15-30 seconds pre-onset via biometric patterns.</p>
</div>
</div>
<div className="flex gap-6 relative z-10 group">
<div className="w-6 h-6 rounded-full bg-[#141414] border border-[#333] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a] mt-1 group-hover:border-[#00d4aa] group-hover:text-[#00d4aa] transition-colors bg-[#0a0a0a]">3</div>
<div>
<h3 className="text-[1.125rem] font-medium text-[#f5f5f5] mb-1">Mitigate</h3>
<p className="text-[0.875rem] text-[#8a8a8a]">Paired device triggers active cooling module OR localized haptic breathing prompts.</p>
</div>
</div>
<div className="flex gap-6 relative z-10 group">
<div className="w-6 h-6 rounded-full bg-[#141414] border border-[#333] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a] mt-1 group-hover:border-[#00d4aa] group-hover:text-[#00d4aa] transition-colors bg-[#0a0a0a]">4</div>
<div>
<h3 className="text-[1.125rem] font-medium text-[#f5f5f5] mb-1">Log</h3>
<p className="text-[0.875rem] text-[#8a8a8a]">Event, duration, and efficacy logged automatically to your clinical profile.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] bg-[#141414] rounded-2xl border border-[#222] flex items-center justify-center overflow-hidden reveal delay-200">

<div className="absolute inset-0 flex items-center justify-center opacity-20">
<div className="w-64 h-64 border border-[#00d4aa] rounded-full absolute animate-[spin_10s_linear_infinite]"></div>
<div className="w-48 h-48 border border-[#555] border-dashed rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
</div>

<div className="relative w-32 h-16 bg-[#0a0a0a] border border-[#333] rounded-[2rem] shadow-2xl flex items-center justify-center overflow-hidden z-10">

<div className="pulse-sweep"></div>
<div className="w-8 h-2 bg-[#222] rounded-full flex gap-1 items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] opacity-50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] opacity-20"></div>
</div>
</div>

<div className="absolute top-4 right-4 bg-[#222] text-[#8a8a8a] font-mono text-[0.65rem] px-2 py-1 rounded-full uppercase tracking-widest border border-[#333]">
                        Endo-Research v2.4
                    </div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(4rem,8vw,8rem)] bg-[#141414] border-t border-[#222]" id="product">
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
<div>
<div className="font-mono text-[0.875rem] text-[#555] mb-4">/003/</div>
<h2 className="text-h2 font-semibold leading-[1.1]">One band.<br/>Two feedback loops.</h2>
</div>
<div className="font-mono text-[0.75rem] text-[#8a8a8a] bg-[#222] px-3 py-1.5 rounded-full inline-flex border border-[#333] self-start md:self-auto">
                    HIPAA-COMPLIANT
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[24rem]">

<div className="md:col-span-1 bg-[#0a0a0a] rounded-2xl border border-[#222] p-6 flex flex-col justify-between group border-glow reveal delay-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4aa] opacity-5 blur-[50px] rounded-full group-hover:opacity-10 transition-opacity"></div>
<div>
<iconify-icon className="text-[#8a8a8a] mb-6 icon-glow transition-colors" height="32" icon="solar:snowflake-linear" width="32"></iconify-icon>
<h3 className="text-[1.25rem] font-medium mb-2">Predict &amp; Prevent</h3>
<p className="text-[0.875rem] text-[#8a8a8a]">Thermo-Sync cools the skin or prompts a breathing exercise before you feel the heat.</p>
</div>

<div className="w-full h-24 bg-[#141414] border border-[#222] rounded-xl flex items-center justify-center relative overflow-hidden mt-4">
<iconify-icon className="text-[#555] relative z-10" height="40" icon="solar:watch-square-linear" width="40"></iconify-icon>
<div className="pulse-sweep z-0"></div>
</div>
</div>

<div className="md:col-span-2 bg-[#0a0a0a] rounded-2xl border border-[#222] p-6 flex flex-col md:flex-row gap-6 justify-between group border-glow reveal delay-200 in-view overflow-hidden relative">
<div className="flex-1 flex flex-col justify-between z-10">
<div>
<iconify-icon className="text-[#8a8a8a] mb-6 icon-glow transition-colors" height="32" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h3 className="text-[1.25rem] font-medium mb-2">Track &amp; Nourish</h3>
<p className="text-[0.875rem] text-[#8a8a8a] max-w-sm">The app cross-references your temp data with sleep quality to suggest daily micronutrients tailored to your exact phase.</p>
</div>

<div className="hidden md:flex items-center gap-4 mt-8 opacity-50">
<iconify-icon height="24" icon="solar:watch-round-linear" width="24"></iconify-icon>
<svg className="flex-1" height="2" width="100">
<line className="sync-path" stroke="#8a8a8a" strokeWidth="1" x1="0" x2="100" y1="1" y2="1"></line>
</svg>
<iconify-icon height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
</div>

<div className="w-48 h-48 relative self-center shrink-0 z-10">
<svg className="w-full h-full -rotate-90 drop-shadow-xl" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="40" stroke="#222" strokeWidth="12"></circle>

<circle className="donut-segment" cx="50" cy="50" data-tooltip="Magnesium: Pumpkin Seeds" fill="none" r="40" stroke="#00d4aa" stroke-dasharray="80 251.2" stroke-dashoffset="0" strokeWidth="12"></circle>

<circle className="donut-segment" cx="50" cy="50" data-tooltip="Phytoestrogens: Flaxseed" fill="none" r="40" stroke="#4a00d4" stroke-dasharray="60 251.2" stroke-dashoffset="-85" strokeWidth="12"></circle>

<circle className="donut-segment" cx="50" cy="50" data-tooltip="Calcium: Leafy Greens" fill="none" r="40" stroke="#8a8a8a" stroke-dasharray="40 251.2" stroke-dashoffset="-150" strokeWidth="12"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="text-[0.75rem] text-[#8a8a8a] font-mono uppercase tracking-wider">Phase</div>
<div className="text-[1.125rem] font-semibold">Luteal</div>
</div>

<div className="tooltip absolute -top-8 left-1/2 -translate-x-1/2 bg-[#222] border border-[#333] text-[0.65rem] text-[#f5f5f5] px-2 py-1 rounded shadow-lg whitespace-nowrap font-mono z-20">
                            Hover segment
                        </div>
</div>
</div>

<div className="md:col-span-3 bg-[#0a0a0a] rounded-2xl border border-[#222] p-6 flex flex-col md:flex-row items-center gap-8 group border-glow reveal delay-300">
<div className="flex-1 md:pr-12">
<iconify-icon className="text-[#8a8a8a] mb-6 icon-glow transition-colors" height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="text-[1.25rem] font-medium mb-2">Consult &amp; Share</h3>
<p className="text-[0.875rem] text-[#8a8a8a] max-w-lg">Meno-GPT answers your midnight questions using clinical literature, then generates HIPAA-compliant, single-page reports for your endocrinologist.</p>
</div>

<div className="w-full md:w-96 bg-[#141414] border border-[#222] rounded-xl p-4 flex flex-col gap-3">
<div className="flex items-start gap-2">
<div className="w-6 h-6 rounded bg-[#222] shrink-0 flex items-center justify-center text-[0.6rem] text-[#8a8a8a]">U</div>
<div className="bg-[#222] rounded-lg rounded-tl-none p-2 text-[0.75rem] text-[#8a8a8a] inline-block">
                                Why did I wake up at 3AM sweating when my room is 65°?
                            </div>
</div>
<div className="flex items-start gap-2">
<div className="w-6 h-6 rounded bg-[#00d4aa]/10 shrink-0 flex items-center justify-center text-[0.6rem] text-[#00d4aa]">AI</div>
<div className="bg-[#00d4aa]/5 border border-[#00d4aa]/20 rounded-lg rounded-tl-none p-2 text-[0.75rem] text-[#f5f5f5] inline-block">
<span className="blur-[2px] transition-all hover:blur-none select-none">Your band detected a rapid drop in estrogen at 2:45 AM, causing your hypothalamus to misread your core temp. I've logged this to your monthly report.</span>
</div>
</div>
<div className="mt-2 pt-2 border-t border-[#333] flex justify-between items-center text-[0.65rem] font-mono text-[#555]">
<span>End-to-End Encrypted</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:file-download-linear"></iconify-icon> Export PDF</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(4rem,8vw,8rem)] overflow-hidden">

<div className="relative w-full border-y border-[#222] py-6 mb-16 bg-[#141414]">
<div className="marquee-content gap-16 items-center px-8 font-semibold text-[1.25rem] tracking-tighter text-[#555] uppercase">
<span>Stanford Endo</span>
<span>Mayo Clinic</span>
<span>Wired</span>
<span>Fast Company</span>
<span>MIT Tech Review</span>
<span>Johns Hopkins</span>

<span>Stanford Endo</span>
<span>Mayo Clinic</span>
<span>Wired</span>
<span>Fast Company</span>
<span>MIT Tech Review</span>
<span>Johns Hopkins</span>
</div>

<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#141414] to-transparent z-10"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#141414] to-transparent z-10"></div>
</div>
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] mx-auto px-6">
<div className="text-center mb-12 reveal">
<div className="font-mono text-[0.875rem] text-[#555] mb-4">/004/</div>
<h2 className="text-h3 font-medium">Trusted by data, validated by experience.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#141414] border border-[#222] p-6 rounded-xl reveal delay-100 flex flex-col justify-between">
<p className="text-[0.875rem] text-[#8a8a8a] mb-6 leading-relaxed">"The prediction accuracy is surreal. For the first time in three years, I finally feel in control of my body during a meeting."</p>
<div className="flex items-center gap-3 border-t border-[#333] pt-4">
<div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a]">M</div>
<div className="text-[0.75rem]">
<div className="text-[#f5f5f5] font-medium">Maria, 49</div>
<div className="text-[#555]">User since Oct '23</div>
</div>
</div>
</div>

<div className="bg-[#141414] border border-[#222] p-6 rounded-xl reveal delay-200 flex flex-col justify-between">
<p className="text-[0.875rem] text-[#8a8a8a] mb-6 leading-relaxed">"My doctor was impressed with the symptom reports. It completely changed our consultation from 'how do you feel?' to 'let's look at the numbers.'"</p>
<div className="flex items-center gap-3 border-t border-[#333] pt-4">
<div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a]">C</div>
<div className="text-[0.75rem]">
<div className="text-[#f5f5f5] font-medium">Chloe, 52</div>
<div className="text-[#555]">User since Jan '24</div>
</div>
</div>
</div>

<div className="bg-[#141414] border border-[#222] p-6 rounded-xl reveal delay-300 flex flex-col justify-between">
<p className="text-[0.875rem] text-[#8a8a8a] mb-6 leading-relaxed">"The cycle-mapped nutrition suggestions helped my sleep more than anything else I've tried. The app connects the dots I couldn't."</p>
<div className="flex items-center gap-3 border-t border-[#333] pt-4">
<div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center font-mono text-[0.6rem] text-[#8a8a8a]">S</div>
<div className="text-[0.75rem]">
<div className="text-[#f5f5f5] font-medium">Samira, 47</div>
<div className="text-[#555]">User since Nov '23</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(4rem,8vw,8rem)] bg-[#0a0a0a] border-t border-[#222]">
<div className="w-full max-w-[clamp(1rem,80vw,80rem)] mx-auto px-6">
<div className="text-center mb-12 reveal">
<div className="font-mono text-[0.875rem] text-[#555] mb-4">/005/</div>
<h2 className="text-h2 font-semibold leading-[1.1]">Your daily command center.</h2>
</div>

<div className="w-full rounded-2xl border border-[#333] bg-[#141414] shadow-2xl overflow-hidden reveal delay-200">

<div className="h-10 bg-[#0a0a0a] border-b border-[#333] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="mx-auto bg-[#141414] border border-[#333] rounded px-24 py-1 flex items-center justify-center text-[0.65rem] text-[#555] font-mono">
<iconify-icon className="mr-1" icon="solar:lock-linear" width="12"></iconify-icon> app.menomorph.com
                    </div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0a0a0a]">

<div className="hidden md:flex flex-col gap-4 col-span-2 border-r border-[#222] pr-4">
<div className="h-8 bg-[#222] rounded w-full mb-4"></div>
<div className="h-4 bg-[#141414] rounded w-3/4"></div>
<div className="h-4 bg-[#141414] rounded w-1/2"></div>
<div className="h-4 bg-[#141414] rounded w-2/3"></div>
</div>

<div className="col-span-1 md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-full flex justify-between items-end border-b border-[#222] pb-4">
<div>
<h3 className="text-[1.5rem] font-medium">Morning Review</h3>
<p className="text-[0.875rem] text-[#8a8a8a]">Tuesday, Oct 24 — Day 18 of Cycle</p>
</div>

<div className="flex items-center gap-2">
<svg className="-rotate-90" height="24" viewbox="0 0 24 24" width="24">
<circle cx="12" cy="12" fill="none" r="10" stroke="#222" strokeWidth="2"></circle>
<circle cx="12" cy="12" fill="none" r="10" stroke="#00d4aa" stroke-dasharray="62.8" stroke-dashoffset="20" strokeWidth="2"></circle>
</svg>
<span className="text-[0.75rem] text-[#555] font-mono uppercase">Luteal</span>
</div>
</div>

<div className="md:col-span-2 bg-[#141414] border border-[#222] rounded-xl p-5">
<div className="flex justify-between items-center mb-6">
<h4 className="text-[0.875rem] font-medium text-[#8a8a8a]">Core Temp (24h)</h4>
<span className="text-[0.65rem] bg-[#222] px-2 py-1 rounded text-[#00d4aa]">Nominal</span>
</div>

<div className="w-full h-32 relative flex items-end justify-between px-2 pb-2">

<div className="absolute inset-0 border-b border-[#333] flex flex-col justify-between py-2">
<div className="w-full h-px bg-[#222]"></div>
<div className="w-full h-px bg-[#222]"></div>
<div className="w-full h-px bg-[#222]"></div>
</div>

<div className="w-1 bg-[#333] h-[40%] rounded-t z-10 relative"><div className="absolute -top-1 -left-[3px] w-2.5 h-2.5 bg-[#8a8a8a] rounded-full"></div></div>
<div className="w-1 bg-[#333] h-[45%] rounded-t z-10 relative"><div className="absolute -top-1 -left-[3px] w-2.5 h-2.5 bg-[#8a8a8a] rounded-full"></div></div>
<div className="w-1 bg-[#333] h-[60%] rounded-t z-10 relative"><div className="absolute -top-1 -left-[3px] w-2.5 h-2.5 bg-[#8a8a8a] rounded-full"></div></div>
<div className="w-1 bg-[#333] h-[85%] rounded-t z-10 relative"><div className="absolute -top-1 -left-[3px] w-2.5 h-2.5 bg-[#ff4a4a] rounded-full shadow-[0_0_10px_#ff4a4a]"></div></div>
<div className="w-1 bg-[#333] h-[50%] rounded-t z-10 relative"><div className="absolute -top-1 -left-[3px] w-2.5 h-2.5 bg-[#00d4aa] rounded-full shadow-[0_0_10px_#00d4aa]"></div></div>
<div className="w-1 bg-[#333] h-[40%] rounded-t z-10 relative"><div className="absolute -top-1 -left-[3px] w-2.5 h-2.5 bg-[#00d4aa] rounded-full"></div></div>
</div>
<div className="flex justify-between text-[0.65rem] text-[#555] font-mono mt-2">
<span>12AM</span><span>6AM</span><span>12PM</span>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#141414] border border-[#222] rounded-xl p-5 flex-1 flex flex-col justify-center">
<h4 className="text-[0.75rem] text-[#8a8a8a] mb-1">Sleep Quality</h4>
<div className="text-[2rem] font-semibold text-[#00d4aa]">84<span className="text-[1rem] text-[#555]">%</span></div>
<div className="text-[0.65rem] text-[#555] mt-1">+12% vs last week</div>
</div>

<div className="bg-[#141414] border border-[#222] rounded-xl p-4 flex-1">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#8a8a8a]" icon="solar:apple-linear"></iconify-icon>
<h4 className="text-[0.75rem] font-medium">Daily Focus</h4>
</div>
<p className="text-[0.75rem] text-[#8a8a8a] leading-relaxed">
                                    Add <span className="text-[#f5f5f5]">Pumpkin Seeds &amp; Flax</span> today for Magnesium + Phytoestrogens to support the luteal dip.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(4rem,8vw,8rem)] bg-[#141414] border-t border-[#222]" id="pricing">
<div className="w-full max-w-[clamp(1rem,70vw,70rem)] mx-auto px-6">
<div className="text-center mb-16 reveal">
<div className="font-mono text-[0.875rem] text-[#555] mb-4">/006/</div>
<h2 className="text-h2 font-semibold leading-[1.1]">Invest in clarity.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#0a0a0a] border border-[#333] rounded-2xl p-8 flex flex-col relative reveal delay-100 hover:border-[#00d4aa] transition-colors duration-500">
<div className="mb-8">
<h3 className="text-[1.5rem] font-medium mb-2">The Band</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-[2.5rem] font-semibold tracking-tighter">$149</span>
<span className="text-[0.875rem] text-[#8a8a8a]">one-time</span>
</div>
<p className="text-[0.875rem] text-[#8a8a8a]">Hardware-first entry point. Everything you need to start tracking.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#00d4aa] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>MenoMorph Clinical Wearable</span>
</li>
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#00d4aa] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Thermo-Sync prediction &amp; haptics</span>
</li>
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#00d4aa] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>1-year local data history</span>
</li>
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#00d4aa] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Basic app dashboard access</span>
</li>
</ul>
<button className="w-full relative overflow-hidden group bg-[#00d4aa] text-[#0a0a0a] rounded-lg py-3.5 text-[0.875rem] font-medium">
<div className="relative transition-transform duration-500 group-hover:-translate-y-[150%]">Start with the Band</div>
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">Checkout</div>
</button>
</div>

<div className="bg-[#141414] border border-[#222] rounded-2xl p-8 flex flex-col relative reveal delay-200">
<div className="absolute top-0 right-0 bg-[#333] text-[#f5f5f5] text-[0.65rem] font-mono px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
                        Optional Add-on
                    </div>
<div className="mb-8">
<h3 className="text-[1.5rem] font-medium mb-2">Meno-Pro</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-[2.5rem] font-semibold tracking-tighter">$15</span>
<span className="text-[0.875rem] text-[#8a8a8a]">/month</span>
</div>
<p className="text-[0.875rem] text-[#8a8a8a]">Advanced analytics and clinical support for those who want deep insights.</p>
</div>
<ul className="space-y-4 mb-10 flex-1 opacity-80">
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#555] mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<span>Advanced cycle mapping &amp; nutrition</span>
</li>
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#555] mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<span>Personalized supplement delivery</span>
</li>
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#555] mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<span>Doctor report PDF generation</span>
</li>
<li className="flex items-start gap-3 text-[0.875rem]">
<iconify-icon className="text-[#555] mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<span>24/7 Nurse Practitioner chat</span>
</li>
</ul>
<button className="w-full btn-secondary border border-[#555] text-[#f5f5f5] rounded-lg py-3.5 text-[0.875rem] font-medium transition-colors">
                        Add to Order Later
                    </button>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(4rem,8vw,8rem)] border-t border-[#222]">
<div className="w-full max-w-[clamp(1rem,48rem,48rem)] mx-auto px-6">
<div className="text-center mb-12 reveal">
<div className="font-mono text-[0.875rem] text-[#555] mb-4">/007/</div>
<h2 className="text-h3 font-medium">Common questions, clear answers.</h2>
</div>
<div className="space-y-4 reveal delay-100">

<details className="group border-b border-[#222] pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-[1rem] font-medium text-[#f5f5f5] hover:text-[#00d4aa] transition-colors">
                        Is my health data private?
                        <iconify-icon className="accordion-icon text-[#8a8a8a] group-hover:text-[#00d4aa]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="text-[0.875rem] text-[#8a8a8a] pt-2 pb-4 leading-relaxed pr-8">
                        Absolute privacy is our baseline. All biometric data is encrypted end-to-end and stored on fully HIPAA-compliant servers. We never sell your data, and you can delete your entire history with one click.
                    </div>
</details>
<details className="group border-b border-[#222] pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-[1rem] font-medium text-[#f5f5f5] hover:text-[#00d4aa] transition-colors">
                        Can I use my HSA/FSA?
                        <iconify-icon className="accordion-icon text-[#8a8a8a] group-hover:text-[#00d4aa]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="text-[0.875rem] text-[#8a8a8a] pt-2 pb-4 leading-relaxed pr-8">
                        Yes. MenoMorph is classified as an eligible health monitoring device. We provide an itemized receipt post-purchase that you can submit to your provider for full reimbursement.
                    </div>
</details>
<details className="group border-b border-[#222] pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-[1rem] font-medium text-[#f5f5f5] hover:text-[#00d4aa] transition-colors">
                        What's the battery life?
                        <iconify-icon className="accordion-icon text-[#8a8a8a] group-hover:text-[#00d4aa]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="text-[0.875rem] text-[#8a8a8a] pt-2 pb-4 leading-relaxed pr-8">
                        The band lasts 5 full days on a single charge, even with 24/7 temperature monitoring and haptic feedback active. It charges from 0 to 100% in 45 minutes via the included magnetic puck.
                    </div>
</details>
<details className="group border-b border-[#222] pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-2 text-[1rem] font-medium text-[#f5f5f5] hover:text-[#00d4aa] transition-colors">
                        How is this different from a standard fitness tracker?
                        <iconify-icon className="accordion-icon text-[#8a8a8a] group-hover:text-[#00d4aa]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="text-[0.875rem] text-[#8a8a8a] pt-2 pb-4 leading-relaxed pr-8">
                        Fitness trackers are built for macro-movements and general wellness. MenoMorph uses dedicated medical-grade thermistors to measure basal body temperature to the 0.01° degree, paired with a clinical AI model specifically trained on endocrinology data to predict hot flashes, not just log steps.
                    </div>
</details>
</div>
</div>
</section>

<section className="w-full py-[clamp(6rem,12vw,12rem)] relative overflow-hidden flex flex-col items-center justify-center text-center">

<div className="absolute inset-0 z-0 pointer-events-none opacity-40">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-radial-gradient from-[rgba(0,212,170,0.1)] to-transparent blur-[100px] mix-blend-screen"></div>
</div>
<div className="w-full max-w-2xl mx-auto px-6 relative z-10 reveal">
<h2 className="text-h1 font-semibold leading-[1] mb-6 tracking-tighter">
                Stop guessing.<br/>Start predicting.
            </h2>
<p className="text-body text-[#8a8a8a] mb-10 text-balance">
                Join the first cohort mastering their menopause data.
            </p>
<a className="inline-flex relative overflow-hidden group bg-[#00d4aa] text-[#0a0a0a] rounded-full px-10 py-5 text-[1.125rem] font-medium shadow-[0_0_30px_rgba(0,212,170,0.2)] hover:shadow-[0_0_40px_rgba(0,212,170,0.4)] transition-shadow" href="#pricing">
<div className="relative transition-transform duration-500 group-hover:-translate-y-[150%]">Order Your Meno-Band</div>
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">Secure Your Device</div>
</a>
<div className="mt-8 flex items-center justify-center gap-4 font-mono text-[0.75rem] text-[#555]">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> 30-day money-back guarantee</span>
<span className="w-1 h-1 rounded-full bg-[#333]"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> Free shipping</span>
</div>
</div>
</section>

<footer className="w-full border-t border-[#222] bg-[#0a0a0a] pt-16 pb-8">
<div className="w-full max-w-[clamp(1rem,90vw,90rem)] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>
<div className="text-[#f5f5f5] font-semibold tracking-tighter text-[1.25rem] uppercase mb-4">
                        Menomorph
                    </div>
<p className="text-[0.875rem] text-[#8a8a8a] max-w-xs">
                        Don't just survive the change. Master the data behind it.
                    </p>
</div>

<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-3 text-[0.875rem] text-[#8a8a8a]">
<a className="hover:text-[#00d4aa] transition-colors w-fit" href="#">Product</a>
<a className="hover:text-[#00d4aa] transition-colors w-fit" href="#">Science</a>
<a className="hover:text-[#00d4aa] transition-colors w-fit" href="#">For Doctors</a>
</div>
<div className="flex flex-col gap-3 text-[0.875rem] text-[#8a8a8a]">
<a className="hover:text-[#f5f5f5] transition-colors w-fit" href="#">Privacy Policy</a>
<a className="hover:text-[#f5f5f5] transition-colors w-fit" href="#">Terms of Service</a>
<a className="hover:text-[#f5f5f5] transition-colors w-fit" href="#">HIPAA Statement</a>
</div>
</div>

<div>
<h4 className="text-[0.875rem] font-medium text-[#f5f5f5] mb-4">Clinical Updates</h4>
<form className="flex gap-2" onsubmit="event.preventDefault();">
<input className="bg-[#141414] border border-[#333] rounded px-4 py-2 text-[0.875rem] text-[#f5f5f5] w-full focus:outline-none focus:border-[#00d4aa] transition-colors placeholder:text-[#555]" placeholder="Email address" type="email"/>
<button className="bg-[#222] hover:bg-[#333] text-[#f5f5f5] border border-[#333] rounded px-4 py-2 text-[0.875rem] transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] text-[#555] font-mono">
<div>© 2024 MenoMorph Health Inc. All rights reserved.</div>
<div className="flex gap-4">
<span>Designed for biological mastery.</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
