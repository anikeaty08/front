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



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Navigation Scroll Effect ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#0a0608]/80', 'backdrop-blur-md', 'border-[#C9A84C]/20');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-[#0a0608]/80', 'backdrop-blur-md', 'border-[#C9A84C]/20');
                    navbar.classList.add('border-transparent');
                }
            });

            // --- Mobile Menu Toggle ---
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            mobileBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'hidden';
                    // Animate hamburger to X
                    mobileBtn.children[0].classList.add('translate-y-[3px]', 'rotate-45');
                    mobileBtn.children[1].classList.add('-translate-y-[4px]', '-rotate-45', 'w-full');
                    // Stagger links
                    mobileLinks.forEach(link => {
                        link.classList.remove('opacity-0', 'translate-y-4');
                    });
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                    // Reset hamburger
                    mobileBtn.children[0].classList.remove('translate-y-[3px]', 'rotate-45');
                    mobileBtn.children[1].classList.remove('-translate-y-[4px]', '-rotate-45', 'w-full');
                    // Reset links
                    mobileLinks.forEach(link => {
                        link.classList.add('opacity-0', 'translate-y-4');
                    });
                }
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileBtn.click();
                });
            });

            // --- Countdown Timer ---
            // Set date to Feb 14, 2026
            const targetDate = new Date('February 14, 2026 20:00:00').getTime();
            
            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance < 0) return; // Event passed

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').innerText = days.toString().padStart(2, '0');
                document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
                document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
            };
            
            setInterval(updateCountdown, 1000);
            updateCountdown();

            // --- Intersection Observer for Scroll Animations ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
                observer.observe(el);
            });

            // --- Mouse Parallax (Hero) ---
            const heroSection = document.getElementById('hero');
            const parallaxEls = document.querySelectorAll('#parallax-container iconify-icon');

            heroSection.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;

                parallaxEls.forEach(el => {
                    const speed = el.getAttribute('data-speed');
                    el.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
                });
            });

            // --- 3D Tilt Effect on Pricing Cards ---
            const tiltCards = document.querySelectorAll('.tilt-card');
            
            tiltCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left; // x position within the element.
                    const y = e.clientY - rect.top;  // y position within the element.
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
                    const rotateY = ((x - centerX) / centerX) * 10;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                    card.style.transition = 'transform 0.5s ease';
                    // remove transition after it resets so hover feels responsive again
                    setTimeout(() => { card.style.transition = ''; }, 500);
                });
            });

            // --- Generate Particles ---
            const particlesContainer = document.getElementById('particles');
            const particleCount = 40;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Randomize properties
                const size = Math.random() * 4 + 1; // 1px to 5px
                const left = Math.random() * 100; // 0% to 100%
                const duration = Math.random() * 10 + 10; // 10s to 20s
                const delay = Math.random() * 10; // 0s to 10s

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${left}%`;
                particle.style.animation = `fall ${duration}s linear ${delay}s infinite`;

                particlesContainer.appendChild(particle);
            }

            // --- Testimonial Carousel ---
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('#testimonial-dots button');
            let currentSlide = 0;
            let slideInterval;

            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'pointer-events-none');
                        slide.classList.add('opacity-100');
                        dots[i].classList.replace('bg-[#0a0608]/20', 'bg-[#0a0608]');
                    } else {
                        slide.classList.add('opacity-0', 'pointer-events-none');
                        slide.classList.remove('opacity-100');
                        dots[i].classList.replace('bg-[#0a0608]', 'bg-[#0a0608]/20');
                    }
                });
                currentSlide = index;
            };

            const nextSlide = () => {
                let next = (currentSlide + 1) % slides.length;
                showSlide(next);
            };

            // Initialize auto-play
            slideInterval = setInterval(nextSlide, 5000);

            // Dot click handlers
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(slideInterval); // Pause auto on manual click
                    showSlide(index);
                    slideInterval = setInterval(nextSlide, 5000); // Resume auto
                });
            });

            // --- FAQ Accordion ---
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                const button = item.querySelector('button');
                
                button.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all others
                    accordionItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });

                    // Toggle current
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-500 py-6 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

<a className="group relative z-50 flex items-center justify-center w-12 h-12" href="#">
<span className="font-display italic text-3xl text-[#C9A84C] group-hover:scale-110 transition-transform duration-500 z-10">M</span>
<iconify-icon className="absolute text-4xl text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors duration-500" icon="solar:masks-linear"></iconify-icon>
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="nav-link relative uppercase tracking-[0.2em] text-xs hover:text-[#C9A84C] transition-colors" href="#story">The Story</a>
<a className="nav-link relative uppercase tracking-[0.2em] text-xs hover:text-[#C9A84C] transition-colors" href="#experience">Experience</a>
<a className="nav-link relative uppercase tracking-[0.2em] text-xs hover:text-[#C9A84C] transition-colors" href="#tickets">Tickets</a>
<a className="group relative px-6 py-2 border border-[#C9A84C]/50 hover:border-[#C9A84C] overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]" href="#tickets">
<span className="absolute inset-0 w-0 bg-gradient-to-r from-[#C9A84C]/10 to-[#C9A84C]/30 transition-all duration-500 ease-out group-hover:w-full"></span>
<span className="relative uppercase tracking-[0.1em] text-xs text-[#C9A84C]">Reserve</span>
</a>
</nav>

<button className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 group" id="mobile-menu-btn">
<span className="w-full h-[1px] bg-[#C9A84C] transition-transform duration-300"></span>
<span className="w-2/3 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
</button>
</div>
</header>

<div className="fixed inset-0 bg-[#0a0608]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-500" id="mobile-menu">
<nav className="flex flex-col items-center gap-8">
<a className="mobile-link text-2xl font-display italic tracking-tight text-[#C9A84C] opacity-0 translate-y-4 transition-all duration-500 delay-100" href="#story">The Story</a>
<a className="mobile-link text-2xl font-display italic tracking-tight text-[#C9A84C] opacity-0 translate-y-4 transition-all duration-500 delay-200" href="#experience">Experience</a>
<a className="mobile-link text-2xl font-display italic tracking-tight text-[#C9A84C] opacity-0 translate-y-4 transition-all duration-500 delay-300" href="#gallery">Gallery</a>
<a className="mobile-link text-2xl font-display italic tracking-tight text-[#C9A84C] opacity-0 translate-y-4 transition-all duration-500 delay-400" href="#tickets">Tickets</a>
</nav>
</div>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.15)_0%,rgba(10,6,8,1)_70%)] z-0"></div>

<div className="absolute inset-0 z-0 pointer-events-none opacity-20" id="parallax-container">
<iconify-icon className="absolute top-[20%] left-[10%] text-9xl text-[#C9A84C] animate-float" data-speed="2" icon="solar:masks-linear"></iconify-icon>
<iconify-icon className="absolute top-[60%] right-[15%] text-[10rem] text-[#F5E6C8] animate-float-delayed" data-speed="-1.5" icon="solar:masks-outline"></iconify-icon>
<iconify-icon className="absolute bottom-[20%] left-[20%] text-6xl text-[#C4A4A4] animate-float-slow" data-speed="1" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
</div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" id="particles"></div>

<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
<span className="uppercase tracking-[0.3em] text-xs text-[#C9A84C] mb-8 animate-flicker reveal-up active">An Evening of Mystery</span>
<h1 className="font-display italic tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-[#F5E6C8] reveal-up active stagger-1">
                WHERE FACES <br/>
<span className="text-gradient-gold">ARE HIDDEN</span> <br/>
                AND SOULS SPEAK
            </h1>
<p className="uppercase tracking-[0.1em] text-xs md:text-sm text-[#C4A4A4] mb-12 reveal-up active stagger-2 max-w-md mx-auto leading-relaxed">
                A Private Masquerade Soirée <br/>
<span className="text-[#C9A84C]">February 14, 2026</span>
</p>

<div className="flex flex-col sm:flex-row gap-6 mb-16 reveal-up active stagger-3 w-full sm:w-auto">
<a className="group relative px-8 py-4 bg-[#C9A84C] text-[#0a0608] overflow-hidden rounded-sm transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(201,168,76,0.2)]" href="#tickets">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer-border_1.5s_infinite]"></span>
<span className="relative uppercase tracking-[0.15em] text-xs font-medium">Reserve Your Mask</span>
</a>
<a className="group relative px-8 py-4 border border-[#F5E6C8]/30 text-[#F5E6C8] overflow-hidden rounded-sm hover:border-[#C9A84C] transition-colors duration-300" href="#story">
<span className="absolute inset-0 bg-[#C9A84C]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
<span className="relative uppercase tracking-[0.15em] text-xs group-hover:text-[#C9A84C] transition-colors">View Details</span>
</a>
</div>

<div className="flex gap-4 md:gap-8 reveal-up active stagger-4">
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 glass rounded-sm flex items-center justify-center border border-[#C9A84C]/30 mb-2 relative overflow-hidden group">
<span className="font-display italic tracking-tight text-3xl md:text-4xl text-[#C9A84C] relative z-10" id="days">00</span>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] text-[#C4A4A4]">Days</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 glass rounded-sm flex items-center justify-center border border-[#C9A84C]/30 mb-2 relative overflow-hidden group">
<span className="font-display italic tracking-tight text-3xl md:text-4xl text-[#C9A84C] relative z-10" id="hours">00</span>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] text-[#C4A4A4]">Hours</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 glass rounded-sm flex items-center justify-center border border-[#C9A84C]/30 mb-2 relative overflow-hidden group">
<span className="font-display italic tracking-tight text-3xl md:text-4xl text-[#C9A84C] relative z-10" id="minutes">00</span>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] text-[#C4A4A4]">Mins</span>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 glass rounded-sm flex items-center justify-center border border-[#C9A84C]/30 mb-2 relative overflow-hidden group">
<span className="font-display italic tracking-tight text-3xl md:text-4xl text-[#C9A84C] relative z-10" id="seconds">00</span>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] text-[#C4A4A4]">Secs</span>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce opacity-70">
<span className="uppercase tracking-[0.2em] text-[9px] text-[#C9A84C] mb-2">Descend</span>
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="story">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative w-full aspect-[4/5] glass rounded-sm border-[#C9A84C]/20 flex items-center justify-center reveal-left group overflow-hidden">
<div className="absolute inset-4 border border-[#C9A84C]/10 rounded-sm scale-[0.95] group-hover:scale-100 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/10 to-transparent opacity-50 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col items-center text-[#C9A84C]">
<span className="text-2xl mb-4">❧</span>
<iconify-icon className="text-[8rem] opacity-80 animate-float-slow group-hover:scale-110 transition-transform duration-700" icon="solar:masks-linear"></iconify-icon>
<span className="text-2xl mt-4">❦</span>
</div>
</div>

<div className="flex flex-col items-start justify-center">
<span className="uppercase tracking-[0.2em] text-xs text-[#C9A84C] mb-6 reveal-up">The Concept</span>
<h2 className="font-display italic tracking-tight text-4xl lg:text-5xl text-[#F5E6C8] mb-8 leading-tight reveal-up stagger-1">
                    Shed your identity.<br/>
                    Embrace the <span className="text-[#C9A84C]">enigma.</span>
</h2>
<div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent mb-8 reveal-up stagger-2"></div>
<p className="text-sm lg:text-base text-[#C4A4A4] mb-6 leading-relaxed reveal-up stagger-2 font-light">
                    Step across the threshold into a realm where reality blurs and fantasy takes center stage. Held in a clandestine, historically preserved manor, our masquerade is an homage to the opulent Venetian carnivals of the 18th century, reimagined for the modern aristocrat.
                </p>
<p className="text-sm lg:text-base text-[#C4A4A4] mb-10 leading-relaxed reveal-up stagger-3 font-light">
                    Attire is strictly black tie. Masks are mandatory until the midnight toll. Prepare for an evening of sensory indulgence, whispered secrets, and encounters hidden behind velvet and gold.
                </p>
<div className="flex items-center gap-6 reveal-up stagger-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-[#1a1114] border border-[#C9A84C]/30 flex items-center justify-center text-[10px] text-[#C9A84C]">M</div>
<div className="w-10 h-10 rounded-full bg-[#2a1b20] border border-[#C9A84C]/30 flex items-center justify-center text-[10px] text-[#C9A84C]">L</div>
<div className="w-10 h-10 rounded-full bg-[#3a252c] border border-[#C9A84C]/30 flex items-center justify-center text-[10px] text-[#C9A84C]">V</div>
</div>
<span className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4]">Join 250 Curated Guests</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="experience">
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0608] via-[#1a0a0f] to-[#0a0608] z-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-20">
<span className="uppercase tracking-[0.2em] text-xs text-[#C9A84C] mb-4 block reveal-up">Curated Indulgences</span>
<h2 className="font-display italic tracking-tight text-4xl lg:text-5xl text-[#F5E6C8] reveal-up stagger-1">The Evening Unveiled</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="glass p-10 rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,168,76,0.08)] transition-all duration-500 group reveal-up stagger-1 border-t border-[#C9A84C]/10">
<div className="w-12 h-12 mb-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:music-notes-linear"></iconify-icon>
</div>
<h3 className="font-display italic tracking-tight text-2xl text-[#F5E6C8] mb-3 group-hover:text-[#C9A84C] transition-colors">Live Jazz Orchestra</h3>
<p className="text-xs text-[#C4A4A4] leading-relaxed font-light">A 12-piece ensemble playing dark, sultry jazz arrangements that echo through the vaulted ceilings, setting a rhythmic pulse for the night.</p>
</div>

<div className="glass p-10 rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,168,76,0.08)] transition-all duration-500 group reveal-up stagger-2 border-t border-[#C9A84C]/10">
<div className="w-12 h-12 mb-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:wineglass-linear"></iconify-icon>
</div>
<h3 className="font-display italic tracking-tight text-2xl text-[#F5E6C8] mb-3 group-hover:text-[#C9A84C] transition-colors">Absinthe &amp; Champagne</h3>
<p className="text-xs text-[#C4A4A4] leading-relaxed font-light">Free-flowing vintage champagne and a hidden apothecary bar serving traditional absinthe drips over flaming sugar cubes.</p>
</div>

<div className="glass p-10 rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,168,76,0.08)] transition-all duration-500 group reveal-up stagger-3 border-t border-[#C9A84C]/10">
<div className="w-12 h-12 mb-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:camera-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-display italic tracking-tight text-2xl text-[#F5E6C8] mb-3 group-hover:text-[#C9A84C] transition-colors">Obscura Photo Atelier</h3>
<p className="text-xs text-[#C4A4A4] leading-relaxed font-light">Capture your masked visage in our vintage tintype portrait studio. A physical memento of an ethereal night, processed on-site.</p>
</div>

<div className="glass p-10 rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,168,76,0.08)] transition-all duration-500 group reveal-up stagger-1 border-t border-[#C9A84C]/10">
<div className="w-12 h-12 mb-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="font-display italic tracking-tight text-2xl text-[#F5E6C8] mb-3 group-hover:text-[#C9A84C] transition-colors">Mystery Degustation</h3>
<p className="text-xs text-[#C4A4A4] leading-relaxed font-light">A blind tasting experience of exotic culinary miniatures, served by roaming attendants throughout the manor's hidden alcoves.</p>
</div>

<div className="glass p-10 rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,168,76,0.08)] transition-all duration-500 group reveal-up stagger-2 border-t border-[#C9A84C]/10">
<div className="w-12 h-12 mb-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="font-display italic tracking-tight text-2xl text-[#F5E6C8] mb-3 group-hover:text-[#C9A84C] transition-colors">Interactive Theater</h3>
<p className="text-xs text-[#C4A4A4] leading-relaxed font-light">Actors mingle seamlessly with guests. Engage in whispered conspiracies, solve riddles, or simply observe the drama unfold.</p>
</div>

<div className="glass p-10 rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,168,76,0.08)] transition-all duration-500 group reveal-up stagger-3 border-t border-[#C9A84C]/10">
<div className="w-12 h-12 mb-6 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C]/10 transition-colors">
<iconify-icon className="text-2xl text-[#C9A84C]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="font-display italic tracking-tight text-2xl text-[#F5E6C8] mb-3 group-hover:text-[#C9A84C] transition-colors">The Midnight Reveal</h3>
<p className="text-xs text-[#C4A4A4] leading-relaxed font-light">As the grand clock chimes twelve, the orchestra crescendos, and masks are traditionally removed in a moment of collective vulnerability.</p>
</div>
</div>
</div>
</section>

<section className="py-10 pb-32" id="gallery">
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2 md:px-6">

<div className="relative aspect-square md:aspect-[3/4] overflow-hidden group rounded-sm reveal-up stagger-1">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1a0a0f] to-[#3a151f] transition-transform duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="font-display italic tracking-tight text-2xl text-[#C9A84C]">The Manor</span>
</div>
</div>

<div className="relative aspect-square md:aspect-[3/4] overflow-hidden group rounded-sm reveal-up stagger-2 md:translate-y-8">
<div className="absolute inset-0 bg-gradient-to-bl from-[#0a0608] to-[#4a3b2c] transition-transform duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="font-display italic tracking-tight text-2xl text-[#C9A84C]">Attire</span>
</div>
</div>

<div className="relative aspect-square md:aspect-[3/4] overflow-hidden group rounded-sm reveal-up stagger-3">
<div className="absolute inset-0 bg-gradient-to-br from-[#2a1015] to-[#111] transition-transform duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="font-display italic tracking-tight text-2xl text-[#C9A84C]">Libations</span>
</div>
</div>

<div className="relative aspect-square md:aspect-[3/4] overflow-hidden group rounded-sm reveal-up stagger-4 md:translate-y-8">
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-[#332211] transition-transform duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
<span className="font-display italic tracking-tight text-2xl text-[#C9A84C]">The Dance</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="tickets">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-20">
<span className="uppercase tracking-[0.2em] text-xs text-[#C9A84C] mb-4 block reveal-up">Access</span>
<h2 className="font-display italic tracking-tight text-4xl lg:text-5xl text-[#F5E6C8] reveal-up stagger-1">Procure Your Identity</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">

<div className="glass p-8 lg:p-10 rounded-sm border border-[#C9A84C]/20 relative group tilt-card reveal-up stagger-1 h-full flex flex-col">
<div className="tilt-content flex flex-col h-full">
<span className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] mb-2 block">Standard Access</span>
<h3 className="font-display italic tracking-tight text-3xl text-[#F5E6C8] mb-2">Incognito</h3>
<div className="text-[#C9A84C] text-3xl mb-8 font-display">$149</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-8"></div>
<ul className="space-y-4 mb-10 flex-grow text-xs text-[#C4A4A4] font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> General Admission to the Manor</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Handcrafted Venetian Half-Mask</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Welcome Flute of Champagne</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Access to Ballroom &amp; Jazz Lounge</li>
</ul>
<button className="w-full py-4 border border-[#C9A84C]/30 text-[#C9A84C] uppercase tracking-[0.15em] text-[10px] hover:bg-[#C9A84C] hover:text-[#0a0608] transition-colors duration-300 rounded-sm">Select Tier</button>
</div>
</div>

<div className="glass p-8 lg:p-12 rounded-sm border border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.1)] relative group tilt-card reveal-up stagger-2 md:scale-105 h-full flex flex-col z-10 bg-[#140b0e]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A84C] text-[#0a0608] px-4 py-1 uppercase tracking-[0.2em] text-[9px] font-medium rounded-sm">Most Exclusive</div>
<div className="tilt-content flex flex-col h-full">
<span className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] mb-2 block text-center">VIP Experience</span>
<h3 className="font-display italic tracking-tight text-4xl text-[#F5E6C8] mb-2 text-center text-gradient-gold">Phantom</h3>
<div className="text-[#C9A84C] text-4xl mb-8 font-display text-center">$499</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-8"></div>
<ul className="space-y-4 mb-10 flex-grow text-xs text-[#F5E6C8] font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Priority Discreet Entry</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Private Salon Access with Personal Host</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> All-Inclusive Premium Bar &amp; Absinthe</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ornate Full-Face Artisan Mask</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Exclusive Midnight Reveal Ceremony</li>
</ul>
<button className="w-full py-4 bg-[#C9A84C] text-[#0a0608] uppercase tracking-[0.15em] text-[10px] hover:bg-[#F5E6C8] transition-colors duration-300 rounded-sm font-medium">Reserve VIP</button>
</div>
</div>

<div className="glass p-8 lg:p-10 rounded-sm border border-[#C9A84C]/20 relative group tilt-card reveal-up stagger-3 h-full flex flex-col">
<div className="tilt-content flex flex-col h-full">
<span className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] mb-2 block">Premium Access</span>
<h3 className="font-display italic tracking-tight text-3xl text-[#F5E6C8] mb-2">Aristocrat</h3>
<div className="text-[#C9A84C] text-3xl mb-8 font-display">$299</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-8"></div>
<ul className="space-y-4 mb-10 flex-grow text-xs text-[#C4A4A4] font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Reserved Seating in Jazz Lounge</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Upgraded Filigree Mask</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> 4 Premium Libation Tokens</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C9A84C] text-base mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Mystery Gift Box upon departure</li>
</ul>
<button className="w-full py-4 border border-[#C9A84C]/30 text-[#C9A84C] uppercase tracking-[0.15em] text-[10px] hover:bg-[#C9A84C] hover:text-[#0a0608] transition-colors duration-300 rounded-sm">Select Tier</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5E6C8] text-[#0a0608] relative">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-5xl text-[#C9A84C] mb-8 opacity-50" icon="solar:quote-right-linear"></iconify-icon>
<div className="relative min-h-[200px] reveal-up" id="testimonial-carousel">

<div className="testimonial-slide absolute inset-0 transition-opacity duration-700 opacity-100 flex flex-col items-center justify-center">
<p className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
                        "An experience that completely detaches you from reality. For one night, I was exactly who I wanted to be, hidden behind a veil of gold."
                    </p>
<div className="flex gap-1 mb-2 text-[#C9A84C]">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] font-medium">— The Countess of M.</span>
</div>

<div className="testimonial-slide absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex flex-col items-center justify-center">
<p className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
                        "The atmosphere was intoxicating. Between the absinthe bar and the hauntingly beautiful string quartet, it felt like stepping into a gothic novel."
                    </p>
<div className="flex gap-1 mb-2 text-[#C9A84C]">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] font-medium">— Lord V.</span>
</div>

<div className="testimonial-slide absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none flex flex-col items-center justify-center">
<p className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
                        "I've attended galas worldwide, but the midnight reveal here is a moment of pure, cinematic magic. Exquisitely curated."
                    </p>
<div className="flex gap-1 mb-2 text-[#C9A84C]">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="uppercase tracking-[0.2em] text-[10px] font-medium">— Anonymous Guest</span>
</div>
</div>

<div className="flex justify-center gap-3 mt-12" id="testimonial-dots">
<button className="w-2 h-2 rounded-full bg-[#0a0608] transition-all duration-300"></button>
<button className="w-2 h-2 rounded-full bg-[#0a0608]/20 hover:bg-[#0a0608]/50 transition-all duration-300"></button>
<button className="w-2 h-2 rounded-full bg-[#0a0608]/20 hover:bg-[#0a0608]/50 transition-all duration-300"></button>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start reveal-right order-2 md:order-1">
<span className="uppercase tracking-[0.2em] text-xs text-[#C9A84C] mb-4">The Location</span>
<h2 className="font-display italic tracking-tight text-4xl lg:text-5xl text-[#F5E6C8] mb-8">The Obsidian Estate</h2>
<p className="text-sm text-[#C4A4A4] mb-8 font-light leading-relaxed">
                    Hidden in the hills just outside the city limits, this 19th-century gothic revival manor serves as our sanctuary. Exact coordinates are provided only to ticket holders 48 hours prior to the event to ensure utmost privacy.
                </p>
<div className="space-y-6 w-full">
<div className="flex items-center gap-4 pb-4 border-b border-[#C9A84C]/20">
<div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="uppercase tracking-[0.1em] text-[10px] text-[#C9A84C]">Address</div>
<div className="text-xs text-[#F5E6C8]">Disclosed 48h prior</div>
</div>
</div>
<div className="flex items-center gap-4 pb-4 border-b border-[#C9A84C]/20">
<div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:car-linear"></iconify-icon>
</div>
<div>
<div className="uppercase tracking-[0.1em] text-[10px] text-[#C9A84C]">Arrival</div>
<div className="text-xs text-[#F5E6C8]">Complimentary valet service provided</div>
</div>
</div>
<div className="flex items-center gap-4 pb-4 border-b border-[#C9A84C]/20">
<div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#C9A84C]" icon="solar:t-shirt-linear"></iconify-icon>
</div>
<div>
<div className="uppercase tracking-[0.1em] text-[10px] text-[#C9A84C]">Dress Code</div>
<div className="text-xs text-[#F5E6C8]">Strict Black Tie &amp; Mask Mandatory</div>
</div>
</div>
</div>
</div>

<div className="w-full aspect-square md:aspect-[4/3] glass rounded-sm border border-[#C9A84C]/20 relative overflow-hidden flex items-center justify-center group reveal-left order-1 md:order-2">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1)_0%,transparent_70%)] opacity-50"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 1px, transparent 20px)'}}></div>
<div className="relative z-10 w-16 h-16 rounded-full bg-[#0a0608] border border-[#C9A84C] flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.5)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#C9A84C] animate-pulse" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 relative">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display italic tracking-tight text-3xl md:text-4xl text-[#F5E6C8] mb-12 text-center reveal-up">Inquiries</h2>
<div className="space-y-4 reveal-up stagger-1" id="faq-container">

<div className="accordion-item glass border border-[#C9A84C]/20 rounded-sm overflow-hidden">
<button className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#C9A84C]/5 transition-colors">
<span className="font-display italic text-xl text-[#F5E6C8]">What is the strictness of the dress code?</span>
<iconify-icon className="accordion-icon text-xl text-[#C9A84C] transition-transform duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 px-6 overflow-hidden">
<p className="text-xs text-[#C4A4A4] font-light leading-relaxed pt-2">
                            The dress code is strictly enforced. Gentlemen must wear a tuxedo or formal dark suit. Ladies must wear a floor-length evening gown. Costumes are not permitted, only formalwear accompanied by an elegant mask. Entry will be denied to those not adhering to these standards.
                        </p>
</div>
</div>

<div className="accordion-item glass border border-[#C9A84C]/20 rounded-sm overflow-hidden">
<button className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#C9A84C]/5 transition-colors">
<span className="font-display italic text-xl text-[#F5E6C8]">Do I need to bring my own mask?</span>
<iconify-icon className="accordion-icon text-xl text-[#C9A84C] transition-transform duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 px-6 overflow-hidden">
<p className="text-xs text-[#C4A4A4] font-light leading-relaxed pt-2">
                            You are welcome to bring a mask that suits your attire. However, all ticket tiers include a handcrafted Venetian mask which will be presented to you upon arrival should you choose not to bring your own.
                        </p>
</div>
</div>

<div className="accordion-item glass border border-[#C9A84C]/20 rounded-sm overflow-hidden">
<button className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#C9A84C]/5 transition-colors">
<span className="font-display italic text-xl text-[#F5E6C8]">Is there an age requirement?</span>
<iconify-icon className="accordion-icon text-xl text-[#C9A84C] transition-transform duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 px-6 overflow-hidden">
<p className="text-xs text-[#C4A4A4] font-light leading-relaxed pt-2">
                            Yes, this is an exclusive adult-only event. All guests must be 21 years of age or older. Identification will be required at the entrance.
                        </p>
</div>
</div>

<div className="accordion-item glass border border-[#C9A84C]/20 rounded-sm overflow-hidden">
<button className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#C9A84C]/5 transition-colors">
<span className="font-display italic text-xl text-[#F5E6C8]">Are photos allowed?</span>
<iconify-icon className="accordion-icon text-xl text-[#C9A84C] transition-transform duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 px-6 overflow-hidden">
<p className="text-xs text-[#C4A4A4] font-light leading-relaxed pt-2">
                            To maintain the mystery and privacy of our guests, personal photography is strongly discouraged. Our professional unobtrusive photographers will capture the essence of the evening, and a private gallery will be shared with guests post-event.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-[#C9A84C]/10">

<div className="absolute inset-0 flex justify-around items-center opacity-5 pointer-events-none">
<iconify-icon className="text-[15rem] text-[#F5E6C8] animate-float" icon="solar:masks-linear"></iconify-icon>
<iconify-icon className="text-[20rem] text-[#C9A84C] animate-float-delayed" icon="solar:masks-outline"></iconify-icon>
</div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display italic tracking-tight text-3xl md:text-5xl text-[#F5E6C8] mb-4 reveal-up">Join the Inner Circle</h2>
<p className="text-xs text-[#C4A4A4] mb-10 reveal-up stagger-1 font-light">Be the first to receive invitations to our future clandestine gatherings.</p>
<form className="flex flex-col sm:flex-row gap-4 mb-12 reveal-up stagger-2" onsubmit="event.preventDefault();">
<input className="flex-grow bg-[#1a0a0f] border border-[#C9A84C]/30 px-6 py-4 text-xs text-[#F5E6C8] placeholder:text-[#C4A4A4]/50 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm" placeholder="Your minimalist email..." required="" type="email"/>
<button className="group relative px-8 py-4 bg-[#C9A84C] text-[#0a0608] overflow-hidden rounded-sm transition-transform duration-300 hover:scale-[1.02]" type="submit">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer-border_1.5s_infinite]"></span>
<span className="relative uppercase tracking-[0.15em] text-xs font-medium">Request Entry</span>
</button>
</form>

<div className="flex justify-center gap-6 reveal-up stagger-3">
<a className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0608] transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,168,76,0.5)]" href="#">
<iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0a0608] transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,168,76,0.5)]" href="#">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#050304] pt-20 pb-10 border-t border-[#C9A84C]/20 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

<div className="text-center md:text-left">
<div className="font-display italic text-4xl text-[#C9A84C] mb-2 tracking-tight">M</div>
<div className="uppercase tracking-[0.3em] text-[8px] text-[#C4A4A4]">An Evening of Mystery</div>
</div>

<nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
<a className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] hover:text-[#C9A84C] transition-colors" href="#story">The Story</a>
<a className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] hover:text-[#C9A84C] transition-colors" href="#experience">Experience</a>
<a className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] hover:text-[#C9A84C] transition-colors" href="#gallery">Gallery</a>
<a className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] hover:text-[#C9A84C] transition-colors" href="#tickets">Tickets</a>
<a className="uppercase tracking-[0.1em] text-[10px] text-[#C4A4A4] hover:text-[#C9A84C] transition-colors" href="#">Concierge</a>
</nav>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-[#C4A4A4]/50 uppercase tracking-[0.1em]">
<div>© 2026 Obsidian Events. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-[#C9A84C] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
