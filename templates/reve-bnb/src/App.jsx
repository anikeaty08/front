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
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5, delay: 0.2 })
              .to('.loader', { yPercent: -100, duration: 1, ease: 'expo.inOut' });

        function initSite() {
            // Hero Animations
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.15, 
                duration: 1.8, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.8 });
            
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

            // Footer Parallax Effect
            gsap.from('.footer-sticky > div', {
                y: 150,
                opacity: 0.5,
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
<div className="loader-text tracking-tighter">REVE'BnB</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-semibold text-lg tracking-tighter flex items-center gap-2">
<iconify-icon icon="lucide:boxes" strokeWidth="1.5" width="20"></iconify-icon>
            REVE'BnB
        </div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium">
<a className="hover:opacity-60 transition-opacity" href="#">Collections</a>
<a className="hover:opacity-60 transition-opacity" href="#">Conciergerie</a>
<a className="hover:opacity-60 transition-opacity" href="#">Journal</a>
</div>
<div className="md:hidden">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero Architecture" className="absolute inset-0 w-full h-full object-cover brightness-[0.70] hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[13vw] leading-[0.85] hero-text overflow-hidden tracking-tighter">
<span className="block translate-y-full">REVE</span>
</h1>
<h1 className="display text-[13vw] leading-[0.85] hero-text overflow-hidden tracking-tighter">
<span className="block translate-y-full text-[#cccccc]">'BnB</span>
</h1>
<div className="mt-8 flex items-center justify-center gap-4 opacity-0 hero-fade">
<div className="h-px w-12 bg-white/50"></div>
<p className="text-xs uppercase tracking-[0.4em] font-medium">L'Art de Vivre</p>
<div className="h-px w-12 bg-white/50"></div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white mix-blend-difference animate-bounce opacity-50">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-3xl md:text-5xl leading-tight split-animate tracking-tight font-semibold">
                    L'hospitalité <br/><span className="text-[var(--c-accent)] italic">réinventée.</span>
</h2>
</div>
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-800">
<p className="mb-8 split-animate">
                    Nous ne louons pas simplement des espaces ; nous organisons des moments suspendus dans le temps. Du brutalisme adouci à l'intégration biophilique, chaque propriété REVE'BnB est une destination en soi.
                </p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-xs uppercase tracking-widest split-animate text-gray-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Paris / Tokyo
                    </div>
<div>Depuis 2024</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 px-6 md:px-20 max-w-[1400px] mx-auto">
<div>
<div className="text-xs uppercase tracking-widest mb-4 opacity-50 flex items-center gap-2">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
                        Sélection Exclusive
                    </div>
<h2 className="display text-4xl md:text-6xl tracking-tight font-semibold">NOS DESTINATIONS</h2>
</div>
<div className="hidden md:block pb-2">
<button className="text-xs uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                        Voir tout le catalogue
                    </button>
</div>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-4 text-white opacity-20 font-semibold">01</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight card-title">LA MAISON DU VIDE</h3>
<div className="flex items-center gap-2 mt-4 opacity-70 text-xs uppercase tracking-widest">
<iconify-icon icon="lucide:map" width="12"></iconify-icon> Kyoto, Japon
                                </div>
</div>
<div className="text-gray-400 font-light text-sm leading-loose">
                                Une résidence en béton minimaliste axée sur l'espace négatif et la lumière. Conçue pour la méditation et le silence absolu.
                            </div>
<div className="flex items-center justify-between w-full pt-8 border-t border-white/10">
<span className="text-xs uppercase tracking-widest opacity-60">Dès 450€ / Nuit</span>
<button className="bg-white text-black rounded-full p-2 hover:scale-110 transition-transform">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="card-img-wrap">
<img alt="Project 1" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-4 text-white opacity-20 font-semibold">02</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight card-title">LA FALAISE DE VERRE</h3>
<div className="flex items-center gap-2 mt-4 opacity-70 text-xs uppercase tracking-widest">
<iconify-icon icon="lucide:map" width="12"></iconify-icon> Reykjavik, Islande
                                </div>
</div>
<div className="text-gray-400 font-light text-sm leading-loose">
                                Structure en verre et acier en porte-à-faux sur un paysage arctique, mêlant danger apparent et luxe absolu.
                            </div>
<div className="flex items-center justify-between w-full pt-8 border-t border-white/10">
<span className="text-xs uppercase tracking-widest opacity-60">Dès 320€ / Nuit</span>
<button className="bg-white text-black rounded-full p-2 hover:scale-110 transition-transform">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-4 text-white opacity-20 font-semibold">03</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight card-title">CHALEUR</h3>
<div className="flex items-center gap-2 mt-4 opacity-70 text-xs uppercase tracking-widest">
<iconify-icon icon="lucide:map" width="12"></iconify-icon> Vienne, Autriche
                                </div>
</div>
<div className="text-gray-400 font-light text-sm leading-loose">
                                Penthouse logé en pleine campagne Autrichienne. Famille, sérénité et communion dans un espace rassurant.
                            </div>
<div className="flex items-center justify-between w-full pt-8 border-t border-white/10">
<span className="text-xs uppercase tracking-widest opacity-60">Dès 890€ / Nuit</span>
<button className="bg-white text-black rounded-full p-2 hover:scale-110 transition-transform">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10 overflow-hidden">
<h2 className="display text-2xl md:text-4xl mb-8 tracking-tight font-semibold">L'architecture comme expérience</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed px-6">
                Notre philosophie repose sur la conviction que les bâtiments doivent vivre. Nous sélectionnons des matériaux qui se patinent et enregistrent le passage du temps.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center w-full px-4">
<div className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-500 font-medium">Prêt pour l'évasion ?</div>
<a className="group relative inline-block" href="mailto:hello@revebnb.com">
<span className="display text-[10vw] leading-none text-white group-hover:text-gray-300 transition-colors tracking-tighter">RÉSERVER</span>
<iconify-icon className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 text-4xl md:text-6xl" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 text-xs uppercase tracking-widest text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Newsletter</a>
</div>
<div className="mt-20 text-[10px] text-gray-700 tracking-wider">
                © 2025 REVE'BnB CONCIERGERIE
            </div>
</div>

<img alt="Footer bg" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
