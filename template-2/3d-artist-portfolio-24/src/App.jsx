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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:1425,&quot;h&quot;:876,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="aura-background-component top-0 w-full -z-10 absolute h-screen hue-rotate-15 blur-sm" data-alpha-mask="80" style={{maskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`, webkitMaskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`}}>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:1425,&quot;h&quot;:876,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe bis_chainid="4" bis_depth="1" bis_id="fr_itbqga6jtgoqk4asugjz56" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:481,&quot;w&quot;:1425,&quot;h&quot;:394,&quot;abs_x&quot;:480,&quot;abs_y&quot;:524}" className="gradient-blur">
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:481,&quot;w&quot;:1425,&quot;h&quot;:394,&quot;abs_x&quot;:480,&quot;abs_y&quot;:524}"></div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:481,&quot;w&quot;:1425,&quot;h&quot;:394,&quot;abs_x&quot;:480,&quot;abs_y&quot;:524}"></div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:481,&quot;w&quot;:1425,&quot;h&quot;:394,&quot;abs_x&quot;:480,&quot;abs_y&quot;:524}"></div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:481,&quot;w&quot;:1425,&quot;h&quot;:394,&quot;abs_x&quot;:480,&quot;abs_y&quot;:524}"></div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:1425,&quot;h&quot;:876,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="overflow-hidden relative">

<header bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:1425,&quot;h&quot;:93,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.1s both`}}>
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:0,&quot;w&quot;:1280,&quot;h&quot;:93,&quot;abs_x&quot;:552,&quot;abs_y&quot;:43}" className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:0,&quot;w&quot;:1216,&quot;h&quot;:93,&quot;abs_x&quot;:584,&quot;abs_y&quot;:43}" className="flex border-white/[0.06] border-b pt-6 pb-6 items-center justify-between">
<a bis_size="{&quot;x&quot;:104,&quot;y&quot;:32,&quot;w&quot;:102,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:75}" className="flex items-center gap-3" href="#">
<span bis_size="{&quot;x&quot;:104,&quot;y&quot;:32,&quot;w&quot;:102,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:75}" className="text-xl font-semibold tracking-tight">
                Alex Rivera
              </span>
</a>
<button aria-label="Toggle menu" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition ml-auto" id="mobile-menu-toggle">
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-menu w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" x1="4" x2="20" y1="12" y2="12"></line>
<line bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" x1="4" x2="20" y1="6" y2="6"></line>
<line bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<nav bis_size="{&quot;x&quot;:501,&quot;y&quot;:36,&quot;w&quot;:385,&quot;h&quot;:20,&quot;abs_x&quot;:981,&quot;abs_y&quot;:79}" className="hidden lg:flex items-center gap-8 text-sm text-white/70">
<a bis_size="{&quot;x&quot;:501,&quot;y&quot;:36,&quot;w&quot;:55,&quot;h&quot;:20,&quot;abs_x&quot;:981,&quot;abs_y&quot;:79}" className="hover:text-white transition" href="#portfolio">
                Portfolio
              </a>
<a bis_size="{&quot;x&quot;:588,&quot;y&quot;:36,&quot;w&quot;:39,&quot;h&quot;:20,&quot;abs_x&quot;:1068,&quot;abs_y&quot;:79}" className="hover:text-white transition" href="#about">About</a>
<a bis_size="{&quot;x&quot;:659,&quot;y&quot;:36,&quot;w&quot;:57,&quot;h&quot;:20,&quot;abs_x&quot;:1139,&quot;abs_y&quot;:79}" className="hover:text-white transition" href="#services">
                Services
              </a>
<a bis_size="{&quot;x&quot;:749,&quot;y&quot;:36,&quot;w&quot;:53,&quot;h&quot;:20,&quot;abs_x&quot;:1229,&quot;abs_y&quot;:79}" className="hover:text-white transition" href="#process">Process</a>
<a bis_size="{&quot;x&quot;:834,&quot;y&quot;:36,&quot;w&quot;:51,&quot;h&quot;:20,&quot;abs_x&quot;:1314,&quot;abs_y&quot;:79}" className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div bis_size="{&quot;x&quot;:1180,&quot;y&quot;:24,&quot;w&quot;:140,&quot;h&quot;:44,&quot;abs_x&quot;:1660,&quot;abs_y&quot;:67}" className="flex items-center gap-3">
<a bis_size="{&quot;x&quot;:1180,&quot;y&quot;:24,&quot;w&quot;:140,&quot;h&quot;:44,&quot;abs_x&quot;:1660,&quot;abs_y&quot;:67}" className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hidden md:inline-flex" href="#contact">
                Hire Me
                <svg aria-hidden="true" bis_size="{&quot;x&quot;:1271,&quot;y&quot;:38,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1751,&quot;abs_y&quot;:81}" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1274,&quot;y&quot;:46,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:1754,&quot;abs_y&quot;:89}" d="M5 12h14"></path><path bis_size="{&quot;x&quot;:1279,&quot;y&quot;:41,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:1759,&quot;abs_y&quot;:84}" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<nav bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lg:hidden hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden" id="mobile-menu" style={{maxHeight: `0px`}}>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="flex flex-col p-6 space-y-4">
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="text-base text-white/70 hover:text-white transition py-2" href="#portfolio">
                Portfolio
              </a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="text-base text-white/70 hover:text-white transition py-2" href="#about">
                About
              </a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="text-base text-white/70 hover:text-white transition py-2" href="#services">
                Services
              </a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="text-base text-white/70 hover:text-white transition py-2" href="#process">
                Process
              </a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="text-base text-white/70 hover:text-white transition py-2" href="#contact">
                Contact
              </a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 mt-2" href="#contact">
                Hire Me
                <svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="M5 12h14"></path>
<path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>
</div>
</header>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:1425,&quot;h&quot;:876,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="min-h-screen flex flex-col section-visible xl:pt-0 xl:pb-0 text-center pt-0 pr-6 pb-24 pl-6 relative items-center justify-center">

<div bis_size="{&quot;x&quot;:599,&quot;y&quot;:58,&quot;w&quot;:226,&quot;h&quot;:40,&quot;abs_x&quot;:1079,&quot;abs_y&quot;:101}" className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 backdrop-blur-sm text-white/80 ring-1 ring-white/10 animate-badge">
<span bis_size="{&quot;x&quot;:615,&quot;y&quot;:78,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1095,&quot;abs_y&quot;:121}" className="i-lucide-sparkles"></span>
<span bis_size="{&quot;x&quot;:623,&quot;y&quot;:66,&quot;w&quot;:186,&quot;h&quot;:24,&quot;abs_x&quot;:1103,&quot;abs_y&quot;:109}" className="">Award-Winning 3D Artist</span>
</div>

<h1 bis_size="{&quot;x&quot;:320,&quot;y&quot;:98,&quot;w&quot;:783,&quot;h&quot;:336,&quot;abs_x&quot;:800,&quot;abs_y&quot;:141}" className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-40 pb-12" style={{animation: `titleEmergence 1.8s ease-out both`}}>
<span bis_size="{&quot;x&quot;:320,&quot;y&quot;:98,&quot;w&quot;:783,&quot;h&quot;:96,&quot;abs_x&quot;:800,&quot;abs_y&quot;:141}" className="block text-[10vw] sm:text-7xl lg:text-8xl flex items-center justify-center gap-4 sm:gap-6">
<img alt="Alex Rivera" bis_size="{&quot;x&quot;:469,&quot;y&quot;:101,&quot;w&quot;:90,&quot;h&quot;:90,&quot;abs_x&quot;:949,&quot;abs_y&quot;:144}" className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl" src="/assets/c4abaf0f-1b83-475f-ae08-9503a26d3f3f_320w.png" style={{animation: `portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both`}} />
            Crafting
          </span>
<span bis_size="{&quot;x&quot;:320,&quot;y&quot;:194,&quot;w&quot;:783,&quot;h&quot;:96,&quot;abs_x&quot;:800,&quot;abs_y&quot;:237}" className="block text-[10vw] sm:text-7xl lg:text-8xl animate-shimmer-mask [--shine:220%] text-white/80">
            photorealistic 3D
          </span>
<span bis_size="{&quot;x&quot;:320,&quot;y&quot;:290,&quot;w&quot;:783,&quot;h&quot;:96,&quot;abs_x&quot;:800,&quot;abs_y&quot;:333}" className="block text-[10vw] sm:text-7xl lg:text-8xl">worlds</span>
</h1>

<p aria-label="Specializing in cinematic CGI, product visualization, and character design. Bringing imagination to life through cutting-edge 3D artistry." bis_size="{&quot;x&quot;:328,&quot;y&quot;:434,&quot;w&quot;:768,&quot;h&quot;:56,&quot;abs_x&quot;:808,&quot;abs_y&quot;:477}" className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 type-words is-in" data-delay=".4s" data-duration="2s" data-ease="ease-in-out" data-stagger=".2s" style={{'--stagger': `0.2s`, '--dur': `2s`, '--ease': `ease-in-out`, '--delay': `0.4s`}}><span bis_size="{&quot;x&quot;:360,&quot;y&quot;:434,&quot;w&quot;:119,&quot;h&quot;:28,&quot;abs_x&quot;:840,&quot;abs_y&quot;:477}" className="w" style={{'--i': `0`}}>Specializing </span><span bis_size="{&quot;x&quot;:480,&quot;y&quot;:434,&quot;w&quot;:22,&quot;h&quot;:28,&quot;abs_x&quot;:960,&quot;abs_y&quot;:477}" className="w" style={{'--i': `1`}}>in </span><span bis_size="{&quot;x&quot;:502,&quot;y&quot;:434,&quot;w&quot;:96,&quot;h&quot;:28,&quot;abs_x&quot;:982,&quot;abs_y&quot;:477}" className="w" style={{'--i': `2`}}>cinematic </span><span bis_size="{&quot;x&quot;:599,&quot;y&quot;:434,&quot;w&quot;:46,&quot;h&quot;:28,&quot;abs_x&quot;:1079,&quot;abs_y&quot;:477}" className="w" style={{'--i': `3`}}>CGI, </span><span bis_size="{&quot;x&quot;:645,&quot;y&quot;:434,&quot;w&quot;:79,&quot;h&quot;:28,&quot;abs_x&quot;:1125,&quot;abs_y&quot;:477}" className="w" style={{'--i': `4`}}>product </span><span bis_size="{&quot;x&quot;:724,&quot;y&quot;:434,&quot;w&quot;:128,&quot;h&quot;:28,&quot;abs_x&quot;:1204,&quot;abs_y&quot;:477}" className="w" style={{'--i': `5`}}>visualization, </span><span bis_size="{&quot;x&quot;:852,&quot;y&quot;:434,&quot;w&quot;:40,&quot;h&quot;:28,&quot;abs_x&quot;:1332,&quot;abs_y&quot;:477}" className="w" style={{'--i': `6`}}>and </span><span bis_size="{&quot;x&quot;:893,&quot;y&quot;:434,&quot;w&quot;:95,&quot;h&quot;:28,&quot;abs_x&quot;:1373,&quot;abs_y&quot;:477}" className="w" style={{'--i': `7`}}>character </span><span bis_size="{&quot;x&quot;:989,&quot;y&quot;:434,&quot;w&quot;:74,&quot;h&quot;:28,&quot;abs_x&quot;:1469,&quot;abs_y&quot;:477}" className="w" style={{'--i': `8`}}>design. </span><span bis_size="{&quot;x&quot;:425,&quot;y&quot;:462,&quot;w&quot;:84,&quot;h&quot;:28,&quot;abs_x&quot;:905,&quot;abs_y&quot;:505}" className="w" style={{'--i': `9`}}>Bringing </span><span bis_size="{&quot;x&quot;:510,&quot;y&quot;:462,&quot;w&quot;:114,&quot;h&quot;:28,&quot;abs_x&quot;:990,&quot;abs_y&quot;:505}" className="w" style={{'--i': `10`}}>imagination </span><span bis_size="{&quot;x&quot;:624,&quot;y&quot;:462,&quot;w&quot;:23,&quot;h&quot;:28,&quot;abs_x&quot;:1104,&quot;abs_y&quot;:505}" className="w" style={{'--i': `11`}}>to </span><span bis_size="{&quot;x&quot;:648,&quot;y&quot;:462,&quot;w&quot;:33,&quot;h&quot;:28,&quot;abs_x&quot;:1128,&quot;abs_y&quot;:505}" className="w" style={{'--i': `12`}}>life </span><span bis_size="{&quot;x&quot;:682,&quot;y&quot;:462,&quot;w&quot;:79,&quot;h&quot;:28,&quot;abs_x&quot;:1162,&quot;abs_y&quot;:505}" className="w" style={{'--i': `13`}}>through </span><span bis_size="{&quot;x&quot;:761,&quot;y&quot;:462,&quot;w&quot;:127,&quot;h&quot;:28,&quot;abs_x&quot;:1241,&quot;abs_y&quot;:505}" className="w" style={{'--i': `14`}}>cutting-edge </span><span bis_size="{&quot;x&quot;:889,&quot;y&quot;:462,&quot;w&quot;:32,&quot;h&quot;:28,&quot;abs_x&quot;:1369,&quot;abs_y&quot;:505}" className="w" style={{'--i': `15`}}>3D </span><span bis_size="{&quot;x&quot;:921,&quot;y&quot;:462,&quot;w&quot;:77,&quot;h&quot;:28,&quot;abs_x&quot;:1401,&quot;abs_y&quot;:505}" className="w" style={{'--i': `16`}}>artistry. </span></p>

<div bis_size="{&quot;x&quot;:559,&quot;y&quot;:530,&quot;w&quot;:306,&quot;h&quot;:48,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:573}" className="mt-10 flex items-center justify-center gap-4">
<span bis_size="{&quot;x&quot;:559,&quot;y&quot;:530,&quot;w&quot;:150,&quot;h&quot;:48,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:573}" className="">
<span bis_size="{&quot;x&quot;:559,&quot;y&quot;:544,&quot;w&quot;:150,&quot;h&quot;:20,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:587}" className="">
<a bis_size="{&quot;x&quot;:559,&quot;y&quot;:530,&quot;w&quot;:150,&quot;h&quot;:48,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:573}" className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#contact" style={{zIndex: `2`}}>
<span bis_size="{&quot;x&quot;:583,&quot;y&quot;:542,&quot;w&quot;:102,&quot;h&quot;:24,&quot;abs_x&quot;:1063,&quot;abs_y&quot;:585}" className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">
                  View Portfolio
                </span>
<span aria-hidden="true" bis_size="{&quot;x&quot;:559,&quot;y&quot;:530,&quot;w&quot;:150,&quot;h&quot;:48,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:573}" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{background: `linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)`, animation: `pulse 2s ease-in-out infinite`}}></span>
<span aria-hidden="true" bis_size="{&quot;x&quot;:559,&quot;y&quot;:530,&quot;w&quot;:150,&quot;h&quot;:48,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:573}" className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: `0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)`, background: `radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)`}}></span>
<span aria-hidden="true" bis_size="{&quot;x&quot;:559,&quot;y&quot;:530,&quot;w&quot;:150,&quot;h&quot;:48,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:573}" className="pointer-events-none absolute inset-0 rounded-full" style={{background: `radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)`}}></span>
</a>
</span>
</span>
<div bis_size="{&quot;x&quot;:725,&quot;y&quot;:532,&quot;w&quot;:140,&quot;h&quot;:44,&quot;abs_x&quot;:1205,&quot;abs_y&quot;:575}" className="inline-block group relative">
<button bis_size="{&quot;x&quot;:725,&quot;y&quot;:532,&quot;w&quot;:140,&quot;h&quot;:44,&quot;abs_x&quot;:1205,&quot;abs_y&quot;:575}" className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
<span bis_size="{&quot;x&quot;:751,&quot;y&quot;:544,&quot;w&quot;:89,&quot;h&quot;:20,&quot;abs_x&quot;:1231,&quot;abs_y&quot;:587}" className="relative">Start a project</span>
<span aria-hidden="true" bis_size="{&quot;x&quot;:746,&quot;y&quot;:575,&quot;w&quot;:98,&quot;h&quot;:1,&quot;abs_x&quot;:1226,&quot;abs_y&quot;:618}" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: `linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)`}}></span>
</button>
<span aria-hidden="true" bis_size="{&quot;x&quot;:707,&quot;y&quot;:564,&quot;w&quot;:176,&quot;h&quot;:24,&quot;abs_x&quot;:1187,&quot;abs_y&quot;:607}" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: `radial-gradient(60% 100% at 50% 50%, rgba(139,92,246,.55), rgba(139,92,246,.28) 35%, transparent 70%)`, filter: `blur(10px) saturate(120%)`}}></span>
</div>
</div>
<div bis_size="{&quot;x&quot;:471,&quot;y&quot;:610,&quot;w&quot;:481,&quot;h&quot;:208,&quot;abs_x&quot;:951,&quot;abs_y&quot;:653}" className="flex flex-wrap xl:py-24 text-xs text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.5s both`}}>
<span bis_size="{&quot;x&quot;:471,&quot;y&quot;:706,&quot;w&quot;:139,&quot;h&quot;:16,&quot;abs_x&quot;:951,&quot;abs_y&quot;:749}" className="inline-flex items-center gap-1.5">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:471,&quot;y&quot;:706,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:951,&quot;abs_y&quot;:749}" className="lucide lucide-clock w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:479,&quot;y&quot;:710,&quot;w&quot;:2,&quot;h&quot;:5,&quot;abs_x&quot;:959,&quot;abs_y&quot;:753}" d="M12 6v6l4 2"></path><circle bis_size="{&quot;x&quot;:472,&quot;y&quot;:707,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:952,&quot;abs_y&quot;:750}" cx="12" cy="12" r="10"></circle></svg>
            8+ Years Experience
          </span>
