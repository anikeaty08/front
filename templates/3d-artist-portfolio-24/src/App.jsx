import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<div bis_size='{"x":0,"y":0,"w":1425,"h":876,"abs_x":480,"abs_y":43}' className="aura-background-component top-0 w-full -z-10 absolute h-screen hue-rotate-15 blur-sm" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div bis_size='{"x":0,"y":0,"w":1425,"h":876,"abs_x":480,"abs_y":43}' className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe bis_chainid="4" bis_depth="1" bis_id="fr_itbqga6jtgoqk4asugjz56" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe>
</div>
</div>
<div bis_size='{"x":0,"y":481,"w":1425,"h":394,"abs_x":480,"abs_y":524}' className="gradient-blur">
<div bis_size='{"x":0,"y":481,"w":1425,"h":394,"abs_x":480,"abs_y":524}'></div>
<div bis_size='{"x":0,"y":481,"w":1425,"h":394,"abs_x":480,"abs_y":524}'></div>
<div bis_size='{"x":0,"y":481,"w":1425,"h":394,"abs_x":480,"abs_y":524}'></div>
<div bis_size='{"x":0,"y":481,"w":1425,"h":394,"abs_x":480,"abs_y":524}'></div>
</div>
<div bis_size='{"x":0,"y":0,"w":1425,"h":876,"abs_x":480,"abs_y":43}' className="overflow-hidden relative">

<header bis_size='{"x":0,"y":0,"w":1425,"h":93,"abs_x":480,"abs_y":43}' className="fixed z-20 bg-black/50 w-full top-0 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div bis_size='{"x":72,"y":0,"w":1280,"h":93,"abs_x":552,"abs_y":43}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":104,"y":0,"w":1216,"h":93,"abs_x":584,"abs_y":43}' className="flex border-white/[0.06] border-b pt-6 pb-6 items-center justify-between">
<a bis_size='{"x":104,"y":32,"w":102,"h":28,"abs_x":584,"abs_y":75}' className="flex items-center gap-3" href="#">
<span bis_size='{"x":104,"y":32,"w":102,"h":28,"abs_x":584,"abs_y":75}' className="text-xl font-semibold tracking-tight">
                Alex Rivera
              </span>
</a>
<button aria-label="Toggle menu" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition ml-auto" id="mobile-menu-toggle">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-menu w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' x1="4" x2="20" y1="12" y2="12"></line>
<line bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' x1="4" x2="20" y1="6" y2="6"></line>
<line bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<nav bis_size='{"x":501,"y":36,"w":385,"h":20,"abs_x":981,"abs_y":79}' className="hidden lg:flex items-center gap-8 text-sm text-white/70">
<a bis_size='{"x":501,"y":36,"w":55,"h":20,"abs_x":981,"abs_y":79}' className="hover:text-white transition" href="#portfolio">
                Portfolio
              </a>
<a bis_size='{"x":588,"y":36,"w":39,"h":20,"abs_x":1068,"abs_y":79}' className="hover:text-white transition" href="#about">About</a>
<a bis_size='{"x":659,"y":36,"w":57,"h":20,"abs_x":1139,"abs_y":79}' className="hover:text-white transition" href="#services">
                Services
              </a>
<a bis_size='{"x":749,"y":36,"w":53,"h":20,"abs_x":1229,"abs_y":79}' className="hover:text-white transition" href="#process">Process</a>
<a bis_size='{"x":834,"y":36,"w":51,"h":20,"abs_x":1314,"abs_y":79}' className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div bis_size='{"x":1180,"y":24,"w":140,"h":44,"abs_x":1660,"abs_y":67}' className="flex items-center gap-3">
<a bis_size='{"x":1180,"y":24,"w":140,"h":44,"abs_x":1660,"abs_y":67}' className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hidden md:inline-flex" href="#contact">
                Hire Me
                <svg aria-hidden="true" bis_size='{"x":1271,"y":38,"w":16,"h":16,"abs_x":1751,"abs_y":81}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1274,"y":46,"w":9,"h":0,"abs_x":1754,"abs_y":89}' d="M5 12h14"></path><path bis_size='{"x":1279,"y":41,"w":4,"h":9,"abs_x":1759,"abs_y":84}' d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<nav bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lg:hidden hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden" id="mobile-menu" style={{maxHeight: '0px'}}>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="flex flex-col p-6 space-y-4">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="text-base text-white/70 hover:text-white transition py-2" href="#portfolio">
                Portfolio
              </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="text-base text-white/70 hover:text-white transition py-2" href="#about">
                About
              </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="text-base text-white/70 hover:text-white transition py-2" href="#services">
                Services
              </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="text-base text-white/70 hover:text-white transition py-2" href="#process">
                Process
              </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="text-base text-white/70 hover:text-white transition py-2" href="#contact">
                Contact
              </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 mt-2" href="#contact">
                Hire Me
                <svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="M5 12h14"></path>
<path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>
</div>
</header>

<section bis_size='{"x":0,"y":0,"w":1425,"h":876,"abs_x":480,"abs_y":43}' className="min-h-screen flex flex-col section-visible xl:pt-0 xl:pb-0 text-center pt-0 pr-6 pb-24 pl-6 relative items-center justify-center">

<div bis_size='{"x":599,"y":58,"w":226,"h":40,"abs_x":1079,"abs_y":101}' className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 backdrop-blur-sm text-white/80 ring-1 ring-white/10 animate-badge">
<span bis_size='{"x":615,"y":78,"w":0,"h":0,"abs_x":1095,"abs_y":121}' className="i-lucide-sparkles"></span>
<span bis_size='{"x":623,"y":66,"w":186,"h":24,"abs_x":1103,"abs_y":109}' className="">Award-Winning 3D Artist</span>
</div>

<h1 bis_size='{"x":320,"y":98,"w":783,"h":336,"abs_x":800,"abs_y":141}' className="leading-[0.95] font-semibold text-white tracking-tight mt-0 mb-0 pt-40 pb-12" style={{animation: 'titleEmergence 1.8s ease-out both'}}>
<span bis_size='{"x":320,"y":98,"w":783,"h":96,"abs_x":800,"abs_y":141}' className="block text-[10vw] sm:text-7xl lg:text-8xl flex items-center justify-center gap-4 sm:gap-6">
<img alt="Alex Rivera" bis_size='{"x":469,"y":101,"w":90,"h":90,"abs_x":949,"abs_y":144}' className="w-[10vw] h-[10vw] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover border-2 border-white/20 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4abaf0f-1b83-475f-ae08-9503a26d3f3f_320w.png" style={{animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both'}}/>
            Crafting
          </span>
<span bis_size='{"x":320,"y":194,"w":783,"h":96,"abs_x":800,"abs_y":237}' className="block text-[10vw] sm:text-7xl lg:text-8xl animate-shimmer-mask [--shine:220%] text-white/80">
            photorealistic 3D
          </span>
<span bis_size='{"x":320,"y":290,"w":783,"h":96,"abs_x":800,"abs_y":333}' className="block text-[10vw] sm:text-7xl lg:text-8xl">worlds</span>
</h1>

<p aria-label="Specializing in cinematic CGI, product visualization, and character design. Bringing imagination to life through cutting-edge 3D artistry." bis_size='{"x":328,"y":434,"w":768,"h":56,"abs_x":808,"abs_y":477}' className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 type-words is-in" data-delay=".4s" data-duration="2s" data-ease="ease-in-out" data-stagger=".2s" style={{-Stagger: '0.2s', -Dur: '2s', -Ease: 'ease-in-out', -Delay: '0.4s'}}><span bis_size='{"x":360,"y":434,"w":119,"h":28,"abs_x":840,"abs_y":477}' className="w" style={{-I: '0'}}>Specializing </span><span bis_size='{"x":480,"y":434,"w":22,"h":28,"abs_x":960,"abs_y":477}' className="w" style={{-I: '1'}}>in </span><span bis_size='{"x":502,"y":434,"w":96,"h":28,"abs_x":982,"abs_y":477}' className="w" style={{-I: '2'}}>cinematic </span><span bis_size='{"x":599,"y":434,"w":46,"h":28,"abs_x":1079,"abs_y":477}' className="w" style={{-I: '3'}}>CGI, </span><span bis_size='{"x":645,"y":434,"w":79,"h":28,"abs_x":1125,"abs_y":477}' className="w" style={{-I: '4'}}>product </span><span bis_size='{"x":724,"y":434,"w":128,"h":28,"abs_x":1204,"abs_y":477}' className="w" style={{-I: '5'}}>visualization, </span><span bis_size='{"x":852,"y":434,"w":40,"h":28,"abs_x":1332,"abs_y":477}' className="w" style={{-I: '6'}}>and </span><span bis_size='{"x":893,"y":434,"w":95,"h":28,"abs_x":1373,"abs_y":477}' className="w" style={{-I: '7'}}>character </span><span bis_size='{"x":989,"y":434,"w":74,"h":28,"abs_x":1469,"abs_y":477}' className="w" style={{-I: '8'}}>design. </span><span bis_size='{"x":425,"y":462,"w":84,"h":28,"abs_x":905,"abs_y":505}' className="w" style={{-I: '9'}}>Bringing </span><span bis_size='{"x":510,"y":462,"w":114,"h":28,"abs_x":990,"abs_y":505}' className="w" style={{-I: '10'}}>imagination </span><span bis_size='{"x":624,"y":462,"w":23,"h":28,"abs_x":1104,"abs_y":505}' className="w" style={{-I: '11'}}>to </span><span bis_size='{"x":648,"y":462,"w":33,"h":28,"abs_x":1128,"abs_y":505}' className="w" style={{-I: '12'}}>life </span><span bis_size='{"x":682,"y":462,"w":79,"h":28,"abs_x":1162,"abs_y":505}' className="w" style={{-I: '13'}}>through </span><span bis_size='{"x":761,"y":462,"w":127,"h":28,"abs_x":1241,"abs_y":505}' className="w" style={{-I: '14'}}>cutting-edge </span><span bis_size='{"x":889,"y":462,"w":32,"h":28,"abs_x":1369,"abs_y":505}' className="w" style={{-I: '15'}}>3D </span><span bis_size='{"x":921,"y":462,"w":77,"h":28,"abs_x":1401,"abs_y":505}' className="w" style={{-I: '16'}}>artistry. </span></p>

<div bis_size='{"x":559,"y":530,"w":306,"h":48,"abs_x":1039,"abs_y":573}' className="mt-10 flex items-center justify-center gap-4">
<span bis_size='{"x":559,"y":530,"w":150,"h":48,"abs_x":1039,"abs_y":573}' className="">
<span bis_size='{"x":559,"y":544,"w":150,"h":20,"abs_x":1039,"abs_y":587}' className="">
<a bis_size='{"x":559,"y":530,"w":150,"h":48,"abs_x":1039,"abs_y":573}' className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#contact" style={{zIndex: '2'}}>
<span bis_size='{"x":583,"y":542,"w":102,"h":24,"abs_x":1063,"abs_y":585}' className="z-[1] group-hover:translate-x-1 transition-transform duration-300 relative">
                  View Portfolio
                </span>
<span aria-hidden="true" bis_size='{"x":559,"y":530,"w":150,"h":48,"abs_x":1039,"abs_y":573}' className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)', animation: 'pulse 2s ease-in-out infinite'}}></span>
<span aria-hidden="true" bis_size='{"x":559,"y":530,"w":150,"h":48,"abs_x":1039,"abs_y":573}' className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)'}}></span>
<span aria-hidden="true" bis_size='{"x":559,"y":530,"w":150,"h":48,"abs_x":1039,"abs_y":573}' className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
</a>
</span>
</span>
<div bis_size='{"x":725,"y":532,"w":140,"h":44,"abs_x":1205,"abs_y":575}' className="inline-block group relative">
<button bis_size='{"x":725,"y":532,"w":140,"h":44,"abs_x":1205,"abs_y":575}' className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
<span bis_size='{"x":751,"y":544,"w":89,"h":20,"abs_x":1231,"abs_y":587}' className="relative">Start a project</span>
<span aria-hidden="true" bis_size='{"x":746,"y":575,"w":98,"h":1,"abs_x":1226,"abs_y":618}' className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" bis_size='{"x":707,"y":564,"w":176,"h":24,"abs_x":1187,"abs_y":607}' className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139,92,246,.55), rgba(139,92,246,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<div bis_size='{"x":471,"y":610,"w":481,"h":208,"abs_x":951,"abs_y":653}' className="flex flex-wrap xl:py-24 text-xs text-white/60 mt-8 pt-24 pb-24 gap-x-6 gap-y-6 items-center justify-center" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<span bis_size='{"x":471,"y":706,"w":139,"h":16,"abs_x":951,"abs_y":749}' className="inline-flex items-center gap-1.5">
<svg aria-hidden="true" bis_size='{"x":471,"y":706,"w":16,"h":16,"abs_x":951,"abs_y":749}' className="lucide lucide-clock w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":479,"y":710,"w":2,"h":5,"abs_x":959,"abs_y":753}' d="M12 6v6l4 2"></path><circle bis_size='{"x":472,"y":707,"w":13,"h":13,"abs_x":952,"abs_y":750}' cx="12" cy="12" r="10"></circle></svg>
            8+ Years Experience
          </span>
