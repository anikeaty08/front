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
          card.classList.toggle('ring-white/20', isActive);
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

      // Optional keyboard nav unchanged
      window.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        const i = setActiveCard();
        if (e.key === 'ArrowLeft') goTo(i - 1);
        if (e.key === 'ArrowRight') goTo(i + 1);
      });
    


        (function () {
          const section = document.getElementById('about');
          const scroller = section.querySelector('#aboutScroll');                  // inner scroll only
          const slides   = [...scroller.querySelectorAll('.about-content-item')];
          const images   = [...section.querySelectorAll('.about-image')];

          let current = 0;

          // Ensure initial states
          images.forEach((img, i) => {
            img.classList.toggle('active', i === 0);
          });
          slides.forEach((s, i) => {
            s.classList.toggle('active', i === 0);
          });

          // IntersectionObserver watching the inner scroller
          const io = new IntersectionObserver((entries) => {
            // choose the most visible slide inside the scroller
            const visible = entries
              .filter(e => e.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visible) return;
            const idx = slides.indexOf(visible.target);
            if (idx === -1 || idx === current) return;

            // fade content
            slides[current].classList.remove('active');
            slides[idx].classList.add('active');

            // slide images: current goes slightly up & fades, next comes from below
            const outImg = images[current];
            const inImg  = images[idx];

            outImg.classList.remove('active');
            outImg.style.transform = 'translateY(-24px)';
            outImg.style.opacity = '0';

            // prepare incoming
            inImg.style.transform = 'translateY(24px)';
            inImg.style.opacity = '0';

            // next frame -> animate in
            requestAnimationFrame(() => {
              inImg.classList.add('active');
              inImg.style.transform = 'translateY(0)';
              inImg.style.opacity = '1';
            });

            current = idx;
          }, {
            root: scroller,
            threshold: [0.4, 0.7],  // react when a slide is centered enough
          });

          slides.forEach(el => io.observe(el));
        })();
      


      document.getElementById('year').textContent = new Date().getFullYear();

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

      // Portfolio filter functionality
      const filterButtons = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item[data-category]');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          // Update active state
          filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('text-white/60');
            btn.classList.remove('text-white/80');
          });
          button.classList.add('active');
          button.classList.remove('text-white/60');
          button.classList.add('text-white/80');

          // Filter items
          portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 10);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          });
        });
      });
    


        document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('.type-words').forEach(el => {
          const text = el.textContent.trim().replace(/\s+/g, ' ');
          const words = text.split(' ');
          const stagger = parseFloat(el.dataset.stagger || '.2');
          const duration = parseFloat(el.dataset.duration || '2');
          const ease = el.dataset.ease || 'ease-in-out';
          const delay = parseFloat(el.dataset.delay || '0');

          el.innerHTML = words.map((word, i) =>
            `<span class="w" style="--i:${i}">${word}&nbsp;</span>`
          ).join('');

          el.style.setProperty('--stagger', `${stagger}s`);
          el.style.setProperty('--dur', `${duration}s`);
          el.style.setProperty('--ease', ease);
          el.style.setProperty('--delay', `${delay}s`);

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-in');
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2 });

          observer.observe(el);
        });
      });
    


      // Observe each section and toggle enter/exit classes
      const sections = document.querySelectorAll('[data-section]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;

          if (entry.isIntersecting) {
            // Section is entering
            el.classList.add('is-in');
            el.classList.remove('is-out');
          } else {
            // Section left viewport — only blur-away if it has been seen
            if (el.classList.contains('is-in')) {
              el.classList.remove('is-in');
              el.classList.add('is-out');
            }
          }
        });
      }, {
        threshold: 0.25,                // fire when ~25% visible
        rootMargin: '0px 0px -10% 0px'  // slight early exit for nicer handoff
      });

      sections.forEach(s => io.observe(s));
    


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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-screen hue-rotate-15 blur-sm">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe>
</div>
</div>
<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<div className="overflow-hidden relative">

