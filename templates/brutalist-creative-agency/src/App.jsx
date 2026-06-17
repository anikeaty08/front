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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Icons
      lucide.createIcons({
          strokeWidth: 1.5
      });

      // Initialize GSAP
      gsap.registerPlugin(ScrollTrigger);

      // --- Utility: Split text for masking reveals ---
      function setupTextReveals() {
          const manifestoTitle = document.querySelector('.manifesto-title');
          if(manifestoTitle) {
              const text = manifestoTitle.innerText;
              manifestoTitle.innerHTML = '';
              const words = text.split(' ');
              words.forEach(word => {
                  const mask = document.createElement('span');
                  mask.className = 'mask-wrap mr-[1vw]';
                  const span = document.createElement('span');
                  span.innerText = word;
                  span.className = 'inline-block manifesto-word';
                  mask.appendChild(span);
                  manifestoTitle.appendChild(mask);
              });
          }
      }
      setupTextReveals();

      // --- Animations ---
      let mm = gsap.matchMedia();

      // 1. Hero Entrance
      const heroTl = gsap.timeline();
      heroTl.from('.hero-text', {
          x: (i) => i === 0 ? '-20%' : '20%',
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
          delay: 0.2
      })
      .from('.hero-image-block', {
          scale: 0.8,
          rotation: 0,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out"
      }, "-=1.2")
      .from('nav, .hero-image-block div', {
          y: -20,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out"
      }, "-=1");

      // Parallax Hero Text on scroll
      gsap.fromTo('.hero-text', {
          xPercent: 0
      }, {
          scrollTrigger: {
              trigger: 'section',
              start: 'top top',
              end: 'bottom top',
              scrub: 1
          },
          xPercent: (i, el) => {
              const speed = parseFloat(el.getAttribute('data-speed'));
              return i === 0 ? -(20 * speed) : +(20 * speed);
          }
      });

      // 2. Stats Counters & Manifesto Reveal
      ScrollTrigger.create({
          trigger: '.stat-block',
          start: 'top 80%',
          onEnter: () => {
              const counters = document.querySelectorAll('.counter');
              counters.forEach(counter => {
                  const target = parseInt(counter.getAttribute('data-target'));
                  gsap.to(counter, {
                      innerHTML: target,
                      duration: 2,
                      ease: "power2.out",
                      snap: { innerHTML: 1 }
                  });
              });
          },
          once: true
      });

      gsap.from('.manifesto-word', {
          scrollTrigger: {
              trigger: '.manifesto-title',
              start: 'top 80%',
          },
          y: '100%',
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out"
      });

      gsap.from('.manifesto-body', {
          scrollTrigger: {
              trigger: '.manifesto-body',
              start: 'top 85%',
          },
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out"
      });

      // 3. Services / Vectors
      gsap.to('.distorted-bg', {
          scrollTrigger: {
              trigger: '#vectors-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
          },
          yPercent: -50
      });

      gsap.from('.service-item', {
          scrollTrigger: {
              trigger: '.list-container',
              start: 'top 70%',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
      });

      // 4. Works / Archives
      const projects = gsap.utils.toArray('.project-card');

      projects.forEach((proj) => {
          const header = proj.querySelector('.proj-header');
          const mask = proj.querySelector('.proj-img-mask');
          const title = proj.querySelector('.proj-title');
          const caption = proj.querySelector('.proj-caption');

          if(header && mask && title && caption) {
              gsap.set(mask, { clipPath: 'inset(0% 0% 100% 0%)' });
              gsap.set([title, caption], { opacity: 0, y: 20 });
              gsap.set(header, { opacity: 0, y: 10 });

              const tl = gsap.timeline({
                  scrollTrigger: {
                      trigger: proj,
                      start: 'top 85%',
                  }
              });

              tl.to(header, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
                .to(mask, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: "power4.inOut" }, "-=0.2")
                .to([title, caption], { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4");
          }
      });

      mm.add("(min-width: 768px)", () => {
          projects.forEach((proj, i) => {
              gsap.fromTo(proj, {
                  y: 100 * (i + 1)
              }, {
                  scrollTrigger: {
                      trigger: '.archive-container',
                      start: 'top bottom',
                      end: 'bottom top',
                      scrub: 1
                  },
                  y: -100 * (i + 1),
                  ease: "none"
              });

              const img = proj.querySelector('.proj-img');
              if(img) {
                  gsap.to(img, {
                      scrollTrigger: {
                          trigger: proj,
                          start: 'top bottom',
                          end: 'bottom top',
                          scrub: true
                      },
                      yPercent: 15,
                      ease: "none"
                  });
              }
          });
      });

      // 5. FAQ Accordion Logic
      const faqBtns = document.querySelectorAll('.faq-btn');
      faqBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const content = btn.nextElementSibling;
              const iconWrap = btn.querySelector('.icon-wrap');
              const isOpen = content.classList.contains('active');

              // Close all others
              document.querySelectorAll('.faq-content').forEach(c => {
                  if (c !== content) {
                      gsap.to(c, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
                      c.classList.remove('active');
                  }
              });
              document.querySelectorAll('.icon-wrap').forEach(i => {
                  if (i !== iconWrap) gsap.to(i, { rotation: 0, duration: 0.3 });
              });

              // Toggle current
              if (isOpen) {
                  gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
                  gsap.to(iconWrap, { rotation: 0, duration: 0.3 });
                  content.classList.remove('active');
              } else {
                  content.style.height = 'auto';
                  const targetHeight = content.offsetHeight;
                  content.style.height = '0px';

                  gsap.to(content, { height: targetHeight, opacity: 1, duration: 0.4, ease: "power2.out" });
                  gsap.to(iconWrap, { rotation: 45, duration: 0.3 });
                  content.classList.add('active');
              }
          });
      });

      // 6. Footer Entrance
      gsap.from('.footer-title', {
          scrollTrigger: {
              trigger: 'footer',
              start: 'top 80%',
          },
          scale: 0.9,
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "expo.out"
      });
    


      setTimeout(() => {
        if (window.gsap && window.ScrollTrigger) {
          const testSection = document.querySelector('[data-element-id="testimonials-section"]');
          const testCards = gsap.utils.toArray('.testimonial-card');

          if (testSection && testCards.length > 0) {
            gsap.fromTo(testCards[0], { opacity: 0, y: 40 }, {
              scrollTrigger: {
                trigger: testSection,
                start: 'top 85%',
                end: 'top 50%',
                scrub: 1
              },
              opacity: 1,
              y: 0,
              ease: 'power2.out'
            });

            testCards.forEach((card, i) => {
              if (i > 0) {
                gsap.set(card, { y: window.innerHeight * 0.8, opacity: 0, scale: 0.95 });
              }
              card.style.zIndex = i;
            });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: testSection,
                start: 'top top',
                end: () => '+=' + (window.innerHeight * 2.5),
                pin: true,
                scrub: 1
              }
            });

            const isMobile = window.innerWidth < 768;
            const yOffset = isMobile ? -140 : -220;

            testCards.forEach((card, i) => {
              if (i > 0) {
                for(let j = 0; j < i; j++) {
                  tl.to(testCards[j], {
                    y: yOffset * (i - j),
                    scale: 1 - 0.05 * (i - j),
                    opacity: i - j === 1 ? 0.15 : 0,
                    ease: 'power2.inOut'
                  }, 'step' + i);
                }
                tl.fromTo(card, { y: window.innerHeight * 0.8, opacity: 0, scale: 0.95 }, {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  ease: 'power2.inOut'
                }, 'step' + i);

                tl.to({}, { duration: 0.4 });
              }
            });
          }

          gsap.to('.contact-bg-parallax img', {
            scrollTrigger: {
              trigger: '.contact-container',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            },
            yPercent: -20,
            ease: 'none'
          });
          gsap.fromTo('.contact-title', { opacity: 0, y: 50 }, {
            scrollTrigger: {
              trigger: '.contact-container',
              start: 'top 70%'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          });
          gsap.fromTo('.contact-form-wrap', { opacity: 0, y: 40 }, {
            scrollTrigger: {
              trigger: '.contact-container',
              start: 'top 60%'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          });
          ScrollTrigger.refresh();
        }
      }, 500);
    


      setTimeout(() => {
        if (window.gsap && window.ScrollTrigger) {
          const faqSection = document.getElementById('faq-section');
          const faqItems = gsap.utils.toArray('#faq-section .faq-list > div');
          const faqTitle = faqSection ? faqSection.querySelector('h2') : null;
          const faqImgWrap = faqSection ? faqSection.querySelector('.aspect-square') : null;
          if (faqSection && faqItems.length > 0) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: faqSection,
                start: 'top 85%',
                end: 'top 30%',
                scrub: 1.5
              }
            });
            if (faqTitle) {
              tl.fromTo(faqTitle, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out' }, 0);
            }
            if (faqImgWrap) {
              tl.fromTo(faqImgWrap, { scale: 0.85, rotation: -8, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, ease: 'power3.out' }, 0.1);
            }
            tl.fromTo(faqItems, { x: 60, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.15, ease: 'power2.out' }, 0.2);
          }
        }
      }, 600);
    
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
      
