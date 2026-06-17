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



        // 1. Initial Loader & Intro Animations
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const progress = document.getElementById('loader-progress');
            const logo = document.getElementById('loader-logo');
            
            // Progress bar animation
            setTimeout(() => { progress.style.width = '100%'; }, 100);
            
            // Reveal logo
            setTimeout(() => { logo.classList.remove('opacity-0'); }, 800);
            
            // Hide loader and trigger initial hero animations
            setTimeout(() => { 
                loader.style.opacity = '0'; 
                setTimeout(() => {
                    loader.remove();
                    // Trigger intersection observer early for hero elements
                    document.querySelectorAll('.fade-up, .word-pull-up, .clip-reveal').forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight) {
                            el.classList.add('is-visible');
                        }
                    });
                }, 600);
            }, 1800);
        });

        // 2. Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        const interactives = document.querySelectorAll('.interactive, a, button, input, select, textarea');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            
            // Global mouse position variables for CSS radial gradients
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });

        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // 3. Scroll Reveal & Intersection Observers
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Specific logic for counters
                    if (entry.target.classList.contains('count-up') && !entry.target.dataset.counted) {
                        entry.target.dataset.counted = 'true';
                        let target = parseFloat(entry.target.dataset.target);
                        let duration = 2000;
                        let start = null;
                        const step = (timestamp) => {
                            if (!start) start = timestamp;
                            let progress = Math.min((timestamp - start) / duration, 1);
                            let ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
                            let current = (ease * target).toFixed(target % 1 !== 0 ? 1 : 0);
                            entry.target.innerText = current;
                            if (progress < 1) window.requestAnimationFrame(step);
                            else entry.target.innerText = target;
                        };
                        window.requestAnimationFrame(step);
                    }

                    // Specific logic for chart bars
                    if (entry.target.classList.contains('chart-bar')) {
                        setTimeout(() => {
                            entry.target.style.width = entry.target.dataset.width;
                        }, 300); // slight delay for dramatic effect
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up, .clip-reveal, .word-pull-up, .count-up, .chart-bar').forEach(el => observer.observe(el));

        // 4. Horizontal Filmstrip Drag & Scroll (Selected Works)
        const slider = document.getElementById('works-filmstrip');
        const workProgress = document.getElementById('work-progress');
        const workCounter = document.getElementById('work-counter');
        const workTiles = document.querySelectorAll('.work-tile');
        
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active:cursor-grabbing');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active:cursor-grabbing'); });
        slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active:cursor-grabbing'); });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast multiplier
            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener('scroll', () => {
            let scrollPercentage = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
            // Protect against NaN on unscrollable screens
            if (isNaN(scrollPercentage)) scrollPercentage = 0; 
            let activeIndex = Math.round(scrollPercentage * (workTiles.length - 1));
            workProgress.style.width = `${((activeIndex + 1) / workTiles.length) * 100}%`;
            workCounter.innerText = `0${activeIndex + 1} / 0${workTiles.length}`;
        });
        
        document.getElementById('next-work').addEventListener('click', () => {
            slider.scrollBy({ left: window.innerWidth * 0.72, behavior: 'smooth' });
        });
        document.getElementById('prev-work').addEventListener('click', () => {
            slider.scrollBy({ left: -window.innerWidth * 0.72, behavior: 'smooth' });
        });

        // 5. Practice Method Sticky Sidebar Tracker
        const phases = document.querySelectorAll('.phase-block');
        const phaseNums = document.querySelectorAll('.phase-num');
        
        const phaseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    let index = entry.target.dataset.index;
                    phaseNums.forEach(num => {
                        if(num.dataset.phase === index) {
                            num.classList.replace('text-[#B8B4AC]', 'text-[#111111]');
                            num.querySelector('div').style.width = '2.5rem';
                        } else {
                            num.classList.replace('text-[#111111]', 'text-[#B8B4AC]');
                            num.querySelector('div').style.width = '0';
                        }
                    });
                }
            });
        }, { rootMargin: '-40% 0px -40% 0px' });
        
        phases.forEach(phase => phaseObserver.observe(phase));

        // 6. Topographical Canvas WebGL / 2D Fluid Simulation
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let cw, ch;

        function resizeCanvas() {
            cw = canvas.width = window.innerWidth;
            ch = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let time = 0;
        function drawTopography() {
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(17, 17, 17, 0.05)';
            
            // Draw pseudo-noise topographical contour lines
            for(let i = 0; i < 45; i++) {
                ctx.beginPath();
                for(let x = 0; x <= cw; x += 25) {
                    // Combine sine waves to mimic organic landscape structure
                    let y = (ch * 0.85) 
                          + Math.sin(x * 0.002 + time) * 120 
                          + Math.sin(x * 0.005 - time * 0.7) * 60
                          + Math.sin(x * 0.001 + time * 0.3 + i * 0.08) * 250
                          - (i * 18); // Vertical stacking interval
                    
                    if(x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            
            time += 0.003; // fluid speed
            requestAnimationFrame(drawTopography);
        }
        drawTopography();

        // 7. Live Oslo Time Tracker
        function updateTime() {
            const now = new Date();
            const options = { timeZone: 'Europe/Oslo', hour: '2-digit', minute: '2-digit', hour12: false };
            const timeString = now.toLocaleTimeString('en-GB', options);
            document.getElementById('live-time').innerText = timeString + ' CET';
        }
        setInterval(updateTime, 10000); // Check every 10 seconds
        updateTime();

        // 8. Mobile Navigation Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            const lines = mobileMenuBtn.querySelectorAll('span');
            
            if(isMenuOpen) {
                mobileMenu.classList.remove('-translate-y-full');
                lines[0].style.transform = 'translateY(3.75px) rotate(45deg)';
                lines[1].style.transform = 'translateY(-3.75px) rotate(-45deg)';
                
                // Staggered reveal for links
                mobileLinks.forEach((link, i) => {
                    setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                        link.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
                    }, 300 + (i * 80));
                });
            } else {
                mobileMenu.classList.add('-translate-y-full');
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
                
                // Reset links
                mobileLinks.forEach(link => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(1.5rem)';
                    link.style.transition = 'none';
                });
            }
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => { if(isMenuOpen) mobileMenuBtn.click(); });
        });

        // 9. Interactive Easter Egg & Ceremonial Mode
        let easterEggClicks = 0;
        document.getElementById('footer-wordmark').addEventListener('click', () => {
            easterEggClicks++;
            if(easterEggClicks >= 3) {
                document.body.classList.toggle('ceremonial-mode');
                easterEggClicks = 0;
            }
        });

        // 10. Navbar active state on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active', 'text-[#111111]');
                if (link.getAttribute('href').includes(current) && current !== '') {
                    link.classList.add('active', 'text-[#111111]');
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
      
<div id="grain"></div>
<div className="blueprint-grid"></div>
<div id="custom-cursor">
<div className="cursor-line-h"></div>
<div className="cursor-line-v"></div>
<div className="cursor-dot"></div>
</div>
<div className="fixed inset-0 z-[9999] bg-[#F6F4F0] flex flex-col items-center justify-center" id="loader">
<div className="relative w-[15rem] h-[1px] bg-[#111111]/20">
<div className="absolute top-0 left-0 h-full bg-[#FF5A1F] loader-line" id="loader-progress"></div>
</div>
<div className="mt-4 opacity-0 transition-opacity duration-300" id="loader-logo">
<svg className="w-[1.5rem] h-[1.5rem] text-[#111111]" viewbox="0 0 32 32">
<path d="M 5,26 L 5,6 L 11,6 L 11,20 L 5,26 Z" fill="currentColor"></path>
<path d="M 21,26 L 21,6 L 27,6 L 27,20 L 21,26 Z" fill="currentColor"></path>
<path d="M 11,6 L 21,20 L 21,26 L 11,12 Z" fill="currentColor"></path>
</svg>
</div>
</div>
<nav className="fixed top-0 w-full h-[4.5rem] bg-[#F6F4F0]/70 backdrop-blur-[24px] saturate-[140%] border-b border-[#111111]/[0.06] z-[100] transition-colors duration-300" id="navbar">
<div className="max-w-[100rem] mx-auto h-full px-5 md:px-[2.5rem] grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
<a className="flex items-center gap-3 interactive group" href="#">
<svg className="w-[1.625rem] h-[1.625rem] text-[#111111]" viewbox="0 0 32 32">
<path className="transition-transform duration-500 ease-out group-hover:-translate-y-[1px]" d="M 5,26 L 5,6 L 11,6 L 11,20 L 5,26 Z" fill="currentColor"></path>
<path className="transition-transform duration-500 ease-out group-hover:translate-y-[1px]" d="M 21,26 L 21,6 L 27,6 L 27,20 L 21,26 Z" fill="currentColor"></path>
<path className="transition-transform duration-300 group-hover:translate-x-[1.5px]" d="M 11,6 L 21,20 L 21,26 L 11,12 Z" fill="currentColor"></path>
</svg>
<span className="font-display text-[1.125rem] tracking-[-0.01em]">NORDE</span>
</a>
<div className="hidden md:flex gap-2">
<a className="nav-link relative text-[#4A4A48] text-[0.875rem] font-medium px-4 py-2 transition-colors hover:text-[#111111] interactive" href="#works">Works</a>
<a className="nav-link relative text-[#4A4A48] text-[0.875rem] font-medium px-4 py-2 transition-colors hover:text-[#111111] interactive" href="#method">Method</a>
<a className="nav-link relative text-[#4A4A48] text-[0.875rem] font-medium px-4 py-2 transition-colors hover:text-[#111111] interactive" href="#materials">Materials</a>
<a className="nav-link relative text-[#4A4A48] text-[0.875rem] font-medium px-4 py-2 transition-colors hover:text-[#111111] interactive" href="#studio">Studio</a>
<a className="nav-link relative text-[#4A4A48] text-[0.875rem] font-medium px-4 py-2 transition-colors hover:text-[#111111] interactive" href="#inquire">Inquire</a>
</div>
<div className="justify-self-end flex items-center">
<a className="hidden md:flex items-center gap-2 bg-[#111111] text-[#F6F4F0] rounded-full h-[2.5rem] px-[1.375rem] text-[0.875rem] font-medium transition-colors hover:bg-[#FF5A1F] interactive group" href="#inquire">
                    Start a Project <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
</a>
<button className="md:hidden flex flex-col gap-[6px] w-[18px] interactive" id="mobile-menu-btn">
<span className="w-full h-[1.5px] bg-[#111111] transition-transform duration-300"></span>
<span className="w-full h-[1.5px] bg-[#111111] transition-transform duration-300"></span>
</button>
</div>
</div>
</nav>
<div className="fixed inset-0 bg-[#F6F4F0] z-[90] flex flex-col items-center justify-center gap-6 transform -translate-y-full transition-transform duration-500 ease-in-out" id="mobile-menu">
<a className="mobile-link font-display text-[clamp(2rem,6vw,3rem)] font-light opacity-0 translate-y-6" href="#works">Works</a>
<a className="mobile-link font-display text-[clamp(2rem,6vw,3rem)] font-light opacity-0 translate-y-6" href="#method">Method</a>
<a className="mobile-link font-display text-[clamp(2rem,6vw,3rem)] font-light opacity-0 translate-y-6" href="#materials">Materials</a>
<a className="mobile-link font-display text-[clamp(2rem,6vw,3rem)] font-light opacity-0 translate-y-6" href="#studio">Studio</a>
<a className="mobile-link font-display text-[clamp(2rem,6vw,3rem)] font-light opacity-0 translate-y-6" href="#inquire">Inquire</a>
</div>

<section className="relative min-h-[100dvh] pt-[4.5rem] z-[2] flex flex-col max-w-[100rem] mx-auto w-full overflow-hidden">

<canvas id="hero-canvas"></canvas>
<div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_50%,transparent_30%,#F6F4F0_100%)] pointer-events-none hidden md:block"></div>
<div className="relative z-10 flex flex-col md:flex-row h-full flex-grow px-5 md:px-[3rem]">

<div className="w-full md:w-[60%] flex flex-col justify-center pt-24 pb-16 md:py-0 relative">
<div className="flex items-center gap-3 mb-8 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[#8A8680]">01 / NORDE STUDIO — EST. 2014 / OSLO · ZÜRICH</span>
</div>
<h1 className="font-display text-[clamp(3.5rem,8.5vw,9.5rem)] leading-[0.88] tracking-[-0.04em] text-[#111111] flex flex-col items-start uppercase">
<span className="word-pull-up">Architecture</span>
<span className="word-pull-up ml-[5%]">As <span className="font-light italic text-[#FF5A1F] lowercase text-[0.9em]">measured</span></span>
<span className="word-pull-up ml-[10%]">Argument.</span>
</h1>
<div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-6 fade-up" style={{transitionDelay: '0.6s'}}>
<a className="cta-container relative bg-[#111111] text-[#F6F4F0] h-[3.25rem] px-[2.25rem] flex items-center justify-center font-medium text-[0.9375rem] tracking-[0.01em] cta-primary interactive overflow-hidden group" href="#works">
<div className="cta-primary-inner"></div>
<span className="relative z-10 transition-all duration-300 group-hover:tracking-[0.08em]">View Selected Works <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
</a>
<a className="group flex items-center gap-3 h-[3.25rem] interactive" href="#inquire">
<div className="flex gap-1">
<div className="w-1 h-1 bg-[#111111] transition-all duration-300 group-hover:w-2 delay-[0ms]"></div>
<div className="w-1 h-1 bg-[#111111] transition-all duration-300 group-hover:w-2 delay-[60ms]"></div>
<div className="w-1 h-1 bg-[#111111] transition-all duration-300 group-hover:w-2 delay-[120ms]"></div>
</div>
<span className="font-medium text-[0.9375rem] text-[#111111] transition-transform duration-300 group-hover:translate-x-2">Visit the Studio</span>
</a>
</div>
</div>

<div className="w-full md:w-[40%] flex items-center justify-center relative md:-ml-12 pb-12 md:pb-0 h-[50vh] md:h-auto">

<div className="relative w-[85%] md:w-[110%] aspect-[3/4] corner-marks clip-reveal magnetic-img group interactive" style={{transitionDelay: '0.8s'}}>
<img alt="Architectural Structure" className="w-full h-full object-cover filter grayscale-[15%] contrast-[1.1]" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute -bottom-6 -left-6 bg-[#F6F4F0] p-4 border border-[#111111]/10 shadow-xl hidden md:block fade-up" style={{transitionDelay: '1.2s'}}>
<span className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] uppercase block mb-1">▪ CURRENT SITE</span>
<span className="font-display text-[1.125rem] text-[#111111]">Kirkegata 14, Oslo</span>
</div>
</div>

<div className="absolute bottom-12 right-0 hidden md:flex flex-col items-center gap-2 fade-up" style={{transitionDelay: '1.4s'}}>
<div className="relative w-[1px] h-[4rem] bg-[#111111]/20 overflow-hidden">
<div className="absolute top-0 w-[3px] h-[3px] -ml-[1px] bg-[#FF5A1F] animate-[bounce_2s_infinite]"></div>
</div>
<span className="font-mono text-[0.625rem] text-[#111111]/60 tracking-[0.15em]" style={{writingMode: 'vertical-rl'}}>SCROLL</span>
</div>
</div>
</div>
<div className="w-full border-t border-[#111111]/[0.08] relative z-20 bg-[#F6F4F0]/80 backdrop-blur-md">
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem] py-6 flex flex-wrap gap-y-4 gap-x-8 fade-up" style={{transitionDelay: '0.9s'}}>
<div className="flex items-center gap-8"><span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8A8680]">PRACTICE / <span className="text-[#111111] font-medium">SINCE 2014</span></span><div className="w-[1px] h-[14px] bg-[#111111]/[0.15] hidden md:block"></div></div>
<div className="flex items-center gap-8"><span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8A8680]">WORKS / <span className="text-[#111111] font-medium">87 COMPLETED</span></span><div className="w-[1px] h-[14px] bg-[#111111]/[0.15] hidden md:block"></div></div>
<div className="flex items-center gap-8"><span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8A8680]">TEAM / <span className="text-[#111111] font-medium">24 ARCHITECTS</span></span><div className="w-[1px] h-[14px] bg-[#111111]/[0.15] hidden md:block"></div></div>
<div className="flex items-center gap-8 hidden lg:flex"><span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-[#8A8680]">RECOGNITION / <span className="text-[#111111] font-medium">12 AWARDS</span></span></div>
</div>
</div>
</section>

<div className="section-divider"></div>
<section className="bg-[#F1EEE8] py-[6rem] md:py-[10rem]" id="philosophy">
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem]">
<div className="flex items-center gap-3 mb-16 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#8A8680]">/ 001 / PHILOSOPHY</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[6fr_1fr_5fr] gap-12 lg:gap-0">
<div>
<h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#111111]">
<span className="word-pull-up">We don't draw <span className="font-light italic text-[#111111]">buildings</span>.</span>
<span className="word-pull-up">We draw decisions about land, time, and weight.</span>
</h2>
<p className="mt-12 font-normal text-[1.0625rem] text-[#4A4A48] leading-[1.65] max-w-[33.75rem] fade-up">
                        NORDE is a twenty-four-person practice working between Oslo and Zürich. We take on roughly fourteen commissions per year, across private residences, cultural buildings, and adaptive reuse. We reject speculative renderings. Every proposal we present is already structurally resolved, materially sourced, and costed against the site's climate and its client's patience.
                    </p>
<div className="mt-16 max-w-[30rem] fade-up delay-200">
<p className="font-display text-[1.75rem] leading-[1.2] text-[#111111]">
                            "A good building is a long argument with gravity, decided in favor of the earth."
                        </p>
<p className="mt-4 font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] uppercase">
                            — EIRIK HAUGEN, FOUNDING PARTNER
                        </p>
</div>
</div>
<div className="hidden lg:block"></div>
<div className="relative w-full">
<img alt="Architectural Detail" className="w-full aspect-[4/5] object-cover clip-reveal magnetic-img interactive filter grayscale-[10%]" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<img alt="Material Detail" className="w-full lg:w-[70%] aspect-square object-cover mt-6 lg:-mt-12 lg:ml-auto clip-reveal delay-200 magnetic-img interactive filter grayscale-[10%]" src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<div className="section-divider"></div>
<section className="bg-[#FFFFFF] pt-[10rem] pb-[7.5rem] overflow-hidden" id="works">
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem] mb-20">
<div className="flex items-center gap-3 mb-12 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#8A8680]">/ 002 / SELECTED WORKS — 06 / 87</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#111111]">
<span className="word-pull-up">Work is the <span className="font-light italic text-[#111111]">argument</span>.</span>
</h2>
<div className="hidden md:flex flex-col items-end gap-4 fade-up delay-200">
<div className="flex gap-2">
<button className="w-[2.75rem] h-[2.75rem] border border-[#111111]/10 flex items-center justify-center text-[#111111] transition-all hover:bg-[#FF5A1F] hover:text-[#F6F4F0] interactive" id="prev-work"><iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon></button>
<button className="w-[2.75rem] h-[2.75rem] border border-[#111111]/10 flex items-center justify-center text-[#111111] transition-all hover:bg-[#FF5A1F] hover:text-[#F6F4F0] interactive" id="next-work"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</div>
<div className="flex items-center gap-4">
<span className="font-mono text-[0.8125rem] text-[#111111]" id="work-counter">01 / 06</span>
<div className="w-[5rem] h-[1px] bg-[#111111]/10 relative">
<div className="absolute top-0 left-0 h-full w-1/6 bg-[#FF5A1F] transition-all duration-300" id="work-progress"></div>
</div>
</div>
</div>
</div>
</div>

