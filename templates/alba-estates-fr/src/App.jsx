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
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">AURUM</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-bold text-xl tracking-tighter">A/E</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
<a className="hover:text-gray-300 transition-colors" href="#">Demeures</a>
<a className="hover:text-gray-300 transition-colors" href="#">About</a>
<a className="hover:text-gray-300 transition-colors" href="#">Private Investment</a>
</div>
<div className="md:hidden">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>

<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">ALBA</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">ESTATES</span>
</h1>

<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">Villa Collection</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate">
                    Beyond the <br/><span className="text-[var(--c-accent)]">Skyline.</span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">From the shores of the Palm to the dunes of the desert, we craft legacies. AURUM redefines the Dubai lifestyle, merging traditional Arabian heritage with futuristic innovation for the world's elite.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Est. 2025</div>
<div>Dubai / Abu Dhabi</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50">Iconic Destinations</div>
<h2 className="display text-5xl md:text-7xl">PORTFOLIO</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">01</div>
<h3 className="text-3xl font-bold">THE PALM RESIDENCE</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Palm Jumeirah, Dubai</p>
</div>
<div className="text-gray-400 font-light">
                                A private beachfront sanctuary blending modern minimalism with the azure waters of the Arabian Gulf.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Residence</button>
</div>
<div className="card-img-wrap">

<img alt="Project 1" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">02</div>
<h3 className="text-3xl font-bold">DOWNTOWN OASIS</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Downtown Dubai</p>
</div>
<div className="text-gray-400 font-light">
                                Vertical gardens rise above the city heat, offering a sustainable retreat with panoramic views of the Burj Khalifa.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Penthouse</button>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">03</div>
<h3 className="text-3xl font-bold">HATTA PEAK</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Hatta Mountains</p>
</div>
<div className="text-gray-400 font-light">
                                An architectural marvel cantilevered over the rugged peaks, blending danger with absolute luxury.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Resort</button>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl mb-8">A Legacy in Sand</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed">
                Our philosophy is rooted in the belief that luxury is timeless. We build not just for today, but to define the Emirates of tomorrow.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">Invest in the future</div>
<a className="display text-[8vw] leading-none hover:text-gray-400 transition-colors" href="mailto:vip@aurum.ae">
                VIP ACCESS
            </a>
<div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400">
<a className="hover:text-white" href="#">Instagram</a>
<a className="hover:text-white" href="#">LinkedIn</a>
<a className="hover:text-white" href="#">Brochure</a>
</div>
<div className="mt-20 text-[10px] text-gray-700">
                © 2025 AURUM DEVELOPMENTS DUBAI
            </div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