<div className="noise-bg"></div>


<nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-8 flex justify-between items-start text-xs uppercase tracking-widest font-medium blend-diff text-white pointer-events-none">
<div className="pointer-events-auto hover:italic cursor-pointer max-w-[9rem] leading-tight">
        Offgrid Studio.
      </div>
<div className="hidden md:flex flex-col text-center pointer-events-auto">
<span className="">Headquarters</span>
<span className="opacity-50">[40.7128° N, 74.0060° W]</span>
</div>
<div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-8 pointer-events-auto text-right">
<a className="hover:underline underline-offset-4" href="#about">ABOUT</a>
<a className="hover:underline underline-offset-4" href="#vectors-section">
          SERVICES
        </a>
<a className="hover:underline underline-offset-4" href="#works">WORKS</a>
<a className="hover:underline underline-offset-4" href="#contact">
          CONTACT
        </a>
</div>
</nav>
<section className="relative min-h-[900px] md:min-h-[980px] bg-[#d4d4d4] flex flex-col justify-center overflow-hidden text-black pt-20">

<div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none w-full px-4 md:px-12 mix-blend-difference text-white">
<h1 className="text-[20vw] md:text-[18vw] leading-[0.75] uppercase font-semibold tracking-tighter w-full text-left hero-text" data-speed="0.8">
          VISUAL
        </h1>
