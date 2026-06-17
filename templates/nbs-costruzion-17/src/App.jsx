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
              .to('.loader-logo-wrap', { y: -50, opacity: 0, duration: 0.5 })
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
<div className="loader-logo-wrap text-white">
<svg fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H35V35H5V5Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 12H28V28H12V12Z" fill="currentColor"></path>
<path d="M35 5L40 0" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M5 35L0 40" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 text-white">

<a className="flex items-center gap-3 group" href="#">
<svg className="text-white drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out" fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H35V35H5V5Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 12H28V28H12V12Z" fill="currentColor"></path>
<path d="M35 5L40 0" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M5 35L0 40" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="flex flex-col drop-shadow-md">
<span className="display font-semibold text-lg leading-none tracking-tight">SAM VAUGHN</span>
<span className="text-[0.6rem] uppercase tracking-[0.3em] font-medium opacity-90 leading-none mt-1 group-hover:tracking-[0.5em] transition-all duration-500">Group</span>
</div>
</a>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold drop-shadow-md">
<a className="hover:text-[var(--c-accent)] transition-colors" href="#">Buy &amp; Sell</a>
<a className="hover:text-[var(--c-accent)] transition-colors" href="#">Commercial</a>
<a className="hover:text-[var(--c-accent)] transition-colors" href="#">Consulting</a>
</div>
<div className="md:hidden drop-shadow-md flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Modern Barn Style Luxury Home" className="absolute inset-0 w-full h-full object-cover brightness-[0.60] hero-img" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none"></div>
<div className="relative z-10 text-center text-white px-4">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden tracking-tighter drop-shadow-xl">
<span className="block translate-y-full">ELEVATED</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden tracking-tighter drop-shadow-xl">
<span className="block translate-y-full">LIVING</span>
</h1>
<p className="mt-8 text-sm uppercase tracking-[0.4em] opacity-0 hero-fade font-semibold text-white/90 drop-shadow-lg">Residential • Commercial • Investment</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate tracking-tight text-slate-900">
                    Vision for <br/><span className="text-[var(--c-accent)]">value.</span>
</h2>
</div>
<div className="text-xl font-normal leading-relaxed text-slate-800">
<p className="mb-8 split-animate">From luxury residential acquisitions to large-scale commercial developments, The Sam Vaughn Group offers precision consulting. We help builders and investors define "best use" value for new and rehab projects.</p>
<div className="h-px w-full bg-slate-900/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate font-bold text-slate-900">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:home-angle-linear" style={{color: 'var(--c-accent)'}} width="18"></iconify-icon> Residential
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:city-linear" style={{color: 'var(--c-accent)'}} width="18"></iconify-icon> Commercial
                    </div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 text-white/60 font-semibold">Our Expertise</div>
<h2 className="display text-5xl md:text-7xl tracking-tight text-white">PORTFOLIO</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-white/20">01</div>
<h3 className="text-3xl font-semibold tracking-tight text-white">LUXURY ESTATES</h3>
<p className="text-xs mt-4 uppercase tracking-widest font-bold text-[var(--c-accent)]">Buyer &amp; Seller Representation</p>
</div>
<div className="text-zinc-300 font-normal text-lg leading-relaxed">
                                Navigating the complexities of the luxury market with discretion. We connect discerning buyers with exceptional properties that define lifestyles.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-[var(--c-accent)] hover:border-[var(--c-accent)] transition-colors flex items-center gap-2 font-semibold text-white">
                                View Listings <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
<div className="card-img-wrap">
<img alt="Luxury Home" className="card-img object-cover w-full h-auto" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-white/20">02</div>
<h3 className="text-3xl font-semibold tracking-tight text-white">DEVELOPMENT CONSULTING</h3>
<p className="text-xs mt-4 uppercase tracking-widest font-bold text-[var(--c-accent)]">Builder Services</p>
</div>
<div className="text-zinc-300 font-normal text-lg leading-relaxed">
                                Strategic goal setting for small to mid-size developers. We analyze rehab projects and new builds to ensure maximum market value and best use.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-[var(--c-accent)] hover:border-[var(--c-accent)] transition-colors flex items-center gap-2 font-semibold text-white">
                                Learn More <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
<div className="card-img-wrap">
<img alt="Construction Consulting" className="card-img object-cover w-full h-auto" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2031&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-white/20">03</div>
<h3 className="text-3xl font-semibold tracking-tight text-white">COMMERCIAL INVESTMENT</h3>
<p className="text-xs mt-4 uppercase tracking-widest font-bold text-[var(--c-accent)]">ROI Focused</p>
</div>
<div className="text-zinc-300 font-normal text-lg leading-relaxed">
                                Identifying high-yield opportunities in the commercial sector. From multi-family units to retail spaces, we secure your financial future.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-[var(--c-accent)] hover:border-[var(--c-accent)] transition-colors flex items-center gap-2 font-semibold text-white">
                                View Opportunities <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
<div className="card-img-wrap">
<img alt="Commercial Building" className="card-img object-cover w-full h-auto" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[var(--c-bg)] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl mb-8 tracking-tight text-slate-900">Maximize Your Potential</h2>
<div className="max-w-xl text-slate-700 font-normal mb-12 leading-relaxed text-lg">
                Whether you are buying your first home, selling a luxury estate, or developing a city block, The Sam Vaughn Group provides the data-driven expertise to reach your goals.
            </div>
<div className="h-16 w-px bg-slate-900/20"></div>
</section>
</div>


<footer className="footer-sticky p-8">
<div className="relative z-10 text-center flex flex-col items-center w-full max-w-4xl mx-auto">

<svg className="text-white mb-8 opacity-60" fill="none" height="60" viewbox="0 0 40 40" width="60" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H35V35H5V5Z" stroke="currentColor" strokeWidth="1"></path>
<path d="M12 12H28V28H12V12Z" fill="currentColor"></path>
<path d="M35 5L40 0" stroke="currentColor" strokeWidth="1"></path>
<path d="M5 35L0 40" stroke="currentColor" strokeWidth="1"></path>
</svg>
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-neutral-400 font-semibold">Ready to move?</div>
<a className="display text-[8vw] leading-none text-white hover:text-[var(--c-accent)] transition-colors duration-300 tracking-tighter" href="mailto:contact@samvaughngroup.com">
                GET IN TOUCH
            </a>
<div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-neutral-300 font-semibold">
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> Call Us
                </a>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> Email
                </a>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Office
                </a>
</div>

<div className="hidden mt-16 w-full pt-8 border-t border-white/10">
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 font-semibold">Partner Network</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] text-neutral-400 font-medium tracking-wider">
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://www.theparkingguys.com">TheParkingGuys.com</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://api.seriousmindz.ai">API.seriousmindz.ai</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://seriousmindz.ai">Seriousmindz.ai</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://saas.seriousmindz.ai">SaaS.seriousmindz.ai</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://www.ineedvalet.com">INeedValet.com</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://www.framed4u.com">Framed4U.com</a>
<a className="hover:text-white transition-colors hover:underline decoration-white/30" href="https://www.perfectpicture360.com">PerfectPicture360.com</a>
</div>
</div>
<div className="mt-12 text-[10px] text-neutral-500 flex flex-col gap-2 items-center font-semibold tracking-wide">
<span>© 2024 THE SAM VAUGHN GROUP. ALL RIGHTS RESERVED.</span>
<a className="hover:text-white transition-colors" href="https://build.seriousmindz.ai">
                    Designed and managed by Seriousmindz Ai
                </a>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale contrast-125" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</footer>


    </>
  );
}
