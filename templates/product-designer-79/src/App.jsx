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



    (function () {
          // Reveal (you already have this block above)
          const targets = document.querySelectorAll('[data-reveal]');
          const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
              }
            });
          }, { root: null, rootMargin: '-15% 0px', threshold: 0.1 });
          targets.forEach(t => io.observe(t));

          // Merge logic
          const wrap = document.getElementById('stackWrap');
          const sentinel = document.getElementById('mergeSentinel');

          const mergeIO = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              // When the sentinel comes into comfortable view (near end of track),
              // merge to one card; un-merge when scrolling back up.
              if (e.isIntersecting) {
                wrap.classList.add('merged');
              } else {
                wrap.classList.remove('merged');
              }
            });
          }, { threshold: 0, rootMargin: '0px 0px -45% 0px' }); // triggers slightly before the bottom

          mergeIO.observe(sentinel);
        })();
  


    (function () {
          const targets = document.querySelectorAll('[data-reveal]');
          const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
              }
            });
          }, { root: null, rootMargin: '-15% 0px', threshold: 0.1 });
          targets.forEach(t => io.observe(t));
        })();
  


    // Mobile menu toggle
        document.getElementById('mobileToggle')?.addEventListener('click', function() {
          const menu = document.getElementById('mobileMenu');
          menu.classList.toggle('hidden');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });

        // Button glow effect
        function btnMove(e) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--x', `${x}px`);
          e.currentTarget.style.setProperty('--y', `${y}px`);
        }

        // Intersection Observer for scroll animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, observerOptions);

        // Observe all elements with animate-in class
        document.querySelectorAll('.animate-in').forEach(el => {
          observer.observe(el);
        });
  


    (function () {
          const rows = document.querySelectorAll('.js-step');

          const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                // apply the same delay to both number + card
                const delay = (e.target.dataset.delay || 0) + 'ms';
                e.target.style.setProperty('--delay', delay);
                e.target.classList.add('is-inview');
                io.unobserve(e.target);
              }
            });
          }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });

          rows.forEach((row) => io.observe(row));
        })();
  


    (function () {
          const links = [...document.querySelectorAll('.spy-link')];
          const indicator = document.getElementById('spyIndicator');
          const avatarBox = document.getElementById('spyAvatar');
          const sections = links
            .map(l => document.querySelector(l.dataset.section))
            .filter(Boolean);

          // move indicator to the active link
          function setActive(idx) {
            links.forEach(a => a.classList.remove('spy-active'));
            const link = links[idx];
            link.classList.add('spy-active');

            // slide indicator to link
            const navRect = link.closest('nav, #sideNav').getBoundingClientRect();
            const linkRect = link.getBoundingClientRect();
            const offset = linkRect.top - navRect.top - 4; // 4px padding adjust
            indicator.style.opacity = '1';
            indicator.style.transform = `translateY(${offset}px)`;

            // avatar highlight when "About" is active
            const isAbout = link.dataset.section === '#about';
            avatarBox.style.boxShadow = isAbout ? '0 0 0 2px rgba(255,255,255,.2), 0 0 24px rgba(255,255,255,.15)' : 'none';
            avatarBox.querySelector('img').style.filter = isAbout ? 'saturate(1) brightness(1)' : 'saturate(0) brightness(.75)';
          }

          // scroll spy
          const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                const idx = sections.indexOf(e.target);
                if (idx > -1) setActive(idx);
              }
            });
          }, { threshold: 0.45 });

          sections.forEach(sec => io.observe(sec));

          // keyboard nav (optional)
          window.addEventListener('keydown', (ev) => {
            if (ev.key !== 'ArrowDown' && ev.key !== 'ArrowUp') return;
            ev.preventDefault();
            const current = links.findIndex(a => a.classList.contains('spy-active'));
            let next = current;
            if (ev.key === 'ArrowDown') next = Math.min(current + 1, links.length - 1);
            if (ev.key === 'ArrowUp') next = Math.max(current - 1, 0);
            const targetSel = links[next].dataset.section;
            document.querySelector(targetSel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });

          // initialize on load
          setTimeout(() => {
            // pick first visible section or default to first link
            const firstVisible = sections.findIndex(s => {
              const r = s.getBoundingClientRect();
              return r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.2;
            });
            setActive(firstVisible > -1 ? firstVisible : 0);
          }, 50);
        })();
  


    (() => {
          const links = Array.from(document.querySelectorAll('.spy-link'));
          const line  = document.getElementById('spyLine');
          const list  = document.getElementById('spyList');

          // Smooth scroll for clicks
          links.forEach(a => {
            a.addEventListener('click', e => {
              const sel = a.dataset.section || a.getAttribute('href');
              const target = document.querySelector(sel);
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // update right away for keyboard users
                setActive(a);
              }
            });
          });

          // IntersectionObserver that triggers when a section crosses the middle of the viewport
          const sections = links
            .map(a => document.querySelector(a.dataset.section || a.getAttribute('href')))
            .filter(Boolean);

          const io = new IntersectionObserver((entries) => {
            // find the entry closest to the viewport center
            let best = null;
            const mid = window.innerHeight / 2;

            entries.forEach(e => {
              if (!e.isIntersecting) return;
              const rect = e.target.getBoundingClientRect();
              const dist = Math.abs((rect.top + rect.height/2) - mid);
              if (!best || dist < best.dist) best = { el: e.target, dist };
            });

            if (best) {
              const a = links.find(l => (l.dataset.section || l.getAttribute('href')) === '#' + best.el.id);
              if (a) setActive(a);
            }
          }, {
            root: null,
            // Focus on the center band of the screen for accuracy
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0.01
          });

          sections.forEach(s => io.observe(s));

          function setActive(activeLink) {
            links.forEach(l => l.classList.remove('spy-active'));
            activeLink.classList.add('spy-active');

            // Move the vertical line to the active item
            const li = activeLink.parentElement;
            const top = li.offsetTop + li.offsetHeight/2 - 3; // center the 6px line
            line.style.transform = `translateY(${top}px)`;
            line.style.opacity = '1';
          }

          // Initialize to the first visible section on load
          const init = () => {
            let first = sections.find(s => {
              const r = s.getBoundingClientRect();
              return r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.4;
            }) || sections[0];
            const a = links.find(l => (l.dataset.section || l.getAttribute('href')) === '#' + first.id);
            if (a) setActive(a);
          };
          window.addEventListener('load', init);
        })();
  


      // Toggle any glass header menu
      document.querySelectorAll('[data-toggle="menu"]').forEach(btn => {
        const card = btn.closest('.glass-card');
        const menu = card?.querySelector('[data-menu]');
        if (!menu) return;
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
        // close on link click
        menu.querySelectorAll('a').forEach(a =>
          a.addEventListener('click', () => menu.classList.add('hidden'))
        );
        // close on Esc
        document.addEventListener('keydown', e => {
          if (e.key === 'Escape') menu.classList.add('hidden');
        });
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const scrollHandler = () => {
          const home = document.getElementById('home');
          if (!home) return;
          const rect = home.getBoundingClientRect();
          const h = home.offsetHeight;
          const wH = window.innerHeight;

          // Progress 0 to 1 as we scroll through the section
          let progress = -rect.top / (h - wH);
          progress = Math.max(0, Math.min(1, progress));

          const doorL = document.getElementById('door-left');
          const doorR = document.getElementById('door-right');
          const overlay = document.getElementById('hero-door-overlay');
          const portrait = document.getElementById('hero-portrait');
          const content = document.getElementById('hero-text-content');
          const badge = document.getElementById('hero-badge');

          // Phase 1: Doors Open & Content Focus (0 - 0.5)
          let p1 = Math.min(1, progress / 0.5);
          if (doorL && doorR) {
            // Doors slide open
            doorL.style.transform = `translateX(-${p1 * 100}%)`;
            doorR.style.transform = `translateX(${p1 * 100}%)`;
            
            // Optional: fade out name on doors as they open
             const spans = overlay.querySelectorAll('span');
             spans.forEach(s => s.style.opacity = 1 - p1 * 1.5);
          }
          
          if (portrait) {
            // Content "compresses inward" (scales down from 1.4 to 1.0) into focus
            portrait.style.opacity = p1;
            portrait.style.transform = `scale(${1.4 - 0.4 * p1})`;
            portrait.style.filter = `blur(${(1 - p1) * 20}px)`;
          }

          // Phase 2: Doors Overlay Fade Out (0.5 - 0.7)
          let p2 = Math.max(0, Math.min(1, (progress - 0.5) / 0.2));
          if (overlay) {
            overlay.style.opacity = 1 - p2;
            // Ensure pointer events are off when hidden
            overlay.style.pointerEvents = (progress > 0.5) ? 'none' : 'auto';
          }

          // Phase 3: Text Content Fades In (0.6 - 0.9)
          // Starts slightly earlier to overlap with focus effect
          let p3 = Math.max(0, Math.min(1, (progress - 0.6) / 0.3));
          if (content) {
            content.style.opacity = p3;
            content.style.transform = `translateY(${(1 - p3) * 20}px)`;
          }
          if (badge) {
            badge.style.opacity = p3;
            badge.style.transform = `translateY(${(1 - p3) * 15}px)`;
          }
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });
        scrollHandler(); // Initial trigger
      });
    