<h1 className="text-[20vw] md:text-[18vw] leading-[0.75] uppercase font-semibold tracking-tighter w-full text-right hero-text pl-[10vw]" data-speed="1.2">
          CULTURE
        </h1>
</div>

<div className="relative z-0 mx-auto w-[90%] md:w-[45%] aspect-[4/5] md:aspect-square bg-black p-2 md:p-6 hero-image-block rotate-[-2deg]">
<img alt="Abstract Structure" className="w-full h-full object-cover grayscale contrast-125 opacity-80 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0b4a738-6fcf-456b-a7e3-a7393e9125c9_1600w.webp"/>

<div className="absolute inset-0 p-8 grid grid-cols-2 grid-rows-3 text-xs uppercase tracking-widest text-white/60 pointer-events-none">
<div className="border-t border-white/20 pt-2 w-1/2">Brand Identity</div>
<div className="border-t border-white/20 pt-2 text-right justify-self-end w-1/2">
            Digital Products
          </div>
<div className="col-span-2 self-center text-center opacity-30 text-base border-y border-white/10 py-4">
            Defining modern visual systems
          </div>
<div className="self-end border-b border-white/20 pb-2 w-1/2">
            Motion Design
          </div>
<div className="self-end text-right justify-self-end border-b border-white/20 pb-2 w-1/2">
            Creative Direction
          </div>
</div>
</div>

<div className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex justify-between text-xs uppercase tracking-widest font-medium z-20 mix-blend-difference text-white">
<div className="w-1/3 border-t border-white pt-2">
          Rejecting mediocrity to build iconic brand identities and digital
          experiences.
        </div>
<div className="w-1/3 text-right border-t border-white pt-2">
          Index 01 — The Studio
        </div>
</div>
</section>

<section className="bg-[#050505] text-white min-h-[900px] relative py-32 px-6 md:px-12 border-t border-white/20" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

<div className="lg:col-span-4 flex flex-col gap-16">
<div className="stat-block border-t border-white/30 pt-4">
<div className="text-xs uppercase tracking-widest opacity-50 mb-2">
              Client Impact
            </div>
<h2 className="text-7xl md:text-8xl font-semibold tracking-tighter">
<span className="counter" data-target="99">0</span>
<span className="text-4xl text-white/50">.9%</span>
</h2>
<p className="mt-4 text-base uppercase tracking-tight w-4/5 opacity-80">
              Transformative market presence achieved for global partners.
            </p>
