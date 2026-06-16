import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0f7ff',
100: '#e0f0ff',
200: '#b9ddfe',
300: '#7cc2fd',
400: '#36a6fa',
500: '#0c8de9', // Primary Brand Color
600: '#006ec7',
700: '#0158a3',
900: '#0b3e6f',
},
slate: {
850: '#151f2e', // Custom dark
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em'
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // --- Icons ---
        lucide.createIcons();

        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Loader Sequence
        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-bar", {
            width: "100%",
            duration: 1.2,
            ease: "power2.inOut"
        })
        .to("#loader", {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            delay: 0.1
        })
        .from(".hero-line", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.5")
        .to(".hero-text", {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .to(".hero-tag", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=1")
        .to(".hero-visual", {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");

        // Scroll Reveals for Roles
        document.querySelectorAll('.reveal-trigger').forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Marquee Animation
        gsap.to(".marquee-content", {
            xPercent: -100,
            repeat: -1,
            duration: 25,
            ease: "linear"
        });

        // --- Custom Cursor ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');

        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
            });

            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursorCircle.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            });

            const hoverTargets = document.querySelectorAll('a, button, .group, .cursor-hover');
            hoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="loader" id="loader" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0%, -100%) translate(0px, -5508px)'}}>
<div className="flex items-center gap-2 mb-4 text-slate-900">
<svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="font-display font-bold text-2xl tracking-tight">Telos Health</span>
</div>
<div className="loader-bar-bg">
<div className="loader-bar" id="loader-bar" style={{width: '100%'}}></div>
</div>
</div><div className="cursor-dot hidden md:block" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(1293px, 620px)'}}></div>
<div className="cursor-circle hidden md:block" style={{transform: 'translate(1273px, 600px)'}}></div>

<nav className="fixed top-6 left-0 w-full flex justify-center z-50 px-6 pointer-events-none">
<div className="pointer-events-auto glass-panel rounded-full p-2 pr-2 pl-6 flex items-center shadow-lg shadow-slate-200/50 transition-transform hover:scale-[1.01] duration-500">
<a className="flex items-center gap-2 mr-8 group" href="#">
<div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="font-display font-bold text-lg tracking-tight text-slate-800">Telos</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all" href="#platform">Platform</a>
<a className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all" href="#roles">For Teams</a>
<a className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all" href="#features">Innovation</a>
</div>
<div className="flex items-center gap-2 ml-4">
<button className="hidden md:block px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-brand-600 transition-colors">Log In</button>
<a className="bg-slate-900 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2 group" href="#contact">
<span>Get Access</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen w-full overflow-hidden pt-32 pb-20 md:pt-0 md:pb-0 hero-gradient">
<div className="grid lg:grid-cols-2 h-full min-h-screen w-full max-w-[1600px] mx-auto">

<div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 z-10">
<div className="overflow-hidden mb-6">
<div className="hero-tag opacity-0 translate-y-4 inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse"></span>
<span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide">Unified Platform v3.0</span>
</div>
</div>
<h1 className="font-display font-semibold text-[11vw] lg:text-[5vw] leading-[1] tracking-tighter text-slate-900 mb-8 text-balance">
<div className="overflow-hidden"><span className="block hero-line" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>One OS for the</span></div>
<div className="overflow-hidden"><span className="block hero-line" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>entire care</span></div>
<div className="overflow-hidden"><span className="block hero-line text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>continuum.</span></div>
</h1>
<p className="hero-text opacity-0 text-lg text-slate-500 font-light max-w-lg leading-relaxed mb-10 text-balance" style={{opacity: '1'}}>
                    Connect patients, physicians, nurses, and administrators in a single, intelligent ecosystem. Break down silos with the world's most advanced healthcare operating system.
                </p>
<div className="hero-text opacity-0 flex flex-wrap gap-4 items-center" style={{opacity: '1'}}>
<button className="px-8 py-4 bg-brand-600 text-white rounded-full font-medium text-sm transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/20 hover:-translate-y-0.5">
                        Start Modernizing
                    </button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium text-sm transition-all hover:bg-slate-50 hover:border-slate-300 flex items-center gap-2 group">
<svg aria-hidden="true" className="lucide lucide-play-circle w-4 h-4 text-brand-500 group-hover:scale-110 transition-transform" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        View Clinical Flow
                    </button>
</div>
</div>

<div className="relative h-[60vh] lg:h-full w-full flex items-center justify-center perspective-1000 hero-visual opacity-0 translate-x-10" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

<div className="relative z-20 w-80 h-80 rounded-full border border-brand-100 bg-white/30 backdrop-blur-md flex items-center justify-center animate-float shadow-2xl shadow-brand-100">
<div className="absolute inset-0 rounded-full border border-white/50"></div>

<div className="w-32 h-32 bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl shadow-lg shadow-brand-500/30 flex flex-col items-center justify-center text-white z-30 relative">
<svg aria-hidden="true" className="lucide lucide-layout-grid w-10 h-10 mb-2" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-xs font-bold tracking-widest uppercase">Core</span>

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-brand-500/50 to-transparent"></div>
<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-brand-500/50 to-transparent"></div>
<div className="absolute -left-24 top-1/2 -translate-y-1/2 h-[1px] w-24 bg-gradient-to-l from-brand-500/50 to-transparent"></div>
<div className="absolute -right-24 top-1/2 -translate-y-1/2 h-[1px] w-24 bg-gradient-to-r from-brand-500/50 to-transparent"></div>
</div>


<div className="absolute -top-6 left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm animate-float" style={{animationDelay: '1s'}}>
<div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><svg aria-hidden="true" className="lucide lucide-stethoscope w-3 h-3" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg></div>
<div className="text-xs font-semibold text-slate-700">MD View</div>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm animate-float" style={{animationDelay: '2s'}}>
<div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center text-green-600"><svg aria-hidden="true" className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
<div className="text-xs font-semibold text-slate-700">Patient Portal</div>
</div>

<div className="absolute top-1/2 -right-16 -translate-y-1/2 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm animate-float" style={{animationDelay: '1.5s'}}>
<div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600"><svg aria-hidden="true" className="lucide lucide-building-2 w-3 h-3" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg></div>
<div className="text-xs font-semibold text-slate-700">Admin</div>
</div>

<div className="absolute top-1/2 -left-16 -translate-y-1/2 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm animate-float" style={{animationDelay: '0.5s'}}>
<div className="w-6 h-6 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600"><svg aria-hidden="true" className="lucide lucide-heart-pulse w-3 h-3" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg></div>
<div className="text-xs font-semibold text-slate-700">Nursing</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-10 border-y border-slate-100 bg-white overflow-hidden relative z-20">
<p className="text-center font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-6">Powering the world's leading providers</p>
<div className="marquee-container flex whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="marquee-content flex gap-20 px-10 items-center font-display text-xl font-bold text-slate-900/30 select-none" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-78.996%, 0%) translate3d(-2243.39px, 0px, 0px)'}}>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-cross w-5 h-5" data-lucide="cross" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"></path></svg> Mayo Clinic</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Cleveland</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> Johns Hopkins</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-dna w-5 h-5" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg> Mass General</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-cross w-5 h-5" data-lucide="cross" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"></path></svg> Mayo Clinic</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Cleveland</span>
</div>
<div aria-hidden="true" className="marquee-content flex gap-20 px-10 items-center font-display text-xl font-bold text-slate-900/30 select-none" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-78.996%, 0%) translate3d(-2243.39px, 0px, 0px)'}}>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-cross w-5 h-5" data-lucide="cross" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"></path></svg> Mayo Clinic</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Cleveland</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> Johns Hopkins</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-dna w-5 h-5" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg> Mass General</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-cross w-5 h-5" data-lucide="cross" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"></path></svg> Mayo Clinic</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Cleveland</span>
</div>
</div>
</div>

