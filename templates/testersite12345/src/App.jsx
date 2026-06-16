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
            
            // 1. Global Mouse Parallax Glow
            const glow = document.getElementById('mouse-glow');
            document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                glow.style.background = `radial-gradient(circle 600px at ${x}% ${y}%, rgba(255,255,255,0.04), transparent 80%)`;
            });

            // 2. 3D Tilt & Glare Effect
            const tiltElements = document.querySelectorAll('.js-3d-tilt');
            tiltElements.forEach(el => {
                el.classList.add('tilt-smooth');
                const glare = el.querySelector('.js-glare');

                el.addEventListener('mousemove', (e) => {
                    el.classList.remove('tilt-smooth');
                    el.classList.add('tilt-active');

                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    // Calculate rotation (max 10 degrees)
                    const rotateX = ((y - centerY) / centerY) * -10; 
                    const rotateY = ((x - centerX) / centerX) * 10;

                    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

                    // Move Glare if exists
                    if(glare) {
                        const glareX = (x / rect.width) * 100;
                        const glareY = (y / rect.height) * 100;
                        glare.style.transform = `translateX(${glareX - 100}%) translateY(${glareY - 100}%)`;
                    }
                });

                el.addEventListener('mouseleave', () => {
                    el.classList.remove('tilt-active');
                    el.classList.add('tilt-smooth');
                    el.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                    
                    if(glare) {
                        glare.style.transform = `translateX(-100%) translateY(-100%)`;
                    }
                });
            });

            // 3. Scroll Reveal (Intersection Observer)
            const revealElements = document.querySelectorAll('.reveal-3d');
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });

            revealElements.forEach(el => revealObserver.observe(el));

            // 4. Parallax Scroll Effect
            const parallaxElements = document.querySelectorAll('.js-parallax');
            let lastScrollY = window.scrollY;
            let ticking = false;

            const updateParallax = () => {
                parallaxElements.forEach(el => {
                    const speed = el.getAttribute('data-speed') || 0.1;
                    const yPos = -(lastScrollY * speed);
                    el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });
                ticking = false;
            };

            window.addEventListener('scroll', () => {
                lastScrollY = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-50" id="mouse-glow" style={{background: 'radial-gradient(600px at 99.5139% 41.7051%, rgba(255, 255, 255, 0.04), transparent 80%)'}}></div>

<div className="fixed inset-0 pointer-events-none z-0 perspective-1000 overflow-hidden">

<div className="absolute top-32 right-[10%] w-64 h-64 js-parallax preserve-3d spin-3d-slow opacity-20" data-speed="0.15">
<div className="absolute inset-0 border rounded-full border-orange-700" style={{transform: 'rotateX(45deg)'}}></div>
<div className="absolute inset-0 border rounded-full border-orange-700" style={{transform: 'rotateY(45deg)'}}></div>
<div className="absolute inset-0 border rounded-full border-orange-700" style={{transform: 'rotateZ(45deg)'}}></div>
</div>

<div className="absolute top-[60%] left-[-5%] w-96 h-96 js-parallax preserve-3d spin-3d-slower opacity-10" data-speed="-0.1">
<div className="absolute inset-0 border rounded-full border-orange-600" style={{transform: 'rotateX(60deg)'}}></div>
<div className="absolute inset-0 border rounded-full border-orange-600" style={{transform: 'rotateY(60deg)'}}></div>
<div className="absolute inset-0 border rounded-full border-orange-600" style={{transform: 'rotateZ(60deg)'}}></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all transform-gpu bg-orange-950/80 border-orange-900">
<div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="font-semibold tracking-tighter text-base uppercase text-white" href="#">SALT</a>
<div className="flex items-center gap-6 text-xs font-medium text-orange-400">
<a className="transition-colors hover:text-white" href="#">Vision</a>
<a className="transition-colors hover:text-white" href="#">Systems</a>
<a className="text-white" href="#">Story</a>
</div>
</div>
</nav>

<header className="pt-40 pb-24 px-6 max-w-3xl mx-auto text-center relative z-10 perspective-1000">
<div className="js-3d-tilt preserve-3d relative">
<div className="reveal-3d is-visible" style={{transform: 'translateZ(40px)'}}>
<p className="text-xs font-medium tracking-widest uppercase text-orange-500 mb-6">SALT — Our Story</p>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-white">A Quiet Beginning</h1>
<p className="text-lg md:text-xl leading-relaxed font-normal max-w-2xl mx-auto text-orange-400">
                    What began as a quiet pursuit among architects is now open to everyone. We started with a simple observation:
                </p>
</div>
<div className="mt-12 border rounded-2xl p-8 md:p-12 text-left relative overflow-hidden group preserve-3d reveal-3d delay-200 bg-orange-900/30 border-orange-800/50 is-visible" style={{transform: 'translateZ(20px)'}}>
<div className="glare-container"><div className="glare js-glare"></div></div>

<img alt="Abstract architectural light" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110 group-hover:scale-105 transition-transform duration-1000 js-parallax" data-speed="0.05" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r to-transparent from-orange-950 via-orange-950/80"></div>
<div className="absolute top-0 left-0 w-1 h-full bg-orange-800" style={{transform: 'translateZ(10px)'}}></div>
<div className="relative z-10 preserve-3d">
<p className="text-xl md:text-2xl font-medium italic mb-8 drop-shadow-lg text-white" style={{transform: 'translateZ(50px)'}}>
                        “Lighting was everywhere but rarely understood.”
                    </p>
<div className="text-sm space-y-2 font-mono flex flex-col text-orange-400" style={{transform: 'translateZ(30px)'}}>
<span className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><iconify-icon className="text-orange-600" icon="solar:close-circle-linear"></iconify-icon> Too bright.</span>
<span className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><iconify-icon className="text-orange-600" icon="solar:close-circle-linear"></iconify-icon> Too harsh.</span>
<span className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><iconify-icon className="text-orange-600" icon="solar:close-circle-linear"></iconify-icon> Too thoughtless.</span>
</div>
<p className="mt-8 font-medium text-orange-200" style={{transform: 'translateZ(40px)'}}>We believed light could be more.</p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t relative z-10 border-orange-900">
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 perspective-1000">
<div className="js-3d-tilt preserve-3d group cursor-default reveal-3d tilt-smooth">
<div className="mb-8 overflow-hidden rounded-xl border relative border-orange-800/50" style={{transform: 'translateZ(20px)'}}>
<div className="glare-container"><div className="glare js-glare"></div></div>
<img alt="Shadows and light" className="w-full aspect-video object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 js-parallax" data-speed="0.08" src="https://images.unsplash.com/photo-1615876234886-fd1a88c44a89?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-orange-950/20"></div>
</div>
<div style={{transform: 'translateZ(40px)'}}>
<h2 className="text-2xl font-semibold tracking-tight mb-6 text-white">A Different way to think about light</h2>
<div className="leading-relaxed text-sm space-y-4 text-orange-400">
<p>Light is not decoration.</p>
<p>It defines space. Reveals material. Shapes how people feel.</p>
<p className="font-medium pt-4 text-orange-300">At SALT, we design light not as an object, but as a behavior within architecture.</p>
</div>
</div>
</div>
<div className="js-3d-tilt preserve-3d group cursor-default reveal-3d delay-200 tilt-smooth">
<div className="mb-8 overflow-hidden rounded-xl border relative border-orange-800/50" style={{transform: 'translateZ(20px)'}}>
<div className="glare-container"><div className="glare js-glare"></div></div>
<img alt="Minimalist light intent" className="w-full aspect-video object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 js-parallax" data-speed="0.12" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-orange-950/20"></div>
</div>
<div style={{transform: 'translateZ(40px)'}}>
<h2 className="text-2xl font-semibold tracking-tight mb-6 text-white">The Pursuit of Intent</h2>
<div className="leading-relaxed text-sm space-y-4 text-orange-400">
<p>From the beginning, we did not chase scale. We focused on fundamentals:</p>
<ul className="space-y-3 pt-2 preserve-3d">
<li className="flex items-center gap-3 transition-transform hover:translate-x-2 text-orange-300" style={{transform: 'translateZ(10px)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> Consistency
                            </li>
<li className="flex items-center gap-3 transition-transform hover:translate-x-2 text-orange-300" style={{transform: 'translateZ(20px)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> Comfort
                            </li>
<li className="flex items-center gap-3 transition-transform hover:translate-x-2 text-orange-300" style={{transform: 'translateZ(30px)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> Control
                            </li>
</ul>
<p className="pt-4 italic">Because great lighting is not noticed. It is experienced.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t relative z-10 perspective-1000 overflow-hidden bg-orange-900/20 border-orange-900">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border js-parallax opacity-20 border-orange-800/30" data-speed="-0.05"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border js-parallax opacity-30 border-orange-800/40" data-speed="-0.1"></div>
<div className="max-w-4xl mx-auto space-y-32 relative z-10">

<div className="text-center max-w-2xl mx-auto js-3d-tilt preserve-3d reveal-3d tilt-smooth">
<div style={{transform: 'translateZ(50px)'}}>
<iconify-icon className="text-3xl mb-6 drop-shadow-md js-parallax inline-block text-orange-600" data-speed="0.2" icon="solar:layers-linear"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-white">Engineering the Invisible</h2>
<p className="leading-relaxed text-sm text-orange-400">
                        Every SALT luminaire is built with purpose. From chipset to optics, from thermal design to finish each element works as part of a system.
                    </p>
<p className="mt-6 text-sm font-medium text-orange-300">
                        Not to stand out. But to disappear into architecture. And let the space speak.
                    </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-square md:aspect-auto md:h-full border rounded-2xl flex items-center justify-center p-8 relative overflow-hidden group min-h-[300px] js-3d-tilt preserve-3d cursor-crosshair reveal-3d bg-orange-950 border-orange-800/50 tilt-smooth">
<div className="glare-container z-30"><div className="glare js-glare"></div></div>
<img alt="Light gradients" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 js-parallax" data-speed="0.06" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br to-transparent from-orange-950/80"></div>
<div className="absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 from-orange-800/30"></div>
<div className="w-32 h-32 rounded-full border flex items-center justify-center relative z-20 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)] border-orange-700/50" style={{transform: 'translateZ(60px)'}}>
<div className="w-24 h-24 rounded-full border flex items-center justify-center border-orange-600/50" style={{transform: 'translateZ(30px)'}}>
<iconify-icon className="text-4xl group-hover:text-white group-hover:scale-110 group-hover:rotate-90 transition-all duration-700 drop-shadow-lg text-orange-400" icon="solar:sun-2-linear"></iconify-icon>
</div>
</div>
</div>
<div className="order-1 md:order-2 md:pl-8 js-3d-tilt preserve-3d reveal-3d delay-200 tilt-smooth">
<div style={{transform: 'translateZ(30px)'}}>
<h3 className="text-2xl font-semibold tracking-tight mb-6 text-white">Learning from light itself</h3>
<div className="leading-relaxed text-sm space-y-4 text-orange-400">
<p>Our process begins with observation.</p>
<p>How daylight moves. How shadows soften edges. How light defines depth without excess.</p>
<p className="font-medium pt-2 text-white">These are not effects. They are principles.</p>
<p>We translate them into products that feel natural, effortless, and precise.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t relative z-10 border-orange-900">
<div className="max-w-2xl mx-auto">
<div className="mb-20 text-center js-3d-tilt preserve-3d reveal-3d tilt-smooth">
<div style={{transform: 'translateZ(40px)'}}>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-white">The Evolution of Lumière</h2>
<p className="leading-relaxed text-sm mb-6 text-orange-400">
                        In the early years, SALT existed within design projects. Working alongside architects, we shaped spaces through light quietly, carefully, intentionally. Over time, something became clear: This way of thinking about light should not remain limited.
                    </p>
<p className="text-orange-500 text-xs uppercase tracking-widest mt-8">
                        A period of learning. Breaking things down.
                    </p>
</div>
</div>
<div className="relative border-l ml-3 md:ml-0 space-y-16 py-4 perspective-1000 border-orange-800/50">

<div className="relative pl-8 md:pl-12 group js-3d-tilt preserve-3d reveal-3d tilt-smooth">
<div className="absolute -left-1 md:-left-1.5 top-1.5 h-2 w-2 md:h-3 md:w-3 rounded-full group-hover:bg-white transition-colors ring-4 bg-orange-800 ring-orange-950" style={{transform: 'translateZ(10px)'}}></div>
<div style={{transform: 'translateZ(30px)'}}>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
<span className="text-orange-500 font-mono text-xs w-12 group-hover:text-white transition-colors">2012</span>
<h4 className="text-base font-semibold tracking-tight group-hover:translate-x-2 transition-transform text-white">The Beginning</h4>
</div>
<p className="text-sm md:ml-18 pl-0 md:pl-[4.5rem] text-orange-400">The idea of SALT began as a question. Why does some light feel right, while most do not?</p>
</div>
</div>
<div className="relative pl-8 md:pl-12 group js-3d-tilt preserve-3d reveal-3d delay-100 tilt-smooth">
<div className="absolute -left-1 md:-left-1.5 top-1.5 h-2 w-2 md:h-3 md:w-3 rounded-full group-hover:bg-white transition-colors ring-4 bg-orange-800 ring-orange-950" style={{transform: 'translateZ(10px)'}}></div>
<div style={{transform: 'translateZ(30px)'}}>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
<span className="text-orange-500 font-mono text-xs w-12 group-hover:text-white transition-colors">2013</span>
<h4 className="text-base font-semibold tracking-tight group-hover:translate-x-2 transition-transform text-white">Understanding the anatomy</h4>
</div>
<div className="md:ml-18 pl-0 md:pl-[4.5rem]">
<p className="text-sm mb-4 text-orange-400">We moved into the fundamentals.</p>
<div className="flex flex-wrap gap-2 text-xs font-medium mb-4 preserve-3d text-orange-400" style={{transform: 'translateZ(20px)'}}>
<span className="px-2.5 py-1 rounded border hover:scale-105 hover:-translate-y-1 transition-all cursor-default shadow-lg bg-orange-900 border-orange-800/50 hover:bg-orange-800">Lenses</span>
<span className="px-2.5 py-1 rounded border hover:scale-105 hover:-translate-y-1 transition-all cursor-default shadow-lg bg-orange-900 border-orange-800/50 hover:bg-orange-800">LED behavior</span>
<span className="px-2.5 py-1 rounded border hover:scale-105 hover:-translate-y-1 transition-all cursor-default shadow-lg bg-orange-900 border-orange-800/50 hover:bg-orange-800">Heat sinks</span>
<span className="px-2.5 py-1 rounded border hover:scale-105 hover:-translate-y-1 transition-all cursor-default shadow-lg bg-orange-900 border-orange-800/50 hover:bg-orange-800">Drivers</span>
</div>
<p className="text-sm text-orange-400">Every component studied, not individually but as part of a system.</p>
</div>
</div>
</div>
<div className="relative pl-8 md:pl-12 group js-3d-tilt preserve-3d reveal-3d delay-200 tilt-smooth">
<div className="absolute -left-1 md:-left-1.5 top-1.5 h-2 w-2 md:h-3 md:w-3 rounded-full group-hover:bg-white transition-colors ring-4 bg-orange-800 ring-orange-950" style={{transform: 'translateZ(10px)'}}></div>
<div style={{transform: 'translateZ(30px)'}}>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
<span className="text-orange-500 font-mono text-xs w-12 group-hover:text-white transition-colors">2014</span>
<h4 className="text-base font-semibold tracking-tight group-hover:translate-x-2 transition-transform text-white">Precision over approximation</h4>
</div>
<p className="text-sm md:ml-18 pl-0 md:pl-[4.5rem] text-orange-400">What began as curiosity became discipline. We tested, refined, and questioned. Not how to make light brighter but how to make it better.</p>
</div>
</div>
<div className="relative pl-8 md:pl-12 group js-3d-tilt preserve-3d reveal-3d delay-300 tilt-smooth">
<div className="absolute -left-1 md:-left-1.5 top-1.5 h-2 w-2 md:h-3 md:w-3 rounded-full group-hover:bg-white transition-colors ring-4 bg-orange-800 ring-orange-950" style={{transform: 'translateZ(10px)'}}></div>
<div style={{transform: 'translateZ(30px)'}}>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
<span className="text-orange-500 font-mono text-xs w-12 group-hover:text-white transition-colors">2017</span>
<h4 className="text-base font-semibold tracking-tight group-hover:translate-x-2 transition-transform text-white">The Brand Emerges</h4>
</div>
<p className="text-sm md:ml-18 pl-0 md:pl-[4.5rem] text-orange-400">Intentionality should not be a luxury. We introduced SALT not to sell more lights, but to make professional architectural lighting accessible to everyday spaces.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t text-center relative z-10 perspective-1000 overflow-hidden border-orange-900">

<div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent to-transparent js-parallax via-orange-800" data-speed="0.2"></div>
<div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent to-transparent js-parallax via-orange-800" data-speed="0.1"></div>
<div className="max-w-2xl mx-auto js-3d-tilt preserve-3d reveal-3d tilt-smooth">
<div style={{transform: 'translateZ(30px)'}}>
<h2 className="text-xs font-medium tracking-widest uppercase text-orange-500 mb-4">The Manifesto</h2>
<h3 className="text-3xl font-semibold tracking-tight mb-12 drop-shadow-lg js-parallax inline-block text-white" data-speed="0.05">LIGHT, REDEFINED</h3>
</div>
<div className="grid grid-cols-2 gap-px max-w-md mx-auto mb-16 rounded-xl overflow-hidden border shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative group bg-orange-800 border-orange-800" style={{transform: 'translateZ(60px)'}}>
<div className="glare-container"><div className="glare js-glare"></div></div>
<div className="flex flex-col items-center justify-center py-8 transition-colors bg-orange-950 hover:bg-orange-900">
<span className="line-through text-xs mb-1 group-hover:text-orange-500 transition-colors text-orange-600">Less glare.</span>
<span className="font-medium text-sm group-hover:-translate-y-1 transition-transform text-white">More clarity.</span>
</div>
<div className="flex flex-col items-center justify-center py-8 transition-colors bg-orange-950 hover:bg-orange-900">
<span className="line-through text-xs mb-1 group-hover:text-orange-500 transition-colors text-orange-600">Less noise.</span>
<span className="font-medium text-sm group-hover:-translate-y-1 transition-transform text-white">More meaning.</span>
</div>
</div>
<div className="space-y-6" style={{transform: 'translateZ(20px)'}}>
<p className="leading-relaxed text-base font-medium text-orange-200">
                    Lighting is not a product. It is an experience.
                </p>
<p className="text-sm max-w-md mx-auto text-orange-400">
                    And when done right, it disappears leaving behind only space, atmosphere, and feeling.
                </p>
<div className="pt-12 mt-12 border-t flex flex-col items-center border-orange-800/50">
<span className="font-semibold tracking-tighter text-sm uppercase mb-2 text-white">SALT</span>
<p className="text-sm text-white">Build with purpose.</p>
<p className="text-orange-500 text-xs mt-1">Let it serve, not shout.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t relative overflow-hidden perspective-1000 bg-orange-900/10 border-orange-900">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent to-transparent opacity-30 via-orange-700"></div>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[400px] blur-[100px] rounded-full pointer-events-none js-parallax bg-orange-800/20" data-speed="0.1"></div>
<div className="absolute bottom-10 right-10 w-48 h-48 js-parallax preserve-3d spin-3d-slow opacity-30" data-speed="-0.15">
<div className="absolute inset-0 border rounded-lg border-orange-700" style={{transform: 'rotateX(45deg)'}}></div>
<div className="absolute inset-0 border rounded-lg border-orange-700" style={{transform: 'rotateY(45deg)'}}></div>
</div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-16 js-3d-tilt preserve-3d reveal-3d tilt-smooth">
<div style={{transform: 'translateZ(40px)'}}>
<p className="text-xs font-medium tracking-widest uppercase text-orange-500 mb-6">Looking Forward</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 drop-shadow-md text-white">
                        Light continues to evolve.<br/>So do we.
                    </h2>
<p className="text-sm max-w-lg mx-auto leading-relaxed text-orange-400">
                        Because the future of lighting is not brighter.<br/>
                        It is more intentional.
                    </p>
</div>
</div>

<div className="js-3d-tilt preserve-3d group cursor-crosshair reveal-3d delay-200 tilt-smooth">
<div className="backdrop-blur-xl border rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-500 group-hover:border-orange-700/50 group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.03)] bg-orange-950/80 border-orange-800" style={{transform: 'translateZ(30px)'}}>
<div className="glare-container z-30"><div className="glare js-glare"></div></div>

<img alt="Minimal interior" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000 js-parallax" data-speed="0.05" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-orange-950/80"></div>

<div className="absolute -top-32 -right-32 w-64 h-64 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-white/20 bg-white/10"></div>
<div className="flex items-center gap-4 mb-8 relative z-20 preserve-3d">
<div className="h-10 w-10 rounded-xl border flex items-center justify-center shadow-inner group-hover:bg-white transition-colors duration-500 group-hover:-translate-y-2 bg-orange-900 border-orange-700/50" style={{transform: 'translateZ(60px)'}}>
<iconify-icon className="group-hover:text-black text-lg transition-colors duration-500 text-white" icon="solar:cpu-linear"></iconify-icon>
</div>
<div style={{transform: 'translateZ(50px)'}}>
<h3 className="text-xl font-semibold tracking-tight text-white">Introducing NaCl</h3>
<p className="text-orange-500 text-xs font-mono mt-0.5 group-hover:text-orange-400 transition-colors">Native Controls</p>
</div>
</div>
<div className="relative z-20 preserve-3d">
<p className="text-sm mb-10 leading-relaxed border-l-2 pl-4 group-hover:border-orange-600 transition-colors text-orange-300 border-orange-800" style={{transform: 'translateZ(40px)'}}>
                            Beyond light, we are shaping what comes next. Lighting automation and spatial intelligence designed to make space responsive.
                        </p>
<div className="grid sm:grid-cols-2 gap-8 text-sm mb-12 preserve-3d" style={{transform: 'translateZ(30px)'}}>
<div className="space-y-2 p-4 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all border border-transparent hover:bg-orange-900/50 hover:border-orange-800/50">
<p className="font-medium flex items-center gap-2 text-white">
<iconify-icon className="text-orange-500 group-hover:text-white transition-colors" icon="solar:radar-linear"></iconify-icon>
                                    Dynamic Spaces
                                </p>
<p className="text-orange-400">We believe buildings should not be static. They should understand. Responding to presence. Adapting to behavior.</p>
</div>
<div className="space-y-2 p-4 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all border border-transparent hover:bg-orange-900/50 hover:border-orange-800/50">
<p className="font-medium flex items-center gap-2 text-white">
<iconify-icon className="text-orange-500 group-hover:text-white transition-colors" icon="solar:tuning-linear"></iconify-icon>
                                    Intelligent Alignment
                                </p>
<p className="text-orange-400">Light, temperature, and air quality intelligently aligned before you arrive.</p>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6 border-orange-800/50" style={{transform: 'translateZ(50px)'}}>
<div className="text-orange-500 text-xs space-y-1">
<p>Through IoT, AI, and intelligent systems, spaces become aware.</p>
<p>Supporting comfort. Efficiency. Well-being.</p>
</div>
<div className="text-left md:text-right px-4 py-3 rounded-lg border shadow-xl group-hover:bg-white group-hover:border-white transition-all duration-500 cursor-pointer group/btn hover:scale-105 bg-orange-900 border-orange-800">
<p className="text-[10px] text-orange-500 uppercase tracking-widest mb-1 group-hover/btn:text-orange-500">The Future</p>
<p className="text-sm font-medium tracking-tight group-hover/btn:text-black text-white">Not controlled. Understood.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t text-center flex flex-col items-center relative z-10 js-parallax border-orange-900 bg-orange-950" data-speed="-0.02">
<a className="transition-colors font-semibold tracking-tighter text-sm uppercase mb-4 block hover:scale-110 transform-gpu text-orange-400 hover:text-white" href="#">SALT</a>
<p className="text-xs text-orange-600">© 2024 SALT. All rights reserved.</p>
</footer>



    </>
  );
}
