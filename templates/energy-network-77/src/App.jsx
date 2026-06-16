import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Initialize Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Setup
        gsap.registerPlugin(ScrollTrigger);

        // Update ScrollTrigger on Lenis scroll
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0, 0);

        // --- Animations ---

        // Custom Easing
        const customEase = "power4.out";

        // Scene 1: Hero Enter
        const tlHero = gsap.timeline({ delay: 0.2 });
        
        tlHero.to(".hero-sub", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 1,
            ease: customEase
        })
        .to(".hero-title-line", {
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: customEase,
            color: (i, target) => i === 0 ? "white" : "rgb(113, 113, 122)" // animate second line to zinc-500
        }, "-=0.6")
        .to(".hero-desc", {
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")
        .to(".hero-scroll", {
            opacity: 1,
            y: -10,
            duration: 1,
            ease: customEase
        }, "-=0.5");


        // Scene 2/3: Emergence
        const emergenceTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scene-emergence",
                start: "top 70%",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        emergenceTl.fromTo(".emergence-img-main", 
            { y: 100, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: customEase }
        )
        .fromTo(".emergence-img-small",
            { y: 0, opacity: 0 },
            { y: -80, opacity: 1, duration: 1.2, ease: customEase },
            "-=1.2"
        )
        .fromTo(".emergence-text > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: customEase },
            "-=1"
        )
        .fromTo(".emergence-ui",
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.5"
        );

        // Big Text Reveal
        gsap.from(".reveal-text", {
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: customEase
        });

        // Scene 4: Ecosystem Cards
        const ecoTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scene-ecosystem",
                start: "top 75%",
            }
        });

        ecoTl.fromTo(".ecosystem-header > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: customEase }
        )
        .fromTo(".module-card",
            { y: 100, opacity: 0 },
            { y: (i) => i === 1 ? 48 : 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: customEase }, // Keeps middle card translated
            "-=0.6"
        );

        // Card 3D Tilt Effect
        const cards = document.querySelectorAll('.module-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5deg
                const rotateY = ((x - centerX) / centerX) * 5;

                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    ease: "power1.out",
                    duration: 0.4
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: "power3.out",
                    duration: 0.8
                });
            });
        });

        // Scene 5: Scale Cinematic
        const scaleTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scene-scale",
                start: "top 60%",
            }
        });

        scaleTl.fromTo(".scale-img-wrapper",
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(".scale-content > *",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: customEase },
            "-=1.5"
        )
        .fromTo(".scale-stats > div",
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: customEase },
            "-=1.2"
        );

        // Global Parallax for all images
        gsap.utils.toArray('.parallax-img').forEach(img => {
            gsap.to(img, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.03)_0%,rgba(0,0,0,0)_70%)] blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92vw] max-w-6xl rounded-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 flex justify-between items-center py-3 px-6 z-50">
<button className="text-zinc-400 hover:text-white transition-colors duration-300 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-wide uppercase hidden md:block">System</span>
</button>
<div className="absolute left-1/2 -translate-x-1/2 text-white">
<i className="w-6 h-6 text-[#00e5ff] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<button className="text-sm font-medium tracking-wide flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
<span className="hidden md:block">Initialize</span>
<i className="w-4 h-4 text-[#00e5ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</nav>
<main className="relative z-10 w-full flex flex-col items-center">

<section className="h-[100vh] w-full flex flex-col justify-center items-center relative overflow-hidden px-6" id="scene-hero">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="text-center z-10 flex flex-col items-center">
<div className="overflow-hidden mb-4">
<p className="hero-sub text-sm tracking-widest text-[#00e5ff] font-medium uppercase clip-text-reveal">System Online</p>
</div>
<h1 className="font-normal text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter text-white glow-text mb-6">
<div className="overflow-hidden"><span className="block hero-title-line translate-y-full">INVISIBLE</span></div>
<div className="overflow-hidden"><span className="block hero-title-line translate-y-full text-zinc-500">INFRASTRUCTURE</span></div>
</h1>
<div className="overflow-hidden max-w-xl">
<p className="hero-desc text-xl md:text-2xl text-zinc-400 font-light translate-y-full">
                        Powering the movement of tomorrow through a connected, intelligent energy network.
                    </p>
</div>
</div>

<div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-0 hero-scroll text-zinc-500">
<span className="text-xs uppercase tracking-widest font-medium">Scroll to route</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>
</section>


<section className="w-full max-w-7xl px-6 py-[20vh] relative" id="scene-emergence">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-3 lg:col-start-1 hidden lg:block img-container h-[40vh] rounded-2xl border border-white/5 overflow-hidden transform -translate-y-20 emergence-img-small">

<img alt="Data Flow" className="parallax-img opacity-60 mix-blend-screen grayscale-[50%] sepia-[20%] hue-rotate-[180deg]" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10"></div>
</div>

<div className="col-span-1 lg:col-span-6 img-container h-[60vh] md:h-[80vh] rounded-3xl border border-white/10 overflow-hidden relative emergence-img-main">