document.addEventListener('scroll',()=>{const e=document.getElementById('home');if(!e)return;const t=e.getBoundingClientRect(),o=e.offsetHeight,r=window.innerHeight,n=Math.max(0,Math.min(1,-t.top/(o-r))),a=document.getElementById('hero-bg-layer'),l=document.getElementById('title-left'),s=document.getElementById('title-right');a&&(a.style.opacity=.2+.8*n,a.style.transform=`scale(${.9+.2*n})`,a.style.filter=`blur(${(1-n)*20}px)`),l&&s&&(l.style.transform=`translateX(-${60*n}vw)`,s.style.transform=`translateX(${60*n}vw)`)},{passive:!0});


  document.addEventListener('scroll', () => {
    const wrapper = document.getElementById('home');
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const height = wrapper.offsetHeight;
    const winH = window.innerHeight;
    
    // Progress calculation based on section scroll
    let progress = -rect.top / (winH * 1.5);
    progress = Math.max(0, Math.min(1, progress));

    const mask = document.getElementById('hero-content-mask');
    const content = document.getElementById('hero-text-content');
    const left = document.getElementById('door-left');
    const right = document.getElementById('door-right');
    const bg = document.getElementById('hero-bg-layer');

    // 1. Doors Split (Move apart)
    if (left && right) {
      const move = progress * 45; // Move 45vw each way
      left.style.transform = `translateX(-${move}vw)`;
      right.style.transform = `translateX(${move}vw)`;
    }

    // 2. Mask Opens (Inset from 50% to 0%)
    if (mask) {
      const inset = 50 * (1 - progress);
      mask.style.clipPath = `inset(0 ${inset}% 0 ${inset}%)`;
    }

    // 3. Content Reveal (Delayed start: > 0.15)
    if (content) {
      const contentP = Math.max(0, (progress - 0.15) / 0.6);
      const pClamped = Math.min(1, contentP);
      content.style.opacity = pClamped;
      content.style.transform = `translateY(${(1 - pClamped) * 20}px)`;
    }

    // 4. Background Fade In
    if (bg) {
      bg.style.opacity = 0.2 + (0.8 * progress);
      bg.style.transform = `scale(${0.9 + (0.1 * progress)})`;
      bg.style.filter = `blur(${(1 - progress) * 20}px)`;
    }
  }, { passive: true });

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
      


