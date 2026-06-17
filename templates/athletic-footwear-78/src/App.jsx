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



        // --- 1. Initial Hero Text Reveal Animation ---
        window.addEventListener('load', () => {
            const words = document.querySelectorAll('.hero-word');
            words.forEach((word, index) => {
                setTimeout(() => {
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                    word.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out';
                }, 100 + (index * 150));
            });
        });

        // --- 2. Custom Cursor Logic ---
        const cursor = document.getElementById('cursor');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth follower
        function animateCursor() {
            let dx = mouseX - cursorX;
            let dy = mouseY - cursorY;
            cursorX += dx * 0.2; // Ease factor
            cursorY += dy * 0.2;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor hover states
        const interactiveElements = document.querySelectorAll('a, button, .tilt-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '3rem';
                cursor.style.height = '3rem';
                cursor.style.backgroundColor = 'rgba(234, 88, 12, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '2rem';
                cursor.style.height = '2rem';
                cursor.style.backgroundColor = 'transparent';
            });
        });

        // --- 3. Scroll Events (Navbar Glass & Parallax) ---
        const navbar = document.getElementById('navbar');
        const parallaxBg = document.getElementById('parallax-bg');
        const floatingShoe = document.getElementById('floating-shoe');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            // Navbar Glass Effect
            if (scrollY > 50) {
                navbar.style.background = 'rgba(5, 5, 5, 0.8)';
                navbar.style.backdropFilter = 'blur(12px)';
                navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'blur(0px)';
                navbar.style.borderBottom = '1px solid transparent';
            }

            // Parallax Effects
            if (scrollY < window.innerHeight) {
                parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
                floatingShoe.style.transform = `translateY(${-scrollY * 0.1}px) rotate(${-15 + (scrollY * 0.02)}deg)`;
            }
        });

        // --- 4. Floating 3D Continuous Animation (Shoe & Gradient) ---
        const heroGradient = document.getElementById('hero-gradient');
        let time = 0;
        function animateFloating() {
            time += 0.01;
            // Float shoe slightly independently of scroll
            const yOffset = Math.sin(time) * 15;
            
            // Pulse gradient
            const scale = 1 + Math.sin(time * 0.5) * 0.1;
            const opacity = 0.15 + Math.sin(time * 0.3) * 0.05;
            
            heroGradient.style.transform = `translate(-50%, -50%) scale(${scale})`;
            heroGradient.style.opacity = opacity;
            
            requestAnimationFrame(animateFloating);
        }
        animateFloating();

        // --- 5. Marquee Infinite Scroll (Web Animations API) ---
        const marqueeContainer = document.getElementById('marquee-container');
        const marqueeText = "JUST DO IT <span class='mx-4 text-orange-500'>•</span> INNOVATION <span class='mx-4 text-orange-500'>•</span> PERFORMANCE <span class='mx-4 text-orange-500'>•</span> STYLE <span class='mx-4 text-orange-500'>•</span> ";
        
        // Create inner wrapper
        const marqueeContent = document.createElement('div');
        marqueeContent.className = 'text-xs md:text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center';
        // Duplicate content heavily to ensure smooth wrapping
        marqueeContent.innerHTML = marqueeText.repeat(10);
        marqueeContainer.appendChild(marqueeContent);

        // Animate purely via JS inline styles/API for standard compliance
        marqueeContent.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50%)' }
        ], {
            duration: 30000,
            iterations: Infinity,
            easing: 'linear'
        });

        // --- 6. 3D Card Tilt Effect ---
        const tiltCards = document.querySelectorAll('.tilt-card');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 10 degrees)
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none'; // remove transition during active movement
            });
        });

        // --- 7. Intersection Observer for Reveals & Counters ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Handle generic reveal
                    if (entry.target.classList.contains('reveal')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = entry.target.style.transform.replace(/translateY\([^)]+\)|scale\([^)]+\)/, 'translateY(0) scale(1)');
                        observer.unobserve(entry.target); // Only reveal once
                    }

                    // Handle counters
                    const statNum = entry.target.querySelector('.stat-num');
                    if (statNum) {
                        const target = parseInt(statNum.getAttribute('data-target'));
                        let count = 0;
                        const duration = 2000; // 2 seconds
                        const increment = target / (duration / 16); // 60fps
                        
                        const counterInterval = setInterval(() => {
                            count += increment;
                            if (count >= target) {
                                statNum.innerText = target;
                                clearInterval(counterInterval);
                            } else {
                                statNum.innerText = Math.floor(count);
                            }
                        }, 16);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));

        // --- 8. Testimonial Auto-Slider ---
        const track = document.getElementById('testimonial-track');
        let currentTranslate = 0;
        let sliderInterval;

        function startSlider() {
            sliderInterval = setInterval(() => {
                currentTranslate -= 1; // Move left slowly
                // Reset logic (simplistic infinite loop visual)
                if (Math.abs(currentTranslate) > track.scrollWidth / 2) {
                    currentTranslate = 0;
                }
                track.style.transform = `translateX(${currentTranslate}px)`;
            }, 16); // ~60fps smooth scroll
        }

        // Clone items for seamless loop
        track.innerHTML += track.innerHTML; 
        startSlider();

        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        track.addEventListener('mouseleave', startSlider);

    
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
      

