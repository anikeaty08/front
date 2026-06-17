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
kintsu: {
black: '#0f0f0f',
dark: '#1a1919',
charcoal: '#2a2a2a',
white: '#ffffff',
burgundy: '#2A0A10',
wine: '#3E0C10',
cream: '#f5f2eb',
parchment: '#EAE6DF',
stone: {
50: '#fdfcfb',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
600: '#57534e',
800: '#292524',
900: '#1c1917',
},
accent: '#C4A484',
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
jp: ['Noto Serif JP', 'serif'],
newsreader: ['Newsreader', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.02em',
widest: '0.15em',
},
transitionTimingFunction: {
'editorial': 'cubic-bezier(0.2, 0.65, 0.3, 0.9)',
}
}
}
}



      (function () {
      const section = document.getElementById('comparison');
      if (!section || !('IntersectionObserver' in window)) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) section.classList.add('is-inview');
            else section.classList.remove('is-inview');
          });
        },
        { root: null, threshold: 0.25 }
      );

      io.observe(section);
    })();
    


    lucide.createIcons();

    // Trigger reveal lines after load
    window.addEventListener('load', () => {
        const lines = document.querySelectorAll('.reveal-line');
        setTimeout(() => {
            lines.forEach((line, index) => {
                setTimeout(() => line.classList.add('active'), index * 150);
            });
        }, 300);
    });

    // Navigation Scroll Logic
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-on-light');
        } else {
            nav.classList.remove('nav-on-light');
        }
    });

    // Editorial Scroll Observer
    const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -5% 0px" };
    const editorialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                editorialObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.editorial-item, .editorial-img').forEach(el => {
        editorialObserver.observe(el);
    });
  


    (function() {
        const methodSection = document.getElementById('method');
        const textTrack = document.getElementById('kintsu-text-track');
        const textPanels = Array.from(textTrack ? textTrack.children : []);
        const mobileNumber = document.getElementById('mobile-stage-number');
        const mobileTitle = document.getElementById('mobile-stage-title');
        const mobileParagraphs = document.querySelectorAll('.mobile-method-p');
        let lastMobileStage = -1;
        const stageData = [
          { number: '01', title: 'Reveal' },
          { number: '02', title: 'Restore' },
          { number: '03', title: 'Radiate' }
        ];
        const helixImage = document.getElementById('long-helix');
        const helixViewport = document.getElementById('helix-viewport');
        const indicators = [
            document.getElementById('ind-1'),
            document.getElementById('ind-2'),
            document.getElementById('ind-3')
        ];

        function updateScroll() {
            if (!methodSection || !helixImage || !helixViewport) return;

            const isMobile = window.innerWidth < 768;
            const rect = methodSection.getBoundingClientRect();
            const totalTravel = methodSection.offsetHeight - window.innerHeight;
            let progress = Math.min(Math.max(-rect.top / totalTravel, 0), 1);

            if (isMobile) {
                helixImage.style.transformOrigin = 'top left';
                let stage = 0;
                if (progress < 0.33) stage = 0;
                else if (progress < 0.66) stage = 1;
                else stage = 2;

                if (stage !== lastMobileStage && mobileNumber && mobileTitle) {
                    mobileNumber.style.opacity = 0;
                    mobileTitle.style.opacity = 0;
                    setTimeout(() => {
                        mobileNumber.innerText = stageData[stage].number;
                        mobileTitle.innerText = stageData[stage].title;
                        mobileNumber.style.opacity = 0.8;
                        mobileTitle.style.opacity = 1;
                    }, 200);
                    lastMobileStage = stage;
                }
                mobileParagraphs.forEach((p, idx) => {
                    if (idx === stage) {
                        p.style.opacity = 1;
                    } else {
                        p.style.opacity = 0;
                    }
                });
                helixImage.style.position = 'absolute';
                helixImage.style.top = '0';
                helixImage.style.left = '0';
                helixImage.style.maxWidth = 'none';
                const viewportHeight = helixViewport.offsetHeight;
                helixImage.style.width  = viewportHeight + 'px';
                helixImage.style.height = 'auto';
                const visualWidth = helixImage.getBoundingClientRect().width;
                const maxTranslate = Math.max(visualWidth - helixViewport.offsetWidth, 0);
                const translateY = -progress * maxTranslate;
                helixImage.style.transform = `rotate(-90deg) translateX(-${viewportHeight}px) translateY(${translateY}px)`;
            } else {
                helixImage.style.transformOrigin = '';
                helixImage.style.width = '100%';
                helixImage.style.height = 'auto';
                helixImage.style.transform = '';
                helixImage.style.position = '';
                helixImage.style.top = '';
                helixImage.style.left = '';
                helixImage.style.maxWidth = '';
                const viewportHeight = helixViewport.offsetHeight;
                const imageHeight = helixImage.offsetHeight;
                if (imageHeight > viewportHeight) {
                    const imageTravel = imageHeight - viewportHeight;
                    const translateY = -progress * imageTravel;
                    helixImage.style.transform = `translateY(${translateY}px)`;
                }
                let currentStage = 0;
                let textTranslateY = 0;
                if (progress < 0.33) {
                    currentStage = 0;
                    textTranslateY = 0;
                } else if (progress >= 0.33 && progress < 0.66) {
                    currentStage = 1;
                    textTranslateY = 100;
                } else {
                    currentStage = 2;
                    textTranslateY = 200;
                }
                if (textTrack) {
                    textTrack.style.transform = `translateY(-${textTranslateY}vh)`;
                    textPanels.forEach((panel, idx) => {
                        if (idx === currentStage) {
                            panel.style.opacity = 1;
                        } else {
                            panel.style.opacity = 0.05;
                        }
                    });
                }
                if(indicators[0]) {
                    indicators.forEach((ind, idx) => {
                        if(idx === currentStage) ind.classList.add('active');
                        else ind.classList.remove('active');
                    });
                }
            }
        }
        window.addEventListener('scroll', () => requestAnimationFrame(updateScroll), { passive: true });
        window.addEventListener('resize', updateScroll);
        if (helixImage.complete) { updateScroll(); } else { helixImage.onload = updateScroll; }
    })();
  


    (function() {
        const openBtn = document.getElementById('mobile-menu-trigger');
        const closeBtn = document.getElementById('mobile-menu-close');
        const menu = document.getElementById('mobile-menu-overlay');
        const nav = document.getElementById('main-nav');
        const links = document.querySelectorAll('.mobile-nav-link');

        if (!openBtn || !menu || !closeBtn) return;

        let isMenuOpen = false;

        function updateMenuState() {
          if (isMenuOpen) {
            menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            menu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            document.body.style.overflow = 'hidden';
            nav.classList.add('nav-menu-open');
          } else {
            menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            document.body.style.overflow = '';
            nav.classList.remove('nav-menu-open');
          }
        }

        openBtn.addEventListener('click', (e) => { e.stopPropagation(); isMenuOpen = true; updateMenuState(); });
        closeBtn.addEventListener('click', (e) => { e.stopPropagation(); isMenuOpen = false; updateMenuState(); });
        links.forEach(link => { link.addEventListener('click', () => { isMenuOpen = false; updateMenuState(); }); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isMenuOpen) { isMenuOpen = false; updateMenuState(); } });
        window.addEventListener('resize', () => { if (window.innerWidth >= 1024 && isMenuOpen) { isMenuOpen = false; updateMenuState(); } });
    })();
  
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f143df3a-e12d-4d95-a683-00a4851392da_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed w-full z-50 top-0 left-0 transition-colors duration-500 ease-in-out font-sans nav-on-light" id="main-nav">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

