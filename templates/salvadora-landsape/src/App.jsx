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

        loadTl.to('.loader-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' })
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
              .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' });

        function initSite() {
            // Hero Animations
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.5, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.5 });
            
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
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", 
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
                        scale: 0.9,
                        opacity: 0.4, 
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

            // Footer Parallax Effect
            gsap.from('.footer-sticky > div', {
                y: 100,
                opacity: 0.5,
                scale: 0.9,
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
<div className="loader-text">SALVADORA</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-bold text-xl tracking-tighter">SALVADORA</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
<a className="hover:text-gray-300 transition-colors" href="#">Work</a>
<a className="hover:text-gray-300 transition-colors" href="#">Studio</a>
<a className="hover:text-gray-300 transition-colors" href="#contact">Contact</a>
</div>
<div className="md:hidden">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ddab602-7ca6-4ecc-be2d-b0d7753cec16_3840w.png"/>

<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] tracking-tight leading-none hero-text overflow-hidden">
<span className="block translate-y-full">DESERT</span>
</h1>
<h1 className="display text-[12vw] tracking-tight leading-none hero-text overflow-hidden">
<span className="block translate-y-full">OASIS</span>
</h1>

<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">Landscape Architecture</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl tracking-tight leading-tight split-animate">
                    Nature as <br/><span className="text-[var(--c-accent)]">sculpture.</span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">We believe that landscaping is living art. Our studio specializes in transforming arid environments into lush, sustainable ecosystems. We create spaces that breathe life into the desert.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Est. 2024</div>
<div>Dubai / UAE</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50">Selected Works</div>
<h2 className="display text-5xl md:text-7xl tracking-tight">RECENT PROJECTS</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">01</div>
<h3 className="text-3xl font-bold tracking-tight">THE DUNE OASIS</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Dubai, UAE</p>
</div>
<div className="text-gray-400 font-light">
                                A minimal desert sanctuary focused on native flora and natural shade manipulation. Designed for meditation and silence.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">

<img alt="Project 1" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b0b32bd-365b-4d4a-bb9e-3762642bee89_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">02</div>
<h3 className="text-3xl font-bold tracking-tight">URBAN CANOPY</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Abu Dhabi, UAE</p>
</div>
<div className="text-gray-400 font-light">
                                Adaptive redesign of an urban courtyard into a sustainable micro-climate and lush living space.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15a006c8-0d0a-448e-9ce2-b631e0daec2f_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">03</div>
<h3 className="text-3xl font-bold tracking-tight">WADI TERRACE</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Sharjah, UAE</p>
</div>
<div className="text-gray-400 font-light">
                                A terraced botanical structure integrated into the natural landscape, blending harsh terrain with serene luxury.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/008e8397-2130-4853-8654-ac8c6a3f56ac_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="pt-40 pb-24 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl tracking-tight mb-8">Designing for Life</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed px-6">
                Our philosophy is rooted in the belief that landscapes should thrive, not just survive. We use native elements that establish deep roots, flourishing with the passage of time.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>

<section className="pb-40 px-6 md:px-20 max-w-[1400px] mx-auto relative z-10" id="contact">
<div className="grid md:grid-cols-2 gap-16 md:gap-24">
<div>
<h2 className="display text-4xl md:text-5xl tracking-tight leading-tight mb-8">
                        Start your <br/><span className="text-[var(--c-accent)]">project.</span>
</h2>
<p className="text-gray-600 font-light max-w-sm mb-12">
                        Fill out the form and our team will get back to you within 24 hours to discuss your landscaping vision.
                    </p>
<div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Inquiries</div>
<a className="text-lg font-light hover:text-[var(--c-accent)] transition-colors" href="mailto:hello@salvadora.ae">hello@salvadora.ae</a>
</div>
<form className="flex flex-col gap-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="flex flex-col gap-3">
<label className="text-xs uppercase tracking-widest text-gray-500">First Name</label>
<input className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-black transition-colors w-full text-sm placeholder:text-black/20" placeholder="John" type="text"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs uppercase tracking-widest text-gray-500">Last Name</label>
<input className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-black transition-colors w-full text-sm placeholder:text-black/20" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs uppercase tracking-widest text-gray-500">Email Address</label>
<input className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-black transition-colors w-full text-sm placeholder:text-black/20" placeholder="john@example.com" type="email"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs uppercase tracking-widest text-gray-500">Project Details</label>
<textarea className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-black transition-colors w-full text-sm resize-none placeholder:text-black/20" placeholder="Tell us about your space..." rows="4"></textarea>
</div>
<button className="bg-[#121212] text-[#E3E1DC] py-4 px-8 w-max uppercase tracking-widest text-xs hover:bg-[var(--c-accent)] transition-colors mt-4 flex items-center gap-3 group" type="button">
                        Send Message
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">Have a project?</div>
<a className="display text-[8vw] tracking-tight leading-none hover:text-gray-400 transition-colors" href="#contact">
                LET'S TALK
            </a>
<div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400">
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">LinkedIn</a>
<a className="hover:text-white" href="#">Behance</a>
</div>
<div className="mt-20 text-[10px] text-gray-700">
                © 2025 SALVADORA LANDSCAPES
            </div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/215624cd-6028-4bcb-aa78-655da58a4b1c_1600w.jpg"/>
</footer>


    </>
  );
}