<header className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-6 border-b border-white/[0.06]">
<a className="flex items-center gap-3" href="#">
<span className="text-xl font-semibold tracking-tight" style={{}}>
                David De'fou
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
<a className="hover:text-white transition" href="#portfolio">
                Gallery
              </a>
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#services">
                Commissions
              </a>
<a className="hover:text-white transition" href="#process">Process</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hidden md:inline-flex" href="#contact">
                Inquire
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<nav className="lg:hidden hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden" id="mobile-menu" style={{maxHeight: '0', transition: 'max-height 0.3s ease-in-out'}}>
<div className="flex flex-col p-6 space-y-4">
<a className="text-base text-white/70 hover:text-white transition py-2" href="#portfolio">
                Gallery
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#about">
                About
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#services">
                Commissions
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#process">
                Process
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#contact">
                Contact
              </a>
<a className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 mt-2" href="#contact">
                Inquire
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>
</div>
</header>

<section className="min-h-screen flex flex-col section-visible text-center pt-0 pr-6 pb-24 pl-6 relative items-center justify-center xl:pt-0 xl:pb-0">

<div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 backdrop-blur-sm text-white/80 ring-1 ring-white/10 animate-badge">
<iconify-icon height="16" icon="solar:pen-new-square-linear" width="16"></iconify-icon>
<span className="">Visual Storyteller &amp; Illustrator</span>
</div>

<h1 className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-24 pb-12" style={{animation: 'titleEmergence 1.8s ease-out both'}}>
<span className="block text-[10vw] sm:text-7xl lg:text-8xl flex items-center justify-center gap-4 sm:gap-6">
<img alt="Alex Rivera" className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_3840w.jpg" style={{animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both'}}/>
            Weaving
          </span>
<span className="block text-[10vw] sm:text-7xl lg:text-8xl text-white/80 animate-shimmer-mask [--shine:220%]">
            ethereal digital
          </span>
<span className="block text-[10vw] sm:text-7xl lg:text-8xl">
            landscapes
          </span>
</h1>

<p aria-label="Specializing in concept art, character illustration, and visual development. Blending traditional painting with digital precision." className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 type-words is-in" data-delay=".4s" data-duration="2s" data-ease="ease-in-out" data-stagger=".2s" style={{'--stagger': '0.2s', '--dur': '2s', '--ease': 'ease-in-out', '--delay': '0.4s'}}>
<span className="w" style={{'--i': '0'}}>Specializing </span>
<span className="w" style={{'--i': '1'}}>in </span>
<span className="w" style={{'--i': '2'}}>concept </span>
<span className="w" style={{'--i': '3'}}>art, </span>
<span className="w" style={{'--i': '4'}}>character </span>
<span className="w" style={{'--i': '5'}}>illustration, </span>
<span className="w" style={{'--i': '6'}}>and </span>
<span className="w" style={{'--i': '7'}}>visual </span>
<span className="w" style={{'--i': '8'}}>development. </span>
<span className="w" style={{'--i': '9'}}>Blending </span>
<span className="w" style={{'--i': '10'}}>traditional </span>
<span className="w" style={{'--i': '11'}}>painting </span>
<span className="w" style={{'--i': '12'}}>with </span>
<span className="w" style={{'--i': '13'}}>digital </span>
<span className="w" style={{'--i': '14'}}>precision. </span>
</p>

<div className="mt-10 flex items-center justify-center gap-4">
<span className="">
<span className="">
<a className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#portfolio" style={{zIndex: '2'}}>
<span className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">
                  View Gallery
                </span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)', animation: 'pulse 2s ease-in-out infinite'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
</a>
</span>
</span>
<div className="inline-block group relative">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
<span className="relative">Commission Me</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<div className="flex flex-wrap xl:py-24 text-xs text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<span className="inline-flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:palette-linear" width="16"></iconify-icon>
            8+ Years Painting
          </span>
