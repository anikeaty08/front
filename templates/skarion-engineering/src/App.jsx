import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- SETUP ---
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

        // --- TEXT SPLITTER UTILITY ---
        function splitTextToWords(element) {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            words.forEach(word => {
                const wordWrap = document.createElement('span');
                wordWrap.classList.add('word-wrap');
                wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                element.appendChild(wordWrap);
            });
        }

        // Apply split to all elements with class .split-animate
        document.querySelectorAll('.split-animate').forEach(el => {
            splitTextToWords(el);
        });

        // --- LOADER ---
        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
              .to('.loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });

        function initSite() {
            // Hero Animations
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.5, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, y: 0, stagger: 0.1, duration: 1, delay: 0.5 });
            
            // Hero Parallax
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

            // --- TEXT REVEAL ON SCROLL ---
            const splitElements = document.querySelectorAll('.split-animate');
            splitElements.forEach(el => {
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.015,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%", 
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // --- CARD STACK ANIMATION ---
            const cards = gsap.utils.toArray('.card-item');
            
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.95,
                        opacity: 0.5, 
                        filter: 'blur(5px)',
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 10vh",    
                            scrub: true
                        }
                    });
                }
            });

            // Footer Reveal Effect
            gsap.from('.footer-sticky > div', {
                y: 50,
                opacity: 0,
                scale: 0.95,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top 90%', 
                    end: 'bottom bottom',
                    scrub: true
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">SKARION</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-semibold text-xl tracking-tight-custom flex items-center gap-2">

<iconify-icon icon="solar:globus-linear" strokeWidth="1.5" width="24"></iconify-icon>
            SKARION
        </div>
<div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-300">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:block border border-white/20 px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm" href="#contact">
            Schedule Consultation
        </a>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">

<img alt="Fiber Optic Network" className="absolute inset-0 w-full h-full object-cover opacity-50 hero-img" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center text-white w-full px-4">
<div className="flex justify-center mb-6 overflow-hidden">
<span className="hero-fade opacity-0 text-xs md:text-sm font-medium tracking-[0.3em] uppercase border border-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                        Est. 2024 — Virginia, USA
                    </span>
</div>
<h1 className="display text-[10vw] md:text-[8vw] leading-[0.9] font-medium tracking-tight-custom hero-text overflow-hidden text-white/90">
<span className="block translate-y-full">POWERING</span>
</h1>
<h1 className="display text-[10vw] md:text-[8vw] leading-[0.9] font-medium tracking-tight-custom hero-text overflow-hidden text-white/90">
<span className="block translate-y-full">THE FUTURE</span>
</h1>
<p className="mt-8 text-sm md:text-base font-light text-gray-300 max-w-lg mx-auto hero-fade opacity-0 leading-relaxed">
                    Nationwide Fiber Optic &amp; OSP Engineering Specialists. Building tomorrow's connectivity today with scalable, precise designs.
                </p>

<div className="mt-10 flex flex-wrap justify-center gap-4 hero-fade opacity-0">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-black/20">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> OSP Design
                    </div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-black/20">
<iconify-icon icon="solar:ruler-pen-linear"></iconify-icon> CAD Drafting
                    </div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-black/20">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> GIS Mapping
                    </div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-fade opacity-0 animate-bounce">
<iconify-icon className="text-white/50" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1600px] mx-auto bg-[var(--c-bg)]" id="about">
<div className="md:sticky md:top-32 self-start z-10 bg-[var(--c-bg)] md:bg-transparent px-1 md:px-0" style={{background: 'var(--c-bg, #fff)'}}>
<h2 className="display text-3xl md:text-5xl font-medium tracking-tight-custom leading-tight split-animate text-[#171717] break-words md:break-normal">
                    Building the <br/>Digital <span className="text-gray-400">Foundation.</span>
</h2>
<div className="mt-8 flex flex-col md:flex-row gap-2 md:gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                        Expert Engineers
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:map-linear"></iconify-icon>
                        Nationwide Reach
                    </div>
</div>
</div>
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-600">
<p className="mb-8 split-animate">
                    Skarion Engineering Services is a trusted partner for telecom infrastructure projects. Our experienced engineers and field staff ensure high-quality, scalable fiber solutions that power the digital future.
                </p>
<p className="mb-8 split-animate">
                    Founded in 2024 and headquartered in the United States, we specialize in comprehensive fiber optic and outside plant (OSP) engineering services. From initial network design to final installation, we manage the complex delivery of modern communications networks.
                </p>
<div className="h-px w-full bg-black/10 my-10"></div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-black mb-2">Location</h4>
<p className="text-sm text-gray-500">Virginia, USA (Nationwide)</p>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-black mb-2">Focus</h4>
<p className="text-sm text-gray-500">Telecom &amp; OSP Infrastructure</p>
</div>
</div>
</div>
</section>

<section className="stack-section" id="services">
<div className="text-center mb-24 px-6">
<div className="text-xs uppercase tracking-[0.2em] mb-4 text-gray-500">Capabilities</div>
<h2 className="display text-4xl md:text-6xl font-medium tracking-tight-custom">OUR EXPERTISE</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-sm font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">01</div>
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">OSP Fiber Design</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">Topology &amp; Planning</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Network topology planning, route optimization, and capacity analysis for future-proof designs. We deliver efficient network layouts designed for minimal disruption and maximal scalability.
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon> Route Optimization
                            </div>
</div>
<div className="card-img-wrap">
<img alt="OSP Fiber Design" className="card-img" src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-sm font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">02</div>
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">CAD Drafting &amp; Permits</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">Compliance &amp; Approvals</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Professional drawings for municipal approvals, construction documentation, and compliance verification. We handle permit applications and accurate As-Built documentation.
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:ruler-pen-linear"></iconify-icon> Permit Applications
                            </div>
</div>
<div className="card-img-wrap">
<img alt="CAD Drafting" className="card-img" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-sm font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">03</div>
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">GIS Mapping</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">Asset Management</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Advanced GIS mapping and geographic analysis for efficient fiber infrastructure deployment. Seamlessly integrate field data into centralized management platforms for real-time insights.
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Database Integration
                            </div>
</div>
<div className="card-img-wrap">
<img alt="GIS Mapping" className="card-img" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-sm font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">04</div>
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">Fiber Installation</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">Field Services</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Expert installation including splicing, testing, certification, and maintenance support. End-to-end field management backed by rigorous quality assurance protocols.
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Splicing &amp; Certification
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Fiber Installation" className="card-img" src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F5F5] text-center flex flex-col items-center justify-center relative z-10 border-b border-gray-200">
<h2 className="display text-3xl md:text-4xl font-medium tracking-tight-custom mb-6">Ready to Get Started?</h2>
<div className="max-w-xl text-gray-600 font-light mb-10 leading-relaxed px-6">
                Our expert team is standing by to discuss your fiber optic project and provide customized, scalable solutions tailored to your network needs.
            </div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-px bg-black/20"></div>
<span className="text-xs uppercase tracking-widest text-gray-400">Scroll for Contact</span>
</div>
</section>
</div>


<footer className="footer-sticky bg-[#0f0f0f]" id="contact">
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12 h-full flex flex-col justify-center">
<div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16 items-start">

<div className="space-y-12">
<div>
<h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Get in Touch</h4>
<a className="block display text-4xl md:text-5xl font-medium tracking-tight-custom hover:text-gray-300 transition-colors mb-2" href="tel:+15551234567">
                            +1 (555) 123-4567
                        </a>
<p className="text-gray-400 font-light hover:text-white transition-colors cursor-pointer inline-block">info@skarion.com</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-2 mb-3 text-white">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span className="font-medium text-sm uppercase tracking-wide">Headquarters</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                                Virginia, United States<br/>Serving Nationwide
                            </p>
</div>
<div>
<div className="flex items-center gap-2 mb-3 text-white">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-medium text-sm uppercase tracking-wide">Hours</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                                Mon-Fri: 8AM - 6PM EST<br/>24/7 Response Available
                            </p>
</div>
</div>
</div>

<div className="md:text-right flex flex-col justify-between h-full">
<div>
<h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Connect</h4>
<div className="flex md:justify-end gap-6">
<a className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center" href="https://www.linkedin.com/company/skarion-engineering-services" target="_blank">
<svg aria-label="LinkedIn" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 6.5C7.75 7.32843 7.07843 8 6.25 8C5.42157 8 4.75 7.32843 4.75 6.5C4.75 5.67157 5.42157 5 6.25 5C7.07843 5 7.75 5.67157 7.75 6.5ZM7.5 9.25H5V19H7.5V9.25ZM10.5 9.25H13V10.5352C13.4537 9.7112 14.3812 9 15.6078 9C18.2047 9 18.5 10.9614 18.5 12.9911V19H16V13.3204C16 12.4241 15.8812 11.7625 14.8403 11.7625C13.7993 11.7625 13.5 12.4658 13.5 13.3229V19H11V9.25H10.5Z" fill="currentColor"></path>
</svg>
</a>
</div>
</div>
<div className="mt-12 space-y-4">
<div className="text-xs text-gray-500 uppercase tracking-widest">
<span className="block mb-1">SKARION ENGINEERING SERVICES</span>
<span className="block text-[10px] text-gray-600">Fiber Optic &amp; OSP Solutions</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
<div>© 2024 by Skarion Engineering Services</div>
<div className="mt-2 md:mt-0">Infrastructure Specialists</div>
</div>
</div>
</footer>


    </>
  );
}