<span bis_size="{&quot;x&quot;:635,&quot;y&quot;:706,&quot;w&quot;:167,&quot;h&quot;:16,&quot;abs_x&quot;:1115,&quot;abs_y&quot;:749}" className="inline-flex items-center gap-1.5">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:635,&quot;y&quot;:706,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1115,&quot;abs_y&quot;:749}" className="lucide lucide-briefcase w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:640,&quot;y&quot;:707,&quot;w&quot;:5,&quot;h&quot;:12,&quot;abs_x&quot;:1120,&quot;abs_y&quot;:750}" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect bis_size="{&quot;x&quot;:636,&quot;y&quot;:710,&quot;w&quot;:13,&quot;h&quot;:9,&quot;abs_x&quot;:1116,&quot;abs_y&quot;:753}" height="14" rx="2" width="20" x="2" y="6"></rect></svg>
            200+ Projects Completed
          </span>
<span bis_size="{&quot;x&quot;:826,&quot;y&quot;:706,&quot;w&quot;:127,&quot;h&quot;:16,&quot;abs_x&quot;:1306,&quot;abs_y&quot;:749}" className="inline-flex items-center gap-1.5">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:826,&quot;y&quot;:706,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1306,&quot;abs_y&quot;:749}" className="lucide lucide-users w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:827,&quot;y&quot;:716,&quot;w&quot;:9,&quot;h&quot;:4,&quot;abs_x&quot;:1307,&quot;abs_y&quot;:759}" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path bis_size="{&quot;x&quot;:837,&quot;y&quot;:708,&quot;w&quot;:1,&quot;h&quot;:5,&quot;abs_x&quot;:1317,&quot;abs_y&quot;:751}" d="M16 3.128a4 4 0 0 1 0 7.744"></path><path bis_size="{&quot;x&quot;:839,&quot;y&quot;:716,&quot;w&quot;:2,&quot;h&quot;:3,&quot;abs_x&quot;:1319,&quot;abs_y&quot;:759}" d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle bis_size="{&quot;x&quot;:829,&quot;y&quot;:708,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:1309,&quot;abs_y&quot;:751}" cx="9" cy="7" r="4"></circle></svg>
            50+ Happy Clients
          </span>
</div>
</section>
</div>

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:940,&quot;w&quot;:1425,&quot;h&quot;:836,&quot;abs_x&quot;:480,&quot;abs_y&quot;:983}" className="relative mt-12 md:mt-16">
<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:940,&quot;w&quot;:1425,&quot;h&quot;:836,&quot;abs_x&quot;:480,&quot;abs_y&quot;:983}" className="xl:pt-24 pt-32 pb-32" data-section="">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:1056,&quot;w&quot;:1280,&quot;h&quot;:592,&quot;abs_x&quot;:552,&quot;abs_y&quot;:1099}" className="container max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div bis_size="{&quot;x&quot;:96,&quot;y&quot;:1056,&quot;w&quot;:1232,&quot;h&quot;:104,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1099}" className="reveal">
<div bis_size="{&quot;x&quot;:96,&quot;y&quot;:1056,&quot;w&quot;:768,&quot;h&quot;:104,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1099}" className="max-w-3xl animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.1s both`}}>
<h2 bis_size="{&quot;x&quot;:96,&quot;y&quot;:1056,&quot;w&quot;:768,&quot;h&quot;:60,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1099}" className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
                Featured Work Preview
              </h2>
<p bis_size="{&quot;x&quot;:96,&quot;y&quot;:1132,&quot;w&quot;:768,&quot;h&quot;:28,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1175}" className="text-base md:text-lg text-white/70 mt-4">
                A curated collection of my best work across various industries
                and styles.
              </p>
</div>
</div>

<div bis_size="{&quot;x&quot;:96,&quot;y&quot;:1160,&quot;w&quot;:1232,&quot;h&quot;:488,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1203}" className="relative">
<div bis_size="{&quot;x&quot;:96,&quot;y&quot;:1160,&quot;w&quot;:1232,&quot;h&quot;:488,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1203}" className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:scroll-px-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6 gap-y-x-6" id="work-carousel" style={{webkitOverflowScrolling: `touch`}}>

<article bis_size="{&quot;x&quot;:147,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:627,&quot;abs_y&quot;:1279}" className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="0" style={{transform: `scale(0.94)`, opacity: `0.55`}}>
<img alt="3D product render project cover" bis_size="{&quot;x&quot;:147,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:627,&quot;abs_y&quot;:1279}" className="absolute inset-0 h-full w-full object-cover" src="/assets/591d6a3f-93a6-4185-a67b-d397be21fd6a_1600w.jpg" />
<div bis_size="{&quot;x&quot;:147,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:627,&quot;abs_y&quot;:1279}" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

<div bis_size="{&quot;x&quot;:147,&quot;y&quot;:1486,&quot;w&quot;:601,&quot;h&quot;:125,&quot;abs_x&quot;:627,&quot;abs_y&quot;:1529}" className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size="{&quot;x&quot;:170,&quot;y&quot;:1508,&quot;w&quot;:556,&quot;h&quot;:18,&quot;abs_x&quot;:650,&quot;abs_y&quot;:1551}" className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size="{&quot;x&quot;:170,&quot;y&quot;:1508,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:650,&quot;abs_y&quot;:1551}" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:173,&quot;y&quot;:1511,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:653,&quot;abs_y&quot;:1554}" className="lucide lucide-sparkles h-3.5 w-3.5 text-lime-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:174,&quot;y&quot;:1512,&quot;w&quot;:10,&quot;h&quot;:10,&quot;abs_x&quot;:654,&quot;abs_y&quot;:1555}" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path bis_size="{&quot;x&quot;:184,&quot;y&quot;:1512,&quot;w&quot;:0,&quot;h&quot;:2,&quot;abs_x&quot;:664,&quot;abs_y&quot;:1555}" d="M20 2v4"></path><path bis_size="{&quot;x&quot;:182,&quot;y&quot;:1513,&quot;w&quot;:2,&quot;h&quot;:0,&quot;abs_x&quot;:662,&quot;abs_y&quot;:1556}" d="M22 4h-4"></path><circle bis_size="{&quot;x&quot;:174,&quot;y&quot;:1521,&quot;w&quot;:2,&quot;h&quot;:2,&quot;abs_x&quot;:654,&quot;abs_y&quot;:1564}" cx="4" cy="20" r="2"></circle></svg>
</span>
                    3D Render • Interface
                  </div>
<div bis_size="{&quot;x&quot;:170,&quot;y&quot;:1536,&quot;w&quot;:556,&quot;h&quot;:52,&quot;abs_x&quot;:650,&quot;abs_y&quot;:1579}" className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size="{&quot;x&quot;:170,&quot;y&quot;:1536,&quot;w&quot;:263,&quot;h&quot;:52,&quot;abs_x&quot;:650,&quot;abs_y&quot;:1579}">
<h3 bis_size="{&quot;x&quot;:170,&quot;y&quot;:1536,&quot;w&quot;:263,&quot;h&quot;:30,&quot;abs_x&quot;:650,&quot;abs_y&quot;:1579}" className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Aurora OS Concept
                      </h3>
<p bis_size="{&quot;x&quot;:170,&quot;y&quot;:1566,&quot;w&quot;:263,&quot;h&quot;:22,&quot;abs_x&quot;:650,&quot;abs_y&quot;:1609}" className="text-sm md:text-base text-white/70">
                        Spatial UI for a wearable-first system
                      </p>
</div>
<a bis_size="{&quot;x&quot;:681,&quot;y&quot;:1555,&quot;w&quot;:45,&quot;h&quot;:33,&quot;abs_x&quot;:1161,&quot;abs_y&quot;:1598}" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:694,&quot;y&quot;:1563,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:1174,&quot;abs_y&quot;:1606}" className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:700,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:1180,&quot;abs_y&quot;:1611}" d="M7 7h10v10"></path><path bis_size="{&quot;x&quot;:700,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:1180,&quot;abs_y&quot;:1611}" d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<button bis_size="{&quot;x&quot;:162,&quot;y&quot;:1403,&quot;w&quot;:41,&quot;h&quot;:41,&quot;abs_x&quot;:642,&quot;abs_y&quot;:1446}" className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:162,&quot;y&quot;:1414,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:642,&quot;abs_y&quot;:1457}" className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:169,&quot;y&quot;:1419,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:649,&quot;abs_y&quot;:1462}" d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size="{&quot;x&quot;:692,&quot;y&quot;:1403,&quot;w&quot;:41,&quot;h&quot;:41,&quot;abs_x&quot;:1172,&quot;abs_y&quot;:1446}" className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:692,&quot;y&quot;:1414,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:1172,&quot;abs_y&quot;:1457}" className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:699,&quot;y&quot;:1419,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:1179,&quot;abs_y&quot;:1462}" d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size="{&quot;x&quot;:800,&quot;y&quot;:1224,&quot;w&quot;:640,&quot;h&quot;:400,&quot;abs_x&quot;:1280,&quot;abs_y&quot;:1267}" className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="1" style={{transform: `scale(1)`, opacity: `1`}}>
<img alt="Mountain expedition project cover" bis_size="{&quot;x&quot;:800,&quot;y&quot;:1224,&quot;w&quot;:640,&quot;h&quot;:400,&quot;abs_x&quot;:1280,&quot;abs_y&quot;:1267}" className="absolute inset-0 h-full w-full object-cover" src="/assets/103e9b5d-1921-4cd5-a80d-9445881f318d_1600w.webp" />
<div bis_size="{&quot;x&quot;:800,&quot;y&quot;:1224,&quot;w&quot;:640,&quot;h&quot;:400,&quot;abs_x&quot;:1280,&quot;abs_y&quot;:1267}" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size="{&quot;x&quot;:800,&quot;y&quot;:1490,&quot;w&quot;:640,&quot;h&quot;:134,&quot;abs_x&quot;:1280,&quot;abs_y&quot;:1533}" className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size="{&quot;x&quot;:824,&quot;y&quot;:1514,&quot;w&quot;:592,&quot;h&quot;:20,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1557}" className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size="{&quot;x&quot;:824,&quot;y&quot;:1514,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1557}" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:827,&quot;y&quot;:1517,&quot;w&quot;:14,&quot;h&quot;:14,&quot;abs_x&quot;:1307,&quot;abs_y&quot;:1560}" className="lucide lucide-map h-3.5 w-3.5 text-lime-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:829,&quot;y&quot;:1518,&quot;w&quot;:10,&quot;h&quot;:10,&quot;abs_x&quot;:1309,&quot;abs_y&quot;:1561}" d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path bis_size="{&quot;x&quot;:836,&quot;y&quot;:1520,&quot;w&quot;:0,&quot;h&quot;:8,&quot;abs_x&quot;:1316,&quot;abs_y&quot;:1563}" d="M15 5.764v15"></path><path bis_size="{&quot;x&quot;:832,&quot;y&quot;:1518,&quot;w&quot;:0,&quot;h&quot;:8,&quot;abs_x&quot;:1312,&quot;abs_y&quot;:1561}" d="M9 3.236v15"></path></svg>
</span>
                    Outdoor • Mapping
                  </div>
<div bis_size="{&quot;x&quot;:824,&quot;y&quot;:1544,&quot;w&quot;:592,&quot;h&quot;:56,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1587}" className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size="{&quot;x&quot;:824,&quot;y&quot;:1544,&quot;w&quot;:298,&quot;h&quot;:56,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1587}" className="">
<h3 bis_size="{&quot;x&quot;:824,&quot;y&quot;:1544,&quot;w&quot;:298,&quot;h&quot;:32,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1587}" className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Peak Atlas
                      </h3>
<p bis_size="{&quot;x&quot;:824,&quot;y&quot;:1576,&quot;w&quot;:298,&quot;h&quot;:24,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1619}" className="text-sm md:text-base text-white/70">
                        A guide to the world's quietest summits
                      </p>
