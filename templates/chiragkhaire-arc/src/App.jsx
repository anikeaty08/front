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



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#080808',
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.06)',
accent: '#3B82F6',
primary: '#F0F0F0',
secondary: '#888888',
muted: '#444444',
},
fontFamily: {
syne: ['Syne', 'sans-serif'],
outfit: ['Outfit', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
letterSpacing: {
widest: '0.25em',
wider: '0.2em',
wide: '0.15em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 01. Loader Animation ---
            const loader = document.getElementById('loader');
            const counter = document.getElementById('loader-counter');
            let progress = 0;
            const duration = 2200; // 2.2s
            const intervalTime = 20;
            const steps = duration / intervalTime;
            const increment = 100 / steps;

            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

            let currentStep = 0;
            const loaderInterval = setInterval(() => {
                currentStep++;
                const t = currentStep / steps;
                progress = easeOutCubic(t) * 100;
                
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(loaderInterval);
                    completeLoader();
                }
                
                counter.innerText = progress < 10 ? `0${Math.floor(progress)}%` : `${Math.floor(progress)}%`;
            }, intervalTime);

            function completeLoader() {
                gsap.to(counter, { opacity: 0, duration: 0.3, onComplete: () => {
                    gsap.to(loader, { yPercent: -100, duration: 0.6, ease: "power3.inOut", onComplete: () => {
                        loader.style.display = 'none';
                        initSiteAnimations();
                    }});
                }});
            }

            // --- 02. Smooth Scroll (Lenis) ---
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
            });
            function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);

            // --- 03. Custom Cursor ---
            const cursorDot = document.getElementById('cursor-dot');
            const cursorRing = document.getElementById('cursor-ring');
            
            // Initializing out of screen bounds to prevent top-left flicker
            let mouseX = -100, mouseY = -100;
            let ringX = -100, ringY = -100;

            if (window.matchMedia("(pointer: fine)").matches) {
                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                });

                gsap.ticker.add(() => {
                    ringX += (mouseX - ringX) * 0.15; 
                    ringY += (mouseY - ringY) * 0.15;
                    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
                });
            }

            // --- 04. Flashlight Effect ---
            const flashlightContainers = document.querySelectorAll('.flashlight-container');
            if (window.matchMedia("(pointer: fine)").matches) {
                flashlightContainers.forEach(container => {
                    container.addEventListener('mousemove', (e) => {
                        const rect = container.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        container.style.setProperty('--mouse-x', `${x}px`);
                        container.style.setProperty('--mouse-y', `${y}px`);
                    });
                });
            }

            // --- 05. Navbar scroll effect ---
            const navbar = document.getElementById('navbar');
            const navBorder = document.getElementById('nav-border');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#080808]/90', 'backdrop-blur-md');
                    navBorder.style.opacity = '1';
                } else {
                    navbar.classList.remove('bg-[#080808]/90', 'backdrop-blur-md');
                    navBorder.style.opacity = '0';
                }
            });

            // --- 06. Magnetic Button (Desktop) ---
            const magneticWrappers = document.querySelectorAll('.magnetic-wrapper');
            if (window.matchMedia("(pointer: fine)").matches) {
                magneticWrappers.forEach(wrapper => {
                    const btn = wrapper.querySelector('.magnetic-btn');
                    wrapper.addEventListener('mousemove', (e) => {
                        const rect = wrapper.getBoundingClientRect();
                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;
                        
                        const distX = e.clientX - centerX;
                        const distY = e.clientY - centerY;
                        
                        const distance = Math.sqrt(distX*distX + distY*distY);
                        if(distance < 80) {
                            const moveX = (distX / 80) * 8;
                            const moveY = (distY / 80) * 8;
                            gsap.to(btn, { x: moveX, y: moveY, duration: 0.3, ease: "power2.out" });
                        } else {
                            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
                        }
                    });
                    wrapper.addEventListener('mouseleave', () => {
                        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
                    });
                });
            }

            // --- 07. Init Animations (Fires after loader) ---
            function initSiteAnimations() {
                const navName = document.getElementById('nav-name');
                navName.classList.add('do-glitch');
                setTimeout(() => {
                    navName.classList.remove('do-glitch');
                    startTypewriter();
                }, 800);

                // Fixed threshold logic ensuring tall sections trigger visibility correctly
                const revealElements = document.querySelectorAll('.reveal-element');
                const revealObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    root: null,
                    threshold: 0, 
                    rootMargin: "0px 0px -50px 0px" // Triggers just slightly before the element fully hits bottom
                });

                revealElements.forEach(el => revealObserver.observe(el));
            }

            // --- 08. Typewriter Effect ---
            function startTypewriter() {
                const target = document.getElementById('typewriter');
                const text = "I deploy websites in 24–72 hours. Not because I rush —\nbecause I've built the system that makes speed the default.";
                let i = 0;
                let currentText = "";
                const speed = 2500 / text.length; 
                
                function type() {
                    if (i < text.length) {
                        const char = text.charAt(i) === '\n' ? '<br class="hidden md:block">' : text.charAt(i);
                        currentText += char;
                        target.innerHTML = currentText + '<span class="typewriter-cursor"></span>';
                        i++;
                        setTimeout(type, speed);
                    } else {
                        setTimeout(() => {
                            target.innerHTML = currentText; 
                        }, 2000);
                    }
                }
                type();
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
      

<div className="fixed inset-0 z-[10000] bg-[#080808] flex items-center justify-center" id="loader">
<div className="font-mono text-sm tracking-widest text-secondary" id="loader-counter">00%</div>
</div>

<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<nav className="fixed top-0 w-full h-16 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300" id="navbar">
<div className="font-syne text-sm font-bold tracking-wide text-primary glitch-text" data-text="CHIRAG KHAIRE" id="nav-name">
            CHIRAG KHAIRE
        </div>
<a className="hover-target inline-flex relative p-[1px] rounded-md overflow-hidden group" href="#contact">
<div className="absolute inset-0 bg-gradient-to-r from-accent via-[#60A5FA] to-accent animate-gradient-border"></div>
<div className="relative bg-accent px-5 py-2.5 rounded-[5px] text-white font-outfit text-sm font-light transition-transform duration-300 group-hover:scale-[1.02]">
                Let's work. →
            </div>
</a>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.04] opacity-0 transition-opacity duration-300" id="nav-border"></div>
</nav>
<main className="w-full max-w-6xl mx-auto px-6 md:px-12">

