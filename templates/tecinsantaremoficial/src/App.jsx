import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

          if (tabletMenuChevron) {
            tabletMenuChevron.classList.toggle('rotate-180', isHidden);
          }
          animateMenu(tabletMenu, isHidden);
        });

        tabletMenu.querySelectorAll('a').forEach((link) => {
          link.addEventListener('click', () => {
            tabletMenu.classList.add('hidden');
            tabletMenuToggle.setAttribute('aria-expanded', 'false');

            if (tabletMenuChevron) {
              tabletMenuChevron.classList.remove('rotate-180');
            }
          });
        });

        document.addEventListener('click', (event) => {
          const clickedInsideTabletMenu = tabletMenu.contains(event.target) || tabletMenuToggle.contains(event.target);
          if (!clickedInsideTabletMenu && !tabletMenu.classList.contains('hidden')) {
            tabletMenu.classList.add('hidden');
            tabletMenuToggle.setAttribute('aria-expanded', 'false');
            if (tabletMenuChevron) tabletMenuChevron.classList.remove('rotate-180');
          }
        });
      }
    


      const canvas = document.getElementById('grid-canvas');
      if (canvas) {
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
          return {
            x: cx + (x - cameraX) * scale,
            y: cy + (y - cameraY) * scale
          };
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
        const beamStates = beams.map(() => ({
          y: Math.random() * -1000,
          speed: 1.5 + Math.random() * 2
        }));

        function animate() {
          const w = canvas.width / (window.devicePixelRatio || 1);
          const h = canvas.height / (window.devicePixelRatio || 1);
          ctx.clearRect(0, 0, w, h);

          cameraX += (targetCameraX - cameraX) * 0.03;
          cameraY += (targetCameraY - cameraY) * 0.03;

          beams.forEach((beam, i) => {
            beamStates[i].y += beamStates[i].speed;
            if (beamStates[i].y > window.innerHeight) {
              beamStates[i].y = -300;
            }
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
            if (s.z < gridZMin - s.length) {
              s.z = gridZMax;
            }

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
          gsap.to(heroGhost, { y: -60, ease: 'none', scrollTrigger: { trigger: 'section.min-h-screen', start: 'top top', end: 'bottom top', scrub: true }});
        }

        if (heroPhase) heroTl.from(heroPhase, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
        if (heroLines.length) heroTl.from(heroLines, { y: 40, opacity: 0, filter: 'blur(6px)', duration: 1, stagger: 0.15, ease: 'power3.out' }, 0.2);
        if (heroPara) heroTl.from(heroPara, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
        if (heroCta) heroTl.from(heroCta, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.8);

        if (heroMeta) {
          const isDesktop = window.innerWidth >= 1280;
          heroTl.from(heroMeta, { x: isDesktop ? 24 : 0, y: isDesktop ? 0 : 24, opacity: 0, duration: 1, ease: 'power3.out' }, 1.0);
          gsap.to(heroMeta, { y: 40, ease: 'none', scrollTrigger: { trigger: 'section.min-h-screen', start: 'top top', end: 'bottom top', scrub: true }});
        }

        const thesis = document.getElementById('thesis');
        if (thesis) {
          const thesisEyebrow = thesis.querySelector('.max-w-7xl .grid > div:nth-child(1) > div');
          const thesisStatement = thesis.querySelector('h2');
          const thesisDivider = thesis.querySelector('h2 + div');
          const thesisParas = thesis.querySelectorAll('h2 ~ div.grid > p');
          const thesisNote = thesis.querySelector('h2 ~ div.max-w-3xl');

          const thesisTl = gsap.timeline({ scrollTrigger: { trigger: thesis, start: 'top 75%' }});
          if (thesisEyebrow) thesisTl.from(thesisEyebrow, { x: -18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
          if (thesisStatement) thesisTl.from(thesisStatement, { y: 24, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2);
          if (thesisDivider) thesisTl.from(thesisDivider, { scaleX: 0, opacity: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power3.out' }, 0.4);
          if (thesisParas.length) thesisTl.from(thesisParas, { y: 18, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, 0.6);
          if (thesisNote) thesisTl.from(thesisNote, { y: 14, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.9);
        }

        const arch = document.getElementById('architecture');
        if (arch) {
          const archEyebrow = arch.querySelector('.gap-6 > div.flex');
          const archTitle = arch.querySelector('h2');
          const archSub = arch.querySelector('h2 + p');
          const archSchematic = arch.querySelector('.relative.mx-auto.w-full.max-w-md.h-72');
          const actualBases = archSchematic ? Array.from(archSchematic.children).filter(el => !el.classList.contains('flex')) : [];
          const archChips = archSchematic ? Array.from(archSchematic.children).filter(el => el.classList.contains('flex')) : [];
          const archSteps = arch.querySelectorAll('.space-y-8 > div');

          const archTl = gsap.timeline({ scrollTrigger: { trigger: arch, start: 'top 75%' }});
          if (archEyebrow) archTl.from(archEyebrow, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
          if (archTitle) archTl.from(archTitle, { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
          if (archSub) archTl.from(archSub, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.3);

          if (actualBases.length) {
            actualBases.forEach((base, i) => {
              archTl.from(base, { opacity: 0, y: 20, rotation: '-=6', duration: 1, ease: 'power3.out' }, 0.4 + i * 0.1);
            });
          }
          if (archChips.length) {
            archTl.from(archChips, { opacity: 0, y: 10, x: (i) => i % 2 === 0 ? -10 : 10, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.8);
          }
          if (archSteps.length) {
            archTl.from(archSteps, { opacity: 0, y: 18, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, 0.6);
          }
        }

        const apps = document.getElementById('applications');
        if (apps) {
          const appsEyebrow = apps.querySelector('.mb-16 .flex.items-center.gap-4');
          const appsTitle = apps.querySelector('h3');
          const appsSub = apps.querySelector('h3 + p');
          const largeCard = apps.querySelector('.grid > div:first-child');
          const smallCards = apps.querySelectorAll('.grid > div:not(:first-child)');

          const appsTl = gsap.timeline({ scrollTrigger: { trigger: apps, start: 'top 82%' }});
          if (appsEyebrow) appsTl.from(appsEyebrow, { x: -18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
          if (appsTitle) appsTl.from(appsTitle, { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
          if (appsSub) appsTl.from(appsSub, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.3);

          if (largeCard) {
            appsTl.fromTo(largeCard, { y: 30, opacity: 0, scale: 0.985 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, 0.5);
            const largeImg = largeCard.querySelector('img');
            if(largeImg) appsTl.fromTo(largeImg, { clipPath: 'inset(4% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.out' }, 0.5);
          }

          if (smallCards.length) {
            appsTl.fromTo(smallCards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', clearProps: 'opacity,transform' }, 0.7);
          }
        }

        const finalCta = document.getElementById('final-cta');
        if (finalCta) {
          const ctaEyebrow = finalCta.querySelector('.mb-8, .mb-10');
          const ctaLines = finalCta.querySelectorAll('h2 span.block');
          const ctaSub = finalCta.querySelector('h2 + p');
          const ctaNote = finalCta.querySelector('p + div.border-t');
          const ctaBtns = finalCta.querySelectorAll('.mt-10 a, .mt-12 a');
          const ctaBg = finalCta.querySelector('.absolute.inset-0.z-0');

          const ctaTl = gsap.timeline({ scrollTrigger: { trigger: finalCta, start: 'top 82%' }});
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

          const fTl = gsap.timeline({ scrollTrigger: { trigger: footer, start: 'top 85%' }});
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
  }, []);

  return (
    <>
      

<div className="aura-background-component absolute top-0 -z-10 h-screen w-full brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 -z-10 h-full w-full">
<div className="absolute left-0 top-0 -z-10 h-full w-full" data-us-project="vi5SxDwDvEJMwkyTdyH8"></div>
</div>
</div>

<div className="fixed inset-0 z-0 flex justify-center overflow-hidden pointer-events-none">
<div className="flex h-full w-full max-w-7xl justify-evenly border-x border-[#171A1F]/50">
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 lg:block">
<div className="absolute left-0 top-0 h-48 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/30 to-transparent" id="beam-0"></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 md:block">
<div className="absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/20 to-transparent" id="beam-1"></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 sm:block">
<div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/40 to-transparent" id="beam-2"></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 md:block">
<div className="absolute left-0 top-0 h-56 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/20 to-transparent" id="beam-3"></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 lg:block">
<div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/30 to-transparent" id="beam-4"></div>
</div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 pt-4">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between border border-[#171A1F]/80 bg-[#050505]/85 backdrop-blur-md px-4 sm:px-5 md:px-6 py-3">

<a className="flex items-center group shrink-0 min-w-0" href="#">
<span className="font-display text-xs tracking-tighter uppercase text-[#F5F7FA] whitespace-nowrap truncate group-hover:text-[#CFAE6E] transition-colors duration-300">
              PARALLELWORLDS
            </span>
</a>

<div className="hidden xl:flex items-center border border-[#171A1F]/80 bg-[#0C0D10]/90">
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#thesis">Thesis</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#principles">Principles</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 border-r border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#architecture">Architecture</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-6 py-3 transition-colors duration-300 hover:text-[#CFAE6E]" href="#applications">Realities</a>
</div>

<div className="hidden xl:flex items-center">
<a className="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 sm:px-5 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#thesis">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Initialize</span>
</a>
</div>

<div className="hidden md:flex xl:hidden items-center relative">
<button aria-expanded="false" className="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" id="tablet-menu-toggle" type="button">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Menu</span>
<iconify-icon className="text-sm transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="tablet-menu-chevron" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden absolute right-0 top-full mt-2 w-64 border border-[#171A1F]/80 bg-[#050505]/95 backdrop-blur-md" id="tablet-menu">
<div className="flex flex-col">
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#thesis">Thesis</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#principles">Principles</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#architecture">Architecture</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#applications">Realities</a>
<div className="p-4">
<a className="group inline-flex w-full items-center justify-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#thesis">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Initialize</span>
</a>
</div>
</div>
</div>
</div>

<button aria-expanded="false" className="md:hidden flex items-center justify-center text-[#F5F7FA] transition-colors duration-300 hover:text-[#CFAE6E]" id="menu-toggle" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="md:hidden hidden mt-2 border border-[#171A1F]/80 bg-[#050505]/95 backdrop-blur-md" id="mobile-menu">
<div className="flex flex-col">
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#thesis">Thesis</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#principles">Principles</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#architecture">Architecture</a>
<a className="font-display text-xs tracking-widest uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#applications">Realities</a>
<div className="p-4">
<a className="group inline-flex w-full items-center justify-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-xs tracking-widest uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#thesis">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Initialize</span>
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
<div className="absolute left-1/2 bottom-[18%] -translate-x-1/2 h-32 w-[32rem] bg-[#9ED8FF]/10 blur-[80px]"></div>
</div>
<div className="absolute top-[28%] left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center whitespace-nowrap">
<span className="font-display text-9xl scale-150 leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#d7dde8]/[0.025] via-[#9ED8FF]/[0.05] to-[#d7dde8]/[0.02]">
          PARALLEL
        </span>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-end">
<div className="xl:col-span-8 flex flex-col justify-end min-w-0 relative z-20 pt-10 md:pt-16 xl:pt-0">
<div className="flex items-center gap-4 mb-7 md:mb-9">
<span className="w-7 md:w-10 h-px bg-[#9ED8FF] shrink-0"></span>
<span className="font-display text-xs uppercase tracking-widest text-[#B8C0CC] leading-tight">
              Phase 01 — Concept Initialization
            </span>
</div>
<h1 className="font-display uppercase leading-none tracking-tighter mb-7 md:mb-8 max-w-full min-w-0">
<span className="block text-[#F5F7FA] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
              Designing
            </span>
<span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#9ED8FF] via-[#74C7FF] to-[#C8EAFF] drop-shadow-[0_0_20px_rgba(158,216,255,0.12)]">
              Parallel
            </span>
<span className="block text-[#DCE3EE] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
              Worlds
            </span>
</h1>
<p className="text-[#AEB8C6] text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Digital spaces are no longer static screens. They are constructed
            realities. We design immersive atmospheres, structured systems, and
            visual worlds that redefine how brands, products, and future-facing
            ideas are experienced.
          </p>
<div className="md:mt-10 z-20 mt-8 relative">
<a className="group inline-flex items-center gap-4 border border-[#232833] bg-[#0C0D10]/90 px-5 md:px-7 py-3.5 md:py-4 font-display text-xs uppercase tracking-widest text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#thesis">
<span className="inline-flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Enter World</span>
</span>
<iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
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
<span className="font-display text-xs uppercase tracking-widest text-[#7D8794] pt-0.5">Coordinates</span>
<span className="text-xs text-[#E4EBF4] tracking-wide uppercase text-right leading-relaxed">
<span className="block whitespace-nowrap">40.7128° N</span>
<span className="block whitespace-nowrap">74.0060° W</span>
</span>
</div>
<div className="flex items-start justify-between gap-6 border-b border-[#171A1F]/70 pb-3">
<span className="font-display text-xs uppercase tracking-widest text-[#7D8794]">Status</span>
<span className="text-xs text-[#BFD8EE] tracking-wide uppercase whitespace-nowrap">Active</span>
</div>
<div className="flex items-start justify-between gap-6">
<span className="font-display text-xs uppercase tracking-widest text-[#7D8794]">Protocol</span>
<span className="text-xs text-[#E4EBF4] tracking-wide uppercase whitespace-nowrap">Editorial Thesis</span>
</div>
</div>
<div className="mt-5 flex items-center gap-2">
<span className="w-1 h-1 bg-[#CFAE6E]"></span>
<span className="text-xs uppercase tracking-widest text-[#8A93A1]">Signal Calibrated</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-28 pb-28 md:py-32 overflow-hidden" id="thesis">
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
<span className="text-xs uppercase text-[#D6C29A] tracking-widest font-display">02 / The Thesis</span>
</div>
</div>
<div className="xl:col-span-9">
<h2 className="font-display leading-tight tracking-tight max-w-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F7FA]">
              The interface is a boundary.
              <span className="text-[#9ED8FF]">We are dismantling it to build immersive logic systems</span>
<span className="text-[#DCE3EE]">where interaction feels like habitation.</span>
</h2>
<div className="mt-10 md:mt-12 h-px w-full bg-gradient-to-r from-[#171A1F] via-[#232833] to-transparent"></div>
<div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl">
<p className="text-[#9AA6B5] text-sm md:text-base leading-relaxed font-light">
                Historically, we have treated the digital as a flat surface — a
                canvas for displaying information. But as computational power
                aligns with spatial awareness, this paradigm shatters. The web
                is evolving into a series of dimensional spaces.
              </p>
<p className="text-[#9AA6B5] text-sm md:text-base leading-relaxed font-light">
                To design a parallel world is to author its physics. It requires
                moving beyond aesthetic decoration into the realm of
                architectural behavior. Gravity, resistance, illumination, and
                memory become our new primitives.
              </p>
</div>
<div className="mt-10 md:mt-12 max-w-3xl border-t border-[#171A1F]/80 pt-5">
<div className="flex items-start gap-3">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed">
                  A premium digital world is not defined by style alone, but by
                  atmosphere, structure, and the way perception is guided
                  through space.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 md:py-32 overflow-hidden border-t border-[#171A1F]" id="architecture">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[14%] top-[22%] h-48 w-48 rounded-full bg-[#9ED8FF]/[0.025] blur-[90px]"></div>
<div className="absolute right-[12%] bottom-[16%] h-40 w-40 rounded-full bg-[#CFAE6E]/[0.02] blur-[100px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="overflow-hidden flex bg-[#0C0D10]/50 h-full min-h-[400px] p-8 md:p-12 relative items-center border border-[#171A1F]">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(158,216,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9ED8FF]/30 to-transparent"></div>
<div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#CFAE6E]/18 to-transparent"></div>
<div className="z-10 relative w-full">
<div className="relative mx-auto w-full max-w-md h-72">
<div className="absolute inset-8 border border-[#171A1F] rotate-[-18deg] transition-transform duration-700 hover:rotate-[-10deg]"></div>
<div className="absolute inset-4 border border-[#171A1F] rotate-[-12deg] bg-[#050505]/60 backdrop-blur-sm transition-transform duration-700 hover:rotate-[-6deg]"></div>
<div className="border border-[#171A1F] bg-[#0C0D10] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48c10a46-acf9-458b-938a-bb6cfa1120f4_3840w.jpg')] bg-cover bg-center absolute inset-0 rotate-[-6deg] opacity-40 grayscale mix-blend-screen transition-transform duration-700 hover:rotate-0"></div>
<div className="absolute -left-4 top-6 flex items-center gap-2 transform transition-transform duration-500 hover:translate-x-2">
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#9ED8FF]">L.01</span>
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-xs tracking-widest text-[#F5F7FA] uppercase">Foundation</div>
</div>
<div className="absolute right-0 top-24 flex items-center gap-2 transform transition-transform duration-500 hover:-translate-x-2">
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-xs tracking-widest text-[#F5F7FA] uppercase">Signal</div>
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#9ED8FF]">L.02</span>
</div>
<div className="absolute left-6 bottom-10 flex items-center gap-2 transform transition-transform duration-500 hover:translate-x-2">
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#9ED8FF]">L.03</span>
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-xs tracking-widest text-[#F5F7FA] uppercase">Behavior</div>
</div>
<div className="absolute right-8 bottom-2 flex items-center gap-2 transform transition-transform duration-500 hover:-translate-x-2">
<div className="inline-flex items-center gap-2 bg-[#12141A] border border-[#171A1F] px-3 py-1.5 text-xs tracking-widest text-[#F5F7FA] uppercase">Perception</div>
<span className="flex h-8 w-10 items-center justify-center bg-[#050505] border border-[#171A1F] font-display text-xs text-[#CFAE6E]">L.04</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-10">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4">
<span className="w-8 h-px bg-[#CFAE6E]"></span>
<p className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">03 / System Architecture</p>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F5F7FA] leading-tight max-w-sm">
                Built in <span className="text-[#9ED8FF]">layers</span>.
              </h2>
<p className="text-[#B8C0CC] text-sm md:text-base font-light max-w-xl leading-relaxed">
                A parallel world is not styled into existence. It is constructed
                through a sequence of interdependent layers — each one
                stabilizing the next, each one shaping how the environment is
                seen, understood, and inhabited.
              </p>
</div>
<div className="space-y-8">
<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">L.01</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Spatial Foundation</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">The underlying geometry of the world — scale, alignment, depth, containment, and the structural logic that gives every element a place to exist.</p>
</div>
</div>
<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">L.02</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Visual Signal</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">Typography, contrast, material language, and directional cues transform the structure into something legible, atmospheric, and emotionally precise.</p>
</div>
</div>
<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#9ED8FF] transition-colors">L.03</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Behavior Ruleset</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">Motion, response, sequencing, and state change define how the world behaves over time — not as animation for decoration, but as a readable system of cause and effect.</p>
</div>
</div>
<div className="flex gap-6 group cursor-default">
<div className="font-display text-xs text-[#7D8794] mt-1 w-8 group-hover:text-[#CFAE6E] transition-colors">L.04</div>
<div className="flex-1">
<h3 className="font-display text-lg tracking-tight uppercase text-[#F5F7FA]">Perceptual Tone</h3>
<p className="mt-2 text-[#9AA6B5] text-sm font-light leading-relaxed">The final layer: mood, tension, and sensory coherence. This is where a digital interface stops feeling assembled and starts feeling inhabited.</p>
</div>
</div>
</div>
<div className="max-w-2xl border-t border-[#171A1F]/80 pt-5">
<div className="flex items-start gap-3">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed">
                  Architecture is not a visual layer. It is the hidden order
                  that allows immersion to feel inevitable.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 md:py-32 bg-[#0C0D10] border-t border-[#171A1F] overflow-hidden" id="applications">
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
<h2 className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">04 / Projected Realities</h2>
</div>
<h3 className="font-display uppercase leading-tight tracking-tight text-[#F5F7FA] text-3xl sm:text-4xl md:text-5xl max-w-sm">
              Constructed <span className="block text-[#9ED8FF]">Environments</span>
</h3>
<p className="text-sm md:text-base text-[#B8C0CC] font-light mt-5 max-w-2xl leading-relaxed">
              A premium digital world must translate across formats, surfaces,
              and contexts. These realities show how the same architectural
              logic can become editorial, product-driven, spatial, or
              experiential without losing coherence.
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
<img alt="Editorial Environments" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/889ebd8a-b88e-43e7-82e3-7678d849acc2_3840w.jpg?w=800&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9ED8FF]/30 to-transparent"></div>
</div>
<div className="relative z-10 p-6 sm:p-8 -mt-12">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-xs uppercase tracking-widest text-[#9ED8FF]">ENV.01</span>
</div>
<h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#F5F7FA]">Editorial Environments</h4>
<p className="mt-3 text-sm text-[#9AA6B5] font-light leading-relaxed max-w-2xl">
                Narrative-first interfaces where typography, image, and pacing
                turn a brand story into a navigable atmosphere.
              </p>
<div className="mt-6 flex items-start gap-3 border-t border-[#171A1F]/80 pt-5 max-w-2xl">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed">Designed for brands that need presence, not just presentation.</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg uppercase tracking-tight text-[#F5F7FA]">Product Realities</h4>
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-xs uppercase tracking-widest text-[#9ED8FF]">ENV.02</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">Software experiences that feel spatial, focused, and materially intentional.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Product" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfa9776b-475d-4470-9c26-68e42de7819a_3840w.webp?w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg uppercase tracking-tight text-[#F5F7FA]">Spatial Brands</h4>
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-xs uppercase tracking-widest text-[#9ED8FF]">ENV.03</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">Identities expressed as environments with mood, hierarchy, and depth.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Brands" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eee1c0ce-00c6-479b-becf-5e5e329874d0_3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg uppercase tracking-tight text-[#F5F7FA]">Future Systems</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">ENV.04</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">Speculative interfaces shaped for post-screen behavior and adaptive perception.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Systems" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dde61ef6-b064-4587-a169-35a3c016971f_3840w.webp?w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#CFAE6E]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg uppercase tracking-tight text-[#F5F7FA]">Spatial Commerce</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">ENV.05</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">Transactions and decision paths embedded within immersive environments.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Commerce" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/f5a94d93-6b45-416e-94fe-38c2831ed252/3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg uppercase tracking-tight text-[#F5F7FA]">Neural Mapping</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-xs uppercase tracking-widest text-[#7D8794]">ENV.06</span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed">Intent translated directly into environmental response and adaptive states.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Mapping" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47f323b4-9880-45f4-aa62-4a5134475d97_3840w.webp?w=800&amp;q=80"/>
</div>
</div>
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
<span className="font-display text-xs uppercase tracking-widest text-[#D6C29A]">06 / Closing Vision</span>
<span className="w-8 md:w-10 h-px bg-[#CFAE6E]"></span>
</div>
<h2 className="font-display uppercase leading-none tracking-tighter text-[#F5F7FA] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[16ch] mx-auto">
<span className="block">The next interface</span>
<span className="block text-[#9ED8FF]">is not a screen.</span>
<span className="block text-[#DCE3EE]">It is a reality.</span>
</h2>
<p className="mt-8 md:mt-10 max-w-2xl mx-auto text-sm md:text-base text-[#B8C0CC] font-light leading-relaxed">
            Parallel Worlds creates immersive digital environments for brands,
            products, and future-facing ideas — spaces where atmosphere,
            structure, and behavior become part of the story itself.
          </p>
<div className="mt-8 md:mt-10 flex items-start justify-center gap-3 max-w-2xl mx-auto border-t border-[#171A1F]/80 pt-5">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed text-left">
              Built for brands that want to be entered, not merely viewed.
            </p>
</div>
<div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center gap-4 border border-[#232833] bg-[#0C0D10]/90 px-6 md:px-7 py-4 font-display text-xs uppercase tracking-widest text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#">
<span className="inline-flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Initialize Contact</span>
</span>
<iconify-icon className="text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-3 border border-[#171A1F] bg-transparent px-6 md:px-7 py-4 font-display text-xs uppercase tracking-widest text-[#B8C0CC] transition-all duration-300 hover:border-[#9ED8FF]/40 hover:text-[#9ED8FF]" href="#applications">
<span>View Realities</span>
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
<span className="font-display text-xs tracking-tighter uppercase text-[#F5F7FA]">
                PARALLELWORLDS
              </span>
</div>
<p className="mt-5 text-sm text-[#9AA6B5] font-light leading-relaxed max-w-sm">
              We design immersive digital environments for brands, products, and
              future-facing ideas — worlds shaped by atmosphere, structure, and
              perceptual clarity.
            </p>
<div className="mt-6 flex items-start gap-3 border-t border-[#171A1F]/80 pt-5 max-w-sm">
<span className="mt-1.5 w-1.5 h-1.5 bg-[#CFAE6E] shrink-0"></span>
<p className="text-xs uppercase tracking-widest text-[#A08E68] leading-relaxed">
                Built for clients who want to be remembered as spaces, not pages.
              </p>
</div>
</div>
<div className="grid gap-10 sm:grid-cols-3 lg:gap-14">
<div>
<p className="font-display text-xs tracking-widest uppercase text-[#D6C29A]">Explore</p>
<ul className="mt-5 space-y-3">
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-all duration-300 hover:translate-x-[2px] inline-block" href="#thesis">Thesis</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#architecture">Architecture</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#applications">Realities</a></li>
</ul>
</div>
<div>
<p className="font-display text-xs tracking-widest uppercase text-[#D6C29A]">Studio</p>
<ul className="mt-5 space-y-3">
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Method</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Process</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="font-display text-xs tracking-widest uppercase text-[#D6C29A]">Connect</p>
<ul className="mt-5 space-y-3">
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Instagram</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs uppercase tracking-widest text-[#7D8794] hover:text-[#9ED8FF] transition-colors" href="#">Are.na</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 border-t border-[#171A1F] pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs uppercase tracking-widest text-[#4A505C]">
            Sys.Rev.01 ©
            <span className="font-display text-[#7D8794]">MMXXVI</span>
            Parallel Worlds
          </p>
<div className="flex flex-wrap items-center gap-6">
<a className="text-xs uppercase tracking-widest text-[#4A505C] hover:text-[#9ED8FF] transition-colors" href="#">Imprint</a>
<a className="text-xs uppercase tracking-widest text-[#4A505C] hover:text-[#9ED8FF] transition-colors" href="#">Privacy</a>
<a className="text-xs uppercase tracking-widest text-[#4A505C] hover:text-[#9ED8FF] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