<span bis_size='{"x":635,"y":706,"w":167,"h":16,"abs_x":1115,"abs_y":749}' className="inline-flex items-center gap-1.5">
<svg aria-hidden="true" bis_size='{"x":635,"y":706,"w":16,"h":16,"abs_x":1115,"abs_y":749}' className="lucide lucide-briefcase w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":640,"y":707,"w":5,"h":12,"abs_x":1120,"abs_y":750}' d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect bis_size='{"x":636,"y":710,"w":13,"h":9,"abs_x":1116,"abs_y":753}' height="14" rx="2" width="20" x="2" y="6"></rect></svg>
            200+ Projects Completed
          </span>
<span bis_size='{"x":826,"y":706,"w":127,"h":16,"abs_x":1306,"abs_y":749}' className="inline-flex items-center gap-1.5">
<svg aria-hidden="true" bis_size='{"x":826,"y":706,"w":16,"h":16,"abs_x":1306,"abs_y":749}' className="lucide lucide-users w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":827,"y":716,"w":9,"h":4,"abs_x":1307,"abs_y":759}' d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path bis_size='{"x":837,"y":708,"w":1,"h":5,"abs_x":1317,"abs_y":751}' d="M16 3.128a4 4 0 0 1 0 7.744"></path><path bis_size='{"x":839,"y":716,"w":2,"h":3,"abs_x":1319,"abs_y":759}' d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle bis_size='{"x":829,"y":708,"w":5,"h":5,"abs_x":1309,"abs_y":751}' cx="9" cy="7" r="4"></circle></svg>
            50+ Happy Clients
          </span>
</div>
</section>
</div>

<div bis_size='{"x":0,"y":940,"w":1425,"h":836,"abs_x":480,"abs_y":983}' className="relative mt-12 md:mt-16">
<section bis_size='{"x":0,"y":940,"w":1425,"h":836,"abs_x":480,"abs_y":983}' className="xl:pt-24 pt-32 pb-32" data-section="">
<div bis_size='{"x":72,"y":1056,"w":1280,"h":592,"abs_x":552,"abs_y":1099}' className="container max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div bis_size='{"x":96,"y":1056,"w":1232,"h":104,"abs_x":576,"abs_y":1099}' className="reveal">
<div bis_size='{"x":96,"y":1056,"w":768,"h":104,"abs_x":576,"abs_y":1099}' className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<h2 bis_size='{"x":96,"y":1056,"w":768,"h":60,"abs_x":576,"abs_y":1099}' className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
                Featured Work Preview
              </h2>
<p bis_size='{"x":96,"y":1132,"w":768,"h":28,"abs_x":576,"abs_y":1175}' className="text-base md:text-lg text-white/70 mt-4">
                A curated collection of my best work across various industries
                and styles.
              </p>
</div>
</div>

<div bis_size='{"x":96,"y":1160,"w":1232,"h":488,"abs_x":576,"abs_y":1203}' className="relative">
<div bis_size='{"x":96,"y":1160,"w":1232,"h":488,"abs_x":576,"abs_y":1203}' className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:scroll-px-8 md:pt-16 md:px-8 max-w-7xl pt-6 pr-8 pb-6 pl-8 gap-x-6 gap-y-x-6" id="work-carousel" style={{WebkitOverflowScrolling: 'touch'}}>

<article bis_size='{"x":147,"y":1236,"w":601,"h":376,"abs_x":627,"abs_y":1279}' className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="0" style={{transform: 'scale(0.94)', opacity: '0.55'}}>
<img alt="3D product render project cover" bis_size='{"x":147,"y":1236,"w":601,"h":376,"abs_x":627,"abs_y":1279}' className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/591d6a3f-93a6-4185-a67b-d397be21fd6a_1600w.jpg"/>
<div bis_size='{"x":147,"y":1236,"w":601,"h":376,"abs_x":627,"abs_y":1279}' className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

<div bis_size='{"x":147,"y":1486,"w":601,"h":125,"abs_x":627,"abs_y":1529}' className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size='{"x":170,"y":1508,"w":556,"h":18,"abs_x":650,"abs_y":1551}' className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size='{"x":170,"y":1508,"w":18,"h":18,"abs_x":650,"abs_y":1551}' className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size='{"x":173,"y":1511,"w":13,"h":13,"abs_x":653,"abs_y":1554}' className="lucide lucide-sparkles h-3.5 w-3.5 text-lime-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":174,"y":1512,"w":10,"h":10,"abs_x":654,"abs_y":1555}' d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path bis_size='{"x":184,"y":1512,"w":0,"h":2,"abs_x":664,"abs_y":1555}' d="M20 2v4"></path><path bis_size='{"x":182,"y":1513,"w":2,"h":0,"abs_x":662,"abs_y":1556}' d="M22 4h-4"></path><circle bis_size='{"x":174,"y":1521,"w":2,"h":2,"abs_x":654,"abs_y":1564}' cx="4" cy="20" r="2"></circle></svg>
</span>
                    3D Render • Interface
                  </div>
<div bis_size='{"x":170,"y":1536,"w":556,"h":52,"abs_x":650,"abs_y":1579}' className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size='{"x":170,"y":1536,"w":263,"h":52,"abs_x":650,"abs_y":1579}'>
<h3 bis_size='{"x":170,"y":1536,"w":263,"h":30,"abs_x":650,"abs_y":1579}' className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Aurora OS Concept
                      </h3>
<p bis_size='{"x":170,"y":1566,"w":263,"h":22,"abs_x":650,"abs_y":1609}' className="text-sm md:text-base text-white/70">
                        Spatial UI for a wearable-first system
                      </p>
</div>
<a bis_size='{"x":681,"y":1555,"w":45,"h":33,"abs_x":1161,"abs_y":1598}' className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size='{"x":694,"y":1563,"w":18,"h":18,"abs_x":1174,"abs_y":1606}' className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":700,"y":1568,"w":7,"h":7,"abs_x":1180,"abs_y":1611}' d="M7 7h10v10"></path><path bis_size='{"x":700,"y":1568,"w":7,"h":7,"abs_x":1180,"abs_y":1611}' d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<button bis_size='{"x":162,"y":1403,"w":41,"h":41,"abs_x":642,"abs_y":1446}' className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":162,"y":1414,"w":18,"h":18,"abs_x":642,"abs_y":1457}' className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":169,"y":1419,"w":4,"h":9,"abs_x":649,"abs_y":1462}' d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size='{"x":692,"y":1403,"w":41,"h":41,"abs_x":1172,"abs_y":1446}' className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":692,"y":1414,"w":18,"h":18,"abs_x":1172,"abs_y":1457}' className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":699,"y":1419,"w":4,"h":9,"abs_x":1179,"abs_y":1462}' d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size='{"x":800,"y":1224,"w":640,"h":400,"abs_x":1280,"abs_y":1267}' className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 bg-neutral-900/40" data-index="1" style={{transform: 'scale(1)', opacity: '1'}}>
<img alt="Mountain expedition project cover" bis_size='{"x":800,"y":1224,"w":640,"h":400,"abs_x":1280,"abs_y":1267}' className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/103e9b5d-1921-4cd5-a80d-9445881f318d_1600w.webp"/>
<div bis_size='{"x":800,"y":1224,"w":640,"h":400,"abs_x":1280,"abs_y":1267}' className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size='{"x":800,"y":1490,"w":640,"h":134,"abs_x":1280,"abs_y":1533}' className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size='{"x":824,"y":1514,"w":592,"h":20,"abs_x":1304,"abs_y":1557}' className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size='{"x":824,"y":1514,"w":20,"h":20,"abs_x":1304,"abs_y":1557}' className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size='{"x":827,"y":1517,"w":14,"h":14,"abs_x":1307,"abs_y":1560}' className="lucide lucide-map h-3.5 w-3.5 text-lime-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":829,"y":1518,"w":10,"h":10,"abs_x":1309,"abs_y":1561}' d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path bis_size='{"x":836,"y":1520,"w":0,"h":8,"abs_x":1316,"abs_y":1563}' d="M15 5.764v15"></path><path bis_size='{"x":832,"y":1518,"w":0,"h":8,"abs_x":1312,"abs_y":1561}' d="M9 3.236v15"></path></svg>
</span>
                    Outdoor • Mapping
                  </div>
<div bis_size='{"x":824,"y":1544,"w":592,"h":56,"abs_x":1304,"abs_y":1587}' className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size='{"x":824,"y":1544,"w":298,"h":56,"abs_x":1304,"abs_y":1587}' className="">
<h3 bis_size='{"x":824,"y":1544,"w":298,"h":32,"abs_x":1304,"abs_y":1587}' className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Peak Atlas
                      </h3>
<p bis_size='{"x":824,"y":1576,"w":298,"h":24,"abs_x":1304,"abs_y":1619}' className="text-sm md:text-base text-white/70">
                        A guide to the world's quietest summits
                      </p>
</div>
<a bis_size='{"x":1368,"y":1564,"w":48,"h":36,"abs_x":1848,"abs_y":1607}' className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size='{"x":1382,"y":1572,"w":20,"h":20,"abs_x":1862,"abs_y":1615}' className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1388,"y":1577,"w":8,"h":8,"abs_x":1868,"abs_y":1620}' d="M7 7h10v10"></path><path bis_size='{"x":1388,"y":1577,"w":8,"h":8,"abs_x":1868,"abs_y":1620}' d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size='{"x":816,"y":1402,"w":44,"h":44,"abs_x":1296,"abs_y":1445}' className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":816,"y":1414,"w":20,"h":20,"abs_x":1296,"abs_y":1457}' className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":824,"y":1419,"w":5,"h":10,"abs_x":1304,"abs_y":1462}' d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size='{"x":1380,"y":1402,"w":44,"h":44,"abs_x":1860,"abs_y":1445}' className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":1380,"y":1414,"w":20,"h":20,"abs_x":1860,"abs_y":1457}' className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1388,"y":1419,"w":5,"h":10,"abs_x":1868,"abs_y":1462}' d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size='{"x":1491,"y":1236,"w":601,"h":376,"abs_x":1971,"abs_y":1279}' className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="2" style={{transform: 'scale(0.94)', opacity: '0.55'}}>
<img alt="Minimal banking app cover" bis_size='{"x":1491,"y":1236,"w":601,"h":376,"abs_x":1971,"abs_y":1279}' className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp"/>
<div bis_size='{"x":1491,"y":1236,"w":601,"h":376,"abs_x":1971,"abs_y":1279}' className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size='{"x":1491,"y":1486,"w":601,"h":125,"abs_x":1971,"abs_y":1529}' className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size='{"x":1514,"y":1508,"w":556,"h":18,"abs_x":1994,"abs_y":1551}' className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size='{"x":1514,"y":1508,"w":18,"h":18,"abs_x":1994,"abs_y":1551}' className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size='{"x":1517,"y":1511,"w":13,"h":13,"abs_x":1997,"abs_y":1554}' className="lucide lucide-wallet h-3.5 w-3.5 text-lime-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1518,"y":1513,"w":10,"h":7,"abs_x":1998,"abs_y":1556}' d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path bis_size='{"x":1518,"y":1514,"w":9,"h":8,"abs_x":1998,"abs_y":1557}' d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
                    Fintech • Minimal
                  </div>
