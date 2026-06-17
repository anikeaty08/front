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



        // Updated Lenis Configuration for Faster Scrolling
        const lenis = new Lenis({
            duration: 0.8, // Reduced duration for snappier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1.2, // Increased multiplier for faster scroll per wheel tick
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Register GSAP Plugins
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            gsap.to(cursorOutline, {
                x: posX,
                y: posY,
                duration: 0.1, // Faster follow
                ease: "power2.out"
            });
        });

        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursorOutline.classList.add('hovered'));
            trigger.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovered'));
        });

        // Hero Animations
        const tl = gsap.timeline();
        tl.from(".hero-title", { y: 150, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 })
          .to(".hero-subtitle", { y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
          .to(".hero-btn-wrapper", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4");

        // Parallax Effect
        gsap.to(".parallax-img", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Horizontal Scroll - Shortened for better pacing
        let horizontalWrapper = document.querySelector(".horizontal-wrapper");
        gsap.to(horizontalWrapper, {
            xPercent: -65, // Less travel distance
            ease: "none",
            scrollTrigger: {
                trigger: "#services",
                pin: true,
                scrub: 1,
                end: "+=1500" // Significantly reduced scroll distance (was 3000)
            }
        });

        // Work Image Reveal
        const workImages = document.querySelectorAll("#work img");
        workImages.forEach(img => {
            gsap.from(img, {
                scale: 1.15,
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });
    
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

<div className="cursor-dot"></div>
<div className="cursor-outline"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
<a className="text-xl font-semibold tracking-tight z-50 hover-trigger" href="#">AURA</a>
<div className="hidden md:flex gap-8">
<a className="text-sm font-light text-white/70 hover:text-white transition-colors hover-trigger" href="#about">Filozofia</a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors hover-trigger" href="#services">Aktywa</a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors hover-trigger" href="#work">Portfolio</a>
</div>
<button className="border border-white/20 px-5 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover-trigger">
            Private Client
        </button>
</nav>

<header className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neutral-800/20 rounded-full blur-[100px]"></div>
<div className="z-10 text-center flex flex-col items-center px-4">
<div className="overflow-hidden">
<h1 className="hero-title text-[11vw] leading-[0.9] font-semibold tracking-tighter text-white mix-blend-overlay uppercase">
                    KAPITAŁ
                </h1>
</div>
<div className="overflow-hidden">
<h1 className="hero-title text-[11vw] leading-[0.9] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 uppercase">
                    ALTERNATYWNY
                </h1>
</div>
<div className="mt-10 overflow-hidden">
<p className="hero-subtitle text-lg md:text-xl text-white/60 font-light max-w-xl mx-auto transform translate-y-full">
                    Profesjonalne zarządzanie portfelem dóbr luksusowych. Od limitowanych edycji zegarków i sztuki, po unikatowe aktywa kolekcjonerskie.
                </p>
</div>
<div className="mt-12 opacity-0 hero-btn-wrapper">
<a className="group relative flex items-center gap-3 text-sm tracking-widest uppercase hover-trigger" href="#about">
<span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
                    Eksploruj Rynek
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative py-24 px-6 md:px-24 w-full bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="text-reveal-wrapper">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
<span className="text-white/40">Dywersyfikacja poza giełdą.</span>
<span className="text-white">Inwestujemy w przedmioty pożądania.</span>
</h2>
<p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-md">
                    Rynek dóbr luksusowych to stabilna przystań dla kapitału. Łączymy świat finansów z pasją do unikatowych przedmiotów – od klasycznej horologii, przez wina inwestycyjne, aż po rzadkie karty kolekcjonerskie (TCG).
                </p>
<div className="flex gap-12 border-t border-white/10 pt-8">
<div>
<h3 className="text-3xl font-semibold tracking-tight">+145%</h3>
<p className="text-xs text-white/40 uppercase tracking-widest mt-1">ROI (5 lat)</p>
</div>
<div>
<h3 className="text-3xl font-semibold tracking-tight">Global</h3>
<p className="text-xs text-white/40 uppercase tracking-widest mt-1">Zasięg Dystrybucji</p>
</div>
</div>
</div>
<div className="relative h-[500px] w-full overflow-hidden rounded-sm group hover-trigger">

<img alt="Luxury Texture" className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale hover:grayscale-0 parallax-img" src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
</div>
</div>
</section>

<section className="relative h-screen bg-black overflow-hidden pin-section" id="services">
<div className="absolute top-12 left-6 md:left-24 z-10">
<h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full inline-block">Klasy Aktywów</h3>
</div>
<div className="horizontal-wrapper flex h-full items-center pl-6 md:pl-24 w-[350%]">

<div className="w-screen h-full flex items-center justify-start pr-12 md:pr-24 flex-shrink-0">
<div className="w-full md:w-[600px] p-10 glass border-l-4 border-l-emerald-500 hover:bg-white/5 transition-colors duration-500 group hover-trigger">
<iconify-icon className="text-emerald-400 mb-8" icon="solar:watch-square-minimalistic-linear" width="48"></iconify-icon>
<h3 className="text-4xl font-medium tracking-tight mb-4">Dobra Luksusowe</h3>
<p className="text-white/60 font-light leading-relaxed">
                        Selekcja i akwizycja dóbr o udowodnionym potencjale wzrostu wartości. Skupiamy się na limitowanych seriach i markach dziedzictwa.
                    </p>
<ul className="mt-8 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Zegarki (Rolex, Patek Philippe)</li>
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Torebki Premium (Hermès)</li>
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Wina i Whisky Inwestycyjne</li>
</ul>
</div>
</div>

<div className="w-screen h-full flex items-center justify-start pr-12 md:pr-24 flex-shrink-0">
<div className="w-full md:w-[600px] p-10 glass border-l-4 border-l-blue-500 hover:bg-white/5 transition-colors duration-500 group hover-trigger">
<iconify-icon className="text-blue-400 mb-8" icon="solar:album-linear" width="48"></iconify-icon>
<h3 className="text-4xl font-medium tracking-tight mb-4">Kolekcje Modern Assets</h3>
<p className="text-white/60 font-light leading-relaxed">
                        Nowoczesne aktywa kolekcjonerskie, które definiują rynek alternatywny XXI wieku. Ekspertyza w wycenie i gradingu.
                    </p>
<ul className="mt-8 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Karty High-End (Pokémon, Sports)</li>
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Limitowane Figurki Artystyczne</li>
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Memorabilia Sportowe</li>
</ul>
</div>
</div>

<div className="w-screen h-full flex items-center justify-start pr-12 md:pr-24 flex-shrink-0">
<div className="w-full md:w-[600px] p-10 glass border-l-4 border-l-purple-500 hover:bg-white/5 transition-colors duration-500 group hover-trigger">
<iconify-icon className="text-purple-400 mb-8" icon="solar:safe-square-linear" width="48"></iconify-icon>
<h3 className="text-4xl font-medium tracking-tight mb-4">Custody &amp; Dystrybucja</h3>
<p className="text-white/60 font-light leading-relaxed">
                        Pełna obsługa procesu inwestycyjnego. Od bezpiecznego przechowywania w skarbcach bezcłowych po sprzedaż w domach aukcyjnych.
                    </p>
<ul className="mt-8 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Magazynowanie (Secure Storage)</li>
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Dostęp do Aukcji Zamkniętych</li>
<li className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"><iconify-icon icon="solar:star-linear"></iconify-icon> Audyt i Wycena Rzeczoznawcy</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-24 bg-neutral-950" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">PORTFOLIO <br/> INWESTYCYJNE</h2>
<p className="text-white/40 max-w-sm mt-6 md:mt-0 text-right">
                Przykłady aktywów, które zabezpieczyliśmy dla naszych klientów w ostatnim kwartale.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative cursor-none hover-trigger w-full">
<div className="overflow-hidden rounded-sm aspect-[4/3] mb-4 bg-neutral-900">
<img alt="Luxury Watch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-white/10 pt-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-white">Horologia</h3>
<p className="text-white/50 text-xs mt-1 uppercase tracking-wider">Patek Philippe / Audemars Piguet</p>
</div>
</div>
</div>

<div className="group relative cursor-none hover-trigger w-full md:translate-y-16">
<div className="overflow-hidden rounded-sm aspect-[4/3] mb-4 bg-neutral-900">
<img alt="Collectible Cards" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-white/10 pt-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-white">Blue Chip Cards</h3>
<p className="text-white/50 text-xs mt-1 uppercase tracking-wider">Pokémon TCG 1st Edition / MTG Alpha</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[70vh] flex items-center justify-center relative bg-neutral-950 overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
<div className="text-center relative z-10 px-6">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-6 leading-none mix-blend-overlay hover-trigger">
                ZBUDUJ SWÓJ <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SKARBIEC</span>
</h2>
<p className="text-white/60 text-lg font-light mb-10 max-w-lg mx-auto">
                Skontaktuj się z nami, aby omówić strategię dywersyfikacji majątku w oparciu o dobra luksusowe.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors hover-trigger flex items-center gap-2 group">
                    Konsultacja Inwestorska
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<footer className="absolute bottom-6 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-[10px] text-white/30 uppercase tracking-widest gap-4">
<span>© 2024 AURA Assets</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors hover-trigger" href="#">Inwestycje</a>
<a className="hover:text-white transition-colors hover-trigger" href="#">Dystrybucja</a>
<a className="hover:text-white transition-colors hover-trigger" href="#">Kontakt</a>
</div>
</footer>
</section>


    </>
  );
}
