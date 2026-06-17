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



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Text Reveal Animation (Intro)
            setTimeout(() => {
                const heroTitle = document.getElementById('hero-title');
                if(heroTitle) heroTitle.classList.add('reveal-active');
            }, 300);

            // 2. Intersection Observer for Scroll Reveals (General)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        if(entry.target.classList.contains('text-reveal-wrapper')) {
                             entry.target.classList.add('reveal-active');
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 3. Carousel Logic
            const slides = document.querySelectorAll('.carousel-slide');
            if (slides.length > 0) {
                let currentSlide = 0;
                setInterval(() => {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }, 4000);
            }

            // 4. Spotlight Effect (Mouse Tracking)
            document.querySelectorAll('.spotlight-group').forEach(group => {
                group.addEventListener('mousemove', (e) => {
                    const rect = group.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    group.querySelectorAll('.spotlight-card').forEach(card => {
                        const cardRect = card.getBoundingClientRect();
                        const cardX = e.clientX - cardRect.left;
                        const cardY = e.clientY - cardRect.top;
                        
                        card.style.setProperty('--mouse-x', `${cardX}px`);
                        card.style.setProperty('--mouse-y', `${cardY}px`);
                    });
                });
            });

            // 5. Scroll Text Scrubbing Effect (Mission)
            const missionSection = document.getElementById('mission-section');
            const scrubText = document.querySelector('.scroll-scrub-text');
            
            if (missionSection && scrubText) {
                window.addEventListener('scroll', () => {
                    const rect = missionSection.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Start scrubbing when section enters bottom of viewport
                    // Complete scrubbing when section is near top
                    let percentage = (windowHeight - rect.top) / (windowHeight + rect.height * 0.5);
                    
                    // Clamp percentage between 0 and 1
                    percentage = Math.max(0, Math.min(1, percentage));
                    
                    // Map 0-1 to 100%-0% for background position (since we are moving the gradient)
                    // The gradient is 200% wide. 
                    // 100% position = Text is Grey. 0% position = Text is White.
                    // We want: Start Grey (100%), Scroll to White (0%).
                    // Adjust multiplier to control speed
                    const position = 100 - (percentage * 100); 
                    
                    requestAnimationFrame(() => {
                        scrubText.style.backgroundPosition = `${position}% 0`;
                    });
                });
            }

            // 6. Mobile Menu Logic
            const mobileMenu = document.getElementById('mobile-menu');
            const openBtn = document.getElementById('open-menu');
            const closeBtn = document.getElementById('close-menu');

            window.toggleMenu = function() {
                if (mobileMenu.classList.contains('closed')) {
                    mobileMenu.classList.remove('closed');
                    mobileMenu.classList.add('open');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.remove('open');
                    mobileMenu.classList.add('closed');
                    document.body.style.overflow = '';
                }
            };

            openBtn.addEventListener('click', toggleMenu);
            closeBtn.addEventListener('click', toggleMenu);

            // 7. Parallax Background
            const parallaxBg = document.getElementById('parallax-bg');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if(parallaxBg) {
                    parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
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
      

<div id="parallax-bg" style={{transform: 'translateY(0px)'}}></div>

<div className="fixed inset-0 max-w-[1440px] mx-auto pointer-events-none z-0 grid grid-cols-1 md:grid-cols-12 h-full border-x border-white/5 mix-blend-overlay">
<div className="border-r border-white/5 h-full col-span-1 md:col-span-3 hidden md:block"></div>
<div className="border-r border-white/5 h-full col-span-1 md:col-span-6 hidden md:block"></div>
<div className="border-r border-white/5 h-full col-span-1 md:col-span-3 hidden md:block"></div>
</div>

<div className="fixed inset-0 bg-[#020202] z-[60] flex flex-col justify-center items-center closed md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-white text-3xl" id="close-menu">
<iconify-icon icon="solar:close-circle-bold-duotone"></iconify-icon>
</button>
<nav className="flex flex-col gap-8 text-center">
<a className="text-3xl font-serif text-zinc-400 hover:text-white transition-colors" href="#work" onclick="toggleMenu()">Expertise</a>
<a className="text-3xl font-serif text-zinc-400 hover:text-white transition-colors" href="#cases" onclick="toggleMenu()">Case Studies</a>
<a className="text-3xl font-serif text-zinc-400 hover:text-white transition-colors" href="#testimonials" onclick="toggleMenu()">Testimonials</a>
<a className="text-3xl font-serif text-zinc-400 hover:text-white transition-colors" href="#contact" onclick="toggleMenu()">Inquire</a>
</nav>
</div>

<div className="max-w-[1440px] mx-auto relative z-10">

<header className="relative z-50 border-b border-white/5 sticky top-0 bg-[#020202]/80 backdrop-blur-xl">
<div className="flex justify-between items-center px-6 md:px-12 py-6">

<button className="md:hidden text-white text-2xl" id="open-menu">
<iconify-icon icon="solar:hamburger-menu-bold-duotone"></iconify-icon>
</button>
<nav className="hidden md:flex gap-8">
<a className="text-[11px] font-medium tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors font-sans" href="#work">Expertise</a>
<a className="text-[11px] font-medium tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors font-sans" href="#cases">Process</a>
</nav>
<div className="flex items-center gap-3 group cursor-pointer absolute left-1/2 -translate-x-1/2">
<iconify-icon className="text-2xl text-white group-hover:text-zinc-300 transition-colors" icon="solar:infinity-bold-duotone"></iconify-icon>
<span className="text-2xl text-white tracking-tight font-newsreader font-light">Neural</span>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-[11px] font-medium tracking-[0.2em] uppercase text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all font-sans" href="#contact">
                        Inquire
                    </a>
</nav>

<div className="w-6 md:hidden"></div>
</div>
</header>

<section className="z-10 grid grid-cols-1 md:grid-cols-12 min-h-[900px] bg-[#020202]/50 border-white/5 border-b relative">

<div className="col-span-1 md:col-span-9 border-r border-white/5 relative overflow-hidden group min-h-[500px]">
<div className="" id="hero-carousel">
<div className="carousel-slide active">
<img className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d1878bc-8e61-4e79-9e27-2db00828f6db_1600w.webp"/>
</div>
<div className="carousel-slide">
<img className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9ddbea-b6c6-456c-a91a-bb2a86e0e19c_1600w.webp"/>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202]/10 z-10 pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 p-8 md:p-16 w-full z-20">
<div className="flex items-start justify-between">
<div className="">
<span className="inline-block px-3 py-1 mb-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-sans reveal active">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-2"></span>
          System Online
          </span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-tight italic reveal-active" id="hero-title">
<span className="text-reveal-wrapper"><span className="text-reveal-content block font-newsreader font-light">Algorithmic</span></span>
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-100 block text-zinc-400 font-newsreader font-light">Desire</span></span>
</h1>
</div>
</div>
</div>
<div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-30 z-20">
<span className="font-mono text-xs text-zinc-500 font-sans">01 / INTRO</span>
</div>
</div>

<div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-1 md:grid-rows-3 min-h-[auto] spotlight-group md:p-0 gap-4 md:gap-0 bg-[#020202] h-full pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<div className="spotlight-card md:border-0 md:border-b md:rounded-none md:bg-transparent row-span-1 md:p-8 flex flex-col reveal delay-100 active pt-6 pr-6 pb-6 pl-6 justify-center" style={{'--mouse-x': '303px', '--mouse-y': '61.5px'}}>
<iconify-icon className="text-3xl text-zinc-600 mb-4 transition-colors z-10" icon="solar:graph-new-bold-duotone"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1 font-sans z-10">ROI Lift</span>
<span className="text-3xl text-white tracking-tight font-newsreader font-light z-10">340%</span>
</div>
<div className="spotlight-card md:border-0 md:border-b md:rounded-none md:bg-transparent row-span-1 p-6 md:p-8 flex flex-col justify-center reveal delay-200 active" style={{'--mouse-x': '303px', '--mouse-y': '-303.265625px'}}>
<iconify-icon className="text-3xl text-zinc-600 mb-4 transition-colors z-10" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1 font-sans z-10">Active Users</span>
<span className="text-3xl text-white tracking-tight font-newsreader font-light z-10">2.4M+</span>
</div>
<div className="spotlight-card md:border-0 md:rounded-none md:bg-transparent row-span-1 p-6 md:p-8 flex flex-col justify-center reveal delay-300 col-span-2 md:col-span-1 active" style={{'--mouse-x': '303px', '--mouse-y': '-668.03125px'}}>
<iconify-icon className="text-3xl text-zinc-600 mb-4 transition-colors z-10" icon="solar:server-square-bold-duotone"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1 font-sans z-10">Data Points</span>
<span className="text-3xl text-white tracking-tight font-newsreader font-light z-10">10B</span>
</div>
</div>
</section>

<div className="border-b border-white/5 py-5 bg-[#050505] relative z-20">
<div className="marquee-container">
<div className="marquee-content gap-24">
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:bolt-circle-bold-duotone"></iconify-icon> Neural Networks</span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:code-scan-bold-duotone"></iconify-icon> Predictive Modeling</span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:database-bold-duotone"></iconify-icon> Sentiment Analysis</span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:chart-square-bold-duotone"></iconify-icon> Conversion Optimization</span>
</div>
<div aria-hidden="true" className="marquee-content gap-24">
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:bolt-circle-bold-duotone"></iconify-icon> Neural Networks</span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:code-scan-bold-duotone"></iconify-icon> Predictive Modeling</span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:database-bold-duotone"></iconify-icon> Sentiment Analysis</span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-3 font-sans"><iconify-icon className="text-sm" icon="solar:chart-square-bold-duotone"></iconify-icon> Conversion Optimization</span>
</div>
</div>
</div>

<section className="md:py-48 md:px-12 bg-[#020202] z-10 border-white/5 border-b pt-32 pr-6 pb-32 pl-6 relative" id="mission-section">
<div className="max-w-4xl mx-auto text-center sticky top-24">
<div className="flex flex-col items-center gap-6">
<iconify-icon className="text-5xl text-zinc-700 mb-4" icon="solar:crown-star-bold-duotone"></iconify-icon>
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-newsreader font-light scroll-scrub-text">
                        We engineer the invisible threads connecting brand perception to purchasing behavior, turning data into desire through algorithmic precision.
                    </h2>
<div className="h-16 w-px bg-gradient-to-b from-zinc-500 to-transparent mt-8"></div>
</div>
</div>
<div className="absolute top-8 left-8 md:top-12 md:left-12">
<span className="font-mono text-xs text-zinc-800 font-sans">02 / MISSION</span>
</div>
</section>

<section className="relative z-10 bg-[#020202]" id="work">
<div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/5">
<div className="col-span-1 md:col-span-3 p-8 md:p-12 border-r border-white/5 flex items-end">
<span className="font-mono text-xs text-zinc-500 font-sans">03 / FEATURED WORK</span>
</div>
<div className="col-span-1 md:col-span-9 p-8 md:p-12">
<h3 className="text-3xl text-white tracking-tight font-newsreader font-light">Major Deployments</h3>
</div>
</div>
<div className="spotlight-group">

<div className="spotlight-card rounded-none border-x-0 border-t-0 border-b border-white/5 grid grid-cols-1 md:grid-cols-12 reveal delay-100 group cursor-pointer">
<div className="col-span-1 md:col-span-3 p-8 md:p-12 border-r border-white/5 flex flex-col justify-between z-10 pointer-events-none">
<div className="text-[10px] font-mono uppercase text-zinc-600 tracking-widest font-sans">Fintech</div>
<div>
<h4 className="text-2xl text-white mb-2 tracking-tight font-newsreader font-light group-hover:text-emerald-400 transition-colors">Novus Bank</h4>
<p className="text-xs text-zinc-500 leading-relaxed font-sans">Predictive churn modeling and automated retention flows.</p>
</div>
</div>
<div className="col-span-1 md:col-span-6 border-r border-white/5 relative overflow-hidden h-[300px] md:h-auto z-10">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b33ab31e-c6bb-4140-8091-d2f9422b989c_1600w.webp"/>
</div>
<div className="col-span-1 md:col-span-3 p-8 md:p-12 flex flex-col justify-center items-center gap-2 z-10 pointer-events-none">
<span className="text-4xl text-white tracking-tight font-newsreader font-light">+210%</span>
<span className="text-[10px] font-mono uppercase text-zinc-600 font-sans">Retention Rate</span>
</div>
</div>

<div className="spotlight-card rounded-none border-x-0 border-t-0 border-b border-white/5 grid grid-cols-1 md:grid-cols-12 reveal delay-200 group cursor-pointer">
<div className="col-span-1 md:col-span-3 p-8 md:p-12 border-r border-white/5 flex flex-col justify-between z-10 pointer-events-none">
<div className="text-[10px] font-mono uppercase text-zinc-600 tracking-widest font-sans">SaaS</div>
<div>
<h4 className="text-2xl text-white mb-2 tracking-tight font-newsreader font-light group-hover:text-emerald-400 transition-colors">Vercelion</h4>
<p className="text-xs text-zinc-500 leading-relaxed font-sans">Dynamic landing page generation.</p>
</div>
</div>
<div className="col-span-1 md:col-span-6 border-r border-white/5 relative overflow-hidden h-[300px] md:h-auto z-10">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/288be77e-30cd-4d91-b879-0fcb43dde9d3_1600w.webp"/>
</div>
<div className="col-span-1 md:col-span-3 p-8 md:p-12 flex flex-col justify-center items-center gap-2 z-10 pointer-events-none">
<span className="text-4xl text-white tracking-tight font-newsreader font-light">4.5x</span>
<span className="text-[10px] font-mono uppercase text-zinc-600 font-sans">Lead Volume</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-[#050505] border-b border-white/5" id="cases">
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="col-span-1 md:col-span-3 p-8 md:p-12 border-r border-white/5 border-b md:border-b-0 bg-[#020202]">
<span className="font-mono text-xs text-zinc-500 font-sans block mb-8">04 / CASE STUDIES</span>
<h3 className="text-2xl text-white font-newsreader font-light mb-6">Recent Performance</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-sans mb-8">Deep dives into how we apply neural networks to solve specific conversion bottlenecks for Fortune 500 clients.</p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">View Archive <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
<div className="col-span-1 md:col-span-9 bg-[#020202]">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="group border-r border-b border-white/5 p-8 md:p-12 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-12">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400">Automotive</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h4 className="text-3xl text-zinc-300 group-hover:text-white transition-colors font-newsreader font-light mb-4">Elektra Motors</h4>
<p className="text-zinc-500 text-sm mb-6">Optimizing configuration flows using real-time inventory sentiment analysis.</p>
<div className="flex gap-8">
<div>
<span className="block text-xl text-white font-newsreader">+18%</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-600">Test Drives</span>
</div>
<div>
<span className="block text-xl text-white font-newsreader">-40%</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-600">CAC</span>
</div>
</div>
</div>

<div className="group border-b border-white/5 p-8 md:p-12 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-12">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400">E-Commerce</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h4 className="text-3xl text-zinc-300 group-hover:text-white transition-colors font-newsreader font-light mb-4">Onyx &amp; Co.</h4>
<p className="text-zinc-500 text-sm mb-6">Personalized homepage curation based on referral source probability.</p>
<div className="flex gap-8">
<div>
<span className="block text-xl text-white font-newsreader">$8.4M</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-600">Added Rev</span>
</div>
<div>
<span className="block text-xl text-white font-newsreader">14x</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-600">ROAS</span>
</div>
</div>
</div>

<div className="group border-r border-white/5 p-8 md:p-12 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-12">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400">Healthcare</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h4 className="text-3xl text-zinc-300 group-hover:text-white transition-colors font-newsreader font-light mb-4">Vitalis Systems</h4>
<p className="text-zinc-500 text-sm mb-6">Patient intake optimization using natural language processing.</p>
<div className="flex gap-8">
<div>
<span className="block text-xl text-white font-newsreader">-65%</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-600">Admin Time</span>
</div>
</div>
</div>

<div className="group border-white/5 p-8 md:p-12 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-12">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400">Real Estate</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h4 className="text-3xl text-zinc-300 group-hover:text-white transition-colors font-newsreader font-light mb-4">Prime Meridian</h4>
<p className="text-zinc-500 text-sm mb-6">Dynamic property valuation models for high-net-worth engagement.</p>
<div className="flex gap-8">
<div>
<span className="block text-xl text-white font-newsreader">22%</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-600">Conv. Rate</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-b border-white/5 bg-[#020202]" id="testimonials">
<div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<span className="font-mono text-xs text-zinc-500 font-sans block mb-4">05 / CLIENT FEEDBACK</span>
<h3 className="text-4xl md:text-5xl text-white tracking-tight font-newsreader font-light">Signal from the Noise</h3>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="px-6 md:px-12 spotlight-group grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card p-8 bg-zinc-900/10 flex flex-col justify-between h-full min-h-[300px] reveal">
<div className="relative z-10">
<div className="mb-6 text-zinc-600 text-3xl opacity-50 font-serif">"</div>
<p className="text-lg text-zinc-300 font-newsreader italic leading-relaxed mb-8">
                            Neural didn't just optimize our funnel, they rewrote the logic of how we acquire customers. The ROI was visible within 14 days of the initial model deployment.
                        </p>
</div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+Chen&amp;background=27272a&amp;color=fff"/>
</div>
<div>
<div className="text-sm text-white font-medium font-sans">Sarah Chen</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-sans">CMO, Novus Bank</div>
</div>
</div>
</div>

<div className="spotlight-card p-8 bg-zinc-900/10 flex flex-col justify-between h-full min-h-[300px] reveal delay-100">
<div className="relative z-10">
<div className="mb-6 text-zinc-600 text-3xl opacity-50 font-serif">"</div>
<p className="text-lg text-zinc-300 font-newsreader italic leading-relaxed mb-8">
                            We were skeptical about AI-driven copy until we saw the A/B tests. It felt like they had read our customers' minds. The precision is terrifyingly good.
                        </p>
</div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Marcus+V&amp;background=27272a&amp;color=fff"/>
</div>
<div>
<div className="text-sm text-white font-medium font-sans">Marcus Thorne</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-sans">Director, Aethelgard</div>
</div>
</div>
</div>

<div className="spotlight-card p-8 bg-zinc-900/10 flex flex-col justify-between h-full min-h-[300px] reveal delay-200">
<div className="relative z-10">
<div className="mb-6 text-zinc-600 text-3xl opacity-50 font-serif">"</div>
<p className="text-lg text-zinc-300 font-newsreader italic leading-relaxed mb-8">
                            The dashboard they built gives us visibility we didn't know was possible. It's not just marketing; it's business intelligence at a fundamental level.
                        </p>
</div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Elena+R&amp;background=27272a&amp;color=fff"/>
</div>
<div>
<div className="text-sm text-white font-medium font-sans">Elena Rodriguez</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-sans">VP Growth, Vercelion</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-b border-white/5 bg-[#020202]">
<div className="absolute top-8 left-8 md:top-12 md:left-12">
<span className="font-mono text-xs text-zinc-800 font-sans">06 / INTELLIGENCE</span>
</div>
<div className="spotlight-group grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 px-6 md:px-12">

<a className="spotlight-card block p-6 md:p-8 hover:bg-white/5 transition-colors duration-500 reveal" href="#">
<div className="relative z-10">
<div className="aspect-[4/3] bg-zinc-900 overflow-hidden mb-6 border border-white/5 rounded-md">
<img className="w-full h-full object-cover opacity-50 hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a215e5d-b655-458b-bb12-0a5712f5b1f4_1600w.webp"/>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-mono uppercase text-zinc-500 font-sans">Research</span>
<div className="h-px w-4 bg-zinc-800"></div>
<span className="text-[10px] font-mono text-zinc-500 font-sans">Oct 12</span>
</div>
<h4 className="text-xl md:text-2xl text-zinc-300 group-hover:text-white transition-colors tracking-tight font-newsreader font-light">The Twilight of Traditional SEO</h4>
</div>
</a>

<a className="spotlight-card block p-6 md:p-8 hover:bg-white/5 transition-colors duration-500 reveal delay-100" href="#">
<div className="relative z-10">
<div className="aspect-[4/3] bg-zinc-900 overflow-hidden mb-6 border border-white/5 rounded-md">
<img className="w-full h-full object-cover opacity-50 hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/023dd2ad-f0a8-4699-b87d-69c704d2e904_1600w.webp"/>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-mono uppercase text-zinc-500 font-sans">Strategy</span>
<div className="h-px w-4 bg-zinc-800"></div>
<span className="text-[10px] font-mono text-zinc-500 font-sans">Sep 28</span>
</div>
<h4 className="text-xl md:text-2xl text-zinc-300 group-hover:text-white transition-colors tracking-tight font-newsreader font-light">Generative Identity Systems</h4>
</div>
</a>

<a className="spotlight-card block p-6 md:p-8 hover:bg-white/5 transition-colors duration-500 reveal delay-200" href="#">
<div className="relative z-10">
<div className="aspect-[4/3] bg-zinc-900 overflow-hidden mb-6 border border-white/5 rounded-md">
<img className="w-full h-full object-cover opacity-50 hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb1331de-24b0-41cb-9e0f-221829f663a8_1600w.webp"/>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-mono uppercase text-zinc-500 font-sans">Engineering</span>
<div className="h-px w-4 bg-zinc-800"></div>
<span className="text-[10px] font-mono text-zinc-500 font-sans">Sep 14</span>
</div>
<h4 className="text-xl md:text-2xl text-zinc-300 group-hover:text-white transition-colors tracking-tight font-newsreader font-light">LLMs in Conversion Copywriting</h4>
</div>
</a>
</div>
</section>

<section className="relative z-10 bg-[#020202]" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] border-b border-white/5">
<div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between reveal">
<div>
<div className="mb-8">
<iconify-icon className="text-4xl text-white" icon="solar:chat-round-line-bold-duotone"></iconify-icon>
</div>
<h2 className="text-5xl md:text-7xl text-white mb-6 tracking-tight font-newsreader font-light">InitiateDialogue</h2>
<p className="text-zinc-500 text-sm max-w-sm leading-relaxed font-sans">
                            We are currently accepting new partners for Q4 2024. Audit requests are processed within 24 hours.
                        </p>
</div>
<div className="hidden md:block">
<span className="font-mono text-xs text-zinc-800 font-sans">07 / CONTACT</span>
</div>
</div>
<div className="p-12 md:p-24 flex flex-col justify-center reveal delay-100">
<form className="space-y-12">
<div className="group">
<label className="block text-xs font-mono uppercase text-zinc-500 mb-2 font-sans">Identification</label>
<input className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-zinc-700 focus:border-white transition-colors outline-none font-serif text-xl" placeholder="Name or Company" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-mono uppercase text-zinc-500 mb-2 font-sans">Communication Channel</label>
<input className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-zinc-700 focus:border-white transition-colors outline-none font-serif text-xl" placeholder="Email Address" type="email"/>
</div>
<div className="group">
<label className="block text-xs font-mono uppercase text-zinc-500 mb-2 font-sans">Directives</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-zinc-700 focus:border-white transition-colors outline-none font-serif text-xl resize-none" placeholder="Tell us about your objectives..." rows="2"></textarea>
</div>
<div className="pt-8">
<button className="group flex items-center justify-between w-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded-none p-6" type="button">
<span className="font-mono text-xs uppercase tracking-[0.2em] font-sans">Transmit Request</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
<footer className="py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 reveal">
<div className="col-span-1 md:col-span-3">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-lg text-white" icon="solar:infinity-bold-duotone"></iconify-icon>
<span className="font-serif italic text-lg text-white font-sans">Neural</span>
</div>
</div>
<div className="col-span-1 md:col-span-6 flex flex-wrap gap-8 md:gap-16">
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono uppercase text-zinc-600 font-sans">Sitemap</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors font-sans" href="#">Services</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors font-sans" href="#">Methodology</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono uppercase text-zinc-600 font-sans">Social</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors font-sans" href="#">Twitter / X</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors font-sans" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono uppercase text-zinc-600 font-sans">Legal</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors font-sans" href="#">Privacy</a>
</div>
</div>
<div className="col-span-1 md:col-span-3 text-left md:text-right">
<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-sans">© 2024 Neural Agency Inc.</span>
</div>
</footer>
</section>
</div>


    </>
  );
}
