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



      // --- SETUP ---
      gsap.registerPlugin(ScrollTrigger);

      // --- LENIS SCROLL ---
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          smooth: true,
      });
      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Native smooth scroll for anchor links with Lenis
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              lenis.scrollTo(this.getAttribute('href'));
          });
      });

      // --- TEXT SPLITTER UTILITY ---
      function splitTextToWords(element) {
          const text = element.innerText;
          const words = text.split(' ');
          element.innerHTML = '';
          words.forEach(word => {
              const wordWrap = document.createElement('span');
              wordWrap.classList.add('word-wrap');
              wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
              element.appendChild(wordWrap);
          });
      }

      // Apply split to all elements with class .split-animate
      document.querySelectorAll('.split-animate').forEach(el => {
          splitTextToWords(el);
      });

      // --- LOADER ---
      const loadTl = gsap.timeline({
          onComplete: () => {
              document.body.style.opacity = 1;
              initSite();
          }
      });

      loadTl.to('.loader-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' })
            .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
            .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' });

      function initSite() {
          // Hero Animations
          gsap.to('.hero-text span', {
              y: 0,
              stagger: 0.1,
              duration: 1.5,
              ease: 'power4.out'
          });
          gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.5 });

          // Hero Parallax
          gsap.to('.hero-img', {
              yPercent: 30,
              ease: 'none',
              scrollTrigger: {
                  trigger: '.hero-img',
                  start: 'top top',
                  end: 'bottom top',
                  scrub: true
              }
          });

          // --- TEXT REVEAL ON SCROLL ---
          const splitElements = document.querySelectorAll('.split-animate');
          splitElements.forEach(el => {
              const words = el.querySelectorAll('.word-inner');
              gsap.to(words, {
                  y: "0%",
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.02,
                  scrollTrigger: {
                      trigger: el,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                  }
              });
          });

          // --- CARD STACK ANIMATION ---
          const cards = gsap.utils.toArray('.card-item');

          cards.forEach((card, i) => {
              const nextCard = cards[i+1];
              if (nextCard) {
                  gsap.to(card.querySelector('.card-inner'), {
                      scale: 0.9,
                      opacity: 0.4,
                      ease: "none",
                      scrollTrigger: {
                          trigger: nextCard,
                          start: "top bottom",
                          end: "top 10vh",
                          scrub: true
                      }
                  });
              }
          });

          // Footer Parallax Effect
          gsap.from('.footer-sticky > div', {
              y: 100,
              opacity: 0.5,
              scale: 0.9,
              scrollTrigger: {
                  trigger: '.footer-sticky',
                  start: 'top bottom',
                  end: 'bottom bottom',
                  scrub: true
              }
          });
      }
    
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
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">AURUM</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-start z-50">
<div className="display font-bold text-xl tracking-tighter mt-1 mix-blend-difference text-white">
        PROJECT REDS
      </div>
<div className="hidden md:flex flex-col items-center gap-5">
<div className="flex gap-10 text-xs uppercase tracking-widest mt-2 text-black">
<a className="hover:text-gray-600 transition-colors" href="#reds-section">
            Project Reds
          </a>
<a className="hover:text-gray-600 transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-gray-600 transition-colors" href="#vip-access">
            Demo Access
          </a>
<a className="hover:text-gray-600 transition-colors" href="https://partiful.com/e/1tdv13r8Ven8DkmlqSvF" rel="noopener noreferrer" target="_blank">
            NYC Tech Week
          </a>
</div>
<div className="opacity-0 hero-fade">
<a className="inline-block px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" rel="noopener noreferrer" target="_blank">
            Book a Demo
          </a>
</div>
</div>
<div className="md:hidden mt-1 mix-blend-difference text-white">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>

<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden tracking-tight">
<span className="block translate-y-full">PROJECT</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden tracking-tight">
<span className="block translate-y-full">REDS</span>
</h1>

<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">
            A data diligence company streamlining large-scale commercial
            development projects
          </p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]" id="reds-section">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate tracking-tight">
            Project
            <br/>
<span className="text-[var(--c-accent)]">
              Real Estate Development Streamliner.
            </span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">
            We are a proptech data diligence company that synthesizes and
            streamlines large-scale commercial development projects through
            intelligent data aggregation, analysis, and insights.
          </p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Est. 2026</div>
<div>Tampa, FL</div>
</div>
</div>
</section>

<section className="stack-section" id="how-it-works">
<div className="text-center mb-20 px-6 flex flex-col items-center">
<h2 className="display text-5xl md:text-7xl tracking-tight">
            How It Works
          </h2>
<p className="text-gray-400 font-light max-w-2xl text-lg mt-6 split-animate">
            Three simple steps to transform your development process into an
            accelerated comprehensive presentation.
          </p>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30 tracking-tight">
                    01
                  </div>
<h3 className="text-3xl font-bold tracking-tight">
                    INPUT PARAMETERS
                  </h3>
</div>
<div className="text-gray-400 font-light">
                  Upload or input an address, site data, and/or development
                  requirement through our intuitive interface.
                </div>
<div></div>
</div>
<div className="card-img-wrap">

<img alt="Project 1" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30 tracking-tight">
                    02
                  </div>
<h3 className="text-3xl font-bold tracking-tight">
                    AI SIMULATES
                  </h3>
</div>
<div className="text-gray-400 font-light">
                  Our advanced AI processes thousands of variables to generate
                  optimal development scenarios and impact analysis.
                </div>
<div></div>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30 tracking-tight">
                    03
                  </div>
<h3 className="text-3xl font-bold tracking-tight">
                    EXPORT REPORTS
                  </h3>
</div>
<div className="text-gray-400 font-light">
                  Download comprehensive reports, 3D visualizations, and
                  actionable insights for stakeholder presentations.
                </div>
<div></div>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl mb-8 tracking-tight">
          Expanding AI Capabilities
        </h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed">
          Project Reds represents our vision to push the boundaries of
          generative AI in property acquisition for commercial developers.
        </div>
<div className="h-16 w-px bg-black/20"></div>

<div className="absolute bottom-0 w-full h-1 pointer-events-none" id="vip-access"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
          Invest in the future
        </div>
<a className="display text-[8vw] leading-none hover:text-gray-400 transition-colors tracking-tight" href="mailto:vip@aurum.ae">
          DEMO ACCESS
        </a>
<div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400">
<a className="hover:text-white" href="https://calendly.com/yasminegardiner/1-1-with-clearsetai" rel="noopener noreferrer" target="_blank">
            BOOK A DEMO
          </a>
<a className="hover:text-white" href="https://drive.google.com/file/d/1_BOtDx5Y9Zeh8gjgO4fZC8l_MKaXF4jV/view?usp=sharing" rel="noopener noreferrer" target="_blank">
            EXECUTIVE SUMMARY
          </a>
</div>
<div className="mt-20 flex flex-col items-center gap-1 text-xs text-gray-700">
<span>© 2026 PROJECT REDS INCORPORATED</span>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