<section className="py-32 px-6 md:px-12 lg:px-20 bg-white relative" id="platform">
<div className="max-w-[1400px] mx-auto">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-4 sticky top-32">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter mb-6 text-slate-900 leading-tight">
                        Fragmented <br/><span className="text-slate-300">healthcare</span> <br/>is broken.
                    </h2>
<div className="w-12 h-1 bg-brand-500 mb-8 rounded-full"></div>
<p className="text-slate-600 text-lg leading-relaxed mb-8 text-pretty">
                        Legacy systems force you to toggle between five different logins. Telos unifies every stakeholder into one synchronized timeline.
                    </p>
<div className="flex flex-col gap-4 border-t border-slate-100 pt-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-slate-700">Role-Based Access Control</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-slate-700">Real-time Data Sync</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-slate-700">HIPAA Compliant Core</span>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-24" id="roles">

<div className="group reveal-trigger flex flex-col md:flex-row gap-8 items-center" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-brand-50 rounded-3xl overflow-hidden relative shadow-lg border border-brand-100 group-hover:shadow-brand-500/10 transition-all duration-500">

<div className="absolute inset-4 bg-white rounded-xl shadow-sm p-4 flex flex-col">
<div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
</div>
<span className="text-[10px] font-bold text-brand-600 uppercase">Physician Mode</span>
</div>
<div className="space-y-3">
<div className="h-8 bg-slate-50 rounded w-3/4"></div>
<div className="h-24 bg-brand-50/50 rounded border border-brand-100 p-2">
<div className="h-2 w-1/3 bg-brand-200 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
<div className="flex gap-2">
<div className="h-16 flex-1 bg-slate-50 rounded"></div>
<div className="h-16 flex-1 bg-slate-50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center mb-4">
<svg aria-hidden="true" className="lucide lucide-stethoscope w-5 h-5" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<h3 className="font-display font-semibold text-2xl mb-3 text-slate-900">Physicians &amp; PAs</h3>
<p className="text-slate-500 leading-relaxed">
                                AI-assisted chart review and one-click ordering. Spend less time entering data and more time treating patients.
                            </p>
