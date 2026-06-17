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



        // 1. COMPLEX TEXT ANIMATION
        const headlineContainer = document.getElementById('headline-container');
        // Separated parts: First part white, second part blue, stacked via 'isBlock'
        const textParts = [
            { text: "Get Found Online.", highlight: false },
            { text: "Get More Calls.", highlight: true }
        ];

        let globalCharIndex = 0;

        function animateHeadline() {
            headlineContainer.innerHTML = ''; 
            
            textParts.forEach((part, partIndex) => {
                // Create a block container for each line
                const lineContainer = document.createElement('span');
                lineContainer.className = 'block'; // Forces new line
                if(partIndex > 0) lineContainer.classList.add('mt-2'); // Add spacing for second line
                
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
                        // Stagger 40ms per character
                        charSpan.style.animationDelay = `${0.2 + (globalCharIndex * 0.04)}s`;
                        wordSpan.appendChild(charSpan);
                        globalCharIndex++;
                    });

                    lineContainer.appendChild(wordSpan);

                    if (wordIndex < words.length - 1) {
                        const space = document.createElement('span');
                        space.innerHTML = '&nbsp;';
                        space.className = 'char-reveal space';
                        space.style.animationDelay = `${0.2 + (globalCharIndex * 0.04)}s`;
                        lineContainer.appendChild(space);
                        globalCharIndex++;
                    }
                });

                headlineContainer.appendChild(lineContainer);
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
            document.getElementById('digital-clock').textContent = timeString;
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
      

<div className="fixed w-5 h-5 border border-cyan-400/50 rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out hidden md:block mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2" id="cursor" style={{borderColor: 'rgba(34, 211, 238, 0.5)', backgroundColor: 'transparent'}}></div>
<div className="fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-[100] hidden md:block top-0 left-0 -translate-x-1/2 -translate-y-1/2" id="cursor-dot"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 backdrop-blur-md bg-black/60 border-b border-white/5 transition-all duration-300">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all duration-300">
<span className="font-space-grotesk font-bold text-lg leading-none pb-1">w<span className="text-cyan-400">.</span></span>
</div>
<span className="text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300 font-space-grotesk font-semibold">webonair<span className="text-cyan-400 font-space-grotesk font-semibold">.</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-cyan-400 transition-colors font-geist" href="#work">Results</a>
<a className="hover:text-cyan-400 transition-colors font-geist" href="#services">Services</a>
<a className="hover:text-cyan-400 transition-colors font-geist" href="#testimonials">Testimonials</a>
<a className="px-5 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5 hover:shadow-cyan-400/20 font-geist" href="#booking">Book Discovery Call</a>
</div>
<button className="md:hidden text-white hover:text-cyan-400 transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black z-[60] hidden flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-5 right-6 text-gray-400 hover:text-white" id="close-menu">
<iconify-icon height="24" icon="solar:close-square-linear" width="24"></iconify-icon>
</button>
<a className="text-3xl tracking-tight hover:text-cyan-400 font-space-grotesk font-semibold" href="#work">Results</a>
<a className="text-3xl tracking-tight hover:text-cyan-400 font-space-grotesk font-semibold" href="#services">Services</a>
<a className="text-3xl tracking-tight hover:text-cyan-400 font-space-grotesk font-semibold" href="#testimonials">Testimonials</a>
<a className="text-xl px-8 py-3 bg-cyan-400 text-black rounded-full mt-4 font-space-grotesk font-semibold" href="#booking">Book Discovery Call</a>
</div>

<section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">

<div className="hidden md:block absolute inset-0 z-0 opacity-80">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB" style={{filter: 'hue-rotate(170deg) saturate(2.5) brightness(1.1) contrast(1.1)'}} width="100%"></iframe>
<div className="bg-gradient-to-b from-black/10 via-black/40 to-[#050505] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="md:hidden absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
<div className="mobile-orb w-[500px] h-[500px] rounded-full blur-[80px]"></div>
<div className="absolute inset-0 bg-black/70"></div>
</div>
<div className="flex flex-col z-10 font-montserrat text-center mt-6 mr-auto ml-auto relative items-center">

<div className="mb-8 reveal-on-scroll is-visible">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
<div className="relative w-2 h-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</div>
<span className="text-xs font-mono text-cyan-400 tracking-wider font-geist" id="digital-clock">21:41:23</span>
<div className="h-3 w-[1px] bg-white/10"></div>
<span className="text-[10px] uppercase font-semibold text-gray-400 tracking-widest font-geist">websites for Trades &amp; Professionals</span>
</div>
</div>