<section className="min-h-[100svh] pt-32 pb-20 md:py-[7.5rem] flex flex-col md:flex-row items-center gap-12 md:gap-8 reveal-element">

<div className="w-full h-[17.5rem] rounded-xl bg-surface border border-white/[0.06] flex items-center justify-center md:hidden overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="font-mono text-xs text-muted text-center tracking-widest">EDITORIAL PHOTO<br/>PLACEHOLDER</span>
</div>
<img alt="" className="w-full h-full object-cover object-top opacity-0" src=""/>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start justify-center">
<span className="font-mono text-xs tracking-widest text-accent mb-6">DIGITAL INFRASTRUCTURE</span>
<h1 className="font-syne text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                    While you were<br/>planning, someone<br/>else went live.
                </h1>
<p className="font-outfit text-base md:text-lg font-extralight text-secondary leading-relaxed mb-8 min-h-[4rem] md:min-h-[3.5rem]" id="typewriter"></p>
<p className="font-mono text-xs text-muted mt-2">
                    Execution is the only strategy that compounds.
                </p>
<div className="mt-10 mb-6 magnetic-wrapper hover-target">
<a className="magnetic-btn inline-flex relative p-[2px] rounded-md overflow-hidden group" href="#contact">
<div className="absolute inset-0 bg-gradient-to-r from-accent via-[#93C5FD] to-accent animate-gradient-border z-0"></div>
<div className="relative z-10 bg-accent px-7 py-3.5 rounded-[4px] text-white font-outfit text-sm font-light flex items-center gap-2 transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]">
                            Let's work. →
                        </div>
</a>
</div>
<div className="flex gap-6 mt-5 font-outfit text-xs md:text-sm text-[#555555]">
<a className="hover-target hover:text-primary transition-colors duration-200" href="#">X (Twitter)</a>
<a className="hover-target hover:text-primary transition-colors duration-200" href="#">LinkedIn</a>
</div>
</div>

<div className="hidden md:flex w-1/2 h-[80vh] min-h-[600px] rounded-xl bg-surface border border-white/[0.06] items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="font-mono text-xs text-muted text-center tracking-widest">EDITORIAL PHOTO<br/>PLACEHOLDER</span>
</div>
<img alt="" className="w-full h-full object-cover opacity-0" src=""/>
</div>
</section>