<div className="filmstrip flex flex-col md:flex-row gap-12 md:gap-12 px-5 md:px-[3rem] w-full max-w-[100rem] mx-auto cursor-grab active:cursor-grabbing" id="works-filmstrip">

<div className="flex-none w-full md:w-[72vw] snap-start relative group interactive work-tile fade-up">
<div className="w-full h-[40vh] md:h-[32rem] rounded-sm overflow-hidden relative">
<img alt="Novango Pavilion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 border border-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}></div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 transition-transform duration-500 group-hover:-translate-y-1">
<div>
<h3 className="font-display text-[2.25rem] text-[#111111] leading-none">Novango Pavilion</h3>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mt-3 uppercase">TROMSØ, NO · 2024 · CULTURAL</div>
</div>
<div className="flex flex-col justify-between">
<p className="text-[#4A4A48] text-[0.875rem] leading-[1.55] max-w-[25rem]">A 220-square-meter sculpture pavilion built for the Arctic Biennale. Laminated oak frame, triple-glazed façade tuned to polar night.</p>
<div className="mt-6 flex gap-3 divide-x divide-[#111111]/[0.15]">
<span className="font-mono text-[0.6875rem] text-[#8A8680]">AREA 220m²</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">BUDGET €1.8M</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">TIMELINE 14mo</span>
</div>
</div>
</div>
</div>

