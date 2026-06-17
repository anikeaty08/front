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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: { class: 'lucide', strokeWidth: 1.5 }
        });

        // 1. COMPLEX TEXT ANIMATION (Blur/Fade/Slide with 60ms Stagger)
        const headlineContainer = document.getElementById('headline-container');
        // Space Otters specific copy
        const textParts = [
            { text: "We build websites that ", highlight: false },
            { text: "defy gravity.", highlight: true }
        ];

        let globalCharIndex = 0;

        function animateHeadline() {
            headlineContainer.innerHTML = ''; 
            
            textParts.forEach(part => {
                const words = part.text.split(' ');
                
                words.forEach((word, wordIndex) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.whiteSpace = 'nowrap';
                    if (part.highlight) {
                        wordSpan.className = 'text-cyan-400';
                    }

                    word.split('').forEach(char => {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = char;
                        charSpan.className = 'char-reveal';
                        // Stagger 60ms (0.06s) per character
                        charSpan.style.animationDelay = `${0.2 + (globalCharIndex * 0.06)}s`;
                        wordSpan.appendChild(charSpan);
                        globalCharIndex++;
                    });

                    headlineContainer.appendChild(wordSpan);

                    if (wordIndex < words.length - 1 || part === textParts[0]) {
                        const space = document.createElement('span');
                        space.innerHTML = '&nbsp;';
                        space.className = 'char-reveal space';
                        space.style.animationDelay = `${0.2 + (globalCharIndex * 0.06)}s`;
                        headlineContainer.appendChild(space);
                        globalCharIndex++;
                    }
                });
            });
        }
        animateHeadline();

        // 2. LIVE DIGITAL CLOCK
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: false 
            });
            document.getElementById('digital-clock').textContent = "T-MINUS " + timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // 3. SCROLL FLOW OBSERVER
        const scrollElements = document.querySelectorAll('.reveal-on-scroll');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        scrollElements.forEach(el => scrollObserver.observe(el));

        // 4. CUSTOM CURSOR
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursor-dot');
        
        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                    cursorDot.style.left = e.clientX + 'px';
                    cursorDot.style.top = e.clientY + 'px';
                });
            });

            document.querySelectorAll('a, button, .group, .scroller-inner').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
                    cursor.style.borderColor = 'rgba(34, 211, 238, 0.8)';
                    cursor.style.backgroundColor = 'rgba(34, 211, 238, 0.05)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.borderColor = 'rgba(34, 211, 238, 0.5)';
                    cursor.style.backgroundColor = 'transparent';
                });
            });
        }

        // 5. MOBILE MENU
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden', 'opacity-0');
            mobileMenu.classList.add('flex', 'opacity-100');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('opacity-100');
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.remove('flex');
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        });

        // 6. CAROUSEL
        const track = document.getElementById('track');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const dotsContainer = document.getElementById('dots-container');
        
        let currentIndex = 0;
        const totalSlides = 3; 
        
        function getCardsPerView() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }

        function updateCarousel() {
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, totalSlides - cardsPerView);
            
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;

            track.style.transform = `translateX(-${currentIndex * (100 / cardsPerView)}%)`;
            
            prevBtn.disabled = currentIndex === 0;
            prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            
            nextBtn.disabled = currentIndex >= maxIndex;
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';

            updateDots(maxIndex);
        }

        function updateDots(maxIndex) {
            dotsContainer.innerHTML = '';
            const numDots = (totalSlides - getCardsPerView()) + 1;
            
            for (let i = 0; i < numDots; i++) {
                if (i > maxIndex) continue;
                
                const dot = document.createElement('div');
                dot.className = `w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? 'bg-cyan-400 w-4' : 'bg-white/20 hover:bg-white/40'}`;
                dot.onclick = () => {
                    currentIndex = i;
                    updateCarousel();
                };
                dotsContainer.appendChild(dot);
            }
        }

        prevBtn.addEventListener('click', () => { currentIndex--; updateCarousel(); });
        nextBtn.addEventListener('click', () => { currentIndex++; updateCarousel(); });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();

    
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
      

<div className="fixed w-5 h-5 border border-cyan-400/50 rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out hidden md:block mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2" id="cursor"></div>
<div className="fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-[100] hidden md:block top-0 left-0 -translate-x-1/2 -translate-y-1/2" id="cursor-dot"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 backdrop-blur-md bg-black/60 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="text-lg font-semibold tracking-tight text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2" href="#">
<i className="w-5 h-5 text-cyan-400" data-lucide="rocket"></i> SPACE OTTERS.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-cyan-400 transition-colors" href="#work">Missions</a>
<a className="hover:text-cyan-400 transition-colors" href="#services">Capabilities</a>
<a className="hover:text-cyan-400 transition-colors" href="#testimonials">Logs</a>
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5 hover:shadow-cyan-400/20" href="#contact">Start Mission</a>
</div>
<button className="md:hidden text-white hover:text-cyan-400 transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black z-[60] hidden flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-5 right-6 text-gray-400 hover:text-white" id="close-menu">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<a className="text-3xl font-medium tracking-tight hover:text-cyan-400" href="#work">Missions</a>
<a className="text-3xl font-medium tracking-tight hover:text-cyan-400" href="#services">Capabilities</a>
<a className="text-3xl font-medium tracking-tight hover:text-cyan-400" href="#testimonials">Logs</a>
<a className="text-xl px-8 py-3 bg-cyan-400 text-black font-medium rounded-full mt-4" href="#contact">Start Mission</a>
</div>

