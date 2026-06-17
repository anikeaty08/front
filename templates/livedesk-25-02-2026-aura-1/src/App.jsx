import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Preloader Sequence
            const startPreloader = () => {
                const tl = gsap.timeline();
                const counter = { val: 0 };
                
                tl.to("#preloader-brand, #preloader-status", { opacity: 1, duration: 0.5, stagger: 0.1 });

                tl.to(counter, { 
                    val: 100, 
                    duration: 2, 
                    ease: "power2.inOut", 
                    onUpdate: () => document.getElementById("loader-percent").innerText = Math.floor(counter.val)
                }, "-=0.2");
                
                tl.to("#loader-bar", { width: "100%", duration: 2, ease: "power2.inOut" }, "<");

                tl.to("#preloader", { 
                    yPercent: -100, 
                    duration: 1, 
                    ease: "power3.inOut",
                    onComplete: () => {
                        document.getElementById("preloader").style.display = "none";
                        document.body.style.overflowY = "auto";
                    }
                });

                tl.to("#main-viewport", { autoAlpha: 1, duration: 0.5 }, "-=0.5");

                tl.add(() => {
                    initHeroAnimations();
                    initScrollAnimations();
                }, "-=0.3");
            };

            // Animations
            const initHeroAnimations = () => {
                gsap.from(".gsap-hero-el", { 
                    y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out" 
                });
                gsap.from(".gsap-hero-card", {
                    scale: 0.9, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power2.out", delay: 0.2
                });
            };

            const initScrollAnimations = () => {
                // Fade reveals
                ScrollTrigger.batch(".gsap-reveal", {
                    start: "top 85%",
                    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out", overwrite: true })
                });

                // Horizontal Gallery Pin
                const gallerySection = document.querySelector("#work");
                const track = gallerySection?.querySelector(".gallery-track");
                
                if (gallerySection && track) {
                    const getDistance = () => track.scrollWidth - window.innerWidth;
                    gsap.to(track, {
                        x: () => -getDistance(),
                        ease: "none",
                        scrollTrigger: {
                            trigger: gallerySection,
                            start: "top top",
                            end: () => `+=${getDistance()}`,
                            pin: true,
                            scrub: 1,
                            invalidateOnRefresh: true,
                            anticipatePin: 1
                        }
                    });
                }
            };

            // Cursor Follower
            const cursor = document.getElementById('cursor-glow');
            if (window.matchMedia("(pointer: fine)").matches) {
                let mouseX = 0, mouseY = 0;
                window.addEventListener('mousemove', (e) => { 
                    mouseX = e.clientX; mouseY = e.clientY; 
                });
                gsap.ticker.add(() => { 
                    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" }); 
                });
            } else {
                cursor.style.display = 'none';
            }

            // Start
            startPreloader();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div id="preloader">
<div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
<div className="absolute inset-0 bg-grid-white opacity-20"></div>
<div className="w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>
<div className="flex flex-col items-center gap-3 relative z-10">
<div className="flex items-center gap-2 opacity-0 tracking-tighter text-white font-medium" id="preloader-brand">
                DSGNR.
            </div>
<div className="font-normal text-3xl md:text-4xl text-white tracking-tight tabular-nums">
<span id="loader-percent">0</span>%
            </div>
<div className="loader-bar-bg">
<div className="loader-bar-fill" id="loader-bar"></div>
</div>
<div className="mt-4 text-[10px] text-neutral-500 tracking-widest uppercase opacity-0" id="preloader-status">
                Loading Assets
            </div>
</div>
</div>
<div id="cursor-glow"></div>