</div>
<a bis_size="{&quot;x&quot;:1368,&quot;y&quot;:1564,&quot;w&quot;:48,&quot;h&quot;:36,&quot;abs_x&quot;:1848,&quot;abs_y&quot;:1607}" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:1382,&quot;y&quot;:1572,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1862,&quot;abs_y&quot;:1615}" className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1388,&quot;y&quot;:1577,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1868,&quot;abs_y&quot;:1620}" d="M7 7h10v10"></path><path bis_size="{&quot;x&quot;:1388,&quot;y&quot;:1577,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1868,&quot;abs_y&quot;:1620}" d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size="{&quot;x&quot;:816,&quot;y&quot;:1402,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:1296,&quot;abs_y&quot;:1445}" className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:816,&quot;y&quot;:1414,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1296,&quot;abs_y&quot;:1457}" className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:824,&quot;y&quot;:1419,&quot;w&quot;:5,&quot;h&quot;:10,&quot;abs_x&quot;:1304,&quot;abs_y&quot;:1462}" d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size="{&quot;x&quot;:1380,&quot;y&quot;:1402,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:1860,&quot;abs_y&quot;:1445}" className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:1380,&quot;y&quot;:1414,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1860,&quot;abs_y&quot;:1457}" className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1388,&quot;y&quot;:1419,&quot;w&quot;:5,&quot;h&quot;:10,&quot;abs_x&quot;:1868,&quot;abs_y&quot;:1462}" d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size="{&quot;x&quot;:1491,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:1971,&quot;abs_y&quot;:1279}" className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="2" style={{transform: `scale(0.94)`, opacity: `0.55`}}>
<img alt="Minimal banking app cover" bis_size="{&quot;x&quot;:1491,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:1971,&quot;abs_y&quot;:1279}" className="absolute inset-0 h-full w-full object-cover" src="/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp" />
<div bis_size="{&quot;x&quot;:1491,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:1971,&quot;abs_y&quot;:1279}" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size="{&quot;x&quot;:1491,&quot;y&quot;:1486,&quot;w&quot;:601,&quot;h&quot;:125,&quot;abs_x&quot;:1971,&quot;abs_y&quot;:1529}" className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size="{&quot;x&quot;:1514,&quot;y&quot;:1508,&quot;w&quot;:556,&quot;h&quot;:18,&quot;abs_x&quot;:1994,&quot;abs_y&quot;:1551}" className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size="{&quot;x&quot;:1514,&quot;y&quot;:1508,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:1994,&quot;abs_y&quot;:1551}" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:1517,&quot;y&quot;:1511,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1997,&quot;abs_y&quot;:1554}" className="lucide lucide-wallet h-3.5 w-3.5 text-lime-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1518,&quot;y&quot;:1513,&quot;w&quot;:10,&quot;h&quot;:7,&quot;abs_x&quot;:1998,&quot;abs_y&quot;:1556}" d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path bis_size="{&quot;x&quot;:1518,&quot;y&quot;:1514,&quot;w&quot;:9,&quot;h&quot;:8,&quot;abs_x&quot;:1998,&quot;abs_y&quot;:1557}" d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
                    Fintech • Minimal
                  </div>
<div bis_size="{&quot;x&quot;:1514,&quot;y&quot;:1536,&quot;w&quot;:556,&quot;h&quot;:52,&quot;abs_x&quot;:1994,&quot;abs_y&quot;:1579}" className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size="{&quot;x&quot;:1514,&quot;y&quot;:1536,&quot;w&quot;:209,&quot;h&quot;:52,&quot;abs_x&quot;:1994,&quot;abs_y&quot;:1579}" className="">
<h3 bis_size="{&quot;x&quot;:1514,&quot;y&quot;:1536,&quot;w&quot;:209,&quot;h&quot;:30,&quot;abs_x&quot;:1994,&quot;abs_y&quot;:1579}" className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Mono Bank
                      </h3>
<p bis_size="{&quot;x&quot;:1514,&quot;y&quot;:1566,&quot;w&quot;:209,&quot;h&quot;:22,&quot;abs_x&quot;:1994,&quot;abs_y&quot;:1609}" className="text-sm md:text-base text-white/70">
                        A calmer way to move money
                      </p>
</div>
<a bis_size="{&quot;x&quot;:2025,&quot;y&quot;:1555,&quot;w&quot;:45,&quot;h&quot;:33,&quot;abs_x&quot;:2505,&quot;abs_y&quot;:1598}" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:2038,&quot;y&quot;:1563,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:2518,&quot;abs_y&quot;:1606}" className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:2044,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:2524,&quot;abs_y&quot;:1611}" d="M7 7h10v10"></path><path bis_size="{&quot;x&quot;:2044,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:2524,&quot;abs_y&quot;:1611}" d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size="{&quot;x&quot;:2163,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:2643,&quot;abs_y&quot;:1279}" className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="3" style={{transform: `scale(0.94)`, opacity: `0.55`}}>
<img alt="AI chat neon render cover" bis_size="{&quot;x&quot;:2163,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:2643,&quot;abs_y&quot;:1279}" className="absolute inset-0 h-full w-full object-cover" src="/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_1600w.jpg" />
<div bis_size="{&quot;x&quot;:2163,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:2643,&quot;abs_y&quot;:1279}" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size="{&quot;x&quot;:2163,&quot;y&quot;:1486,&quot;w&quot;:601,&quot;h&quot;:125,&quot;abs_x&quot;:2643,&quot;abs_y&quot;:1529}" className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size="{&quot;x&quot;:2186,&quot;y&quot;:1508,&quot;w&quot;:556,&quot;h&quot;:18,&quot;abs_x&quot;:2666,&quot;abs_y&quot;:1551}" className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size="{&quot;x&quot;:2186,&quot;y&quot;:1508,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:2666,&quot;abs_y&quot;:1551}" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:2189,&quot;y&quot;:1511,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:2669,&quot;abs_y&quot;:1554}" className="lucide lucide-bot h-3.5 w-3.5 text-lime-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:2193,&quot;y&quot;:1513,&quot;w&quot;:2,&quot;h&quot;:2,&quot;abs_x&quot;:2673,&quot;abs_y&quot;:1556}" d="M12 8V4H8"></path><rect bis_size="{&quot;x&quot;:2191,&quot;y&quot;:1515,&quot;w&quot;:8,&quot;h&quot;:6,&quot;abs_x&quot;:2671,&quot;abs_y&quot;:1558}" height="12" rx="2" width="16" x="4" y="8"></rect><path bis_size="{&quot;x&quot;:2190,&quot;y&quot;:1519,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:2670,&quot;abs_y&quot;:1562}" d="M2 14h2"></path><path bis_size="{&quot;x&quot;:2200,&quot;y&quot;:1519,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:2680,&quot;abs_y&quot;:1562}" d="M20 14h2"></path><path bis_size="{&quot;x&quot;:2197,&quot;y&quot;:1518,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:2677,&quot;abs_y&quot;:1561}" d="M15 13v2"></path><path bis_size="{&quot;x&quot;:2194,&quot;y&quot;:1518,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:2674,&quot;abs_y&quot;:1561}" d="M9 13v2"></path></svg>
</span>
                    AI • Messaging
                  </div>
<div bis_size="{&quot;x&quot;:2186,&quot;y&quot;:1536,&quot;w&quot;:556,&quot;h&quot;:52,&quot;abs_x&quot;:2666,&quot;abs_y&quot;:1579}" className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size="{&quot;x&quot;:2186,&quot;y&quot;:1536,&quot;w&quot;:233,&quot;h&quot;:52,&quot;abs_x&quot;:2666,&quot;abs_y&quot;:1579}">
<h3 bis_size="{&quot;x&quot;:2186,&quot;y&quot;:1536,&quot;w&quot;:233,&quot;h&quot;:30,&quot;abs_x&quot;:2666,&quot;abs_y&quot;:1579}" className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Neuro Chat
                      </h3>
<p bis_size="{&quot;x&quot;:2186,&quot;y&quot;:1566,&quot;w&quot;:233,&quot;h&quot;:22,&quot;abs_x&quot;:2666,&quot;abs_y&quot;:1609}" className="text-sm md:text-base text-white/70">
                        A multimodal assistant that vibes
                      </p>
</div>
<a bis_size="{&quot;x&quot;:2697,&quot;y&quot;:1555,&quot;w&quot;:45,&quot;h&quot;:33,&quot;abs_x&quot;:3177,&quot;abs_y&quot;:1598}" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:2710,&quot;y&quot;:1563,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:3190,&quot;abs_y&quot;:1606}" className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:2716,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:3196,&quot;abs_y&quot;:1611}" d="M7 7h10v10"></path><path bis_size="{&quot;x&quot;:2716,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:3196,&quot;abs_y&quot;:1611}" d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size="{&quot;x&quot;:2835,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:3315,&quot;abs_y&quot;:1279}" className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="4" style={{transform: `scale(0.94)`, opacity: `0.55`}}>
<img alt="Abstract brand 3D cover" bis_size="{&quot;x&quot;:2835,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:3315,&quot;abs_y&quot;:1279}" className="absolute inset-0 h-full w-full object-cover" src="/assets/6d030941-0aa9-425b-908f-655b1984c946_1600w.jpg" />
<div bis_size="{&quot;x&quot;:2835,&quot;y&quot;:1236,&quot;w&quot;:601,&quot;h&quot;:376,&quot;abs_x&quot;:3315,&quot;abs_y&quot;:1279}" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size="{&quot;x&quot;:2835,&quot;y&quot;:1486,&quot;w&quot;:601,&quot;h&quot;:125,&quot;abs_x&quot;:3315,&quot;abs_y&quot;:1529}" className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size="{&quot;x&quot;:2858,&quot;y&quot;:1508,&quot;w&quot;:556,&quot;h&quot;:18,&quot;abs_x&quot;:3338,&quot;abs_y&quot;:1551}" className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size="{&quot;x&quot;:2858,&quot;y&quot;:1508,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:3338,&quot;abs_y&quot;:1551}" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:2861,&quot;y&quot;:1511,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:3341,&quot;abs_y&quot;:1554}" className="lucide lucide-beaker h-3.5 w-3.5 text-lime-300" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:2863,&quot;y&quot;:1513,&quot;w&quot;:8,&quot;h&quot;:0,&quot;abs_x&quot;:3343,&quot;abs_y&quot;:1556}" d="M4.5 3h15"></path><path bis_size="{&quot;x&quot;:2864,&quot;y&quot;:1513,&quot;w&quot;:6,&quot;h&quot;:9,&quot;abs_x&quot;:3344,&quot;abs_y&quot;:1556}" d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path bis_size="{&quot;x&quot;:2864,&quot;y&quot;:1519,&quot;w&quot;:6,&quot;h&quot;:0,&quot;abs_x&quot;:3344,&quot;abs_y&quot;:1562}" d="M6 14h12"></path></svg>
</span>
                    Brand • 3D System
                  </div>
<div bis_size="{&quot;x&quot;:2858,&quot;y&quot;:1536,&quot;w&quot;:556,&quot;h&quot;:52,&quot;abs_x&quot;:3338,&quot;abs_y&quot;:1579}" className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size="{&quot;x&quot;:2858,&quot;y&quot;:1536,&quot;w&quot;:213,&quot;h&quot;:52,&quot;abs_x&quot;:3338,&quot;abs_y&quot;:1579}">
<h3 bis_size="{&quot;x&quot;:2858,&quot;y&quot;:1536,&quot;w&quot;:213,&quot;h&quot;:30,&quot;abs_x&quot;:3338,&quot;abs_y&quot;:1579}" className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Forma Studio
                      </h3>
<p bis_size="{&quot;x&quot;:2858,&quot;y&quot;:1566,&quot;w&quot;:213,&quot;h&quot;:22,&quot;abs_x&quot;:3338,&quot;abs_y&quot;:1609}" className="text-sm md:text-base text-white/70">
                        Procedural shapes for identity
                      </p>
</div>
<a bis_size="{&quot;x&quot;:3369,&quot;y&quot;:1555,&quot;w&quot;:45,&quot;h&quot;:33,&quot;abs_x&quot;:3849,&quot;abs_y&quot;:1598}" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:3382,&quot;y&quot;:1563,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:3862,&quot;abs_y&quot;:1606}" className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:3388,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:3868,&quot;abs_y&quot;:1611}" d="M7 7h10v10"></path><path bis_size="{&quot;x&quot;:3388,&quot;y&quot;:1568,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:3868,&quot;abs_y&quot;:1611}" d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:43}" d="m9 18 6-6-6-6"></path></svg>
</button>
</article>
</div>

<div bis_size="{&quot;x&quot;:96,&quot;y&quot;:1160,&quot;w&quot;:128,&quot;h&quot;:488,&quot;abs_x&quot;:576,&quot;abs_y&quot;:1203}" className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

<div bis_size="{&quot;x&quot;:1200,&quot;y&quot;:1160,&quot;w&quot;:128,&quot;h&quot;:488,&quot;abs_x&quot;:1680,&quot;abs_y&quot;:1203}" className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
</div>
</div>

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:940,&quot;w&quot;:1425,&quot;h&quot;:836,&quot;abs_x&quot;:480,&quot;abs_y&quot;:983}" className="pointer-events-none absolute inset-0" style={{maskImage: `linear-gradient(to right, transparent, black 12%, black 88%, transparent)`, webkitMaskImage: `linear-gradient(to right, transparent, black 12%, black 88%, transparent)`}}></div>
</section>
</div>



<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:1872,&quot;w&quot;:1425,&quot;h&quot;:1356,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1915}" className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="portfolio">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:1968,&quot;w&quot;:1280,&quot;h&quot;:1164,&quot;abs_x&quot;:552,&quot;abs_y&quot;:2011}" className="container lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1968,&quot;w&quot;:768,&quot;h&quot;:152,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2011}" className="max-w-3xl animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.1s both`}}>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1968,&quot;w&quot;:129,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2011}" className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:116,&quot;y&quot;:1975,&quot;w&quot;:14,&quot;h&quot;:14,&quot;abs_x&quot;:596,&quot;abs_y&quot;:2018}" className="lucide lucide-gallery-horizontal w-3.5 h-3.5 text-white-400" data-lucide="gallery-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:117,&quot;y&quot;:1976,&quot;w&quot;:0,&quot;h&quot;:10,&quot;abs_x&quot;:597,&quot;abs_y&quot;:2019}" d="M2 3v18"></path><rect bis_size="{&quot;x&quot;:120,&quot;y&quot;:1976,&quot;w&quot;:7,&quot;h&quot;:10,&quot;abs_x&quot;:600,&quot;abs_y&quot;:2019}" height="18" rx="2" width="12" x="6" y="3"></rect><path bis_size="{&quot;x&quot;:129,&quot;y&quot;:1976,&quot;w&quot;:0,&quot;h&quot;:10,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2019}" d="M22 3v18"></path></svg>
<span bis_size="{&quot;x&quot;:138,&quot;y&quot;:1974,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:618,&quot;abs_y&quot;:2017}" className="text-xs text-white/70">Featured Work</span>
</div>
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:2016,&quot;w&quot;:768,&quot;h&quot;:60,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2059}" className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            Selected Projects
          </h2>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:2092,&quot;w&quot;:768,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2135}" className="text-base md:text-lg text-white/70 mt-4">
            A curated collection of my best work across various industries and
            styles.
          </p>
</div>

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2160,&quot;w&quot;:1216,&quot;h&quot;:38,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2203}" className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.15s both`}}>
<button bis_size="{&quot;x&quot;:104,&quot;y&quot;:2160,&quot;w&quot;:89,&quot;h&quot;:38,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2203}" className="filter-btn active px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition" data-filter="all">
            All Work
          </button>