<header className="fixed top-0 left-0 right-0 z-[9999] lg:hidden">
<div className="mx-auto max-w-7xl px-4">
<div className="mt-3 relative glass-card rounded-2xl">
<div className="flex items-center justify-between px-4 py-3 backdrop-blur-md">
<a className="flex items-center gap-2 bg-center bg-cover" href="/">
<div className="grid place-items-center text-xs font-medium text-black bg-white/90 w-7 h-7 rounded-md">
                AD
              </div>
<span className="text-sm font-medium text-neutral-200/90">
                Asami Do
              </span>
</a>
<button className="inline-flex items-center rounded-full border border-white/15 bg-white/10 p-3 text-neutral-100 hover:bg-white/15 transition" data-toggle="menu">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</div>

<div className="hidden absolute left-0 right-0 top-full glass-panel rounded-2xl mt-2 overflow-hidden z-[10000]" data-menu="">
<nav className="grid text-sm text-neutral-200 p-4 gap-3">
<a className="hover:text-white smooth-scroll" href="#work">Work</a>
<a className="hover:text-white smooth-scroll" href="#about-me">
                About
              </a>
<a className="hover:text-white smooth-scroll" href="#expertise">
                Experience
              </a>
<a className="hover:text-white smooth-scroll" href="#contact">
                Contact
              </a>
<a className="mt-1 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-neutral-100 hover:bg-white/15 transition" href="#hire">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
<span className="font-medium">Let's Work</span>
</a>
</nav>
</div>
</div>
</div>
</header>
<div className="h-16 lg:hidden"></div>

<nav className="hidden lg:fixed lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col z-[9000]" id="sideNav">
<div className="min-w-[148px] bg-neutral-50/1 border-0 rounded-xl pt-4 pr-4 pb-4 pl-4 relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">

<span className="pointer-events-none absolute left-2 top-0 h-6 w-[2px] rounded bg-white/70 opacity-0 transition-transform duration-300 ease-out" id="spyLine" style={{transform: 'translateY(241.5px)', opacity: '1'}}></span>
<ul className="flex flex-col items-stretch gap-3 text-[15px] text-neutral-300 pl-4" id="spyList">
<li className="">
<a className="spy-link block text-left rounded-md px-2 py-1" data-section="#home" href="#home">
        Home
      </a>
</li>
<li className="">
<a className="spy-link block text-left rounded-md px-2 py-1" data-section="#expertise" href="#expertise">
        Expertise
      </a>
</li>
<li className="">
<a className="spy-link block text-left rounded-md px-2 py-1" data-section="#work" href="#work">
        Work
      </a>
</li>
<li className="">
<a className="spy-link block text-left rounded-md pt-1 pr-2 pb-1 pl-2" data-section="#process" href="#process">
        Process
      </a>
</li>
<li className="">
<a className="spy-link block text-left rounded-md px-2 py-1" data-section="#about-me" href="#about-me">
        About Me
      </a>
</li>
<li className="">
<a className="spy-link block text-left rounded-md px-2 py-1" data-section="#contact" href="#contact">
        Contact
      </a>
</li>
</ul>
</div>
</nav>

<section className="relative z-10 bg-black" id="home" style={{height: '260vh'}}>
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black px-6 sm:px-10" id="hero-sticky-wrapper"><div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-0 scale-90 blur-xl will-change-transform transition-all duration-75" id="hero-bg-layer"><div className="relative w-full h-full"><img alt="Portrait" className="w-full h-full object-cover grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cdc4d5e-9f21-4db8-b6f0-2800daf6e126_3840w.webp"/><div className="absolute inset-0 z-10 animate-spotlight" style={{background: 'radial-gradient(circle at 50% 50%,transparent 10%,black 70%)', mixBlendMode: 'multiply'}}></div></div></div><div className="relative z-20 flex flex-col items-center justify-center w-full h-full pointer-events-none"><div className="relative z-10 flex items-center justify-center w-full max-w-7xl h-full overflow-hidden will-change-[clip-path]" id="hero-content-mask" style={{clipPath: 'inset(0 50% 0 50%)'}}><div className="relative z-30 w-full max-w-5xl text-center pointer-events-auto transform translate-y-8 opacity-0 transition-opacity duration-300" id="hero-text-content"><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100/90 backdrop-blur">Product Designer • UI/UX • Strategy</div><h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-white">Building meaningful products that drive results.</h2><p className="mt-4 text-neutral-300/90 max-w-2xl mx-auto leading-relaxed">I design user-centered experiences across mobile, web, and design systems — from research to high-fidelity UI.</p><div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3"><a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition smooth-scroll" href="#work">View Work</a><a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition smooth-scroll" href="#contact">Let’s Work Together</a></div><div className="mt-10 text-xs text-neutral-400 flex items-center justify-center gap-2"><span className="h-px w-10 bg-white/10"></span>Scroll<span className="h-px w-10 bg-white/10"></span></div></div></div><div className="absolute right-[50%] z-20 flex justify-end items-center pr-2 sm:pr-4 will-change-transform" id="door-left"><h1 className="font-semibold uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 tracking-[0.18em] text-[clamp(2.25rem,7vw,5.75rem)] lg:text-[clamp(3rem,6vw,6.25rem)]">SOURANY</h1></div><div className="absolute left-[50%] z-20 flex justify-start items-center pl-2 sm:pl-4 will-change-transform" id="door-right"><h1 className="font-semibold uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 tracking-[0.18em] text-[clamp(2.25rem,7vw,5.75rem)] lg:text-[clamp(3rem,6vw,6.25rem)]">PHOMHOME</h1></div></div></div>

<div className="absolute bottom-0 left-0 right-0 pointer-events-none z-30">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8" style={{background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'}}></div>
<div className="h-px bg-white/10 w-full"></div>
</div>
</section>
<section className="" id="expertise">
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0))'}}></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 mt-36">
<div className="flex items-center justify-center gap-4 animate-in">
<span className="h-px w-14 bg-white/10"></span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100">
              Expertise
            </span>