<div bis_size='{"x":1514,"y":1536,"w":556,"h":52,"abs_x":1994,"abs_y":1579}' className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size='{"x":1514,"y":1536,"w":209,"h":52,"abs_x":1994,"abs_y":1579}' className="">
<h3 bis_size='{"x":1514,"y":1536,"w":209,"h":30,"abs_x":1994,"abs_y":1579}' className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Mono Bank
                      </h3>
<p bis_size='{"x":1514,"y":1566,"w":209,"h":22,"abs_x":1994,"abs_y":1609}' className="text-sm md:text-base text-white/70">
                        A calmer way to move money
                      </p>
</div>
<a bis_size='{"x":2025,"y":1555,"w":45,"h":33,"abs_x":2505,"abs_y":1598}' className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size='{"x":2038,"y":1563,"w":18,"h":18,"abs_x":2518,"abs_y":1606}' className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":2044,"y":1568,"w":7,"h":7,"abs_x":2524,"abs_y":1611}' d="M7 7h10v10"></path><path bis_size='{"x":2044,"y":1568,"w":7,"h":7,"abs_x":2524,"abs_y":1611}' d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size='{"x":2163,"y":1236,"w":601,"h":376,"abs_x":2643,"abs_y":1279}' className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="3" style={{transform: 'scale(0.94)', opacity: '0.55'}}>
<img alt="AI chat neon render cover" bis_size='{"x":2163,"y":1236,"w":601,"h":376,"abs_x":2643,"abs_y":1279}' className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_1600w.jpg"/>
<div bis_size='{"x":2163,"y":1236,"w":601,"h":376,"abs_x":2643,"abs_y":1279}' className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size='{"x":2163,"y":1486,"w":601,"h":125,"abs_x":2643,"abs_y":1529}' className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size='{"x":2186,"y":1508,"w":556,"h":18,"abs_x":2666,"abs_y":1551}' className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size='{"x":2186,"y":1508,"w":18,"h":18,"abs_x":2666,"abs_y":1551}' className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size='{"x":2189,"y":1511,"w":13,"h":13,"abs_x":2669,"abs_y":1554}' className="lucide lucide-bot h-3.5 w-3.5 text-lime-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":2193,"y":1513,"w":2,"h":2,"abs_x":2673,"abs_y":1556}' d="M12 8V4H8"></path><rect bis_size='{"x":2191,"y":1515,"w":8,"h":6,"abs_x":2671,"abs_y":1558}' height="12" rx="2" width="16" x="4" y="8"></rect><path bis_size='{"x":2190,"y":1519,"w":1,"h":0,"abs_x":2670,"abs_y":1562}' d="M2 14h2"></path><path bis_size='{"x":2200,"y":1519,"w":1,"h":0,"abs_x":2680,"abs_y":1562}' d="M20 14h2"></path><path bis_size='{"x":2197,"y":1518,"w":0,"h":1,"abs_x":2677,"abs_y":1561}' d="M15 13v2"></path><path bis_size='{"x":2194,"y":1518,"w":0,"h":1,"abs_x":2674,"abs_y":1561}' d="M9 13v2"></path></svg>
</span>
                    AI • Messaging
                  </div>
<div bis_size='{"x":2186,"y":1536,"w":556,"h":52,"abs_x":2666,"abs_y":1579}' className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size='{"x":2186,"y":1536,"w":233,"h":52,"abs_x":2666,"abs_y":1579}'>
<h3 bis_size='{"x":2186,"y":1536,"w":233,"h":30,"abs_x":2666,"abs_y":1579}' className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Neuro Chat
                      </h3>
<p bis_size='{"x":2186,"y":1566,"w":233,"h":22,"abs_x":2666,"abs_y":1609}' className="text-sm md:text-base text-white/70">
                        A multimodal assistant that vibes
                      </p>
</div>
<a bis_size='{"x":2697,"y":1555,"w":45,"h":33,"abs_x":3177,"abs_y":1598}' className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size='{"x":2710,"y":1563,"w":18,"h":18,"abs_x":3190,"abs_y":1606}' className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":2716,"y":1568,"w":7,"h":7,"abs_x":3196,"abs_y":1611}' d="M7 7h10v10"></path><path bis_size='{"x":2716,"y":1568,"w":7,"h":7,"abs_x":3196,"abs_y":1611}' d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article bis_size='{"x":2835,"y":1236,"w":601,"h":376,"abs_x":3315,"abs_y":1279}' className="group relative snap-center shrink-0 w-[82vw] sm:w-[68vw] md:w-[520px] lg:w-[640px] aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40" data-index="4" style={{transform: 'scale(0.94)', opacity: '0.55'}}>
<img alt="Abstract brand 3D cover" bis_size='{"x":2835,"y":1236,"w":601,"h":376,"abs_x":3315,"abs_y":1279}' className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d030941-0aa9-425b-908f-655b1984c946_1600w.jpg"/>
<div bis_size='{"x":2835,"y":1236,"w":601,"h":376,"abs_x":3315,"abs_y":1279}' className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
<div bis_size='{"x":2835,"y":1486,"w":601,"h":125,"abs_x":3315,"abs_y":1529}' className="absolute inset-x-0 bottom-0 p-5 md:p-6">
<div bis_size='{"x":2858,"y":1508,"w":556,"h":18,"abs_x":3338,"abs_y":1551}' className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
<span bis_size='{"x":2858,"y":1508,"w":18,"h":18,"abs_x":3338,"abs_y":1551}' className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 ring-1 ring-lime-300/30">
<svg aria-hidden="true" bis_size='{"x":2861,"y":1511,"w":13,"h":13,"abs_x":3341,"abs_y":1554}' className="lucide lucide-beaker h-3.5 w-3.5 text-lime-300" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":2863,"y":1513,"w":8,"h":0,"abs_x":3343,"abs_y":1556}' d="M4.5 3h15"></path><path bis_size='{"x":2864,"y":1513,"w":6,"h":9,"abs_x":3344,"abs_y":1556}' d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path bis_size='{"x":2864,"y":1519,"w":6,"h":0,"abs_x":3344,"abs_y":1562}' d="M6 14h12"></path></svg>
</span>
                    Brand • 3D System
                  </div>
<div bis_size='{"x":2858,"y":1536,"w":556,"h":52,"abs_x":3338,"abs_y":1579}' className="mt-2.5 flex items-end justify-between gap-3">
<div bis_size='{"x":2858,"y":1536,"w":213,"h":52,"abs_x":3338,"abs_y":1579}'>
<h3 bis_size='{"x":2858,"y":1536,"w":213,"h":30,"abs_x":3338,"abs_y":1579}' className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight">
                        Forma Studio
                      </h3>
<p bis_size='{"x":2858,"y":1566,"w":213,"h":22,"abs_x":3338,"abs_y":1609}' className="text-sm md:text-base text-white/70">
                        Procedural shapes for identity
                      </p>
</div>
<a bis_size='{"x":3369,"y":1555,"w":45,"h":33,"abs_x":3849,"abs_y":1598}' className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition ring-1 ring-white/20 backdrop-blur px-3.5 py-2" href="#">
<svg aria-hidden="true" bis_size='{"x":3382,"y":1563,"w":18,"h":18,"abs_x":3862,"abs_y":1606}' className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":3388,"y":1568,"w":7,"h":7,"abs_x":3868,"abs_y":1611}' d="M7 7h10v10"></path><path bis_size='{"x":3388,"y":1568,"w":7,"h":7,"abs_x":3868,"abs_y":1611}' d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="js-prev absolute left-3 md:left-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m15 18-6-6 6-6"></path></svg>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="js-next absolute right-3 md:right-4 top-1/2 -translate-y-1/2 hidden items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white">
<svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' d="m9 18 6-6-6-6"></path></svg>
</button>
</article>
</div>

<div bis_size='{"x":96,"y":1160,"w":128,"h":488,"abs_x":576,"abs_y":1203}' className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

<div bis_size='{"x":1200,"y":1160,"w":128,"h":488,"abs_x":1680,"abs_y":1203}' className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
</div>
</div>

<div bis_size='{"x":0,"y":940,"w":1425,"h":836,"abs_x":480,"abs_y":983}' className="pointer-events-none absolute inset-0" style="mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);"></div>
</section>
</div>
<style>
      /* hide scrollbar */
      #work-carousel::-webkit-scrollbar{ display:none; }
    </style>


<section bis_size='{"x":0,"y":1872,"w":1425,"h":1356,"abs_x":480,"abs_y":1915}' className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative" id="portfolio">
<div bis_size='{"x":72,"y":1968,"w":1280,"h":1164,"abs_x":552,"abs_y":2011}' className="container lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div bis_size='{"x":104,"y":1968,"w":768,"h":152,"abs_x":584,"abs_y":2011}' className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div bis_size='{"x":104,"y":1968,"w":129,"h":28,"abs_x":584,"abs_y":2011}' className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" bis_size='{"x":116,"y":1975,"w":14,"h":14,"abs_x":596,"abs_y":2018}' className="lucide lucide-gallery-horizontal w-3.5 h-3.5 text-white-400" data-lucide="gallery-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":117,"y":1976,"w":0,"h":10,"abs_x":597,"abs_y":2019}' d="M2 3v18"></path><rect bis_size='{"x":120,"y":1976,"w":7,"h":10,"abs_x":600,"abs_y":2019}' height="18" rx="2" width="12" x="6" y="3"></rect><path bis_size='{"x":129,"y":1976,"w":0,"h":10,"abs_x":609,"abs_y":2019}' d="M22 3v18"></path></svg>
<span bis_size='{"x":138,"y":1974,"w":83,"h":16,"abs_x":618,"abs_y":2017}' className="text-xs text-white/70">Featured Work</span>
</div>
<h2 bis_size='{"x":104,"y":2016,"w":768,"h":60,"abs_x":584,"abs_y":2059}' className="md:text-6xl text-4xl font-semibold text-white tracking-tight mt-5 drop-shadow-xl">
            Selected Projects
          </h2>
<p bis_size='{"x":104,"y":2092,"w":768,"h":28,"abs_x":584,"abs_y":2135}' className="text-base md:text-lg text-white/70 mt-4">
            A curated collection of my best work across various industries and
            styles.
          </p>
</div>

<div bis_size='{"x":104,"y":2160,"w":1216,"h":38,"abs_x":584,"abs_y":2203}' className="flex flex-wrap gap-3 mt-10 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
<button bis_size='{"x":104,"y":2160,"w":89,"h":38,"abs_x":584,"abs_y":2203}' className="filter-btn active px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 transition" data-filter="all">
            All Work
          </button>
<button bis_size='{"x":205,"y":2160,"w":110,"h":38,"abs_x":685,"abs_y":2203}' className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="product">
            Product Viz
          </button>
<button bis_size='{"x":328,"y":2160,"w":106,"h":38,"abs_x":808,"abs_y":2203}' className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="character">
            Characters
          </button>
<button bis_size='{"x":446,"y":2160,"w":123,"h":38,"abs_x":926,"abs_y":2203}' className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="environment">
            Environments
          </button>
<button bis_size='{"x":582,"y":2160,"w":142,"h":38,"abs_x":1062,"abs_y":2203}' className="filter-btn px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition" data-filter="motion">
            Motion Graphics
          </button>
</div>

<div bis_size='{"x":104,"y":2238,"w":1216,"h":802,"abs_x":584,"abs_y":2281}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" id="portfolio-grid">

<div bis_size='{"x":104,"y":2238,"w":389,"h":389,"abs_x":584,"abs_y":2281}' className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="product" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<img alt="Luxury Watch" bis_size='{"x":105,"y":2239,"w":387,"h":387,"abs_x":585,"abs_y":2282}' className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg"/>
<div bis_size='{"x":105,"y":2239,"w":387,"h":387,"abs_x":585,"abs_y":2282}' className="portfolio-overlay">
<h3 bis_size='{"x":129,"y":2518,"w":339,"h":28,"abs_x":609,"abs_y":2561}' className="text-lg font-semibold">Luxury Timepiece</h3>
<p bis_size='{"x":129,"y":2550,"w":339,"h":16,"abs_x":609,"abs_y":2593}' className="text-xs text-white/60 mt-1">
                Product Visualization • 2024
              </p>
<div bis_size='{"x":129,"y":2578,"w":339,"h":24,"abs_x":609,"abs_y":2621}' className="flex gap-2 mt-3">
<span bis_size='{"x":129,"y":2578,"w":78,"h":24,"abs_x":609,"abs_y":2621}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Cinema 4D
                </span>