<button bis_size="{&quot;x&quot;:205,&quot;y&quot;:2160,&quot;w&quot;:110,&quot;h&quot;:38,&quot;abs_x&quot;:685,&quot;abs_y&quot;:2203}" className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="product">
            Product Viz
          </button>
<button bis_size="{&quot;x&quot;:328,&quot;y&quot;:2160,&quot;w&quot;:106,&quot;h&quot;:38,&quot;abs_x&quot;:808,&quot;abs_y&quot;:2203}" className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="character">
            Characters
          </button>
<button bis_size="{&quot;x&quot;:446,&quot;y&quot;:2160,&quot;w&quot;:123,&quot;h&quot;:38,&quot;abs_x&quot;:926,&quot;abs_y&quot;:2203}" className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="environment">
            Environments
          </button>
<button bis_size="{&quot;x&quot;:582,&quot;y&quot;:2160,&quot;w&quot;:142,&quot;h&quot;:38,&quot;abs_x&quot;:1062,&quot;abs_y&quot;:2203}" className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="motion">
            Motion Graphics
          </button>
</div>

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2238,&quot;w&quot;:1216,&quot;h&quot;:802,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2281}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" id="portfolio-grid">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2238,&quot;w&quot;:389,&quot;h&quot;:389,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2281}" className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="product" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.2s both`}}>
<img alt="Luxury Watch" bis_size="{&quot;x&quot;:105,&quot;y&quot;:2239,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:585,&quot;abs_y&quot;:2282}" className="w-full aspect-square object-cover" src="/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg" />
<div bis_size="{&quot;x&quot;:105,&quot;y&quot;:2239,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:585,&quot;abs_y&quot;:2282}" className="portfolio-overlay">
<h3 bis_size="{&quot;x&quot;:129,&quot;y&quot;:2518,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2561}" className="text-lg font-semibold">Luxury Timepiece</h3>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:2550,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2593}" className="text-xs text-white/60 mt-1">
                Product Visualization • 2024
              </p>
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:2578,&quot;w&quot;:339,&quot;h&quot;:24,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2621}" className="flex gap-2 mt-3">
<span bis_size="{&quot;x&quot;:129,&quot;y&quot;:2578,&quot;w&quot;:78,&quot;h&quot;:24,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2621}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Cinema 4D
                </span>
<span bis_size="{&quot;x&quot;:216,&quot;y&quot;:2578,&quot;w&quot;:56,&quot;h&quot;:24,&quot;abs_x&quot;:696,&quot;abs_y&quot;:2621}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Octane
                </span>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:2238,&quot;w&quot;:389,&quot;h&quot;:389,&quot;abs_x&quot;:997,&quot;abs_y&quot;:2281}" className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="environment" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.25s both`}}>
<img alt="Architecture" bis_size="{&quot;x&quot;:518,&quot;y&quot;:2239,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:998,&quot;abs_y&quot;:2282}" className="w-full aspect-square object-cover" src="/assets/a4a67840-05ba-4133-86ca-146954f90c15_800w.webp" />
<div bis_size="{&quot;x&quot;:518,&quot;y&quot;:2239,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:998,&quot;abs_y&quot;:2282}" className="portfolio-overlay">
<h3 bis_size="{&quot;x&quot;:542,&quot;y&quot;:2518,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2561}" className="text-lg font-semibold">Neo-Tokyo Street</h3>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:2550,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2593}" className="text-xs text-white/60 mt-1">
                Environment Design • 2024
              </p>
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:2578,&quot;w&quot;:339,&quot;h&quot;:24,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2621}" className="flex gap-2 mt-3">
<span bis_size="{&quot;x&quot;:542,&quot;y&quot;:2578,&quot;w&quot;:59,&quot;h&quot;:24,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2621}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Blender
                </span>
<span bis_size="{&quot;x&quot;:610,&quot;y&quot;:2578,&quot;w&quot;:39,&quot;h&quot;:24,&quot;abs_x&quot;:1090,&quot;abs_y&quot;:2621}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  UE5
                </span>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:2238,&quot;w&quot;:389,&quot;h&quot;:389,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:2281}" className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="motion" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.3s both`}}>
<img alt="Abstract" bis_size="{&quot;x&quot;:932,&quot;y&quot;:2239,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:1412,&quot;abs_y&quot;:2282}" className="w-full aspect-square object-cover" src="/assets/6c42603b-4f4a-422a-9ece-7460e8a24048_3840w.webp" />
<div bis_size="{&quot;x&quot;:932,&quot;y&quot;:2239,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:1412,&quot;abs_y&quot;:2282}" className="portfolio-overlay">
<h3 bis_size="{&quot;x&quot;:956,&quot;y&quot;:2518,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:2561}" className="text-lg font-semibold">Fluid Dynamics</h3>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:2550,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:2593}" className="text-xs text-white/60 mt-1">Motion Graphics • 2023</p>
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:2578,&quot;w&quot;:339,&quot;h&quot;:24,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:2621}" className="flex gap-2 mt-3">
<span bis_size="{&quot;x&quot;:956,&quot;y&quot;:2578,&quot;w&quot;:59,&quot;h&quot;:24,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:2621}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Houdini
                </span>
<span bis_size="{&quot;x&quot;:1023,&quot;y&quot;:2578,&quot;w&quot;:62,&quot;h&quot;:24,&quot;abs_x&quot;:1503,&quot;abs_y&quot;:2621}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Redshift
                </span>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2651,&quot;w&quot;:389,&quot;h&quot;:389,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2694}" className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="product" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.35s both`}}>
<img alt="Product" bis_size="{&quot;x&quot;:105,&quot;y&quot;:2652,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:585,&quot;abs_y&quot;:2695}" className="w-full aspect-square object-cover" src="/assets/673a4f97-d66d-40c8-a04b-44985ef5577b_3840w.jpg" />
<div bis_size="{&quot;x&quot;:105,&quot;y&quot;:2652,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:585,&quot;abs_y&quot;:2695}" className="portfolio-overlay">
<h3 bis_size="{&quot;x&quot;:129,&quot;y&quot;:2931,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2974}" className="text-lg font-semibold">Sci-Fi Interior</h3>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:2963,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3006}" className="text-xs text-white/60 mt-1">
                Product Visualization • 2024
              </p>
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:2991,&quot;w&quot;:339,&quot;h&quot;:24,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3034}" className="flex gap-2 mt-3">
<span bis_size="{&quot;x&quot;:129,&quot;y&quot;:2991,&quot;w&quot;:46,&quot;h&quot;:24,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3034}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Maya
                </span>
<span bis_size="{&quot;x&quot;:184,&quot;y&quot;:2991,&quot;w&quot;:53,&quot;h&quot;:24,&quot;abs_x&quot;:664,&quot;abs_y&quot;:3034}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Arnold
                </span>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:2651,&quot;w&quot;:389,&quot;h&quot;:389,&quot;abs_x&quot;:997,&quot;abs_y&quot;:2694}" className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="character" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.4s both`}}>
<img alt="Character" bis_size="{&quot;x&quot;:518,&quot;y&quot;:2652,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:998,&quot;abs_y&quot;:2695}" className="w-full aspect-square object-cover" src="/assets/541e199d-de17-4765-8fca-71b804cb9fb3_800w.webp" />
<div bis_size="{&quot;x&quot;:518,&quot;y&quot;:2652,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:998,&quot;abs_y&quot;:2695}" className="portfolio-overlay">
<h3 bis_size="{&quot;x&quot;:542,&quot;y&quot;:2931,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2974}" className="text-lg font-semibold">Cyber Warrior</h3>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:2963,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3006}" className="text-xs text-white/60 mt-1">Character Design • 2023</p>
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:2991,&quot;w&quot;:339,&quot;h&quot;:24,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3034}" className="flex gap-2 mt-3">
<span bis_size="{&quot;x&quot;:542,&quot;y&quot;:2991,&quot;w&quot;:56,&quot;h&quot;:24,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3034}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  ZBrush
                </span>
<span bis_size="{&quot;x&quot;:607,&quot;y&quot;:2991,&quot;w&quot;:75,&quot;h&quot;:24,&quot;abs_x&quot;:1087,&quot;abs_y&quot;:3034}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Marvelous
                </span>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:2651,&quot;w&quot;:389,&quot;h&quot;:389,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:2694}" className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="environment" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.45s both`}}>
<img alt="Environment" bis_size="{&quot;x&quot;:932,&quot;y&quot;:2652,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:1412,&quot;abs_y&quot;:2695}" className="w-full aspect-square object-cover" src="/assets/a4517a7d-638f-43bf-87fb-315a5f0690ff_3840w.webp" />
<div bis_size="{&quot;x&quot;:932,&quot;y&quot;:2652,&quot;w&quot;:387,&quot;h&quot;:387,&quot;abs_x&quot;:1412,&quot;abs_y&quot;:2695}" className="portfolio-overlay">
<h3 bis_size="{&quot;x&quot;:956,&quot;y&quot;:2931,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:2974}" className="text-lg font-semibold">Premium Headphones</h3>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:2963,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3006}" className="text-xs text-white/60 mt-1">
                Environment Design • 2024
              </p>
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:2991,&quot;w&quot;:339,&quot;h&quot;:24,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3034}" className="flex gap-2 mt-3">
<span bis_size="{&quot;x&quot;:956,&quot;y&quot;:2991,&quot;w&quot;:59,&quot;h&quot;:24,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3034}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Blender
                </span>
<span bis_size="{&quot;x&quot;:1023,&quot;y&quot;:2991,&quot;w&quot;:54,&quot;h&quot;:24,&quot;abs_x&quot;:1503,&quot;abs_y&quot;:3034}" className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Cycles
                </span>