<section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">

<div className="hidden md:block absolute inset-0 z-0 opacity-80">

<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB" style={{filter: 'hue-rotate(190deg) saturate(2) brightness(0.8) contrast(1.2)'}} width="100%"></iframe>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#050505]"></div>
</div>
<div className="md:hidden absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
<div className="mobile-orb w-[500px] h-[500px] rounded-full blur-[80px]"></div>
<div className="absolute inset-0 bg-black/70"></div>
</div>
<div className="max-w-6xl mx-auto text-center relative z-10 mt-6 flex flex-col items-center">

<div className="mb-8 reveal-on-scroll is-visible" style={{transitionDelay: '0.1s'}}>
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
<div className="relative w-2 h-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</div>
<span className="text-xs font-mono text-cyan-400 tracking-wider" id="digital-clock">T-MINUS 00:00:00</span>
<div className="h-3 w-[1px] bg-white/10"></div>
<span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Systems Operational</span>
</div>
</div>

<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-8xl font-semibold tracking-tighter leading-[1.05] mb-8 text-white max-w-6xl mx-auto">
<span className="block" id="headline-container">

</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light reveal-on-scroll is-visible flex flex-col md:flex-row items-center justify-center gap-2" style={{transitionDelay: '1.2s'}}>
<span>We craft high-gravity digital experiences that launch ambitious brands into orbit.</span>
<i className="w-5 h-5 text-cyan-400 inline-block" data-lucide="satellite"></i>
</p>

<div className="flex flex-col sm:flex-row gap-5 justify-center items-center reveal-on-scroll is-visible" style={{transitionDelay: '1.4s'}}>
<a className="group relative w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-center btn-glow overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Initiate Launch <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</a>
<a className="group w-full sm:w-auto px-8 py-4 text-white border border-white/10 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm text-center flex items-center justify-center gap-2" href="#work">
                    Explore Missions <i className="w-4 h-4 transition-transform group-hover:translate-y-0.5" data-lucide="chevron-down"></i>
</a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-black/40 backdrop-blur-md relative z-20 reveal-on-scroll">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">100+</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Missions Complete</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-semibold text-cyan-400 tracking-tight mb-1 group-hover:text-white transition-colors">$50M+</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Client Revenue</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">4.9</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Avg Star Rating</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">Global</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Client Base</div>
</div>
</div>
</div>
</div>

<div className="py-10 border-b border-white/5 bg-[#080808] overflow-hidden reveal-on-scroll">
<div className="scroller-mask">
<div className="scroller-inner flex gap-12 items-center pl-6">


<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="figma"></i> <span className="text-sm font-semibold tracking-wide">Figma</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="atom"></i> <span className="text-sm font-semibold tracking-wide">React</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="file-code-2"></i> <span className="text-sm font-semibold tracking-wide">Webflow</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="framer"></i> <span className="text-sm font-semibold tracking-wide">Framer</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="database"></i> <span className="text-sm font-semibold tracking-wide">Supabase</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="wind"></i> <span className="text-sm font-semibold tracking-wide">Tailwind</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="layers"></i> <span className="text-sm font-semibold tracking-wide">Next.js</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="shopping-bag"></i> <span className="text-sm font-semibold tracking-wide">Shopify</span>
</div>

<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="figma"></i> <span className="text-sm font-semibold tracking-wide">Figma</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="atom"></i> <span className="text-sm font-semibold tracking-wide">React</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="file-code-2"></i> <span className="text-sm font-semibold tracking-wide">Webflow</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="framer"></i> <span className="text-sm font-semibold tracking-wide">Framer</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="database"></i> <span className="text-sm font-semibold tracking-wide">Supabase</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="wind"></i> <span className="text-sm font-semibold tracking-wide">Tailwind</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="layers"></i> <span className="text-sm font-semibold tracking-wide">Next.js</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="shopping-bag"></i> <span className="text-sm font-semibold tracking-wide">Shopify</span>
</div>

<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="figma"></i> <span className="text-sm font-semibold tracking-wide">Figma</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<i className="w-5 h-5" data-lucide="atom"></i> <span className="text-sm font-semibold tracking-wide">React</span>
</div>
</div>
</div>
</div>

