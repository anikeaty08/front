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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Check for reduced motion preference
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // 1. CUSTOM CURSOR LOGIC
            const cursor = document.getElementById('custom-cursor');
            const cursorText = document.getElementById('cursor-text');
            const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

            if (hasFinePointer && !prefersReducedMotion) {
                let mouseX = window.innerWidth / 2;
                let mouseY = window.innerHeight / 2;
                let cursorX = mouseX;
                let cursorY = mouseY;
                let isHovering = false;

                // Track mouse movement
                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    if(cursor.style.opacity === '0') cursor.style.opacity = '1';
                });

                // Smooth animation loop
                const renderCursor = () => {
                    // Linear interpolation for smoothness
                    cursorX += (mouseX - cursorX) * 0.25;
                    cursorY += (mouseY - cursorY) * 0.25;
                    
                    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
                    requestAnimationFrame(renderCursor);
                };
                requestAnimationFrame(renderCursor);

                // Hover States for standard interactives
                const interactives = document.querySelectorAll('.hover-trigger, a, button, input, select');
                interactives.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        if (el.closest('.project-card')) return; // handled separately
                        cursor.style.width = '56px';
                        cursor.style.height = '56px';
                        cursorText.classList.remove('hidden');
                        cursorText.textContent = 'FD';
                    });
                    el.addEventListener('mouseleave', () => {
                        if (el.closest('.project-card')) return;
                        cursor.style.width = '12px';
                        cursor.style.height = '12px';
                        cursorText.classList.add('hidden');
                    });
                });

                // Hover States for Project Cards
                const projectCards = document.querySelectorAll('.project-card');
                projectCards.forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        cursor.style.width = '72px';
                        cursor.style.height = '72px';
                        cursorText.classList.remove('hidden');
                        cursorText.textContent = 'VIEW';
                    });
                    card.addEventListener('mouseleave', () => {
                        cursor.style.width = '12px';
                        cursor.style.height = '12px';
                        cursorText.classList.add('hidden');
                    });
                });
                
                // Hide cursor when leaving window
                document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
                document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
            }

            // 2. TEXT SPLITTING FOR HEADLINES (if motion enabled)
            if (!prefersReducedMotion) {
                const splitElements = document.querySelectorAll('.split-text');
                splitElements.forEach(el => {
                    // Only split if it's the hero or manifesto headings
                    const text = el.innerHTML;
                    // Regex to split by words but preserve <br> and <span> tags if any simple ones exist
                    // For this specific design, we'll keep it simple and just split text nodes
                    // A robust splitter is complex, so we target specifically marked headings
                    
                    // A simple word splitter that respects <br>
                    const fragments = text.split(/<br\s*\/?>/i);
                    el.innerHTML = '';
                    
                    fragments.forEach((fragment, fragIndex) => {
                        // Strip any existing span tags to avoid nesting issues from naive splitting
                        const cleanText = fragment.replace(/<[^>]+>/g, '').trim();
                        if (!cleanText) return;
                        
                        const words = cleanText.split(/\s+/);
                        const lineDiv = document.createElement('span');
                        lineDiv.style.display = 'block';
                        
                        words.forEach((word, wordIndex) => {
                            if (!word) return;
                            const wrap = document.createElement('span');
                            wrap.className = 'word-wrap';
                            
                            const inner = document.createElement('span');
                            inner.className = 'word-inner';
                            // Stagger logic based on overall position
                            const staggerDelay = (fragIndex * 0.1) + (wordIndex * 0.04);
                            inner.style.transitionDelay = `${staggerDelay}s`;
                            inner.innerHTML = word + '&nbsp;';
                            
                            wrap.appendChild(inner);
                            lineDiv.appendChild(wrap);
                        });
                        
                        el.appendChild(lineDiv);
                    });
                });

                // For body text paragraphs in manifesto (split by word slightly differently for block flow)
                const manifestoParagraphs = document.querySelectorAll('.manifesto-body');
                manifestoParagraphs.forEach(p => {
                    const words = p.innerText.split(/\s+/);
                    p.innerHTML = '';
                    words.forEach((word, i) => {
                        const wrap = document.createElement('span');
                        wrap.className = 'word-wrap';
                        const inner = document.createElement('span');
                        inner.className = 'word-inner';
                        inner.style.transitionDelay = `${i * 0.015}s`; // Faster stagger for body
                        inner.innerHTML = word + ' ';
                        wrap.appendChild(inner);
                        p.appendChild(wrap);
                    });
                });
            }

            // 3. INTERSECTION OBSERVER FOR REVEALS
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -15% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Stop observing once revealed
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-up, .split-container');
            revealElements.forEach(el => {
                if (prefersReducedMotion) {
                    // Instantly reveal if reduced motion
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    if(el.classList.contains('split-container')) {
                        el.classList.add('is-visible');
                    }
                } else {
                    observer.observe(el);
                }
            });

            // 4. MOBILE MENU TOGGLE
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            const toggleMenu = () => {
                isMenuOpen = !isMenuOpen;
                if(isMenuOpen) {
                    mobileMenu.classList.remove('translate-y-full');
                    mobileMenu.classList.add('translate-y-0');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('translate-y-full');
                    mobileMenu.classList.remove('translate-y-0');
                    document.body.style.overflow = '';
                }
            };

            mobileBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if(isMenuOpen) toggleMenu();
                });
            });

            // 5. REDUCED MOTION MARQUEE FALLBACK
            if (prefersReducedMotion) {
                document.querySelectorAll('.animate-marquee').forEach(el => {
                    el.style.animation = 'none';
                });
            }
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
      