<span className="h-px w-14 bg-white/10"></span>
</div>
<h2 className="animate-in sm:text-5xl text-3xl font-semibold text-white tracking-tight mt-14" data-delay="100">
        What I
        <span className="italic font-instrument-serif font-medium text-neutral-200">
              Do Best
            </span>
</h2>
<p className="mt-2 text-neutral-400 max-w-2xl mx-auto animate-in" data-delay="200">
        Crafting digital experiences across multiple disciplines with a
        focus on user-centered design.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/12 to-white/5 p-8 shadow-2xl backdrop-blur hover:scale-[1.02] hover:shadow-[0_30px_60px_-12px_rgba(255,255,255,0.15)] hover:border-white/25 transition-all duration-500 cursor-pointer animate-in" data-delay="300">
<span className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/40 transition-all duration-500"></span>
<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<span className="group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300 text-xs font-medium text-neutral-300 bg-neutral-500/10 border-neutral-500/20 border rounded-lg pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                  Primary Focus
                </span>
</div>
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 mb-6 group-hover:border-white/20 transition-all duration-300">
<img alt="UI/UX Design" className="group-hover:opacity-100 transition-opacity duration-500 group-hover:saturate-50 opacity-80 w-full h-48 object-cover saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78877756-9e45-410e-b630-78c3dfb8e94c_1600w.jpg"/>
</div>
</div>
<div className="space-y-4">
<h3 className="text-2xl tracking-tight font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
            UI/UX Design
          </h3>
<p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
            Creating intuitive interfaces and seamless user experiences from
            research to final pixels. Specializing in mobile apps, web
            platforms, and complex design systems.
          </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  User Research
                </span>
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  Wireframing
                </span>
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  Prototyping
                </span>
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  Design Systems
                </span>
</div>
</div>
<div className="absolute right-8 top-8 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-arrow-up-right h-6 w-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</article>

<article className="group relative overflow-hidden hover:scale-[1.02] hover:shadow-[0_30px_60px_-12px_rgba(255,255,255,0.15)] hover:border-white/25 transition-all duration-500 cursor-pointer bg-gradient-to-br from-white/12 to-white/5 border-white/15 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur animate-in" data-delay="400">
<span className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/40 transition-all duration-500"></span>
<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<span className="group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300 text-xs font-medium text-neutral-300 bg-neutral-500/10 border-neutral-500/20 border rounded-lg pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                  Strategic
                </span>
</div>
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 mb-6 group-hover:border-white/20 transition-all duration-300">
<img alt="Product Strategy" className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 group-hover:saturate-50 transition-all duration-500 saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1aa36c7b-aaa4-4bd1-8571-9b5d1d19a45b_1600w.jpg"/>
</div>
</div>
<div className="space-y-4">
<h3 className="text-2xl tracking-tight font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
            Product Strategy
          </h3>
<p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
            Defining product vision and roadmaps that align design decisions
            with business goals. From market analysis to feature
            prioritization and growth metrics.
          </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  Market Research
                </span>
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  User Journey
                </span>
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  Product Roadmap
                </span>
<span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-200 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                  Analytics
                </span>
</div>
</div>
<div className="absolute right-8 top-8 text-neutral-white group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-arrow-up-right h-6 w-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</article>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative overflow-hidden hover:bg-white/12 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl backdrop-blur animate-in" data-delay="500">
<span className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30 transition-all duration-300"></span>
<div className="flex items-start justify-between mb-4">
<div className="grid place-items-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92065716-95a9-47e4-a775-afa22fdd61c2_320w.jpg)] bg-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
</div>
<div className="text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="space-y-3">
<h3 className="text-xl tracking-tight font-semibold text-white group-hover:text-orange-100 transition-colors duration-300">
            Design Education
          </h3>
<p className="text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
            Teaching design principles and hands-on skills through courses,
            workshops, and mentorship programs.
          </p>
<div className="flex items-center gap-2 pt-1">
<span className="h-2 w-2 rounded-full bg-orange-400 group-hover:bg-orange-300 group-hover:scale-125 transition-all duration-300"></span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  50k+ students taught
                </span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur hover:bg-white/12 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer animate-in" data-delay="600">
<span className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30 transition-all duration-300"></span>
<div className="flex items-start justify-between mb-4">
<div className="grid place-items-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2622390-5e33-4327-a4b2-a7620f544bfb_320w.jpg)] bg-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
</div>
<div className="text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="space-y-3">
<h3 className="text-xl tracking-tight font-semibold text-white group-hover:text-pink-100 transition-colors duration-300">
            Graphic Design
          </h3>
<p className="text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
            Brand identity, marketing materials, and visual storytelling
            that communicates effectively across all touchpoints.
          </p>
<div className="flex items-center gap-2 pt-1">
<span className="h-2 w-2 rounded-full bg-pink-400 group-hover:bg-pink-300 group-hover:scale-125 transition-all duration-300"></span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  Brand identity specialist
                </span>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur hover:bg-white/12 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer animate-in" data-delay="700">
<span className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30 transition-all duration-300"></span>
<div className="flex items-start justify-between mb-4">
<div className="grid place-items-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eecc909d-7bfc-4940-9fd2-e9a11ce89b14_320w.jpg)] bg-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
</div>
<div className="text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="space-y-3">
<h3 className="text-xl tracking-tight font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
            Design Consulting
          </h3>
<p className="text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
            Strategic design consultation for startups and established
            companies looking to improve their product experience.
          </p>
<div className="flex items-center gap-2 pt-1">
<span className="h-2 w-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300 group-hover:scale-125 transition-all duration-300"></span>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  Strategic guidance
                </span>
</div>
</div>
</article>
</div>
</div>

<div className="md:pt-40 flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b4dc83e-3bad-43d4-833b-52eea95222f0_3840w.webp)] bg-cover pt-32 pb-32 relative justify-center" style={{maskImage: 'linear-gradient(90deg, transparent, black 45%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 45%, black 50%, transparent)'}}>