<section className="py-20 md:py-[7.5rem] flex flex-col items-center reveal-element">
<div className="text-center mb-12">
<span className="font-mono text-xs tracking-widest text-accent mb-4 block">WHAT I DEPLOY</span>
<h2 className="font-syne text-4xl md:text-5xl font-semibold tracking-tight">One offer.<br/>Delivered with precision.</h2>
</div>
<div className="w-full max-w-[42.5rem] bg-surface backdrop-blur-md rounded-xl p-6 md:p-12 border border-white/[0.06] card-pulse transition-all duration-400 ease-out hover:!shadow-[0_0_40px_rgba(59,130,246,0.2),0_0_80px_rgba(59,130,246,0.08)] hover:!border-accent/50 hover-target">
<span className="font-mono text-xs tracking-wider text-accent mb-6 block">RAPID WEBSITE DEPLOYMENT</span>
<h3 className="font-syne text-3xl font-semibold tracking-tight mb-4">You don't have weeks.<br/>Neither do I.</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8] mb-8">
                    I take your idea — your offer, your positioning, your intent —<br className="hidden md:block"/>
                    and deploy it as a website that works the moment it goes live.
                    <br/><br/>
                    No mood boards. No three-week timelines.<br/>
                    No revision loops that kill momentum.
                    <br/><br/>
                    I use Aura, AI systems, and a deployment process I've refined<br className="hidden md:block"/>
                    to remove every unnecessary step between brief and live.
                </p>
<ul className="font-outfit text-sm text-[#666666] leading-loose mb-8">
<li>— Full single-page system, structured for conversion</li>
<li>— Copy written, placed, and calibrated</li>
<li>— Mobile-ready on delivery</li>
<li>— Live within 72 hours of brief</li>
</ul>
<div className="font-syne text-2xl font-bold text-primary mb-2">Starting from ₹3,000</div>
<div className="mt-6 magnetic-wrapper inline-block">
<a className="magnetic-btn inline-flex relative p-[2px] rounded-md overflow-hidden group" href="#contact">
<div className="absolute inset-0 bg-gradient-to-r from-accent via-[#93C5FD] to-accent animate-gradient-border z-0"></div>
<div className="relative z-10 bg-accent px-7 py-3.5 rounded-[4px] text-white font-outfit text-sm font-light flex items-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
                            Let's work. →
                        </div>
</a>
</div>
</div>
<p className="font-mono text-xs text-[#333333] text-center mt-6">
                If your timeline is "sometime next month" — this isn't for you.
            </p>
</section>

<section className="py-20 md:py-[7.5rem] reveal-element flashlight-container" id="systems-section">
<div className="flashlight-content">
<div className="mb-12">
<span className="font-mono text-xs tracking-widest text-accent mb-4 block">SYSTEMS DEPLOYED</span>
<h2 className="font-syne text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                        Every project enters as a problem.<br/>
                        It leaves as a running system.
                    </h2>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0">

<div className="flex-none w-[85vw] md:w-[32.5rem] snap-start bg-surface backdrop-blur-xl border border-white/[0.07] rounded-xl p-6 md:p-10 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_60px_rgba(59,130,246,0.06)] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.1)] md:shadow-none hover-target">
<span className="font-mono text-xs tracking-wider text-accent mb-2 block">PROJECT: KITCHEN</span>
<h3 className="font-syne text-xl font-semibold tracking-tight mb-6">Content Production OS</h3>
<div className="w-full h-[13.75rem] bg-white/[0.02] border border-white/[0.05] rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
<span className="font-mono text-[0.625rem] text-[#333]">VISUAL PLACEHOLDER</span>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-0" src=""/>
</div>
<span className="font-mono text-xs text-[#555] mb-2 block">PROBLEM</span>
<p className="font-outfit text-sm md:text-base font-extralight text-secondary leading-[1.8] mb-6">
                            The problem wasn't creativity. It was structure.<br/>
                            Ideas existed. A pipeline didn't.<br/><br/>
                            I built a repeatable weekly production system —<br/>
                            from ideation to distribution. No more blank-page<br/>
                            paralysis. No more inconsistent output.
                        </p>
<span className="font-mono text-xs text-[#555] mb-2 block">OUTCOME</span>
<p className="font-outfit text-sm md:text-base font-extralight text-secondary leading-[1.8]">
                            A content engine that runs the same way<br/>
                            whether motivation is high or not.<br/>
                            That's what a system does.<br/>
                            It removes dependency on conditions.
                        </p>
</div>