<a className="flex items-center gap-4 z-50 group shrink-0 transition-transform duration-300 hover:scale-[1.02] hover:opacity-90" href="/home">
<div className="relative w-8 h-8">
<img alt="Kintsu Logo" className="logo-light w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fac3a53-002a-4715-847a-ec7780acea5a_320w.png"/>
<img alt="Kintsu Logo" className="logo-dark w-full h-full object-contain" src="/assets/images/K_logomark_cream_transparent_v2_bg9gy6.png"/>
</div>
<span className="nav-text text-lg font-light tracking-normal font-jp">
            Kintsu Health
          </span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="nav-link-item editorial-link text-[15px] font-normal tracking-wide" href="/home">
          Home
        </a>
<a className="nav-link-item editorial-link text-[15px] font-normal tracking-wide" href="/about-us">
          About
        </a>
<a className="nav-link-item editorial-link text-[15px] font-normal tracking-wide" href="/how-we-work">
          How We Work
        </a>
<a className="nav-link-item editorial-link text-[15px] font-normal tracking-wide" href="/surgical-optimization-protocols">
          Surgical Optimization Protocols
        </a>
<a className="nav-link-item editorial-link text-[15px] font-normal tracking-wide" href="/contact-us">
          Contact
        </a>
</div>

<button aria-label="Open navigation menu" className="lg:hidden nav-text cursor-pointer relative z-50 p-2 -mr-2 hover:text-kintsu-accent transition-colors duration-300" id="mobile-menu-trigger">
<svg className="w-[26px] h-[26px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="fixed inset-2 z-[60] rounded-3xl bg-kintsu-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col pt-0 px-0 lg:hidden opacity-0 pointer-events-none transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) translate-y-4 overflow-hidden" id="mobile-menu-overlay">
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-0">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none z-0">
</div>
<div className="relative z-20 flex items-center justify-between px-8 py-6 border-b border-white/10">
<div className="flex items-center gap-3 opacity-90">
<div className="w-6 h-6">
<img alt="Kintsu Logo" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fac3a53-002a-4715-847a-ec7780acea5a_320w.png"/>
</div>
<span className="text-[#f5f2eb] text-base font-light tracking-wide font-jp">Kintsu Health</span>
</div>
<button className="group relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 active:scale-95" id="mobile-menu-close">
<svg className="group-hover:rotate-90 transition-transform duration-300" fill="none" height="20" stroke="#f5f2eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="relative z-20 flex-grow flex flex-col justify-start pt-8 px-8 overflow-y-auto">
<nav className="flex flex-col w-full max-w-lg">
<a className="mobile-nav-link group relative py-6 w-full flex items-baseline gap-6 border-b border-white/5 hover:border-kintsu-accent/30 active:translate-x-1 transition-all duration-300" href="/home">
<span className="text-[10px] font-sans tracking-[0.2em] text-[#f5f2eb]/30 group-hover:text-kintsu-accent transition-colors w-6">01</span>
<span className="text-3xl md:text-4xl font-newsreader font-light text-[#f5f2eb] group-hover:text-white group-active:opacity-80 transition-all duration-300 ease-out">Home</span>
</a>
<a className="mobile-nav-link group relative py-6 w-full flex items-baseline gap-6 border-b border-white/5 hover:border-kintsu-accent/30 active:translate-x-1 transition-all duration-300" href="/about-us">
<span className="text-[10px] font-sans tracking-[0.2em] text-[#f5f2eb]/30 group-hover:text-kintsu-accent transition-colors w-6">02</span>
<span className="text-3xl md:text-4xl font-newsreader font-light text-[#f5f2eb] group-hover:text-white group-active:opacity-80 transition-all duration-300 ease-out">About</span>
</a>
<a className="mobile-nav-link group relative py-6 w-full flex items-baseline gap-6 border-b border-white/5 hover:border-kintsu-accent/30 active:translate-x-1 transition-all duration-300" href="/how-we-work">
<span className="text-[10px] font-sans tracking-[0.2em] text-[#f5f2eb]/30 group-hover:text-kintsu-accent transition-colors w-6">03</span>
<span className="text-3xl md:text-4xl font-newsreader font-light text-[#f5f2eb] group-hover:text-white group-active:opacity-80 transition-all duration-300 ease-out">How We Work</span>
</a>
<a className="mobile-nav-link group relative py-6 w-full flex items-baseline gap-6 border-b border-white/5 hover:border-kintsu-accent/30 active:translate-x-1 transition-all duration-300" href="/surgical-optimization-protocols">
<span className="text-[10px] font-sans tracking-[0.2em] text-[#f5f2eb]/30 group-hover:text-kintsu-accent transition-colors w-6">04</span>
<span className="text-3xl md:text-4xl font-newsreader font-light text-[#f5f2eb] group-hover:text-white group-active:opacity-80 transition-all duration-300 ease-out leading-tight">Surgical Optimization Protocols</span>
</a>
<a className="mobile-nav-link group relative py-6 w-full flex items-baseline gap-6 border-b border-white/5 hover:border-kintsu-accent/30 active:translate-x-1 transition-all duration-300" href="/contact-us">
<span className="text-[10px] font-sans tracking-[0.2em] text-[#f5f2eb]/30 group-hover:text-kintsu-accent transition-colors w-6">05</span>
<span className="text-3xl md:text-4xl font-newsreader font-light text-[#f5f2eb] group-hover:text-white group-active:opacity-80 transition-all duration-300 ease-out">Contact</span>
</a>
</nav>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col items-center justify-center bg-black" id="hero">
<div className="absolute inset-0 w-full h-full z-0">
<div className="w-full h-full editorial-img-container">
<video autoplay="" className="editorial-img active w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="/assets/videos/Transform_Final_uqllzr.mp4" type="video/mp4"/>
</video>
</div>