<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-semibold tracking-tighter leading-[1.1] mb-8 text-white max-w-6xl mx-auto">
<span className="flex flex-col gap-2" id="headline-container"><span className="block"><span className="" style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span className="char-reveal" style={{animationDelay: '0.2s'}}>G</span><span className="char-reveal" style={{animationDelay: '0.24s'}}>e</span><span className="char-reveal" style={{animationDelay: '0.28s'}}>t</span></span><span className="char-reveal space" style={{animationDelay: '0.32s'}}> </span><span style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span className="char-reveal" style={{animationDelay: '0.36s'}}>F</span><span className="char-reveal" style={{animationDelay: '0.4s'}}>o</span><span className="char-reveal" style={{animationDelay: '0.44s'}}>u</span><span className="char-reveal" style={{animationDelay: '0.48s'}}>n</span><span className="char-reveal" style={{animationDelay: '0.52s'}}>d</span></span><span className="char-reveal space" style={{animationDelay: '0.56s'}}> </span><span className="" style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span className="char-reveal" style={{animationDelay: '0.6s'}}>O</span><span className="char-reveal" style={{animationDelay: '0.64s'}}>n</span><span className="char-reveal" style={{animationDelay: '0.68s'}}>l</span><span className="char-reveal" style={{animationDelay: '0.72s'}}>i</span><span className="char-reveal" style={{animationDelay: '0.76s'}}>n</span><span className="char-reveal" style={{animationDelay: '0.8s'}}>e</span><span className="char-reveal" style={{animationDelay: '0.84s'}}>.</span></span></span><span className="block mt-2"><span className="text-cyan-400" style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span className="char-reveal" style={{animationDelay: '0.88s'}}>G</span><span className="char-reveal" style={{animationDelay: '0.92s'}}>e</span><span className="char-reveal" style={{animationDelay: '0.96s'}}>t</span></span><span className="char-reveal space" style={{animationDelay: '1s'}}> </span><span className="text-cyan-400" style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span className="char-reveal" style={{animationDelay: '1.04s'}}>M</span><span className="char-reveal" style={{animationDelay: '1.08s'}}>o</span><span className="char-reveal" style={{animationDelay: '1.12s'}}>r</span><span className="char-reveal" style={{animationDelay: '1.16s'}}>e</span></span><span className="char-reveal space" style={{animationDelay: '1.2s'}}> </span><span className="text-cyan-400" style={{display: 'inline-block', whiteSpace: 'nowrap'}}><span className="char-reveal" style={{animationDelay: '1.24s'}}>C</span><span className="char-reveal" style={{animationDelay: '1.28s'}}>a</span><span className="char-reveal" style={{animationDelay: '1.32s'}}>l</span><span className="char-reveal" style={{animationDelay: '1.36s'}}>l</span><span className="char-reveal" style={{animationDelay: '1.4s'}}>s</span><span className="char-reveal" style={{animationDelay: '1.44s'}}>.</span></span></span></span>
</h1>

<p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light reveal-on-scroll is-visible flex flex-col md:flex-row items-center justify-center gap-2">
<span className="font-semibold text-gray-50 tracking-tight font-nunito">Professional websites designed for trades and service businesses ready to grow and dominate their local market.</span>
<iconify-icon className="inline-block text-cyan-400" height="24" icon="solar:graph-new-up-linear" style={{color: 'rgb(34, 211, 238)'}} width="24"></iconify-icon>
</p>

<div className="flex flex-col sm:flex-row gap-5 justify-center items-center reveal-on-scroll is-visible">
<a className="group relative w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-center btn-glow overflow-hidden" href="#booking">
<span className="relative z-10 flex items-center justify-center gap-2 font-geist">
                        Book Discovery Call <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</a>
<a className="group w-full sm:w-auto px-8 py-4 text-white border border-white/10 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm text-center flex items-center justify-center gap-2 font-geist" href="#work">
                    See Results <iconify-icon className="transition-transform group-hover:translate-y-0.5" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-black/40 backdrop-blur-md relative z-20 reveal-on-scroll is-visible">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
<div className="text-center md:text-left group cursor-default">
<div className="group-hover:text-cyan-400 transition-colors text-3xl font-semibold text-white tracking-tight font-space-grotesk mb-1">127+</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider font-geist">Trades Served</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="group-hover:text-white transition-colors text-3xl font-semibold text-cyan-400 tracking-tight font-space-grotesk mb-1">$250K+</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider font-geist">Client Revenue</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="text-3xl text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors font-space-grotesk font-semibold">340%</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider font-geist">Avg ROI</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="group-hover:text-cyan-400 transition-colors text-3xl font-semibold text-white tracking-tight font-space-grotesk mb-1">1 Week</div>
<div className="uppercase text-xs font-semibold text-gray-500 tracking-wider font-geist">Website Launch</div>
</div>
</div>
</div>
</div>

