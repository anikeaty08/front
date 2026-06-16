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



        document.addEventListener("DOMContentLoaded", () => {
            // --- Custom Cursor Logic ---
            const dot = document.getElementById('cursor-dot');
            const ring = document.getElementById('cursor-ring');
            
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let ringX = mouseX;
            let ringY = mouseY;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                // Move dot instantly
                dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
            });
            
            // Animate ring for slight lag
            const animateRing = () => {
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
                requestAnimationFrame(animateRing);
            };
            animateRing();

            // Hover state for interactive elements
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, .tilt-wrapper, .magnetic');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
            });

            // --- Scroll Reveal Intersection Observer ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-target').forEach((el) => {
                observer.observe(el);
            });

            // --- Gravity (Magnetic) Effect ---
            const magnetics = document.querySelectorAll('.magnetic');
            magnetics.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const h = rect.width / 2;
                    const v = rect.height / 2;
                    // Calculate distance from center
                    const x = (e.clientX - rect.left - h) * 0.3; 
                    const y = (e.clientY - rect.top - v) * 0.3;
                    
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                });
                
                btn.addEventListener('mouseleave', () => {
                    // Reset position smoothly
                    btn.style.transform = `translate(0px, 0px)`;
                });
            });

            // --- 3D Hover Tilt Effect (Reversed: Tilts towards pointer) ---
            const tiltWrappers = document.querySelectorAll('.tilt-wrapper');
            
            tiltWrappers.forEach(wrapper => {
                wrapper.addEventListener('mousemove', (e) => {
                    const rect = wrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left; 
                    const y = e.clientY - rect.top;  
                    
                    const xPct = (x / rect.width) - 0.5;
                    const yPct = (y / rect.height) - 0.5;
                    
                    // Reversed logic: Positive yPct means cursor is at the bottom.
                    // To tilt the bottom towards you, rotateX needs to be positive.
                    const rotateX = yPct * 20; 
                    // Positive xPct means cursor is at the right.
                    // To tilt the right side towards you, rotateY needs to be negative.
                    const rotateY = xPct * -20;

                    wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });

                wrapper.addEventListener('mouseleave', () => {
                    wrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot" id="cursor-dot"></div>
<div className="cursor-ring" id="cursor-ring"></div>

<nav className="fixed w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center transition-all duration-300 reveal-target is-visible">
<a className="magnetic text-lg font-normal tracking-tighter uppercase text-white hover:text-orange-500 p-2" href="#">Comet</a>
<div className="hidden md:flex gap-8 text-sm font-extralight tracking-wide text-zinc-400">
<a className="magnetic hover:text-orange-500 transition-colors p-2" href="#about">Founder</a>
<a className="magnetic hover:text-orange-500 transition-colors p-2" href="#services">Expertise</a>
<a className="magnetic hover:text-orange-500 transition-colors p-2" href="#contact">Engage</a>
</div>
<button className="magnetic md:hidden text-zinc-400 hover:text-orange-500 transition-colors p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-24 bg-black">
<div className="bg-3d-grid"></div>
<div className="ambient-orb w-[40vw] h-[40vw] top-[10%] right-[10%]"></div>
<div className="ambient-orb w-[30vw] h-[30vw] bottom-[20%] left-[5%]" style={{animationDelay: '-5s'}}></div>
<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start perspective-1000">
<div className="mb-6">
<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tighter leading-[0.9] text-white reveal-target">
                    Precision.<br/>
<span className="text-orange-500 inline-block reveal-target delay-100">Execution.</span><br/>
<span className="inline-block reveal-target delay-200">Scale.</span>
</h1>
</div>
<div className="mb-12 max-w-2xl reveal-target delay-300">
<p className="text-base md:text-lg lg:text-xl text-zinc-400 font-extralight leading-relaxed tracking-wide">
                    Premium global consulting bridging visionary brand concepts with elite Asian manufacturing execution. Architecting supply chains for the world's most demanding sports brands.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 reveal-target delay-300">
<a className="magnetic tilt-wrapper rounded-full w-full sm:w-auto px-8 py-4 bg-orange-500 text-black text-sm font-normal tracking-widest uppercase hover:bg-orange-400 transition-all flex items-center justify-center gap-2 relative overflow-hidden group shadow-[0_0_30px_rgba(249,115,22,0.2)]" href="#contact">
<span className="tilt-content relative z-10 font-normal">Work With Me</span>
</a>
<a className="magnetic tilt-wrapper rounded-full w-full sm:w-auto px-8 py-4 text-sm font-normal tracking-widest uppercase text-zinc-400 hover:text-orange-500 transition-all flex items-center justify-center gap-2 group" href="#about">
<span className="tilt-content flex items-center gap-2">
                        View Experience
                        <iconify-icon className="group-hover:translate-x-2 transition-transform duration-500" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-orange-950/20 bg-black relative" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
<div className="lg:col-span-4 reveal-target">
<h2 className="text-xs md:text-sm font-normal tracking-widest uppercase text-orange-600 sticky top-32">01 / The Founder</h2>
</div>
<div className="lg:col-span-8 flex flex-col gap-12 tilt-wrapper p-8 md:p-12 -mx-8 hover:bg-orange-500/5 rounded-[2rem] border border-transparent hover:border-orange-500/10 transition-all duration-500">
<h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-tight text-white tilt-content reveal-target delay-100">
                    Joel Haines
                </h3>
<div className="flex flex-col gap-8 text-base md:text-lg text-zinc-400 font-extralight leading-relaxed max-w-3xl tilt-content reveal-target delay-200">
<p>
                        With twenty years living and operating on the ground in China, Joel Haines has cultivated an unparalleled mastery of the Asian manufacturing landscape and the nuances of cross-border execution.
                    </p>
<p>
                        Specializing deeply within the snowboard and action sports industry, he has served as the critical link between visionary international brands and top-tier production facilities. His approach is not merely advisory—it is rooted in direct, tactical execution, ensuring product integrity from raw material sourcing to final market entry.
                    </p>
<p>
                        Through Comet Solutions, Joel offers an elite, high-trust partnership for brands requiring structural resilience, manufacturing clarity, and strategic expansion in complex global markets.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-orange-950/20 bg-black" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal-target">
<h2 className="text-xs md:text-sm font-normal tracking-widest uppercase text-orange-600">02 / Expertise</h2>
</div>
<div className="flex flex-col gap-4 perspective-1000">

<div className="tilt-wrapper rounded-[2rem] group py-10 md:py-12 px-8 hover:bg-orange-500/5 hover:border-orange-500/10 border border-transparent transition-all duration-500 reveal-target delay-100">
<div className="tilt-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<h4 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-zinc-300 group-hover:text-orange-500 transition-colors duration-500">
                            Supply Chain Strategy
                        </h4>
<p className="text-sm md:text-base text-zinc-500 font-extralight lg:text-right max-w-md group-hover:text-zinc-300 transition-colors">
                            Architecting resilient, cost-effective global logistics and material sourcing networks.
                        </p>
</div>
</div>

<div className="tilt-wrapper rounded-[2rem] group py-10 md:py-12 px-8 hover:bg-orange-500/5 hover:border-orange-500/10 border border-transparent transition-all duration-500 reveal-target delay-100">
<div className="tilt-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<h4 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-zinc-300 group-hover:text-orange-500 transition-colors duration-500">
                            Manufacturing Consulting
                        </h4>
<p className="text-sm md:text-base text-zinc-500 font-extralight lg:text-right max-w-md group-hover:text-zinc-300 transition-colors">
                            Optimizing factory relations, production oversight, and quality assurance protocols in Asia.
                        </p>
</div>
</div>

<div className="tilt-wrapper rounded-[2rem] group py-10 md:py-12 px-8 hover:bg-orange-500/5 hover:border-orange-500/10 border border-transparent transition-all duration-500 reveal-target delay-200">
<div className="tilt-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<h4 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-zinc-300 group-hover:text-orange-500 transition-colors duration-500">
                            Brand Development
                        </h4>
<p className="text-sm md:text-base text-zinc-500 font-extralight lg:text-right max-w-md group-hover:text-zinc-300 transition-colors">
                            Translating sports industry concepts into commercially viable, highly constructed brands.
                        </p>
</div>
</div>

<div className="tilt-wrapper rounded-[2rem] group py-10 md:py-12 px-8 hover:bg-orange-500/5 hover:border-orange-500/10 border border-transparent transition-all duration-500 reveal-target delay-200">
<div className="tilt-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<h4 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-zinc-300 group-hover:text-orange-500 transition-colors duration-500">
                            Asia Market Entry
                        </h4>
<p className="text-sm md:text-base text-zinc-500 font-extralight lg:text-right max-w-md group-hover:text-zinc-300 transition-colors">
                            Strategic positioning and structural setup for western brands expanding into the Asian sector.
                        </p>
</div>
</div>

<div className="tilt-wrapper rounded-[2rem] group py-10 md:py-12 px-8 hover:bg-orange-500/5 hover:border-orange-500/10 border border-transparent transition-all duration-500 reveal-target delay-300">
<div className="tilt-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<h4 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-zinc-300 group-hover:text-orange-500 transition-colors duration-500">
                            Product Development
                        </h4>
<p className="text-sm md:text-base text-zinc-500 font-extralight lg:text-right max-w-md group-hover:text-zinc-300 transition-colors">
                            End-to-end oversight from technical design to prototyping and mass production.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-orange-950/20 relative overflow-hidden">
<div className="ambient-orb w-[50vw] h-[50vw] top-0 left-[-10%] opacity-30"></div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-xs md:text-sm font-normal tracking-widest uppercase text-orange-600 mb-16 reveal-target">03 / The Advantage</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 perspective-1000">
<div className="tilt-wrapper rounded-3xl flex flex-col gap-4 p-8 border border-white/5 bg-zinc-950/30 backdrop-blur-sm reveal-target group hover:border-orange-500/20">
<div className="tilt-content">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-orange-500 block mb-4 group-hover:scale-105 transition-transform duration-500">20<span className="text-orange-800 text-3xl">yr</span></span>
<h5 className="text-sm font-normal tracking-wide uppercase text-zinc-200 mb-2">Asia Experience</h5>
<p className="text-sm font-extralight text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Two decades of boots-on-the-ground operational history across China and broader Asia.</p>
</div>
</div>
<div className="tilt-wrapper rounded-3xl flex flex-col gap-4 p-8 border border-white/5 bg-zinc-950/30 backdrop-blur-sm reveal-target delay-100 group hover:border-orange-500/20">
<div className="tilt-content">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-orange-500 block mb-4 group-hover:scale-105 transition-transform duration-500">Deep</span>
<h5 className="text-sm font-normal tracking-wide uppercase text-zinc-200 mb-2">Network Access</h5>
<p className="text-sm font-extralight text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Direct relationships with top-tier manufacturing facilities and supply chain partners.</p>
</div>
</div>
<div className="tilt-wrapper rounded-3xl flex flex-col gap-4 p-8 border border-white/5 bg-zinc-950/30 backdrop-blur-sm reveal-target delay-200 group hover:border-orange-500/20">
<div className="tilt-content">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-orange-500 block mb-4 group-hover:scale-105 transition-transform duration-500">Niche</span>
<h5 className="text-sm font-normal tracking-wide uppercase text-zinc-200 mb-2">Sports Focus</h5>
<p className="text-sm font-extralight text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Unrivaled expertise within the action sports and technical hardgoods industries.</p>
</div>
</div>
<div className="tilt-wrapper rounded-3xl flex flex-col gap-4 p-8 border border-white/5 bg-zinc-950/30 backdrop-blur-sm reveal-target delay-300 group hover:border-orange-500/20">
<div className="tilt-content">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-orange-500 block mb-4 group-hover:scale-105 transition-transform duration-500">End</span>
<h5 className="text-sm font-normal tracking-wide uppercase text-zinc-200 mb-2">Execution</h5>
<p className="text-sm font-extralight text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">We do not just advise; we execute, managing the entire lifecycle from concept to delivery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-orange-950/20 bg-black">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/4 reveal-target">
<h2 className="text-xs md:text-sm font-normal tracking-widest uppercase text-orange-600">04 / Selected Partners</h2>
</div>
<div className="lg:w-3/4 flex flex-col sm:flex-row flex-wrap gap-x-16 gap-y-12 items-center lg:justify-end perspective-1000">
<div className="magnetic tilt-wrapper rounded-2xl px-6 py-4 border border-transparent hover:border-orange-500/20 hover:bg-orange-500/5 transition-all reveal-target delay-100">
<div className="tilt-content text-xl md:text-2xl font-normal tracking-tight text-zinc-500 hover:text-orange-500 transition-colors uppercase">
                        Pacific Pine
                    </div>
</div>
<div className="magnetic tilt-wrapper rounded-2xl px-6 py-4 border border-transparent hover:border-orange-500/20 hover:bg-orange-500/5 transition-all reveal-target delay-200">
<div className="tilt-content text-xl md:text-2xl font-normal tracking-tight text-zinc-500 hover:text-orange-500 transition-colors uppercase">
                        GP87 Snowboards
                    </div>
</div>
<div className="magnetic tilt-wrapper rounded-2xl px-6 py-4 border border-transparent hover:border-orange-500/20 hover:bg-orange-500/5 transition-all reveal-target delay-300">
<div className="tilt-content text-xl md:text-2xl font-normal tracking-tight text-zinc-500 hover:text-orange-500 transition-colors uppercase">
                        Telos Snowboards
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-orange-950/20 relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 perspective-1000">
<div className="flex flex-col justify-between reveal-target">
<div>
<h2 className="text-xs md:text-sm font-normal tracking-widest uppercase text-orange-600 mb-12">05 / Engage</h2>
<h3 className="text-5xl md:text-7xl font-normal tracking-tighter leading-tight text-white mb-8">
                        Initiate<br/>Dialogue.
                    </h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed max-w-md">
                        Engage Comet Solutions for specialized consulting, structural strategy, and elite manufacturing execution in Asia.
                    </p>
</div>
<div className="mt-24 hidden lg:block">
<p className="text-xs tracking-widest uppercase text-zinc-600 font-normal">© Comet Solutions. Global Consulting.</p>
</div>
</div>
<div className="tilt-wrapper rounded-[2.5rem] reveal-target delay-200">
<div className="tilt-content rounded-[2.5rem] bg-zinc-950/50 p-8 md:p-12 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-orange-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
<form className="flex flex-col gap-12 relative z-10">
<div className="relative group/input">
<input className="w-full text-base py-4 border-b border-zinc-800 bg-transparent text-white peer" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-zinc-500 text-base font-extralight transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange-500 cursor-text pointer-events-none" htmlFor="name">Full Name</label>
</div>
<div className="relative group/input">
<input className="w-full text-base py-4 border-b border-zinc-800 bg-transparent text-white peer" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-4 text-zinc-500 text-base font-extralight transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange-500 cursor-text pointer-events-none" htmlFor="email">Email Address</label>
</div>
<div className="relative group/input">
<input className="w-full text-base py-4 border-b border-zinc-800 bg-transparent text-white peer" id="company" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-zinc-500 text-base font-extralight transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange-500 cursor-text pointer-events-none" htmlFor="company">Company (Optional)</label>
</div>
<div className="relative group/input">
<textarea className="w-full text-base py-4 border-b border-zinc-800 bg-transparent text-white peer resize-none" id="message" placeholder=" " rows="3"></textarea>
<label className="absolute left-0 top-4 text-zinc-500 text-base font-extralight transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange-500 cursor-text pointer-events-none" htmlFor="message">Project Details</label>
</div>
<button className="magnetic mt-4 self-start flex items-center gap-3 text-sm font-normal uppercase tracking-widest text-black bg-orange-500 rounded-full px-8 py-4 hover:bg-orange-400 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(249,115,22,0.15)]" type="button">
                            Submit Inquiry
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="mt-24 lg:hidden px-6 relative z-10 text-center reveal-target">
<p className="text-xs tracking-widest uppercase text-zinc-600 font-normal">© Comet Solutions</p>
</div>
</section>


    </>
  );
}