<div className="bg-gradient-to-t from-black/60 via-black/20 to-black/40 absolute inset-0 pointer-events-none z-10">
</div>
</div>
<div className="flex-grow flex flex-col z-20 text-center max-w-7xl mt-16 px-6 relative justify-center">

<h1 className="hero-animate-headline font-newsreader font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] mb-8 text-white">
<span className="block">
<span className="opacity-95">We are not your <br className="block sm:hidden"/> primary care.</span>
</span>
<span className="block mt-4 md:mt-6 pb-[0.10em]">
<span className="italic opacity-95">We are your <br className="block sm:hidden"/> preventive care.</span>
</span>
</h1>
<div className="mt-4 flex flex-col items-center gap-14">

<p className="hero-animate-subtext text-sm md:text-base font-semibold leading-loose text-kintsu-parchment max-w-[48ch] mx-auto opacity-95 tracking-wider text-center">
          Clinician-led preventive care designed to identify risk early, optimize physiology, and guide long-term
          health.
        </p>

<a className="hero-animate-cta inline-block uppercase tracking-[0.2em] text-xs font-semibold px-12 py-5 border border-white/60 text-white bg-transparent transition-all duration-[220ms] ease-out hover:bg-white hover:text-[#1a1919] hover:border-white" href="/contact-us">
          Schedule a Consultation
        </a>
