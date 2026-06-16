import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Jost', 'sans-serif'],
mono: ['Jost', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#FF5A00',
bg: '#000000',
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 8s linear infinite',
'data-stream': 'dataStream 1s linear infinite',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
dataStream: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Setup Dynamic Rotating Hero Headlines
            const heroVariations = [
                { l1: "Your customers are satisfied.", l2: "So why are they leaving?" },
                { l1: "They buy your product.", l2: "But do they buy your brand?" },
                { l1: "Satisfaction is an outcome.", l2: "What drives the relationship?" }
            ];
            const pickedHero = heroVariations[Math.floor(Math.random() * heroVariations.length)];
            const heroLine1 = document.getElementById('hero-line-1');
            const heroLine2 = document.getElementById('hero-line-2');
            
            if (heroLine1 && heroLine2) {
                heroLine1.innerText = pickedHero.l1;
                heroLine2.innerText = pickedHero.l2;
            }

            // Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            
            if(mobileBtn && mobileMenu) {
                const toggleMenu = () => {
                    if(mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('flex');
                        setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                        document.body.style.overflow = 'hidden';
                    } else {
                        mobileMenu.classList.add('opacity-0');
                        setTimeout(() => {
                            mobileMenu.classList.add('hidden');
                            mobileMenu.classList.remove('flex');
                            document.body.style.overflow = '';
                        }, 300);
                    }
                };
                
                mobileBtn.addEventListener('click', toggleMenu);
                mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
            }

            // Hero Title Reveal Animation
            const tl = gsap.timeline({delay: 0.2});
            tl.to('.t-line', {y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out'})
              .to(['#telemetry-actions'], {opacity: 1, y: 0, duration: 0.8}, "-=0.3")
              .to(['#hero-desc'], {opacity: 1, y: 0, duration: 0.8}, "-=0.6");

            // Refined Parallax (Only Background Moves, Text Static)
            const viewport = document.getElementById('telemetry-viewport');
            const glow = document.getElementById('hero-glow');
            const bgElements = document.getElementById('parallax-bg');
            
            if(viewport && glow) {
                viewport.addEventListener('mouseenter', () => {
                    glow.style.opacity = '1';
                    if(bgElements) gsap.killTweensOf(bgElements); 
                });
                
                viewport.addEventListener('mouseleave', () => {
                    glow.style.opacity = '0';
                    if(bgElements) gsap.to(bgElements, { x: 0, y: 0, duration: 1, ease: "power2.out" });
                });
                
                viewport.addEventListener('mousemove', (e) => {
                    const rect = viewport.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Position 500x500 glow centrally to cursor
                    glow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;

                    // Deep Parallax applied ONLY to background container
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    if(bgElements) {
                        gsap.to(bgElements, {
                            x: ((x - centerX) / centerX) * -90, 
                            y: ((y - centerY) / centerY) * -90, 
                            duration: 1,
                            ease: "power2.out"
                        });
                    }
                });
            }

            // General Fade Ups
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

            // Animated Counters
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                let current = target - 0.5;
                setInterval(() => {
                    const jitter = (Math.random() - 0.5) * 0.02;
                    let val = current + jitter;
                    if (val > target) val = target;
                    if (val < target - 0.1) val = target - 0.1;
                    current = val;
                    counter.innerHTML = current.toFixed(1) + '<span class="text-2xl text-neutral-400">%</span>';
                }, 150);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)'}}>
<div className="absolute inset-0 bg-grid opacity-[0.15]"></div>
</div>
<div className="bg-gradient-mesh opacity-80"></div>

<nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 h-20 z-50 border-b border-white/[0.05] bg-black/60 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center">
<a href="#">
<img alt="Heart Share Logo" className="h-8 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80a7f0c4-d817-45dd-8b6f-fe13ccd9f565_320w.png"/>
</a>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-mono text-neutral-300">
<a className="hover:text-brand transition-colors duration-300" href="#capabilities">DELIVERABLES</a>
<a className="hover:text-brand transition-colors duration-300" href="#limits">LIMITS</a>
<a className="hover:text-brand transition-colors duration-300" href="#systems">SYSTEMS</a>
<a className="hover:text-brand transition-colors duration-300" href="#platform">PLATFORM</a>
<a className="hover:text-brand transition-colors duration-300" href="#how-it-works">PROCESS</a>
<a className="hover:text-brand transition-colors duration-300" href="#output">OUTPUT</a>
<a className="hover:text-brand transition-colors duration-300" href="#impact">IMPACT</a>
</div>
<div className="hidden md:flex items-center gap-4 group relative">
<button className="px-6 py-2.5 text-sm font-medium text-neutral-900 bg-white border border-white rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] flex items-center gap-2">
                Request a private introduction
                <iconify-icon height="1.2em" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</button>
</div>

<button className="md:hidden text-white text-3xl focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 hidden flex-col items-center justify-center gap-8 text-xl font-mono opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="text-neutral-300 hover:text-brand mobile-link" href="#capabilities">DELIVERABLES</a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#limits">LIMITS</a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#systems">SYSTEMS</a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#platform">PLATFORM</a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#how-it-works">PROCESS</a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#output">OUTPUT</a>
<a className="text-neutral-300 hover:text-brand mobile-link" href="#impact">IMPACT</a>
<button className="mt-8 px-8 py-4 text-base font-medium text-neutral-900 bg-white rounded-full">
            Request introduction
        </button>
</div>

<section className="overflow-hidden flex flex-col w-screen min-h-screen relative pt-20" id="hero">
<div className="w-full max-w-[1400px] mx-auto h-full flex flex-col relative border-x border-white/5 bg-[#030303] overflow-hidden" style={{background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.02) 0%, transparent 100%)'}}>
<div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-brand/30 z-50"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg></div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-brand/30 z-50"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg></div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-brand/30 z-50"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg></div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-brand/30 z-50"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg></div>
<div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-10 h-full">
<div className="relative flex-1 w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center min-h-[600px] pb-24 md:pb-12" id="telemetry-viewport" style={{background: 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%) border-box', border: '1px solid transparent'}}>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-screen" id="parallax-bg">
<div className="w-[60vw] max-w-[600px] aspect-square bg-blue-500/10 rounded-full blur-[120px] opacity-80"></div>
<div className="absolute w-[30vw] max-w-[300px] aspect-square bg-emerald-500/10 rounded-full blur-[80px] opacity-60 translate-y-10"></div>
</div>
<div className="absolute w-[500px] h-[500px] bg-brand/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen transition-opacity duration-300 opacity-0 z-10" id="hero-glow"></div>
<main className="relative z-40 flex-1 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto mt-16">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.05]" style={{textShadow: '0 4px 40px rgba(0,0,0,0.5)'}}>
<div className="overflow-hidden pb-1"><span className="t-line block translate-y-full opacity-0" id="hero-line-1">Your customers are satisfied.</span></div>
<div className="overflow-hidden pb-1"><span className="t-line block translate-y-full opacity-0 text-neutral-400" id="hero-line-2">So why are they leaving?</span></div>
</h1>
<div className="overflow-hidden pb-1 mt-2">
<p className="t-line block translate-y-full opacity-0 text-lg md:text-xl text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed">
                                Customer relationships are complex, layered, and often misunderstood, but they are essential for businesses. The bond between customers and brands is what truly drives your business.
                            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:max-w-md opacity-0 mt-10 relative z-50" id="telemetry-actions">
<button className="w-full px-8 py-4 rounded-xl bg-white text-black font-medium text-base hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,90,0,0.3)] flex items-center justify-center gap-2.5">
                                Request a private introduction
                            </button>
<button className="w-full px-8 py-4 rounded-xl bg-neutral-900/40 text-white font-normal text-base hover:bg-neutral-800 transition-all hover:border-brand/30 backdrop-blur-md flex items-center justify-center gap-2.5" style={{background: 'linear-gradient(rgba(20,20,20,0.4), rgba(20,20,20,0.4)) padding-box, linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%) border-box', border: '1px solid transparent'}}>
                                Join waitlist
                            </button>
</div>

<div className="opacity-0 translate-y-8 mt-12 max-w-3xl mx-auto p-6 md:p-8 rounded-[1.5rem] bg-[#050505] border border-brand/20 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(255,90,0,0.08)]" id="hero-desc">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-brand/20 blur-[60px] pointer-events-none"></div>
<p className="text-neutral-200 font-normal text-lg md:text-xl leading-relaxed relative z-10">
                                Heart Share is a strategic platform with a proprietary algorithm and agentic AI teams that measures and strengthens the relationship between brands and their customers.
                            </p>
</div>
</main>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#000] z-10 pt-24 px-6 pb-24 relative" id="capabilities">
<div className="max-w-7xl mx-auto border-t border-white/10 pt-24">
<div className="flex flex-col items-start text-left fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                        DELIVERABLES
                    </span>
</div>
<h2 className="md:text-6xl text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    What Heart Share Delivers
                </h2>
<p className="text-xl text-neutral-300 font-normal mb-16">Understanding relationships. Structuring decisions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative group fade-up h-full" style={{perspective: '1200px'}}>
<div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-10 rounded-3xl bg-black border border-emerald-500/20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-emerald-500/40 group-hover:shadow-[-30px_30px_50px_rgba(0,0,0,0.8)] bg-[#050505] z-10 h-full flex flex-col group-hover:[transform:translateZ(20px)]">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 rounded-xl bg-black border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-500 shadow-inner">
<iconify-icon className="text-emerald-400" height="1.5em" icon="solar:graph-up-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed flex-1 tracking-tight">
                                A clear <span className="font-semibold text-white">measure of emotional loyalty</span>, through our <span className="font-semibold text-white">Heart Share Index™</span>.
                            </p>
</div>
</div>
</div>

<div className="relative group fade-up h-full md:mt-12" style={{perspective: '1200px', transitionDelay: '100ms'}}>
<div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-10 rounded-3xl bg-black border border-blue-500/20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-blue-500/40 group-hover:shadow-[-30px_30px_50px_rgba(0,0,0,0.8)] bg-[#050505] z-10 h-full flex flex-col group-hover:[transform:translateZ(20px)]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-black border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-400 transition-all duration-500 shadow-inner">
<iconify-icon className="text-blue-400" height="1.5em" icon="solar:structure-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed flex-1 relative z-10 tracking-tight">
                                A structured <span className="font-semibold text-white">assessment of the organization’s ability to act</span>, through our <span className="font-semibold text-white">Organizational Readiness</span>.
                            </p>
</div>
</div>
</div>

<div className="relative group fade-up h-full md:mt-24" style={{perspective: '1200px', transitionDelay: '200ms'}}>
<div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-10 rounded-3xl bg-black border border-brand/20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-brand/40 group-hover:shadow-[-30px_30px_50px_rgba(0,0,0,0.8)] bg-[#050505] z-10 h-full flex flex-col group-hover:[transform:translateZ(20px)]">
<div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-black border border-brand/30 flex items-center justify-center group-hover:scale-110 group-hover:border-brand transition-all duration-500 shadow-inner">
<iconify-icon className="text-brand" height="1.5em" icon="solar:document-text-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed flex-1 relative z-10 tracking-tight">
                                A <span className="font-semibold text-white">comprehensive report</span> translating insights into strategic priorities and suggested action areas.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col min-h-screen select-none text-white bg-[#000] border-white/10 border-t py-24 relative justify-center" id="limits">
<div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20">
<div className="relative flex flex-col items-start text-left fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                        THE LIMITS OF TRADITIONAL METRICS
                    </span>
</div>
<h2 className="md:text-6xl text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    What most companies measure is not enough
                </h2>
<div className="text-lg text-neutral-300 font-normal leading-relaxed space-y-4 max-w-xl">
<p>Most organizations rely on satisfaction, NPS, and behavioral data to guide decisions.</p>
<p>These metrics describe what customers do, but not why they stay, leave, or advocate.</p>
<p>Satisfaction captures an outcome.<br/>Behavior captures a signal.<br/>But neither captures the relationship.</p>
<p className="text-white font-medium border-l-2 border-brand/50 pl-4 mt-6">Loyalty is not transactional.<br/>It is built on emotional connection.</p>
</div>
</div>

<div className="relative w-full aspect-square flex items-center justify-center scale-[0.72] md:scale-100 fade-up">
<div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-[60px] opacity-80 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-white/20 border-solid rounded-full pointer-events-none" style={{animation: 'radar-pull-anim 4s cubic-bezier(0.5, 0, 0.8, 1) infinite', animationDelay: '0s'}}></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-white/20 border-solid rounded-full pointer-events-none" style={{animation: 'radar-pull-anim 4s cubic-bezier(0.5, 0, 0.8, 1) infinite', animationDelay: '1.33s'}}></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-white/20 border-solid rounded-full pointer-events-none" style={{animation: 'radar-pull-anim 4s cubic-bezier(0.5, 0, 0.8, 1) infinite', animationDelay: '2.66s'}}></div>
<div className="absolute top-1/2 left-1/2 z-30 pointer-events-none" style={{animation: 'core-pulse-anim 2s ease-in-out infinite'}}>
<div className="absolute inset-0 rounded-full bg-brand/30 opacity-20 blur-xl animate-pulse"></div>
<div className="relative w-20 h-20 bg-white text-brand rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.9),inset_0_0_20px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:-inset-4 before:border before:border-dashed before:border-brand/40 before:rounded-full before:animate-[spin_6s_linear_infinite]">
<iconify-icon className="animate-pulse" height="1.875em" icon="solar:heart-bold" width="1.875em"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 left-1/2 p-3 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-1.5 w-32 z-20" style={{-Tx: '-180px', -Ty: '-180px', -Rot: '15deg', animation: 'gravity-well-anim 4.8s cubic-bezier(0.5, 0, 0.8, 1) infinite both', animationDelay: '0.2s'}}>
<div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
<div className="h-1.5 w-3/4 bg-brand/60 rounded"></div>
<div className="h-1.5 w-2/3 bg-white/20 rounded"></div>
</div>
<div className="absolute top-1/2 left-1/2 p-3 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 z-20" style={{-Tx: '180px', -Ty: '180px', -Rot: '-10deg', animation: 'gravity-well-anim 4.8s cubic-bezier(0.5, 0, 0.8, 1) infinite both', animationDelay: '1.4s'}}>
<div className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_rgba(255,90,0,0.5)]"></div>
<span className="text-xs font-mono text-white">Metrics</span>
</div>
<div className="absolute top-1/2 left-1/2 p-3 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-24 z-20" style={{-Tx: '-80px', -Ty: '220px', -Rot: '20deg', animation: 'gravity-well-anim 4.8s cubic-bezier(0.5, 0, 0.8, 1) infinite both', animationDelay: '3.4s'}}>
<div className="w-full h-1 bg-white/10 rounded-full relative">
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-brand rounded-full shadow-[0_0_8px_rgba(255,90,0,0.6)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#000] z-10 py-32 px-6 relative border-t border-white/10" id="systems">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-start text-left mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                        THE SYSTEM
                    </span>
</div>
<h2 className="md:text-6xl text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    One Platform, Two Proprietary Systems
                </h2>
<p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl">
                    The Heart Share platform combines two proprietary tools: one to measure relationship strength, and one to assess the organization’s ability to act on it.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up items-stretch">

<div className="p-10 rounded-[2rem] bg-[#050505] border border-emerald-500/30 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-full">
<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="relative z-10 flex-1 flex flex-col">
<iconify-icon className="text-emerald-400 mb-6" height="2em" icon="solar:chart-2-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Heart Share Index™</h3>
<p className="text-emerald-400 font-medium text-lg mb-6 leading-relaxed">
                            Assessment is the foundation of every strong relationship.
                        </p>
<div className="space-y-4 text-base md:text-lg text-neutral-300 font-normal leading-relaxed flex-1">
<p>It measures the strength of customer relationships across six emotional dimensions.</p>
<p>It captures not only what customers do, but how they feel, perceive, and connect.</p>
<p>It provides benchmarking, gap identification, and a clear view of relationship quality over time.</p>
</div>
</div>
</div>

<div className="p-10 rounded-[2rem] bg-[#050505] border border-blue-500/30 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full">
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
<div className="relative z-10 flex-1 flex flex-col">
<iconify-icon className="text-blue-400 mb-6" height="2em" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Organizational Readiness</h3>
<p className="text-blue-400 font-medium text-lg mb-6 leading-relaxed">
                            Insight only matters when the organization can act on it.
                        </p>
<div className="space-y-4 text-base md:text-lg text-neutral-300 font-normal leading-relaxed flex-1">
<p>It evaluates how effectively a company can translate relationship insight into action.</p>
<p>It examines capabilities, alignment, processes, governance, and data readiness.</p>
<p>It reveals what enables execution and what silently blocks it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden group bg-[#000] border-white/10 border-t py-32 relative" id="platform">
<div className="flex flex-col items-center justify-center fade-up relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                    PLATFORM
                </span>
</div>
</div>
<div className="flex flex-col items-center justify-center fade-up">
<div className="relative w-full overflow-hidden mb-24 flex items-center opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
<div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
<h2 className="text-7xl md:text-[10rem] font-semibold uppercase tracking-tighter text-white mx-8">THE PLATFORM</h2>
<h2 className="text-7xl md:text-[10rem] font-semibold uppercase tracking-tighter text-transparent mx-8" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>THE PLATFORM</h2>
<h2 className="text-7xl md:text-[10rem] font-semibold uppercase tracking-tighter text-white mx-8">THE PLATFORM</h2>
<h2 className="text-7xl md:text-[10rem] font-semibold uppercase tracking-tighter text-transparent mx-8" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>THE PLATFORM</h2>
</div>
</div>
<div className="w-full max-w-6xl mx-auto -mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 relative z-10">

<a className="group/proj block relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl bg-[#050505] p-2 hover:scale-[1.02]" href="#">
<div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-neutral-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 to-transparent opacity-80 group-hover/proj:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay"></div>
<iconify-icon className="text-emerald-400/30 group-hover/proj:scale-110 group-hover/proj:text-emerald-400/50 transition-all duration-700" height="8em" icon="solar:heart-angle-linear" strokeWidth="1.5" width="8em"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10">
<div className="translate-y-4 group-hover/proj:translate-y-0 transition-transform duration-500 flex justify-between items-end">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-emerald-400">Heart Share Index™</h3>
<iconify-icon className="text-emerald-400 opacity-0 group-hover/proj:opacity-100 transition-opacity duration-500" height="2em" icon="solar:arrow-right-up-linear" width="2em"></iconify-icon>
</div>
</div>
</div>
</a>
<a className="group/proj block relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 shadow-2xl md:mt-24 bg-[#050505] p-2 hover:scale-[1.02]" href="#">
<div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-neutral-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent opacity-80 group-hover/proj:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay"></div>
<iconify-icon className="text-blue-400/30 group-hover/proj:scale-110 group-hover/proj:text-blue-400/50 transition-all duration-700" height="8em" icon="solar:buildings-linear" strokeWidth="1.5" width="8em"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10">
<div className="translate-y-4 group-hover/proj:translate-y-0 transition-transform duration-500 flex justify-between items-end">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-blue-400">Organizational Readiness</h3>
<iconify-icon className="text-blue-400 opacity-0 group-hover/proj:opacity-100 transition-opacity duration-500" height="2em" icon="solar:arrow-right-up-linear" width="2em"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#000] border-t border-white/10 py-32 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start text-left mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                        PROCESS
                    </span>
</div>
<h2 className="md:text-6xl text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    How It Works
                </h2>
<p className="text-lg md:text-xl text-neutral-300 font-normal max-w-3xl leading-relaxed">
                    Every organization already has the data. What’s missing is a way to interpret, structure it and integrate it with what consumers actually say and think.
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none z-10"></div>
<span className="text-4xl font-light text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">01</span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="w-3 h-3 bg-brand rounded-full relative z-10 shadow-[0_0_15px_rgba(255,90,0,0.8)]"></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{-Tx: '-50px', -Ty: '-50px', animationDelay: '0s'}}></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{-Tx: '50px', -Ty: '-50px', animationDelay: '0.6s'}}></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{-Tx: '-50px', -Ty: '50px', animationDelay: '1.2s'}}></div>
<div className="absolute w-2 h-2 bg-white/50 rounded-full anim-converge" style={{-Tx: '50px', -Ty: '50px', animationDelay: '1.8s'}}></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:archive-down-minimlistic-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white">Capture</h3>
</div>
<p className="text-base text-neutral-300 font-normal leading-relaxed">
                            We integrate data across customer touchpoints, systems, and interactions, into a unique set of scores.
                        </p>
</div>
</div>

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-grid-small opacity-[0.06] pointer-events-none z-10"></div>
<span className="text-4xl font-light text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">02</span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-20 h-20 border border-dashed border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
<div className="absolute inset-x-0 h-[2px] bg-brand shadow-[0_0_15px_rgba(255,90,0,1)] anim-scan"></div>
<div className="w-8 h-8 rounded-full border border-white/20 bg-white/5"></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:code-scan-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white">Decode</h3>
</div>
<p className="text-base text-neutral-300 font-normal leading-relaxed">
                            AI identifies patterns and the emotional drivers behind behavior.
                        </p>
</div>
</div>

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-gradient-to-tr from-brand/[0.02] to-transparent pointer-events-none"></div>
<span className="text-4xl font-light text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">03</span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-24 h-24 flex items-end justify-between gap-2.5 pb-4">
<div className="w-full bg-white/20 rounded-t-sm anim-bar-pulse" style={{-H: '40%', animationDelay: '0s'}}></div>
<div className="w-full bg-brand/80 rounded-t-sm anim-bar-pulse shadow-[0_0_15px_rgba(255,90,0,0.6)]" style={{-H: '90%', animationDelay: '-1s'}}></div>
<div className="w-full bg-white/20 rounded-t-sm anim-bar-pulse" style={{-H: '60%', animationDelay: '-0.5s'}}></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:calculator-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white">Quantify</h3>
</div>
<p className="text-base text-neutral-300 font-normal leading-relaxed">
                            The Index translates complexity into a clear, structured measure of relationship strength.
                        </p>
</div>
</div>

<div className="schema-card-enhanced rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-xl h-auto min-h-[360px]">
<div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none"></div>
<span className="text-4xl font-light text-white/[0.05] absolute top-6 right-6 tracking-tighter font-mono group-hover:text-brand/10 transition-colors z-10">04</span>

<div className="h-32 w-full flex items-center justify-center relative z-10 mb-6 scale-90 border-b border-white/[0.05]">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="w-3 h-3 bg-brand rounded-full relative z-10 shadow-[0_0_15px_rgba(255,90,0,0.8)]"></div>
<div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-brand/60 to-transparent anim-radiate" style={{transform: 'rotate(0deg)', transformOrigin: 'left', left: '50%', animationDelay: '0s'}}></div>
<div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-brand/60 to-transparent anim-radiate" style={{transform: 'rotate(-45deg)', transformOrigin: 'left', left: '50%', animationDelay: '0.6s'}}></div>
<div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-brand/60 to-transparent anim-radiate" style={{transform: 'rotate(45deg)', transformOrigin: 'left', left: '50%', animationDelay: '1.2s'}}></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" height="1.4em" icon="solar:lightbulb-linear" width="1.4em"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white">Activate</h3>
</div>
<p className="text-base text-neutral-300 font-normal leading-relaxed">
                            Insights are translated into priorities, decisions, and concrete actions.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 py-32 relative bg-[#000] border-t border-white/10" id="output">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start text-left mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                        OUTPUT
                    </span>
</div>
<h2 className="md:text-6xl text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    The Report
                </h2>
<div className="text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mb-6">
<p>All findings are consolidated into a structured report designed for decision-making.</p>
<p>Not a dashboard.</p>
<p>Not a collection of data.</p>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">A strategic, clear, shared plan.</h3>
<p className="text-base text-neutral-400 font-normal">The report provides:</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px] fade-up">

<div className="col-span-1 md:col-span-2 row-span-2 p-10 rounded-[2rem] bg-[#050505] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 shadow-xl">
<div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none group-hover:opacity-[0.15] transition-opacity"></div>
<div className="h-full flex flex-col justify-between relative z-10 chart-placeholder">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors" height="2em" icon="solar:document-add-linear" strokeWidth="1.5" width="2em"></iconify-icon>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] h-36 flex items-end justify-between gap-1.5 opacity-60 mix-blend-screen group-hover:opacity-100 transition-opacity">
<div className="w-full bg-white/10 border border-white/20 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{-H: '70%', animationDelay: '0s'}}><div className="absolute top-0 inset-x-0 h-[2px] bg-emerald-400"></div></div>
<div className="w-full bg-white/5 border border-white/10 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{-H: '95%', animationDelay: '-0.5s'}}><div className="absolute top-0 inset-x-0 h-[2px] bg-white"></div></div>
<div className="w-full bg-brand/20 border border-brand/30 relative overflow-hidden anim-bar-pulse rounded-t-sm shadow-[0_0_20px_rgba(255,90,0,0.2)]" style={{-H: '80%', animationDelay: '-1s'}}><div className="absolute top-0 inset-x-0 h-[2px] bg-brand"></div></div>
<div className="w-full bg-white/10 border border-white/20 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{-H: '45%', animationDelay: '-1.5s'}}><div className="absolute top-0 inset-x-0 h-[2px] bg-white"></div></div>
<div className="w-full bg-white/5 border border-white/10 relative overflow-hidden anim-bar-pulse rounded-t-sm" style={{-H: '85%', animationDelay: '-2s'}}><div className="absolute top-0 inset-x-0 h-[2px] bg-blue-400"></div></div>
</div>
<div className="mt-auto">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-snug">
                                A complete analysis of the <span className="text-emerald-400 font-semibold drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Heart Share Index™</span> assessment
                            </h3>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-2 p-10 rounded-[2rem] bg-[#050505] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors" height="2em" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<div className="relative w-full h-40 flex flex-col items-center justify-center my-auto chart-placeholder">
<div className="w-28 h-28 border border-white/20 bg-black/80 backdrop-blur-md absolute layer-float-1 flex items-center justify-center text-sm text-white/50 group-hover:border-blue-500/40 transition-colors rounded-xl" style={{animation: 'floatLayer 4s ease-in-out infinite'}}>L3</div>
<div className="w-28 h-28 border border-white/10 bg-white/5 absolute layer-float-2 mt-10 flex items-center justify-center text-sm text-white/30 group-hover:border-brand/20 transition-colors rounded-xl" style={{animation: 'floatLayer 4s ease-in-out infinite 0.5s'}}>L2</div>
<div className="w-28 h-28 border border-white/5 bg-white/[0.02] absolute layer-float-3 mt-20 flex items-center justify-center text-sm text-white/10 rounded-xl" style={{animation: 'floatLayer 4s ease-in-out infinite 1s'}}>L1</div>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mt-auto">
<span className="text-blue-400 font-semibold drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">Organizational Readiness</span> assessment
                    </h3>
</div>

<div className="col-span-1 row-span-1 p-10 rounded-[2rem] bg-[#050505] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
<div className="flex justify-between items-start">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors" height="2em" icon="solar:target-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<div className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_10px_rgba(255,90,0,0.8)]"></div>
</div>
<div>
<div className="text-5xl font-semibold text-white tracking-tighter mb-3 font-mono counter" data-target="73.6">
                            73.6<span className="text-2xl">%</span>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-300">
                            Key strengths and critical gaps
                        </h3>
</div>
</div>

<div className="col-span-1 row-span-1 p-10 rounded-[2rem] bg-[#050505] border border-white/10 relative overflow-hidden group hover:border-brand/30 transition-all duration-500 flex flex-col justify-between shadow-xl">
<iconify-icon className="text-neutral-500 group-hover:text-brand transition-colors mb-auto" height="2em" icon="solar:route-linear" strokeWidth="1.5" width="2em"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white leading-snug mt-6">
                        Clear, prioritized strategic approach and recommended actions
                    </h3>
</div>
</div>

<div className="mt-16 text-left text-neutral-300 font-normal text-lg md:text-xl leading-relaxed max-w-4xl fade-up">
<p className="mb-4">Workshops and interviews with the company teams build an aligned and shared plan, immediately actionable and ready for top management presentation.</p>
<p>It aligns teams, clarifies priorities, and creates direction.</p>
</div>
</div>
</section>

<section className="bg-[#000] border-t border-white/10 py-32 relative overflow-hidden" id="impact">
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
<header className="mb-20 flex flex-col items-center text-center w-full fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-mono uppercase tracking-[0.22em] text-white/90">
                        IMPACT
                    </span>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white w-full max-w-4xl leading-[1.1]">
                    What changes when relationships become measurable
                </h2>
<p className="mt-8 text-lg md:text-xl text-neutral-300 max-w-2xl font-normal">
                    When companies understand the true nature of the relationship with their customers:
                </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full fade-up">
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-700/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-neutral-950/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-neutral-800/50 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-normal tracking-tight transition-transform duration-500 group-hover:-translate-y-4">Retention becomes <span className="font-semibold text-white">more predictable</span></p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                            Identify relationship fractures well before they result in actual churn.
                        </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-700/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-neutral-950/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-neutral-800/50 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-normal tracking-tight transition-transform duration-500 group-hover:-translate-y-4">Advocacy becomes a <span className="font-semibold text-white">growth driver</span></p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                            Turn satisfied, silent buyers into vocal and highly engaged brand champions.
                        </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-700/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-neutral-950/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-neutral-800/50 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-normal tracking-tight transition-transform duration-500 group-hover:-translate-y-4">Marketing becomes <span className="font-semibold text-white">more efficient</span></p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                            Target profound emotional triggers rather than just surface-level demographic profiles.
                        </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-700/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-neutral-950/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-neutral-800/50 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-normal tracking-tight transition-transform duration-500 group-hover:-translate-y-4">Investments become <span className="font-semibold text-white">more focused</span></p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                            Allocate key resources only to initiatives that actively strengthen the customer bond.
                        </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-700/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-neutral-950/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-neutral-800/50 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-normal tracking-tight transition-transform duration-500 group-hover:-translate-y-4">Teams align around a <span className="font-semibold text-white">shared understanding</span></p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                            Break down internal silos using a unified, measurable metric for relationship success.
                        </p>
</div>
</div>
<div className="p-[1px] rounded-[1.25rem] bg-gradient-to-b from-neutral-700/30 to-transparent group hover:from-brand/40 transition-colors duration-500 cursor-pointer h-[180px]">
<div className="bg-neutral-950/90 h-full w-full rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-neutral-800/50 group-hover:border-brand/30 transition-all duration-500 relative overflow-hidden">
<p className="text-xl text-neutral-300 font-normal tracking-tight transition-transform duration-500 group-hover:-translate-y-4">Strategy becomes <span className="font-semibold text-white">easier to execute</span></p>
<p className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-base text-neutral-400 px-4 leading-snug">
                            Move from reactive problem-solving directly to proactive relationship building.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="flex flex-col w-full bg-[#000]">

<div className="overflow-hidden w-full border-white/10 border-t py-32 relative">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/[0.05] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 font-mono typewriter-text">
                    &gt; Rising Beyond Loyalty
                </h2>
<p className="text-neutral-300 max-w-2xl font-normal leading-relaxed mb-12 text-lg md:text-xl">
                    We structure how organizations understand and grow the bond with their customers, bringing visibility to what was previously invisible, and direction to what was previously uncertain.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full sm:w-auto">
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-base font-medium text-black bg-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,90,0,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                            Request a private introduction
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="1.2em" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</span>
</button>
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-brand/40 backdrop-blur-sm">
<span className="relative z-10 flex items-center gap-2 text-neutral-300 group-hover:text-white transition-colors">
                            Join waitlist
                        </span>
</button>
</div>
<p className="text-sm text-neutral-400 font-normal">
                    A tailored walkthrough of the Heart Share system and its application to your business.
                </p>
</div>
</div>

<div className="overflow-hidden bg-[#050505] w-full border-white/5 border-t pt-16 pb-12 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col w-full">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 pb-16 border-b border-white/10 w-full">
<div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col items-start gap-4">
<img alt="Heart Share Logo" className="h-8 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80a7f0c4-d817-45dd-8b6f-fe13ccd9f565_320w.png"/>
<p className="text-base text-neutral-400 max-w-md font-normal leading-relaxed mt-4">
                            Heart Share is a strategic platform that measures and strengthens the relationship between brands and their customers. It transforms data into clarity, and clarity into action.
                            <br/><br/>A product by Rising Partners.
                        </p>
</div>
<div className="col-span-1 flex flex-col gap-4">
<h4 className="text-sm font-mono font-medium text-white uppercase tracking-widest mb-2">Contacts</h4>
<p className="text-base text-neutral-400 font-normal leading-relaxed">
                            ROMA - MILANO<br/>
                            via Principessa Clotilde 5, 00192 (RM)<br/>
                            info@theheartshare.com
                        </p>
</div>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></div>
<span className="text-sm font-mono text-neutral-300 uppercase tracking-widest">All systems nominal</span>
</div>
<div className="flex gap-6 text-sm font-mono text-neutral-400 uppercase">
<a className="hover:text-brand transition-colors duration-300 flex items-center gap-1.5" href="#">
                                LinkedIn
                            </a>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-500 font-mono uppercase tracking-widest">
<span>© 2026 Heart Share.</span>
<span className="px-2 py-0.5 border border-white/10 rounded text-neutral-400">v4.0.0</span>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
