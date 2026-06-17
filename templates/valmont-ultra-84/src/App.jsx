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



      lucide.createIcons();

      const isMobile = window.innerWidth < 768;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      document.querySelectorAll('.masked-heading').forEach(heading => {
        const html = heading.innerHTML;
        const lines = html.split('<br>');
        heading.innerHTML = lines.map(line => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = line;
          let processedLine = line;
          if (!line.includes('js-word')) {
            const words = tempDiv.textContent.split(' ').map(word => {
              if (!word.trim()) return '';
              return `<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block translate-y-[110%] opacity-0 js-word">${word}</span></span>`;
            }).join(' ');
            processedLine = `<span class="block">${words}</span>`;
          }
          return processedLine;
        }).join('');
      });

      window.addEventListener('load', () => {
        gsap.to('#loader h1', { opacity: 0, scale: 1.02, duration: 0.8, delay: 0.3, ease: "power2.inOut" });
        gsap.to('#loader', {
          opacity: 0, duration: 0.8, delay: 0.8, ease: "power2.inOut",
          onComplete: () => { document.getElementById('loader').style.display = 'none'; }
        });
      });

      const lenis = new Lenis({
        duration: isMobile ? 1.0 : 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: !isTouch,
        smoothTouch: false,
        touchMultiplier: 1.5,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on('scroll', (e) => {
        const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.getElementById('scroll-progress').style.width = `${progress}%`;
      });

      // Cursor - only on non-touch devices
      if (!isTouch) {
        const cursorDot = document.getElementById('cursor-dot');
        const cursorText = document.getElementById('cursor-text');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        const loopCursor = () => {
          cursorX += (mouseX - cursorX) * 0.12;
          cursorY += (mouseY - cursorY) * 0.12;
          cursorDot.style.left = `${cursorX}px`;
          cursorDot.style.top = `${cursorY}px`;
          requestAnimationFrame(loopCursor);
        };
        requestAnimationFrame(loopCursor);

        document.querySelectorAll('.cursor-interact').forEach(el => {
          const hasImage = el.querySelector('img') || el.classList.contains('img-parallax-wrap');
          if (!hasImage) return;
          el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover-active');
            if (el.dataset.cursorText) cursorText.textContent = el.dataset.cursorText;
          });
          el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover-active');
            cursorText.textContent = '';
          });
        });
      } else {
        document.getElementById('cursor-dot').style.display = 'none';
      }

      gsap.registerPlugin(ScrollTrigger);

      // Simplified animations for mobile
      const animDuration = isMobile ? 0.8 : 1.4;
      const animDistance = isMobile ? 20 : 30;

      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'backdrop-blur-xl bg-white/80 border-b-[#E0DDD9]', targets: '#navbar' }
      });

      const allRevealElements = Array.from(document.querySelectorAll('.gs-reveal'));
      const heroSection = document.querySelector('body > section:first-of-type');
      const heroRevealElements = allRevealElements.filter(el => heroSection && heroSection.contains(el));
      const otherRevealElements = allRevealElements.filter(el => !(heroSection && heroSection.contains(el)));

      heroRevealElements.forEach(el => {
        if (el.classList.contains('fade-up')) {
          gsap.fromTo(el, { y: animDistance, opacity: 0 }, {
            y: 0, opacity: 1, duration: animDuration, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" }
          });
        } else if (el.classList.contains('blur-in')) {
          gsap.fromTo(el, { y: 15, opacity: 0, filter: isMobile ? "blur(6px)" : "blur(12px)" }, {
            y: 0, opacity: 1, filter: "blur(0px)", duration: animDuration, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" }
          });
        } else if (el.classList.contains('scale-reveal')) {
          gsap.fromTo(el, { scale: 0.97, opacity: 0 }, {
            scale: 1, opacity: 1, duration: animDuration, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" }
          });
        } else if (el.classList.contains('fade-left')) {
          gsap.fromTo(el, { x: animDistance, opacity: 0 }, {
            x: 0, opacity: 1, duration: animDuration, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" }
          });
        } else if (el.classList.contains('fade-right')) {
          gsap.fromTo(el, { x: -animDistance, opacity: 0 }, {
            x: 0, opacity: 1, duration: animDuration, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" }
          });
        }
      });

      ScrollTrigger.batch(otherRevealElements, {
        start: "top 90%",
        onEnter: batch => {
          batch.forEach((el, index) => {
            let fromVars = { opacity: 0 };
            let toVars = { opacity: 1, duration: isMobile ? 0.6 : 1.2, delay: isMobile ? index * 0.05 : index * 0.1, ease: "power2.out", overwrite: "auto" };

            if (el.classList.contains('blur-in')) {
              fromVars.y = isMobile ? 15 : 30;
              fromVars.filter = isMobile ? "blur(6px)" : "blur(12px)";
              toVars.y = 0;
              toVars.filter = "blur(0px)";
            } else if (el.classList.contains('scale-reveal')) {
              fromVars.y = isMobile ? 15 : 30;
              fromVars.scale = 0.97;
              toVars.y = 0;
              toVars.scale = 1;
            } else if (el.classList.contains('fade-left')) {
              fromVars.x = isMobile ? 20 : 40;
              fromVars.y = isMobile ? 15 : 30;
              toVars.x = 0;
              toVars.y = 0;
            } else if (el.classList.contains('fade-right')) {
              fromVars.x = isMobile ? -20 : -40;
              fromVars.y = isMobile ? 15 : 30;
              toVars.x = 0;
              toVars.y = 0;
            } else {
              fromVars.y = isMobile ? 15 : 30;
              toVars.y = 0;
            }

            gsap.fromTo(el, fromVars, toVars);
          });
        },
        once: true
      });

      document.querySelectorAll('.masked-heading').forEach(heading => {
        const wordsItems = heading.querySelectorAll('.js-word');
        if (wordsItems.length === 0) return;
        gsap.to(wordsItems, {
          y: 0, opacity: 1, duration: isMobile ? 1.0 : 1.6, ease: "power4.out", stagger: isMobile ? 0.03 : 0.05,
          scrollTrigger: { trigger: heading, start: "top 90%" }
        });
      });

      document.querySelectorAll('.clip-reveal').forEach(el => {
        el.classList.add('clip-hidden');
        gsap.to(el, {
          clipPath: "inset(0 0 0% 0)",
          duration: isMobile ? 1.2 : 2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 90%" }
        });
      });

      // Parallax images - skip on mobile for performance
      if (!isMobile) {
        gsap.utils.toArray('.img-parallax').forEach(img => {
          if (img.classList.contains('hero-parallax-img')) return;
          gsap.to(img, {
            yPercent: 12, ease: "none",
            scrollTrigger: { trigger: img.parentElement, scrub: true }
          });
        });
      }

      // Label scramble
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      document.querySelectorAll('.label-scramble').forEach(label => {
        let originalText = label.innerText;
        ScrollTrigger.create({
          trigger: label, start: "top 95%",
          onEnter: () => {
            let iteration = 0;
            let interval = setInterval(() => {
              label.innerText = label.innerText
                .split("")
                .map((letter, index) => {
                  if (letter === ' ' || letter === '\n') return letter;
                  if (index < iteration) return originalText[index];
                  return letters[Math.floor(Math.random() * 26)];
                }).join("");
              if (iteration >= originalText.length) clearInterval(interval);
              iteration += isMobile ? 1 : 1 / 3;
            }, isMobile ? 20 : 30);
          }
        });
      });

      // Horizontal scroll - only on desktop
      if (!isMobile) {
        const horizScroller = document.querySelector("#horizontal-container");
        if (horizScroller) {
          const scrollerWidth = horizScroller.scrollWidth;
          gsap.to(horizScroller, {
            x: () => -(scrollerWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: "#horizontal-scroller",
              pin: true, scrub: 1,
              end: () => "+=" + scrollerWidth
            }
          });
        }
      }

      // Hero parallax - only on desktop
      if (!isMobile) {
        window.addEventListener('load', () => {
          if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.to('.hero-parallax-img', {
              yPercent: -25,
              ease: 'none',
              scrollTrigger: {
                trigger: '.hero-parallax-img',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
              }
            });
          }
        });
      }

      setTimeout(() => {
        if (window.lucide) window.lucide.createIcons();
      }, 100);
    
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
      