</div>
</div>

<div className="absolute bottom-12 left-0 w-full z-20 hidden md:flex justify-center gap-16 hero-animate-nav">
<a className="text-white/50 hover:text-white text-[11px] tracking-widest uppercase transition-colors duration-500 font-sans font-medium" href="#who-we-are">Who
        We Are</a>
<a className="text-white/50 hover:text-white text-[11px] tracking-widest uppercase transition-colors duration-500 font-sans font-medium" href="#comparison">A
        Different Approach</a>
<a className="text-white/50 hover:text-white text-[11px] tracking-widest uppercase transition-colors duration-500 font-sans font-medium" href="#the-kintsu-method">The
        Kintsu Method</a>
<a className="text-white/50 hover:text-white text-[11px] tracking-widest uppercase transition-colors duration-500 font-sans font-medium" href="#philosophy">Philosophy</a>
</div>
</header>

<section className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden" id="who-we-are">
<div className="w-full py-64 md:py-96 relative editorial-img-container">
<img alt="Clinical Hands" className="absolute inset-0 w-full h-full object-cover opacity-80 editorial-img" src="/assets/images/Hands_v2_qhi2jf.png"/>

<div className="absolute inset-0 bg-black/20"></div>

<div className="relative z-10 px-6 w-full">
<div className="max-w-4xl mx-auto text-center">
<h2 className="editorial-item font-newsreader font-normal text-2xl md:text-4xl text-white/90 mb-10 md:mb-12">
            We don’t just tell you what your labs say.
          </h2>
<h2 className="editorial-item font-newsreader font-medium italic text-3xl md:text-5xl lg:text-5xl text-white tracking-tight leading-tight delay-100">
            We change what your labs become.
          </h2>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-48 bg-kintsu-stone-50 border-t border-stone-100" id="comparison">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">

<div className="text-center mb-12 md:mb-24 editorial-item">
<h2 className="font-newsreader text-4xl md:text-5xl text-kintsu-burgundy font-normal tracking-tight">
          A Different Approach to Health
        </h2>
</div>

