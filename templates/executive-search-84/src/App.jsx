import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Preloader Logic
        window.addEventListener('load', () => {
            const progress = document.getElementById('loader-progress');
            const preloader = document.getElementById('preloader');
            
            let loadVal = 0;
            const loadInterval = setInterval(() => {
                // Restored to a faster load time
                loadVal += Math.random() * 10 + 5; 
                if(loadVal > 100) loadVal = 100;
                progress.style.width = loadVal + '%';
                
                if(loadVal === 100) {
                    clearInterval(loadInterval);
                    setTimeout(() => {
                        preloader.classList.add('loaded');
                        document.querySelector('#hero').classList.add('hero-revealed');
                        setTimeout(revealOnScroll, 500); 
                    }, 500); 
                }
            }, 50);
        });

        // PARALLAX ENGINE
        let ticking = false;
        
        function updateParallax() {
            const parallaxElements = document.querySelectorAll('.parallax-element');
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.1;
                const rect = el.parentElement.getBoundingClientRect(); // relative to viewport
                const elementTop = rect.top;
                const elementHeight = rect.height;

                if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                    let yPos = 0;
                    const center = windowHeight / 2;
                    const elCenter = elementTop + (elementHeight / 2);
                    const diff = center - elCenter;
                    yPos = diff * speed;
                    
                    el.style.transform = `translateY(${yPos}px)`;
                }
            });
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });

        updateParallax();

        // Reveal on Scroll
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                    const counters = reveal.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        if (!counter.classList.contains('counted')) {
                            counter.classList.add('counted');
                            animateCounter(counter);
                        }
                    });
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);

        // Counter
        function animateCounter(el) {
            const target = +el.getAttribute('data-target');
            const duration = 2000; 
            const step = target / (duration / 16); 
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.innerText = target + (target > 100 ? '+' : '');
                    clearInterval(timer);
                } else {
                    el.innerText = Math.ceil(current) + (target > 100 ? '+' : '');
                }
            }, 16);
        }

        // CAROUSEL STACK LOGIC
        const cardsContainer = document.getElementById('cards-container');
        const dots = [
          document.getElementById('dot-1'),
          document.getElementById('dot-2'),
          document.getElementById('dot-3'),
          document.getElementById('dot-4')
        ];
        
        let currentCard = 1;
        let isAnimating = false;
        
        function updateDots() {
            if(!cardsContainer) return;
            dots.forEach((dot, index) => {
                if (index === currentCard - 1) {
                dot.className = 'cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]';
                } else {
                dot.className = 'cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300';
                }
            });
        }
        
        function setActiveCard(cardNumber) {
          if(!cardsContainer) return;
          if (isAnimating || cardNumber === currentCard) return;
          
          isAnimating = true;
          cardsContainer.className = `stack-section card-${cardNumber}-active relative`;
          currentCard = cardNumber;
          updateDots();
          
          setTimeout(() => {
            isAnimating = false;
          }, 800);
        }
        
        dots.forEach((dot, index) => {
          if(dot) {
              dot.addEventListener('click', () => {
                setActiveCard(index + 1);
              });
          }
        });
        
        // Auto-rotate cards
        if(cardsContainer) {
            setInterval(() => {
              if (!isAnimating) {
                const nextCard = currentCard === 4 ? 1 : currentCard + 1;
                setActiveCard(nextCard);
              }
            }, 5000);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor"></div>
<div className="noise-overlay"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="liquid-blob bg-[#007bff]" style={{width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: '0.2', animationDuration: '15s'}}></div>
<div className="liquid-blob bg-purple-600" style={{width: '400px', height: '400px', top: '40%', right: '-100px', opacity: '0.15', animationDuration: '20s', animationDelay: '-5s'}}></div>
<div className="liquid-blob bg-cyan-600" style={{width: '600px', height: '600px', bottom: '-150px', left: '20%', opacity: '0.15', animationDuration: '25s', animationDelay: '-10s'}}></div>
</div>
<div id="preloader">
<div className="flex flex-col items-center gap-4 px-4 text-center">
<span className="font-heading tracking-[0.2em] text-xs uppercase text-white/50" id="loader-text">INITIATING EXECUTIVE SEARCH</span>
<div className="loader-bar">
<div className="loader-progress" id="loader-progress"></div>
</div>
</div>
</div>

<nav className="fixed w-full z-[60] top-0 transition-all duration-300 py-4 max-w-[100vw]">
<div className="max-w-7xl mx-auto px-4">

<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<a className="cursor-hover group flex flex-col w-fit" href="#">
<span className="font-heading font-medium text-xl tracking-tighter text-white leading-none flex items-center">
                        accsensia
                        <span className="text-white font-sans font-bold text-lg ml-1 group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
</span>
<div className="mt-1 w-full">
<span className="text-[0.55rem] font-medium tracking-[0.2em] text-white uppercase leading-none block">Executive Search</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#about">About</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#identity">Identity</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#sectors">Sectors</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#c-suite">C-Suite</a>
</div>
<div className="hidden md:block">
<button className="cursor-hover px-5 py-2 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-sm">
                        Menu
                    </button>
</div>
<button className="md:hidden text-white cursor-hover flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden max-w-[100vw]" id="hero">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Dubai Skyline" className="parallax-element hero-zoom w-full h-[120%] object-cover opacity-60 will-change-transform" data-parallax-speed="0.5" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/30 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto flex flex-col items-center mt-12">
<h1 className="font-heading text-5xl sm:text-[4rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[9.5rem] font-medium leading-[0.85] tracking-tight text-white drop-shadow-2xl">
<span className="split-line"><span className="block">STRATEGIC</span></span>
<span className="split-line"><span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20" style={{transitionDelay: '100ms'}}>LEADERSHIP</span></span>
</h1>
<p className="mt-8 text-base md:text-xl text-gray-300/80 font-light max-w-2xl mx-auto leading-relaxed reveal opacity-0 delay-200 backdrop-blur-sm rounded-lg p-2">
                A specialist executive search firm bridging the gap between <span className="text-white border-b border-[#007bff]/50 pb-0.5 cursor-hover hover:border-[#007bff] hover:text-[#007bff] transition-colors">elite talent</span> and visionary organizations across North America, Australia, and the Middle East.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal opacity-0 delay-300 w-full">
<a className="cursor-hover w-full sm:w-auto px-8 py-4 bg-[#007bff] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.4)] text-center" href="#contact">Partner With Us</a>
<a className="cursor-hover w-full sm:w-auto px-8 py-4 glass-panel border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center" href="#about">Learn More</a>
</div>
</div>
</header>

<section className="pt-32 pb-12 relative z-10" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white leading-tight">Curating Leadership<br/><span className="text-gray-500">Strategies</span></h2>
</div>
<div className="reveal delay-100 space-y-6 text-lg text-gray-400 leading-relaxed font-light mx-auto">
<p>Accsensia is a premier executive search firm delivering C-suite leadership across North America, Australia, and MENA. Adopting a strategic talent management approach, we secure transformative leaders for the global stage.</p>
<p>We specialize in sectors defining the future, AI, Cybersecurity, Renewable Energy, Mining, and Critical Infrastructure. Our mission is to provide the Strategic Leadership DNA necessary for long-term success, ensuring our clients thrive within today’s complex landscapes.</p>
</div>
</div>
</section>

<section className="pt-12 pb-32 relative z-10" id="identity">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Human<br/><span className="text-gray-500">Capital</span></h2>
<p className="text-gray-400 max-w-md text-lg">We are more than recruiters; we are strategic partners in human capital. A hire at this level is a long-term investment.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6" id="gallery-grid">

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group gallery-card-hover reveal delay-100 relative">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
<img alt="Executive Boardroom" className="w-full h-full object-cover gallery-img transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex flex-col justify-end p-6 gallery-overlay opacity-0 transition-opacity duration-300">
<span className="glass-panel w-fit px-2 py-1 rounded text-xs font-semibold uppercase tracking-widest text-white mb-2 backdrop-blur-md">Cultural Alignment</span>
<h4 className="font-heading text-2xl font-bold text-white">The Boardroom Dynamic</h4>
<p className="text-xs text-gray-300 mt-1 drop-shadow-md">Ensuring seamless integration at the highest level.</p>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-200 border border-white/10 relative">
<div className="absolute inset-0 z-0">
<img alt="Tech Innovation" className="w-full h-full object-cover transition-all duration-700" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 w-full p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007bff] to-cyan-400 flex items-center justify-center mb-3">
<iconify-icon className="text-white text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<h4 className="font-heading text-lg font-bold text-white mb-1">Digital Frontier</h4>
<p className="text-xs text-gray-300 leading-snug">Sourcing technical visionaries for AI and global infrastructure.</p>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-150 relative bg-[#050a14]">
<div className="absolute inset-0 z-0">
<img alt="Dubai Cityscape" className="w-full h-full object-cover filter opacity-80 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4">
<span className="block text-2xl font-heading font-medium text-white tracking-tighter drop-shadow-lg">Middle East Expansion</span>
<span className="text-xs uppercase tracking-[0.2em] text-[#007bff] block mt-2 drop-shadow-md bg-black/40 px-2 py-1 rounded">Vision 2030</span>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group gallery-card-hover reveal delay-100 relative">
<img alt="New York" className="w-full h-full object-cover gallery-img transition-transform duration-700" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-6 left-6 z-20">
<span className="glass-panel px-2 py-1 rounded text-xs uppercase text-white mb-1 inline-block">North America</span>
<h4 className="text-white font-medium drop-shadow-lg">Tech Hubs</h4>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-300 relative border border-white/10">
<div className="absolute inset-0 z-0">
<img alt="Corporate Partnership" className="w-full h-full object-cover opacity-80 transition-all duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050a14] to-transparent z-10"></div>
<div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
<h3 className="text-2xl font-heading font-medium text-white leading-tight mb-4 drop-shadow-lg">Strategic <br/> Intelligence</h3>
<button className="w-fit px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform">Learn More</button>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-200 border border-white/10 relative">
<div className="absolute inset-0 z-0">
<img alt="Australia Infrastructure" className="w-full h-full object-cover transition-all duration-700" src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&amp;w=2130&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 w-full p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
<h4 className="font-heading text-lg font-bold text-white mb-1">Australia Focus</h4>
<p className="text-xs text-gray-300 leading-snug">Resource-rich talent mapping and infrastructure leadership.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-black/20" id="sectors">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Powering the<br/><span className="text-gray-500">Modern Economy</span></h2>
<p className="text-gray-400 max-w-sm text-lg">We focus on the critical sectors driving global transformation.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:mountain-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Mining</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">Securing operational and financial excellence for Tier-1 and mid-cap resource firms in the Australian and North American markets.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Renewable Energy</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">Identifying the pioneers of the low-carbon transition, from Green Hydrogen to Utility-Scale Solar and Wind operations.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Energy Transition</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">Strategically placing visionaries who lead sustainable infrastructure and navigate complex regulatory environments globally.</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Artificial Intelligence</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">Placing the visionaries capable of navigating the ethical and operational frontiers of the AI revolution and machine learning.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Tech &amp; Cybersecurity</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">Strengthening organizational resilience by securing elite CTOs and CISOs who protect and propel crucial digital assets.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Data Centres</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">Powering the physical foundations of the digital economy through expert leadership in hyperscale and edge environments.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="global-reach">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Our International<br/><span className="text-gray-500">Presence</span></h2>
<p className="text-gray-400 max-w-sm text-lg">Delivering transformative leadership across crucial global hubs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,123,255,0.3)] hover:border-[#007bff]/50">
<div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/0 to-purple-600/0 group-hover:from-[#007bff]/10 group-hover:to-purple-600/10 transition-colors duration-500 z-0"></div>
<div className="relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
<iconify-icon className="text-[#007bff] text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-[#007bff]/10 to-transparent border border-[#007bff]/20 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner group-hover:scale-110 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight group-hover:text-[#007bff] transition-colors duration-300">North America</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">Tapping into the world's most competitive tech and energy hubs, securing transformative leadership for scaling enterprises.</p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] hover:border-orange-500/50">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-600/0 group-hover:from-orange-500/10 group-hover:to-red-600/10 transition-colors duration-500 z-0"></div>
<div className="relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
<iconify-icon className="text-orange-400 text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 mb-6 shadow-inner group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:globe-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">Australia</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">Deep expertise in the resource-rich and innovative infrastructure landscapes, driving operational success from the boardroom.</p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] hover:border-emerald-500/50">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-600/0 group-hover:from-emerald-500/10 group-hover:to-teal-600/10 transition-colors duration-500 z-0"></div>
<div className="relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 shadow-inner group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">Middle East</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">Supporting rapid economic diversification and Vision 2030 initiatives across the GCC with visionary executive talent.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden z-10 min-h-screen flex items-center bg-black/20 max-w-[100vw]" id="c-suite">
<div className="max-w-7xl mx-auto px-6 w-full h-full">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8 reveal">
<div className="flex items-center space-x-2 mb-6">
<div className="w-1.5 h-1.5 bg-[#007bff] rounded-full animate-pulse shadow-[0_0_10px_#007bff]"></div>
<p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">The Executive Roster</p>
</div>
<div className="mb-12">
<h2 className="font-heading text-4xl lg:text-6xl font-medium leading-tight tracking-tight mb-6 text-white">
<span className="block">The C-Suite</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#007bff] to-cyan-400">Leadership</span>
</h2>
<p className="text-lg text-white/70 leading-relaxed max-w-md">
                            We specialize in the appointment of leaders who define organizational trajectory. Explore the functional expertise we deliver to boardrooms worldwide.
                        </p>
</div>

<div className="flex space-x-4 items-center pl-1">
<button className="cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]" id="dot-1"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-4"></button>
</div>
</div>

<div className="flex flex-col space-y-8 items-center w-full lg:w-auto reveal delay-200">
<div className="stack-section card-1-active relative" id="cards-container">

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/20 to-purple-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-[#007bff] text-lg" icon="solar:crown-star-linear"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Chief Executive</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-xs text-white">Board</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-[#007bff] to-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">CEO</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">Vision &amp; Strategy</p>
<p className="text-sm text-gray-300 mb-6 max-w-xs">Visionaries who drive shareholder value and cultural transformation from the top down.</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>Cultural Alignment</span>
<span className="text-white">99%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-[#007bff] h-1 rounded-full w-[99%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Finance</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-xs text-white">Executive</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">CFO</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">Fiscal Guardians</p>
<p className="text-sm text-gray-300 mb-6 max-w-xs">Strategic guardians of fiscal health and commercial growth navigating global markets.</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>Commercial Acumen</span>
<span className="text-white">96%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-emerald-500 h-1 rounded-full w-[96%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-orange-400 text-lg" icon="solar:settings-linear"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Operations</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-xs text-white">Executive</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">COO</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">Global Efficiency</p>
<p className="text-sm text-gray-300 mb-6 max-w-xs">The architects of operational efficiency, resilience, and scalable global processes.</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>Operational Impact</span>
<span className="text-white">95%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-orange-500 h-1 rounded-full w-[95%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-purple-400 text-lg" icon="solar:code-square-linear"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Technology</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-xs text-white">Executive</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">CTO &amp; CIO</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">Digital Innovation</p>
<p className="text-sm text-gray-300 mb-6 max-w-xs">The engines of innovation establishing digital competitive advantage and cyber resilience.</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>Innovation Index</span>
<span className="text-white">98%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-purple-500 h-1 rounded-full w-[98%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-black/20 overflow-hidden">
<div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm border-y border-white/5 z-0"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
<h4 className="reveal text-xs font-semibold uppercase tracking-widest text-gray-400 mb-12">Trusted by Visionary Organizations</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 max-w-4xl mx-auto">
<div className="reveal text-center"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="15">0</span><span className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</span></div>
<div className="reveal text-center delay-100"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="500">0</span><span className="text-xs text-gray-500 uppercase tracking-widest">Executive Placements</span></div>
<div className="reveal text-center delay-200"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="3">0</span><span className="text-xs text-gray-500 uppercase tracking-widest">Core Regions</span></div>
</div>
</div>
<div className="marquee-container overflow-hidden whitespace-nowrap relative w-full z-10">
<div className="marquee-content gap-24 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">ENTERPRISE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">INNOVATION</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">RESOURCES</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">TECHNOLOGY</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">INFRASTRUCTURE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">CYBERSECURITY</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">ENERGY</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">ENTERPRISE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">INNOVATION</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">RESOURCES</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">TECHNOLOGY</span>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden" id="methodology">
<div className="absolute inset-0 pointer-events-none z-0">
<div className="liquid-blob bg-[#007bff]" style={{width: '700px', height: '300px', top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: '0.08', filter: 'blur(100px)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Beyond the<br/><span className="text-gray-500">Search</span></h2>
<p className="text-gray-400 max-w-lg mx-auto text-lg">Our Talent Management Approach is built on three pillars designed specifically for the C-suite.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl cursor-hover hover:border-white/20 group reveal delay-100 flex flex-col h-full relative overflow-hidden">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-baseline gap-1 mb-6 border-b border-white/10 pb-4">
<span className="text-5xl font-heading font-medium text-white/20 group-hover:text-white/40 transition-colors">01</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-white mb-3">Market Mapping <br/>&amp; Intelligence</h3>
<p className="text-sm text-gray-400 mb-8 flex-grow">We provide real-time data on talent availability and competitor benchmarking across our three core regions.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Real-time talent analytics</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Competitor benchmarking</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Deep regional intelligence</span>
</li>
</ul>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover border-[#007bff]/50 hover:border-[#007bff] group reveal delay-200 flex flex-col h-full relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,123,255,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[#007bff]/10 to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 p-4">
<span className="bg-[#007bff] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-lg shadow-blue-500/20">Core Focus</span>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-baseline gap-1 mb-6 border-b border-[#007bff]/30 pb-4">
<span className="text-5xl font-heading font-medium text-[#007bff]/50 group-hover:text-[#007bff] transition-colors">02</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-white mb-3">Cultural &amp; Strategic <br/>Leadership Alignment</h3>
<p className="text-sm text-gray-400 mb-8 flex-grow">We align Strategic Leadership DNA and Cultural Resonance to ensure long-term, visionary success.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#007bff] mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Strategic Leadership DNA</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#007bff] mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Behavioral synergy</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#007bff] mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Leadership maturity evaluation</span>
</li>
</ul>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover hover:border-white/20 group reveal delay-300 flex flex-col h-full relative overflow-hidden">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-baseline gap-1 mb-6 border-b border-white/10 pb-4">
<span className="text-5xl font-heading font-medium text-white/20 group-hover:text-white/40 transition-colors">03</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-white mb-3">Onboarding &amp; <br/>Integration</h3>
<p className="text-sm text-gray-400 mb-8 flex-grow">Our partnership continues post-placement to ensure a smooth transition and immediate impact for the new leader.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Structured transition planning</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Post-placement coaching</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Long-term advisory partnership</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black/80 backdrop-blur-xl pt-24 pb-12 border-t border-white/10 relative z-20 overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="space-y-6 lg:col-span-2">
<div className="flex flex-col w-fit mb-6 cursor-hover group">
<span className="font-heading font-medium text-2xl tracking-tighter text-white leading-none flex items-center">
                            accsensia
                            <span className="text-white font-sans text-xl font-bold ml-1 group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
</span>
<div className="mt-1.5 w-full">
<span className="text-[0.65rem] font-medium tracking-[0.2em] text-white uppercase leading-none block">Executive Search</span>
</div>
</div>
<h4 className="font-heading text-2xl text-white font-medium">Ready to Compete Globally?</h4>
<p className="text-gray-500 text-base leading-relaxed max-w-md">Whether you are expanding into the Middle East, scaling technology in North America, or leading the energy transition in Australia, our partners are ready to deliver the talent you need.</p>
<button className="cursor-hover mt-4 px-6 py-3 bg-[#007bff] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        Book a Confidential Consultation
                    </button>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">Expertise</h5>
<ul className="space-y-4 text-base text-gray-500">
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Natural Resources</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Technology &amp; AI</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">C-Suite Placements</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Global Insights</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">Connect</h5>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-[#007bff] text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Global Office</p>
<a className="cursor-hover text-white text-lg font-mono hover:text-[#007bff] transition-colors block" href="tel:+18005550199">+1 (800) 555-0199</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-[#007bff] text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Confidential Inquiry</p>
<a className="cursor-hover text-white text-sm font-mono hover:text-[#007bff] transition-colors block" href="mailto:partners@accsensia.com">partners@accsensia.com</a>
</div>
</div>
<div className="flex gap-4 pt-4">
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#007bff] transition-colors border-0" href="#">
<iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon>
</a>
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#007bff] transition-colors border-0" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-gray-600">
<p>© 2024 Accsensia Executive Search. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="cursor-hover hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="cursor-hover hover:text-white transition-colors" href="#">Terms of Engagement</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