</div>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3088,&quot;w&quot;:1216,&quot;h&quot;:44,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3131}" className="text-center mt-12 animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.5s both`}}>
<a bis_size="{&quot;x&quot;:616,&quot;y&quot;:3088,&quot;w&quot;:192,&quot;h&quot;:44,&quot;abs_x&quot;:1096,&quot;abs_y&quot;:3131}" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#contact">
            View Full Portfolio
            <svg aria-hidden="true" bis_size="{&quot;x&quot;:768,&quot;y&quot;:3102,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1248,&quot;abs_y&quot;:3145}" className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:778,&quot;y&quot;:3104,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1258,&quot;abs_y&quot;:3147}" d="M15 3h6v6"></path><path bis_size="{&quot;x&quot;:775,&quot;y&quot;:3104,&quot;w&quot;:7,&quot;h&quot;:7,&quot;abs_x&quot;:1255,&quot;abs_y&quot;:3147}" d="M10 14 21 3"></path><path bis_size="{&quot;x&quot;:770,&quot;y&quot;:3106,&quot;w&quot;:10,&quot;h&quot;:10,&quot;abs_x&quot;:1250,&quot;abs_y&quot;:3149}" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:3364,&quot;w&quot;:1425,&quot;h&quot;:1020,&quot;abs_x&quot;:480,&quot;abs_y&quot;:3407}" className="z-10 xl:py-24 bg-center mt-24 pt-12 pb-12 relative" id="about">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:3460,&quot;w&quot;:1280,&quot;h&quot;:828,&quot;abs_x&quot;:552,&quot;abs_y&quot;:3503}" className="max-w-7xl mx-auto px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3460,&quot;w&quot;:1216,&quot;h&quot;:828,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3503}" className="grid gap-10 lg:grid-cols-12 items-start">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3460,&quot;w&quot;:483,&quot;h&quot;:600,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3503}" className="lg:col-span-5 relative overflow-hidden rounded-2xl" style={{height: `600px`}}>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3460,&quot;w&quot;:483,&quot;h&quot;:600,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3503}" className="about-image-container absolute inset-0">

<img alt="Alex Rivera - Image 1" bis_size="{&quot;x&quot;:104,&quot;y&quot;:3460,&quot;w&quot;:483,&quot;h&quot;:600,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3503}" className="about-image active aspect-square w-full h-full object-cover absolute inset-0" src="/assets/6c4619c1-2023-4aaf-bcf7-6e3d8c1e2500_1600w.png" />
<img alt="Alex Rivera - Image 2" bis_size="{&quot;x&quot;:104,&quot;y&quot;:3484,&quot;w&quot;:483,&quot;h&quot;:600,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3527}" className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg" />
<img alt="Alex Rivera - Image 3" bis_size="{&quot;x&quot;:104,&quot;y&quot;:3484,&quot;w&quot;:483,&quot;h&quot;:600,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3527}" className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="/assets/9b854164-e5f6-4f39-a78c-f75ccbc5ff69_3840w.jpg" />
<img alt="Alex Rivera - Image 4" bis_size="{&quot;x&quot;:104,&quot;y&quot;:3484,&quot;w&quot;:483,&quot;h&quot;:600,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3527}" className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="/assets/04545374-057d-4527-9043-c2ee9b0d7f09_1600w.webp" />
</div>
</div>

<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:3460,&quot;w&quot;:692,&quot;h&quot;:828,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3503}" className="lg:col-span-7">

<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:3460,&quot;w&quot;:692,&quot;h&quot;:600,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3503}" className="h-[600px] overflow-y-auto snap-y snap-mandatory pr-1" id="aboutScroll">

<article bis_size="{&quot;x&quot;:627,&quot;y&quot;:3460,&quot;w&quot;:673,&quot;h&quot;:600,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3503}" className="about-content-item active snap-start min-h-[600px] flex items-center">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:3572,&quot;w&quot;:673,&quot;h&quot;:376,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3615}" className="">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:3572,&quot;w&quot;:79,&quot;h&quot;:28,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3615}" className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size="{&quot;x&quot;:639,&quot;y&quot;:3578,&quot;w&quot;:55,&quot;h&quot;:16,&quot;abs_x&quot;:1119,&quot;abs_y&quot;:3621}" className="text-xs text-white/70">About Me</span>
</div>
<h2 bis_size="{&quot;x&quot;:627,&quot;y&quot;:3620,&quot;w&quot;:673,&quot;h&quot;:120,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3663}" className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Creating visual stories through 3D art
                  </h2>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:3764,&quot;w&quot;:673,&quot;h&quot;:84,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3807}" className="text-base md:text-lg text-white/70 mt-6">
                    I'm Alex Rivera, a 3D artist and CGI specialist with over 8
                    years of experience creating photorealistic renders and
                    immersive digital experiences. My passion lies in pushing
                    the boundaries of what's possible with 3D technology.
                  </p>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:3864,&quot;w&quot;:673,&quot;h&quot;:84,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:3907}" className="text-base md:text-lg text-white/70 mt-4">
                    From product visualization to character design, I bring
                    technical expertise and creative vision to every project.
                    I've worked with brands like Nike, Tesla, and Sony,
                    delivering work that drives results.
                  </p>
</div>
</article>

<article bis_size="{&quot;x&quot;:627,&quot;y&quot;:4068,&quot;w&quot;:673,&quot;h&quot;:600,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4111}" className="about-content-item snap-start min-h-[600px] flex items-center">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4208,&quot;w&quot;:673,&quot;h&quot;:320,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4251}">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4208,&quot;w&quot;:132,&quot;h&quot;:28,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4251}" className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size="{&quot;x&quot;:639,&quot;y&quot;:4214,&quot;w&quot;:108,&quot;h&quot;:16,&quot;abs_x&quot;:1119,&quot;abs_y&quot;:4257}" className="text-xs text-white/70">
                      Product Excellence
                    </span>
</div>
<h2 bis_size="{&quot;x&quot;:627,&quot;y&quot;:4256,&quot;w&quot;:673,&quot;h&quot;:120,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4299}" className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Bringing products to life with precision
                  </h2>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:4400,&quot;w&quot;:673,&quot;h&quot;:56,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4443}" className="text-base md:text-lg text-white/70 mt-6">
                    Photorealistic product visualization that elevates brands
                    and drives sales. Meticulous materials, lighting, and
                    composition.
                  </p>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:4472,&quot;w&quot;:673,&quot;h&quot;:56,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4515}" className="text-base md:text-lg text-white/70 mt-4">
                    Technical mastery + storytelling so your products look their
                    best across all channels.
                  </p>
</div>
</article>

<article bis_size="{&quot;x&quot;:627,&quot;y&quot;:4668,&quot;w&quot;:673,&quot;h&quot;:600,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4711}" className="about-content-item snap-start min-h-[600px] flex items-center">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4808,&quot;w&quot;:673,&quot;h&quot;:320,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4851}">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4808,&quot;w&quot;:122,&quot;h&quot;:28,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4851}" className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size="{&quot;x&quot;:639,&quot;y&quot;:4814,&quot;w&quot;:98,&quot;h&quot;:16,&quot;abs_x&quot;:1119,&quot;abs_y&quot;:4857}" className="text-xs text-white/70">Character Design</span>
</div>
<h2 bis_size="{&quot;x&quot;:627,&quot;y&quot;:4856,&quot;w&quot;:673,&quot;h&quot;:120,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4899}" className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Characters that captivate and inspire
                  </h2>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:5000,&quot;w&quot;:673,&quot;h&quot;:56,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5043}" className="text-base md:text-lg text-white/70 mt-6">
                    From concept to rig, memorable characters for games, film,
                    and animation—with clean topology and expressive motion.
                  </p>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:5072,&quot;w&quot;:673,&quot;h&quot;:56,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5115}" className="text-base md:text-lg text-white/70 mt-4">
                    ZBrush, Marvelous Designer, Substance—production-ready
                    assets that meet industry standards.
                  </p>
</div>
</article>

<article bis_size="{&quot;x&quot;:627,&quot;y&quot;:5268,&quot;w&quot;:673,&quot;h&quot;:600,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5311}" className="about-content-item snap-start min-h-[600px] flex items-center">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:5422,&quot;w&quot;:673,&quot;h&quot;:292,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5465}">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:5422,&quot;w&quot;:134,&quot;h&quot;:28,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5465}" className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size="{&quot;x&quot;:639,&quot;y&quot;:5428,&quot;w&quot;:110,&quot;h&quot;:16,&quot;abs_x&quot;:1119,&quot;abs_y&quot;:5471}" className="text-xs text-white/70">
                      Motion & Animation
                    </span>
</div>
<h2 bis_size="{&quot;x&quot;:627,&quot;y&quot;:5470,&quot;w&quot;:673,&quot;h&quot;:120,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5513}" className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Dynamic motion that tells your story
                  </h2>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:5614,&quot;w&quot;:673,&quot;h&quot;:56,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5657}" className="text-base md:text-lg text-white/70 mt-6">
                    Motion graphics and 3D animation that captivate—fluid sims
                    to kinetic typography.
                  </p>
<p bis_size="{&quot;x&quot;:627,&quot;y&quot;:5686,&quot;w&quot;:673,&quot;h&quot;:28,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:5729}" className="text-base md:text-lg text-white/70 mt-4">
                    Houdini, After Effects, Cinema 4D—cinematic movement for
                    modern brands.
                  </p>
</div>
</article>
</div>

<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4092,&quot;w&quot;:692,&quot;h&quot;:120,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4135}" className="grid grid-cols-2 gap-6 mt-8">
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4092,&quot;w&quot;:334,&quot;h&quot;:120,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4135}" className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6">
<div bis_size="{&quot;x&quot;:651,&quot;y&quot;:4116,&quot;w&quot;:286,&quot;h&quot;:40,&quot;abs_x&quot;:1131,&quot;abs_y&quot;:4159}" className="flex items-center gap-3 mb-3">
<div bis_size="{&quot;x&quot;:651,&quot;y&quot;:4116,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1131,&quot;abs_y&quot;:4159}" className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<svg bis_size="{&quot;x&quot;:661,&quot;y&quot;:4126,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1141,&quot;abs_y&quot;:4169}" className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:668,&quot;y&quot;:4139,&quot;w&quot;:9,&quot;h&quot;:9,&quot;abs_x&quot;:1148,&quot;abs_y&quot;:4182}" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle bis_size="{&quot;x&quot;:667,&quot;y&quot;:4128,&quot;w&quot;:12,&quot;h&quot;:12,&quot;abs_x&quot;:1147,&quot;abs_y&quot;:4171}" cx="12" cy="8" r="6"></circle>
</svg>
</div>
<h3 bis_size="{&quot;x&quot;:703,&quot;y&quot;:4122,&quot;w&quot;:77,&quot;h&quot;:28,&quot;abs_x&quot;:1183,&quot;abs_y&quot;:4165}" className="text-lg font-semibold">8+ Years</h3>
</div>
<p bis_size="{&quot;x&quot;:651,&quot;y&quot;:4168,&quot;w&quot;:286,&quot;h&quot;:20,&quot;abs_x&quot;:1131,&quot;abs_y&quot;:4211}" className="text-sm text-white/60">
                  Professional experience in 3D art and CGI
                </p>
</div>
<div bis_size="{&quot;x&quot;:986,&quot;y&quot;:4092,&quot;w&quot;:334,&quot;h&quot;:120,&quot;abs_x&quot;:1466,&quot;abs_y&quot;:4135}" className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
<div bis_size="{&quot;x&quot;:1010,&quot;y&quot;:4116,&quot;w&quot;:286,&quot;h&quot;:40,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:4159}" className="flex items-center gap-3 mb-3">
<div bis_size="{&quot;x&quot;:1010,&quot;y&quot;:4116,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:4159}" className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<svg bis_size="{&quot;x&quot;:1020,&quot;y&quot;:4126,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1500,&quot;abs_y&quot;:4169}" className="w-5 h-5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:1027,&quot;y&quot;:4141,&quot;w&quot;:3,&quot;h&quot;:7,&quot;abs_x&quot;:1507,&quot;abs_y&quot;:4184}" d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path bis_size="{&quot;x&quot;:1034,&quot;y&quot;:4141,&quot;w&quot;:3,&quot;h&quot;:7,&quot;abs_x&quot;:1514,&quot;abs_y&quot;:4184}" d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path bis_size="{&quot;x&quot;:1038,&quot;y&quot;:4130,&quot;w&quot;:4,&quot;h&quot;:5,&quot;abs_x&quot;:1518,&quot;abs_y&quot;:4173}" d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path bis_size="{&quot;x&quot;:1024,&quot;y&quot;:4148,&quot;w&quot;:16,&quot;h&quot;:0,&quot;abs_x&quot;:1504,&quot;abs_y&quot;:4191}" d="M4 22h16"></path>
<path bis_size="{&quot;x&quot;:1026,&quot;y&quot;:4128,&quot;w&quot;:12,&quot;h&quot;:13,&quot;abs_x&quot;:1506,&quot;abs_y&quot;:4171}" d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path bis_size="{&quot;x&quot;:1022,&quot;y&quot;:4130,&quot;w&quot;:4,&quot;h&quot;:5,&quot;abs_x&quot;:1502,&quot;abs_y&quot;:4173}" d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<h3 bis_size="{&quot;x&quot;:1062,&quot;y&quot;:4122,&quot;w&quot;:88,&quot;h&quot;:28,&quot;abs_x&quot;:1542,&quot;abs_y&quot;:4165}" className="text-lg font-semibold">12 Awards</h3>
</div>
<p bis_size="{&quot;x&quot;:1010,&quot;y&quot;:4168,&quot;w&quot;:286,&quot;h&quot;:20,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:4211}" className="text-sm text-white/60">
                  Industry recognition and accolades
                </p>
</div>
</div>
<div bis_size="{&quot;x&quot;:627,&quot;y&quot;:4244,&quot;w&quot;:692,&quot;h&quot;:44,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4287}" className="mt-8">
<button bis_size="{&quot;x&quot;:627,&quot;y&quot;:4244,&quot;w&quot;:140,&quot;h&quot;:44,&quot;abs_x&quot;:1107,&quot;abs_y&quot;:4287}" className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center">
<span bis_size="{&quot;x&quot;:655,&quot;y&quot;:4256,&quot;w&quot;:83,&quot;h&quot;:20,&quot;abs_x&quot;:1135,&quot;abs_y&quot;:4299}">Watch demo</span>
<span aria-hidden="true" bis_size="{&quot;x&quot;:648,&quot;y&quot;:4287,&quot;w&quot;:98,&quot;h&quot;:1,&quot;abs_x&quot;:1128,&quot;abs_y&quot;:4330}" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: `linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)`}}></span>
</button>
</div>
</div>
</div>
</div>




</section>

<section bis_label="style" bis_size="{&quot;x&quot;:0,&quot;y&quot;:4480,&quot;w&quot;:1425,&quot;h&quot;:884,&quot;abs_x&quot;:480,&quot;abs_y&quot;:4523}" className="z-10 xl:py-24 bg-[url(/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp)] bg-cover mt-24 pt-12 pb-12 relative" id="services" style={{backgroundImage: `url('/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp')`}}>
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:4576,&quot;w&quot;:1280,&quot;h&quot;:692,&quot;abs_x&quot;:552,&quot;abs_y&quot;:4619}" className="max-w-7xl mx-auto px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4576,&quot;w&quot;:768,&quot;h&quot;:152,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4619}" className="max-w-3xl animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.1s both`}}>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4576,&quot;w&quot;:95,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4619}" className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:116,&quot;y&quot;:4583,&quot;w&quot;:14,&quot;h&quot;:14,&quot;abs_x&quot;:596,&quot;abs_y&quot;:4626}" className="lucide lucide-box w-3.5 h-3.5 text-white-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:118,&quot;y&quot;:4584,&quot;w&quot;:10,&quot;h&quot;:11,&quot;abs_x&quot;:598,&quot;abs_y&quot;:4627}" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path bis_size="{&quot;x&quot;:118,&quot;y&quot;:4587,&quot;w&quot;:10,&quot;h&quot;:2,&quot;abs_x&quot;:598,&quot;abs_y&quot;:4630}" d="m3.3 7 8.7 5 8.7-5"></path><path bis_size="{&quot;x&quot;:123,&quot;y&quot;:4590,&quot;w&quot;:0,&quot;h&quot;:5,&quot;abs_x&quot;:603,&quot;abs_y&quot;:4633}" d="M12 22V12"></path></svg>
<span bis_size="{&quot;x&quot;:138,&quot;y&quot;:4582,&quot;w&quot;:49,&quot;h&quot;:16,&quot;abs_x&quot;:618,&quot;abs_y&quot;:4625}" className="text-xs text-white/70">Services</span>
</div>
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:4624,&quot;w&quot;:768,&quot;h&quot;:60,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4667}" className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">
            What I offer
          </h2>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:4700,&quot;w&quot;:768,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4743}" className="text-base md:text-lg text-white/70 mt-4">
            Comprehensive 3D solutions tailored to your needs and vision.
          </p>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4768,&quot;w&quot;:1216,&quot;h&quot;:500,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4811}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4768,&quot;w&quot;:389,&quot;h&quot;:248,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4811}" className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.2s both`}}>
<div bis_size="{&quot;x&quot;:128,&quot;y&quot;:4792,&quot;w&quot;:48,&quot;h&quot;:48,&quot;abs_x&quot;:608,&quot;abs_y&quot;:4835}" className="flex border-gradient before:rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:140,&quot;y&quot;:4804,&quot;w&quot;:24,&quot;h&quot;:24,&quot;abs_x&quot;:620,&quot;abs_y&quot;:4847}" className="lucide lucide-package w-6 h-6 text-violet-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:143,&quot;y&quot;:4806,&quot;w&quot;:18,&quot;h&quot;:19,&quot;abs_x&quot;:623,&quot;abs_y&quot;:4849}" d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path bis_size="{&quot;x&quot;:152,&quot;y&quot;:4816,&quot;w&quot;:0,&quot;h&quot;:10,&quot;abs_x&quot;:632,&quot;abs_y&quot;:4859}" d="M12 22V12"></path><polyline bis_size="{&quot;x&quot;:143,&quot;y&quot;:4811,&quot;w&quot;:17,&quot;h&quot;:5,&quot;abs_x&quot;:623,&quot;abs_y&quot;:4854}" points="3.29 7 12 12 20.71 7"></polyline><path bis_size="{&quot;x&quot;:148,&quot;y&quot;:4808,&quot;w&quot;:9,&quot;h&quot;:5,&quot;abs_x&quot;:628,&quot;abs_y&quot;:4851}" d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:128,&quot;y&quot;:4856,&quot;w&quot;:341,&quot;h&quot;:28,&quot;abs_x&quot;:608,&quot;abs_y&quot;:4899}" className="text-xl font-semibold text-white tracking-tight">
              Product Visualization
            </h3>
<p bis_size="{&quot;x&quot;:128,&quot;y&quot;:4892,&quot;w&quot;:341,&quot;h&quot;:60,&quot;abs_x&quot;:608,&quot;abs_y&quot;:4935}" className="mt-2 text-sm text-white/70">
              Photorealistic renders that showcase your products in the best
              light. Perfect for marketing, e-commerce, and presentations.
            </p>
<div bis_size="{&quot;x&quot;:128,&quot;y&quot;:4968,&quot;w&quot;:341,&quot;h&quot;:24,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5011}" className="mt-4 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:128,&quot;y&quot;:4968,&quot;w&quot;:88,&quot;h&quot;:24,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5011}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                E-commerce
              </span>
<span bis_size="{&quot;x&quot;:225,&quot;y&quot;:4968,&quot;w&quot;:80,&quot;h&quot;:24,&quot;abs_x&quot;:705,&quot;abs_y&quot;:5011}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Advertising
              </span>
<span bis_size="{&quot;x&quot;:313,&quot;y&quot;:4968,&quot;w&quot;:75,&quot;h&quot;:24,&quot;abs_x&quot;:793,&quot;abs_y&quot;:5011}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Packaging
              </span>
</div>
</div>
<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:4768,&quot;w&quot;:389,&quot;h&quot;:248,&quot;abs_x&quot;:997,&quot;abs_y&quot;:4811}" className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.25s both`}}>
<div bis_size="{&quot;x&quot;:541,&quot;y&quot;:4792,&quot;w&quot;:48,&quot;h&quot;:48,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:4835}" className="flex border-gradient before:rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:553,&quot;y&quot;:4804,&quot;w&quot;:24,&quot;h&quot;:24,&quot;abs_x&quot;:1033,&quot;abs_y&quot;:4847}" className="lucide lucide-user-circle w-6 h-6 text-cyan-400" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:555,&quot;y&quot;:4806,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1035,&quot;abs_y&quot;:4849}" cx="12" cy="12" r="10"></circle><circle bis_size="{&quot;x&quot;:562,&quot;y&quot;:4811,&quot;w&quot;:6,&quot;h&quot;:6,&quot;abs_x&quot;:1042,&quot;abs_y&quot;:4854}" cx="12" cy="10" r="3"></circle><path bis_size="{&quot;x&quot;:560,&quot;y&quot;:4821,&quot;w&quot;:10,&quot;h&quot;:3,&quot;abs_x&quot;:1040,&quot;abs_y&quot;:4864}" d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:541,&quot;y&quot;:4856,&quot;w&quot;:341,&quot;h&quot;:28,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:4899}" className="text-xl font-semibold text-white tracking-tight">
              Character Design
            </h3>
