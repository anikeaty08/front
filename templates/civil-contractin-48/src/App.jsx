import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. GSAP Setup
            gsap.registerPlugin(ScrollTrigger);

            // 2. Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('bg-[#0B0F14]/70', 'backdrop-blur-xl', 'border-[#C8BFB0]/10');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-[#0B0F14]/70', 'backdrop-blur-xl', 'border-[#C8BFB0]/10');
                    navbar.classList.add('border-transparent');
                }
            });

            // 3. Hero Animation
            const heroElements = document.querySelectorAll('.hero-elem');
            gsap.fromTo(heroElements, 
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.2 }
            );

            // Hero Image subtle scale
            gsap.to('#hero-img', {
                scale: 1,
                duration: 2,
                ease: "power2.out"
            });

            // 4. Bento Grid Reveal
            const bentoCards = document.querySelectorAll('.bento-card');
            ScrollTrigger.batch(bentoCards, {
                interval: 0.12,
                batchMax: 4,
                onEnter: batch => gsap.fromTo(batch, 
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12, overwrite: true }
                ),
                start: "top 85%"
            });

            // 5. Philosophy Word-by-Word Animation
            const splitTexts = document.querySelectorAll('.split-text');
            splitTexts.forEach(el => {
                // Wrap words in spans, preserving the HTML inside (like the amber span)
                // A simpler robust approach for single file without complex regex:
                // We'll just animate lines or block reveals since splitting HTML nodes safely in raw JS is tricky.
                // Let's do a line/opacity reveal instead for stability, or simple text splitting for pure text nodes.
                
                // Let's do a simple character fade up for the whole element using GSAP
                gsap.fromTo(el,
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, y: 0, 
                        duration: 1.5, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                        }
                    }
                );
            });

            // Parallax Bg
            gsap.to('#philosophy-bg', {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#philosophy",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 6. Protocol Sticky Stacking Archive
            const stickyCards = document.querySelectorAll('.sticky-card > div');
            
            stickyCards.forEach((card, index) => {
                if(index === stickyCards.length - 1) return; // Skip last card
                
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 10%", // When card hits near top
                    endTrigger: stickyCards[index + 1],
                    end: "top 10%",
                    scrub: true,
                    animation: gsap.to(card, {
                        scale: 0.92,
                        opacity: 0.4,
                        filter: "blur(12px)",
                        ease: "none"
                    })
                });
            });

            // 7. Custom Dropdown Logic
            const servicesList = [
                "Civil General Contracting", "Elevated Concrete", "Turnkey Concrete", 
                "Structural Concrete", "Cast-in-Place Structures", "Concrete Roadways & Sidewalks", 
                "RCP, Arch & Box Culverts", "Lift Stations & Pump Stations", "Storm Drainage, Water & Sewer Lines", 
                "Boring, Tunneling & Directional Drilling", "Stormwater Retention Structures", 
                "Submerged Utility Lines", "Design Build Construction"
            ];
            
            const dropBtn = document.getElementById('dropdown-btn');
            const dropList = document.getElementById('dropdown-list');
            const dropVal = document.getElementById('dropdown-val');
            const hiddenInput = document.getElementById('service-input');
            const dropIcon = document.getElementById('dropdown-icon');

            // Populate list
            servicesList.forEach(service => {
                const li = document.createElement('li');
                li.className = "px-4 py-3 text-sm text-[#E8E4DC]/70 hover:bg-[#C07D2A] hover:text-[#0B0F14] cursor-pointer transition-colors font-body";
                li.textContent = service;
                li.addEventListener('click', () => {
                    dropVal.textContent = service;
                    dropVal.classList.add('text-[#E8E4DC]');
                    hiddenInput.value = service;
                    closeDropdown();
                });
                dropList.appendChild(li);
            });

            const toggleDropdown = () => {
                dropList.classList.toggle('open');
                dropIcon.style.transform = dropList.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
            };

            const closeDropdown = () => {
                dropList.classList.remove('open');
                dropIcon.style.transform = 'rotate(0)';
            };

            dropBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleDropdown();
            });

            document.addEventListener('click', (e) => {
                if(!dropBtn.contains(e.target) && !dropList.contains(e.target)) {
                    closeDropdown();
                }
            });

            // 8. Form Handling (JSON Log & Success State)
            const form = document.getElementById('bid-form');
            const successState = document.getElementById('form-success');

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Construct JSON
                const formData = new FormData(form);
                const dataObj = Object.fromEntries(formData.entries());
                
                // Directive: POST form data as JSON to console.log
                console.log("BID REQUEST DATA:", JSON.stringify(dataObj, null, 2));

                // Show Success State
                gsap.to(form, { opacity: 0, y: 20, duration: 0.4, onComplete: () => {
                    form.style.display = 'none';
                    successState.classList.remove('hidden');
                    gsap.fromTo(successState, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
                }});
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
<filter id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-[3rem] px-6 py-4 flex items-center justify-between transition-all duration-500 border border-transparent" id="navbar">
<div className="text-2xl font-heading font-semibold text-[#E8E4DC] tracking-tighter">NTC</div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-[#E8E4DC]/70">
<a className="hover:text-[#C07D2A] transition-colors" href="#services">Services</a>
<a className="hover:text-[#C07D2A] transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-[#C07D2A] transition-colors" href="#protocol">Protocol</a>
</div>
<a className="btn-magnetic amber-hover bg-[#C07D2A] text-[#0B0F14] rounded-[3rem] px-6 py-2.5 font-mono text-xs font-semibold tracking-widest uppercase flex items-center gap-2 border border-[#C07D2A]" href="#contact">
<span className="bg-layer"></span>
<span className="content flex items-center gap-2">Request a Bid <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon></span>
</a>
</nav>

<section className="relative h-[100dvh] w-full flex flex-col justify-end p-6 md:p-12 lg:p-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Heavy Civil Construction" className="w-full h-full object-cover object-center scale-105" id="hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/70 to-transparent"></div>
</div>

<div className="relative z-10 max-w-4xl flex flex-col items-start gap-4 pb-16">
<div className="hero-elem font-mono text-xs md:text-sm text-[#C07D2A] tracking-[0.2em] uppercase">Civil &amp; Structural Concrete</div>
<div className="flex flex-col -gap-2">
<h1 className="hero-elem font-heading font-semibold text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] text-[#E8E4DC] tracking-tighter uppercase">Precision Poured.</h1>
<h2 className="hero-elem font-display italic text-5xl md:text-7xl lg:text-[5.5rem] leading-none text-[#C8BFB0] tracking-tight">Trust built to last.</h2>
</div>
<p className="hero-elem font-body text-base md:text-lg text-[#E8E4DC]/70 max-w-2xl mt-4 mb-8">Heavy civil construction across North Texas — from cast-in-place structures to full design-build delivery.</p>
<a className="hero-elem btn-magnetic bg-transparent text-[#C07D2A] rounded-[3rem] px-8 py-4 font-mono text-sm tracking-widest uppercase border border-[#C07D2A] flex items-center gap-2" href="#contact">
<span className="bg-layer"></span>
<span className="content flex items-center gap-2">Initiate Engagement <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 md:px-12 md:py-8 border-t border-[#E8E4DC]/10 z-10 flex flex-wrap md:flex-nowrap justify-between gap-4 font-mono text-xs text-[#E8E4DC]/50 tracking-widest">
<div className="hero-elem">25+ YRS EXPERIENCE</div>
<div className="hero-elem hidden sm:block">500+ PROJECTS DELIVERED</div>
<div className="hero-elem">LICENSED &amp; BONDED</div>
<div className="hero-elem">NORTH TEXAS BASED</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 lg:px-12 bg-[#0B0F14] relative z-20" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<div className="font-mono text-xs text-[#C07D2A] tracking-widest uppercase mb-4">The Catalog</div>
<h2 className="font-heading font-semibold text-4xl md:text-6xl text-[#E8E4DC] tracking-tighter uppercase">Capabilities</h2>
</div>
<p className="font-body text-[#E8E4DC]/60 max-w-md text-sm md:text-base text-balance">Built for the complexity others won't touch. We self-perform the critical path to control the outcome.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">

<div className="bento-card md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0D2340] text-[#E8E4DC] rounded-[1.5rem] p-8 flex flex-col justify-end relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 border border-[#E8E4DC]/5">
<div className="absolute top-0 left-0 w-1 h-full bg-[#C07D2A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-[#C07D2A] mb-6" icon="solar:city-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-3xl tracking-tight uppercase mb-3">Civil General Contracting</h3>
<p className="font-body text-[#E8E4DC]/70 text-sm md:text-base text-balance">End-to-end management of complex infrastructure deployments, ensuring strict adherence to structural tolerances and municipal timelines.</p>
</div>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">Elevated Concrete</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Suspended slabs and vertical elements demanding high-strength mix designs.</p>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">Turnkey Concrete</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Single-source responsibility from formwork and rebar placement to final cure.</p>
</div>

<div className="bento-card lg:row-span-2 bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<iconify-icon className="text-3xl text-[#0D2340] mb-auto mt-2" icon="solar:buildings-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2 mt-6">Structural Concrete</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Massive load-bearing foundations, retaining walls, and subterranean structures.</p>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">Cast-in-Place Structures</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Monolithic pours requiring precision formwork engineering.</p>
</div>

<div className="bento-card md:col-span-2 bg-[#0B0F14] border border-[#E8E4DC]/10 text-[#E8E4DC] rounded-[1.5rem] p-6 flex flex-col justify-center relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#C07D2A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-2xl tracking-tight uppercase mb-2">Concrete Roadways &amp; Sidewalks</h3>
<p className="font-body text-[#E8E4DC]/60 text-sm">Heavy-duty paving, DOT-compliant flatwork, and public access infrastructure.</p>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">RCP, Arch &amp; Box Culverts</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Precast and cast-in-place subterranean drainage networks.</p>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">Lift &amp; Pump Stations</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Deep excavations and watertight structural construction.</p>
</div>

<div className="bento-card md:col-span-2 lg:col-span-2 bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-center relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-2xl tracking-tight uppercase mb-2">Storm Drainage, Water &amp; Sewer Lines</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Utility infrastructure installation through high-density urban corridors.</p>
</div>

<div className="bento-card lg:row-span-2 bg-[#0D2340] text-[#E8E4DC] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#C07D2A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<iconify-icon className="text-3xl text-[#C07D2A] mb-auto mt-2" icon="solar:routing-2-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2 mt-6">Boring, Tunneling &amp; Directional Drilling</h3>
<p className="font-body text-[#E8E4DC]/60 text-sm">Trenchless utility installation to preserve surface integrity.</p>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">Stormwater Retention Structures</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Engineered detention vaults and flow control systems.</p>
</div>

<div className="bento-card bg-[#C8BFB0] text-[#0B0F14] rounded-[1.5rem] p-6 flex flex-col justify-end relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-1 h-full bg-[#0D2340] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<h3 className="font-heading font-semibold text-xl tracking-tight uppercase mb-2">Submerged Utility Lines</h3>
<p className="font-body text-[#0B0F14]/70 text-sm">Aquatic crossings and specialized marine civil installations.</p>
</div>

<div className="bento-card md:col-span-2 lg:col-span-2 bg-[#0B0F14] border border-[#C07D2A] text-[#E8E4DC] rounded-[1.5rem] p-6 lg:p-8 flex flex-col justify-center relative group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 left-0 w-2 h-full bg-[#C07D2A]"></div>
<h3 className="font-heading font-semibold text-3xl text-[#C07D2A] tracking-tight uppercase mb-2 ml-2">Design Build Construction</h3>
<p className="font-body text-[#E8E4DC]/70 text-sm md:text-base ml-2">Collaborative delivery method compressing schedules by overlapping design and construction phases. We engineer the constructability into the plans before mobilization.</p>
</div>
</div>
</div>
</section>

<section className="relative py-40 min-h-[80vh] flex items-center overflow-hidden bg-[#0B0F14]" id="philosophy">

<div className="absolute inset-0 opacity-[0.15] z-0">
<img alt="Infrastructure" className="w-full h-[120%] object-cover object-center -top-[10%]" id="philosophy-bg" src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0B0F14]/60 mix-blend-multiply"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col gap-24">

<div>
<p className="font-body text-[#E8E4DC]/50 text-lg md:text-xl mb-6">Most contractors focus on winning the bid.</p>
<h2 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-[#E8E4DC] tracking-tight leading-[0.9] max-w-4xl split-text">
                    We focus on earning the next one.
                </h2>
</div>

<div className="self-end text-right">
<p className="font-body text-[#E8E4DC]/50 text-lg md:text-xl mb-6">Speed is sold as a virtue.</p>
<h2 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-[#E8E4DC] tracking-tight leading-[0.9] max-w-4xl split-text">
<span className="text-[#C07D2A] not-italic font-heading uppercase tracking-tighter mr-4 inline-block transform translate-y-[-0.1em]">Precision</span> is our promise.
                </h2>
</div>
</div>
</section>

<section className="relative bg-[#0B0F14] pb-32" id="protocol">
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

<div className="sticky-card h-[100vh] sticky top-0 flex items-center justify-center pt-24 pb-12 z-10">
<div className="w-full h-full max-h-[800px] bg-[#0D2340] rounded-[1.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl relative border border-[#E8E4DC]/10">
<div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
<div className="font-mono text-xl text-[#C07D2A]">01</div>
<h3 className="font-heading font-semibold text-5xl md:text-6xl text-[#E8E4DC] tracking-tighter uppercase leading-[0.9]">Comprehensive Project Assessment</h3>
<p className="font-body text-[#E8E4DC]/70 text-lg md:text-xl max-w-md">We begin every engagement with a rigorous site evaluation, scope definition, and feasibility analysis — before a single number is quoted.</p>
</div>

<div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-20 pointer-events-none animate-spin-slow">
<div className="absolute inset-0 border border-[#C07D2A] rounded-full scale-100"></div>
<div className="absolute inset-[10%] border border-[#C07D2A] rounded-full scale-90"></div>
<div className="absolute inset-[20%] border border-[#C07D2A] rounded-full scale-75"></div>
<div className="absolute inset-[30%] border border-[#C07D2A] rounded-full scale-50 text-center flex items-center justify-center font-mono text-xs">SCOPE</div>
</div>
</div>
</div>

<div className="sticky-card h-[100vh] sticky top-0 flex items-center justify-center pt-24 pb-12 z-20">
<div className="w-full h-full max-h-[800px] bg-[#C8BFB0] rounded-[1.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl relative">
<div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
<div className="font-mono text-xl text-[#0D2340]">02</div>
<h3 className="font-heading font-semibold text-5xl md:text-6xl text-[#0B0F14] tracking-tighter uppercase leading-[0.9]">Precision Field Execution</h3>
<p className="font-body text-[#0B0F14]/80 text-lg md:text-xl max-w-md">Our crews operate with military-grade scheduling and real-time coordination — no surprises, no excuses, no cost overruns.</p>
</div>

<div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(#0D2340 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#0D2340] laser-line shadow-[0_0_10px_#0D2340]"></div>
</div>
</div>
</div>

<div className="sticky-card h-[100vh] sticky top-0 flex items-center justify-center pt-24 pb-12 z-30">
<div className="w-full h-full max-h-[800px] bg-[#0B0F14] rounded-[1.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl relative border border-[#C8BFB0]/20">
<div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
<div className="font-mono text-xl text-[#C07D2A]">03</div>
<h3 className="font-heading font-semibold text-5xl md:text-6xl text-[#E8E4DC] tracking-tighter uppercase leading-[0.9]">On-Time, Verified Delivery</h3>
<p className="font-body text-[#E8E4DC]/70 text-lg md:text-xl max-w-md">Every project closes with full documentation, punch-list sign-off, and a 30-day post-completion warranty review.</p>
</div>

<div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-full md:w-1/2 h-64 pointer-events-none flex items-center">
<svg className="w-full h-full opacity-50" viewbox="0 0 500 100">
<path className="animate-ekg" d="M0,50 L150,50 L170,20 L190,80 L220,10 L250,90 L270,50 L500,50" fill="none" stroke="#C07D2A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0B0F14] relative border-t border-[#E8E4DC]/5" id="contact">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="flex flex-col gap-6 sticky top-32">
<h2 className="font-display italic text-5xl md:text-7xl text-[#E8E4DC] tracking-tight leading-[0.9]">Let's build something that lasts.</h2>
<p className="font-body text-[#E8E4DC]/60 text-lg max-w-sm">Tell us about your project infrastructure needs. Our estimating team responds within one business day.</p>
<div className="hidden lg:block mt-12 font-mono text-xs text-[#E8E4DC]/40 uppercase tracking-widest">
                    North Texas Contracting<br/>
                    Licensed &amp; Bonded
                </div>
</div>

<div className="bg-[#0B0F14] relative">

<div className="hidden absolute inset-0 bg-[#0B0F14] z-20 flex flex-col items-start justify-center" id="form-success">
<h3 className="font-display italic text-4xl text-[#C07D2A] mb-4">We'll be in touch.</h3>
<p className="font-body text-[#E8E4DC]/60">Your bid request has been securely logged. Our team is reviewing the specifications.</p>
</div>
<form className="flex flex-col gap-8 relative z-10" id="bid-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative group">
<input className="w-full bg-transparent border-b border-[#E8E4DC]/20 py-3 text-[#E8E4DC] font-body text-base placeholder-transparent focus:border-[#C07D2A] transition-colors peer" id="name" name="name" placeholder="Full Name" required="" type="text"/>
<label className="absolute left-0 top-3 font-mono text-xs text-[#E8E4DC]/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#C07D2A] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-[#E8E4DC]/20 py-3 text-[#E8E4DC] font-body text-base placeholder-transparent focus:border-[#C07D2A] transition-colors peer" id="company" name="company" placeholder="Company Name" required="" type="text"/>
<label className="absolute left-0 top-3 font-mono text-xs text-[#E8E4DC]/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#C07D2A] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]" htmlFor="company">Company Name</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="w-full bg-transparent border-b border-[#E8E4DC]/20 py-3 text-[#E8E4DC] font-body text-base placeholder-transparent focus:border-[#C07D2A] transition-colors peer" id="phone" name="phone" placeholder="Phone Number" required="" type="tel"/>
<label className="absolute left-0 top-3 font-mono text-xs text-[#E8E4DC]/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#C07D2A] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]" htmlFor="phone">Phone Number</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-[#E8E4DC]/20 py-3 text-[#E8E4DC] font-body text-base placeholder-transparent focus:border-[#C07D2A] transition-colors peer" id="email" name="email" placeholder="Email Address" required="" type="email"/>
<label className="absolute left-0 top-3 font-mono text-xs text-[#E8E4DC]/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#C07D2A] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]" htmlFor="email">Email Address</label>
</div>
</div>

<div className="relative mt-2" id="custom-select">
<span className="absolute left-0 -top-4 font-mono text-[10px] text-[#E8E4DC]/40 uppercase tracking-widest">Project Type</span>
<button className="w-full bg-transparent border-b border-[#E8E4DC]/20 py-3 text-left font-body text-[#E8E4DC] flex justify-between items-center group focus:border-[#C07D2A] transition-colors" id="dropdown-btn" type="button">
<span id="dropdown-val">Select Primary Service</span>
<iconify-icon className="text-[#E8E4DC]/40 group-focus:text-[#C07D2A] transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="dropdown-icon"></iconify-icon>
</button>
<input id="service-input" name="service" required="" type="hidden"/>
<ul className="dropdown-menu absolute top-full left-0 w-full mt-2 bg-[#0D2340] border border-[#E8E4DC]/10 rounded-xl z-50 max-h-60 overflow-y-auto py-2 shadow-2xl" id="dropdown-list">

</ul>
</div>
<div className="relative group mt-4">
<textarea className="w-full bg-transparent border-b border-[#E8E4DC]/20 py-3 text-[#E8E4DC] font-body text-base placeholder-transparent focus:border-[#C07D2A] transition-colors resize-none peer" id="description" name="description" placeholder="Project Description" required="" rows="4"></textarea>
<label className="absolute left-0 top-3 font-mono text-xs text-[#E8E4DC]/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#C07D2A] peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]" htmlFor="description">Project Description</label>
</div>
<button className="btn-magnetic amber-hover bg-[#C07D2A] text-[#0B0F14] w-full rounded-[3rem] py-5 font-mono text-sm font-semibold tracking-widest uppercase flex justify-center items-center mt-4" type="submit">
<span className="bg-layer"></span>
<span className="content flex items-center gap-2">Request a Bid <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-[#0D2340] rounded-t-[4rem] pt-20 pb-10 px-6 md:px-12 mt-12 border-t border-[#E8E4DC]/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#E8E4DC]/10 pb-16">

<div className="flex flex-col items-start">
<div className="text-4xl font-heading font-semibold text-[#E8E4DC] tracking-tighter mb-4">NTC</div>
<p className="font-display italic text-2xl text-[#C8BFB0] tracking-tight">Precision Poured. Trust Built.</p>
</div>

<div className="flex flex-col gap-4 font-mono text-xs text-[#E8E4DC]/70 uppercase tracking-widest">
<a className="hover:text-[#C07D2A] transition-colors w-fit" href="#services">Services</a>
<a className="hover:text-[#C07D2A] transition-colors w-fit" href="#projects">Projects</a>
<a className="hover:text-[#C07D2A] transition-colors w-fit" href="#about">About NTC</a>
<a className="hover:text-[#C07D2A] transition-colors w-fit" href="#contact">Contact</a>
</div>

<div className="flex flex-col justify-end gap-6 md:items-end font-mono text-xs text-[#E8E4DC]/40">
<div className="flex gap-4">
<a className="hover:text-[#E8E4DC] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#E8E4DC] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono text-[10px] text-[#E8E4DC]/30 uppercase tracking-widest">
                    © 2024 North Texas Contracting. All Rights Reserved.
                </div>
<div className="flex items-center gap-3 font-mono text-[10px] text-[#E8E4DC]/60 tracking-widest uppercase bg-[#0B0F14] px-4 py-2 rounded-full border border-[#E8E4DC]/5">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C07D2A] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C07D2A]"></span>
</div>
                    System Operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