<div className="py-10 border-b border-white/5 bg-[#080808] overflow-hidden reveal-on-scroll is-visible">
<div className="scroller-mask">
<div className="scroller-inner flex gap-12 items-center pl-6">

<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Local SEO</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Lead Generation</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Google Maps</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon className="" height="20" icon="solar:bell-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Automated SMS</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:star-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Review Mgmt</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:card-recieved-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">CRM Integration</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:graph-up-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Google Ads</span>
</div>

<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Local SEO</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Lead Generation</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Google Maps</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Automated SMS</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-default">
<iconify-icon height="20" icon="solar:star-linear" width="20"></iconify-icon> <span className="text-sm font-semibold tracking-wide font-geist">Review Mgmt</span>
</div>
</div>
</div>
</div>

<section className="py-32 px-6 relative z-10 bg-[#050505]" id="work">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row gap-6 reveal-on-scroll is-visible mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-5xl tracking-tighter text-white mb-4 font-space-grotesk font-semibold">Selected Results</h2>
<p className="text-lg font-light text-gray-400 font-geist max-w-lg">Live systems. Scroll to explore.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group reveal-on-scroll is-visible">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gray-900 shadow-2xl group-hover:border-cyan-500/30 transition-all iframe-container">

<iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" loading="lazy" sandbox="allow-scripts allow-same-origin" src="https://mibuildingcontractors.netlify.app/" style={{pointerEvents: 'auto'}} title="MI Building Contractors">
</iframe>
<div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
<span className="text-xs font-semibold text-cyan-400 font-geist">Lead Gen Optimized</span>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 pointer-events-none scroll-hint transition-opacity duration-300">
<span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold flex items-center gap-1 font-geist"><iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> Scroll to View</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors font-space-grotesk font-semibold">MI Building Contractors</h3>
<p className="text-sm text-gray-400 font-light font-geist">Renovations &amp; Extensions • Lead Funnel</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:-rotate-45">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group reveal-on-scroll is-visible">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gray-900 shadow-2xl group-hover:border-cyan-500/30 transition-all iframe-container">
<iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" loading="lazy" sandbox="allow-scripts allow-same-origin" src="https://kings-heath-roofing.netlify.app/" style={{pointerEvents: 'auto'}} title="Kings Heath Roofing">
</iframe>
<div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
<span className="text-xs font-semibold text-cyan-400 font-geist">#1 Local Ranking</span>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 pointer-events-none scroll-hint transition-opacity duration-300">
<span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold flex items-center gap-1 font-geist"><iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> Scroll to View</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors font-space-grotesk font-semibold">Kings Heath Roofing</h3>
<p className="text-sm text-gray-400 font-light font-geist">Roofing Specialist • Local SEO Dominance</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:-rotate-45">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group reveal-on-scroll is-visible">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gray-900 shadow-2xl group-hover:border-cyan-500/30 transition-all iframe-container">
<iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" loading="lazy" sandbox="allow-scripts allow-same-origin" src="https://recipi-africa.netlify.app/" style={{pointerEvents: 'auto'}} title="Recipi Africa">
</iframe>
<div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
<span className="text-xs font-semibold text-cyan-400 font-geist">High Engagement</span>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 pointer-events-none scroll-hint transition-opacity duration-300">
<span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold flex items-center gap-1 font-geist"><iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> Scroll to View</span>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors font-space-grotesk font-semibold">Recipi Africa</h3>
<p className="text-sm text-gray-400 font-light font-geist">Culinary Platform • Content Strategy</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:-rotate-45">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group reveal-on-scroll is-visible">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gray-900 shadow-2xl group-hover:border-cyan-500/30 transition-all iframe-container">
<iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" loading="lazy" sandbox="allow-scripts allow-same-origin" src="https://careatheart.co.uk/" style={{pointerEvents: 'auto'}} title="Care At Heart">
</iframe>
<div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
<span className="text-xs font-semibold text-cyan-400 font-geist">Recruitment Funnel</span>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 pointer-events-none scroll-hint transition-opacity duration-300">
<span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold flex items-center gap-1 font-geist"><iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> Scroll to View</span>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors font-space-grotesk font-semibold">Care At Heart</h3>
<p className="text-sm text-gray-400 font-light font-geist">Care Agency • Service Inquiries</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:-rotate-45">
<iconify-icon className="" height="16" icon="solar:arrow-right-linear" style={{color: 'rgb(0, 0, 0)'}} width="16"></iconify-icon>
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
<iconify-icon className="text-cyan-400" height="24" icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 text-white font-space-grotesk font-semibold">Lead Gen Websites</h3>
<p className="text-gray-400 text-sm leading-relaxed font-light font-geist">
                        High-speed websites designed specifically to turn local traffic into booked appointments.
                    </p>
