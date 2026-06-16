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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


    document.addEventListener("DOMContentLoaded", () => {
        const SETTINGS = { duration: 0.8, stagger: 0.1, parallaxIntensity: 15, ease: "power3.out" };

        gsap.registerPlugin(ScrollTrigger);

        // --- PRELOADER SEQUENCE ---
        const startPreloader = () => {
            const tl = gsap.timeline();
            const counter = { val: 0 };
            
            // 1. Initial Elements Reveal
            tl.to("#preloader-brand, #preloader-status", { opacity: 1, duration: 0.5, y: 0, stagger: 0.1 });

            // 2. Loading Process
            tl.to(counter, { 
                val: 100, 
                duration: 2.5, 
                ease: "power2.inOut", 
                onUpdate: () => document.getElementById("loader-percent").innerText = Math.floor(counter.val)
            }, "-=0.2");
            
            tl.to("#loader-bar", { width: "100%", duration: 2.5, ease: "power2.inOut" }, "<");

            // 3. Exit Preloader & Enter Main Content
            tl.to("#preloader", { 
                yPercent: -100, 
                duration: 1, 
                ease: "power3.inOut",
                onComplete: () => {
                  // Clean DOM for performance
                  document.getElementById("preloader").style.display = "none"; 
                  // Unlock vertical scroll, keep horizontal overflow clipped
                  document.body.style.overflowY = "auto";
                  document.body.style.overflowX = "hidden";
                }
            });

            // 4. Reveal Content Wrapper
            tl.to("#main-viewport", { 
                autoAlpha: 1, 
                duration: 0.5, 
                ease: "power2.out" 
            }, "-=0.6");

            // 5. Trigger Hero Animations (Chained)
            tl.add(() => {
                initHeroAnimations();
                initScrollAnimations();
            }, "-=0.4");
        };

        // --- ANIMATION INITIALIZERS ---
        
        const initHeroAnimations = () => {
            // Text Reveal
            gsap.from(".text-reveal-hero", { 
                y: "120%", 
                skewY: 5, 
                duration: 1.2, 
                stagger: 0.1, 
                ease: "power4.out" 
            });

            // Card Stats Animation
            const distObj = { val: 0 }, timeObj = { val: 0 }, paceObj = { val: 5.30 };
            gsap.to(distObj, { val: 14.01, duration: 3, ease: "power2.out", onUpdate: () => document.getElementById("counter-distance").innerText = distObj.val.toFixed(2) });
            gsap.to(timeObj, { val: 6496, duration: 3, ease: "none", onUpdate: () => {
                   const s = Math.floor(timeObj.val % 60), m = Math.floor((timeObj.val % 3600) / 60), h = Math.floor(timeObj.val / 3600);
                   document.getElementById("counter-duration").innerText = `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            }});
            gsap.to(paceObj, { val: 4.44, duration: 3, ease: "power1.inOut", onUpdate: () => document.getElementById("counter-pace").innerText = paceObj.val.toFixed(2) });
            
            const path = document.getElementById("activity-path");
            if(path) {
                const len = path.getTotalLength();
                gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
                gsap.to(path, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" });
                gsap.to("#activity-dot", { opacity: 1, duration: 0.5, delay: 2.5 });
            }
        };

        const initScrollAnimations = () => {
            // Batch Reveal for Scroll
            ScrollTrigger.batch(".gsap-reveal", {
                start: "top 90%",
                onEnter: batch => {
                    gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, duration: SETTINGS.duration, ease: SETTINGS.ease, overwrite: true });
                }
            });
            gsap.set(".gsap-reveal", { y: 30, autoAlpha: 0 });

            // Page Progress Line
            gsap.to("#page-progress", {
                height: "100%", ease: "none",
                scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0 }
            });

            // Parallax
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.querySelectorAll(".parallax-element").forEach(el => {
                    const speed = parseFloat(el.getAttribute("data-speed")) || 0.1;
                    gsap.to(el, {
                        y: () => (document.body.scrollHeight - window.innerHeight) * speed * -1,
                        ease: "none",
                        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0 }
                    });
                });
                gsap.to(".parallax-bg", {
                    yPercent: SETTINGS.parallaxIntensity, ease: "none",
                    scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0 }
                });
            }

            // Section Wipe
            document.querySelectorAll(".section-container").forEach(section => {
                const overlay = section.querySelector(".section-wipe-overlay");
                if(overlay) {
                    gsap.to(overlay, {
                        scaleX: 1.5, opacity: 1, duration: 0.8, ease: "power2.out",
                        scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play reverse play reverse" },
                        onComplete: () => gsap.to(overlay, { opacity: 0, duration: 0.5 })
                    });
                }
            });

            // Horizontal Gallery
            const gallerySection = document.querySelector("#club-moments");
            const track = gallerySection?.querySelector(".gallery-track");
            if (gallerySection && track) {
              const getDistance = () => track.scrollWidth - window.innerWidth;
              gsap.to(track, {
                x: () => -getDistance(), ease: "none",
                scrollTrigger: {
                  trigger: gallerySection, start: "top top", end: () => `+=${getDistance()}`,
                  pin: true, scrub: 0.5, invalidateOnRefresh: true, anticipatePin: 1
                }
              });
            }

            // Recalculate positions after all triggers are created.
            requestAnimationFrame(() => ScrollTrigger.refresh());
        };

        // Start Sequence
        startPreloader();

        // Mouse Follower (Always Active)
        const cursor = document.getElementById('cursor-glow');
        let mouseX = 0, mouseY = 0;
        window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
        gsap.ticker.add(() => { gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" }); });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>

</div>

<div className="" id="preloader">
<div className="flex flex-col items-center gap-2">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute inset-0 bg-grid-white opacity-40"></div>
<div className="absolute -top-20 left-1/2 h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px] mix-blend-screen parallax-element" data-speed="0.1"></div>
</div>

<div className="flex items-center gap-2 opacity-0" id="preloader-brand">
<iconify-icon className="text-white" icon="solar:running-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-semibold tracking-widest text-white uppercase">Heroicos</span>
</div>

<div className="font-mono text-4xl md:text-5xl font-light text-white tracking-tighter mt-4 tabular-nums">
<span id="loader-percent">0</span>%
      </div>

<div className="loader-bar-bg">
<div className="loader-bar-fill" id="loader-bar"></div>
</div>

<div className="mt-4 text-[10px] text-neutral-500 font-mono tracking-widest uppercase opacity-0" id="preloader-status">
        System Initializing
      </div>
</div>
</div>

<div className="opacity-0 invisible w-full" id="main-viewport">
<div className="progress-track hidden md:block">
<div className="progress-bar" id="page-progress"></div>
</div>
<div id="cursor-glow"></div>

<div className="fixed top-0 w-full h-screen -z-10 overflow-hidden pointer-events-none">
<div className="parallax-bg absolute inset-0 scale-110">
<picture>
<source srcset="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69b0e923-3379-4f24-86d2-1f06c7ae6ec1_3840w.png?format=avif&amp;width=1920&amp;quality=60" type="image/avif"/>
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69b0e923-3379-4f24-86d2-1f06c7ae6ec1_3840w.png?width=1920&amp;quality=75"/>
</picture>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-neutral-950/40 to-neutral-950"></div>
</div>
</div>

<div className="absolute inset-0 z-0 mx-auto max-w-7xl pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8 h-full fixed">
<div className="h-full w-px bg-white/5 relative hidden md:block"></div>
<div className="h-full w-px bg-white/5 relative hidden md:block"></div>
<div className="h-full w-px bg-white/5 relative hidden md:block"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/10 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors duration-300" href="#">Community</a>
<a className="hover:text-white transition-colors duration-300" href="#">Race</a>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-white group-hover:text-cyan-400 transition-colors duration-300" height="28" icon="solar:running-bold-duotone" width="28"></iconify-icon>
<span className="text-xl font-semibold italic text-white tracking-tight">HEROICOS</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<div className="flex items-center space-x-6 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors duration-300" href="#">Helps</a>
</div>
<a className="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">Sign
              Up</a>
</div>
</div>
</div>
</nav>

<main className="snap-section flex flex-col min-h-screen z-10 pt-32 pb-10 relative items-center justify-start section-container">
<div className="text-center max-w-4xl mr-auto mb-10 ml-auto pr-4 pl-4 space-y-1 relative z-20">
<h1 className="leading-[0.8] text-glow md:text-7xl lg:text-9xl flex flex-col text-5xl font-medium text-white tracking-tight font-playfair text-center relative group select-none">
<span className="hero-line block overflow-hidden"><span className="block text-reveal-hero">Heroicos</span></span>
<span className="hero-line block overflow-hidden p-4">
<span className="block text-reveal-hero font-great-vibes md:text-7xl sm:text-5xl lg:text-8xl text-3xl text-cyan-50/90" style={{fontFamily: '\'Great Vibes\', cursive'}}>Run club</span>
</span>
</h1>
<div className="overflow-hidden">
<p className="gsap-reveal md:text-xl leading-relaxed text-lg font-light text-slate-300 max-w-xs mx-auto mt-6">
            NO SOLO SOMOS CORREDORES SOMOS UN MOVIMIENTO
          </p>
</div>
<div className="gsap-reveal pt-8">
<button className="hover:bg-slate-200 hover:scale-105 transition-all duration-300 flex gap-2 text-lg font-medium text-black bg-white rounded-full mx-auto py-2.5 px-6 items-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
<span className="text-sm">Run With Us</span>
</button>
</div>
</div>

<div className="gsap-reveal md:max-w-md w-full max-w-[22rem] pr-4 pl-4 perspective-1000 z-20">
<div className="glass-card-ui overflow-hidden transition-transform duration-500 hover:scale-[1.02] text-white rounded-[2rem] pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex items-center justify-between mb-4">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white to-white/40 p-[1.5px] shadow-lg shadow-white/10">
<img alt="User" className="w-full h-full rounded-full object-cover border border-black/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08c8dc83-25fe-4a03-bce5-0f1bbe140771_320w.jpg"/>
</div>
<span className="text-base font-semibold tracking-tight text-white drop-shadow-md font-sans">Daniel chico</span>
</div>
<iconify-icon className="text-white/80 cursor-pointer" icon="solar:menu-dots-bold" width="24"></iconify-icon>
</div>
<div className="relative h-32 w-full mb-8 mt-4">
<svg className="overflow-visible w-full h-full" preserveaspectratio="none" viewbox="0 0 300 100">
<path className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" d="M0,85 C30,80 40,50 70,45 C100,40 120,65 150,55 C180,45 200,25 240,30 C260,32 280,45 300,40" fill="none" id="activity-path" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="0" cy="85" fill="white" r="3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="2"></circle>
<circle className="opacity-0 shadow-[0_0_10px_white]" cx="300" cy="40" fill="white" id="activity-dot" r="4.5" stroke="rgba(255,255,255,0.5)" strokeWidth="2"></circle>
</svg>
</div>
<div className="mb-8">
<h3 className="text-lg font-semibold tracking-tight text-white drop-shadow-md font-sans">Lactate Training - Hard
              Interval</h3>
</div>
<div className="grid grid-cols-3 font-inter gap-x-2 gap-y-8">
<div className="flex flex-col">
<span className="text-xs text-slate-200/90 font-medium mb-1 tracking-wide">Distance (km)</span>
<span className="text-3xl font-semibold text-white tracking-tighter skew-x-[-10deg]" id="counter-distance">0.00</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200/90 tracking-wide mb-1">Duration</span>
<span className="text-3xl font-semibold text-white tracking-tighter skew-x-[-10deg]" id="counter-duration">0:00:00</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-200/90 font-medium mb-1 tracking-wide">Avg Pace</span>
<span className="text-3xl font-semibold text-white tracking-tighter skew-x-[-10deg]" id="counter-pace">0.00</span>
</div>
</div>
</div>
</div>
</main>

<section className="section-container relative min-h-screen flex flex-col overflow-hidden bg-neutral-950 w-full border-white/5 border-t pt-24 pb-24 items-center justify-center">
<div className="section-wipe-overlay"></div>
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute inset-0 bg-grid-white opacity-20"></div>
<div className="absolute -top-20 left-1/2 h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px] mix-blend-screen parallax-element" data-speed="0.1"></div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen parallax-element" data-speed="0.05"></div>

<div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-10 select-none z-0 space-y-4">
<div className="flex animate-scroll-left whitespace-nowrap">
<span className="text-[15vw] font-playfair font-black text-white leading-[0.8] tracking-tighter px-4">HEROICOS HEROICOS HEROICOS HEROICOS</span>
<span className="text-[15vw] font-playfair font-black text-white leading-[0.8] tracking-tighter px-4">HEROICOS HEROICOS HEROICOS HEROICOS</span>
</div>
<div className="flex animate-scroll-right whitespace-nowrap">
<span className="text-[15vw] font-playfair font-black text-white leading-[0.8] tracking-tighter px-4">RUN CLUB RUN CLUB RUN CLUB RUN CLUB</span>
<span className="text-[15vw] font-playfair font-black text-white leading-[0.8] tracking-tighter px-4">RUN CLUB RUN CLUB RUN CLUB RUN CLUB</span>
</div>
</div>

<div className="z-10 flex flex-col lg:flex-row gap-12 lg:gap-0 w-full h-full max-w-7xl px-6 relative items-center justify-center">
<div className="gsap-reveal lg:absolute lg:top-20 lg:left-20">
<div className="animate-float flex flex-col text-black text-center bg-white w-48 h-48 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] items-center justify-center">
<span className="text-4xl font-semibold tracking-tight skew-x-[-10deg]">100%</span>
<span className="text-xs font-medium text-neutral-600 mt-2 leading-tight px-2">Train with the Best to Beat Your Best</span>
</div>
</div>
<div className="gsap-reveal lg:absolute lg:top-10 lg:right-20 z-20">
<div className="glass-card-ui animate-float max-w-[280px] rounded-2xl p-6" style={{animationDelay: '1s'}}>
<div className="flex justify-between items-start mb-4">
<span className="text-4xl font-bold text-white skew-x-[-10deg]">#01</span>
<iconify-icon className="text-yellow-200" icon="solar:sun-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white font-playfair mb-2">Elite Status</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
              Join thousands who rely on our elite program—Built with <span className="text-white">Experience</span>, Backed
              by <span className="text-white">Results</span>.
            </p>
</div>
</div>
<div className="gsap-reveal relative group perspective-1000 my-10 lg:my-0" style={{-Bg: '#0a0a0a'}}>
<div className="relative w-[320px] h-[460px] md:w-[420px] md:h-[580px] overflow-hidden rotate-[-3deg] group-hover:rotate-0 transition-all duration-700 ease-out shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] bg-neutral-950 rounded-[32px]">
<img className="transition-transform duration-700 group-hover:scale-110 opacity-95 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08c8dc83-25fe-4a03-bce5-0f1bbe140771_1600w.jpg?width=960&amp;quality=75" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none">
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-white/35 backdrop-blur-xl border border-white/40 text-white text-center shadow-2xl">
<span className="block text-lg font-bold tracking-wide leading-tight">Daniel Chico</span>
<span className="block text-xs opacity-90">CEO &amp; Head Coach</span>
</div>
</div>
</div>
</div>
</section>

<section className="section-container border-y border-white/5 bg-black/40 py-12 overflow-hidden relative z-20">
<div className="section-wipe-overlay"></div>
<div className="flex w-full items-center overflow-hidden">
<div className="flex items-center gap-16 md:gap-32 animate-scroll-left whitespace-nowrap min-w-full">


<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M24 6.897c-3.141.52-11.838 1.948-15.652 2.128-2.61.124-5.263-.162-6.522-1.89C.517 5.318.064 3.73 0 2.217c0 4.195 2.162 8.358 8.017 8.528c3.284.095 8.784-1.353 15.983-3.848z"></path></svg>

<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M16.92 9.07l-3.218 5.485h6.425l3.227-5.485zm-4.757-4.085l-5.635 9.57h6.425l5.626-9.57zm-4.73 4.1l-6.812 5.47h6.426l6.81-5.47z"></path></svg>

<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M12.915 2.052c-.675-.125-1.365-.127-2.035.035c-.958.232-1.748.887-2.298 1.705c-.397.59-.652 1.25-.972 1.885c-.235.465-.48 1.137-.993 1.345c-.395.16-.957.072-1.282-.247c-.207-.202-.302-.507-.465-.747c-.31-.455-1.002-.572-1.467-.28c-.375.235-.42 1.242.062 1.287c.287.027.607.03 1.055.22c.247.105.44.332.55.575c.21.465.115 1.052-.355 1.31c-.372.205-.827.147-1.22.145c-.687-.002-1.385-.09-2.067-.02c-.347.035-.74.14-1.042.347c-.452.31-.692.85-.757 1.392c-.067.575.05 1.177.377 1.66c.267.392.707.67 1.157.822c.812.275 1.702.262 2.545.412c.575.102 1.135.302 1.612.63c.697.477 1.205 1.185 1.752 1.847c.547.66 1.17 1.24 1.885 1.687c1.375.86 3.082 1.162 4.675.987c.797-.087 1.602-.345 2.227-.887c.392-.34.722-.867.757-1.392c.045-.662-.267-1.29-.625-1.84c-.39-.597-.847-1.15-1.347-1.65c-.71-.71-1.66-1.162-2.612-1.487c-.88-.3-1.812-.482-2.735-.61c-.557-.077-1.127-.127-1.647-.317c-.47-.172-.88-.475-1.165-.897c-.217-.32-.305-.72-.257-1.102c.037-.295.172-.57.362-.79c.477-.552 1.202-.822 1.907-.942c.83-.142 1.675-.162 2.507-.272c.31-.04.607-.11.892-.227c.437-.18.845-.445 1.14-.82c.28-.357.432-.805.477-1.252c.057-.565-.082-1.15-.357-1.642c-.22-.392-.572-.735-.972-.947c-.427-.225-.92-.285-1.392-.25c-.475.035-.925.215-1.32.482c-.397.267-.745.642-1.175.76c-.34.092-.747-.025-1.02-.247c-.292-.237-.472-.597-.565-.96c-.16-.622-.057-1.3.21-1.877c.237-.512.627-.96 1.12-1.222c.767-.407 1.685-.35 2.51-.137c.34.087.665.23.967.412c.357.215.702.5.902.855c.342.607.352 1.352.61 2.01c.14.357.397.667.662.94c.487.5 1.092.862 1.737 1.095c.78.28 1.642.347 2.455.197c.565-.105 1.082-.387 1.485-.802c.405-.417.632-.98.71-1.555c.08-.59-.035-1.197-.282-1.73c-.272-.587-.722-1.077-1.242-1.455c-.71-.515-1.577-.807-2.45-.895z"></path></svg>

<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M21.572 17.653c-.332-1.107-.978-2.036-1.597-2.923c-.703-1.008-1.5-1.92-2.185-2.936c-.45-.668-.863-1.536-.788-2.384c.05-1.042.842-1.765 1.64-2.189c.355-.188.742-.31 1.134-.366c.15-.022.3-.01.442.04c-1.306-3.876-5.592-6.07-9.516-4.997c-3.155.864-5.467 3.518-5.968 6.745l2.427 4.542l.504-.268c-.628-1.194-1.282-2.375-1.89-3.57c-.202-.397-.47-1.393.072-1.637c.342-.154.673.233.844.47c1.37 1.898 2.378 4.02 3.498 6.078c.328.604 1.11 2.035.534 2.768c-.352.447-.93.308-1.378.148c-.966-.346-1.838-.908-2.613-1.62c-.777-.714-1.37-1.625-1.674-2.64c-.26-.867-.18-1.766.117-2.61l-1.996.002c-.52 2.36.19 4.908 1.87 6.643c1.678 1.734 4.17 2.584 6.556 2.19c2.956-.488 5.438-2.522 6.553-5.263c.273.187.525.405.748.653c.695.772.825 1.933.298 2.813c-.22.368-.544.66-.906.877l1.096 1.884c.834-.486 1.543-1.19 1.992-2.049z"></path></svg>

<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M11.999 1.75c-3.79 0-7.054 2.175-8.627 5.346c-1.76 3.545-1.503 8.355 2.534 11.233c.895.638 1.638.164 1.638-1.07V6.892a4.453 4.453 0 0 1 4.454-4.454a4.453 4.453 0 0 1 4.455 4.454v10.366c0 1.234.743 1.708 1.638 1.07c4.037-2.878 4.293-7.688 2.533-11.233C19.053 3.925 15.79 1.75 12 1.75zm-6.236 8.52c-.63 0-1.22.062-1.772.176c-.958 2.822-.262 5.51 2.324 7.354V7.994c-.167 1.378-.293 2.18-.552 2.277zm12.473 0c-.26-.098-.386-.9-.553-2.277v9.806c2.586-1.844 3.282-4.532 2.325-7.354a8.914 8.914 0 0 0-1.772-.176zm-6.236 8.283c-1.63 0-3.078.852-3.663 2.052a2.378 2.378 0 0 0-.214.938c0 1.05.584 1.9 1.458 2.336c.692.345 1.55.513 2.42.513c.87 0 1.728-.168 2.42-.514c.873-.435 1.457-1.286 1.457-2.336c0-.332-.078-.655-.214-.938c-.585-1.2-2.033-2.052-3.664-2.052z"></path></svg>

<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065l5.154 10.172l5.154-10.172h-3.065L15.387 17.944zm-4.564-4.894l2.475-4.886L15.773 3.28h-4.329l-4.329 8.54l-4.329 8.539h4.329l1.85-3.648l1.858-3.661z"></path></svg>

<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M24 6.897c-3.141.52-11.838 1.948-15.652 2.128-2.61.124-5.263-.162-6.522-1.89C.517 5.318.064 3.73 0 2.217c0 4.195 2.162 8.358 8.017 8.528c3.284.095 8.784-1.353 15.983-3.848z"></path></svg>
<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M16.92 9.07l-3.218 5.485h6.425l3.227-5.485zm-4.757-4.085l-5.635 9.57h6.425l5.626-9.57zm-4.73 4.1l-6.812 5.47h6.426l6.81-5.47z"></path></svg>
<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M12.915 2.052c-.675-.125-1.365-.127-2.035.035c-.958.232-1.748.887-2.298 1.705c-.397.59-.652 1.25-.972 1.885c-.235.465-.48 1.137-.993 1.345c-.395.16-.957.072-1.282-.247c-.207-.202-.302-.507-.465-.747c-.31-.455-1.002-.572-1.467-.28c-.375.235-.42 1.242.062 1.287c.287.027.607.03 1.055.22c.247.105.44.332.55.575c.21.465.115 1.052-.355 1.31c-.372.205-.827.147-1.22.145c-.687-.002-1.385-.09-2.067-.02c-.347.035-.74.14-1.042.347c-.452.31-.692.85-.757 1.392c-.067.575.05 1.177.377 1.66c.267.392.707.67 1.157.822c.812.275 1.702.262 2.545.412c.575.102 1.135.302 1.612.63c.697.477 1.205 1.185 1.752 1.847c.547.66 1.17 1.24 1.885 1.687c1.375.86 3.082 1.162 4.675.987c.797-.087 1.602-.345 2.227-.887c.392-.34.722-.867.757-1.392c.045-.662-.267-1.29-.625-1.84c-.39-.597-.847-1.15-1.347-1.65c-.71-.71-1.66-1.162-2.612-1.487c-.88-.3-1.812-.482-2.735-.61c-.557-.077-1.127-.127-1.647-.317c-.47-.172-.88-.475-1.165-.897c-.217-.32-.305-.72-.257-1.102c.037-.295.172-.57.362-.79c.477-.552 1.202-.822 1.907-.942c.83-.142 1.675-.162 2.507-.272c.31-.04.607-.11.892-.227c.437-.18.845-.445 1.14-.82c.28-.357.432-.805.477-1.252c.057-.565-.082-1.15-.357-1.642c-.22-.392-.572-.735-.972-.947c-.427-.225-.92-.285-1.392-.25c-.475.035-.925.215-1.32.482c-.397.267-.745.642-1.175.76c-.34.092-.747-.025-1.02-.247c-.292-.237-.472-.597-.565-.96c-.16-.622-.057-1.3.21-1.877c.237-.512.627-.96 1.12-1.222c.767-.407 1.685-.35 2.51-.137c.34.087.665.23.967.412c.357.215.702.5.902.855c.342.607.352 1.352.61 2.01c.14.357.397.667.662.94c.487.5 1.092.862 1.737 1.095c.78.28 1.642.347 2.455.197c.565-.105 1.082-.387 1.485-.802c.405-.417.632-.98.71-1.555c.08-.59-.035-1.197-.282-1.73c-.272-.587-.722-1.077-1.242-1.455c-.71-.515-1.577-.807-2.45-.895z"></path></svg>
<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M21.572 17.653c-.332-1.107-.978-2.036-1.597-2.923c-.703-1.008-1.5-1.92-2.185-2.936c-.45-.668-.863-1.536-.788-2.384c.05-1.042.842-1.765 1.64-2.189c.355-.188.742-.31 1.134-.366c.15-.022.3-.01.442.04c-1.306-3.876-5.592-6.07-9.516-4.997c-3.155.864-5.467 3.518-5.968 6.745l2.427 4.542l.504-.268c-.628-1.194-1.282-2.375-1.89-3.57c-.202-.397-.47-1.393.072-1.637c.342-.154.673.233.844.47c1.37 1.898 2.378 4.02 3.498 6.078c.328.604 1.11 2.035.534 2.768c-.352.447-.93.308-1.378.148c-.966-.346-1.838-.908-2.613-1.62c-.777-.714-1.37-1.625-1.674-2.64c-.26-.867-.18-1.766.117-2.61l-1.996.002c-.52 2.36.19 4.908 1.87 6.643c1.678 1.734 4.17 2.584 6.556 2.19c2.956-.488 5.438-2.522 6.553-5.263c.273.187.525.405.748.653c.695.772.825 1.933.298 2.813c-.22.368-.544.66-.906.877l1.096 1.884c.834-.486 1.543-1.19 1.992-2.049z"></path></svg>
<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M11.999 1.75c-3.79 0-7.054 2.175-8.627 5.346c-1.76 3.545-1.503 8.355 2.534 11.233c.895.638 1.638.164 1.638-1.07V6.892a4.453 4.453 0 0 1 4.454-4.454a4.453 4.453 0 0 1 4.455 4.454v10.366c0 1.234.743 1.708 1.638 1.07c4.037-2.878 4.293-7.688 2.533-11.233C19.053 3.925 15.79 1.75 12 1.75zm-6.236 8.52c-.63 0-1.22.062-1.772.176c-.958 2.822-.262 5.51 2.324 7.354V7.994c-.167 1.378-.293 2.18-.552 2.277zm12.473 0c-.26-.098-.386-.9-.553-2.277v9.806c2.586-1.844 3.282-4.532 2.325-7.354a8.914 8.914 0 0 0-1.772-.176zm-6.236 8.283c-1.63 0-3.078.852-3.663 2.052a2.378 2.378 0 0 0-.214.938c0 1.05.584 1.9 1.458 2.336c.692.345 1.55.513 2.42.513c.87 0 1.728-.168 2.42-.514c.873-.435 1.457-1.286 1.457-2.336c0-.332-.078-.655-.214-.938c-.585-1.2-2.033-2.052-3.664-2.052z"></path></svg>
<svg className="h-10 md:h-12 w-auto fill-current text-neutral-600 hover:text-white transition-all duration-300 flex-shrink-0" viewbox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065l5.154 10.172l5.154-10.172h-3.065L15.387 17.944zm-4.564-4.894l2.475-4.886L15.773 3.28h-4.329l-4.329 8.54l-4.329 8.539h4.329l1.85-3.648l1.858-3.661z"></path></svg>
</div>
</div>
</section>

<section className="section-container md:flex text-white bg-black w-full border-white/10 border-b relative" id="archetype">
<div className="section-wipe-overlay"></div>
<div className="md:w-1/2 min-w-0 md:p-12 lg:p-20 flex flex-col md:h-screen md:sticky md:top-0 overflow-hidden group bg-neutral-950 w-full z-10 border-white/10 border-r pt-8 pb-8 px-8 relative justify-center">
<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-float parallax-element" data-speed="0.08"></div>
<div className="absolute inset-0 bg-grid-white opacity-50"></div>
</div>
<div className="max-w-xl relative z-10">
<div className="gsap-reveal flex items-center gap-3 mb-8">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
</div>
<span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Filosofía Heroica</span>
</div>
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-medium">
<span className="gsap-reveal block text-white">El dolor</span>
<span className="gsap-reveal block text-zinc-600">es solo</span>
<span className="gsap-reveal block text-white">información.</span>
<br/>
<span className="gsap-reveal block text-indigo-400 font-serif-italic">Persiste</span>
<span className="gsap-reveal block text-white font-serif-italic">hasta vencer.</span>
</h2>
<div className="gsap-reveal h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent my-10"></div>
<p className="gsap-reveal md:text-base leading-relaxed text-sm font-light text-zinc-400 max-w-md">
            En Heroicos no medimos el éxito en kilómetros, sino en barreras mentales derribadas.
          </p>
</div>
</div>
<div className="w-full md:w-1/2 min-w-0 bg-zinc-950/50 relative isolate">
<div className="md:p-12 lg:p-20 md:py-32 pt-20 pb-20 px-6 relative z-10 space-y-24 max-w-full">
<div className="gsap-reveal event-card group cursor-pointer relative isolate">
<div className="aspect-[4/3] w-full overflow-hidden rounded-sm relative mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45c333e8-a011-4853-beb0-cae5983aaee5_1600w.jpg" style={{}}/>
</div>
<div className="flex justify-between items-start border-b border-white/20 pb-6">
<div className="space-y-2">
<span className="text-xs text-indigo-400 font-mono tracking-widest block">ENE 18, 2026</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Ruta la popa</h3>
</div>
</div>
</div>
<div className="gsap-reveal event-card group cursor-pointer relative isolate">
<div className="aspect-[4/3] w-full overflow-hidden rounded-sm relative mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f636fad4-52c6-4015-99e7-533ade84a084_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-b border-white/20 pb-6">
<div className="space-y-2">
<span className="text-xs text-indigo-400 font-mono tracking-widest block">NOV 05, 2024</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Desafío Vertical</h3>
</div>
</div>
</div>
<div className="gsap-reveal event-card group cursor-pointer relative isolate">
<div className="aspect-[4/3] w-full overflow-hidden rounded-sm relative mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f3f2c90-bd2a-4055-a6af-849cbc4e493d_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-b border-white/20 pb-6">
<div className="space-y-2">
<span className="text-xs text-indigo-400 font-mono tracking-widest block">NOV 19, 2024</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Sesión de Velocidad</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-container z-20 md:px-12 overflow-hidden bg-neutral-950 w-full border-white/5 border-t pt-32 pb-32 px-6 relative">
<div className="section-wipe-overlay"></div>
<div className="absolute inset-0 bg-grid-white opacity-50"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div className="space-y-4">
<span className="gsap-reveal block text-blue-500 font-mono text-sm tracking-wider uppercase">Race Calendar 2024</span>
<h2 className="gsap-reveal text-5xl md:text-7xl font-playfair text-white leading-none tracking-tight">
              Upcoming <span className="font-serif-italic text-slate-500">Runs</span>
</h2>
</div>
<div className="gsap-reveal mt-8 md:mt-0">
<a className="group flex items-center gap-2 text-white hover:text-slate-300 transition-colors" href="#">
<span className="border-b border-white group-hover:border-slate-300 pb-0.5">View Full Schedule</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col">
<div className="gsap-reveal group relative border-t border-white/10 transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02]">
<a className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 px-4 relative z-10" href="#">
<div className="flex items-baseline gap-6 md:w-1/4">
<span className="text-sm font-mono text-slate-500 group-hover:text-blue-400 transition-colors">01</span>
<span className="text-2xl font-medium text-white">OCT 14</span>
</div>
<div className="md:w-1/2 mt-4 md:mt-0">
<h3 className="text-3xl md:text-5xl font-playfair text-slate-300 group-hover:text-white transition-colors duration-500 tracking-tight">
                  Midnight Marathon</h3>
<div className="flex items-center gap-2 mt-2 text-slate-500 font-mono text-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  TOKYO, JAPAN
                </div>
</div>
</a>
</div>
<div className="gsap-reveal group relative border-t border-white/10 transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02]">
<a className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 px-4 relative z-10" href="#">
<div className="flex items-baseline gap-6 md:w-1/4">
<span className="text-sm font-mono text-slate-500 group-hover:text-blue-400 transition-colors">02</span>
<span className="text-2xl font-medium text-white">NOV 03</span>
</div>
<div className="md:w-1/2 mt-4 md:mt-0">
<h3 className="text-3xl md:text-5xl font-playfair text-slate-300 group-hover:text-white transition-colors duration-500 tracking-tight">
                  Urban Trail Series</h3>
<div className="flex items-center gap-2 mt-2 text-slate-500 font-mono text-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  NEW YORK, USA
                </div>
</div>
</a>
</div>
<div className="gsap-reveal group relative border-t border-white/10 transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02]">
<a className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 px-4 relative z-10" href="#">
<div className="flex items-baseline gap-6 md:w-1/4">
<span className="text-sm font-mono text-slate-500 group-hover:text-blue-400 transition-colors">03</span>
<span className="text-2xl font-medium text-white">DEC 12</span>
</div>
<div className="md:w-1/2 mt-4 md:mt-0">
<h3 className="text-3xl md:text-5xl font-playfair text-slate-300 group-hover:text-white transition-colors duration-500 tracking-tight">
                  Frost Run Charity</h3>
<div className="flex items-center gap-2 mt-2 text-slate-500 font-mono text-sm">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  BERLIN, GERMANY
                </div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="snap-section section-container relative z-20 overflow-hidden border-t border-white/10 bg-neutral-950 min-h-screen flex flex-col justify-center" id="club-moments">
<div className="section-wipe-overlay"></div>
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute inset-0 bg-grid-white opacity-20"></div>
<div className="absolute -top-20 left-1/2 h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen parallax-element" data-speed="0.1"></div>
</div>
<div className="relative w-full h-full flex flex-col justify-center py-20">
<div className="relative mx-auto max-w-7xl px-6 lg:px-8 mb-16 w-full z-10">
<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
<div className="space-y-3">
<span className="gsap-reveal block text-xs uppercase tracking-[0.22em] text-cyan-300/80">Galería / Momentos del Club</span>
<h2 className="gsap-reveal block font-playfair text-4xl leading-none tracking-tight text-white md:text-6xl">
                Cartagena en movimiento.</h2>
</div>
<p className="gsap-reveal block max-w-md text-sm text-slate-400 md:text-base">Cuatro momentos reales de
              Heroicos: madrugadas, fondos largos, técnica y comunidad.</p>
</div>
</div>
<div className="club-gallery-wrapper w-full overflow-hidden">
<div className="gallery-track flex gap-6 lg:gap-10 w-max items-center px-6 md:px-12">
<article className="gallery-panel w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.03] shadow-2xl relative group">
<div className="aspect-[4/5] md:aspect-[16/10] relative overflow-hidden">
<img className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67ee7d71-6a8d-4bbe-804f-21538765131c_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 w-full p-6 md:p-8">
<span className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 font-mono">05:30 AM</span>
<h3 className="mt-2 font-playfair text-3xl text-white">Salida de Fondo</h3>
</div>
</div>
</article>
<article className="gallery-panel w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.03] shadow-2xl relative group">
<div className="aspect-[4/5] md:aspect-[16/10] relative overflow-hidden">
<img className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5042d6fd-2be0-48e5-b828-451f089eb62a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 w-full p-6 md:p-8">
<span className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 font-mono">URBAN</span>
<h3 className="mt-2 font-playfair text-3xl text-white">Ritmo Heroico</h3>
</div>
</div>
</article>
<article className="gallery-panel w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.03] shadow-2xl relative group">
<div className="aspect-[4/5] md:aspect-[16/10] relative overflow-hidden">
<img className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3468356-4d0d-41d3-8bee-0efe3ca3a7ec_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 w-full p-6 md:p-8">
<span className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 font-mono">TRAIL</span>
<h3 className="mt-2 font-playfair text-3xl text-white">Resistencia</h3>
</div>
</div>
</article>
<article className="gallery-panel w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.03] shadow-2xl relative group">
<div className="aspect-[4/5] md:aspect-[16/10] relative overflow-hidden">
<img className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b13f386c-09ba-4b08-8f51-5729b02325ce_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 w-full p-6 md:p-8">
<span className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 font-mono">SPEED</span>
<h3 className="mt-2 font-playfair text-3xl text-white">Velocidad</h3>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="snap-section section-container relative z-20 border-t border-white/10 bg-neutral-950 py-24 lg:py-32 overflow-hidden">
<div className="section-wipe-overlay"></div>
<div className="absolute inset-0 bg-grid-white opacity-50 pointer-events-none z-0"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen parallax-element" data-speed="0.07"></div>
<div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:px-8 z-10">

<div className="gsap-reveal glass-card-ui lg:col-span-7 flex flex-col justify-between rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
</div>
<div className="space-y-6 relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1">
<span className="block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-300">Inscripciones Abiertas</span>
</div>
<h2 className="font-playfair text-5xl leading-[0.95] text-white md:text-6xl tracking-tight">
              Únete hoy a
              <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Heroicos.</span>
</h2>
<p className="max-w-lg text-sm text-slate-300 md:text-base leading-relaxed">
              Entrena con estructura, comunidad y mentalidad de alto rendimiento junto a Sebastián Chico en Cartagena.
            </p>
</div>
<div className="flex flex-wrap gap-4 mt-10 relative z-10">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-neutral-950 transition-all duration-300 hover:bg-slate-200 hover:w-full md:hover:w-auto shadow-lg shadow-white/10" href="#">
<span className="mr-2">WhatsApp directo</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-4">
<div className="gsap-reveal glass-card-ui rounded-[32px] p-8 md:p-10 relative overflow-hidden h-full">
<h3 className="font-playfair text-3xl text-white mb-8">FAQ del Runner</h3>
<div className="space-y-4">
<article className="group border-b border-white/10 pb-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">¿Nivel requerido?</span>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</button>
<p className="mt-2 text-xs text-slate-400 leading-relaxed hidden group-hover:block transition-all duration-300">
                  Todos los niveles son bienvenidos.</p>
</article>
<article className="group border-b border-white/10 pb-4">
<button className="flex w-full items-center justify-between text-left">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">¿Horarios AM/PM?</span>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</button>
<p className="mt-2 text-xs text-slate-400 leading-relaxed hidden group-hover:block transition-all duration-300">
                  Mar y Jue 5:00 AM / 7:00 PM. Sáb 5:30 AM.</p>
</article>
</div>
</div>
</div>
</div>
</section>

<footer className="snap-section section-container relative bg-black text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
<div className="section-wipe-overlay"></div>
<div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
<div className="md:col-span-5 space-y-8">
<div className="gsap-reveal flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:running-bold-duotone" width="36"></iconify-icon>
<span className="text-3xl font-bold italic tracking-tighter">HEROICOS</span>
</div>
<p className="gsap-reveal text-slate-400 max-w-sm leading-relaxed text-sm">
              Reimaginando la experiencia del running en Cartagena.
            </p>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-semibold mb-6 text-sm">Comunidad</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Membresía</a></li>
<li><a className="hover:text-white transition-colors" href="#">Eventos</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-semibold mb-6 text-sm">Legal</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
</ul>
</div>
<div className="md:col-span-3">
<div className="p-6 rounded-2xl glass-card-ui">
<span className="text-xs text-slate-400 mb-2 block">Newsletter</span>
<div className="flex gap-2">
<input className="bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-xs w-full text-white focus:outline-none focus:border-white/50" placeholder="Email" type="email"/>
<button className="bg-white text-black rounded-lg px-3 py-2 text-xs font-bold hover:bg-slate-200">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs font-mono">© 2024 HEROICOS RUN CLUB.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-slate-500 font-mono">SYSTEM OPERATIONAL</span>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