<div className="flex-none w-full md:w-[72vw] snap-start relative group interactive work-tile fade-up" style={{transitionDelay: '0.1s'}}>
<div className="w-full h-[40vh] md:h-[32rem] rounded-sm overflow-hidden relative">
<img alt="Haugen House" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 border border-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 transition-transform duration-500 group-hover:-translate-y-1">
<div>
<h3 className="font-display text-[2.25rem] text-[#111111] leading-none">Haugen House</h3>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mt-3 uppercase">TELEMARK, NO · 2023 · RESIDENTIAL</div>
</div>
<div className="flex flex-col justify-between">
<p className="text-[#4A4A48] text-[0.875rem] leading-[1.55] max-w-[25rem]">Private weekend residence embedded into a south-facing schist slope. Thermal mass of exposed concrete walls offsets glazing heat loss.</p>
<div className="mt-6 flex gap-3 divide-x divide-[#111111]/[0.15]">
<span className="font-mono text-[0.6875rem] text-[#8A8680]">AREA 340m²</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">BUDGET €2.4M</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">TIMELINE 22mo</span>
</div>
</div>
</div>
</div>

<div className="flex-none w-full md:w-[72vw] snap-start relative group interactive work-tile fade-up" style={{transitionDelay: '0.2s'}}>
<div className="w-full h-[40vh] md:h-[32rem] rounded-sm overflow-hidden relative">
<img alt="Den Sorte Skolen" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 border border-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 transition-transform duration-500 group-hover:-translate-y-1">
<div>
<h3 className="font-display text-[2.25rem] text-[#111111] leading-none">Den Sorte Skolen</h3>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mt-3 uppercase">AARHUS, DK · 2023 · EDUCATION</div>
</div>
<div className="flex flex-col justify-between">
<p className="text-[#4A4A48] text-[0.875rem] leading-[1.55] max-w-[25rem]">Primary school planned as five linked pavilions. Passive ventilation via stack effect. Construction waste 4.1% of purchased material.</p>
<div className="mt-6 flex gap-3 divide-x divide-[#111111]/[0.15]">
<span className="font-mono text-[0.6875rem] text-[#8A8680]">AREA 3,800m²</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">BUDGET €12.4M</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">TIMELINE 28mo</span>
</div>
</div>
</div>
</div>