<div className="opacity-0 invisible w-full relative z-10" id="main-viewport">

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-grid-white opacity-30"></div>
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[130px] mix-blend-screen animate-float-delayed"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/20 transition-all duration-300" style={{'--fx-filter': 'blur(12px) saturate(1.2)'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">
<div className="text-lg font-medium tracking-tighter text-white select-none">
                        DSGNR.
                    </div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors" href="#">
                            Contact
                        </a>
</div>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
<div className="grid gap-12 lg:grid-cols-12 items-center">

<div className="lg:col-span-7 space-y-8 relative z-20">
<div className="gsap-hero-el flex items-center gap-3">
<div className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-medium tracking-widest text-indigo-300 uppercase">Available for freelance</span>
</div>
<div className="h-px bg-gradient-to-r from-indigo-500/30 to-transparent flex-1"></div>
</div>
<h1 className="gsap-hero-el text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight text-white">
                            Designing liquid <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">applications</span> for<br/>
                            the modern web.
                        </h1>
<p className="gsap-hero-el text-neutral-400 leading-relaxed text-sm sm:text-base max-w-lg">
                            I craft intuitive, high-performance digital experiences combining rigorous UX research with stunning visual aesthetics and motion design.
                        </p>
<div className="gsap-hero-el flex flex-col sm:flex-row gap-4 pt-4">
<button className="group inline-flex items-center justify-center gap-2 bg-white text-neutral-950 px-6 py-3 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors">
<span>View Projects</span>
<iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
<span>Read Philosophy</span>
</button>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] hidden md:block perspective-1000">

<div className="gsap-hero-card animate-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[580px] liquid-panel rounded-[2.5rem] p-4 flex flex-col gap-4 z-20" style={{'--fx-filter': 'blur(16px) liquid-glass(3, 25) saturate(1.2)'}}>

<div className="w-full flex justify-between items-center px-2 pt-2">
<div className="w-16 h-4 rounded-full bg-white/10"></div>
<div className="flex gap-1">
<div className="w-4 h-4 rounded-full bg-white/10"></div>
<div className="w-4 h-4 rounded-full bg-white/10"></div>
</div>
</div>
<div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-white/5 mt-4 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-white opacity-50 scale-150"></div>
</div>
<div className="space-y-3 mt-2">
<div className="w-3/4 h-6 rounded-lg bg-white/10"></div>
<div className="w-1/2 h-4 rounded-lg bg-white/5"></div>
</div>
<div className="mt-auto flex justify-between gap-2 pb-2">
<div className="flex-1 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/20"></div>
<div className="w-12 h-12 rounded-xl bg-white/10"></div>
</div>
</div>

<div className="gsap-hero-card animate-float-delayed absolute top-20 right-0 w-32 h-32 liquid-panel rounded-2xl p-4 flex items-center justify-center z-10 rotate-12" style={{'--fx-filter': 'blur(8px) liquid-glass(2, 10) saturate(1.5)'}}>
<iconify-icon className="text-white/50" icon="solar:figma-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<div className="gsap-hero-card animate-float absolute bottom-20 left-0 w-40 h-24 liquid-panel rounded-2xl p-4 flex flex-col justify-center gap-2 z-30 -rotate-6" style={{'--fx-filter': 'blur(12px) liquid-glass(4, 15) saturate(1.2)'}}>
<div className="w-8 h-2 rounded-full bg-cyan-400/40"></div>
<div className="w-full h-2 rounded-full bg-white/10"></div>
<div className="w-2/3 h-2 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-black/20 py-8 overflow-hidden relative z-20 flex items-center" style={{'--fx-filter': 'blur(4px) saturate(1.1)'}}>
<div className="flex w-full items-center overflow-hidden opacity-50">
<div className="flex items-center gap-12 md:gap-24 animate-scroll-left whitespace-nowrap min-w-full text-xs font-mono uppercase tracking-widest text-white">
<span>User Interface Design</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>Design Systems</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>Prototyping</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>Motion Interaction</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>User Research</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>

<span>User Interface Design</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>Design Systems</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>Prototyping</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>Motion Interaction</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
<span>User Research</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
</div>
</div>
</section>

<section className="relative z-20 overflow-hidden bg-neutral-950 min-h-screen flex flex-col justify-center border-b border-white/5" id="work">
<div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none"></div>
<div className="relative w-full h-full flex flex-col justify-center py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 w-full relative z-20">
<div className="gsap-reveal space-y-3">
<span className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500">Selected Work</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-none">
                            Digital ecosystems.
                        </h2>
</div>
</div>
<div className="work-gallery-wrapper w-full overflow-hidden relative z-30">
<div className="gallery-track flex gap-6 lg:gap-8 w-max items-center px-6 lg:px-8">

<article className="w-[85vw] md:w-[50vw] lg:w-[40vw] shrink-0 group">
<div className="aspect-[4/3] liquid-panel rounded-3xl overflow-hidden relative border border-white/10" style={{'--fx-filter': 'blur(8px) liquid-glass(2, 12) saturate(1.1)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black p-8 flex flex-col items-center justify-center">

<div className="w-3/4 h-3/4 rounded-t-2xl border-x border-t border-white/10 bg-neutral-950 relative overflow-hidden flex flex-col">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="flex-1 p-4 flex gap-4">
<div className="w-1/3 h-full rounded bg-white/5"></div>
<div className="w-2/3 flex flex-col gap-4">
<div className="w-full h-1/2 rounded bg-indigo-500/10 border border-indigo-500/20"></div>
<div className="w-full h-1/2 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
<button className="bg-white text-black px-6 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Case Study</button>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Fintech Dashboard</h3>
<p className="text-xs text-neutral-400 mt-1">Web Application • Data Vis</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>

<article className="w-[85vw] md:w-[50vw] lg:w-[40vw] shrink-0 group">
<div className="aspect-[4/3] liquid-panel rounded-3xl overflow-hidden relative border border-white/10" style={{'--fx-filter': 'blur(8px) liquid-glass(2, 12) saturate(1.1)'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-neutral-900 to-black p-8 flex flex-col items-center justify-center">

<div className="w-1/2 h-full rounded-[2rem] border border-white/10 bg-neutral-950 relative overflow-hidden flex flex-col p-2">
<div className="w-1/3 h-1 rounded-full bg-white/20 mx-auto mt-2"></div>
<div className="mt-6 flex gap-2 overflow-hidden px-2">
<div className="w-full h-32 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0"></div>
</div>
<div className="mt-4 px-2 space-y-2">
<div className="w-3/4 h-4 rounded bg-white/10"></div>
<div className="w-1/2 h-3 rounded bg-white/5"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
<button className="bg-white text-black px-6 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Case Study</button>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Health Tracker iOS</h3>
<p className="text-xs text-neutral-400 mt-1">Mobile App • Interaction</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>

<article className="w-[85vw] md:w-[50vw] lg:w-[40vw] shrink-0 group">
<div className="aspect-[4/3] liquid-panel rounded-3xl overflow-hidden relative border border-white/10" style={{'--fx-filter': 'blur(8px) liquid-glass(2, 12) saturate(1.1)'}}>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-black p-8 flex flex-col items-center justify-center">

<div className="w-full h-2/3 rounded-xl border border-white/10 bg-neutral-950 relative overflow-hidden p-6 flex flex-col justify-between">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-24 h-4 rounded bg-white/5"></div>
</div>
<div className="w-full h-1/2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-transparent border border-white/5"></div>
</div>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
<button className="bg-white text-black px-6 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Case Study</button>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">AI Content Platform</h3>
<p className="text-xs text-neutral-400 mt-1">SaaS • Design System</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="md:flex bg-neutral-950 w-full relative" id="about">
<div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none z-0"></div>
<div className="md:w-1/2 md:p-12 lg:p-24 flex flex-col md:h-screen md:sticky md:top-0 overflow-hidden justify-center border-r border-white/5 pt-20 pb-12 px-6 z-10">
<div className="max-w-md">
<div className="gsap-reveal flex items-center gap-3 mb-8">
<span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">Design Philosophy</span>
</div>
<h2 className="gsap-reveal text-3xl md:text-5xl leading-[1.1] tracking-tight font-medium text-white mb-8">
                        Form follows <br/>
<span className="text-neutral-500">emotion.</span>
</h2>
<p className="gsap-reveal text-sm text-neutral-400 leading-relaxed">
                        I believe that great software shouldn't just solve problems; it should feel inevitable. By merging systemic thinking with fluid micro-interactions, I build tools that empower users while remaining practically invisible.
                    </p>
</div>
</div>
<div className="w-full md:w-1/2 bg-black/40 relative z-10" style={{'--fx-filter': 'blur(8px) saturate(1.1)'}}>
<div className="md:p-12 lg:p-24 py-20 px-6 space-y-12">
<div className="gsap-reveal group">
<div className="text-[10px] font-mono text-neutral-600 mb-2">01</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-300 transition-colors">Atomic Architecture</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Building scalable foundations through comprehensive design systems that bridge the gap between design and engineering.</p>
</div>
<div className="gsap-reveal group border-t border-white/5 pt-12">
<div className="text-[10px] font-mono text-neutral-600 mb-2">02</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-300 transition-colors">Fluid Interaction</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Choreographing motion that provides context, spatial awareness, and delight without sacrificing performance.</p>
</div>
<div className="gsap-reveal group border-t border-white/5 pt-12">
<div className="text-[10px] font-mono text-neutral-600 mb-2">03</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-indigo-300 transition-colors">Evidence-Based</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Validating assumptions through prototyping and qualitative research to ensure solutions map to actual human needs.</p>
</div>
</div>
</div>
</section>

<footer className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5 bg-neutral-950 flex flex-col items-center text-center">
<div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-900/10 blur-[100px] rounded-[100%] pointer-events-none mix-blend-screen"></div>
<div className="relative z-10 px-6 max-w-2xl mx-auto space-y-8">
<h2 className="gsap-reveal text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight">
                    Let's build something <br/> remarkable.
                </h2>
<p className="gsap-reveal text-sm text-neutral-400 max-w-md mx-auto">
                    Currently accepting new projects. Whether you have a specific idea or just want to explore possibilities, let's talk.
                </p>
<div className="gsap-reveal pt-8">
<a className="inline-flex items-center justify-center gap-3 liquid-panel rounded-full px-8 py-4 text-sm font-medium text-white hover:bg-white/5 transition-all duration-300" href="mailto:hello@example.com" style={{'--fx-filter': 'blur(10px) liquid-glass(2, 10) saturate(1.2)'}}>
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Start a Conversation
                    </a>
</div>
</div>
<div className="w-full mt-32 px-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 border-t border-white/5 pt-8 max-w-7xl mx-auto text-xs text-neutral-500 font-medium">
<div className="tracking-tighter text-white">DSGNR. © 2024</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex items-center gap-2 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ALL SYSTEMS NOMINAL
                </div>
</div>
</footer>
</div>


    </>
  );
}
