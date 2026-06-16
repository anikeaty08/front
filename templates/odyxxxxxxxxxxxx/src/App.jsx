import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Hero Text Reveal Animation ---
            const heroTitle = document.getElementById('hero-title');
            const words = ["FORM.", "SPACE.", "LIGHT.", "TIME."];
            
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'inline-flex overflow-hidden';
                
                const suffix = wordIndex < words.length - 1 ? '\u00A0' : '';

                [...word, suffix].forEach((char, charIndex) => {
                    const charSpan = document.createElement('span');
                    if (char === '\u00A0') {
                        charSpan.innerHTML = '&nbsp;';
                    } else {
                        charSpan.textContent = char;
                    }
                    // Initial styles for reveal
                    charSpan.style.display = 'inline-block';
                    charSpan.style.transform = 'translateY(100%)';
                    charSpan.style.opacity = '0';
                    charSpan.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease';
                    
                    const delay = (wordIndex * 0.15) + (charIndex * 0.04);
                    charSpan.style.transitionDelay = `${delay}s`;
                    wordSpan.appendChild(charSpan);
                });
                
                heroTitle.appendChild(wordSpan);
            });

            // Trigger Hero Reveal
            setTimeout(() => {
                heroTitle.querySelectorAll('span > span').forEach(el => {
                    el.style.transform = 'translateY(0)';
                    el.style.opacity = '1';
                });
            }, 100);

            // --- 2. Manifesto Highlight on Scroll ---
            const manifestoText = document.getElementById('manifesto-text');
            const manifestoWords = manifestoText.innerText.split(' ');
            manifestoText.innerHTML = '';
            
            manifestoWords.forEach(word => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.style.opacity = '0.2';
                span.style.transition = 'opacity 0.4s ease';
                manifestoText.appendChild(span);
            });

            const wordElements = manifestoText.querySelectorAll('span');
            
            window.addEventListener('scroll', () => {
                const rect = manifestoText.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                
                if(rect.top < viewHeight && rect.bottom > 0) {
                    const scrollProgress = 1 - (rect.bottom / (viewHeight + rect.height));
                    const highlightIndex = Math.floor(scrollProgress * wordElements.length * 1.5);
                    
                    wordElements.forEach((el, index) => {
                        if(index < highlightIndex) {
                            el.style.opacity = '1';
                        } else {
                            el.style.opacity = '0.2';
                        }
                    });
                }
            });

            // --- 3. Navbar Slide on Scroll ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.style.transform = 'translateY(0)';
                } else {
                    navbar.style.transform = 'translateY(-100%)';
                }
            });

            // --- 4. Intersection Observer for Scroll Animations ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.js-scroll-reveal').forEach(el => {
                observer.observe(el);
            });

            // --- 5. Ticker Marquee Animation (JS based to avoid keyframes) ---
            const tickerTrack = document.getElementById('ticker-track');
            // Clone the inner items to create a seamless loop
            tickerTrack.innerHTML += tickerTrack.innerHTML;
            
            let tickerX = 0;
            function animateTicker() {
                tickerX -= 0.5;
                // If moved past the first set, reset
                if (Math.abs(tickerX) >= tickerTrack.scrollWidth / 2) {
                    tickerX = 0;
                }
                tickerTrack.style.transform = `translateX(${tickerX}px)`;
                requestAnimationFrame(animateTicker);
            }
            animateTicker();

            // --- 6. Populate Portfolio Carousel ---
            const projects = [
                { name: "The Glass Pavilion", details: "Residential · Forest Edge", description: "A minimalist retreat blending seamless indoor-outdoor living through floor-to-ceiling structural glass.", icon: "solar:home-angle-linear" },
                { name: "Concrete Echo", details: "Cultural · City Center", description: "Brutalist exhibition space utilizing monolithic poured concrete and strategic skylights to sculpt interior spaces.", icon: "solar:buildings-linear" },
                { name: "Lumina Tower", details: "Commercial · Financial District", description: "A 40-story sustainable high-rise featuring an intelligent climate-control facade and communal sky gardens.", icon: "solar:city-linear" },
                { name: "Oasis Villa", details: "Residential · Desert", description: "Off-grid eco-home focused on passive cooling techniques, deep overhangs, and indigenous material sourcing.", icon: "solar:sun-linear" },
                { name: "Aura Pavilion", details: "Public · Central Park", description: "Temporary structural art piece playing with light refraction, sharp angles, and dynamic shadows throughout the day.", icon: "solar:incognito-linear" }
            ];

            const container = document.getElementById('portfolio-container');

            projects.forEach((project, index) => {
                const delay = index * 0.1;
                const card = document.createElement('div');
                
                card.className = `w-[85vw] sm:w-[24rem] shrink-0 snap-center bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col group hover:border-white/30 transition-colors duration-500 js-scroll-reveal cursor-pointer relative overflow-hidden`;
                card.style.opacity = '0';
                card.style.transform = 'translateY(2rem)';
                card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.transitionDelay = `${delay}s`;
                
                card.innerHTML = `
                    <div class="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#EDEDED] mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                        <iconify-icon icon="${project.icon}" width="24" stroke-width="1.5"></iconify-icon>
                    </div>
                    <h3 class="text-2xl tracking-tighter font-medium text-[#EDEDED] mb-2">${project.name}</h3>
                    <div class="text-[#888888] text-xs font-medium tracking-wide mb-6 uppercase">${project.details}</div>
                    <p class="text-[#888888] text-sm font-light leading-relaxed mb-10 line-clamp-3 min-h-[3rem]">
                        ${project.description}
                    </p>
                    <div class="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                        <span class="text-xs font-medium text-[#EDEDED]">Explore Project</span>
                        <iconify-icon icon="solar:arrow-right-linear" width="16" stroke-width="1.5" class="text-[#888888] group-hover:text-[#EDEDED] group-hover:translate-x-1 transition-all duration-300"></iconify-icon>
                    </div>
                `;
                
                container.appendChild(card);
                observer.observe(card);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 py-4" id="navbar" style={{transform: 'translateY(-100%)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
<a className="text-xl tracking-tighter font-medium text-[#EDEDED]" href="#">
                ARCH<span className="text-[#888888]">/STUDIO</span>
</a>
<a className="bg-[#EDEDED] text-[#0A0A0A] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-white transition-colors" href="#projects">
                View Works
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">

<div className="absolute inset-0 pointer-events-none z-0 opacity-40 flex items-center justify-center">
<div className="absolute w-[30rem] h-[30rem] border border-white/5 rounded-full" style={{animation: 'spin 60s linear infinite'}}></div>
<div className="absolute w-[45rem] h-[45rem] border border-white/5 rotate-45" style={{animation: 'spin 90s linear infinite reverse'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 max-w-screen-xl mx-auto px-6 w-full flex flex-col items-center text-center">
<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 uppercase font-semibold text-[#EDEDED]" id="hero-title">

</h1>
<p className="text-[#888888] font-light text-sm md:text-base max-w-lg mb-12 js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0.6s'}}>
                Crafting timeless architecture through minimal intervention, spatial harmony, and structural integrity.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0.8s'}}>
<a className="flex items-center justify-center gap-2 bg-[#EDEDED] text-[#0A0A0A] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-white transition-all" href="#projects">
                    Explore Projects
                </a>
<a className="flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-[#EDEDED] text-sm font-medium tracking-wide hover:bg-white/5 hover:border-white/20 transition-all" href="#philosophy">
                    Our Philosophy
                </a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#888888] js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '1s'}}>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</section>

<div className="w-full bg-[#050505] py-4 overflow-hidden flex border-y border-white/10 relative">
<div className="flex whitespace-nowrap text-[#888888] font-medium text-xs tracking-widest uppercase" id="ticker-container">
<div className="flex items-center" id="ticker-track">
<span className="mx-12 flex items-center gap-3"><iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="16"></iconify-icon> Urban Integration</span>
<span className="mx-12 flex items-center gap-3"><iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="16"></iconify-icon> Sustainable Materials</span>
<span className="mx-12 flex items-center gap-3"><iconify-icon icon="solar:pen-linear" strokeWidth="1.5" width="16"></iconify-icon> Concept Design</span>
<span className="mx-12 flex items-center gap-3"><iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="16"></iconify-icon> Spatial Planning</span>
<span className="mx-12 flex items-center gap-3"><iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="16"></iconify-icon> Structural Logic</span>
</div>
</div>
</div>

<section className="py-32 md:py-48 relative border-b border-white/10">
<div className="max-w-screen-lg mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-[#EDEDED] mb-12 bg-[#111111]">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl tracking-tighter leading-tight font-medium text-[#EDEDED]" id="manifesto-text">
                Architecture is the silent language of space. We design structures that harmonize with their environment, bringing natural light and raw materials into perfect equilibrium.
            </h2>
</div>
</section>

<section className="py-32 relative" id="projects">
<div className="max-w-screen-xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold relative text-[#EDEDED] leading-none m-0">
                SELECTED WORKS
            </h2>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-[#EDEDED] hover:bg-white/5 transition-all text-xs font-medium" href="#">
                View Archive <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="w-full overflow-x-auto snap-x snap-mandatory no-scrollbar pb-16 pt-4 px-6 md:px-0" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<div className="flex gap-6 md:gap-8 w-max md:px-[calc((100vw-80rem)/2)]" id="portfolio-container">

</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative border-t border-white/10" id="philosophy">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
<div className="flex flex-col items-start js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/10 text-[#EDEDED] flex items-center justify-center mb-8">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium mb-4">Contextual Integration</h3>
<p className="text-[#888888] text-sm font-light leading-relaxed">
                    We build for the site, not just on it. Every project begins with a deep analysis of local topology, climate, and cultural history to ensure a seamless integration.
                </p>
</div>
<div className="flex flex-col items-start js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/10 text-[#EDEDED] flex items-center justify-center mb-8">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium mb-4">Material Honesty</h3>
<p className="text-[#888888] text-sm font-light leading-relaxed">
                    Exposed concrete, untreated wood, and raw steel. We believe in letting materials express their true structural nature without unnecessary ornamentation.
                </p>
</div>
<div className="flex flex-col items-start js-scroll-reveal" style={{opacity: '0', transform: 'translateY(2rem)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/10 text-[#EDEDED] flex items-center justify-center mb-8">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium mb-4">Sustainable Future</h3>
<p className="text-[#888888] text-sm font-light leading-relaxed">
                    Passive design principles, maximizing natural light, and innovative eco-technologies form the strict backbone of our environmental logic.
                </p>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xl tracking-tighter font-medium text-[#EDEDED]">
                ARCH<span className="text-[#888888]">/STUDIO</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#888888] hover:bg-white/5 hover:text-[#EDEDED] transition-all" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#888888] hover:bg-white/5 hover:text-[#EDEDED] transition-all" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#888888] hover:bg-white/5 hover:text-[#EDEDED] transition-all" href="#">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="text-[#888888] text-xs font-light tracking-wide">
                © 2024 Arch Studio. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