<div className="md:hidden flex justify-center mb-14">
<div className="w-full max-w-md rounded-2xl border border-stone-200/70 bg-transparent px-6 py-6 transition-all duration-700" id="comparison-paths">
<p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-5 font-sans">
            Three paths people take toward their health
          </p>

<div className="pb-5 border-b border-stone-200/60">
<div className="flex items-center justify-between gap-6">
<div className="opacity-65">
<p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-1 font-sans">Standard Care</p>
<p className="font-newsreader text-[18px] text-stone-500 font-light leading-tight">
                  Insurance-Based Testing
                </p>
</div>
<span className="path-dot w-2.5 h-2.5 rounded-full bg-stone-300/40 transition-all duration-700"></span>
</div>
</div>

<div className="py-5 border-b border-stone-200/60">
<div className="flex items-center justify-between gap-6">
<div className="opacity-65">
<p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-1 font-sans">DIY Health</p>
<p className="font-newsreader text-[18px] text-stone-500 font-light leading-tight">
                  Consumer Testing Platforms
                </p>
</div>
<span className="path-dot w-2.5 h-2.5 rounded-full bg-stone-300/40 transition-all duration-700"></span>
</div>
</div>

<div className="pt-5">
<div className="flex items-center justify-between gap-6">

<div className="relative pl-4">

<span className="kintsu-line absolute left-0 top-2 h-9 w-[2px] bg-kintsu-accent/55 rounded-full transition-all duration-700"></span>
<p className="text-[10px] tracking-[0.30em] uppercase text-kintsu-accent mb-1 font-sans">
                  Clinical Precision
                </p>
<p className="font-newsreader text-[26px] text-kintsu-dark font-light leading-tight">
                  Kintsu Health
                </p>
<p className="text-sm text-stone-500 mt-1 font-light">
                  The clinically guided path.
                </p>
</div>

<span className="kintsu-dot w-3 h-3 rounded-full bg-kintsu-accent/70 transition-all duration-700"></span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start">

<div className="editorial-item flex flex-col h-full md:pt-24 md:border-r border-stone-200 md:pr-10 opacity-40 md:opacity-100 transition-opacity" id="cmp-col-1">
<div className="h-px w-12 bg-stone-200/70 mb-10"></div>
<h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-kintsu-stone-400 mb-6 font-semibold">
            Standard Care
          </h3>
<p className="font-newsreader text-3xl md:text-[34px] text-kintsu-stone-400 font-light mb-8 leading-tight">
            Insurance-Based Testing
          </p>
<div className="font-sans text-[14px] leading-loose text-kintsu-stone-500 font-light space-y-6">
<p>Effective when disease is present.<br/>Wide ranges reduce health to a binary: fine or broken.</p>
<p>Necessary — but reactive.<br/>Designed to confirm illness, not prevent it.</p>
</div>
</div>

<div className="editorial-item flex flex-col h-full md:pt-24 md:border-r border-stone-200 md:pr-10 opacity-40 md:opacity-100 transition-opacity" id="cmp-col-2">
<div className="h-px w-12 bg-stone-200/70 mb-10 md:hidden"></div>
<h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-kintsu-stone-400 mb-6 font-semibold">
            DIY Health
          </h3>
<p className="font-newsreader text-3xl md:text-[34px] text-kintsu-stone-400 font-light mb-8 leading-tight">
            Consumer Testing Platforms
          </p>
<div className="font-sans text-[14px] leading-loose text-kintsu-stone-500 font-light space-y-6">
<p>More data, delivered faster.<br/>Little clinical interpretation.<br/>No accountability for outcomes.</p>
<p>Insight without guidance.<br/>Information without direction.</p>
</div>
</div>

<div className="editorial-item flex flex-col h-full md:pl-10 opacity-100" id="cmp-col-3">
<div className="h-px w-12 bg-stone-200/70 mb-10 md:hidden"></div>
<h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-kintsu-accent mb-6 font-semibold">
            Kintsu Health
          </h3>
<p className="font-newsreader text-4xl md:text-[42px] text-kintsu-burgundy font-medium mb-8 leading-tight">
            Clinical Precision
          </p>