<span className="inline-flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:gallery-linear" width="16"></iconify-icon>
            200+ Illustrations
          </span>
<span className="inline-flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
            Book &amp; Game Covers
          </span>
</div>
</section>
</div>

<div className="relative mt-12 md:mt-16">
<section className="xl:pt-24 pt-32 pb-32" data-section="">
<div className="container max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal">
<div className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
                Featured Artworks
              </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
                A selection of personal pieces, commissions, and conceptual
                studies.
              </p>
</div>
</div>

<div className="relative">
<div className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:scroll-px-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6 gap-y-x-6" id="work-carousel" style={{WebkitOverflowScrolling: 'touch'}}>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="0" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Digital Landscape Art" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<iconify-icon className="text-lime-300" icon="solar:stars-minimalistic-linear"></iconify-icon>
</span>
                    Digital Painting • Fantasy
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        The Last Guardian
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Concept art for an unannounced RPG
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="1" style={{transform: 'scale(1)', opacity: '1', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Atmospheric Environment" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/103e9b5d-1921-4cd5-a80d-9445881f318d_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<iconify-icon className="text-lime-300" icon="solar:mountains-linear"></iconify-icon>
</span>
                    Environment • Atmosphere
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Neon Solitude
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Exploration of light and isolation
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="2" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Character Portrait" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/591d6a3f-93a6-4185-a67b-d397be21fd6a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<iconify-icon className="text-lime-300" icon="solar:user-hand-up-linear"></iconify-icon>
</span>
                    Character • Portrait
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Ethereal Gaze
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Study of emotion and skin tones
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="3" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Sci-Fi Concept" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<iconify-icon className="text-lime-300" icon="solar:city-linear"></iconify-icon>
</span>
                    Sci-Fi • Concept
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Lost Civilizations
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Environmental storytelling
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="4" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Mixed Media" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d030941-0aa9-425b-908f-655b1984c946_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<iconify-icon className="text-lime-300" icon="solar:brush-linear"></iconify-icon>
</span>
                    Traditional • Ink
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Brush &amp; Void
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Digital-traditional hybrid techniques
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
</article>
</div>

<div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

<div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
</div>
</div>

<div className="pointer-events-none absolute inset-0" style="mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);"></div>
</section>
</div>
<style>
      /* hide scrollbar */
      #work-carousel::-webkit-scrollbar{ display:none; }
    </style>


<section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="portfolio">
<div className="container lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<iconify-icon height="16" icon="solar:gallery-linear" width="16"></iconify-icon>
<span className="text-xs text-white/70">Selected Works</span>
</div>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            The Gallery
          </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
            A curated collection of illustrations, concept art, and visual
            studies.
          </p>
</div>

<div className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition" data-filter="all">
            All Art
          </button>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="illustration">
            Illustration
          </button>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="character">
            Character
          </button>
<button className="filter-btn hover:bg-white/10 transition text-sm bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" data-filter="concept">
            Concept Art
          </button>
<button className="filter-btn hover:bg-white/10 transition text-sm bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" data-filter="sketches">
            Sketches
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 gap-x-6 gap-y-6" id="portfolio-grid">

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="illustration" style={{animation: '0.5s ease-in-out 0.2s 1 normal both running fadeSlideIn', opacity: '0', transform: 'scale(0.8)', display: 'none'}}>
<img alt="Dragon Rider" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1578321272128-18e104b28189?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Portrait of the Count</h3>
<p className="text-xs text-white/60 mt-1">Oil on Canvas • 2024</p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Photoshop
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Procreate
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="concept" style={{animation: '0.5s ease-in-out 0.25s 1 normal both running fadeSlideIn', opacity: '0', transform: 'scale(0.8)', display: 'none'}}>
<img alt="Environment" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Fragmented Reality</h3>
<p className="text-xs text-white/60 mt-1">
                Cubism Composition • 2024
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Oil Paint
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Canvas
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="sketches" style={{animation: '0.5s ease-in-out 0.3s 1 normal both running fadeSlideIn', opacity: '0', transform: 'scale(0.8)', display: 'block'}}>
<img alt="Abstract" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Vitruvian Studies</h3>
<p className="text-xs text-white/60 mt-1">
                Ink &amp; Parchment • 2023
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Charcoal
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Digital
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="illustration" style={{animation: '0.5s ease-in-out 0.35s 1 normal both running fadeSlideIn', opacity: '0', transform: 'scale(0.8)', display: 'none'}}>
<img alt="Interior" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1576769267415-9642010aa962?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">The Royal Banquet</h3>
<p className="text-xs text-white/60 mt-1">Baroque Style • 2024</p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Clip Studio
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Fantasy
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="character" style={{animation: '0.5s ease-in-out 0.4s 1 normal both running fadeSlideIn', opacity: '0', transform: 'scale(0.8)', display: 'none'}}>
<img alt="Character" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1578321272182-26210b376228?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">The Weeping Woman</h3>
<p className="text-xs text-white/60 mt-1">
                Picasso Style Study • 2023
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Abstract
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Expressionism
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="concept" style={{animation: '0.5s ease-in-out 0.45s 1 normal both running fadeSlideIn', opacity: '0', transform: 'scale(0.8)', display: 'none'}}>
<img alt="Environment" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">The Forgotten Valley</h3>
<p className="text-xs text-white/60 mt-1">
                Impressionist Landscape • 2024
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Impressionism
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Landscape
                </span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#contact">
            View Full Portfolio
            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="z-10 xl:py-24 bg-center mt-24 pt-12 pb-12 relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 items-start">

<div className="lg:col-span-5 relative overflow-hidden rounded-2xl" style={{height: '600px'}}>
<div className="about-image-container absolute inset-0">

<img alt="Alex Rivera - Image 1" className="about-image active aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c4619c1-2023-4aaf-bcf7-6e3d8c1e2500_1600w.png"/>
<img alt="Alex Rivera - Image 2" className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg"/>
<img alt="Alex Rivera - Image 3" className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b854164-e5f6-4f39-a78c-f75ccbc5ff69_3840w.jpg"/>
<img alt="Alex Rivera - Image 4" className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04545374-057d-4527-9043-c2ee9b0d7f09_1600w.webp"/>
</div>
</div>

<div className="lg:col-span-7">

<div className="h-[600px] overflow-y-auto snap-y snap-mandatory pr-1" id="aboutScroll">

<article className="about-content-item active snap-start min-h-[600px] flex items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">The Artist</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Breathing life into the canvas
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    I'm Alex Rivera, a digital illustrator and concept artist
                    obsessed with storytelling. I believe every brushstroke
                    should serve the narrative.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    My work bridges the gap between traditional fine art
                    techniques and modern digital workflows. Whether it's a book
                    cover, game asset, or personal piece, I aim for emotional
                    resonance and visual fidelity.
                  </p>
</div>
</article>

<article className="about-content-item snap-start min-h-[600px] flex items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">
                      Visual Development
                    </span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Building worlds from scratch
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    Concept art is about solving problems visually. I help
                    studios and authors visualize their worlds, setting the
                    tone, mood, and architectural style.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    From thumbnail sketches to fully realized matte paintings, I
                    handle the entire visual development pipeline.
                  </p>
</div>
</article>

<article className="about-content-item snap-start min-h-[600px] flex items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">Character Design</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Characters with soul
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    A great character design tells a story before they even
                    speak. I focus on anatomy, costume history, and silhouette
                    to create memorable figures.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    I specialize in fantasy and sci-fi aesthetics, blending
                    realism with stylized elements.
                  </p>
</div>
</article>

<article className="about-content-item snap-start min-h-[600px] flex items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">Traditional Roots</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Digital tools, traditional heart
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    I started with oils and charcoal. That foundation in light,
                    shadow, and composition informs every digital piece I
                    create.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    I often use custom brushes to mimic the texture of canvas
                    and the flow of ink, ensuring the "human touch" remains
                    visible.
                  </p>
</div>
</article>
</div>

<div className="grid grid-cols-2 gap-6 mt-8">
<div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<iconify-icon className="text-blue-400 w-5 h-5" icon="solar:brush-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold">8+ Years</h3>
</div>
<p className="text-sm text-white/60">Painting &amp; Illustration</p>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<iconify-icon className="text-cyan-400 w-5 h-5" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold">12 Awards</h3>
</div>
<p className="text-sm text-white/60">
                  ArtStation &amp; Industry features
                </p>
</div>
</div>
<div className="mt-8">
<button className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center">
<span>View Sketchbook</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
</div>
</div>
</div>

<style>
        /* Left image slide spacing + smoothness */
        .about-image {
          opacity: 0;
          transform: translateY(24px);
          /* small gap before entering */
          transition: transform 600ms cubic-bezier(.2, .8, .2, 1), opacity 600ms ease;
          will-change: transform, opacity;
        }

        .about-image.active {
          opacity: 1;
          transform: translateY(0);
          z-index: 1;
        }

        /* Right content fade on activation */
        .about-content-item {
          opacity: 0.35;
          transform: translateY(8px);
          transition: opacity 280ms ease, transform 280ms ease;
        }

        .about-content-item.active {
          opacity: 1;
          transform: translateY(0);
        }
      </style>


</section>

<section className="z-10 xl:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp)] bg-cover mt-24 pt-12 pb-12 relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
<iconify-icon height="16" icon="solar:box-linear" width="16"></iconify-icon>
<span className="text-xs text-white/70">Commissions</span>
</div>
<h2 className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">
            How I can help
          </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
            Bespoke artistic services for publishers, studios, and private
            collectors.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<iconify-icon className="text-violet-400 w-6 h-6" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Book Illustration
            </h3>
<p className="mt-2 text-sm text-white/70">
              Captivating cover art and interior illustrations that sell
              stories. From fantasy epics to sci-fi thrillers.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Covers
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Interior
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Publishing
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<iconify-icon className="text-cyan-400 w-6 h-6" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Character Design
            </h3>
<p className="mt-2 text-sm text-white/70">
              Full character turnaround sheets, expression studies, and costume
              design for games and animation.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Concept
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                RPG
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Sprites
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<iconify-icon className="text-emerald-400 w-6 h-6" icon="solar:gamepad-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Concept Art
            </h3>
<p className="mt-2 text-sm text-white/70">
              Visual development for video games and film. Props, vehicles, and
              keyframe art to guide production.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Assets
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Props
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Vehicles
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<iconify-icon className="text-rose-400 w-6 h-6" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Visual Development
            </h3>
<p className="mt-2 text-sm text-white/70">
              Defining the look and feel of a project. Color scripts, mood
              boards, and style guides.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Style Guides
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Color Key
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.4s ease-in-out 0.4s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<iconify-icon className="text-amber-400 w-6 h-6" icon="solar:earth-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Environment Design
            </h3>
<p className="mt-2 text-sm text-white/70">
              Immersive landscapes and architectural designs that set the stage
              for your story.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Backgrounds
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Matte Painting
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.45s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<iconify-icon className="text-indigo-400 w-6 h-6" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Private Commissions
            </h3>
<p className="mt-2 text-sm text-white/70">
              Portraits, D&amp;D characters, and personal artwork. Bringing your
              imagination to life.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                TTRPG
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Portraiture
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="process">
<div className="lg:px-8 max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-gradient before:rounded-full rounded-full px-4 py-2 mb-6">
<iconify-icon height="16" icon="solar:layers-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs text-white/70 font-medium">My Workflow</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            From sketch to masterpiece
          </h2>
<p className="text-white/70 mt-4 text-lg">
            Collaborative and iterative creation process
          </p>
</div>
<div className="relative">

<div className="absolute left-5 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500 to-cyan-500/0 hidden md:block"></div>
<div className="space-y-6">

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
<div className="flex gap-5 items-start">

<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span className="text-base font-bold">1</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Concept &amp; Thumbnails
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    We start with loose sketches and thumbnailing to establish
                    composition, pose, and value structure. We iterate here
                    until the foundation is solid.
                  </p>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span className="text-base font-bold">2</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Line Art &amp; Color Key
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    Refining the sketch into clean linework (if applicable) and
                    establishing the color palette and lighting mood through
                    color keys.
                  </p>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span className="text-base font-bold">3</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Rendering
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    The bulk of the work. Painting details, textures, skin
                    tones, and atmospheric effects. Bringing the piece to a high
                    level of polish.
                  </p>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span className="text-base font-bold">4</span>
</div>
<div className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">
                    Final Polish &amp; Delivery
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    Final adjustments, post-processing effects, and exporting in
                    high-resolution formats suitable for print or digital
                    display.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-center xl:pt-32 xl:pb-32 bg-cover mt-24 pt-32 pb-32 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg)]" id="contact">
