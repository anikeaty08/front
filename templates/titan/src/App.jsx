import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            
            // Register GSAP Plugins
            gsap.registerPlugin(ScrollTrigger);

            /* --- Scroll Progress Indicator --- */
            const progressBar = document.getElementById('scroll-progress');
            window.addEventListener('scroll', () => {
                const scrollPx = document.documentElement.scrollTop;
                const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = scrollPx / winHeightPx;
                progressBar.style.transform = `scaleX(${scrolled})`;
            });

            /* --- Navbar Scroll Morphing --- */
            const navbar = document.getElementById('navbar');
            const hero = document.getElementById('home');
            const observer = new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting) {
                    navbar.classList.add('bg-[#0A0A0A]/70', 'backdrop-blur-xl', 'border', 'border-[#2A2A2A]');
                } else {
                    navbar.classList.remove('bg-[#0A0A0A]/70', 'backdrop-blur-xl', 'border', 'border-[#2A2A2A]');
                }
            }, { threshold: 0.1 });
            observer.observe(hero);

            /* --- Mobile Menu Toggle --- */
            const menuBtn = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            menuBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                    menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl text-[#E8432A]" stroke-width="1.5"></iconify-icon>';
                    mobileLinks.forEach(link => {
                        link.classList.remove('translate-y-8', 'opacity-0');
                    });
                } else {
                    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl" stroke-width="1.5"></iconify-icon>';
                    mobileLinks.forEach(link => {
                        link.classList.add('translate-y-8', 'opacity-0');
                    });
                }
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuBtn.click();
                });
            });

            /* --- Magnetic Buttons Add Hover Span --- */
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                const span = document.createElement('span');
                span.className = 'btn-hover-fill';
                btn.appendChild(span);

                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                    gsap.to(btn, { x: x, y: y, duration: 0.3, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
                });
            });

            /* --- GSAP Hero Animations --- */
            gsap.from(".hero-line", {
                y: 50,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                delay: 0.2
            });

            /* --- Typewriter Labels --- */
            const typewriters = document.querySelectorAll('.typewriter-label');
            typewriters.forEach(tw => {
                const text = tw.getAttribute('data-text');
                tw.innerHTML = '';
                
                ScrollTrigger.create({
                    trigger: tw,
                    start: "top 85%",
                    onEnter: () => {
                        let i = 0;
                        tw.style.opacity = 1;
                        function typeWriter() {
                            if (i < text.length) {
                                tw.innerHTML += text.charAt(i);
                                i++;
                                setTimeout(typeWriter, 40);
                            }
                        }
                        if(tw.innerHTML === '') typeWriter();
                    },
                    once: true
                });
            });

            /* --- Reveal Up/Left Elements --- */
            gsap.utils.toArray('.reveal-up').forEach(elem => {
                gsap.to(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            gsap.utils.toArray('.reveal-left').forEach(elem => {
                gsap.to(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            /* --- Manifesto Word-by-Word Reveal --- */
            const manifesto = document.getElementById('manifesto-text');
            if(manifesto) {
                // Split text manually for styling retention, simplistic approach for HTML string
                const words = manifesto.innerHTML.split(/(<[^>]*>| )/).filter(Boolean);
                manifesto.innerHTML = '';
                words.forEach(word => {
                    if(word.startsWith('<') || word.trim() === '') {
                        manifesto.innerHTML += word;
                    } else {
                        manifesto.innerHTML += `<span class="inline-block opacity-0 translate-y-4 manifesto-word">${word}</span> `;
                    }
                });

                gsap.to('.manifesto-word', {
                    scrollTrigger: {
                        trigger: manifesto,
                        start: "top 80%"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: "power3.out"
                });
            }

            /* --- Number CountUp Logic --- */
            const runCountUp = (elements, durationStr) => {
                elements.forEach(elem => {
                    const target = parseFloat(elem.getAttribute('data-target'));
                    ScrollTrigger.create({
                        trigger: elem,
                        start: "top 85%",
                        once: true,
                        onEnter: () => {
                            gsap.to(elem, {
                                innerHTML: target,
                                duration: durationStr,
                                ease: "power2.out",
                                snap: { innerHTML: 1 },
                                onUpdate: function() {
                                    elem.innerHTML = Math.round(this.targets()[0].innerHTML);
                                }
                            });
                        }
                    });
                });
            };
            runCountUp(document.querySelectorAll('.count-up'), 2);
            runCountUp(document.querySelectorAll('.count-up-slow'), 2.5);

            /* --- Accordion Logic (Services & FAQ) --- */
            const accordions = document.querySelectorAll('.accordion-item');
            accordions.forEach(acc => {
                const btn = acc.querySelector('button');
                const content = acc.querySelector('.accordion-content');
                btn.addEventListener('click', () => {
                    const isActive = acc.classList.contains('active');
                    
                    // Optional: Close others
                    // accordions.forEach(a => {
                    //     a.classList.remove('active');
                    //     a.querySelector('.accordion-content').style.maxHeight = null;
                    // });

                    if (!isActive) {
                        acc.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        acc.classList.remove('active');
                        content.style.maxHeight = null;
                    }
                });
            });

            /* --- Process Stacking Effect --- */
            const processCards = gsap.utils.toArray('.process-card .inner-card');
            processCards.forEach((card, i) => {
                if (i < processCards.length - 1) {
                    gsap.to(card, {
                        scale: 0.92,
                        filter: 'blur(8px)',
                        opacity: 0.4,
                        scrollTrigger: {
                            trigger: processCards[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true
                        }
                    });
                }
            });

            /* --- Testimonial Carousel --- */
            const slides = document.querySelectorAll('.test-slide');
            const dots = document.querySelectorAll('#test-dots button');
            let currentSlide = 0;
            let slideInterval;

            const goToSlide = (index) => {
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('bg-[#E8432A]');
                dots[currentSlide].classList.add('bg-[#2A2A2A]');
                
                currentSlide = index;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.remove('bg-[#2A2A2A]');
                dots[currentSlide].classList.add('bg-[#E8432A]');
            };

            const nextSlide = () => {
                goToSlide((currentSlide + 1) % slides.length);
            };

            // Start auto-advance
            slideInterval = setInterval(nextSlide, 6000);

            // Manual navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    goToSlide(index);
                    slideInterval = setInterval(nextSlide, 6000);
                });
            });

            /* --- Pricing Toggle --- */
            const btnMonthly = document.getElementById('btn-monthly');
            const btnAnnual = document.getElementById('btn-annual');
            const pricingBg = document.getElementById('pricing-bg');
            const prices = document.querySelectorAll('.price-val');
            let isAnnual = false;

            const updatePricing = () => {
                prices.forEach(p => {
                    // Simple crossfade effect
                    gsap.to(p, { opacity: 0, duration: 0.2, onComplete: () => {
                        p.innerText = isAnnual ? p.getAttribute('data-annual') : p.getAttribute('data-monthly');
                        gsap.to(p, { opacity: 1, duration: 0.2 });
                    }});
                });
            };

            btnMonthly.addEventListener('click', () => {
                if(!isAnnual) return;
                isAnnual = false;
                pricingBg.style.transform = 'translateX(0)';
                btnMonthly.classList.replace('text-[#9A9A9A]', 'text-white');
                btnAnnual.classList.replace('text-white', 'text-[#9A9A9A]');
                updatePricing();
            });

            btnAnnual.addEventListener('click', () => {
                if(isAnnual) return;
                isAnnual = true;
                pricingBg.style.transform = 'translateX(100%)';
                btnAnnual.classList.replace('text-[#9A9A9A]', 'text-white');
                btnMonthly.classList.replace('text-white', 'text-[#9A9A9A]');
                updatePricing();
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div className="blueprint-grid"></div>

<div className="fixed top-0 left-0 h-0.5 bg-[#E8432A] z-[100] origin-left scale-x-0 w-full" id="scroll-progress"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl rounded-full transition-all duration-400" id="navbar">
<div className="flex items-center justify-between px-6 py-4">

<a className="uppercase text-sm font-semibold text-[#F5F5F0] tracking-tight font-space" href="#">
                SUPERHUMAN SYSTEMS
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="nav-link relative font-mono-custom text-xs uppercase tracking-widest text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors" href="#services">Services</a>
<a className="nav-link relative font-mono-custom text-xs uppercase tracking-widest text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors" href="#work">Work</a>
<a className="nav-link relative font-mono-custom text-xs uppercase tracking-widest text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors" href="#partner">Partner</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex magnetic-btn relative overflow-hidden bg-[#E8432A] text-white rounded-full px-6 py-2.5 font-inter text-sm font-medium transition-transform transform" href="#contact">
<span className="relative z-10 flex items-center gap-2">Start a Project <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="btn-hover-fill"></span><span className="btn-hover-fill"></span></a>
<button className="md:hidden text-[#F5F5F0] p-2 focus:outline-none" id="menu-toggle">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl z-[45] flex flex-col justify-center px-8 opacity-0 pointer-events-none transition-opacity duration-500" id="mobile-menu">
<div className="flex flex-col gap-6 text-[#F5F5F0] font-space font-semibold text-3xl uppercase tracking-tight">
<a className="mobile-link translate-y-8 opacity-0 transition-all duration-500 delay-100 hover:text-[#E8432A]" href="#home">Home</a>
<a className="mobile-link translate-y-8 opacity-0 transition-all duration-500 delay-150 hover:text-[#E8432A]" href="#services">Services</a>
<a className="mobile-link translate-y-8 opacity-0 transition-all duration-500 delay-200 hover:text-[#E8432A]" href="#work">Work</a>
<a className="mobile-link translate-y-8 opacity-0 transition-all duration-500 delay-250 hover:text-[#E8432A]" href="#partner">Partner</a>
<a className="mobile-link translate-y-8 opacity-0 transition-all duration-500 delay-300 hover:text-[#E8432A]" href="#contact">Contact</a>
</div>
</div>

<section className="relative h-[100dvh] w-full flex items-end px-8 md:px-16 pb-20 md:pb-28" id="home">

<div className="absolute inset-0 z-[-1]">
<img alt="Dramatic Construction Site" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1541888086225-f6404f45af53?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
</div>

<div className="max-w-5xl w-full z-10 flex flex-col items-start">
<div className="hero-line font-mono-custom text-xs uppercase tracking-[0.3em] text-[#9A9A9A] mb-6">
                (GROWTH SYSTEMS FOR CONSTRUCTION)
            </div>
<h1 className="hero-line font-space font-semibold tracking-tight text-5xl md:text-7xl lg:text-8xl text-[#F5F5F0] leading-none mb-2">
                We Build the Systems.
            </h1>
<h2 className="hero-line md:text-7xl lg:text-8xl leading-none text-5xl italic text-[#E8432A] font-dm mb-8 pr-4">
                You Become Unstoppable.
            </h2>
<p className="hero-line font-inter text-lg md:text-xl text-[#9A9A9A] max-w-2xl mb-10 text-balance">
                Premium design. AI automation. Executive coaching. One system.
            </p>
<a className="hero-line magnetic-btn relative overflow-hidden bg-[#E8432A] text-white rounded-full px-8 py-4 font-inter text-base font-medium inline-flex items-center gap-2" href="#contact">
<span className="relative z-10 flex items-center gap-2">Start a Project <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="btn-hover-fill"></span><span className="btn-hover-fill"></span></a>
</div>

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2A2A2A] flex justify-center">
<div className="absolute bottom-4 text-[#9A9A9A] animate-bounce" style={{animationDuration: '2s', animationName: 'bounce-subtle'}}>
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</section>

<div className="border-y border-[#2A2A2A] bg-[#0A0A0A] py-6 overflow-hidden marquee-container flex whitespace-nowrap relative select-none">
<div className="animate-marquee font-space font-semibold text-sm uppercase tracking-widest text-[#666666] flex items-center">
<span className="mx-8">X-ACT PLUMBING</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">TEXAS ONE SOURCE</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">ARCHFAB</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">ARCON</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">RIVON</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">RYZE ARCHITECTURAL</span><span className="text-[#E8432A]">·</span>

<span className="mx-8">X-ACT PLUMBING</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">TEXAS ONE SOURCE</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">ARCHFAB</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">ARCON</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">RIVON</span><span className="text-[#E8432A]">·</span>
<span className="mx-8">RYZE ARCHITECTURAL</span><span className="text-[#E8432A]">·</span>
</div>
</div>

<section className="py-32 px-8 md:px-16 w-full max-w-[1400px] mx-auto relative">
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-12 typewriter-label" data-text="(ABOUT)">(</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
<div className="lg:col-span-7">
<p className="font-space font-medium text-2xl md:text-4xl lg:text-5xl leading-tight text-[#F5F5F0] text-balance" id="manifesto-text">
<span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">We</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">fuse</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">premium</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">design</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">with</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">17</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">years</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">of</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">growth</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">strategy</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">to</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">give</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">construction</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">companies</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">the</span> <span className="text-[#E8432A]"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">brand</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">authority</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">and</span> <span className="text-[#E8432A]"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">AI-powered</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">systems</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">to</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">dominate</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">their</span> <span className="inline-block opacity-0 translate-y-4 manifesto-word"></span><span className="inline-block opacity-0 translate-y-4 manifesto-word">market.
</span> </p>
</div>
<div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">

<div className="bg-[#141414] border border-[#2A2A2A] rounded-[1.5rem] p-6 system-card reveal-up">
<div className="font-space font-semibold text-4xl text-[#F5F5F0] mb-2"><span className="count-up" data-target="120">120</span>+</div>
<div className="font-inter text-sm text-[#9A9A9A]">Projects Delivered</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-[1.5rem] p-6 system-card reveal-up" style={{transitionDelay: '100ms'}}>
<div className="font-space font-semibold text-4xl text-[#F5F5F0] mb-2"><span className="count-up" data-target="17">17</span>+</div>
<div className="font-inter text-sm text-[#9A9A9A]">Years Experience</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-[1.5rem] p-6 system-card reveal-up" style={{transitionDelay: '200ms'}}>
<div className="font-space font-semibold text-4xl text-[#F5F5F0] mb-2"><span className="count-up" data-target="70">0</span>%</div>
<div className="font-inter text-sm text-[#9A9A9A]">Efficiency Gains</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-[1.5rem] p-6 system-card reveal-up" style={{transitionDelay: '300ms'}}>
<div className="font-space font-semibold text-4xl text-[#F5F5F0] mb-2">$<span className="count-up" data-target="5">0</span>M+</div>
<div className="font-inter text-sm text-[#9A9A9A]">Client Rev Growth</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-16 w-full max-w-[1400px] mx-auto" id="work">
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-8 typewriter-label" data-text="(PROOF)"></div>
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-16 reveal-up">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="md:col-span-2 group system-card bg-[#141414] border border-[#2A2A2A] rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-[500px] reveal-up cursor-pointer">
<div className="w-full md:w-3/5 h-1/2 md:h-full overflow-hidden relative">
<img alt="Arcon Branding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#141414] md:from-transparent md:bg-gradient-to-r via-transparent to-transparent opacity-80"></div>
</div>
<div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-end md:justify-center h-1/2 md:h-full bg-[#141414]">
<div className="flex items-center justify-between mb-4">
<span className="font-mono-custom text-xs text-[#E8432A]">01</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1 text-xs text-[#666666] font-inter uppercase tracking-wide">BRANDING</span>
</div>
<h3 className="font-space font-semibold text-3xl text-[#F5F5F0] mb-2">Arcon</h3>
<p className="font-inter text-sm text-[#9A9A9A]">Brand identity system for a premier general contractor.</p>
</div>
</div>

<div className="group system-card bg-[#141414] border border-[#2A2A2A] rounded-[2rem] overflow-hidden flex flex-col h-[450px] reveal-up cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="w-full h-3/5 overflow-hidden relative">
<img alt="Rivon System" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
</div>
<div className="w-full h-2/5 p-8 flex flex-col justify-end bg-[#141414]">
<div className="flex items-center justify-between mb-3">
<span className="font-mono-custom text-xs text-[#E8432A]">02</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1 text-xs text-[#666666] font-inter uppercase tracking-wide">FULL SYSTEM</span>
</div>
<h3 className="font-space font-semibold text-2xl text-[#F5F5F0] mb-2">Rivon</h3>
<p className="font-inter text-sm text-[#9A9A9A]">Website, branding, and AI infrastructure for an engineering firm.</p>
</div>
</div>

<div className="group system-card bg-[#141414] border border-[#2A2A2A] rounded-[2rem] overflow-hidden flex flex-col h-[450px] reveal-up cursor-pointer" style={{transitionDelay: '200ms'}}>
<div className="w-full h-3/5 overflow-hidden relative">
<img alt="Ryze Tech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541888086225-f6404f45af53?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(0.5) contrast(1.2)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
</div>
<div className="w-full h-2/5 p-8 flex flex-col justify-end bg-[#141414]">
<div className="flex items-center justify-between mb-3">
<span className="font-mono-custom text-xs text-[#E8432A]">03</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1 text-xs text-[#666666] font-inter uppercase tracking-wide">AI + WEB</span>
</div>
<h3 className="font-space font-semibold text-2xl text-[#F5F5F0] mb-2">Ryze</h3>
<p className="font-inter text-sm text-[#9A9A9A]">AI infrastructure with RAG system for a construction conglomerate.</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-end">
<a className="group font-inter font-medium text-[#E8432A] flex items-center gap-2 hover:text-[#FF6B35] transition-colors" href="#">
                View All Projects <iconify-icon className="transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-8 md:px-16 w-full max-w-[1400px] mx-auto" id="services">
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-8 typewriter-label" data-text="(SERVICES)"></div>
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-16 reveal-up">How We Can Help</h2>
<div className="flex flex-col border-t border-[#2A2A2A]">

<div className="accordion-item border-b border-[#2A2A2A] group reveal-left">
<button className="w-full py-8 md:py-12 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-center gap-8 md:gap-16">
<span className="font-space font-semibold text-5xl md:text-7xl text-[#E8432A] transition-transform duration-300 group-hover:scale-110">01</span>
<span className="font-space font-semibold text-xl md:text-2xl text-[#F5F5F0]">Establish Your Presence</span>
</div>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-2xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div>
<p className="font-inter text-base text-[#9A9A9A] mb-6">Premium websites that set you apart and seamlessly bring in business. Designed for authority, built for performance.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Premium Design</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Responsive Web</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">AI Bot Integration</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Calendar Booking</span>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item border-b border-[#2A2A2A] group reveal-left" style={{transitionDelay: '100ms'}}>
<button className="w-full py-8 md:py-12 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-center gap-8 md:gap-16">
<span className="font-space font-semibold text-5xl md:text-7xl text-[#E8432A] transition-transform duration-300 group-hover:scale-110">02</span>
<span className="font-space font-semibold text-xl md:text-2xl text-[#F5F5F0]">Scale with Confidence</span>
</div>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-2xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div>
<p className="font-inter text-base text-[#9A9A9A] mb-6">AI-powered lead generation that qualifies and books automatically. Stop chasing bad leads and focus on closing.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">SEO/SEOLLM</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Lead Automation</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Digital Ads</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Automated Outreach</span>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item border-b border-[#2A2A2A] group reveal-left" style={{transitionDelay: '200ms'}}>
<button className="w-full py-8 md:py-12 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-center gap-8 md:gap-16">
<span className="font-space font-semibold text-5xl md:text-7xl text-[#E8432A] transition-transform duration-300 group-hover:scale-110">03</span>
<span className="font-space font-semibold text-xl md:text-2xl text-[#F5F5F0]">Systemize Operations</span>
</div>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-2xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div>
<p className="font-inter text-base text-[#9A9A9A] mb-6">AI systems that cut 70% of manual office work with 30% margin increase. Turn chaos into clockwork.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Bid Automation</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Bookkeeping</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Equipment Tracking</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Crew Scheduling</span>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item border-b border-[#2A2A2A] group reveal-left" style={{transitionDelay: '300ms'}}>
<button className="w-full py-8 md:py-12 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-center gap-8 md:gap-16">
<span className="font-space font-semibold text-5xl md:text-7xl text-[#E8432A] transition-transform duration-300 group-hover:scale-110">04</span>
<span className="font-space font-semibold text-xl md:text-2xl text-[#F5F5F0]">Lead with Clarity</span>
</div>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-2xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div>
<p className="font-inter text-base text-[#9A9A9A] mb-6">Certified executive coaching for the next evolution of your business. Overcome bottlenecks and scale yourself as a leader.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Executive Coaching</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Leadership</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Business Analysis</span>
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#9A9A9A] font-inter">Team Training</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] process-wrapper py-24 px-4 md:px-8">

<div className="process-card pb-[3vh] z-[1]">
<div className="w-full max-w-6xl h-[85vh] bg-[#141414] rounded-[2.5rem] border border-[#2A2A2A] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden inner-card shadow-2xl shadow-black/50" style={{filter: 'none'}}>

<svg className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] opacity-[0.03] text-white pointer-events-none" viewbox="0 0 100 100">
<circle className="origin-center animate-[spin_60s_linear_infinite]" cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
<circle className="origin-center animate-[spin_40s_linear_infinite_reverse]" cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="20" stroke="currentColor" strokeWidth="1"></circle>
</svg>
<div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono-custom text-xs uppercase tracking-widest text-[#666666]">
                    STEP 01
                </div>
<div className="max-w-3xl z-10 relative">
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-6">Discovery</h2>
<p className="font-inter text-lg md:text-xl text-[#9A9A9A] leading-relaxed">
                        We learn your business — goals, obstacles, competitors, and what makes you dangerous. We map the terrain before we strike.
                    </p>
</div>
</div>
</div>

<div className="process-card pb-[2vh] z-[2]">
<div className="w-full max-w-6xl h-[85vh] bg-[#141414] rounded-[2.5rem] border border-[#2A2A2A] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden inner-card shadow-2xl shadow-black/50" style={{filter: 'none'}}>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none flex flex-col justify-around">
<div className="w-full h-px bg-white relative"><div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white to-transparent animate-[translateX_4s_linear_infinite]" style={{animation: 'scan 3s linear infinite'}}></div></div>
<div className="w-full h-px bg-white relative"><div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white to-transparent animate-[translateX_4s_linear_infinite]" style={{animation: 'scan 4s linear infinite reverse'}}></div></div>
</div>
<style>@keyframes scan { 0% { left: -25%; } 100% { left: 125%; } }</style>
<div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono-custom text-xs uppercase tracking-widest text-[#666666]">
                    STEP 02
                </div>
<div className="max-w-3xl z-10 relative">
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-6">Kickoff</h2>
<p className="font-inter text-lg md:text-xl text-[#9A9A9A] leading-relaxed">
                        Scope locked, milestones set, execution begins. No fluff, no delays. We build the engine while you run the business.
                    </p>
</div>
</div>
</div>

<div className="process-card pb-[1vh] z-[3]">
<div className="w-full max-w-6xl h-[85vh] bg-[#141414] rounded-[2.5rem] border border-[#2A2A2A] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden inner-card shadow-2xl shadow-black/50" style={{filter: 'none'}}>

<svg className="absolute inset-0 w-full h-full opacity-[0.03] text-white pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="animate-pulse" d="M0,50 Q25,10 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" style={{animationDuration: '3s'}}></path>
<path className="animate-pulse" d="M0,60 Q25,20 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.2" style={{animationDuration: '4s', animationDelay: '1s'}}></path>
</svg>
<div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono-custom text-xs uppercase tracking-widest text-[#666666]">
                    STEP 03
                </div>
<div className="max-w-3xl z-10 relative">
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-6">Refine</h2>
<p className="font-inter text-lg md:text-xl text-[#9A9A9A] leading-relaxed">
                        Deliverables ship. You give feedback. We fine-tune until it's lethal. Perfection is standard operation procedure.
                    </p>
</div>
</div>
</div>

<div className="process-card z-[4]">
<div className="w-full max-w-6xl h-[85vh] bg-[#141414] rounded-[2.5rem] border border-[#2A2A2A] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden inner-card shadow-2xl shadow-black/50">

<div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="absolute top-8 left-8 md:top-12 md:left-12 font-mono-custom text-xs uppercase tracking-widest text-[#666666]">
                    STEP 04
                </div>
<div className="max-w-3xl z-10 relative">
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-6">Grow</h2>
<p className="font-inter text-lg md:text-xl text-[#9A9A9A] leading-relaxed">
                        Launch with confidence. We stay in your corner for what comes next, scaling systems as you scale revenue.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 md:px-16 w-full relative">
<div className="max-w-[1400px] mx-auto bg-[#141414] border border-[#2A2A2A] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden z-10">

<div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#E8432A] opacity-15 pointer-events-none mix-blend-screen"></div>
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-8 typewriter-label relative z-10" data-text="(WHY US)"></div>
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-16 relative z-10 reveal-up">Numbers Don't Lie</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-b border-[#2A2A2A] pb-16 relative z-10" id="metrics-grid">

<div className="flex flex-col lg:border-r border-[#2A2A2A] lg:pr-8 reveal-up">
<div className="font-space font-semibold tracking-tight text-6xl md:text-8xl text-[#F5F5F0] mb-2"><span className="count-up-slow" data-target="120">0</span>+</div>
<div className="font-inter text-sm text-[#9A9A9A]">Successful Projects</div>
</div>

<div className="flex flex-col lg:border-r border-[#2A2A2A] lg:pr-8 lg:pl-4 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="font-space font-semibold tracking-tight text-6xl md:text-8xl text-[#F5F5F0] mb-2"><span className="count-up-slow" data-target="17">0</span>+</div>
<div className="font-inter text-sm text-[#9A9A9A]">Years Experience</div>
</div>

<div className="flex flex-col lg:border-r border-[#2A2A2A] lg:pr-8 lg:pl-4 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="font-space font-semibold tracking-tight text-6xl md:text-8xl text-[#F5F5F0] mb-2"><span className="count-up-slow" data-target="70">0</span>%</div>
<div className="font-inter text-sm text-[#9A9A9A]">Efficiency Gains</div>
</div>

<div className="flex flex-col lg:pl-4 reveal-up" style={{transitionDelay: '300ms'}}>
<div className="font-space font-semibold tracking-tight text-6xl md:text-8xl text-[#F5F5F0] mb-2">$<span className="count-up-slow" data-target="5">0</span>M+</div>
<div className="font-inter text-sm text-[#9A9A9A]">Revenue Growth</div>
</div>
</div>
<div className="pt-16 max-w-4xl relative z-10 reveal-up" style={{transitionDelay: '400ms'}}>
<blockquote className="font-dm italic text-2xl md:text-3xl text-[#F5F5F0] leading-snug mb-6">
                    "Superhuman Systems didn't just build us a website; they architected a machine that prints qualified leads and organizes our back-office. Total paradigm shift."
                </blockquote>
<div className="font-inter text-sm text-[#9A9A9A]">
                    — Executive Board, Ryze Architectural
                </div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-16 w-full max-w-[1400px] mx-auto overflow-hidden">
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-12 typewriter-label text-center" data-text="(TESTIMONIALS)"></div>
<div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[350px]">

<div className="relative w-full h-full" id="testimonial-slider">

<div className="test-slide active bg-[#141414] border border-[#2A2A2A] rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-between relative">
<div className="absolute top-6 left-6 font-dm text-8xl text-[#E8432A] opacity-30 leading-none">"</div>
<p className="font-inter text-lg md:text-xl text-[#F5F5F0] leading-relaxed relative z-10 mt-8">
                        "I've been giving your contact to every person that mentions a website. You've been awesome. I'm grateful to work with you."
                    </p>
<div className="flex items-center gap-4 mt-8 relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-[#2A2A2A] bg-[#1C1C1C] flex items-center justify-center font-space font-semibold text-[#F5F5F0]">DC</div>
<div>
<div className="font-space font-semibold text-[#F5F5F0]">Daniel Clayburn</div>
<div className="font-inter text-sm text-[#9A9A9A]">CEO, X-Act Plumbing</div>
</div>
</div>
</div>

<div className="test-slide bg-[#141414] border border-[#2A2A2A] rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-between relative">
<div className="absolute top-6 left-6 font-dm text-8xl text-[#E8432A] opacity-30 leading-none">"</div>
<p className="font-inter text-lg md:text-xl text-[#F5F5F0] leading-relaxed relative z-10 mt-8">
                        "The branding is amazing and the AI systems already saved us from staffing up. Efficiency improved 20% in two months."
                    </p>
<div className="flex items-center gap-4 mt-8 relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-[#2A2A2A] bg-[#1C1C1C] flex items-center justify-center font-space font-semibold text-[#F5F5F0]">EW</div>
<div>
<div className="font-space font-semibold text-[#F5F5F0]">Evelyn Wright</div>
<div className="font-inter text-sm text-[#9A9A9A]">Marketing Director, ArchFab</div>
</div>
</div>
</div>

<div className="test-slide bg-[#141414] border border-[#2A2A2A] rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-between relative">
<div className="absolute top-6 left-6 font-dm text-8xl text-[#E8432A] opacity-30 leading-none">"</div>
<p className="font-inter text-lg md:text-xl text-[#F5F5F0] leading-relaxed relative z-10 mt-8">
                        "It's like having staff growing my business in the background. My secret weapon against larger competitors."
                    </p>
<div className="flex items-center gap-4 mt-8 relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-[#2A2A2A] bg-[#1C1C1C] flex items-center justify-center font-space font-semibold text-[#F5F5F0]">MA</div>
<div>
<div className="font-space font-semibold text-[#F5F5F0]">Mike Alderman</div>
<div className="font-inter text-sm text-[#9A9A9A]">President, Texas One Source</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-3 mt-8" id="test-dots">
<button className="w-2 h-2 rounded-full bg-[#E8432A] transition-colors duration-300" data-index="0"></button>
<button className="w-2 h-2 rounded-full bg-[#2A2A2A] transition-colors duration-300" data-index="1"></button>
<button className="w-2 h-2 rounded-full bg-[#2A2A2A] transition-colors duration-300" data-index="2"></button>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-16 w-full max-w-[1400px] mx-auto" id="partner">
<div className="text-center mb-16 reveal-up">
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-6 inline-block typewriter-label" data-text="(PARTNER)"></div>
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-5xl text-[#F5F5F0] mb-4">Growth Partnership Programs</h2>
<p className="font-inter text-lg text-[#9A9A9A] max-w-2xl mx-auto">High-touch executive coaching and AI infrastructure consulting. Choose your path.</p>

<div className="mt-8 inline-flex items-center bg-[#141414] border border-[#2A2A2A] rounded-full p-1 relative">
<div className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-[#E8432A] rounded-full transition-transform duration-300 ease-out z-0" id="pricing-bg"></div>
<button className="relative z-10 px-6 py-2 rounded-full font-inter text-sm font-medium text-white transition-colors duration-300" id="btn-monthly">Monthly</button>
<button className="relative z-10 px-6 py-2 rounded-full font-inter text-sm font-medium text-[#9A9A9A] transition-colors duration-300" id="btn-annual">Annual (-25%)</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">

<div className="bg-[#141414] border border-[#2A2A2A] rounded-[2rem] p-8 flex flex-col system-card reveal-up">
<h3 className="font-space font-semibold text-2xl text-[#F5F5F0] mb-2">Coaching + Training</h3>
<p className="font-inter text-sm text-[#9A9A9A] mb-8">Executive leadership evolution.</p>
<div className="mb-8">
<span className="font-space font-semibold text-4xl text-[#F5F5F0] price-val" data-annual="$3,750" data-monthly="$5,000">$5,000</span>
<span className="font-inter text-sm text-[#9A9A9A]">/mo</span>
<div className="font-mono-custom text-xs text-[#666666] mt-1">(3 mo min)</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">1-to-1 CEO Coaching</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">C-Suite Group Coaching</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Team Leadership Training</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Leadership Curriculum</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Business Analysis</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Priority Support</span></li>
</ul>
<a className="w-full text-center magnetic-btn relative overflow-hidden bg-[#1C1C1C] border border-[#2A2A2A] text-[#F5F5F0] rounded-full py-3 font-inter text-sm font-medium transition-colors" href="#contact">
<span className="relative z-10">Select Plan</span>
<span className="btn-hover-fill"></span><span className="btn-hover-fill"></span></a>
</div>

<div className="bg-[#141414] border border-[#E8432A] rounded-[2rem] p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-red-900/10 system-card reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-8 -translate-y-1/2 bg-[#E8432A] text-white font-mono-custom text-xs uppercase tracking-widest px-3 py-1 rounded-full">POPULAR</div>
<h3 className="font-space font-semibold text-2xl text-[#F5F5F0] mb-2">AI Infrastructure</h3>
<p className="font-inter text-sm text-[#9A9A9A] mb-8">Full operational automation.</p>
<div className="mb-8">
<span className="font-space font-semibold text-4xl text-[#F5F5F0] price-val" data-annual="$1,875" data-monthly="$2,500">$2,500</span>
<span className="font-inter text-sm text-[#9A9A9A]">/mo</span>
<div className="font-mono-custom text-xs text-[#666666] mt-1">(3 mo min)</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#F5F5F0]">Lead Capture &amp; Response</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#F5F5F0]">CRM &amp; Pipeline Management</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#F5F5F0]">Estimate &amp; Proposal Systems</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Job Scheduling Engine</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Collections &amp; Cashflow</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Internal Comms Automation</span></li>
</ul>
<a className="w-full text-center magnetic-btn relative overflow-hidden bg-[#E8432A] text-white rounded-full py-3 font-inter text-sm font-medium transition-transform" href="#contact">
<span className="relative z-10">Start Building</span>
<span className="btn-hover-fill"></span><span className="btn-hover-fill"></span></a>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-[2rem] p-8 flex flex-col system-card reveal-up" style={{transitionDelay: '200ms'}}>
<h3 className="font-space font-semibold text-2xl text-[#F5F5F0] mb-2">Bespoke</h3>
<p className="font-inter text-sm text-[#9A9A9A] mb-8">Custom scopes &amp; builds.</p>
<div className="mb-8">
<span className="font-space font-semibold text-3xl text-[#F5F5F0]">Contact Us</span>
<div className="font-mono-custom text-xs text-[#666666] mt-2 opacity-0 select-none">-</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Custom-scoped solutions</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Enterprise integration</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Specialized LLM training</span></li>
<li className="flex items-start gap-3"><span className="text-[#E8432A] mt-0.5">+</span><span className="font-inter text-sm text-[#9A9A9A]">Legacy system migration</span></li>
</ul>
<a className="w-full text-center magnetic-btn relative overflow-hidden bg-[#1C1C1C] border border-[#2A2A2A] text-[#F5F5F0] rounded-full py-3 font-inter text-sm font-medium transition-colors" href="#contact">
<span className="relative z-10">Let's Talk</span>
<span className="btn-hover-fill"></span><span className="btn-hover-fill"></span></a>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-16 w-full max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-6 inline-block typewriter-label" data-text="(FAQ)"></div>
<h2 className="font-space font-semibold tracking-tight text-4xl text-[#F5F5F0] reveal-up">Got Questions?</h2>
</div>
<div className="flex flex-col border-t border-[#2A2A2A]">
<div className="accordion-item border-b border-[#2A2A2A] group reveal-up">
<button className="w-full py-6 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<span className="font-space font-semibold text-lg text-[#F5F5F0]">What's your typical process for a new project?</span>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<p className="pb-6 font-inter text-base text-[#9A9A9A] leading-relaxed">
                        Discovery → consensus → strategy → milestones → execution. We collaborate throughout, keeping you informed without overwhelming your schedule.
                    </p>
</div>
</div>
<div className="accordion-item border-b border-[#2A2A2A] group reveal-up" style={{transitionDelay: '50ms'}}>
<button className="w-full py-6 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<span className="font-space font-semibold text-lg text-[#F5F5F0]">How long does a project usually take?</span>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<p className="pb-6 font-inter text-base text-[#9A9A9A] leading-relaxed">
                        Smart websites take ~1 week. Custom brand identity takes 2-3 weeks. Full AI infrastructure implementation generally takes 4-6 weeks depending on complexity.
                    </p>
</div>
</div>
<div className="accordion-item border-b border-[#2A2A2A] group reveal-up" style={{transitionDelay: '100ms'}}>
<button className="w-full py-6 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<span className="font-space font-semibold text-lg text-[#F5F5F0]">Do you offer packages or custom quotes?</span>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<p className="pb-6 font-inter text-base text-[#9A9A9A] leading-relaxed">
                        Both. We have structured monthly partnerships for ongoing growth and support, as well as bespoke project scoping for specialized, early-stage, or enterprise needs.
                    </p>
</div>
</div>
<div className="accordion-item border-b border-[#2A2A2A] group reveal-up" style={{transitionDelay: '150ms'}}>
<button className="w-full py-6 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<span className="font-space font-semibold text-lg text-[#F5F5F0]">What's included in a branding package?</span>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<p className="pb-6 font-inter text-base text-[#9A9A9A] leading-relaxed">
                        Our 7-step process delivers: primary/secondary logos, specific color palette codes, typography pairing, comprehensive brand style guide, and optional social/document templates.
                    </p>
</div>
</div>
<div className="accordion-item border-b border-[#2A2A2A] group reveal-up" style={{transitionDelay: '200ms'}}>
<button className="w-full py-6 flex items-center justify-between text-left group-hover:bg-[#141414] transition-colors px-4 rounded-xl -mx-4">
<span className="font-space font-semibold text-lg text-[#F5F5F0]">Can you work with our existing team?</span>
<iconify-icon className="accordion-icon text-[#9A9A9A] text-xl transition-transform duration-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content px-4 -mx-4">
<p className="pb-6 font-inter text-base text-[#9A9A9A] leading-relaxed">
                        Yes. We are happy to act as strategic partners, collaborating closely with your existing internal developers, content creators, or marketing staff to implement our systems.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-16 w-full max-w-[1400px] mx-auto overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<div className="font-mono-custom text-xs uppercase tracking-[0.3em] text-[#666666] mb-4 typewriter-label" data-text="(INSIGHTS)"></div>
<h2 className="font-space font-semibold tracking-tight text-4xl text-[#F5F5F0] reveal-up">Latest Insights</h2>
</div>
<a className="hidden md:flex group font-inter font-medium text-[#E8432A] items-center gap-2 hover:text-[#FF6B35] transition-colors mt-4 md:mt-0 reveal-up" href="#">
                See All Insights <iconify-icon className="transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-8 px-8 md:mx-0 md:px-0">

<div className="min-w-[85vw] md:min-w-0 snap-center group system-card bg-[#141414] border border-[#2A2A2A] rounded-[2rem] overflow-hidden flex flex-col cursor-pointer reveal-up">
<div className="aspect-video overflow-hidden relative">
<img alt="Drone tech construction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%]" src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center justify-between mb-4">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#E8432A] font-inter uppercase tracking-wide">CONSTRUCTION AI</span>
<span className="font-mono-custom text-xs text-[#666666]">Sep 2025</span>
</div>
<h3 className="font-space font-semibold text-xl text-[#F5F5F0] leading-snug line-clamp-2">From Dirt to Digital Dominance: How AI Is Rewriting the Future of Construction</h3>
</div>
</div>

<div className="min-w-[85vw] md:min-w-0 snap-center group system-card bg-[#141414] border border-[#2A2A2A] rounded-[2rem] overflow-hidden flex flex-col cursor-pointer reveal-up" style={{transitionDelay: '100ms'}}>
<div className="aspect-video overflow-hidden relative">
<img alt="Tech setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%]" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center justify-between mb-4">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#E8432A] font-inter uppercase tracking-wide">GROWTH</span>
<span className="font-mono-custom text-xs text-[#666666]">Aug 2025</span>
</div>
<h3 className="font-space font-semibold text-xl text-[#F5F5F0] leading-snug line-clamp-2">How DFW Contractors Can Cut Lead Costs in Half with AI-Powered Systems</h3>
</div>
</div>

<div className="min-w-[85vw] md:min-w-0 snap-center group system-card bg-[#141414] border border-[#2A2A2A] rounded-[2rem] overflow-hidden flex flex-col cursor-pointer reveal-up" style={{transitionDelay: '200ms'}}>
<div className="aspect-video overflow-hidden relative">
<img alt="Blueprint strategy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%]" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&amp;w=2697&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center justify-between mb-4">
<span className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-3 py-1 text-xs text-[#E8432A] font-inter uppercase tracking-wide">STRATEGY</span>
<span className="font-mono-custom text-xs text-[#666666]">Jul 2025</span>
</div>
<h3 className="font-space font-semibold text-xl text-[#F5F5F0] leading-snug line-clamp-2">The $10M Blueprint: Using AI to Land Bigger Bids and Run Leaner</h3>
</div>
</div>
</div>
<a className="md:hidden mt-8 group font-inter font-medium text-[#E8432A] flex items-center justify-center gap-2 hover:text-[#FF6B35] transition-colors" href="#">
            See All Insights <iconify-icon className="transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</section>

<section className="relative py-40 px-8 flex items-center justify-center border-t border-[#2A2A2A]" id="contact">
<div className="absolute inset-0 z-[-1]">
<img alt="Golden Hour Crane" className="w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&amp;w=2679&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm"></div>
</div>
<div className="max-w-4xl text-center z-10">
<h2 className="font-space font-semibold tracking-tight text-4xl md:text-6xl text-[#F5F5F0] mb-6 reveal-up">Let's Build Something Extraordinary.</h2>
<p className="font-inter text-lg text-[#9A9A9A] mb-12 reveal-up" style={{transitionDelay: '100ms'}}>Have a project in mind? Looking to systematically scale? Let's talk.</p>
<div className="reveal-up" style={{transitionDelay: '200ms'}}>
<a className="magnetic-btn relative overflow-hidden bg-[#E8432A] text-white rounded-full px-10 py-5 font-inter text-lg font-medium inline-flex items-center gap-3" href="#">
<span className="relative z-10 flex items-center gap-3">Get In Touch <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="btn-hover-fill"></span><span className="btn-hover-fill"></span></a>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] rounded-t-[3rem] py-20 px-8 md:px-16 w-full relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

<div className="absolute top-0 left-0 w-full h-[1px] bg-[#E8432A]"></div>
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col">
<span className="font-space font-semibold text-lg uppercase tracking-tight text-[#F5F5F0] mb-4">SUPERHUMAN SYSTEMS</span>
<p className="font-inter text-sm text-[#9A9A9A] max-w-xs">We build AI-powered growth infrastructure for construction companies.</p>
</div>

<div className="flex flex-col gap-3">
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit" href="#home">Home</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit" href="#about">About</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit" href="#services">Services</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit" href="#work">Work</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit" href="#contact">Contact</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit" href="#">Blog</a>
</div>

<div className="flex flex-col gap-3">
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors" href="mailto:hello@superhumansystems.com">hello@superhumansystems.com</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors" href="tel:+18173809195">+1 (817) 380-9195</a>
<span className="font-inter text-sm text-[#9A9A9A]">Dallas/Fort Worth, TX</span>
</div>

<div className="flex flex-col gap-3">
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:twitter-linear"></iconify-icon> X / Twitter</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon> Instagram</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:linkedin-linear"></iconify-icon> LinkedIn</a>
<a className="font-inter text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors w-fit flex items-center gap-2" href="#"><iconify-icon icon="solar:video-frame-linear"></iconify-icon> YouTube</a>
</div>
</div>

<div className="w-full max-w-md mb-16">
<form className="flex items-center bg-[#141414] border border-[#2A2A2A] rounded-full p-1 focus-within:border-[#E8432A] transition-colors">
<input className="bg-transparent border-none outline-none text-sm text-[#F5F5F0] placeholder-[#666666] px-4 w-full font-inter" placeholder="Signal feed subscription..." type="email"/>
<button className="bg-[#E8432A] text-white rounded-full px-6 py-2 font-inter text-sm font-medium hover:bg-[#FF6B35] transition-colors whitespace-nowrap" type="submit">Subscribe</button>
</form>
</div>

<div className="border-t border-[#2A2A2A] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">

<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</div>
<span className="font-mono-custom text-xs text-[#666666]">All Systems Operational</span>
</div>
<div className="font-mono-custom text-xs text-[#666666]">
                    © 2026 Superhuman Systems. All Rights Reserved.
                </div>
<div className="flex items-center gap-6">
<a className="font-mono-custom text-xs text-[#666666] hover:text-[#9A9A9A] transition-colors" href="#">Privacy Policy</a>
<a className="font-mono-custom text-xs text-[#666666] hover:text-[#9A9A9A] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
