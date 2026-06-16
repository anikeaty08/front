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



        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        const tlHero = gsap.timeline();
        tlHero.from(".hero-text", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }).from(".hero-subtext", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8").from(".hero-btns", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6");

        // 3D Object Parallax
        gsap.to("#hero-3d", {
            rotateY: 45,
            rotateX: -20,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        // Philosophy Reveals
        gsap.from(".reveal-item", {
            scrollTrigger: {
                trigger: ".reveal-item",
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Service Cards
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: ".service-card",
                start: "top 90%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Laptop Parallax
        gsap.from("#laptop-mockup", {
            scrollTrigger: {
                trigger: "#laptop-mockup",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            rotateX: 15,
            scale: 0.9,
            opacity: 0.5
        });

        // Process Steps
        gsap.from(".process-step", {
            scrollTrigger: {
                trigger: ".process-step",
                start: "top 85%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Hover effect for 3D slabs
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            gsap.to("#hero-3d", {
                duration: 2,
                rotateY: x,
                rotateX: -y,
                ease: "power2.out"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
<div className="text-xl font-semibold logo-tracking uppercase">WAY ORIS</div>
<div className="hidden md:flex gap-10 text-[0.65rem] uppercase letter-spacing-wide font-light">
<a className="hover:text-accent transition-colors" href="#">Philosophy</a>
<a className="hover:text-accent transition-colors" href="#">Services</a>
<a className="hover:text-accent transition-colors" href="#">Process</a>
<a className="hover:text-accent transition-colors" href="#">Work</a>
</div>
<div className="h-px w-12 bg-[#EDE7DF]/30"></div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">

<div className="absolute inset-0 flex justify-center items-center opacity-40 pointer-events-none perspective-1000">
<div className="relative w-96 h-96 preserve-3d" id="hero-3d">
<div className="absolute inset-0 border border-[#4A6BB8]/20 glass-card rounded-sm transform translate-z-10 rotate-x-12 rotate-y-12"></div>
<div className="absolute inset-10 border border-[#EDE7DF]/10 glass-card rounded-sm transform -translate-z-20 -rotate-x-6"></div>
<div className="absolute inset-20 border border-[#4A6BB8]/30 glass-card rounded-sm transform translate-z-40 rotate-12"></div>
</div>
</div>
<div className="relative z-10 text-center max-w-5xl">
<h1 className="hero-text text-4xl md:text-6xl font-light letter-spacing-wide leading-tight tracking-tight mb-8">
                BUILT ON STRUCTURE.<br/>
<span className="font-normal">DESIGNED FOR LONG-TERM BRANDS.</span>
</h1>
<p className="hero-subtext mx-auto max-w-xl text-sm md:text-base font-light text-[#EDE7DF]/60 leading-relaxed mb-12">
                Premium digital systems and high-performance websites crafted as scalable foundations for startups and modern brands.
            </p>
<div className="hero-btns flex flex-col md:flex-row gap-6 justify-center items-center">
<a className="group relative px-8 py-4 text-[0.7rem] uppercase letter-spacing-wide bg-[#EDE7DF] text-black overflow-hidden transition-all duration-500" href="#">
<span className="relative z-10">Build Your Shopify Store</span>
<div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
</a>
<a className="px-8 py-4 text-[0.7rem] uppercase letter-spacing-wide border border-[#EDE7DF]/20 hover:border-[#EDE7DF]/60 transition-colors" href="#">
                    View Our Work
                </a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
<span className="text-[0.6rem] uppercase letter-spacing-wide">Scroll</span>
<div className="w-px h-12 bg-[#EDE7DF]/30"></div>
</div>
</section>

<section className="py-32 px-8 md:px-24">
<div className="max-w-7xl mx-auto">
<h2 className="section-title text-xs uppercase letter-spacing-wide text-accent mb-20">01 / Philosophy</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
<h3 className="text-3xl md:text-5xl font-light tracking-tight letter-spacing-wide uppercase leading-tight">
                    STRUCTURE<br/>OVER TREND
                </h3>
<div className="space-y-16">
<div className="reveal-item">
<h4 className="text-xs uppercase letter-spacing-wide mb-4 opacity-40">Performance over decoration</h4>
<p className="text-sm md:text-base font-light leading-relaxed text-[#EDE7DF]/70">
                            We prioritize velocity and architectural integrity. Aesthetics are the natural byproduct of a perfectly engineered system.
                        </p>
</div>
<div className="reveal-item">
<h4 className="text-xs uppercase letter-spacing-wide mb-4 opacity-40">Systems over templates</h4>
<p className="text-sm md:text-base font-light leading-relaxed text-[#EDE7DF]/70">
                            Pre-built solutions offer temporary speed. Custom architecture offers permanent leverage. We build for the long-term.
                        </p>
</div>
<div className="reveal-item">
<h4 className="text-xs uppercase letter-spacing-wide mb-4 opacity-40">Foundations over quick design</h4>
<p className="text-sm md:text-base font-light leading-relaxed text-[#EDE7DF]/70">
                            A website is a digital asset. We engineer foundations that scale from venture seed to global expansion.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 md:px-24 bg-[#0F1113]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-xs uppercase letter-spacing-wide text-accent mb-4">02 / Services</h2>
<h3 className="text-3xl font-light tracking-tight letter-spacing-wide uppercase">WHAT WE BUILD</h3>
</div>
<div className="text-[0.65rem] uppercase letter-spacing-wide opacity-40">Scaleable Architecture &amp; Design</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
<div className="service-card glass-card p-10 min-h-[320px] flex flex-col justify-between group cursor-default">
<iconify-icon className="text-accent" icon="solar:globus-linear" style={{fontSize: '2rem'}}></iconify-icon>
<div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Premium Business Websites</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">High-conversion institutional sites with unmatched performance scores.</p>
</div>
</div>
<div className="service-card glass-card p-10 min-h-[320px] flex flex-col justify-between group cursor-default">
<iconify-icon className="text-accent" icon="solar:cart-large-2-linear" style={{fontSize: '2rem'}}></iconify-icon>
<div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Shopify Store Development</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Custom Liquid architecture for luxury e-commerce experiences.</p>
</div>
</div>
<div className="service-card glass-card p-10 min-h-[320px] flex flex-col justify-between group cursor-default">
<iconify-icon className="text-accent" icon="solar:layers-linear" style={{fontSize: '2rem'}}></iconify-icon>
<div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">SaaS Landing Pages</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Product-led design that communicates technical sophistication.</p>
</div>
</div>
<div className="service-card glass-card p-10 min-h-[320px] flex flex-col justify-between group cursor-default">
<iconify-icon className="text-accent" icon="solar:refresh-square-linear" style={{fontSize: '2rem'}}></iconify-icon>
<div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Website Modernization</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Refactoring legacy web presence into modern headless structures.</p>
</div>
</div>
<div className="service-card glass-card p-10 min-h-[320px] flex flex-col justify-between group cursor-default">
<iconify-icon className="text-accent" icon="solar:cpu-linear" style={{fontSize: '2rem'}}></iconify-icon>
<div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Systems Architecture</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Complex digital infrastructure for data-heavy platforms.</p>
</div>
</div>
<div className="service-card bg-accent/5 p-10 min-h-[320px] flex flex-col justify-center items-center text-center border border-[#4A6BB8]/20">
<p className="text-xs uppercase letter-spacing-wide mb-6">Ready to initiate?</p>
<a className="text-xs border-b border-accent pb-1 hover:text-accent transition-colors" href="#">Contact Studio</a>
</div>
</div>
</div>
</section>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="relative z-10 w-full max-w-4xl px-8 perspective-1000" id="laptop-mockup">
<div className="relative w-full aspect-video glass-card border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-accent/10 transform rotate-x-6">
<div className="absolute inset-0 bg-gradient-to-tr from-black to-[#0F1113]"></div>
<div className="p-8 h-full flex flex-col">
<div className="flex gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="flex-1 border border-white/5 rounded p-6 bg-black/40">
<div className="w-2/3 h-4 bg-white/5 mb-4"></div>
<div className="w-1/2 h-4 bg-white/5 mb-8"></div>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-accent/10 rounded"></div>
<div className="aspect-square bg-white/5 rounded"></div>
<div className="aspect-square bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] -z-10 rounded-full"></div>
</div>
<div className="absolute bottom-20 text-center">
<h3 className="text-xs uppercase letter-spacing-wide opacity-40">Engineering the future of commerce</h3>
</div>
</section>

<section className="py-32 px-8 md:px-24">
<div className="max-w-7xl mx-auto">
<h2 className="text-xs uppercase letter-spacing-wide text-accent mb-20">03 / Process</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="process-step group">
<div className="text-4xl font-extralight mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">01</div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Strategy</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Defining technical requirements and brand positioning objectives.</p>
</div>
<div className="process-step group">
<div className="text-4xl font-extralight mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">02</div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Structure</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Developing the wireframe architecture and system logic.</p>
</div>
<div className="process-step group">
<div className="text-4xl font-extralight mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">03</div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Design</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Applying high-fidelity visual identity to the technical core.</p>
</div>
<div className="process-step group">
<div className="text-4xl font-extralight mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">04</div>
<h4 className="text-sm uppercase letter-spacing-wide mb-4">Scale</h4>
<p className="text-xs font-light text-[#EDE7DF]/50 leading-relaxed">Deployment and continuous performance optimization.</p>
</div>
</div>
</div>
</section>

<section className="py-48 px-8 text-center bg-black relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
<div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-light letter-spacing-wide uppercase leading-tight tracking-tight mb-8">
                DIGITAL FOUNDATIONS FOR MODERN BRANDS
            </h2>
<p className="text-sm md:text-base font-light text-[#EDE7DF]/60 mb-12">
                High-performance websites built for long-term growth.
            </p>
<a className="text-xs uppercase letter-spacing-wide border border-accent text-accent px-10 py-5 hover:bg-accent hover:text-white transition-all duration-500" href="mailto:hello@wayoris.com">
                Initiate Project
            </a>
</div>
</section>

<footer className="py-12 px-8 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<div className="text-lg font-semibold logo-tracking uppercase mb-2">WAY ORIS</div>
<p className="text-[0.6rem] uppercase letter-spacing-wide opacity-40">Where Every Brand Need Begins.</p>
</div>
<div className="flex gap-8 text-[0.6rem] uppercase letter-spacing-wide opacity-60">
<a className="hover:text-accent" href="#">Twitter / X</a>
<a className="hover:text-accent" href="#">LinkedIn</a>
<a className="hover:text-accent" href="#">Behance</a>
</div>
<div className="text-[0.6rem] uppercase letter-spacing-wide opacity-30">
                © 2024 Way Oris Studio.
            </div>
</div>
</footer>


    </>
  );
}