</div>
</div>

<div className="group reveal-trigger flex flex-col md:flex-row-reverse gap-8 items-center" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-rose-50 rounded-3xl overflow-hidden relative shadow-lg border border-rose-100 group-hover:shadow-rose-500/10 transition-all duration-500">

<div className="absolute inset-4 bg-white rounded-xl shadow-sm p-4 flex flex-col">
<div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
<span className="text-[10px] font-bold text-rose-600 uppercase">Nursing Dashboard</span>
</div>
<div className="space-y-2">
<div className="p-2 bg-rose-50/50 rounded flex justify-between items-center">
<span className="text-[10px] text-slate-600">Bed 402 - Vitals</span>
<span className="text-[10px] text-rose-500 font-bold">Due Now</span>
</div>
<div className="p-2 bg-slate-50 rounded flex justify-between items-center opacity-60">
<span className="text-[10px] text-slate-600">Bed 405 - Meds</span>
<span className="text-[10px] text-slate-400">10m</span>
</div>
<div className="p-2 bg-slate-50 rounded flex justify-between items-center opacity-60">
<span className="text-[10px] text-slate-600">Bed 401 - Check</span>
<span className="text-[10px] text-slate-400">15m</span>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
<svg aria-hidden="true" className="lucide lucide-heart-pulse w-5 h-5" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<h3 className="font-display font-semibold text-2xl mb-3 text-slate-900">Nurses &amp; Care Teams</h3>
<p className="text-slate-500 leading-relaxed">
                                Streamlined task lists, medication administration records, and shift handovers. Reduce burnout with smarter workflows.
                            </p>
</div>
</div>

<div className="group reveal-trigger flex flex-col md:flex-row gap-8 items-center" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-purple-50 rounded-3xl overflow-hidden relative shadow-lg border border-purple-100 group-hover:shadow-purple-500/10 transition-all duration-500">