<span bis_size='{"x":216,"y":2578,"w":56,"h":24,"abs_x":696,"abs_y":2621}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Octane
                </span>
</div>
</div>
</div>

<div bis_size='{"x":517,"y":2238,"w":389,"h":389,"abs_x":997,"abs_y":2281}' className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="environment" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<img alt="Architecture" bis_size='{"x":518,"y":2239,"w":387,"h":387,"abs_x":998,"abs_y":2282}' className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4a67840-05ba-4133-86ca-146954f90c15_800w.webp"/>
<div bis_size='{"x":518,"y":2239,"w":387,"h":387,"abs_x":998,"abs_y":2282}' className="portfolio-overlay">
<h3 bis_size='{"x":542,"y":2518,"w":339,"h":28,"abs_x":1022,"abs_y":2561}' className="text-lg font-semibold">Neo-Tokyo Street</h3>
<p bis_size='{"x":542,"y":2550,"w":339,"h":16,"abs_x":1022,"abs_y":2593}' className="text-xs text-white/60 mt-1">
                Environment Design • 2024
              </p>
<div bis_size='{"x":542,"y":2578,"w":339,"h":24,"abs_x":1022,"abs_y":2621}' className="flex gap-2 mt-3">
<span bis_size='{"x":542,"y":2578,"w":59,"h":24,"abs_x":1022,"abs_y":2621}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Blender
                </span>
<span bis_size='{"x":610,"y":2578,"w":39,"h":24,"abs_x":1090,"abs_y":2621}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  UE5
                </span>
</div>
</div>
</div>

<div bis_size='{"x":931,"y":2238,"w":389,"h":389,"abs_x":1411,"abs_y":2281}' className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="motion" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<img alt="Abstract" bis_size='{"x":932,"y":2239,"w":387,"h":387,"abs_x":1412,"abs_y":2282}' className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c42603b-4f4a-422a-9ece-7460e8a24048_3840w.webp"/>
<div bis_size='{"x":932,"y":2239,"w":387,"h":387,"abs_x":1412,"abs_y":2282}' className="portfolio-overlay">
<h3 bis_size='{"x":956,"y":2518,"w":339,"h":28,"abs_x":1436,"abs_y":2561}' className="text-lg font-semibold">Fluid Dynamics</h3>
<p bis_size='{"x":956,"y":2550,"w":339,"h":16,"abs_x":1436,"abs_y":2593}' className="text-xs text-white/60 mt-1">Motion Graphics • 2023</p>
<div bis_size='{"x":956,"y":2578,"w":339,"h":24,"abs_x":1436,"abs_y":2621}' className="flex gap-2 mt-3">
<span bis_size='{"x":956,"y":2578,"w":59,"h":24,"abs_x":1436,"abs_y":2621}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Houdini
                </span>
<span bis_size='{"x":1023,"y":2578,"w":62,"h":24,"abs_x":1503,"abs_y":2621}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Redshift
                </span>
</div>
</div>
</div>

<div bis_size='{"x":104,"y":2651,"w":389,"h":389,"abs_x":584,"abs_y":2694}' className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="product" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both'}}>
<img alt="Product" bis_size='{"x":105,"y":2652,"w":387,"h":387,"abs_x":585,"abs_y":2695}' className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/673a4f97-d66d-40c8-a04b-44985ef5577b_3840w.jpg"/>
<div bis_size='{"x":105,"y":2652,"w":387,"h":387,"abs_x":585,"abs_y":2695}' className="portfolio-overlay">
<h3 bis_size='{"x":129,"y":2931,"w":339,"h":28,"abs_x":609,"abs_y":2974}' className="text-lg font-semibold">Sci-Fi Interior</h3>
<p bis_size='{"x":129,"y":2963,"w":339,"h":16,"abs_x":609,"abs_y":3006}' className="text-xs text-white/60 mt-1">
                Product Visualization • 2024
              </p>
<div bis_size='{"x":129,"y":2991,"w":339,"h":24,"abs_x":609,"abs_y":3034}' className="flex gap-2 mt-3">
<span bis_size='{"x":129,"y":2991,"w":46,"h":24,"abs_x":609,"abs_y":3034}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Maya
                </span>
<span bis_size='{"x":184,"y":2991,"w":53,"h":24,"abs_x":664,"abs_y":3034}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Arnold
                </span>
</div>
</div>
</div>

<div bis_size='{"x":517,"y":2651,"w":389,"h":389,"abs_x":997,"abs_y":2694}' className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="character" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'}}>
<img alt="Character" bis_size='{"x":518,"y":2652,"w":387,"h":387,"abs_x":998,"abs_y":2695}' className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/541e199d-de17-4765-8fca-71b804cb9fb3_800w.webp"/>
<div bis_size='{"x":518,"y":2652,"w":387,"h":387,"abs_x":998,"abs_y":2695}' className="portfolio-overlay">
<h3 bis_size='{"x":542,"y":2931,"w":339,"h":28,"abs_x":1022,"abs_y":2974}' className="text-lg font-semibold">Cyber Warrior</h3>
<p bis_size='{"x":542,"y":2963,"w":339,"h":16,"abs_x":1022,"abs_y":3006}' className="text-xs text-white/60 mt-1">Character Design • 2023</p>
<div bis_size='{"x":542,"y":2991,"w":339,"h":24,"abs_x":1022,"abs_y":3034}' className="flex gap-2 mt-3">
<span bis_size='{"x":542,"y":2991,"w":56,"h":24,"abs_x":1022,"abs_y":3034}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  ZBrush
                </span>
<span bis_size='{"x":607,"y":2991,"w":75,"h":24,"abs_x":1087,"abs_y":3034}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Marvelous
                </span>
</div>
</div>
</div>

<div bis_size='{"x":931,"y":2651,"w":389,"h":389,"abs_x":1411,"abs_y":2694}' className="portfolio-item rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-on-scroll" data-category="environment" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.45s both'}}>
<img alt="Environment" bis_size='{"x":932,"y":2652,"w":387,"h":387,"abs_x":1412,"abs_y":2695}' className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4517a7d-638f-43bf-87fb-315a5f0690ff_3840w.webp"/>
<div bis_size='{"x":932,"y":2652,"w":387,"h":387,"abs_x":1412,"abs_y":2695}' className="portfolio-overlay">
<h3 bis_size='{"x":956,"y":2931,"w":339,"h":28,"abs_x":1436,"abs_y":2974}' className="text-lg font-semibold">Premium Headphones</h3>
<p bis_size='{"x":956,"y":2963,"w":339,"h":16,"abs_x":1436,"abs_y":3006}' className="text-xs text-white/60 mt-1">
                Environment Design • 2024
              </p>
<div bis_size='{"x":956,"y":2991,"w":339,"h":24,"abs_x":1436,"abs_y":3034}' className="flex gap-2 mt-3">
<span bis_size='{"x":956,"y":2991,"w":59,"h":24,"abs_x":1436,"abs_y":3034}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Blender
                </span>
<span bis_size='{"x":1023,"y":2991,"w":54,"h":24,"abs_x":1503,"abs_y":3034}' className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                  Cycles
                </span>
</div>
</div>
</div>
</div>
<div bis_size='{"x":104,"y":3088,"w":1216,"h":44,"abs_x":584,"abs_y":3131}' className="text-center mt-12 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.5s both'}}>
<a bis_size='{"x":616,"y":3088,"w":192,"h":44,"abs_x":1096,"abs_y":3131}' className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#contact">
            View Full Portfolio
            <svg aria-hidden="true" bis_size='{"x":768,"y":3102,"w":16,"h":16,"abs_x":1248,"abs_y":3145}' className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":778,"y":3104,"w":4,"h":4,"abs_x":1258,"abs_y":3147}' d="M15 3h6v6"></path><path bis_size='{"x":775,"y":3104,"w":7,"h":7,"abs_x":1255,"abs_y":3147}' d="M10 14 21 3"></path><path bis_size='{"x":770,"y":3106,"w":10,"h":10,"abs_x":1250,"abs_y":3149}' d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3364,"w":1425,"h":1020,"abs_x":480,"abs_y":3407}' className="z-10 xl:py-24 bg-center mt-24 pt-12 pb-12 relative" id="about">
<div bis_size='{"x":72,"y":3460,"w":1280,"h":828,"abs_x":552,"abs_y":3503}' className="max-w-7xl mx-auto px-6 lg:px-8">
<div bis_size='{"x":104,"y":3460,"w":1216,"h":828,"abs_x":584,"abs_y":3503}' className="grid gap-10 lg:grid-cols-12 items-start">

<div bis_size='{"x":104,"y":3460,"w":483,"h":600,"abs_x":584,"abs_y":3503}' className="lg:col-span-5 relative overflow-hidden rounded-2xl" style={{height: '600px'}}>
<div bis_size='{"x":104,"y":3460,"w":483,"h":600,"abs_x":584,"abs_y":3503}' className="about-image-container absolute inset-0">

<img alt="Alex Rivera - Image 1" bis_size='{"x":104,"y":3460,"w":483,"h":600,"abs_x":584,"abs_y":3503}' className="about-image active aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c4619c1-2023-4aaf-bcf7-6e3d8c1e2500_1600w.png"/>
<img alt="Alex Rivera - Image 2" bis_size='{"x":104,"y":3484,"w":483,"h":600,"abs_x":584,"abs_y":3527}' className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70bb19b3-d51f-47a2-8020-6261061a6a14_3840w.jpg"/>
<img alt="Alex Rivera - Image 3" bis_size='{"x":104,"y":3484,"w":483,"h":600,"abs_x":584,"abs_y":3527}' className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b854164-e5f6-4f39-a78c-f75ccbc5ff69_3840w.jpg"/>
<img alt="Alex Rivera - Image 4" bis_size='{"x":104,"y":3484,"w":483,"h":600,"abs_x":584,"abs_y":3527}' className="about-image aspect-square w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04545374-057d-4527-9043-c2ee9b0d7f09_1600w.webp"/>
</div>
</div>

<div bis_size='{"x":627,"y":3460,"w":692,"h":828,"abs_x":1107,"abs_y":3503}' className="lg:col-span-7">

<div bis_size='{"x":627,"y":3460,"w":692,"h":600,"abs_x":1107,"abs_y":3503}' className="h-[600px] overflow-y-auto snap-y snap-mandatory pr-1" id="aboutScroll">

<article bis_size='{"x":627,"y":3460,"w":673,"h":600,"abs_x":1107,"abs_y":3503}' className="about-content-item active snap-start min-h-[600px] flex items-center">
<div bis_size='{"x":627,"y":3572,"w":673,"h":376,"abs_x":1107,"abs_y":3615}' className="">
<div bis_size='{"x":627,"y":3572,"w":79,"h":28,"abs_x":1107,"abs_y":3615}' className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size='{"x":639,"y":3578,"w":55,"h":16,"abs_x":1119,"abs_y":3621}' className="text-xs text-white/70">About Me</span>
</div>
<h2 bis_size='{"x":627,"y":3620,"w":673,"h":120,"abs_x":1107,"abs_y":3663}' className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Creating visual stories through 3D art
                  </h2>
<p bis_size='{"x":627,"y":3764,"w":673,"h":84,"abs_x":1107,"abs_y":3807}' className="text-base md:text-lg text-white/70 mt-6">
                    I'm Alex Rivera, a 3D artist and CGI specialist with over 8
                    years of experience creating photorealistic renders and
                    immersive digital experiences. My passion lies in pushing
                    the boundaries of what's possible with 3D technology.
                  </p>
<p bis_size='{"x":627,"y":3864,"w":673,"h":84,"abs_x":1107,"abs_y":3907}' className="text-base md:text-lg text-white/70 mt-4">
                    From product visualization to character design, I bring
                    technical expertise and creative vision to every project.
                    I've worked with brands like Nike, Tesla, and Sony,
                    delivering work that drives results.
                  </p>
</div>
</article>

<article bis_size='{"x":627,"y":4068,"w":673,"h":600,"abs_x":1107,"abs_y":4111}' className="about-content-item snap-start min-h-[600px] flex items-center">
<div bis_size='{"x":627,"y":4208,"w":673,"h":320,"abs_x":1107,"abs_y":4251}'>
<div bis_size='{"x":627,"y":4208,"w":132,"h":28,"abs_x":1107,"abs_y":4251}' className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size='{"x":639,"y":4214,"w":108,"h":16,"abs_x":1119,"abs_y":4257}' className="text-xs text-white/70">
                      Product Excellence
                    </span>