<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0))'}}></div>
<div className="absolute -right-[10%] -top-10 h-[60vh] w-[80vw] rotate-12 rounded-[4rem] blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.18), rgba(0,0,0,0))'}}></div>
</div>
<div className="w-full max-w-4xl px-6 relative">
<div className="relative">

<div className="flex flex-col gap-8 w-full" id="stackWrap">

<article className="w-full sm:p-10 p-8 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] text-center bg-gradient-to-br from-white/25 to-white/5 border-white/20 border rounded-2xl relative shadow-2xl backdrop-blur-sm">
<div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent">
</div>
<div className="space-y-4">
<h3 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Research &amp; Strategy
              </h3>
<p className="text-neutral-300/90 max-w-2xl mx-auto text-lg leading-relaxed">
                Deep dive into user needs, business goals, and market
                opportunities. Define the problem before solutions.
              </p>
<span className="inline-flex items-center text-sm text-neutral-100 bg-white/5 border-white/25 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm">
                    Step 1
                  </span>
</div>
</article>

<article className="w-full sm:p-10 p-8 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] text-center bg-gradient-to-br from-white/9 to-white/4 border-white/15 border rounded-2xl relative shadow-xl backdrop-blur-xl">
<div className="absolute -top-px left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent">
</div>
<div className="space-y-4">
<h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                Design &amp; Prototype
              </h3>
<p className="text-neutral-300/90 max-w-xl mx-auto text-base leading-relaxed">
                Create high-fidelity designs and interactive prototypes.
                Test early and often to validate assumptions.
              </p>
<span className="inline-flex items-center text-sm text-neutral-100 bg-white/5 border-white/25 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm">
                    Step 2
                  </span>
</div>
</article>

<article className="w-full sm:p-10 p-8 text-center bg-gradient-to-br from-white/8 to-white/3 border-white/15 border rounded-2xl relative shadow-xl backdrop-blur-xl">
<div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
</div>
<div className="space-y-3">
<h3 className="text-2xl font-semibold text-white leading-tight">
                Launch &amp; Iterate
              </h3>
<p 20="" 5="" backdrop-blur-sm"="" bg-white="" border="" border-white="" className="text-neutral-300/90 max-w-lg continuously. &lt;/p&gt; &lt;span class=" inline-flex="" items-center="" px-3="" py-1.5="" rounded-full="" text-neutral-100="" text-xs="">
                    Step 3
                  
            </p></div>
</article>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8" style={{background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'}}>
</div>
<div className="h-px bg-white/10 w-full"></div>
</div>
</div>
<style>
    .stack-card {
      transition: opacity .6s ease, transform .6s ease, filter .6s ease;
      opacity: 0;
      transform: translateY(24px) scale(.98);
      filter: blur(2px);
    }

    .stack-card.in {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  </style>
<style>
    /* existing reveal state */
    .stack-card {
      transition: opacity .6s ease, transform .6s ease, filter .6s ease, width .6s ease, max-width .6s ease, padding .6s ease;
      opacity: 0;
      transform: translateY(24px) scale(.98);
      filter: blur(2px);
    }

    .stack-card.in {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }

    /* --- MERGE TO ONE CARD --- */
    #stackWrap.merged .stack-card:not(:last-child) {
      opacity: 0;
      transform: translateY(-8px) scale(.985);
      filter: blur(3px);
      pointer-events: none;
    }

    #stackWrap.merged .stack-card:last-child {
      z-index: 20;
      width: 100%;
      max-width: 48rem;
      /* ~768px; adjust if you want wider */
      transform: translateY(0) scale(1.02);
      box-shadow: 0 25px 80px rgba(0, 0, 0, .45);
    }
  </style>



<section className="md:pt-40 pt-32 pb-32 relative" id="work">
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0))'}}></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center justify-center gap-4 animate-in">
<span className="h-px w-14 bg-white/10"></span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100">
              Work
            </span>
<span className="h-px w-14 bg-white/10"></span>
</div>
<div className="mt-5 text-center">
<h2 className="text-3xl sm:text-5xl tracking-tight font-semibold text-white animate-in" data-delay="100">
          Recent
          <span className="italic font-instrument-serif font-medium text-neutral-200">
                Projects
              </span>
</h2>
<p className="mt-3 text-neutral-400 max-w-xl mx-auto animate-in" data-delay="200">
          A selection of product design work spanning mobile apps, web
          platforms, and educational content.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

<article className="group relative overflow-hidden hover:bg-white/8 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl backdrop-blur animate-in" data-delay="300">
<div className="relative overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] bg-black rounded-[1rem] saturate-0">
<img alt="Mobile App Design" className="w-full h-[260px] sm:h-[300px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f90222d7-494a-4783-8fa7-dbd93d91f6b3_800w.webp"/>
<span className="pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ring-white/15"></span>
</div>
<div className="mt-4 pr-2 pl-2 space-y-3">
<div className="flex flex-wrap items-center gap-2">
<span className="rounded-lg border border-white/15 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-neutral-200">
                    Mobile
                  </span>
<span className="rounded-lg border border-white/15 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-neutral-200">
                    UI/UX
                  </span>
</div>
<h3 className="text-2xl tracking-tight font-semibold text-white group-hover:text-neutral-100 transition-colors">
              FinanceFlow
            </h3>
<p className="text-sm text-neutral-400 line-clamp-2">
              Personal finance management app with intuitive budgeting and
              spending insights
            </p>
</div>
</article>

<article className="group relative overflow-hidden hover:bg-white/8 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl backdrop-blur animate-in" data-delay="400">
<div className="relative overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] bg-black rounded-[1rem] saturate-0">
<img alt="Web Platform Design" className="w-full h-[260px] sm:h-[300px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fb53f66-d811-4a7a-bd45-85aa9ed6b163_800w.webp"/>
<span className="pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ring-white/15"></span>
</div>
<div className="mt-4 space-y-3 px-2">
<div className="flex flex-wrap items-center gap-2">
<span className="rounded-lg border border-white/15 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-neutral-200">
                    Web
                  </span>