<div className="flex-none w-full md:w-[72vw] snap-start relative group interactive work-tile fade-up" style={{transitionDelay: '0.3s'}}>
<div className="w-full h-[40vh] md:h-[32rem] rounded-sm overflow-hidden relative">
<img alt="Waldhaus Atelier" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 border border-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 transition-transform duration-500 group-hover:-translate-y-1">
<div>
<h3 className="font-display text-[2.25rem] text-[#111111] leading-none">Waldhaus Atelier</h3>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mt-3 uppercase">GRAUBÜNDEN, CH · 2024 · STUDIO</div>
</div>
<div className="flex flex-col justify-between">
<p className="text-[#4A4A48] text-[0.875rem] leading-[1.55] max-w-[25rem]">Working studio for a ceramicist. Charred cedar rainscreen, buried kiln room, north-light clerestory calibrated for color-accurate work.</p>
<div className="mt-6 flex gap-3 divide-x divide-[#111111]/[0.15]">
<span className="font-mono text-[0.6875rem] text-[#8A8680]">AREA 180m²</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">BUDGET €920k</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">TIMELINE 11mo</span>
</div>
</div>
</div>
</div>

<div className="flex-none w-full md:w-[72vw] snap-start relative group interactive work-tile fade-up" style={{transitionDelay: '0.4s'}}>
<div className="w-full h-[40vh] md:h-[32rem] rounded-sm overflow-hidden relative">
<img alt="Mountain Chapel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 border border-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 transition-transform duration-500 group-hover:-translate-y-1">
<div>
<h3 className="font-display text-[2.25rem] text-[#111111] leading-none">Mountain Chapel</h3>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mt-3 uppercase">VALAIS, CH · 2022 · CULTURAL</div>
</div>
<div className="flex flex-col justify-between">
<p className="text-[#4A4A48] text-[0.875rem] leading-[1.55] max-w-[25rem]">Prefabricated cross-laminated timber superstructure airlifted by helicopter. Designed to withstand 4-meter snow loads.</p>
<div className="mt-6 flex gap-3 divide-x divide-[#111111]/[0.15]">
<span className="font-mono text-[0.6875rem] text-[#8A8680]">AREA 95m²</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">BUDGET €1.1M</span>
<span className="font-mono text-[0.6875rem] text-[#8A8680] pl-3">TIMELINE 19mo</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-divider"></div>
<section className="bg-[#F6F4F0] py-[6rem] md:py-[11.25rem]" id="method">
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem]">
<div className="flex items-center gap-3 mb-16 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#8A8680]">/ 003 / PRACTICE METHOD — HOW WE WORK</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12 lg:gap-[7.5rem]">
<div className="lg:sticky top-[4.5rem] lg:top-[30vh] flex flex-row lg:flex-col gap-6 z-20 bg-[#F6F4F0] lg:bg-transparent py-4 lg:py-0 border-b border-[#111111]/10 lg:border-none">
<div className="phase-num flex items-center transition-all duration-500 font-display text-[2rem] lg:text-[5.5rem] font-light text-[#B8B4AC]" data-phase="1">01<div className="h-[1px] w-0 bg-[#FF5A1F] ml-4 transition-all duration-500"></div></div>
<div className="phase-num flex items-center transition-all duration-500 font-display text-[2rem] lg:text-[5.5rem] font-light text-[#B8B4AC]" data-phase="2">02<div className="h-[1px] w-0 bg-[#FF5A1F] ml-4 transition-all duration-500"></div></div>
<div className="phase-num flex items-center transition-all duration-500 font-display text-[2rem] lg:text-[5.5rem] font-light text-[#B8B4AC]" data-phase="3">03<div className="h-[1px] w-0 bg-[#FF5A1F] ml-4 transition-all duration-500"></div></div>
<div className="phase-num flex items-center transition-all duration-500 font-display text-[2rem] lg:text-[5.5rem] font-light text-[#B8B4AC]" data-phase="4">04<div className="h-[1px] w-0 bg-[#FF5A1F] ml-4 transition-all duration-500"></div></div>
<div className="phase-num flex items-center transition-all duration-500 font-display text-[2rem] lg:text-[5.5rem] font-light text-[#B8B4AC]" data-phase="5">05<div className="h-[1px] w-0 bg-[#FF5A1F] ml-4 transition-all duration-500"></div></div>
</div>
<div className="flex flex-col relative" id="phases-container">
<div className="phase-block min-h-[50vh] lg:min-h-[80vh] pb-12 lg:pb-[7.5rem] relative group interactive" data-index="1">
<div className="absolute inset-0 bg-[radial-gradient(circle_280px_at_var(--mouse-x)_var(--mouse-y),rgba(255,90,31,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -ml-12 w-[120%]"></div>
<div className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-6 fade-up">/ PHASE 01</div>
<h3 className="font-display text-[2rem] lg:text-[3rem] leading-[1.1] text-[#111111] max-w-[40rem] fade-up delay-100">We walk the site in every season before we draw a single line.</h3>
<p className="mt-8 text-[1.0625rem] text-[#4A4A48] leading-[1.6] max-w-[35rem] fade-up delay-200">Every commission begins with four seasonal site visits. We document existing vegetation, solar angles, soil cores, water-table, wind paths, sightlines from adjacent parcels, and sound profiles.</p>
<div className="mt-12 flex flex-wrap gap-6 fade-up delay-300">
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ SITE REPORT</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ SOLAR STUDY</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ SOIL CORES</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ HYDROLOGY MAP</span>
</div>
</div>
<div className="phase-block min-h-[50vh] lg:min-h-[80vh] pb-12 lg:pb-[7.5rem] relative group interactive" data-index="2">
<div className="absolute inset-0 bg-[radial-gradient(circle_280px_at_var(--mouse-x)_var(--mouse-y),rgba(255,90,31,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -ml-12 w-[120%]"></div>
<div className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-6 fade-up">/ PHASE 02</div>
<h3 className="font-display text-[2rem] lg:text-[3rem] leading-[1.1] text-[#111111] max-w-[40rem] fade-up delay-100">Material, not finish, is decided first.</h3>
<p className="mt-8 text-[1.0625rem] text-[#4A4A48] leading-[1.6] max-w-[35rem] fade-up delay-200">Before massing or plan, we establish a regional material palette — typically 3 structural and 3 cladding materials sourced within 200 kilometers of site. This constrains everything that follows.</p>
<div className="mt-12 flex flex-wrap gap-6 fade-up delay-300">
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ MATERIAL DOSSIER</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ SUPPLIER LIST</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ CARBON CALC</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ SOURCING AUDIT</span>
</div>
</div>
<div className="phase-block min-h-[50vh] lg:min-h-[80vh] pb-12 lg:pb-[7.5rem] relative group interactive" data-index="3">
<div className="absolute inset-0 bg-[radial-gradient(circle_280px_at_var(--mouse-x)_var(--mouse-y),rgba(255,90,31,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -ml-12 w-[120%]"></div>
<div className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-6 fade-up">/ PHASE 03</div>
<h3 className="font-display text-[2rem] lg:text-[3rem] leading-[1.1] text-[#111111] max-w-[40rem] fade-up delay-100">Structure comes before form.</h3>
<p className="mt-8 text-[1.0625rem] text-[#4A4A48] leading-[1.6] max-w-[35rem] fade-up delay-200">We produce a structurally-resolved massing model before any aesthetic proposal is presented. Our in-house engineer reviews every scheme. Walls must hold themselves up.</p>
<div className="mt-12 flex flex-wrap gap-6 fade-up delay-300">
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ STRUCTURAL MODEL</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ LOAD CALC</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ SEISMIC REVIEW</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ WIND ANALYSIS</span>
</div>
</div>
<div className="phase-block min-h-[50vh] lg:min-h-[80vh] pb-12 lg:pb-[7.5rem] relative group interactive" data-index="4">
<div className="absolute inset-0 bg-[radial-gradient(circle_280px_at_var(--mouse-x)_var(--mouse-y),rgba(255,90,31,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -ml-12 w-[120%]"></div>
<div className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-6 fade-up">/ PHASE 04</div>
<h3 className="font-display text-[2rem] lg:text-[3rem] leading-[1.1] text-[#111111] max-w-[40rem] fade-up delay-100">One scheme. Not three.</h3>
<p className="mt-8 text-[1.0625rem] text-[#4A4A48] leading-[1.6] max-w-[35rem] fade-up delay-200">We present a single fully-resolved proposal, priced and coordinated. We believe that three half-finished options is a failure to commit, and that clients deserve our conviction.</p>
<div className="mt-12 flex flex-wrap gap-6 fade-up delay-300">
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ PRESENTATION MODEL</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ FIXED-FEE QUOTE</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ TIMELINE</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ CLIENT PROTOCOL</span>
</div>
</div>
<div className="phase-block min-h-[50vh] lg:min-h-[80vh] pb-12 lg:pb-[7.5rem] relative group interactive" data-index="5">
<div className="absolute inset-0 bg-[radial-gradient(circle_280px_at_var(--mouse-x)_var(--mouse-y),rgba(255,90,31,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -ml-12 w-[120%]"></div>
<div className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-6 fade-up">/ PHASE 05</div>
<h3 className="font-display text-[2rem] lg:text-[3rem] leading-[1.1] text-[#111111] max-w-[40rem] fade-up delay-100">We are on site once a week until completion.</h3>
<p className="mt-8 text-[1.0625rem] text-[#4A4A48] leading-[1.6] max-w-[35rem] fade-up delay-200">A partner attends weekly site meetings for every project. We maintain relationships with roughly 40 regional contractors whose craft standards we trust. No project is handed off.</p>
<div className="mt-12 flex flex-wrap gap-6 fade-up delay-300">
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ WEEKLY VISIT</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ PUNCH LIST</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ AS-BUILT DWGS</span>
<span className="font-mono text-[0.6875rem] tracking-[0.1em] text-[#8A8680]">▪ 2YR WARRANTY</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-divider"></div>
<section className="bg-[#EDEAE3] pt-[6rem] pb-[6rem] md:pt-[6rem]" id="materials">
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem]">
<div className="flex items-center gap-3 mb-12 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#8A8680]">/ 004 / MATERIALS LIBRARY — 12 IN REGULAR USE</span>
</div>
<h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#111111]">
<span className="word-pull-up">We work with <span className="font-light italic">twelve</span> materials. Rarely more.</span>
</h2>
<p className="mt-6 font-normal text-[1.125rem] text-[#4A4A48] max-w-[42.5rem] fade-up delay-100">
                A finite palette forces honesty. Every decision is made against a material we already know intimately.
            </p>