<div className="lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="border-gradient before:rounded-3xl md:p-12 animate-on-scroll text-center bg-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="text-xs text-white/70">Inquiries Open</span>
</div>
<h2 className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tight">
            Commission a piece?
          </h2>
<p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Currently accepting commissions for book covers, concept art, and
            private illustrations.
          </p>
<div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:opacity-90 transition text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="mailto:alex@riveraart.com">
              Email Me
              <iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#">
              View Rates
              <iconify-icon height="16" icon="solar:tag-price-linear" width="16"></iconify-icon>
</a>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-6">
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<iconify-icon height="16" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
              ArtStation
            </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<iconify-icon height="16" icon="solar:camera-linear" width="16"></iconify-icon>
              Instagram
            </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<iconify-icon height="16" icon="solar:plain-2-linear" width="16"></iconify-icon>
              Twitter
            </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<iconify-icon height="16" icon="solar:basketball-linear" width="16"></iconify-icon>
              Dribbble
            </a>
</div>
</div>
</div>
</section>

<footer className="z-10 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="border-white/[0.06] border-t mt-20 pt-12 pb-12">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="text-lg font-semibold">Alex Rivera</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-4">
                Digital artist and illustrator creating immersive worlds and
                characters for print and screen.
              </p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<iconify-icon height="16" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<iconify-icon height="16" icon="solar:camera-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<iconify-icon height="16" icon="solar:plain-2-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<iconify-icon height="16" icon="solar:basketball-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#portfolio">
                    Gallery
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#about">
                    About
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Commissions
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
<h3 className="text-sm font-semibold text-white mb-4">Specialties</h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Book Illustration
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Character Design
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Concept Art
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Environment Art
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Visual Dev
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
<iconify-icon className="mt-0.5 flex-shrink-0" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-white transition" href="mailto:alex@riveraart.com">
                    alex@riveraart.com
                  </a>
</li>
<li className="flex items-start gap-2 text-sm text-white/60">
<iconify-icon className="mt-0.5 flex-shrink-0" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
<span className="">
<a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60">
<iconify-icon className="mt-0.5 flex-shrink-0" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="">Los Angeles, CA</span>
</li>
<li className="mt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition xl:text-blue-400" href="#contact">
                    Book a consultation
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
<p className="text-xs text-white/50 text-center md:text-left">
              ©
              <span id="year">2026</span>
              Alex Rivera. All artwork rights reserved.
            </p>
<div className="flex items-center gap-6 text-xs text-white/60">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">
                Terms of Service
              </a>
<a className="hover:text-white transition" href="#">Usage Rights</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</footer>






    </>
  );
}