<div className="absolute inset-4 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-end">
<div className="flex items-end gap-2 h-32 mb-2">
<div className="w-1/4 bg-purple-200 rounded-t h-[40%]"></div>
<div className="w-1/4 bg-purple-300 rounded-t h-[60%]"></div>
<div className="w-1/4 bg-purple-400 rounded-t h-[30%]"></div>
<div className="w-1/4 bg-purple-500 rounded-t h-[80%]"></div>
</div>
<span className="text-[10px] font-bold text-purple-600 uppercase text-center">Efficiency Metrics</span>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
<svg aria-hidden="true" className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="font-display font-semibold text-2xl mb-3 text-slate-900">Hospital Admins</h3>
<p className="text-slate-500 leading-relaxed">
                                Bird's-eye view of hospital occupancy, resource allocation, and billing cycles. Data-driven operational excellence.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-32 pr-6 pb-32 pl-6" id="features">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="font-mono text-xs text-brand-600 uppercase tracking-widest mb-4 block">The Telos Engine</span>
<h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tighter text-slate-900">Built for <span className="text-slate-300">Scale</span></h2>
</div>

<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-all text-slate-600">
<svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-brand-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[2rem] min-h-[350px] flex flex-col justify-between group hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 border border-slate-100">
<div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-network w-6 h-6" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<div className="">
<h3 className="font-display font-bold text-xl mb-2 text-slate-800">Universal Sync</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Connects seamlessly with Epic, Cerner, and Meditech. No data left behind.</p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-100 text-slate-400 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] min-h-[350px] flex flex-col justify-between group hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 md:col-span-2 relative overflow-hidden border border-slate-100">
<div className="absolute right-0 top-0 w-3/4 h-full bg-gradient-to-l from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
<svg aria-hidden="true" className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="max-w-md">
<h3 className="font-display font-bold text-xl mb-2 text-slate-800">Clinical Intelligence Engine</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Proprietary NLP models read pathology reports and correlate symptoms instantly, flagging risks before they escalate.
                            </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-100 text-slate-400 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>

<div className="absolute bottom-8 right-8 w-32 h-16 opacity-50">
<svg className="stroke-brand-200 w-full h-full" fill="none" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0 20 Q 25 5, 50 20 T 100 20"></path>
</svg>
</div>
</div>

<div className="bg-slate-850 p-8 rounded-[2rem] min-h-[350px] flex flex-col justify-between group hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-500 md:col-span-2 relative overflow-hidden text-white">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
<svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="max-w-md">
<h3 className="font-display font-bold text-xl mb-2">Zero-Trust Security</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Enterprise-grade encryption at rest and in transit. Fully HIPAA and SOC2 Type II compliant structure.
                            </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/50 group-hover:bg-white group-hover:text-slate-900 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] min-h-[350px] flex flex-col justify-between group hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 border border-slate-100">
<div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="font-display font-bold text-xl mb-2 text-slate-800">Instant Access</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">No loading spinners. Telos is engineered for sub-100ms response times globally.</p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-100 text-slate-400 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section><section className="bg-slate-900 py-32 px-6 overflow-hidden relative isolate">

<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-200 text-[11px] font-medium uppercase tracking-widest mb-8 shadow-inner shadow-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                    Operational Intelligence
                </div>
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter text-white mb-6 leading-[0.95]">
                    From data to 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-white">decisions.</span>
</h2>
<p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-xl text-balance">
                    30% of US hospitals operate with negative margins due to operational blind spots. Telos turns raw EHR logs into a roadmap for financial recovery.
                </p>

<div className="space-y-10 mb-12">