</div>
<div className="stat-block border-t border-white/30 pt-4">
<div className="text-xs uppercase tracking-widest opacity-50 mb-2">
              Projects Shipped
            </div>
<h2 className="text-7xl md:text-8xl font-semibold tracking-tighter">
<span className="counter" data-target="250">0</span>
<span className="text-4xl text-white/50">+</span>
</h2>
<p className="mt-4 text-base uppercase tracking-tight w-4/5 opacity-80">
              Digital products and visual systems launched worldwide.
            </p>
</div>
<div className="stat-block border-t border-white/30 pt-4">
<div className="text-xs uppercase tracking-widest opacity-50 mb-2">
              Partnerships
            </div>
<h2 className="text-7xl md:text-8xl font-semibold tracking-tighter">
<span className="counter" data-target="100">0</span>
<span className="text-4xl text-white/50">+</span>
</h2>
<p className="mt-4 text-base uppercase tracking-tight w-4/5 opacity-80">
              Collaborations with brands that refuse to blend in.
            </p>
</div>
</div>

<div className="lg:col-span-8 flex flex-col pt-12 lg:pt-0">
<div className="text-xs uppercase tracking-widest opacity-50 mb-8 border-b border-white/20 pb-4">
            (001 - The Philosophy)
          </div>
<h3 className="text-5xl md:text-7xl lg:text-[6.5vw] font-semibold tracking-tighter leading-[0.85] uppercase manifesto-title mb-16 mix-blend-exclusion text-gray-300">
<span className="mask-wrap mr-[1vw]">
<span className="inline-block manifesto-word">
                WE SHAPE FORM, FUNCTION, AND CULTURE INTO BRANDS THAT REFUSE TO
                BLEND IN.
              </span>
</span>
</h3>
<div className="flex flex-col md:flex-row gap-8 items-start relative">
<img alt="Structure" className="w-full md:w-64 aspect-square object-cover grayscale contrast-150 filter-noise rotate-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg"/>
<div className="flex flex-col gap-8">
<p className="text-xl md:text-3xl font-medium tracking-tight uppercase leading-snug w-full md:w-4/5 manifesto-body">
                We are digital brutalists, dismantling conventional design to
                reveal raw, unadulterated brand truth. No fluff, only impact.
              </p>
<button className="w-32 h-32 rounded-full border border-white flex items-center justify-center text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors duration-500 group self-start md:absolute md:-bottom-16 md:right-12">
<span className="group-hover:scale-90 transition-transform">
                  Explore
                </span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111] text-white min-h-[900px] py-32 relative overflow-hidden border-t border-white/10" id="vectors-section">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0 overflow-hidden">
<h1 className="text-[25vw] font-semibold tracking-tighter uppercase transform scale-y-[3] blur-sm bg-stripes bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent distorted-bg">
          SERVICES
        </h1>
</div>
<div className="px-6 md:px-12 relative z-10 flex flex-col h-full justify-between">
<div className="text-center mb-24 border-b border-white/20 pb-8">
<span className="text-xs uppercase tracking-widest opacity-50 block mb-4">
            (002 - Core Capabilities)
          </span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase">
            Creative Disciplines
          </h2>
</div>
<div className="flex flex-col w-full list-container">

<div className="group border-b border-white/20 py-8 flex flex-col md:flex-row md:items-end justify-between cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 px-4 -mx-4 service-item">
<span className="text-xs opacity-50 mb-2 md:mb-0 md:w-1/12 uppercase tracking-widest">
              Srv.01
            </span>
<h3 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase md:w-7/12 leading-none transform group-hover:translate-x-4 transition-transform duration-500">
              Mobile App
            </h3>
<div className="mt-4 md:mt-0 text-base md:text-lg tracking-tight uppercase md:w-3/12 opacity-70 group-hover:opacity-100 transition-opacity">
              Architecting seamless and native mobile experiences.
            </div>
<i className="hidden md:block w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" data-lucide="arrow-up-right"></i>
</div>

<div className="group border-b border-white/20 py-8 flex flex-col md:flex-row md:items-end justify-between cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 px-4 -mx-4 service-item">
<span className="text-xs opacity-50 mb-2 md:mb-0 md:w-1/12 uppercase tracking-widest">
              Srv.02
            </span>
