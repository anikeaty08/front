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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const tabletMenuToggle = document.getElementById('tablet-menu-toggle');
      const tabletMenu = document.getElementById('tablet-menu');
      const tabletMenuChevron = document.getElementById('tablet-menu-chevron');

      function animateMenu(menu, isOpening) {
        if (typeof gsap === 'undefined') return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;
        if (isOpening) {
          gsap.fromTo(menu, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
        }
      }

      if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
          const isHidden = mobileMenu.classList.contains('hidden');
          mobileMenu.classList.toggle('hidden');
          menuToggle.setAttribute('aria-expanded', String(isHidden));
          animateMenu(mobileMenu, isHidden);
        });
        mobileMenu.querySelectorAll('a').forEach((link) => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
          });
        });
      }

      if (tabletMenuToggle && tabletMenu) {
        tabletMenuToggle.addEventListener('click', () => {
          const isHidden = tabletMenu.classList.contains('hidden');
          tabletMenu.classList.toggle('hidden');
          tabletMenuToggle.setAttribute('aria-expanded', String(isHidden));
          if (tabletMenuChevron) tabletMenuChevron.classList.toggle('rotate-180', isHidden);
          animateMenu(tabletMenu, isHidden);
        });
        tabletMenu.querySelectorAll('a').forEach((link) => {
          link.addEventListener('click', () => {
            tabletMenu.classList.add('hidden');
            tabletMenuToggle.setAttribute('aria-expanded', 'false');
            if (tabletMenuChevron) tabletMenuChevron.classList.remove('rotate-180');
          });
        });
        document.addEventListener('click', (event) => {
          const clickedInside = tabletMenu.contains(event.target) || tabletMenuToggle.contains(event.target);
          if (!clickedInside && !tabletMenu.classList.contains('hidden')) {
            tabletMenu.classList.add('hidden');
            tabletMenuToggle.setAttribute('aria-expanded', 'false');
            if (tabletMenuChevron) tabletMenuChevron.classList.remove('rotate-180');
          }
        });
      }
    


      const canvas = document.getElementById('grid-canvas');
      if(canvas) {
          const ctx = canvas.getContext('2d');
          let cx, cy;
          const focalLength = 300;
          const cameraZ = -100;
          let cameraX = 0;
          let cameraY = -70;
          let targetCameraX = 0;
          let targetCameraY = -70;

          window.addEventListener('mousemove', (e) => {
              const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
              const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
              targetCameraX = mouseX * 600;
              targetCameraY = -70 + mouseY * 40;
          });

          function resizeCanvas() {
              const container = canvas.parentElement;
              const width = container.clientWidth;
              const height = container.clientHeight;
              const dpr = window.devicePixelRatio || 1;
              canvas.width = width * dpr;
              canvas.height = height * dpr;
              ctx.scale(dpr, dpr);
              cx = width / 2;
              cy = height * 0.35;
          }
          window.addEventListener('resize', resizeCanvas);
          resizeCanvas();

          function project(x, y, z) {
              const dz = z - cameraZ;
              if (dz <= 0) return null;
              const scale = focalLength / dz;
              return { x: cx + (x - cameraX) * scale, y: cy + (y - cameraY) * scale };
          }

          const gridZMin = 0;
          const gridZMax = 3000;
          const gridXMin = -4000;
          const gridXMax = 4000;
          const spacing = 90;
          let zOffset = 0;
          const speed = 2;

          const streams = [
              { x: -600, z: 500, length: 500, speed: 7, color: '#9ED8FF' },
              { x: -200, z: 1200, length: 350, speed: 10, color: '#B8C0CC' },
              { x: 300, z: 200, length: 600, speed: 12, color: '#9ED8FF' },
              { x: 700, z: 800, length: 450, speed: 8, color: '#7D8794' },
              { x: 0, z: 1800, length: 700, speed: 14, color: '#9ED8FF' },
              { x: -1200, z: 900, length: 400, speed: 9, color: '#B8C0CC' },
              { x: 1100, z: 1500, length: 550, speed: 11, color: '#7D8794' }
          ];

          const beams = [0, 1, 2, 3, 4].map(id => document.getElementById(`beam-${id}`)).filter(Boolean);
          const beamStates = beams.map(() => ({ y: Math.random() * -1000, speed: 1.5 + Math.random() * 2 }));

          function animate() {
              const w = canvas.width / (window.devicePixelRatio || 1);
              const h = canvas.height / (window.devicePixelRatio || 1);
              ctx.clearRect(0, 0, w, h);

              cameraX += (targetCameraX - cameraX) * 0.03;
              cameraY += (targetCameraY - cameraY) * 0.03;

              beams.forEach((beam, i) => {
                  beamStates[i].y += beamStates[i].speed;
                  if (beamStates[i].y > window.innerHeight) beamStates[i].y = -300;
                  beam.style.transform = `translateY(${beamStates[i].y}px)`;
              });

              zOffset = (zOffset + speed) % spacing;
              ctx.lineWidth = 1;

              for (let x = gridXMin; x <= gridXMax; x += spacing) {
                  const p1 = project(x, 0, gridZMin);
                  const p2 = project(x, 0, gridZMax);
                  if (p1 && p2) {
                      const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                      grad.addColorStop(0, 'rgba(158, 216, 255, 0.15)');
                      grad.addColorStop(1, 'rgba(158, 216, 255, 0)');
                      ctx.strokeStyle = grad;
                      ctx.beginPath();
                      ctx.moveTo(p1.x, p1.y);
                      ctx.lineTo(p2.x, p2.y);
                      ctx.stroke();
                  }
              }

              for (let z = gridZMin; z <= gridZMax; z += spacing) {
                  const actualZ = z - zOffset;
                  if (actualZ < gridZMin) continue;
                  const p1 = project(gridXMin, 0, actualZ);
                  const p2 = project(gridXMax, 0, actualZ);
                  if (p1 && p2) {
                      const alpha = Math.max(0, 1 - (actualZ / gridZMax));
                      ctx.strokeStyle = `rgba(158, 216, 255, ${0.15 * alpha})`;
                      ctx.beginPath();
                      ctx.moveTo(p1.x, p1.y);
                      ctx.lineTo(p2.x, p2.y);
                      ctx.stroke();
                  }
              }

              streams.forEach(s => {
                  s.z -= s.speed;
                  if (s.z < gridZMin - s.length) s.z = gridZMax;
                  const startZ = Math.max(gridZMin, s.z);
                  const endZ = Math.min(gridZMax, s.z + s.length);

                  if (startZ < endZ) {
                      const p1 = project(s.x, 0, startZ);
                      const p2 = project(s.x, 0, endZ);
                      if (p1 && p2) {
                          const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                          grad.addColorStop(0, s.color);
                          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                          ctx.beginPath();
                          ctx.moveTo(p1.x, p1.y);
                          ctx.lineTo(p2.x, p2.y);
                          ctx.strokeStyle = grad;
                          ctx.lineWidth = 2;
                          ctx.shadowBlur = 12;
                          ctx.shadowColor = s.color;
                          ctx.stroke();
                          ctx.shadowBlur = 0;
                      }
                  }
              });
              requestAnimationFrame(animate);
          }
          animate();
      }
    


      !function () {
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: false };
          var script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
          script.onload = function () {
            if (!window.UnicornStudio.isInitialized) {
              UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
            }
          };
          (document.head || document.body).appendChild(script);
        }
      }();
    


      document.addEventListener('DOMContentLoaded', () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const navItems = [
          document.querySelector('nav .max-w-7xl > div > a.group'),
          document.querySelector('nav .max-w-7xl > div > div:nth-of-type(1)'),
          document.querySelector('nav .max-w-7xl > div > div:nth-of-type(2)'),
          document.getElementById('tablet-menu-toggle'),
          document.getElementById('menu-toggle')
        ].filter(Boolean);

        if (navItems.length) {
          gsap.from(navItems, { y: 24, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
        }

        const heroTl = gsap.timeline({ delay: 0.2 });
        const heroPhase = document.querySelector('section.min-h-screen .max-w-7xl > div:nth-child(1) > div:nth-child(1)');
        const heroLines = document.querySelectorAll('section.min-h-screen h1 > span');
        const heroPara = document.querySelector('section.min-h-screen h1 + p');
        const heroCta = document.querySelector('section.min-h-screen p + div');
        const heroMeta = document.querySelector('section.min-h-screen .max-w-7xl > div:nth-child(2) > div');
        const heroGhost = document.querySelector('section.min-h-screen > div.whitespace-nowrap');

        if (heroGhost) {
          gsap.from(heroGhost, { opacity: 0, duration: 2, ease: 'power2.out' });
          gsap.to(heroGhost, { y: -60, ease: 'none', scrollTrigger: { trigger: 'section.min-h-screen', start: 'top top', end: 'bottom top', scrub: true } });
        }
        if (heroPhase) heroTl.from(heroPhase, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
        if (heroLines.length) heroTl.from(heroLines, { y: 40, opacity: 0, filter: 'blur(6px)', duration: 1, stagger: 0.15, ease: 'power3.out' }, 0.2);
        if (heroPara) heroTl.from(heroPara, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
        if (heroCta) heroTl.from(heroCta, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.8);
        if (heroMeta) {
          const isDesktop = window.innerWidth >= 1280;
          heroTl.from(heroMeta, { x: isDesktop ? 24 : 0, y: isDesktop ? 0 : 24, opacity: 0, duration: 1, ease: 'power3.out' }, 1.0);
          gsap.to(heroMeta, { y: 40, ease: 'none', scrollTrigger: { trigger: 'section.min-h-screen', start: 'top top', end: 'bottom top', scrub: true } });
        }

        const sections = [
            { id: 'about', title: 'h2', desc: 'h2 ~ div.grid > p', features: 'div.grid.gap-10 > div' },
            { id: 'offerings', title: 'h2', desc: 'h2 + p', features: '.space-y-10 > div', extra: '.relative.mx-auto.w-full.max-w-md.h-72' },
            { id: 'deliverables', title: 'h3', desc: 'h3 + p', features: '.grid > div' },
            { id: 'process', title: 'h3', desc: 'h3 + div', features: '.grid > div' },
            { id: 'commercials', title: 'h3', desc: 'h3 + div', features: '.grid > div' }
        ];

        sections.forEach(sec => {
            const el = document.getElementById(sec.id);
            if (el) {
                const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 75%' } });
                const eyebrow = el.querySelector('.gap-4');
                const title = el.querySelector(sec.title);
                const desc = el.querySelectorAll(sec.desc);
                const items = el.querySelectorAll(sec.features);

                if (eyebrow) tl.from(eyebrow, { x: -18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
                if (title) tl.from(title, { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
                if (desc.length) tl.from(desc, { y: 18, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.3);
                if (items.length) tl.from(items, { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.4);

                if(sec.extra) {
                   const extraEl = el.querySelector(sec.extra);
                   if(extraEl) {
                      const bases = Array.from(extraEl.children).filter(child => !child.classList.contains('flex'));
                      const chips = Array.from(extraEl.children).filter(child => child.classList.contains('flex'));
                      if(bases.length) {
                          bases.forEach((base, i) => tl.from(base, { opacity: 0, y: 20, rotation: '-=6', duration: 1, ease: 'power3.out' }, 0.4 + i * 0.1));
                      }
                      if(chips.length) {
                          tl.from(chips, { opacity: 0, y: 10, x: (i) => i % 2 === 0 ? -10 : 10, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.8);
                      }
                   }
                }
            }
        });

        const finalCta = document.getElementById('final-cta');
        if (finalCta) {
          const ctaEyebrow = finalCta.querySelector('.mb-8, .mb-10');
          const ctaLines = finalCta.querySelectorAll('h2 span.block');
          const ctaSub = finalCta.querySelector('h2 + p');
          const ctaNote = finalCta.querySelector('p + div.border-t');
          const ctaBtns = finalCta.querySelectorAll('.mt-10 a, .mt-12 a');
          const ctaBg = finalCta.querySelector('.absolute.inset-0.z-0');
          const ctaTl = gsap.timeline({ scrollTrigger: { trigger: finalCta, start: 'top 82%' } });

          if (ctaBg) ctaTl.fromTo(ctaBg, { opacity: 0 }, { opacity: 0.7, duration: 2, ease: 'power2.out' }, 0);
          if (ctaEyebrow) ctaTl.from(ctaEyebrow, { y: 14, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
          if (ctaLines.length) ctaTl.from(ctaLines, { y: 30, opacity: 0, filter: 'blur(4px)', duration: 1, stagger: 0.15, ease: 'power3.out' }, 0.4);
          if (ctaSub) ctaTl.from(ctaSub, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.8);
          if (ctaNote) ctaTl.from(ctaNote, { y: 14, opacity: 0, duration: 0.8, ease: 'power3.out' }, 1.0);
          if (ctaBtns.length) ctaTl.from(ctaBtns, { y: 18, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 1.2);
        }

        const footer = document.querySelector('footer');
        if (footer) {
          const fBrand = footer.querySelector('.max-w-md > div:nth-child(1)');
          const fDesc = footer.querySelector('.max-w-md > p');
          const fNote = footer.querySelector('.max-w-md > div.border-t');
          const fCols = footer.querySelectorAll('.grid.gap-10 > div');
          const fLegal = footer.querySelector('.mt-16');
          const fTl = gsap.timeline({ scrollTrigger: { trigger: footer, start: 'top 85%' } });

          if (fBrand) fTl.from(fBrand, { y: 16, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
          if (fDesc) fTl.from(fDesc, { y: 14, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
          if (fNote) fTl.from(fNote, { y: 14, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.3);
          if (fCols.length) fTl.from(fCols, { y: 16, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.2);
          if (fLegal) fTl.from(fLegal, { y: 12, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
        }
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
      

<div className="aura-background-component absolute top-0 -z-10 h-screen w-full brightness-50" data-alpha-mask="80" style="
      mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);
    ">
<div className="absolute inset-0 -z-10 h-full w-full">
<div className="absolute left-0 top-0 -z-10 h-full w-full" data-us-project="vi5SxDwDvEJMwkyTdyH8"></div>
</div>
</div>

<div className="fixed inset-0 z-0 flex justify-center overflow-hidden pointer-events-none">
<div className="flex h-full w-full max-w-7xl justify-evenly border-x border-[#171A1F]/50">
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 lg:block">
<div className="absolute left-0 top-0 h-48 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/30 to-transparent" id="beam-0" style={{transform: 'translateY(-253.585px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 md:block">
<div className="absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/20 to-transparent" id="beam-1" style={{transform: 'translateY(-926.002px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 sm:block">
<div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/40 to-transparent" id="beam-2" style={{transform: 'translateY(-857.876px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 md:block">
<div className="absolute left-0 top-0 h-56 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/20 to-transparent" id="beam-3" style={{transform: 'translateY(-288.442px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 lg:block">
<div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/30 to-transparent" id="beam-4" style={{transform: 'translateY(-30.545px)'}}></div>
</div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 pt-4">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between border border-[#171A1F]/80 bg-[#050505]/85 backdrop-blur-md px-4 sm:px-5 md:px-6 py-3">

<a className="flex items-center gap-3 group shrink-0 min-w-0" href="#">
<iconify-icon className="text-xl text-[#9ED8FF] transition-colors duration-300 group-hover:text-[#CFAE6E] shrink-0" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-display text-xs tracking-widest uppercase text-[#F5F7FA] whitespace-nowrap truncate">
              Trace0
              <span className="text-[#7D8794]">|| Advisory</span>
</span>
</a>

<div className="hidden xl:flex items-center border border-[#171A1F]/80 bg-[#0C0D10]/90">
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#about">
              About
            </a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#offerings">
              Offerings
            </a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#deliverables">
              Deliverables
            </a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#process">
              Process
            </a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 transition-colors duration-300 hover:text-[#CFAE6E]" href="#commercials">
              Commercials
            </a>
</div>

<div className="hidden xl:flex items-center">
<a className="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 sm:px-5 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#final-cta">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Engage</span>
</a>
</div>

<div className="hidden md:flex xl:hidden items-center relative">
<button aria-controls="tablet-menu" aria-expanded="false" aria-label="Open section menu" className="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" id="tablet-menu-toggle" type="button">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Menu</span>
<iconify-icon className="text-base transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="tablet-menu-chevron" strokeWidth="1.5"></iconify-icon>
</button>

<div className="hidden absolute right-0 top-full mt-2 w-64 border border-[#171A1F]/80 bg-[#050505]/95 backdrop-blur-md" id="tablet-menu">
<div className="flex flex-col">
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#about">About</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#offerings">Offerings</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#deliverables">Deliverables</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#process">Process</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#commercials">Commercials</a>
<div className="p-4">
<a className="group inline-flex w-full items-center justify-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#final-cta">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Engage</span>
</a>
</div>
</div>
</div>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden flex items-center justify-center text-[#F5F7FA] transition-colors duration-300 hover:text-[#CFAE6E]" id="menu-toggle" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="md:hidden hidden mt-2 border border-[#171A1F]/80 bg-[#050505]/95 backdrop-blur-md" id="mobile-menu">
<div className="flex flex-col">
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#about">About</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#offerings">Offerings</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#deliverables">Deliverables</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#process">Process</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#commercials">Commercials</a>
<div className="p-4">
<a className="group inline-flex w-full items-center justify-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#final-cta">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Engage</span>
</a>
</div>
</div>
</div>
</div>
</nav>


<section className="min-h-screen flex overflow-hidden z-10 pt-24 pb-12 relative items-center">

<div className="absolute bottom-0 left-0 w-full h-[65vh] flex justify-center items-end overflow-hidden z-0 pointer-events-none">
<canvas className="absolute bottom-0 left-0 w-full h-full" height="1234" id="grid-canvas" width="3444"></canvas>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>

<div className="absolute left-1/2 bottom-[18%] -translate-x-1/2 h-32 w-[32rem] bg-[#9ED8FF]/8 blur-[80px]"></div>
</div>

<div className="absolute top-[28%] left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center whitespace-nowrap">
<span className="font-display text-[16vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#d7dde8]/[0.025] via-[#9ED8FF]/[0.05] to-[#d7dde8]/[0.02]">
          THREATS
        </span>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-end">

<div className="xl:col-span-8 flex flex-col justify-end min-w-0 relative z-20 pt-10 md:pt-16 xl:pt-0">

<div className="flex items-center gap-4 mb-7 md:mb-9">
<span className="w-7 md:w-10 h-px bg-[#9ED8FF] shrink-0"></span>
<span className="font-display text-xs uppercase tracking-widest text-[#B8C0CC] leading-tight">
              FUZZ · TRACE · EXPLOIT · REMEDIATE
            </span>
</div>

<h1 className="font-display uppercase leading-none tracking-tight mb-7 md:mb-8 max-w-full min-w-0">
<span className="block text-[#F5F7FA] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Trace
            </span>
<span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#9ED8FF] via-[#74C7FF] to-[#C8EAFF] drop-shadow-[0_0_20px_rgba(158,216,255,0.12)]">
              Threats
            </span>
<span className="block text-[#DCE3EE] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              To Their Origin.
            </span>
</h1>

<p className="text-[#AEB8C6] text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Vulnerability research, adversarial assessments, and strategic cyber risk advisory — for organizations that treat threats as existential.
          </p>

<div className="md:mt-10 z-20 mt-8 relative flex flex-wrap items-center gap-4">
<a className="group inline-flex items-center gap-4 border border-[#232833] bg-[#0C0D10]/90 px-5 md:px-7 py-3.5 md:py-4 font-display text-xs uppercase tracking-widest text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#about">
<span className="inline-flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span className="">Start Engagement</span>
</span>
<iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center gap-3 border border-[#171A1F] bg-[#050505]/50 px-5 md:px-7 py-3.5 md:py-4 font-display text-xs uppercase tracking-widest text-[#B8C0CC] transition-all duration-300 hover:border-[#9ED8FF]/40 hover:text-[#9ED8FF]" href="#offerings">
<span>View Services</span>
</a>
</div>
</div>

<div className="xl:col-span-4 flex justify-end relative z-10 mt-10 md:mt-0 md:absolute md:right-12 md:bottom-10 xl:static xl:mt-0">
<div className="relative w-full max-w-sm border border-[#171A1F]/80 bg-[#090B0E]/45 backdrop-blur-sm px-5 py-5 md:px-6 md:py-6">
<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#9ED8FF]/0 via-[#9ED8FF]/50 to-[#CFAE6E]/0"></div>
<div className="absolute -left-px top-6 bottom-6 w-px bg-gradient-to-b from-[#9ED8FF]/0 via-[#9ED8FF]/55 to-[#CFAE6E]/0"></div>
<div className="flex items-center gap-3 mb-5">
<span className="w-1.5 h-1.5 bg-[#9ED8FF]"></span>
<span className="font-display text-xs uppercase tracking-widest text-[#D7DEE8]">
                Active Environment
              </span>
</div>
<div className="space-y-3">
<div className="flex items-start justify-between gap-6 border-b border-[#171A1F]/70 pb-3">
<span className="font-display text-xs uppercase tracking-widest text-[#7D8794] pt-0.5">
                  Coordinates
                </span>
<span className="text-xs sm:text-sm text-[#E4EBF4] tracking-widest uppercase text-right leading-relaxed">
<span className="block whitespace-nowrap">40.7128° N</span>
<span className="block whitespace-nowrap">74.0060° W</span>
</span>
</div>
<div className="flex items-start justify-between gap-6 border-b border-[#171A1F]/70 pb-3">
<span className="font-display text-xs uppercase tracking-widest text-[#7D8794]">
                  Status
                </span>
<span className="text-xs sm:text-sm text-[#BFD8EE] tracking-widest uppercase whitespace-nowrap">
                  Active
                </span>
</div>
<div className="flex items-start justify-between gap-6">
<span className="font-display text-xs uppercase tracking-widest text-[#7D8794]">
                  Protocol
                </span>
<span className="text-xs sm:text-sm text-[#E4EBF4] tracking-widest uppercase whitespace-nowrap">
                  Trace0 Core
                </span>
</div>
</div>
<div className="mt-5 flex items-center gap-2">
<span className="w-1 h-1 bg-[#CFAE6E]"></span>
<span className="text-xs uppercase tracking-widest text-[#8A93A1]">
                Signal Calibrated
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-28 pb-28 md:py-32 overflow-hidden" id="about">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute inset-0 bg-[#9ED8FF]/20 backdrop-blur-sm"></div>
<div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(158,216,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,216,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]"></div>
<div className="absolute left-[18%] top-[18%] h-48 w-48 rounded-full bg-[#9ED8FF]/[0.03] blur-[90px]"></div>
<div className="absolute right-[12%] bottom-[12%] h-40 w-40 rounded-full bg-[#CFAE6E]/[0.02] blur-[100px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14">

<div className="xl:col-span-3">
<div className="flex items-center gap-4 xl:pt-2">
<span className="w-8 h-px bg-[#CFAE6E]"></span>
<span className="text-xs uppercase text-[#D6C29A] tracking-widest font-display">
                01 / About Trace0
              </span>
</div>
</div>

<div className="xl:col-span-9">

<h2 className="font-display leading-tight tracking-tight text-2xl sm:text-3xl lg:text-4xl text-[#F5F7FA] max-w-3xl">
              Elite advisory for organizations 
              <span className="text-[#9ED8FF]">under threat.</span>
</h2>

<div className="mt-10 md:mt-12 h-px w-full bg-gradient-to-r from-[#171A1F] via-[#232833] to-transparent"></div>

<div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl">
<p className="text-[#9AA6B5] text-base leading-relaxed font-light">
                Trace0 is a next-generation cybersecurity advisory built around deep offensive expertise. We specialize in vulnerability research, adversarial security assessments, and strategic cyber risk advisory.
              </p>
<p className="text-[#9AA6B5] text-base leading-relaxed font-light">
                We don't just find problems — we trace them to their origin, understand their blast radius, and help organizations build durable defenses.
              </p>
</div>

<div className="mt-12 md:mt-16 max-w-5xl border-t border-[#171A1F]/80 pt-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-lg text-[#CFAE6E]" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-sm tracking-widest uppercase text-[#F5F7FA]">Offensive Mindset</h3>
</div>
<p className="text-sm text-[#9AA6B5] leading-relaxed font-light pl-8">
                    We approach security the way attackers do — finding gaps before they're exploited.
                  </p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-lg text-[#9ED8FF]" icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-sm tracking-widest uppercase text-[#F5F7FA]">Research-Led</h3>
</div>
<p className="text-sm text-[#9AA6B5] leading-relaxed font-light pl-8">
                    Deep vulnerability research drives every engagement, not standardized checklists.
                  </p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-lg text-[#9ED8FF]" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-sm tracking-widest uppercase text-[#F5F7FA]">Strategic Clarity</h3>
</div>
<p className="text-sm text-[#9AA6B5] leading-relaxed font-light pl-8">
                    Every finding is translated into actionable risk remediation guidance for leadership.
                  </p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-lg text-[#CFAE6E]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-sm tracking-widest uppercase text-[#F5F7FA]">Precision Execution</h3>
</div>
<p className="text-sm text-[#9AA6B5] leading-relaxed font-light pl-8">
                    Scoped, contained, and documented engagements executed with zero collateral impact.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 md:py-32 overflow-hidden border-t border-[#171A1F]" id="offerings">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[14%] top-[22%] h-48 w-48 rounded-full bg-[#9ED8FF]/[0.025] blur-[90px]"></div>
<div className="absolute right-[12%] bottom-[16%] h-40 w-40 rounded-full bg-[#CFAE6E]/[0.02] blur-[100px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="sticky top-32 overflow-hidden flex bg-[#0C0D10]/50 h-full min-h-[400px] rounded-none p-8 md:p-12 relative items-center border border-[#171A1F]">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(158,216,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9ED8FF]/30 to-transparent"></div>
<div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#CFAE6E]/18 to-transparent"></div>
<div className="z-10 relative w-full">
<div className="relative mx-auto w-full max-w-md h-72">

<div className="absolute inset-8 border border-[#171A1F] rotate-[-18deg] transition-transform duration-700 hover:rotate-[-10deg]"></div>
<div className="absolute inset-4 border border-[#171A1F] rotate-[-12deg] bg-[#050505]/60 backdrop-blur-sm transition-transform duration-700 hover:rotate-[-6deg]"></div>
<div className="border border-[#171A1F] bg-[#0C0D10] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48c10a46-acf9-458b-938a-bb6cfa1120f4_3840w.jpg')] bg-cover bg-center absolute inset-0 rotate-[-6deg] opacity-40 grayscale mix-blend-screen transition-transform duration-700 hover:rotate-0"></div>

<div className="absolute -left-4 top-6 flex items-center gap-2 transform transition-transform duration-500 hover:translate-x-2">
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#9ED8FF]">T.01</span>
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-[10px] tracking-widest text-[#F5F7FA] uppercase">Research</div>
</div>
<div className="absolute right-0 top-24 flex items-center gap-2 transform transition-transform duration-500 hover:-translate-x-2">
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-[10px] tracking-widest text-[#F5F7FA] uppercase">Assessment</div>
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#9ED8FF]">T.02</span>
</div>
<div className="absolute left-6 bottom-10 flex items-center gap-2 transform transition-transform duration-500 hover:translate-x-2">
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#9ED8FF]">T.03</span>
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-[10px] tracking-widest text-[#F5F7FA] uppercase">Response</div>
</div>
<div className="absolute right-8 bottom-2 flex items-center gap-2 transform transition-transform duration-500 hover:-translate-x-2">
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-[10px] tracking-widest text-[#F5F7FA] uppercase">Advisory</div>
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#CFAE6E]">T.04</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-10">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<span className="w-8 h-px bg-[#CFAE6E]"></span>
<p className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">
                  02 / What We Offer
                </p>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F5F7FA] leading-tight max-w-xl">
                Scope of <span className="text-[#9ED8FF]">Advisory</span> Services
              </h2>
<p className="text-[#B8C0CC] text-base font-light max-w-xl leading-relaxed">
                From exploit development to board-level risk briefings — our capabilities span the full threat lifecycle.
              </p>
</div>
<div className="space-y-10">

<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">01</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Vulnerability Research</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">
                    Deep-dive research into target systems, protocols, and software to uncover novel vulnerabilities before adversaries do.
                  </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">0-Day</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">CVE</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Bug Bounty</span>
</div>
</div>
</div>

<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">02</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Red Team Operations</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">
                    Full-scope adversarial simulation targeting people, process, and technology to test real-world detection and response.
                  </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">APT Sim</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Social Eng</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Persistence</span>
</div>
</div>
</div>

<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">03</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Penetration Testing</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">
                    Targeted, scoped assessments across web, mobile, network, and cloud environments with actionable remediation.
                  </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Web / Mobile</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Cloud</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Network</span>
</div>
</div>
</div>

<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">04</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Threat Modeling</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">
                    Systematic identification of threat vectors and attack surfaces before code ships or architecture is finalized.
                  </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">STRIDE</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">PASTA</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Arch</span>
</div>
</div>
</div>

<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#CFAE6E] transition-colors">05</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Incident Response</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">
                    Rapid forensic investigation, containment, and remediation advisory when breaches occur.
                  </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Forensics</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Containment</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Recovery</span>
</div>
</div>
</div>

<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#CFAE6E] transition-colors">06</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Security Advisory</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">
                    Strategic cyber risk guidance for boards, CISOs, and engineering leaders navigating complex threat landscapes.
                  </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">CISO</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Risk</span>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs tracking-widest uppercase text-[#7D8794]">Strategy</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 md:py-32 bg-[#0C0D10] border-t border-[#171A1F] overflow-hidden" id="deliverables">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[12%] top-[16%] h-48 w-48 rounded-full bg-[#9ED8FF]/[0.025] blur-[90px]"></div>
<div className="absolute right-[10%] bottom-[12%] h-40 w-40 rounded-full bg-[#CFAE6E]/[0.02] blur-[90px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
<div>
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-px bg-[#CFAE6E]"></span>
<h2 className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">
                03 / What You Receive
              </h2>
</div>
<h3 className="font-display uppercase leading-tight tracking-tight text-[#F5F7FA] text-3xl sm:text-4xl md:text-5xl max-w-xl">
              Deliverables &amp; <span className="text-[#9ED8FF]">Artifacts</span>
</h3>
<p className="text-base text-[#B8C0CC] font-light mt-5 max-w-2xl leading-relaxed">
              Every engagement concludes with comprehensive documentation designed for both technical teams and leadership.
            </p>
</div>
<div className="hidden md:flex gap-2 pb-2">
<div className="w-2 h-2 bg-[#171A1F]"></div>
<div className="w-2 h-2 bg-[#171A1F]"></div>
<div className="w-2 h-2 bg-[#9ED8FF]"></div>
<div className="w-2 h-2 bg-[#CFAE6E]"></div>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] md:col-span-2 md:row-span-2 transition-colors duration-500 hover:border-[#9ED8FF]/30">
<div className="relative overflow-hidden">
<img alt="Technical Report" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/889ebd8a-b88e-43e7-82e3-7678d849acc2_3840w.jpg?w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9ED8FF]/30 to-transparent"></div>
</div>
<div className="relative z-10 p-6 sm:p-8 -mt-12">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-xs uppercase tracking-widest text-[#9ED8FF]">
                  DOC.01
                </span>
<iconify-icon className="text-lg text-[#9ED8FF]" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-display text-xl sm:text-2xl tracking-tight uppercase text-[#F5F7FA]">
                Technical Report
              </h4>
<p className="mt-3 text-sm text-[#9AA6B5] font-light leading-relaxed max-w-2xl">
                Full exploit chain documentation with CVSS scoring, PoC code, and granular remediation guidance.
              </p>
<div className="mt-6 flex items-start gap-3 border-t border-[#171A1F]/80 pt-5 max-w-2xl">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed">
                  Engineered for developers to reproduce and patch immediately.
                </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Executive Brief</h4>
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-xs uppercase tracking-widest text-[#9ED8FF]">DOC.02</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">
                Board-ready risk summary translating technical findings into business impact language.
              </p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-4xl text-[#171A1F] transition-colors duration-500 group-hover:text-[#9ED8FF]/40" icon="solar:chart-square-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Attack Timeline</h4>
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-xs uppercase tracking-widest text-[#9ED8FF]">DOC.03</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">
                Step-by-step reconstruction of simulated attack paths with detection opportunities mapped.
              </p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-4xl text-[#171A1F] transition-colors duration-500 group-hover:text-[#9ED8FF]/40" icon="solar:history-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Remediation Map</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">DOC.04</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">
                Prioritized fix plan with effort estimates, quick wins, and long-term hardening strategies.
              </p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-4xl text-[#171A1F] transition-colors duration-500 group-hover:text-[#9ED8FF]/40" icon="solar:route-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#CFAE6E]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Retest Validation</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">DOC.05</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">
                Post-remediation verification that all critical findings have been properly addressed.
              </p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-4xl text-[#171A1F] transition-colors duration-500 group-hover:text-[#CFAE6E]/40" icon="solar:check-read-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Threat Model</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">DOC.06</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">
                Living document capturing attack surfaces, trust boundaries, and mitigations.
              </p>
<div className="mt-6 flex justify-end">
<iconify-icon className="text-4xl text-[#171A1F] transition-colors duration-500 group-hover:text-[#9ED8FF]/40" icon="solar:diagram-down-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 border-t border-[#171A1F] overflow-hidden" id="process">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-[#9ED8FF]/5 backdrop-blur-sm"></div>
<div className="absolute right-[20%] top-[20%] h-32 w-32 rounded-full bg-[#9ED8FF]/[0.03] blur-[80px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center gap-4 mb-10">
<span className="w-8 h-px bg-[#CFAE6E]"></span>
<h2 className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">
            04 / How We Work
          </h2>
</div>
<h3 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase text-[#F5F7FA] mb-16">
          Engagement <span className="text-[#9ED8FF]">Process</span>
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">

<div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-[#171A1F] via-[#232833] to-[#171A1F] z-0"></div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-none bg-[#050505] border border-[#171A1F] flex items-center justify-center mb-6 text-[#9ED8FF] font-display text-sm tracking-widest">
              01
            </div>
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA] mb-3">Scoping</h4>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed">
              Define objectives, rules of engagement, and clear success criteria before initiation.
            </p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-none bg-[#050505] border border-[#171A1F] flex items-center justify-center mb-6 text-[#9ED8FF] font-display text-sm tracking-widest">
              02
            </div>
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA] mb-3">Reconnaissance</h4>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed">
              Passive and active intelligence gathering on the target environment and perimeters.
            </p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-none bg-[#050505] border border-[#171A1F] flex items-center justify-center mb-6 text-[#9ED8FF] font-display text-sm tracking-widest">
              03
            </div>
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA] mb-3">Exploitation</h4>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed">
              Controlled adversarial activity and vulnerability exploitation within agreed boundaries.
            </p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-none bg-[#050505] border border-[#171A1F] flex items-center justify-center mb-6 text-[#CFAE6E] font-display text-sm tracking-widest">
              04
            </div>
<h4 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA] mb-3">Reporting</h4>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed">
              Findings documented with full technical detail, context, and actionable remediation guidance.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 bg-[#0C0D10] border-t border-[#171A1F] overflow-hidden" id="commercials">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[10%] top-[30%] h-48 w-48 rounded-full bg-[#9ED8FF]/[0.02] blur-[100px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-px bg-[#CFAE6E]"></span>
<h2 className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">
            05 / Commercials
          </h2>
</div>
<h3 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase text-[#F5F7FA] mb-16">
          Engagement <span className="text-[#9ED8FF]">Models</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] p-8 md:p-10 transition-colors duration-500 hover:border-[#9ED8FF]/30">
<div className="flex items-start justify-between mb-6">
<h4 className="font-display text-xl sm:text-2xl tracking-tight uppercase text-[#F5F7FA] max-w-[12ch]">Project-Based</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">Fixed Scope</span>
</div>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed max-w-sm">
              Defined scope, timeline, and deliverables. Ideal for targeted penetration tests and specific security assessments.
            </p>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] p-8 md:p-10 transition-colors duration-500 hover:border-[#9ED8FF]/30">
<div className="flex items-start justify-between mb-6">
<h4 className="font-display text-xl sm:text-2xl tracking-tight uppercase text-[#F5F7FA] max-w-[12ch]">Retainer</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">Monthly</span>
</div>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed max-w-sm">
              Ongoing advisory, continuous research access, and priority response capacity built into a predictable monthly cadence.
            </p>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] p-8 md:p-10 transition-colors duration-500 hover:border-[#9ED8FF]/30">
<div className="flex items-start justify-between mb-6">
<h4 className="font-display text-xl sm:text-2xl tracking-tight uppercase text-[#F5F7FA] max-w-[12ch]">Embedded Research</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">Custom</span>
</div>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed max-w-sm">
              Trace0 researchers directly embedded within your team for deep, sustained vulnerability research and architecture review.
            </p>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] p-8 md:p-10 transition-colors duration-500 hover:border-[#CFAE6E]/30">
<div className="flex items-start justify-between mb-6">
<h4 className="font-display text-xl sm:text-2xl tracking-tight uppercase text-[#F5F7FA] max-w-[12ch]">Incident Response</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">On-Demand</span>
</div>
<p className="text-sm text-[#9AA6B5] font-light leading-relaxed max-w-sm">
              Rapid deployment capabilities for active incidents requiring immediate forensic investigation and containment strategy.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-36 md:py-40 overflow-hidden border-t border-[#171A1F]" id="final-cta">

<div className="absolute inset-0 z-0 pointer-events-none opacity-70">
<div className="absolute inset-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>
</div>

<div className="pointer-events-none absolute inset-0 z-[1]">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>

<div className="absolute inset-0 bg-[#050505]/60"></div>

<div className="absolute left-1/2 top-[18%] -translate-x-1/2 h-56 w-[32rem] bg-[#9ED8FF]/[0.05] blur-[120px]"></div>
<div className="absolute right-[18%] bottom-[20%] h-40 w-40 bg-[#CFAE6E]/[0.03] blur-[90px] rounded-full"></div>

<div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(158,216,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,216,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center">

<div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
<span className="w-8 md:w-10 h-px bg-[#CFAE6E]"></span>
<span className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">
              06 / Ready to discuss your security needs?
            </span>
<span className="w-8 md:w-10 h-px bg-[#CFAE6E]"></span>
</div>

<h2 className="font-display uppercase leading-none tracking-tight text-[#F5F7FA] text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto">
<span className="block">Cybersecurity</span>
<span className="block text-[#9ED8FF]">demands foresight.</span>
<span className="block text-[#DCE3EE]">Let's build yours.</span>
</h2>

<p className="mt-8 md:mt-10 max-w-2xl mx-auto text-base text-[#B8C0CC] font-light leading-relaxed">
            Whether you're assessing risk, responding to an incident, or building a long-term security program — Trace0 is ready to engage.
          </p>

<div className="mt-8 md:mt-10 flex items-start justify-center gap-3 max-w-sm mx-auto border-t border-[#171A1F]/80 pt-5">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed text-left">
              contact@trace0.io
            </p>
</div>

<div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center gap-4 border border-[#232833] bg-[#0C0D10]/90 px-6 md:px-7 py-4 font-display text-xs uppercase tracking-widest text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="mailto:contact@trace0.io">
<span className="inline-flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Schedule a Call</span>
</span>
<iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-[#171A1F] bg-[#050505] overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[10%] top-[18%] h-48 w-48 rounded-full bg-[#9ED8FF]/[0.025] blur-[90px]"></div>
<div className="absolute right-[12%] bottom-[14%] h-40 w-40 rounded-full bg-[#CFAE6E]/[0.02] blur-[90px]"></div>
<div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(158,216,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,216,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">

<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

<div className="max-w-md">
<div className="flex items-center gap-3 text-[#F5F7FA]">
<iconify-icon className="text-xl text-[#9ED8FF] shrink-0" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-display text-xs tracking-widest uppercase text-[#F5F7FA]">
                Trace0
                <span className="text-[#7D8794]">|| Advisory</span>
</span>
</div>
<p className="mt-5 text-sm text-[#9AA6B5] font-light leading-relaxed max-w-sm">
              Trace0 is a next-generation cybersecurity advisory built around deep offensive expertise. Vulnerability research, adversarial security assessments, and strategic cyber risk advisory.
            </p>
<div className="mt-6 flex items-start gap-3 border-t border-[#171A1F]/80 pt-5 max-w-sm">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed">
                Elite advisory for organizations under threat.
              </p>
</div>
</div>

<div className="grid gap-10 sm:grid-cols-3 lg:gap-14">
<div>
<p className="font-display text-xs tracking-widest uppercase text-[#D6C29A]">
                Explore
              </p>
<ul className="mt-5 space-y-3">
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-all duration-300 hover:translate-x-1 inline-block" href="#about">About</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#offerings">Offerings</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#deliverables">Deliverables</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#process">Process</a></li>
</ul>
</div>
<div>
<p className="font-display text-xs tracking-widest uppercase text-[#D6C29A]">
                Company
              </p>
<ul className="mt-5 space-y-3">
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#commercials">Commercials</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Careers</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="mailto:contact@trace0.io">Contact</a></li>
</ul>
</div>
<div>
<p className="font-display text-xs tracking-widest uppercase text-[#D6C29A]">
                Connect
              </p>
<ul className="mt-5 space-y-3">
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Twitter / X</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-16 border-t border-[#171A1F] pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs uppercase tracking-widest text-[#4A505C]">
            Sys.Rev.01 ©
            <span className="font-display text-[#7D8794]">MMXXVI</span>
            Trace0 || Advisory
          </p>
<div className="flex flex-wrap items-center gap-6">
<a className="text-xs uppercase tracking-widest text-[#4A505C] hover:text-[#9ED8FF] transition-colors" href="#">Privacy</a>
<a className="text-xs uppercase tracking-widest text-[#4A505C] hover:text-[#9ED8FF] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
