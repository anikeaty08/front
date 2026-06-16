import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Initial Hero Animation
        const tl = gsap.timeline();

        tl.to(".nav-container", {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        })
        .to(".hero-glow", {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
        }, "-=0.5")
        .to(".hero-element", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=1");

        // Logos Reveal
        gsap.from(".logo-wall span", {
            scrollTrigger: {
                trigger: ".logo-wall",
                start: "top 90%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Section Titles Reveal
        gsap.utils.toArray(".section-title, .section-desc").forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Services Stagger
        gsap.to(".service-card", {
            scrollTrigger: {
                trigger: "#services",
                start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Projects Stagger
        gsap.utils.toArray(".project-card").forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Stats Counter Animation
        gsap.utils.toArray(".stat-item").forEach((stat) => {
            gsap.to(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: "top 85%",
                },
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
            
            const counter = stat.querySelector(".counter");
            const target = parseInt(counter.getAttribute("data-target"));
            const suffix = target === 4 ? "yr" : (target === 100 ? "%" : (target === 50 ? "+" : ""));
            
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: stat,
                    start: "top 85%",
                },
                innerText: target,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: "power2.out",
                onUpdate: function() {
                    counter.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
                }
            });
        });

        // Process Items
        gsap.to(".process-item", {
            scrollTrigger: {
                trigger: "#process",
                start: "top 70%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });

        // CTA Form
        gsap.to(".cta-form", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 70%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-all duration-300 nav-container opacity-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-sm"></div>
                PEAK.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                Start Project
                <iconify-icon className="text-sm" icon="lucide:arrow-right"></iconify-icon>
</a>

<button className="md:hidden text-zinc-400">
<iconify-icon className="text-xl" icon="lucide:menu"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">

<div className="absolute inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10 hero-glow opacity-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="hero-element opacity-0 translate-y-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="hero-element opacity-0 translate-y-8 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1] text-glow">
                Digital products <br/>
<span className="text-zinc-500">built for scale.</span>
</h1>
<p className="hero-element opacity-0 translate-y-4 text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-light mb-10">
                We craft high-performance websites and applications that define brands and drive growth. Precision engineering meets timeless design.
            </p>
<div className="hero-element opacity-0 translate-y-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Book a consultation
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2 group" href="#work">
                    View work
                    <iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-12 border-b border-white/5 bg-zinc-950/30">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8 fade-up">Trusted by innovators</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale logo-wall">
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">KINETIC</span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white">BOLT.AI</span>
<span className="text-xl font-semibold tracking-tighter text-white">FOCAL</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="services">
<div className="mb-16">
<h2 className="section-title text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Comprehensive expertise.</h2>
<p className="section-desc text-zinc-400 text-lg font-light max-w-lg">We bridge the gap between design and engineering to deliver complete digital solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="service-card opacity-0 translate-y-8 group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="lucide:pen-tool"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Product Design</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    User-centric interfaces and experience design. We build systems that are consistent, beautiful, and intuitive.
                </p>
</div>

<div className="service-card opacity-0 translate-y-8 group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="lucide:code-2"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Development</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Full-stack engineering using modern frameworks. Fast, accessible, and scalable code architecture.
                </p>
</div>

<div className="service-card opacity-0 translate-y-8 group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="lucide:bar-chart-3"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Growth &amp; Strategy</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Data-driven insights to position your product in the market. SEO, analytics, and conversion optimization.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="section-title text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Selected work.</h2>
<p className="section-desc text-zinc-400 text-lg font-light">Showcasing our finest digital craftsmanship.</p>
</div>
<a className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors self-start md:self-end fade-in-link" href="#">View all projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="project-card opacity-0 translate-y-12 group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-zinc-950 rounded border border-white/5 shadow-2xl flex flex-col p-4 opacity-80 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-500">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="w-full h-24 bg-zinc-800/50 rounded mb-2"></div>
<div className="flex gap-2">
<div className="w-1/3 h-20 bg-zinc-800/50 rounded"></div>
<div className="w-2/3 h-20 bg-zinc-800/50 rounded"></div>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-indigo-400 transition-colors">FinanceFlow App</h3>
<p className="text-zinc-500 text-sm">Fintech • Product Design</p>
</div>

<div className="project-card opacity-0 translate-y-12 group cursor-pointer md:mt-16">
<div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center relative">
<div className="w-48 h-48 border border-white/20 rounded-full absolute animate-[spin_10s_linear_infinite]"></div>
<div className="w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-indigo-400 transition-colors">Chronos AI</h3>
<p className="text-zinc-500 text-sm">Artificial Intelligence • Branding</p>
</div>

<div className="project-card opacity-0 translate-y-12 group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="w-full h-full grid grid-cols-2 gap-4">
<div className="bg-zinc-950/80 border border-white/5 rounded-lg"></div>
<div className="bg-zinc-950/80 border border-white/5 rounded-lg translate-y-4"></div>
<div className="bg-zinc-950/80 border border-white/5 rounded-lg -translate-y-4"></div>
<div className="bg-zinc-950/80 border border-white/5 rounded-lg"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-indigo-400 transition-colors">Estate Architecture</h3>
<p className="text-zinc-500 text-sm">Real Estate • Web Development</p>
</div>

<div className="project-card opacity-0 translate-y-12 group cursor-pointer md:mt-16">
<div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-8xl font-bold text-white/5 tracking-tighter select-none">TYPE</div>
</div>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 group-hover:text-indigo-400 transition-colors">Mono Type Foundry</h3>
<p className="text-zinc-500 text-sm">E-Commerce • Strategy</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="stat-item opacity-0 border-l border-white/10 pl-6">
<div className="text-4xl font-medium text-white mb-1 tracking-tight counter" data-target="50">0</div>
<div className="text-sm text-zinc-500">Projects Shipped</div>
</div>
<div className="stat-item opacity-0 border-l border-white/10 pl-6">
<div className="text-4xl font-medium text-white mb-1 tracking-tight counter" data-target="12">0</div>
<div className="text-sm text-zinc-500">Design Awards</div>
</div>
<div className="stat-item opacity-0 border-l border-white/10 pl-6">
<div className="text-4xl font-medium text-white mb-1 tracking-tight counter" data-target="4">0</div>
<div className="text-sm text-zinc-500">Years Active</div>
</div>
<div className="stat-item opacity-0 border-l border-white/10 pl-6">
<div className="text-4xl font-medium text-white mb-1 tracking-tight counter" data-target="100">0</div>
<div className="text-sm text-zinc-500">Client Satisfaction</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="process">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="section-title text-3xl font-medium text-white tracking-tight mb-4">How we operate.</h2>
<p className="section-desc text-zinc-400 font-light">Transparent, iterative, and collaborative.</p>
</div>
<div className="space-y-4">
<details className="process-item opacity-0 translate-y-4 group bg-zinc-950 border border-white/5 rounded-xl open:border-white/10 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none">
<span className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-xs text-zinc-400 group-open:bg-indigo-600 group-open:text-white group-open:border-indigo-500 transition-colors">01</span>
                            Discovery &amp; Strategy
                        </span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed pl-[4.5rem]">
                        We begin by understanding your business goals, target audience, and market position to build a solid foundation for the project.
                    </div>
</details>
<details className="process-item opacity-0 translate-y-4 group bg-zinc-950 border border-white/5 rounded-xl open:border-white/10 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none">
<span className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-xs text-zinc-400 group-open:bg-indigo-600 group-open:text-white group-open:border-indigo-500 transition-colors">02</span>
                            Design &amp; Prototyping
                        </span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed pl-[4.5rem]">
                        We visualize the solution through high-fidelity designs and interactive prototypes, ensuring alignment before code is written.
                    </div>
</details>
<details className="process-item opacity-0 translate-y-4 group bg-zinc-950 border border-white/5 rounded-xl open:border-white/10 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none">
<span className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900 flex items-center justify-center text-xs text-zinc-400 group-open:bg-indigo-600 group-open:text-white group-open:border-indigo-500 transition-colors">03</span>
                            Development &amp; Launch
                        </span>
<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed pl-[4.5rem]">
                        Our engineers build your product using the latest technologies, followed by rigorous testing and a smooth deployment.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<h2 className="section-title text-5xl md:text-6xl font-medium text-white tracking-tight mb-8">Ready to peak?</h2>
<p className="section-desc text-xl text-zinc-400 font-light mb-10 max-w-lg mx-auto">Let's turn your vision into a digital reality. Reach out to start the conversation.</p>
<form className="cta-form opacity-0 translate-y-4 max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-zinc-500" icon="lucide:mail"></iconify-icon>
<input className="w-full bg-zinc-950 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm" id="email" placeholder="enter your email" type="email"/>
</div>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-zinc-200 transition-colors" type="submit">
                    Get in touch
                </button>
</form>
<p className="mt-6 text-xs text-zinc-600">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-zinc-950">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-white rounded-sm"></div>
<span className="font-medium tracking-tight text-white">PEAK.</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs">
                        A digital product studio crafting the future of web and mobile experiences.
                    </p>
</div>
<div className="flex gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2023 PeakDigital Studio. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