<div className="font-sans text-[14px] leading-loose text-kintsu-stone-900 font-light space-y-6">
<p>Clinician-led.<br/>Longitudinal by design.</p>
<p>We test with intention,<br/>treat with precision,<br/>and reassess as your physiology evolves.</p>
<p className="font-medium text-kintsu-burgundy">
              This is preventive care —<br/>managed, refined, and measured over time.
            </p>
</div>
</div>
</div>
</div>

<style>
      /* When comparison is in view, subtly "activate" the Kintsu row (mobile card) */
      #comparison.is-inview #comparison-paths {
        background: rgba(255, 255, 255, 0.35);
        box-shadow: 0 10px 30px rgba(20, 20, 20, 0.06);
        transform: translateY(-2px);
      }

      #comparison.is-inview .kintsu-dot {
        opacity: 1;
        transform: scale(1.08);
        background: rgba(196, 164, 132, 1);
        /* uses your kintsu accent color visually */
      }

      #comparison.is-inview .kintsu-line {
        opacity: 1;
        background: rgba(196, 164, 132, 0.9);
        height: 40px;
        /* slightly taller when active */
      }

      /* Default (resting) */
      .kintsu-dot {
        opacity: .75;
        transform: scale(1);
      }

      .kintsu-line {
        opacity: .85;
        height: 36px;
      }
    </style>


</section>

<section className="relative py-40 md:py-60 bg-[#1a1919] overflow-hidden text-kintsu-cream" id="transition">

<div className="absolute inset-0 z-0">
<img alt="Abstract Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="/assets/images/Abstract_Hero_p2ckhb.jpg"/>

<div className="absolute inset-0 bg-black/0"></div>
</div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="space-y-16 md:space-y-20">

<h2 className="editorial-item font-newsreader text-4xl md:text-6xl leading-[1.1] font-normal tracking-tight text-white delay-0">
          Health does not fail suddenly.
        </h2>

<p className="editorial-item font-newsreader text-2xl md:text-4xl leading-snug font-light text-white/80 pl-2 md:pl-0 delay-700">
          It gives way gradually —<br className="hidden md:block"/>often without notice.
        </p>

<div className="editorial-item delay-1000">
<p className="font-sans text-lg md:text-xl leading-loose font-light text-white/60 max-w-[40ch]">
            We focus on the earliest signs of strain —
            testing with intention,
            treating with precision,
            and reassessing as your physiology evolves.
          </p>

<p className="font-newsreader italic text-2xl text-kintsu-accent pt-8">
            Preventive care, practiced deliberately.
          </p>
</div>
</div>
</div>
</section>

<div className="bg-kintsu-parchment pt-32 md:pt-40 pb-12 text-center" id="the-kintsu-method">
<h2 className="editorial-item text-4xl md:text-6xl text-kintsu-burgundy font-newsreader font-light mb-4">The Kintsu
      Method</h2>
<p className="editorial-item text-sm tracking-[0.2em] uppercase font-semibold text-kintsu-accent font-sans">Our
      Philosophy</p>
</div>
<section className="relative w-full bg-kintsu-parchment h-[300vh] md:h-[450vh]" id="method">
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col md:flex-row items-center">
<div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row h-full relative">

<div className="absolute left-6 md:left-12 lg:left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 hidden md:flex">
<div className="indicator-line active" id="ind-1"></div>
<div className="indicator-line" id="ind-2"></div>
<div className="indicator-line" id="ind-3"></div>
</div>

<div className="w-full md:w-[65%] h-[60%] md:h-full relative z-20 flex flex-col md:block items-center justify-center md:pl-20">
<div className="hidden md:block w-full will-change-transform h-full md:h-auto items-center justify-center" id="kintsu-text-track">

<div className="mobile-stage-panel md:relative md:inset-auto md:h-[100vh] w-full flex flex-col justify-center px-6 md:pl-12 shrink-0 md:opacity-100 transition-opacity duration-700 md:duration-0 text-center md:text-left items-center md:items-start">
<div className="max-w-[42ch] md:max-w-none mx-auto md:mx-0">
<h2 className="text-5xl md:text-7xl text-kintsu-burgundy tracking-tighter mb-6 md:mb-8 transition-all duration-700 font-newsreader font-light">
<span className="block text-xs font-semibold tracking-[0.2em] text-kintsu-accent mb-4 opacity-80 font-sans">01</span>
                  Reveal
                </h2>
