import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        gsap.registerPlugin(ScrollTrigger);

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

        document.querySelectorAll('.split-animate').forEach(el => {
            splitTextToWords(el);
        });

        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
              .to('.loader-text', { y: -30, opacity: 0, duration: 0.4 })
              .to('.loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });

        function initSite() {
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.4, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.6 });
            
            gsap.to('.hero-img', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

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

            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.92,
                        opacity: 0.3, 
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 15vh",    
                            scrub: true
                        }
                    });
                }
            });

            gsap.from('.footer-sticky > div', {
                y: 60,
                opacity: 0,
                scale: 0.95,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top bottom',
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
<div className="loader-text">MICHIGAN FIRST</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-semibold text-xl tracking-tighter">MICHIGAN FIRST</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium items-center">
<a className="hover:text-gray-400 transition-colors" href="#">Services</a>
<a className="hover:text-gray-400 transition-colors" href="#">Patient Portal</a>
<a className="hover:text-gray-400 transition-colors" href="#">Providers</a>
<a className="hover:text-gray-400 transition-colors" href="#">Contact Us</a>
</div>
<div className="md:hidden text-xs tracking-widest flex items-center gap-2 cursor-pointer">
            MENU <iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Background" className="absolute inset-0 w-full h-full object-cover brightness-50 hero-img" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center text-white px-6">
<h1 className="display text-[7vw] leading-none hero-text overflow-hidden tracking-tighter">
<span className="block translate-y-full uppercase">Michigan First</span>
</h1>
<h1 className="display text-[7vw] leading-none hero-text overflow-hidden tracking-tighter">
<span className="block translate-y-full uppercase">Medical</span>
</h1>
<p className="mt-8 text-xs md:text-sm uppercase tracking-[0.5em] font-medium opacity-0 hero-fade">Comprehensive Healthcare for You</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-3xl md:text-5xl leading-tight split-animate font-semibold tracking-tight">
                    Dedicated to Your Health, <br/><span className="text-[var(--c-accent)]">Every Step of the Way.</span>
</h2>
</div>
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">At Michigan First Medical, we are committed to providing exceptional primary and urgent care services. Our experienced medical professionals focus on preventative care, accurate diagnostics, and effective treatments to keep our community healthy and thriving.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-xs uppercase tracking-widest font-semibold text-gray-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Serving Michigan
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Walk-ins Welcome
                    </div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50 font-semibold">Our Expertise</div>
<h2 className="display text-4xl md:text-7xl tracking-tighter uppercase font-semibold">Medical Services</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-4xl md:text-5xl display mb-2 text-[var(--c-bg)] opacity-20">01</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Primary Care</h3>
<p className="text-xs mt-4 opacity-60 uppercase tracking-widest font-medium">Preventative &amp; Wellness</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Comprehensive routine exams, chronic condition management, and preventative health screenings tailored to your individual health needs by our expert providers.
                            </div>
<button className="text-left flex items-center uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-all font-semibold group">
                                Learn More <iconify-icon className="ml-2 text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="card-img-wrap">
<img alt="Primary Care" className="card-img" src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-4xl md:text-5xl display mb-2 text-[var(--c-bg)] opacity-20">02</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Urgent Care</h3>
<p className="text-xs mt-4 opacity-60 uppercase tracking-widest font-medium">Immediate Attention</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Fast, reliable treatment for non-life-threatening injuries, minor fractures, and sudden illnesses. Walk-ins are always welcome for prompt medical attention.
                            </div>
<button className="text-left flex items-center uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-all font-semibold group">
                                View Wait Times <iconify-icon className="ml-2 text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="card-img-wrap">
<img alt="Urgent Care" className="card-img" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-4xl md:text-5xl display mb-2 text-[var(--c-bg)] opacity-20">03</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Telehealth</h3>
<p className="text-xs mt-4 opacity-60 uppercase tracking-widest font-medium">Virtual Consultations</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Convenient, secure virtual visits with our experienced healthcare providers from the comfort and safety of your own home, fitting perfectly into your busy schedule.
                            </div>
<button className="text-left flex items-center uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-all font-semibold group">
                                Start Virtual Visit <iconify-icon className="ml-2 text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="card-img-wrap">
<img alt="Telehealth" className="card-img" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10 px-6">
<iconify-icon className="text-5xl mb-6 text-[var(--c-accent)]" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="display text-2xl md:text-4xl mb-8 tracking-tight font-semibold">Patient-Centered Care</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed text-base md:text-lg">
                We believe in treating the whole person, not just the symptoms. Our dedicated team is here to support your long-term health journey with compassion, expertise, and personalized medical solutions.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>

<footer className="footer-sticky px-6">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500 font-medium">Ready to Prioritize Your Health?</div>
<a className="display text-[7vw] leading-none hover:text-gray-400 transition-colors tracking-tighter font-semibold flex items-center justify-center gap-4" href="#">
                Schedule Visit <iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex justify-center gap-8 mt-12 text-xs uppercase tracking-widest text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Patient Portal</a>
<a className="hover:text-white transition-colors" href="#">Insurance Info</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</div>
<div className="mt-20 text-[10px] text-gray-700 font-medium tracking-widest">
                © 2024 MICHIGAN FIRST MEDICAL. ALL RIGHTS RESERVED.
            </div>
</div>
<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale" src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
</footer>


    </>
  );
}
