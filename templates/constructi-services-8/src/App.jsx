import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">SUSTAINABYLT</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-semibold text-xl tracking-tight-custom flex items-center gap-2">

<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
            SUSTAINABYLT
        </div>
<div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-300">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:block border border-white/20 px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm" href="#contact">
            Get in touch
        </a>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">

<img alt="Commercial Construction" className="absolute inset-0 w-full h-full object-cover opacity-50 hero-img" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=3870&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center text-white w-full px-4">
<div className="flex justify-center mb-6 overflow-hidden">
<span className="hero-fade opacity-0 text-xs md:text-sm font-medium tracking-[0.3em] uppercase border border-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                        Est. 2006 — Albury/Wodonga
                    </span>
</div>
<h1 className="display text-[10vw] md:text-[8vw] leading-[0.9] font-medium tracking-tight-custom hero-text overflow-hidden text-white/90">
<span className="block translate-y-full">EXCEPTIONAL</span>
</h1>
<h1 className="display text-[10vw] md:text-[8vw] leading-[0.9] font-medium tracking-tight-custom hero-text overflow-hidden text-white/90">
<span className="block translate-y-full">PROJECTS</span>
</h1>
<p className="mt-8 text-sm md:text-base font-light text-gray-300 max-w-lg mx-auto hero-fade opacity-0 leading-relaxed">
                    Commercial Construction Specialists. Triple Certified ISO Systems. Small enough to care, big enough to deliver.
                </p>

<div className="mt-10 flex flex-wrap justify-center gap-4 hero-fade opacity-0">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-black/20">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> ISO 45001
                    </div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-black/20">
<iconify-icon icon="solar:leaf-linear"></iconify-icon> ISO 14001
                    </div>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded bg-black/20">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon> ISO 9001
                    </div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-fade opacity-0 animate-bounce">
<iconify-icon className="text-white/50" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1600px] mx-auto bg-[var(--c-bg)]" id="about">
<div className="sticky top-32 self-start">
<h2 className="display text-4xl md:text-5xl font-medium tracking-tight-custom leading-tight split-animate text-[#171717]">
                    Construction is <br/>in our <span className="text-gray-400">DNA.</span>
</h2>
<div className="mt-8 flex gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                        Family Owned
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:hammer-linear"></iconify-icon>
                        3rd Gen Builders
                    </div>
</div>
</div>
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-600">
<p className="mb-8 split-animate">
                    Based in Albury/Wodonga, Sustainabylt has been a trusted name since 2006. We are third-generation builders and plumbers, bringing decades of inherited knowledge and modern precision to every commercial project.
                </p>
<p className="mb-8 split-animate">
                    We pride ourselves on being agile enough to offer personalized care, yet robust enough to manage complex, large-scale commercial deliveries with triple-certified ISO systems for safety, quality, and environmental management.
                </p>
<div className="h-px w-full bg-black/10 my-10"></div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-black mb-2">Location</h4>
<p className="text-sm text-gray-500">Albury, NSW 2640</p>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-black mb-2">Focus</h4>
<p className="text-sm text-gray-500">Commercial &amp; Industrial</p>
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
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">Commercial Construction</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">End-to-End Build</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                From ground-up construction to complex structural works. We deliver commercial spaces built to last, adhering to the strictest safety and quality standards (ISO 45001, 9001).
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:ruler-pen-linear"></iconify-icon> Design &amp; Construct
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Commercial Construction" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-sm font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">02</div>
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">Shopfitting &amp; Interiors</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">Retail &amp; Office</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Bespoke fit-outs for retail, hospitality, and office environments. Our in-house interior design capabilities ensure functional, aesthetic, and brand-aligned spaces.
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:armchair-2-linear"></iconify-icon> Interior Design
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Shopfitting" className="card-img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-sm font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">03</div>
<h3 className="text-2xl md:text-3xl font-medium display tracking-tight-custom">Project Management</h3>
<p className="text-sm mt-2 text-gray-500 uppercase tracking-widest">Delivery &amp; Systems</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                Comprehensive management from concept to handover. We handle property development logistics, council approvals, and trade coordination.
                            </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest pt-4 border-t border-white/10">
<iconify-icon icon="solar:clipboard-check-linear"></iconify-icon> Property Development
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Project Management" className="card-img" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F5F5] text-center flex flex-col items-center justify-center relative z-10 border-b border-gray-200">
<h2 className="display text-3xl md:text-4xl font-medium tracking-tight-custom mb-6">Start Your Project</h2>
<div className="max-w-xl text-gray-600 font-light mb-10 leading-relaxed px-6">
                Ready to deliver exceptional results? Contact our head office to discuss your commercial requirements.
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
<a className="block display text-4xl md:text-5xl font-medium tracking-tight-custom hover:text-gray-300 transition-colors mb-2" href="tel:0438122185">
                            Alex: 0438 122 185
                        </a>
<p className="text-gray-400 font-light">By Appointment Only</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-2 mb-3 text-white">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span className="font-medium text-sm uppercase tracking-wide">Head Office &amp; Workshop</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                                1/330 Kiewa St,<br/>Albury, NSW 2640
                            </p>
</div>
<div>
<div className="flex items-center gap-2 mb-3 text-white">
<iconify-icon icon="solar:mailbox-linear"></iconify-icon>
<span className="font-medium text-sm uppercase tracking-wide">Postal</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                                PO Box 103,<br/>Albury NSW 2640
                            </p>
</div>
</div>
</div>

<div className="md:text-right flex flex-col justify-between h-full">
<div>
<h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Socials</h4>
<div className="flex md:justify-end gap-6">
<a className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" href="https://instagram.com/sustainabylt" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 space-y-4">
<div className="text-xs text-gray-500 uppercase tracking-widest">
<span className="block mb-1">SUSTAINABYLT PTY LTD</span>
<span className="block text-[10px] text-gray-600">ACN: 665 988 232 / ABN: 69 665 988 232</span>
</div>
<div className="text-[10px] text-gray-600 leading-relaxed font-mono">
                            VIC CCB-L 100021, DBU 41470, PIC 50062<br/>
                            NSW 451063C
                        </div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
<div>© 2024 by Sustainabylt</div>
<div className="mt-2 md:mt-0">Commercial Specialists</div>
</div>
</div>
</footer>


    </>
  );
}