<section className="py-32 px-6 relative z-10 bg-[#050505]" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Selected Missions</h2>
<p className="text-gray-400 text-lg max-w-lg font-light">Digital frontiers we've conquered for our partners.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors pb-1 border-b border-cyan-400/20 hover:border-cyan-400" href="#">
                    View full flight log <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gray-900 shadow-2xl">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<div className="w-full h-full bg-gradient-to-br from-[#0c0c1e] via-[#1a1a2e] to-black flex items-center justify-center">
<span className="text-cyan-900/40 font-bold tracking-[0.2em] text-sm uppercase">Nebula Protocol</span>
</div>
</div>
<div className="absolute top-6 right-6 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<span className="text-xs font-semibold text-cyan-400">+310% Users</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">Nebula Protocol</h3>
<p className="text-sm text-gray-400 font-light">DeFi Platform • Branding • UI/UX</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:-rotate-45">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer mt-0 md:mt-16 reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gray-900 shadow-2xl">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<div className="w-full h-full bg-gradient-to-bl from-[#000] via-[#111] to-[#1e1e24] flex items-center justify-center">
<span className="text-cyan-900/40 font-bold tracking-[0.2em] text-sm uppercase">Cosmos Ventures</span>
</div>
</div>
<div className="absolute top-6 right-6 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<span className="text-xs font-semibold text-cyan-400">$12M Raised</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">Cosmos Ventures</h3>
<p className="text-sm text-gray-400 font-light">VC Firm • Strategy • Webflow</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:-rotate-45">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden reveal-on-scroll">
<div className="bg-black p-10 hover:bg-white/[0.02] transition-colors duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<i className="w-6 h-6 text-cyan-400" data-lucide="monitor-smartphone"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Stellar Design</h3>
<p className="text-gray-400 text-sm leading-relaxed font-light">
                        UI/UX that defies gravity. We design interfaces that are as beautiful as they are functional.
                    </p>
</div>
<div className="bg-black p-10 hover:bg-white/[0.02] transition-colors duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<i className="w-6 h-6 text-cyan-400" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Engineering</h3>
<p className="text-gray-400 text-sm leading-relaxed font-light">
                        Mission-critical code. We build robust, scalable websites using modern frameworks.
                    </p>
</div>
<div className="bg-black p-10 hover:bg-white/[0.02] transition-colors duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<i className="w-6 h-6 text-cyan-400" data-lucide="rocket"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Growth Trajectory</h3>
<p className="text-gray-400 text-sm leading-relaxed font-light">
                        Launch your revenue. SEO, CRO, and analytics to ensure a successful voyage.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] relative z-10 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center justify-center mb-16 reveal-on-scroll">
<div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300 uppercase tracking-wide hover:bg-white/10 transition-colors cursor-pointer mb-8">
                    Captain's Logs
                </div>
</div>
<div className="relative group/carousel reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="overflow-hidden" id="carousel-viewport">
<div className="carousel-track flex gap-6 transition-transform duration-500 ease-out" id="track">

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 h-[380px] group">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">DK</div>
<div className="flex gap-1 text-cyan-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-gray-300 text-[15px] leading-relaxed font-light">
                                    "Space Otters completely overhauled our digital presence. We're seeing engagement metrics we never thought possible."
                                </p>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">David Kim • VP Marketing</p>
<p className="text-gray-500 text-xs mt-1">Stellar Systems</p>
</div>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 h-[380px] group">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-xs font-bold text-white shadow-lg">JD</div>
<div className="flex gap-1 text-cyan-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-gray-300 text-[15px] leading-relaxed font-light">
                                    "The team at Space Otters are true experts. They took our complex SaaS platform and made it incredibly intuitive."
                                </p>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">Jenna Davis • Founder</p>
<p className="text-gray-500 text-xs mt-1">Orbit Analytics</p>
</div>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 h-[380px] group">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-lg">RM</div>
<div className="flex gap-1 text-cyan-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-gray-300 text-[15px] leading-relaxed font-light">
                                    "Professional, fast, and creative. The ROI on our new landing page paid for the project in 3 weeks."
                                </p>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">Ryan Mitchell • CMO</p>
<p className="text-gray-500 text-xs mt-1">Astro Commerce</p>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-center mt-8 px-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed group" id="prev-btn">
<i className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" data-lucide="chevron-left"></i>
</button>
<div className="flex gap-2" id="dots-container"></div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed group" id="next-btn">
<i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 bg-black reveal-on-scroll" id="contact">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">Ready for liftoff?</h2>
<p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg font-light">Stop drifting in the void. Let's build a digital engine that propels your business forward.</p>
<a className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] mb-20 group" href="mailto:hello@spaceotters.com">
<i className="w-4 h-4" data-lucide="rocket"></i> Start Your Mission
            </a>
<div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-2"><i className="w-4 h-4 text-cyan-400" data-lucide="rocket"></i> SPACE OTTERS.</span>
<div className="flex gap-6 text-sm text-gray-500 items-center">
<a aria-label="Twitter" className="group p-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="twitter"></i>
</a>
<a aria-label="LinkedIn" className="group p-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="linkedin"></i>
</a>
<a aria-label="Instagram" className="group p-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<i className="w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="instagram"></i>
</a>
</div>
<span className="text-sm text-gray-600">© 2025 Space Otters Agency.</span>
</div>
</div>
</footer>


    </>
  );
}