<span className="rounded-lg border border-white/15 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-neutral-200">
                    SaaS
                  </span>
</div>
<h3 className="text-2xl tracking-tight font-semibold text-white group-hover:text-neutral-100 transition-colors">
              DesignCode Platform
            </h3>
<p className="text-sm text-neutral-400 line-clamp-2">
              Educational platform redesign focused on improving course
              discovery and learning experience
            </p>
</div>
</article>

<article className="group relative overflow-hidden hover:bg-white/8 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl backdrop-blur animate-in" data-delay="500">
<div className="relative overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02] bg-black rounded-[1rem] saturate-0">
<img alt="Brand Identity Design" className="w-full h-[260px] sm:h-[300px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/392e1853-9e7b-43bf-b4a2-918f9f9018f4_800w.jpg"/>
<span className="pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ring-white/15"></span>
</div>
<div className="mt-4 space-y-3 px-2">
<div className="flex flex-wrap items-center gap-2">
<span className="rounded-lg border border-white/15 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-neutral-200">
                    Branding
                  </span>
<span className="rounded-lg border border-white/15 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-neutral-200">
                    Graphics
                  </span>
</div>
<h3 className="text-2xl tracking-tight font-semibold text-white group-hover:text-neutral-100 transition-colors">
              TechStart Identity
            </h3>
<p className="text-sm text-neutral-400 line-clamp-2">
              Complete brand identity system for a startup including logo,
              colors, and design guidelines
            </p>
</div>
</article>
</div>
<div className="mt-10 text-center animate-in" data-delay="600">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-neutral-100 hover:bg-white/10 transition smooth-scroll" href="#contact">
<span className="tracking-tight font-medium">View All Work</span>
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8" style={{background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'}}>
</div>
<div className="h-px bg-white/10 w-full"></div>
</div>
</section>

<section className="md:pt-40 pt-32 pb-32 relative" id="process">
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0))'}}></div>
<div className="absolute -right-[10%] -top-10 h-[60vh] w-[80vw] rotate-12 rounded-[4rem] blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.18), rgba(0,0,0,0))'}}></div>
</div>
<div className="max-w-4xl mx-auto px-6">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100 mb-4 animate-in">
<svg className="lucide lucide-arrow-right h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
          How It Works
        </div>
<h2 className="text-3xl sm:text-5xl tracking-tight font-semibold text-white animate-in" data-delay="100">
          Simple
          <span className="italic font-instrument-serif font-medium text-neutral-200">
                Process
              </span>
</h2>
<p className="mt-3 text-neutral-400 max-w-2xl mx-auto animate-in" data-delay="200">
          A proven workflow that ensures transparency, collaboration, and
          exceptional results.
        </p>
</div>

<div className="relative">

<div className="absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>
<div className="space-y-8">

<div className="js-step relative flex items-start gap-6" data-delay="220" style={{'--delay': '220ms'}}>

<div className="step-num relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black shadow-lg">
<span className="text-sm font-semibold text-white">01</span>
</div>

<div className="step-card flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold text-white mb-2">
                Discovery Call
              </h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-3">
                We start with a 30-minute call to understand your project,
                goals, timeline, and vision. I'll ask detailed questions to
                ensure we're perfectly aligned.
              </p>
<span className="text-xs text-white-200 font-medium">
                    Free consultation
                  </span>
</div>
</div>

<div className="js-step relative flex items-start gap-6" data-delay="320" style={{'--delay': '320ms'}}>
<div className="step-num relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black shadow-lg">
<span className="text-sm font-semibold text-white">02</span>
</div>
<div className="step-card flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold text-white mb-2">
                Research &amp; Strategy
              </h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-3">
                I dive deep into your users, competitors, and market
                landscape. This phase includes user interviews, market
                analysis, and strategic planning.
              </p>
<span className="text-xs text-white-200 font-medium">
                    1-2 days
                  </span>
</div>
</div>

<div className="js-step relative flex items-start gap-6" data-delay="420" style={{'--delay': '420ms'}}>
<div className="step-num relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black shadow-lg">
<span className="text-sm font-semibold text-white">03</span>
</div>
<div className="step-card flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold text-white mb-2">
                Design &amp; Prototype
              </h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-3">
                From wireframes to high-fidelity designs, I create and
                iterate on your product. You'll see regular updates and have
                multiple opportunities for feedback.
              </p>
<span className="text-xs text-white-200 font-medium">
                    2-4 weeks
                  </span>
</div>
</div>

<div className="js-step relative flex items-start gap-6" data-delay="520" style={{'--delay': '520ms'}}>
<div className="step-num relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black shadow-lg">
<span className="text-sm font-semibold text-white">04</span>
</div>
<div className="step-card flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold text-white mb-2">
                Delivery &amp; Handoff
              </h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-3">
                Complete design files, documentation, and assets delivered
                in your preferred format. Plus ongoing support during
                development implementation.
              </p>
<span className="text-xs text-white-200 font-medium">
                    Same day
                  </span>
</div>
</div>
</div>
</div>
</div>
<style>
      /* initial state */
      .step-num {
        opacity: 0;
        transform: scale(.96);
        transition: opacity .6s ease, transform .6s ease;
        transition-delay: var(--delay, 0ms);
      }

      .step-card {
        opacity: 0;
        transform: translateX(28px);
        transition: opacity .7s cubic-bezier(.22, .61, .36, 1), transform .7s cubic-bezier(.22, .61, .36, 1);
        transition-delay: var(--delay, 0ms);
      }

      /* when in view */
      .is-inview .step-num {
        opacity: 1;
        transform: none;
      }

      .is-inview .step-card {
        opacity: 1;
        transform: none;
        /* slides in from right to 0 */
      }
    </style>
<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8" style={{background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'}}>
</div>
<div className="h-px bg-white/10 w-full"></div>
</div>
</section>