<div className="w-12 h-[1px] bg-kintsu-stone-400 mb-6 md:mb-8 mx-auto md:mx-0"></div>
<div className="space-y-4 md:space-y-6 max-w-[50ch]">
<p className="text-lg md:text-xl font-light leading-relaxed text-stone-700 font-sans">
                    We begin by revealing the full picture. Through advanced
                    diagnostics and deep physiological analysis, we identify
                    how systems are functioning beneath the surface—where
                    strain has accumulated, where compensation is occurring,
                    and where risk may be developing quietly.
                  </p>
</div>
</div>
</div>

<div className="mobile-stage-panel md:relative md:inset-auto md:h-[100vh] w-full flex flex-col justify-center px-6 md:pl-12 shrink-0 md:opacity-100 transition-opacity duration-700 md:duration-0 text-center md:text-left items-center md:items-start">
<div className="max-w-[42ch] md:max-w-none mx-auto md:mx-0">
<h2 className="text-5xl md:text-7xl text-kintsu-burgundy tracking-tighter mb-6 md:mb-8 transition-all duration-700 font-newsreader font-light">
<span className="block text-xs font-semibold tracking-[0.2em] text-kintsu-accent mb-4 opacity-80 font-sans">02</span>
                  Restore
                </h2>
<div className="w-12 h-[1px] bg-kintsu-stone-400 mb-6 md:mb-8 mx-auto md:mx-0"></div>
<div className="space-y-4 md:space-y-6 max-w-[50ch]">
<p className="text-lg md:text-xl font-light leading-relaxed text-stone-700 font-sans">
                    With signals clearly identified, we restore balance at the
                    systems level. Using clinically managed therapies, we
                    reinforce what has been under strain—bridging gaps,
                    stabilizing function, and supporting recovery with
                    precision.
                  </p>
</div>
</div>
</div>

<div className="mobile-stage-panel md:relative md:inset-auto md:h-[100vh] w-full flex flex-col justify-center px-6 md:pl-12 shrink-0 md:opacity-100 transition-opacity duration-700 md:duration-0 text-center md:text-left items-center md:items-start">
<div className="max-w-[42ch] md:max-w-none mx-auto md:mx-0">
<h2 className="text-5xl md:text-7xl text-kintsu-burgundy tracking-tighter mb-6 md:mb-8 transition-all duration-700 font-newsreader font-light">
<span className="block text-xs font-semibold tracking-[0.2em] text-kintsu-accent mb-4 opacity-80 font-sans">03</span>
                  Radiate
                </h2>
<div className="w-12 h-[1px] bg-kintsu-stone-400 mb-6 md:mb-8 mx-auto md:mx-0"></div>
<div className="space-y-4 md:space-y-6 max-w-[50ch]">
<p className="text-lg md:text-xl font-light leading-relaxed text-stone-700 font-sans">
                    When systems are restored and supported, performance
                    compounds naturally. This stage focuses on ongoing
                    optimization—refining what works, adapting as biology
                    changes, and ensuring progress is sustained over time.
                  </p>
</div>
</div>
</div>
</div>

<div className="md:hidden absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none z-20" id="mobile-kintsu-track">

<div className="flex flex-col items-center justify-center shrink-0 mb-8 transition-opacity duration-300 pointer-events-auto" id="mobile-header-group">
<span className="block text-xs font-semibold tracking-[0.2em] text-kintsu-accent mb-4 opacity-80 font-sans" id="mobile-stage-number">01</span>
<h2 className="text-5xl text-kintsu-burgundy tracking-tighter mb-6 font-newsreader font-light" id="mobile-stage-title">Reveal</h2>
<div className="w-12 h-[1px] bg-kintsu-stone-400"></div>
</div>

<div className="relative w-full px-6 max-w-[42ch] h-[200px] pointer-events-auto">
<p className="mobile-method-p absolute inset-0 text-center text-lg font-light leading-relaxed text-stone-700 font-sans transition-opacity duration-500 opacity-100">
                We begin by revealing the full picture. Through advanced
                diagnostics and deep physiological analysis, we identify
                how systems are functioning beneath the surface—where
                strain has accumulated, where compensation is occurring,
                and where risk may be developing quietly.
              </p>