<p bis_size="{&quot;x&quot;:541,&quot;y&quot;:4892,&quot;w&quot;:341,&quot;h&quot;:40,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:4935}" className="mt-2 text-sm text-white/70">
              Bring characters to life with detailed modeling, texturing, and
              rigging. From concept to final render.
            </p>
<div bis_size="{&quot;x&quot;:541,&quot;y&quot;:4948,&quot;w&quot;:341,&quot;h&quot;:24,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:4991}" className="mt-4 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:541,&quot;y&quot;:4948,&quot;w&quot;:55,&quot;h&quot;:24,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:4991}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Games
              </span>
<span bis_size="{&quot;x&quot;:605,&quot;y&quot;:4948,&quot;w&quot;:72,&quot;h&quot;:24,&quot;abs_x&quot;:1085,&quot;abs_y&quot;:4991}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Animation
              </span>
<span bis_size="{&quot;x&quot;:686,&quot;y&quot;:4948,&quot;w&quot;:39,&quot;h&quot;:24,&quot;abs_x&quot;:1166,&quot;abs_y&quot;:4991}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Film
              </span>
</div>
</div>
<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:4768,&quot;w&quot;:389,&quot;h&quot;:248,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:4811}" className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.3s both`}}>
<div bis_size="{&quot;x&quot;:955,&quot;y&quot;:4792,&quot;w&quot;:48,&quot;h&quot;:48,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:4835}" className="flex border-gradient before:rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:967,&quot;y&quot;:4804,&quot;w&quot;:24,&quot;h&quot;:24,&quot;abs_x&quot;:1447,&quot;abs_y&quot;:4847}" className="lucide lucide-building w-6 h-6 text-emerald-400" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:979,&quot;y&quot;:4814,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1459,&quot;abs_y&quot;:4857}" d="M12 10h.01"></path><path bis_size="{&quot;x&quot;:979,&quot;y&quot;:4818,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1459,&quot;abs_y&quot;:4861}" d="M12 14h.01"></path><path bis_size="{&quot;x&quot;:979,&quot;y&quot;:4810,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1459,&quot;abs_y&quot;:4853}" d="M12 6h.01"></path><path bis_size="{&quot;x&quot;:983,&quot;y&quot;:4814,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1463,&quot;abs_y&quot;:4857}" d="M16 10h.01"></path><path bis_size="{&quot;x&quot;:983,&quot;y&quot;:4818,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1463,&quot;abs_y&quot;:4861}" d="M16 14h.01"></path><path bis_size="{&quot;x&quot;:983,&quot;y&quot;:4810,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1463,&quot;abs_y&quot;:4853}" d="M16 6h.01"></path><path bis_size="{&quot;x&quot;:975,&quot;y&quot;:4814,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1455,&quot;abs_y&quot;:4857}" d="M8 10h.01"></path><path bis_size="{&quot;x&quot;:975,&quot;y&quot;:4818,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1455,&quot;abs_y&quot;:4861}" d="M8 14h.01"></path><path bis_size="{&quot;x&quot;:975,&quot;y&quot;:4810,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1455,&quot;abs_y&quot;:4853}" d="M8 6h.01"></path><path bis_size="{&quot;x&quot;:976,&quot;y&quot;:4822,&quot;w&quot;:6,&quot;h&quot;:4,&quot;abs_x&quot;:1456,&quot;abs_y&quot;:4865}" d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect bis_size="{&quot;x&quot;:971,&quot;y&quot;:4806,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1451,&quot;abs_y&quot;:4849}" height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<h3 bis_size="{&quot;x&quot;:955,&quot;y&quot;:4856,&quot;w&quot;:341,&quot;h&quot;:28,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:4899}" className="text-xl font-semibold text-white tracking-tight">
              Architectural Viz
            </h3>
<p bis_size="{&quot;x&quot;:955,&quot;y&quot;:4892,&quot;w&quot;:341,&quot;h&quot;:40,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:4935}" className="mt-2 text-sm text-white/70">
              Stunning architectural visualizations for real estate, interior
              design, and development projects.
            </p>
<div bis_size="{&quot;x&quot;:955,&quot;y&quot;:4948,&quot;w&quot;:341,&quot;h&quot;:24,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:4991}" className="mt-4 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:955,&quot;y&quot;:4948,&quot;w&quot;:78,&quot;h&quot;:24,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:4991}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Real Estate
              </span>
<span bis_size="{&quot;x&quot;:1041,&quot;y&quot;:4948,&quot;w&quot;:56,&quot;h&quot;:24,&quot;abs_x&quot;:1521,&quot;abs_y&quot;:4991}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Interior
              </span>
<span bis_size="{&quot;x&quot;:1106,&quot;y&quot;:4948,&quot;w&quot;:60,&quot;h&quot;:24,&quot;abs_x&quot;:1586,&quot;abs_y&quot;:4991}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Exterior
              </span>
</div>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:5040,&quot;w&quot;:389,&quot;h&quot;:228,&quot;abs_x&quot;:584,&quot;abs_y&quot;:5083}" className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.35s both`}}>
<div bis_size="{&quot;x&quot;:128,&quot;y&quot;:5064,&quot;w&quot;:48,&quot;h&quot;:48,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5107}" className="flex border-gradient before:rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:140,&quot;y&quot;:5076,&quot;w&quot;:24,&quot;h&quot;:24,&quot;abs_x&quot;:620,&quot;abs_y&quot;:5119}" className="lucide lucide-play-circle w-6 h-6 text-rose-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:149,&quot;y&quot;:5084,&quot;w&quot;:7,&quot;h&quot;:8,&quot;abs_x&quot;:629,&quot;abs_y&quot;:5127}" d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle bis_size="{&quot;x&quot;:142,&quot;y&quot;:5078,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:622,&quot;abs_y&quot;:5121}" cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 bis_size="{&quot;x&quot;:128,&quot;y&quot;:5128,&quot;w&quot;:341,&quot;h&quot;:28,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5171}" className="text-xl font-semibold text-white tracking-tight">
              Motion Graphics
            </h3>
<p bis_size="{&quot;x&quot;:128,&quot;y&quot;:5164,&quot;w&quot;:341,&quot;h&quot;:40,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5207}" className="mt-2 text-sm text-white/70">
              Dynamic 3D animations and motion graphics that capture attention
              and tell compelling stories.
            </p>
<div bis_size="{&quot;x&quot;:128,&quot;y&quot;:5220,&quot;w&quot;:341,&quot;h&quot;:24,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5263}" className="mt-4 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:128,&quot;y&quot;:5220,&quot;w&quot;:37,&quot;h&quot;:24,&quot;abs_x&quot;:608,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Ads
              </span>
<span bis_size="{&quot;x&quot;:174,&quot;y&quot;:5220,&quot;w&quot;:50,&quot;h&quot;:24,&quot;abs_x&quot;:654,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Social
              </span>
<span bis_size="{&quot;x&quot;:232,&quot;y&quot;:5220,&quot;w&quot;:74,&quot;h&quot;:24,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Explainers
              </span>
</div>
</div>
<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:5040,&quot;w&quot;:389,&quot;h&quot;:228,&quot;abs_x&quot;:997,&quot;abs_y&quot;:5083}" className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.4s both`}}>
<div bis_size="{&quot;x&quot;:541,&quot;y&quot;:5064,&quot;w&quot;:48,&quot;h&quot;:48,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:5107}" className="flex border-gradient before:rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:553,&quot;y&quot;:5076,&quot;w&quot;:24,&quot;h&quot;:24,&quot;abs_x&quot;:1033,&quot;abs_y&quot;:5119}" className="lucide lucide-globe w-6 h-6 text-amber-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:555,&quot;y&quot;:5078,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1035,&quot;abs_y&quot;:5121}" cx="12" cy="12" r="10"></circle><path bis_size="{&quot;x&quot;:561,&quot;y&quot;:5078,&quot;w&quot;:8,&quot;h&quot;:20,&quot;abs_x&quot;:1041,&quot;abs_y&quot;:5121}" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path bis_size="{&quot;x&quot;:555,&quot;y&quot;:5088,&quot;w&quot;:20,&quot;h&quot;:0,&quot;abs_x&quot;:1035,&quot;abs_y&quot;:5131}" d="M2 12h20"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:541,&quot;y&quot;:5128,&quot;w&quot;:341,&quot;h&quot;:28,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:5171}" className="text-xl font-semibold text-white tracking-tight">
              Environment Design
            </h3>
<p bis_size="{&quot;x&quot;:541,&quot;y&quot;:5164,&quot;w&quot;:341,&quot;h&quot;:40,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:5207}" className="mt-2 text-sm text-white/70">
              Immersive 3D environments and worlds for games, VR experiences,
              and film production.
            </p>
<div bis_size="{&quot;x&quot;:541,&quot;y&quot;:5220,&quot;w&quot;:341,&quot;h&quot;:24,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:5263}" className="mt-4 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:541,&quot;y&quot;:5220,&quot;w&quot;:52,&quot;h&quot;:24,&quot;abs_x&quot;:1021,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                VR/AR
              </span>
<span bis_size="{&quot;x&quot;:601,&quot;y&quot;:5220,&quot;w&quot;:55,&quot;h&quot;:24,&quot;abs_x&quot;:1081,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Games
              </span>
<span bis_size="{&quot;x&quot;:665,&quot;y&quot;:5220,&quot;w&quot;:75,&quot;h&quot;:24,&quot;abs_x&quot;:1145,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Metaverse
              </span>
</div>
</div>
<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:5040,&quot;w&quot;:389,&quot;h&quot;:228,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:5083}" className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.45s both`}}>
<div bis_size="{&quot;x&quot;:955,&quot;y&quot;:5064,&quot;w&quot;:48,&quot;h&quot;:48,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:5107}" className="flex border-gradient before:rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:967,&quot;y&quot;:5076,&quot;w&quot;:24,&quot;h&quot;:24,&quot;abs_x&quot;:1447,&quot;abs_y&quot;:5119}" className="lucide lucide-wand-2 w-6 h-6 text-indigo-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:969,&quot;y&quot;:5078,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1449,&quot;abs_y&quot;:5121}" d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path bis_size="{&quot;x&quot;:981,&quot;y&quot;:5083,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:1461,&quot;abs_y&quot;:5126}" d="m14 7 3 3"></path><path bis_size="{&quot;x&quot;:972,&quot;y&quot;:5082,&quot;w&quot;:0,&quot;h&quot;:4,&quot;abs_x&quot;:1452,&quot;abs_y&quot;:5125}" d="M5 6v4"></path><path bis_size="{&quot;x&quot;:986,&quot;y&quot;:5090,&quot;w&quot;:0,&quot;h&quot;:4,&quot;abs_x&quot;:1466,&quot;abs_y&quot;:5133}" d="M19 14v4"></path><path bis_size="{&quot;x&quot;:977,&quot;y&quot;:5078,&quot;w&quot;:0,&quot;h&quot;:2,&quot;abs_x&quot;:1457,&quot;abs_y&quot;:5121}" d="M10 2v2"></path><path bis_size="{&quot;x&quot;:970,&quot;y&quot;:5084,&quot;w&quot;:4,&quot;h&quot;:0,&quot;abs_x&quot;:1450,&quot;abs_y&quot;:5127}" d="M7 8H3"></path><path bis_size="{&quot;x&quot;:984,&quot;y&quot;:5092,&quot;w&quot;:4,&quot;h&quot;:0,&quot;abs_x&quot;:1464,&quot;abs_y&quot;:5135}" d="M21 16h-4"></path><path bis_size="{&quot;x&quot;:976,&quot;y&quot;:5079,&quot;w&quot;:2,&quot;h&quot;:0,&quot;abs_x&quot;:1456,&quot;abs_y&quot;:5122}" d="M11 3H9"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:955,&quot;y&quot;:5128,&quot;w&quot;:341,&quot;h&quot;:28,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:5171}" className="text-xl font-semibold text-white tracking-tight">
              Custom Solutions
            </h3>
<p bis_size="{&quot;x&quot;:955,&quot;y&quot;:5164,&quot;w&quot;:341,&quot;h&quot;:40,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:5207}" className="mt-2 text-sm text-white/70">
              Unique 3D projects tailored to your specific needs. Let's discuss
              your vision.
            </p>
<div bis_size="{&quot;x&quot;:955,&quot;y&quot;:5220,&quot;w&quot;:341,&quot;h&quot;:24,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:5263}" className="mt-4 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:955,&quot;y&quot;:5220,&quot;w&quot;:76,&quot;h&quot;:24,&quot;abs_x&quot;:1435,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Consulting
              </span>
<span bis_size="{&quot;x&quot;:1040,&quot;y&quot;:5220,&quot;w&quot;:61,&quot;h&quot;:24,&quot;abs_x&quot;:1520,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Training
              </span>
<span bis_size="{&quot;x&quot;:1109,&quot;y&quot;:5220,&quot;w&quot;:80,&quot;h&quot;:24,&quot;abs_x&quot;:1589,&quot;abs_y&quot;:5263}" className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Workshops
              </span>
</div>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:5364,&quot;w&quot;:1425,&quot;h&quot;:983,&quot;abs_x&quot;:480,&quot;abs_y&quot;:5407}" className="pt-24 pb-24 relative" id="process">
<div bis_size="{&quot;x&quot;:200,&quot;y&quot;:5460,&quot;w&quot;:1024,&quot;h&quot;:791,&quot;abs_x&quot;:680,&quot;abs_y&quot;:5503}" className="lg:px-8 max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5460,&quot;w&quot;:960,&quot;h&quot;:160,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5503}" className="text-center mb-16 animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.1s both`}}>
<div bis_size="{&quot;x&quot;:650,&quot;y&quot;:5460,&quot;w&quot;:123,&quot;h&quot;:32,&quot;abs_x&quot;:1130,&quot;abs_y&quot;:5503}" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-gradient before:rounded-full rounded-full px-4 py-2 mb-6">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:666,&quot;y&quot;:5468,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1146,&quot;abs_y&quot;:5511}" className="lucide lucide-workflow w-4 h-4 text-white-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size="{&quot;x&quot;:668,&quot;y&quot;:5470,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:1148,&quot;abs_y&quot;:5513}" height="8" rx="2" width="8" x="3" y="3"></rect><path bis_size="{&quot;x&quot;:671,&quot;y&quot;:5476,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1151,&quot;abs_y&quot;:5519}" d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect bis_size="{&quot;x&quot;:675,&quot;y&quot;:5477,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:1155,&quot;abs_y&quot;:5520}" height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span bis_size="{&quot;x&quot;:690,&quot;y&quot;:5468,&quot;w&quot;:67,&quot;h&quot;:16,&quot;abs_x&quot;:1170,&quot;abs_y&quot;:5511}" className="text-xs text-white/70 font-medium">My Process</span>
</div>
<h2 bis_size="{&quot;x&quot;:232,&quot;y&quot;:5516,&quot;w&quot;:960,&quot;h&quot;:60,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5559}" className="text-4xl md:text-6xl font-semibold tracking-tight">
            From concept to reality
          </h2>