<h3 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase md:w-7/12 leading-none transform group-hover:translate-x-4 transition-transform duration-500">
              UI/UX
              <br/>
              Design
            </h3>
<div className="mt-4 md:mt-0 text-base md:text-lg tracking-tight uppercase md:w-3/12 opacity-70 group-hover:opacity-100 transition-opacity">
              Crafting interfaces that demand user engagement.
            </div>
<i className="hidden md:block w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2" data-lucide="arrow-up-right"></i>
</div>

<div className="group border-b border-white/20 py-8 flex flex-col md:flex-row md:items-end justify-between cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 px-4 -mx-4 service-item relative overflow-hidden">
<span className="text-xs opacity-50 mb-2 md:mb-0 md:w-1/12 uppercase tracking-widest z-10 relative">
              Srv.03
            </span>
<h3 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase md:w-7/12 leading-none transform group-hover:translate-x-4 transition-transform duration-500 z-10 relative text-white mix-blend-difference">
              Graphic
              <br/>
              Design
            </h3>
<div className="mt-4 md:mt-0 text-base md:text-lg tracking-tight uppercase md:w-3/12 opacity-70 group-hover:opacity-100 transition-opacity z-10 relative">
              Visual communication that cuts through the noise.
            </div>

<img alt="Bg" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-opacity duration-700 pointer-events-none mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d98c7990-66a7-4e51-b746-3e37a1d353ba_1600w.webp"/>
</div>
<div className="group border-b border-white/20 py-8 flex flex-col md:flex-row md:items-end justify-between gap-0 md:gap-10 cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 px-4 -mx-4 service-item">
<span className="text-xs opacity-50 mb-2 md:mb-0 md:w-1/12 uppercase tracking-widest shrink-0">
              Srv.04
            </span>
<h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter uppercase md:w-6/12 leading-none transform group-hover:translate-x-4 transition-transform duration-500">
              Web
              <br/>
              Development
            </h3>
<div className="mt-4 md:mt-0 text-base md:text-lg tracking-tight uppercase md:w-4/12 opacity-70 group-hover:opacity-100 transition-opacity relative z-10">
              Building robust, scalable digital environments.
            </div>
<i className="hidden md:block w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2 shrink-0" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</section>

<section className="bg-[#000] text-white py-20 relative overflow-hidden" id="works">
<div className="relative px-6 md:px-12 flex justify-between items-end border-b border-white/20 pb-8 mb-24 pt-10 uppercase tracking-tighter">
<span className="absolute top-0 left-6 md:left-12 text-xs tracking-widest opacity-50 block font-sans font-normal">
          (003 - Selected Works)
        </span>
<h2 className="text-4xl md:text-6xl font-semibold">The Vision</h2>
<h2 className="text-4xl md:text-6xl font-semibold">The Result</h2>
</div>
<div className="relative w-full md:min-h-[1800px] px-6 md:px-12 archive-container">

<div className="relative md:absolute md:top-0 md:left-[5%] w-full md:w-[45%] group project-card mix-blend-lighten">
<div className="flex justify-between items-center mb-4 border-t border-white/30 pt-2 proj-header">
<span className="text-xs uppercase tracking-widest opacity-50">
              Case 01
            </span>
<span className="text-xs uppercase tracking-widest">E-Commerce</span>
</div>
<div className="relative aspect-[3/4] bg-[#1a1a1a] group">
<div className="absolute inset-0 overflow-hidden proj-img-mask" style={{clipPath: 'inset(0%)'}}>
<img alt="Project 1" className="w-full h-full object-cover grayscale opacity-80 transform scale-110 group-hover:scale-100 transition-transform duration-1000 proj-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a12886cd-d151-46ec-9b72-7bf5ae288307_1600w.webp"/>
</div>
<h3 className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6 lg:-left-10 text-5xl md:text-7xl font-semibold tracking-tighter uppercase mix-blend-difference leading-none z-10 whitespace-nowrap group-hover:italic transition-all proj-title">
              ATELIER
              <br/>
              EDITION
            </h3>
</div>
<p className="mt-6 text-base tracking-tight uppercase opacity-80 w-3/4 ml-auto text-right proj-caption">
            Redefining premium retail through aggressive visual storytelling.
          </p>
</div>