<section className="md:pt-40 pt-32 pb-32 relative" id="about-me">
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0))'}}></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 45%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 45%, black 70%, transparent)'}}>
<div className="flex items-center justify-center gap-4 animate-in">
<span className="h-px w-14 bg-white/10"></span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100">
              About Me
            </span>
<span className="h-px w-14 bg-white/10"></span>
</div>
<div className="grid md:grid-cols-2 gap-10 items-center mt-10">

<div className="flex justify-center mt-10">
<div className="book relative w-[340px] sm:w-[420px] h-[420px] sm:h-[520px] rounded-[1.5rem]">

<div className="inner absolute inset-0 rounded-[1.25rem] overflow-hidden shadow-2xl">
<img alt="Working at computer" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60042a1e-d8b3-429b-9821-1b52cfad7c95_3840w.webp"/>

<span className="pointer-events-none absolute bottom-0 left-0 right-0 h-40" style={{background: 'linear-gradient(180deg,transparent,rgba(0,0,0,.55))'}}></span>

<div className="book-desc absolute bottom-6 left-7 right-6 text-white pl-12">
<h3 className="desc-h3 text-lg font-semibold mb-1">
                  I enjoy bringing ideas to life.
                </h3>
<p className="desc-p text-sm text-neutral-200/95 leading-relaxed">
                  Passionate about design, I spend hours refining layouts,
                  exploring concepts, and making every detail feel alive.
                </p>
</div>
<span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.25rem]"></span>
</div>

<div className="cover absolute inset-0 rounded-[1.25rem] overflow-hidden shadow-2xl origin-left">
<img alt="Primary cover image" className="w-full h-full object-cover transition-[filter,transform] duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3b230be-661c-4e3a-a05b-c294a52ac5f9_1600w.jpg"/>

<div className="tint pointer-events-none absolute inset-0 bg-blue-500/0 transition-opacity duration-700 ease-out">
</div>

<div className="cover-note absolute bottom-5 left-5 right-6 flex items-center gap-2 pl-4 pr-3 py-1.5 text-[13px] text-white/95 bg-black/35 backdrop-blur-sm border border-white/10 rounded-full shadow-lg pointer-events-none">
<svg className="opacity-90" fill="none" height="16" viewbox="0 0 24 24" width="16">
<path d="M8 12l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 4v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Hover to open</span>
</div>
<span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/12 rounded-[1.25rem]"></span>
</div>
</div>
</div>
<style>
          /* 3D scene */
          .book {
            perspective: 2000px;
            transform-style: preserve-3d;
          }

          /* front cover behavior */
          .cover {
            transition: transform .7s ease;
          }

          .book:hover .cover {
            transform: rotateY(-78deg);
          }

          /* blue color shift on the cover image */
          .book:hover .cover img {
            filter: hue-rotate(195deg) saturate(140%) brightness(110%);
            transform: scale(1.02);
          }

          .book:hover .cover .tint {
            background-color: rgba(59, 130, 246, 0.18);
          }

          /* subtle depth to the inner page when revealed */
          .inner {
            transform: translateZ(-1px);
          }

          /* Front hint note: fade/slide out when opening */
          .cover-note {
            opacity: .95;
            transform: translateY(6px);
            transition: opacity .3s ease, transform .3s ease;
          }

          .book:hover .cover-note {
            opacity: 0;
            transform: translateY(0) translateX(-8px);
          }

          /* Staggered sequence for inner text */
          .book-desc {
            pointer-events: none;
          }

          .desc-h3,
          .desc-p {
            opacity: 0;
            transform: translateY(6px);
          }

          .book:hover .desc-h3 {
            opacity: 1;
            transform: translateY(0);
            transition: opacity .35s ease .20s, transform .35s ease .20s;
          }

          .book:hover .desc-p {
            opacity: 1;
            transform: translateY(0);
            transition: opacity .45s ease .38s, transform .45s ease .38s;
          }
        </style>

<div className="relative">
<h2 className="text-4xl sm:text-5xl tracking-tight font-semibold text-white animate-in" data-delay="100">
            Designing with
            <span className="italic font-instrument-serif font-medium text-neutral-300">
                  purpose
                </span>
</h2>
<p className="mt-4 text-neutral-300/90 text-base leading-relaxed max-w-xl animate-in" data-delay="200">
            I'm a product designer passionate about creating meaningful
            digital experiences. My journey began with graphic design,
            evolved through teaching at DesignCode, and now focuses on
            building products that solve real problems.
          </p>
<p className="mt-4 text-neutral-300/90 text-base leading-relaxed max-w-xl animate-in" data-delay="300">
            When I'm not designing, you'll find me experimenting with new
            design tools, sharing knowledge with the design community, or
            exploring how emerging technologies can enhance user
            experiences.
          </p>
<div className="mt-6 h-px w-28 bg-white/10 animate-in" data-delay="400"></div>
<div className="mt-6 grid grid-cols-2 gap-6 animate-in" data-delay="500">
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="text-2xl font-semibold text-white tracking-tight">
                50k+
              </div>
<div className="text-xs text-neutral-400">students taught</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="text-2xl font-semibold text-white tracking-tight">
                100+
              </div>
<div className="text-xs text-neutral-400">projects delivered</div>
</div>
</div>
</div>
</div>

<div className="mt-16 overflow-hidden">
<div className="flex gap-6 animate-scroll-horizontal">

<article className="t-card">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">@DesignNewbie</span>
<div className="flex items-center gap-0.5 text-yellow-400">

<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
</div>
</div>
<blockquote className="mt-4 text-neutral-200 leading-relaxed max-w-[52ch]">
              "Amazing design consulting session! Got actionable insights
              that improved our product’s user experience immediately.
              Highly recommend for strategic design guidance."
            </blockquote>
</article>

<article className="t-card">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">@StudentSuccess</span>
<div className="flex items-center gap-0.5 text-yellow-400">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
</div>
</div>
<blockquote className="mt-4 text-neutral-200 leading-relaxed max-w-[52ch]">
              "The UI/UX course completely transformed my career. Clear
              explanations, practical projects, and expert guidance helped
              me land my dream job as a product designer."
            </blockquote>
