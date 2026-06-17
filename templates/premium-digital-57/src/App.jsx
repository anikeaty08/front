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



      // Initialize Lenis for smooth scrolling
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
      })

      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Integrate GSAP with Lenis
      gsap.registerPlugin(ScrollTrigger);

      // Navigation Scroll Effect
      const navbar = document.getElementById('navbar');
      const navLinks = document.getElementById('nav-links');
      const navCta = document.getElementById('nav-cta');

      // Initial Nav Animation
      gsap.to([navLinks, navCta], {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          stagger: 0.1
      });

      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('bg-[#081003]/80', 'backdrop-blur-xl', 'border-b', 'border-white/10');
              navbar.classList.remove('py-6');
              navbar.classList.add('py-4');
          } else {
              navbar.classList.remove('bg-[#081003]/80', 'backdrop-blur-xl', 'border-b', 'border-white/10');
              navbar.classList.remove('py-4');
              navbar.classList.add('py-6');
          }
      });

      // Mobile Menu Logic
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      let menuOpen = false;

      mobileMenuBtn.addEventListener('click', () => {
          menuOpen = !menuOpen;
          if(menuOpen) {
              mobileMenu.classList.remove('translate-x-full');
              lenis.stop();
              mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" stroke-width="1.5" class="text-3xl"></iconify-icon>';
          } else {
              mobileMenu.classList.add('translate-x-full');
              lenis.start();
              mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" stroke-width="1.5" class="text-2xl"></iconify-icon>';
          }
      });

      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              menuOpen = false;
              mobileMenu.classList.add('translate-x-full');
              lenis.start();
              mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" stroke-width="1.5" class="text-2xl"></iconify-icon>';
          });
      });

      // Hero Animations
      gsap.to('#hero-bg-img', {
          scale: 1.05,
          duration: 2,
          ease: "power2.out"
      });

      gsap.from('.hero-elem', {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
      });

      // Global Reveal Animations
      gsap.utils.toArray('.reveal-up').forEach(elem => {
          gsap.fromTo(elem,
              { y: 40, opacity: 0 },
              {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                      trigger: elem,
                      start: "top 85%",
                      toggleActions: "play none none none"
                  }
              }
          );
      });

      // Process Images Parallax
      gsap.utils.toArray('.process-img').forEach(img => {
          gsap.fromTo(img,
              { y: -20, scale: 1.05 },
              {
                  y: 20,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                      trigger: img.parentElement,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: true
                  }
              }
          );
      });
    


      // Responsive line splits on scroll
      const splitTargets = document.querySelectorAll('h1:not(.hero-elem), h2, h3, p:not(.hero-elem)');

      splitTargets.forEach(el => {
          if (el.closest('nav') || el.closest('.split-parent')) return;
          el.classList.add('split-parent');

          let split;
          let anim;

          function runSplit() {
              if (split) split.revert();
              if (anim) {
                  if (anim.scrollTrigger) anim.scrollTrigger.kill();
                  anim.kill();
              }

              split = new SplitType(el, { types: 'lines' });

              split.lines.forEach(line => {
                  const content = line.innerHTML;
                  line.innerHTML = `<span class="split-line-inner" style="display: block;">${content}</span>`;
                  line.style.overflow = 'hidden';
              });

              anim = gsap.fromTo(el.querySelectorAll('.split-line-inner'),
                  { y: "100%", opacity: 0 },
                  {
                      y: "0%",
                      opacity: 1,
                      duration: 1,
                      ease: "power3.out",
                      stagger: 0.1,
                      scrollTrigger: {
                          trigger: el,
                          start: "top 90%",
                          toggleActions: "play none none none"
                      }
                  }
              );
          }

          document.fonts.ready.then(() => {
              runSplit();
          });

          let resizeTimer;
          window.addEventListener('resize', () => {
              clearTimeout(resizeTimer);
              resizeTimer = setTimeout(runSplit, 300);
          });
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
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 flex justify-between items-center text-white bg-[#081003]/80 backdrop-blur-xl border-b border-white/10 py-4" id="navbar">
<a className="text-xl tracking-tight relative z-20 mix-blend-difference group font-instrument-serif font-normal" href="#">
        412 Digital
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C8FF17] transition-all duration-300 group-hover:w-full"></div>
</a>

<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 backdrop-blur-md border rounded-full px-8 py-3 opacity-0 translate-y-[-20px] bg-white/5 border-white/10" id="nav-links">
<a className="text-sm text-[#BDBDBD] transition-colors duration-300 hover:text-white font-sans" href="#">
          Home
        </a>
<a className="text-sm text-[#BDBDBD] transition-colors duration-300 hover:text-white font-sans" href="#services">
          Services
        </a>
<a className="text-sm text-[#BDBDBD] transition-colors duration-300 hover:text-white font-sans" href="#portfolio">
          Portfolio
        </a>
<a className="text-sm text-[#BDBDBD] transition-colors duration-300 hover:text-white font-sans" href="#about">
          About
        </a>
<a className="text-sm text-[#BDBDBD] transition-colors duration-300 hover:text-white font-sans" href="#contact">
          Contact
        </a>
</div>

<div className="hidden md:block opacity-0 translate-y-[-20px]" id="nav-cta">
<a className="bg-[#C8FF17] text-[#11190A] text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] inline-flex items-center gap-2 hover:bg-white font-sans" href="#contact">
          Let's Chat
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<button className="md:hidden relative z-20 mix-blend-difference text-white" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-[#081003] z-40 translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center px-8" id="mobile-menu">
<div className="flex flex-col gap-8 text-4xl font-medium tracking-tight text-white">
<a className="mobile-link hover:text-[#C8FF17] transition-colors font-instrument-serif font-normal" href="#">
          Home
        </a>
<a className="mobile-link hover:text-[#C8FF17] transition-colors font-instrument-serif font-normal" href="#services">
          Services
        </a>
<a className="mobile-link hover:text-[#C8FF17] transition-colors font-instrument-serif font-normal" href="#portfolio">
          Portfolio
        </a>
<a className="mobile-link hover:text-[#C8FF17] transition-colors font-instrument-serif font-normal" href="#about">
          About
        </a>
<a className="mobile-link hover:text-[#C8FF17] transition-colors font-instrument-serif font-normal" href="#contact">
          Contact
        </a>
<a className="mobile-link text-[#C8FF17] mt-8 font-instrument-serif font-normal" href="#contact">
          Let's Chat
        </a>
</div>
</div>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#081003]">

<div className="absolute inset-0 w-full h-full">
<img alt="Team collaborating" className="w-full h-full object-cover opacity-50 origin-center" id="hero-bg-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#081003] via-[#081003]/50 to-transparent"></div>
<div className="absolute inset-0 bg-[#081003]/20 mix-blend-overlay"></div>
</div>

<div className="absolute top-[25%] left-[10%] hidden lg:flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 text-xs font-medium animate-float z-20 bg-white/10 border-white/10 text-white font-sans">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8FF17]"></div>
        Web Design
      </div>
<div className="absolute bottom-[30%] left-[15%] hidden lg:flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 text-xs font-medium animate-float-delayed z-20 bg-white/10 border-white/10 text-white font-sans">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
        Development
      </div>
<div className="absolute top-[35%] right-[12%] hidden lg:flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 text-xs font-medium animate-float-slow z-20 bg-white/10 border-white/10 text-white font-sans">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
        Branding
      </div>
<div className="absolute bottom-[25%] right-[18%] hidden lg:flex items-center gap-2 backdrop-blur-md border rounded-full px-4 py-2 text-xs font-medium animate-float z-20 bg-white/10 border-white/10 text-white font-sans">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
        CMS
      </div>

<div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1440px] px-6 mt-12">

<div className="flex flex-col items-center mb-8 hero-elem">
<span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 text-center text-white/90 font-sans">
            #1 Most Recommended Digital Agency
          </span>
<div className="flex items-center justify-center gap-6 md:gap-8 text-white">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl opacity-70" icon="lucide:award" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col text-left">
<span className="text-xs font-medium leading-tight font-sans">AWWWARDS</span>
<span className="text-xs opacity-70 leading-tight tracking-wider uppercase scale-90 origin-left font-sans">Site of the Day</span>
</div>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl opacity-70" icon="lucide:star" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col text-left">
<span className="text-xs font-medium leading-tight font-sans">CLUTCH</span>
<span className="text-xs opacity-70 leading-tight tracking-wider uppercase scale-90 origin-left font-sans">Top Agency '24</span>
</div>
</div>
</div>
</div>

<h1 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight leading-[1.1] mb-6 hero-elem flex flex-col items-center w-full text-white">
<span className="block font-instrument-serif font-normal">Beautiful Websites</span>
<span className="flex items-center justify-center flex-wrap gap-2 md:gap-4 lg:gap-6 mt-1 md:mt-2 w-full font-instrument-serif font-normal">
                That Drive
                <div className="w-20 h-14 md:w-32 md:h-20 lg:w-48 lg:h-28 rounded-2xl md:rounded-[2rem] overflow-hidden inline-block border shadow-2xl shrink-0 border-white/20">
<img alt="Project preview" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
                Growth
            </span>
</h1>

<p className="text-lg md:text-2xl text-[#BDBDBD] leading-relaxed hero-elem mb-14 max-w-2xl mx-auto font-instrument-serif font-normal">
          on every searchable platform and device
        </p>

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-20 hero-elem opacity-70">
<iconify-icon className="text-2xl md:text-3xl hover:opacity-100 transition-opacity cursor-pointer text-white hover:text-white" icon="simple-icons:google"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl hover:opacity-100 transition-opacity cursor-pointer text-white hover:text-white" icon="simple-icons:shopify"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl hover:opacity-100 transition-opacity cursor-pointer text-white hover:text-white" icon="simple-icons:webflow"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl hover:opacity-100 transition-opacity cursor-pointer text-white hover:text-white" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl hover:opacity-100 transition-opacity cursor-pointer text-white hover:text-white" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-2xl md:text-3xl hidden sm:block hover:opacity-100 transition-opacity cursor-pointer text-white hover:text-white" icon="simple-icons:figma"></iconify-icon>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-12 z-20 max-w-sm text-[#BDBDBD] text-sm leading-relaxed hero-elem text-left hidden lg:block font-sans">
        Strategic design partners creating, developing &amp; optimising <strong className="font-medium text-white font-sans">high-performance</strong> experiences for startups and enterprise.
      </div>
<div className="absolute bottom-10 right-6 md:right-12 z-20 text-[#BDBDBD] text-sm leading-relaxed hero-elem text-right hidden lg:block font-sans">
<span className="block font-medium text-white font-sans">Based in Bali,</span>
        Working Worldwide
      </div>
</section>

<section className="bg-[#081003] py-32 md:py-48 relative border-b z-10 overflow-hidden text-white border-white/5">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">

<div className="mb-20 md:mb-32 reveal-up">
<span className="inline-block font-mono text-xs text-[#C8FF17] tracking-[0.18em] uppercase mb-6 font-sans">
            Our Impact
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight split-parent font-instrument-serif font-normal">
            Numbers that tell<br/>our story.
          </h2>
</div>

<div className="flex flex-col border-t border-white/10">

<div className="group flex flex-col md:flex-row items-start md:items-center py-16 md:py-24 border-b relative reveal-up border-white/10">
<div className="w-full md:w-1/4 mb-6 md:mb-0">
<span className="font-mono text-xs text-[#BDBDBD] tracking-[0.18em] uppercase font-sans">Projects Delivered</span>
</div>
<div className="w-full md:w-1/2 flex justify-start md:justify-center">
<span className="text-8xl md:text-9xl lg:text-[10vw] leading-none tracking-tighter transition-colors duration-500 group-hover:text-[#C8FF17] text-white font-instrument-serif font-normal">
                150+
              </span>
</div>
<div className="hidden md:flex w-full md:w-1/4 justify-end items-center relative pr-4">
<div className="relative w-48 h-32">
<img alt="Project presentation" className="absolute inset-0 w-full h-full object-cover border-[3px] shadow-md transform rotate-[-8deg] opacity-40 transition-transform duration-500 group-hover:rotate-[-16deg] group-hover:-translate-x-6 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Project design" className="absolute inset-0 w-full h-full object-cover border-[3px] shadow-md transform rotate-[5deg] opacity-70 transition-transform duration-500 group-hover:rotate-[14deg] group-hover:translate-x-6 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 z-10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
<img alt="Project details" className="w-full h-full object-cover border-[3px] shadow-xl border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute w-8 h-8 flex items-center justify-center shadow-sm text-[#081003] bg-white">
<iconify-icon icon="lucide:plus" strokeWidth="2"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col md:flex-row items-start md:items-center py-16 md:py-24 border-b relative reveal-up border-white/10">
<div className="w-full md:w-1/4 mb-6 md:mb-0">
<span className="font-mono text-xs text-[#BDBDBD] tracking-[0.18em] uppercase font-sans">Years Experience</span>
</div>
<div className="w-full md:w-1/2 flex justify-start md:justify-center">
<span className="text-8xl md:text-9xl lg:text-[10vw] leading-none tracking-tighter transition-colors duration-500 group-hover:text-[#C8FF17] text-white font-instrument-serif font-normal">
                5+
              </span>
</div>
<div className="hidden md:flex w-full md:w-1/4 justify-end items-center relative pr-4">
<div className="relative w-48 h-32">
<img alt="Team meeting" className="absolute inset-0 w-full h-full object-cover border-[3px] shadow-md transform rotate-[7deg] opacity-40 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:translate-x-5 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Office collaboration" className="absolute inset-0 w-full h-full object-cover border-[3px] shadow-md transform rotate-[-4deg] opacity-70 transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:-translate-x-5 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 z-10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
<img alt="Workspace" className="w-full h-full object-cover border-[3px] shadow-xl border-white" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute w-8 h-8 flex items-center justify-center shadow-sm text-[#081003] bg-white">
<iconify-icon icon="lucide:plus" strokeWidth="2"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col md:flex-row items-start md:items-center py-16 md:py-24 border-b relative reveal-up border-white/10">
<div className="w-full md:w-1/4 mb-6 md:mb-0">
<span className="font-mono text-xs text-[#BDBDBD] tracking-[0.18em] uppercase font-sans">Coffee Sipped</span>
</div>
<div className="w-full md:w-1/2 flex justify-start md:justify-center">
<span className="text-8xl md:text-9xl lg:text-[10vw] leading-none tracking-tighter transition-colors duration-500 group-hover:text-[#C8FF17] text-white font-instrument-serif font-normal">
                9k
              </span>
</div>
<div className="hidden md:flex w-full md:w-1/4 justify-end items-center relative pr-4">
<div className="relative w-48 h-32">
<img alt="Coffee break design" className="absolute inset-0 w-full h-full object-cover border-[3px] shadow-md transform rotate-[-6deg] opacity-40 transition-transform duration-500 group-hover:rotate-[-14deg] group-hover:-translate-x-5 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Coffee desk" className="absolute inset-0 w-full h-full object-cover border-[3px] shadow-md transform rotate-[6deg] opacity-70 transition-transform duration-500 group-hover:rotate-[14deg] group-hover:translate-x-5 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 z-10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
<img alt="Coffee discussion" className="w-full h-full object-cover border-[3px] shadow-xl border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute w-8 h-8 flex items-center justify-center shadow-sm text-[#081003] bg-white">
<iconify-icon icon="lucide:plus" strokeWidth="2"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#E9E7DD] py-32 md:py-48 relative overflow-hidden" id="about">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

<div className="max-w-[1200px] mx-auto text-center reveal-up split-parent">
<h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.15] text-[#9CA3AF] font-instrument-serif font-normal">
            412 Digital empowers <span className="inline-block align-baseline mr-1 relative -top-1 font-instrument-serif font-normal">👨‍💻</span><span className="text-[#121212] font-instrument-serif font-normal">founders,</span>
<br className="hidden lg:block"/>
<span className="inline-block align-baseline mr-1 relative -top-1 font-instrument-serif font-normal">🏢</span><span className="text-[#121212] font-instrument-serif font-normal">agencies, and</span> <span className="inline-block align-baseline mr-1 relative -top-1 font-instrument-serif font-normal">🚀</span><span className="text-[#121212] font-instrument-serif font-normal">enterprises</span> to craft
            <br className="hidden lg:block"/>
            modern, robust, and visually stunning
            <br className="hidden lg:block"/>
            websites without the technical headaches.
          </h2>
</div>

<div className="mt-20 md:mt-32 max-w-[900px] mx-auto bg-[#F9F8F4] rounded-[40px] pt-16 pb-12 px-8 flex flex-col items-center border shadow-sm reveal-up relative border-black/5">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#121212] mb-4 text-center split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Complete Digital Solutions</span></div></h3>

<p className="text-lg md:text-xl text-indigo-500 mb-12 text-center max-w-2xl split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Strategy, Branding, Web Design, Development, SEO, and ongoing</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>support.</span></div><p className="split-parent"></p><div className="p-2.5 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border flex items-center gap-3 overflow-x-auto max-w-full hide-scrollbar w-max mx-auto bg-white border-indigo-100">

<button className="flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors shrink-0 border-indigo-100 hover:bg-indigo-50">
<span className="text-sm font-medium text-indigo-600 font-sans">Option</span>
<iconify-icon className="text-indigo-400" icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</button>

<div className="flex items-center -space-x-3 shrink-0 px-2">
<div className="w-10 h-10 rounded-full flex items-center justify-center border-[3px] z-10 shadow-sm bg-blue-50 border-white">
<iconify-icon className="text-blue-500 text-lg" icon="lucide:figma" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border-[3px] z-20 shadow-sm bg-cyan-50 border-white">
<iconify-icon className="text-cyan-500 text-lg" icon="lucide:code-2" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<img alt="User" className="w-10 h-10 rounded-full border-[3px] shadow-sm shrink-0 object-cover border-white" src="https://i.pravatar.cc/150?img=68"/>

<div className="px-5 py-2.5 rounded-full bg-[#fce7f3] text-[#db2777] text-sm font-semibold shrink-0 font-sans">
              Primary Light
            </div>

<div className="flex items-center shrink-0 px-2">
<div className="w-6 h-6 rounded-full bg-[#EB001B] mix-blend-multiply opacity-90 relative z-10"></div>
<div className="w-6 h-6 rounded-full bg-[#F79E1B] mix-blend-multiply opacity-90 -ml-2.5 relative z-20"></div>
</div>

<div className="w-12 h-6 rounded-full flex items-center p-[3px] shrink-0 cursor-pointer transition-colors shadow-inner mx-1 bg-indigo-200 hover:bg-indigo-300">
<div className="w-4 h-4 rounded-full shadow-sm bg-white"></div>
</div>

<div className="w-6 h-6 rounded bg-[#db2777] flex items-center justify-center shrink-0 shadow-sm mx-1">
<iconify-icon className="text-sm text-white" icon="lucide:check" strokeWidth="2"></iconify-icon>
</div>

<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl border shadow-sm bg-green-50 border-green-100 font-instrument-serif font-normal">
              🐸
            </div>

<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-sm bg-green-50 border-green-100">
<iconify-icon className="text-green-500 text-lg" icon="lucide:image" strokeWidth="1.5"></iconify-icon>
</div>

<div className="px-5 py-2.5 rounded-full border text-sm font-medium shrink-0 border-indigo-100 text-indigo-400 bg-indigo-50/50 font-sans">
              Select...
            </div>
</div>
</div>
</div>
</section>

<section className="bg-[#E9E7DD] py-32 border-t border-[rgba(0,0,0,0.04)]" id="services">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 reveal-up">
<div>
<span className="inline-block font-mono text-xs text-[#646464] tracking-[0.18em] uppercase mb-4 font-sans">
              What We Do
            </span>
<h2 className="text-4xl md:text-5xl font-medium text-[#121212] tracking-tight split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>How We Help</span></div></h2></div>
<p className="max-w-md text-base md:text-lg text-[#646464] leading-relaxed split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Everything you need to build a professional brand and a</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>website that actually brings in new customers.</span></div><p className="split-parent"></p></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#EAF0E2] p-8 md:p-10 rounded-[20px] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full reveal-up">
<div className="w-14 h-14 rounded-xl bg-[#121212] flex items-center justify-center mb-14">
<iconify-icon className="text-2xl text-[#C8FF17]" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Strategy &amp; Operations</span></div></h3>
<p className="text-base text-[#646464] leading-relaxed split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Build a strong foundation with strategic</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>planning, operational optimization, and</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>process improvements.</span></div><p className="split-parent"></p></div>
<div className="bg-[#EAF0E2] p-8 md:p-10 rounded-[20px] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full reveal-up" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-xl bg-[#121212] flex items-center justify-center mb-14">
<iconify-icon className="text-2xl text-[#C8FF17]" icon="lucide:smartphone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Digital Transformation</span></div></h3>
<p className="text-base text-[#646464] leading-relaxed split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Leverage technology to modernize</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>workflows, improve customer experience,</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>and create scalable digital ecosystems</span></div><p className="split-parent"></p></div>
<div className="bg-[#EAF0E2] p-8 md:p-10 rounded-[20px] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full reveal-up" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-xl bg-[#121212] flex items-center justify-center mb-14">
<iconify-icon className="text-2xl text-[#C8FF17]" icon="lucide:box" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Product &amp; Innovation</span></div></h3>
<p className="text-base text-[#646464] leading-relaxed split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>From ideation to execution, we guide your</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>team in building products that customers love</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>and businesses can scale.</span></div><p className="split-parent"></p></div>
</div>
</div>
</section>

<section className="bg-[#081003] py-32 md:py-48 relative text-white" id="process">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

<div className="lg:col-span-5 lg:sticky top-32 reveal-up">
<span className="inline-block font-mono text-xs text-[#C8FF17] tracking-[0.18em] uppercase mb-8 font-sans">
              How It Works
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] mb-8 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>A simple,</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>stress-free</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>process from</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>start to finish.</span></div></h2>
<p className="text-base md:text-lg text-[#BDBDBD] leading-relaxed max-w-md split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We keep things simple and communicate clearly every</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>step of the way. You'll always know exactly what's</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>happening with your project.</span></div><p className="split-parent"></p></div>

<div className="lg:col-span-7 flex flex-col gap-32">

<div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group process-step">
<img alt="Discovery Session" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 process-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-black/20"></div>

<div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#C8FF17] text-[#11190A] flex items-center justify-center text-xl shadow-lg z-10 font-instrument-serif font-normal">
                01
              </div>
<div className="absolute bottom-6 left-6 right-6 bg-[#11190A]/80 backdrop-blur-md rounded-[16px] p-6 border z-10 border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-2 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>1. Getting to Know You</span></div></h3>
<p className="text-sm md:text-base text-[#BDBDBD] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We start by learning about your business, your goals, and who your customers are.</span></div><p className="split-parent"></p></div>

<div className="absolute top-6 right-6 font-mono text-xs backdrop-blur-md px-3 py-1 rounded-full z-10 border text-white bg-black/50 border-white/10 font-sans">
                1 / 5
              </div>
</div>
<div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group process-step">
<img alt="Strategy Phase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 process-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-black/20"></div>
<div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#C8FF17] text-[#11190A] flex items-center justify-center text-xl shadow-lg z-10 font-instrument-serif font-normal">
                03
              </div>
<div className="absolute bottom-6 left-6 right-6 bg-[#11190A]/80 backdrop-blur-md rounded-[16px] p-6 border z-10 border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-2 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>2. Creating the Look</span></div></h3>
<p className="text-sm md:text-base text-[#BDBDBD] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We design a beautiful, custom layout that perfectly matches your brand.</span></div><p className="split-parent"></p></div>
<div className="absolute top-6 right-6 font-mono text-xs backdrop-blur-md px-3 py-1 rounded-full z-10 border text-white bg-black/50 border-white/10 font-sans">
                3 / 5
              </div>
</div>

<div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group process-step">
<img alt="Design Phase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 process-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-black/20"></div>
<div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#C8FF17] text-[#11190A] flex items-center justify-center text-xl shadow-lg z-10 font-instrument-serif font-normal">
                04
              </div>
<div className="absolute bottom-6 left-6 right-6 bg-[#11190A]/80 backdrop-blur-md rounded-[16px] p-6 border z-10 border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-2 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>3. Building the Site</span></div></h3>
<p className="text-sm md:text-base text-[#BDBDBD] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We handle all the technical coding to make your site fast and mobile-friendly.</span></div><p className="split-parent"></p></div>
<div className="absolute top-6 right-6 font-mono text-xs backdrop-blur-md px-3 py-1 rounded-full z-10 border text-white bg-black/50 border-white/10 font-sans">
                4 / 5
              </div>
</div>

<div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group process-step">
<img alt="Development" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 process-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-black/20"></div>
<div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#C8FF17] text-[#11190A] flex items-center justify-center text-xl shadow-lg z-10 font-instrument-serif font-normal">
                05
              </div>
<div className="absolute bottom-6 left-6 right-6 bg-[#11190A]/80 backdrop-blur-md rounded-[16px] p-6 border z-10 border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-2 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>4. Going Live</span></div></h3>
<p className="text-sm md:text-base text-[#BDBDBD] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We put your site on the internet and make sure everything runs smoothly.</span></div><p className="split-parent"></p></div>
<div className="absolute top-6 right-6 font-mono text-xs backdrop-blur-md px-3 py-1 rounded-full z-10 border text-white bg-black/50 border-white/10 font-sans">
                5 / 5
              </div>
</div>

<div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group process-step">
<img alt="Launch" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 process-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 bg-black/20"></div>
<div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#C8FF17] text-[#11190A] flex items-center justify-center text-xl shadow-lg z-10 font-instrument-serif font-normal">
                04
              </div>
<div className="absolute bottom-6 left-6 right-6 bg-[#11190A]/80 backdrop-blur-md rounded-[16px] p-6 border z-10 border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-2 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>5. Support &amp; Growth</span></div></h3>
<p className="text-sm md:text-base text-[#BDBDBD] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Even after your site is live, we're here to help you grow and make updates.</span></div><p className="split-parent"></p></div>
<div className="absolute top-6 right-6 font-mono text-xs backdrop-blur-md px-3 py-1 rounded-full z-10 border text-white bg-black/50 border-white/10 font-sans">
                4 / 4
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#E9E7DD] py-32 md:py-48 relative flex items-center justify-center text-center overflow-hidden">

<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] z-0 pointer-events-none text-black/5" icon="solar:quote-right-linear"></iconify-icon>
<div className="max-w-4xl mx-auto px-6 relative z-10 reveal-up">
<h2 className="text-3xl md:text-5xl font-medium text-[#121212] tracking-tight leading-[1.2] mb-16 split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>"Working with 412 Digital was a</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>breeze. They explained everything in</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>plain English, handled all the</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>complicated tech stuff, and delivered a</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>website that our customers absolutely</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>love. We've already seen an increase</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>in sales!"</span></div></h2><div className="flex flex-col items-center gap-4">
<img alt="Sarah Jenkins" className="w-16 h-16 rounded-full object-cover border-2 shadow-sm border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="text-base font-medium text-[#121212] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Sarah Jenkins</span></div>
<p className="split-parent"></p><p className="text-xs font-mono tracking-[0.18em] uppercase text-[#646464] mt-1 split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Founder, Boutique Hotel</span></div><p className="split-parent"></p></div>
</div>
<div className="flex items-center justify-center gap-4 mt-12">
<button className="w-12 h-12 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-transparent transition-all duration-300 text-[#121212] hover:bg-white">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-transparent transition-all duration-300 text-[#121212] hover:bg-white">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-[#081003] py-32 md:py-48 text-white" id="pricing">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
<div className="text-center mb-16 reveal-up">
<span className="inline-block font-mono text-xs text-[#C8FF17] tracking-[0.18em] uppercase mb-6 font-sans">
            Pricing
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Simple, honest pricing. No surprises.</span></div></h2>
<p className="text-base md:text-lg text-[#BDBDBD] max-w-xl mx-auto split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We tell you exactly what things cost right from the start. No hidden fees, no</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>confusing tech bills.</span></div><p className="split-parent"></p></div>

<div className="w-full max-w-md bg-[#F5F4ED] text-[#121212] rounded-[24px] p-10 md:p-12 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 reveal-up">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2 split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Complete Website</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Package</span></div></h3>
<p className="text-sm md:text-base text-[#646464] split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Everything you need to get your</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>business online.</span></div><p className="split-parent"></p></div>
<div className="text-right">
<span className="text-sm font-medium text-[#646464] font-sans">
                Starting at
              </span>
<div className="text-4xl tracking-tight mt-1 font-instrument-serif font-normal">$600</div>
</div>
</div>
<div className="w-full h-[1px] bg-[rgba(0,0,0,0.08)] mb-8"></div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base font-sans">
<iconify-icon className="text-[#84A900] text-xl" icon="solar:check-circle-linear"></iconify-icon>
              Beautiful Custom Design
            </li>
<li className="flex items-center gap-3 text-base font-sans">
<iconify-icon className="text-[#84A900] text-xl" icon="solar:check-circle-linear"></iconify-icon>
              Works great on phones &amp; tablets
            </li>
<li className="flex items-center gap-3 text-base font-sans">
<iconify-icon className="text-[#84A900] text-xl" icon="solar:check-circle-linear"></iconify-icon>
              Easy for you to edit text &amp; photos
            </li>
<li className="flex items-center gap-3 text-base font-sans">
<iconify-icon className="text-[#84A900] text-xl" icon="solar:check-circle-linear"></iconify-icon>
              Set up to be found on Google
            </li>
<li className="flex items-center gap-3 text-base font-sans">
<iconify-icon className="text-[#84A900] text-xl" icon="solar:check-circle-linear"></iconify-icon>
              Help and support after we launch
            </li>
</ul>
<a className="block w-full text-center bg-[#C8FF17] text-[#11190A] text-base font-medium py-4 rounded-full hover:bg-[#121212] transition-colors duration-300 hover:text-white font-sans" href="#contact">
            Let's Talk About Your Project
          </a>
</div>
</div>
</section>

<section className="bg-[#E9E7DD] py-32 md:py-48" id="portfolio">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">

<div className="mb-20 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-24">
<div className="flex-1">
<div className="flex items-center gap-2 font-medium text-sm text-[#121212] mb-8">
<iconify-icon className="text-lg" icon="lucide:target" strokeWidth="1.5"></iconify-icon>
<span className="font-sans">16 - 2026©</span>
</div>
<h2 className="text-6xl md:text-[100px] lg:text-[130px] font-medium text-[#121212] tracking-tight leading-[0.9] split-parent"><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Projects.</span></div></h2></div>
<div className="max-w-md lg:pb-4">
<p className="text-lg md:text-xl text-[#646464] leading-relaxed split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Use a short, punchy paragraph to introduce the</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>services, then use a bulleted list or visual</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>blocks for clarity.</span></div><p className="split-parent"></p></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">

<div className="group flex flex-col gap-6">
<a className="block relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#e0ded5]" href="#">
<img alt="Boutique Hotel Website" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</a>
<div className="grid grid-cols-[1fr_2fr_1fr] items-start px-2">
<div className="text-sm md:text-base font-medium text-[#121212] font-sans">[01]</div>
<div className="text-center flex flex-col items-center">
<h3 className="text-lg md:text-xl font-medium tracking-tight text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Boutique Hotel Website</span></div></h3>
<p className="text-[#646464] text-sm md:text-base mt-1 split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Hospitality</span></div><p className="split-parent"></p></div>
<div className="text-sm md:text-base font-medium text-[#121212] text-right font-sans">©2025</div>
</div>
</div>

<div className="group flex flex-col gap-6">
<a className="block relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#e0ded5]" href="#">
<img alt="Restaurant Brand Website" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</a>
<div className="grid grid-cols-[1fr_2fr_1fr] items-start px-2">
<div className="text-sm md:text-base font-medium text-[#121212] font-sans">[02]</div>
<div className="text-center flex flex-col items-center">
<h3 className="text-lg md:text-xl font-medium tracking-tight text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Restaurant Brand Website</span></div></h3>
<p className="text-[#646464] text-sm md:text-base mt-1 split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Food &amp; Beverage</span></div><p className="split-parent"></p></div>
<div className="text-sm md:text-base font-medium text-[#121212] text-right font-sans">©2025</div>
</div>
</div>

<div className="group flex flex-col gap-6">
<a className="block relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#e0ded5]" href="#">
<img alt="Tech Startup Portal" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</a>
<div className="grid grid-cols-[1fr_2fr_1fr] items-start px-2">
<div className="text-sm md:text-base font-medium text-[#121212] font-sans">[03]</div>
<div className="text-center flex flex-col items-center">
<h3 className="text-lg md:text-xl font-medium tracking-tight text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Tech Startup Portal</span></div></h3>
<p className="text-[#646464] text-sm md:text-base mt-1 split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Technology</span></div><p className="split-parent"></p></div>
<div className="text-sm md:text-base font-medium text-[#121212] text-right font-sans">©2025</div>
</div>
</div>

<div className="group flex flex-col gap-6">
<a className="block relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#e0ded5]" href="#">
<img alt="Creative Agency Portfolio" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<div className="grid grid-cols-[1fr_2fr_1fr] items-start px-2">
<div className="text-sm md:text-base font-medium text-[#121212] font-sans">[04]</div>
<div className="text-center flex flex-col items-center">
<h3 className="text-lg md:text-xl font-medium tracking-tight text-[#121212] split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Creative Agency Portfolio</span></div></h3>
<p className="text-[#646464] text-sm md:text-base mt-1 split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>Design</span></div><p className="split-parent"></p></div>
<div className="text-sm md:text-base font-medium text-[#121212] text-right font-sans">©2025</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-48 w-full bg-[#081003] overflow-hidden flex items-center justify-center text-white" id="contact">

<div className="absolute inset-0 w-full h-full">
<img alt="Office desk detail" className="w-full h-full object-cover opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#081003] via-[#081003]/60 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto reveal-up">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-12 split-parent"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>Ready to get a</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>website you're proud</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>of?</span></div></h2>
<p className="text-base md:text-lg text-[#BDBDBD] max-w-xl mx-auto mb-12 split-parent"></p><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We'd love to hear about your business and see how we can help</span></div><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>you grow online.</span></div><p className="split-parent"></p><a className="inline-flex items-center justify-center gap-3 bg-[#C8FF17] text-[#11190A] text-base font-medium px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white font-sans" href="mailto:hello@412digital.com">
          Let's Chat (No Pressure!)
          <iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-[#081003] pt-24 pb-12 relative overflow-hidden text-white">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32 relative z-10">
<div className="md:col-span-2">
<p className="text-lg md:text-xl text-[#BDBDBD] max-w-sm font-medium split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>We're a friendly team helping everyday</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>businesses get beautiful websites that</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>actually work. Based in Bali, working</span></div><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>worldwide.</span></div><p className="split-parent"></p><a className="inline-block mt-6 text-[#C8FF17] transition-colors font-medium hover:text-white font-sans" href="mailto:hello@412digital.com">
              hello@412digital.com
            </a>
</div>
<div>
<h4 className="font-mono text-xs tracking-[0.18em] text-[#C8FF17] uppercase mb-6 font-sans">
              Navigation
            </h4>
<ul className="space-y-4">
<li>
<a className="text-[#BDBDBD] transition-colors text-base hover:text-white font-sans" href="#">
                  Home
                </a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors text-base hover:text-white font-sans" href="#services">
                  Services
                </a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors text-base hover:text-white font-sans" href="#portfolio">
                  Portfolio
                </a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors text-base hover:text-white font-sans" href="#about">
                  About
                </a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors text-base hover:text-white font-sans" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs tracking-[0.18em] text-[#C8FF17] uppercase mb-6 font-sans">
              Social
            </h4>
<ul className="space-y-4">
<li>
<a className="text-[#BDBDBD] transition-colors flex items-center gap-2 text-base hover:text-white font-sans" href="#">
                  Instagram
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors flex items-center gap-2 text-base hover:text-white font-sans" href="#portfolio">
                  Portfolio
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors flex items-center gap-2 text-base hover:text-white font-sans" href="#services">
                  Services
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="text-[#BDBDBD] transition-colors flex items-center gap-2 text-base hover:text-white font-sans" href="#contact">
                  Contact
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>

<div className="w-full flex justify-center border-t pt-12 pb-4 relative z-10 border-white/10">
<h1 className="text-[14vw] leading-[0.8] tracking-tighter font-medium select-none opacity-90 w-full text-center whitespace-nowrap split-parent text-white"><div className="line" style={{display: 'block', textAlign: 'center', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-instrument-serif font-normal" style={{display: 'block'}}>412 Digital</span></div></h1></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs text-[#646464] font-mono tracking-[0.18em] uppercase relative z-10">
<p className="split-parent"></p><div className="line" style={{display: 'block', textAlign: 'start', width: '100%', overflow: 'hidden'}}><span className="split-line-inner font-sans" style={{display: 'block'}}>© 2024 412 Digital. All rights reserved.</span></div><p className="split-parent"></p><div className="flex gap-6">
<a className="hover:text-[#BDBDBD] transition-colors font-sans" href="#">
              Privacy
            </a>
<a className="hover:text-[#BDBDBD] transition-colors font-sans" href="#">Terms</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