</div>
<h2 bis_size='{"x":627,"y":4256,"w":673,"h":120,"abs_x":1107,"abs_y":4299}' className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Bringing products to life with precision
                  </h2>
<p bis_size='{"x":627,"y":4400,"w":673,"h":56,"abs_x":1107,"abs_y":4443}' className="text-base md:text-lg text-white/70 mt-6">
                    Photorealistic product visualization that elevates brands
                    and drives sales. Meticulous materials, lighting, and
                    composition.
                  </p>
<p bis_size='{"x":627,"y":4472,"w":673,"h":56,"abs_x":1107,"abs_y":4515}' className="text-base md:text-lg text-white/70 mt-4">
                    Technical mastery + storytelling so your products look their
                    best across all channels.
                  </p>
</div>
</article>

<article bis_size='{"x":627,"y":4668,"w":673,"h":600,"abs_x":1107,"abs_y":4711}' className="about-content-item snap-start min-h-[600px] flex items-center">
<div bis_size='{"x":627,"y":4808,"w":673,"h":320,"abs_x":1107,"abs_y":4851}'>
<div bis_size='{"x":627,"y":4808,"w":122,"h":28,"abs_x":1107,"abs_y":4851}' className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size='{"x":639,"y":4814,"w":98,"h":16,"abs_x":1119,"abs_y":4857}' className="text-xs text-white/70">Character Design</span>
</div>
<h2 bis_size='{"x":627,"y":4856,"w":673,"h":120,"abs_x":1107,"abs_y":4899}' className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Characters that captivate and inspire
                  </h2>
<p bis_size='{"x":627,"y":5000,"w":673,"h":56,"abs_x":1107,"abs_y":5043}' className="text-base md:text-lg text-white/70 mt-6">
                    From concept to rig, memorable characters for games, film,
                    and animation—with clean topology and expressive motion.
                  </p>
<p bis_size='{"x":627,"y":5072,"w":673,"h":56,"abs_x":1107,"abs_y":5115}' className="text-base md:text-lg text-white/70 mt-4">
                    ZBrush, Marvelous Designer, Substance—production-ready
                    assets that meet industry standards.
                  </p>
</div>
</article>

<article bis_size='{"x":627,"y":5268,"w":673,"h":600,"abs_x":1107,"abs_y":5311}' className="about-content-item snap-start min-h-[600px] flex items-center">
<div bis_size='{"x":627,"y":5422,"w":673,"h":292,"abs_x":1107,"abs_y":5465}'>
<div bis_size='{"x":627,"y":5422,"w":134,"h":28,"abs_x":1107,"abs_y":5465}' className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 backdrop-blur">
<span bis_size='{"x":639,"y":5428,"w":110,"h":16,"abs_x":1119,"abs_y":5471}' className="text-xs text-white/70">
                      Motion &amp; Animation
                    </span>
</div>
<h2 bis_size='{"x":627,"y":5470,"w":673,"h":120,"abs_x":1107,"abs_y":5513}' className="mt-5 text-4xl md:text-6xl text-white drop-shadow-xl font-semibold tracking-tight">
                    Dynamic motion that tells your story
                  </h2>
<p bis_size='{"x":627,"y":5614,"w":673,"h":56,"abs_x":1107,"abs_y":5657}' className="text-base md:text-lg text-white/70 mt-6">
                    Motion graphics and 3D animation that captivate—fluid sims
                    to kinetic typography.
                  </p>
<p bis_size='{"x":627,"y":5686,"w":673,"h":28,"abs_x":1107,"abs_y":5729}' className="text-base md:text-lg text-white/70 mt-4">
                    Houdini, After Effects, Cinema 4D—cinematic movement for
                    modern brands.
                  </p>
</div>
</article>
</div>

<div bis_size='{"x":627,"y":4092,"w":692,"h":120,"abs_x":1107,"abs_y":4135}' className="grid grid-cols-2 gap-6 mt-8">
<div bis_size='{"x":627,"y":4092,"w":334,"h":120,"abs_x":1107,"abs_y":4135}' className="rounded-xl border-gradient before:rounded-xl bg-white/5 p-6">
<div bis_size='{"x":651,"y":4116,"w":286,"h":40,"abs_x":1131,"abs_y":4159}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":651,"y":4116,"w":40,"h":40,"abs_x":1131,"abs_y":4159}' className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<svg bis_size='{"x":661,"y":4126,"w":20,"h":20,"abs_x":1141,"abs_y":4169}' className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":668,"y":4139,"w":9,"h":9,"abs_x":1148,"abs_y":4182}' d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle bis_size='{"x":667,"y":4128,"w":12,"h":12,"abs_x":1147,"abs_y":4171}' cx="12" cy="8" r="6"></circle>
</svg>
</div>
<h3 bis_size='{"x":703,"y":4122,"w":77,"h":28,"abs_x":1183,"abs_y":4165}' className="text-lg font-semibold">8+ Years</h3>
</div>
<p bis_size='{"x":651,"y":4168,"w":286,"h":20,"abs_x":1131,"abs_y":4211}' className="text-sm text-white/60">
                  Professional experience in 3D art and CGI
                </p>
</div>
<div bis_size='{"x":986,"y":4092,"w":334,"h":120,"abs_x":1466,"abs_y":4135}' className="overflow-hidden border-gradient before:rounded-2xl bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
<div bis_size='{"x":1010,"y":4116,"w":286,"h":40,"abs_x":1490,"abs_y":4159}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1010,"y":4116,"w":40,"h":40,"abs_x":1490,"abs_y":4159}' className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-gradient before:rounded-lg">
<svg bis_size='{"x":1020,"y":4126,"w":20,"h":20,"abs_x":1500,"abs_y":4169}' className="w-5 h-5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1027,"y":4141,"w":3,"h":7,"abs_x":1507,"abs_y":4184}' d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path bis_size='{"x":1034,"y":4141,"w":3,"h":7,"abs_x":1514,"abs_y":4184}' d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path bis_size='{"x":1038,"y":4130,"w":4,"h":5,"abs_x":1518,"abs_y":4173}' d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path bis_size='{"x":1024,"y":4148,"w":16,"h":0,"abs_x":1504,"abs_y":4191}' d="M4 22h16"></path>
<path bis_size='{"x":1026,"y":4128,"w":12,"h":13,"abs_x":1506,"abs_y":4171}' d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path bis_size='{"x":1022,"y":4130,"w":4,"h":5,"abs_x":1502,"abs_y":4173}' d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<h3 bis_size='{"x":1062,"y":4122,"w":88,"h":28,"abs_x":1542,"abs_y":4165}' className="text-lg font-semibold">12 Awards</h3>
</div>
<p bis_size='{"x":1010,"y":4168,"w":286,"h":20,"abs_x":1490,"abs_y":4211}' className="text-sm text-white/60">
                  Industry recognition and accolades
                </p>
</div>
</div>
<div bis_size='{"x":627,"y":4244,"w":692,"h":44,"abs_x":1107,"abs_y":4287}' className="mt-8">
<button bis_size='{"x":627,"y":4244,"w":140,"h":44,"abs_x":1107,"abs_y":4287}' className="group inline-flex min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 relative backdrop-blur-xl items-center justify-center">
<span bis_size='{"x":655,"y":4256,"w":83,"h":20,"abs_x":1135,"abs_y":4299}'>Watch demo</span>
<span aria-hidden="true" bis_size='{"x":648,"y":4287,"w":98,"h":1,"abs_x":1128,"abs_y":4330}' className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
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

<section bis_label="style" bis_size='{"x":0,"y":4480,"w":1425,"h":884,"abs_x":480,"abs_y":4523}' className="z-10 xl:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp)] bg-cover mt-24 pt-12 pb-12 relative" id="services" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_3840w.webp\')'}}>
<div bis_size='{"x":72,"y":4576,"w":1280,"h":692,"abs_x":552,"abs_y":4619}' className="max-w-7xl mx-auto px-6 lg:px-8">
<div bis_size='{"x":104,"y":4576,"w":768,"h":152,"abs_x":584,"abs_y":4619}' className="max-w-3xl animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div bis_size='{"x":104,"y":4576,"w":95,"h":28,"abs_x":584,"abs_y":4619}' className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center">
<svg aria-hidden="true" bis_size='{"x":116,"y":4583,"w":14,"h":14,"abs_x":596,"abs_y":4626}' className="lucide lucide-box w-3.5 h-3.5 text-white-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":118,"y":4584,"w":10,"h":11,"abs_x":598,"abs_y":4627}' d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path bis_size='{"x":118,"y":4587,"w":10,"h":2,"abs_x":598,"abs_y":4630}' d="m3.3 7 8.7 5 8.7-5"></path><path bis_size='{"x":123,"y":4590,"w":0,"h":5,"abs_x":603,"abs_y":4633}' d="M12 22V12"></path></svg>
<span bis_size='{"x":138,"y":4582,"w":49,"h":16,"abs_x":618,"abs_y":4625}' className="text-xs text-white/70">Services</span>
</div>
<h2 bis_size='{"x":104,"y":4624,"w":768,"h":60,"abs_x":584,"abs_y":4667}' className="text-4xl md:text-6xl text-white mt-5 drop-shadow-xl font-semibold tracking-tight">
            What I offer
          </h2>
<p bis_size='{"x":104,"y":4700,"w":768,"h":28,"abs_x":584,"abs_y":4743}' className="text-base md:text-lg text-white/70 mt-4">
            Comprehensive 3D solutions tailored to your needs and vision.
          </p>
</div>
<div bis_size='{"x":104,"y":4768,"w":1216,"h":500,"abs_x":584,"abs_y":4811}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<div bis_size='{"x":104,"y":4768,"w":389,"h":248,"abs_x":584,"abs_y":4811}' className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div bis_size='{"x":128,"y":4792,"w":48,"h":48,"abs_x":608,"abs_y":4835}' className="flex border-gradient before:rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size='{"x":140,"y":4804,"w":24,"h":24,"abs_x":620,"abs_y":4847}' className="lucide lucide-package w-6 h-6 text-violet-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":143,"y":4806,"w":18,"h":19,"abs_x":623,"abs_y":4849}' d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path bis_size='{"x":152,"y":4816,"w":0,"h":10,"abs_x":632,"abs_y":4859}' d="M12 22V12"></path><polyline bis_size='{"x":143,"y":4811,"w":17,"h":5,"abs_x":623,"abs_y":4854}' points="3.29 7 12 12 20.71 7"></polyline><path bis_size='{"x":148,"y":4808,"w":9,"h":5,"abs_x":628,"abs_y":4851}' d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 bis_size='{"x":128,"y":4856,"w":341,"h":28,"abs_x":608,"abs_y":4899}' className="text-xl font-semibold text-white tracking-tight">
              Product Visualization
            </h3>
<p bis_size='{"x":128,"y":4892,"w":341,"h":60,"abs_x":608,"abs_y":4935}' className="mt-2 text-sm text-white/70">
              Photorealistic renders that showcase your products in the best
              light. Perfect for marketing, e-commerce, and presentations.
            </p>
<div bis_size='{"x":128,"y":4968,"w":341,"h":24,"abs_x":608,"abs_y":5011}' className="mt-4 flex flex-wrap gap-2">
<span bis_size='{"x":128,"y":4968,"w":88,"h":24,"abs_x":608,"abs_y":5011}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                E-commerce
              </span>
<span bis_size='{"x":225,"y":4968,"w":80,"h":24,"abs_x":705,"abs_y":5011}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Advertising
              </span>
<span bis_size='{"x":313,"y":4968,"w":75,"h":24,"abs_x":793,"abs_y":5011}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Packaging
              </span>
</div>
</div>
<div bis_size='{"x":517,"y":4768,"w":389,"h":248,"abs_x":997,"abs_y":4811}' className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div bis_size='{"x":541,"y":4792,"w":48,"h":48,"abs_x":1021,"abs_y":4835}' className="flex border-gradient before:rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size='{"x":553,"y":4804,"w":24,"h":24,"abs_x":1033,"abs_y":4847}' className="lucide lucide-user-circle w-6 h-6 text-cyan-400" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":555,"y":4806,"w":20,"h":20,"abs_x":1035,"abs_y":4849}' cx="12" cy="12" r="10"></circle><circle bis_size='{"x":562,"y":4811,"w":6,"h":6,"abs_x":1042,"abs_y":4854}' cx="12" cy="10" r="3"></circle><path bis_size='{"x":560,"y":4821,"w":10,"h":3,"abs_x":1040,"abs_y":4864}' d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
</div>
<h3 bis_size='{"x":541,"y":4856,"w":341,"h":28,"abs_x":1021,"abs_y":4899}' className="text-xl font-semibold text-white tracking-tight">
              Character Design
            </h3>