<div className="relative md:absolute md:top-[24%] md:right-[5%] w-full md:w-[38%] group project-card mix-blend-lighten mt-24 md:mt-0">
<div className="flex justify-between items-center mb-4 border-t border-white/30 pt-2 proj-header">
<span className="text-xs uppercase tracking-widest opacity-50">
              Case 02
            </span>
<span className="text-xs uppercase tracking-widest">Tech Platform</span>
</div>
<div className="relative aspect-square bg-[#1a1a1a] group">
<div className="absolute inset-0 overflow-hidden proj-img-mask" style={{clipPath: 'inset(0%)'}}>
<img alt="Project 2" className="w-full h-full object-cover grayscale contrast-150 transform scale-110 group-hover:scale-100 transition-transform duration-1000 proj-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6553c87d-98bb-4178-8a36-0e807a5ea183_1600w.jpg"/>
</div>
<h3 className="absolute bottom-8 right-4 md:-right-4 lg:-right-8 text-5xl md:text-6xl font-semibold tracking-tighter uppercase mix-blend-difference leading-none text-right z-10 whitespace-nowrap group-hover:tracking-widest transition-all proj-title">
              SIGNAL
              <br/>
              GRID
            </h3>
</div>
<p className="mt-6 text-base tracking-tight uppercase opacity-80 w-3/4 proj-caption">
            Transforming complex datasets into intuitive digital interfaces.
          </p>
</div>

<div className="relative md:absolute md:top-[68%] md:left-[20%] w-full md:w-[55%] group project-card mix-blend-lighten mt-24 md:mt-0">
<div className="flex justify-between items-center mb-4 border-t border-white/30 pt-2 proj-header">
<span className="text-xs uppercase tracking-widest opacity-50">
              Case 03
            </span>
<span className="text-xs uppercase tracking-widest">Automotive</span>
</div>
<div className="relative aspect-[16/9] bg-[#1a1a1a]">
<div className="absolute inset-0 overflow-hidden proj-img-mask" style={{clipPath: 'inset(0%)'}}>
<img alt="Project 3" className="w-full h-full object-cover grayscale opacity-70 transform scale-110 group-hover:scale-100 transition-transform duration-1000 proj-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0d85cad-8b55-4110-bfcd-6e2ecb2542eb_1600w.jpg"/>
</div>
<h3 className="absolute top-4 md:-top-4 left-4 md:left-[18%] lg:left-[22%] text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase mix-blend-difference leading-none z-10 whitespace-nowrap group-hover:-translate-y-4 transition-transform proj-title">
              APEX MOTOR
            </h3>
</div>
<p className="mt-6 text-base tracking-tight uppercase opacity-80 w-1/2 ml-auto proj-caption">
            Digital showrooms engineered for high-performance automotive brands.
          </p>
</div>
</div>
</section>
<section className="bg-[#050505] text-white py-32 px-6 md:px-12 border-t border-white/20 relative" data-element-id="testimonials-section">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 relative">
<div className="sticky top-32 flex flex-col gap-8 testimonial-sticky">
<span className="text-xs uppercase tracking-widest opacity-50">
              (004 - Client Voices)
            </span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.85]">
              The
              <br/>
              Verdict
            </h2>
<p className="text-base uppercase tracking-tight opacity-70 w-4/5">
              Words from partners who dared to disrupt their industries with us.
            </p>
</div>
</div>
<div className="lg:col-span-7 grid testimonial-list pt-16 relative">
<div className="col-start-1 row-start-1 w-full flex flex-col gap-6 testimonial-card origin-top">
<p className="text-2xl md:text-4xl font-medium tracking-tight uppercase leading-snug">
              "They stripped away all the corporate nonsense and gave us a brand
              identity that actually commands attention. Completely ruthless and
              brilliant."
            </p>
<div className="flex items-center gap-4 border-t border-white/20 pt-4">
<div className="text-xs uppercase tracking-widest">
<strong>Elena Rostova</strong>
<br/>
<span className="opacity-50">CEO, Atelier Edition</span>
</div>
</div>
</div>
<div className="col-start-1 row-start-1 w-full flex flex-col gap-6 testimonial-card origin-top">
<p className="text-2xl md:text-4xl font-medium tracking-tight uppercase leading-snug">
              "We asked for a website. They delivered a digital weapon.
              Conversion rates have doubled since launch."
            </p>
