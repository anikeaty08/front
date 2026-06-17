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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Initialize Lucide Icons
            lucide.createIcons({
                strokeWidth: 1.5
            });

            // 1. Navbar Morph on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#F5F0EA]/80', 'backdrop-blur-xl', 'border-[#C9B08A]/30', 'text-[#6B4F3F]', 'shadow-sm');
                    navbar.classList.remove('text-[#FAF7F2]', 'border-transparent');
                } else {
                    navbar.classList.remove('bg-[#F5F0EA]/80', 'backdrop-blur-xl', 'border-[#C9B08A]/30', 'text-[#6B4F3F]', 'shadow-sm');
                    navbar.classList.add('text-[#FAF7F2]', 'border-transparent');
                }
            });

            // 2. Hero Entrance Animation
            gsap.from(".hero-elem", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // 3. Global Section Reveal
            gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            // 4. Interactive Artifact: Shuffler
            const cards = [document.getElementById('shuffler-1'), document.getElementById('shuffler-2'), document.getElementById('shuffler-3')];
            let currentIndex = 0;
            
            function shuffleCards() {
                cards.forEach((card, index) => {
                    card.classList.remove('z-30', 'z-20', 'z-10', 'translate-y-0', 'translate-y-3', 'translate-y-6', 'scale-100', 'scale-95', 'scale-90', 'opacity-100', 'opacity-60', 'opacity-30');
                    
                    let relativeIndex = (index - currentIndex + 3) % 3;
                    
                    if (relativeIndex === 0) {
                        card.classList.add('z-30', 'translate-y-0', 'scale-100', 'opacity-100');
                    } else if (relativeIndex === 1) {
                        card.classList.add('z-20', 'translate-y-3', 'scale-95', 'opacity-60');
                    } else {
                        card.classList.add('z-10', 'translate-y-6', 'scale-90', 'opacity-30');
                    }
                });
                currentIndex = (currentIndex + 1) % 3;
            }
            setInterval(shuffleCards, 3000);

            // 5. Interactive Artifact: Typewriter
            const messages = [
                "Booking: Bachelorette Flow — 8 guests",
                "Session: Corp Team Reset — Chair Yoga",
                "Inquiry: K-5 Mindfulness Series"
            ];
            let msgIndex = 0;
            let charIndex = 0;
            let currentText = '';
            let isDeleting = false;
            const typeTarget = document.getElementById('typewriter');

            function typeWriter() {
                const fullText = messages[msgIndex];
                
                if (isDeleting) {
                    currentText = fullText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    currentText = fullText.substring(0, charIndex + 1);
                    charIndex++;
                }

                typeTarget.textContent = currentText;

                let typeSpeed = isDeleting ? 30 : 80;

                if (!isDeleting && currentText === fullText) {
                    typeSpeed = 2000; 
                    isDeleting = true;
                } else if (isDeleting && currentText === '') {
                    isDeleting = false;
                    msgIndex = (msgIndex + 1) % messages.length;
                    typeSpeed = 500; 
                }

                setTimeout(typeWriter, typeSpeed);
            }
            setTimeout(typeWriter, 1000);

            // 6. Interactive Artifact: Scheduler Cursor
            const schedCells = document.querySelectorAll('.sched-cell');
            const cursor = document.getElementById('sched-cursor');
            
            if(cursor && schedCells.length) {
                let schedTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
                
                schedCells.forEach((cell) => {
                    schedTl.to(cursor, {
                        x: () => cell.offsetLeft + cell.offsetWidth/2,
                        y: () => cell.offsetTop + cell.offsetHeight/2,
                        duration: 0.8,
                        ease: "power2.inOut"
                    })
                    .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) 
                    .to(cell, { backgroundColor: '#C86B4A', borderColor: '#C86B4A', duration: 0.2 }, "-=0.1"); 
                });
                schedTl.to(cursor, { x: -10, y: -10, duration: 1, ease: "power2.inOut", delay: 1 });
                schedTl.to(schedCells, { backgroundColor: '#FAF7F2', borderColor: 'rgba(216,207,196,0.5)', duration: 0.5 }, "-=1");
            }

            // 7. Philosophy Parallax 
            gsap.to("#philosophy-bg", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#philosophy-bg",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 8. Sticky Cards Fade Backward
            const stickyCards = gsap.utils.toArray('.sticky-card');
            stickyCards.forEach((card, index) => {
                if (index < stickyCards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.3,
                        transformOrigin: "top center",
                        scrollTrigger: {
                            trigger: stickyCards[index + 1],
                            start: "top bottom-=10%",
                            end: "top top+=128",
                            scrub: true,
                        }
                    });
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
      
<div className="noise-bg"></div>

<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] md:w-[90vw] lg:w-[70vw] rounded-full transition-all duration-500 py-3 px-6 md:px-8 flex justify-between items-center border" id="navbar">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center text-[#E8A820]">
<i className="absolute animate-[spin_20s_linear_infinite] opacity-80 w-full h-full" data-lucide="sun"></i>
<span className="cursor-pointer text-2xl text-current font-script z-10 mt-1 relative -rotate-12" onclick="window.location.href='https://assets.cdn.filesafe.space/81zSy1lld19uboqRqOxD/media/69a8523d4b6c778de003dee9.png'" role="button">W</span>
</div>
<span className="font-serif italic tracking-tight text-xl md:text-2xl hidden md:block mt-1">Wyld Spirits Yoga</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-base font-normal tracking-wide">
<a className="hover:text-[#C86B4A] transition-colors relative group" href="#services">Services<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C86B4A] transition-all group-hover:w-full"></span></a>
<a className="hover:text-[#C86B4A] transition-colors relative group" href="#locations">Where I Teach<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C86B4A] transition-all group-hover:w-full"></span></a>
<a className="hover:text-[#C86B4A] transition-colors relative group" href="#events">Events<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C86B4A] transition-all group-hover:w-full"></span></a>
<a className="hover:text-[#C86B4A] transition-colors relative group" href="#about">About<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C86B4A] transition-all group-hover:w-full"></span></a>
</div>
<div className="flex items-center gap-4">
<a className="btn-cinematic bg-[#C86B4A] text-[#FAF7F2] px-5 py-2.5 rounded-full text-sm md:text-base font-normal tracking-wide z-10 border border-[#C86B4A]/20" href="#get-started">
<span className="relative z-10">Book a Class</span>
<div className="bg-slide bg-[#A65639]"></div>
</a>
<button className="lg:hidden text-current p-1">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-[100dvh] w-full flex items-end justify-start pb-[15vh] px-[5vw] md:px-[10vw] overflow-hidden bg-[#2C2018]">
<div className="absolute inset-0 w-full h-full">
<img alt="Outdoor Yoga" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-[#3F5D4A] via-[#3F5D4A]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-r from-[#2C2018]/50 to-transparent w-1/2 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 w-full max-w-4xl text-[#FAF7F2] flex flex-col items-start hero-content">
<span className="font-serif font-normal text-2xl md:text-4xl tracking-tight mb-[-0.5rem] md:mb-[-1rem] text-[#C9B08A] hero-elem">Untamed</span>
<h1 className="font-serif italic text-[15vw] md:text-[8vw] leading-none tracking-tight pr-4 hero-elem" style={{fontWeight: '400'}}>Movement</h1>
<p className="font-sans font-thin text-lg md:text-2xl text-[#D8CFC4] mt-4 md:mt-6 tracking-wide max-w-md hero-elem">Grounded Spirit</p>
<div className="mt-8 md:mt-12 hero-elem">
<a className="btn-cinematic inline-flex items-center gap-3 bg-[#C86B4A] text-[#FAF7F2] px-8 py-4 rounded-full text-base md:text-lg font-normal tracking-wide z-10" href="#services">
<span className="relative z-10">Find Your Flow</span>
<i className="w-5 h-5 relative z-10 mt-[1px]" data-lucide="arrow-right"></i>
<div className="bg-slide bg-[#A65639]"></div>
</a>
</div>
</div>
</header>

<section className="py-[15vh] px-[5vw] md:px-[10vw] relative z-20 bg-[#F5F0EA] rounded-t-[2rem] md:rounded-t-[3rem] -mt-[2rem] md:-mt-[3rem] shadow-[0_-1rem_3rem_rgba(44,32,24,0.1)]" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 max-w-2xl gs-reveal">
<span className="font-mono text-sm tracking-widest text-[#C86B4A] uppercase mb-4 block">Offerings</span>
<h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight text-[#2C2018] mb-6">Yoga That Meets You Where You Are</h2>
<p className="leading-relaxed md:text-xl text-lg font-light text-[#6B4F3F]">From wineries to schoolyards, corporate boardrooms to your backyard — Wyld Spirits brings the practice to you.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

<div className="bg-[#FAF7F2] border border-[#C9B08A]/30 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col gs-reveal">
<div className="flex items-center justify-between mb-8">
<h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#2C2018]">Community &amp; Events</h3>
<i className="w-6 h-6 text-[#3F5D4A]" data-lucide="users"></i>
</div>
<div className="relative h-32 w-full mb-8">
<div className="shuffler-card absolute inset-0 bg-[#F5F0EA] border border-[#D8CFC4] rounded-xl p-4 flex items-center justify-center text-center shadow-sm z-30" id="shuffler-1">
<span className="font-serif text-lg text-[#3F5D4A] tracking-tight">Pop-Up Classes &amp; Festivals</span>
</div>
<div className="shuffler-card absolute inset-0 bg-[#F5F0EA] border border-[#D8CFC4] rounded-xl p-4 flex items-center justify-center text-center shadow-sm z-20 translate-y-3 scale-95 opacity-60" id="shuffler-2">
<span className="font-serif text-lg text-[#3F5D4A] tracking-tight">Goat Yoga &amp; Themed Events</span>
</div>
<div className="shuffler-card absolute inset-0 bg-[#F5F0EA] border border-[#D8CFC4] rounded-xl p-4 flex items-center justify-center text-center shadow-sm z-10 translate-y-6 scale-90 opacity-30" id="shuffler-3">
<span className="font-serif text-lg text-[#3F5D4A] tracking-tight">Winery Yoga &amp; Gatherings</span>
</div>
</div>
<p className="md:text-lg leading-relaxed text-base font-light text-[#6B4F3F] mt-auto">Accessible, inclusive offerings that bring people together through movement, laughter, and shared experience.</p>
</div>

<div className="bg-[#FAF7F2] border border-[#C9B08A]/30 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col gs-reveal">
<div className="flex items-center justify-between mb-8">
<h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#2C2018]">Private &amp; Corporate</h3>
<div className="flex items-center gap-2 bg-[#F5F0EA] px-3 py-1 rounded-full border border-[#D8CFC4]">
<div className="w-1.5 h-1.5 rounded-full bg-[#C86B4A] animate-pulse"></div>
<span className="font-mono text-xs text-[#6B4F3F] uppercase tracking-wider">Live</span>
</div>
</div>
<div className="bg-[#2C2018] rounded-xl p-5 mb-8 h-32 overflow-hidden relative shadow-inner">
<div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#2C2018] to-transparent z-10"></div>
<div className="font-mono text-sm md:text-base text-[#D8CFC4] leading-relaxed">
<span className="text-[#3F5D4A]">&gt;</span> <span id="typewriter">B</span><span className="w-2 h-4 bg-[#C86B4A] inline-block align-middle ml-1 cursor-blink"></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#2C2018] to-transparent z-10"></div>
</div>
<p className="md:text-lg leading-relaxed text-base font-light text-[#6B4F3F] mt-auto">Custom-tailored sessions for birthdays, team-building, workplace wellness, and youth programs.</p>
</div>

<div className="bg-[#FAF7F2] border border-[#C9B08A]/30 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col gs-reveal">
<div className="flex items-center justify-between mb-8">
<h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#2C2018]">Ongoing Classes</h3>
<i className="w-6 h-6 text-[#3F5D4A]" data-lucide="calendar"></i>
</div>
<div className="h-32 w-full mb-8 relative border border-[#D8CFC4] rounded-xl bg-[#F5F0EA] p-3 flex flex-col">
<div className="grid grid-cols-7 gap-1 text-center font-mono text-xs text-[#C9B08A] mb-2">
<span>S</span><span>M</span><span>T</span><span>W</span><span className="">T</span><span>F</span><span>S</span>
</div>
<div className="grid grid-cols-7 gap-1 flex-1 relative" id="schedule-grid">
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50 sched-cell" data-day="tue" style={{borderColor: 'rgb(200, 107, 74)', backgroundColor: 'rgb(200, 107, 74)'}}></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50 sched-cell" data-day="wed" style={{borderColor: 'rgb(200, 107, 74)', backgroundColor: 'rgb(200, 107, 74)'}}></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50 sched-cell" data-day="thu" style={{borderColor: 'rgba(216, 207, 196, 0.5)', backgroundColor: 'rgb(250, 247, 242)'}}></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50 sched-cell" data-day="sat" style={{borderColor: 'rgba(216, 207, 196, 0.5)', backgroundColor: 'rgb(250, 247, 242)'}}></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<div className="rounded bg-[#FAF7F2] border border-[#D8CFC4]/50"></div>
<svg className="absolute w-4 h-4 text-[#2C2018] z-20 drop-shadow-md" fill="none" id="sched-cursor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{top: '-10px', left: '-10px'}} viewbox="0 0 24 24">
<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
<path d="M13 13l6 6"></path>
</svg></div>
</div>
<p className="md:text-lg leading-relaxed text-base font-light text-[#6B4F3F] mt-auto">Regular classes at partner studios across the DFW area — drop in or commit to a rhythm.</p>
</div>
</div>
</div>
</section>

<section className="py-[20vh] relative flex items-center justify-center overflow-hidden bg-[#3F5D4A]">
<div className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay" id="philosophy-bg">
<img alt="Rustic Wood Texture" className="w-full h-[120%] object-cover object-center" src="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-5xl px-[5vw] text-center flex flex-col items-center">
<p className="font-sans font-normal text-sm md:text-base tracking-[0.2em] text-[#C9B08A] uppercase mb-8 md:mb-12 gs-phil-text">Most yoga brands focus on: perfect poses, pristine studios, and Instagram aesthetics.</p>
<h2 className="font-serif italic text-4xl md:text-7xl lg:text-[6vw] leading-[1.2] text-[#FAF7F2] tracking-tight gs-phil-text" style={{fontWeight: '300'}}>
                We focus on: showing up <br className="hidden md:block"/>exactly as you are — <br className="hidden md:block"/>
<span className="text-[#C86B4A]">on grass, on concrete, <br className="hidden lg:block"/>with goats on your back.</span>
</h2>
</div>
</section>

<section className="relative bg-[#F5F0EA] pt-[10vh] pb-[20vh] px-[5vw] md:px-[10vw]" id="locations">
<div className="text-center mb-4 md:mb-10 gs-reveal">
<h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight text-[#2C2018] mb-4">Where I Teach</h2>
<p className="text-lg font-light text-[#6B4F3F]">Join the community in unique spaces.</p>
</div>
<div className="max-w-4xl mx-auto flex flex-col gap-[50vh] pb-[10vh] pt-[5vh]">

<div className="sticky top-32 bg-[#3F5D4A] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-16 items-center border border-[#6B4F3F]/30 z-10 transition-transform h-[36rem] md:h-[28rem] w-full sticky-card" style={{transformOrigin: '50% 0%'}}>
<div className="w-full md:w-1/3 flex justify-center items-center h-full">
<svg className="w-32 h-32 md:w-48 md:h-48 text-[#C9B08A] animate-[spin_40s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke-dasharray="4 4"></circle>
<circle cx="50" cy="50" r="30" strokeWidth="1"></circle>
<circle cx="50" cy="50" r="20" stroke-dasharray="2 6"></circle>
<path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="0.5"></path>
<path d="M22 22 L78 78 M22 78 L78 22" strokeWidth="0.5"></path>
</svg>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-center h-full">
<span className="font-mono text-sm tracking-widest text-[#C9B08A] mb-4 block">01 / Venues</span>
<h3 className="font-serif text-4xl md:text-5xl font-normal text-[#FAF7F2] mb-6 tracking-tight">Studio Partners</h3>
<ul className="space-y-4 font-sans text-base md:text-lg text-[#D8CFC4] font-thin">
<li className="flex items-start gap-3"><span className="text-[#C86B4A] mt-1">✦</span> Half Moon Yoga — Waxahachie (3rd Weds + select Sats)</li>
<li className="flex items-start gap-3"><span className="text-[#C86B4A] mt-1">✦</span> Crescent Yoga Studio — Midlothian (every other Tue)</li>
<li className="flex items-start gap-3"><span className="text-[#C86B4A] mt-1">✦</span> CrossFit Midlothian (every other Thu + every Sat)</li>
</ul>
</div>
</div>

<div className="sticky top-32 bg-[#2C2018] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-16 items-center border border-[#6B4F3F]/30 z-20 transition-transform h-[36rem] md:h-[28rem] w-full sticky-card" style={{transformOrigin: '50% 0%'}}>
<div className="w-full md:w-1/3 flex justify-center items-center relative overflow-hidden h-32 md:h-full">
<div className="absolute inset-0 bg-[radial-gradient(circle,#6B4F3F_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
<div className="w-full h-[1px] bg-[#C86B4A] absolute top-1/2 left-0 shadow-[0_0_10px_#C86B4A] animate-[translateY_3s_ease-in-out_infinite_alternate]" style={{animation: 'scan 3s ease-in-out infinite alternate'}}></div>
<style>@keyframes scan { 0% { top: 10%; } 100% { top: 90%; } }</style>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-center z-10 h-full">
<span className="font-mono text-sm tracking-widest text-[#C86B4A] mb-4 block">02 / Venues</span>
<h3 className="font-serif text-4xl md:text-5xl font-normal text-[#FAF7F2] mb-6 tracking-tight">Pop-Up Experiences</h3>
<ul className="space-y-4 font-sans text-base md:text-lg text-[#D8CFC4] font-thin">
<li className="flex items-start gap-3"><span className="text-[#3F5D4A] mt-1">✦</span> Sugar Ridge Winery — Special events &amp; ticketed flows</li>
<li className="flex items-start gap-3"><span className="text-[#3F5D4A] mt-1">✦</span> Apartment complexes — Poolside and courtyard sessions</li>
<li className="flex items-start gap-3"><span className="text-[#3F5D4A] mt-1">✦</span> Parks &amp; outdoor spaces — Community pop-ups across DFW</li>
</ul>
</div>
</div>

<div className="sticky top-32 bg-[#3F5D4A] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-16 items-center border border-[#6B4F3F]/30 z-30 transition-transform h-[36rem] md:h-[28rem] w-full sticky-card">
<div className="w-full md:w-1/3 flex justify-center items-center h-full">
<svg className="w-full h-24 md:h-32 text-[#C9B08A]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 200 50">
<path className="animate-[dash_3s_linear_infinite] [stroke-dasharray:400] [stroke-dashoffset:400]" d="M0 25 L40 25 L50 10 L60 40 L70 25 L130 25 L140 5 L150 45 L160 25 L200 25" strokeLinecap="round" strokeLinejoin="round"></path>
<style>@keyframes dash { to { stroke-dashoffset: 0; } }</style>
</svg>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-center h-full">
<span className="font-mono text-sm tracking-widest text-[#C9B08A] mb-4 block">03 / Venues</span>
<h3 className="font-serif text-4xl md:text-5xl font-normal text-[#FAF7F2] mb-6 tracking-tight">On-Site &amp; Mobile</h3>
<ul className="space-y-4 font-sans text-base md:text-lg text-[#D8CFC4] font-thin">
<li className="flex items-start gap-3"><span className="text-[#C86B4A] mt-1">✦</span> Corporate offices &amp; co-working spaces</li>
<li className="flex items-start gap-3"><span className="text-[#C86B4A] mt-1">✦</span> Schools &amp; youth programs (K–12 mindfulness)</li>
<li className="flex items-start gap-3"><span className="text-[#C86B4A] mt-1">✦</span> Private homes &amp; special life occasions</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-[15vh] px-[5vw] md:px-[10vw] bg-[#FAF7F2]" id="events">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 gs-reveal">
<div className="">
<h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight text-[#2C2018] mb-4">Upcoming Gatherings</h2>
<p className="text-lg font-light text-[#6B4F3F]">Join the community in unique spaces.</p>
</div>
<a className="font-mono text-sm tracking-widest text-[#3F5D4A] uppercase hover:text-[#C86B4A] transition-colors flex items-center gap-2" href="#contact">All Events <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="bg-[#C9B08A]/20 border border-[#C9B08A]/50 rounded-[2rem] p-8 md:p-10 flex flex-col gs-reveal hover:-translate-y-1 transition-transform duration-500">
<div className="font-mono text-sm md:text-base text-[#C86B4A] bg-[#C86B4A]/10 self-start px-3 py-1 rounded-full mb-6">Feb 28, 12:30 PM</div>
<h3 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-[#2C2018] mb-4">Sugar Ridge Winery Yoga</h3>
<p className="md:text-lg leading-relaxed flex-1 text-base font-light text-[#6B4F3F] mb-8">Flow among the vines. A grounded practice followed by community connection. Tickets available through Sugar Ridge Winery.</p>
<a className="btn-cinematic w-full text-center bg-[#3F5D4A] text-[#FAF7F2] px-6 py-3.5 rounded-xl text-base font-normal tracking-wide z-10 border border-[#3F5D4A]/20" href="#">
<span className="relative z-10">Get Tickets</span>
<div className="bg-slide bg-[#2A3F32]"></div>
</a>
</div>

<div className="bg-[#F5F0EA] border border-[#D8CFC4] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center items-center text-center gs-reveal hover:-translate-y-1 transition-transform duration-500 border-dashed">
<div className="w-12 h-12 rounded-full bg-[#D8CFC4]/50 flex items-center justify-center mb-6 text-[#6B4F3F]">
<i className="w-6 h-6" data-lucide="star"></i>
</div>
<h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#2C2018] mb-4">More events brewing</h3>
<p className="md:text-lg leading-relaxed text-base font-light text-[#6B4F3F] max-w-xs mb-8">Workshops &amp; pop-ups coming soon — including sessions at our new Midlothian space.</p>
<a className="font-mono text-sm tracking-widest text-[#C86B4A] uppercase hover:text-[#2C2018] transition-colors flex items-center gap-2" href="#contact">Stay Updated</a>
</div>
</div>
</div>
</section>

<section className="py-[15vh] px-[5vw] md:px-[10vw] bg-[#3F5D4A] rounded-[3rem] mx-4 md:mx-8 mb-[10vh]" id="get-started">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 md:mb-20 gs-reveal">
<h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] mb-6">Begin Your Practice</h2>
<p className="md:text-xl text-lg font-light text-[#D8CFC4] max-w-xl mx-auto">Choose how you want to move. Pricing varies by venue and experience type.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F5F0EA] rounded-[2rem] p-8 flex flex-col gs-reveal mt-0 md:mt-8">
<h3 className="font-serif text-3xl font-normal tracking-tight text-[#2C2018] mb-3">Drop In</h3>
<p className="flex-1 text-base font-light text-[#6B4F3F] mb-8">For those wanting to try a single class at any partner studio or open pop-up.</p>
<a className="w-full text-center border border-[#6B4F3F]/30 text-[#2C2018] px-6 py-3 rounded-xl text-base font-normal hover:bg-[#D8CFC4] transition-colors" href="#locations">View Schedule</a>
</div>

<div className="bg-[#C86B4A] rounded-[2rem] p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl gs-reveal">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2C2018] text-[#FAF7F2] text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#6B4F3F]">Recommended</div>
<h3 className="font-serif text-3xl font-normal tracking-tight text-[#FAF7F2] mb-3 mt-4">Book Private</h3>
<p className="flex-1 text-base font-light text-[#F5F0EA]/80 mb-8">Custom sessions for private events, corporate wellness, or one-on-one focused instruction.</p>
<a className="btn-cinematic w-full text-center bg-[#FAF7F2] text-[#C86B4A] px-6 py-3.5 rounded-xl text-base font-normal tracking-wide z-10 shadow-lg" href="#contact">
<span className="relative z-10">Request a Session</span>
<div className="bg-slide bg-[#F5F0EA]"></div>
</a>
</div>

<div className="bg-[#F5F0EA] rounded-[2rem] p-8 flex flex-col gs-reveal mt-0 md:mt-8">
<h3 className="font-serif text-3xl font-normal tracking-tight text-[#2C2018] mb-3">Join a Studio</h3>
<p className="flex-1 text-base font-light text-[#6B4F3F] mb-6">For ongoing classes at CrossFit Midlothian or dedicated spaces.</p>
<p className="text-xs text-[#6B4F3F]/70 font-mono mb-6 uppercase tracking-wide leading-relaxed">* Class packages available directly through studio partners.</p>
<a className="w-full text-center border border-[#6B4F3F]/30 text-[#2C2018] px-6 py-3 rounded-xl text-base font-normal hover:bg-[#D8CFC4] transition-colors" href="#">View Packages</a>
</div>
</div>
</div>
</section>

<section className="py-[15vh] px-[5vw] md:px-[10vw] bg-[#F5F0EA] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="lg:w-1/2 gs-reveal w-full">
<span className="font-script text-4xl md:text-5xl text-[#C86B4A] mb-4 block -rotate-3 origin-left tracking-tight">Meet your guide</span>
<h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight text-[#2C2018] mb-8 leading-[1.2]">A warm, inclusive space to move, breathe, and grow.</h2>
<div className="text-[#6B4F3F] text-lg md:text-xl font-thin leading-relaxed space-y-6 mb-12">
<p className="">Wyld Spirits Yoga brings accessible, grounding yoga to communities across the DFW area. Whether it's a winery patio, a CrossFit box, a school gymnasium, or your own backyard, every session is designed to meet you exactly where you are.</p>
<p className="">We believe the practice isn't about the shape of your body, but the state of your spirit. No perfect poses required — just a willingness to show up.</p>
</div>
<div className="flex flex-wrap text-sm text-[#2C2018] font-mono border-[#D8CFC4] border-t pt-8 gap-x-8 gap-y-4">
<div className="flex flex-col gap-1">
<span className="text-[#C86B4A] font-medium text-2xl font-sans tracking-tight">3+</span>
<span className="tracking-wider uppercase text-[#6B4F3F]">Partner Studios</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[#C86B4A] font-medium text-2xl font-sans tracking-tight">50+</span>
<span className="tracking-wider uppercase text-[#6B4F3F]">Events Hosted</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[#C86B4A] font-medium text-2xl font-sans tracking-tight">DFW</span>
<span className="tracking-wider uppercase text-[#6B4F3F]">Communities Served</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative gs-reveal">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
<img alt="Yoga instructor sitting in bound angle pose outdoors wearing a pink long-sleeve shirt and sunglasses" className="w-full h-full object-cover object-center" src="https://assets.cdn.filesafe.space/81zSy1lld19uboqRqOxD/media/69a84f6f6fa6586dfab2f912.png?w=800&amp;q=80"/>
<div className="bg-[#3F5D4A]/10 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://assets.cdn.filesafe.space/81zSy1lld19uboqRqOxD/media/69a84d69fa686428611e72f0.png'" role="button"></div>
</div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#C9B08A] rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
<div className="absolute -top-8 -right-8 w-40 h-40 bg-[#C86B4A] rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
</div>
</div>
</section>

<section className="py-[10vh] bg-[#F5F0EA] overflow-hidden border-t border-[#D8CFC4]/30">
<div className="mb-12 text-center px-[5vw]">
<h2 className="font-mono text-sm tracking-widest text-[#C86B4A] uppercase">Words from the Community</h2>
</div>
<div className="relative w-full flex flex-col gap-6">

<div className="flex w-[200%] gap-6 animate-marquee">
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Wyld Spirits made yoga feel approachable for the first time in my life. No judgment, just good energy."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">S</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Sarah M.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"The winery yoga events are my favorite weekend ritual. Wine + flow = magic."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">J</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Jessica K.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"She brought yoga to our office and the team hasn't stopped talking about it. Real impact."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">M</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Marcus T.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"I never thought I'd do yoga in a CrossFit gym, but it's exactly the mobility work I needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">D</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">David R.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Wyld Spirits made yoga feel approachable for the first time in my life. No judgment, just good energy."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">S</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Sarah M.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"The winery yoga events are my favorite weekend ritual. Wine + flow = magic."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">J</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Jessica K.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"She brought yoga to our office and the team hasn't stopped talking about it. Real impact."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">M</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Marcus T.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"I never thought I'd do yoga in a CrossFit gym, but it's exactly the mobility work I needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">D</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">David R.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Wyld Spirits made yoga feel approachable for the first time in my life. No judgment, just good energy."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">S</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Sarah M.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"The winery yoga events are my favorite weekend ritual. Wine + flow = magic."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">J</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Jessica K.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"She brought yoga to our office and the team hasn't stopped talking about it. Real impact."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">M</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Marcus T.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"I never thought I'd do yoga in a CrossFit gym, but it's exactly the mobility work I needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">D</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">David R.</span>
</div>
</div>
</div>

<div className="flex w-[200%] gap-6 animate-marquee-reverse -ml-[200px]">
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Exactly what my body needed after a long week. The outdoor setting changes everything."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">A</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Amanda L.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Grounded, real, and beautifully guided. Not your typical sterile studio class."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">E</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Elena P.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Booked her for a bachelorette and it was the highlight of the trip. So fun and relaxing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">C</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Chloe B.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"The perfect balance of strength and surrender. I sleep so well after her classes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">T</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Tyler W.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Exactly what my body needed after a long week. The outdoor setting changes everything."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">A</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Amanda L.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Grounded, real, and beautifully guided. Not your typical sterile studio class."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">E</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Elena P.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Booked her for a bachelorette and it was the highlight of the trip. So fun and relaxing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">C</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Chloe B.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"The perfect balance of strength and surrender. I sleep so well after her classes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">T</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Tyler W.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Exactly what my body needed after a long week. The outdoor setting changes everything."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">A</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Amanda L.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Grounded, real, and beautifully guided. Not your typical sterile studio class."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">E</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Elena P.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"Booked her for a bachelorette and it was the highlight of the trip. So fun and relaxing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">C</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Chloe B.</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#FAF7F2] p-8 rounded-[2rem] border border-[#D8CFC4]/50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 text-[#C9B08A]/40 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-[#2C2018] text-xl md:text-2xl leading-snug mb-6 tracking-tight">"The perfect balance of strength and surrender. I sleep so well after her classes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#D8CFC4] flex items-center justify-center font-mono text-xs text-[#6B4F3F]">T</div>
<span className="font-sans text-base font-normal text-[#6B4F3F]">Tyler W.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C2018] text-[#FAF7F2] rounded-t-[3rem] md:rounded-t-[4rem] pt-20 pb-8 px-[5vw] md:px-[10vw] mt-[-2rem] relative z-30" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-6">
<div className="relative w-10 h-10 flex items-center justify-center text-[#E8A820]">
<i className="absolute opacity-80 w-full h-full" data-lucide="sun"></i>
<span className="z-10 text-3xl text-current font-script mt-1 relative -rotate-12 cursor-pointer" onclick="window.location.href='https://assets.cdn.filesafe.space/81zSy1lld19uboqRqOxD/media/69a8523d4b6c778de003dee9.png'" role="button">W</span>
</div>
<span className="font-serif italic tracking-tight text-2xl">Wyld Spirits Yoga</span>
</div>
<p className="font-sans font-thin text-[#D8CFC4] text-base">Untamed Movement,<br/>Grounded Spirit.</p>
</div>
<div className="">
<h4 className="font-mono text-sm tracking-widest text-[#C9B08A] uppercase mb-6">Explore</h4>
<ul className="space-y-3 font-sans text-base font-thin text-[#D8CFC4]">
<li className=""><a className="hover:text-[#C86B4A] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#C86B4A] transition-colors" href="#locations">Where I Teach</a></li>
<li className=""><a className="hover:text-[#C86B4A] transition-colors" href="#events">Events</a></li>
</ul>
</div>
<div className="">
<h4 className="font-mono text-sm tracking-widest text-[#C9B08A] uppercase mb-6">Connect</h4>
<ul className="space-y-3 font-sans text-base font-thin text-[#D8CFC4]">
<li className=""><a className="hover:text-[#C86B4A] transition-colors flex items-center gap-2" href="tel:2149036937"><i className="w-4 h-4" data-lucide="phone"></i> 214-903-6937</a></li>
<li><a className="hover:text-[#C86B4A] transition-colors flex items-center gap-2" href="mailto:Wyldspiritsyoga@gmail.com"><i className="w-4 h-4" data-lucide="mail"></i> Wyldspiritsyoga@gmail.com</a></li>
</ul>
</div>
<div className="">
<h4 className="font-mono text-sm tracking-widest text-[#C9B08A] uppercase mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#6B4F3F] flex items-center justify-center hover:bg-[#3F5D4A] hover:border-[#3F5D4A] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="camera"></i>
</a>
<a className="w-10 h-10 rounded-full border border-[#6B4F3F] flex items-center justify-center hover:bg-[#3F5D4A] hover:border-[#3F5D4A] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users"></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#6B4F3F]/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-sans text-sm font-thin text-[#D8CFC4]/70">© 2025 Wyld Spirits Yoga. All rights reserved.</p>
<div className="flex items-center gap-2 bg-[#1A130E] px-3 py-1.5 rounded-full border border-[#6B4F3F]/30">
<div className="w-1.5 h-1.5 rounded-full bg-[#3F5D4A] shadow-[0_0_5px_#3F5D4A] animate-pulse"></div>
<span className="font-mono text-xs text-[#D8CFC4]/70 uppercase tracking-wider">System Operational</span>
</div>
</div>
</footer>



    </>
  );
}