<p bis_size='{"x":541,"y":4892,"w":341,"h":40,"abs_x":1021,"abs_y":4935}' className="mt-2 text-sm text-white/70">
              Bring characters to life with detailed modeling, texturing, and
              rigging. From concept to final render.
            </p>
<div bis_size='{"x":541,"y":4948,"w":341,"h":24,"abs_x":1021,"abs_y":4991}' className="mt-4 flex flex-wrap gap-2">
<span bis_size='{"x":541,"y":4948,"w":55,"h":24,"abs_x":1021,"abs_y":4991}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Games
              </span>
<span bis_size='{"x":605,"y":4948,"w":72,"h":24,"abs_x":1085,"abs_y":4991}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Animation
              </span>
<span bis_size='{"x":686,"y":4948,"w":39,"h":24,"abs_x":1166,"abs_y":4991}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Film
              </span>
</div>
</div>
<div bis_size='{"x":931,"y":4768,"w":389,"h":248,"abs_x":1411,"abs_y":4811}' className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div bis_size='{"x":955,"y":4792,"w":48,"h":48,"abs_x":1435,"abs_y":4835}' className="flex border-gradient before:rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size='{"x":967,"y":4804,"w":24,"h":24,"abs_x":1447,"abs_y":4847}' className="lucide lucide-building w-6 h-6 text-emerald-400" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":979,"y":4814,"w":0,"h":0,"abs_x":1459,"abs_y":4857}' d="M12 10h.01"></path><path bis_size='{"x":979,"y":4818,"w":0,"h":0,"abs_x":1459,"abs_y":4861}' d="M12 14h.01"></path><path bis_size='{"x":979,"y":4810,"w":0,"h":0,"abs_x":1459,"abs_y":4853}' d="M12 6h.01"></path><path bis_size='{"x":983,"y":4814,"w":0,"h":0,"abs_x":1463,"abs_y":4857}' d="M16 10h.01"></path><path bis_size='{"x":983,"y":4818,"w":0,"h":0,"abs_x":1463,"abs_y":4861}' d="M16 14h.01"></path><path bis_size='{"x":983,"y":4810,"w":0,"h":0,"abs_x":1463,"abs_y":4853}' d="M16 6h.01"></path><path bis_size='{"x":975,"y":4814,"w":0,"h":0,"abs_x":1455,"abs_y":4857}' d="M8 10h.01"></path><path bis_size='{"x":975,"y":4818,"w":0,"h":0,"abs_x":1455,"abs_y":4861}' d="M8 14h.01"></path><path bis_size='{"x":975,"y":4810,"w":0,"h":0,"abs_x":1455,"abs_y":4853}' d="M8 6h.01"></path><path bis_size='{"x":976,"y":4822,"w":6,"h":4,"abs_x":1456,"abs_y":4865}' d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect bis_size='{"x":971,"y":4806,"w":16,"h":20,"abs_x":1451,"abs_y":4849}' height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<h3 bis_size='{"x":955,"y":4856,"w":341,"h":28,"abs_x":1435,"abs_y":4899}' className="text-xl font-semibold text-white tracking-tight">
              Architectural Viz
            </h3>
<p bis_size='{"x":955,"y":4892,"w":341,"h":40,"abs_x":1435,"abs_y":4935}' className="mt-2 text-sm text-white/70">
              Stunning architectural visualizations for real estate, interior
              design, and development projects.
            </p>
<div bis_size='{"x":955,"y":4948,"w":341,"h":24,"abs_x":1435,"abs_y":4991}' className="mt-4 flex flex-wrap gap-2">
<span bis_size='{"x":955,"y":4948,"w":78,"h":24,"abs_x":1435,"abs_y":4991}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Real Estate
              </span>
<span bis_size='{"x":1041,"y":4948,"w":56,"h":24,"abs_x":1521,"abs_y":4991}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Interior
              </span>
<span bis_size='{"x":1106,"y":4948,"w":60,"h":24,"abs_x":1586,"abs_y":4991}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Exterior
              </span>
</div>
</div>
<div bis_size='{"x":104,"y":5040,"w":389,"h":228,"abs_x":584,"abs_y":5083}' className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.35s both'}}>
<div bis_size='{"x":128,"y":5064,"w":48,"h":48,"abs_x":608,"abs_y":5107}' className="flex border-gradient before:rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size='{"x":140,"y":5076,"w":24,"h":24,"abs_x":620,"abs_y":5119}' className="lucide lucide-play-circle w-6 h-6 text-rose-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":149,"y":5084,"w":7,"h":8,"abs_x":629,"abs_y":5127}' d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle bis_size='{"x":142,"y":5078,"w":20,"h":20,"abs_x":622,"abs_y":5121}' cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 bis_size='{"x":128,"y":5128,"w":341,"h":28,"abs_x":608,"abs_y":5171}' className="text-xl font-semibold text-white tracking-tight">
              Motion Graphics
            </h3>
<p bis_size='{"x":128,"y":5164,"w":341,"h":40,"abs_x":608,"abs_y":5207}' className="mt-2 text-sm text-white/70">
              Dynamic 3D animations and motion graphics that capture attention
              and tell compelling stories.
            </p>
<div bis_size='{"x":128,"y":5220,"w":341,"h":24,"abs_x":608,"abs_y":5263}' className="mt-4 flex flex-wrap gap-2">
<span bis_size='{"x":128,"y":5220,"w":37,"h":24,"abs_x":608,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Ads
              </span>
<span bis_size='{"x":174,"y":5220,"w":50,"h":24,"abs_x":654,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Social
              </span>
<span bis_size='{"x":232,"y":5220,"w":74,"h":24,"abs_x":712,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Explainers
              </span>
</div>
</div>
<div bis_size='{"x":517,"y":5040,"w":389,"h":228,"abs_x":997,"abs_y":5083}' className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.4s both'}}>
<div bis_size='{"x":541,"y":5064,"w":48,"h":48,"abs_x":1021,"abs_y":5107}' className="flex border-gradient before:rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size='{"x":553,"y":5076,"w":24,"h":24,"abs_x":1033,"abs_y":5119}' className="lucide lucide-globe w-6 h-6 text-amber-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":555,"y":5078,"w":20,"h":20,"abs_x":1035,"abs_y":5121}' cx="12" cy="12" r="10"></circle><path bis_size='{"x":561,"y":5078,"w":8,"h":20,"abs_x":1041,"abs_y":5121}' d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path bis_size='{"x":555,"y":5088,"w":20,"h":0,"abs_x":1035,"abs_y":5131}' d="M2 12h20"></path></svg>
</div>
<h3 bis_size='{"x":541,"y":5128,"w":341,"h":28,"abs_x":1021,"abs_y":5171}' className="text-xl font-semibold text-white tracking-tight">
              Environment Design
            </h3>
<p bis_size='{"x":541,"y":5164,"w":341,"h":40,"abs_x":1021,"abs_y":5207}' className="mt-2 text-sm text-white/70">
              Immersive 3D environments and worlds for games, VR experiences,
              and film production.
            </p>
<div bis_size='{"x":541,"y":5220,"w":341,"h":24,"abs_x":1021,"abs_y":5263}' className="mt-4 flex flex-wrap gap-2">
<span bis_size='{"x":541,"y":5220,"w":52,"h":24,"abs_x":1021,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                VR/AR
              </span>
<span bis_size='{"x":601,"y":5220,"w":55,"h":24,"abs_x":1081,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Games
              </span>
<span bis_size='{"x":665,"y":5220,"w":75,"h":24,"abs_x":1145,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Metaverse
              </span>
</div>
</div>
<div bis_size='{"x":931,"y":5040,"w":389,"h":228,"abs_x":1411,"abs_y":5083}' className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl p-6 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.45s both'}}>
<div bis_size='{"x":955,"y":5064,"w":48,"h":48,"abs_x":1435,"abs_y":5107}' className="flex border-gradient before:rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-12 h-12 rounded-lg items-center justify-center mb-4">
<svg aria-hidden="true" bis_size='{"x":967,"y":5076,"w":24,"h":24,"abs_x":1447,"abs_y":5119}' className="lucide lucide-wand-2 w-6 h-6 text-indigo-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":969,"y":5078,"w":20,"h":20,"abs_x":1449,"abs_y":5121}' d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path bis_size='{"x":981,"y":5083,"w":3,"h":3,"abs_x":1461,"abs_y":5126}' d="m14 7 3 3"></path><path bis_size='{"x":972,"y":5082,"w":0,"h":4,"abs_x":1452,"abs_y":5125}' d="M5 6v4"></path><path bis_size='{"x":986,"y":5090,"w":0,"h":4,"abs_x":1466,"abs_y":5133}' d="M19 14v4"></path><path bis_size='{"x":977,"y":5078,"w":0,"h":2,"abs_x":1457,"abs_y":5121}' d="M10 2v2"></path><path bis_size='{"x":970,"y":5084,"w":4,"h":0,"abs_x":1450,"abs_y":5127}' d="M7 8H3"></path><path bis_size='{"x":984,"y":5092,"w":4,"h":0,"abs_x":1464,"abs_y":5135}' d="M21 16h-4"></path><path bis_size='{"x":976,"y":5079,"w":2,"h":0,"abs_x":1456,"abs_y":5122}' d="M11 3H9"></path></svg>
</div>
<h3 bis_size='{"x":955,"y":5128,"w":341,"h":28,"abs_x":1435,"abs_y":5171}' className="text-xl font-semibold text-white tracking-tight">
              Custom Solutions
            </h3>
<p bis_size='{"x":955,"y":5164,"w":341,"h":40,"abs_x":1435,"abs_y":5207}' className="mt-2 text-sm text-white/70">
              Unique 3D projects tailored to your specific needs. Let's discuss
              your vision.
            </p>
<div bis_size='{"x":955,"y":5220,"w":341,"h":24,"abs_x":1435,"abs_y":5263}' className="mt-4 flex flex-wrap gap-2">
<span bis_size='{"x":955,"y":5220,"w":76,"h":24,"abs_x":1435,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Consulting
              </span>
<span bis_size='{"x":1040,"y":5220,"w":61,"h":24,"abs_x":1520,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Training
              </span>
<span bis_size='{"x":1109,"y":5220,"w":80,"h":24,"abs_x":1589,"abs_y":5263}' className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                Workshops
              </span>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5364,"w":1425,"h":983,"abs_x":480,"abs_y":5407}' className="pt-24 pb-24 relative" id="process">
<div bis_size='{"x":200,"y":5460,"w":1024,"h":791,"abs_x":680,"abs_y":5503}' className="lg:px-8 max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div bis_size='{"x":232,"y":5460,"w":960,"h":160,"abs_x":712,"abs_y":5503}' className="text-center mb-16 animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div bis_size='{"x":650,"y":5460,"w":123,"h":32,"abs_x":1130,"abs_y":5503}' className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border-gradient before:rounded-full rounded-full px-4 py-2 mb-6">
<svg aria-hidden="true" bis_size='{"x":666,"y":5468,"w":16,"h":16,"abs_x":1146,"abs_y":5511}' className="lucide lucide-workflow w-4 h-4 text-white-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":668,"y":5470,"w":5,"h":5,"abs_x":1148,"abs_y":5513}' height="8" rx="2" width="8" x="3" y="3"></rect><path bis_size='{"x":671,"y":5476,"w":4,"h":4,"abs_x":1151,"abs_y":5519}' d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect bis_size='{"x":675,"y":5477,"w":5,"h":5,"abs_x":1155,"abs_y":5520}' height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span bis_size='{"x":690,"y":5468,"w":67,"h":16,"abs_x":1170,"abs_y":5511}' className="text-xs text-white/70 font-medium">My Process</span>
</div>
<h2 bis_size='{"x":232,"y":5516,"w":960,"h":60,"abs_x":712,"abs_y":5559}' className="text-4xl md:text-6xl font-semibold tracking-tight">
            From concept to reality
          </h2>
