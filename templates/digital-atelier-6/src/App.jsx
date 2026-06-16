import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover, a, button, input, textarea');

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // 1. Hero Animation
        const heroTl = gsap.timeline();

        // Reveal Line
        heroTl.to(".hero-line", {
            width: "100%",
            duration: 1.5,
            ease: "power4.inOut"
        })
        // Reveal Hero Text
        .to(".reveal-text", {
            y: "0%",
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=1")
        // Fade in description and nav
        .to([".hero-desc", ".hero-btn", ".nav-container"], {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=1");

        // 2. Project Card Parallax & Reveals
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
            // Text Reveal
            gsap.to(project.querySelector('.reveal-element'), {
                scrollTrigger: {
                    trigger: project,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });

            // Image Parallax Effect
            gsap.fromTo(project.querySelector('.project-img'), 
                { y: "-15%" },
                {
                    y: "15%",
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    },
                    ease: "none"
                }
            );
        });

        // 3. Services Grid Staggered Reveal
        const services = document.querySelectorAll('.service-card');
        ScrollTrigger.batch(services, {
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            }),
            start: "top 90%"
        });

        // 4. Methodology Line & Grid
        gsap.to(".method-line", {
            scrollTrigger: {
                trigger: ".method-line",
                start: "top 90%"
            },
            width: "100%",
            duration: 1.5,
            ease: "power3.inOut"
        });

        gsap.to(".method-card", {
            scrollTrigger: {
                trigger: ".method-grid",
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });

        // 5. Footer Reveal
        const footerTl = gsap.timeline({
            scrollTrigger: {
                trigger: "footer",
                start: "top 70%"
            }
        });

        footerTl.to(".reveal-footer-text", {
            y: "0%",
            stagger: 0.1,
            duration: 1,
            ease: "power4.out"
        })
        .to(".reveal-footer-fade", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5");

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor"></div>
<div className="noise-bg"></div>
<div className="fixed inset-0 z-0 grid-bg pointer-events-none opacity-50"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference nav-container opacity-0">
<div className="flex justify-between items-start">
<a className="cursor-hover text-xl font-semibold tracking-tighter text-white uppercase leading-none" href="#">
                Cabo<br/><span className="text-xs font-light opacity-50 tracking-widest">Agency</span>
</a>
<div className="hidden md:flex flex-col items-end gap-1">
<span className="text-[10px] uppercase tracking-widest text-white/50">Local Time</span>
<span className="text-xs font-mono text-white">10:42 PM — MA</span>
</div>
<button className="cursor-hover group flex items-center gap-3 text-white">
<span className="text-xs uppercase tracking-widest font-medium hidden md:block group-hover:mr-2 transition-all">Menu</span>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="solar:hamburger-menu-linear" width="16"></iconify-icon>
</div>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 z-10 pt-40">
<div className="max-w-[1800px] mx-auto w-full">
<div className="w-full h-[1px] bg-white/20 mb-8 line-reveal origin-left hero-line"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-8">
<h1 className="text-display font-medium text-white mb-8">
<span className="reveal-text-container"><span className="reveal-text">DIGITAL</span></span>
<span className="reveal-text-container"><span className="reveal-text text-white/30 italic font-serif">AESTHETICS.</span></span>
</h1>
</div>
<div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end">
<div className="overflow-hidden">
<p className="hero-desc opacity-0 translate-y-4 text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md text-left lg:text-right mb-12">
                            We are a design atelier based in Cabo Negro. We reject the template. We engineer digital scarcity for brands that refuse to blend in.
                        </p>
</div>
<a className="cursor-hover opacity-0 hero-btn inline-flex items-center justify-center w-32 h-32 rounded-full border border-white/20 hover:border-white transition-all duration-500 group relative overflow-hidden backdrop-blur-sm" href="#work">
<div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]"></div>
<div className="relative z-10 flex flex-col items-center gap-1 mix-blend-difference text-white group-hover:text-black transition-colors">
<span className="text-[10px] uppercase tracking-widest">Explore</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-white/10 py-6 overflow-hidden bg-white/[0.02]">
<div className="flex whitespace-nowrap gap-16 animate-marquee items-center text-xs md:text-sm font-mono text-white/40 uppercase tracking-widest">
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> No Templates</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> Pure Code</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> Radical Design</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> Moroccan Soul</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> Global Standard</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> No Templates</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> Pure Code</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-linear"></iconify-icon> Radical Design</span>
</div>
</div>

<section className="px-0 py-0 z-10 relative" id="work">

<div className="group project-card relative border-b border-white/10 transition-colors hover:bg-white/[0.02]">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[40vh] md:min-h-[50vh]">
<div className="md:col-span-6 lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-white/10">
<div className="reveal-element opacity-0 translate-y-8">
<span className="text-xs font-mono text-white/40 mb-6 block">001 — 2023</span>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">Maison <span className="font-serif italic text-white/50">Noire</span></h2>
<p className="text-white/50 font-light max-w-sm mb-8 leading-relaxed">
                            A brutalist e-commerce experience for a luxury Moroccan fashion house. Minimalist interface with maximum visual impact.
                        </p>
<div className="flex gap-4">
<span className="px-3 py-1 text-[10px] border border-white/20 rounded-full uppercase tracking-wider text-white/70">Strategy</span>
<span className="px-3 py-1 text-[10px] border border-white/20 rounded-full uppercase tracking-wider text-white/70">Design</span>
</div>
</div>
</div>
<div className="md:col-span-6 lg:col-span-7 relative project-img-container h-64 md:h-auto cursor-hover">
<img alt="Fashion Project" className="project-img absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group project-card relative border-b border-white/10 transition-colors hover:bg-white/[0.02]">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[40vh] md:min-h-[50vh]">
<div className="md:col-span-6 lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-white/10 order-1 md:order-2 md:border-l md:border-r-0">
<div className="reveal-element opacity-0 translate-y-8">
<span className="text-xs font-mono text-white/40 mb-6 block">002 — 2024</span>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">Oasis <span className="font-serif italic text-white/50">Ventures</span></h2>
<p className="text-white/50 font-light max-w-sm mb-8 leading-relaxed">
                            Identity and digital platform for a VC firm investing in African tech. Data visualization meets art direction.
                        </p>
<div className="flex gap-4">
<span className="px-3 py-1 text-[10px] border border-white/20 rounded-full uppercase tracking-wider text-white/70">Identity</span>
<span className="px-3 py-1 text-[10px] border border-white/20 rounded-full uppercase tracking-wider text-white/70">Development</span>
</div>
</div>
</div>
<div className="md:col-span-6 lg:col-span-7 relative project-img-container h-64 md:h-auto order-2 md:order-1 cursor-hover">
<img alt="Architecture Project" className="project-img absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group project-card relative border-b border-white/10 transition-colors hover:bg-white/[0.02]">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[40vh] md:min-h-[50vh]">
<div className="md:col-span-6 lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-white/10">
<div className="reveal-element opacity-0 translate-y-8">
<span className="text-xs font-mono text-white/40 mb-6 block">003 — 2023</span>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">Tangier <span className="font-serif italic text-white/50">Film</span></h2>
<p className="text-white/50 font-light max-w-sm mb-8 leading-relaxed">
                            Festival website pushing WebGL boundaries. Immersive, dark, and cinematic user experience.
                        </p>
<div className="flex gap-4">
<span className="px-3 py-1 text-[10px] border border-white/20 rounded-full uppercase tracking-wider text-white/70">WebGL</span>
<span className="px-3 py-1 text-[10px] border border-white/20 rounded-full uppercase tracking-wider text-white/70">Motion</span>
</div>
</div>
</div>
<div className="md:col-span-6 lg:col-span-7 relative project-img-container h-64 md:h-auto cursor-hover">
<img alt="Film Project" className="project-img absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 z-10 relative">
<div className="max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 section-header">
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight reveal-text-container"><span className="reveal-text">Capabilities</span></h3>
<p className="text-white/40 max-w-sm text-sm leading-relaxed opacity-0 translate-y-4 reveal-fade">We don't offer a menu. We offer solutions to complex digital problems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 services-grid">

<div className="service-card p-8 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors min-h-[300px] flex flex-col justify-between opacity-0 translate-y-8 cursor-hover">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors group-hover:scale-110 duration-300" icon="solar:devices-linear" width="32"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-white mb-4">Digital Product</h4>
<ul className="space-y-2 text-sm text-white/40">
<li>UI/UX Design</li>
<li>Web Applications</li>
<li>Mobile Apps</li>
<li>Design Systems</li>
</ul>
</div>
</div>

<div className="service-card p-8 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors min-h-[300px] flex flex-col justify-between opacity-0 translate-y-8 cursor-hover">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors group-hover:scale-110 duration-300" icon="solar:code-circle-linear" width="32"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-white mb-4">Development</h4>
<ul className="space-y-2 text-sm text-white/40">
<li>Front-end (React/Vue)</li>
<li>Creative Coding</li>
<li>Headless CMS</li>
<li>Performance Optimization</li>
</ul>
</div>
</div>

<div className="service-card p-8 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors min-h-[300px] flex flex-col justify-between opacity-0 translate-y-8 cursor-hover">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors group-hover:scale-110 duration-300" icon="solar:filters-linear" width="32"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-white mb-4">Brand Strategy</h4>
<ul className="space-y-2 text-sm text-white/40">
<li>Visual Identity</li>
<li>Art Direction</li>
<li>Tone of Voice</li>
<li>Brand Guidelines</li>
</ul>
</div>
</div>

<div className="service-card p-8 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors min-h-[300px] flex flex-col justify-between opacity-0 translate-y-8 cursor-hover">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors group-hover:scale-110 duration-300" icon="solar:chart-2-linear" width="32"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-white mb-4">Growth</h4>
<ul className="space-y-2 text-sm text-white/40">
<li>Conversion Rate (CRO)</li>
<li>Technical SEO</li>
<li>Analytics</li>
<li>User Testing</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 z-10 relative">
<div className="max-w-[1800px] mx-auto">
<div className="w-full h-[1px] bg-white/10 mb-20 line-reveal method-line"></div>
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-20 reveal-text-container"><span className="reveal-text">The Method</span></h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-white/10 method-grid">

<div className="method-card group border-r border-b md:border-b-0 border-white/10 p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden opacity-0 translate-y-8 cursor-hover">
<span className="text-6xl md:text-8xl font-thin text-white/10 absolute -right-4 -top-4 group-hover:text-white/20 transition-colors group-hover:scale-110 duration-500">01</span>
<div className="relative z-10 h-full flex flex-col justify-end pt-24">
<h4 className="text-xl text-white font-medium mb-4">Audit &amp; Discover</h4>
<p className="text-white/40 text-sm leading-relaxed">
                            We deconstruct your current digital presence. We identify the noise and locate the signal. This is where we find the edge.
                        </p>
</div>
</div>

<div className="method-card group border-r border-b md:border-b-0 border-white/10 p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden opacity-0 translate-y-8 cursor-hover">
<span className="text-6xl md:text-8xl font-thin text-white/10 absolute -right-4 -top-4 group-hover:text-white/20 transition-colors group-hover:scale-110 duration-500">02</span>
<div className="relative z-10 h-full flex flex-col justify-end pt-24">
<h4 className="text-xl text-white font-medium mb-4">Craft &amp; Code</h4>
<p className="text-white/40 text-sm leading-relaxed">
                            Design that ignores trends. Code that performs. We build robust systems that scale, ensuring pixel-perfection across all viewports.
                        </p>
</div>
</div>

<div className="method-card group border-r border-white/10 p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden opacity-0 translate-y-8 cursor-hover">
<span className="text-6xl md:text-8xl font-thin text-white/10 absolute -right-4 -top-4 group-hover:text-white/20 transition-colors group-hover:scale-110 duration-500">03</span>
<div className="relative z-10 h-full flex flex-col justify-end pt-24">
<h4 className="text-xl text-white font-medium mb-4">Deploy &amp; Scale</h4>
<p className="text-white/40 text-sm leading-relaxed">
                            Launch is just the beginning. We monitor, iterate, and refine based on real data, driving growth through technical excellence.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative px-6 md:px-12 pt-32 pb-12 bg-white text-black z-20">
<div className="max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
<div className="space-y-8">
<h2 className="text-display tracking-tighter leading-[0.8]">
<span className="block overflow-hidden"><span className="block reveal-footer-text">LET'S</span></span>
<span className="block overflow-hidden"><span className="block reveal-footer-text">TALK.</span></span>
</h2>
<p className="text-lg text-black/60 max-w-md reveal-footer-fade opacity-0 translate-y-4">
                        Have a project in mind? We are currently accepting new commissions for Q4 2023.
                    </p>
<a className="cursor-hover inline-block text-xl font-medium border-b border-black/20 pb-1 hover:border-black transition-colors reveal-footer-fade opacity-0 translate-y-4" href="mailto:hello@cabo.agency">hello@cabo.agency</a>
</div>
<form className="space-y-8 pt-4 reveal-footer-fade opacity-0 translate-y-8">
<div className="space-y-1 group">
<label className="text-xs uppercase tracking-widest text-black/40 group-focus-within:text-black transition-colors">Name</label>
<input className="cursor-hover w-full bg-transparent border-b border-black/10 py-4 text-xl placeholder-black/20 focus:outline-none focus:border-black transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1 group">
<label className="text-xs uppercase tracking-widest text-black/40 group-focus-within:text-black transition-colors">Email</label>
<input className="cursor-hover w-full bg-transparent border-b border-black/10 py-4 text-xl placeholder-black/20 focus:outline-none focus:border-black transition-colors" placeholder="Your email" type="email"/>
</div>
<div className="space-y-1 group">
<label className="text-xs uppercase tracking-widest text-black/40 group-focus-within:text-black transition-colors">Message</label>
<textarea className="cursor-hover w-full bg-transparent border-b border-black/10 py-4 text-xl placeholder-black/20 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Tell us about the project" rows="1"></textarea>
</div>
<button className="cursor-hover px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-colors flex items-center gap-2 text-sm font-medium group">
                        Submit Inquiry
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-8 gap-6 reveal-footer-fade opacity-0">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-black/40">Location</span>
<span className="text-sm font-medium">Cabo Negro, Morocco</span>
</div>
<div className="flex gap-6">
<a className="cursor-hover text-sm text-black/40 hover:text-black transition-colors hover-underline-animation" href="#">Instagram</a>
<a className="cursor-hover text-sm text-black/40 hover:text-black transition-colors hover-underline-animation" href="#">LinkedIn</a>
<a className="cursor-hover text-sm text-black/40 hover:text-black transition-colors hover-underline-animation" href="#">Twitter</a>
</div>
<p className="text-[10px] uppercase tracking-widest text-black/40">© 2023 Cabo Agency.</p>
</div>
</div>
</footer>



    </>
  );
}
