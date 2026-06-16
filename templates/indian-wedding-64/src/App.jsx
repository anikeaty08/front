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
            
            // 1. Page Load Animation
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 1000);
            }, 2500);

            // 2. Continuous Background Particles & Lanterns Generation
            const bgLayer = document.getElementById('animated-bg');
            const isMobile = window.innerWidth < 768;
            const petalCount = isMobile ? 12 : 20;
            const dustCount = isMobile ? 8 : 15;
            const flowerCount = isMobile ? 4 : 6;
            const bokehCount = isMobile ? 5 : 8;
            const lanternCount = isMobile ? 3 : 6;

            const petalColors = ['#FFE4E1', '#FFF0F5', '#FFEEF2', '#FFD1DC', '#F8E0E0', '#FFF5EE'];
            
            function createParticle(type, count, className, appendFunc) {
                for(let i=0; i<count; i++) {
                    const el = document.createElement('div');
                    el.className = `absolute ${className}`;
                    appendFunc(el);
                    bgLayer.appendChild(el);
                }
            }

            // Petals
            createParticle('petal', petalCount, 'petal opacity-40', (el) => {
                el.style.left = `${Math.random() * 100}vw`;
                el.style.top = '-10vh';
                el.style.width = `${Math.random() * 8 + 8}px`;
                el.style.height = `${Math.random() * 8 + 8}px`;
                el.style.backgroundColor = petalColors[Math.floor(Math.random() * petalColors.length)];
                el.style.animationDuration = `${Math.random() * 10 + 8}s`;
                el.style.animationDelay = `-${Math.random() * 15}s`;
            });

            // Gold Dust
            createParticle('dust', dustCount, 'gold-dust', (el) => {
                el.style.left = `${Math.random() * 100}vw`;
                const size = Math.random() * 3 + 2;
                el.style.width = `${size}px`; el.style.height = `${size}px`;
                el.style.animationDuration = `${Math.random() * 12 + 10}s`;
                el.style.animationDelay = `-${Math.random() * 20}s`;
            });

            // White Flowers
            createParticle('flower', flowerCount, 'white-flower opacity-20', (el) => {
                el.style.left = `${Math.random() * 100}vw`;
                el.style.top = `${Math.random() * 100}vh`;
                el.style.animationDuration = `${Math.random() * 25 + 20}s`;
                el.style.animationDelay = `-${Math.random() * 30}s`;
            });

            // Glowing Lanterns
            createParticle('lantern', lanternCount, 'lantern opacity-0', (el) => {
                el.style.left = `${Math.random() * 80 + 10}vw`;
                const size = Math.random() * 150 + 100;
                el.style.width = `${size}px`; el.style.height = `${size}px`;
                el.style.animationDuration = `${Math.random() * 20 + 25}s`;
                el.style.animationDelay = `-${Math.random() * 40}s`;
            });

            // Bokeh
            createParticle('bokeh', bokehCount, 'bokeh', (el) => {
                el.style.left = `${Math.random() * 100}vw`;
                el.style.top = `${Math.random() * 100}vh`;
                const size = Math.random() * 3 + 3;
                el.style.width = `${size}px`; el.style.height = `${size}px`;
                el.style.animationDuration = `${Math.random() * 5 + 4}s`;
                el.style.animationDelay = `-${Math.random() * 5}s`;
            });

            // 3. Scroll Animations & Observers
            const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Special Triggers
                        if (entry.target.id === 'names-section' && !entry.target.dataset.triggered) {
                            entry.target.dataset.triggered = 'true';
                            setTimeout(() => createSparkles(document.getElementById('hearts-container'), 12), 800);
                        }
                        if (entry.target.hasAttribute('data-trigger-hearts') && !entry.target.dataset.triggered) {
                            entry.target.dataset.triggered = 'true';
                            createProposalHearts();
                        }
                        if (entry.target.id === 'wedding-event' && !entry.target.dataset.triggered) {
                            entry.target.dataset.triggered = 'true';
                            document.getElementById('light-burst').classList.add('active');
                        }
                        
                        // Sparkles on event cards
                        if(entry.target.classList.contains('event-card') && !entry.target.dataset.sparkled) {
                             entry.target.dataset.sparkled = 'true';
                             const iconCont = entry.target.querySelector('.icon-container');
                             if(iconCont) setTimeout(() => createSparkles(iconCont, 6), 400);
                        }

                        // Animate timeline progress bar
                        if(entry.target.id === 'timeline-section' && !entry.target.dataset.triggered) {
                            entry.target.dataset.triggered = 'true';
                            setTimeout(() => {
                                document.getElementById('timeline-bar').style.height = '100%';
                            }, 500);
                        }

                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .slide-left, .slide-right, #timeline-section').forEach(el => observer.observe(el));

            // Parallax Scroll Effect
            const parallaxElements = document.querySelectorAll('.parallax-layer');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                requestAnimationFrame(() => {
                    parallaxElements.forEach(el => {
                        const speed = el.dataset.speed || 0.1;
                        const yPos = -(scrolled * speed);
                        el.style.transform = `translateY(${yPos}px)`;
                    });
                });
            });

            // Helper: Sparkles
            function createSparkles(container, count) {
                if(!container) return;
                const rect = container.getBoundingClientRect();
                for(let i=0; i<count; i++) {
                    const s = document.createElement('div');
                    s.className = 'sparkle';
                    const angle = Math.random() * Math.PI * 2;
                    const dist = Math.random() * 50 + 20;
                    s.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
                    s.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
                    s.style.left = '50%'; s.style.top = '50%';
                    container.appendChild(s);
                    setTimeout(() => s.remove(), 800);
                }
            }

            // Helper: Proposal Hearts
            function createProposalHearts() {
                const container = document.getElementById('proposal-hearts');
                if(!container) return;
                for(let i=0; i<8; i++) {
                    const h = document.createElement('div');
                    h.innerHTML = '<iconify-icon icon="solar:heart-bold" class="text-[#D4A017]"></iconify-icon>';
                    h.className = 'absolute w-5 h-5 opacity-0';
                    h.style.left = `${Math.random() * 30}px`;
                    h.style.transition = 'all 2s cubic-bezier(0.25, 1, 0.5, 1)';
                    container.appendChild(h);
                    
                    setTimeout(() => {
                        h.style.opacity = '0.7';
                        h.style.transform = `translateY(-${Math.random() * 60 + 50}px) translateX(${Math.random() * 40 - 20}px) scale(${Math.random() * 0.6 + 0.6}) rotate(${Math.random() * 45 - 20}deg)`;
                    }, 50);
                    setTimeout(() => h.remove(), 2100);
                }
            }

            // 4. Live Countdown
            const targetDate = new Date('Feb 15, 2026 19:30:00').getTime();
            const els = {
                d: document.getElementById('cd-days'),
                h: document.getElementById('cd-hours'),
                m: document.getElementById('cd-mins'),
                s: document.getElementById('cd-secs')
            };

            function updateTimer() {
                const now = new Date().getTime();
                const dist = targetDate - now;

                if (dist < 0) return;

                const d = Math.floor(dist / (1000 * 60 * 60 * 24));
                const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((dist % (1000 * 60)) / 1000);

                updateVal(els.d, d);
                updateVal(els.h, h);
                updateVal(els.m, m);
                updateVal(els.s, s);
            }

            function updateVal(el, val) {
                const strVal = val < 10 ? '0'+val : val;
                if(el.innerText !== strVal) {
                    el.innerText = strVal;
                    el.style.transform = 'translateY(-6px) scale(1.05)';
                    setTimeout(() => el.style.transform = 'translateY(0) scale(1)', 200);
                }
            }
            setInterval(updateTimer, 1000);
            updateTimer();

            // 5. RSVP Form Logic & Confetti Explosion
            const form = document.getElementById('rsvp-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = document.getElementById('submit-btn');
                const btnText = btn.querySelector('.btn-text');
                
                // Morph to active sending state
                btnText.innerHTML = '<iconify-icon icon="solar:letter-opened-linear" class="text-2xl text-white animate-pulse"></iconify-icon>';
                btn.classList.add('scale-110');

                // Simulate processing
                setTimeout(() => {
                    triggerMassiveConfetti();
                    
                    // Fade out form, show thanks
                    document.getElementById('rsvp-content').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('rsvp-content').style.display = 'none';
                        const thanks = document.getElementById('thank-you-msg');
                        const card = document.getElementById('thanks-card');
                        thanks.classList.remove('pointer-events-none');
                        thanks.style.opacity = '1';
                        setTimeout(() => {
                            card.classList.remove('scale-90');
                            card.classList.add('scale-100');
                        }, 50);
                    }, 500);

                }, 1200);
            });

            function triggerMassiveConfetti() {
                const colors = ['#B8860B', '#D4A017', '#F7E7CE', '#B76E79', '#FFFFFF', '#FFF8F0'];
                const shapes = ['50%', '0']; // circle or square
                
                for(let i=0; i<150; i++) {
                    const c = document.createElement('div');
                    c.className = 'confetti';
                    const size = Math.random() * 10 + 5;
                    c.style.width = `${size}px`; c.style.height = `${size}px`;
                    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    c.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
                    c.style.left = '50%';
                    c.style.top = '50%';
                    c.style.zIndex = '99';
                    
                    const tx = (Math.random() - 0.5) * window.innerWidth * 1.5;
                    const ty = (Math.random() - 0.5) * window.innerHeight;
                    
                    c.animate([
                        { transform: `translate(0,0) scale(0)`, opacity: 1 },
                        { transform: `translate(${tx}px, ${ty}px) scale(1) rotate(${Math.random()*360}deg)` },
                        { transform: `translate(${tx + (Math.random()*150-75)}px, 120vh) scale(0.5) rotate(${Math.random()*720}deg)`, opacity: 0 }
                    ], {
                        duration: Math.random() * 3000 + 2500,
                        easing: 'cubic-bezier(.25, 1, .5, 1)',
                        fill: 'forwards'
                    });
                    
                    document.body.appendChild(c);
                    setTimeout(() => c.remove(), 6000);
                }

                // Add extra burst of petals temporarily
                createParticle('petal', 30, 'petal opacity-70 z-50', (el) => {
                    el.style.left = `${Math.random() * 100}vw`;
                    el.style.top = '-10vh';
                    el.style.width = `${Math.random() * 12 + 10}px`;
                    el.style.height = `${Math.random() * 12 + 10}px`;
                    el.style.backgroundColor = petalColors[Math.floor(Math.random() * petalColors.length)];
                    el.style.animationDuration = `${Math.random() * 4 + 3}s`;
                });
                
                setTimeout(() => {
                    const allPetals = bgLayer.querySelectorAll('.petal');
                    if(allPetals.length > petalCount) {
                        for(let i=petalCount; i<allPetals.length; i++) allPetals[i].remove();
                    }
                }, 7000);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="loader">
<div className="relative w-64 h-64 flex items-center justify-center">

<svg className="mandala-spin absolute inset-0 w-full h-full text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="45" stroke-dasharray="2 4"></circle>
<path d="M50 10 Q60 40 90 50 Q60 60 50 90 Q40 60 10 50 Q40 40 50 10 Z" fill="rgba(212,160,23,0.1)"></path>
<circle cx="50" cy="50" r="20" strokeWidth="1"></circle>
<path d="M50 30 Q55 40 50 50 Q45 40 50 30 Z M70 50 Q60 55 50 50 Q60 45 70 50 Z M50 70 Q45 60 50 50 Q55 60 50 70 Z M30 50 Q40 45 50 50 Q40 55 30 50 Z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="fixed top-0 left-0 w-full flex justify-between pointer-events-none z-0 px-4 md:px-12 py-4 opacity-40">

<div className="origin-top animate-[sway_5s_ease-in-out_infinite_alternate] text-[#B8860B] flex flex-col items-center">
<div className="w-[1px] h-12 bg-gradient-to-b from-[#B8860B] to-transparent"></div>
<iconify-icon className="text-2xl mt-[-4px]" height="1.5em" icon="solar:bell-bing-linear" width="1.5em"></iconify-icon>
</div>

<div className="origin-top animate-[sway_4.5s_ease-in-out_infinite_alternate-reverse] text-[#B8860B] flex flex-col items-center">
<div className="w-[1px] h-16 bg-gradient-to-b from-[#B8860B] to-transparent"></div>
<iconify-icon className="text-2xl mt-[-4px]" height="1.5em" icon="solar:bell-bing-linear" width="1.5em"></iconify-icon>
</div>
</div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl opacity-[0.03] pointer-events-none z-0 flex items-center justify-center animate-[spinSlow_120s_linear_infinite]">
<svg fill="none" stroke="#B8860B" strokeWidth="0.5" viewbox="0 0 200 200">
<circle cx="100" cy="100" r="90" stroke-dasharray="1 5"></circle>
<path d="M100 10 L115 85 L190 100 L115 115 L100 190 L85 115 L10 100 L85 85 Z"></path>
<circle cx="100" cy="100" r="60"></circle>
<path d="M100 40 Q130 70 160 100 Q130 130 100 160 Q70 130 40 100 Q70 70 100 40 Z"></path>
</svg>
</div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="animated-bg"></div>

<main className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center">

<svg style={{display: 'none'}}>
<defs>
<g id="ornament-divider">
<line opacity="0.6" stroke="#D4A017" strokeWidth="0.5" x1="0" x2="40" y1="5" y2="5"></line>
<path d="M45 5 L50 0 L55 5 L50 10 Z" fill="#FFF8F0" stroke="#D4A017" strokeWidth="1"></path>
<line opacity="0.6" stroke="#D4A017" strokeWidth="0.5" x1="60" x2="100" y1="5" y2="5"></line>
</g>
</defs>
</svg>

<section className="reveal flex flex-col items-center mb-32 w-full pt-12 parallax-layer" data-speed="0.2">
<div className="flex items-center gap-4 mb-8 relative animate-[glowPulse_4s_infinite]">

<div className="relative w-8 h-10 flex flex-col items-center opacity-80">
<div className="w-3 h-3 rounded-full border border-[#B8860B] mb-[-4px] z-10 bg-[#FFF8F0]"></div>
<div className="w-6 h-4 border border-[#B8860B] rounded-[50%_50%_0_0] mb-[-1px]"></div>
<div className="w-8 h-8 border border-[#B8860B] rounded-full bg-[#FFF8F0]"></div>
</div>

<div className="w-14 h-14 text-[#B8860B]">
<svg fill="currentColor" viewbox="0 0 100 100">
<path d="M45,20 C55,20 60,30 60,40 C60,50 50,55 50,65 C50,75 60,80 70,80 C80,80 85,70 85,60 M35,40 C25,40 20,50 20,60 C20,70 30,80 40,80 C50,80 55,70 55,60 C55,50 45,45 45,35 M50,10 C50,10 50,20 50,20 M70,30 C70,30 80,30 80,30" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="75" cy="45" r="3"></circle>
</svg>
</div>

<div className="relative w-8 h-10 flex flex-col items-center justify-end opacity-80">
<div className="w-3 h-4 bg-gradient-to-t from-[#FF8C00] via-[#FFA500] to-[#FFD700] rounded-[50%_50%_20%_20%] flame-anim blur-[1px] mb-[-2px] z-10"></div>
<div className="w-8 h-4 bg-[#B8860B] rounded-[0_0_50px_50px]"></div>
</div>
</div>
<h1 className="text-[#B8860B] tracking-widest text-xs md:text-sm uppercase mb-8">|| Shree Ganeshaya Namaha ||</h1>
<svg height="10" viewbox="0 0 100 10" width="100"><use href="#ornament-divider"></use></svg>
</section>

<section className="flex flex-col items-center mb-32 w-full parallax-layer" data-speed="0.1">
<p className="reveal stagger-1 font-playfair text-[#3D2B1F] text-lg md:text-xl font-medium mb-2 tracking-tight">Mr. Rajesh Sharma &amp; Mrs. Sunita Sharma</p>
<p className="reveal stagger-2 font-cormorant italic text-[#6B5744] text-base mb-2">together with</p>
<p className="reveal stagger-3 font-playfair text-[#3D2B1F] text-lg md:text-xl font-medium mb-6 tracking-tight">Mr. Anil Verma &amp; Mrs. Kavita Verma</p>
<div className="reveal stagger-3 text-[#D4A017] mb-6 animate-[sway_3s_ease-in-out_infinite_alternate]">
<iconify-icon className="rotate-45" height="1.5em" icon="solar:leaf-linear" width="1.5em"></iconify-icon>
</div>
<p className="reveal font-cormorant italic text-[#6B5744] text-lg md:text-xl leading-[1.8] max-w-lg">joyfully invite you to celebrate the union of their beloved children</p>
</section>

<section className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-32 w-full overflow-visible py-10 parallax-layer" data-speed="0.15" id="names-section">

<div className="absolute left-[5%] top-[10%] w-16 h-16 opacity-30 hidden md:block transition-transform duration-700 hover:scale-110 hover:rotate-12">
<div className="absolute inset-0 rounded-full border border-[#D4A017] transform translate-x-1 translate-y-1"></div>
<div className="absolute inset-0 rounded-full border border-[#B8860B] transform -translate-x-1 -translate-y-1"></div>
</div>
<div className="slide-left font-vibes text-5xl md:text-8xl drop-shadow-[0_0_20px_rgba(184,134,11,0.2)] pr-4 shiny-text tracking-tight">Priya</div>
<div className="relative flex flex-col items-center justify-center z-10" id="hearts-container">
<div className="flex text-[#B76E79] heart-beat opacity-90">
<iconify-icon height="2.5em" icon="solar:hearts-linear" width="2.5em"></iconify-icon>
</div>
</div>
<div className="slide-right font-vibes text-5xl md:text-8xl drop-shadow-[0_0_20px_rgba(184,134,11,0.2)] pl-4 shiny-text tracking-tight">Rahul</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-10 opacity-50 pointer-events-none group">
<svg fill="none" stroke="#B8860B" strokeWidth="1" viewbox="0 0 100 30">
<path className="animate-[dash_20s_linear_infinite]" d="M0 0 Q50 30 100 0" stroke-dasharray="2 2"></path>
<circle className="animate-pulse" cx="48" cy="15" fill="#B8860B" r="2"></circle>
<circle className="animate-pulse" cx="52" cy="15" fill="#B8860B" r="2"></circle>
</svg>
</div>
</section>

<section className="reveal flex flex-col items-center mb-32 w-full parallax-layer" data-speed="0.1">
<div className="ribbon px-10 py-6 md:px-16 md:py-8 rounded-sm relative mb-8 shadow-sm transition-transform duration-500 hover:scale-105">
<div className="relative z-10 flex flex-col gap-2">
<p className="font-playfair text-[#3D2B1F] text-xl md:text-2xl font-medium tracking-tight">Saturday, the Fifteenth of February</p>
<p className="font-playfair text-[#3D2B1F] text-lg md:text-xl tracking-tight">Two Thousand and Twenty-Six</p>
</div>

<div className="absolute -top-4 -right-2 flex gap-1 origin-top animate-[sway_2.5s_infinite_alternate] opacity-70 text-[#D4A017]">
<iconify-icon height="1.2em" icon="solar:bell-linear" width="1.2em"></iconify-icon>
<iconify-icon className="mt-2" height="1em" icon="solar:bell-linear" width="1em"></iconify-icon>
</div>
</div>
<p className="font-cormorant italic text-[#6B5744] text-xl tracking-tight">at Half Past Seven in the Evening</p>
</section>

<section className="reveal flex flex-col items-center mb-32 w-full">
<svg className="mb-8" height="10" viewbox="0 0 100 10" width="100"><use href="#ornament-divider"></use></svg>
<p className="font-vibes text-[#D4A017] text-3xl md:text-4xl mb-12 tracking-tight">Counting the moments to forever...</p>
<div className="flex items-center justify-center gap-3 md:gap-6 font-playfair text-[#B8860B] text-3xl md:text-5xl tracking-tight">
<div className="flex flex-col items-center relative group">
<div className="absolute inset-0 border border-[#D4A017] rounded-full opacity-0 group-hover:animate-[rippleRing_1.5s_linear_infinite] scale-150"></div>
<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm z-10">
<span className="transition-transform duration-300" id="cd-days">00</span>
</div>
<span className="font-poppins text-[#6B5744] text-xs uppercase tracking-widest mt-4 font-light">Days</span>
</div>
<span className="text-[#D4A017] text-2xl md:text-3xl pb-8 animate-pulse">·</span>
<div className="flex flex-col items-center relative group">
<div className="absolute inset-0 border border-[#D4A017] rounded-full opacity-0 group-hover:animate-[rippleRing_1.5s_linear_infinite] scale-150"></div>
<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm z-10">
<span className="transition-transform duration-300" id="cd-hours">00</span>
</div>
<span className="font-poppins text-[#6B5744] text-xs uppercase tracking-widest mt-4 font-light">Hours</span>
</div>
<span className="text-[#D4A017] text-2xl md:text-3xl pb-8 animate-pulse">·</span>
<div className="flex flex-col items-center relative group">
<div className="absolute inset-0 border border-[#D4A017] rounded-full opacity-0 group-hover:animate-[rippleRing_1.5s_linear_infinite] scale-150"></div>
<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm z-10">
<span className="transition-transform duration-300" id="cd-mins">00</span>
</div>
<span className="font-poppins text-[#6B5744] text-xs uppercase tracking-widest mt-4 font-light">Mins</span>
</div>
<span className="text-[#D4A017] text-2xl md:text-3xl pb-8 animate-pulse">·</span>
<div className="flex flex-col items-center relative group">
<div className="absolute inset-0 border border-[#D4A017] rounded-full opacity-0 group-hover:animate-[rippleRing_1.5s_linear_infinite] scale-150"></div>
<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm z-10">
<span className="transition-transform duration-300" id="cd-secs">00</span>
</div>
<span className="font-poppins text-[#6B5744] text-xs uppercase tracking-widest mt-4 font-light">Secs</span>
</div>
</div>
<svg className="mt-12" height="10" viewbox="0 0 100 10" width="100"><use href="#ornament-divider"></use></svg>
</section>

<section className="flex flex-col items-center mb-32 w-full relative" id="timeline-section">
<h2 className="reveal font-vibes text-[#B8860B] text-5xl md:text-6xl mb-20 tracking-tight">Our Journey Together</h2>
<div className="relative w-full max-w-2xl mx-auto py-10">
<div className="timeline-line"><div className="timeline-progress" id="timeline-bar"></div></div>

<div className="reveal relative flex w-full mb-20 items-center justify-start md:justify-end timeline-content-right pr-0 md:pr-[50%] group">
<div className="timeline-dot"></div>
<div className="w-full md:w-5/6 text-left md:text-right pl-12 md:pl-0 md:pr-12 transition-transform duration-500 group-hover:-translate-x-2">
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl mb-1 tracking-tight">2020</h3>
<h4 className="font-playfair text-[#3D2B1F] text-xl mb-2 tracking-tight">Where It All Began</h4>
<p className="font-cormorant italic text-[#6B5744] text-base md:text-lg">A chance meeting that changed everything forever</p>
</div>
</div>

<div className="reveal relative flex w-full mb-20 items-center justify-start timeline-content-left pl-0 md:pl-[50%] group">
<div className="timeline-dot"></div>
<div className="w-full md:w-5/6 text-left pl-12 md:pl-12 transition-transform duration-500 group-hover:translate-x-2">
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl mb-1 tracking-tight">2021</h3>
<h4 className="font-playfair text-[#3D2B1F] text-xl mb-2 tracking-tight">Falling Deeply in Love</h4>
<p className="font-cormorant italic text-[#6B5744] text-base md:text-lg">Every moment together became a treasure</p>
</div>
</div>

<div className="reveal relative flex w-full mb-20 items-center justify-start md:justify-end timeline-content-right pr-0 md:pr-[50%] group" data-trigger-hearts="true">
<div className="timeline-dot"></div>
<div className="w-full md:w-5/6 text-left md:text-right pl-12 md:pl-0 md:pr-12 relative transition-transform duration-500 group-hover:-translate-x-2">
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl mb-1 tracking-tight">2025</h3>
<div className="flex items-center md:justify-end gap-2 mb-2">
<h4 className="font-playfair text-[#3D2B1F] text-xl tracking-tight">The Proposal</h4>
<iconify-icon className="text-xl text-[#D4A017] animate-[pulse_3s_ease-in-out_infinite]" icon="solar:rings-linear"></iconify-icon>
</div>
<p className="font-cormorant italic text-[#6B5744] text-base md:text-lg">Under the stars in Udaipur, forever began with YES</p>

<div className="absolute top-0 right-10 w-10 h-10 pointer-events-none" id="proposal-hearts"></div>
</div>
</div>

<div className="reveal relative flex w-full items-center justify-start timeline-content-left pl-0 md:pl-[50%] group">
<div className="timeline-dot"></div>
<div className="w-full md:w-5/6 text-left pl-12 md:pl-12 transition-transform duration-500 group-hover:translate-x-2">
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl mb-1 tracking-tight">2026</h3>
<h4 className="font-playfair text-[#3D2B1F] text-xl mb-2 tracking-tight">Our Wedding</h4>
<p className="font-cormorant italic text-[#6B5744] text-base md:text-lg">The most beautiful chapter begins here</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col items-center mb-32 w-full relative">
<h2 className="reveal font-playfair font-medium text-[#B8860B] text-3xl md:text-4xl tracking-widest uppercase mb-20 text-center tracking-tight">Join Us in Celebration</h2>
<div className="flex flex-col gap-16 w-full max-w-lg">

<div className="reveal flex flex-col items-center text-center relative event-card rounded-2xl p-6 bg-white/40 backdrop-blur-sm border border-transparent hover:border-[#F5E6CC] hover:bg-white/80">
<div className="w-14 h-14 mb-5 text-[#D4A017] flex items-center justify-center bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm icon-container z-10">
<iconify-icon height="1.8em" icon="solar:sun-2-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl tracking-widest mb-3 z-10 tracking-tight">HALDI CEREMONY</h3>
<p className="font-poppins text-[#3D2B1F] text-sm mb-1 z-10 font-light tracking-wide">Thursday, 13th February 2026 · 10:00 AM</p>
<p className="font-poppins text-[#3D2B1F] text-sm mb-4 z-10 font-light">Priya's Residence, Banjara Hills, Hyderabad</p>
<p className="font-vibes text-[#6B5744] text-2xl md:text-3xl opacity-80 z-10 tracking-tight">"A morning showered in turmeric and blessings"</p>
</div>
<svg className="mx-auto opacity-50" height="10" viewbox="0 0 100 10" width="60"><use href="#ornament-divider"></use></svg>

<div className="reveal flex flex-col items-center text-center relative event-card rounded-2xl p-6 bg-white/40 backdrop-blur-sm border border-transparent hover:border-[#F5E6CC] hover:bg-white/80">
<div className="w-14 h-14 mb-5 text-[#D4A017] flex items-center justify-center bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm icon-container z-10">
<iconify-icon height="1.8em" icon="solar:music-note-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl tracking-widest mb-3 z-10 tracking-tight">SANGEET NIGHT</h3>
<p className="font-poppins text-[#3D2B1F] text-sm mb-1 z-10 font-light tracking-wide">Thursday, 13th February 2026 · 7:00 PM</p>
<p className="font-poppins text-[#3D2B1F] text-sm mb-4 z-10 font-light">Taj Falaknuma Palace, Hyderabad</p>
<p className="font-vibes text-[#6B5744] text-2xl md:text-3xl opacity-80 z-10 tracking-tight">"An evening of dance, music and joy"</p>
</div>
<svg className="mx-auto opacity-50" height="10" viewbox="0 0 100 10" width="60"><use href="#ornament-divider"></use></svg>

<div className="reveal flex flex-col items-center text-center relative event-card rounded-2xl p-6 bg-white/40 backdrop-blur-sm border border-transparent hover:border-[#F5E6CC] hover:bg-white/80">
<div className="w-14 h-14 mb-5 text-[#D4A017] flex items-center justify-center bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm icon-container z-10">
<iconify-icon height="1.8em" icon="solar:pen-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl tracking-widest mb-3 z-10 tracking-tight">MEHENDI</h3>
<p className="font-poppins text-[#3D2B1F] text-sm mb-1 z-10 font-light tracking-wide">Friday, 14th February 2026 · 11:00 AM</p>
<p className="font-poppins text-[#3D2B1F] text-sm mb-4 z-10 font-light">Priya's Residence, Banjara Hills, Hyderabad</p>
<p className="font-vibes text-[#6B5744] text-2xl md:text-3xl opacity-80 z-10 tracking-tight">"Beautiful patterns telling our story of love"</p>
</div>
<svg className="mx-auto opacity-50" height="10" viewbox="0 0 100 10" width="60"><use href="#ornament-divider"></use></svg>

<div className="reveal flex flex-col items-center text-center relative event-card rounded-2xl p-8 bg-[#FFF8F0]/80 backdrop-blur-md border border-[#D4A017]/30 shadow-lg hover:shadow-[0_15px_40px_rgba(212,160,23,0.15)] scale-105" id="wedding-event">
<div className="radial-burst" id="light-burst"></div>
<div className="absolute inset-0 border-2 border-transparent rounded-2xl bg-gradient-to-br from-[#D4A017] to-transparent opacity-10 pointer-events-none"></div>
<div className="w-20 h-20 mb-5 text-[#B8860B] flex items-center justify-center bg-white rounded-full border border-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.25)] icon-container z-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#FFF8F0] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="relative z-10" height="2.2em" icon="solar:crown-star-linear" width="2.2em"></iconify-icon>
</div>
<h3 className="font-playfair font-medium text-[#B8860B] text-3xl tracking-widest mb-3 z-10 tracking-tight shiny-text">WEDDING CEREMONY</h3>
<p className="font-poppins text-[#3D2B1F] text-sm mb-1 z-10 font-light tracking-wide">Saturday, 15th February 2026 · 7:30 PM</p>
<p className="font-poppins text-[#3D2B1F] text-sm mb-4 z-10 font-light">ITC Kohenur, HITEC City, Hyderabad</p>
<p className="font-vibes text-[#B8860B] text-3xl md:text-4xl opacity-90 z-10 tracking-tight mt-2">"Two hearts, one soul, forever and always"</p>
</div>
<svg className="mx-auto opacity-50" height="10" viewbox="0 0 100 10" width="60"><use href="#ornament-divider"></use></svg>

<div className="reveal flex flex-col items-center text-center relative event-card rounded-2xl p-6 bg-white/40 backdrop-blur-sm border border-transparent hover:border-[#F5E6CC] hover:bg-white/80">
<div className="w-14 h-14 mb-5 text-[#D4A017] flex items-center justify-center bg-[#FFF8F0] rounded-full border border-[#F5E6CC] shadow-sm icon-container z-10">
<iconify-icon height="1.8em" icon="solar:glass-water-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="font-playfair font-medium text-[#B8860B] text-2xl tracking-widest mb-3 z-10 tracking-tight">GRAND RECEPTION</h3>
<p className="font-poppins text-[#3D2B1F] text-sm mb-1 z-10 font-light tracking-wide">Sunday, 16th February 2026 · 7:00 PM</p>
<p className="font-poppins text-[#3D2B1F] text-sm mb-4 z-10 font-light">Novotel HITEC City, Hyderabad</p>
<p className="font-vibes text-[#6B5744] text-2xl md:text-3xl opacity-80 z-10 tracking-tight">"Let's raise a toast to love and new beginnings"</p>
</div>
</div>
</section>

<section className="reveal flex flex-col items-center mb-32 w-full parallax-layer" data-speed="0.05">
<h2 className="font-vibes text-[#B8860B] text-5xl md:text-6xl mb-8 tracking-tight">Where Our Forever Begins</h2>
<div className="flex items-center gap-3 mb-6 relative">
<div className="absolute inset-0 bg-[#D4A017] rounded-full blur-md opacity-20 animate-pulse scale-150"></div>
<iconify-icon className="text-[#D4A017] text-2xl md:text-3xl relative z-10" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-playfair text-[#B8860B] text-3xl md:text-4xl tracking-tight relative z-10">ITC Kohenur</h3>
</div>
<p className="font-poppins text-[#3D2B1F] text-sm md:text-base mb-12 max-w-sm text-center font-light">HITEC City, Madhapur, Hyderabad, Telangana</p>
<a className="group relative px-10 py-4 rounded-full border border-[#D4A017] bg-white/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-[0_8px_30px_rgba(184,134,11,0.2)] inline-flex items-center gap-3" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-[#D4A017] to-[#E8C252] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative z-10 font-poppins font-normal text-[#B8860B] group-hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest">Get Directions</span>
<iconify-icon className="relative z-10 text-[#B8860B] group-hover:text-white transition-colors text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</section>

<section className="reveal flex flex-col items-center mb-32 w-full max-w-xl mx-auto relative min-h-[450px]">
<div className="w-full transition-opacity duration-500 flex flex-col items-center p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/50 shadow-xl group hover:shadow-2xl transition-shadow duration-700" id="rsvp-content">
<div className="relative inline-block mb-6">
<h2 className="font-vibes text-[#B8860B] text-5xl md:text-6xl tracking-tight">Will You Join Us?</h2>
<iconify-icon className="absolute -top-4 -right-8 text-[#D4A017] text-2xl animate-[sway_2s_ease-in-out_infinite_alternate]" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
</div>
<p className="font-poppins text-[#6B5744] text-xs md:text-sm mb-12 font-light tracking-wide">Kindly respond by 1st February 2026</p>
<form className="w-full flex flex-col gap-10" id="rsvp-form">
<div className="relative group/input">
<input className="custom-input font-playfair text-xl pb-3 tracking-tight" placeholder="Your Full Name" required="" type="text"/>
<div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#D4A017] to-[#B8860B] transition-all duration-500 ease-out transform -translate-x-1/2 peer-focus:w-full group-focus-within/input:w-full"></div>
</div>
<div className="relative group/input">
<select className="custom-input font-playfair text-xl pb-3 appearance-none cursor-pointer text-[#3D2B1F] tracking-tight bg-transparent" required="">
<option className="text-[#6B5744] italic" disabled="" selected="" value="">Number of Guests</option>
<option value="1">1 Guest</option>
<option value="2">2 Guests</option>
<option value="3">3 Guests</option>
<option value="4">4 Guests</option>
<option value="5">5 Guests</option>
</select>
<iconify-icon className="absolute right-2 bottom-4 text-[#D4A017] pointer-events-none transition-transform duration-300 group-focus-within/input:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
<div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#D4A017] to-[#B8860B] transition-all duration-500 ease-out transform -translate-x-1/2 group-focus-within/input:w-full"></div>
</div>
<div className="w-full text-left">
<p className="font-playfair text-[#6B5744] italic mb-6 text-lg">Events Attending</p>
<div className="flex flex-wrap gap-5 justify-start md:justify-center">
<label className="custom-checkbox cursor-pointer relative flex items-center gap-2 group hover:-translate-y-1 transition-transform">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-[#D4A017] transition-all duration-300 flex items-center justify-center bg-white group-hover:border-[#B8860B]">
<iconify-icon className="text-white opacity-0 transform scale-50 transition-all duration-300 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-poppins text-sm text-[#3D2B1F] font-light">Haldi</span>
</label>
<label className="custom-checkbox cursor-pointer relative flex items-center gap-2 group hover:-translate-y-1 transition-transform">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-[#D4A017] transition-all duration-300 flex items-center justify-center bg-white group-hover:border-[#B8860B]">
<iconify-icon className="text-white opacity-0 transform scale-50 transition-all duration-300 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-poppins text-sm text-[#3D2B1F] font-light">Sangeet</span>
</label>
<label className="custom-checkbox cursor-pointer relative flex items-center gap-2 group hover:-translate-y-1 transition-transform">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-[#D4A017] transition-all duration-300 flex items-center justify-center bg-white group-hover:border-[#B8860B]">
<iconify-icon className="text-white opacity-0 transform scale-50 transition-all duration-300 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-poppins text-sm text-[#3D2B1F] font-light">Mehendi</span>
</label>
<label className="custom-checkbox cursor-pointer relative flex items-center gap-2 group hover:-translate-y-1 transition-transform">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-[#D4A017] transition-all duration-300 flex items-center justify-center bg-white group-hover:border-[#B8860B]">
<iconify-icon className="text-white opacity-0 transform scale-50 transition-all duration-300 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-poppins text-sm text-[#3D2B1F] font-light">Wedding</span>
</label>
<label className="custom-checkbox cursor-pointer relative flex items-center gap-2 group hover:-translate-y-1 transition-transform">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded-full border border-[#D4A017] transition-all duration-300 flex items-center justify-center bg-white group-hover:border-[#B8860B]">
<iconify-icon className="text-white opacity-0 transform scale-50 transition-all duration-300 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-poppins text-sm text-[#3D2B1F] font-light">Reception</span>
</label>
</div>
</div>
<div className="relative group/input mt-2">
<textarea className="custom-input font-playfair text-xl pb-3 resize-none border-r border-[#D4A017]/30 pr-3 tracking-tight" placeholder="Your wishes for the couple..." rows="2"></textarea>
<div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#D4A017] to-[#B8860B] transition-all duration-500 ease-out transform -translate-x-1/2 group-focus-within/input:w-full"></div>
</div>
<button className="relative overflow-hidden self-center px-12 py-5 rounded-full bg-gradient-to-r from-[#D4A017] to-[#E8C252] text-white font-poppins font-medium text-xs md:text-sm tracking-widest uppercase transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(184,134,11,0.3)] flex items-center justify-center min-w-[240px] group mt-8" id="submit-btn" type="submit">
<div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="btn-text flex items-center gap-3 relative z-10">Send With Love <iconify-icon className="text-xl group-hover:animate-pulse" icon="solar:heart-angle-linear"></iconify-icon></span>
</button>
</form>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000 z-20" id="thank-you-msg">
<div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white p-12 rounded-3xl shadow-2xl flex flex-col items-center text-center transform transition-transform duration-1000 scale-90" id="thanks-card">
<iconify-icon className="text-[#D4A017] text-6xl mb-6 animate-[sway_3s_ease-in-out_infinite_alternate]" icon="solar:letter-opened-linear"></iconify-icon>
<h2 className="font-vibes text-[#B8860B] text-5xl md:text-7xl mb-6 tracking-tight">Thank You!</h2>
<p className="font-cormorant text-[#6B5744] text-xl md:text-2xl italic leading-relaxed">Your presence will make our day truly magical ✨</p>
</div>
</div>
</section>

<section className="reveal flex flex-col items-center pb-32 w-full relative parallax-layer" data-speed="-0.1">
<h2 className="font-vibes text-[#B8860B] text-4xl md:text-5xl mb-12 typewriter inline-block tracking-tight">#PriyaWedRahul</h2>
<p className="font-playfair font-medium text-[#3D2B1F] text-xl md:text-2xl mb-2 tracking-tight">With All Our Love &amp; Blessings</p>
<p className="font-cormorant text-[#6B5744] text-lg md:text-xl mb-8">The Sharma &amp; Verma Families</p>
<svg className="mb-10 opacity-60" height="20" viewbox="0 0 60 20" width="60">
<path d="M0 10 Q15 0 30 10 T60 10" fill="none" stroke="#D4A017" strokeWidth="1"></path>
</svg>
<p className="font-poppins italic text-[#6B5744] text-xs font-light tracking-widest uppercase">Your presence is our greatest gift</p>
<div className="mt-16 flex gap-3 heart-beat">
<iconify-icon className="text-[#B8860B] text-2xl" icon="solar:heart-linear"></iconify-icon>
<iconify-icon className="text-[#B8860B] text-2xl" icon="solar:heart-linear"></iconify-icon>
</div>

<svg className="absolute -bottom-40 w-[30rem] h-[30rem] opacity-[0.04] animate-[spinSlow_80s_linear_infinite] pointer-events-none text-[#B8860B]" fill="none" stroke="currentColor" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="48" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
<path d="M50 2 L55 45 L98 50 L55 55 L50 98 L45 55 L2 50 L45 45 Z" strokeWidth="0.5"></path>
<circle cx="50" cy="50" r="25" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="10" stroke-dasharray="1 3" strokeWidth="0.5"></circle>
</svg>
</section>
</main>


    </>
  );
}
