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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


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
          gsap.fromTo(menu,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
          );
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
          const clickedInsideTabletMenu =
            tabletMenu.contains(event.target) || tabletMenuToggle.contains(event.target);

          if (!clickedInsideTabletMenu && !tabletMenu.classList.contains('hidden')) {
            tabletMenu.classList.add('hidden');
            tabletMenuToggle.setAttribute('aria-expanded', 'false');

            if (tabletMenuChevron) {
              tabletMenuChevron.classList.remove('rotate-180');
            }
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
          gsap.from(navItems, {
            y: 24,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.1
          });
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
          gsap.to(heroGhost, {
            y: -60,
            ease: 'none',
            scrollTrigger: {
              trigger: 'section.min-h-screen',
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });
        }

        if (heroPhase) {
          heroTl.from(heroPhase, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
        }

        if (heroLines.length) {
          heroTl.from(heroLines, {
            y: 40,
            opacity: 0,
            filter: 'blur(6px)',
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
          }, 0.2);
        }

        if (heroPara) {
          heroTl.from(heroPara, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
        }

        if (heroCta) {
          heroTl.from(heroCta, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.8);
        }

        if (heroMeta) {
          const isDesktop = window.innerWidth >= 1280;
          heroTl.from(heroMeta, {
            x: isDesktop ? 24 : 0,
            y: isDesktop ? 0 : 24,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          }, 1.0);

          gsap.to(heroMeta, {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: 'section.min-h-screen',
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });
        }

        const thesis = document.getElementById('thesis');
        if (thesis) {
          const thesisEyebrow = thesis.querySelector('.max-w-7xl .grid > div:nth-child(1) > div');
          const thesisStatement = thesis.querySelector('h2');
          const thesisDivider = thesis.querySelector('h2 + div');
          const thesisParas = thesis.querySelectorAll('h2 ~ div.grid > p');
          const thesisNote = thesis.querySelector('h2 ~ div.max-w-3xl');

          const thesisTl = gsap.timeline({
            scrollTrigger: {
              trigger: thesis,
              start: 'top 75%',
            }
          });

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

          const archTl = gsap.timeline({
            scrollTrigger: {
              trigger: arch,
              start: 'top 75%'
            }
          });

          if (archEyebrow) archTl.from(archEyebrow, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
          if (archTitle) archTl.from(archTitle, { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
          if (archSub) archTl.from(archSub, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.3);

          if (actualBases.length) {
            actualBases.forEach((base, i) => {
              archTl.from(base, {
                opacity: 0,
                y: 20,
                rotation: '-=6',
                duration: 1,
                ease: 'power3.out'
              }, 0.4 + i * 0.1);
            });
          }

          if (archChips.length) {
            archTl.from(archChips, {
              opacity: 0,
              y: 10,
              x: (i) => i % 2 === 0 ? -10 : 10,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out'
            }, 0.8);
          }

          if (archSteps.length) {
            archTl.from(archSteps, {
              opacity: 0,
              y: 18,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out'
            }, 0.6);
          }
        }

        const apps = document.getElementById('applications');
        if (apps) {
          const appsEyebrow = apps.querySelector('.mb-16 .flex.items-center.gap-4');
          const appsTitle = apps.querySelector('h3');
          const appsSub = apps.querySelector('h3 + p');
          const largeCard = apps.querySelector('.grid > div:first-child');
          const smallCards = apps.querySelectorAll('.grid > div:not(:first-child)');

          const appsTl = gsap.timeline({
            scrollTrigger: {
              trigger: apps,
              start: 'top 82%'
            }
          });

          if (appsEyebrow) appsTl.from(appsEyebrow, { x: -18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);
          if (appsTitle) appsTl.from(appsTitle, { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
          if (appsSub) appsTl.from(appsSub, { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.3);

          if (largeCard) {
            appsTl.fromTo(largeCard,
              { y: 30, opacity: 0, scale: 0.985 },
              { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
              0.5
            );

            const largeImg = largeCard.querySelector('img');
            if(largeImg) {
              appsTl.fromTo(largeImg,
                { clipPath: 'inset(4% 0 0 0)' },
                { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.out' },
                0.5
              );
            }
          }

          if (smallCards.length) {
            appsTl.fromTo(smallCards,
              { y: 24, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', clearProps: 'opacity,transform' },
              0.7
            );
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

          const ctaTl = gsap.timeline({
            scrollTrigger: {
              trigger: finalCta,
              start: 'top 82%'
            }
          });

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

          const fTl = gsap.timeline({
            scrollTrigger: {
              trigger: footer,
              start: 'top 85%'
            }
          });

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
    "><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute inset-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed inset-0 z-0 flex justify-center overflow-hidden pointer-events-none">
<div className="flex h-full w-full max-w-7xl justify-evenly border-x border-[#171A1F]/50">
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 lg:block">
<div className="absolute left-0 top-0 h-48 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/30 to-transparent" id="beam-0" style={{transform: 'translateY(371.977px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 md:block">
<div className="absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/20 to-transparent" id="beam-1" style={{transform: 'translateY(928.042px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 sm:block">
<div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/40 to-transparent" id="beam-2" style={{transform: 'translateY(-14.4371px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 md:block">
<div className="absolute left-0 top-0 h-56 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/20 to-transparent" id="beam-3" style={{transform: 'translateY(1070.53px)'}}></div>
</div>
<div className="relative hidden h-full w-px overflow-hidden bg-[#171A1F]/30 lg:block">
<div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-transparent via-[#9ED8FF]/30 to-transparent" id="beam-4" style={{transform: 'translateY(-23.1319px)'}}></div>
</div>
</div>
</div>


<nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 pt-4">
<div className="max-w-7xl mx-auto">
<div className="flex sm:px-5 md:px-6 bg-[#050505]/85 border-[#171A1F]/80 border pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">

<a className="flex items-center gap-3 group shrink-0 min-w-0" href="#" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<svg className="transition-all duration-300 group-hover:stroke-[#CFAE6E] shrink-0" fill="none" height="22" stroke="#9ED8FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" viewbox="0 0 24 24" width="22">
<polyline points="5 17 12 12 19 17"></polyline>
<polyline points="5 12 12 7 19 12"></polyline>
<polyline points="5 7 12 2 19 7"></polyline>
</svg>
<span className="text-[9px] sm:text-[10px] uppercase whitespace-nowrap truncate text-[#F5F7FA] tracking-[0.18em] font-display" data-imt-p="1" data-imt_insert_failed_reason="same_text">USDA <span className="text-[#7D8794]">|| Studio</span></span>
</a>

<div className="hidden xl:flex items-center border border-[#171A1F]/80 bg-[#0C0D10]/90" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<a className="text-[10px] uppercase transition-colors duration-300 hover:text-[#CFAE6E] text-[#B8C0CC] tracking-[0.18em] font-display border-[#171A1F]/80 border-r pt-3 pr-6 pb-3 pl-6" data-imt-p="1" data-imt_insert_failed_reason="same_text" href="#thesis">HOME</a>
<a className="text-[10px] uppercase transition-colors duration-300 hover:text-[#CFAE6E] text-[#B8C0CC] tracking-[0.18em] font-display border-[#171A1F]/80 border-r pt-3 pr-6 pb-3 pl-6" data-imt-p="1" data-imt_insert_failed_reason="same_text" href="/nodes">NODE</a>
<a className="text-[10px] uppercase transition-colors duration-300 hover:text-[#CFAE6E] text-[#B8C0CC] tracking-[0.18em] font-display border-[#171A1F]/80 border-r pt-3 pr-6 pb-3 pl-6" data-imt-p="1" href="#architecture">INVITE</a>
<a className="text-[10px] uppercase transition-colors duration-300 hover:text-[#CFAE6E] text-[#B8C0CC] tracking-[0.18em] font-display pt-3 pr-6 pb-3 pl-6" data-imt-p="1" href="#applications">DOCS</a>
</div>

<div className="hidden xl:flex items-center" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
</div>

<div className="hidden md:flex xl:hidden items-center relative">

<button aria-controls="tablet-menu" aria-expanded="false" aria-label="Open section menu" className="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-[10px] tracking-[0.18em] uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" id="tablet-menu-toggle" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}} type="button">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Menu</span>
<svg className="w-3.5 h-3.5 transition-transform duration-300" fill="none" id="tablet-menu-chevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button><div className="hidden absolute right-0 top-full mt-2 w-[260px] border border-[#171A1F]/80 bg-[#050505]/95 backdrop-blur-md" id="tablet-menu">
<div className="flex flex-col">
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#thesis">
                  Thesis
                </a>
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#principles">
                  Principles
                </a>
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#architecture">
                  Architecture
                </a>
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#applications">
                  Realities
                </a>
<div className="p-4">
<a className="group inline-flex w-full items-center justify-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-[10px] tracking-[0.18em] uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#thesis">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Initialize</span>
</a>
</div>
</div>
</div>
</div>

<a className="group inline-flex items-center gap-4 md:px-7 md:py-4 text-[10px] md:text-[11px] uppercase transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E] text-[#F5F7FA] tracking-[0.18em] font-display bg-[#0C0D10]/90 border-[#232833] border pt-3.5 pr-5 pb-3.5 pl-5" href="#thesis">
<span className="inline-flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span className="" data-imt-p="1">LAUNCH APP</span>
</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="M13 5l7 7-7 7"></path>
</svg>
</a><button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden flex items-center justify-center text-[#F5F7FA] transition-colors duration-300 hover:text-[#CFAE6E]" id="menu-toggle" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}} type="button">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="7" y2="7"></line>
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line className="" x1="4" x2="20" y1="17" y2="17"></line>
</svg>
</button>
</div>

<div className="md:hidden hidden mt-2 border border-[#171A1F]/80 bg-[#050505]/95 backdrop-blur-md" id="mobile-menu">
<div className="flex flex-col">
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#thesis">
              Thesis
            </a>
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#principles">
              Principles
            </a>
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#architecture">
              Architecture
            </a>
<a className="font-display text-[10px] tracking-[0.18em] uppercase text-[#B8C0CC] px-5 py-4 border-b border-[#171A1F]/80 transition-colors duration-300 hover:text-[#CFAE6E]" href="#applications">
              Realities
            </a>

<div className="p-4">
<a className="group inline-flex w-full items-center justify-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-[10px] tracking-[0.18em] uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]" href="#thesis">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span>Initialize</span>
</a>
</div>
</div>
</div>
</div>
</nav>


<section className="min-h-screen flex overflow-hidden z-10 pt-0 pb-0 relative items-center">

<div className="absolute bottom-0 left-0 w-full h-[65vh] flex justify-center items-end overflow-hidden z-0 pointer-events-none">
<canvas className="absolute bottom-0 left-0 w-full h-full" height="1544" id="grid-canvas" width="3602"></canvas>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent">
</div>

<div className="absolute left-1/2 bottom-[18%] -translate-x-1/2 h-[120px] w-[520px] bg-[#9ED8FF]/8 blur-[80px]"></div>
</div>
<div className="md:px-12 grid grid-cols-1 xl:grid-cols-12 xl:gap-12 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-10 gap-y-10 items-end">

<div className="xl:col-span-8 flex flex-col min-w-0 z-20 md:pt-16 xl:pt-0 pt-10 relative justify-end">

<div className="flex gap-4 md:mb-9 mb-7 gap-x-4 gap-y-4 items-center">
<span className="w-7 md:w-10 h-px bg-[#9ED8FF] shrink-0"></span>
<span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase md:tracking-[0.18em] leading-tight text-[#B8C0CC] tracking-[0.16em] font-display" data-imt-p="1">VALUE INFRASTRUCTURE</span>
</div>

<h1 className="font-display uppercase leading-[0.9] tracking-[-0.065em] mb-7 md:mb-8 max-w-full min-w-0">
<span className="block text-[2.55rem] sm:text-[3.6rem] md:text-[4.7rem] lg:text-[5.8rem] xl:text-[6.6rem] text-[#F5F7FA]" data-imt-p="1" style={{filter: 'blur(6px)'}}>
<style className="">
    @keyframes type-aura-emnrk4r554wv2rd0 {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes blink-aura-emnrk4r554wv2rd0 {
      from, to { border-color: transparent; }
      50% { border-color: currentColor; }
    }
  </style>
</span>
<span className="block text-[2.55rem] sm:text-[3.6rem] md:text-[4.7rem] lg:text-[5.8rem] xl:text-[6.6rem] text-6xl text-[#DCE3EE] max-h-none" data-imt-p="1" style={{filter: 'drop-shadow(rgba(158, 216, 255, 0.12) 0px 0px 20px)'}}>BEYOND STABLE.</span><span className="block text-[2.55rem] sm:text-[3.6rem] md:text-[4.7rem] lg:text-[5.8rem] xl:text-[6.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#9ED8FF] via-[#74C7FF] to-[#C8EAFF] drop-shadow-[0_0_20px_rgba(158,216,255,0.12)]" data-imt-p="1" style={{filter: 'none'}}>BUILT FOR VALUE.</span>
</h1>

<p className="text-[0.95rem] sm:text-[1rem] md:text-base md:max-w-[34rem] xl:max-w-[42rem] leading-relaxed font-light text-[#AEB8C6] font-inter max-w-[42rem]" data-imt-p="1">
        Anchored by gold reserves, powered by an expanding multi-asset ecosystem, and fueled by ecological value return
        — USDA is the first stablecoin backed by a real-asset system that continuously grows in value.</p>

<div className="md:mt-10 z-20 mt-8 relative">
<a className="group inline-flex items-center gap-4 md:px-7 md:py-4 text-[10px] md:text-[11px] uppercase transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E] text-[#F5F7FA] tracking-[0.18em] font-display bg-[#0C0D10]/90 border-[#232833] border pt-3.5 pr-5 pb-3.5 pl-5" href="#thesis">
<span className="inline-flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#9ED8FF] transition-colors duration-300 group-hover:bg-[#CFAE6E]"></span>
<span className="" data-imt-p="1">START EARNING NOW</span>
</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="M13 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="xl:col-span-4 flex justify-end relative z-10 mt-10 md:mt-0 md:absolute md:right-12 md:bottom-10 xl:static xl:mt-0">
</div>
</div>
</section>

<div className="flex sm:pt-0 sm:pb-12 pt-4 pr-4 pb-4 pl-4 items-center justify-center" style={{fontFamily: '\'Inter\', sans-serif', color: '#e8edf3', WebkitFontSmoothing: 'antialiased'}}>
<style>
    :root {
      --bg-card: rgba(255, 255, 255, 0.04);
      --surface: rgba(255, 255, 255, 0.04);
      --border: rgba(255, 255, 255, 0.06);
      --border-2: rgba(255, 255, 255, 0.10);
      --text-2: #94a3b8;
      --text-3: #4b5e78;
      --blue: #2563eb;
      --blue-light: #3b82f6;
      --cyan: #0ea5e9;
      --cyan-light: #38bdf8;
      --grad-text: linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #60a5fa 100%);
      --r-lg: 16px;
    }

    .text-gradient {
      background: var(--grad-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .comparison-card {
      padding: 28px;
      border-radius: var(--r-lg);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      gap: 14px;
      transition: all 0.3s ease;
    }

    .comparison-card--old {
      background: rgba(255, 255, 255, 0.015);
    }

    .comparison-card--new {
      background: linear-gradient(180deg, rgba(14, 165, 233, 0.04), rgba(37, 99, 235, 0.015));
      border-color: rgba(14, 165, 233, 0.2);
      box-shadow: 0 0 48px rgba(14, 165, 233, 0.04);
    }

    .comparison-card--new:hover {
      box-shadow: 0 0 60px rgba(14, 165, 233, 0.08);
      border-color: rgba(14, 165, 233, 0.3);
      transform: translateY(-2px);
    }

    .stat-val {
      font-family: 'Outfit', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
    }

    h2 {
      font-family: 'Outfit', sans-serif;
    }
  </style>
<section className="md:pt-0 w-full max-w-4xl pt-0 pb-0">

<div className="flex gap-4 md:mb-9 mb-7 gap-x-4 gap-y-4 items-center">
</div>
<div className="text-center mb-12">
<h2 className="text-[1.2rem] sm:text-[1.4rem] uppercase text-9xl text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">Traditional Stablecoins vs <span className="bg-clip-text font-semibold text-cyan-200 bg-[#c7e9ff]">USDA</span></h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="relative group md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-[2px] rounded-2xl pt-7 pr-7 pb-7 pl-7 shadow-[0_0_48px_rgba(239,68,68,0.08)] hover:shadow-[0_0_60px_rgba(239,68,68,0.15)] overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
<div className="absolute inset-[-100%]" style={{animation: 'spin 4s linear infinite'}}>
<div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_60%,#ef4444_100%)]"></div>
<div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_60%,#ef4444_100%)] blur-md opacity-50"></div>
</div>
</div>

<div className="absolute inset-[1px] bg-[#050505] rounded-[15px] z-0"></div>
<div className="absolute inset-[1px] bg-red-500/10 rounded-[15px] z-0"></div>
<div className="group-hover:shadow-[inset_0_0_0_1px_rgba(239,68,68,0.4)] z-0 transition-shadow duration-300 rounded-[15px] absolute top-[1px] right-[1px] bottom-[1px] left-[1px] shadow-[inset_0_0_0_1px_rgba(239,68,68,0.15)] overflow-hidden">
<div className="absolute inset-0 rounded-[15px] pointer-events-none" style={{padding: '1.5px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}>
<div className="absolute top-1/2 left-1/2 w-[1500px] h-[1500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 75%, #ef4444 100%)'}}></div>
</div>
</div>
<div className="relative z-10 flex items-center gap-3 text-lg font-normal mb-5 text-[#F5F7FA] border-b border-[rgba(255,255,255,0.06)] pb-5" data-imt-p="1">
<svg className="text-[#7D8794]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="8" x2="16" y1="12" y2="12"></line>
</svg>
    Traditional Stablecoins
  </div>
<div className="relative z-10 flex flex-col">
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#3f1616] border border-[#5c1c1c]">
<svg className="text-red-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<div className="text-[0.95rem] sm:text-[1rem] md:text-base md:max-w-[34rem] xl:max-w-[42rem] leading-relaxed font-light text-[#AEB8C6] font-inter max-w-[42rem]" data-imt-p="1">Value exists outside the system — pegged to bank deposits off-chain</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#3f1616] border border-[#5c1c1c]">
<svg className="text-red-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">Single-asset dependency — structurally fragile</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#3f1616] border border-[#5c1c1c]">
<svg className="text-red-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">Value cannot grow — holding generates zero return</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#3f1616] border border-[#5c1c1c]">
<svg className="text-red-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">No ecosystem loop — participants gain nothing from growth</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#3f1616] border border-[#5c1c1c]">
<svg className="text-red-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">No pathway to capital markets — closed system with no upside</div>
</div>
</div>
</div>

<div className="relative group md:p-8 hover:shadow-[0_0_60px_rgba(200,234,255,0.15)] transition-all duration-300 flex flex-col hover:-translate-y-[2px] rounded-2xl pt-7 pr-7 pb-7 pl-7 shadow-[0_0_48px_rgba(200,234,255,0.08)] overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
<div className="absolute inset-[-100%]" style={{animation: 'spin 4s linear infinite'}}>
<div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_60%,#C8EAFF_100%)]"></div>
<div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_60%,#C8EAFF_100%)] blur-md opacity-50"></div>
</div>
</div>

<div className="absolute inset-[1px] bg-[#050505] rounded-[15px] z-0"></div>
<div className="absolute inset-[1px] bg-gradient-to-b from-[#C8EAFF]/[0.08] to-transparent rounded-[15px] z-0"></div>
<div className="group-hover:shadow-[inset_0_0_0_1px_rgba(116,199,255,0.4)] z-0 transition-all duration-300 overflow-hidden group-hover:scale-[1.02] bg-[#74C7FF]/10 rounded-[15px] absolute top-[1px] right-[1px] bottom-[1px] left-[1px] shadow-[inset_0_0_0_1px_rgba(116,199,255,0.15)]">
<div className="absolute inset-0 rounded-[15px] pointer-events-none" style={{padding: '1.5px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}>
<div className="absolute top-1/2 left-1/2 w-[1500px] h-[1500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 75%, #74C7FF 100%)'}}></div>
</div>
</div>

<div className="z-10 flex gap-3 text-lg font-normal text-[#C8EAFF] border-[rgba(255,255,255,0.06)] border-b mb-5 pb-5 relative gap-x-3 gap-y-3 items-center" data-imt-p="1">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<line x1="8" x2="16" y1="17" y2="17"></line>
</svg>
    With USDA
  </div>

<div className="relative z-10 flex flex-col">
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#C8EAFF]/10 border border-[#C8EAFF]/30">
<svg className="text-[#C8EAFF]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">Real assets inside the system — gold reserves anchor the value foundation</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#C8EAFF]/10 border border-[#C8EAFF]/30">
<svg className="text-[#C8EAFF]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">Multi-asset pool — energy, minerals, tokenized equities continuously added</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#C8EAFF]/10 border border-[#C8EAFF]/30">
<svg className="text-[#C8EAFF]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">Value flows in continuously — not collateral-generated, but ecosystem-fueled</div>
</div>
<div className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#C8EAFF]/10 border border-[#C8EAFF]/30">
<svg className="text-[#C8EAFF]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">Ecosystem value return — every participant earns as the system grows</div>
</div>
<div className="flex gap-4 last:border-0 border-[rgba(255,255,255,0.06)] border-b pt-4 pb-4 gap-x-4 gap-y-4 items-start">
<div className="shrink-0 mt-0.5 flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#C8EAFF]/10 border border-[#C8EAFF]/30">
<svg className="text-[#C8EAFF]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="text-base font-light text-[#9AA6B5] leading-relaxed" data-imt-p="1">DAT listing pathway — nodes and holders access Nasdaq equity upside</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-10 md:gap-12 md:px-8 md:py-6 bg-teal-800/10 w-full max-w-5xl border-green-900/40 border rounded-[12px] mr-auto ml-auto pt-6 pr-8 pb-6 pl-8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-md gap-x-6 gap-y-10 items-center justify-between">

<div className="absolute inset-0 rounded-[12px] pointer-events-none" style={{padding: '1.5px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}>
<div className="absolute top-1/2 left-1/2 w-[1500px] h-[1500px] -translate-x-1/2 -translate-y-1/2" style={{background: 'conic-gradient(from 0deg, transparent 75%, #4ade80 100%)', animation: 'spin 4s linear infinite'}}></div>
</div>
<div className="relative z-10 md:max-w-sm w-full text-center md:text-left">
<p className="text-[1.2rem] sm:text-[1.4rem] uppercase text-slate-300 tracking-[-0.03em] font-display" data-imt-p="1">
      Participants who join the USDA ecosystem unlock:
    </p>
</div>
<div className="relative z-10 flex flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 w-full md:w-auto">

<div className="hidden md:block w-px h-20 bg-[#171A1F]"></div>
<div className="flex flex-col items-center justify-center min-w-[100px]">
<span className="text-5xl sm:text-6xl md:text-[4.7rem] font-geist font-normal tracking-tight text-green-400 mb-3 md:mb-4 leading-none flex items-baseline" data-imt-p="1">
<span className="text-4xl sm:text-5xl md:text-6xl mr-1 font-light">×</span>1.3
      </span>
<span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#7D8794] text-center font-display leading-relaxed" data-imt-p="1">
        MAX MINT<br/>RATIO
      </span>
</div>
<div className="w-px h-16 md:h-20 bg-[#171A1F]"></div>
<div className="flex flex-col items-center justify-center min-w-[100px]">
<span className="text-5xl sm:text-6xl md:text-[4.7rem] font-geist font-normal tracking-tight text-green-400 mb-3 md:mb-4 leading-none">
        1.1%
      </span>
<span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#7D8794] text-center font-display leading-relaxed" data-imt-p="1">
        DAILY<br/>YIELD
      </span>
</div>
</div>
</div>
</section>

</div>

<section className="overflow-hidden md:pb-12 z-10 border-[#171A1F] border-t pt-12 pb-12 relative" id="applications">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[12%] top-[16%] h-[180px] w-[180px] rounded-full bg-[#9ED8FF]/[0.025] blur-[90px]"></div>
<div className="absolute right-[10%] bottom-[12%] h-[150px] w-[150px] rounded-full bg-[#CFAE6E]/[0.02] blur-[90px]">
</div>
</div>
<div className="md:px-12 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 gap-x-4 gap-y-4">
<div className="">
<h3 className="uppercase leading-[0.98] text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] text-[#F5F7FA] tracking-[-0.045em] font-display max-w-[10ch]" data-imt-p="1" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
          Constructed
          <span className="block text-[#9ED8FF]" data-imt-p="1">Environments</span>
</h3>
<p className="text-[0.95rem] sm:text-[1rem] md:text-base md:max-w-[34rem] xl:max-w-[42rem] leading-relaxed font-light text-[#AEB8C6] font-inter max-w-[42rem] py-4" data-imt-p="1" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
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
<div className="bg-[#CFAE6E] w-2 h-2"></div>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group overflow-hidden md:col-span-2 md:row-span-2 transition-colors duration-500 hover:border-[#9ED8FF]/30 bg-[#050505] border-[#171A1F] border relative" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="relative overflow-hidden">
<img alt="Editorial Environments" className="aspect-video transition-all duration-700 group-hover:opacity-88 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[1.02] object-auto opacity-100 mix-blend-screen w-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec866a21-31fb-4dc9-8f95-34f551b35305_1600w.png" style={{clipPath: 'inset(4% 0px 0px)'}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent">
</div>
<div className="h-px bg-gradient-to-r from-transparent via-[#9ED8FF]/30 to-transparent absolute top-0 right-0 left-0">
</div>
</div>
<div className="relative z-10 p-6 sm:p-8 -mt-12">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center text-[10px] uppercase text-[#9ED8FF] tracking-widest bg-[#9ED8FF]/10 border-[#9ED8FF]/30 border pt-1 pr-2 pb-1 pl-2" data-imt-p="1">
                  ENV.01
                </span>
</div>
<h4 className="text-[1.2rem] sm:text-[1.4rem] uppercase text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">GOLD-ANCHORED FOUNDATION</h4>
<p className="text-[0.95rem] sm:text-[1rem] md:text-base md:max-w-[34rem] xl:max-w-[42rem] leading-relaxed font-light text-[#AEB8C6] font-inter max-w-[42rem] pt-8 pb-8" data-imt-p="1">The first stablecoin backed by sovereign gold reserves — Laos national mining assets injected directly into the foundation pool, establishing an unshakeable value base. </p><p className="leading-[1.8] md:text-[0.95rem] text-xs font-light text-[#CFAE6E] max-w-2xl" data-imt-p="1">Quote：REAL ASSETS. REAL BACKING. NOT A PROMISE.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="font-display text-lg uppercase tracking-tight text-[#F5F7FA]" data-imt-p="1">
              Product Realities
            </h4>
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-[10px] uppercase tracking-widest text-[#9ED8FF]" data-imt-p="1">
                  ENV.02
                </span>
</div>
<p className="mt-2 text-sm text-[#7D8794] font-light leading-relaxed" data-imt-p="1">
            Software experiences that feel spatial, focused, and materially
            intentional.
          </p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Product Realities" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64d87067-c381-4e65-aa52-ff3919b872d9_1600w.png"/>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="uppercase text-lg text-[#F5F7FA] tracking-tight font-display" data-imt-p="1">ECOSYSTEM VALUE RETURN</h4>
<span className="inline-flex items-center border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-[10px] uppercase tracking-widest text-[#9ED8FF]" data-imt-p="1">
                  ENV.03
                </span>
</div>
<p className="leading-relaxed text-sm font-light text-[#7D8794] mt-2" data-imt-p="1">Every project connected to USDA channels value back into the system — a self-reinforcing loop that strengthens the hub with every participant.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Spatial Brands" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b221391-72f6-4b9e-b893-04bfa2aa41fe_1600w.png"/>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="uppercase text-lg text-[#F5F7FA] tracking-tight font-display" data-imt-p="1">DAT LISTING PATHWAY</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-[10px] uppercase tracking-widest text-[#7D8794]" data-imt-p="1">
                  ENV.04
                </span>
</div>
<p className="leading-relaxed text-sm font-light text-[#7D8794] mt-2" data-imt-p="1">Quality projects gain access to Nasdaq capital markets. Nodes and holders share in the equity upside.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Future Systems" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cac00003-88b3-4914-91e0-b77b13aa64c0_1600w.png"/>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#CFAE6E]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="uppercase text-lg text-[#F5F7FA] tracking-tight font-display" data-imt-p="1">NODE EARNING SYSTEM</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-[10px] uppercase tracking-widest text-[#7D8794]" data-imt-p="1">
                  ENV.05
                </span>
</div>
<p className="leading-relaxed text-sm font-light text-[#7D8794] mt-2" data-imt-p="1">Every participant becomes an exchanger. Mint ratios up to ×1.3, daily yields up to 1.1%, referral rewards up to 45%.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Spatial Commerce" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/f5a94d93-6b45-416e-94fe-38c2831ed252/3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#050505] border border-[#171A1F] transition-all duration-500 hover:border-[#9ED8FF]/30">
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="uppercase text-lg text-[#F5F7FA] tracking-tight font-display" data-imt-p="1">SOVEREIGN ENDORSEMENT</h4>
<span className="inline-flex items-center border border-[#171A1F] bg-[#12141A] px-2 py-1 text-[10px] uppercase tracking-widest text-[#7D8794]" data-imt-p="1">
                  ENV.06
                </span>
</div>
<p className="leading-relaxed text-sm font-light text-[#7D8794] mt-2" data-imt-p="1">ointly backed by the Laos National Development Fund, MCN Global, and multiple listed companies — institutional-grade trust at every layer.</p>
<div className="mt-6 overflow-hidden border border-[#171A1F]">
<img alt="Neural Mapping" className="aspect-video w-full object-cover opacity-60 grayscale mix-blend-screen transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47f323b4-9880-45f4-aa62-4a5134475d97_3840w.webp?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="overflow-hidden md:pt-0 md:pb-0 z-10 border-[#171A1F] border-t pt-0 pb-0 relative" id="final-cta">

<div className="absolute inset-0 z-0 pointer-events-none opacity-70" style={{opacity: '0.7'}}>
<div className="absolute inset-0" data-us-project="FixNvEwvWwbu3QX9qC3F">
<div data-us-text="id-1k9pdzxi9yfseyxpzbeva" style={{width: '5px', top: '440.405px', left: '877.481px', fontSize: '10px', lineHeight: '65.1906px', letterSpacing: '0px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'left', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>
        .</div>
<div data-us-text="id-q5xh563b2f709auc5edrp" style={{width: '5px', top: '440.405px', left: '877.481px', fontSize: '10px', lineHeight: '65.1906px', letterSpacing: '0px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'left', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>
        .</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 z-[1]">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>

<div className="absolute inset-0 bg-[#050505]/60"></div>

<div className="absolute left-1/2 top-[18%] -translate-x-1/2 h-[220px] w-[520px] bg-[#9ED8FF]/[0.05] blur-[120px]">
</div>
<div className="absolute right-[18%] bottom-[20%] h-[160px] w-[160px] bg-[#CFAE6E]/[0.03] blur-[90px] rounded-full">
</div>

<div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(158,216,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,216,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]">
</div>
</div>
<meta charset="utf-8"/>
<div className="md:px-12 md:pt-0 md:pb-0 w-full max-w-7xl z-10 mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 relative">
<div className="text-center max-w-2xl mr-auto mb-16 ml-auto">
<h2 className="md:text-[3.2rem] leading-[0.98] uppercase text-3xl font-normal text-[#F5F7FA] tracking-[-0.045em] font-display pt-12 pb-0" data-imt-p="1">HOW IT WORKS <br className="hidden md:block"/> <span className="block text-4xl text-slate-600 py-4" data-imt-p="1" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>A Self-Sustaining Growth System
</span></h2>
<p className="text-[0.95rem] sm:text-[1rem] md:text-base md:max-w-[34rem] xl:max-w-[42rem] leading-relaxed font-light text-[#AEB8C6] font-inter max-w-[42rem] pt-4 pb-4" data-imt-p="1" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Five steps that form a self-reinforcing value loop — the larger the ecosystem, the stronger USDA becomes.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-[#050505] backdrop-blur-md rounded-full z-0 hidden md:flex flex-col justify-between items-center py-0 border border-[#171A1F] shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)]">
<div className="absolute inset-y-0 w-px bg-[#171A1F] rounded-full overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#9ED8FF] to-transparent shadow-[0_0_15px_rgba(158,216,255,0.8)]" style={{animation: 'text-slide-aura 3s linear infinite'}}>
<style>
              @keyframes text-slide-aura {
                0% {
                  top: -150px;
                  opacity: 0;
                }

                10% {
                  opacity: 1;
                }

                90% {
                  opacity: 1;
                }

                100% {
                  top: 100%;
                  opacity: 0;
                }
              }
            </style>
</div>
</div>

<div className="w-10 h-10 rounded-full bg-[#0C0D10] border border-[#232833] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mt-5">
<div className="w-2.5 h-2.5 rounded-full bg-[#9ED8FF] shadow-[0_0_10px_rgba(158,216,255,0.8)] border border-[#9ED8FF]/50">
</div>
</div>

<div className="w-10 h-10 rounded-full bg-[#0C0D10] border border-[#232833] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="w-2.5 h-2.5 rounded-full bg-[#CFAE6E] shadow-[0_0_10px_rgba(207,174,110,0.8)] border border-[#CFAE6E]/50">
</div>
</div>

<div className="w-10 h-10 rounded-full bg-[#0C0D10] border border-[#232833] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="w-2.5 h-2.5 rounded-full bg-[#74C7FF] shadow-[0_0_10px_rgba(116,199,255,0.8)] border border-[#74C7FF]/50">
</div>
</div>

<div className="w-10 h-10 rounded-full bg-[#0C0D10] border border-[#232833] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mb-5">
<div className="w-2.5 h-2.5 rounded-full bg-[#D6C29A] shadow-[0_0_10px_rgba(214,194,154,0.8)] border border-[#D6C29A]/50">
</div>
</div>
</div>

<div className="z-10 flex flex-col md:flex-row md:items-center gap-8 group mb-16 relative gap-x-8 gap-y-8 items-start">
<div className="md:hidden w-full mb-4">
<div className="inline-flex items-center gap-2 border border-[#9ED8FF]/30 bg-[#9ED8FF]/10 px-2 py-1 text-[10px] font-display text-[#9ED8FF] tracking-[0.18em] uppercase mb-3">
            Signal Detection
          </div>
<h3 className="text-xl font-display text-[#F5F7FA] uppercase tracking-[-0.03em]">
            Identify high-intent accounts early
          </h3>
<p className="text-[0.95rem] text-[#9AA6B5] font-light mt-2 leading-relaxed">
            Monitor behavioral and firmographic signals across your market
            to identify companies actively researching your category.
          </p>
</div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
<div className="inline-flex gap-2 text-[10px] uppercase text-[#9ED8FF] tracking-[0.18em] font-display text-right bg-[#9ED8FF]/10 border-[#9ED8FF]/30 border mb-3 pt-1 pr-2 pb-1 pl-2 gap-x-2 gap-y-2 items-center" data-imt-p="1">STEP 01</div>
<h3 className="text-[1.2rem] sm:text-[1.4rem] uppercase text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">Real Assets Enter</h3>
<p className="text-[0.95rem] leading-relaxed font-light text-[#9AA6B5] mt-2 ml-auto" data-imt-p="1">Laos sovereign gold mining reserves are the first to enter the foundation asset pool, completing the initial value anchor for the entire system.</p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="transition-all duration-500 hover:border-[#9ED8FF]/30 overflow-hidden group bg-[#050505] border-[#171A1F] border mt-4 p-4 sm:p-6 relative w-full">

<div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#9ED8FF]/5 rounded-full blur-2xl md:blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

<div className="flex z-10 mb-4 sm:mb-6 relative items-center justify-between">
<div className="flex items-center gap-2 sm:gap-3 w-full">
<div className="flex sm:w-7 sm:h-7 shrink-0 bg-[#9ED8FF]/10 w-6 h-6 border-[#9ED8FF]/30 border rounded-sm items-center justify-center">
<svg className="sm:w-4 sm:h-4 w-[14px] h-[14px]" data-icon-replaced="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(158, 216, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">

<circle className="" cx="12" cy="12" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="2.5;3.5;2.5"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.7;1;0.7"></animate>
</circle>

<circle className="" cx="12" cy="12" opacity="0.5" r="9" stroke-dasharray="4 4">
<animatetransform attributename="transform" dur="8s" from="0 12 12" repeatcount="indefinite" to="360 12 12" type="rotate"></animatetransform>
</circle>

<path d="M12 9V3">
<animate attributename="stroke-opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="12" cy="2" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path d="M9.5 13.5L5 17.5">
<animate attributename="stroke-opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle className="" cx="4" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path className="" d="M14.5 13.5L19 17.5">
<animate attributename="stroke-opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="20" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
</svg>
</div>
<span className="text-[9px] sm:text-[10px] uppercase sm:tracking-[0.18em] truncate sm:overflow-visible sm:whitespace-normal text-[#B8C0CC] tracking-[0.12em] font-display" data-imt-p="1">Real Assets Enter</span>
</div>
</div>

<div className="z-10 border-y sm:mb-5 sm:pt-3 sm:pb-3 flex w-full mb-4 pt-2 pb-2 relative items-center justify-center">
<svg className="w-full h-auto max-w-full drop-shadow-lg pointer-events-none" viewbox="0 0 300 120">
<defs>

<radialgradient cx="50%" cy="50%" id="bagGlowGrad" r="50%">
<stop offset="0%" stop-color="#9ED8FF" stop-opacity="0.5"></stop>
<stop offset="50%" stop-color="#9ED8FF" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#9ED8FF" stop-opacity="0"></stop>
</radialgradient>

<g id="dollarSymbol">
<circle fill="#050505" r="8" stroke="#9ED8FF" strokeWidth="1.5" style={{filter: 'drop-shadow(0 0 3px #9ED8FF)'}}></circle>
<text fill="#9ED8FF" fontFamily="Inter, sans-serif" fontSize="12" font-weight="bold" text-anchor="middle" x="0" y="4.5">$</text>
</g>

<g id="moneyBag">
<path d="M-16,-4 C-26,16 -20,32 0,32 C20,32 26,16 16,-4 C10,-10 5,-12 0,-12 C-5,-12 -10,-10 -16,-4 Z" fill="#050505" stroke="#9ED8FF" strokeWidth="2" style={{filter: 'drop-shadow(0 0 6px #9ED8FF)'}}></path>
<path d="M-10,-12 C-15,-20 -20,-24 -20,-24 C-10,-22 10,-22 20,-24 C20,-24 15,-20 10,-12 Z" fill="#050505" stroke="#9ED8FF" strokeWidth="2"></path>
<path d="M-12,-12 L12,-12" stroke="#9ED8FF" strokeWidth="2"></path>
<text fill="#9ED8FF" fontFamily="Inter, sans-serif" fontSize="18" font-weight="bold" text-anchor="middle" x="0" y="14">$</text>
</g>
</defs>

<path d="M 30,30 C 100,10 180,45 230,55" fill="none" stroke="#9ED8FF" stroke-dasharray="3 5" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 30,90 C 100,110 180,75 230,65" fill="none" stroke="#9ED8FF" stroke-dasharray="3 5" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 20,60 C 100,60 180,60 230,60" fill="none" stroke="#9ED8FF" stroke-dasharray="3 5" stroke-opacity="0.3" strokeWidth="1.5"></path>

<g fill="#050505" stroke="#9ED8FF" strokeWidth="2">
<circle cx="30" cy="30" r="10"></circle>
<circle cx="30" cy="90" r="10"></circle>
<circle cx="20" cy="60" r="12"></circle>
</g>

<g fill="#9ED8FF" fontFamily="Inter, sans-serif" fontSize="12" font-weight="bold" text-anchor="middle">
<text x="30" y="34.5">$</text>
<text x="30" y="94.5">$</text>
<text x="20" y="64.5">$</text>
</g>

<circle cx="30" cy="30" fill="none" r="10" stroke="#9ED8FF" strokeWidth="1.5">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="10; 20"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.8; 0"></animate>
</circle>
<circle cx="30" cy="90" fill="none" r="10" stroke="#9ED8FF" strokeWidth="1.5">
<animate attributename="r" dur="2.5s" repeatcount="indefinite" values="10; 20"></animate>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.8; 0"></animate>
</circle>
<circle cx="20" cy="60" fill="none" r="12" stroke="#9ED8FF" strokeWidth="1.5">
<animate attributename="r" dur="1.8s" repeatcount="indefinite" values="12; 24"></animate>
<animate attributename="opacity" dur="1.8s" repeatcount="indefinite" values="0.8; 0"></animate>
</circle>


<g>
<animatemotion dur="3s" path="M 30,30 C 100,10 180,45 230,55" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>
<g>
<animatemotion begin="1s" dur="3s" path="M 30,30 C 100,10 180,45 230,55" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1s" dur="3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>
<g>
<animatemotion begin="2s" dur="3s" path="M 30,30 C 100,10 180,45 230,55" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="2s" dur="3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>

<g>
<animatemotion begin="0.5s" dur="3.3s" path="M 30,90 C 100,110 180,75 230,65" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.5s" dur="3.3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>
<g>
<animatemotion begin="1.6s" dur="3.3s" path="M 30,90 C 100,110 180,75 230,65" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.6s" dur="3.3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>
<g>
<animatemotion begin="2.7s" dur="3.3s" path="M 30,90 C 100,110 180,75 230,65" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="2.7s" dur="3.3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>

<g>
<animatemotion begin="0.2s" dur="2.7s" path="M 20,60 C 100,60 180,60 230,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.2s" dur="2.7s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>
<g>
<animatemotion begin="1.1s" dur="2.7s" path="M 20,60 C 100,60 180,60 230,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.1s" dur="2.7s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>
<g>
<animatemotion begin="2.0s" dur="2.7s" path="M 20,60 C 100,60 180,60 230,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="2.0s" dur="2.7s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#dollarSymbol"></use>
</g>


<circle cx="240" cy="55" fill="url(#bagGlowGrad)" r="45">
<animate attributename="r" dur="2.5s" repeatcount="indefinite" values="40; 50; 40"></animate>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.6; 1; 0.6"></animate>
</circle>

<g transform="translate(240 55)">

<circle cx="0" cy="0" fill="none" r="10" stroke="#9ED8FF" strokeWidth="1.5">
<animate attributename="r" dur="1.5s" repeatcount="indefinite" values="10; 45"></animate>
<animate attributename="opacity" dur="1.5s" keytimes="0; 0.5; 1" repeatcount="indefinite" values="0; 0.6; 0"></animate>
</circle>

<circle cx="0" cy="0" fill="none" opacity="0.7" r="28" stroke="#9ED8FF" stroke-dasharray="6 8" strokeWidth="1">
<animatetransform attributename="transform" dur="8s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
</circle>
<circle cx="0" cy="0" fill="none" opacity="0.4" r="36" stroke="#9ED8FF" stroke-dasharray="2 12" strokeWidth="1">
<animatetransform attributename="transform" dur="12s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
</circle>
</g>

<g transform="translate(240 55)">
<g>
<animatetransform attributename="transform" dur="2s" repeatcount="indefinite" type="scale" values="1; 1.05; 1"></animatetransform>
<use href="#moneyBag"></use>
</g>

<g opacity="0.5">
<animatetransform attributename="transform" dur="2s" repeatcount="indefinite" type="scale" values="1; 1.15; 1"></animatetransform>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5; 0; 0.5"></animate>
<use href="#moneyBag"></use>
</g>
</g>
</svg>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 order-2 md:order-1 md:mt-0 w-full mt-4 pr-16">
<div className="transition-all duration-500 hover:border-[#9ED8FF]/30 overflow-hidden group bg-[#050505] border-[#171A1F] border mt-4 p-4 sm:p-6 relative w-full">

<div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#9ED8FF]/5 rounded-full blur-2xl md:blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

<div className="flex z-10 mb-4 sm:mb-6 relative items-center justify-between">
<div className="flex items-center gap-2 sm:gap-3 w-full">
<div className="flex sm:w-7 sm:h-7 shrink-0 bg-[#CFAE6E]/10 w-6 h-6 border-[#CFAE6E]/30 border rounded-sm items-center justify-center">
<svg className="sm:w-4 sm:h-4 w-[14px] h-[14px] text-[#CFAE6E]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">

<circle cx="12" cy="12" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="2.5;3.5;2.5"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.7;1;0.7"></animate>
</circle>

<circle cx="12" cy="12" opacity="0.5" r="9" stroke-dasharray="4 4">
<animatetransform attributename="transform" dur="8s" from="0 12 12" repeatcount="indefinite" to="360 12 12" type="rotate"></animatetransform>
</circle>

<path d="M12 9V3">
<animate attributename="stroke-opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="12" cy="2" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path d="M9.5 13.5L5 17.5">
<animate attributename="stroke-opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="4" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path d="M14.5 13.5L19 17.5">
<animate attributename="stroke-opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="20" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
</svg>
</div>
<span className="text-[9px] sm:text-[10px] uppercase sm:tracking-[0.18em] truncate sm:overflow-visible sm:whitespace-normal text-[#B8C0CC] tracking-[0.12em] font-display" data-imt-p="1">Ecosystem Projects Connect</span>
</div>
</div>

<div className="z-10 border-y sm:mb-5 sm:pt-3 sm:pb-3 flex w-full mb-4 pt-2 pb-2 relative items-center justify-center">
<svg className="w-full h-auto max-w-full drop-shadow-lg pointer-events-none" viewbox="0 0 300 120">
<defs>

<radialgradient cx="50%" cy="50%" id="hubGlowGrad" r="50%">
<stop offset="0%" stop-color="#CFAE6E" stop-opacity="0.3"></stop>
<stop offset="50%" stop-color="#CFAE6E" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#CFAE6E" stop-opacity="0"></stop>
</radialgradient>

<g id="shape-rect">
<rect fill="#ffffff" height="5" style={{filter: 'drop-shadow(0 0 4px #CFAE6E)'}} width="5" x="-2.5" y="-2.5"></rect>
</g>
<g id="shape-hex">
<polygon fill="#ffffff" points="0,-3.5 3,-1.8 3,1.8 0,3.5 -3,1.8 -3,-1.8" style={{filter: 'drop-shadow(0 0 4px #CFAE6E)'}}></polygon>
</g>
<g id="shape-tri">
<polygon fill="#ffffff" points="0,-3.5 3.5,2.5 -3.5,2.5" style={{filter: 'drop-shadow(0 0 4px #CFAE6E)'}}></polygon>
</g>
<g id="shape-diamond">
<polygon fill="#ffffff" points="0,-3.5 3.5,0 0,3.5 -3.5,0" style={{filter: 'drop-shadow(0 0 4px #CFAE6E)'}}></polygon>
</g>
<g id="shape-pent">
<polygon fill="#ffffff" points="0,-3.5 3.3,-1 2.1,3 -2.1,3 -3.3,-1" style={{filter: 'drop-shadow(0 0 4px #CFAE6E)'}}></polygon>
</g>
<g id="shape-circle">
<circle cx="0" cy="0" fill="#ffffff" r="2.5" style={{filter: 'drop-shadow(0 0 4px #CFAE6E)'}}></circle>
</g>

<g id="node-rect">
<rect fill="#050505" height="16" stroke="#CFAE6E" strokeWidth="1.5" width="16" x="-8" y="-8"></rect>
<rect fill="#CFAE6E" height="4" width="4" x="-2" y="-2">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</rect>
</g>
<g id="node-hex">
<polygon fill="#050505" points="0,-9 7.8,-4.5 7.8,4.5 0,9 -7.8,4.5 -7.8,-4.5" stroke="#CFAE6E" strokeWidth="1.5"></polygon>
<polygon fill="#CFAE6E" points="0,-2.5 2.2,-1.2 2.2,1.2 0,2.5 -2.2,1.2 -2.2,-1.2">
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</polygon>
</g>
<g id="node-tri">
<polygon fill="#050505" points="0,-9 8,5 -8,5" stroke="#CFAE6E" strokeWidth="1.5"></polygon>
<polygon fill="#CFAE6E" points="0,-2.5 2.2,1.5 -2.2,1.5">
<animate attributename="opacity" dur="1.8s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</polygon>
</g>
<g id="node-diamond">
<polygon fill="#050505" points="0,-9 9,0 0,9 -9,0" stroke="#CFAE6E" strokeWidth="1.5"></polygon>
<polygon fill="#CFAE6E" points="0,-3 3,0 0,3 -3,0">
<animate attributename="opacity" dur="2.2s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</polygon>
</g>
<g id="node-pent">
<polygon fill="#050505" points="0,-9 8.5,-2.8 5.3,7 -5.3,7 -8.5,-2.8" stroke="#CFAE6E" strokeWidth="1.5"></polygon>
<polygon fill="#CFAE6E" points="0,-2.5 2.4,-0.8 1.5,2 -1.5,2 -2.4,-0.8">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</polygon>
</g>
<g id="node-circle">
<circle cx="0" cy="0" fill="#050505" r="9" stroke="#CFAE6E" strokeWidth="1.5"></circle>
<circle cx="0" cy="0" fill="#CFAE6E" r="3">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
</g>
</defs>

<path d="M 30,60 Q 90,20 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 70,20 Q 110,40 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 70,100 Q 110,80 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 230,20 Q 190,40 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 230,100 Q 190,80 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1.5"></path>
<path d="M 270,60 Q 210,100 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1.5"></path>

<g fill="#050505" stroke="#CFAE6E" strokeWidth="1">
<rect height="4" rx="1" width="4" x="88" y="38"></rect>
<rect height="4" rx="1" width="4" x="108" y="38"></rect>
<rect height="4" rx="1" width="4" x="108" y="78"></rect>
<rect height="4" rx="1" width="4" x="188" y="38"></rect>
<rect height="4" rx="1" width="4" x="188" y="78"></rect>
<rect height="4" rx="1" width="4" x="208" y="78"></rect>
</g>

<use href="#shape-rect">
<animatemotion dur="2.5s" path="M 30,60 Q 90,20 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.5s" keytimes="0;0.2;0.8;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</use>
<use href="#shape-hex">
<animatemotion begin="0.5s" dur="3s" path="M 70,20 Q 110,40 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.5s" dur="3s" keytimes="0;0.2;0.8;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</use>
<use href="#shape-tri">
<animatemotion begin="1s" dur="2.8s" path="M 70,100 Q 110,80 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1s" dur="2.8s" keytimes="0;0.2;0.8;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</use>
<use href="#shape-diamond">
<animatemotion begin="0.2s" dur="3.2s" path="M 230,20 Q 190,40 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.2s" dur="3.2s" keytimes="0;0.2;0.8;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</use>
<use href="#shape-pent">
<animatemotion begin="1.2s" dur="2.6s" path="M 230,100 Q 190,80 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.2s" dur="2.6s" keytimes="0;0.2;0.8;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</use>
<use href="#shape-circle">
<animatemotion begin="0.8s" dur="2.9s" path="M 270,60 Q 210,100 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.8s" dur="2.9s" keytimes="0;0.2;0.8;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</use>

<g transform="translate(30 60)">
<use href="#node-rect" x="0" y="0"></use>
<circle cx="0" cy="0" fill="none" r="14" stroke="#CFAE6E" stroke-dasharray="4 4" stroke-opacity="0.6" strokeWidth="1">
<animatetransform attributename="transform" dur="8s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
</circle>
</g>
<g transform="translate(70 20)">
<use href="#node-hex" x="0" y="0"></use>
</g>
<g transform="translate(70 100)">
<use href="#node-tri" x="0" y="0"></use>
<circle cx="0" cy="0" fill="none" r="16" stroke="#CFAE6E" stroke-dasharray="3 6" stroke-opacity="0.6" strokeWidth="1">
<animatetransform attributename="transform" dur="10s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
</circle>
</g>
<g transform="translate(230 20)">
<use href="#node-diamond" x="0" y="0"></use>
</g>
<g transform="translate(230 100)">
<use href="#node-pent" x="0" y="0"></use>
</g>
<g transform="translate(270 60)">
<use href="#node-circle" x="0" y="0"></use>
<circle cx="0" cy="0" fill="none" r="18" stroke="#CFAE6E" stroke-dasharray="6 6" stroke-opacity="0.6" strokeWidth="1">
<animatetransform attributename="transform" dur="12s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
</circle>
</g>

<circle cx="150" cy="60" fill="url(#hubGlowGrad)" r="50"></circle>

<g transform="translate(150 60)">
<circle cx="0" cy="0" fill="none" r="35" stroke="#CFAE6E" stroke-dasharray="8 8" stroke-opacity="0.8" strokeWidth="1.5">
<animatetransform attributename="transform" dur="20s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
</circle>

<g>
<animatetransform attributename="transform" dur="40s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
<path d="M -38,0 A 38,38 0 1,1 38,0 A 38,38 0 1,1 -38,0" fill="none" id="apiTextPath"></path>
<text fill="#CFAE6E" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="4" font-weight="600" letter-spacing="1.5" opacity="0.6">
<textpath href="#apiTextPath" startoffset="0">
              API GATEWAY • API GATEWAY • API GATEWAY • API GATEWAY • API GATEWAY • API GATEWAY • 
            </textpath>
</text>
</g>
<circle cx="0" cy="0" fill="none" r="28" stroke="#CFAE6E" stroke-opacity="0.4" strokeWidth="1">
<animate attributename="r" dur="4s" repeatcount="indefinite" values="28; 30; 28"></animate>
</circle>
<circle cx="0" cy="0" fill="none" r="22" stroke="#CFAE6E" stroke-dasharray="10 20" stroke-opacity="0.6" strokeWidth="2">
<animatetransform attributename="transform" dur="15s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
</circle>
</g>

<circle cx="150" cy="60" fill="#050505" r="16" stroke="#CFAE6E" strokeWidth="2"></circle>

<text dominant-baseline="central" fill="#CFAE6E" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="14" font-weight="600" text-anchor="middle" x="150" y="60">{ }</text>
<circle cx="150" cy="60" fill="#CFAE6E" r="2">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<circle cx="150" cy="60" fill="none" r="16" stroke="#CFAE6E" stroke-dasharray="2 4" strokeWidth="1">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="16; 60"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.8; 0"></animate>
</circle>
<circle cx="150" cy="60" fill="none" r="16" stroke="#CFAE6E" stroke-dasharray="2 4" strokeWidth="1">
<animate attributename="r" begin="1.5s" dur="3s" repeatcount="indefinite" values="16; 60"></animate>
<animate attributename="opacity" begin="1.5s" dur="3s" repeatcount="indefinite" values="0.8; 0"></animate>
</circle>
</svg>
</div>
</div></div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
<div className="inline-flex items-center gap-2 border border-[#CFAE6E]/30 bg-[#CFAE6E]/10 px-2 py-1 text-[10px] font-display text-[#CFAE6E] tracking-[0.18em] uppercase mb-3">
            Signal Intelligence
          </div>
<h3 className="text-xl font-display text-[#F5F7FA] uppercase tracking-[-0.03em]">
            Score accounts automatically
          </h3>
<p className="text-[0.95rem] text-[#9AA6B5] font-light mt-2 leading-relaxed">
            SignalAI analyzes intent signals in real time and ranks accounts
            based on engagement, fit, and buying probability.
          </p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3 text-left">
<div className="inline-flex gap-2 text-[10px] uppercase text-[#CFAE6E] tracking-[0.18em] font-display bg-[#CFAE6E]/10 border-[#CFAE6E]/30 border mb-3 pt-1 pr-2 pb-1 pl-2 gap-x-2 gap-y-2 items-center" data-imt-p="1">STEP 02</div>
<h3 className="text-[1.2rem] sm:text-[1.4rem] uppercase text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">Ecosystem Projects Connect</h3>
<p className="text-[0.95rem] leading-relaxed font-light text-[#9AA6B5] mt-2" data-imt-p="1">Projects establish liquidity pools via MCN Global. A portion of every inflow automatically settles into the USDA system, deepening the backing layer.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:hidden w-full mb-4">
<div className="inline-flex items-center gap-2 border border-[#74C7FF]/30 bg-[#74C7FF]/10 px-2 py-1 text-[10px] font-display text-[#74C7FF] tracking-[0.18em] uppercase mb-3">
            Workflow Automation
          </div>
<h3 className="text-xl font-display text-[#F5F7FA] uppercase tracking-[-0.03em]">
            Trigger outbound sequences
          </h3>
<p className="text-[0.95rem] text-[#9AA6B5] font-light mt-2 leading-relaxed">
            When signals spike, automatically launch multi-channel sequences
            so your team reaches buyers at the perfect moment.
          </p>
</div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
<div className="inline-flex gap-2 text-[10px] uppercase xl:text-[#9ED8FF] tracking-[0.18em] font-display bg-gradient-to-br from-white/10 to-white/0 border-[#74C7FF]/30 border mb-3 pt-1 pr-2 pb-1 pl-2 gap-x-2 gap-y-2 items-center" data-imt-p="1">STEP 03</div>
<h3 className="text-[1.2rem] sm:text-[1.4rem] uppercase text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">Multi-Asset Pool Expands</h3>
<p className="text-[0.95rem] leading-relaxed font-light text-[#9AA6B5] mt-2 ml-auto" data-imt-p="1">Energy, minerals, tokenized equities, on-chain assets, and credit instruments are continuously integrated — building an ever-deepening, ever-diversifying backing structure.</p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="transition-all duration-500 hover:border-[#9ED8FF]/30 overflow-hidden group bg-[#050505] border-[#171A1F] border mt-4 pt-6 pr-6 pb-6 pl-6 relative">

<div className="absolute top-0 right-0 w-48 h-48 bg-[#9ED8FF]/5 rounded-full blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none">
</div>

<div className="flex z-10 mb-6 relative items-center">
<div className="flex sm:w-7 sm:h-7 shrink-0 bg-[#9ED8FF]/10 w-6 h-6 border-[#9ED8FF]/30 border rounded-sm items-center justify-center">
<svg className="sm:w-4 sm:h-4 w-[14px] h-[14px]" data-icon-replaced="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(158, 216, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">

<circle className="" cx="12" cy="12" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="2.5;3.5;2.5"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.7;1;0.7"></animate>
</circle>

<circle className="" cx="12" cy="12" opacity="0.5" r="9" stroke-dasharray="4 4">
<animatetransform attributename="transform" dur="8s" from="0 12 12" repeatcount="indefinite" to="360 12 12" type="rotate"></animatetransform>
</circle>

<path d="M12 9V3">
<animate attributename="stroke-opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="12" cy="2" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path className="" d="M9.5 13.5L5 17.5">
<animate attributename="stroke-opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2">
</animate>
</path>
<circle className="" cx="4" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path className="" d="M14.5 13.5L19 17.5">
<animate attributename="stroke-opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2">
</animate>
</path>
<circle cx="20" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
</svg>
</div>
<div className="flex items-center gap-3">
<span className="text-[9px] sm:text-[10px] uppercase sm:tracking-[0.18em] truncate sm:overflow-visible sm:whitespace-normal text-[#B8C0CC] tracking-[0.12em] font-display" data-imt-p="1">Multi-Asset Pool Expands</span>
</div>
</div>

<div className="z-10 border-y w-full mb-5 pt-3 pb-3 relative">
<svg className="w-full h-auto drop-shadow-lg pointer-events-none" viewbox="0 0 300 120">
<defs>
<lineargradient id="growthBarGrad" x1="0" x2="0" y1="1" y2="0">
<stop offset="0%" stop-color="#74C7FF" stop-opacity="0"></stop>
<stop offset="100%" stop-color="#9ED8FF" stop-opacity="0.8"></stop>
</lineargradient>
<lineargradient id="trendAreaGrad" x1="0" x2="0" y1="1" y2="0">
<stop offset="0%" stop-color="#C8EAFF" stop-opacity="0"></stop>
<stop offset="100%" stop-color="#C8EAFF" stop-opacity="0.3"></stop>
</lineargradient>
</defs>

<path d="M 0,25 L 300,25 M 0,55 L 300,55 M 0,85 L 300,85" fill="none" stroke="#74C7FF" stroke-dasharray="2 4" stroke-opacity="0.15" strokeWidth="1"></path>

<rect fill="#9ED8FF" fillOpacity="0.05" height="100" rx="2" width="30" x="25" y="10"></rect>
<rect fill="#9ED8FF" fillOpacity="0.05" height="100" rx="2" width="30" x="80" y="10"></rect>
<rect fill="#9ED8FF" fillOpacity="0.05" height="100" rx="2" width="30" x="135" y="10"></rect>
<rect fill="#9ED8FF" fillOpacity="0.05" height="100" rx="2" width="30" x="190" y="10"></rect>
<rect fill="#9ED8FF" fillOpacity="0.05" height="100" rx="2" width="30" x="245" y="10"></rect>

<rect fill="url(#growthBarGrad)" height="20" rx="2" width="30" x="25" y="90">
<animate attributename="height" dur="4s" keytimes="0; 0.15; 0.85; 1" repeatcount="indefinite" values="0; 20; 20; 0"></animate>
<animate attributename="y" dur="4s" keytimes="0; 0.15; 0.85; 1" repeatcount="indefinite" values="110; 90; 90; 110"></animate>
</rect>
<rect fill="url(#growthBarGrad)" height="35" rx="2" width="30" x="80" y="75">
<animate attributename="height" dur="4s" keytimes="0; 0.25; 0.85; 1" repeatcount="indefinite" values="0; 35; 35; 0"></animate>
<animate attributename="y" dur="4s" keytimes="0; 0.25; 0.85; 1" repeatcount="indefinite" values="110; 75; 75; 110"></animate>
</rect>
<rect fill="url(#growthBarGrad)" height="55" rx="2" width="30" x="135" y="55">
<animate attributename="height" dur="4s" keytimes="0; 0.35; 0.85; 1" repeatcount="indefinite" values="0; 55; 55; 0"></animate>
<animate attributename="y" dur="4s" keytimes="0; 0.35; 0.85; 1" repeatcount="indefinite" values="110; 55; 55; 110"></animate>
</rect>
<rect fill="url(#growthBarGrad)" height="80" rx="2" width="30" x="190" y="30">
<animate attributename="height" dur="4s" keytimes="0; 0.45; 0.85; 1" repeatcount="indefinite" values="0; 80; 80; 0"></animate>
<animate attributename="y" dur="4s" keytimes="0; 0.45; 0.85; 1" repeatcount="indefinite" values="110; 30; 30; 110"></animate>
</rect>
<rect fill="url(#growthBarGrad)" height="100" rx="2" width="30" x="245" y="10">
<animate attributename="height" dur="4s" keytimes="0; 0.55; 0.85; 1" repeatcount="indefinite" values="0; 100; 100; 0"></animate>
<animate attributename="y" dur="4s" keytimes="0; 0.55; 0.85; 1" repeatcount="indefinite" values="110; 10; 10; 110"></animate>
</rect>

<path d="M 40,90 L 95,75 L 150,55 L 205,30 L 260,10" fill="none" stroke="#C8EAFF" strokeLinejoin="round" strokeWidth="2" style={{filter: 'drop-shadow(0 0 4px #C8EAFF)'}}>
<animate attributename="stroke-dasharray" dur="4s" keytimes="0; 0.65; 0.85; 1" repeatcount="indefinite" values="0,300; 300,0; 300,0; 0,300"></animate>
</path>

<path d="M 40,110 L 40,90 L 95,75 L 150,55 L 205,30 L 260,10 L 260,110 Z" fill="url(#trendAreaGrad)">
<animate attributename="opacity" dur="4s" keytimes="0; 0.65; 0.85; 1" repeatcount="indefinite" values="0; 1; 1; 0"></animate>
</path>

<circle cx="40" fill="#C8EAFF" r="1.5">
<animate attributename="cy" dur="1.5s" repeatcount="indefinite" values="110; 90"></animate>
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>
<circle cx="95" fill="#C8EAFF" r="1.5">
<animate attributename="cy" begin="0.3s" dur="1.8s" repeatcount="indefinite" values="110; 75"></animate>
<animate attributename="opacity" begin="0.3s" dur="1.8s" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>
<circle cx="150" fill="#C8EAFF" r="1.5">
<animate attributename="cy" begin="0.6s" dur="2s" repeatcount="indefinite" values="110; 55"></animate>
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>
<circle cx="205" fill="#C8EAFF" r="1.5">
<animate attributename="cy" begin="0.9s" dur="2.2s" repeatcount="indefinite" values="110; 30"></animate>
<animate attributename="opacity" begin="0.9s" dur="2.2s" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>
<circle cx="260" fill="#C8EAFF" r="1.5">
<animate attributename="cy" begin="1.2s" dur="2.5s" repeatcount="indefinite" values="110; 10"></animate>
<animate attributename="opacity" begin="1.2s" dur="2.5s" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>

<circle cx="40" cy="90" fill="#ffffff" r="3" style={{filter: 'drop-shadow(0 0 4px #ffffff)'}}>
<animate attributename="cy" dur="4s" keytimes="0; 0.15; 0.85; 1" repeatcount="indefinite" values="110; 90; 90; 110"></animate>
<animate attributename="opacity" dur="4s" keytimes="0; 0.1; 0.9; 1" repeatcount="indefinite" values="0; 1; 1; 0">
</animate>
</circle>
<circle cx="95" cy="75" fill="#ffffff" r="3" style={{filter: 'drop-shadow(0 0 4px #ffffff)'}}>
<animate attributename="cy" dur="4s" keytimes="0; 0.25; 0.85; 1" repeatcount="indefinite" values="110; 75; 75; 110"></animate>
<animate attributename="opacity" dur="4s" keytimes="0; 0.2; 0.9; 1" repeatcount="indefinite" values="0; 1; 1; 0">
</animate>
</circle>
<circle cx="150" cy="55" fill="#ffffff" r="3" style={{filter: 'drop-shadow(0 0 4px #ffffff)'}}>
<animate attributename="cy" dur="4s" keytimes="0; 0.35; 0.85; 1" repeatcount="indefinite" values="110; 55; 55; 110"></animate>
<animate attributename="opacity" dur="4s" keytimes="0; 0.3; 0.9; 1" repeatcount="indefinite" values="0; 1; 1; 0">
</animate>
</circle>
<circle cx="205" cy="30" fill="#ffffff" r="3" style={{filter: 'drop-shadow(0 0 4px #ffffff)'}}>
<animate attributename="cy" dur="4s" keytimes="0; 0.45; 0.85; 1" repeatcount="indefinite" values="110; 30; 30; 110"></animate>
<animate attributename="opacity" dur="4s" keytimes="0; 0.4; 0.9; 1" repeatcount="indefinite" values="0; 1; 1; 0">
</animate>
</circle>
<circle cx="260" cy="10" fill="#ffffff" r="4" style={{filter: 'drop-shadow(0 0 6px #ffffff)'}}>
<animate attributename="cy" dur="4s" keytimes="0; 0.55; 0.85; 1" repeatcount="indefinite" values="110; 10; 10; 110"></animate>
<animate attributename="opacity" dur="4s" keytimes="0; 0.5; 0.9; 1" repeatcount="indefinite" values="0; 1; 1; 0">
</animate>
</circle>

<circle cx="260" cy="10" fill="none" r="4" stroke="#ffffff" strokeWidth="1.5">
<animate attributename="cy" dur="4s" keytimes="0; 0.55; 0.75; 0.85; 1" repeatcount="indefinite" values="110; 10; 10; 10; 110"></animate>
<animate attributename="r" dur="4s" keytimes="0; 0.55; 0.75; 0.85; 1" repeatcount="indefinite" values="4; 4; 16; 16; 4"></animate>
<animate attributename="opacity" dur="4s" keytimes="0; 0.55; 0.65; 0.85; 1" repeatcount="indefinite" values="0; 0; 0.8; 0; 0"></animate>
</circle>

<circle fill="#9ED8FF" r="1.5" style={{filter: 'drop-shadow(0 0 3px #9ED8FF)'}}>
<animatemotion dur="2.5s" path="M 40,90 L 95,75 L 150,55 L 205,30 L 260,10" repeatcount="indefinite">
</animatemotion>
<animate attributename="opacity" dur="2.5s" keytimes="0; 0.2; 0.8; 1" repeatcount="indefinite" values="0; 1; 1; 0"></animate>
</circle>
<circle fill="#C8EAFF" r="1.5" style={{filter: 'drop-shadow(0 0 3px #C8EAFF)'}}>
<animatemotion begin="1s" dur="3s" path="M 40,90 L 95,75 L 150,55 L 205,30 L 260,10" repeatcount="indefinite">
</animatemotion>
<animate attributename="opacity" begin="1s" dur="3s" keytimes="0; 0.2; 0.8; 1" repeatcount="indefinite" values="0; 1; 1; 0"></animate>
</circle>
</svg>
</div>

</div></div>
</div>

<div className="z-10 flex flex-col md:flex-row md:items-center gap-8 group relative gap-x-8 gap-y-8 items-start">
<div className="md:w-1/2 md:pr-16 order-2 md:order-1 md:mt-0 w-full mt-4 pr-16">
<div className="transition-all duration-500 hover:border-[#9ED8FF]/30 overflow-hidden group bg-[#050505] border-[#171A1F] border mt-4 pt-6 pr-6 pb-6 pl-6 relative">

<div className="absolute top-0 right-0 w-48 h-48 bg-[#9ED8FF]/5 rounded-full blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none">
</div>

<div className="flex z-10 mb-6 relative items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-7 h-7 rounded-sm bg-[#CFAE6E]/10 border border-[#CFAE6E]/30">
<svg className="text-[#CFAE6E]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">

<circle cx="12" cy="12" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="2.5;3.5;2.5"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.7;1;0.7"></animate>
</circle>

<circle cx="12" cy="12" opacity="0.5" r="9" stroke-dasharray="4 4">
<animatetransform attributename="transform" dur="8s" from="0 12 12" repeatcount="indefinite" to="360 12 12" type="rotate"></animatetransform>
</circle>

<path d="M12 9V3">
<animate attributename="stroke-opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</path>
<circle cx="12" cy="2" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path d="M9.5 13.5L5 17.5">
<animate attributename="stroke-opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2">
</animate>
</path>
<circle cx="4" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4">
</animate>
</circle>

<path d="M14.5 13.5L19 17.5">
<animate attributename="stroke-opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2">
</animate>
</path>
<circle cx="20" cy="18.5" fill="currentColor" opacity="0.8" r="1.5">
<animate attributename="opacity" begin="1.3s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4">
</animate>
</circle>
</svg>
</div>
<span className="text-[10px] uppercase text-[#B8C0CC] tracking-[0.18em] font-display" data-imt-p="1">Send opportunities to the right team</span>
</div>
</div>

<div className="z-10 border-y w-full mb-5 pt-3 pb-3 relative">
<svg className="w-full h-auto drop-shadow-lg pointer-events-none" viewbox="0 0 300 120">
<defs>

<radialgradient cx="50%" cy="50%" id="hubGlowGrad" r="50%">
<stop offset="0%" stop-color="#CFAE6E" stop-opacity="0.4"></stop>
<stop offset="40%" stop-color="#CFAE6E" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#CFAE6E" stop-opacity="0"></stop>
</radialgradient>

<g id="goldCoin">
<circle fill="#CFAE6E" r="4.5" stroke="#050505" strokeWidth="0.5" style={{filter: 'drop-shadow(0 0 3px #CFAE6E)'}}></circle>
<circle fill="none" opacity="0.8" r="2.5" stroke="#ffffff" strokeWidth="0.5"></circle>
<circle fill="#ffffff" r="1"></circle>
</g>
<g id="blueToken">
<circle fill="#9ED8FF" r="4" stroke="#050505" strokeWidth="0.5" style={{filter: 'drop-shadow(0 0 3px #9ED8FF)'}}>
</circle>
<rect fill="none" height="3" stroke="#ffffff" strokeWidth="0.5" width="3" x="-1.5" y="-1.5"></rect>
</g>
<g id="silverCoin">
<circle fill="#ffffff" r="3.5" stroke="#050505" strokeWidth="0.5" style={{filter: 'drop-shadow(0 0 2px #ffffff)'}}></circle>
<circle fill="none" opacity="0.8" r="1.5" stroke="#9ED8FF" strokeWidth="0.5"></circle>
</g>
</defs>

<path d="M 20,20 Q 80,10 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="2 4" stroke-opacity="0.25" strokeWidth="1.5"></path>
<path d="M 20,100 Q 80,110 150,60" fill="none" stroke="#9ED8FF" stroke-dasharray="2 4" stroke-opacity="0.25" strokeWidth="1.5"></path>
<path d="M 280,20 Q 220,10 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="2 4" stroke-opacity="0.25" strokeWidth="1.5"></path>
<path d="M 280,100 Q 220,110 150,60" fill="none" stroke="#9ED8FF" stroke-dasharray="2 4" stroke-opacity="0.25" strokeWidth="1.5"></path>
<path d="M 10,60 C 50,20 100,100 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="2 4" stroke-opacity="0.15" strokeWidth="1"></path>
<path d="M 290,60 C 250,100 200,20 150,60" fill="none" stroke="#CFAE6E" stroke-dasharray="2 4" stroke-opacity="0.15" strokeWidth="1"></path>

<g fill="#050505" stroke="#CFAE6E" strokeWidth="1.5">
<circle cx="20" cy="20" r="8"></circle>
<circle cx="280" cy="20" r="8"></circle>
<circle cx="10" cy="60" r="10"></circle>
<circle cx="290" cy="60" r="10"></circle>
</g>
<g fill="#050505" stroke="#9ED8FF" strokeWidth="1.5">
<circle cx="20" cy="100" r="8"></circle>
<circle cx="280" cy="100" r="8"></circle>
</g>

<circle cx="20" cy="20" fill="#CFAE6E" r="2">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="280" cy="20" fill="#CFAE6E" r="2">
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="10" cy="60" fill="#CFAE6E" r="3">
<animate attributename="opacity" dur="1.8s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="290" cy="60" fill="#CFAE6E" r="3">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="20" cy="100" fill="#9ED8FF" r="2">
<animate attributename="opacity" dur="2.2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="280" cy="100" fill="#9ED8FF" r="2">
<animate attributename="opacity" dur="2.7s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>


<g>
<animatemotion dur="2.5s" path="M 20,20 Q 80,10 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.5s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0">
</animate>
<use href="#goldCoin"></use>
</g>
<g>
<animatemotion begin="1.25s" dur="2.5s" path="M 20,20 Q 80,10 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.25s" dur="2.5s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#blueToken"></use>
</g>
<g>
<animatemotion begin="0.5s" dur="3.5s" path="M 20,20 Q 80,10 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.5s" dur="3.5s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#silverCoin"></use>
</g>

<g>
<animatemotion dur="2.8s" path="M 20,100 Q 80,110 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.8s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0">
</animate>
<use href="#silverCoin"></use>
</g>
<g>
<animatemotion begin="1.4s" dur="2.8s" path="M 20,100 Q 80,110 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.4s" dur="2.8s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#goldCoin"></use>
</g>

<g>
<animatemotion dur="3s" path="M 280,20 Q 220,10 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="3s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0">
</animate>
<use href="#blueToken"></use>
</g>
<g>
<animatemotion begin="1.5s" dur="3s" path="M 280,20 Q 220,10 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.5s" dur="3s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#goldCoin"></use>
</g>
<g>
<animatemotion begin="0.8s" dur="2.6s" path="M 280,20 Q 220,10 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.8s" dur="2.6s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#goldCoin"></use>
</g>

<g>
<animatemotion dur="2.2s" path="M 280,100 Q 220,110 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.2s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0">
</animate>
<use href="#goldCoin"></use>
</g>
<g>
<animatemotion begin="1.1s" dur="2.2s" path="M 280,100 Q 220,110 150,60" repeatcount="indefinite">
</animatemotion>
<animate attributename="opacity" begin="1.1s" dur="2.2s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#silverCoin"></use>
</g>

<g>
<animatemotion dur="3.2s" path="M 10,60 C 50,20 100,100 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="3.2s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0">
</animate>
<use href="#goldCoin"></use>
</g>
<g>
<animatemotion begin="1.6s" dur="3.2s" path="M 10,60 C 50,20 100,100 150,60" repeatcount="indefinite">
</animatemotion>
<animate attributename="opacity" begin="1.6s" dur="3.2s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#blueToken"></use>
</g>

<g>
<animatemotion dur="2.9s" path="M 290,60 C 250,100 200,20 150,60" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.9s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0">
</animate>
<use href="#silverCoin"></use>
</g>
<g>
<animatemotion begin="1.45s" dur="2.9s" path="M 290,60 C 250,100 200,20 150,60" repeatcount="indefinite">
</animatemotion>
<animate attributename="opacity" begin="1.45s" dur="2.9s" keytimes="0;0.15;0.85;1" repeatcount="indefinite" values="0;1;1;0"></animate>
<use href="#goldCoin"></use>
</g>

<circle cx="150" cy="60" fill="url(#hubGlowGrad)" r="55">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="45; 60; 45"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.7; 1; 0.7"></animate>
</circle>

<g transform="translate(150 60)">

<circle cx="0" cy="0" fill="none" r="15" stroke="#CFAE6E" strokeWidth="2">
<animate attributename="r" dur="2.5s" repeatcount="indefinite" values="15; 65"></animate>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.8; 0"></animate>
</circle>
<circle cx="0" cy="0" fill="none" r="15" stroke="#9ED8FF" strokeWidth="1.5">
<animate attributename="r" begin="1.25s" dur="2.5s" repeatcount="indefinite" values="15; 55"></animate>
<animate attributename="opacity" begin="1.25s" dur="2.5s" repeatcount="indefinite" values="0.6; 0"></animate>
</circle>

<circle cx="0" cy="0" fill="none" opacity="0.9" r="32" stroke="#CFAE6E" stroke-dasharray="14 10" strokeWidth="2.5">
<animatetransform attributename="transform" dur="12s" from="0" repeatcount="indefinite" to="360" type="rotate"></animatetransform>
<animate attributename="r" dur="4s" repeatcount="indefinite" values="30; 36; 30"></animate>
</circle>
<circle cx="0" cy="0" fill="none" opacity="0.7" r="42" stroke="#9ED8FF" stroke-dasharray="4 12" strokeWidth="1.5">
<animatetransform attributename="transform" dur="18s" from="360" repeatcount="indefinite" to="0" type="rotate"></animatetransform>
<animate attributename="r" dur="5s" repeatcount="indefinite" values="42; 46; 42"></animate>
</circle>

<circle cx="0" cy="0" fill="#CFAE6E" r="1.5">
<animatetransform attributename="transform" dur="3s" repeatcount="indefinite" type="translate" values="0,0; 25,-35"></animatetransform>
<animate attributename="opacity" dur="3s" keytimes="0; 0.5; 1" repeatcount="indefinite" values="0; 1; 0">
</animate>
</circle>
<circle cx="0" cy="0" fill="#9ED8FF" r="1.5">
<animatetransform attributename="transform" begin="1s" dur="3.5s" repeatcount="indefinite" type="translate" values="0,0; -30,25"></animatetransform>
<animate attributename="opacity" begin="1s" dur="3.5s" keytimes="0; 0.5; 1" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>
<circle cx="0" cy="0" fill="#ffffff" r="2">
<animatetransform attributename="transform" begin="2s" dur="4s" repeatcount="indefinite" type="translate" values="0,0; -35,-20"></animatetransform>
<animate attributename="opacity" begin="2s" dur="4s" keytimes="0; 0.5; 1" repeatcount="indefinite" values="0; 1; 0"></animate>
</circle>
</g>

<circle cx="150" cy="60" fill="#050505" r="16" stroke="#CFAE6E" strokeWidth="3" style={{filter: 'drop-shadow(0 0 10px #CFAE6E)'}}></circle>

<circle cx="150" cy="60" fill="#CFAE6E" r="8">
<animate attributename="r" dur="1.5s" repeatcount="indefinite" values="6; 10; 6"></animate>
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0.8; 1; 0.8"></animate>
</circle>

<circle cx="150" cy="60" fill="#ffffff" r="4">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0.5; 1; 0.5"></animate>
</circle>
</svg>
</div>

</div></div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
<div className="inline-flex items-center gap-2 border border-[#D6C29A]/30 bg-[#D6C29A]/10 px-2 py-1 text-[10px] font-display text-[#D6C29A] tracking-[0.18em] uppercase mb-3">
            Revenue Routing
          </div>
<h3 className="text-xl font-display text-[#F5F7FA] uppercase tracking-[-0.03em]">
            Send opportunities to the right team
          </h3>
<p className="text-[0.95rem] text-[#9AA6B5] font-light mt-2 leading-relaxed">
            Accounts are routed automatically to SDRs or account owners
            based on territory, segment, and deal stage.
          </p>
</div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3">
<div className="inline-flex gap-2 text-[10px] uppercase text-[#CFAE6E] tracking-[0.18em] font-display bg-[#D6C29A]/10 border-[#D6C29A]/30 border mb-3 pt-1 pr-2 pb-1 pl-2 gap-x-2 gap-y-2 items-center" data-imt-p="1">STEP 04</div>
<h3 className="text-[1.2rem] sm:text-[1.4rem] uppercase text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">
            Send opportunities to the right team
          </h3>
<p className="text-[0.95rem] text-[#9AA6B5] font-light mt-2 leading-relaxed" data-imt-p="1">
            Accounts are routed automatically to SDRs or account owners
            based on territory, segment, and deal stage.
          </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
</div>
</div><section className="z-10 fade-in fade-in-delay-4 sm:pt-12 sm:pb-24 pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="text-[1.2rem] sm:text-[1.4rem] uppercase text-[#F5F7FA] tracking-[-0.03em] font-display" data-imt-p="1">PARTNERS</p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-imt-p="1">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage" data-imt-p="1">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather" data-imt-p="1">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif" data-imt-p="1">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair" data-imt-p="1">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-imt-p="1">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter" data-imt-p="1">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-imt-p="1">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage" data-imt-p="1">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather" data-imt-p="1">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif" data-imt-p="1">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair" data-imt-p="1">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-imt-p="1">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter" data-imt-p="1">FlowState</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
        @keyframes ticker {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }
    </style>
</section></section><footer className="overflow-hidden z-10 border-t relative space-y-6 gap-x-y-6 gap-y-6">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#171A1F] to-transparent"></div>
<div className="absolute left-[10%] top-[18%] h-[180px] w-[180px] rounded-full bg-[#9ED8FF]/[0.025] blur-[90px]"></div>
<div className="absolute right-[12%] bottom-[14%] h-[150px] w-[150px] rounded-full bg-[#CFAE6E]/[0.02] blur-[90px]">
</div>
<div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(158,216,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,216,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]">
</div>
</div>
<footer className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-0 pr-10 pb-0 pl-10 relative space-y-6 gap-x-y-6 gap-y-6 md:pl-10 md:pr-10 md:pb-24 md:pt-12" id="contact">
<div className="flex items-center justify-center gap-4 text-zinc-400 text-sm">
<span className="h-px w-12 bg-white/10"></span>
<span className="font-sans" data-imt-p="1">Let's create together</span>
<span className="h-px w-12 bg-white/10"></span>
</div>
<h2 className="uppercase leading-[0.98] text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] text-[#F5F7FA] tracking-[-0.045em] font-display max-w-7xl" data-imt-p="1">
    Ready to Start Your <span className="uppercase leading-[0.98] text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] text-[#F5F7FA] tracking-[-0.045em] font-display max-w-[10ch]">Project?</span>
</h2>
<p className="text-slate-400 font-sans" data-imt-p="1">Stablecoins Store Value. USDA Grows It.</p>
<div className="mt-6 flex justify-center">
</div>
<div className="flex gap-4 items-center">
<a className="w-10 h-10 rounded-full bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all" href="#" title="Link disabled in preview mode">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all" href="#" title="Link disabled in preview mode">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all" href="#" title="Link disabled in preview mode">
<svg className="text-stone-400 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<p className="mt-6 text-center">
</p>
<div className="mt-12 h-px bg-white/5"></div>
<div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
<p className="font-sans" data-imt-p="1">© 2026 USDA All Rights Reserved.</p>
<p className="font-sans" data-imt-p="1">Real Asset Backed · Jointly Endorsed · Sustainably Growing</p>
</div>
</footer>
</footer>





    </>
  );
}