</div>
<div className="bg-black p-10 hover:bg-white/[0.02] transition-colors duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-cyan-400" height="24" icon="solar:map-point-wave-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 text-white font-space-grotesk font-semibold">Local SEO &amp; Maps</h3>
<p className="text-gray-400 text-sm leading-relaxed font-light font-geist">
                        Dominate the "near me" searches and rank #1 in your local service area on Google Maps.
                    </p>
</div>
<div className="bg-black p-10 hover:bg-white/[0.02] transition-colors duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-cyan-400" height="24" icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 text-white font-space-grotesk font-semibold">Ads &amp; Automation</h3>
<p className="text-gray-400 text-sm leading-relaxed font-light font-geist">
                        Google Ads management and automated SMS follow-ups to ensure you never miss a lead.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] relative z-10 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center justify-center mb-16 reveal-on-scroll">
<div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300 uppercase tracking-wide hover:bg-white/10 transition-colors cursor-pointer mb-8 font-geist">
                    What Contractors Say
                </div>
</div>
<div className="relative group/carousel reveal-on-scroll">
<div className="overflow-hidden" id="carousel-viewport">
<div className="carousel-track flex gap-6 transition-transform duration-500 ease-out" id="track">

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 h-[380px] group">
<div className="">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold text-white shadow-lg font-geist">JD</div>
<div className="flex gap-1 text-cyan-400">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<p className="text-gray-300 text-[15px] leading-relaxed font-light font-geist">
                                    "Our phone started ringing off the hook 2 weeks after launch. Best investment for our roofing business, period."
                                </p>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors font-geist">John Davis • Owner</p>
<p className="text-gray-500 text-xs mt-1 font-geist">Davis Roofing &amp; Exteriors</p>
</div>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 h-[380px] group">
<div className="">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center text-xs font-bold text-white shadow-lg font-geist">MS</div>
<div className="flex gap-1 text-cyan-400">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<p className="text-gray-300 text-[15px] leading-relaxed font-light font-geist">
                                    "webonair streamlined our entire booking process. We save 10 hours a week on admin and book more jobs automatically."
                                </p>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors font-geist">Mike Stevens • Founder</p>
<p className="text-gray-500 text-xs mt-1 font-geist">Stevens Electric</p>
</div>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 h-[380px] group">
<div className="">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-lg font-geist">SL</div>
<div className="flex gap-1 text-cyan-400">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<p className="text-[15px] leading-relaxed font-light text-gray-300 font-geist">"We went from page 3 to page 1 on Google for 'roofing repair' in 3 months. The ROI has been incredible."</p>
</div>
<div className="pt-6 border-t border-white/5 mt-auto">
<p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors font-geist">Sarah Lewis • Ops Manager</p>
<p className="text-gray-500 text-xs mt-1 font-geist">Metro HVAC Services</p>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-center mt-8 px-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed group" disabled="" id="prev-btn">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform" height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="flex gap-2" id="dots-container"><div className="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer bg-cyan-400 w-4"></div></div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed group" disabled="" id="next-btn">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#030303] relative z-10 border-t border-white/5" id="booking">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl tracking-tighter text-white mb-6 font-space-grotesk font-semibold">Book Your Discovery Call</h2>
<p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg font-light font-geist">Select a time below to discuss how we can get you more qualified leads next week.</p>
<div className="w-full bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<iframe className="" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-unique-id-mapped="true" id="Xl7ErWMZFL10EvL4lpx0_1771328782981" scrolling="yes" src="https://links.madlabz.uk/widget/booking/Xl7ErWMZFL10EvL4lpx0" style={{width: '100%', border: 'none', overflow: 'auto', minHeight: '700px'}}></iframe>

</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 bg-black reveal-on-scroll">
<div className="max-w-7xl mx-auto text-center">
<div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-white">
<span className="font-space-grotesk font-bold text-sm leading-none pb-0.5">w<span className="text-cyan-400">.</span></span>
</div>
<span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors font-geist">webonair.</span>
</a>
<div className="flex gap-6 text-sm text-gray-500 items-center">
<a aria-label="Twitter" className="group p-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" height="16" icon="prime:twitter" width="16"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="group p-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" height="16" icon="prime:linkedin" width="16"></iconify-icon>
</a>
<a aria-label="Instagram" className="group p-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" height="16" icon="prime:instagram" width="16"></iconify-icon>
</a>
</div>
<span className="text-sm text-gray-600 font-geist">© 2026 webonair. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