</article>

<article className="t-card">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">@CreativeMind</span>
<div className="flex items-center gap-0.5 text-yellow-400">

<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
</div>
</div>
<blockquote className="mt-4 text-neutral-200 leading-relaxed max-w-[52ch]">
              "Working with this team was a great experience! The visual
              direction and attention to micro-interactions elevated our
              brand far beyond expectations."
            </blockquote>
</article>

<article className="t-card">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">@UXExplorer</span>
<div className="flex items-center gap-0.5 text-yellow-400">

<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4 opacity-60" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
</div>
</div>
<blockquote className="mt-4 text-neutral-200 leading-relaxed max-w-[52ch]">
              "Loved the structure and flow of the lessons. The pace felt
              natural, and each topic built on the previous one perfectly.
              Worth every minute."
            </blockquote>
</article>

<article className="t-card">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">@DesignNewbie</span>
<div className="flex items-center gap-0.5 text-yellow-400">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
</path>
</svg>
</div>
</div>
<blockquote className="mt-4 text-neutral-200 leading-relaxed max-w-[52ch]">
              "Amazing design consulting session! Got actionable insights
              that improved our product’s user experience immediately.
              Highly recommend for strategic design guidance."
            </blockquote>
</article>
</div>
</div>
<style>
        .t-card {
          width: clamp(280px, 60vw, 520px);
          flex: none;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }

        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      </style>
<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8" style={{background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'}}>
</div>
<div className="h-px bg-white/10 w-full"></div>
</div>
</div>
</section>

<section className="md:pt-40 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77f55872-adf5-4910-9a7c-d21c0041bbe1_3840w.webp)] bg-cover z-[70] pt-40 pb-40 relative" id="contact" style={{maskImage: 'linear-gradient(90deg, transparent, black 55%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 55%, black 60%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(255,255,255,0.15), rgba(0,0,0,0))'}}></div>
</div>
<div className="max-w-4xl mx-auto px-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100 animate-in">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6l8 5 8-5"></path>
<rect className="" height="14" rx="2" width="20" x="2" y="5"></rect>
</svg>
              Let's Work Together
            </span>
<h2 className="mt-4 text-4xl sm:text-6xl tracking-tight font-semibold text-white animate-in" data-delay="100">
          Ready to
          <span className="italic font-instrument-serif font-medium text-neutral-200">
                collaborate?
              </span>
</h2>
<p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto animate-in" data-delay="200">
          Whether you need help with product design, strategy, or education,
          I'm here to help bring your vision to life.
        </p>
</div>
<div className="mt-12 grid md:grid-cols-2 gap-8">

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur animate-in" data-delay="300">
<h3 className="text-xl font-semibold text-white mb-6">
            Send a Message
          </h3>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-neutral-300 mb-2">
                      Name
                    </label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Your name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-300 mb-2">
                      Email
                    </label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="your@email.com" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-300 mb-2">
                    Project Budget
                  </label>
<select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20">
<option>$5k - $10k</option>
<option>$10k - $25k</option>
<option>$25k - $50k</option>
<option>$50k+</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
<textarea className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-neutral-100 hover:bg-white/15 transition" type="submit">
<span className="font-medium">Send Message</span>
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</form>
</div>

<div className="space-y-8">
<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur animate-in" data-delay="400">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-white/10 border-white/10 p-3 shadow-lg">
<svg className="lucide lucide-mail h-6 w-6 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6l8 5 8-5"></path>
<rect className="" height="14" rx="2" width="20" x="2" y="5"></rect>
</svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white">Email</h3>
<p className="text-neutral-400">hello@designer.com</p>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur animate-in" data-delay="500">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-white/10 border-white/10 p-3 shadow-lg">
<svg className="lucide lucide-calendar h-6 w-6 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white">
                  Schedule a Call
                </h3>
<p className="text-neutral-400">Book a free consultation</p>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur animate-in" data-delay="600">
<h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
<div className="flex items-center gap-4">
<a className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-dribbble" data-lucide="dribbble" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
</svg>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8" style={{background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)'}}>
</div>
<div className="h-px bg-white/10 w-full"></div>
</div>
</section>

<footer className="animate-in border-white/10 border-t pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="grid place-items-center cursor-pointer text-xs font-medium text-black bg-white/90 w-7 h-7 rounded-md">SP</div>
<span className="text-neutral-400 text-sm">
                © 2024 Product Designer. All rights reserved.
              </span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition smooth-scroll" href="#contact">
            Contact
          </a>
</div>
</div>
</div>
</footer>



<style>
    /* Fade in, slide up, and blur animations */
    .animate-in {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(10px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
        filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .animate-in.is-visible {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }

    /* Staggered delays */
    .animate-in[data-delay="100"] {
      transition-delay: 0.1s;
    }

    .animate-in[data-delay="200"] {
      transition-delay: 0.2s;
    }

    .animate-in[data-delay="300"] {
      transition-delay: 0.3s;
    }

    .animate-in[data-delay="400"] {
      transition-delay: 0.4s;
    }

    .animate-in[data-delay="500"] {
      transition-delay: 0.5s;
    }

    .animate-in[data-delay="600"] {
      transition-delay: 0.6s;
    }

    .animate-in[data-delay="700"] {
      transition-delay: 0.7s;
    }

    .smooth-scroll {
      scroll-behavior: smooth;
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .cursor-glow-btn .glow {
      background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.2) 0%, transparent 50%);
      opacity: var(--o, 0);
      transition: opacity 0.3s ease;
    }

    @keyframes scroll-horizontal {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(calc(-400px * 2 - 3rem));
      }
    }

    .animate-scroll-horizontal {
      animation: scroll-horizontal 20s linear infinite;
    }

    .animate-scroll-horizontal:hover {
      animation-play-state: paused;
    }
  </style>



</section>




    </>
  );
}