<div className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-500/50 pointer-events-none z-[100] flex items-center justify-center mix-blend-difference hidden md:flex" id="cursor" style={{transform: 'translate(-50%, -50%)', transition: 'transform 0.1s ease-out, width 0.2s, height 0.2s'}}>
<div className="w-1 h-1 bg-orange-500 rounded-full"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-500" id="navbar" style={{background: 'transparent'}}>
<a className="text-xl font-medium tracking-tighter text-white z-10 relative group" href="#">
            NIKE
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
</a>
<div className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#">Men</a>
<a className="hover:text-white transition-colors duration-300" href="#">Women</a>
<a className="hover:text-white transition-colors duration-300" href="#">Kids</a>
<a className="hover:text-white transition-colors duration-300" href="#">Sale</a>
</div>
<div className="flex gap-4 items-center z-10">
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bag-2-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

<div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] opacity-20 pointer-events-none mix-blend-screen" id="hero-gradient" style={{background: 'radial-gradient(circle, #ea580c 0%, transparent 70%)', transform: 'translate(-50%, -50%)'}}></div>

<div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-5 z-0" id="parallax-bg">
<svg className="w-[120vw] md:w-[80vw] fill-current text-white" viewbox="0 0 100 100">
<path d="M28.15 63.85c-11.4 0-18.7-6.2-18.7-14 0-11 12.3-25.7 32.5-38.3 4.1-2.5 8.4-4.7 12.8-6.6-4.5 3.3-8.8 7.3-12.7 11.9-8.4 9.9-10.7 18.2-6.5 21.6 3.6 2.9 10.7 1.6 19.9-3.4 17-9.3 33.7-24 45.4-38.6-6 13.9-17 28.2-32 39.8-11.2 8.7-25 14.6-35.4 17.6-1.8.5-3.6.7-5.3.7z"></path>
</svg>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
<div className="overflow-hidden mb-2">
<h1 className="hero-word text-6xl md:text-[10vw] font-semibold tracking-tighter leading-[0.85] text-white" style={{transform: 'translateY(110%)', opacity: '0'}}>JUST</h1>
</div>
<div className="overflow-hidden mb-6 md:mb-10">
<h1 className="hero-word text-6xl md:text-[10vw] font-semibold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600" style={{transform: 'translateY(110%)', opacity: '0'}}>DO IT.</h1>
</div>
<div className="overflow-hidden mt-8">
<p className="hero-word text-sm md:text-base text-zinc-400 font-medium tracking-wide max-w-md mx-auto" style={{transform: 'translateY(100%)', opacity: '0'}}>Engineered for the exact specifications of championship athletes. Embrace the grind.</p>
</div>
<div className="mt-12 overflow-hidden rounded-full">
<button className="hero-word group relative px-8 py-4 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95" style={{transform: 'translateY(100%)', opacity: '0'}}>
<span className="relative z-10">Explore Collection</span>
<div className="absolute inset-0 h-full w-full bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
</button>
</div>
</div>