<p bis_size="{&quot;x&quot;:232,&quot;y&quot;:5592,&quot;w&quot;:960,&quot;h&quot;:28,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5635}" className="text-white/70 mt-4 text-lg">
            A proven workflow that delivers exceptional results
          </p>
</div>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5684,&quot;w&quot;:960,&quot;h&quot;:567,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5727}" className="relative">

<div bis_size="{&quot;x&quot;:252,&quot;y&quot;:5732,&quot;w&quot;:1,&quot;h&quot;:471,&quot;abs_x&quot;:732,&quot;abs_y&quot;:5775}" className="absolute left-5 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500 to-cyan-500/0 hidden md:block"></div>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5684,&quot;w&quot;:960,&quot;h&quot;:567,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5727}" className="space-y-6">

<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5684,&quot;w&quot;:960,&quot;h&quot;:129,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5727}" className="relative animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.15s both`}}>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5684,&quot;w&quot;:960,&quot;h&quot;:129,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5727}" className="flex gap-5 items-start">

<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5684,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5727}" className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size="{&quot;x&quot;:249,&quot;y&quot;:5692,&quot;w&quot;:6,&quot;h&quot;:24,&quot;abs_x&quot;:729,&quot;abs_y&quot;:5735}" className="text-base font-bold">1</span>
</div>
<div bis_size="{&quot;x&quot;:292,&quot;y&quot;:5684,&quot;w&quot;:900,&quot;h&quot;:129,&quot;abs_x&quot;:772,&quot;abs_y&quot;:5727}" className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size="{&quot;x&quot;:316,&quot;y&quot;:5708,&quot;w&quot;:852,&quot;h&quot;:28,&quot;abs_x&quot;:796,&quot;abs_y&quot;:5751}" className="text-xl font-semibold tracking-tight mb-2">
                    Discovery & Briefing
                  </h3>
<p bis_size="{&quot;x&quot;:316,&quot;y&quot;:5744,&quot;w&quot;:852,&quot;h&quot;:45,&quot;abs_x&quot;:796,&quot;abs_y&quot;:5787}" className="text-white/60 leading-relaxed text-sm">
                    We start with a detailed discussion about your project
                    goals, target audience, and vision. I'll ask questions to
                    understand your brand and requirements fully.
                  </p>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5838,&quot;w&quot;:960,&quot;h&quot;:129,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5881}" className="relative animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.2s both`}}>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5838,&quot;w&quot;:960,&quot;h&quot;:129,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5881}" className="flex gap-5 items-start">
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5838,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:712,&quot;abs_y&quot;:5881}" className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size="{&quot;x&quot;:247,&quot;y&quot;:5846,&quot;w&quot;:10,&quot;h&quot;:24,&quot;abs_x&quot;:727,&quot;abs_y&quot;:5889}" className="text-base font-bold">2</span>
</div>
<div bis_size="{&quot;x&quot;:292,&quot;y&quot;:5838,&quot;w&quot;:900,&quot;h&quot;:129,&quot;abs_x&quot;:772,&quot;abs_y&quot;:5881}" className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size="{&quot;x&quot;:316,&quot;y&quot;:5862,&quot;w&quot;:852,&quot;h&quot;:28,&quot;abs_x&quot;:796,&quot;abs_y&quot;:5905}" className="text-xl font-semibold tracking-tight mb-2">
                    Concept & Modeling
                  </h3>
<p bis_size="{&quot;x&quot;:316,&quot;y&quot;:5898,&quot;w&quot;:852,&quot;h&quot;:45,&quot;abs_x&quot;:796,&quot;abs_y&quot;:5941}" className="text-white/60 leading-relaxed text-sm">
                    I create initial concepts and 3D models based on your brief.
                    You'll receive previews to ensure we're aligned on the
                    direction before moving forward.
                  </p>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5991,&quot;w&quot;:960,&quot;h&quot;:129,&quot;abs_x&quot;:712,&quot;abs_y&quot;:6034}" className="relative animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.25s both`}}>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5991,&quot;w&quot;:960,&quot;h&quot;:129,&quot;abs_x&quot;:712,&quot;abs_y&quot;:6034}" className="flex gap-5 items-start">
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:5991,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:712,&quot;abs_y&quot;:6034}" className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size="{&quot;x&quot;:247,&quot;y&quot;:5999,&quot;w&quot;:10,&quot;h&quot;:24,&quot;abs_x&quot;:727,&quot;abs_y&quot;:6042}" className="text-base font-bold">3</span>
</div>
<div bis_size="{&quot;x&quot;:292,&quot;y&quot;:5991,&quot;w&quot;:900,&quot;h&quot;:129,&quot;abs_x&quot;:772,&quot;abs_y&quot;:6034}" className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size="{&quot;x&quot;:316,&quot;y&quot;:6015,&quot;w&quot;:852,&quot;h&quot;:28,&quot;abs_x&quot;:796,&quot;abs_y&quot;:6058}" className="text-xl font-semibold tracking-tight mb-2">
                    Texturing & Lighting
                  </h3>
<p bis_size="{&quot;x&quot;:316,&quot;y&quot;:6051,&quot;w&quot;:852,&quot;h&quot;:45,&quot;abs_x&quot;:796,&quot;abs_y&quot;:6094}" className="text-white/60 leading-relaxed text-sm">
                    Adding materials, textures, and lighting setups to bring
                    realism to the models. This stage transforms basic geometry
                    into photorealistic assets.
                  </p>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:6145,&quot;w&quot;:960,&quot;h&quot;:106,&quot;abs_x&quot;:712,&quot;abs_y&quot;:6188}" className="relative animate-on-scroll" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.3s both`}}>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:6145,&quot;w&quot;:960,&quot;h&quot;:106,&quot;abs_x&quot;:712,&quot;abs_y&quot;:6188}" className="flex gap-5 items-start">
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:6145,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:712,&quot;abs_y&quot;:6188}" className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size="{&quot;x&quot;:247,&quot;y&quot;:6153,&quot;w&quot;:10,&quot;h&quot;:24,&quot;abs_x&quot;:727,&quot;abs_y&quot;:6196}" className="text-base font-bold">4</span>
</div>
<div bis_size="{&quot;x&quot;:292,&quot;y&quot;:6145,&quot;w&quot;:900,&quot;h&quot;:106,&quot;abs_x&quot;:772,&quot;abs_y&quot;:6188}" className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size="{&quot;x&quot;:316,&quot;y&quot;:6169,&quot;w&quot;:852,&quot;h&quot;:28,&quot;abs_x&quot;:796,&quot;abs_y&quot;:6212}" className="text-xl font-semibold tracking-tight mb-2">
                    Rendering & Delivery
                  </h3>
<p bis_size="{&quot;x&quot;:316,&quot;y&quot;:6205,&quot;w&quot;:852,&quot;h&quot;:22,&quot;abs_x&quot;:796,&quot;abs_y&quot;:6248}" className="text-white/60 leading-relaxed text-sm">
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

<section bis_label="style" bis_size="{&quot;x&quot;:0,&quot;y&quot;:6443,&quot;w&quot;:1425,&quot;h&quot;:677,&quot;abs_x&quot;:480,&quot;abs_y&quot;:6486}" className="z-10 bg-center xl:pt-32 xl:pb-32 bg-cover mt-24 pt-32 pb-32 relative bg-[url(/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg)]" id="contact" style={{backgroundImage: `url('/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg')`}}>
<div bis_size="{&quot;x&quot;:264,&quot;y&quot;:6571,&quot;w&quot;:896,&quot;h&quot;:421,&quot;abs_x&quot;:744,&quot;abs_y&quot;:6614}" className="lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div bis_size="{&quot;x&quot;:296,&quot;y&quot;:6571,&quot;w&quot;:832,&quot;h&quot;:421,&quot;abs_x&quot;:776,&quot;abs_y&quot;:6614}" className="border-gradient before:rounded-3xl md:p-12 animate-on-scroll text-center bg-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-xl" style={{animation: `fadeSlideIn 0.5s ease-in-out 0.1s both`}}>
<div bis_size="{&quot;x&quot;:650,&quot;y&quot;:6619,&quot;w&quot;:124,&quot;h&quot;:28,&quot;abs_x&quot;:1130,&quot;abs_y&quot;:6662}" className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:662,&quot;y&quot;:6626,&quot;w&quot;:14,&quot;h&quot;:14,&quot;abs_x&quot;:1142,&quot;abs_y&quot;:6669}" className="lucide lucide-mail w-3.5 h-3.5 text-white-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:663,&quot;y&quot;:6631,&quot;w&quot;:11,&quot;h&quot;:3,&quot;abs_x&quot;:1143,&quot;abs_y&quot;:6674}" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size="{&quot;x&quot;:663,&quot;y&quot;:6629,&quot;w&quot;:11,&quot;h&quot;:9,&quot;abs_x&quot;:1143,&quot;abs_y&quot;:6672}" height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size="{&quot;x&quot;:684,&quot;y&quot;:6625,&quot;w&quot;:78,&quot;h&quot;:16,&quot;abs_x&quot;:1164,&quot;abs_y&quot;:6668}" className="text-xs text-white/70">Let's Connect</span>
</div>
<h2 bis_size="{&quot;x&quot;:344,&quot;y&quot;:6671,&quot;w&quot;:736,&quot;h&quot;:48,&quot;abs_x&quot;:824,&quot;abs_y&quot;:6714}" className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tight">
            Ready to start your project?
          </h2>
<p bis_size="{&quot;x&quot;:376,&quot;y&quot;:6735,&quot;w&quot;:672,&quot;h&quot;:56,&quot;abs_x&quot;:856,&quot;abs_y&quot;:6778}" className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Whether you have a detailed brief or just an idea, I'd love to hear
            from you. Let's create something extraordinary together.
          </p>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:6823,&quot;w&quot;:736,&quot;h&quot;:44,&quot;abs_x&quot;:824,&quot;abs_y&quot;:6866}" className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
<a bis_size="{&quot;x&quot;:551,&quot;y&quot;:6823,&quot;w&quot;:146,&quot;h&quot;:44,&quot;abs_x&quot;:1031,&quot;abs_y&quot;:6866}" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:opacity-90 transition text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="mailto:alex@rivera3d.com">
              Send Email
              <svg aria-hidden="true" bis_size="{&quot;x&quot;:658,&quot;y&quot;:6837,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1138,&quot;abs_y&quot;:6880}" className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:659,&quot;y&quot;:6842,&quot;w&quot;:13,&quot;h&quot;:3,&quot;abs_x&quot;:1139,&quot;abs_y&quot;:6885}" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size="{&quot;x&quot;:659,&quot;y&quot;:6840,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:1139,&quot;abs_y&quot;:6883}" height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a bis_size="{&quot;x&quot;:710,&quot;y&quot;:6823,&quot;w&quot;:163,&quot;h&quot;:44,&quot;abs_x&quot;:1190,&quot;abs_y&quot;:6866}" className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#">
              Schedule Call
              <svg aria-hidden="true" bis_size="{&quot;x&quot;:833,&quot;y&quot;:6837,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1313,&quot;abs_y&quot;:6880}" className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:838,&quot;y&quot;:6839,&quot;w&quot;:0,&quot;h&quot;:2,&quot;abs_x&quot;:1318,&quot;abs_y&quot;:6882}" d="M8 2v4"></path><path bis_size="{&quot;x&quot;:844,&quot;y&quot;:6839,&quot;w&quot;:0,&quot;h&quot;:2,&quot;abs_x&quot;:1324,&quot;abs_y&quot;:6882}" d="M16 2v4"></path><rect bis_size="{&quot;x&quot;:835,&quot;y&quot;:6840,&quot;w&quot;:12,&quot;h&quot;:12,&quot;abs_x&quot;:1315,&quot;abs_y&quot;:6883}" height="18" rx="2" width="18" x="3" y="4"></rect><path bis_size="{&quot;x&quot;:835,&quot;y&quot;:6844,&quot;w&quot;:12,&quot;h&quot;:0,&quot;abs_x&quot;:1315,&quot;abs_y&quot;:6887}" d="M3 10h18"></path></svg>
</a>
</div>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:6899,&quot;w&quot;:736,&quot;h&quot;:45,&quot;abs_x&quot;:824,&quot;abs_y&quot;:6942}" className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-6">
<a bis_size="{&quot;x&quot;:516,&quot;y&quot;:6924,&quot;w&quot;:79,&quot;h&quot;:20,&quot;abs_x&quot;:996,&quot;abs_y&quot;:6967}" className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:516,&quot;y&quot;:6926,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:996,&quot;abs_y&quot;:6969}" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:523,&quot;y&quot;:6932,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1003,&quot;abs_y&quot;:6975}" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect bis_size="{&quot;x&quot;:518,&quot;y&quot;:6932,&quot;w&quot;:2,&quot;h&quot;:8,&quot;abs_x&quot;:998,&quot;abs_y&quot;:6975}" height="12" width="4" x="2" y="9"></rect><circle bis_size="{&quot;x&quot;:518,&quot;y&quot;:6928,&quot;w&quot;:2,&quot;h&quot;:2,&quot;abs_x&quot;:998,&quot;abs_y&quot;:6971}" cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
<a bis_size="{&quot;x&quot;:620,&quot;y&quot;:6924,&quot;w&quot;:89,&quot;h&quot;:20,&quot;abs_x&quot;:1100,&quot;abs_y&quot;:6967}" className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:620,&quot;y&quot;:6926,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1100,&quot;abs_y&quot;:6969}" className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size="{&quot;x&quot;:621,&quot;y&quot;:6928,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1101,&quot;abs_y&quot;:6971}" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path bis_size="{&quot;x&quot;:625,&quot;y&quot;:6932,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:1105,&quot;abs_y&quot;:6975}" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line bis_size="{&quot;x&quot;:632,&quot;y&quot;:6931,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1112,&quot;abs_y&quot;:6974}" x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              Instagram
            </a>
<a bis_size="{&quot;x&quot;:734,&quot;y&quot;:6924,&quot;w&quot;:69,&quot;h&quot;:20,&quot;abs_x&quot;:1214,&quot;abs_y&quot;:6967}" className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:734,&quot;y&quot;:6926,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1214,&quot;abs_y&quot;:6969}" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:735,&quot;y&quot;:6929,&quot;w&quot;:13,&quot;h&quot;:11,&quot;abs_x&quot;:1215,&quot;abs_y&quot;:6972}" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              Twitter
            </a>