<div className="flex-none w-[85vw] md:w-[32.5rem] snap-start bg-surface backdrop-blur-xl border border-white/[0.07] rounded-xl p-6 md:p-10 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_60px_rgba(59,130,246,0.06)] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.1)] md:shadow-none hover-target">
<span className="font-mono text-xs tracking-wider text-accent mb-2 block">PROJECT: XEUS.ARC</span>
<h3 className="font-syne text-xl font-semibold tracking-tight mb-6">Digital Presence Deployment</h3>
<div className="w-full h-[13.75rem] bg-white/[0.02] border border-white/[0.05] rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
<span className="font-mono text-[0.625rem] text-[#333]">VISUAL PLACEHOLDER</span>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-0" src=""/>
</div>
<span className="font-mono text-xs text-[#555] mb-2 block">PROBLEM</span>
<p className="font-outfit text-sm md:text-base font-extralight text-secondary leading-[1.8] mb-6">
                            The problem was invisibility.<br/>
                            Skills existed. A signal didn't.<br/><br/>
                            I designed and deployed a perception engine —<br/>
                            a single-page system built to shape how a visitor<br/>
                            thinks within the first scroll.
                        </p>
<span className="font-mono text-xs text-[#555] mb-2 block">OUTCOME</span>
<p className="font-outfit text-sm md:text-base font-extralight text-secondary leading-[1.8]">
                            Identity. Offer. Proof. Contact.<br/>
                            Structured in sequence. Deployed in under 72 hours.<br/>
                            From zero presence to fully operational.<br/>
                            This site is the proof of concept.
                        </p>
</div>
</div>
<div className="md:hidden flex justify-center mt-6">
<span className="font-mono text-[0.625rem] text-muted flex items-center gap-2">SWIPE <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon></span>
</div>
<div className="hidden md:flex justify-end mt-4 pr-4">
<span className="font-mono text-xs text-muted flex items-center gap-2">SCROLL <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
</div>
</div>
</section>

<section className="py-20 md:py-[7.5rem] reveal-element flashlight-container" id="thinking-section">
<div className="flashlight-content">
<div className="mb-16">
<span className="font-mono text-xs tracking-widest text-accent mb-4 block">THINKING</span>
<h2 className="font-syne text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                        This is how I see it.<br/>
                        Agree or don't —<br/>
                        but you won't forget it.
                    </h2>
</div>
<div className="flex flex-col border-t border-white/[0.05]">

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/[0.05] hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">01</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">01</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON SPEED</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                Speed is not about working fast.<br/>
                                It's about having already solved<br/>
                                the problems that slow everyone else down.<br/><br/>
                                When I deliver a site in 72 hours,<br/>
                                I'm not cutting corners.<br/>
                                I'm operating from a system<br/>
                                that removed the corners entirely.<br/><br/>
                                Most builders spend the first week<br/>
                                in back-and-forth. I spend it shipping.<br/><br/>
                                That's not hustle. That's architecture.
                            </p>
</div>
</div>

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/[0.05] hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">02</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">02</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON WEBSITES</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                A website is not a design project.<br/>
                                It is a decision-making environment.<br/><br/>
                                Every pixel, every line of copy,<br/>
                                every second of load time<br/>
                                is either moving your visitor<br/>
                                toward a decision — or away from it.<br/><br/>
                                Most websites move people away.<br/>
                                Not because they're ugly.<br/>
                                Because they're unclear.<br/><br/>
                                Clarity converts. Everything else is decoration.
                            </p>
</div>
</div>

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/[0.05] hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">03</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">03</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON POSITIONING</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                Nobody wakes up thinking:<br/>
                                "I need a freelancer."<br/><br/>
                                They wake up thinking:<br/>
                                "I need this problem gone."<br/><br/>
                                If your website reads like a service menu,<br/>
                                you've already lost. You're competing on price.<br/><br/>
                                But if your site makes the visitor feel<br/>
                                like they've found the only person<br/>
                                who actually understands their problem —<br/>
                                you've won before the conversation starts.<br/><br/>
                                That's positioning. Not what you offer.<br/>
                                How they feel when they find you.
                            </p>
</div>
</div>

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/[0.05] hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">04</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">04</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON AI</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                AI didn't level the playing field.<br/>
                                It separated it further.<br/><br/>
                                The builders using AI as a tool<br/>
                                inside a clear system —<br/>
                                they're moving faster than agencies<br/>
                                with ten-person teams.<br/><br/>
                                The builders using AI as a crutch —<br/>
                                they're producing more average, faster.<br/><br/>
                                I use AI to compress execution time.<br/>
                                Not to replace thinking.<br/>
                                The thinking is still mine.<br/>
                                That's the part that matters.
                            </p>
</div>
</div>

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/[0.05] hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">05</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">05</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON CLIENTS</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                The clients worth working with<br/>
                                already know what they want.<br/>
                                They're not looking for someone<br/>
                                to explain the internet to them.<br/><br/>
                                They're looking for someone<br/>
                                who can take their vision<br/>
                                and make it real — fast, clean, without friction.<br/><br/>
                                Those clients don't haggle.<br/>
                                They don't disappear after the brief.<br/>
                                They move.<br/><br/>
                                I built this site to find them.<br/>
                                And to make sure everyone else<br/>
                                self-selects out before reaching the contact page.
                            </p>
