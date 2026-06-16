import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        gsap.registerPlugin(ScrollTrigger);

        // --- LENIS SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- LOAD SEQUENCE ---
        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1, ease: 'power2.inOut' })
              .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut', delay: 0.2 });

        function initSite() {
            // Hero Text Reveal
            gsap.to('.hero-text span', { 
                y: 0, 
                duration: 1.5, 
                ease: 'power4.out',
                delay: 0.2
            });
            gsap.to('.hero-text-stroke span', { 
                y: 0, 
                duration: 1.5, 
                ease: 'power4.out',
                delay: 0.3
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.8 });
            
            // Parallax Hero
            gsap.to('.hero-img', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Section Headers Reveal
            gsap.utils.toArray('h2').forEach(header => {
                gsap.from(header, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: header,
                        start: "top 90%"
                    }
                });
            });

            // Directory Stagger
            gsap.from('.directory-item', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.directory-grid',
                    start: 'top 80%'
                }
            });

            // Process Stagger
            gsap.from('#process .grid > div', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#process',
                    start: 'top 70%'
                }
            });

            // Footer Reveal Logic
            ScrollTrigger.create({
                trigger: '.wrapper',
                start: 'bottom bottom',
                end: '+=100%',
                onEnter: () => gsap.to('.footer-sticky', { zIndex: 0 }),
                onLeaveBack: () => gsap.to('.footer-sticky', { zIndex: 1 })
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader">
<div className="display text-4xl tracking-tighter">ARK.</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-50 text-white mix-blend-difference">
<div className="display text-xl tracking-tighter">ARK</div>
<div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-semibold">
<a className="hover:opacity-70 transition-opacity" href="#about">Studio</a>
<a className="hover:opacity-70 transition-opacity" href="#directory">Services</a>
<a className="hover:opacity-70 transition-opacity" href="#process">Process</a>
<a className="hover:opacity-70 transition-opacity" href="#contact">Contact</a>
</div>
<a className="md:hidden text-xs uppercase tracking-widest border border-white/30 px-4 py-2" href="#contact">Contact</a>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden bg-[#111]">

<div className="absolute inset-0 w-full h-full">
<img alt="ARK Architecture" className="w-full h-full object-cover opacity-60 grayscale hero-img" src="https://arkarchitectural.com/wp-content/uploads/2017/01/16Res01_SchemeDesign-3D-View-Prop_Ext-Rear-SE-Pers-02.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 w-full px-6 md:px-12">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col items-start gap-0">

<h1 className="display text-[13vw] leading-[0.85] text-white tracking-tight hero-text overflow-hidden drop-shadow-2xl">
<span className="block translate-y-full">STRATEGIC</span>
</h1>
<h1 className="display text-[13vw] leading-[0.85] hero-text-stroke tracking-tight overflow-hidden text-right w-full opacity-90">
<span className="block translate-y-full">PLANNING</span>
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 mt-16 border-t border-white/20 pt-8 opacity-0 hero-fade">
<div className="text-xs md:text-sm text-white/80 font-mono uppercase tracking-widest max-w-md">
                            Architectural Design &amp; Planning Consultants <br/>
                            Cardiff &amp; South Wales
                        </div>
<div className="flex md:justify-end gap-12 mt-8 md:mt-0 text-white/80">
<div className="text-xs uppercase tracking-widest">
<span className="block opacity-40 mb-1">Established</span>
                                2014
                            </div>
<div className="text-xs uppercase tracking-widest">
<span className="block opacity-40 mb-1">Projects</span>
                                Residential / Commercial
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto bg-[var(--c-bg)]" id="about">

<div className="mb-24 flex flex-col md:flex-row justify-between items-start border-b border-black/10 pb-8">
<h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">01 / The Studio</h2>
<div className="mt-4 md:mt-0 text-sm font-semibold uppercase tracking-wide">Reg No. 9492725</div>
</div>
<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-7">
<h3 className="display text-4xl md:text-6xl leading-[1.1] mb-12 tracking-tight text-[var(--c-dark)]">
                        We are a design-led practice committed to providing a professional, friendly service.
                    </h3>
<div className="space-y-8 text-lg md:text-xl font-light text-gray-700 leading-relaxed max-w-2xl">
<p>
                            Based in Cardiff, ARK Architectural Services specializes in maximizing the potential of your property. Whether it's a domestic extension, loft conversion, or a new build development, we navigate the complexities of the UK planning system so you don't have to.
                        </p>
<p>
                            We believe that good design adds value. Our approach combines technical precision with creative problem solving, ensuring every square meter acts as an asset to your lifestyle and investment.
                        </p>
</div>
<div className="mt-16 flex gap-4">
<span className="px-4 py-2 border border-black/20 rounded-full text-xs uppercase tracking-widest">Feasibility</span>
<span className="px-4 py-2 border border-black/20 rounded-full text-xs uppercase tracking-widest">Planning</span>
<span className="px-4 py-2 border border-black/20 rounded-full text-xs uppercase tracking-widest">Technical</span>
</div>
</div>

<div className="md:col-span-5 md:pl-12 border-l border-black/10 h-full flex flex-col justify-between">
<div className="grid grid-cols-2 gap-y-12">
<div>
<iconify-icon className="mb-4 text-[var(--c-accent)]" icon="solar:city-linear" width="32"></iconify-icon>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Local Expertise</h4>
<p className="text-sm text-gray-500 font-light">Deep knowledge of Welsh planning policy and local authority requirements.</p>
</div>
<div>
<iconify-icon className="mb-4 text-[var(--c-accent)]" icon="solar:ruler-angular-linear" width="32"></iconify-icon>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Technical Rigour</h4>
<p className="text-sm text-gray-500 font-light">Detailed Building Regulations packages that ensure constructability.</p>
</div>
<div>
<iconify-icon className="mb-4 text-[var(--c-accent)]" icon="solar:home-smile-linear" width="32"></iconify-icon>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Client Focused</h4>
<p className="text-sm text-gray-500 font-light">Tailored solutions for homeowners, developers, and businesses.</p>
</div>
<div>
<iconify-icon className="mb-4 text-[var(--c-accent)]" icon="solar:check-circle-linear" width="32"></iconify-icon>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Proven Track Record</h4>
<p className="text-sm text-gray-500 font-light">Successful approvals across Cardiff and South Wales.</p>
</div>
</div>
<div className="mt-12 pt-12 border-t border-black/10">
<a className="group flex items-center justify-between w-full text-left" href="#directory">
<span className="display text-xl">Explore Services</span>
<div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[var(--c-bg)] pb-32" id="directory">
<div className="px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="mb-8 pb-4 border-b border-black/10">
<h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">02 / Expertise</h2>
</div>
<div className="directory-grid">

<div className="directory-item group cursor-pointer" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<div className="flex justify-between items-start">
<h4 className="display text-2xl md:text-3xl tracking-tight">Planning Applications</h4>
<iconify-icon className="text-gray-400 group-hover:text-[var(--c-accent)] transition-colors" icon="solar:documents-linear" width="28"></iconify-icon>
</div>
<p className="font-light text-sm text-gray-600 mt-8 leading-relaxed max-w-sm">
                            We act as your agent for Householder Applications, Permitted Development, and Change of Use, handling all negotiations with the Local Authority.
                        </p>
<div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Start Inquiry <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="directory-item group cursor-pointer" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<div className="flex justify-between items-start">
<h4 className="display text-2xl md:text-3xl tracking-tight">Building Regulations</h4>
<iconify-icon className="text-gray-400 group-hover:text-[var(--c-accent)] transition-colors" icon="solar:ruler-pen-linear" width="28"></iconify-icon>
</div>
<p className="font-light text-sm text-gray-600 mt-8 leading-relaxed max-w-sm">
                            Comprehensive technical drawings and specifications ensuring your project is safe, energy-efficient, and fully compliant with UK law.
                        </p>
<div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Start Inquiry <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="directory-item group cursor-pointer" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<div className="flex justify-between items-start">
<h4 className="display text-2xl md:text-3xl tracking-tight">Feasibility Studies</h4>
<iconify-icon className="text-gray-400 group-hover:text-[var(--c-accent)] transition-colors" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<p className="font-light text-sm text-gray-600 mt-8 leading-relaxed max-w-sm">
                            Initial appraisals to assess the development potential of a site or property before significant financial commitment is made.
                        </p>
<div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Start Inquiry <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="directory-item group cursor-pointer" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<div className="flex justify-between items-start">
<h4 className="display text-2xl md:text-3xl tracking-tight">Project Management</h4>
<iconify-icon className="text-gray-400 group-hover:text-[var(--c-accent)] transition-colors" icon="solar:clipboard-check-linear" width="28"></iconify-icon>
</div>
<p className="font-light text-sm text-gray-600 mt-8 leading-relaxed max-w-sm">
                            From tendering to contract administration. We can oversee the construction phase to ensure the design is delivered to the highest standard.
                        </p>
<div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Start Inquiry <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#111] text-[#EAEAEA]" id="process">
<div className="px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="mb-24 flex flex-col md:flex-row justify-between items-end">
<h3 className="display text-[10vw] md:text-[5vw] leading-none select-none text-white/90">THE ROADMAP</h3>
<p className="max-w-md text-sm font-mono opacity-60 mb-2 md:text-right">A structured approach to delivery.</p>
</div>
<div className="grid md:grid-cols-3 gap-16 border-t border-white/10 pt-16">

<div className="relative pl-8 border-l border-white/10 group hover:border-[var(--c-accent)] transition-colors duration-500">
<div className="absolute -left-3 top-0 bg-[#111] py-2 text-[var(--c-accent)] font-mono text-sm">01</div>
<h4 className="text-2xl font-semibold mb-6 text-white group-hover:translate-x-2 transition-transform">Concept &amp; Survey</h4>
<p className="text-gray-400 font-light text-sm leading-7">
                            We begin with a measured building survey and topographical analysis. We listen to your requirements and transform the brief into initial sketch options and 3D visualisations.
                        </p>
</div>

<div className="relative pl-8 border-l border-white/10 group hover:border-[var(--c-accent)] transition-colors duration-500">
<div className="absolute -left-3 top-0 bg-[#111] py-2 text-[var(--c-accent)] font-mono text-sm">02</div>
<h4 className="text-2xl font-semibold mb-6 text-white group-hover:translate-x-2 transition-transform">Statutory Approval</h4>
<p className="text-gray-400 font-light text-sm leading-7">
                            Acting as your agent, we submit detailed plans to the Local Authority. We handle all correspondence to secure Planning Permission and Building Regulations approval.
                        </p>
</div>

<div className="relative pl-8 border-l border-white/10 group hover:border-[var(--c-accent)] transition-colors duration-500">
<div className="absolute -left-3 top-0 bg-[#111] py-2 text-[var(--c-accent)] font-mono text-sm">03</div>
<h4 className="text-2xl font-semibold mb-6 text-white group-hover:translate-x-2 transition-transform">Construction</h4>
<p className="text-gray-400 font-light text-sm leading-7">
                            We prepare technical specifications for builders to price accurately. We can administer the contract through to completion, ensuring quality control on site.
                        </p>
</div>
</div>
</div>

<div className="w-full h-[50vh] mt-32 overflow-hidden relative">
<img alt="Construction Site" className="absolute inset-0 w-full h-full object-cover parallax-img grayscale contrast-125 brightness-75" src="https://arkarchitectural.com/wp-content/uploads/2017/01/14-No-Apartments.jpg"/>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto bg-[var(--c-bg)] relative z-20" id="contact">
<div className="mb-16 border-b border-black/10 pb-4">
<h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">03 / Inquire</h2>
</div>
<div className="grid md:grid-cols-2 gap-24">
<div>
<h2 className="display text-5xl md:text-7xl mb-8 leading-none tracking-tight">START YOUR<br/>PROJECT</h2>
<p className="text-lg font-light mb-12 text-gray-700">
                        We offer a free initial consultation to discuss your requirements, establish feasibility, and provide cost estimates.
                    </p>
<div className="flex flex-col gap-6 text-sm font-medium opacity-80">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="p-2 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
</div>
<span>07595 307335</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="p-2 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<span>info@arkarchitectural.com</span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 border border-black/10 rounded-full">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<span>Cardiff, UK</span>
</div>
</div>
</div>
<form className="flex flex-col gap-8 mt-4">
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[var(--c-accent)]">Client Name</label>
<input className="brutalist-input" placeholder="Full Name" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[var(--c-accent)]">Interest</label>
<select className="brutalist-input bg-transparent rounded-none appearance-none cursor-pointer">
<option>Residential Extension</option>
<option>New Build</option>
<option>Commercial Development</option>
<option>Feasibility Study</option>
</select>
</div>
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-[var(--c-accent)]">Project Details</label>
<input className="brutalist-input" placeholder="Location &amp; Brief Description" type="text"/>
</div>
<button className="mt-8 bg-[#111] text-white display py-6 px-8 text-lg hover:bg-[var(--c-accent)] transition-colors w-full flex justify-between items-center group" type="submit">
                        SUBMIT INQUIRY
                        <iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</form>
</div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center px-6">
<h2 className="display text-[20vw] leading-[0.8] text-[#1a1a1a] select-none">ARK</h2>
<div className="flex flex-col md:flex-row gap-8 justify-center mt-12 text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
<div className="mt-16 text-[10px] text-gray-600 font-mono">
                © 2025 ARK ARCHITECTURAL SERVICES LTD. <br/>
                DESIGNED IN CARDIFF.
            </div>
</div>
</footer>


    </>
  );
}