<p className="mobile-method-p absolute inset-0 text-center text-lg font-light leading-relaxed text-stone-700 font-sans transition-opacity duration-500 opacity-0">
                With signals clearly identified, we restore balance at the
                systems level. Using clinically managed therapies, we
                reinforce what has been under strain—bridging gaps,
                stabilizing function, and supporting recovery with
                precision.
              </p>
<p className="mobile-method-p absolute inset-0 text-center text-lg font-light leading-relaxed text-stone-700 font-sans transition-opacity duration-500 opacity-0">
                When systems are restored and supported, performance
                compounds naturally. This stage focuses on ongoing
                optimization—refining what works, adapting as biology
                changes, and ensuring progress is sustained over time.
              </p>
</div>
</div>
</div>

<div className="w-full h-[26vh] min-h-[160px] max-h-[240px] md:w-[35%] md:h-full md:max-h-none md:min-h-0 relative z-10 overflow-hidden flex items-center justify-center" id="helix-viewport">
<img className="will-change-transform absolute top-0 left-0" id="long-helix" src="/assets/images/Long_Helix_png_busiqf.png" style={{maxWidth: 'none', width: '100%', height: 'auto', transform: 'translateY(0px)'}}/>
</div>
</div>
</div>
</section>

<section className="relative py-48 md:py-64 flex flex-col items-center justify-center bg-kintsu-burgundy overflow-hidden" id="philosophy">

<div className="absolute inset-0 z-0">
<img alt="Kintsugi Background" className="w-full h-full object-cover opacity-80 mix-blend-normal" src="/assets/images/kintsugi_back_2_rss13r.jpg"/>

<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
<h2 className="editorial-item font-newsreader text-4xl md:text-5xl lg:text-7xl text-white font-light not-italic tracking-tighter leading-tight mb-12">
        Anyone can deliver test results.
      </h2>
<h2 className="editorial-item font-newsreader text-4xl md:text-5xl lg:text-7xl text-white font-medium not-italic tracking-tighter leading-tight delay-200">
        Kintsu manages physiology.
      </h2>
</div>
</section>

<footer className="md:px-12 overflow-hidden text-white pt-20 pr-6 pb-8 pl-6 relative bg-kintsu-burgundy" id="contact">

<div className="absolute inset-0 z-0">
<img alt="Abstract Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" src="/assets/images/a_calm_abstract_biological_scene_inspired_by_natural_physiology__soft_organic_forms_gently_flowing__32edbjavqdl0asy4yfxo_hsqrcn.jpg"/>
<div className="bg-gradient-to-t from-kintsu-burgundy via-kintsu-burgundy/95 to-kintsu-burgundy/95 absolute inset-0">
</div>
</div>
<div className="max-w-7xl mx-auto relative z-10 text-center">

<a className="editorial-item inline-block uppercase tracking-[0.2em] text-xs font-semibold px-12 py-5 border border-white/65 text-white bg-transparent transition-all duration-[220ms] ease-out hover:bg-white hover:text-[#1a1919] hover:border-white mb-20" href="/contact-us">
        Schedule a Consultation
      </a>

<div className="editorial-item pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-white/50 gap-8 md:gap-0">
<div className="flex items-center gap-4">
<img alt="Kintsu Logo" className="h-5 w-auto object-contain opacity-70" src="/assets/images/K_logomark_cream_transparent_v2_w15rns.png"/>
<span className="tracking-widest uppercase font-sans pt-0.5">
            © 2025 Kintsu Health
          </span>
</div>
<div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-10 md:gap-y-0">
<a className="transition-all duration-200 hover:text-white uppercase tracking-widest font-sans opacity-70 hover:opacity-100" href="/privacy-hipaa">Privacy
            &amp; HIPAA</a>
<a className="transition-all duration-200 hover:text-white uppercase tracking-widest font-sans opacity-70 hover:opacity-100" href="/terms-medical-disclaimer">Terms</a>
<a className="transition-all duration-200 hover:text-white uppercase tracking-widest font-sans opacity-70 hover:opacity-100" href="/accessibility-statement">Accessibility</a>
</div>
</div>
</div>
</footer>







    </>
  );
}
