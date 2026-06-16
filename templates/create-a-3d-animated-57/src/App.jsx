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



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Hero 3D Object Mouse Interaction
            const hero3d = document.getElementById('hero-3d-object');
            
            window.addEventListener('mousemove', (e) => {
                if(!hero3d) return;
                
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                
                // Pause css animation temporarily while moving mouse
                hero3d.style.animation = 'none';
                hero3d.style.transform = `translateZ(0) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });

            // Resume float animation when mouse leaves
            window.addEventListener('mouseleave', () => {
                if(hero3d) {
                    hero3d.style.transform = `translateZ(0) rotateY(0deg) rotateX(0deg)`;
                    hero3d.style.animation = 'float 6s ease-in-out infinite';
                }
            });

            // 2. Parallax Scrolling Elements
            const parallaxElements = document.querySelectorAll('.parallax-el, .parallax-bg, .parallax-scroll');
            
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                
                parallaxElements.forEach(el => {
                    const speed = el.getAttribute('data-speed');
                    const yPos = -(scrolled * speed);
                    
                    // Specific logic to avoid overriding CSS animations if they exist
                    if(el.classList.contains('parallax-el')) {
                        el.style.transform = `translateY(${yPos}px)`;
                    } else if (el.classList.contains('parallax-scroll')) {
                         el.style.transform = `translateY(${yPos}px)`;
                    } else {
                         // background blobs
                         el.style.transform = `translateY(${yPos}px)`;
                    }
                });
            });

            // 3. 3D Tilt Effect for Product Cards
            const tiltCards = document.querySelectorAll('.tilt-card');
            
            tiltCards.forEach(card => {
                const inner = card.querySelector('.tilt-card-inner');
                
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
                    const rotateY = ((x - centerX) / centerX) * 10;
                    
                    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden mesh-bg">
<div className="parallax-bg absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/30 blur-[100px]" data-speed="0.1"></div>
<div className="parallax-bg absolute bottom-[20%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-teal-200/30 blur-[80px]" data-speed="-0.15"></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b-0 border-white/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<iconify-icon className="text-2xl text-blue-500" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
                A U R A
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Technology</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sustainability</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
</div>

<div className="flex items-center gap-4 text-slate-600">
<button className="hover:text-slate-900 transition-colors flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-100">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="hover:text-slate-900 transition-colors flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-100 relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>
<button className="md:hidden hover:text-slate-900 transition-colors flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-100">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-0">
<iconify-icon className="parallax-el absolute top-1/4 left-1/4 text-4xl text-slate-300 animate-float" data-speed="0.4" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
<iconify-icon className="parallax-el absolute bottom-1/3 left-1/5 text-3xl text-blue-200 animate-float-delayed" data-speed="0.2" icon="solar:waterdrops-linear"></iconify-icon>
<iconify-icon className="parallax-el absolute top-1/3 right-1/4 text-5xl text-teal-200 animate-float" data-speed="0.6" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Introducing Aura Sonic Pro
                </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-slate-900 leading-[1.1] mb-6">
                    Redefining <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Oral Care.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light max-w-md">
                    Experience the next generation of dental hygiene. Engineered with sonic micro-vibrations and AI-guided precision for a clinical-level clean at home.
                </p>
<div className="flex items-center gap-4">
<button className="px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2 shadow-xl shadow-slate-900/20">
                        Shop Collection
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                        Explore Tech
                    </button>
</div>
</div>

<div className="relative h-[600px] flex items-center justify-center perspective-1000">

<div className="relative w-[280px] h-[500px] transform-preserve-3d transition-transform duration-300 ease-out animate-float" id="hero-3d-object">

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-10 bg-black/10 blur-xl rounded-[100%] transform translateZ(-100px)"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] border border-white shadow-2xl rounded-full transform translateZ(0) flex flex-col items-center pt-8 pb-12 overflow-hidden box-border">

<div className="w-10 h-32 bg-gradient-to-b from-slate-100 to-slate-200 rounded-t-full mb-2 border-b border-slate-300/50 shadow-inner"></div>

<div className="w-12 h-2 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 rounded-full mb-2"></div>

<div className="flex-1 w-full px-6 flex flex-col items-center justify-between">

<div className="w-10 h-10 rounded-full bg-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_2px_rgba(255,255,255,1)] flex items-center justify-center mt-6 cursor-pointer border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:power-button-linear"></iconify-icon>
</div>

<div className="flex flex-col gap-3 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
</div>

<div className="text-xs font-medium tracking-tighter text-slate-300 transform -rotate-90 origin-bottom mb-12">A U R A</div>
</div>
</div>

<div className="absolute top-32 -right-24 glass-panel p-4 rounded-2xl shadow-xl transform translateZ(60px) w-48 transition-transform">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:health-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500">Pressure Mode</div>
<div className="text-sm font-medium text-slate-900">Optimal</div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-24 -left-20 glass-panel p-3 rounded-2xl shadow-xl transform translateZ(80px) flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
<iconify-icon className="text-xl" icon="solar:battery-charge-linear"></iconify-icon>
</div>
<div className="pr-2">
<div className="text-xl font-medium tracking-tighter text-slate-900">30<span className="text-xs text-slate-500 font-normal"> Days</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6">Designed for perfection. <br/>Engineered for health.</h2>
<p className="text-slate-500 text-lg font-light">Every detail is meticulously crafted to deliver a superior cleaning experience without compromising on aesthetics.</p>
</div>

<div className="grid md:grid-cols-2 gap-x-12 gap-y-24">

<div className="flex flex-col justify-center order-2 md:order-1">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:soundwave-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Sonic Micro-Vibrations</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8">Operating at 40,000 strokes per minute, our sonic technology creates microbubbles that reach deep between teeth and along the gumline for a professional clean feeling.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">Explore technology <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-50 order-1 md:order-2 flex items-center justify-center group perspective-1000">

<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50"></div>
<div className="w-48 h-48 rounded-full border border-blue-200/50 absolute parallax-scroll" data-speed="0.1"></div>
<div className="w-64 h-64 rounded-full border border-blue-200/30 absolute parallax-scroll" data-speed="0.05"></div>
<div className="relative transform-preserve-3d transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12 z-10 w-32 h-64 bg-white rounded-full shadow-2xl border border-white flex flex-col items-center py-6">
<div className="w-2 h-16 bg-blue-100 rounded-full mb-4 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-blue-500 animate-pulse"></div>
</div>
<iconify-icon className="text-3xl text-slate-300" icon="solar:soundwave-linear"></iconify-icon>
</div>
</div>

<div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-50 flex items-center justify-center group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50"></div>
<div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1)_0,transparent_70%)] parallax-scroll" data-speed="-0.1"></div>
<div className="relative transform-preserve-3d transition-transform duration-500 group-hover:-rotate-y-12 group-hover:rotate-x-12 z-10">
<div className="glass-panel p-6 rounded-3xl w-64 shadow-xl border-white transform translateZ(20px)">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-slate-600">Smart Sensor</span>
<iconify-icon className="text-teal-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-teal-400 w-full transform origin-left transition-transform duration-1000 scale-x-100"></div>
</div>
<span className="text-xs text-slate-400">Pressure optimal</span>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Adaptive Pressure Control</h3>
<p className="text-slate-500 leading-relaxed font-light mb-8">Built-in sensors monitor your brushing technique in real-time, automatically adjusting power to protect your gums and enamel from over-brushing.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn about safety <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">The Collection</h2>
<p className="text-slate-500 text-sm font-light">Elevate your daily routine.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="tilt-card perspective-1000 cursor-pointer h-[450px]">
<div className="tilt-card-inner relative w-full h-full rounded-3xl bg-white border border-slate-100 shadow-sm transition-transform duration-300 ease-out transform-preserve-3d group p-6 flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start relative z-10 transform translateZ(30px)">
<span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-md uppercase tracking-wider">Bestseller</span>
<button className="text-slate-300 hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 flex items-center justify-center relative transform translateZ(50px)">
<div className="w-16 h-48 bg-slate-900 rounded-full shadow-2xl relative overflow-hidden border border-slate-700">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
</div>
</div>
<div className="relative z-10 transform translateZ(40px) mt-auto">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Aura Pro - Obsidian</h3>
<p className="text-sm text-slate-500 font-light mb-4">Matte Black Edition</p>
<div className="flex items-center justify-between">
<span className="font-medium text-slate-900">$149.00</span>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="tilt-card perspective-1000 cursor-pointer h-[450px]">
<div className="tilt-card-inner relative w-full h-full rounded-3xl bg-white border border-slate-100 shadow-sm transition-transform duration-300 ease-out transform-preserve-3d group p-6 flex flex-col">
<div className="flex justify-between items-start relative z-10 transform translateZ(30px)">
<span></span>
<button className="text-slate-300 hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-center justify-center relative transform translateZ(50px)">
<div className="w-16 h-48 bg-white rounded-full shadow-2xl relative overflow-hidden border border-slate-200">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent w-full h-full transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
</div>
</div>
<div className="relative z-10 transform translateZ(40px) mt-auto">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Aura Pro - Pearl</h3>
<p className="text-sm text-slate-500 font-light mb-4">Gloss White Edition</p>
<div className="flex items-center justify-between">
<span className="font-medium text-slate-900">$149.00</span>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="tilt-card perspective-1000 cursor-pointer h-[450px]">
<div className="tilt-card-inner relative w-full h-full rounded-3xl bg-white border border-slate-100 shadow-sm transition-transform duration-300 ease-out transform-preserve-3d group p-6 flex flex-col">
<div className="flex justify-between items-start relative z-10 transform translateZ(30px)">
<span className="inline-block px-2.5 py-1 bg-teal-50 text-teal-600 text-[10px] font-medium rounded-md uppercase tracking-wider">New</span>
<button className="text-slate-300 hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-center justify-center relative transform translateZ(50px)">

<div className="w-20 h-40 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2rem] shadow-xl relative overflow-hidden border border-slate-200 flex flex-col items-center">
<div className="w-4 h-12 bg-white rounded-full mt-[-10px] shadow-sm"></div>
<div className="w-full h-1/2 bg-blue-50/50 absolute bottom-0 border-t border-blue-100/50 backdrop-blur-sm"></div>
</div>
</div>
<div className="relative z-10 transform translateZ(40px) mt-auto">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Aura Aqua</h3>
<p className="text-sm text-slate-500 font-light mb-4">Portable Water Flosser</p>
<div className="flex items-center justify-between">
<span className="font-medium text-slate-900">$89.00</span>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden z-10">

<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<div className="w-[800px] h-[800px] border border-white rounded-full absolute"></div>
<div className="w-[600px] h-[600px] border border-white rounded-full absolute"></div>
<div className="w-[400px] h-[400px] border border-white rounded-full absolute"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Personalize your routine.</h2>
<div className="glass-panel !bg-slate-800/50 !border-slate-700 rounded-3xl p-8 backdrop-blur-xl">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-700">
<div className="text-left">
<div className="font-medium mb-1">Subscription Model</div>
<div className="text-sm text-slate-400 font-light">Get fresh brush heads delivered every 3 months.</div>
</div>

<div className="relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-600 appearance-none cursor-pointer z-10 top-1 left-1 transition-all duration-300" id="sub-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-8 rounded-full bg-slate-600 cursor-pointer transition-colors duration-300" htmlFor="sub-toggle"></label>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="text-left">
<div className="text-xs text-slate-400 font-light uppercase tracking-widest mb-2">Total Due Today</div>
<div className="text-4xl font-medium tracking-tighter">$149<span className="text-lg text-slate-500 font-normal">.00</span></div>
</div>
<button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
                        Checkout Securely
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-medium tracking-tighter text-slate-900 flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-2xl text-slate-900" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
                        A U R A
                    </a>
<p className="text-sm text-slate-500 font-light mb-8 max-w-xs">Designing the future of oral care with minimalist aesthetics and clinical-grade technology.</p>

<form className="relative max-w-sm">
<input className="w-full bg-slate-50 border border-slate-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-slate-900 placeholder-slate-400" placeholder="Subscribe to updates" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">Sonic Pro</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Aura Aqua</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Brush Heads</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Technology</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-xs text-slate-400 font-light">
<p>© 2024 Aura Dental Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-600 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