<div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1" id="materials-grid">
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0s'}}>
<img alt="Concrete" className="w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Board-formed Concrete</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Local Nordic aggregate</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">23 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.05s'}}>
<img alt="Larch" className="w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Nordic Larch</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Siberian origin, air-dried</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">31 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.1s'}}>
<img alt="Charred Cedar" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Charred Cedar</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Shou Sugi Ban, oiled</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">14 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.15s'}}>
<img alt="Schist" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Norwegian Schist</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Otta split face</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">9 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.2s'}}>
<img alt="Steel" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Raw Steel</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Corten A 8mm</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">19 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.25s'}}>
<img alt="Oak" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Swiss Oak</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Cross-laminated 5-ply</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">11 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.3s'}}>
<img alt="Clay Tile" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Clay Tile</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Hand-thrown wood-fired</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">7 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.35s'}}>
<img alt="Fir" className="w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Soap-finished Fir</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Untreated 27mm</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">18 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.4s'}}>
<img alt="Bronze" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Brushed Bronze</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">30% copper alloy</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">22 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.45s'}}>
<img alt="Plaster" className="w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Waxed Plaster</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Venetian lime 3-coat</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">13 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.5s'}}>
<img alt="Wool Felt" className="w-full h-full object-cover filter grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Wool Felt</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Nordic 12mm undyed</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">8 projects</div>
</div>
</div>
<div className="pegboard-tile aspect-square relative overflow-hidden clip-reveal interactive cursor-crosshair group" style={{transitionDelay: '0.55s'}}>
<img alt="Glass" className="w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="pegboard-overlay absolute inset-0 flex flex-col items-center justify-center text-center p-4">
<div className="font-display text-[1.375rem] text-[#F6F4F0]">Darkened Glass</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/80 mt-1">Triple-glazed Low-e</div>
<div className="font-mono text-[0.6875rem] text-[#FF5A1F] mt-3">34 projects</div>
</div>
</div>
</div>
<div className="mt-16 text-center fade-up delay-300">
<span className="font-mono text-[0.75rem] tracking-[0.15em] text-[#8A8680]">▪ 12 TOTAL · 4 STRUCTURAL · 6 CLADDING · 2 FINISH / SOURCED WITHIN 200KM OF EVERY PROJECT</span>
</div>
</div>
</section>