<div className="flex items-center gap-4 border-t border-white/20 pt-4">
<div className="text-xs uppercase tracking-widest">
<strong>Marcus Chen</strong>
<br/>
<span className="opacity-50">Founder, Signal Grid</span>
</div>
</div>
</div>
<div className="col-start-1 row-start-1 w-full flex flex-col gap-6 testimonial-card origin-top">
<p className="text-2xl md:text-4xl font-medium tracking-tight uppercase leading-snug">
              "Uncompromising vision. They don't just design; they architect
              culture."
            </p>
<div className="flex items-center gap-4 border-t border-white/20 pt-4">
<div className="text-xs uppercase tracking-widest">
<strong>Sarah Vance</strong>
<br/>
<span className="opacity-50">CMO, Apex Motor</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#111] text-white py-32 px-6 md:px-12 border-t border-white/20" id="faq-section">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-between static lg:sticky lg:top-32 h-fit">
<span className="text-xs uppercase tracking-widest opacity-50 mb-8">
            (005 - FAQ)
          </span>
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter uppercase leading-[0.85] mb-12">
            Common
            <br/>
            Inquiries
          </h2>
<div className="relative w-full max-w-sm aspect-square p-4 border border-white/10 hidden md:block">
<img alt="Portrait" className="w-full h-full object-cover grayscale contrast-125 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg"/>
<div className="absolute inset-0 border border-white/30 transform rotate-3 pointer-events-none"></div>
</div>
<p className="mt-12 text-xs tracking-widest uppercase opacity-50">
            Reach us at
            <a className="underline" href="mailto:hello@offgridstudio.com">
              hello@offgridstudio.com
            </a>
</p>
</div>
<div className="flex flex-col border-t border-white/30 faq-list">
<div className="border-b border-white/30">
<button className="w-full py-8 text-left flex justify-between items-center text-xl md:text-3xl font-medium tracking-tight uppercase faq-btn group">
<span className="w-5/6 group-hover:pl-4 transition-all duration-300">
                What defines your creative process?
              </span>
<div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center icon-wrap transition-transform duration-300">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>
<div className="faq-content overflow-hidden h-0 opacity-0">
<div className="pb-8 pt-2 text-base md:text-lg uppercase tracking-tight opacity-70 w-5/6">
                We systematically dismantle bloated concepts. We strip away
                unnecessary aesthetics to deliver a raw, strategy-driven
                experience that connects your brand directly to its audience.
              </div>
</div>
</div>
<div className="border-b border-white/30">
<button className="w-full py-8 text-left flex justify-between items-center text-xl md:text-3xl font-medium tracking-tight uppercase faq-btn group">
<span className="w-5/6 group-hover:pl-4 transition-all duration-300">
                Do you work with international clients?
              </span>
<div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center icon-wrap transition-transform duration-300">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>
<div className="faq-content overflow-hidden h-0 opacity-0">
<div className="pb-8 pt-2 text-base md:text-lg uppercase tracking-tight opacity-70 w-5/6">
                Our reach is global. Physical location is irrelevant in digital
                creation. We collaborate with ambitious brands across all time
                zones.
              </div>
</div>
</div>
<div className="border-b border-white/30">
<button className="w-full py-8 text-left flex justify-between items-center text-xl md:text-3xl font-medium tracking-tight uppercase faq-btn group">
<span className="w-5/6 group-hover:pl-4 transition-all duration-300">
                Why should we partner with you?
              </span>
<div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center icon-wrap transition-transform duration-300">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>
<div className="faq-content overflow-hidden h-0 opacity-0">
<div className="pb-8 pt-2 text-base md:text-lg uppercase tracking-tight opacity-70 w-5/6">
                Because comfort leads to stagnation. We introduce bold,
                calculated design that forces your audience to pay attention. If
                you seek to blend in, we are not the agency for you.
              </div>
</div>
</div>
<div className="border-b border-white/30">
<button className="w-full py-8 text-left flex justify-between items-center text-xl md:text-3xl font-medium tracking-tight uppercase faq-btn group">
<span className="w-5/6 group-hover:pl-4 transition-all duration-300">
                Do you offer long-term retainers?
              </span>
<div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center icon-wrap transition-transform duration-300">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</button>
<div className="faq-content overflow-hidden h-0 opacity-0">
<div className="pb-8 pt-2 text-base md:text-lg uppercase tracking-tight opacity-70 w-5/6">
                Yes. We provide continuous creative direction and progressive
                scaling of digital products to keep your brand's presence sharp
                and relevant.
              </div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#111] text-white py-32 px-6 md:px-12 border-t border-white/20 relative overflow-hidden contact-container" id="contact">