<div className="absolute bottom-10 md:-bottom-20 right-0 md:right-[10%] w-[80vw] md:w-[45vw] z-20 pointer-events-none drop-shadow-2xl mix-blend-normal" id="floating-shoe" style={{filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.8))'}}>
<img alt="Nike Shoe" className="w-full h-auto object-contain mask-image-linear opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 40%)', maskImage: 'linear-gradient(to top, transparent 5%, black 40%)', transform: 'rotate(-15deg)'}}/>
</div>
</section>

<section className="w-full border-y border-white/5 py-4 bg-[#080808] overflow-hidden relative z-30">
<div className="flex whitespace-nowrap items-center w-max" id="marquee-container">

</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-30">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal" style={{opacity: '0', transform: 'translateY(40px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-2">NEW ARRIVALS</h2>
<p className="text-sm text-zinc-400 font-medium">The latest innovation in performance.</p>
</div>
<a className="text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors mt-6 md:mt-0 flex items-center gap-2 group" href="#">
                View All <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="tilt-card group relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-white/20 transition-colors cursor-pointer reveal" style={{opacity: '0', transform: 'translateY(40px)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s', transformStyle: 'preserve-3d'}}>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full tracking-wide">NEW</span>
</div>
<div className="relative w-full h-64 md:h-80 flex items-center justify-center pointer-events-none" style={{transform: 'translateZ(50px)'}}>
<img alt="Shoe" className="w-4/5 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 mix-blend-lighten" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-end" style={{transform: 'translateZ(30px)'}}>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Air Max Alpha</h3>
<p className="text-xs text-zinc-500 font-medium">Men's Training Shoe</p>
</div>
<span className="text-base font-semibold text-white">$140</span>
</div>
</div>

<div className="tilt-card group relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-white/20 transition-colors cursor-pointer reveal" style={{opacity: '0', transform: 'translateY(40px)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s', transformStyle: 'preserve-3d'}}>
<div className="relative w-full h-64 md:h-80 flex items-center justify-center pointer-events-none" style={{transform: 'translateZ(50px)'}}>
<img alt="Shoe" className="w-4/5 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 mix-blend-lighten" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-end" style={{transform: 'translateZ(30px)'}}>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">ZoomX Vaporfly</h3>
<p className="text-xs text-zinc-500 font-medium">Racing Shoe</p>
</div>
<span className="text-base font-semibold text-white">$250</span>
</div>
</div>

<div className="tilt-card group relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-white/20 transition-colors cursor-pointer reveal" style={{opacity: '0', transform: 'translateY(40px)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s', transformStyle: 'preserve-3d'}}>
<div className="relative w-full h-64 md:h-80 flex items-center justify-center pointer-events-none" style={{transform: 'translateZ(50px)'}}>
<img alt="Shoe" className="w-4/5 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 mix-blend-lighten" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&amp;q=80"/>
</div>
<div className="mt-6 flex justify-between items-end" style={{transform: 'translateZ(30px)'}}>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Pegasus Trail 4</h3>
<p className="text-xs text-zinc-500 font-medium">Trail Running Shoe</p>
</div>
<span className="text-base font-semibold text-white">$130</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#080808] relative z-30">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/5">
<div className="flex flex-col items-center text-center reveal" style={{opacity: '0', transform: 'scale(0.9)', transition: 'all 0.8s ease-out'}}>
<div className="flex items-baseline gap-1 mb-2">
<span className="stat-num text-4xl md:text-5xl font-semibold tracking-tighter text-white" data-target="200">0</span>
<span className="text-3xl font-medium text-orange-500">+</span>
</div>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Athletes</p>
</div>
<div className="flex flex-col items-center text-center reveal" style={{opacity: '0', transform: 'scale(0.9)', transition: 'all 0.8s ease-out 0.1s'}}>
<div className="flex items-baseline gap-1 mb-2">
<span className="stat-num text-4xl md:text-5xl font-semibold tracking-tighter text-white" data-target="50">0</span>
<span className="text-3xl font-medium text-orange-500">+</span>
</div>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Countries</p>
</div>
<div className="flex flex-col items-center text-center reveal" style={{opacity: '0', transform: 'scale(0.9)', transition: 'all 0.8s ease-out 0.2s'}}>
<div className="flex items-baseline gap-1 mb-2">
<span className="stat-num text-4xl md:text-5xl font-semibold tracking-tighter text-white" data-target="100">0</span>
<span className="text-3xl font-medium text-orange-500">%</span>
</div>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Commitment</p>
</div>
<div className="flex flex-col items-center text-center reveal" style={{opacity: '0', transform: 'scale(0.9)', transition: 'all 0.8s ease-out 0.3s'}}>
<div className="flex items-baseline gap-1 mb-2">
<span className="stat-num text-4xl md:text-5xl font-semibold tracking-tighter text-white" data-target="24">0</span>
<span className="text-3xl font-medium text-orange-500">/7</span>
</div>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Hustle</p>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden relative z-30">
<div className="max-w-[1400px] mx-auto mb-16 reveal" style={{opacity: '0', transform: 'translateY(40px)', transition: 'all 1s ease-out'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-2 text-center">PROVEN PERFORMANCE</h2>
</div>
<div className="relative w-full max-w-5xl mx-auto cursor-grab active:cursor-grabbing">

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-6 w-max" id="testimonial-track" style={{transform: 'translateX(0px)'}}>

<div className="w-[300px] md:w-[400px] shrink-0 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
<iconify-icon className="text-3xl text-orange-500/50 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed mb-8">"The responsiveness is unparalleled. It feels like the shoe is returning energy with every single stride."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold">EC</div>
<div>
<p className="text-sm font-semibold text-white">Eliud Kipchoge</p>
<p className="text-xs text-zinc-500">Marathon Legend</p>
</div>
</div>
</div>
<div className="w-[300px] md:w-[400px] shrink-0 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
<iconify-icon className="text-3xl text-orange-500/50 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed mb-8">"Lockdown and traction. When I cut, I need to know the shoe moves with me. Nike delivers every time."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold">LJ</div>
<div>
<p className="text-sm font-semibold text-white">LeBron James</p>
<p className="text-xs text-zinc-500">Basketball Player</p>
</div>
</div>
</div>
<div className="w-[300px] md:w-[400px] shrink-0 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
<iconify-icon className="text-3xl text-orange-500/50 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed mb-8">"Innovation isn't just a buzzword. You can feel the science in the materials when you're pushing past your limits."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold">SW</div>
<div>
<p className="text-sm font-semibold text-white">Serena Williams</p>
<p className="text-xs text-zinc-500">Tennis Champion</p>
</div>
</div>
</div>
<div className="w-[300px] md:w-[400px] shrink-0 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
<iconify-icon className="text-3xl text-orange-500/50 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed mb-8">"Lightweight without sacrificing stability. It's the perfect balance for explosive speed on the pitch."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold">KM</div>
<div>
<p className="text-sm font-semibold text-white">Kylian Mbappé</p>
<p className="text-xs text-zinc-500">Footballer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-24 pb-12 px-6 md:px-12 border-t border-white/5 relative z-30">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="text-2xl font-medium tracking-tighter text-white mb-6">NIKE</div>
<p className="text-xs text-zinc-500 font-medium max-w-xs leading-relaxed">Inspiring the world's athletes through innovation, design, and an unwavering commitment to excellence.</p>
<div className="flex gap-4 mt-6">
<a className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Products</h4>
<ul className="space-y-4 text-sm font-medium text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Footwear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Apparel</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Releases</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Support</h4>
<ul className="space-y-4 text-sm font-medium text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Delivery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Stay Updated</h4>
<p className="text-xs text-zinc-500 font-medium mb-4">Sign up for exclusive drops and news.</p>
<form className="relative group" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white transition-colors pb-3" placeholder="Email address" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-white transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs font-medium text-zinc-600">
<p>© 2024 Nike, Inc. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-300 transition-colors" href="#">Guides</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Sale</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Use</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>


    </>
  );
}