<div className="section-divider"></div>
<section className="bg-[#FFFFFF] py-[7.5rem]" id="studio">
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem]">
<div className="flex items-center gap-3 mb-12 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#8A8680]">/ 005 / STUDIO FIGURES — LIVE COUNTS</span>
</div>
<h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#111111]">
<span className="word-pull-up">The practice, in <span className="font-light italic">figures</span>.</span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-min gap-y-12 lg:gap-y-[3rem] lg:gap-x-[2rem] mt-16">
<div className="lg:col-span-4 fade-up">
<div className="font-display text-[clamp(5rem,15vw,13.75rem)] leading-[0.9] text-[#111111] tabular-nums count-up" data-target="87">00</div>
<div className="mt-2 font-mono text-[0.75rem] tracking-[0.15em] text-[#8A8680]">COMPLETED WORKS SINCE 2014</div>
<p className="mt-2 text-[0.875rem] text-[#4A4A48] max-w-[12.5rem]">Across residential, cultural, educational, and adaptive-reuse typologies.</p>
</div>
<div className="lg:col-span-4 fade-up delay-100">
<div className="font-display font-light italic text-[clamp(4rem,10vw,8.75rem)] leading-[1] tracking-[-0.02em] text-[#111111]">€<span className="count-up tabular-nums" data-target="248">0</span>.6M</div>
<div className="mt-2 font-mono text-[0.75rem] tracking-[0.15em] text-[#8A8680]">CUMULATIVE BUILT VALUE</div>
<p className="mt-2 text-[0.875rem] text-[#4A4A48] max-w-[15rem]">Range: €180,000 (smallest) to €24M (largest).</p>
</div>
<div className="lg:col-span-4 fade-up delay-200">
<div className="font-display text-[clamp(4rem,10vw,8.75rem)] leading-[1] text-[#111111] tabular-nums"><span className="count-up" data-target="98">0</span>.2<sup className="text-[0.6em]">%</sup></div>
<div className="mt-2 font-mono text-[0.75rem] tracking-[0.15em] text-[#8A8680]">ON-TIME COMPLETION RATE</div>
<p className="mt-2 text-[0.875rem] text-[#4A4A48] max-w-[16rem]">Against original quoted timeline. Measured across 83 of 87 projects. We publish our delays.</p>
</div>
<div className="lg:col-span-6 mt-8 lg:mt-0 fade-up">
<div className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-6">▪ MATERIAL USAGE ACROSS ALL PROJECTS</div>
<div className="flex flex-col gap-3" id="material-chart">
<div className="flex items-center group cursor-crosshair interactive py-1 px-2 -mx-2 transition-colors hover:bg-[rgba(17,17,17,0.03)] relative">
<div className="w-[10rem] text-right pr-4 font-medium text-[0.875rem] text-[#111111] z-10">Triple-glazed Low-e</div>
<div className="flex-grow h-[1px] bg-[rgba(17,17,17,0.1)] relative z-10">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-[#111111] transition-all duration-1000 ease-out group-hover:bg-[#FF5A1F] chart-bar" data-width="100%" style={{width: '0%'}}></div>
</div>
<div className="w-[4rem] text-left pl-4 font-mono text-[0.8125rem] text-[#111111] z-10">34</div>
</div>
<div className="flex items-center group cursor-crosshair interactive py-1 px-2 -mx-2 transition-colors hover:bg-[rgba(17,17,17,0.03)] relative">
<div className="w-[10rem] text-right pr-4 font-medium text-[0.875rem] text-[#111111] z-10">Nordic Larch</div>
<div className="flex-grow h-[1px] bg-[rgba(17,17,17,0.1)] relative z-10">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-[#111111] transition-all duration-1000 ease-out group-hover:bg-[#FF5A1F] chart-bar" data-width="91%" style={{width: '0%'}}></div>
</div>
<div className="w-[4rem] text-left pl-4 font-mono text-[0.8125rem] text-[#111111] z-10">31</div>
</div>
<div className="flex items-center group cursor-crosshair interactive py-1 px-2 -mx-2 transition-colors hover:bg-[rgba(17,17,17,0.03)] relative">
<div className="w-[10rem] text-right pr-4 font-medium text-[0.875rem] text-[#111111] z-10">Board-formed Concrete</div>
<div className="flex-grow h-[1px] bg-[rgba(17,17,17,0.1)] relative z-10">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-[#111111] transition-all duration-1000 ease-out group-hover:bg-[#FF5A1F] chart-bar" data-width="68%" style={{width: '0%'}}></div>
</div>
<div className="w-[4rem] text-left pl-4 font-mono text-[0.8125rem] text-[#111111] z-10">23</div>
</div>
<div className="flex items-center group cursor-crosshair interactive py-1 px-2 -mx-2 transition-colors hover:bg-[rgba(17,17,17,0.03)] relative">
<div className="w-[10rem] text-right pr-4 font-medium text-[0.875rem] text-[#111111] z-10">Brushed Bronze</div>
<div className="flex-grow h-[1px] bg-[rgba(17,17,17,0.1)] relative z-10">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-[#111111] transition-all duration-1000 ease-out group-hover:bg-[#FF5A1F] chart-bar" data-width="65%" style={{width: '0%'}}></div>
</div>
<div className="w-[4rem] text-left pl-4 font-mono text-[0.8125rem] text-[#111111] z-10">22</div>
</div>
<div className="flex items-center group cursor-crosshair interactive py-1 px-2 -mx-2 transition-colors hover:bg-[rgba(17,17,17,0.03)] relative">
<div className="w-[10rem] text-right pr-4 font-medium text-[0.875rem] text-[#111111] z-10">Corten A Steel</div>
<div className="flex-grow h-[1px] bg-[rgba(17,17,17,0.1)] relative z-10">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-[#111111] transition-all duration-1000 ease-out group-hover:bg-[#FF5A1F] chart-bar" data-width="56%" style={{width: '0%'}}></div>
</div>
<div className="w-[4rem] text-left pl-4 font-mono text-[0.8125rem] text-[#111111] z-10">19</div>
</div>
<div className="flex items-center group cursor-crosshair interactive py-1 px-2 -mx-2 transition-colors hover:bg-[rgba(17,17,17,0.03)] relative">
<div className="w-[10rem] text-right pr-4 font-medium text-[0.875rem] text-[#111111] z-10">Norwegian Fir</div>
<div className="flex-grow h-[1px] bg-[rgba(17,17,17,0.1)] relative z-10">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-[#111111] transition-all duration-1000 ease-out group-hover:bg-[#FF5A1F] chart-bar" data-width="53%" style={{width: '0%'}}></div>
</div>
<div className="w-[4rem] text-left pl-4 font-mono text-[0.8125rem] text-[#111111] z-10">18</div>
</div>
</div>
</div>
<div className="lg:col-span-6 mt-8 lg:mt-0 flex flex-col justify-between gap-6 fade-up delay-200">
<div className="border-t border-[#111111]/[0.08] pt-6 flex items-baseline gap-6">
<div className="font-display text-[4rem] leading-none text-[#111111] count-up w-[4rem]" data-target="24">0</div>
<div className="font-mono text-[0.6875rem] text-[#8A8680]">ARCHITECTS / ENGINEERS</div>
</div>
<div className="border-t border-[#111111]/[0.08] pt-6 flex items-baseline gap-6">
<div className="font-display text-[4rem] leading-none text-[#111111] count-up w-[4rem]" data-target="12">0</div>
<div className="font-mono text-[0.6875rem] text-[#8A8680]">AWARDS / 2018—2025</div>
</div>
<div className="border-t border-[#111111]/[0.08] pt-6 flex items-baseline gap-6">
<div className="font-display text-[4rem] leading-none text-[#111111] count-up w-[4rem]" data-target="40">0</div>
<div className="font-mono text-[0.6875rem] text-[#8A8680]">REGIONAL CONTRACTORS</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-divider"></div>
<section className="bg-[#F6F4F0] pt-0 pb-[7.5rem]">
<div className="w-full border-b border-[#111111]/[0.08] h-[5.5rem] flex items-center overflow-hidden relative marquee-container interactive" style={{WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #F6F4F0 8%, #F6F4F0 92%, transparent 100%)'}}>
<div className="marquee-track gap-[4rem] items-center" id="marquee-content">


<svg aria-label="Dezeen" className="ticker-logo" viewbox="0 0 100 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="20" font-weight="600" letter-spacing="-1px" x="0" y="18">dezeen</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="ArchDaily" className="ticker-logo" viewbox="0 0 160 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="400" letter-spacing="0" x="0" y="18">ArchDaily</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Wallpaper*" className="ticker-logo" viewbox="0 0 120 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="500" letter-spacing="-0.5px" x="0" y="18">Wallpaper*</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Domus" className="ticker-logo" viewbox="0 0 80 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="19" font-weight="600" letter-spacing="1px" text-transform="uppercase" x="0" y="18">domus</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Dwell" className="ticker-logo" viewbox="0 0 70 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="20" font-weight="600" letter-spacing="-1px" x="0" y="18">dwell</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="DETAIL" className="ticker-logo" viewbox="0 0 90 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="400" letter-spacing="2px" x="0" y="18">DETAIL</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>

<svg aria-label="Dezeen" className="ticker-logo" viewbox="0 0 100 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="20" font-weight="600" letter-spacing="-1px" x="0" y="18">dezeen</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="ArchDaily" className="ticker-logo" viewbox="0 0 160 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="400" letter-spacing="0" x="0" y="18">ArchDaily</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Wallpaper*" className="ticker-logo" viewbox="0 0 120 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="500" letter-spacing="-0.5px" x="0" y="18">Wallpaper*</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Domus" className="ticker-logo" viewbox="0 0 80 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="19" font-weight="600" letter-spacing="1px" text-transform="uppercase" x="0" y="18">domus</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Dwell" className="ticker-logo" viewbox="0 0 70 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="20" font-weight="600" letter-spacing="-1px" x="0" y="18">dwell</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="DETAIL" className="ticker-logo" viewbox="0 0 90 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="400" letter-spacing="2px" x="0" y="18">DETAIL</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>

<svg aria-label="Dezeen" className="ticker-logo" viewbox="0 0 100 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="20" font-weight="600" letter-spacing="-1px" x="0" y="18">dezeen</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="ArchDaily" className="ticker-logo" viewbox="0 0 160 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="400" letter-spacing="0" x="0" y="18">ArchDaily</text></svg>
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<svg aria-label="Wallpaper*" className="ticker-logo" viewbox="0 0 120 24"><text fontFamily="'Inter Tight', sans-serif" fontSize="18" font-weight="500" letter-spacing="-0.5px" x="0" y="18">Wallpaper*</text></svg>
</div>
</div>
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem] pt-[7.5rem]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 border-l border-[#111111]/[0.08]" id="press-grid">
<div className="p-6 md:p-8 flex flex-col h-full border-b xl:border-b-0 border-r border-[#111111]/[0.08] relative conic-border interactive fade-up group bg-transparent hover:bg-[#FFFFFF] transition-colors" style={{transitionDelay: '0s'}}>
<div className="font-display font-light italic text-[3rem] text-[#111111] leading-none mb-6 group-hover:text-[#FF5A1F] transition-colors count-up" data-target="2024">2024</div>
<div className="font-medium text-[0.9375rem] text-[#111111] mb-3">Nordic Architecture Prize</div>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mb-8 uppercase">NORDIC ARCHITECTS' ASSOC</div>
<div className="flex-grow"></div>
<div className="pt-4 border-t border-[#111111]/[0.08] font-display italic text-[0.875rem] text-[#4A4A48] line-clamp-4">"NORDE's Novango Pavilion represents a generation confident enough to build small."</div>
</div>
<div className="p-6 md:p-8 flex flex-col h-full border-b xl:border-b-0 border-r border-[#111111]/[0.08] relative conic-border interactive fade-up group bg-transparent hover:bg-[#FFFFFF] transition-colors" style={{transitionDelay: '0.08s'}}>
<div className="font-display font-light italic text-[3rem] text-[#111111] leading-none mb-6 group-hover:text-[#FF5A1F] transition-colors count-up" data-target="2024">2024</div>
<div className="font-medium text-[0.9375rem] text-[#111111] mb-3">Building of the Year</div>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mb-8 uppercase">DEZEEN AWARDS</div>
<div className="flex-grow"></div>
<div className="pt-4 border-t border-[#111111]/[0.08] font-display italic text-[0.875rem] text-[#4A4A48] line-clamp-4">"A single room of extraordinary materiality. The pavilion reads as pure argument."</div>
</div>
<div className="p-6 md:p-8 flex flex-col h-full border-b xl:border-b-0 border-r border-[#111111]/[0.08] relative conic-border interactive fade-up group bg-transparent hover:bg-[#FFFFFF] transition-colors" style={{transitionDelay: '0.16s'}}>
<div className="font-display font-light italic text-[3rem] text-[#111111] leading-none mb-6 group-hover:text-[#FF5A1F] transition-colors count-up" data-target="2023">2023</div>
<div className="font-medium text-[0.9375rem] text-[#111111] mb-3">House of the Year</div>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mb-8 uppercase">WALLPAPER AWARDS</div>
<div className="flex-grow"></div>
<div className="pt-4 border-t border-[#111111]/[0.08] font-display italic text-[0.875rem] text-[#4A4A48] line-clamp-4">"Haugen House is an exercise in disciplined restraint. The stone stays stone."</div>
</div>
<div className="p-6 md:p-8 flex flex-col h-full border-b xl:border-b-0 border-r border-[#111111]/[0.08] relative conic-border interactive fade-up group bg-transparent hover:bg-[#FFFFFF] transition-colors" style={{transitionDelay: '0.24s'}}>
<div className="font-display font-light italic text-[3rem] text-[#111111] leading-none mb-6 group-hover:text-[#FF5A1F] transition-colors count-up" data-target="2022">2022</div>
<div className="font-medium text-[0.9375rem] text-[#111111] mb-3">Adaptive Reuse — Gold</div>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mb-8 uppercase">EUROPEAN PROPERTY</div>
<div className="flex-grow"></div>
<div className="pt-4 border-t border-[#111111]/[0.08] font-display italic text-[0.875rem] text-[#4A4A48] line-clamp-4">"Kirkegata 14 sets a new benchmark for preservation in the urban core."</div>
</div>
<div className="p-6 md:p-8 flex flex-col h-full border-b md:border-b-0 border-r border-[#111111]/[0.08] relative conic-border interactive fade-up group bg-transparent hover:bg-[#FFFFFF] transition-colors" style={{transitionDelay: '0.32s'}}>
<div className="font-display font-light italic text-[3rem] text-[#111111] leading-none mb-6 group-hover:text-[#FF5A1F] transition-colors count-up" data-target="2020">2020</div>
<div className="font-medium text-[0.9375rem] text-[#111111] mb-3">Emerging Practice</div>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mb-8 uppercase">ARKITEKTUR N</div>
<div className="flex-grow"></div>
<div className="pt-4 border-t border-[#111111]/[0.08] font-display italic text-[0.875rem] text-[#4A4A48] line-clamp-4">"Few practices emerge with a fully-formed methodology. NORDE did."</div>
</div>
<div className="p-6 md:p-8 flex flex-col h-full border-r border-[#111111]/[0.08] relative conic-border interactive fade-up group bg-transparent hover:bg-[#FFFFFF] transition-colors" style={{transitionDelay: '0.4s'}}>
<div className="font-display font-light italic text-[3rem] text-[#111111] leading-none mb-6 group-hover:text-[#FF5A1F] transition-colors count-up" data-target="2018">2018</div>
<div className="font-medium text-[0.9375rem] text-[#111111] mb-3">AR Emerging Architecture</div>
<div className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#8A8680] mb-8 uppercase">THE ARCH REVIEW</div>
<div className="flex-grow"></div>
<div className="pt-4 border-t border-[#111111]/[0.08] font-display italic text-[0.875rem] text-[#4A4A48] line-clamp-4">"The November House announces a studio that will matter."</div>
</div>
</div>
</div>
</section>

<div className="section-divider hidden"></div>
<section className="bg-[#111111] py-[11.25rem] text-[#F6F4F0] corner-marks relative overflow-hidden" id="inquire">
<div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(246,244,240,0.08)]">
<div className="absolute left-[2.5rem] -top-[1px] w-[3px] h-[3px] bg-[#FF5A1F]"></div>
</div>
<div className="max-w-[100rem] mx-auto px-5 md:px-[3rem]">
<div className="flex items-center gap-3 mb-12 fade-up">
<div className="w-[3px] h-[3px] bg-[#FF5A1F]"></div>
<span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#8A8680]">/ 007 / INQUIRIES</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[6rem]">
<div>
<h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#F6F4F0]">
<span className="word-pull-up">Start a <span className="font-light italic text-[#FF5A1F]">conversation</span>.</span>
</h2>
<p className="mt-12 font-normal text-[1.0625rem] text-[#F6F4F0]/70 leading-[1.65] max-w-[30rem] fade-up">
                        We respond to every serious inquiry within three business days. Speculative requests, competition briefs, and student research queries are all welcomed — just tell us which.
                    </p>
<div className="mt-16 flex flex-col gap-4 fade-up delay-100">
<div className="flex gap-4"><span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] w-[5rem]">▪ EMAIL</span><span className="text-[0.9375rem]">studio@norde.works</span></div>
<div className="flex gap-4"><span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] w-[5rem]">▪ OSLO</span><span className="text-[0.9375rem]">Dronningens gate 8B · 0152 Oslo · +47 22 47 52 10</span></div>
<div className="flex gap-4"><span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] w-[5rem]">▪ ZÜRICH</span><span className="text-[0.9375rem]">Seefeldstrasse 120 · 8008 Zürich · +41 44 381 64 20</span></div>
<div className="flex gap-4"><span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] w-[5rem]">▪ HOURS</span><span className="text-[0.9375rem]">Mon–Fri · 09:00 – 17:00 CET</span></div>
</div>
<div className="mt-8 flex items-center gap-3 fade-up delay-200">
<div className="w-[6px] h-[6px] rounded-full bg-[#4ADE80] animate-pulse"></div>
<span className="text-[0.8125rem] text-[#F6F4F0]/70">Currently booking Q3 2026 start dates</span>
</div>
</div>
<div className="bg-[rgba(246,244,240,0.03)] border border-[rgba(246,244,240,0.08)] p-8 md:p-[3rem] rounded-sm transform translate-x-10 opacity-0 transition-all duration-[800ms] ease-out fade-up">
<form className="flex flex-col gap-8">
<div className="flex flex-col">
<label className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] uppercase mb-2">▪ NAME</label>
<input className="w-full bg-transparent border-b border-[#F6F4F0]/20 py-3 text-[#F6F4F0] text-[1rem] focus:outline-none focus:border-[#FF5A1F] transition-colors interactive" type="text"/>
</div>
<div className="flex flex-col">
<label className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] uppercase mb-2">▪ EMAIL</label>
<input className="w-full bg-transparent border-b border-[#F6F4F0]/20 py-3 text-[#F6F4F0] text-[1rem] focus:outline-none focus:border-[#FF5A1F] transition-colors interactive" type="email"/>
</div>
<div className="flex flex-col relative">
<label className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] uppercase mb-2">▪ PROJECT TYPE</label>
<select className="w-full bg-transparent border-b border-[#F6F4F0]/20 py-3 text-[#F6F4F0] text-[1rem] focus:outline-none focus:border-[#FF5A1F] transition-colors appearance-none interactive cursor-pointer">
<option className="bg-[#111111]">Residential</option>
<option className="bg-[#111111]">Cultural</option>
<option className="bg-[#111111]">Adaptive Reuse</option>
<option className="bg-[#111111]">Other</option>
</select>
<iconify-icon className="absolute right-0 bottom-4 text-[#F6F4F0]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<label className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] uppercase mb-2">▪ TELL US ABOUT YOUR PROJECT</label>
<textarea className="w-full bg-transparent border-b border-[#F6F4F0]/20 py-3 text-[#F6F4F0] text-[1rem] focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none interactive" rows="4"></textarea>
</div>
<button className="mt-4 w-full h-[3.25rem] rounded-full bg-[#FF5A1F] text-[#111111] font-semibold text-[0.9375rem] flex items-center justify-center gap-2 transition-colors hover:bg-[#F6F4F0] interactive group" type="button">
                            Send Inquiry <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
