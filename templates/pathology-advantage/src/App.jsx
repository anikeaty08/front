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



      // safer scroll restoration (optional while debugging)
      history.scrollRestoration = 'manual';

      const scroller = document.getElementById('work-carousel');
      const cards = Array.from(scroller.querySelectorAll('article'));

      // Center a slide horizontally without changing page Y
      function centerSlide(container, slide, behavior = 'auto') {
        if (!container || !slide) return;
        const x = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
        container.scrollTo({ left: x, behavior }); // no 'top' => no vertical jump
      }

      function setActiveCard() {
        const centerX = scroller.scrollLeft + scroller.clientWidth / 2;
        let closest = { el: null, dist: Infinity, idx: -1 };

        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const viewportCenter = window.innerWidth / 2;
          const dist = Math.abs(cardCenter - viewportCenter);
          if (dist < closest.dist) closest = { el: card, dist, idx };
        });

        cards.forEach((card, idx) => {
          const isActive = card === closest.el;
          card.style.transform = isActive ? 'scale(1)' : 'scale(0.94)';
          card.style.transition = 'transform 400ms cubic-bezier(.2,.8,.2,1), opacity 400ms';
          card.style.opacity = isActive ? '1' : '0.55';
          card.classList.toggle('shadow-[0_25px_100px_-20px_rgba(0,0,0,0.7)]', isActive);
          card.classList.toggle('ring-white/40', isActive); // Increased brightness for active ring
          card.classList.toggle('ring-white/10', !isActive);
          card.querySelectorAll('.js-prev, .js-next').forEach(btn => {
            btn.classList.toggle('hidden', !isActive);
            btn.classList.toggle('flex', isActive);
          });
          card.dataset.index = idx;
        });

        return closest.idx;
      }

      // Smooth snap to a specific card (horizontal only)
      function goTo(index) {
        const clamped = Math.max(0, Math.min(cards.length - 1, index));
        const target = cards[clamped];
        centerSlide(scroller, target, 'smooth');
      }

      scroller.addEventListener('click', (e) => {
        const prev = e.target.closest('.js-prev');
        const next = e.target.closest('.js-next');
        if (!prev && !next) return;
        const i = setActiveCard();
        if (prev) goTo(i - 1);
        if (next) goTo(i + 1);
      });

      let raf = null;
      function onScroll() {
        if (raf) return;
        raf = requestAnimationFrame(() => { setActiveCard(); raf = null; });
      }
      scroller.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', setActiveCard);

      // Initialize AFTER layout paints, then center the desired card horizontally
      window.addEventListener('load', () => {
        requestAnimationFrame(() => {
          const initial = cards[1] || cards[0];
          centerSlide(scroller, initial, 'auto'); // <-- no vertical scrolling
          setActiveCard();
        });
      });
    


      // Logic for horizontal scroll based on vertical scroll
      const solutionsSection = document.getElementById('solutions');
      const solutionsTrack = document.getElementById('solutions-track');

      function updateHorizontalScroll() {
          if (!solutionsSection || !solutionsTrack) return;
          const rect = solutionsSection.getBoundingClientRect();
          const sectionHeight = solutionsSection.offsetHeight;
          const windowHeight = window.innerHeight;

          // Calculate progress (0 to 1) through the pinned section
          // Start scrolling when top reaches top of viewport, end when bottom reaches bottom of viewport
          let progress = (windowHeight - rect.top) / (sectionHeight + windowHeight); // Crude approx, let's refine

          // More precise progress for sticky element:
          // The sticky element stays fixed for (sectionHeight - windowHeight) pixels.
          const scrollDistance = sectionHeight - windowHeight;
          const scrolled = -rect.top; // Amount scrolled past top

          let p = 0;
          if (scrolled > 0) {
              p = scrolled / scrollDistance;
          }
          p = Math.min(Math.max(p, 0), 1);

          const trackWidth = solutionsTrack.scrollWidth;
          const viewportWidth = window.innerWidth;
          const maxTranslate = trackWidth - viewportWidth;

          solutionsTrack.style.transform = `translateX(-${p * maxTranslate}px)`;
      }

      window.addEventListener('scroll', updateHorizontalScroll);
      window.addEventListener('resize', updateHorizontalScroll);
    


      document.addEventListener('DOMContentLoaded', () => {
          const container = document.getElementById('reveal-text');
          const text = container.textContent.trim();
          container.innerHTML = '';

          const words = text.split(' ');
          const spans = words.map(word => {
              const span = document.createElement('span');
              span.textContent = word + ' ';
              span.style.color = 'rgb(55, 65, 81)'; // Start gray (tailwind gray-700 equivalent approx)
              container.appendChild(span);
              return span;
          });

          function updateTextReveal() {
              const rect = container.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              // Reveal starts when element enters bottom 80% of screen, ends when it's near top 20%
              const start = windowHeight * 0.9;
              const end = windowHeight * 0.2;

              const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

              const wordsToReveal = Math.floor(progress * spans.length);

              spans.forEach((span, i) => {
                  if (i < wordsToReveal) {
                      span.style.color = '#ffffff';
                  } else {
                      span.style.color = 'rgba(255, 255, 255, 0.2)'; // Faded gray
                  }
              });
          }

          window.addEventListener('scroll', updateTextReveal);
          updateTextReveal(); // Initial check
      });
    


      document.getElementById('year').textContent = new Date().getFullYear();

      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ strokeWidth: 1.5 });
      });

      // Section scroll transitions with blur effect
      (function () {
        const sections = document.querySelectorAll('section');

        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('section-visible');
              entry.target.classList.remove('section-exiting');
            } else {
              // Add blur when section is exiting viewport
              if (entry.boundingClientRect.top < 0) {
                entry.target.classList.add('section-exiting');
              }
            }
          });
        }, {
          threshold: 0.15,
          rootMargin: '-10% 0px -10% 0px'
        });

        sections.forEach((section) => {
          sectionObserver.observe(section);
        });
      })();

      // Scroll animations for smaller elements
      (function () {
        if (!window.__inViewIO) {
          window.__inViewIO = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                window.__inViewIO.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
        }

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          window.__inViewIO.observe(el);
        });
      })();

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Mobile Menu Toggle
      (function() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        let isOpen = false;

        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
          isOpen = !isOpen;
          if (isOpen) {
            menu.classList.remove('hidden');
            requestAnimationFrame(() => {
              menu.style.maxHeight = menu.scrollHeight + 'px';
            });
          } else {
            menu.style.maxHeight = '0';
            setTimeout(() => {
              menu.classList.add('hidden');
            }, 300);
          }
        });

        // Close menu when clicking links
        menu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            isOpen = false;
            menu.style.maxHeight = '0';
            setTimeout(() => {
              menu.classList.add('hidden');
            }, 300);
          });
        });
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
      