<div className="flex gap-6 group">
<span className="font-display font-bold text-5xl text-slate-800 group-hover:text-brand-500/50 transition-colors duration-500">1</span>
<div className="pt-2">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-brand-200 transition-colors">Connect Sources</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Link billing, staffing, and clinical data streams instantly. Our engine normalizes thousands of disparate data points in real-time.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<span className="font-display font-bold text-5xl text-slate-800 group-hover:text-brand-500/50 transition-colors duration-500">2</span>
<div className="pt-2">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-brand-200 transition-colors">Detect Patterns</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                AI models identify costly bottlenecks—from OR turnover delays to excessive length of stay—before they impact the bottom line.
                            </p>
</div>
</div>

<div className="flex gap-6 group">
<span className="font-display font-bold text-5xl text-slate-800 group-hover:text-brand-500/50 transition-colors duration-500">3</span>
<div className="pt-2">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-brand-200 transition-colors">Automate Action</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Trigger automatic staffing adjustments and discharge protocols. Close the loop between insight and execution.
                            </p>
</div>
</div>
</div>

<button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-sm hover:bg-brand-50 transition-all flex items-center gap-2 group">
                    Talk to us
                    <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative perspective-1000 group cursor-default">

<div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center transform transition-transform duration-700 hover:scale-[1.02]">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>

<div className="relative w-[340px] md:w-[420px] bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50 transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-all duration-700 ease-out">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
<svg aria-hidden="true" className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div>
<div className="text-white font-medium text-sm">Margin Recovery</div>
<div className="text-slate-400 text-xs">Monthly projection</div>
</div>
</div>
<span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">+12.5%</span>
</div>

<div className="flex items-end justify-between h-32 gap-3 mb-6 px-1">
<div className="w-full bg-slate-700/50 rounded-t-lg h-[40%] relative group-hover:h-[45%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-slate-700/50 rounded-t-lg h-[55%] relative group-hover:h-[60%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-slate-700/50 rounded-t-lg h-[45%] relative group-hover:h-[50%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-brand-500 rounded-t-lg h-[75%] relative shadow-[0_0_20px_rgba(12,141,233,0.3)] group-hover:h-[85%] transition-all duration-500">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    $2.4M Saved
                                </div>
</div>
</div>

<div className="flex gap-3 mt-2">
<div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
<div className="h-full bg-slate-600 w-2/3"></div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 md:-right-12 md:top-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 animate-float max-w-[260px] z-20">
<div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
<svg aria-hidden="true" className="lucide lucide-alert-triangle w-5 h-5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div>
<div className="text-[10px] font-bold uppercase tracking-wide text-slate-500 mb-0.5">Insight</div>
<div className="text-sm font-bold text-slate-900 leading-tight">LOS Anomaly detected</div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full border border-white/5 shadow-2xl flex items-center justify-center z-0">
<span className="text-2xl">⚡️</span>
</div>
</div>
</div>
</div>
</div>
</section><section className="md:px-12 lg:px-20 overflow-hidden bg-white pt-32 pr-6 pb-32 pl-6 relative" id="contact">
<div className="max-w-[1200px] mx-auto text-center relative z-10">
<h2 className="font-display font-bold text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-slate-900 mb-10">
                Ready to <br/> <span className="text-brand-500 hover:text-brand-600 transition-colors duration-500 cursor-default">Modernize?</span>
</h2>
<p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                Join the hospitals reclaiming thousands of clinical hours. Schedule a personalized demo for your role today.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/20 transition-all duration-300 w-full md:w-auto" href="#">
                    Request Demo
                </a>
<a className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-all duration-300 w-full md:w-auto" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>


<footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-2xl font-display tracking-tight" href="#">
<svg aria-hidden="true" className="lucide lucide-activity w-6 h-6 text-brand-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                        Telos
                    </a>
<p className="text-sm text-slate-500">Boston, MA <br/></p>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Platform</span>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">For Physicians</a>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">For Nurses</a>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">For Admins</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Company</span>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">About Us</a>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">Careers</a>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Legal</span>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">Privacy Policy</a>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">Terms of Service</a>
<a className="text-slate-600 hover:text-brand-600 transition-colors text-sm" href="#">HIPAA BAA</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
<p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">© 2025 Telos Health Inc.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