<img alt="EV Infrastructure" className="parallax-img opacity-80 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-black/40 z-10"></div>

<div className="absolute bottom-8 left-8 z-20 flex flex-col gap-2 emergence-ui">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></div>
<span className="text-xs font-medium tracking-wider uppercase text-zinc-300">Node Active</span>
</div>
<p className="text-white text-xl font-medium tracking-tight">Sector 7G Distributing</p>
</div>
</div>

<div className="col-span-1 lg:col-span-3 lg:pl-8 flex flex-col justify-center emergence-text">
<i className="w-6 h-6 text-[#00e5ff] mb-6 opacity-80" data-lucide="cpu" strokeWidth="1.5"></i>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">
                        The system exists in reality.
                    </h2>
<p className="text-xl text-zinc-400 font-light mb-8">
                        We don't just build chargers. We lay down the intelligent grid that allows electric mobility to scale invisibly.
                    </p>
<a className="group flex items-center gap-3 text-sm font-medium text-white tracking-wide uppercase border-b border-white/20 pb-1 w-max hover:border-[#00e5ff] transition-colors" href="#">
                        Explore Hardware
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00e5ff]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="w-full py-[15vh] px-6 flex justify-center items-center text-center">
<h2 className="max-w-4xl text-4xl md:text-5xl lg:text-[4vw] font-normal tracking-tighter text-white leading-[1.1] reveal-text">
                Intelligent energy routing,<br/> <span className="text-zinc-600">happening millions of times a second.</span>
</h2>
</section>

<section className="w-full max-w-7xl px-6 py-[15vh] relative" id="scene-ecosystem">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 ecosystem-header">
<div>
<h3 className="text-xs font-medium tracking-widest text-[#00e5ff] uppercase mb-4">Architecture</h3>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white">Full Stack Mobility</h2>
</div>
<p className="text-xl text-zinc-400 font-light max-w-sm md:text-right mt-6 md:mt-0">
                    A unified ecosystem combining physical nodes and software intelligence.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="module-card group relative bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 overflow-hidden hover:bg-[#111] transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full min-h-[40vh] justify-between">
<i className="w-8 h-8 text-zinc-500 group-hover:text-[#00e5ff] transition-colors duration-500" data-lucide="battery-charging" strokeWidth="1.5"></i>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Hardware Nodes</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">Robust, scalable charging points acting as the physical touchpoints of the grid.</p>
</div>
</div>
</div>

<div className="module-card group relative bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 overflow-hidden hover:bg-[#111] transition-colors duration-500 md:translate-y-12">
<div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full min-h-[40vh] justify-between">
<i className="w-8 h-8 text-zinc-500 group-hover:text-[#00ff88] transition-colors duration-500" data-lucide="layers" strokeWidth="1.5"></i>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Software Layer</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">The central nervous system managing load, routing power, and processing transactions.</p>
</div>
</div>
</div>

<div className="module-card group relative bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 overflow-hidden hover:bg-[#111] transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full min-h-[40vh] justify-between">
<i className="w-8 h-8 text-zinc-500 group-hover:text-[#00e5ff] transition-colors duration-500" data-lucide="network" strokeWidth="1.5"></i>
<div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Network Core</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">Cloud infrastructure ensuring 99.9% uptime and infinite geographical scalability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full mt-[10vh] relative h-screen flex items-center justify-center overflow-hidden" id="scene-scale">

<div className="absolute inset-0 z-0 img-container scale-img-wrapper">
<img alt="City at night" className="parallax-img opacity-40 mix-blend-lighten sepia-[30%] hue-rotate-[180deg]" src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-[10vh]">

<div className="scale-content">
<h2 className="text-5xl md:text-6xl lg:text-[6vw] font-normal tracking-tighter text-white leading-[0.9] mb-8">
                        Scale without<br/>limits.
                    </h2>
<button className="group bg-white text-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#00e5ff] transition-colors duration-300">
                        Join the Network
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="md:justify-self-end flex flex-col gap-6 scale-stats">
<div className="border-l-2 border-[#00e5ff]/50 pl-4">
<p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-1">Active Nodes</p>
<p className="text-3xl font-light text-white tracking-tight">124,592<span className="text-[#00e5ff]">+</span></p>
</div>
<div className="border-l-2 border-[#00e5ff]/50 pl-4">
<p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-1">Energy Routed</p>
<p className="text-3xl font-light text-white tracking-tight">8.4 GWh</p>
</div>
<div className="border-l-2 border-[#00e5ff]/50 pl-4">
<p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-1">System Uptime</p>
<p className="text-3xl font-light text-white tracking-tight">99.99%</p>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl px-6 py-8 border-t border-white/5 flex justify-between items-center z-10 relative bg-[#030303]">
<div className="flex items-center gap-2 text-zinc-500 text-sm">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
<span>Bolt.Earth © 2024</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-[#00e5ff] transition-colors" href="#">System Status</a>
</div>
</footer>
</main>


    </>
  );
}