</div>
</div>

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/[0.05] hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">06</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">06</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON SYSTEMS</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                A system is not a process.<br/>
                                A process is a sequence of steps.<br/>
                                A system is a sequence of steps<br/>
                                that produces the same output<br/>
                                regardless of who runs it or what day it is.<br/><br/>
                                I build systems for websites.<br/>
                                The same quality. The same speed.<br/>
                                The same outcome — every time.<br/><br/>
                                That's the difference between<br/>
                                a builder and an operator.
                            </p>
</div>
</div>

<div className="py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 hover-target bg-transparent hover:bg-surface/50 transition-colors duration-300 px-4 -mx-4 md:px-8 md:-mx-8 rounded-lg group">
<div className="font-syne text-7xl font-bold text-white/[0.04] md:w-24 leading-none hidden md:block group-hover:text-accent/10 transition-colors">07</div>
<div className="font-mono text-xs tracking-wider text-accent md:hidden">07</div>
<div className="flex-1">
<h3 className="font-syne text-xl font-semibold tracking-tight mb-4">ON THE LONG GAME</h3>
<p className="font-outfit text-base font-extralight text-secondary leading-[1.8]">
                                I'm not building a portfolio.<br/>
                                I'm not collecting gigs.<br/>
                                I'm building infrastructure.<br/><br/>
                                The websites I build today<br/>
                                are proof of concept for the systems<br/>
                                I'll be deploying in two years.<br/><br/>
                                Every project is a data point.<br/>
                                Every client is a case study.<br/>
                                Every delivery is a demonstration<br/>
                                of what I can compress, deploy,<br/>
                                and make run without breaking.<br/><br/>
                                I'm not here for quick money.<br/>
                                I'm here to build something that compounds.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-[7.5rem] flex flex-col items-center text-center reveal-element" id="contact">
<div className="max-w-[37.5rem] w-full">
<span className="font-mono text-xs tracking-widest text-accent mb-6 block">INITIATE</span>
<h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    You've read this far.<br/>
                    You already know<br/>
                    if this is for you.
                </h2>
<p className="font-outfit text-base md:text-[1.0625rem] font-extralight text-secondary leading-[1.8] mb-12">
                    One message.<br/>
                    Tell me what you're building and when you need it live.<br/>
                    I'll tell you exactly what I can deploy and how fast.<br/><br/>
                    No forms. No discovery decks.<br/>
                    Just a direct line to someone who will actually execute.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">

<a className="hover-target inline-flex relative p-[2px] rounded-md overflow-hidden group w-full md:w-auto" href="https://wa.me/918097215778" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-accent via-[#93C5FD] to-accent animate-gradient-border z-0"></div>
<div className="relative z-10 w-full bg-accent px-8 py-[0.875rem] rounded-[4px] text-white font-outfit text-sm font-light flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
                            WhatsApp →
                        </div>
</a>

<a className="hover-target inline-flex relative p-[1px] rounded-md overflow-hidden group w-full md:w-auto" href="mailto:chiragkhairex@gmail.com">
<div className="absolute inset-0 bg-gradient-to-r from-accent via-[#60A5FA] to-accent animate-gradient-border z-0"></div>
<div className="relative z-10 w-full bg-bg px-8 py-[0.875rem] rounded-[5px] text-accent font-outfit text-sm font-light flex items-center justify-center gap-2 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                            Email →
                        </div>
</a>
</div>
<p className="font-mono text-xs text-[#333333] mt-8">
                    Fast decisions only.<br/>
                    If you need a week to decide — the momentum is already gone.
                </p>
</div>
</section>
</main>

<footer className="w-full border-t border-white/[0.04] pt-20 pb-10 flex flex-col items-center text-center reveal-element">
<h4 className="font-syne text-base font-bold tracking-wide">CHIRAG KHAIRE</h4>
<p className="font-outfit text-xs text-muted mt-2 font-light">I build the infrastructure. You run it.</p>
<div className="flex gap-8 mt-6 font-outfit text-xs text-[#555555]">
<a className="hover-target hover:text-primary transition-colors duration-200" href="#">X (Twitter)</a>
<a className="hover-target hover:text-primary transition-colors duration-200" href="#">LinkedIn</a>
</div>
<p className="font-mono text-xs text-[#2a2a2a] mt-10">chiragkhairex.build</p>
</footer>


    </>
  );
}
