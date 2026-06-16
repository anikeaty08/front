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



        // Custom Cursor Logic
        const cursorDot = document.getElementById("cursor-dot");
        const cursorOutline = document.getElementById("cursor-outline");

        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add slight delay for outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Interactive Elements hover effect for cursor
        const interactables = document.querySelectorAll('a, button, input');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });

        // Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('translate-x-full');
        }
        document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Trigger counters if it's the stats section
                    if(entry.target.querySelector('#counter-1')) {
                        animateValue("counter-1", 0, 12, 2000);
                        animateValue("counter-2", 0, 8, 2000);
                        animateValue("counter-3", 0, 1500, 2000);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Before/After Slider
        function updateSlider(val) {
            document.getElementById('before-image').style.width = val + "%";
            document.getElementById('slider-handle').style.left = val + "%";
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('py-0');
            } else {
                nav.classList.add('py-0');
            }
        });

        // Counter Animation
        function animateValue(id, start, end, duration) {
            const obj = document.getElementById(id);
            if (!obj) return;
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                obj.innerHTML = value + (id === 'counter-3' ? '+' : '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="cursor-outline hidden md:block" id="cursor-outline"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-rose-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed w-full z-50 transition-all duration-300 top-0 border-b border-white/5 backdrop-blur-md bg-black/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl tracking-tighter font-light hover:opacity-80 transition-opacity z-50 relative group" href="#">
                AURA<span className="text-[#e1bfa3] group-hover:text-white transition-colors">.</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-light tracking-wide text-white/70 hover:text-[#e1bfa3] transition-colors relative group" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e1bfa3] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-light tracking-wide text-white/70 hover:text-[#e1bfa3] transition-colors relative group" href="#gallery">
                    Gallery
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e1bfa3] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-light tracking-wide text-white/70 hover:text-[#e1bfa3] transition-colors relative group" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e1bfa3] transition-all group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-[#e1bfa3]/30 text-[#e1bfa3] text-xs uppercase tracking-widest hover:bg-[#e1bfa3] hover:text-black transition-all duration-300 active:scale-95 group">
<span>Book Now</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<button className="md:hidden z-50 text-white p-2" id="menu-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform translate-x-full transition-transform duration-500 flex flex-col items-center justify-center space-y-8 md:hidden" id="mobile-menu">
<a className="text-3xl serif italic text-white/90 hover:text-[#e1bfa3]" href="#services" onclick="toggleMenu()">Services</a>
<a className="text-3xl serif italic text-white/90 hover:text-[#e1bfa3]" href="#gallery" onclick="toggleMenu()">Gallery</a>
<a className="text-3xl serif italic text-white/90 hover:text-[#e1bfa3]" href="#about" onclick="toggleMenu()">About</a>
<a className="text-3xl serif italic text-white/90 hover:text-[#e1bfa3]" href="#contact" onclick="toggleMenu()">Contact</a>
</div>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 pointer-events-none z-10">
<div className="absolute top-1/4 left-[10%] opacity-20 animate-float text-[#e1bfa3] blur-[1px]">
<iconify-icon height="80" icon="solar:scissors-square-linear" style={{transform: 'rotate(-15deg)'}} width="80"></iconify-icon>
</div>
<div className="absolute bottom-1/4 right-[10%] opacity-20 animate-float-delayed text-rose-300 blur-[1px]">
<iconify-icon height="100" icon="solar:cosmetic-linear" style={{transform: 'rotate(15deg)'}} width="100"></iconify-icon>
</div>
<div className="absolute top-1/3 right-[20%] opacity-10 animate-float text-purple-300">
<iconify-icon height="60" icon="solar:mirror-linear" width="60"></iconify-icon>
</div>
</div>
<div className="relative z-20 text-center max-w-5xl px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-on-scroll">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-white/70">Now accepting new clients</span>
</div>
<h1 className="serif text-6xl md:text-8xl lg:text-9xl font-medium leading-tight tracking-tight mb-6 animate-on-scroll">
<span className="block">Transform Your</span>
<span className="bg-gradient-to-r from-[#e1bfa3] via-rose-200 to-purple-200 text-transparent bg-clip-text animate-gradient-text italic">
                    Look &amp; Aura
                </span>
</h1>
<p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-on-scroll" style={{transitionDelay: '100ms'}}>
                Experience the intersection of luxury beauty and modern precision. We craft styles that elevate your personal brand.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-on-scroll" style={{transitionDelay: '200ms'}}>
<button className="px-8 py-4 bg-[#e1bfa3] text-black rounded-full font-medium tracking-wide hover:shadow-[0_0_30px_rgba(225,191,163,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 w-full md:w-auto">
                    Book Appointment
                </button>
<button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium tracking-wide hover:bg-white/5 backdrop-blur-md transition-all w-full md:w-auto flex items-center justify-center gap-2 group">
<iconify-icon className="text-xl group-hover:text-[#e1bfa3] transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                    View Lookbook
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-1">
<h3 className="serif text-4xl text-white" id="counter-1">0</h3>
<p className="text-xs uppercase tracking-widest text-white/40">Years Experience</p>
</div>
<div className="space-y-1">
<h3 className="serif text-4xl text-white" id="counter-2">0</h3>
<p className="text-xs uppercase tracking-widest text-white/40">Expert Stylists</p>
</div>
<div className="space-y-1">
<h3 className="serif text-4xl text-white">4.9</h3>
<p className="text-xs uppercase tracking-widest text-white/40">Average Rating</p>
</div>
<div className="space-y-1">
<h3 className="serif text-4xl text-white" id="counter-3">0</h3>
<p className="text-xs uppercase tracking-widest text-white/40">Happy Clients</p>
</div>
</div>
</section>

<section className="py-32 relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-on-scroll">
<div>
<h2 className="serif text-5xl md:text-6xl text-white mb-4">Curated Services</h2>
<p className="text-white/50 max-w-md font-light">Precision cuts, bespoke coloring, and rejuvenating treatments tailored to your unique structure.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#e1bfa3] hover:text-white transition-colors mt-6 md:mt-0 group" href="#">
<span className="text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">Full Menu</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group h-[450px] perspective-1000 animate-on-scroll">
<div className="relative w-full h-full duration-700 preserve-3d group-hover:my-rotate-y-180 transition-all transform hover:-translate-y-2">

<div className="absolute inset-0 glass-card p-10 flex flex-col justify-between rounded-sm overflow-hidden group-hover:shadow-[0_20px_50px_rgba(225,191,163,0.1)] transition-shadow">
<div className="absolute top-0 right-0 p-32 bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div>
<iconify-icon className="text-[#e1bfa3] mb-6" height="40" icon="solar:scissors-square-linear" width="40"></iconify-icon>
<h3 className="serif text-3xl text-white mb-2">Hair Design</h3>
<p className="text-white/40 font-light text-sm">Sculptural cuts designed to frame your face and enhance your natural texture.</p>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-sm text-white/60">Starting at</span>
<span className="serif text-2xl text-[#e1bfa3]">$85</span>
</div>
</div>
</div>
</div>

<div className="group h-[450px] perspective-1000 animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="relative w-full h-full duration-700 transition-all transform hover:-translate-y-2">
<div className="absolute inset-0 glass-card p-10 flex flex-col justify-between rounded-sm overflow-hidden group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)] transition-shadow">
<div className="absolute top-0 right-0 p-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div>
<iconify-icon className="text-purple-300 mb-6" height="40" icon="solar:palette-linear" width="40"></iconify-icon>
<h3 className="serif text-3xl text-white mb-2">Color Alchemy</h3>
<p className="text-white/40 font-light text-sm">Bespoke balayage, color correction, and vibrant hues using premium organic dyes.</p>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-sm text-white/60">Starting at</span>
<span className="serif text-2xl text-purple-300">$140</span>
</div>
</div>
</div>
</div>

<div className="group h-[450px] perspective-1000 animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="relative w-full h-full duration-700 transition-all transform hover:-translate-y-2">
<div className="absolute inset-0 glass-card p-10 flex flex-col justify-between rounded-sm overflow-hidden group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-shadow">
<div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div>
<iconify-icon className="text-blue-200 mb-6" height="40" icon="solar:bath-linear" width="40"></iconify-icon>
<h3 className="serif text-3xl text-white mb-2">Treatments</h3>
<p className="text-white/40 font-light text-sm">Deep conditioning, keratin smoothing, and scalp therapy for ultimate health.</p>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-sm text-white/60">Starting at</span>
<span className="serif text-2xl text-blue-200">$50</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative animate-on-scroll">

<div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl group select-none">
<div className="absolute inset-0 bg-black">

<img alt="After" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50 bg-black" id="before-image">
<img alt="Before" className="w-[200%] max-w-none h-full object-cover" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" style={{transform: 'translateX(0)'}}/>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize" id="slider-range" max="100" min="0" oninput="updateSlider(this.value)" type="range" value="50"/>
<div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]" id="slider-handle">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-md border border-white rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:arrows-left-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-xs px-2 py-1 rounded text-white/80">Before</div>
<div className="absolute top-4 right-4 bg-[#e1bfa3]/90 backdrop-blur text-xs px-2 py-1 rounded text-black font-semibold">After</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8 animate-on-scroll">
<h2 className="serif text-5xl md:text-6xl text-white leading-tight">
                    Refining Beauty <br/>
<span className="italic text-[#e1bfa3]">Since 2018</span>
</h2>
<div className="h-[1px] w-20 bg-[#e1bfa3]"></div>
<p className="text-lg text-white/60 font-light leading-relaxed">
                    At Aura, we believe that styling is an intimate form of architecture. Our studio is a sanctuary where technique meets intuition. Every cut is calculated, every color is composed.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#e1bfa3] text-2xl mt-1" icon="solar:star-fall-linear"></iconify-icon>
<div>
<h4 className="text-white font-medium mb-1">Premium Products</h4>
<p className="text-sm text-white/40">Only the finest organic and scientifically backed formulas.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#e1bfa3] text-2xl mt-1" icon="solar:armchair-2-linear"></iconify-icon>
<div>
<h4 className="text-white font-medium mb-1">Private Suites</h4>
<p className="text-sm text-white/40">Enjoy your transformation in complete privacy and comfort.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="serif text-5xl text-white mb-4 animate-on-scroll">The Portfolio</h2>
<p className="text-white/50 animate-on-scroll">A collection of our finest transformations.</p>
</div>
<div className="max-w-7xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group overflow-hidden rounded-sm animate-on-scroll">
<img alt="Style 1" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="serif text-xl text-white italic">Texture &amp; Flow</p>
<p className="text-xs text-[#e1bfa3] uppercase tracking-wider">Stylist: Sarah</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-sm animate-on-scroll">
<img alt="Style 2" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="serif text-xl text-white italic">Blonde Ambition</p>
<p className="text-xs text-[#e1bfa3] uppercase tracking-wider">Stylist: Michael</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-sm animate-on-scroll">
<img alt="Style 3" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="serif text-xl text-white italic">Precision Cut</p>
<p className="text-xs text-[#e1bfa3] uppercase tracking-wider">Stylist: David</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-sm animate-on-scroll">
<img alt="Style 4" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="serif text-xl text-white italic">Noir Essence</p>
<p className="text-xs text-[#e1bfa3] uppercase tracking-wider">Stylist: Elena</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-sm animate-on-scroll">
<img alt="Style 5" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="serif text-xl text-white italic">Bridal Glow</p>
<p className="text-xs text-[#e1bfa3] uppercase tracking-wider">Stylist: Team</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-black to-zinc-900/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="serif text-center text-4xl text-white mb-16 animate-on-scroll">Investment</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="p-8 border border-white/5 rounded-sm bg-black/40 hover:border-white/20 transition-all animate-on-scroll">
<h3 className="text-xl font-light text-white mb-2">Essential</h3>
<p className="text-4xl serif text-white mb-6">$85<span className="text-sm sans-serif text-white/30 ml-2">/ visit</span></p>
<ul className="space-y-4 text-sm text-white/60 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Precision Haircut</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Wash &amp; Style</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Product Consultation</li>
</ul>
<button className="w-full py-3 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Select</button>
</div>

<div className="relative p-10 border border-[#e1bfa3]/50 rounded-sm bg-[#e1bfa3]/5 backdrop-blur-md transform md:-translate-y-4 hover:transform hover:-translate-y-6 transition-all shadow-[0_0_40px_rgba(225,191,163,0.1)] animate-on-scroll">
<div className="absolute top-0 right-0 bg-[#e1bfa3] text-black text-[10px] uppercase font-bold px-3 py-1">Popular</div>
<h3 className="text-xl font-light text-[#e1bfa3] mb-2">Signature</h3>
<p className="text-4xl serif text-white mb-6">$250<span className="text-sm sans-serif text-white/30 ml-2">/ visit</span></p>
<ul className="space-y-4 text-sm text-white/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#e1bfa3]" icon="solar:check-circle-bold"></iconify-icon> Cut &amp; Full Color</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#e1bfa3]" icon="solar:check-circle-bold"></iconify-icon> Gloss Treatment</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#e1bfa3]" icon="solar:check-circle-bold"></iconify-icon> Scalp Massage</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#e1bfa3]" icon="solar:check-circle-bold"></iconify-icon> Take-home Mini Kit</li>
</ul>
<button className="w-full py-3 bg-[#e1bfa3] text-black text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-[#e1bfa3]/20">Select</button>
</div>

<div className="p-8 border border-white/5 rounded-sm bg-black/40 hover:border-purple-300/30 transition-all animate-on-scroll">
<h3 className="text-xl font-light text-white mb-2">Luxe</h3>
<p className="text-4xl serif text-white mb-6">$400+<span className="text-sm sans-serif text-white/30 ml-2">/ visit</span></p>
<ul className="space-y-4 text-sm text-white/60 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Complete Transformation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Keratin Treatment</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Private Suite Access</li>
</ul>
<button className="w-full py-3 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Select</button>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative">
<div className="max-w-4xl mx-auto px-6 text-center animate-on-scroll">
<iconify-icon className="text-5xl text-[#e1bfa3] mb-8 opacity-50" icon="solar:quote-up-square-linear"></iconify-icon>
<h3 className="serif text-3xl md:text-5xl text-white leading-tight mb-8">"I've never felt more understood by a stylist. The attention to detail at Aura is simply unmatched in the city."</h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white/10 mb-2 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<p className="text-white font-medium">Victoria S.</p>
<div className="flex text-[#e1bfa3] gap-1 text-xs mt-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 to-purple-900/20 z-0"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="serif text-6xl md:text-8xl text-white mb-8 tracking-tighter">Ready to glow?</h2>
<p className="text-xl text-white/50 mb-12 font-light">Appointments are limited. Reserve your spot today.</p>
<button className="px-10 py-5 bg-[#e1bfa3] text-black text-sm uppercase tracking-widest font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(225,191,163,0.6)] transition-all duration-300 animate-pulse-glow">
                Book Your Experience
            </button>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div>
<a className="text-3xl tracking-tighter font-light text-white mb-6 block" href="#">AURA.</a>
<p className="text-white/40 text-sm font-light leading-relaxed">
                        Elevating the standard of beauty through innovation, precision, and luxury.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-[#e1bfa3] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#e1bfa3] transition-colors" href="#">Stylists</a></li>
<li><a className="hover:text-[#e1bfa3] transition-colors" href="#">Lookbook</a></li>
<li><a className="hover:text-[#e1bfa3] transition-colors" href="#">Products</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Visit</h4>
<p className="text-sm text-white/50 leading-relaxed">
                        1024 Market Street<br/>
                        San Francisco, CA 94103<br/><br/>
                        Mon - Sat: 9am - 8pm
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all" href="#">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/30">© 2024 Aura Salon. All rights reserved.</p>
<div className="flex gap-6 text-xs text-white/30">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