<a bis_size="{&quot;x&quot;:827,&quot;y&quot;:6924,&quot;w&quot;:80,&quot;h&quot;:20,&quot;abs_x&quot;:1307,&quot;abs_y&quot;:6967}" className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size="{&quot;x&quot;:827,&quot;y&quot;:6926,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1307,&quot;abs_y&quot;:6969}" className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:829,&quot;y&quot;:6928,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1309,&quot;abs_y&quot;:6971}" cx="12" cy="12" r="10"></circle><path bis_size="{&quot;x&quot;:829,&quot;y&quot;:6930,&quot;w&quot;:11,&quot;h&quot;:3,&quot;abs_x&quot;:1309,&quot;abs_y&quot;:6973}" d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path bis_size="{&quot;x&quot;:831,&quot;y&quot;:6935,&quot;w&quot;:10,&quot;h&quot;:4,&quot;abs_x&quot;:1311,&quot;abs_y&quot;:6978}" d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path bis_size="{&quot;x&quot;:833,&quot;y&quot;:6928,&quot;w&quot;:5,&quot;h&quot;:11,&quot;abs_x&quot;:1313,&quot;abs_y&quot;:6971}" d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
              Dribbble
            </a>
</div>
</div>
</div>
</section>

<footer bis_size="{&quot;x&quot;:0,&quot;y&quot;:7160,&quot;w&quot;:1425,&quot;h&quot;:398,&quot;abs_x&quot;:480,&quot;abs_y&quot;:7203}" className="z-10 relative">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:7160,&quot;w&quot;:1280,&quot;h&quot;:398,&quot;abs_x&quot;:552,&quot;abs_y&quot;:7203}" className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:7160,&quot;w&quot;:1216,&quot;h&quot;:398,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7203}" className="border-white/[0.06] border-t mt-20 pt-12 pb-12">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:7209,&quot;w&quot;:1216,&quot;h&quot;:204,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7252}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:204,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7252}" className="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7252}" className="flex items-center gap-3 mb-4">
<span bis_size="{&quot;x&quot;:104,&quot;y&quot;:7209,&quot;w&quot;:97,&quot;h&quot;:28,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7252}" className="text-lg font-semibold">Alex Rivera</span>
</div>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:7253,&quot;w&quot;:274,&quot;h&quot;:68,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7296}" className="text-sm text-white/60 leading-relaxed mb-4">
                Award-winning 3D artist creating photorealistic renders and
                immersive digital experiences.
              </p>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:7338,&quot;w&quot;:274,&quot;h&quot;:36,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7381}" className="flex items-center gap-3">
<a bis_size="{&quot;x&quot;:104,&quot;y&quot;:7338,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7381}" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size="{&quot;x&quot;:114,&quot;y&quot;:7348,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:594,&quot;abs_y&quot;:7391}" className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:121,&quot;y&quot;:7353,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:601,&quot;abs_y&quot;:7396}" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect bis_size="{&quot;x&quot;:115,&quot;y&quot;:7354,&quot;w&quot;:2,&quot;h&quot;:8,&quot;abs_x&quot;:595,&quot;abs_y&quot;:7397}" height="12" width="4" x="2" y="9"></rect>
<circle bis_size="{&quot;x&quot;:115,&quot;y&quot;:7349,&quot;w&quot;:2,&quot;h&quot;:2,&quot;abs_x&quot;:595,&quot;abs_y&quot;:7392}" cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a bis_size="{&quot;x&quot;:152,&quot;y&quot;:7338,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:632,&quot;abs_y&quot;:7381}" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size="{&quot;x&quot;:162,&quot;y&quot;:7348,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:642,&quot;abs_y&quot;:7391}" className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect bis_size="{&quot;x&quot;:163,&quot;y&quot;:7349,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:643,&quot;abs_y&quot;:7392}" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path bis_size="{&quot;x&quot;:167,&quot;y&quot;:7353,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:647,&quot;abs_y&quot;:7396}" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line bis_size="{&quot;x&quot;:174,&quot;y&quot;:7352,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:654,&quot;abs_y&quot;:7395}" x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a bis_size="{&quot;x&quot;:200,&quot;y&quot;:7338,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:680,&quot;abs_y&quot;:7381}" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size="{&quot;x&quot;:210,&quot;y&quot;:7348,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:690,&quot;abs_y&quot;:7391}" className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:211,&quot;y&quot;:7350,&quot;w&quot;:13,&quot;h&quot;:11,&quot;abs_x&quot;:691,&quot;abs_y&quot;:7393}" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a bis_size="{&quot;x&quot;:248,&quot;y&quot;:7338,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:728,&quot;abs_y&quot;:7381}" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size="{&quot;x&quot;:258,&quot;y&quot;:7348,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:738,&quot;abs_y&quot;:7391}" className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle bis_size="{&quot;x&quot;:259,&quot;y&quot;:7349,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:739,&quot;abs_y&quot;:7392}" cx="12" cy="12" r="10"></circle>
<path bis_size="{&quot;x&quot;:260,&quot;y&quot;:7351,&quot;w&quot;:11,&quot;h&quot;:3,&quot;abs_x&quot;:740,&quot;abs_y&quot;:7394}" d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
<path bis_size="{&quot;x&quot;:262,&quot;y&quot;:7356,&quot;w&quot;:10,&quot;h&quot;:4,&quot;abs_x&quot;:742,&quot;abs_y&quot;:7399}" d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path bis_size="{&quot;x&quot;:264,&quot;y&quot;:7350,&quot;w&quot;:5,&quot;h&quot;:11,&quot;abs_x&quot;:744,&quot;abs_y&quot;:7393}" d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
</svg>
</a>
</div>
</div>

<div bis_size="{&quot;x&quot;:418,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:204,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7252}" className="">
<h3 bis_size="{&quot;x&quot;:418,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:20,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7252}" className="text-sm font-semibold text-white mb-4">Quick Links</h3>
<ul bis_size="{&quot;x&quot;:418,&quot;y&quot;:7245,&quot;w&quot;:274,&quot;h&quot;:168,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7288}" className="space-y-3">
<li bis_size="{&quot;x&quot;:418,&quot;y&quot;:7245,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7288}" className="">
<a bis_size="{&quot;x&quot;:418,&quot;y&quot;:7249,&quot;w&quot;:55,&quot;h&quot;:17,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7292}" className="text-sm text-white/60 hover:text-white transition" href="#portfolio">
                    Portfolio
                  </a>
</li>
<li bis_size="{&quot;x&quot;:418,&quot;y&quot;:7281,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7324}">
<a bis_size="{&quot;x&quot;:418,&quot;y&quot;:7285,&quot;w&quot;:39,&quot;h&quot;:17,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7328}" className="text-sm text-white/60 hover:text-white transition" href="#about">
                    About
                  </a>
</li>
<li bis_size="{&quot;x&quot;:418,&quot;y&quot;:7317,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7360}">
<a bis_size="{&quot;x&quot;:418,&quot;y&quot;:7321,&quot;w&quot;:57,&quot;h&quot;:17,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7364}" className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Services
                  </a>
</li>
<li bis_size="{&quot;x&quot;:418,&quot;y&quot;:7353,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7396}" className="">
<a bis_size="{&quot;x&quot;:418,&quot;y&quot;:7357,&quot;w&quot;:53,&quot;h&quot;:17,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7400}" className="text-sm text-white/60 hover:text-white transition" href="#process">
                    Process
                  </a>
</li>
<li bis_size="{&quot;x&quot;:418,&quot;y&quot;:7389,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7432}" className="">
<a bis_size="{&quot;x&quot;:418,&quot;y&quot;:7393,&quot;w&quot;:51,&quot;h&quot;:17,&quot;abs_x&quot;:898,&quot;abs_y&quot;:7436}" className="text-sm text-white/60 hover:text-white transition" href="#contact">
                    Contact
                  </a>
</li>
</ul>
</div>

<div bis_size="{&quot;x&quot;:732,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:204,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7252}" className="">
<h3 bis_size="{&quot;x&quot;:732,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:20,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7252}" className="text-sm font-semibold text-white mb-4">Services</h3>
<ul bis_size="{&quot;x&quot;:732,&quot;y&quot;:7245,&quot;w&quot;:274,&quot;h&quot;:168,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7288}" className="space-y-3">
<li bis_size="{&quot;x&quot;:732,&quot;y&quot;:7245,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7288}" className="">
<a bis_size="{&quot;x&quot;:732,&quot;y&quot;:7249,&quot;w&quot;:139,&quot;h&quot;:17,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7292}" className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Product Visualization
                  </a>
</li>
<li bis_size="{&quot;x&quot;:732,&quot;y&quot;:7281,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7324}" className="">
<a bis_size="{&quot;x&quot;:732,&quot;y&quot;:7285,&quot;w&quot;:115,&quot;h&quot;:17,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7328}" className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Character Design
                  </a>
</li>
<li bis_size="{&quot;x&quot;:732,&quot;y&quot;:7317,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7360}" className="">
<a bis_size="{&quot;x&quot;:732,&quot;y&quot;:7321,&quot;w&quot;:109,&quot;h&quot;:17,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7364}" className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Architectural Viz
                  </a>
</li>
<li bis_size="{&quot;x&quot;:732,&quot;y&quot;:7353,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7396}" className="">
<a bis_size="{&quot;x&quot;:732,&quot;y&quot;:7357,&quot;w&quot;:108,&quot;h&quot;:17,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7400}" className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Motion Graphics
                  </a>
</li>
<li bis_size="{&quot;x&quot;:732,&quot;y&quot;:7389,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7432}">
<a bis_size="{&quot;x&quot;:732,&quot;y&quot;:7393,&quot;w&quot;:132,&quot;h&quot;:17,&quot;abs_x&quot;:1212,&quot;abs_y&quot;:7436}" className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Environment Design
                  </a>
</li>
</ul>
</div>

<div bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:204,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7252}" className="">
<h3 bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7209,&quot;w&quot;:274,&quot;h&quot;:20,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7252}" className="text-sm font-semibold text-white mb-4">
                Get in Touch
              </h3>
<ul bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7245,&quot;w&quot;:274,&quot;h&quot;:120,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7288}" className="space-y-3">
<li bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7245,&quot;w&quot;:274,&quot;h&quot;:20,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7288}" className="flex items-start gap-2 text-sm text-white/60">
<svg bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7247,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7290}" className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:1047,&quot;y&quot;:7252,&quot;w&quot;:13,&quot;h&quot;:3,&quot;abs_x&quot;:1527,&quot;abs_y&quot;:7295}" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect bis_size="{&quot;x&quot;:1047,&quot;y&quot;:7250,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:1527,&quot;abs_y&quot;:7293}" height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<a bis_size="{&quot;x&quot;:1070,&quot;y&quot;:7245,&quot;w&quot;:127,&quot;h&quot;:20,&quot;abs_x&quot;:1550,&quot;abs_y&quot;:7288}" className="hover:text-white transition" href="mailto:alex@rivera3d.com">
                    alex@rivera3d.com
                  </a>
</li>
<li bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7277,&quot;w&quot;:274,&quot;h&quot;:20,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7320}" className="flex items-start gap-2 text-sm text-white/60">
<svg bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7279,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7322}" className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:1047,&quot;y&quot;:7281,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1527,&quot;abs_y&quot;:7324}" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span bis_size="{&quot;x&quot;:1070,&quot;y&quot;:7277,&quot;w&quot;:121,&quot;h&quot;:20,&quot;abs_x&quot;:1550,&quot;abs_y&quot;:7320}" className="">
<a bis_size="{&quot;x&quot;:1070,&quot;y&quot;:7278,&quot;w&quot;:121,&quot;h&quot;:17,&quot;abs_x&quot;:1550,&quot;abs_y&quot;:7321}" href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
</span>
</li>
<li bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7309,&quot;w&quot;:274,&quot;h&quot;:20,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7352}" className="flex items-start gap-2 text-sm text-white/60">
<svg bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7311,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7354}" className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:1049,&quot;y&quot;:7313,&quot;w&quot;:10,&quot;h&quot;:13,&quot;abs_x&quot;:1529,&quot;abs_y&quot;:7356}" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle bis_size="{&quot;x&quot;:1052,&quot;y&quot;:7316,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1532,&quot;abs_y&quot;:7359}" cx="12" cy="10" r="3"></circle>
</svg>
<span bis_size="{&quot;x&quot;:1070,&quot;y&quot;:7309,&quot;w&quot;:108,&quot;h&quot;:20,&quot;abs_x&quot;:1550,&quot;abs_y&quot;:7352}" className="">Los Angeles, CA</span>
</li>
<li bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7341,&quot;w&quot;:274,&quot;h&quot;:24,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7384}" className="mt-4">
<a bis_size="{&quot;x&quot;:1046,&quot;y&quot;:7344,&quot;w&quot;:125,&quot;h&quot;:20,&quot;abs_x&quot;:1526,&quot;abs_y&quot;:7387}" className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition xl:text-blue-400" href="#contact">
                    Schedule a call
                    <svg bis_size="{&quot;x&quot;:1155,&quot;y&quot;:7346,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1635,&quot;abs_y&quot;:7389}" className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size="{&quot;x&quot;:1159,&quot;y&quot;:7354,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:1639,&quot;abs_y&quot;:7397}" d="M5 12h14"></path>
<path bis_size="{&quot;x&quot;:1163,&quot;y&quot;:7350,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:1643,&quot;abs_y&quot;:7393}" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:7461,&quot;w&quot;:1216,&quot;h&quot;:49,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7504}" className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:7494,&quot;w&quot;:233,&quot;h&quot;:16,&quot;abs_x&quot;:584,&quot;abs_y&quot;:7537}" className="text-xs text-white/50 text-center md:text-left">
              ©
              <span bis_size="{&quot;x&quot;:118,&quot;y&quot;:7494,&quot;w&quot;:29,&quot;h&quot;:15,&quot;abs_x&quot;:598,&quot;abs_y&quot;:7537}" id="year">2026</span>
              Alexia Rivera. All rights reserved.
            </p>
<div bis_size="{&quot;x&quot;:950,&quot;y&quot;:7494,&quot;w&quot;:369,&quot;h&quot;:16,&quot;abs_x&quot;:1430,&quot;abs_y&quot;:7537}" className="flex items-center gap-6 text-xs text-white/60">
<a bis_size="{&quot;x&quot;:950,&quot;y&quot;:7494,&quot;w&quot;:79,&quot;h&quot;:16,&quot;abs_x&quot;:1430,&quot;abs_y&quot;:7537}" className="hover:text-white transition" href="#">Privacy Policy</a>
<a bis_size="{&quot;x&quot;:1054,&quot;y&quot;:7494,&quot;w&quot;:96,&quot;h&quot;:16,&quot;abs_x&quot;:1534,&quot;abs_y&quot;:7537}" className="hover:text-white transition" href="#">
                Terms of Service
              </a>
<a bis_size="{&quot;x&quot;:1174,&quot;y&quot;:7494,&quot;w&quot;:77,&quot;h&quot;:16,&quot;abs_x&quot;:1654,&quot;abs_y&quot;:7537}" className="hover:text-white transition" href="#">Cookie Policy</a>
<a bis_size="{&quot;x&quot;:1275,&quot;y&quot;:7494,&quot;w&quot;:44,&quot;h&quot;:16,&quot;abs_x&quot;:1755,&quot;abs_y&quot;:7537}" className="hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
