import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-screen hue-rotate-15 blur-sm"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe></div></div>
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
<span className="text-xl font-semibold tracking-tight">
                Alex Rivera
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
                Portfolio
              </a>
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#services">
                Services
              </a>
<a className="hover:text-white transition" href="#process">Process</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hidden md:inline-flex" href="#contact">
                Hire Me
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<nav className="lg:hidden hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden" id="mobile-menu" style={{maxHeight: '0', transition: 'max-height 0.3s ease-in-out'}}>
<div className="flex flex-col p-6 space-y-4">
<a className="text-base text-white/70 hover:text-white transition py-2" href="#portfolio">
                Portfolio
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#about">
                About
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#services">
                Services
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#process">
                Process
              </a>
<a className="text-base text-white/70 hover:text-white transition py-2" href="#contact">
                Contact
              </a>
<a className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 mt-2" href="#contact">
                Hire Me
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
<span className="i-lucide-sparkles"></span>
<span className="">
            Award-Winning 3D Artist
          </span>
</div>

<h1 className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-24 pb-12" style={{animation: 'titleEmergence 1.8s ease-out both'}}>
<span className="block text-[10vw] sm:text-7xl lg:text-8xl flex items-center justify-center gap-4 sm:gap-6">
<img alt="Alex Rivera" className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_3840w.jpg" style={{animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both'}}/>
            Crafting
          </span>
<span className="block text-[10vw] sm:text-7xl lg:text-8xl text-white/80 animate-shimmer-mask [--shine:220%]">
            photorealistic 3D
          </span>
<span className="block text-[10vw] sm:text-7xl lg:text-8xl">worlds</span>
</h1>

<p aria-label="Specializing in cinematic CGI, product visualization, and character design. Bringing imagination to life through cutting-edge 3D artistry." className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 type-words is-in" data-delay=".4s" data-duration="2s" data-ease="ease-in-out" data-stagger=".2s" style={{-Stagger: '0.2s', -Dur: '2s', -Ease: 'ease-in-out', -Delay: '0.4s'}}><span className="w" style={{-I: '0'}}>Specializing </span><span className="w" style={{-I: '1'}}>in </span><span className="w" style={{-I: '2'}}>cinematic </span><span className="w" style={{-I: '3'}}>CGI, </span><span className="w" style={{-I: '4'}}>product </span><span className="w" style={{-I: '5'}}>visualization, </span><span className="w" style={{-I: '6'}}>and </span><span className="w" style={{-I: '7'}}>character </span><span className="w" style={{-I: '8'}}>design. </span><span className="w" style={{-I: '9'}}>Bringing </span><span className="w" style={{-I: '10'}}>imagination </span><span className="w" style={{-I: '11'}}>to </span><span className="w" style={{-I: '12'}}>life </span><span className="w" style={{-I: '13'}}>through </span><span className="w" style={{-I: '14'}}>cutting-edge </span><span className="w" style={{-I: '15'}}>3D </span><span className="w" style={{-I: '16'}}>artistry. </span></p>

<div className="mt-10 flex items-center justify-center gap-4">
<span className="">
<span className="">
<a className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#contact" style={{zIndex: '2'}}>
<span className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">
                  View Portfolio
                </span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)', animation: 'pulse 2s ease-in-out infinite'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
