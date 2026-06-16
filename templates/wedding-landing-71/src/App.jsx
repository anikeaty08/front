import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'warm-almond': '#FFF8E1',
'organic-cream': '#FFFCF5',
'rose-gold': '#B76E79',
'antique-gold': '#C5A059',
'royal-gold': '#D4AF37',
'deep-charcoal': '#2F4F4F',
'ial-blue': '#87CEEB',
'neon-pink': '#FF69B4',
'hot-pink': '#FF1493',
'sunrise-red': '#E9967A',
'deep-orange': '#FF8C00',
'midnight-blue': '#191970',
'dusty-blue': '#6A8CAF',
'soft-sage': '#9CAF88',
'muted-coral': '#E8A598',
'warm-sand': '#D4C4A8',
},
fontFamily: {
'cinzel': ['"Cinzel"', 'serif'],
'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
'montserrat': ['"Montserrat"', 'sans-serif'],
'vibes': ['"Great Vibes"', 'cursive'],
'bubblegum': ['"Bubblegum Sans"', 'cursive'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out infinite 2s',
'float-slow': 'float 10s ease-in-out infinite',
'shimmer': 'shimmer 3s ease-in-out infinite',
'gradient-x': 'gradient-x 8s ease infinite',
'marquee-left': 'marquee-left 120s linear infinite',
'marquee-right': 'marquee-right 120s linear infinite',
'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
'sparkle': 'sparkle 1.5s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(-20px) rotate(2deg)' },
},
shimmer: {
'0%': { backgroundPosition: '-200% center' },
'100%': { backgroundPosition: '200% center' },
},
'gradient-x': {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
},
'marquee-left': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
'marquee-right': {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0)' },
},
'pulse-glow': {
'0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
'50%': { transform: 'scale(1.03)', boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
},
'sparkle': {
'0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
'50%': { opacity: '1', transform: 'scale(1.2)' },
},
},
},
},
}



        // ============ INITIALIZATION ============
        gsap.registerPlugin(ScrollTrigger);
        
        // Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        
        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
        
        // ============ PRELOADER ============
        window.addEventListener('load', () => {
            setTimeout(() => {
                const preloader = document.getElementById('preloader');ap.to(preloader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        preloader.style.display = 'none';
                        initHeroAnimations();
                    }
                });
            }, 1500);
        });
        
        // ============ COUNTDOWN ============
        function updateCountdown() {
            const wedding = new Date('May 23, 2026 14:30:00').getTime();
            const now = new Date().getTime();
            const gap = wedding - now;
            
            const days = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(3, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // ============ NAVBAR SCROLL EFFECT ============
        window.addEventListener('scroll', () => {
            const = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('frosted-glass', 'shadow-sm');
            } else {
                nav.classList.remove('frosted-glass', 'shadow-sm');
            }
        });
        
        // ============ MENU TOGGLE ============
        const menuTrigger = document.getElementById('menu-trigger');
        const menuOverlay = document.getElementById('menu-overlay');
        let
        menuTrigger.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                menuOverlay.classList.remove('pointer-events-none', 'opacity-0');
                menuOverlay.classList.add('pointer-events-auto', 'opacity-100');
            } else {
                menuOverlay.classList.add('pointer-events-none', 'opacity-0');
                menuOverlay.classList.remove('pointer-events-auto', 'opacity-100');
            }
        });
        
        // Close menu on link click
        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                menuOverlay.classList.add('pointer-events-none', 'opacity-0');
                menuOverlay.classList.remove('pointer-events-auto', 'opacity-100');
            });
        });
        
        // ============ HERO ANIMATIONS ============
        function initHeroAnimations() {
            const heroImage = document.getElementById('hero-image');
            const assetLeft = document.getElementById('asset-left');
            const assetRight = document.getElementById('asset-right');
            const heroText = document.getElementById('hero-text');
            
            // Initial entrance animation
            const tl = gsap.timeline();
            
            tl.to(heroImage, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'power3.out'
            })
            .to(assetLeft, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, '-=0.8')
            .to(assetRight, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, '-=0.6');
            
            // Scroll-triggered parallax & reveal
            gsap.to(heroImage, {
                scale: 0.7,
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
            
            gsap.to(assetLeft, {
                x: -200,
                rotation: -20,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#hero',
                    
                    end: 'bottom top1
                }
            });
            
            gsap.to(assetRight, {
                x: 200,
                rotation: 20,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
            
            gsap.to(heroText, {
                opacity: 1,
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: '50% top',
                    scrub: 1
                }
            });
        }
        
        // ============ CUSTOM CURSOR ============
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        
        if (window.matchMedia('(pointer: fine)').matches) {
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursorDot, { x: e.clientX - 4, y: e.clientY - 4, duration: 0.1(cursorRing, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
            });
            
            document.querySelectorAll('a, button, .cursor-pointer').forEach(el => {
                el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
            });
        }
        
        // ============ SPARK TEXT ANIMATION ============
        gsap.utils.toArray('.spark-line').forEach((line, i) => {
            gsap.from(line, {
                opacity: 0,
                y: 30,
                duration: ,
                delay: i * 0.15,
                scrollTrigger: {
                    trigger: line,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
        
        // ============ TIMELINE ANIMATIONS ============
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 0.6,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
        
        // ============ FAQ TOGGLE ============
        function toggleFaq(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = content.classList.contains('open');
            
            // Close all others
            document.querySelectorAll('.faq-content.open').forEach(el => {
                el.classList.remove('open');
                el.previousElementSibling.querySelector('.faq-icon').textContent = '+';
                el.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
            });
            
            if (!isOpen) {
                content.classList.add('open');
                icon.textContent = '−';
                icon.style.transform = 'rotate(180deg)';
            }
        }
        
        function showMoreFaq() {
            const hidden = document.getElementById('faq-hidden');
            const btn = document.getElementById('show-more-faq');
            hidden.classList.toggle('hidden');
            btn.textContent = hidden.classList.contains('hidden') ? 'Vis flere spørsmål (20 totalt)' : 'Vis færre spørsmål';
        }
        
        // ============ POSTCARD FLIP ============
        function flipPostcard() {
            document.getElementById('postcard-inner').classList.add('flipped');
        }
        
        // ============ PARTNER FIELD TOGGLE ============
        function togglePartnerField(show) {
            const field = document.getElementById('partner-field');
            if (show) {
                field.classList.remove('hidden');
                field.style.maxHeight = '100px';
            } else {
                field.style.maxHeight = '0';
                setTimeout(() => field.classList.add('hidden'), 500);
            }
        }
        
        // ============ GIFT REVEAL ============
        function revealGift() {
            const box = document.getElementById('gift-box');
            const hint = document.getElementById('gift-hint');
            const content = document.getElementById('gift-content');
            
            // Confetti burst
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.5 },
                colors: ['#D4AF37', '#B76E79', '#FF8C00', '#FFD700']ap.to(box, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'back.in(1.7)'
            });
            
            gsap.to(hint, {
                opacity: 0,
                duration: 0.3
            });
            
            gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power3.out',
                onStart: () => content.classList.remove('pointer-events-none')
            });
        }
        
        // ============ COPY BOOK (Citybox) ============
        function copyAndBook() {
            navigator.clipboard.writeText('RemineogDaniel').then(() => {
                const btn = document.getElementById('copy-btn');
                btn.textContent = 'Kode kopiert! Åpner...';
                btn.classList.add('bg-hot-pink', 'text-white');
                
                setTimeout(() => {
                    window.open('https://citybox.no/kristiansand/', '_blank');
                }, 800);
            });
        }
        
        // ============ RSVP FORM SUBMISSION ============
        function submitRSVP(e) {
            e.preventDefault();
            const form = document.getElementById('rsvp-form');
            const postcard = document.getElementById('postcard');
            const thankYou = document.getElementById('thank-you');
            
            // Confetti celebration
            confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 },
                colors: ['#D4AF37', '#B76E79', '#87CEEB', '#FFD700']
            });
            
            gsap.to(postcard, {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.inOut',
                onComplete: () => {
                    postcard.style.display = 'none';
                    thankYou.classList.remove('hidden');
                    gsap.from(thankYou, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'back.out(1.7)'
                    });
                }
            });
        }
        
        // ============ ROSE PETALS ============
        function createPetal() {
            const container = document.getElementById('petals-container');
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = '🌸';
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
            petal.style.opacity = Math.random() * 0.5 + 0.2;
            container.appendChild(petal);
            
            gsap.to(petal, {
                y: window.innerHeight + 100,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 720 - 360,
                duration: Math.random() * 5 + 5,
                ease: 'none',
                onComplete: () => petal.remove()
            });
        }
        
        // petals
        setInterval(() => {
            if (Math.random() > 0.7) createPetal();
        }, 2000);
        
        // ============ PARALLAX EFFECTS ============
        gsap.to('#church-image', {
            yPercent: 20,
            scrollTrigger: {
                trigger: '#church',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
         ============ QUOTE ANIMATION ============
        gsap.from('#quote-text', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: '#quote',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('#quote-symbol', {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#quote',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="preloader" id="preloader">
<div className="preloader-rings">
<div className="preloader-ring"></div>
<div className="preloader-ring"></div>
<div className="preloader-ring"></div>
</div>
<p className="font-vibes text-3xl text-antique-gold">Remine &amp; Daniel</p>
</div>

<div className="custom-cursor cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="custom-cursor cursor-ring hidden md:block" id="cursor-ring"></div>

<div className="marquee-layer" id="marquee-layer">
<div className="marquee-row animate-marquee-left">
<span>Størst av alt er kjærligheten • Kjærligheten utholder alt, tror alt, håper alt • Vann kan ikke slukke kjærligheten • Jeg har funnet den min sjel elsker • Det Gud har sammenføyd, skal mennesker ikke skille • La alt  gjør, skje i kjærlighet • Vi elsker fordi han elsket oss først • Over alt dette, kle dere i kjærlighet • Kjærligheten er tålmodig, kjærligheten er velvillig • Elsk hverandre slik jeg har elsket dere • </span>
<span>Størst av alt er kjærligheten • Kjærligheten utholder alt, tror alt, håper alt • Vann kan ikke slukke kjærligheten • Jeg har funnet den min sjel elsker • Det Gud har sammenføyd, skal mennesker ikke skille • La alt dere gjør, skje i kjærlighet • Vi elsker fordi han elsket oss først • Over alt dette, kle dere i kjærlighet • Kjærligheten er tål er velvillig • Elsk hverandre slik jeg har elsket dere • </span>
</div>
<div className="marquee-row animate-marquee-right" style={{marginTop: '-2rem'}}>
<span>Hvor du går, vil jeg gå • To er bedre enn én • En tråd spunnet av tre ryker ikke så fort • Ingen frykt i kjærligheten • Herren gjør deres kjærlighet rik • Vær gode mot hverandre, vis medfølelse • Jeg er min elskedes og min elskede er min • Legg meg som et segl på ditt hjerte • Nåde, barmhjertighet og fred være med oss • Hold ekteskapet i ære • </span>
<span>Hvor du går, vil jeg gå • To er bedre enn én • En tråd spunnet av tre ryker ikke så fort • Ingen frykt i kjærligheten • Herren gjør deres kjærlighet rik • Vær gode mot hverandre, vis medfølelse • Jeg er min elskedes og min elskede er min • Legg meg som et segl på ditt hjerte • Nåde, barmhjertighet og fred være med oss • Hold ekteskapet i ære • </span>
</div>
<div className="marquee-row animate-marquee-left" style={{marginTop: '-2rem'}}>
<span>Størst av alt er kjærligheten • Jeg har funnet den min sjel elsker • Kjærligheten er tålmodig • elsker fordi han elsket oss først • To er bedre enn én • Elsk hverandre slik jeg har elsket dere • </span>
<span>Størst av alt er kjærligheten • Jeg har funnet den min sjel elsker • Kjærligheten er tålmodig • Vi elsker fordi han elsket oss først • To er bedre enn én • Elsk hverandre slik jeg har elsket dere • </span>
</div>
<div className="marquee-row animate-marquee-right" style={{marginTop: '-2rem'}}>
<span>Legg meg som et segl på ditt hjerte • Vann kan ikke slukke kjærligheten • Det Gud har sammenføyd • Hold ekteskapet i ære • Kjærligheten utholder alt • Over alt dette, kle dere i kjærlighet • </span>
<span>Legg meg som et segl på ditt hjerte • Vann kan ikke slukke kjærligheten • Det Gud har sammenføyd • Hold ekteskapet i ære • Kjærligheten utholder alt • Over alt dette, kle dere i kjærlighet • </span>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" id="petals-container"></div>

<nav className="fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-4 md:px-8 py-4 transition-all duration-600" id="navbar">

<button aria-label="Meny" className="relative w-11 h-11 flex items-center justify-center group" id="menu-trigger">
<div className="flex flex-col gap-1.5 transition-all duration-300 group-hover:gap-1">
<span className="w-6 h-0.5 bg-gradient-to-r from-antique-gold to-royal-gold rounded-full transition-all duration-300"></span>
<span className="w-6 h-0.5 bg-gradient-to-r from-antique-gold to-royal-gold rounded-full transition-all duration-300"></span>
<span className="w-6 h-0.5 bg-gradient-to-r from-antique-gold to-royal-gold rounded-full transition-all duration-300"></span>
</div>
</button>

<a className="font-cinzel font-black text-2xl md:text-3xl text-deep-charcoal tracking-tight hover:text-antique-gold transition-colors duration-300" href="#" id="logo" style={{letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(255,255,255,0.8)'}}>
            R &amp; D
        </a>

<a className="btn-gold text-white font-montserrat font-semibold text-xs md:text-sm uppercase tracking-widest px-5 md:px-7 py-2.5 md:py-3 rounded-full" href="#rsvp">
            Svar
        </a>
</nav>

<div className="fixed inset-0 z-[9998] pointer-events-none opacity-0 transition-opacity duration-500" id="menu-overlay">
<div className="absolute inset-0 bg-warm-almond" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E\')'}}></div>
<div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
<nav className="flex flex-col items-center gap-6">
<a className="menu-link font-cinzel text-3xl md:text-5xl text-deep-charcoal hover:text-antique-gold transition-colors" data-index="0" href="#story">Historie</a>
<a className="menu-link font-cinzel text-3xl md:text-5xl text-deep-charcoal hover:text-antique-gold transition-colors" data-index="1" href="#church">Vielsen</a>
<a className="menu-link font-cinzel text-3xl md:text-5xl text-deep-charcoal hover:text-antique-gold transition-colors" data-index="2" href="#timeline">Program</a>
<a className="menu-link font-cinzel text-3xl md:text-5xl text-gold-gradient flex items-center gap-3" data-index="3" href="#gift">
<span>🎁</span> Gaveliste
                </a>
<a className="menu-link font-cinzel text-3xl md:text-5xl text-deep-charcoal hover:text-antique-gold transition-colors" data-index="4" href="#rsvp">Svar</a>
</nav>
</div>
</div>

<section className="relative h-screen w-full overflow-hidden" id="hero">

<div className="absolute inset-0 hero-gradient -z-20"></div>

<div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-30">
<div className="frosted-glass border border-rose-gold/30 px-6 md:px-10 py-3 md:py-4 rounded-xl shadow-lg">
<div className="relative">

<span className="absolute -top-1 -left-1 w-2 h-2 bg-celestial-blue rounded-full animate-sparkle"></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-celestial-blue rounded-full animate-sparkle" style={{animationDelay: '0.3s'}}></span>
<span className="absolute -bottom-1 -left-1 w-2 h-2 bg-celestial-blue rounded-full animate-sparkle" style={{animationDelay: '0.6s'}}></span>
<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-celestial-blue rounded-full animate-sparkle" style={{animationDelay: '0.9s'}}></span>
<div className="flex items-center gap-2 md:gap-4 font-cinzel text-sm md:text-lg font-semibold text-gold-gradient" id="countdown">
<div className="text-center">
<span className="text-xl md:text-3xl font-bold" id="days">000</span>
<span className="block text-xs opacity-70">DAGER</span>
</div>
<span className="text-antique-gold">:</span>
<div className="text-center">
<span className="text-xl md:text-3xl font-bold" id="hours">00</span>
<span className="block text-xs opacity-70">TIMER</span>
</div>
<span className="text-antique-gold">:</span>
<div className="text-center">
<span className="text-xl md:text-3xl font-bold" id="minutes">00</span>
<span className="block text-xs opacity-70&lt;/span&gt; &lt;/div&gt; &lt;span class=" text-antique-gold"="">:</span>
<div className="text-center">
<span className="text-xl md:text-3xl font-bold" id="seconds">00</span>
<span className="block text-xs opacity-70">SEK</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" id="hero-assets">

<img alt="Symbol" className="absolute left2%] md:left-[12%] w-28 md:w-44 lg:w-52 rounded-2xl shadow-2xl animate-float-delayed opacity-0" id="asset-left" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{transform: 'translateY(20px) rotate(-5deg)'}}/>

<div className="relative w-[65vw] md:w-[320px] lg:w-[380px] aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden opacity-0" id="hero-image" style={{transform: 'scale(1.1)'}}>
<img alt="Remine &amp; Daniel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<img alt="Ring" className="absolute right-[2%] md:right-[12%] w-24 md:w-40 lg:w-48 rounded-2xl shadow-2xl animate-float opacity-0" id="asset-right" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{transform: 'translateY(-20px) rotate(5deg)'}}/>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-0 px-4" id="hero-text">

<p className="font-montserrat font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 text-gold-gradient" style={{textShadow: '0 0 15px rgba(255, 215, 0, 0.6)'}}>
                Vi Gifter Oss!
            </p>

<h1 className="font-cinzel font-black text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center tracking-tight text-living-gradient leading-none">
                REMINE &amp; DANIEL
            </h1>

<p className="font-vibes text-2xl md:text-4xl lg:text-5xl mt-4 md:mt-8 text-deep-charcoal/80">
                23 · 05 · 2026 <span className="mx-2">•</span> Kristiansand
            </p>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
<span className="font-montserrat text-xs tracking-widest uppercase text-deep-charcoal/60">Scroll</span>
<div className="w-6 h-10 border-2 border-deep-charcoal/30 rounded-full flex justify-center pt-2">
<div className="w-1.5 h-3 bg-antique-gold rounded-full animate-bounce"></div>
</div>
</div>
</div></section>

<section className="relative min-h-screen py-24 md:py-32 overflow-hidden" id="story">

<div className="absolute inset-0 bg-gradient-to-b from-warm-almond via-warm-almond to-whitez-10"></div>

<div className="eco-float top-[10%] left-[5%] w-32 md:w-48" style={{animation: 'float 12s ease-in-out infinite'}}>
<svg className="w-full h-full text-antique-gold/" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="0.5"></circle>
<path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.3"></path>
</svg>
</div>
<div className="eco-float top-[30%] right-[8%] w-24 md:w-36" style={{animation: 'float 15s ease-in-out infinite 3s'}}>
<svg className="w-full h-full text-rose-gold/15" viewbox="0 0 100 100">
<path d="M20 80 Q50 20 80 80" fill="none" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
<div className="eco-float bottom-[20%] left-[10%] w-40 md:w-56" style={{animation: 'float 18s ease-in-out infinite 5s'}}>
<svg className="w-full h-full text-celestial-blue/10" viewbox="0 0 100 100">
<circle cx="30" cy="50" fill="none" r="20" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="70" cy="50" fill="none" r="20" stroke="currentColor" strokeWidth="0.5"></circle>
<line stroke="currentColor" strokeWidth="2" x1="50" x2="50" y1="50" y2="50"></line>
</svg>
</div>
<div className="max-w-6xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 to-antique-gold/10 rounded-3xl transform rotate-3 scale-105"></div>

<div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700" id="spark-image">
<img alt="Remine &amp; Daniel" className="w--[4/5] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 text-center lg:text-left space-y-6 md:space-y-8">
<h2 className="font-cinzel-2xl md:text-3xl lg:text-4xl text-rose-gradient tracking-tight">
                        Miss Andersen &amp; Herr Berling
                    </h2>
<div className="space-y-4 md:space-y-6" id="spark-text">
<p className="font-vibes text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed spark-line">
                            To personligheter. Én stor opplevelse.
                        </p>
<p className="font-vibes text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed spark-line">
                            Liv, latter og litt galskap.
                        </p>
<p className="font-vibes text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed spark-line">
                            Der en sørlending møter en østlending.
                        </p>
<p className="font-vibes text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed spark-line">
                            Kanskje en tilfeldighet?
                        </p>
<p className="font-cinzel font-bold text-lg md:text-xl lg:text-2xl text-gold-gradient spark-line">
                            Mest sannsynlig skjebnen.
                        </p>
<p className="font-vibes text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed spark-line">
                            Først et annet kontinent. Så en enkel date.
                        </p>
<p className="font-vibes text-xl md:text-2xl lg:text-3xl text-deep-charcoal/80 leading-relaxed spark-line">
                            Nå det store Øyeblikket.
                        </p>
<p className="font-cinzel font-black text-xl md:text-2xl lg:text-3xl text-living-gradient spark-line pt-4">
                            "Bryllupet er i gang!"
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden" id="quote">

<div className="absolute inset-0 bg-gradient-to-b from via-warm-almond to-white -z-10"></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, transparent 30%, rgba(255,248,225,0.8) 100%)', ZIndex: '5'}}></div>

<div className="relative mb-8" id="quote-symbol">
<img alt="Symbol" className="w-36 md:w-48 lg:w-56 rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{animation: 'float 5s ease-in-out infinite, float 7s ease-in-out infinite'}}/>
</div>

<blockquote className="text-center px-6 max-w-3xl" id="quote-text">
<p className="font-cinzel-decorative text-2xl md:text-4xl lg:text-5xl leading-relaxed text-rose-gradient" style={{textShadow: '0 2px 10px rgba(233, 150, 122, 0.2)'}}>
                "Størst av alt er kjærligheten"
            </p>
<cite className="block mt-6 font-montserrat text-xs md:text-sm tracking-[0.3em] uppercase text-deep-charcoal/50 not-italic">
                1. Korinter 13:13
            </cite>
</blockquote>
</section>

<section className="relative min-h-screen w-full overflow-hidden" id="church">

<div className="absolute inset-0 z-0">
<img alt="Oddernes Kirke" className="w-full h-full object-cover object-bottom" id="church-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
</div>

<div className="relative z-10 min-h-screen flex items-center justify-center p-6">
<div className="frosted-cream max-w-lg w-full p-8 md:p-12 rounded-sm shadow-2xl text-center">

<h2 className="font-cinzel font-bold text-3xl md:text-4xl text-deep-charcoal tracking-tight mb-2">
                    VIELSEN
                </h2>
<div className="w-20 h-1 bg-gradient-to-r from-antique-gold to-rose-gold mx-auto mb-6"></div>

<p className="font-montserrat italic text-deep-charcoal/70 mb-6">
                    Spenningen venter i vakre Oddernes Kirke på Lund.
                </p>

<div className="mb-6">
<p className="font-cinzel text-2xl md:text-3xl text-gold-gradient font-semibold">
                        23. Mai 2026
                    </p>
<p className="font-montserrat text-lg text-deep-charcoal mt-1">
                        Kl. 14:30
                    </p>
<p className="font-montserrat text-sm text-deep-charcoal/60 italic">
                        (Dørene åpnes 14:10)
                    </p>
</div>

<address className="font-montserrat text-sm text-deep-charcoal/80 not-italic mb-6 leading-relaxed">
                    Jegersbergveien 2<br/>
                    4630 Kristiansand S.
                </address>
<p className="font-montserrat text-xs text-deep-charcoal/60 mb-8">
                    Det er gode parkeringsmuligheter på stedet, så gjerne kom tidlig.
                </p>

<a className="btn-gold inline-flex items-center gap-2 text-white font-montserrat font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-full" href="https://maps.app.goo.gl/brExvDymDWkjFs4cA?g_st=ipc" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Se Kart
                </a>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden" id="timeline" style={{background: 'linear-gradient(to bottom, rgba(250, 218, 221, 0.3) 0%, rgba(255, 248, 225, 1) 100%)'}}>
<div className="max-w-5xl mx-auto px-6 md:px-12">

<div className="text-center mb-16 md:mb-24">
<h2 className="font--bold text-3xl md:text-4xl lg:text-5xl text-rose-gradient tracking-tight mb-4">
                    Programmet
                </h2>
<p className="font-montserrat text-deep-charcoal/60 max-w-md mx-auto">
                    En dag fylt med kjærlighet, latter og feiring
                </p>
</div>

<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-antique-gold/50 via-rose-gold/50 to-antique-gold/50 md:-translate-x-1/2"></div>

<div className="space-y-8 md:space-y-12">

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-antique-gold rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node"></div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<span className="font-cinzel text-xl md:text-2xl text-antique-gold font-bold">10:00</span>
<h3 className="font-cinzel font-semibold text-lg text-deep-charcoal mt-1">Sightseeing</h3>
<p className="font-montserrat text-sm text-deep-charcoal/60">Kristiansand sentrum for de som vil</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-6 h-6 bg-rose-gold rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node flex items-center justify-center">
<span className="text-white text-xs">💒</span>
</div>
<div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
<span className="font-cinzel text-2xl text-rose-gold font-bold">14:30</span>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<span className="font-cinzel text-xl text-rose-gold font-d:hidden">14:30</span>
<div className="bg-warm-almond/90 border border-antique-gold/50 p-4 md:p-6 rounded-xl shadow-lg mt-2 md:mt-0">
<h3 className="font-cinzel font-bold text-xl text-deep-charcoal">Vielse</h3>
<p className="font-montserrat text-sm text-deep-charcoal/70">Oddernes Kirke</p>
<p className="font-montserrat text-xs text-deep-charcoal/50 mt-1">Dørene åpnes 14:10</p>
</div>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-antique-gold rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node"></div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<span className="font-cinzel text-xl md:text-2xl text-antique-gold font-bold">15:30</span>
<h3 className="font-cinzel font-semibold text-lg text-deep-charcoal mt-1">Fotografering</h3>
<p className="font-montserrat text-sm text-deep-charcoal/60">Familie og venner</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-6 h-6 bg-rose-gold rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node flex items-center justify-center">
<span className="text-white text-xs">🍽️</span>
</div>
<div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
<span className="font-cinzel text-2xl text-rose-gold font-bold">16:30</span>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<span className="font-cinzel text-xl text-rose-gold font-bold md:hidden">16:30</span>
<div className="bg-warm-almond/90 border border-antique-gold/50 p-4 md:p-6 rounded-xl shadow-lg mt-2 md:mt-0">
<h3 className="font-cinzel font-bold text-xl text-deep-charcoal">Stor Festmiddag</h3>
<p className="font-montserrat text-sm text-deep-charcoal/70">Den store festen begynner!</p>
</div>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-300 rounded-full md:-translate-x-1/2 z-10"></div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<span className="font-montserrat font-semibold text-deep-charcoal/70">17:30</span>
<p className="font-montserrat text-sm text-deep-charcoal/60">Underholdning</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-300 rounded-full md:-translate-x-1/2 z-10"></div>
<div 2="" className="hidden md:block md:w-1&lt;/div&gt; &lt;div class=" md:ml-0="" md:pl-12"="" md:w-1="" ml-12="">
<span className="font-montserrat font-semibold text-deep-charcoal/70">18:00</span>
<p className="font-montserrat text-sm text-deep-charcoal/60">Taler</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-300 rounded-full md:-translate-x-1/2 z-10"></div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<span className="font-montserrat font-semibold text-deep-charcoal/70">19:00</span>
<p className="font-montserrat text-sm text-deep-charcoal/60">Kaffe og Kaker</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-300 rounded-full md:-translate-x-1/2 z-10"></div>
<div className="hidden md:block md:w-1/2"></div>
<div 70"="" className="ml-12 md:ml-0 md:w-1/2 md:&lt;span class=" font-montserrat="" font-semibold="" text-deep-charcoal="">20:00
<p className="font-montserrat text-sm text-deep-charcoal/60">Leker</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-6 h-6 bg-rose-gold rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node flex items-center justify-center">
<span className="text-white text-xs">🎂</span>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<span className="font-cinzel text-xl text-rose-gold font-bold">21:00</span>
<div className="bg-warm-almond/90 border border-antique-gold/50 p-4 rounded-xl shadow-lg mt-2 inline-block">
<h3 className="font-cinzel font-bold text-lg text-deep-charcoal">Kakeskjæring</h3>
<p className="font-montserrat text-sm text-deep-charcoal/70">Bryllupskaken!</p>
</div>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-300 rounded-full md:-translate-x-1/2 z-10"></div>
<div className="hidden md:block md:w-1/2"></div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<span className="font-montserrat font-semibold text-deep-charcoal/70">22:00</span>
<p className="font-montserrat text-sm text-deep-charcoal/60">Mer underholdning</p>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-6 h-6 bg-rose-gold rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node flex items-center justify-center">
<span className="text-white text-xs">💃</span>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<span className="font-cinzel text-xl text-rose-gold font-bold">23:00</span>
<div className="bg-warm-almond/90 border border-antique-gold/50 p-4 rounded-xl shadow-lg mt-2 inline-block">
<h3 className="font-cinzel font-bold text-lg text-deep-charcoal">Brudedansen</h3>
<p className="font-montserrat text-sm text-deep-charcoal/70">Romantikkens høydepunkt</p>
</div>
</div>
</div>

<div className="timeline-item relative flex items-center">
<div className="absolute left-4 md:left-1/2 w-5 h-5 bg-celestial-blue rounded-full border-4 border-warm-almond shadow-lg md:-translate-x-1/2 z-10 timeline-node"></div>
<div className="hidden md:block md:w-1/2"></div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<span className="font-cinzel text-xl text-celestial-blue font-bold">00:00</span>
<h3 className="font-bubblegum text-xl text-celestial-blue mt-1">Bading! 🏊</h3>
<p className="font-montserrat text-sm text-deep-charcoal/60">For de tøffe!</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden" id="mosby" style={{background: 'linear-gradient(to bottom, rgba(255, 248, 225, 1) 0%, #E9967A 40%, #B76E79 100%)'}}>
<div className="max-w-6xl mx-auto px-6 md:px-12">

<div className="text-center mb-12 md:mb-16">
<h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-deep-charcoal tracking-tight mb-4" style={{WebkitTextStroke: '1px rgba(218,165,32, 0.3)'}}>
                    Kvelden før kvelden
                </h2>

<div className="max-w-2xl mx-auto space-y-4">
<p className="font-montserrat font-black text-base md:text-lg glitter-text leading-relaxed" style={{textShadow: '0 0 20px rgba(233, 150, 122, 0.4)'}}>
                        Før bryllupsklokkene ringer, ønsker vi å samle våre kjære til en hyggelig kveld på Mosby.
                    </p>
<p className="font-montserrat text-base md:text-lg glitter-text leading-relaxed">
                        Målet for kvelden er lave skuldre, god mat og tid til mingling før den store feiringen.
                    </p>
<p className="font-montserrat font-black text-base md:text-lg glitter-text leading-relaxed">
                        Det betyr mye for oss å starte helgen her, midt i omgivelsene fra Remines oppvekst.
                    </p>
<p className="font-montserrat font-black text-base md:text-lg glitter-text leading-relaxed">
                        Vi håper dere vil være med å dele denne kvelden med oss.
                    </p>
</div>
</div>

<a className="block group cursor-pointer" href="https://maps.app.goo.gl/JsZih5vv1J88Y49w6?g_st=ipc" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:-space-x-8">

<div className="polaroid transform -rotate-3 hover:z-20 w-64 md:w-72">
<div className="aspect-square overflow-hidden">
<img alt="The White House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="font-cinzel text-center text-gold-gradient font-semibold mt-2 text-sm">
                            The White House
                        </p>
</div>

<div className="polaroid transform rotate-2 z-10 group-hover:scale-105 w-64 md:w-72 transition-transform duration-500">
<div className="aspect-square overflow-hidden">
<img alt="Kjempefest" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<p className="font-bubblegum text-center text-hot-pink text-lg mt-2">
                            Vil du være med på kjempefest?
                        </p>
</div>

<div className="polaroid transform -rotate-1 hover:z-20 w-64 md:w-72">
<div className="aspect-square overflow-hidden">
<img alt="Stemningsrap=" duration-500"="" group-hover:scale-110="" h-full="" object-cover="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" transition-transform="" w-full=""/>
</div>
<p className="font-bubblegum text-center text-deep-charcoal mt-2">
                            Stemningsrapport
                        </p>
</div>
</div>

<p className="text-center mt-8 font-montserrat text-sm font-bold tracking-widest uppercase text-white/90 group-hover:text-white transition-colors flex items-center justify-center gap-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Mosby Ringvei 56
                </p>
</a>
</div>
</section>

<section className="relative py-24 md:py-32 bg-warm-almond overflow-hidden" id="accommodation">
<div className="max-w-6xl mx-auto px-6 md:px-12">

<div className="text-center mb-12 md:mb-16">
<h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl textd-gradient tracking-tight mb-4">
                    Ingen fest uten overnatting
                </h2>
<p className="font-montserrat text-deep-charcoal/60 max-w-md mx-auto">
                    Vi har funnet de beste alternativene for alle budsjetter
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="card-3d group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer" onclick="copyAndBook()">
<img alt="Citybox" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<h3 className="font-cinzel font-bold text-2xl text-hot-pink neon-glow mb-2">CITYBOX</h3>
<p className="font-montserrat text-sm mb-1">Sentralt i sentrum. Moderne og stilfullt.</p>
<p className="font-montserrat font-bold text-lg text-hot-pink mb-4">40% Rabatt!</p>
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
<p className="font-montserrat text-xs text-white/70 mb-1">Din rabattkode:</p>
<p className="font-cinzel font-bold text-lg text-white">RemineogDaniel</p>
</div>
<button className="w-full border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-white font-montserrat font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-full transition-all duration-300" id="copy-btn">
                            Kopier Kode &amp; Gå til Booking
                        </button>
</div>
</div>

<a className="card-3d group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer block" href="#rsvp">
<img alt="Sovesal" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<h3 className="font-cinzel font-bold text-2xl mb-2">
<span className="text-dusty-blue">Gutte</span> &amp; <span className="text-neon-pink">Jente</span>hus
                        </h3>
<p className="font-montserrat text-sm mb-2">Rimelig og sosialt for single og ungdommer!</p>
<p className="font-montserrat font-bold text-lg text-antique-gold mb-4">200,- per pers/natt</p>
<p className="font-montserrat text-xs text-white/70">Bestilles i registreringen under ↓</p>
</div>
</a>

<a className="card-3d group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer block" href="https://www.airbnb.no/Kristiansand--Norway/homes?checkin=2026-05-22&amp;checkout=2026-05-24&amp;adults=2" rel="noopener noreferrer" target="_blank">
<img alt="Airbnb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<h3 className="font-cinzel font-bold text-2xl text-deep-orange mb-2">AIRBNB</h3>
<p className="font-montserrat text-sm mb-2">Ønsker dere noe helt eget i nærheten?</p>
<p className="font-montserrat text-xs text-white/70">Finn din drømmeovernatting →</p>
</div>
</a>
</div>
</div>
</section>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24" id="gift" style={{background: 'radial-gradient(circle at 50% 40%, #FF8C00 0%, #B76E79 50%, #5e2d36 100%)'}}>

<div className="relative cursor-pointer mb-8 transform transition-all duration-500 hover:scale-110" id="gift-box" onclick="revealGift()">
<div className="text-8xl md:text-9xl animate-float">🎁</div>
<div className="absolute -inset-4 bg-gradient-to-r from-antique-gold/20 to-rose-gold/20 rounded-full blur-xl animate-pulse"></div>
</div>
<p className="font-montserrat text-white/70 text-xs tracking-widest uppercase text-center animate-pulse" id="gift-hint">
            Trykk på gaven
        </p>

<div className="opacity-0 translate-y-10 transition-all duration-1000 text-center max-w-2xl px-6 pointer-events-none" id="gift-content">
<h2 className="font-vibes text-4xl md:text-5xl lg:text-6xl text-antique-gold mb-6">
                Kjære Gjester
            </h2>
<p className="font-montserrat text-white text-base md:text-lg leading-relaxed mb-4">
                Vi er så utrolig spente på å begynne på vårt nye kapittel, og vi gleder oss til å bygge et ekte hjem.
            </p>
<p className="font-montserrat text-white text-base md:text-lg leading-relaxed mb-4">
                Tusen takk for at dere tenker på oss! Bare det å dele denne dagen med dere er den største gaven.
            </p>
<p className="font-montserrat text-white text-base md:text-lg leading-relaxed mb-8">
                Men om dere ønsker å gi oss noe, har vi samlet noen ønsker på en liste.
            </p>
<p className="font-cinzel text-white/80 text-sm mb-10">— Varm hilsen Remine &amp; Daniel</p>

<a className="group relative inline-flex items-center gap-3 px-10 py-4 border-2 border-antique-gold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_#D4AF37,0_0_60px_#FF8C00] animate-pulse-glow" href="https://onskelister.no/liste?id=Wn6HUmvekcuEJKmi63ky" rel="noopener noreferrer" target="_blank">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-antique-gold to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10 font-montserrat font-bold text-antique-gold group-hover:text-white uppercase tracking-wider text-sm md:text-base transition-colors">
                    Se Vår Ønskeliste
                </span>
<span className="relative z-10 text-2xl">🎁</span>
</a>
</div>
</section>

<section className="relative py-24 md:py-32 bg-warm-almond overflow-hidden" id="faq">
<div className="max-w-3xl mx-auto px-6 md:px-12">

<div className="text-center mb-12 md:mb-16">
<h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-deep-charcoal tracking-tight mb-4">
                    Kjekt å vite
                </h2>
<p className="font-montserrat text-deep-charcoal/60">
                    Alt du lurer på, samlet på ett sted
                </p>
</div>

<div className="space-y-4" id="faq-container">

<div className="faq-item bg-muted-coral/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Når må jeg svare om jeg kommer?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Vi trenger ditt svar innen <strong>1. Mars 2026</strong>. Dette er viktig for at vi skal få bestilt mat og drikke til alle. Du svarer enkelt i skjemaet lenger ned på denne siden.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-dusty-blue/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hva skal jeg ha på meg?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Vi pynter oss! Gjerne i bunad, kjole eller dress. Vi ønsker en feststemt forsamling, så ta på deg noe du føler deg fin i. Husk gode sko til dansing!
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-soft-sage/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Kan vi ta med barna?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Jesus sa: "La barna komme til meg". Vi ønsker et bryllup fylt med glede og sprell! Noen gjester er derfor invitert med barna sine (dette står i invitasjonen). Utover dette er det kun barn som er avhengig av foreldre (amming/små) som er invitert.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-warm-sand/40 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hvor bør vi sove, og finnes det rab?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Absolutt! Vi anbefaler Citybox i sentrum. Bruk koden <strong>'RemineogDaniel'</strong> for hele 40% rabatt. For et rimeligere alternativ tilbyr vi overnatting i hus/sovesal (200,- natten). Se 'Overnatting'-seksjonen lenger opp for linker.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-muted-coral/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hvordan kommer jeg meg frem / Er det parkering?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Det er masse gratis parkering på alle lokasjoner: Mosby (fredag), Oddernes Kirke og Festlokalet. Vi setter ikke opp fellesbuss, da de fleste kjører eller bor sentralt, men det er enkelt å ta taxi eller samkjøre.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-dusty-blue/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Jeg har allergier eller diettbehov. Hva gjør jeg?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Ingen fare! Si ifra i RSVP-skjemaet nederst på siden. Vår fantastiske matansvarlig Elisabet sørger for at alle blir mette og glade, uansett behov.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-soft-sage/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hva ønsker dere dere?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Vi har opprettet en ønskeliste. Du finner den store, glitrende 'Gave-knappen' lenger opp på siden, eller du kan <a className="text-antique-gold underline hover:text-rose-gold" href="https://onskelister.no/liste?id=Wn6HUmvekcuEJKmi63ky" target="_blank">trykke her for å gå til ønskelisten</a>.
                            </p>
</div>
</div>
</div>
</div>

<div className="space-y-4 mt-4 hidden" id="faq-hidden">

<div className="faq-item bg-warm-sand/40 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hvem skal jeg kontakte for taler eller sprell?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Her er drømmelaget:<br/>
                                • <strong>Taler/Toastmastere:</strong> Hans Christian &amp; Mathias<br/>
                                • <strong>Leker/Underholdning:</strong> Adam<br/>
                                • <strong>Mat</strong> Elisabet<br/>
                                • <strong>Pynt/Estetikk:</strong> Ragnhild
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-muted-coral/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Kan vi ta bilder under vielsen?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                I kirken ønsker vi en mobilfri vielse for å være tilstede i øyeblikket. Vår fotograf tar seg av de profesjonelle bildene der. Under festen: JA! Ta masse bilder!
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-dusty-blue/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hva skjer egentlig 'Kvelden før kvelden'?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Fredag kveld samles vi på Mosby (Remines barndomshjem) for en uformell 'Get-together'. Det blir enkel mat, mingling og lave skuldre. Adressen er Mosby Ringvei 56.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-soft-sage/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Når starter vielsen nøyaktig?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Selve vielsen starter <strong>14:30 presis</strong> i Oddernes Kirke. Dørene åpnes 14:10. Vær ute i god tid for å finne plassen din.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-warm-sand/40 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hvordan er det med alkohol?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Det er ikke alkohol i bryllupet, men selvfølgelig kan Jesus når som helst gjøre vann om til vin, hehe. Det servert mye god brus. Vi ønsker en hyggelig fest for alle aldre.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-muted-coral/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Jeg vil gjerne si noen ord. Er det frist?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Så hyggelig! Meld gjerne fra til Hans Christian eller Mathias innen 1. Mai, så de får sydd sammen et godt program. Korte og gode taler er gull!
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-dusty-blue/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Jeg skal sove på sovesal/hus. Må ha med sengetøy?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Ja, ta med sovepose ellergetøy og håndkle. Det er senger/madrasser der. Det er en enkel, sosial og rimelig måte å bo på.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-soft-sage/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Er det felles frokost?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                De som bor på Citybox fikser frokost selv (den er god!). De som sover på huset/sovesal organiserer vi en enkel fellesfrokost for på søndagen.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-warm-sand/40 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Hva om det regner?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Vi har en plan B! Hvis Gud ønsker å vanne blomstene, trekker vi inn eller under tak. Men vi satser på strålende sørlandssol.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-muted-coral/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Kan jeg ta med meg en kjæreste/venn?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Invitasjonen gjelder de navnene som står på den (eller konvolutten). Vi har dessverre begrenset plass og har måttet gjøre tøffe prioriteringer.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-dusty-blue/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Er lokalene tilrettelagt for rullestol/barnevogn?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Ja, både Oddernes Kirke og festokalet har trinnfri adkomst og HC-toalett. Si ifra hvis dere trenger assistanse.
                            </p>
</div>
</div>
</div>

<div className="faq-item bg-soft-sage/20 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Når slutter festen?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Vi gir oss ikke før vi må! Musikken og dansen fortsetter ut i de små timer. De tøffeste avslutter med nattbad ved midnatt!        </p></div>
</div>
</div>

<div className="faq-item bg-warm-sand/40 rounded-xl overflow-hidden">
<button className="faq-trigger w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-cinzel font-semibold text-deep-charcoal">Er det noen vi kan kontakte ved spørsmål?</span>
<span className="faq-icon text-antique-gold text-xl transition-transform duration-300">+</span>
</button>
<div className="faq-content">
<div className="faq-inner px-5 pb-5">
<p className="font-montserrat text-sm text-deep-charcoal/80 leading-relaxed">
                                Ja – ta gjerne kontakt med Daniel på <strong>47361573</strong> eller <a className="text-antique-gold underline" href="mailto:daniel.berling@hotmail.com">daniel.berling@hotmail.com</a> dersom du har spørsmål om dagen,natting eller annet praktisk.
                            </p>
</div>
</div>
</div>
</div>

<div className="text-center mt-8">
<button className="font-montserrat font-semibold text-sm uppercase tracking-wider text-antique-gold hover:text-rose-gold transition-colors" id="show-more-faq" onclick="showMoreFaq()">
                    Vis flere spørsmål (20 totalt)
                </button>
</div>
</div>
</section>

<section className="relative min-h-screen bg-deep-charcoal flex items-center justify-center p-6 overflow-hidden" id="rsvp">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="postcard-container w-full max-w-lg" id="postcard">
<div className="postcard-inner relative w-full min-h-[550px]" id="postcard-inner">

<div className="postcard-face absolute inset-0 bg-amber-50 shadow-2xl rounded-sm p-8 flex flex-col justify-between cursor-pointer" onclick="flipPostcard()" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22paper%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.04%22 numOctaves=%225%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23paper)%22 opacity=%220.03%22/%3E%3C/svg%3E\')', border: '8px solid white'}}>

<div className="absolute top-6 right-6 w-20 h-24 border-4 border-dashed border-gray-300 p-1 bg-white transform rotate-3 shadow-sm">
<img alt="Stamp" className="w-yscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-12 right-28 w-20 h-20 rounded-full border-4 border-deep-charcoal/30 flex items-center justify-center transform -rotate-12">
<div className="text-center">
<span className="block text-xs font-bold text-deep-charcoal/50">ODDERNES</span>
<span className="block text-xs font-bold text-deep-charcoal/50">23.05.26</span>
</div>
</div>

<div className="mt-32 text-center">
<p className="font-vibes text-4xl text-blue-900/80">Til Remine &amp; Daniel</p>
</div>

<div className="mt-auto text-center">
<p className="font-cinzel text-sm text-rose-gold animate-pulse">TRYKK FOR Å ÅPNE</p>
</div></div>

<div className="postcard-face postcard-back absolute inset-0 bg-white shadow-2xl rounded-sm p-6 md:p-8 border-4 border-antique-gold overflow-y-auto">
<h2 className="text-2xl md:text-3xl font-cinzel font-bold text-gold-gradient text-center mb-6">
                        KOMMER DU?
                    </h2>
<form className="space-y-5" id="rsvp-form" onsubmit="submitRSVP(event)">

<div>
<input className="form-input" name="name" placeholder="Ditt navn" required="" type="text"/>
</div>

<div className="py-2">
<p className="font-montserrat text-sm text-deep-charcoal/70 mb-3">Har du med partner?</p>
<div className="flex items-center gap-6">
<label className="flex items-center gap-2 cursor-pointer">
<input className="radio-custom" name="hasPartner" onchange="togglePartnerField(true)" type="radio" value="yes"/>
<span className="font-montserrat text-sm">Ja</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="radio-custom" name="hasPartner" onchange="togglePartnerField(false)" type="radio" value="no"/>
<span className="font-montserrat text-sm">Nei</span>
</label>
</div>
</div>

<div className="hidden overflow-hidden transition-all duration-500" id="partner-field" style={{maxHeight: '0'}}>
<input className="form-input" name="partner_name" placeholder="Hva heter din bedre halvdel?" type="text"/>
</div>

<div>
<input className="form-input" name="email" placeholder="Din e-post" required="" type="email"/>
</div>

<div className="py-2">
<p className="font-montserrat text-sm text-deep-charcoal/70 mb-3">Kommer du?</p>
<div className="flex items-center gap-6">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="radio-custom" name="attending" type="radio" value="yes"/>
<span className="font-montserrat text-sm">Ja, jeg kommer!</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="radio-custom" name="attending" type="radio" value="no"/>
<span className="font-montserrat text-sm">Dessverre ikke</span>
</label>
</div>
</div>

<div>
<label className="block font-montserrat text-xs text-deep-charcoal/ mb-1">Overnatting</label>
<select className="select-custom" name="accommodation">
<option value="none">Ingen behov</option>
<option value="citybox">Citybox (Hotell)</option>
<option value="dorm">Sovesal/Hus (200,-)</option>
</select>
<p className="hidden font-montserrat text-xs text-antique-gold mt-1" id="dorm-note">
                                Not: 2 plasser på sovesal.
                            </p>
</div>

<div>
<input className="form-input" name="allergies" placeholder="Allergier eller diettbehov?" type="text"/>
</div>

<div>
<textarea className="form-input resize-none" name="message" placeholder="Sanger du vil høre? Hilsen til brudeparet?" rows="2"></textarea>
</div>

<div className="btn-gold text-white font-montserrat font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-full" submit"="">
                                Send Svar
                            
</div>
</form>
</div>
</div>
</div>

<div className="hidden text-center" id="thank-you">
<h2 className="font-vibes text-5xl md:text-6xl text-antique-gold mb-4">Tusen takk!</h2>
<p className="font-montserrat text-white/80 text-lg">Svaret ditt er mottatt. Vi gleder oss!</p>
<p className="font-montserrat text-white/50 text-sm mt-4">Sjekk e-posten din for bekreftelse.</p>
</div>
</section>

<footer className="relative py-24 md:py-32 overflow-hidden" id="footer" style={{background: 'linear-gradient(to bottom, #B76E79 0%, #6A5ACD 50%, #191970 100%)'}}>

<div aspect-video"="" className="absolute inset-0 flex items-center justify-center opacity-40 pointer &lt;div class=" md:w-[40%]="" relative="" style={{maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'}} w-[60%]="">
<img alt="Memory" className="w-full h-full object-cover animate-float-slow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>


<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
<div className="marquee-row animate-marquee-left absolute top-[20%]" style={{color: 'white'}}>
<span>Størst av alt er kjærligheten • Vi elsker fordi han elsket oss først • To er bedre enn én • </span>
<span>Størst av alt er kjærligheten • Vi elsker fordi han elsket oss først • To er bedre enn én • </span>
</div>
<div className="marquee-row animate-marquee-right absolute top-[50%]" style={{color: 'white'}}>
<span>Legg meg som et segl på ditt hjerte • Hold ekteskapet i ære • Kjærligheten er tålmodig • </span>
                 segl på ditt hjerte • Hold ekteskapet i ære • Kjærligheten er tålmodig • 
</div>
</div>

<div className="relative z-10 text-center px-6">
<p className="font-vibes text-4xl md:text-5xl lg:text-6xl mb-6" style={{background: 'linear-gradient(to right, #FFDAB9, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 30px rgba(255, 215, 0, 0.3)'}}>
                Vi gleder oss til å feire med dere!
            </p>
<h3 className="font-cinzel font-bold text-white text-xl md:text-2xl tracking-widest mb-2">
                REMINE &amp; DANIEL
            </h3>
<p className="font-cinzel text-white/50 text-sm tracking-wider">
                EST. 2026
            </p>
</div>

<p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-montserrat text-xs text-white/30 hover:text-hot-pink transition-colors cursor-default">
            Arkitektonisk utformet av Anya (AI) Remine &amp; Daniel
        </p>
</footer>



    </>
  );
}