<div className="fixed inset-0 pointer-events-none z-[-2] hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#E0DDD9]"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9]"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9]"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="" id="scroll-progress"></div>
<div className="" id="cursor-dot">
<span className="text-xs" id="cursor-text"></span>
</div>

<div className="fixed inset-0 bg-[#F5F5F3] z-[9998] flex items-center justify-center" id="loader" style={{display: 'none'}}>
<h1 className="text-3xl uppercase text-[#1A1A1A] tracking-tight font-medium">
        VALMONT
      </h1></div>

<nav className="transition-all duration-500 flex px-5 md:px-16 bg-[#f7f5f3] w-full z-50 border-[#E0DDD9] border-b py-4 md:py-8 top-0 items-center justify-between" id="navbar">
<div className="text-xl md:text-2xl uppercase cursor-interact tracking-tight text-[#1A1A1A] font-medium flex-1" data-cursor-text="Home">
        VALMONT
      </div>
<div className="hidden lg:flex gap-12 text-sm uppercase tracking-widest font-light text-[#1A1A1A] justify-center">
<a className="transition-colors duration-300 relative group cursor-interact hover:text-[#E55B3C]" href="#">
          Estates
        </a>
<a className="hover:text-[#E55B3C] transition-colors duration-300 relative group cursor-interact" href="#">
          Architecture
        </a>
<a className="hover:text-[#E55B3C] transition-colors duration-300 relative group cursor-interact" href="#">
          Advisory
        </a>
<a className="hover:text-[#E55B3C] transition-colors duration-300 relative group cursor-interact" href="#">
          Journal
        </a>
</div>
<div className="flex items-center gap-4 md:gap-8 flex-1 justify-end">
<button className="group inline-flex items-center gap-2 md:gap-3 ring-1 ring-[#E55B3C] hover:bg-[#c94b2f] hover:ring-[#c94b2f] transition-all duration-300 text-xs font-medium uppercase tracking-widest text-white bg-[#E55B3C] rounded-full py-2 pr-2 pl-4 md:pl-5 cursor-interact shadow-lg">
<span>Inquire</span>
<span className="inline-flex h-7 w-7 md:h-8 md:w-8 items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#1A1A1A] bg-white rounded-full">
<iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</button>
</div>
</nav>