</button>
</form>
</div>
</div>
</div>
</section>
<footer className="bg-[#0A0A0A] text-[#F6F4F0] w-full">
<div className="pt-[7.5rem] pb-[5rem] px-5 md:px-[3rem] w-full border-b border-[rgba(246,244,240,0.08)]">
<div className="max-w-[100rem] mx-auto">
<span className="font-mono text-[0.75rem] tracking-[0.18em] text-[#8A8680] mb-8 block">▪ NORDE STUDIO — OSLO · ZÜRICH — EST. 2014</span>
<div className="font-display text-[clamp(6rem,20vw,26.25rem)] leading-[0.9] tracking-[-0.08em] select-none text-[#F6F4F0] wordmark-easter-egg interactive" id="footer-wordmark">
<span className="inline-block transition-all duration-[400ms] ease-[spring]">N</span><span className="inline-block transition-all duration-[400ms] ease-[spring]">O</span><span className="inline-block transition-all duration-[400ms] ease-[spring]">R</span><span className="inline-block transition-all duration-[400ms] ease-[spring]">D</span><span className="inline-block transition-all duration-[400ms] ease-[spring]">E</span>
</div>
</div>
</div>
<div className="py-[5rem] px-5 md:px-[3rem] w-full border-b border-[rgba(246,244,240,0.08)]">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[4rem]">
<div className="xl:col-span-2">
<span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-4 block">▪ STUDIO LETTER — QUARTERLY</span>
<h3 className="font-display text-[1.375rem] leading-[1.3] text-[#F6F4F0] max-w-[20rem]">Four times a year, we write about what we're building.</h3>
<p className="mt-4 text-[0.875rem] text-[#F6F4F0]/60 max-w-[20rem]">Slow reading on materials, sites, and the decisions that shape our work. No automation, no marketing.</p>
<form className="mt-6 flex items-end max-w-[20rem]">
<input className="w-full bg-transparent border-b border-[#F6F4F0]/20 py-2 text-[#F6F4F0] text-[0.875rem] focus:outline-none focus:border-[#FF5A1F] transition-colors interactive" placeholder="Email address" type="email"/>
<button className="text-[#FF5A1F] font-medium text-[0.875rem] border-b border-transparent pb-2 hover:border-[#FF5A1F] transition-all hover:tracking-[0.05em] whitespace-nowrap interactive" type="button">Subscribe →</button>
</form>
</div>
<div className="flex flex-col gap-3">
<span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-2 block">▪ PRACTICE</span>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Selected Works</a>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Method</a>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Materials</a>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Studio Figures</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] mb-2 block">▪ ENGAGEMENT</span>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Residential Inquiries</a>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Cultural / Institutional</a>
<a className="text-[#F6F4F0]/70 text-[0.875rem] hover:text-[#F6F4F0] hover:translate-x-1 transition-all interactive w-max" href="#">Adaptive Reuse</a>
</div>
<div className="flex flex-col gap-6">
<span className="font-mono text-[0.6875rem] tracking-[0.15em] text-[#8A8680] block">▪ OFFICES</span>
<div>
<div className="font-medium text-[0.875rem] text-[#F6F4F0]">Oslo</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/50 mt-1">Dronningens gate 8B</div>
<div className="font-mono text-[0.6875rem] text-[#F6F4F0]/50 mt-1">+47 22 47 52 10</div>
</div>
<div>
<div className="font-medium text-[0.875rem] text-[#F6F4F0]">Zürich</div>
<div className="text-[0.8125rem] text-[#F6F4F0]/50 mt-1">Seefeldstrasse 120</div>
<div className="font-mono text-[0.6875rem] text-[#F6F4F0]/50 mt-1">+41 44 381 64 20</div>
</div>
</div>
</div>
</div>
<div className="w-full border-b border-[rgba(246,244,240,0.08)] overflow-x-auto scrollbar-hide hide-scrollbars" style={{scrollbarWidth: 'none'}}>
<div className="min-w-max grid grid-flow-col auto-cols-auto divide-x divide-[rgba(246,244,240,0.08)] h-[8.75rem] items-center text-center">
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ LOCAL TIME OSLO</div><div className="font-medium text-[0.875rem] tabular-nums" id="live-time">14:32 CET</div></div>
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ WEATHER</div><div className="font-medium text-[0.875rem]">6°C · OVERCAST</div></div>
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ ACTIVE COMMISSIONS</div><div className="font-medium text-[0.875rem]">14</div></div>
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ NEXT SITE VISIT</div><div className="font-medium text-[0.875rem] uppercase">TROMSØ · 03 MAY</div></div>
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ STUDIO COFFEE CONSUMED</div><div className="font-medium text-[0.875rem] uppercase">Q2: <span className="count-up" data-target="428">0</span> ESPRESSOS</div></div>
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ CARBON TRACKED</div><div className="font-medium text-[0.875rem] uppercase"><span className="count-up tabular-nums" data-target="1840">0</span> T CO₂e SAVED</div></div>
<div className="px-5 py-4"><div className="font-mono text-[0.625rem] tracking-[0.15em] text-[#8A8680] mb-2">▪ EST.</div><div className="font-medium text-[0.875rem]">2014</div></div>
</div>
</div>
<div className="py-8 px-5 md:px-[3rem] w-full">
<div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<svg className="w-[1.25rem] h-[1.25rem] text-[#F6F4F0]" viewbox="0 0 32 32">
<path d="M 5,26 L 5,6 L 11,6 L 11,20 L 5,26 Z" fill="currentColor"></path><path d="M 21,26 L 21,6 L 27,6 L 27,20 L 21,26 Z" fill="currentColor"></path><path d="M 11,6 L 21,20 L 21,26 L 11,12 Z" fill="currentColor"></path>
</svg>
<span className="font-display text-[1rem]">NORDE</span>
<span className="font-mono text-[0.6875rem] text-[#F6F4F0]/40 ml-2 group interactive block cursor-default">▪ <span className="inline-block transition-transform duration-800 group-hover:rotate-[360deg] group-hover:text-[#FF5A1F]">©</span> 2026 NORDE AS</span>
</div>
<div className="flex items-center gap-6 hidden md:flex">
<a className="text-[0.75rem] text-[#F6F4F0]/40 hover:text-[#F6F4F0] transition-colors interactive" href="#">Privacy</a>
<a className="text-[0.75rem] text-[#F6F4F0]/40 hover:text-[#F6F4F0] transition-colors interactive" href="#">Imprint</a>
</div>
<div className="flex items-center gap-4">
<a className="text-[#F6F4F0]/50 hover:text-[#FF5A1F] transition-all hover:scale-110 interactive" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="text-[#F6F4F0]/50 hover:text-[#FF5A1F] transition-all hover:scale-110 interactive" href="#"><iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon></a>
<a className="text-[#F6F4F0]/50 hover:text-[#FF5A1F] transition-all hover:scale-110 interactive" href="#"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