<div className="hero-beams">
<div className="bg-glow-blob" style={{top: '-10%', left: '-10%'}}></div>
<div className="bg-glow-blob" style={{bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="beam"></div>
<div className="beam beam-2"></div>
</div>
<div className="overflow-hidden relative">

<header className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex border-white/[0.06] border-b pt-6 pb-6 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<svg className="lucide lucide-microscope w-6 h-6 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18h8"></path>
<path d="M3 22h18"></path>
<path className="" d="M14 22a7 7 0 1 0 0-14h-1"></path>
<path className="" d="M9 14h2"></path>
<path className="" d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
</svg>
<span className="text-xl font-semibold tracking-tight">
                Pathology Advantage
              </span>
</a>
<button aria-label="Toggle menu" className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition ml-auto" id="mobile-menu-toggle">
<svg className="lucide lucide-menu w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition" href="#risks">Risks</a>
<a className="hover:text-white transition" href="#solutions">
                Solutions
              </a>
<a className="hover:text-white transition" href="#process">Process</a>
<a className="hover:text-white transition" href="#experience">
                Experience
              </a>
</nav>
<div className="flex items-center gap-3">
<div className="flex items-center gap-3">
<div className="inline-block group relative">
<a className="border-gradient relative inline-flex h-11 min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/5 px-6 text-sm font-medium tracking-tight text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white" href="https://cal.com/pathologyadvantage/30min">
<span className="relative cursor-pointer" onclick="window.location.href='https://cal.com/pathologyadvantage/30min'" role="button">
                      Schedule Consultation
                    </span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full opacity-20 transition-all duration-300 group-hover:opacity-60" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 50%,rgba(255,255,255,0) 100%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 50%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-60" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</a>
</div>
<a className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 gap-x-2 gap-y-2 items-center justify-center hidden md:inline-flex text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl" href="mailto:consult@pathologyadvantage.com">
                  Send Email
                  <svg className="lucide lucide-mail w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</a>
</div>
</div>
</div>
<nav className="lg:hidden hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden" id="mobile-menu" style={{maxHeight: '0px'}}>
<div className="flex flex-col p-6 space-y-4">
<a className="text-base text-white/70 hover:text-white transition py-2" href="#risks">
                Risks
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#solutions">
                Solutions
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#process">
                Process
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#experience">
                Experience
              </a>
<a className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 mt-2" href="#contact">
                Contact Us
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>
</div>
</header>

<section className="min-h-screen flex flex-col section-visible xl:pt-0 xl:pb-0 text-center pt-0 pr-6 pb-0 pl-6 relative items-center justify-center">

<div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 backdrop-blur-sm text-white/80 ring-1 ring-white/10 animate-badge">
<span className="i-lucide-activity text-blue-400" style={{}}>
<svg className="lucide lucide-activity w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</span>
<span className="">Operational Transformation</span>
</div>

<h1 className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-24 pb-12" style={{animation: 'titleEmergence 1.8s ease-out both'}}>
<span className="block text-[8vw] sm:text-6xl lg:text-8xl flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            Modernizing
            <div className="relative w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full overflow-hidden border-2 border-white/20 shadow-2xl inline-block" style={{animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both'}}>
<img alt="Molecular" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19999159-264d-4436-bc5d-568c53337f7b_1600w.jpg"/>
</div>
            Diagnostics
          </span>
<span className="block text-[8vw] sm:text-6xl lg:text-8xl animate-shimmer-mask [--shine:220%] text-blue-700" style={{}}>
            Digital Pathology
          </span>
<span className="block text-[8vw] sm:text-6xl lg:text-8xl text-blue-400" style={{}}></span>
</h1>

<p className="md:text-xl type-words is-in text-lg text-white/80 max-w-3xl mr-auto ml-auto" data-duration="1.5s" data-stagger=".1s" style={{'--stagger': '0.1s', '--dur': '1.5s', '--ease': 'ease-in-out', '--delay': '0.4s'}}>
<span className="w" style={{'--i': '0'}}>
            End-to-end digital pathology leadership
          </span>
<span className="w" style={{'--i': '1'}}>
            for clinical and research operations,
          </span>
<span className="w" style={{'--i': '2'}}>trusted across 120+ enterprise</span>
<span className="w" style={{'--i': '3'}}>transformations over 15 years.</span>
</p>

<div className="flex gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">

<a className="group inline-flex items-center justify-center overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] text-sm font-medium text-white tracking-tight bg-neutral-950/95 h-11 ring-[#ffffff]/30 ring-1 rounded-full pr-6 pl-6 relative shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#solutions" style={{zIndex: '2'}}>
<span className="z-10 transition-transform duration-300 group-hover:translate-x-1 relative">
              Our Solutions
            </span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-all duration-300" style={{background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)', animation: 'pulse 2s ease-in-out infinite'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
</a>

<div className="inline-block group relative">
<a className="border-gradient inline-flex min-w-[140px] cursor-pointer items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 h-11 rounded-full pr-6 pl-6 relative backdrop-blur-xl" href="https://cal.com/pathologyadvantage/30min">
<span className="cursor-pointer relative" onclick="window.location.href='https://cal.com/pathologyadvantage/30min'" role="button">Schedule Consultation</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full opacity-20 transition-all duration-300 group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</a>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<div className="flex flex-wrap xl:py-24 text-base text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-clipboard-check w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14 2 2 4-4"></path>
</svg>
            Regulatory Validation
          </span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-shield-check w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
            Enterprise AI Governance
          </span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-flask-conical w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
<path d="M8.5 2h7"></path>
<path className="" d="M7 16h10"></path>
</svg>
            GxP Operations
          </span>
</div>
</section>
</div>

<div className="relative mt-12 md:mt-16" id="risks">
<section className="xl:pt-24 pt-24 pb-32" data-section="">
<div className="container max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal">
<div className="max-w-3xl animate-on-scroll mb-10" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
                The Cost of Digital Pathology Failure
              </h2>
<p className="md:text-lg text-base text-white/70 mt-6 md:max-w-[65%]">
                Face compliance exposure, diagnostic errors, workforce strain,
                financial losses, and erosion of institutional reputation and
                trust.
              </p>
</div>
</div>

<div className="relative">
<div className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:scroll-px-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6 gap-y-x-6" id="work-carousel" style={{WebkitOverflowScrolling: 'touch'}}>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="0" style={{transform: 'scale(1)', opacity: '1', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Fragmented Data" className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex gap-2 text-[11px] md:text-xs text-white gap-x-2 gap-y-2 items-center">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/30 ring-1 ring-red-400" style={{}}>
<svg className="lucide lucide-alert-triangle h-3.5 w-3.5 text-red-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</span>
<span className="drop-shadow-md" style={{}}>Biopharma</span>
</div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="md:text-2xl lg:text-[28px] text-xl font-semibold text-white tracking-tight drop-shadow-md">
                        Clinical &amp; Research Integrity Failure
                      </h3>
<p className="md:text-base text-sm text-white/90 drop-shadow-md leading-relaxed">
                        Failures in digital pathology execution corrupt research
                        data, compromise clinical trials, delay regulatory
                        submissions, and push therapies to market too late to
                        realize their intended clinical and commercial value.
                      </p>
</div>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-left w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-right w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="1" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Validation" className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05bf6ca3-41c4-45fb-bb7d-604128040678_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/30 ring-1 ring-red-400" style={{}}>
<svg className="lucide lucide-shield-alert h-3.5 w-3.5 text-red-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</span>
<span className="drop-shadow-md">Healthcare Systems</span>
</div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="md:text-2xl lg:text-[28px] text-xl font-semibold text-white tracking-tight drop-shadow-md">
                        Patient Safety &amp; Institutional Risk
                      </h3>
<p className="md:text-base text-sm text-white/90 drop-shadow-md leading-relaxed">
                        Fragmented digital pathology workflows introduce
                        diagnostic variability, compliance exposure, and care
                        delays, putting patient outcomes, accreditation, and
                        institutional trust at risk.
                      </p>
</div>
</div>
</div>
<button className="js-prev hidden absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-left h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="js-next hidden absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-right h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="2" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Precision Diagnostics" className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16466887-00e7-4662-a40c-7f7e8f97f03a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/30 ring-1 ring-red-400" style={{}}>
<svg className="lucide lucide-database h-3.5 w-3.5 text-red-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</span>
<span className="drop-shadow-md">Precision Diagnostics</span>
</div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight text-white drop-shadow-md">
                        Data Monetization &amp; Strategic Value Loss
                      </h3>
<p className="text-sm md:text-base text-white/90 drop-shadow-md leading-relaxed">
                        Inadequate digital pathology foundations prevent
                        scalable data generation, limiting AI development,
                        strategic partnerships, and the ability to monetize
                        diagnostic and genomic assets.
                      </p>
</div>
</div>
</div>
<button className="js-prev hidden absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-left h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="js-next hidden absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-right h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="3" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Reference Laboratories" className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa0586a5-08f3-49e1-88a8-bf166e0050a0_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/30 ring-1 ring-red-400" style={{}}>
<svg className="lucide lucide-scale h-3.5 w-3.5 text-red-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
</span>
<span className="drop-shadow-md">Reference Laboratories</span>
</div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight text-white drop-shadow-md">
                        Operational Scale &amp; Margin Compression
                      </h3>
<p className="text-sm md:text-base text-white/90 drop-shadow-md leading-relaxed">
                        Disconnected systems and inefficient workflows constrain
                        throughput, increase per-case costs, and undermine the
                        operational leverage required to compete at enterprise
                        scale.
                      </p>
</div>
</div>
</div>
<button className="js-prev hidden absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-left h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="js-next hidden absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-right h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="4" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Pathology Groups" className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86a7c71c-24d9-409c-a5c8-435af4f02840_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/30 ring-1 ring-red-400" style={{}}>
<svg className="lucide lucide-file-warning h-3.5 w-3.5 text-red-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</span>
<span className="drop-shadow-md">Pathology Groups</span>
</div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight text-white drop-shadow-md">
                        Contract Risk &amp; Competitive Displacement
                      </h3>
<p className="text-sm md:text-base text-white/90 drop-shadow-md leading-relaxed">
                        Inconsistent turnaround times and diagnostic variability
                        jeopardize hospital contracts, referral relationships,
                        and long-term market positioning.
                      </p>
</div>
</div>
</div>
<button className="js-prev hidden absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-left h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="js-next hidden absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/30 backdrop-blur-md text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
<svg className="lucide lucide-chevron-right h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</article>
</div>

<div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

<div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
</div>
</div>

<div className="pointer-events-none absolute inset-0" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'}}></div>
</section>
</div>
<style className="">
      /* hide scrollbar */
      #work-carousel::-webkit-scrollbar{ display:none; }
    </style>


<section className="border-white/5 border-t pt-24 pb-24" id="experience">
<div className="container max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            120 plus digital pathology transformations
            <br/>
<span className="text-white/60">globally across 15 years</span>
</h2>
</div>

<div className="marquee-container fade-mask mb-8">
<div className="marquee-content text-2xl font-bold text-white/20">
<span className="">Mayo Clinic</span>
<span className="">•</span>
<span className="">Hoag Hospital</span>
<span>•</span>
<span className="">Kaiser Permanente</span>
<span className="">•</span>
<span className="">MGH</span>
<span className="">•</span>
<span className="">Scripps Health</span>
<span>•</span>
<span>MD Anderson</span>
<span>•</span>
<span>UCSD Health</span>
<span>•</span>
<span>OHSU</span>
<span>•</span>
<span>Quest Diagnostics</span>
<span>•</span>
<span>Charles River Labs</span>
<span>•</span>
<span>Google Inc.</span>
<span>•</span>
<span>Lab Corp</span>
<span>IDEXX</span>
<span>•</span>
<span>Incyte Pathology</span>
<span>•</span>
<span>Indivumed</span>
<span>•</span>
<span>Organovo</span>
</div>
</div>

<div className="marquee-container">
<div className="marquee-content marquee-content-reverse text-2xl font-bold text-white/20">
<span className="">AbbVie</span>
<span>•</span>
<span className="">Bristol Myers Squibb</span>
<span>•</span>
<span className="">Eli Lilly</span>
<span className="">•</span>
<span className="">Gilead Sciences</span>
<span>•</span>
<span className="">Pfizer</span>
<span>•</span>
<span>Novartis</span>
<span>•</span>
<span>NGM Bio</span>
<span>•</span>
<span>Adverum Bio</span>
<span>•</span>
<span>Lyell Immunopharma</span>
<span>•</span>
<span>St.Jude Children’s Research Hospital</span>
<span>•</span>
<span>Seattle Children’s Hospital</span>
<span>•</span>
<span>Legacy Health</span>
<span>•</span>
<span>UW Medicine</span>
<span>•</span>
<span>Stanford Hospital</span>
<span>•</span>
<span>VA Seattle</span>
<span>•</span>
<span>Fred Hutchinson Cancer Research Center</span>
<span>ARUP</span>
<span>•</span>
<span>Cedar Sinai</span>
<span>•</span>
<span>Clevaland Clinic</span>
<span>•</span>
<span>Common Spirit</span>
</div>
</div>
</div>
</section>


<section className="h-[300vh] relative" id="solutions">
<div className="sticky overflow-hidden flex flex-col h-screen top-0 justify-center">

<div className="absolute top-20 left-0 w-full z-10 pointer-events-none">
<div className="container mx-auto px-6 lg:px-8 max-w-7xl">
<div className="max-w-3xl">
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-layers w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
<span className="text-xs text-white/70">Expertise</span>
</div>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
                Comprehensive Solutions
              </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
                End-to-end consulting services designed to modernize pathology
                operations.
              </p>
</div>
</div>
</div>

<div className="flex items-center w-full pl-6 md:pl-[max(2rem,calc((100vw-80rem)/2))] gap-8" id="solutions-track" style={{willChange: 'transform', transform: 'translateX(0px)'}}>

<div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-square portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="Strategy" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                Digital Pathology Strategy &amp; Readiness
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                Executive-led assessment and roadmap development to align
                clinical, IT, and compliance stakeholders before large-scale
                investment.
              </p>
</div>
</div>

<div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-square portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="AI Tech" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67c57d90-7975-4acd-a852-4ca2971c05cb_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                Platform &amp; Vendor Selection Advisory
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                Independent guidance on scanners, image management systems, and
                AI platforms to ensure architectural fit and long-term
                scalability.
              </p>
</div>
</div>

<div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-square portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="Regulatory" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                Workflow &amp; Operating Model Design
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                Redesign of clinical and research workflows to improve
                turnaround time, quality, and workforce efficiency.
              </p>
</div>
</div>

<div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-square portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="Vendor" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e54d9f9b-c8a9-49ff-a4d3-737308cde751_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                Regulatory Validation &amp; Compliance Oversight
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                CAP, CLIA, and GxP-aligned validation strategy and execution
                oversight to de-risk audits and production deployment.
              </p>
</div>
</div>

<div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-square portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="Change Management" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bd48d5d-a70f-444c-8626-27cd5bc3e3c5_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                AI &amp; Data Governance Frameworks
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                Enterprise governance for AI deployment, data integrity, model
                validation, and lifecycle management.
              </p>
</div>
</div>

<div className="flex-shrink-0 w-[300px] md:w-[400px] aspect-square portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cd1c2ce-cb3e-44bf-ba93-9d0dcd6b29b4_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                Implementation Leadership &amp; Go-Live Oversight
              </h3>
<p className="text-sm text-white/80 leading-relaxed">
                Hands-on leadership across deployment phases to ensure execution
                fidelity, adoption, and sustained ROI.
              </p>
</div>
</div>

<div className="w-12 flex-shrink-0"></div>
</div>
</div>
</section>
<section className="pt-24 pb-24 relative" id="process">
<div className="lg:px-8 max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-gradient before:rounded-full rounded-full px-4 py-2 mb-6">
<svg className="lucide lucide-workflow w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
<span className="text-xs text-white/70 font-medium">Process</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            From Concept to Sustained Operations
          </h2>
<p className="text-white/70 mt-4 text-lg">
            A proven execution model for enterprise-scale digital pathology
            programs.
          </p>
</div>
<div className="relative">

<div className="absolute left-5 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block z-0" style={{}}></div>
<div className="space-y-6">

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
<div className="flex gap-5 items-start">

<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center border-4 border-black" style={{}}>
<span className="text-base font-bold">1</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Current State Assessment
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    A deep assessment of existing infrastructure, clinical
                    workflows, and organizational readiness to identify gaps
                    before they become costly pivots.
                  </p>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center border-4 border-black" style={{}}>
<span className="text-base font-bold">2</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Strategy &amp; Design
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    A comprehensive roadmap covering vendor selection,
                    architecture, and financial modeling, aligned to clinical,
                    operational, and executive priorities.
                  </p>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center border-4 border-black" style={{}}>
<span className="text-base font-bold">3</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Implementation Oversight
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    Hands-on leadership through deployment, bridging IT,
                    clinical teams, and vendors to ensure disciplined execution
                    and seamless integration.
                  </p>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center border-4 border-black" style={{}}>
<span className="text-base font-bold">4</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Validation &amp; Optimization
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    Rigorous regulatory validation to support compliant clinical
                    use, followed by continuous optimization of workflows and AI
                    performance to sustain ROI.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="min-h-[120vh] flex bg-black relative items-center justify-center" id="mission-statement">
<div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight leading-tight text-center reveal-text-container" id="reveal-text"><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>Every
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>initiative
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>has
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>two
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>possible
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>endings:
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>underperformance
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>or
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>sustained
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>value
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>creation.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>Digital
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>pathology
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>is
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>powerful,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>but
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>power
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>without
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>a
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>clear
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>operating
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>model
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>rarely
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>delivers.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>When
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>operating
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>model,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>technology
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>enablement,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>and
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>clinical
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>adoption
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>are
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>misaligned:
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>clinical
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>teams
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>strain,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>financial
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>returns
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>stall,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>and
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>credibility
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>erodes.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>When
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>they
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>are
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>aligned:
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>digital
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>workflows
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>are
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>adopted,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>validation
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>clears,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>AI
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>tools
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>integrate,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>and
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>value
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>compounds.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>Your
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>competitors
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>are
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>moving.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>Margins
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>compress.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>Expectations
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>rise.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>The
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>only
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>sustainable
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>advantage
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>is
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>not
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>faster
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>tools,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>but
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>executable
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>strategy
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>delivered
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>with
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>operational
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>discipline.
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>This
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>is
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>where
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>transformation
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>becomes
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>performance,
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>and
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>performance
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>becomes
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>
</span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>measurable
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>business
 </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}> </span><span style={{color: 'rgba(255, 255, 255, 0.2)'}}>value. </span></h2>
</div>
</section>





<section className="z-10 bg-center xl:pt-32 xl:pb-32 bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop)] bg-cover pt-32 pb-32 relative" id="contact">
<div className="absolute inset-0 bg-black/80"></div>
<div className="lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 relative z-10">
<h2 className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tight text-center">
          Your Next Step: Schedule a Complimentary Consultation
        </h2>
<p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 text-center">
          Whether you are assessing readiness or scaling an existing
          implementation, we bring the expertise to ensure success.
        </p>
<div className="flex justify-center mb-8">
<div className="inline-block group relative">
<a className="border-gradient relative inline-flex h-11 min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/5 px-6 text-sm font-medium tracking-tight text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white" href="https://cal.com/pathologyadvantage/30min">
<span className="relative cursor-pointer" onclick="window.location.href='https://cal.com/pathologyadvantage/30min'" role="button">
                Schedule Consultation
              </span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full opacity-20 transition-all duration-300 group-hover:opacity-60" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 50%,rgba(255,255,255,0) 100%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 50%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-60" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</a>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-6"></div>
</div>
</section>

<footer className="z-10 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="border-white/[0.06] border-t mt-20 pt-12 pb-12">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="text-lg font-semibold">Pathology Advantage</span>
</div>
<p className="leading-relaxed text-sm text-white/60 mb-4">
                Premier digital pathology consulting for healthcare systems and
                biopharma. Pathology Advantage is an operating company of
                GrowthPoint Advantage INC.
              </p>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#risks">
                    Risks
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#solutions">
                    Solutions
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#process">
                    Process
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#contact">
                    Contact
                  </a>
</li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Services</h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#solutions">
                    Strategic Planning
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#solutions">
                    Vendor Selection
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#solutions">
                    AI Implementation
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#solutions">
                    Regulatory Compliance
                  </a>
</li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">
                Get in Touch
              </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-white/60">
<svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<a className="hover:text-white transition" href="mailto:consult@pathologyadvantage.com">
                    consult@pathologyadvantage.com
                  </a>
</li>
<li className="flex items-start gap-2 text-sm text-white/60">
<svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Global</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
<p className="text-xs text-white/50 text-center md:text-left">
              ©
              <span id="year">2026</span>
              Pathology Advantage. All rights reserved.
            </p>
<div className="flex items-center gap-6 text-xs text-white/60">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">
                Terms of Service
              </a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