<section className="min-h-[auto] md:min-h-screen flex flex-col md:pt-[18vh] md:px-16 overflow-hidden bg-[#F7F5F2] w-full pt-[8vh] px-5 relative pb-10 md:pb-0">
<div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-[#E0DDD9] z-0 hidden md:block"></div>
<div className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-[#E0DDD9] z-0 hidden md:block"></div>
<div className="absolute inset-0 z-0 opacity-30 pointer-events-none" id="canvas-container"></div>
<div className="flex flex-col gs-reveal fade-up text-center w-full max-w-5xl z-20 mt-0 mr-auto ml-auto relative items-center" style={{paddingTop: '5vh', paddingBottom: '5vh'}}>
<h1 className="text-[2rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight font-normal text-[#1A1A1A] mb-4 md:mb-6 leading-[1.1] md:leading-[1.05]">
          Architectural Masterpieces.
          <br/>
          Exclusive Living.
        </h1>
<p className="text-base sm:text-lg md:text-2xl text-gray-500 font-light tracking-wide max-w-3xl mx-auto">
          Curating the world's most exceptional Estates
        </p>
</div>
<div className="relative z-10 w-full flex items-center justify-center pointer-events-none" style={{marginTop: '-10%'}}>
<img alt="Luxury Estate" className="object-center gs-reveal md:w-[75%] hero-parallax-img pointer-events-auto w-full h-auto max-w-[1500px] object-cover relative blur-in" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d549fee2-d062-41ab-8ffa-08917fed5e3d_3840w.png" style={{filter: 'blur(0px)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'}}/>
</div>
<div className="relative z-30 pb-0 md:pb-12 flex justify-center w-full mb-0 md:mb-auto mt-6 md:-mt-[10%]">
<a className="group inline-flex items-center gap-3 ring-1 ring-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 transition-all duration-300 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] bg-white/50 rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 cursor-interact backdrop-blur-lg" href="#horizontal-scroller">
<span>Discover</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:translate-y-0.5 transition-transform text-white bg-[#1A1A1A] rounded-full">
<iconify-icon height="1.2em" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
</div>
</section>

<section className="px-5 md:px-16 relative z-10 border-t border-[#2A2A2A] bg-black text-white overflow-hidden py-20 md:py-[200px]">
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="max-w-[1600px] mx-auto flex flex-col relative z-10 items-center">
<div className="flex items-center justify-center gap-4 mb-8 md:mb-16 gs-reveal fade-up">
<span className="text-xs md:text-sm uppercase tracking-widest text-[#E55B3C] font-light label-scramble">
            THE COLLECTION
          </span>
</div>
<h2 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight font-normal leading-[1.15] md:leading-[1.05] masked-heading text-white text-center mb-10 md:mb-20">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                Experience
              </span>
</span>
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                unprecedented
              </span>
</span>
</span>
<span className="block text-gray-400 mt-1 md:mt-2">
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                architectural
              </span>
</span>
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                refinement.
              </span>
</span>
</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full items-center relative mb-8 md:mb-12">
<div className="md:col-span-1 group relative rounded-none overflow-hidden cursor-interact gs-reveal fade-up aspect-[16/10] md:aspect-[4/5] w-full" data-cursor-text="Explore">
<div className="img-parallax-wrap w-full h-full relative rounded-none overflow-hidden">
<img alt="Minimalist Architecture" className="img-parallax w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=800"/>
</div>
</div>
<div className="md:col-span-2 group relative rounded-none overflow-hidden cursor-interact gs-reveal fade-up aspect-[16/10] md:aspect-[4/5] w-full" data-cursor-text="Explore" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 z-0 img-parallax-wrap w-full h-full rounded-none overflow-hidden">
<img alt="White Concrete Facade" className="img-parallax w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600"/>
</div>
</div>
<div className="md:col-span-1 group relative rounded-none overflow-hidden cursor-interact gs-reveal fade-up aspect-[16/10] md:aspect-[4/5] w-full" data-cursor-text="Explore" style={{transitionDelay: '0.2s'}}>
<div className="img-parallax-wrap w-full h-full relative rounded-none overflow-hidden">
<img alt="Modern Villa" className="img-parallax w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800"/>
</div>
</div>
</div>
<div className="max-w-[500px] text-center mx-auto gs-reveal fade-up" style={{transitionDelay: '0.3s'}}>
<p className="text-gray-400 font-light leading-relaxed text-base md:text-lg tracking-wide">
            Our residences are a testament to formal clarity and material
            honesty. Each space is meticulously crafted to foster a dialogue
            between light and structure.
          </p>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '20', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1440px', height: '3091px', padding: '0px 0px 1944px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '20', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1440px', height: '1147px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '20', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1440px', height: '1147px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '20', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1440px', height: '1147px', padding: '0px'}}><section className="z-20 flex flex-col bg-[#F4F1ED] min-h-[auto] md:min-h-screen border-[#E0DDD9] border-t pb-20 md:pb-24 relative overflow-hidden pt-20 md:pt-48" id="horizontal-scroller" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '1440px', width: '1440px', maxHeight: '1147.38px', height: '1147.38px', padding: '192px 0px 96px'}}>
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-[#E0DDD9]" style={{borderRightWidth: '0.5px'}}></div>
<div className="w-1/4 h-full border-[#E0DDD9]" style={{borderRightWidth: '0.5px'}}></div>
<div className="w-1/4 h-full border-[#E0DDD9]" style={{borderRightWidth: '0.5px'}}></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="px-5 md:px-16 z-20 w-full text-[#1A1A1A] pointer-events-none shrink-0">
<div className="flex items-center gap-4 mb-4 md:mb-6">
<span className="text-xs font-mono uppercase tracking-widest text-[#E55B3C]">
            CURATED
          </span>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-5 md:gap-12">
<h2 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.15] md:leading-[1.05] tracking-tight font-normal w-full md:w-auto">
            Featured
            <br/>
<span className="text-gray-400">Residences.</span>
</h2>
<div className="max-w-[400px] text-left text-sm text-gray-500 font-light leading-relaxed tracking-wide pb-2">
            A curated selection of private residences defined by formal clarity
            and contextual sensitivity.
          </div>
</div>
</div>

<div className="flex flex-col md:flex-row px-5 md:px-0 md:pl-[25vw] items-center md:items-start relative z-10 w-full flex-grow-0 gap-6 md:gap-12 md:overflow-visible no-scrollbar md:snap-none pb-0 md:pb-0" id="horizontal-container" style={{marginTop: '40px'}}>

<div className="w-full md:w-[25vw] md:min-w-[320px] shrink-0 group flex flex-col p-4 md:p-5 rounded-none border border-[#E0DDD9] bg-white/40 backdrop-blur-md hover:bg-white/80 transition-all duration-500 relative overflow-hidden cursor-interact" data-cursor-text="EXPLORE">
<div className="img-parallax-wrap aspect-[4/5] w-full rounded-none overflow-hidden relative">
<img alt="Lakeside Glass Pavilion" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-110 object-cover w-full h-full" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=1200"/>
</div>
<div className="mt-5 md:mt-6 flex flex-col justify-between flex-grow px-1 md:px-2 pb-1 md:pb-2">
<div className="flex flex-col gap-1.5 md:gap-2">
<span className="text-[11px] md:text-[11px] font-mono text-gray-500 tracking-widest uppercase">
                Geneva, Switzerland
              </span>
<h3 className="text-2xl md:text-2xl lg:text-3xl text-[#1A1A1A] tracking-tight font-normal">
                Lakeside Pavilion
              </h3>
</div>
<div className="pt-4 md:pt-5 mt-4 md:mt-5 flex justify-between items-center text-sm md:text-sm text-gray-500 font-light tracking-wide border-[#E0DDD9]" style={{borderTopWidth: '0.5px'}}>
<div className="flex items-center gap-4 md:gap-4">
<span>5 Beds</span>
<span className="w-[1px] h-3 bg-gray-300"></span>
<span>450 sqm</span>
</div>
<span className="text-[#1A1A1A] font-normal text-xs uppercase tracking-widest">
                POA
              </span>
</div>
</div>
</div>

<div className="w-full md:w-[25vw] md:min-w-[320px] shrink-0 group flex flex-col p-4 md:p-5 rounded-none border border-[#E0DDD9] bg-white/40 backdrop-blur-md hover:bg-white/80 transition-all duration-500 relative overflow-hidden cursor-interact" data-cursor-text="EXPLORE">
<div className="img-parallax-wrap aspect-[4/5] w-full rounded-none overflow-hidden relative">
<img alt="Odeon Tower Triplex" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-110 object-cover w-full h-full" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200"/>
</div>
<div className="mt-5 md:mt-6 flex flex-col justify-between flex-grow px-1 md:px-2 pb-1 md:pb-2">
<div className="flex flex-col gap-1.5 md:gap-2">
<span className="text-[11px] md:text-[11px] font-mono text-gray-500 tracking-widest uppercase">
                Monaco, Monte Carlo
              </span>
<h3 className="text-2xl md:text-2xl lg:text-3xl text-[#1A1A1A] tracking-tight font-normal">
                Odeon Triplex
              </h3>
</div>
<div className="pt-4 md:pt-5 mt-4 md:mt-5 flex justify-between items-center text-sm md:text-sm text-gray-500 font-light tracking-wide border-[#E0DDD9]" style={{borderTopWidth: '0.5px'}}>
<div className="flex items-center gap-4 md:gap-4">
<span>4 Beds</span>
<span className="w-[1px] h-3 bg-gray-300"></span>
<span>380 sqm</span>
</div>
<span className="text-[#1A1A1A] font-normal text-xs uppercase tracking-widest">
                € 28.5M
              </span>
</div>
</div>
</div>

<div className="w-full md:w-[25vw] md:min-w-[320px] shrink-0 group flex flex-col p-4 md:p-5 rounded-none border border-[#E0DDD9] bg-white/40 backdrop-blur-md hover:bg-white/80 transition-all duration-500 relative overflow-hidden cursor-interact" data-cursor-text="EXPLORE">
<div className="img-parallax-wrap aspect-[4/5] w-full rounded-none overflow-hidden relative">
<img alt="Avenue Montaigne Haussmann" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&amp;q=80"/>
</div>
<div className="mt-5 md:mt-6 flex flex-col justify-between flex-grow px-1 md:px-2 pb-1 md:pb-2">
<div className="flex flex-col gap-1.5 md:gap-2">
<span className="text-[11px] md:text-[11px] font-mono text-gray-500 tracking-widest uppercase">
                Paris, 8th Arrondissement
              </span>
<h3 className="text-2xl md:text-2xl lg:text-3xl text-[#1A1A1A] tracking-tight font-normal">
                Montaigne Estate
              </h3>
</div>
<div className="pt-4 md:pt-5 mt-4 md:mt-5 flex justify-between items-center text-sm md:text-sm text-gray-500 font-light tracking-wide border-[#E0DDD9]" style={{borderTopWidth: '0.5px'}}>
<div className="flex items-center gap-4 md:gap-4">
<span>3 Beds</span>
<span className="w-[1px] h-3 bg-gray-300"></span>
<span>290 sqm</span>
</div>
<span className="text-[#1A1A1A] font-normal text-xs uppercase tracking-widest">
                € 14.2M
              </span>
</div>
</div>
</div>

<div className="w-full md:w-[25vw] shrink-0 flex items-center justify-center py-6 md:py-20 px-0 md:px-10 border-[#E8E6E2]">
<a className="group inline-flex items-center gap-3 ring-1 ring-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 transition-all duration-300 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] bg-white/40 rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 cursor-interact backdrop-blur-md whitespace-nowrap" href="#">
<span>All Estates</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:translate-x-0.5 transition-transform text-white bg-[#1A1A1A] rounded-full shrink-0">
<iconify-icon height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
</div>
</div>
</section></div></div></div></div>

<section className="text-white relative z-10 border-t border-[#2A2A2A] py-20 md:py-[200px]" style={{backgroundColor: 'rgb(10, 10, 10)'}}>
<div className="max-w-[1400px] mx-auto px-5 md:px-16 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-32">
<div className="flex items-center gap-4 mb-6 lg:mb-0 gs-reveal fade-up">
<span className="text-xs md:text-sm uppercase tracking-widest text-[#E55B3C] font-light label-scramble">
              OUR SERVICES
            </span>
</div>
<h2 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight font-normal leading-[1.15] md:leading-[1.05] text-white lg:text-right gs-reveal fade-up max-w-4xl">
            Strategic foresight.
            <br className="hidden md:block"/>
            Flawless execution.
          </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full gs-reveal fade-up">

<div className="flex flex-col items-center text-center md:items-start md:text-left group p-8 md:p-8 border border-[#2A2A2A] bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-500">
<div className="flex flex-col items-center md:flex-row justify-between md:items-center mb-6 md:mb-10 w-full gap-4 md:gap-0">
<i className="w-8 h-8 text-[#E55B3C] group-hover:scale-110 transition-transform duration-500" data-lucide="landmark" strokeWidth="1.5"></i>
<div className="text-xs text-gray-500 font-mono tracking-widest">
                01
              </div>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-normal text-white mb-3 md:mb-4">
              Asset Valuation
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm md:text-base tracking-wide">
              Meticulous market analysis and intrinsic valuation to position
              your architectural asset precisely within the global ultra-prime
              segment.
            </p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left group p-8 md:p-8 border border-[#2A2A2A] bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-500">
<div className="flex flex-col items-center md:flex-row justify-between md:items-center mb-6 md:mb-10 w-full gap-4 md:gap-0">
<i className="w-8 h-8 text-[#E55B3C] group-hover:scale-110 transition-transform duration-500" data-lucide="lock" strokeWidth="1.5"></i>
<div className="text-xs text-gray-500 font-mono tracking-widest">
                02
              </div>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-normal text-white mb-3 md:mb-4">
              Discreet Marketing
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm md:text-base tracking-wide">
              Cinematic documentation and targeted off-market placement
              exclusively to our private network of UHNW individuals.
            </p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left group p-8 md:p-8 border border-[#2A2A2A] bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-500">
<div className="flex flex-col items-center md:flex-row justify-between md:items-center mb-6 md:mb-10 w-full gap-4 md:gap-0">
<i className="w-8 h-8 text-[#E55B3C] group-hover:scale-110 transition-transform duration-500" data-lucide="compass" strokeWidth="1.5"></i>
<div className="text-xs text-gray-500 font-mono tracking-widest">
                03
              </div>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-normal text-white mb-3 md:mb-4">
              Curated Sourcing
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm md:text-base tracking-wide">
              Leveraging global intelligence to unearth rare, unlisted
              properties that align with exact architectural and lifestyle
              mandates.
            </p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left group p-8 md:p-8 border border-[#2A2A2A] bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-500">
<div className="flex flex-col items-center md:flex-row justify-between md:items-center mb-6 md:mb-10 w-full gap-4 md:gap-0">
<i className="w-8 h-8 text-[#E55B3C] group-hover:scale-110 transition-transform duration-500" data-lucide="briefcase" strokeWidth="1.5"></i>
<div className="text-xs text-gray-500 font-mono tracking-widest">
                04
              </div>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-normal text-white mb-3 md:mb-4">
              Structuring &amp; Closing
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm md:text-base tracking-wide">
              Seamless coordination of legal, tax, and structural due diligence
              to ensure a confidential and frictionless transaction.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-[#2A2A2A] bg-[#151515] text-white py-20 md:py-[200px]">
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none mix-blend-screen">
<img alt="Schematic Overlay" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1600"/>
</div>
<div className="max-w-[1400px] mx-auto px-5 md:px-16 relative z-10">
<div className="text-center mb-10 md:mb-16">
<div className="flex items-center justify-center gap-4 mb-4 md:mb-6 gs-reveal fade-up">
<span className="text-xs md:text-sm uppercase tracking-widest text-[#E55B3C] font-light label-scramble">
              PRIVATE INQUIRY
            </span>
</div>
<h2 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.15] md:leading-[1.05] text-white tracking-tight font-normal">
            Define your
            <span className="text-gray-500">parameters.</span>
</h2>
</div>
<div className="border border-white/10 p-6 sm:p-8 md:p-16 lg:p-20 rounded-none gs-reveal scale-reveal bg-white/[0.04] backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative z-10">
<form className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-24 w-full">
<div className="relative gs-reveal blur-in flex flex-col justify-end w-full" style={{filter: 'blur(0px)'}}>
<label className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 md:mb-5 font-medium">
                Classification
              </label>
<div className="border-b border-white/10 pb-5 md:pb-5 mt-auto flex justify-between items-center cursor-interact group hover:border-white/40 transition-colors duration-300 min-h-[48px] md:min-h-0">
<span className="text-base md:text-lg text-white group-hover:text-white transition-colors font-light tracking-wide">
                  Contemporary Estates
                </span>
<i className="w-6 h-6 md:w-4 md:h-4 text-gray-500 transition-colors group-hover:text-white" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative gs-reveal blur-in flex flex-col justify-end w-full" style={{transitionDelay: '0.1s', filter: 'blur(0px)'}}>
<label className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 md:mb-5 font-medium">
                Global Region
              </label>
<div className="border-b border-white/10 pb-5 md:pb-5 mt-auto flex justify-between items-center cursor-interact group hover:border-white/40 transition-colors duration-300 min-h-[48px] md:min-h-0">
<span className="text-base md:text-lg text-white group-hover:text-white transition-colors font-light tracking-wide">
                  Europe (Primary)
                </span>
<i className="w-6 h-6 md:w-4 md:h-4 text-gray-500 transition-colors group-hover:text-white" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative gs-reveal blur-in flex flex-col justify-end w-full" style={{transitionDelay: '0.2s', filter: 'blur(0px)'}}>
<div className="flex justify-between mb-4 md:mb-5">
<label className="block text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium">
                  Valuation Range
                </label>
<span className="text-[10px] text-white font-mono tracking-widest mt-[-2px]">
                  €10M - €50M+
                </span>
</div>
<div className="border-b border-white/10 pb-5 md:pb-5 mt-auto relative flex items-center min-h-[48px] md:min-h-[28px] top-[-3px]">
<input className="premium-slider w-full cursor-interact" max="100" min="10" style={{touchAction: 'none'}} type="range" value="30"/>
</div>
</div>
<div className="md:col-span-3 mt-4 md:mt-12 flex justify-center gs-reveal fade-up">
<button className="group inline-flex items-center gap-3 ring-1 ring-white/20 hover:bg-white/10 transition-all duration-300 text-xs font-medium uppercase tracking-widest text-white bg-white/5 rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 cursor-interact backdrop-blur-lg w-full sm:w-auto justify-center min-h-[48px] md:min-h-0" type="button">
<span>Submit Mandate</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#1A1A1A] bg-white rounded-full">
<iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</button>
</div>
</form>
</div>
</div>
</section>

<section className="text-[#1A1A1A] relative z-10 border-t border-[#E0DDD9] bg-[#F4F1ED] py-20 md:py-[200px]">
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="max-w-[1400px] mx-auto px-5 md:px-16 relative z-10">
<div className="mb-12 md:mb-32">
<div className="flex items-center gap-4 mb-5 md:mb-8 gs-reveal fade-up">
<span className="text-xs md:text-sm uppercase tracking-widest text-[#E55B3C] font-light label-scramble">
              ARCHITECTURE
            </span>
</div>
<h2 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight font-normal leading-[1.15] md:leading-[1.05] masked-heading relative z-10">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                  Avant-Garde
                </span>
</span>
</span>
<span className="block text-gray-400">
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                  projects.
                </span>
</span>
</span>
</h2>
</div>
<div className="flex flex-col lg:flex-row lg:gap-24 border-[#E0DDD9] border-b mb-12 md:mb-32 pb-12 md:pb-32 relative gap-x-12 gap-y-6 md:gap-y-12 items-center">
<div className="w-full lg:w-[55%] order-2 lg:order-1 relative group cursor-interact" data-cursor-text="Examine">
<div className="img-parallax-wrap aspect-[16/10] w-full rounded-none overflow-hidden clip-reveal clip-hidden bg-gray-200 border border-[#E0DDD9]" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Project" className="img-parallax transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&amp;q=80"/>
</div>
</div>
<div className="w-full lg:w-[45%] order-1 lg:order-2 gs-reveal fade-left pl-0 lg:pl-12">
<span className="text-xs uppercase tracking-widest text-gray-500 mb-5 md:mb-8 block border border-[#E0DDD9] rounded-none px-4 py-2.5 md:py-2 inline-block font-light">
              In Development
            </span>
<h3 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-6 text-[#1A1A1A] tracking-tight font-normal">
              The Vertex
            </h3>
<p className="text-base md:text-xl text-gray-500 mb-6 md:mb-10 font-light leading-relaxed tracking-wide">
              A brutalist masterpiece suspended above the Swiss Alps. Featuring
              monolithic concrete forms juxtaposed with frameless
              floor-to-ceiling glass.
            </p>
<a className="group inline-flex items-center gap-3 ring-1 ring-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 transition-all duration-300 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] bg-transparent rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 cursor-interact backdrop-blur-md" href="#">
<span>View Blueprint</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:translate-x-0.5 transition-transform text-white bg-[#1A1A1A] rounded-full">
<iconify-icon height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-24 items-center">
<div className="w-full lg:w-[45%] gs-reveal fade-right pr-0 lg:pr-12">
<span className="text-xs uppercase tracking-widest text-gray-500 mb-5 md:mb-8 block border border-[#E0DDD9] rounded-none px-4 py-2.5 md:py-2 inline-block font-light">
              Completed
            </span>
<h3 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-6 text-[#1A1A1A] tracking-tight font-normal">
              Aura Residence
            </h3>
<p className="text-base md:text-xl text-gray-500 mb-6 md:mb-10 font-light leading-relaxed tracking-wide">
              An exercise in spatial purity located in the Balearics. Minimalist
              geometries intersect to create vast, shaded volumes.
            </p>
<a className="group inline-flex items-center gap-3 ring-1 ring-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 transition-all duration-300 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] bg-transparent rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 cursor-interact backdrop-blur-md" href="#">
<span>View Gallery</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:translate-x-0.5 transition-transform text-white bg-[#1A1A1A] rounded-full">
<iconify-icon height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
</div>
<div className="w-full lg:w-[55%] relative group cursor-interact" data-cursor-text="Examine">
<div className="img-parallax-wrap aspect-[16/10] overflow-hidden clip-reveal clip-hidden w-full border-0 rounded-none" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Project" className="img-parallax transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 opacity-90 w-full h-auto object-cover grayscale" src="https://images.unsplash.com/photo-1627141234469-24711efb373c?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 overflow-hidden border-t border-[#2A2A2A] bg-[#151515] text-white py-20 md:py-[200px]">
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#2A2A2A] opacity-50"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="absolute inset-0 w-full h-full z-0 opacity-20 mix-blend-luminosity pointer-events-none">
<img alt="Architecture Overlay" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="max-w-[900px] mx-auto px-5 md:px-8 text-center relative flex flex-col items-center z-10">
<i className="w-16 h-16 md:w-32 md:h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 gs-reveal scale-reveal text-[#E55B3C]/10" data-lucide="quote" strokeWidth="1.5"></i>
<div className="relative z-10 gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<p className="text-xl sm:text-3xl md:text-5xl leading-[1.3] md:leading-[1.2] text-white mb-8 md:mb-14 tracking-tight font-light">
            "Valmont's comprehension of modern architectural pedigree is
            unmatched. Their discreet orchestration was executed with absolute
            precision."
          </p>
<div className="flex flex-col items-center gap-2 md:gap-3">
<span className="w-12 h-[1px] bg-gray-600 mb-3 md:mb-4"></span>
<h4 className="text-xs md:text-sm font-medium tracking-widest text-white uppercase">
              E. Rothschild
            </h4>
<span className="text-xs uppercase tracking-widest text-gray-400 font-light">
              Private Collector, Geneva
            </span>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F1ED] text-[#1A1A1A] relative z-10 flex items-center justify-center overflow-hidden border-t border-[#E0DDD9] py-20 md:py-[200px]">
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="relative z-10 text-center px-5 md:px-8 max-w-3xl mx-auto">
<div className="flex items-center justify-center gap-4 mb-5 md:mb-8 gs-reveal fade-up">
<span className="text-xs md:text-sm uppercase tracking-widest text-[#E55B3C] font-light label-scramble">
            CONNECT
          </span>
</div>
<h2 className="text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight font-normal leading-[1.15] md:leading-[1.05] mb-6 md:mb-10 masked-heading text-[#1A1A1A]">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                Initiate
              </span>
</span>
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                a
              </span>
</span>
</span>
<span className="block text-gray-400">
<span className="inline-block overflow-hidden align-bottom pb-1">
<span className="inline-block translate-y-[110%] opacity-0 js-word">
                dialogue.
              </span>
</span>
</span>
</h2>
<p className="text-base md:text-lg font-light mb-8 md:mb-14 gs-reveal blur-in max-w-md mx-auto tracking-wide text-gray-500" style={{filter: 'blur(0px)'}}>
          Engage with our senior advisory team to discuss your portfolio
          requirements with absolute confidentiality.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 gs-reveal fade-up">
<button className="group inline-flex items-center gap-3 ring-1 ring-[#E55B3C] hover:bg-[#c94b2f] hover:ring-[#c94b2f] transition-all duration-300 text-xs font-medium uppercase tracking-widest text-white bg-[#E55B3C] rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 md:pl-6 cursor-interact shadow-lg w-full sm:w-auto justify-center min-h-[48px] md:min-h-0">
<span>Request Consultation</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#1A1A1A] bg-white rounded-full shrink-0">
<iconify-icon height="1.2em" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</button>
<a className="group inline-flex items-center gap-3 ring-1 ring-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 transition-all duration-300 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] bg-transparent rounded-full py-2.5 md:py-2 pr-2.5 md:pr-2 pl-5 md:pl-6 cursor-interact backdrop-blur-md w-full sm:w-auto justify-center min-h-[48px] md:min-h-0" href="tel:+41221234567">
<span>+41 22 123 4567</span>
<span className="inline-flex h-9 w-9 md:h-8 md:w-8 items-center justify-center group-hover:scale-110 transition-transform text-white bg-[#1A1A1A] rounded-full shrink-0">
<iconify-icon height="1.2em" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<footer className="pb-8 md:pb-12 px-5 md:px-16 relative z-10 border-t border-[#E0DDD9] bg-[#F4F1ED] pt-12 md:pt-[140px]">
<div className="absolute inset-0 pointer-events-none z-0 hidden md:flex w-full">
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full border-r border-[#E0DDD9] opacity-50"></div>
<div className="w-1/4 h-full"></div>
</div>
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-24">
<div className="gs-reveal fade-up">
<div className="text-4xl md:text-5xl lg:text-7xl uppercase mb-5 md:mb-8 tracking-tighter font-normal text-[#1A1A1A] leading-none">
              VALMONT
            </div>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-5 md:mb-8 font-light tracking-wide">
              The vanguard of ultra-prime real estate. Curating modern
              architectural masterpieces for the global elite.
            </p>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.1s'}}>
<h5 className="text-xs uppercase tracking-widest text-[#1A1A1A] mb-5 md:mb-8 font-medium">
              Index
            </h5>
<ul className="space-y-4 md:space-y-5 text-sm text-gray-500 font-light tracking-wide">
<li>
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
                  The Collection
                </a>
</li>
<li>
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
                  Developments
                </a>
</li>
<li>
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
                  Advisory
                </a>
</li>
<li>
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
                  The Firm
                </a>
</li>
<li>
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.2s'}}>
<h5 className="text-xs uppercase tracking-widest text-[#1A1A1A] mb-5 md:mb-8 font-medium">
              Offices
            </h5>
<ul className="space-y-4 md:space-y-5 text-sm text-gray-500 font-light tracking-wide">
<li>Rue du Rhône 50</li>
<li>1204 Geneva, CH</li>
<li className="pt-3 md:pt-4">
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="tel:+41221234567">
                  +41 22 123 4567
                </a>
</li>
<li>
<a className="hover:text-[#E55B3C] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="mailto:private@valmont.co">
                  private@valmont.co
                </a>
</li>
</ul>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.3s'}}>
<h5 className="text-xs uppercase tracking-widest text-[#1A1A1A] mb-5 md:mb-8 font-medium">
              Private Dossier
            </h5>
<p className="text-gray-500 text-sm mb-5 md:mb-6 font-light tracking-wide">
              Access unlisted architectural assets.
            </p>
<form className="relative mb-8 md:mb-10">
<input className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm text-[#1A1A1A] placeholder:text-gray-500 focus:outline-none focus:border-[#E55B3C] transition-colors cursor-interact font-light rounded-none min-h-[48px] md:min-h-0" placeholder="Email Address" style={{fontSize: '16px'}} type="email"/>
<button className="absolute right-0 top-0 text-gray-500 transition-colors cursor-interact hover:text-[#E55B3C] p-2 md:p-1 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center" type="button">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
<div className="flex gap-5">
<a className="text-gray-500 hover:text-[#E55B3C] transition-colors cursor-interact p-2 md:p-1 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-gray-500 hover:text-[#E55B3C] transition-colors cursor-interact p-2 md:p-1 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-[#E0DDD9] text-xs uppercase tracking-widest text-gray-500 gs-reveal fade-up font-light gap-4">
<p>© 2026 VALMONT Real Estate</p>
<div className="flex gap-8 md:gap-10">
<a className="hover:text-[#1A1A1A] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
              Legal Notice
            </a>
<a className="hover:text-[#1A1A1A] transition-colors cursor-interact min-h-[44px] md:min-h-0 flex items-center" href="#">
              Privacy Policy
            </a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 pointer-events-none z-[10000] hidden lg:block">
</div>


    </>
  );
}
