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



        // --- Smooth Scrolling (Lenis) ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            direction: 'vertical', 
            gestureDirection: 'vertical', 
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // --- Custom Magnetic Cursor ---
        const cursor = document.getElementById('cursor');
        const cursorText = document.getElementById('cursor-text');
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Spotlight effect variables for bento cards
            document.querySelectorAll('.card-spotlight').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Easing function for cursor delay
        const updateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Cursor interactions
        const hoverImages = document.querySelectorAll('.hover-image');
        hoverImages.forEach(img => {
            img.addEventListener('mouseenter', () => {
                cursor.classList.remove('h-4', 'w-4', 'bg-white', 'mix-blend-difference');
                cursor.classList.add('h-24', 'w-24', 'bg-[#FF3314]', 'mix-blend-normal');
                cursorText.classList.remove('opacity-0');
            });
            img.addEventListener('mouseleave', () => {
                cursor.classList.add('h-4', 'w-4', 'bg-white', 'mix-blend-difference');
                cursor.classList.remove('h-24', 'w-24', 'bg-[#FF3314]', 'mix-blend-normal');
                cursorText.classList.add('opacity-0');
            });
        });

        // --- Vanilla Canvas WebGL-Style Particle Effect ---
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > width) this.x = 0;
                else if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                else if (this.y < 0) this.y = height;
                
                // Slight attraction to mouse
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    this.x += dx * 0.01;
                    this.y += dy * 0.01;
                }
            }
            draw() {
                ctx.fillStyle = 'rgba(232, 232, 227, 0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(window.innerWidth / 10, 150); // Responsive count
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(232, 232, 227, ${0.1 - distance/1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // --- Metric Counters Animation ---
        const counters = document.querySelectorAll('.metric-counter');
        const countObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseFloat(entry.target.getAttribute('data-target'));
                    const decimals = parseInt(entry.target.getAttribute('data-decimal'));
                    let current = 0;
                    const increment = target / 60; // Approx 1 second at 60fps

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            entry.target.innerText = current.toFixed(decimals);
                            requestAnimationFrame(updateCounter);
                        } else {
                            entry.target.innerText = target.toFixed(decimals);
                        }
                    };
                    updateCounter();
                    observer.unobserve(entry.target); // Animate once
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => countObserver.observe(counter));

        // --- Brutalist Accordion Logic ---
        const accordionItems = document.querySelectorAll('.accordion-item');
        const accordionImages = document.querySelectorAll('.accordion-img');

        // Initialize first item
        accordionItems[0].querySelector('.accordion-header').classList.replace('opacity-50', 'opacity-100');
        accordionItems[0].querySelector('.accordion-content').style.maxHeight = accordionItems[0].querySelector('.accordion-content').scrollHeight + "px";
        accordionItems[0].querySelector('.accordion-icon').style.transform = "rotate(45deg)";
        accordionImages[0].style.opacity = "1";

        accordionItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = item.getAttribute('data-index');
                const content = item.querySelector('.accordion-content');
                const header = item.querySelector('.accordion-header');
                const icon = item.querySelector('.accordion-icon');
                
                const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

                // Close all
                accordionItems.forEach(otherItem => {
                    otherItem.querySelector('.accordion-content').style.maxHeight = "0px";
                    otherItem.querySelector('.accordion-header').classList.replace('opacity-100', 'opacity-50');
                    otherItem.querySelector('.accordion-icon').style.transform = "rotate(0deg)";
                });

                accordionImages.forEach(img => {
                    img.style.opacity = "0";
                });

                // Toggle current
                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    header.classList.replace('opacity-50', 'opacity-100');
                    icon.style.transform = "rotate(45deg)";
                    
                    // Show corresponding image
                    const targetImg = document.querySelector(`.accordion-img[data-index="${index}"]`);
                    if(targetImg) targetImg.style.opacity = "1";
                } else {
                     // If closing, revert image to first one for a default state
                     accordionImages[0].style.opacity = "1";
                }
            });
        });

        // --- Horizontal Scroll Mapping ---
        const archiveSection = document.getElementById('archive');
        const horizontalTrack = document.getElementById('horizontal-track');
        
        // Simple vanilla approach to horizontal scrolling on wheel inside section
        archiveSection.addEventListener('wheel', (e) => {
            // Only hijacking if we are hovering over the track area broadly
            const maxScrollLeft = horizontalTrack.scrollWidth - horizontalTrack.clientWidth;
            
            if (e.deltaY !== 0) {
                // If we haven't reached ends, scroll horizontally
                if ((e.deltaY > 0 && horizontalTrack.scrollLeft < maxScrollLeft) || 
                    (e.deltaY < 0 && horizontalTrack.scrollLeft > 0)) {
                    e.preventDefault();
                    horizontalTrack.scrollLeft += e.deltaY * 2; // Speed multiplier
                }
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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]" id="hero-canvas"></canvas>

<div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] bg-noise mix-blend-overlay"></div>

<div className="pointer-events-none fixed left-0 top-0 z-[110] flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white mix-blend-difference transition-[width,height,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" id="cursor">
<span className="font-mono text-[0.5rem] text-[#050505] opacity-0 transition-opacity duration-300 font-bold tracking-widest" id="cursor-text">VIEW</span>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/40 backdrop-blur-xl">
<div className="mx-auto flex w-[clamp(70rem,95vw,100rem)] items-center justify-between py-[clamp(1rem,1.5vw,1.5rem)] px-[clamp(1.5rem,5vw,4rem)]">
<a className="font-display text-[clamp(1.25rem,2vw,1.5rem)] font-bold tracking-tighter text-[#E8E8E3]" href="#">OATH</a>
<div className="hidden gap-[clamp(2rem,3vw,3rem)] md:flex">
<a className="text-xs font-semibold text-[#888888] transition-colors hover:text-[#E8E8E3]" href="#paradigm">Methodology</a>
<a className="text-xs font-semibold text-[#888888] transition-colors hover:text-[#E8E8E3]" href="#metrics">Proof</a>
<a className="text-xs font-semibold text-[#888888] transition-colors hover:text-[#E8E8E3]" href="#archive">The Catalog</a>
</div>
<a className="group relative overflow-hidden rounded-full border border-[#E8E8E3]/20 px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.75rem,1vw,1rem)] text-xs font-semibold text-[#E8E8E3] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#FF3314]" href="#secure">
<span className="relative z-10 transition-colors duration-500 group-hover:text-white">Secure Your Date</span>
<div className="absolute inset-0 z-0 translate-y-full rounded-full bg-[#FF3314] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"></div>
</a>
</div>
</nav>

<header className="relative z-10 flex min-h-[100vh] w-full flex-col justify-end px-[clamp(1.5rem,5vw,4rem)] pb-[clamp(4rem,8vw,8rem)] pt-[clamp(8rem,10vw,10rem)]">
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] grid grid-cols-1 md:grid-cols-12">
<div className="col-span-1 md:col-span-10 xl:col-span-8 flex flex-col items-start gap-8">
<div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3314] before:h-[1px] before:w-8 before:bg-[#FF3314] before:content-['']">
                    /001/ THE GENESIS
                </div>
<h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#E8E8E3] uppercase max-w-[15ch]">
                    Architecting Weddings For The Top <span className="text-[#FF3314]">0.1%</span>.
                </h1>
<p className="font-heading text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.65] text-[#888888] max-w-[55ch]">
                    Eliminating the friction of luxury. Flawless logistics and radical editorial design for high-net-worth unions.
                </p>
<div className="mt-[clamp(1rem,2vw,2rem)] flex flex-wrap gap-4">
<a className="group relative overflow-hidden rounded-full border border-[#E8E8E3]/20 px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-[#E8E8E3] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#FF3314]" href="#secure">
<span className="relative z-10 transition-colors duration-500 group-hover:text-white uppercase tracking-wider">Initiate Briefing</span>
<div className="absolute inset-0 z-0 translate-y-full rounded-full bg-[#FF3314] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"></div>
</a>
<a className="group relative flex items-center justify-center overflow-hidden rounded-full border border-transparent px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-[#888888] transition-all duration-500 hover:text-[#E8E8E3]" href="#archive">
<span className="uppercase tracking-wider">View The Archive</span>
<div className="absolute bottom-2 left-[15%] h-[1px] w-[70%] origin-left scale-x-0 bg-[#E8E8E3] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"></div>
</a>
</div>
</div>
</div>

<div className="absolute bottom-[clamp(2rem,5vw,4rem)] right-[clamp(1.5rem,5vw,4rem)] hidden md:block">
<svg className="animate-spin-slow h-[clamp(6rem,10vw,8rem)] w-[clamp(6rem,10vw,8rem)] fill-[#888888] opacity-50" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text className="font-mono text-[10px] uppercase tracking-widest">
<textpath href="#curve">OATH • RADICAL LOVE • EST 2026 •</textpath>
</text>
</svg>
</div>
</header>

<section className="relative z-10 border-t border-white/5 bg-[#050505] py-[clamp(6rem,10vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]" id="paradigm">
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] grid grid-cols-1 gap-[clamp(3rem,6vw,6rem)] md:grid-cols-12">