<p bis_size='{"x":232,"y":5592,"w":960,"h":28,"abs_x":712,"abs_y":5635}' className="text-white/70 mt-4 text-lg">
            A proven workflow that delivers exceptional results
          </p>
</div>
<div bis_size='{"x":232,"y":5684,"w":960,"h":567,"abs_x":712,"abs_y":5727}' className="relative">

<div bis_size='{"x":252,"y":5732,"w":1,"h":471,"abs_x":732,"abs_y":5775}' className="absolute left-5 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500 to-cyan-500/0 hidden md:block"></div>
<div bis_size='{"x":232,"y":5684,"w":960,"h":567,"abs_x":712,"abs_y":5727}' className="space-y-6">

<div bis_size='{"x":232,"y":5684,"w":960,"h":129,"abs_x":712,"abs_y":5727}' className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.15s both'}}>
<div bis_size='{"x":232,"y":5684,"w":960,"h":129,"abs_x":712,"abs_y":5727}' className="flex gap-5 items-start">

<div bis_size='{"x":232,"y":5684,"w":40,"h":40,"abs_x":712,"abs_y":5727}' className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size='{"x":249,"y":5692,"w":6,"h":24,"abs_x":729,"abs_y":5735}' className="text-base font-bold">1</span>
</div>
<div bis_size='{"x":292,"y":5684,"w":900,"h":129,"abs_x":772,"abs_y":5727}' className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size='{"x":316,"y":5708,"w":852,"h":28,"abs_x":796,"abs_y":5751}' className="text-xl font-semibold tracking-tight mb-2">
                    Discovery &amp; Briefing
                  </h3>
<p bis_size='{"x":316,"y":5744,"w":852,"h":45,"abs_x":796,"abs_y":5787}' className="text-white/60 leading-relaxed text-sm">
                    We start with a detailed discussion about your project
                    goals, target audience, and vision. I'll ask questions to
                    understand your brand and requirements fully.
                  </p>
</div>
</div>
</div>

<div bis_size='{"x":232,"y":5838,"w":960,"h":129,"abs_x":712,"abs_y":5881}' className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.2s both'}}>
<div bis_size='{"x":232,"y":5838,"w":960,"h":129,"abs_x":712,"abs_y":5881}' className="flex gap-5 items-start">
<div bis_size='{"x":232,"y":5838,"w":40,"h":40,"abs_x":712,"abs_y":5881}' className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size='{"x":247,"y":5846,"w":10,"h":24,"abs_x":727,"abs_y":5889}' className="text-base font-bold">2</span>
</div>
<div bis_size='{"x":292,"y":5838,"w":900,"h":129,"abs_x":772,"abs_y":5881}' className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size='{"x":316,"y":5862,"w":852,"h":28,"abs_x":796,"abs_y":5905}' className="text-xl font-semibold tracking-tight mb-2">
                    Concept &amp; Modeling
                  </h3>
<p bis_size='{"x":316,"y":5898,"w":852,"h":45,"abs_x":796,"abs_y":5941}' className="text-white/60 leading-relaxed text-sm">
                    I create initial concepts and 3D models based on your brief.
                    You'll receive previews to ensure we're aligned on the
                    direction before moving forward.
                  </p>
</div>
</div>
</div>

<div bis_size='{"x":232,"y":5991,"w":960,"h":129,"abs_x":712,"abs_y":6034}' className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.25s both'}}>
<div bis_size='{"x":232,"y":5991,"w":960,"h":129,"abs_x":712,"abs_y":6034}' className="flex gap-5 items-start">
<div bis_size='{"x":232,"y":5991,"w":40,"h":40,"abs_x":712,"abs_y":6034}' className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size='{"x":247,"y":5999,"w":10,"h":24,"abs_x":727,"abs_y":6042}' className="text-base font-bold">3</span>
</div>
<div bis_size='{"x":292,"y":5991,"w":900,"h":129,"abs_x":772,"abs_y":6034}' className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size='{"x":316,"y":6015,"w":852,"h":28,"abs_x":796,"abs_y":6058}' className="text-xl font-semibold tracking-tight mb-2">
                    Texturing &amp; Lighting
                  </h3>
<p bis_size='{"x":316,"y":6051,"w":852,"h":45,"abs_x":796,"abs_y":6094}' className="text-white/60 leading-relaxed text-sm">
                    Adding materials, textures, and lighting setups to bring
                    realism to the models. This stage transforms basic geometry
                    into photorealistic assets.
                  </p>
</div>
</div>
</div>

<div bis_size='{"x":232,"y":6145,"w":960,"h":106,"abs_x":712,"abs_y":6188}' className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.3s both'}}>
<div bis_size='{"x":232,"y":6145,"w":960,"h":106,"abs_x":712,"abs_y":6188}' className="flex gap-5 items-start">
<div bis_size='{"x":232,"y":6145,"w":40,"h":40,"abs_x":712,"abs_y":6188}' className="flex-shrink-0 flex z-10 bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full relative items-center justify-center">
<span bis_size='{"x":247,"y":6153,"w":10,"h":24,"abs_x":727,"abs_y":6196}' className="text-base font-bold">4</span>
</div>
<div bis_size='{"x":292,"y":6145,"w":900,"h":106,"abs_x":772,"abs_y":6188}' className="flex-1 rounded-2xl bg-white/5 backdrop-blur-xl border-gradient before:rounded-2xl p-6">
<h3 bis_size='{"x":316,"y":6169,"w":852,"h":28,"abs_x":796,"abs_y":6212}' className="text-xl font-semibold tracking-tight mb-2">
                    Rendering &amp; Delivery
                  </h3>
<p bis_size='{"x":316,"y":6205,"w":852,"h":22,"abs_x":796,"abs_y":6248}' className="text-white/60 leading-relaxed text-sm">
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

<section bis_label="style" bis_size='{"x":0,"y":6443,"w":1425,"h":677,"abs_x":480,"abs_y":6486}' className="z-10 bg-center xl:pt-32 xl:pb-32 bg-cover mt-24 pt-32 pb-32 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg)]" id="contact" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_3840w.jpg\')'}}>
<div bis_size='{"x":264,"y":6571,"w":896,"h":421,"abs_x":744,"abs_y":6614}' className="lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div bis_size='{"x":296,"y":6571,"w":832,"h":421,"abs_x":776,"abs_y":6614}' className="border-gradient before:rounded-3xl md:p-12 animate-on-scroll text-center bg-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-xl" style={{animation: 'fadeSlideIn 0.5s ease-in-out 0.1s both'}}>
<div bis_size='{"x":650,"y":6619,"w":124,"h":28,"abs_x":1130,"abs_y":6662}' className="inline-flex gap-2 border-gradient before:rounded-full bg-white/5 rounded-full px-3 py-1.5 backdrop-blur items-center mb-6">
<svg aria-hidden="true" bis_size='{"x":662,"y":6626,"w":14,"h":14,"abs_x":1142,"abs_y":6669}' className="lucide lucide-mail w-3.5 h-3.5 text-white-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":663,"y":6631,"w":11,"h":3,"abs_x":1143,"abs_y":6674}' d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size='{"x":663,"y":6629,"w":11,"h":9,"abs_x":1143,"abs_y":6672}' height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size='{"x":684,"y":6625,"w":78,"h":16,"abs_x":1164,"abs_y":6668}' className="text-xs text-white/70">Let's Connect</span>
</div>
<h2 bis_size='{"x":344,"y":6671,"w":736,"h":48,"abs_x":824,"abs_y":6714}' className="text-3xl md:text-5xl text-white mb-4 font-semibold tracking-tight">
            Ready to start your project?
          </h2>
<p bis_size='{"x":376,"y":6735,"w":672,"h":56,"abs_x":856,"abs_y":6778}' className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Whether you have a detailed brief or just an idea, I'd love to hear
            from you. Let's create something extraordinary together.
          </p>
<div bis_size='{"x":344,"y":6823,"w":736,"h":44,"abs_x":824,"abs_y":6866}' className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
<a bis_size='{"x":551,"y":6823,"w":146,"h":44,"abs_x":1031,"abs_y":6866}' className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:opacity-90 transition text-sm font-semibold text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full px-6 py-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="mailto:alex@rivera3d.com">
              Send Email
              <svg aria-hidden="true" bis_size='{"x":658,"y":6837,"w":16,"h":16,"abs_x":1138,"abs_y":6880}' className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":659,"y":6842,"w":13,"h":3,"abs_x":1139,"abs_y":6885}' d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size='{"x":659,"y":6840,"w":13,"h":10,"abs_x":1139,"abs_y":6883}' height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a bis_size='{"x":710,"y":6823,"w":163,"h":44,"abs_x":1190,"abs_y":6866}' className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3" href="#">
              Schedule Call
              <svg aria-hidden="true" bis_size='{"x":833,"y":6837,"w":16,"h":16,"abs_x":1313,"abs_y":6880}' className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":838,"y":6839,"w":0,"h":2,"abs_x":1318,"abs_y":6882}' d="M8 2v4"></path><path bis_size='{"x":844,"y":6839,"w":0,"h":2,"abs_x":1324,"abs_y":6882}' d="M16 2v4"></path><rect bis_size='{"x":835,"y":6840,"w":12,"h":12,"abs_x":1315,"abs_y":6883}' height="18" rx="2" width="18" x="3" y="4"></rect><path bis_size='{"x":835,"y":6844,"w":12,"h":0,"abs_x":1315,"abs_y":6887}' d="M3 10h18"></path></svg>
</a>
</div>
<div bis_size='{"x":344,"y":6899,"w":736,"h":45,"abs_x":824,"abs_y":6942}' className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-6">
<a bis_size='{"x":516,"y":6924,"w":79,"h":20,"abs_x":996,"abs_y":6967}' className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size='{"x":516,"y":6926,"w":16,"h":16,"abs_x":996,"abs_y":6969}' className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":523,"y":6932,"w":8,"h":8,"abs_x":1003,"abs_y":6975}' d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect bis_size='{"x":518,"y":6932,"w":2,"h":8,"abs_x":998,"abs_y":6975}' height="12" width="4" x="2" y="9"></rect><circle bis_size='{"x":518,"y":6928,"w":2,"h":2,"abs_x":998,"abs_y":6971}' cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
<a bis_size='{"x":620,"y":6924,"w":89,"h":20,"abs_x":1100,"abs_y":6967}' className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size='{"x":620,"y":6926,"w":16,"h":16,"abs_x":1100,"abs_y":6969}' className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":621,"y":6928,"w":13,"h":13,"abs_x":1101,"abs_y":6971}' height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path bis_size='{"x":625,"y":6932,"w":5,"h":5,"abs_x":1105,"abs_y":6975}' d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line bis_size='{"x":632,"y":6931,"w":0,"h":0,"abs_x":1112,"abs_y":6974}' x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              Instagram
            </a>
<a bis_size='{"x":734,"y":6924,"w":69,"h":20,"abs_x":1214,"abs_y":6967}' className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size='{"x":734,"y":6926,"w":16,"h":16,"abs_x":1214,"abs_y":6969}' className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":735,"y":6929,"w":13,"h":11,"abs_x":1215,"abs_y":6972}' d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              Twitter
            </a>
<a bis_size='{"x":827,"y":6924,"w":80,"h":20,"abs_x":1307,"abs_y":6967}' className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<svg aria-hidden="true" bis_size='{"x":827,"y":6926,"w":16,"h":16,"abs_x":1307,"abs_y":6969}' className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":829,"y":6928,"w":13,"h":13,"abs_x":1309,"abs_y":6971}' cx="12" cy="12" r="10"></circle><path bis_size='{"x":829,"y":6930,"w":11,"h":3,"abs_x":1309,"abs_y":6973}' d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path bis_size='{"x":831,"y":6935,"w":10,"h":4,"abs_x":1311,"abs_y":6978}' d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path bis_size='{"x":833,"y":6928,"w":5,"h":11,"abs_x":1313,"abs_y":6971}' d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
              Dribbble
            </a>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":7160,"w":1425,"h":398,"abs_x":480,"abs_y":7203}' className="z-10 relative">