<div aria-hidden="true" className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-multiply">
<svg className="w-full h-full object-cover" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<filter id="noiseFilter">
<feturbulence basefrequency="0.85" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="fixed top-0 left-0 w-[12px] h-[12px] bg-[#FF4422] rounded-full z-[10000] flex items-center justify-center opacity-0" id="custom-cursor">
<span className="hidden font-bold text-white text-[9px] uppercase tracking-[0.08em]" id="cursor-text">FD</span>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#F5F5F2]/95 border-b border-[#0F0F0E]/[0.08]" id="main-nav">
<div className="w-full px-[clamp(1.5rem,5vw,4rem)] py-5 flex justify-between items-center">
<a aria-label="Fond Home" className="font-black text-base tracking-[-0.02em] text-[#0F0F0E] hover-trigger" href="#">FOND</a>
<div className="hidden md:flex items-center gap-10">
<div className="flex gap-8 text-[11px] font-normal tracking-[0.08em] uppercase text-[#0F0F0E]">
<a className="hover:text-[#FF4422] transition-colors hover-trigger" href="#work">WORK</a>
<a className="hover:text-[#FF4422] transition-colors hover-trigger" href="#studio">STUDIO</a>
<a className="hover:text-[#FF4422] transition-colors hover-trigger" href="#writing">WRITING</a>
<a className="hover:text-[#FF4422] transition-colors hover-trigger" href="#contact">CONTACT</a>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 font-bold text-[11px] tracking-[0.08em] uppercase text-[#F5F5F2] bg-[#FF4422] hover:bg-[#0F0F0E] transition-colors hover-trigger custom-focus" href="#contact">
                    Start a project
                </a>
</div>

<button aria-label="Menu" className="md:hidden flex flex-col gap-[4px] hover-trigger p-2 custom-focus" id="mobile-menu-btn">
<span className="w-6 h-[2px] bg-[#0F0F0E] block"></span>
<span className="w-6 h-[2px] bg-[#0F0F0E] block"></span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#F5F5F2] z-[45] flex flex-col justify-center px-[clamp(1.5rem,5vw,4rem)] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="mobile-menu">
<div className="flex flex-col gap-6 text-[clamp(2.5rem,8vw,4rem)] font-black tracking-[-0.02em] uppercase leading-none">
<a className="mobile-link hover:text-[#FF4422]" href="#work">WORK</a>
<a className="mobile-link hover:text-[#FF4422]" href="#studio">STUDIO</a>
<a className="mobile-link hover:text-[#FF4422]" href="#writing">WRITING</a>
<a className="mobile-link text-[#FF4422]" href="#contact">START A PROJECT</a>
</div>
</div>
<main>

<section className="min-h-screen pt-32 pb-16 px-[clamp(1.5rem,5vw,4rem)] flex flex-col justify-end relative overflow-hidden">
<div className="w-full flex flex-col lg:flex-row justify-between items-end gap-12 relative z-10">

<div className="w-full lg:w-3/4">
<h1 className="text-[clamp(4rem,9vw,8.5rem)] font-black leading-[0.85] tracking-[-0.02em] uppercase text-[#0F0F0E] split-text split-container m-0 p-0 w-[100vw] ml-[calc(-1*clamp(1.5rem,5vw,4rem))] pl-[clamp(1.5rem,5vw,4rem)]">
                        WE MAKE BRANDS<br/>
<span className="font-extralight text-[#0F0F0E]">THAT PEOPLE ARGUE</span><br/>
                        ABOUT.
                    </h1>
<div className="mt-8 md:mt-12 flex flex-col gap-8 reveal-up" style={{transitionDelay: '0.6s'}}>
<p className="font-light text-[1.1rem] tracking-[0.01em] text-[#0F0F0E] max-w-xl leading-relaxed">
                            FOND is a brand and digital design studio. We work with founders, CMOs, and companies that have given up on ordinary.
                        </p>
<div className="flex flex-wrap items-center gap-6">
<a className="inline-flex items-center gap-1.5 font-normal text-[11px] uppercase tracking-[0.08em] text-[#0F0F0E] underline underline-offset-4 decoration-1 decoration-[#0F0F0E]/30 hover:decoration-[#FF4422] hover:text-[#FF4422] transition-all duration-200 hover-trigger custom-focus" href="#work">
                                See selected work
                            </a>
<a className="inline-flex items-center gap-1.5 font-normal text-[11px] uppercase tracking-[0.08em] text-[#0F0F0E] underline underline-offset-4 decoration-1 decoration-[#0F0F0E]/30 hover:decoration-[#FF4422] hover:text-[#FF4422] transition-all duration-200 hover-trigger custom-focus" href="#contact">
                                Start a project →
                            </a>
</div>
</div>
</div>

<div className="w-full lg:w-1/4 flex lg:justify-end reveal-up" style={{transitionDelay: '0.8s'}}>
<div className="flex flex-col gap-3 font-light text-[0.75rem] text-[#666660] tracking-wide border-l border-[#0F0F0E]/10 pl-4 lg:border-none lg:pl-0 lg:text-right uppercase">
<span>47 brands built</span>
<span>Studio since 2019</span>
<span className="text-[#FF4422] font-normal">3 spots available in Q2</span>
</div>
</div>
</div>
</section>

<section aria-hidden="true" className="w-full overflow-hidden bg-[#0F0F0E] py-4 marquee-group select-none flex">
<div className="animate-marquee flex whitespace-nowrap" style={{animationDuration: '35s'}}>

<div className="flex items-center">
<span className="text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase tracking-[-0.02em] text-[#F5F5F2] mr-8">BRAND IDENTITY // DIGITAL DESIGN // MOTION GRAPHICS // ART DIRECTION // CAMPAIGN // SPATIAL DESIGN // WEB //</span>
</div>
<div className="flex items-center">
<span className="text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase tracking-[-0.02em] text-[#F5F5F2] mr-8">BRAND IDENTITY // DIGITAL DESIGN // MOTION GRAPHICS // ART DIRECTION // CAMPAIGN // SPATIAL DESIGN // WEB //</span>
</div>
</div>
</section>

<section className="py-[clamp(5rem,9vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]" id="work">
<span className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#FF4422] inline-block mb-10 reveal-up">001</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="flex flex-col gap-16 md:mt-0">

<a className="group block cursor-none project-card reveal-up" href="#">
<div className="aspect-[4/3] overflow-hidden bg-[#EBEBE8]">

<img alt="Helio Project" className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter contrast-105" loading="lazy" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex flex-col gap-1">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">HELIO</h3>
<p className="font-light text-[0.75rem] text-[#666660]">Brand identity + web</p>
</div>
</a>

<a className="group block cursor-none project-card reveal-up" href="#">
<div className="aspect-[4/3] overflow-hidden bg-[#EBEBE8]">
<img alt="Ordne Project" className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter contrast-105" loading="lazy" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex flex-col gap-1">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">ORDNE</h3>
<p className="font-light text-[0.75rem] text-[#666660]">Digital product + brand system</p>
</div>
</a>
</div>

<div className="flex flex-col gap-16 md:mt-[6rem]">

<a className="group block cursor-none project-card reveal-up" href="#">
<div className="aspect-[4/3] overflow-hidden bg-[#EBEBE8]">
<img alt="Vaste Project" className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter contrast-105" loading="lazy" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex flex-col gap-1">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">VASTE</h3>
<p className="font-light text-[0.75rem] text-[#666660]">Campaign + motion</p>
</div>
</a>

<a className="group block cursor-none project-card reveal-up" href="#">
<div className="aspect-[4/3] overflow-hidden bg-[#EBEBE8]">
<img alt="Creux Project" className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter contrast-105" loading="lazy" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex flex-col gap-1">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">CREUX</h3>
<p className="font-light text-[0.75rem] text-[#666660]">Spatial identity + wayfinding</p>
</div>
</a>
</div>
</div>
<div className="mt-16 reveal-up">
<a className="inline-flex items-center gap-1.5 font-normal text-[11px] uppercase tracking-[0.08em] text-[#0F0F0E] underline underline-offset-4 decoration-1 decoration-[#0F0F0E]/30 hover:decoration-[#FF4422] hover:text-[#FF4422] transition-all duration-200 hover-trigger custom-focus" href="#work">
                    View full work →
                </a>
</div>
</section>

<section aria-hidden="true" className="w-full overflow-hidden bg-[#F5F5F2] py-6 marquee-group select-none flex border-y border-[#0F0F0E]/5">
<div className="animate-marquee flex whitespace-nowrap" style={{animationDuration: '55s'}}>
<div className="flex items-center">
<span className="text-[clamp(1.25rem,2vw,2rem)] font-extralight uppercase tracking-tight text-[#0F0F0E] mr-12">MOST AGENCY WEBSITES LOOK THE SAME BECAUSE MOST AGENCIES THINK THE SAME // FOND DISAGREES //</span>
</div>
<div className="flex items-center">
<span className="text-[clamp(1.25rem,2vw,2rem)] font-extralight uppercase tracking-tight text-[#0F0F0E] mr-12">MOST AGENCY WEBSITES LOOK THE SAME BECAUSE MOST AGENCIES THINK THE SAME // FOND DISAGREES //</span>
</div>
</div>
</section>

<section className="py-[clamp(5rem,9vw,10rem)] overflow-hidden" id="manifesto">
<div className="px-[clamp(1.5rem,5vw,4rem)]">
<span className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#FF4422] inline-block mb-10 reveal-up">002</span>
</div>

<div className="w-[100vw] ml-[calc(-1*clamp(1.5rem,5vw,4rem))] lg:ml-[-50vw] lg:left-[50%] relative flex flex-col split-container px-[clamp(1.5rem,5vw,4rem)] lg:px-0">
<h2 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.02em] uppercase text-[#0F0F0E] whitespace-nowrap split-text m-0 w-full text-left">
                    GREAT BRANDS
                </h2>
<h2 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.02em] uppercase text-[#0F0F0E] whitespace-nowrap split-text m-0 w-full text-right lg:pr-[5vw]">
                    MAKE PEOPLE FEEL
                </h2>
<h2 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.02em] uppercase text-[#0F0F0E] whitespace-nowrap split-text m-0 w-full text-left">
                    SOMETHING SPECIFIC.
                </h2>
</div>
<div className="px-[clamp(1.5rem,5vw,4rem)] mt-16 lg:mt-24">
<div className="max-w-[55ch] flex flex-col gap-6 font-light text-[0.95rem] leading-relaxed text-[#0F0F0E]">
<p className="reveal-up split-container manifesto-body">Brands that try to appeal to everyone end up meaning nothing to anyone. We build with a point of view — our clients' point of view, sharpened until it's uncomfortable to ignore.</p>
<p className="reveal-up split-container manifesto-body">We don't do mood boards. We do arguments. Every design decision has a reason, and the reason is always connected to what the brand is trying to make people believe.</p>
<p className="reveal-up split-container manifesto-body">We take fewer projects so we can go deeper on each one. The right clients hire us because of that. The wrong ones don't — which is also by design.</p>
</div>
</div>
</section>

<section className="py-[clamp(5rem,9vw,10rem)] px-[clamp(1.5rem,5vw,4rem)] border-t border-[#0F0F0E]/5" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
<div className="reveal-up">
<span className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#FF4422] inline-block mb-6">003</span>
<h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.02em] uppercase text-[#0F0F0E] leading-[0.9]">US.</h2>
</div>
<div className="flex flex-col">

<div className="flex flex-col border-t border-[#0F0F0E]/10 reveal-up">
<div className="py-6 border-b border-[#0F0F0E]/10">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">MARC ANDERS</h3>
<p className="font-light text-[0.85rem] text-[#666660] mt-1">
<span className="text-[#0F0F0E]">Creative Director.</span> "I've been told my opinions about typography are unreasonable. I take that as a compliment."
                            </p>
</div>
<div className="py-6 border-b border-[#0F0F0E]/10">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">ELENA VOSS</h3>
<p className="font-light text-[0.85rem] text-[#666660] mt-1">
<span className="text-[#0F0F0E]">Design Director.</span> "I work on systems. Everything we make has to survive the part where the client's team uses it without us."
                            </p>
</div>
<div className="py-6 border-b border-[#0F0F0E]/10">
<h3 className="font-bold text-[1rem] uppercase tracking-tight text-[#0F0F0E]">TOMÁS REYES</h3>
<p className="font-light text-[0.85rem] text-[#666660] mt-1">
<span className="text-[#0F0F0E]">Development.</span> "The best code is the code users never think about. The worst is the kind that makes a designer apologize."
                            </p>
</div>
</div>

<p className="mt-12 font-light text-[0.95rem] text-[#0F0F0E] max-w-[55ch] reveal-up">
                        FOND was started in 2019 with the specific intention of not becoming the kind of agency we were frustrated by as clients. We're still working on it.
                    </p>
</div>
</div>
</section>

<section className="py-[clamp(5rem,9vw,10rem)] px-[clamp(1.5rem,5vw,4rem)] bg-[#0F0F0E] text-[#F5F5F2]" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal-up flex flex-col">
<span className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#FF4422] inline-block mb-6">004</span>
<h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light tracking-[-0.02em] uppercase leading-[1.1] mb-8">
                        TELL US ABOUT<br/>YOUR PROJECT.
                    </h2>
<p className="font-light text-[0.95rem] text-[#666660] max-w-md leading-relaxed">
                        We read every inquiry personally. We respond to the ones we think we'd be good for. If we're not, we'll say so.
                    </p>
</div>
<div className="bg-[#1A1A18] p-8 lg:p-12 reveal-up">
<form className="flex flex-col gap-10">
<div className="flex flex-col gap-2 relative">
<label className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#666660]" htmlFor="name">YOUR NAME</label>
<input className="w-full bg-transparent border-b border-[#666660]/30 py-2 text-[1rem] font-light text-[#F5F5F2] placeholder-[#666660]/50 hover-trigger custom-focus focus:border-[#FF4422]" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#666660]" htmlFor="company">YOUR COMPANY / PROJECT</label>
<input className="w-full bg-transparent border-b border-[#666660]/30 py-2 text-[1rem] font-light text-[#F5F5F2] placeholder-[#666660]/50 hover-trigger custom-focus focus:border-[#FF4422]" id="company" placeholder="Acme Corp" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#666660]" htmlFor="email">EMAIL</label>
<input className="w-full bg-transparent border-b border-[#666660]/30 py-2 text-[1rem] font-light text-[#F5F5F2] placeholder-[#666660]/50 hover-trigger custom-focus focus:border-[#FF4422]" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2 relative">
<label className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#666660]" htmlFor="needs">WHAT DO YOU NEED?</label>
<div className="relative w-full">
<select className="w-full bg-transparent border-b border-[#666660]/30 py-2 text-[1rem] font-light text-[#F5F5F2] hover-trigger custom-focus focus:border-[#FF4422] cursor-pointer" id="needs">
<option className="bg-[#1A1A18] text-[#666660]" disabled="" selected="" value="">Select an option...</option>
<option className="bg-[#1A1A18]" value="brand">Brand Identity</option>
<option className="bg-[#1A1A18]" value="web">Web Design + Build</option>
<option className="bg-[#1A1A18]" value="campaign">Campaign</option>
<option className="bg-[#1A1A18]" value="motion">Motion</option>
<option className="bg-[#1A1A18]" value="other">Something Else</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#666660]">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M6 9l6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#666660]" htmlFor="budget">WHAT'S THE ROUGH BUDGET?</label>
<div className="relative w-full">
<select className="w-full bg-transparent border-b border-[#666660]/30 py-2 text-[1rem] font-light text-[#F5F5F2] hover-trigger custom-focus focus:border-[#FF4422] cursor-pointer" id="budget">
<option className="bg-[#1A1A18] text-[#666660]" disabled="" selected="" value="">Select range...</option>
<option className="bg-[#1A1A18]" value="tier1">Under €20K</option>
<option className="bg-[#1A1A18]" value="tier2">€20K–50K</option>
<option className="bg-[#1A1A18]" value="tier3">€50K–100K</option>
<option className="bg-[#1A1A18]" value="tier4">€100K+</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#666660]">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M6 9l6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-normal text-[9px] uppercase tracking-[0.14em] text-[#666660]" htmlFor="why">IN ONE SENTENCE, WHY FOND?</label>
<input className="w-full bg-transparent border-b border-[#666660]/30 py-2 text-[1rem] font-light text-[#F5F5F2] placeholder-[#666660]/50 hover-trigger custom-focus focus:border-[#FF4422]" id="why" placeholder="Be specific." type="text"/>
</div>
<div className="mt-4 flex flex-col gap-4">
<button className="w-full py-4 bg-[#F5F5F2] text-[#0F0F0E] font-bold text-[11px] uppercase tracking-[0.08em] hover:bg-[#FF4422] hover:text-[#F5F5F2] transition-colors duration-200 hover-trigger custom-focus" type="button">
                                SEND INQUIRY
                            </button>
<p className="font-light text-[10px] text-[#666660] text-center uppercase tracking-wide">
                                Response time: 2 business days. We respond to everyone, yes or no.
                            </p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-[#0F0F0E] text-[#F5F5F2] pt-16 pb-8 px-[clamp(1.5rem,5vw,4rem)] relative overflow-hidden flex flex-col min-h-[50vh] justify-between">

<div aria-hidden="true" className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none z-0">
<h2 className="text-[clamp(10rem,25vw,30rem)] font-black leading-none text-[#F5F5F2] opacity-5 tracking-[-0.03em] m-0 p-0 text-center">
                FOND
            </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 mb-24">
<div className="flex flex-col gap-4 text-[11px] font-normal tracking-[0.08em] uppercase">
<a className="text-[#666660] hover:text-[#FF4422] transition-colors hover-trigger w-fit custom-focus" href="#work">WORK</a>
<a className="text-[#666660] hover:text-[#FF4422] transition-colors hover-trigger w-fit custom-focus" href="#studio">STUDIO</a>
<a className="text-[#666660] hover:text-[#FF4422] transition-colors hover-trigger w-fit custom-focus" href="#writing">WRITING</a>
<a className="text-[#666660] hover:text-[#FF4422] transition-colors hover-trigger w-fit custom-focus" href="#contact">CONTACT</a>
</div>
<div className="flex flex-col gap-4 text-[11px] font-normal tracking-[0.08em] uppercase">
<a className="text-[#666660] hover:text-[#FF4422] transition-colors hover-trigger w-fit custom-focus" href="#">INSTAGRAM</a>
<a className="text-[#666660] hover:text-[#FF4422] transition-colors hover-trigger w-fit custom-focus" href="#">ARE.NA</a>
</div>
<div className="col-span-2 md:col-span-2 flex flex-col md:items-end gap-6">
<p className="font-light text-[0.85rem] text-[#666660]">
                    → Follow our process on Are.na
                </p>
<a className="inline-flex items-center gap-1.5 font-normal text-[11px] uppercase tracking-[0.08em] text-[#FF4422] underline underline-offset-4 decoration-1 decoration-[#FF4422]/30 hover:decoration-[#F5F5F2] hover:text-[#F5F5F2] transition-all duration-200 hover-trigger custom-focus" href="#contact">
                    Start a project →
                </a>
</div>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-[#F5F5F2]/10 pt-8 font-light text-[10px] uppercase tracking-[0.08em] text-[#666660]">
<p>FOND Studio © 2026. Paris, Berlin.</p>
<p>Currently taking Q2 projects.</p>
</div>
</footer>



    </>
  );
}