</a>
</span>
</span>
<div className="inline-block group relative">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
<span className="relative">Start a project</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139,92,246,.55), rgba(139,92,246,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<div className="flex flex-wrap xl:py-24 text-xs text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-clock w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            8+ Years Experience
          </span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-briefcase w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
            200+ Projects Completed
          </span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-users w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            50+ Happy Clients
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
                Featured Work Preview
              </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
                A curated collection of my best work across various industries
                and styles.
              </p>
</div>
</div>

<div className="relative">
<div className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:scroll-px-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6 gap-y-x-6" id="work-carousel" style={{WebkitOverflowScrolling: 'touch'}}>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="0" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s, opacity 400ms ease 0s'}}>
<img alt="3D product render project cover" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/591d6a3f-93a6-4185-a67b-d397be21fd6a_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-lime-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
                    3D Render • Interface
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Aurora OS Concept
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Spatial UI for a wearable-first system
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="1" style={{transform: 'scale(1)', opacity: '1', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s, opacity 400ms ease 0s'}}>
<img alt="Mountain expedition project cover" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/103e9b5d-1921-4cd5-a80d-9445881f318d_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg className="lucide lucide-map h-3.5 w-3.5 text-lime-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</span>
                    Outdoor • Mapping
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Peak Atlas
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        A guide to the world's quietest summits
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="2" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Minimal banking app cover" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg className="lucide lucide-wallet h-3.5 w-3.5 text-lime-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
                    Fintech • Minimal
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div className="">
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Mono Bank
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        A calmer way to move money
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="3" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="AI chat neon render cover" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg className="lucide lucide-bot h-3.5 w-3.5 text-lime-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</span>
                    AI • Messaging
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Neuro Chat
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        A multimodal assistant that vibes
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="4" style={{transform: 'scale(0.94)', opacity: '0.55', transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms'}}>
<img alt="Abstract brand 3D cover" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d030941-0aa9-425b-908f-655b1984c946_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg className="lucide lucide-beaker h-3.5 w-3.5 text-lime-300" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
</span>
                    Brand • 3D System
                  </div>
<div className="mt-2.5 flex items-end justify-between gap-3">
<div>
<h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Forma Studio
                      </h3>
<p className="text-sm md:text-base text-white/70">
                        Procedural shapes for identity
                      </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
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
<svg className="lucide lucide-gallery-horizontal w-3.5 h-3.5 text-white-400" data-lucide="gallery-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3v18"></path><rect height="18" rx="2" width="12" x="6" y="3"></rect><path d="M22 3v18"></path></svg>
<span className="text-xs text-white/70">Featured Work</span>
</div>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            Selected Projects
          </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
            A curated collection of my best work across various industries and
            styles.
          </p>
</div>

<div className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
<button className="filter-btn active px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition" data-filter="all">
            All Work
          </button>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="product">
            Product Viz
          </button>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="character">
            Characters
          </button>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="environment">
            Environments
          </button>
<button className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="motion">
            Motion Graphics
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" id="portfolio-grid">

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="product" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<img alt="Luxury Watch" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Luxury Timepiece</h3>
<p className="text-xs text-white/60 mt-1">
                Product Visualization • 2024
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Cinema 4D
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Octane
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="environment" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<img alt="Architecture" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4a67840-05ba-4133-86ca-146954f90c15_800w.webp"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Neo-Tokyo Street</h3>
<p className="text-xs text-white/60 mt-1">
                Environment Design • 2024
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Blender
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  UE5
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="motion" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<img alt="Abstract" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c42603b-4f4a-422a-9ece-7460e8a24048_3840w.webp"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Fluid Dynamics</h3>
<p className="text-xs text-white/60 mt-1">Motion Graphics • 2023</p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Houdini
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Redshift
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="product" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both'}}>
<img alt="Product" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/673a4f97-d66d-40c8-a04b-44985ef5577b_3840w.jpg"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Sci-Fi Interior</h3>
<p className="text-xs text-white/60 mt-1">
                Product Visualization • 2024
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Maya
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Arnold
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="character" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'}}>
<img alt="Character" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/541e199d-de17-4765-8fca-71b804cb9fb3_800w.webp"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Cyber Warrior</h3>
<p className="text-xs text-white/60 mt-1">Character Design • 2023</p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  ZBrush
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Marvelous
                </span>
</div>
</div>
</div>

<div className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="environment" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.45s both'}}>
<img alt="Environment" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4517a7d-638f-43bf-87fb-315a5f0690ff_3840w.webp"/>
<div className="portfolio-overlay">
<h3 className="text-lg font-semibold">Premium Headphones</h3>
<p className="text-xs text-white/60 mt-1">
                Environment Design • 2024
              </p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Blender
                </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Cycles
                </span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#contact">
            View Full Portfolio
            <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
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
<span className="text-xs text-white/70">About Me</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Creating visual stories through 3D art
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    I'm Alex Rivera, a 3D artist and CGI specialist with over 8
                    years of experience creating photorealistic renders and
                    immersive digital experiences. My passion lies in pushing
                    the boundaries of what's possible with 3D technology.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    From product visualization to character design, I bring
                    technical expertise and creative vision to every project.
                    I've worked with brands like Nike, Tesla, and Sony,
                    delivering work that drives results.
                  </p>
</div>
</article>

<article className="about-content-item snap-start min-h-[600px] flex items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">
                      Product Excellence
                    </span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Bringing products to life with precision
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    Photorealistic product visualization that elevates brands
                    and drives sales. Meticulous materials, lighting, and
                    composition.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    Technical mastery + storytelling so your products look their
                    best across all channels.
                  </p>
</div>
</article>

<article className="about-content-item snap-start min-h-[600px] flex items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">Character Design</span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Characters that captivate and inspire
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    From concept to rig, memorable characters for games, film,
                    and animation—with clean topology and expressive motion.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    ZBrush, Marvelous Designer, Substance—production-ready
                    assets that meet industry standards.
                  </p>
</div>
</article>

<article className="about-content-item snap-start min-h-[600px] flex items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span className="text-xs text-white/70">
                      Motion &amp; Animation
                    </span>
</div>
<h2 className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Dynamic motion that tells your story
                  </h2>
<p className="text-base md:text-lg text-white/70 mt-6">
                    Motion graphics and 3D animation that captivate—fluid sims
                    to kinetic typography.
                  </p>
<p className="text-base md:text-lg text-white/70 mt-4">
                    Houdini, After Effects, Cinema 4D—cinematic movement for
                    modern brands.
                  </p>
</div>
</article>
</div>

<div className="grid grid-cols-2 gap-6 mt-8">
<div className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<svg className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
</div>
<h3 className="text-lg font-semibold">8+ Years</h3>
</div>
<p className="text-sm text-white/60">
                  Professional experience in 3D art and CGI
                </p>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<svg className="w-5 h-5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<h3 className="text-lg font-semibold">12 Awards</h3>
</div>
<p className="text-sm text-white/60">
                  Industry recognition and accolades
                </p>
</div>
</div>
<div className="mt-8">
<button className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center">
<span>Watch demo</span>
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
<svg className="lucide lucide-box w-3.5 h-3.5 text-white-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xs text-white/70">Services</span>
</div>
<h2 className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">
            What I offer
          </h2>
<p className="text-base md:text-lg text-white/70 mt-4">
            Comprehensive 3D solutions tailored to your needs and vision.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-package w-6 h-6 text-violet-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Product Visualization
            </h3>
<p className="mt-2 text-sm text-white/70">
              Photorealistic renders that showcase your products in the best
              light. Perfect for marketing, e-commerce, and presentations.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                E-commerce
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Advertising
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Packaging
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-user-circle w-6 h-6 text-cyan-400" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Character Design
            </h3>
<p className="mt-2 text-sm text-white/70">
              Bring characters to life with detailed modeling, texturing, and
              rigging. From concept to final render.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Games
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Animation
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Film
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-building w-6 h-6 text-emerald-400" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Architectural Viz
            </h3>
<p className="mt-2 text-sm text-white/70">
              Stunning architectural visualizations for real estate, interior
              design, and development projects.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Real Estate
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Interior
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Exterior
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-play-circle w-6 h-6 text-rose-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Motion Graphics
            </h3>
<p className="mt-2 text-sm text-white/70">
              Dynamic 3D animations and motion graphics that capture attention
              and tell compelling stories.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Ads
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Social
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Explainers
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-globe w-6 h-6 text-amber-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Environment Design
            </h3>
<p className="mt-2 text-sm text-white/70">
              Immersive 3D environments and worlds for games, VR experiences,
              and film production.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                VR/AR
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Games
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Metaverse
              </span>
</div>
</div>
<div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.45s both'}}>
<div className="flex border-gradient before:rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg className="lucide lucide-wand-2 w-6 h-6 text-indigo-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">
              Custom Solutions
            </h3>
<p className="mt-2 text-sm text-white/70">
              Unique 3D projects tailored to your specific needs. Let's discuss
              your vision.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Consulting
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Training
              </span>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Workshops
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
<svg className="lucide lucide-workflow w-4 h-4 text-white-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-xs text-white/70 font-medium">My Process</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            From concept to reality
          </h2>
<p className="text-white/70 mt-4 text-lg">
            A proven workflow that delivers exceptional results
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
                    Discovery &amp; Briefing
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    We start with a detailed discussion about your project
                    goals, target audience, and vision. I'll ask questions to
                    understand your brand and requirements fully.
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
                    Concept &amp; Modeling
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    I create initial concepts and 3D models based on your brief.
                    You'll receive previews to ensure we're aligned on the
                    direction before moving forward.
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
                    Texturing &amp; Lighting
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    Adding materials, textures, and lighting setups to bring
                    realism to the models. This stage transforms basic geometry
                    into photorealistic assets.
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
                    Rendering &amp; Delivery
                  </h3>
<p className="text-white/60 leading-relaxed text-sm">
                    Final rendering at high resolution with multiple revisions
                    included. You'll receive all files in your preferred
                    formats, ready for use.
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
<svg className="lucide lucide-mail w-3.5 h-3.5 text-white-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-xs text-white/70">Let's Connect</span>
</div>
<h2 className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tight">
            Ready to start your project?
          </h2>
<p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Whether you have a detailed brief or just an idea, I'd love to hear
            from you. Let's create something extraordinary together.
          </p>
<div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:opacity-90 transition text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="mailto:alex@rivera3d.com">
              Send Email
              <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#">
              Schedule Call
              <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-6">
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              Instagram
            </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              Twitter
            </a>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
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
                Award-winning 3D artist creating photorealistic renders and
                immersive digital experiences.
              </p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#portfolio">
                    Portfolio
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#about">
                    About
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Services
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
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Product Visualization
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Character Design
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Architectural Viz
                  </a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Motion Graphics
                  </a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Environment Design
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
<a className="hover:text-white transition" href="mailto:alex@rivera3d.com">
                    alex@rivera3d.com
                  </a>
</li>
<li className="flex items-start gap-2 text-sm text-white/60">
<svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className=""><a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a></span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60">
<svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Los Angeles, CA</span>
</li>
<li className="mt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition xl:text-blue-400" href="#contact">
                    Schedule a call
                    <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
<p className="text-xs text-white/50 text-center md:text-left">
              ©
              <span id="year">2025</span>
              Alexia Rivera. All rights reserved.
            </p>
<div className="flex items-center gap-6 text-xs text-white/60">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">
                Terms of Service
              </a>
<a className="hover:text-white transition" href="#">Cookie Policy</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
