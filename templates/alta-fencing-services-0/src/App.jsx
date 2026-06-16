import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Magnetic Buttons
            const magneticBtns = document.querySelectorAll('.magnetic-btn');
            magneticBtns.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                    gsap.to(btn, { x: x, y: y, scale: 1.03, duration: 0.4, ease: "power2.out" });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                });
            });

            // 2. Navbar Morphing
            ScrollTrigger.create({
                start: "top -10%",
                onUpdate: (self) => {
                    const nav = document.getElementById('navbar');
                    if(self.direction === 1) {
                        nav.classList.add('bg-[#F2F0E9]/90', 'text-[#2E4036]', 'border-[#2E4036]/10', 'shadow-sm');
                        nav.classList.remove('text-[#F2F0E9]', 'border-transparent');
                    } else if(self.progress === 0) {
                        nav.classList.remove('bg-[#F2F0E9]/90', 'text-[#2E4036]', 'border-[#2E4036]/10', 'shadow-sm');
                        nav.classList.add('text-[#F2F0E9]', 'border-transparent');
                    }
                }
            });

            // 3. Hero Entrance
            gsap.from(".hero-el", {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });

            // 4. Feature Card 1: Diagnostic Shuffler
            const cards = Array.from(document.querySelectorAll('.shuffle-card'));
            let zIndexes = [3, 2, 1];
            let scales = [1, 0.95, 0.9];
            let yOffsets = [0, 15, 30];
            
            setInterval(() => {
                zIndexes.unshift(zIndexes.pop());
                cards.forEach((card, i) => {
                    gsap.to(card, {
                        zIndex: zIndexes[i],
                        scale: scales[zIndexes[i]-1],
                        y: yOffsets[zIndexes[i]-1],
                        duration: 0.8,
                        ease: "back.out(1.2)"
                    });
                });
            }, 3500);

            // 5. Feature Card 2: Topographical Align
            const bubble = document.getElementById('bubble-level');
            const grade = document.getElementById('grade-readout');
            
            gsap.to(bubble, {
                x: 20,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                onUpdate: function() {
                    const progress = this.progress();
                    const value = (progress * 1.8).toFixed(1);
                    grade.innerText = value + "°";
                }
            });

            // 6. Feature Card 3: Scheduler
            const cursor = document.getElementById('scheduler-cursor');
            const targetCell = document.getElementById('target-cell');
            const saveBtn = document.getElementById('save-btn');
            
            const schedTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
            schedTl.to(cursor, { x: 140, y: 40, duration: 1, ease: "power2.inOut" })
                   .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                   .to(targetCell, { backgroundColor: "#CC5833", duration: 0.2 }, "-=0.1")
                   .to(cursor, { x: 220, y: 150, duration: 0.8, ease: "power2.inOut", delay: 0.4 })
                   .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                   .to(saveBtn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.1")
                   .to(cursor, { opacity: 0, duration: 0.3 })
                   .to(targetCell, { backgroundColor: "transparent", duration: 0.2, delay: 0.8 })
                   .set(cursor, { x: 0, y: 0, opacity: 1 });

            // 7. Philosophy Parallax
            gsap.to(".parallax-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: "#philosophy",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Fallback for missing text split
            gsap.fromTo("#phil-subtitle", 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: "#philosophy", start: "top 70%" } }
            );
            gsap.fromTo("#phil-title", 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2, scrollTrigger: { trigger: "#philosophy", start: "top 70%" } }
            );

            // 8. Protocol Sticky Stacking
            const panels = gsap.utils.toArray('.protocol-panel');
            panels.forEach((panel, i) => {
                if (i < panels.length - 1) {
                    gsap.to(panel, {
                        scale: 0.92,
                        opacity: 0.4,
                        filter: "blur(8px)",
                        scrollTrigger: {
                            trigger: panels[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true
                        }
                    });
                }
            });

            gsap.to("#blueprint-line", { top: "100%", duration: 4, repeat: -1, ease: "linear" });
            gsap.to("#motif-svg", { rotation: 360, duration: 40, repeat: -1, ease: "none", transformOrigin: "center center" });

            // 9. Portfolio Slider Logic
            const portfolioSlider = document.getElementById('portfolio-slider');
            const slideLeft = document.getElementById('slide-left');
            const slideRight = document.getElementById('slide-right');
            const slideAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 650;

            slideLeft.addEventListener('click', () => {
                portfolioSlider.scrollBy({ left: -slideAmount - 24, behavior: 'smooth' });
            });
            slideRight.addEventListener('click', () => {
                portfolioSlider.scrollBy({ left: slideAmount + 24, behavior: 'smooth' });
            });

            let isDown = false;
            let startX;
            let scrollLeft;

            portfolioSlider.addEventListener('mousedown', (e) => {
                isDown = true;
                portfolioSlider.classList.add('active:cursor-grabbing');
                startX = e.pageX - portfolioSlider.offsetLeft;
                scrollLeft = portfolioSlider.scrollLeft;
            });
            portfolioSlider.addEventListener('mouseleave', () => { isDown = false; });
            portfolioSlider.addEventListener('mouseup', () => { isDown = false; });
            portfolioSlider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - portfolioSlider.offsetLeft;
                const walk = (x - startX) * 2;
                portfolioSlider.scrollLeft = scrollLeft - walk;
            });
        });

        // 10. Single Pages Modal Logic
        const pageModal = document.getElementById('page-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');

        const pageData = {
            "Materials": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-4 block font-normal">Sourcing & Specifications</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-8">Material Archives</h2>
                    <p class="text-[#1A1A1A]/70 mb-12 text-lg font-light leading-relaxed">Alta Fencing sources exclusively from architectural-grade suppliers. Every material utilized in our boundary formations is subjected to rigorous testing for longevity, tensile strength under wind load, and resistance to environmental degradation native to the region.</p>
                    
                    <div class="space-y-12">
                        <div class="bg-white p-10 rounded-[2rem] border border-[#2E4036]/10 shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-2 h-full bg-[#2E4036]"></div>
                            <h3 class="text-3xl font-['Outfit',sans-serif] font-normal tracking-tighter mb-4 text-[#2E4036]">Metal Framework</h3>
                            <p class="text-base text-[#1A1A1A]/70 font-light mb-6 leading-relaxed">Our backbone. We utilize 14-gauge galvanized steel tubing for structural framing. Unlike traditional timber posts that rot sub-grade, our steel posts are set deep into specialized concrete footings, ensuring the unyielding skeleton of your boundary remains perfectly aligned for decades.</p>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-[#1A1A1A]/80 border-t border-[#2E4036]/10 pt-6">
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> Zinc-coated rust prevention</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> High wind-load thresholds</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> Powder-coated finish options</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> Invisible fastening systems</li>
                            </ul>
                        </div>

                        <div class="bg-white p-10 rounded-[2rem] border border-[#2E4036]/10 shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-2 h-full bg-[#CC5833]"></div>
                            <h3 class="text-3xl font-['Outfit',sans-serif] font-normal tracking-tighter mb-4 text-[#2E4036]">Vinyl Panels</h3>
                            <p class="text-base text-[#1A1A1A]/70 font-light mb-6 leading-relaxed">The evolution of privacy. Our panels are engineered from a proprietary blend of recycled fibers and high-density polyethylene. The result is a profile that resists fading, moisture rot, and warping.</p>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-[#1A1A1A]/80 border-t border-[#2E4036]/10 pt-6">
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> Zero-maintenance exterior</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> UV-inhibitor shielding</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> Splinter and crack proof</li>
                                <li class="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" class="text-[#CC5833] text-base"></iconify-icon> Eco-friendly composition</li>
                            </ul>
                        </div>
                    </div>
                </div>`,
            "Privacy": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-4 block font-normal">Legal Documentation</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-10">Privacy Policy</h2>
                    <div class="prose prose-base text-[#1A1A1A]/70 font-light space-y-6 max-w-none">
                        <p class="text-lg leading-relaxed">At Alta Fencing, we consider the privacy of our clients with the same strict boundaries we apply to our architectural installations. This Privacy Policy details the meticulous manner in which we handle your personal and topographical data.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#2E4036] mt-12 mb-4">1. Data Extraction and Application</h4>
                        <p>We collect specific geographical, structural, and contact data exclusively to facilitate precise project estimates, material logistics, and on-site engineering protocols. This includes property lines, utility marking records, and direct communication logs.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#2E4036] mt-10 mb-4">2. Security Perimeter</h4>
                        <p>All client blueprints, topographical surveys, and billing information are stored within encrypted digital environments. We do not distribute, sell, or lease your architectural data or personal information to third-party entities under any circumstances.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#2E4036] mt-10 mb-4">3. Project Photography</h4>
                        <p>We routinely document our structural installations for quality assurance and portfolio utilization. Any photography intended for public display is strictly curated to omit identifying addresses, vehicles, or personal figures unless explicit written authorization is provided by the property owner.</p>
                        
                        <div class="mt-12 p-6 bg-[#2E4036]/5 rounded-xl border border-[#2E4036]/10">
                            <p class="text-sm m-0">For specific inquiries regarding data handling or to request the deletion of your project archive, please contact our administrative team directly at (626) 546-8482.</p>
                        </div>
                    </div>
                </div>`,
            "Terms": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-4 block font-normal">Legal Documentation</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-10">Terms of Service</h2>
                    <div class="prose prose-base text-[#1A1A1A]/70 font-light space-y-6 max-w-none">
                        <p class="text-lg leading-relaxed">By engaging Alta Fencing for the assessment, engineering, or installation of architectural boundaries, you acknowledge and agree to the following structural and operational protocols.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#2E4036] mt-12 mb-4">Intellectual Architecture</h4>
                        <p>All preliminary blueprints, topographical assessments, material lists, and structural engineering schemas developed by Alta Fencing remain the exclusive intellectual property of the company until the final execution of the installation contract and receipt of full financial compensation.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#2E4036] mt-10 mb-4">Site Preparation Protocols</h4>
                        <p>The client is responsible for identifying precise legal property lines prior to the commencement of phase one. While Alta Fencing utilizes utility marking services, the ultimate liability for boundary disputes or unmarked subterranean private utilities rests with the property owner.</p>
                        
                        <h4 class="text-2xl font-['Outfit',sans-serif] font-normal tracking-tight text-[#2E4036] mt-10 mb-4">Timeline Variances</h4>
                        <p>Our installation schedules are meticulously planned; however, they remain subject to microclimatic weather events, material supply chain disruptions, and unforeseen subterranean obstructions (e.g., solid bedrock, undocumented concrete footings) discovered during the excavation phase.</p>
                    </div>
                </div>`,
            "Warranty": `
                <div class="max-w-3xl">
                    <span class="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-4 block font-normal">Assurance & Coverage</span>
                    <h2 class="text-5xl font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-10">Structural Warranty</h2>
                    <div class="prose prose-base text-[#1A1A1A]/70 font-light space-y-6 max-w-none">
                        <p class="text-lg leading-relaxed">We construct boundaries designed for endurance. Every Alta Fencing installation is backed by a comprehensive assurance protocol, guaranteeing the integrity of our engineering and the quality of our materials.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <div class="p-8 border border-[#2E4036]/20 rounded-2xl bg-white">
                                <iconify-icon icon="solar:shield-check-linear" class="text-3xl text-[#CC5833] mb-4"></iconify-icon>
                                <h4 class="text-xl font-['Outfit',sans-serif] font-normal text-[#2E4036] mb-2">10-Year Structural Integrity</h4>
                                <p class="text-sm">Guarantees all galvanized steel framework, post alignments, and concrete footings against failure, severe leaning, or detachment under normal environmental conditions.</p>
                            </div>
                            <div class="p-8 border border-[#2E4036]/20 rounded-2xl bg-white">
                                <iconify-icon icon="solar:settings-linear" class="text-3xl text-[#CC5833] mb-4"></iconify-icon>
                                <h4 class="text-xl font-['Outfit',sans-serif] font-normal text-[#2E4036] mb-2">5-Year Craftsmanship</h4>
                                <p class="text-sm">Covers all on-site fabrication, fastening hardware, gate hinges, automation tracks, and overall horizontal/vertical alignment perfection.</p>
                            </div>
                            <div class="p-8 border border-[#2E4036]/20 rounded-2xl bg-white md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6">
                                <iconify-icon icon="solar:medal-ribbon-linear" class="text-4xl text-[#CC5833] shrink-0"></iconify-icon>
                                <div>
                                    <h4 class="text-xl font-['Outfit',sans-serif] font-normal text-[#2E4036] mb-2">Lifetime Manufacturer Limitations</h4>
                                    <p class="text-sm">Our premium vinyl and metal materials carry direct manufacturer warranties against fading, structural rot, and deep corrosion, seamlessly transferred to the client upon project completion.</p>
                                </div>
                            </div>
                        </div>
                        
                        <p class="text-sm mt-10 p-6 bg-[#2E4036] text-[#F2F0E9] rounded-xl italic">Note: Warranties are voided in the event of severe vehicular impact, anomalous acts of nature (e.g., earthquakes, tornadic winds exceeding material thresholds), or structural alterations made by unauthorized third parties.</p>
                    </div>
                </div>`
        };

        window.openPageModal = function(pageName) {
            modalContent.innerHTML = pageData[pageName] || "<h2 class='text-4xl font-[Outfit]'>Archive not found.</h2>";
            pageModal.classList.remove('translate-y-full');
            document.body.classList.add('page-modal-active');
        };

        closeModal.addEventListener('click', () => {
            pageModal.classList.add('translate-y-full');
            setTimeout(() => {
                document.body.classList.remove('page-modal-active');
            }, 700);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.05]" style={{mixBlendMode: 'multiply'}}>
<filter id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-[95%] max-w-5xl rounded-full transition-all duration-500 text-[#F2F0E9] border border-transparent backdrop-blur-sm" id="navbar">
<a className="font-['Outfit',sans-serif] font-normal text-lg uppercase tracking-[0.2em]" href="#">Alta</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:-translate-y-[1%] transition-transform" href="#portfolio">Portfolio</a>
<a className="hover:-translate-y-[1%] transition-transform" href="#process">Process</a>
</div>
<a className="magnetic-btn relative overflow-hidden group rounded-full bg-[#CC5833] text-[#F2F0E9] px-6 py-2.5 text-sm font-normal flex items-center gap-2" href="tel:6265468482">
<span className="absolute inset-0 bg-[#2E4036] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0"></span>
<span className="relative z-10 transition-colors duration-500 tracking-tight">Request Quote</span>
<iconify-icon className="relative z-10 text-base" icon="solar:phone-linear"></iconify-icon>
</a>
</nav>

<div className="fixed inset-0 z-[60] bg-[#F2F0E9] translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col" id="page-modal">
<div className="flex items-center justify-between px-6 py-6 md:px-12 border-b border-[#2E4036]/10">
<div className="font-['Outfit',sans-serif] font-normal text-lg uppercase tracking-[0.2em] text-[#2E4036]">Alta Archive</div>
<button className="text-[#1A1A1A] hover:text-[#CC5833] transition-colors flex items-center gap-2 text-sm font-normal" id="close-modal">
<span>Close</span>
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto px-6 py-16 md:px-12 max-w-4xl mx-auto w-full" id="modal-content">

</div>
</div>

<header className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-12" id="hero">
<div className="absolute inset-0 z-0 bg-[#1A1A1A]">
<img alt="Architectural Slats" className="w-full h-full object-cover opacity-70 mix-blend-luminosity" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start">
<div className="overflow-hidden mb-2">
<p className="hero-el font-['Outfit',sans-serif] text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-6 font-normal">Topographical Assessment Initiated</p>
</div>
<div className="overflow-hidden">
<h1 className="hero-el text-5xl md:text-7xl leading-[1.05] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#F2F0E9]">
                    Architectural precision is the
                </h1>
</div>
<div className="overflow-hidden">
<h2 className="hero-el text-6xl md:text-8xl leading-[1] font-['Cormorant_Garamond',serif] font-normal italic tracking-tighter text-[#F2F0E9] mt-2 mb-12">
                    Foundation of boundaries.
                </h2>
</div>
<div className="hero-el flex flex-col sm:flex-row gap-4">
<a className="magnetic-btn relative overflow-hidden group rounded-full bg-[#F2F0E9] text-[#1A1A1A] px-8 py-4 text-base font-normal inline-flex items-center justify-center gap-3" href="tel:6265468482">
<span className="absolute inset-0 bg-[#CC5833] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0"></span>
<span className="relative z-10 group-hover:text-[#F2F0E9] transition-colors duration-500">Call (626) 546-8482 for Quote</span>
<iconify-icon className="relative z-10 text-xl group-hover:text-[#F2F0E9] transition-colors duration-500" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h3 className="text-4xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036]">
                Structural Intelligence
            </h3>
<p className="text-base text-[#1A1A1A]/70 max-w-sm mt-6 md:mt-0 font-light leading-relaxed">Precise measurements transformed into enduring architectural boundaries designed to weather the elements.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="feature-card bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2E4036]/5 flex flex-col h-[28rem]">
<div className="flex justify-between items-start mb-auto">
<div>
<h4 className="font-['Outfit',sans-serif] font-normal tracking-tighter text-2xl text-[#2E4036]">Material Profiles</h4>
<p className="text-sm text-[#1A1A1A]/50 mt-2 font-light">Durability and structural integrity</p>
</div>
<iconify-icon className="text-2xl text-[#CC5833]" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="relative h-56 w-full mt-8 flex justify-center" style={{perspective: '1000px'}}>
<div className="shuffle-card absolute w-full max-w-[15rem] bg-[#F2F0E9] border border-[#2E4036]/10 rounded-2xl p-5 shadow-sm" style={{zIndex: '3', transform: 'translateY(0) scale(1)'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-['Outfit',sans-serif] font-normal text-[#2E4036]">Wood</span>
<iconify-icon className="text-[#1A1A1A]/30 text-base" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-[#2E4036]/10 rounded-full overflow-hidden"><div className="h-full bg-[#CC5833] w-[85%]"></div></div>
<div className="flex justify-between text-xs text-[#1A1A1A]/40 uppercase tracking-widest"><span>Tensile</span><span>85%</span></div>
</div>
</div>
<div className="shuffle-card absolute w-full max-w-[15rem] bg-white border border-[#2E4036]/10 rounded-2xl p-5 shadow-sm" style={{zIndex: '2', transform: 'translateY(15px) scale(0.95)'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-['Outfit',sans-serif] font-normal text-[#2E4036]">Metal</span>
<iconify-icon className="text-[#1A1A1A]/30 text-base" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-[#2E4036]/10 rounded-full overflow-hidden"><div className="h-full bg-[#2E4036] w-[95%]"></div></div>
<div className="flex justify-between text-xs text-[#1A1A1A]/40 uppercase tracking-widest"><span>Strength</span><span>95%</span></div>
</div>
</div>
<div className="shuffle-card absolute w-full max-w-[15rem] bg-[#F2F0E9] border border-[#2E4036]/10 rounded-2xl p-5 shadow-sm" style={{zIndex: '1', transform: 'translateY(30px) scale(0.9)'}}>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-['Outfit',sans-serif] font-normal text-[#2E4036]">Vinyl</span>
<iconify-icon className="text-[#1A1A1A]/30 text-base" icon="solar:box-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-[#2E4036]/10 rounded-full overflow-hidden"><div className="h-full bg-[#1A1A1A] w-[90%]"></div></div>
<div className="flex justify-between text-xs text-[#1A1A1A]/40 uppercase tracking-widest"><span>Lifespan</span><span>90%</span></div>
</div>
</div>
</div>
</div>

<div className="feature-card bg-[#2E4036] rounded-3xl p-8 shadow-lg flex flex-col h-[28rem] text-[#F2F0E9]">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="font-['Outfit',sans-serif] font-normal tracking-tighter text-2xl text-[#F2F0E9]">Topographical Align</h4>
<p className="text-sm text-[#F2F0E9]/50 mt-2 font-light">Adaptive terrain contouring</p>
</div>
<div className="flex items-center gap-2 bg-[#1A1A1A]/40 rounded-full px-3 py-1.5 border border-[#F2F0E9]/10">
<div className="w-1.5 h-1.5 rounded-full bg-[#CC5833] animate-pulse"></div>
<span className="text-xs font-['Outfit',sans-serif] tracking-[0.1em] uppercase">Active</span>
</div>
</div>
<div className="flex-1 bg-[#1A1A1A]/30 rounded-2xl border border-[#F2F0E9]/5 p-6 flex flex-col justify-center relative overflow-hidden">
<div className="w-full mb-8">
<div className="flex justify-between text-xs text-[#F2F0E9]/40 uppercase tracking-widest mb-3">
<span>Grade</span>
<span id="grade-readout">0.0°</span>
</div>
<div className="w-full h-10 bg-[#1A1A1A]/50 rounded-xl relative overflow-hidden border border-[#F2F0E9]/5 flex items-center justify-center">
<div className="w-16 h-5 rounded-full border border-[#F2F0E9]/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#CC5833] transition-transform duration-300 shadow-[0_0_8px_#CC5833]" id="bubble-level"></div>
</div>
</div>
</div>
<div className="flex items-end justify-between h-20 px-2 gap-1 relative z-10">
<div className="w-1/5 bg-[#F2F0E9]/20 rounded-t-sm h-[40%] transition-all duration-700 hover:h-[60%]"></div>
<div className="w-1/5 bg-[#F2F0E9]/40 rounded-t-sm h-[60%] transition-all duration-700 hover:h-[70%] relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-[#CC5833]"></div>
</div>
<div className="w-1/5 bg-[#F2F0E9]/80 rounded-t-sm h-[100%] transition-all duration-700"></div>
<div className="w-1/5 bg-[#F2F0E9]/40 rounded-t-sm h-[70%] transition-all duration-700 hover:h-[80%] relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-[#CC5833]"></div>
</div>
<div className="w-1/5 bg-[#F2F0E9]/20 rounded-t-sm h-[50%] transition-all duration-700 hover:h-[40%]"></div>
</div>
<div className="absolute bottom-6 left-0 w-full h-[1px] bg-[#CC5833]/30 border-t border-dashed border-[#CC5833]/50"></div>
</div>
</div>

<div className="feature-card bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2E4036]/5 flex flex-col h-[28rem]">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="font-['Outfit',sans-serif] font-normal tracking-tighter text-2xl text-[#2E4036]">Project Scheduling</h4>
<p className="text-sm text-[#1A1A1A]/50 mt-2 font-light">Efficient installation timelines</p>
</div>
<iconify-icon className="text-2xl text-[#2E4036]" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="relative flex-1 bg-[#F2F0E9]/50 rounded-2xl border border-[#2E4036]/5 p-5 overflow-hidden flex flex-col justify-between">
<div>
<div className="grid grid-cols-7 gap-1 text-center text-xs font-normal text-[#1A1A1A]/40 mb-4 uppercase tracking-wider">
<span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
</div>
<div className="grid grid-cols-7 gap-1.5 h-28">
<div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div>
<div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7 transition-colors" id="target-cell"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div><div className="bg-white rounded border border-[#2E4036]/5 h-7"></div>
</div>
</div>
<div className="flex justify-between items-center mt-4">
<div className="h-2 w-20 bg-[#2E4036]/10 rounded-full"></div>
<button className="bg-[#2E4036] text-[#F2F0E9] text-xs px-5 py-2 rounded-full transition-transform tracking-wider uppercase" id="save-btn">Confirm</button>
</div>
<iconify-icon className="absolute z-20 text-[#1A1A1A] text-2xl drop-shadow-md" icon="solar:mouse-linear" id="scheduler-cursor" style={{top: '10%', left: '10%'}}></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative py-48 px-6 md:px-12 bg-[#1A1A1A] text-[#F2F0E9] overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]" id="philosophy">
<div className="absolute inset-0 z-0 opacity-50 parallax-bg" style={{background: 'radial-gradient(circle at 50% 10%, #2E4036 0%, #1A1A1A 80%)'}}></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
<p className="font-['Outfit',sans-serif] text-base md:text-lg text-[#F2F0E9]/60 mb-10 uppercase tracking-[0.2em]" id="phil-subtitle">
                Most contractors focus on temporary barriers.
            </p>
<h2 className="text-5xl md:text-7xl leading-[1.1] font-['Cormorant_Garamond',serif] italic text-[#F2F0E9] tracking-tighter" id="phil-title">
                We focus on <span className="text-[#CC5833] not-italic font-['Outfit',sans-serif] font-normal tracking-tighter">enduring</span> architecture.
            </h2>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#F2F0E9] relative z-20 -mt-10 rounded-t-[3rem] md:rounded-t-[4rem]" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036]">
                        Signature Installations
                    </h2>
<p className="text-base text-[#1A1A1A]/70 mt-4 font-light">A curated selection of our recent architectural boundary projects.</p>
</div>
<div className="flex gap-4">
<button className="w-14 h-14 rounded-full border border-[#2E4036]/20 flex items-center justify-center hover:bg-[#2E4036] hover:text-[#F2F0E9] text-[#2E4036] transition-colors" id="slide-left"><iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-14 h-14 rounded-full border border-[#2E4036]/20 flex items-center justify-center hover:bg-[#2E4036] hover:text-[#F2F0E9] text-[#2E4036] transition-colors" id="slide-right"><iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar scroll-smooth cursor-grab active:cursor-grabbing" id="portfolio-slider">

<div className="snap-center shrink-0 w-[85vw] md:w-[650px] h-[450px] md:h-[550px] relative rounded-[2rem] overflow-hidden group bg-[#2E4036]/5">
<img alt="Wood Fence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1510629633215-2c4ccce5893d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none">
<span className="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-3 font-normal">01. Wood</span>
<h3 className="text-3xl text-[#F2F0E9] font-['Outfit',sans-serif] font-normal tracking-tighter">Classic Wood Privacy</h3>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[650px] h-[450px] md:h-[550px] relative rounded-[2rem] overflow-hidden group bg-[#2E4036]/5">
<img alt="Metal Fence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none">
<span className="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-3 font-normal">02. Metal</span>
<h3 className="text-3xl text-[#F2F0E9] font-['Outfit',sans-serif] font-normal tracking-tighter">Architectural Metal Boundary</h3>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[650px] h-[450px] md:h-[550px] relative rounded-[2rem] overflow-hidden group bg-[#2E4036]/5">
<img alt="Vinyl Fence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none">
<span className="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-3 font-normal">03. Vinyl</span>
<h3 className="text-3xl text-[#F2F0E9] font-['Outfit',sans-serif] font-normal tracking-tighter">Premium Vinyl Panels</h3>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[650px] h-[450px] md:h-[550px] relative rounded-[2rem] overflow-hidden group bg-[#2E4036]/5">
<img alt="Chainlink Fence" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1502008711828-56dfdb8eb91c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none">
<span className="text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-3 font-normal">04. Chainlink</span>
<h3 className="text-3xl text-[#F2F0E9] font-['Outfit',sans-serif] font-normal tracking-tighter">Industrial Chainlink</h3>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F2F0E9]" id="process">

<div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-[#F2F0E9] px-6 z-10">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="font-['Outfit',sans-serif] text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-6 block font-normal">Phase 01</span>
<h3 className="text-5xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-8">
                        Site Assessment
                    </h3>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                        We extract precise topographical data points. A comprehensive baseline spanning soil composition, elevation changes, and strict property line alignment to ensure no future disputes.
                    </p>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative border border-[#2E4036]/10 rounded-full flex items-center justify-center bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
<svg className="w-3/4 h-3/4 text-[#2E4036]" id="motif-svg" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="2 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="25" stroke="#CC5833" stroke-dasharray="10 10" strokeWidth="1"></circle>
<circle cx="50" cy="50" fill="currentColor" opacity="0.05" r="10"></circle>
<line opacity="0.3" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90"></line>
<line opacity="0.3" stroke="currentColor" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="50"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-[#F2F0E9] px-6 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="font-['Outfit',sans-serif] text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-6 block font-normal">Phase 02</span>
<h3 className="text-5xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-8">
                        Structural Engineering
                    </h3>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                        Our design team evaluates terrain conditions against structural frameworks, identifying the optimal post depths, hardware load thresholds, and precise material specifications for your microclimate.
                    </p>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative border border-[#2E4036]/10 rounded-[2rem] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col p-10 justify-between">
<div className="flex justify-between items-center mb-6">
<div className="w-1/3 h-2 bg-[#2E4036]/10 rounded-full"></div>
<div className="w-10 h-10 rounded-full border border-[#CC5833] flex items-center justify-center text-[#CC5833]">
<iconify-icon className="text-xl" icon="solar:ruler-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 border border-[#2E4036]/10 rounded-xl relative overflow-hidden bg-[#F2F0E9]/30">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#2E4036 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.1'}}></div>
<div className="absolute left-0 top-1/2 w-full h-px bg-[#CC5833] shadow-[0_0_12px_#CC5833]" id="blueprint-line"></div>
<div className="absolute left-1/4 top-1/4 bottom-1/4 w-px bg-[#2E4036] opacity-30"></div>
<div className="absolute left-3/4 top-1/4 bottom-1/4 w-px bg-[#2E4036] opacity-30"></div>
</div>
</div>
</div>
</div>
</div>

<div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-[#F2F0E9] px-6 z-30 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="font-['Outfit',sans-serif] text-sm text-[#CC5833] uppercase tracking-[0.2em] mb-6 block font-normal">Phase 03</span>
<h3 className="text-5xl md:text-6xl leading-[1.1] font-['Outfit',sans-serif] font-normal tracking-tighter text-[#2E4036] mb-8">
                        Precision Installation
                    </h3>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                        Deployment of premium materials. Custom fabricated panels, deep-set footings, and rigorous alignment checks to ensure lasting stability, perfect horizontal lines, and unmatched aesthetics.
                    </p>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative border border-[#2E4036]/10 rounded-[2rem] bg-[#2E4036]/5 shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden">
<img alt="Finished Installation Close-up" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&amp;fit=crop&amp;q=80&amp;w=800" />
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent flex items-end p-10">
<div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-[#F2F0E9] text-sm font-normal border border-white/20">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon> Quality Assured
                            </div>
</div>
</img></div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-[#F2F0E9] rounded-t-[3rem] md:rounded-t-[4rem] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-24 relative z-10">
<div className="col-span-1 md:col-span-2">
<div className="font-['Outfit',sans-serif] font-normal text-4xl uppercase tracking-[0.2em] mb-6 text-[#CC5833]">Alta</div>
<p className="text-base text-[#F2F0E9]/50 max-w-sm leading-relaxed font-light">
                    Precision fence installations powered by architectural engineering. Redefining property boundaries with structural intelligence.
                </p>
<a className="inline-flex items-center gap-3 mt-8 text-[#CC5833] text-base font-normal hover:text-[#F2F0E9] transition-colors" href="tel:6265468482">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon> (626) 546-8482
                </a>
</div>
<div>
<h5 className="font-['Outfit',sans-serif] text-sm text-[#F2F0E9]/40 uppercase tracking-[0.2em] mb-8 font-normal">Index</h5>
<ul className="space-y-4 text-base font-light">
<li><button className="hover:text-[#CC5833] transition-colors text-left" onclick="openPageModal('Materials')">Material Selection</button></li>
<li><a className="hover:text-[#CC5833] transition-colors block" href="#process">Installation Process</a></li>
<li><a className="hover:text-[#CC5833] transition-colors block" href="#portfolio">Project Portfolio</a></li>
<li><a className="hover:text-[#CC5833] transition-colors block" href="#philosophy">Our Philosophy</a></li>
</ul>
</div>
<div>
<h5 className="font-['Outfit',sans-serif] text-sm text-[#F2F0E9]/40 uppercase tracking-[0.2em] mb-8 font-normal">Legal Reference</h5>
<ul className="space-y-4 text-base font-light">
<li><button className="hover:text-[#F2F0E9]/70 transition-colors text-left" onclick="openPageModal('Privacy')">Privacy Policy</button></li>
<li><button className="hover:text-[#F2F0E9]/70 transition-colors text-left" onclick="openPageModal('Terms')">Terms of Service</button></li>
<li><button className="hover:text-[#F2F0E9]/70 transition-colors text-left" onclick="openPageModal('Warranty')">Warranty Information</button></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#F2F0E9]/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
<p className="text-sm text-[#F2F0E9]/40 tracking-wider font-light">© 2024 ALTA FENCING. ALL RIGHTS RESERVED.</p>
<div className="flex items-center gap-3 bg-[#F2F0E9]/5 rounded-full px-5 py-2 border border-[#F2F0E9]/10">
<div className="w-2 h-2 rounded-full bg-[#2E4036] animate-pulse shadow-[0_0_8px_#2E4036]"></div>
<span className="text-xs font-['Outfit',sans-serif] text-[#F2F0E9]/60 tracking-[0.2em] uppercase font-normal">Crews Available</span>
</div>
</div>
<div className="absolute bottom-[5%] left-0 w-full text-[15vw] font-['Outfit',sans-serif] font-normal text-[#F2F0E9]/[0.02] leading-none pointer-events-none select-none text-center tracking-tighter">
            ALTA FENCING
        </div>
</footer>



    </>
  );
}