<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] overflow-hidden contact-bg-parallax">
<img alt="Contact BG" className="w-full h-[120%] object-cover grayscale blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4780cd9-2a3d-4bdc-9e5f-85a097b3a8bf_1600w.webp"/>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="text-xs uppercase tracking-widest opacity-50 mb-8 block">
          (006 - Contact Us)
        </span>
<h2 className="text-6xl md:text-9xl font-semibold tracking-tighter uppercase leading-[0.8] mb-16 mix-blend-difference contact-title">
          Ready to go
          <br/>
          offgrid?
        </h2>
<div className="w-full max-w-2xl mx-auto flex flex-col gap-12 contact-form-wrap">
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full relative group">
<input className="w-full bg-transparent border-b border-white/30 pb-4 outline-none uppercase text-sm tracking-widest placeholder:text-white/30 focus:border-white transition-colors peer relative z-10" placeholder="YOUR NAME" type="text"/>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 peer-focus:w-full z-20"></span>
</div>
<div className="w-full relative group">
<input className="w-full bg-transparent border-b border-white/30 pb-4 outline-none uppercase text-sm tracking-widest placeholder:text-white/30 focus:border-white transition-colors peer relative z-10" placeholder="YOUR EMAIL" type="email"/>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 peer-focus:w-full z-20"></span>
</div>
</div>
<div className="w-full relative group">
<textarea className="w-full bg-transparent border-b border-white/30 pb-4 outline-none uppercase text-sm tracking-widest placeholder:text-white/30 focus:border-white transition-colors resize-none peer relative z-10" placeholder="PROJECT DETAILS" rows="4"></textarea>
<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 peer-focus:w-full z-20"></span>
</div>
<button className="w-full md:w-auto self-center mt-4 px-16 py-5 border border-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors duration-500 rounded-full group">
<span className="inline-block transition-transform duration-300 group-hover:scale-95">
              Start a project
            </span>
</button>
</div>
</div>
</section>


<footer className="bg-[#050505] text-white pt-32 pb-8 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden relative border-t border-white/30">
<div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none mix-blend-overlay">
<div className="w-px h-full bg-white absolute"></div>
<div className="h-px w-full bg-white absolute"></div>
<div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] border border-white rounded-full absolute border-dashed"></div>
</div>
<div className="text-center z-10 w-full max-w-6xl flex flex-col items-center">
<h1 className="text-[12vw] md:text-[10vw] font-semibold tracking-tighter leading-[0.75] uppercase footer-title mix-blend-exclusion">
          Start
          <br/>
<span className="italic font-light opacity-80 block mt-2">A Project</span>
</h1>
<div className="mt-16 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-b border-white/20 py-8 text-xs uppercase tracking-widest text-left">
<div className="flex flex-col gap-2">
<span className="opacity-50 mb-4">Nav</span>
<a className="hover:italic" href="#about">ABOUT</a>
<a className="hover:italic" href="#vectors-section">SERVICES</a>
<a className="hover:italic" href="#works">WORKS</a>
<a className="hover:italic" href="#faq-section">FAQ</a>
<a className="hover:italic" href="#contact">CONTACT</a>
</div>
<div className="flex flex-col gap-2">
<span className="opacity-50 mb-4">Comm</span>
<a className="hover:italic" href="#">Instagram</a>
<a className="hover:italic" href="#">X / Twitter</a>
<a className="hover:italic" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-2 col-span-2 md:col-span-2">
<span className="opacity-50 mb-4">Newsletter</span>
<div className="flex border-b border-white pb-2">
<input className="bg-transparent outline-none w-full placeholder:text-white/30 placeholder:uppercase" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="hover:opacity-50">Submit</button>
</div>
</div>
</div>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-end z-10 text-xs uppercase tracking-widest font-medium opacity-60">
<div className="flex gap-4 mb-4 md:mb-0">
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
<div className="text-[15vw] md:text-[10vw] font-semibold tracking-tighter leading-none select-none mix-blend-difference mt-8 md:mt-0">
          ©OFFGRIDSTUDIO
        </div>
</div>
</footer>




    </>
  );
}
