import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#121212',
secondary: '#8A8581',
accent: '#D4AF37',
background: '#FDFCF8',
surface: '#FFFFFF',
},
fontFamily: {
display: ['"Playfair Display"', 'serif'],
heading: ['"Playfair Display"', 'serif'],
body: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
widest: '0.1em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Set Current Year
            document.getElementById('year').textContent = new Date().getFullYear();

            // 1. Custom Magnetic Cursor
            const cursor = document.getElementById('cursor');
            const cursorText = cursor.querySelector('.cursor-text');
            const hoverTargets = document.querySelectorAll('.hover-target');
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            // Show cursor after slight delay to ensure position
            setTimeout(() => cursor.classList.add('active'), 100);

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            // Smooth interpolation for cursor
            const renderCursor = () => {
                cursorX += (mouseX - cursorX) * 0.2;
                cursorY += (mouseY - cursorY) * 0.2;
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
                requestAnimationFrame(renderCursor);
            };
            requestAnimationFrame(renderCursor);

            // Handle specific interactions (Portfolio View)
            const portfolioImages = document.querySelectorAll('[data-cursor="view"]');
            portfolioImages.forEach(img => {
                img.addEventListener('mouseenter', () => {
                    cursor.classList.add('view-mode');
                    cursorText.textContent = "VIEW";
                });
                img.addEventListener('mouseleave', () => {
                    cursor.classList.remove('view-mode');
                    cursorText.textContent = "";
                });
            });

            // 2. Navigation Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-background/90', 'backdrop-blur-md', 'border-[#E0DCD6]');
                    navbar.classList.remove('border-transparent', 'py-6');
                    navbar.classList.add('py-4');
                } else {
                    navbar.classList.remove('bg-background/90', 'backdrop-blur-md', 'border-[#E0DCD6]', 'py-4');
                    navbar.classList.add('border-transparent', 'py-6');
                }
            });

            // Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let menuOpen = false;

            const toggleMenu = () => {
                menuOpen = !menuOpen;
                if (menuOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    mobileBtn.children[0].classList.add('rotate-45', 'translate-y-[4px]', 'bg-surface');
                    mobileBtn.children[1].classList.add('-rotate-45', '-translate-y-[3px]', 'bg-surface');
                    mobileBtn.children[0].classList.remove('bg-primary');
                    mobileBtn.children[1].classList.remove('bg-primary');
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    mobileBtn.children[0].classList.remove('rotate-45', 'translate-y-[4px]', 'bg-surface');
                    mobileBtn.children[1].classList.remove('-rotate-45', '-translate-y-[3px]', 'bg-surface');
                    mobileBtn.children[0].classList.add('bg-primary');
                    mobileBtn.children[1].classList.add('bg-primary');
                }
            };

            mobileBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', () => { if(menuOpen) toggleMenu(); }));

            // 3. Intersection Observer for Reveals & Animations
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        
                        // If it's the timeline line, trigger dots
                        if(entry.target.classList.contains('draw-line-y')) {
                            const dots = document.querySelectorAll('.dot-indicator');
                            dots.forEach((dot, index) => {
                                setTimeout(() => {
                                    dot.classList.add('bg-primary', 'border-primary');
                                    dot.classList.remove('bg-background');
                                }, (index + 1) * 400); // Stagger dot filling
                            });
                        }

                        // Trigger Counter
                        if(entry.target.classList.contains('counter')) {
                            const target = parseInt(entry.target.getAttribute('data-target'));
                            let count = 0;
                            const updateCount = () => {
                                const increment = target / 40;
                                if(count < target) {
                                    count += increment;
                                    entry.target.innerText = Math.ceil(count).toString().padStart(2, '0');
                                    requestAnimationFrame(updateCount);
                                } else {
                                    entry.target.innerText = target.toString().padStart(2, '0');
                                }
                            };
                            updateCount();
                            entry.target.classList.remove('counter'); // run once
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up, .draw-line-x, .draw-line-y, .counter').forEach(el => observer.observe(el));

            // 4. Hero Kinetic Typography On Load
            const heroHeading = document.getElementById('kinetic-heading');
            if(heroHeading) {
                const words = heroHeading.innerHTML.split(/(<[^>]+>)/g); // Split by HTML tags
                heroHeading.innerHTML = '';
                
                let delay = 0;
                words.forEach(word => {
                    if(word.startsWith('<')) {
                        // It's a tag (like <span class="italic">), keep it but wrap inside contents if needed
                        // For simplicity in this logic, we wrap the whole word if it's text
                        heroHeading.innerHTML += word;
                    } else if (word.trim() !== '') {
                        const chars = word.split('');
                        chars.forEach(char => {
                            if(char === ' ') {
                                heroHeading.innerHTML += ' ';
                            } else {
                                const span = document.createElement('span');
                                span.className = 'kinetic-char';
                                span.style.transitionDelay = `${delay}s`;
                                span.textContent = char;
                                heroHeading.appendChild(span);
                                delay += 0.03;
                            }
                        });
                    }
                });

                // Trigger animation after brief delay
                setTimeout(() => {
                    document.querySelectorAll('.kinetic-char').forEach(el => el.classList.add('in-view'));
                    document.getElementById('hero-img').classList.remove('scale-[1.05]');
                    document.getElementById('hero-img').classList.add('scale-100');
                }, 300);
            }

            // 5. Parallax Image
            const parallaxImages = document.querySelectorAll('.parallax-img');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                parallaxImages.forEach(img => {
                    const speed = 0.05;
                    // Calculate relative to viewport
                    const rect = img.getBoundingClientRect();
                    if(rect.top < window.innerHeight && rect.bottom > 0) {
                        const yPos = -(scrolled * speed);
                        img.style.transform = `translateY(${yPos}px)`;
                    }
                });
            });

            // 6. CTA Spotlight Effect
            const ctaSection = document.getElementById('inquire');
            const spotlight = document.getElementById('spotlight');
            
            if(ctaSection && spotlight) {
                ctaSection.addEventListener('mousemove', (e) => {
                    const rect = ctaSection.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.1), transparent 40%)`;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div className="custom-cursor" id="cursor">
<span className="cursor-text">VIEW</span>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 ease-out px-[clamp(1.5rem,5vw,5rem)] py-6 flex items-center justify-between border-b border-transparent" id="navbar">

<button className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none hover-target" id="mobile-menu-btn">
<span className="w-6 h-[1px] bg-primary transition-all duration-300 origin-center block"></span>
<span className="w-6 h-[1px] bg-primary transition-all duration-300 origin-center block"></span>
</button>

<div className="hidden md:flex items-center gap-8 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-primary/80">
<a className="hover-target hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
<a className="hover-target hover:text-primary transition-colors" href="#philosophy">Philosophy</a>
</div>

<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(1.2rem,1.5vw,1.5rem)] uppercase tracking-tighter hover-target" href="#">
            Lumina
        </a>

<div className="hidden md:flex items-center gap-8 font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-primary/80">
<a className="hover-target hover:text-primary transition-colors" href="#experience">Experience</a>
<a className="hover-target hover:text-primary transition-colors" href="#journal">Journal</a>
<a className="btn-minimal !py-2 !px-6 !text-[clamp(0.65rem,0.7vw,0.75rem)] hover-target" href="#inquire">Inquire</a>
</div>

<a className="md:hidden btn-minimal !py-1.5 !px-4 !text-[0.65rem] hover-target" href="#inquire">Inquire</a>
</nav>

<div className="fixed inset-0 bg-primary z-40 transform translate-x-full transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex items-center justify-center" id="mobile-menu">
<div className="flex flex-col items-center gap-8 text-center">
<a className="mobile-link font-display text-surface text-[clamp(2.5rem,8vw,4rem)] tracking-tight hover:italic transition-all" href="#portfolio">Portfolio</a>
<a className="mobile-link font-display text-surface text-[clamp(2.5rem,8vw,4rem)] tracking-tight hover:italic transition-all" href="#philosophy">Philosophy</a>
<a className="mobile-link font-display text-surface text-[clamp(2.5rem,8vw,4rem)] tracking-tight hover:italic transition-all" href="#experience">Experience</a>
<a className="mobile-link font-display text-surface text-[clamp(2.5rem,8vw,4rem)] tracking-tight hover:italic transition-all" href="#journal">Journal</a>
</div>
</div>

<section className="relative min-h-screen w-full pt-[15vh] pb-[5vh] px-[clamp(1rem,2vw,2rem)] flex flex-col items-center justify-center overflow-hidden">

<div className="relative w-full max-w-[clamp(70rem,95vw,100rem)] md:w-[80%] h-[75vh] mx-auto overflow-hidden bg-secondary/10 hero-image-container">
<img alt="Cinematic wedding couple" className="absolute inset-0 w-full h-full object-cover origin-center scale-[1.05] transition-transform duration-[2s] ease-out" id="hero-img" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-[clamp(1.5rem,4vw,4rem)] text-surface flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-[45ch]">
<h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-tight mb-6" id="kinetic-heading">
                        Immortalize the <span className="italic font-light">fleeting.</span>
</h1>
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-surface/90 leading-[1.6] max-w-[35ch] reveal-up stagger-1">
                        Cinematic, editorial wedding photography for the unapologetically in love. Based in Paris, traveling worldwide.
                    </p>
</div>
<div className="flex flex-col gap-4 reveal-up stagger-2">
<div className="flex flex-col sm:flex-row gap-4">
<a className="btn-minimal bg-surface text-primary border-surface hover:bg-transparent hover:text-surface hover-target text-center" href="#inquire">Check Availability</a>
<a className="btn-minimal border-surface text-surface hover:bg-surface hover:text-primary hover-target text-center" href="#portfolio">View the Archive</a>
</div>
<div className="font-mono text-[0.65rem] uppercase tracking-widest text-surface/60 text-right mt-2 flex items-center justify-end gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                        Booking limited to 15 commissions per year.
                    </div>
</div>
</div>
</div>
</section>

<section className="w-full py-12 relative overflow-hidden bg-background">
<div className="absolute top-0 left-0 h-[1px] bg-[#E0DCD6] draw-line-x"></div>
<div className="absolute bottom-0 left-0 h-[1px] bg-[#E0DCD6] draw-line-x"></div>
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)]">
<span className="block text-center font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-8 reveal-up">As featured in</span>
<div className="flex flex-wrap justify-center items-center gap-x-[clamp(3rem,8vw,8rem)] gap-y-8 opacity-60">

<h3 className="font-display text-[clamp(1.2rem,2vw,2rem)] tracking-tight uppercase hover:opacity-100 transition-opacity duration-500 cursor-default reveal-up stagger-1">Vogue</h3>
<h3 className="font-display text-[clamp(1.2rem,2vw,2rem)] tracking-tight uppercase hover:opacity-100 transition-opacity duration-500 cursor-default reveal-up stagger-2">Harper's Bazaar</h3>
<h3 className="font-display text-[clamp(1.2rem,2vw,2rem)] tracking-tight uppercase hover:opacity-100 transition-opacity duration-500 cursor-default reveal-up stagger-3">Over The Moon</h3>
<h3 className="font-display text-[clamp(1.2rem,2vw,2rem)] tracking-tight uppercase hover:opacity-100 transition-opacity duration-500 cursor-default reveal-up stagger-4">Anti-Bride</h3>
</div>
</div>
</section>

<section className="w-full py-[clamp(5rem,10vw,10rem)] bg-background relative" id="philosophy">
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,6rem)] items-end">

<div className="md:col-span-7 relative -ml-[5vw] md:-ml-[15vw] z-10 w-[110%] md:w-[115%]">
<div className="relative overflow-hidden aspect-[4/5] md:aspect-[16/10] bg-secondary/10 image-frame hover-target" data-cursor="view">
<img alt="Editorial detail shot" className="w-full h-[120%] object-cover absolute top-[-10%] left-0 parallax-img" src="https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-5 pb-[5vw] z-20 bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 -mt-20 md:mt-0 relative">
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-secondary mb-6 block reveal-up">/ 001 — APPROACH</span>
<h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight mb-8 text-balance reveal-up stagger-1">
                        We don't pose. <br/><span className="italic font-light">We observe.</span>
</h2>
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/80 leading-[1.6] mb-10 reveal-up stagger-2">
                        You deserve more than stiff postures and fabricated moments. Our approach is purely documentary, blended with a high-fashion editorial eye. We capture the messy, beautiful, unscripted reality of your legacy.
                    </p>
<div className="flex items-center gap-8 reveal-up stagger-3">
<a className="btn-minimal hover-target" href="#">Read our philosophy</a>
<div className="flex flex-col">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary">Years of observation</span>
<span className="font-mono text-xl tracking-tight counter" data-target="8">00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(5rem,10vw,10rem)] bg-background relative" id="portfolio">
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)]">

<div className="max-w-[60ch] mb-[clamp(4rem,8vw,8rem)] mx-auto text-center">
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-secondary mb-6 block reveal-up">/ 002 — ARCHIVE</span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight mb-6 reveal-up stagger-1">
                    A curated archive of <span className="italic font-light">romance.</span>
</h2>
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/80 reveal-up stagger-2">
                    Glimpses into the legacies we've preserved.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-[clamp(4rem,10vw,10rem)] md:gap-x-8">

<div className="md:col-span-7 md:mt-16 reveal-up">
<div className="image-frame hover-target group cursor-none" data-cursor="view">
<div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-secondary/10">
<img alt="Lake Como Wedding" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-95" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-6 right-6 font-mono text-[0.65rem] uppercase tracking-widest text-surface mix-blend-difference pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                            45.9897° N, 9.2632° E
                        </div>
</div>
</div>

<div className="md:col-span-4 md:col-start-9 reveal-up stagger-2">
<div className="image-frame hover-target group cursor-none" data-cursor="view">
<div className="relative aspect-[3/4] overflow-hidden bg-secondary/10">
<img alt="Parisian Elopement" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="md:col-span-8 md:-ml-12 reveal-up">
<div className="image-frame hover-target group cursor-none" data-cursor="view">
<div className="relative aspect-[16/9] overflow-hidden bg-secondary/10">
<img alt="Tuscany Reception" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-95" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="mt-[clamp(4rem,8vw,8rem)] text-center reveal-up">
<a className="btn-minimal hover-target" href="#">View Full Portfolio</a>
</div>
</div>
</section>

<section className="w-full py-[clamp(5rem,10vw,10rem)] bg-background relative overflow-hidden" id="experience">
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)] relative">
<div className="text-center mb-[clamp(4rem,8vw,8rem)]">
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-secondary mb-6 block reveal-up">/ 003 — PROCESS</span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight reveal-up stagger-1">
                    The Lumina <span className="italic font-light">Experience.</span>
</h2>
</div>

<div className="relative max-w-4xl mx-auto">

<div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#E0DCD6] md:-translate-x-1/2">

<div className="absolute top-0 left-0 w-full bg-primary draw-line-y"></div>
</div>
<div className="flex flex-col gap-[clamp(3rem,6vw,6rem)]">

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center group pl-16 md:pl-0 timeline-step">

<div className="absolute left-[20px] md:left-1/2 top-2 md:top-1/2 w-2 h-2 rounded-full bg-background border border-[#E0DCD6] md:-translate-x-1/2 md:-translate-y-1/2 z-10 transition-colors duration-500 delay-300 dot-indicator"></div>
<div className="md:w-[45%] md:text-right reveal-up">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-2 block">/ 01 /</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-tight mb-3">The Connection</h3>
</div>
<div className="md:w-[45%] mt-2 md:mt-0 reveal-up stagger-2">
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/80">Coffee and chemistry. We ensure our creative vision aligns perfectly with your energy before accepting a commission.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center group pl-16 md:pl-0 timeline-step">
<div className="absolute left-[20px] md:left-1/2 top-2 md:top-1/2 w-2 h-2 rounded-full bg-background border border-[#E0DCD6] md:-translate-x-1/2 md:-translate-y-1/2 z-10 transition-colors duration-500 delay-300 dot-indicator"></div>
<div className="md:w-[45%] reveal-up">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-2 block">/ 02 /</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-tight mb-3">The Blueprint</h3>
</div>
<div className="md:w-[45%] md:text-right mt-2 md:mt-0 reveal-up stagger-2">
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/80">Meticulous scouting, lighting analysis, and timeline planning to ensure a seamless, stress-free flow on the day.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center group pl-16 md:pl-0 timeline-step">
<div className="absolute left-[20px] md:left-1/2 top-2 md:top-1/2 w-2 h-2 rounded-full bg-background border border-[#E0DCD6] md:-translate-x-1/2 md:-translate-y-1/2 z-10 transition-colors duration-500 delay-300 dot-indicator"></div>
<div className="md:w-[45%] md:text-right reveal-up">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-2 block">/ 03 /</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-tight mb-3">The Day</h3>
</div>
<div className="md:w-[45%] mt-2 md:mt-0 reveal-up stagger-2">
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/80">Unobtrusive, cinematic documentation. We blend into the background, observing and capturing the raw emotion as it unfolds natively.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center group pl-16 md:pl-0 timeline-step">
<div className="absolute left-[20px] md:left-1/2 top-2 md:top-1/2 w-2 h-2 rounded-full bg-background border border-[#E0DCD6] md:-translate-x-1/2 md:-translate-y-1/2 z-10 transition-colors duration-500 delay-300 dot-indicator"></div>
<div className="md:w-[45%] reveal-up">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-2 block">/ 04 /</span>
<h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-tight mb-3">The Legacy</h3>
</div>
<div className="md:w-[45%] md:text-right mt-2 md:mt-0 reveal-up stagger-2">
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary/80">A curated heirloom delivery. Hundreds of meticulously graded images, presented in an editorial-style online gallery and optional fine-art albums.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-[clamp(6rem,12vw,12rem)] bg-background relative border-t border-[#E0DCD6]/50">
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)] text-center">
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-secondary mb-12 block reveal-up">/ Echoes of joy</span>
<blockquote className="max-w-[40ch] mx-auto reveal-up stagger-1">
<p className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-tight italic font-light text-primary mb-8 text-balance">
                    "Looking at our gallery felt like watching an arthouse film of our own lives. They didn't just capture how we looked; they captured exactly how it felt."
                </p>
<footer className="font-mono text-[clamp(0.75rem,0.9vw,0.875rem)] text-secondary tracking-widest uppercase reveal-up stagger-2">
                    — Elena &amp; Julian, Lake Como
                </footer>
</blockquote>
</div>
</section>

<section className="w-full relative bg-primary text-surface overflow-hidden group spotlight-container" id="cta-section">

<div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen z-0" id="spotlight" style={{background: 'radial-gradient(600px circle at 50% 50%, rgba(212, 175, 55, 0.08), transparent 40%)'}}>
</div>
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)] py-[clamp(6rem,12vw,12rem)] relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(4rem,8vw,8rem)]">

<div className="reveal-up">
<span className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-secondary mb-6 block">/ 004 — INVESTMENT</span>
<h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1] tracking-tight mb-8">
                        Your legacy, <br/><span className="italic font-light text-accent">secured.</span>
</h2>
<p className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-surface/70 leading-[1.6] max-w-[40ch]">
                        Commissions begin at $8,500. Currently accepting limited inquiries for 2025/2026. Tell us about your vision, the venue, and the feeling you want to preserve.
                    </p>
</div>

<div className="reveal-up stagger-2">
<form className="flex flex-col gap-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<input className="input-luxe hover-target" placeholder="Partner 1 Name" required="" type="text"/>
<input className="input-luxe hover-target" placeholder="Partner 2 Name" required="" type="text"/>
</div>
<input className="input-luxe hover-target" placeholder="Email Address" required="" type="email"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<input className="input-luxe hover-target" placeholder="Event Date" type="text"/>
<input className="input-luxe hover-target" placeholder="Venue / Location" type="text"/>
</div>
<textarea className="input-luxe hover-target resize-none mt-2" placeholder="Tell us your story..." rows="3"></textarea>
<div className="mt-8">
<button className="btn-minimal btn-primary w-full sm:w-auto hover-target" type="submit">Submit Inquiry <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon></button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="w-full bg-background pt-[clamp(4rem,8vw,8rem)] pb-4 relative overflow-hidden border-t border-[#E0DCD6]">
<div className="container mx-auto max-w-[clamp(70rem,95vw,100rem)] px-[clamp(1.5rem,5vw,5rem)] relative z-10 mb-[clamp(4rem,8vw,8rem)]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col gap-4 font-mono text-[clamp(0.75rem,0.9vw,0.875rem)] uppercase tracking-widest">
<a className="text-primary hover:text-secondary transition-colors w-fit hover-target" href="#">Work</a>
<a className="text-primary hover:text-secondary transition-colors w-fit hover-target" href="#">About</a>
<a className="text-primary hover:text-secondary transition-colors w-fit hover-target" href="#">Press</a>
<a className="text-primary hover:text-secondary transition-colors w-fit hover-target" href="#">Client Login</a>
</div>

<div className="flex flex-col gap-4 font-mono text-[clamp(0.75rem,0.9vw,0.875rem)] uppercase tracking-widest">
<a className="text-primary hover:text-secondary transition-colors w-fit hover-target flex items-center gap-2" href="#">Instagram <iconify-icon icon="solar:arrow-up-right-linear"></iconify-icon></a>
<a className="text-primary hover:text-secondary transition-colors w-fit hover-target flex items-center gap-2" href="#">Pinterest <iconify-icon icon="solar:arrow-up-right-linear"></iconify-icon></a>
</div>

<div className="flex flex-col gap-6">
<span className="font-body font-light text-[clamp(0.95rem,1.1vw,1.1rem)] text-primary">Subscribe to our visual journal.</span>
<form className="flex border-b border-primary/20 hover:border-primary focus-within:border-accent transition-colors pb-2" onsubmit="event.preventDefault();">
<input className="bg-transparent border-none outline-none w-full text-sm font-body font-light text-primary hover-target" placeholder="Email address" type="email"/>
<button className="font-mono text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors hover-target" type="submit">Submit</button>
</form>
<p className="font-mono text-[0.65rem] text-secondary tracking-widest uppercase mt-auto">
                        © Lumina Archives <span id="year">2024</span>. Designed for the romantic.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-[2rem] left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden h-[clamp(5rem,15vw,15rem)]">
<span className="font-display text-[clamp(15vw,25vw,30vw)] leading-[0.7] tracking-tighter text-primary/5 uppercase whitespace-nowrap">Lumina</span>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-[#E0DCD6] py-2 bg-background z-20">
<div className="marquee-content font-mono text-[0.65rem] uppercase tracking-[0.2em] text-secondary flex gap-8">
<span>AUTHENTIC • CINEMATIC • TIMELESS • EDITORIAL • </span>
<span>AUTHENTIC • CINEMATIC • TIMELESS • EDITORIAL • </span>
<span>AUTHENTIC • CINEMATIC • TIMELESS • EDITORIAL • </span>
<span>AUTHENTIC • CINEMATIC • TIMELESS • EDITORIAL • </span>
<span>AUTHENTIC • CINEMATIC • TIMELESS • EDITORIAL • </span>
<span>AUTHENTIC • CINEMATIC • TIMELESS • EDITORIAL • </span>
</div>
</div>
</footer>



    </>
  );
}