<div bis_size='{"x":72,"y":7160,"w":1280,"h":398,"abs_x":552,"abs_y":7203}' className="mx-auto max-w-7xl px-6 lg:px-8">
<div bis_size='{"x":104,"y":7160,"w":1216,"h":398,"abs_x":584,"abs_y":7203}' className="border-white/[0.06] border-t mt-20 pt-12 pb-12">

<div bis_size='{"x":104,"y":7209,"w":1216,"h":204,"abs_x":584,"abs_y":7252}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div bis_size='{"x":104,"y":7209,"w":274,"h":204,"abs_x":584,"abs_y":7252}' className="">
<div bis_size='{"x":104,"y":7209,"w":274,"h":28,"abs_x":584,"abs_y":7252}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":104,"y":7209,"w":97,"h":28,"abs_x":584,"abs_y":7252}' className="text-lg font-semibold">Alex Rivera</span>
</div>
<p bis_size='{"x":104,"y":7253,"w":274,"h":68,"abs_x":584,"abs_y":7296}' className="text-sm text-white/60 leading-relaxed mb-4">
                Award-winning 3D artist creating photorealistic renders and
                immersive digital experiences.
              </p>
<div bis_size='{"x":104,"y":7338,"w":274,"h":36,"abs_x":584,"abs_y":7381}' className="flex items-center gap-3">
<a bis_size='{"x":104,"y":7338,"w":36,"h":36,"abs_x":584,"abs_y":7381}' className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size='{"x":114,"y":7348,"w":16,"h":16,"abs_x":594,"abs_y":7391}' className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":121,"y":7353,"w":8,"h":8,"abs_x":601,"abs_y":7396}' d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect bis_size='{"x":115,"y":7354,"w":2,"h":8,"abs_x":595,"abs_y":7397}' height="12" width="4" x="2" y="9"></rect>
<circle bis_size='{"x":115,"y":7349,"w":2,"h":2,"abs_x":595,"abs_y":7392}' cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a bis_size='{"x":152,"y":7338,"w":36,"h":36,"abs_x":632,"abs_y":7381}' className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size='{"x":162,"y":7348,"w":16,"h":16,"abs_x":642,"abs_y":7391}' className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect bis_size='{"x":163,"y":7349,"w":13,"h":13,"abs_x":643,"abs_y":7392}' height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path bis_size='{"x":167,"y":7353,"w":5,"h":5,"abs_x":647,"abs_y":7396}' d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line bis_size='{"x":174,"y":7352,"w":0,"h":0,"abs_x":654,"abs_y":7395}' x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a bis_size='{"x":200,"y":7338,"w":36,"h":36,"abs_x":680,"abs_y":7381}' className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size='{"x":210,"y":7348,"w":16,"h":16,"abs_x":690,"abs_y":7391}' className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":211,"y":7350,"w":13,"h":11,"abs_x":691,"abs_y":7393}' d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a bis_size='{"x":248,"y":7338,"w":36,"h":36,"abs_x":728,"abs_y":7381}' className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10" href="#">
<svg bis_size='{"x":258,"y":7348,"w":16,"h":16,"abs_x":738,"abs_y":7391}' className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle bis_size='{"x":259,"y":7349,"w":13,"h":13,"abs_x":739,"abs_y":7392}' cx="12" cy="12" r="10"></circle>
<path bis_size='{"x":260,"y":7351,"w":11,"h":3,"abs_x":740,"abs_y":7394}' d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
<path bis_size='{"x":262,"y":7356,"w":10,"h":4,"abs_x":742,"abs_y":7399}' d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path bis_size='{"x":264,"y":7350,"w":5,"h":11,"abs_x":744,"abs_y":7393}' d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":418,"y":7209,"w":274,"h":204,"abs_x":898,"abs_y":7252}' className="">
<h3 bis_size='{"x":418,"y":7209,"w":274,"h":20,"abs_x":898,"abs_y":7252}' className="text-sm font-semibold text-white mb-4">Quick Links</h3>
<ul bis_size='{"x":418,"y":7245,"w":274,"h":168,"abs_x":898,"abs_y":7288}' className="space-y-3">
<li bis_size='{"x":418,"y":7245,"w":274,"h":24,"abs_x":898,"abs_y":7288}' className="">
<a bis_size='{"x":418,"y":7249,"w":55,"h":17,"abs_x":898,"abs_y":7292}' className="text-sm text-white/60 hover:text-white transition" href="#portfolio">
                    Portfolio
                  </a>
</li>
<li bis_size='{"x":418,"y":7281,"w":274,"h":24,"abs_x":898,"abs_y":7324}'>
<a bis_size='{"x":418,"y":7285,"w":39,"h":17,"abs_x":898,"abs_y":7328}' className="text-sm text-white/60 hover:text-white transition" href="#about">
                    About
                  </a>
</li>
<li bis_size='{"x":418,"y":7317,"w":274,"h":24,"abs_x":898,"abs_y":7360}'>
<a bis_size='{"x":418,"y":7321,"w":57,"h":17,"abs_x":898,"abs_y":7364}' className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Services
                  </a>
</li>
<li bis_size='{"x":418,"y":7353,"w":274,"h":24,"abs_x":898,"abs_y":7396}' className="">
<a bis_size='{"x":418,"y":7357,"w":53,"h":17,"abs_x":898,"abs_y":7400}' className="text-sm text-white/60 hover:text-white transition" href="#process">
                    Process
                  </a>
</li>
<li bis_size='{"x":418,"y":7389,"w":274,"h":24,"abs_x":898,"abs_y":7432}' className="">
<a bis_size='{"x":418,"y":7393,"w":51,"h":17,"abs_x":898,"abs_y":7436}' className="text-sm text-white/60 hover:text-white transition" href="#contact">
                    Contact
                  </a>
</li>
</ul>
</div>

<div bis_size='{"x":732,"y":7209,"w":274,"h":204,"abs_x":1212,"abs_y":7252}' className="">
<h3 bis_size='{"x":732,"y":7209,"w":274,"h":20,"abs_x":1212,"abs_y":7252}' className="text-sm font-semibold text-white mb-4">Services</h3>
<ul bis_size='{"x":732,"y":7245,"w":274,"h":168,"abs_x":1212,"abs_y":7288}' className="space-y-3">
<li bis_size='{"x":732,"y":7245,"w":274,"h":24,"abs_x":1212,"abs_y":7288}' className="">
<a bis_size='{"x":732,"y":7249,"w":139,"h":17,"abs_x":1212,"abs_y":7292}' className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Product Visualization
                  </a>
</li>
<li bis_size='{"x":732,"y":7281,"w":274,"h":24,"abs_x":1212,"abs_y":7324}' className="">
<a bis_size='{"x":732,"y":7285,"w":115,"h":17,"abs_x":1212,"abs_y":7328}' className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Character Design
                  </a>
</li>
<li bis_size='{"x":732,"y":7317,"w":274,"h":24,"abs_x":1212,"abs_y":7360}' className="">
<a bis_size='{"x":732,"y":7321,"w":109,"h":17,"abs_x":1212,"abs_y":7364}' className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Architectural Viz
                  </a>
</li>
<li bis_size='{"x":732,"y":7353,"w":274,"h":24,"abs_x":1212,"abs_y":7396}' className="">
<a bis_size='{"x":732,"y":7357,"w":108,"h":17,"abs_x":1212,"abs_y":7400}' className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Motion Graphics
                  </a>
</li>
<li bis_size='{"x":732,"y":7389,"w":274,"h":24,"abs_x":1212,"abs_y":7432}'>
<a bis_size='{"x":732,"y":7393,"w":132,"h":17,"abs_x":1212,"abs_y":7436}' className="text-sm text-white/60 hover:text-white transition" href="#services">
                    Environment Design
                  </a>
</li>
</ul>
</div>

<div bis_size='{"x":1046,"y":7209,"w":274,"h":204,"abs_x":1526,"abs_y":7252}' className="">
<h3 bis_size='{"x":1046,"y":7209,"w":274,"h":20,"abs_x":1526,"abs_y":7252}' className="text-sm font-semibold text-white mb-4">
                Get in Touch
              </h3>
<ul bis_size='{"x":1046,"y":7245,"w":274,"h":120,"abs_x":1526,"abs_y":7288}' className="space-y-3">
<li bis_size='{"x":1046,"y":7245,"w":274,"h":20,"abs_x":1526,"abs_y":7288}' className="flex items-start gap-2 text-sm text-white/60">
<svg bis_size='{"x":1046,"y":7247,"w":16,"h":16,"abs_x":1526,"abs_y":7290}' className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1047,"y":7252,"w":13,"h":3,"abs_x":1527,"abs_y":7295}' d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect bis_size='{"x":1047,"y":7250,"w":13,"h":10,"abs_x":1527,"abs_y":7293}' height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<a bis_size='{"x":1070,"y":7245,"w":127,"h":20,"abs_x":1550,"abs_y":7288}' className="hover:text-white transition" href="mailto:alex@rivera3d.com">
                    alex@rivera3d.com
                  </a>
</li>
<li bis_size='{"x":1046,"y":7277,"w":274,"h":20,"abs_x":1526,"abs_y":7320}' className="flex items-start gap-2 text-sm text-white/60">
<svg bis_size='{"x":1046,"y":7279,"w":16,"h":16,"abs_x":1526,"abs_y":7322}' className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1047,"y":7281,"w":13,"h":13,"abs_x":1527,"abs_y":7324}' d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span bis_size='{"x":1070,"y":7277,"w":121,"h":20,"abs_x":1550,"abs_y":7320}' className="">
<a bis_size='{"x":1070,"y":7278,"w":121,"h":17,"abs_x":1550,"abs_y":7321}' href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
</span>
</li>
<li bis_size='{"x":1046,"y":7309,"w":274,"h":20,"abs_x":1526,"abs_y":7352}' className="flex items-start gap-2 text-sm text-white/60">
<svg bis_size='{"x":1046,"y":7311,"w":16,"h":16,"abs_x":1526,"abs_y":7354}' className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1049,"y":7313,"w":10,"h":13,"abs_x":1529,"abs_y":7356}' d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle bis_size='{"x":1052,"y":7316,"w":4,"h":4,"abs_x":1532,"abs_y":7359}' cx="12" cy="10" r="3"></circle>
</svg>
<span bis_size='{"x":1070,"y":7309,"w":108,"h":20,"abs_x":1550,"abs_y":7352}' className="">Los Angeles, CA</span>
</li>
<li bis_size='{"x":1046,"y":7341,"w":274,"h":24,"abs_x":1526,"abs_y":7384}' className="mt-4">
<a bis_size='{"x":1046,"y":7344,"w":125,"h":20,"abs_x":1526,"abs_y":7387}' className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition xl:text-blue-400" href="#contact">
                    Schedule a call
                    <svg bis_size='{"x":1155,"y":7346,"w":16,"h":16,"abs_x":1635,"abs_y":7389}' className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1159,"y":7354,"w":9,"h":0,"abs_x":1639,"abs_y":7397}' d="M5 12h14"></path>
<path bis_size='{"x":1163,"y":7350,"w":4,"h":9,"abs_x":1643,"abs_y":7393}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>

<div bis_size='{"x":104,"y":7461,"w":1216,"h":49,"abs_x":584,"abs_y":7504}' className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
<p bis_size='{"x":104,"y":7494,"w":233,"h":16,"abs_x":584,"abs_y":7537}' className="text-xs text-white/50 text-center md:text-left">
              ©
              <span bis_size='{"x":118,"y":7494,"w":29,"h":15,"abs_x":598,"abs_y":7537}' id="year">2026</span>
              Alexia Rivera. All rights reserved.
            </p>
<div bis_size='{"x":950,"y":7494,"w":369,"h":16,"abs_x":1430,"abs_y":7537}' className="flex items-center gap-6 text-xs text-white/60">
<a bis_size='{"x":950,"y":7494,"w":79,"h":16,"abs_x":1430,"abs_y":7537}' className="hover:text-white transition" href="#">Privacy Policy</a>
<a bis_size='{"x":1054,"y":7494,"w":96,"h":16,"abs_x":1534,"abs_y":7537}' className="hover:text-white transition" href="#">
                Terms of Service
              </a>
<a bis_size='{"x":1174,"y":7494,"w":77,"h":16,"abs_x":1654,"abs_y":7537}' className="hover:text-white transition" href="#">Cookie Policy</a>
<a bis_size='{"x":1275,"y":7494,"w":44,"h":16,"abs_x":1755,"abs_y":7537}' className="hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