<div className="md:col-span-7">
<div className="sticky top-[clamp(8rem,10vw,10rem)] flex flex-col items-start gap-6">
<div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3314] before:h-[1px] before:w-8 before:bg-[#FF3314] before:content-['']">
                        [02] THE PARADIGM SHIFT
                    </div>
<h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#E8E8E3] max-w-[15ch]">
                        Why 95% of Luxury Weddings Fracture Under Pressure.
                    </h2>
</div>
</div>

<div className="relative md:col-span-5 border-l border-[#222] pl-[clamp(2rem,4vw,4rem)] flex flex-col gap-[clamp(4rem,8vw,8rem)]">

<div className="absolute left-0 top-0 h-[30%] w-[1px] bg-[#FF3314] opacity-50 transition-all duration-1000 ease-out"></div>
<div className="flex flex-col gap-4">
<span className="font-mono text-[0.75rem] text-[#888] tracking-widest">/ PROBLEM /</span>
<p className="font-heading text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.65] text-[#888888]">
                        The traditional wedding industry operates on antiquated models of hope rather than strategy. Budgets spiral, vendors underperform, and the cognitive load falls entirely on the couple.
                    </p>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-[0.75rem] text-[#FF3314] tracking-widest">/ OUR SOLUTION /</span>
<p className="font-heading text-[clamp(1.125rem,1.5vw,1.25rem)] font-semibold leading-[1.5] text-[#E8E8E3]">
                        You aren't just funding an event; you are hedging against chaos. We engineer your union with the precision of a corporate merger. Vendor blacklisting, airtight logistics, and zero-fail execution.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#050505] py-[clamp(6rem,10vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
<div className="mx-auto w-[clamp(70rem,95vw,100rem)]">
<div className="mb-[clamp(3rem,6vw,6rem)] flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3314] before:h-[1px] before:w-8 before:bg-[#FF3314] before:content-['']">
                [03] FRAMEWORK
            </div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(1rem,2vw,2rem)]">

<div className="card-spotlight group relative overflow-hidden bg-[#121212]/80 backdrop-blur-md border border-white/10 p-[clamp(2rem,4vw,3rem)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF3314]/50 md:col-span-5 md:row-span-2 flex flex-col justify-between min-h-[400px]">
<div className="relative z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#FF3314] mb-8">
                        /INTELLIGENCE/
                    </div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-[#E8E8E3] mb-6 opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-[#FF3314]" icon="solar:radar-linear"></iconify-icon>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] font-bold tracking-tight text-[#E8E8E3] mb-4">Spatial Scouting</h3>
<p className="font-heading text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] text-[#888888]">
                            Deployment of drone technology and dynamic heatmaps to analyze venue acoustics, light paths, and guest flow vectors months before the date.
                        </p>
</div>
</div>

<div className="card-spotlight group relative overflow-hidden bg-[#121212]/80 backdrop-blur-md border border-white/10 p-[clamp(2rem,4vw,3rem)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF3314]/50 md:col-span-7 flex flex-col justify-between">
<div className="relative z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#FF3314] mb-8">
                        /CURATION/
                    </div>
<div className="relative z-10 md:w-3/4">
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] font-bold tracking-tight text-[#E8E8E3] mb-4">Unlisted Access</h3>
<p className="font-heading text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] text-[#888888]">
                            Direct negotiations with private estates, off-market venues, and Michelin-tier culinary talent avoiding the saturated luxury circuit.
                        </p>
</div>
<iconify-icon className="absolute right-8 bottom-8 text-6xl text-white/5 group-hover:text-[#FF3314]/10 transition-colors" icon="solar:key-linear"></iconify-icon>
</div>

<div className="card-spotlight group relative overflow-hidden bg-[#121212]/80 backdrop-blur-md border border-white/10 p-[clamp(2rem,4vw,3rem)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF3314]/50 md:col-span-7 flex flex-col justify-between">
<div className="relative z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#FF3314] mb-8">
                        /EXECUTION/
                    </div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
<div className="md:w-2/3">
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] font-bold tracking-tight text-[#E8E8E3] mb-4">Invisible Protocol</h3>
<p className="font-heading text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] text-[#888888]">
                                Maintaining a strict 1:4 staff-to-guest ratio. Earpiece communication, synchronized service, and anticipation of friction before it manifests.
                            </p>
</div>
<div className="font-mono text-4xl text-[#333] group-hover:text-[#FF3314] transition-colors">1:4</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-y border-white/5 bg-[#050505] py-[clamp(8rem,12vw,12rem)] px-[clamp(1.5rem,5vw,4rem)] overflow-hidden" id="metrics">

<div className="absolute left-[10%] top-[20%] h-[30vw] w-[30vw] rounded-full bg-white/[0.02] blur-[80px]"></div>
<div className="absolute right-[10%] bottom-[20%] h-[40vw] w-[40vw] rounded-full bg-[#FF3314]/[0.03] blur-[100px]"></div>
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] relative z-10 flex flex-col items-center text-center">
<h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-[#E8E8E3] mb-[clamp(4rem,8vw,8rem)]">
                Data Over Promises.
            </h2>
<div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[clamp(3rem,5vw,5rem)] divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="flex flex-col items-center justify-center pt-8 md:pt-0">
<div className="flex items-baseline font-mono text-[clamp(3rem,5vw,4rem)] text-[#E8E8E3]">
<span className="metric-counter" data-decimal="2" data-target="99.98">0.00</span><span className="text-[#FF3314]">%</span>
</div>
<span className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-[#888]">Vendor Reliability Score</span>
</div>
<div className="flex flex-col items-center justify-center pt-8 md:pt-0">
<div className="flex items-baseline font-mono text-[clamp(3rem,5vw,4rem)] text-[#E8E8E3]">
<span className="metric-counter" data-decimal="0" data-target="14200">0</span><span className="text-[#FF3314]">+</span>
</div>
<span className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-[#888]">Logistical Hours Reclaimed</span>
</div>
<div className="flex flex-col items-center justify-center pt-8 md:pt-0">
<div className="flex items-baseline font-mono text-[clamp(3rem,5vw,4rem)] text-[#E8E8E3]">
<span className="text-[#FF3314] mr-2">$</span><span className="metric-counter" data-decimal="1" data-target="2.4">0.0</span><span className="text-[#FF3314]">M</span>
</div>
<span className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-[#888]">Largest Single-Event Budget</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#050505] py-[clamp(6rem,10vw,10rem)] overflow-hidden" id="archive">
<div className="px-[clamp(1.5rem,5vw,4rem)] mb-[clamp(3rem,6vw,6rem)]">
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3314] before:h-[1px] before:w-8 before:bg-[#FF3314] before:content-['']">
                [05] THE ARCHIVE
            </div>
</div>

<div className="flex gap-[clamp(2rem,4vw,4rem)] px-[clamp(1.5rem,5vw,4rem)] w-max transition-transform duration-700 ease-out cursor-none" id="horizontal-track">

<div className="group relative h-[clamp(25rem,40vw,40rem)] w-[clamp(20rem,30vw,30rem)] overflow-hidden bg-[#121212] shrink-0 hover-image cursor-none">
<img alt="Brutalist Architecture Wedding" className="h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] opacity-70 group-hover:opacity-100 contrast-125 filter grayscale" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 font-mono text-[0.65rem] text-white tracking-widest flex flex-col gap-1">
<span>/ LOC: VILLA BORSANI</span>
<span className="text-[#888]">YEAR: 2025</span>
</div>
</div>
<div className="group relative h-[clamp(30rem,45vw,45rem)] w-[clamp(25rem,35vw,35rem)] mt-12 overflow-hidden bg-[#121212] shrink-0 hover-image cursor-none">
<img alt="Candid Emotion" className="h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] opacity-70 group-hover:opacity-100 contrast-125 filter grayscale" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 font-mono text-[0.65rem] text-white tracking-widest flex flex-col gap-1">
<span>/ SUB: THE UNION</span>
<span className="text-[#888]">YEAR: 2024</span>
</div>
</div>
<div className="group relative h-[clamp(25rem,40vw,40rem)] w-[clamp(20rem,30vw,30rem)] -mt-8 overflow-hidden bg-[#121212] shrink-0 hover-image cursor-none">
<img alt="Architectural Florals" className="h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] opacity-70 group-hover:opacity-100 contrast-125 filter grayscale" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 font-mono text-[0.65rem] text-white tracking-widest flex flex-col gap-1">
<span>/ INST: SCULPTURAL FLORA</span>
<span className="text-[#888]">YEAR: 2025</span>
</div>
</div>
<div className="group relative h-[clamp(30rem,45vw,45rem)] w-[clamp(30rem,40vw,40rem)] mt-20 overflow-hidden bg-[#121212] shrink-0 hover-image cursor-none pr-[clamp(1.5rem,5vw,4rem)]">
<img alt="Editorial Details" className="h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] opacity-70 group-hover:opacity-100 contrast-125 filter grayscale" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 font-mono text-[0.65rem] text-white tracking-widest flex flex-col gap-1">
<span>/ DTL: PRECISION</span>
<span className="text-[#888]">YEAR: 2024</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-white/5 bg-[#050505] py-[clamp(8rem,15vw,15rem)] px-[clamp(1.5rem,5vw,4rem)] text-center">
<div className="mx-auto flex w-full max-w-[65ch] flex-col items-center gap-8">
<h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#E8E8E3]">
                Be the Guest of Honor <br/>at Your Own Union.
            </h2>
<p className="font-heading text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.65] text-[#888888]">
                We absorb the cognitive load. You experience absolute presence. Every variable calculated, every contingency planned.
            </p>
<div className="mt-4">
<a className="group relative inline-flex overflow-hidden rounded-full border border-[#FF3314] px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] text-xs font-semibold text-[#FF3314] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white bg-[#FF3314]/5" href="#secure">
<span className="relative z-10 transition-colors duration-500 uppercase tracking-wider">Claim Your Peace of Mind</span>
<div className="absolute inset-0 z-0 translate-y-full rounded-full bg-[#FF3314] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"></div>
</a>
</div>
</div>
</section>

<section className="relative z-10 bg-[#050505] py-[clamp(6rem,10vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(4rem,8vw,8rem)]">

<div className="flex flex-col border-t border-white/10" id="accordion-container">
<div className="mb-[clamp(2rem,4vw,4rem)] mt-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3314] before:h-[1px] before:w-8 before:bg-[#FF3314] before:content-['']">
                    [07] THE ROADMAP
                </div>

<div className="accordion-item group cursor-pointer border-b border-white/10 py-[clamp(1.5rem,3vw,3rem)]" data-index="0">
<div className="flex items-center justify-between opacity-50 transition-opacity duration-300 group-hover:opacity-100 accordion-header">
<div className="flex items-center gap-8">
<span className="font-mono text-2xl text-[#FF3314]">/01</span>
<h3 className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold tracking-tight text-[#E8E8E3]">Strategic Briefing</h3>
</div>
<iconify-icon className="text-2xl text-[#888] transition-transform duration-500 accordion-icon" icon="solar:add-linear"></iconify-icon>
</div>
<div className="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
<p className="font-heading text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] text-[#888888] pt-6 pl-16 max-w-[45ch]">
                            Deep-dive alignment on aesthetic vision and financial modeling. We establish the rigid boundaries within which total creative freedom can occur.
                        </p>
</div>
</div>

<div className="accordion-item group cursor-pointer border-b border-white/10 py-[clamp(1.5rem,3vw,3rem)]" data-index="1">
<div className="flex items-center justify-between opacity-50 transition-opacity duration-300 group-hover:opacity-100 accordion-header">
<div className="flex items-center gap-8">
<span className="font-mono text-2xl text-[#FF3314]">/02</span>
<h3 className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold tracking-tight text-[#E8E8E3]">Architectural Design</h3>
</div>
<iconify-icon className="text-2xl text-[#888] transition-transform duration-500 accordion-icon" icon="solar:add-linear"></iconify-icon>
</div>
<div className="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
<p className="font-heading text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] text-[#888888] pt-6 pl-16 max-w-[45ch]">
                            Generation of 3D spatial renderings, material sourcing, and locking in the global vendor syndicate. We build the physical manifestation of your mandate.
                        </p>
</div>
</div>

<div className="accordion-item group cursor-pointer border-b border-white/10 py-[clamp(1.5rem,3vw,3rem)]" data-index="2">
<div className="flex items-center justify-between opacity-50 transition-opacity duration-300 group-hover:opacity-100 accordion-header">
<div className="flex items-center gap-8">
<span className="font-mono text-2xl text-[#FF3314]">/03</span>
<h3 className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-bold tracking-tight text-[#E8E8E3]">Black-Ops Execution</h3>
</div>
<iconify-icon className="text-2xl text-[#888] transition-transform duration-500 accordion-icon" icon="solar:add-linear"></iconify-icon>
</div>
<div className="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
<p className="font-heading text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] text-[#888888] pt-6 pl-16 max-w-[45ch]">
                            Event week deployment. The site is secured, schedules are enforced down to the minute, and the environment is controlled entirely by our operatives.
                        </p>
</div>
</div>
</div>

<div className="relative hidden md:block h-full min-h-[500px] overflow-hidden bg-[#121212]">
<img alt="Strategic" className="accordion-img absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out opacity-100 filter grayscale contrast-125" data-index="0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<img alt="Architectural" className="accordion-img absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out opacity-0 filter grayscale contrast-125" data-index="1" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<img alt="Execution" className="accordion-img absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out opacity-0 filter grayscale contrast-125" data-index="2" src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-[#050505]/20 mix-blend-multiply"></div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-white/5 bg-[#050505] py-[clamp(8rem,12vw,12rem)] px-[clamp(1.5rem,5vw,4rem)]" id="secure">
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] grid grid-cols-1 lg:grid-cols-2 gap-[clamp(4rem,8vw,8rem)]">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF3314] before:h-[1px] before:w-8 before:bg-[#FF3314] before:content-['']">
                    [08] INITIATION
                </div>
<h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-[#E8E8E3]">
                    Only 4 Windows <br/>Remaining in <span className="text-[#FF3314]">2026</span>.
                </h2>
<p className="font-heading text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.65] text-[#888888] max-w-[40ch] mt-4">
                    Due to the intensive nature of our logistical framework, we cap our active engagements to guarantee absolute focus. Submission triggers a strict non-disclosure agreement. No fluff.
                </p>
</div>
<div className="bg-[#121212]/50 p-[clamp(2rem,4vw,4rem)] border border-white/10 backdrop-blur-sm">
<form className="flex flex-col gap-8" onsubmit="event.preventDefault();">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-white/20 py-3 text-[#E8E8E3] font-heading focus:outline-none focus:border-[#FF3314] transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-[#888] font-mono text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[#FF3314] peer-valid:-top-4 peer-valid:text-[0.65rem] peer-valid:text-[#888]" htmlFor="name">Principals' Names</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-white/20 py-3 text-[#E8E8E3] font-heading focus:outline-none focus:border-[#FF3314] transition-colors placeholder-transparent" id="date" placeholder="Date" type="text"/>
<label className="absolute left-0 top-3 text-[#888] font-mono text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[#FF3314] peer-valid:-top-4 peer-valid:text-[0.65rem] peer-valid:text-[#888]" htmlFor="date">Target Window (MM/YYYY)</label>
</div>

<div className="relative group">
<select className="w-full bg-transparent border-b border-white/20 py-3 text-[#E8E8E3] font-heading focus:outline-none focus:border-[#FF3314] transition-colors appearance-none cursor-pointer" id="investment">
<option className="bg-[#121212] text-[#888]" disabled="" selected="" value="">Select Floor</option>
<option className="bg-[#121212] text-[#E8E8E3]" value="100k">$100k - $250k</option>
<option className="bg-[#121212] text-[#E8E8E3]" value="250k">$250k - $500k</option>
<option className="bg-[#121212] text-[#E8E8E3]" value="500k+">$500k+</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-[#888] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
<label className="absolute left-0 -top-4 text-[0.65rem] text-[#888] font-mono uppercase tracking-widest" htmlFor="investment">Investment Floor</label>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-b border-white/20 py-3 text-[#E8E8E3] font-heading focus:outline-none focus:border-[#FF3314] transition-colors placeholder-transparent resize-none" id="notes" placeholder="Notes" rows="3"></textarea>
<label className="absolute left-0 top-3 text-[#888] font-mono text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[#FF3314] peer-valid:-top-4 peer-valid:text-[0.65rem] peer-valid:text-[#888]" htmlFor="notes">Vision &amp; Constraints</label>
</div>
<button className="group relative mt-4 overflow-hidden bg-[#E8E8E3] px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,1.5vw,1.25rem)] text-xs font-bold text-[#050505] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full text-center">
<span className="relative z-10 transition-colors duration-500 group-hover:text-white uppercase tracking-widest">Submit Inquiry</span>
<div className="absolute inset-0 z-0 translate-y-full bg-[#FF3314] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"></div>
</button>
</form>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-[#050505] pt-[clamp(4rem,8vw,8rem)] pb-[clamp(2rem,4vw,4rem)] px-[clamp(1.5rem,5vw,4rem)] overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
<span className="font-display text-[25vw] font-bold leading-none tracking-tighter text-[#E8E8E3] opacity-[0.02] select-none text-center transform translate-y-1/4">OATH</span>
</div>
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] relative z-10 grid grid-cols-1 md:grid-cols-4 gap-[clamp(3rem,6vw,6rem)]">
<div className="col-span-1 md:col-span-2">
<a className="font-display text-2xl font-bold tracking-tighter text-[#E8E8E3] mb-6 block" href="#">OATH</a>
<p className="font-heading text-xs leading-[1.65] text-[#888888] max-w-[30ch]">
                    Engineered Execution for Radical Love. The intersection of strict logistics and editorial design.
                </p>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#FF3314] mb-2">Navigation</span>
<a className="text-xs text-[#888] hover:text-[#E8E8E3] transition-colors font-heading" href="#paradigm">Process</a>
<a className="text-xs text-[#888] hover:text-[#E8E8E3] transition-colors font-heading" href="#metrics">Intelligence</a>
<a className="text-xs text-[#888] hover:text-[#E8E8E3] transition-colors font-heading" href="#archive">The Archive</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#FF3314] mb-2">Legal / Corporate</span>
<a className="text-xs text-[#888] hover:text-[#E8E8E3] transition-colors font-heading" href="#">Non-Disclosure</a>
<a className="text-xs text-[#888] hover:text-[#E8E8E3] transition-colors font-heading" href="#">Terms of Engagement</a>
<a className="text-xs text-[#888] hover:text-[#E8E8E3] transition-colors font-heading" href="#">Careers</a>
</div>
</div>
<div className="mx-auto w-[clamp(70rem,95vw,100rem)] relative z-10 mt-[clamp(4rem,8vw,8rem)] pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
<span className="font-mono text-[0.65rem] text-[#555] tracking-widest uppercase">OATH AGENCY © 2026. Engineered in Paris.</span>

<div className="flex items-center border-b border-[#555] pb-2 group">
<input className="bg-transparent font-heading text-xs text-[#E8E8E3] focus:outline-none placeholder-[#555] w-[200px]" placeholder="Intel for the 0.1%" type="email"/>
<button aria-label="Subscribe" className="text-[#555] group-hover:text-[#FF3314] transition-colors pl-4">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</footer>


    </>
  );
}
