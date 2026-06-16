import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



tailwind.config = {
theme: {
extend: {
colors: {
bgPrimary: '#050505',
bgSecondary: '#0B0A08',
bgElevated: 'rgba(20, 15, 10, 0.55)',
goldPrimary: '#D8A94F',
goldSecondary: '#B9852E',
goldSoft: '#F0D28A',
goldMuted: 'rgba(216, 169, 79, 0.35)',
textPrimary: '#F7F1E6',
textSecondary: '#CFC3B2',
textMuted: '#928675',
borderGold: 'rgba(216, 169, 79, 0.45)',
glassBorder: 'rgba(240, 210, 138, 0.18)',
glassHighlight: 'rgba(255, 228, 170, 0.05)',
shadowWarm: 'rgba(216, 129, 38, 0.15)',
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Montserrat"', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      let menuCurrentPage = 1;

      function switchMenuPage(page) {
        if (page === menuCurrentPage) return;
        
        const numerals = ['I', 'II', 'III'];
        
        for (let i = 1; i <= 3; i++) {
          const tab = document.getElementById('menu-tab-' + i);
          if (tab) {
            if (i === page) {
              tab.className = "menu-tab-btn active px-5 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase border border-goldPrimary bg-goldPrimary/15 text-goldPrimary transition-all duration-300";
            } else {
              tab.className = "menu-tab-btn px-5 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase border border-borderGold/20 text-textSecondary hover:border-goldPrimary hover:text-goldPrimary transition-all duration-300";
            }
          }
        }
        
        const indicator = document.getElementById('menu-page-indicator');
        if (indicator) {
          indicator.innerText = 'Page ' + numerals[page-1] + ' of III';
        }

        for (let i = 1; i <= 3; i++) {
          const pane = document.getElementById('menu-page-' + i);
          if (pane) {
            if (i === page) {
              pane.classList.remove('hidden');
              void pane.offsetWidth;
              pane.classList.remove('opacity-0');
              pane.classList.add('opacity-100');
            } else {
              pane.classList.add('hidden');
              pane.classList.remove('opacity-100');
              pane.classList.add('opacity-0');
            }
          }
        }
        
        menuCurrentPage = page;
      }

      function turnMenuPage(dir) {
        let next = menuCurrentPage + dir;
        if (next > 3) next = 1;
        if (next < 1) next = 3;
        switchMenuPage(next);
      }
    


          document.addEventListener('DOMContentLoaded', function() {
            const sliderContainer = document.getElementById('testimonial-slider-aura-empkn7xpxbx1gepe');
            if (!sliderContainer) return;
            const slides = sliderContainer.querySelectorAll('.testimonial-slide-item');
            if(slides.length <= 1) return;
            let currentSlide = 0;

            setInterval(function() {
              slides[currentSlide].classList.remove('opacity-100', 'z-10');
              slides[currentSlide].classList.add('opacity-0', 'z-0');
              
              currentSlide = (currentSlide + 1) % slides.length;
              
              slides[currentSlide].classList.remove('opacity-0', 'z-0');
              slides[currentSlide].classList.add('opacity-100', 'z-10');
            }, 4000);
          });
        


      // Init Lucide Icons
      lucide.createIcons();

      // 1. Loading screen sequence
      window.addEventListener('load', () => {
          const preloader = document.getElementById('preloader');
          if (preloader) {
              gsap.to(preloader, {
                  opacity: 0,
                  duration: 1.2,
                  ease: 'power3.out',
                  onComplete: () => {
                      preloader.style.display = 'none';
                      initMainEntranceAnimations();
                  }
              });
          }
      });

     
      // 3. Responsive Header Sticky Effects
      const header = document.getElementById('main-nav');
      if (header) {
          lenis.on('scroll', (e) => {
              if (e.scroll > 50) {
                  header.classList.remove('bg-transparent', 'border-transparent');
                  header.classList.add('bg-[#070605]/95', 'border-borderGold/10', 'backdrop-blur-md');
              } else {
                  header.classList.remove('bg-[#070605]/95', 'border-borderGold/10', 'backdrop-blur-md');
                  header.classList.add('bg-transparent', 'border-transparent');
              }
          });
      }

      // 4. Mobile Drawer Navigation toggle logic
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      let mobileMenuOpen = false;

      if (mobileMenuBtn && mobileMenu) {
          mobileMenuBtn.addEventListener('click', () => {
              mobileMenuOpen = !mobileMenuOpen;
              if (mobileMenuOpen) {
                  mobileMenu.classList.remove('translate-x-full');
                  mobileMenuBtn.innerHTML = `<i data-lucide="x" class="w-6 h-6"></i>`;
                  lucide.createIcons();
              } else {
                  mobileMenu.classList.add('translate-x-full');
                  mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
                  lucide.createIcons();
              }
          });
      }

      // Close drawer on navigating mobile links
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              if (mobileMenu) mobileMenu.classList.add('translate-x-full');
              mobileMenuOpen = false;
              if (mobileMenuBtn) mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
              lucide.createIcons();
          });
      });

      // 5. Entrance sequence for hero zone (runs instantly on load)
      function initMainEntranceAnimations() {
          const heroTL = gsap.timeline();

          heroTL.from('#hero-eyebrow', {
              opacity: 0,
              y: -15,
              duration: 0.8,
              ease: 'power3.out'
          })
          .from('#hero-heading span', {
              y: '100%',
              opacity: 0,
              stagger: 0.15,
              duration: 1,
              ease: 'power4.out'
          }, '-=0.5')
          .from('#hero-divider', {
              scaleX: 0,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out'
          }, '-=0.6')
          .from('#hero-desc', {
              opacity: 0,
              y: 15,
              duration: 0.8,
              ease: 'power3.out'
          }, '-=0.5')
          .from('#hero-ctas', {
              opacity: 0,
              y: 20,
              duration: 0.8,
              ease: 'power3.out'
          }, '-=0.5')
          .from('#hero-badges', {
              opacity: 0,
              y: 20,
              duration: 0.8,
              ease: 'power3.out'
          }, '-=0.4')
          .from('#hero-cards div', {
              opacity: 0,
              x: 30,
              stagger: 0.15,
              duration: 1,
              ease: 'power3.out'
          }, '-=1');
      }

      // 6. Normal scrolling: use IntersectionObserver to gently reveal elements as user scrolls down
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  gsap.fromTo(entry.target,
                      { opacity: 0, y: 30 },
                      { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' }
                  );
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      revealElements.forEach(el => {
          gsap.set(el, { opacity: 0 });
          revealObserver.observe(el);
      });

      // 7. Interactive Menu Page Turner logic
      let currentMenuPage = 1;
      const totalMenuPages = 3;

      window.switchMenuPage = function(pageNumber) {
          if (pageNumber < 1 || pageNumber > totalMenuPages) return;
          currentMenuPage = pageNumber;

          for (let i = 1; i <= totalMenuPages; i++) {
              const pageEl = document.getElementById(`menu-page-${i}`);
              const tabEl = document.getElementById(`menu-tab-${i}`);
              if (pageEl) {
                  if (i === pageNumber) {
                      pageEl.classList.remove('hidden');
                      gsap.fromTo(pageEl, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' });
                  } else {
                      pageEl.classList.add('hidden');
                  }
              }
              if (tabEl) {
                  if (i === pageNumber) {
                      tabEl.classList.add('active', 'border-goldPrimary', 'bg-goldPrimary/15', 'text-goldPrimary');
                      tabEl.classList.remove('border-borderGold/20', 'text-textSecondary');
                  } else {
                      tabEl.classList.remove('active', 'border-goldPrimary', 'bg-goldPrimary/15', 'text-goldPrimary');
                      tabEl.classList.add('border-borderGold/20', 'text-textSecondary');
                  }
              }
          }

          // Update indicator
          const indicator = document.getElementById('menu-page-indicator');
          if (indicator) {
              const numerals = ["I", "II", "III"];
              indicator.textContent = `Page ${numerals[pageNumber - 1]} of III`;
          }
      };

      window.turnMenuPage = function(direction) {
          let targetPage = currentMenuPage + direction;
          if (targetPage < 1) targetPage = totalMenuPages;
          if (targetPage > totalMenuPages) targetPage = 1;
          switchMenuPage(targetPage);
      };

      // 8. Interactive feedback on reservation submit
      const reservationForm = document.getElementById('reservation-form');
      if (reservationForm) {
          reservationForm.addEventListener('submit', (e) => {
              e.preventDefault();
              const submitBtn = reservationForm.querySelector('button');
              submitBtn.textContent = "Processing reservation request...";
              submitBtn.disabled = true;

              setTimeout(() => {
                  submitBtn.innerHTML = `<i data-lucide="check" class="inline w-4 h-4 mr-2"></i> Request Submitted Successfully`;
                  submitBtn.classList.remove('from-[#E4B760]', 'to-[#B9852E]');
                  submitBtn.classList.add('bg-green-600', 'text-white');
                  lucide.createIcons();
              }, 1800);
          });
      }
    


(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }

  function setupVideo(video) {
    if (video.__auraVideoReady === true) return;
    video.__auraVideoReady = true;
    video.removeAttribute("data-aura-video-ready");
    video.removeAttribute("data-aura-video-played");
    video.muted = true;
    video.playsInline = true;

    var preset = video.dataset.auraVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () {
        playVideo(video);
      });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__auraVideoPlayed === true) {
            return;
          }
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__auraVideoPlayed = true;
      }, { once: true });
    }

    observer.observe(video);
  }

  function setupVideos() {
    document
      .querySelectorAll("video[data-aura-video-preset]")
      .forEach(setupVideo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
})();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]" id="preloader" style={{display: 'none'}}>
<div className="relative flex flex-col items-center">

<div className="w-20 h-20 mb-6 relative flex items-center justify-center">
<svg className="w-full h-full stroke-current text-goldPrimary fill-none stroke-[1.5]" viewbox="0 0 100 100">
<path d="M30 80 V20 L70 80 V20 M30 50 H70" id="logo-path" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="50" cy="50" r="45" stroke-dasharray="6" strokeLinecap="round"></circle>
</svg>
</div>
<h2 className="font-serif text-2xl tracking-[0.3em] text-textPrimary uppercase">
          N E R E O
        </h2>
<p className="text-[9px] tracking-[0.5em] text-goldPrimary uppercase mt-2">
          Seafood Atelier
        </p>
<div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-goldPrimary to-transparent mt-6 overflow-hidden relative">
<div className="h-full bg-white absolute left-0 top-0 w-1/2 animate-[shimmer_1.5s_infinite]"></div>
</div>
</div>
</div>

<div className="relative" id="scroll-wrapper">

<header className="fixed flex transition-all duration-500 lg:px-16 bg-[#050505]/40 w-full h-24 z-50 border-transparent border-b px-6 top-0 left-0 backdrop-blur-2xl items-center justify-between" id="main-nav">

<a className="flex items-center gap-3 group" href="#">

<svg aria-hidden="true" className="h-12 w-12 text-[#D8A94F] transition duration-500 group-hover:scale-105 group-hover:text-[#F0D28A]" fill="none" viewbox="0 0 80 80">
<circle cx="40" cy="40" r="29" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M23 56V24L57 57V24" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M28 18L40 12L52 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M21 20L16 17M59 20L64 17M40 68V61" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
</path>
</svg>
<div className="flex flex-col">
<span className="font-serif text-lg tracking-[0.25em] text-textPrimary uppercase leading-tight">
              Nereo
            </span>
<span className="text-[7.5px] tracking-[0.35em] text-goldPrimary uppercase">
              Seafood Atelier
            </span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-[11px] font-medium tracking-[0.18em] text-textPrimary hover:text-goldPrimary uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-goldPrimary hover:after:w-full after:transition-all after:duration-300" href="#about">
            About
          </a>
<a className="text-[11px] font-medium tracking-[0.18em] text-textSecondary hover:text-goldPrimary uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-goldPrimary hover:after:w-full after:transition-all after:duration-300" href="#menu">
            Menu
          </a>
<a className="text-[11px] font-medium tracking-[0.18em] text-textSecondary hover:text-goldPrimary uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-goldPrimary hover:after:w-full after:transition-all after:duration-300" href="#atelier-bento">
            Philosophy
          </a>
<a className="text-[11px] font-medium tracking-[0.18em] text-textSecondary hover:text-goldPrimary uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-goldPrimary hover:after:w-full after:transition-all after:duration-300" href="#gallery">
            Gallery
          </a>
<a className="text-[11px] font-medium tracking-[0.18em] text-textSecondary hover:text-goldPrimary uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-goldPrimary hover:after:w-full after:transition-all after:duration-300" href="#reservations">
            Reservations
          </a>
</nav>

<div className="flex items-center gap-6">
<a className="hidden sm:inline-block border border-goldPrimary/60 px-6 py-3 text-[10px] tracking-[0.15em] font-medium text-textPrimary hover:bg-goldPrimary hover:text-bgPrimary hover:border-goldPrimary transition-all duration-500 uppercase rounded-none" href="#reservations">
            Reserve a Table
          </a>

<button aria-label="Toggle Menu" className="lg:hidden text-textPrimary hover:text-goldPrimary transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-[#070605] transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-between p-8 pt-32" id="mobile-menu">
<nav className="flex flex-col gap-6">
<a className="mobile-nav-link text-3xl font-serif tracking-widest text-textPrimary uppercase" href="#about">
            About
          </a>
<a className="mobile-nav-link text-3xl font-serif tracking-widest text-textPrimary uppercase" href="#menu">
            Menu
          </a>
<a className="mobile-nav-link text-3xl font-serif tracking-widest text-textPrimary uppercase" href="#atelier-bento">
            Philosophy
          </a>
<a className="mobile-nav-link text-3xl font-serif tracking-widest text-textPrimary uppercase" href="#gallery">
            Gallery
          </a>
<a className="mobile-nav-link text-3xl font-serif tracking-widest text-textPrimary uppercase" href="#reservations">
            Reservations
          </a>
</nav>
<div className="border-t border-borderGold/30 pt-8">
<p className="text-xs text-textMuted tracking-wider">
            RESERVATIONS &amp; ENQUIRIES
          </p>
<p className="text-lg text-goldPrimary font-serif mt-2">
            +1 (555) 234-5678
          </p>
</div>
</div>

<section className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden bg-bgPrimary" id="hero">

<div className="ambient-glow w-[500px] h-[500px] top-[20%] right-[10%] bg-goldSecondary/10"></div>
<div className="ambient-glow w-[400px] h-[400px] bottom-[10%] left-[5%] bg-amber-900/10"></div>

<div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-bgPrimary/80 pointer-events-none z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-bgPrimary via-transparent to-transparent pointer-events-none z-10"></div>

<div className="absolute inset-0 w-full h-full z-0 opacity-85 lg:opacity-100 overflow-hidden">

<video aria-label="Gourmet Seafood Plate" className="absolute inset-0 w-full h-full object-cover object-[72%_50%] scale-105 filter brightness-[0.42] lg:brightness-[0.62] contrast-[1.05]" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b410888-a2e7-4260-ac4a-8179b07b8bc0_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1779678842660-589ad283-7901-4385-af29-aedcbe6e68c9.mp4"></video>

<div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_31%,rgba(5,5,5,0.88)_43%,rgba(5,5,5,0.45)_58%,rgba(5,5,5,0.16)_74%,rgba(5,5,5,0.08)_100%)] pointer-events-none"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_50%,rgba(216,169,79,0.08)_0%,rgba(5,5,5,0.18)_42%,rgba(5,5,5,0.78)_100%)] pointer-events-none"></div>
</div>
<div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">

<div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">

<div className="flex items-center gap-4 py-1" id="hero-eyebrow">
<div className="w-12 h-[1px] bg-goldPrimary"></div>
<span className="text-[10px] tracking-[0.3em] text-goldPrimary uppercase font-semibold">
                Ocean. Craft. Elegance.
              </span>
</div>

<div className="text-mask" id="hero-heading">
<h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.95] tracking-tight uppercase">
<span className="text-textPrimary font-light block">
                  Extraordinary
                </span>
<span className="text-goldPrimary italic font-normal block mt-2">
                  By Nature
                </span>
</h1>
</div>

<div className="flex items-center gap-3 w-40 my-1" id="hero-divider">
<div className="w-full h-[1px] bg-borderGold/40"></div>
<svg className="w-2.5 h-2.5 fill-goldPrimary flex-shrink-0" viewbox="0 0 10 10">
<polygon points="5,0 7,3 10,5 7,7 5,10 3,7 0,5 3,3"></polygon>
</svg>
<div className="w-full h-[1px] bg-borderGold/40"></div>
</div>

<p className="text-textSecondary font-light text-sm md:text-base leading-relaxed max-w-[540px]" id="hero-desc">
              Nereo celebrates the finest seafood, sourced from pristine global
              waters and elevated through thoughtful culinary craftsmanship and
              artful presentation.
            </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4" id="hero-ctas">
<a className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E4B760] to-[#B9852E] text-bgPrimary font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-glassBorder hover:brightness-110 shadow-lg shadow-shadowWarm transition-all duration-300" href="#reservations">
<i className="w-4 h-4" data-lucide="calendar"></i>
                Reserve A Table
              </a>
<a className="inline-flex items-center justify-center gap-2 border border-borderGold/50 backdrop-blur-md bg-white/5 text-textPrimary font-medium text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-goldPrimary hover:text-bgPrimary transition-all duration-300" href="#menu">
<i className="w-4 h-4" data-lucide="book-open"></i>
                View Menu
              </a>
</div>

<div className="grid grid-cols-3 gap-6 pt-10 border-t border-borderGold/20 w-full max-w-[580px]" id="hero-badges">
<div className="flex items-center gap-3">
<i className="text-goldPrimary w-5 h-5 flex-shrink-0" data-lucide="shrub"></i>
<span className="text-[9px] font-medium tracking-widest text-textSecondary uppercase leading-tight">
                  Sustainable Sourcing
                </span>
</div>
<div className="flex items-center gap-3 border-l border-borderGold/20 pl-4">
<i className="text-goldPrimary w-5 h-5 flex-shrink-0" data-lucide="award"></i>
<span className="text-[9px] font-medium tracking-widest text-textSecondary uppercase leading-tight">
                  Culinary Excellence
                </span>
</div>
<div className="flex items-center gap-3 border-l border-borderGold/20 pl-4">
<i className="text-goldPrimary w-5 h-5 flex-shrink-0" data-lucide="wine"></i>
<span className="text-[9px] font-medium tracking-widest text-textSecondary uppercase leading-tight">
                  Curated Experiences
                </span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 justify-center items-end relative z-20 mt-12 lg:mt-0" id="hero-cards">

<div className="glass-card w-full max-w-[340px] p-6 rounded-[20px]">
<div className="flex items-center justify-between">
<div className="">
<h3 className="font-serif text-3xl font-light text-textPrimary tracking-wider">
                    4.9 / 5
                  </h3>
<div className="flex gap-1 mt-1 text-goldPrimary">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="text-[10px] text-textMuted tracking-widest mt-2 uppercase">
                    Exceptional Dining
                  </p>
</div>
<div className="w-12 h-12 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5">
<i className="text-goldPrimary w-5 h-5" data-lucide="award"></i>
</div>
</div>
</div>

<div className="glass-card w-full max-w-[340px] p-6 rounded-[20px]">
<div className="flex items-center justify-between">
<div className="">
<span className="text-[10px] text-goldPrimary font-semibold tracking-[0.2em] uppercase">
                    Open Today
                  </span>
<h3 className="font-serif text-xl font-light text-textPrimary tracking-wide mt-1">
                    5:00 PM – 11:30 PM
                  </h3>
<p className="text-[9px] text-textMuted tracking-wider uppercase mt-1">
                    Valet Parking Available
                  </p>
</div>
<div className="w-12 h-12 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5">
<i className="text-goldPrimary w-5 h-5" data-lucide="clock"></i>
</div>
</div>
</div>

<div className="glass-card w-full max-w-[340px] p-6 rounded-[20px]">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5 mt-1 flex-shrink-0">
<i className="text-goldPrimary w-5 h-5" data-lucide="chef-hat"></i>
</div>
<div className="">
<span className="text-[9px] text-goldPrimary font-semibold tracking-[0.2em] uppercase">
                    Chef Recommendation
                  </span>
<h4 className="font-serif text-lg font-light text-textPrimary mt-1">
                    Wild Lobster Tail
                  </h4>
<p className="text-xs text-textSecondary font-light mt-1 leading-relaxed">
                    Seared to perfection with truffle beurre blanc &amp;
                    pristine oscietra caviar.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
<span className="text-[8px] tracking-[0.4em] text-textMuted uppercase font-semibold">
            Scroll to Discover
          </span>
<div className="w-[1px] h-12 bg-gradient-to-b from-goldPrimary via-goldPrimary/50 to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[bounce_2s_infinite]"></div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-bgSecondary relative overflow-hidden" id="about">
<div className="ambient-glow w-[350px] h-[350px] bottom-[-5%] left-[10%] bg-goldSecondary/5"></div>
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 space-y-8 reveal-on-scroll">
<div className="flex items-center gap-3">
<div className="w-8 h-[1px] bg-goldPrimary"></div>
<span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">
                The Atelier Story
              </span>
</div>
<h2 className="font-serif text-4xl lg:text-5xl uppercase leading-tight">
              A Sanctuary of
              <span className="italic text-goldPrimary">Epicurean Art</span>
</h2>
<p className="text-textSecondary font-light leading-relaxed text-sm md:text-base">
              Founded in the heart of maritime luxury, Nereo is more than a
              restaurant — it is an atelier where pristine sea delicacies are
              handled like precious sculpture. We collaborate intimately with
              certified sustainable small-boat dayboat fishermen, importing the
              finest catch at dawn, cooked within hours.
            </p>
<p className="text-textMuted font-light leading-relaxed text-sm">
              Every composition reflects deep culinary heritage, harmonized with
              avant-garde modern techniques under candlelight, providing an
              elite escape into fine food curation.
            </p>
<div className="grid grid-cols-2 gap-8 pt-6 border-t border-borderGold/20">
<div>
<span className="font-serif text-4xl text-goldPrimary block font-light">
                  100%
                </span>
<span className="text-[10px] tracking-[0.18em] text-textSecondary uppercase mt-1 block">
                  Wild Certified Sourcing
                </span>
</div>
<div>
<span className="font-serif text-4xl text-goldPrimary block font-light">
                  3 Michelin
                </span>
<span className="text-[10px] tracking-[0.18em] text-textSecondary uppercase mt-1 block">
                  Trained Mastery Team
                </span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative flex justify-center reveal-on-scroll">
<div className="relative w-full max-w-[500px] aspect-[4/5] img-zoom-container z-10">
<video aria-label="Chef meticulous work plating" className="w-full h-full object-cover shadow-2xl brightness-90 border border-borderGold/10" data-aura-generated-video="true" data-aura-video-preset="play-once" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/012e23e6-f6f6-4823-8d02-f0db54528945_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/8bd0314a-9525-4a13-996e-2c37cbd9e514/1779679066962-3a057e1e-bfc6-416d-9aed-468d7b6efb7d.mp4"></video>

<div className="absolute -inset-4 border border-goldPrimary/20 -z-10 pointer-events-none transform translate-x-3 translate-y-3"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-bgPrimary relative border-t border-borderGold/10" id="menu">
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-[1px] bg-goldPrimary"></div>
<span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">
          The Atelier Menu
        </span>
</div>
<h2 className="font-serif text-4xl lg:text-5xl uppercase tracking-tight">
        The Gastronomy
        <span className="italic text-goldPrimary">Carte</span>
</h2>
</div>
<p className="text-textMuted font-extralight text-sm max-w-sm">
      Designed daily according to deep-sea maritime migrations and farm
      harvest freshness. Click the page tabs below to turn the pages.
    </p>
</div>

<div className="glass-card rounded-[32px] overflow-hidden p-8 lg:p-12 relative">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-goldSecondary/10 rounded-full blur-2xl pointer-events-none"></div>

<div className="flex flex-wrap justify-center gap-3 md:gap-6 border-b border-borderGold/20 pb-8 mb-8">
<button className="menu-tab-btn active px-5 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase border border-goldPrimary bg-goldPrimary/15 text-goldPrimary transition-all duration-300" id="menu-tab-1" onclick="switchMenuPage(1)">
        Page I: Cold &amp; Raw
      </button>
<button className="menu-tab-btn px-5 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase border border-borderGold/20 text-textSecondary hover:border-goldPrimary hover:text-goldPrimary transition-all duration-300" id="menu-tab-2" onclick="switchMenuPage(2)">
        Page II: Sea &amp; Hearth
      </button>
<button className="menu-tab-btn px-5 py-3 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase border border-borderGold/20 text-textSecondary hover:border-goldPrimary hover:text-goldPrimary transition-all duration-300" id="menu-tab-3" onclick="switchMenuPage(3)">
        Page III: Confections &amp; Elixirs
      </button>
</div>

<div className="menu-page-pane transition-opacity duration-500 ease-in-out opacity-100" id="menu-page-1">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Toro Tartare" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08c9c58c-2d57-4ca7-8332-4bf4b4ba27b6_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Wild Bluefin Toro Tartare
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $52
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Aged soy infusion, finger lime pearls, fresh wasabi root,
              and toasted nori sea-tuille.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Junmai Daiginjo Sake
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Beluga Caviar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb2984cf-e10e-45e4-87df-7e337b4004cb_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Imperial Beluga Caviar
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $240
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Traditional luxury service, warm buckwheat blinis, organic
              egg mimosa, and cultured Normandy butter.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Krug Grande Cuvée
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10 lg:border-b-0">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Oysters" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4eff543-522e-40bc-b177-d1b8a1ddf42d_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Atlantic Oyster Curation
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $36
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Half-dozen pristine hand-harvested oysters, cold-pressed
              champagne mignonette, and sea grapes.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Chablis Premier Cru
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 lg:pb-0">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Scallop Ceviche" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c340cc1-02b0-44de-863c-32ac61fcc6dc_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Hokkaido Scallop Ceviche
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $42
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Infused with yuzu kosho, compressed green apple sheets,
              sea grape salad, and white balsamic mist.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Sancerre Blanc
            </span>
</div>
</div>
</div>
</div>

<div className="menu-page-pane hidden transition-opacity duration-500 ease-in-out opacity-0" id="menu-page-2">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Blue Lobster" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3810a6f0-2b1f-46e5-9cd6-f21eaef124b1_1600w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Brittany Blue Lobster
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $95
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Poached gently in wild kelp butter, charred sweet baby
              leeks, and a silky reduction of coral cognac jus.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Meursault Chardonnay
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Mediterranean Seabass" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c340cc1-02b0-44de-863c-32ac61fcc6dc_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Mediterranean Seabass
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $68
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Pan-roasted crispy skin, wild sea fennel purée, rich
              smoked clam broth, and coastal herb oil.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Puligny-Montrachet
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10 lg:border-b-0">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Dry-Aged Turbot" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4eff543-522e-40bc-b177-d1b8a1ddf42d_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Dry-Aged Turbot
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $85
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Wood-fired on the bone, served with golden chanterelles,
              hazelnut brown butter, and vin jaune emulsion.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Savennières Chenin Blanc
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 lg:pb-0">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Wagyu &amp; Carabineros" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3aca1d5e-4d7b-4112-abcf-d6abb301e1f1_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Miyazaki Surf &amp; Turf
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $110
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              A5 Japanese Wagyu tenderloin accompanied by premium
              Carabineros prawn and sweet black garlic emulsion.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Aged Gevrey-Chambertin Pinot Noir
            </span>
</div>
</div>
</div>
</div>

<div className="menu-page-pane hidden transition-opacity duration-500 ease-in-out opacity-0" id="menu-page-3">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Mille-Feuille" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54bdb70d-a08c-4469-a481-ccb5a0020c58_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Saffron &amp; Pear Mille-Feuille
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $22
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Crisped caramelized pastry layers, poached wild pear
              slices, and delicate Iranian saffron-infused cream.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Digestif: Chateau d'Yquem Sauternes
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Soufflé" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ffd3ee3-d758-404a-817a-893d5de95830_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Vanilla Caviar Soufflé
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $24
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Fluffy Grand Marnier soufflé, white chocolate soil base,
              accompanied by a rich Fleur de Sel caramel drizzle.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Digestif: 20-Year Tawny Port
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-borderGold/10 lg:border-b-0">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Matcha Ganache" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a130615c-68c2-4525-b229-afb2938ed03e_3840w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Matcha &amp; Jasmine Ganache
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $20
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Fine Uji matcha whipped mousse, organic jasmine
              flower-infused dark chocolate crust, topped with 24k
              edible gold.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Digestif: Rare Umeshu Plum Elixir
            </span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start pb-8 lg:pb-0">
<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Digestif Pairing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ad3cb03-d76b-4c0f-9d82-8e7a31948eac_1600w.png"/>
</div>
<div className="flex-grow space-y-2">
<div className="flex justify-between items-baseline">
<h3 className="font-serif text-lg text-textPrimary uppercase tracking-wider">
                Sommelier Digestif Flight
              </h3>
<span className="font-serif text-lg text-goldPrimary ml-2">
                $45
              </span>
</div>
<p className="text-xs text-textMuted font-extralight leading-relaxed">
              Three curated pours of rare historical cordials,
              customized directly to your dessert preference.
            </p>
<span className="inline-block text-[9px] tracking-widest text-goldPrimary uppercase font-normal mt-1">
              Sipping: Curated Artisanal Liquors
            </span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between border-t border-borderGold/20 pt-8 mt-12">
<button className="inline-flex items-center gap-2 text-[10px] tracking-wider text-textSecondary hover:text-goldPrimary uppercase transition-colors" onclick="turnMenuPage(-1)">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
        Prev Page
      </button>
<span className="text-[10px] tracking-[0.3em] text-goldPrimary uppercase font-normal" id="menu-page-indicator">
        Page I of III
      </span>
<button className="inline-flex items-center gap-2 text-[10px] tracking-wider text-textSecondary hover:text-goldPrimary uppercase transition-colors" onclick="turnMenuPage(1)">
        Next Page
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-bgSecondary relative overflow-hidden" id="atelier-bento">
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16">
<div className="text-center space-y-4 mb-20 reveal-on-scroll">
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-[1px] bg-goldPrimary"></div>
<span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">
                The Atelier Standards
              </span>
<div className="w-8 h-[1px] bg-goldPrimary"></div>
</div>
<h2 className="font-serif text-4xl lg:text-5xl uppercase">
              Architectural
              <span className="italic text-goldPrimary">Gastronomy</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="glass-card md:col-span-8 p-8 rounded-[32px] min-h-[400px] flex flex-col justify-between relative overflow-hidden group reveal-on-scroll">
<div className="absolute inset-0 bg-cover bg-center brightness-[0.22] group-hover:scale-105 transition-transform duration-1000 z-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3aca1d5e-4d7b-4112-abcf-d6abb301e1f1_3840w.png\')'}}></div>
<div className="relative z-10">
<span className="text-[10px] text-goldPrimary font-semibold tracking-[0.2em] uppercase">
                  Private Atelier Dinner
                </span>
<h3 className="font-serif text-3xl text-textPrimary mt-2 uppercase">
                  The Chef's Table Experience
                </h3>
</div>
<div className="relative z-10 mt-12 md:max-w-md">
<p className="text-xs text-textSecondary font-light leading-relaxed">
                  An intimate 12-course bespoke menu inside our culinary
                  research kitchen. Watch ingredients get transformed into
                  edible sculpture in absolute elegance.
                </p>
<a className="inline-flex items-center gap-2 text-[10px] text-goldPrimary font-semibold tracking-wider uppercase mt-4 hover:text-white transition-colors" href="#reservations">
                  INQUIRE EXCLUSIVELY
                  <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="glass-card md:col-span-4 p-8 rounded-[32px] flex flex-col justify-between bg-[#110e0a] reveal-on-scroll">
<div className="space-y-6">
<div className="w-12 h-12 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5">
<i className="text-goldPrimary w-5 h-5" data-lucide="wine"></i>
</div>
<h3 className="font-serif text-2xl text-textPrimary uppercase">
                  Grand Vintage Reserve
                </h3>
<p className="text-xs text-textMuted font-light leading-relaxed">
                  Over 400 meticulously cellared Burgundy Grand Crus &amp;
                  Prestige Champagnes, hand-picked by our head Sommelier.
                </p>
</div>
<div className="pt-6 border-t border-borderGold/10">
<span className="text-3xl font-serif text-goldPrimary block font-light">
                  420+ Bottles
                </span>
<span className="text-[9px] tracking-widest text-textSecondary uppercase mt-1 block">
                  In-House Cellar
                </span>
</div>
</div>

<div className="glass-card md:col-span-4 p-8 rounded-[32px] flex flex-col justify-between bg-[#110e0a] reveal-on-scroll">
<div className="space-y-6">
<div className="w-12 h-12 rounded-full border border-borderGold/30 flex items-center justify-center bg-goldPrimary/5">
<i className="text-goldPrimary w-5 h-5" data-lucide="compass"></i>
</div>
<h3 className="font-serif text-2xl text-textPrimary uppercase">
                  True Cold Water Sourcing
                </h3>
<p className="text-xs text-textMuted font-light leading-relaxed">
                  Imported directly from pristine depths of the Celtic Seas,
                  Northern Atlantic, and clean oceanic bays of Japan.
                </p>
</div>
<div className="pt-6 border-t border-borderGold/10">
<span className="text-3xl font-serif text-goldPrimary block font-light">
                  Dawn Flown
                </span>
<span className="text-[9px] tracking-widest text-textSecondary uppercase mt-1 block">
                  Daily Fresh Delivery
                </span>
</div>
</div>

<div className="glass-card md:col-span-8 p-8 rounded-[32px] min-h-[400px] flex flex-col justify-between relative overflow-hidden group reveal-on-scroll">
<div className="absolute inset-0 bg-cover bg-center brightness-[0.25] group-hover:scale-105 transition-transform duration-1000 z-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ffd3ee3-d758-404a-817a-893d5de95830_3840w.png\')'}}></div>
<div className="relative z-10">
<span className="text-[10px] text-goldPrimary font-semibold tracking-[0.2em] uppercase">
                  Modern Classic Design
                </span>
<h3 className="font-serif text-3xl text-textPrimary mt-2 uppercase">
                  The Atelier Architecture
                </h3>
</div>
<div className="relative z-10 mt-12 md:max-w-md">
<p className="text-xs text-textSecondary font-light leading-relaxed">
                  Crafted using organic textures of dark volcanic slate,
                  handcrafted gold-leaf dividers, and candlelit ambiance to
                  invoke visual intimacy.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-bgPrimary relative border-t border-borderGold/10" id="gallery">
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-[1px] bg-goldPrimary"></div>
<span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">
                  Visual Ambiance
                </span>
</div>
<h2 className="font-serif text-4xl lg:text-5xl uppercase">
                The Atelier
                <span className="italic text-goldPrimary">Atmos</span>
</h2>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative aspect-square overflow-hidden img-zoom-container rounded-3xl border border-borderGold/20 reveal-on-scroll">
<img alt="Plated Dish" className="w-full h-full object-cover brightness-[0.7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4eff543-522e-40bc-b177-d1b8a1ddf42d_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-[10px] text-goldPrimary tracking-widest uppercase font-semibold">
                  Gourmet Curation
                </span>
<h4 className="font-serif text-lg text-textPrimary mt-1">
                  Sustainably Harvested Oysters
                </h4>
</div>
</div>

<div className="relative aspect-[3/4] md:row-span-2 overflow-hidden img-zoom-container rounded-3xl border border-borderGold/20 reveal-on-scroll">
<img alt="Atmosphere" className="w-full h-full object-cover brightness-[0.7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ad3cb03-d76b-4c0f-9d82-8e7a31948eac_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-[10px] text-goldPrimary tracking-widest uppercase font-semibold">
                  Visual Ambiance
                </span>
<h4 className="font-serif text-lg text-textPrimary mt-1">
                  Main Dining Hall Intimacy
                </h4>
</div>
</div>

<div className="relative aspect-square overflow-hidden img-zoom-container rounded-3xl border border-borderGold/20 reveal-on-scroll">
<img alt="Wine" className="w-full h-full object-cover brightness-[0.7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a130615c-68c2-4525-b229-afb2938ed03e_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-[10px] text-goldPrimary tracking-widest uppercase font-semibold">
                  Curated Cellar
                </span>
<h4 className="font-serif text-lg text-textPrimary mt-1">
                  Prestige Reserves &amp; Decanters
                </h4>
</div>
</div>

<div className="relative aspect-[4/3] overflow-hidden img-zoom-container rounded-3xl border border-borderGold/20 reveal-on-scroll">
<img alt="Atelier cooking" className="w-full h-full object-cover brightness-[0.7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54bdb70d-a08c-4469-a481-ccb5a0020c58_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-[10px] text-goldPrimary tracking-widest uppercase font-semibold">
                  Behind the Scenes
                </span>
<h4 className="font-serif text-lg text-textPrimary mt-1">
                  Culinary Crafting Atelier
                </h4>
</div>
</div>

<div className="relative aspect-square overflow-hidden img-zoom-container rounded-3xl border border-borderGold/20 reveal-on-scroll">
<img alt="Seafood details" className="w-full h-full object-cover brightness-[0.7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c340cc1-02b0-44de-863c-32ac61fcc6dc_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-[10px] text-goldPrimary tracking-widest uppercase font-semibold">
                  Gastronomy
                </span>
<h4 className="font-serif text-lg text-textPrimary mt-1">
                  Gourmet Clam Infusions
                </h4>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-28 border-borderGold/10 overflow-hidden border-t pt-20 pb-20 relative">
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 text-center space-y-12">
<span className="text-[9px] text-goldPrimary font-medium tracking-[0.3em] uppercase block">
            Acclaimed By Authorities
          </span>

<div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-40 grayscale contrast-125">
<span className="font-serif text-lg tracking-[0.2em] text-textPrimary">
              MICHELIN GUIDE
            </span>
<span className="font-serif text-lg tracking-[0.2em] text-textPrimary">
              THE NEW YORK TIMES
            </span>
<span className="font-serif text-lg tracking-[0.2em] text-textPrimary">
              FORBES TRAVEL
            </span>
<span className="font-serif text-lg tracking-[0.2em] text-textPrimary">
              REL&amp;AIS CHATEAUX
            </span>
</div>

<div className="max-w-3xl mx-auto pt-10 reveal-on-scroll">
<div className="flex justify-center text-goldPrimary mb-6">
<i className="w-10 h-10 opacity-30" data-lucide="quote"></i>
</div>
<div className="relative w-full h-[280px] md:h-[200px] flex items-center justify-center mt-2" id="testimonial-slider-aura-empkn7xpxbx1gepe">

<div className="testimonial-slide-item absolute inset-0 w-full transition-opacity duration-1000 ease-in-out opacity-100 z-10 flex flex-col justify-start">
<p className="font-serif text-2xl md:text-3xl text-textPrimary font-light italic leading-relaxed tracking-tight">
                  "The absolute peak of seafood artistry. Under the gold light, each
                  course felt like a precious ocean talisman uncovered. An unmatched
                  experience in dark luxury gastronomy."
                </p>
<div className="mt-6">
<span className="text-[10px] tracking-widest text-goldPrimary font-semibold uppercase block">
                    Lord Alistair Sterling
                  </span>
<span className="text-[9px] text-textMuted uppercase mt-1 block">
                    Connoisseur Review 2024
                  </span>
</div>
</div>

<div className="testimonial-slide-item absolute inset-0 w-full transition-opacity duration-1000 ease-in-out opacity-0 z-0 flex flex-col justify-start">
<p className="font-serif text-2xl md:text-3xl text-textPrimary font-light italic leading-relaxed tracking-tight">
                  "An unparalleled dive into oceanic flavors. The attention to detail 
                  is nothing short of miraculous. Truly a sanctuary for epicureans."
                </p>
<div className="mt-6">
<span className="text-[10px] tracking-widest text-goldPrimary font-semibold uppercase block">
                    Eleanor Vance
                  </span>
<span className="text-[9px] text-textMuted uppercase mt-1 block">
                    Gastronomy Today
                  </span>
</div>
</div>

<div className="testimonial-slide-item absolute inset-0 w-full transition-opacity duration-1000 ease-in-out opacity-0 z-0 flex flex-col justify-start">
<p className="font-serif text-2xl md:text-3xl text-textPrimary font-light italic leading-relaxed tracking-tight">
                  "Each plate is a masterclass in modern seafood preparation. 
                  The atmosphere elevates the dining experience to sheer poetry."
                </p>
<div className="mt-6">
<span className="text-[10px] tracking-widest text-goldPrimary font-semibold uppercase block">
                    Marcus Thorne
                  </span>
<span className="text-[9px] text-textMuted uppercase mt-1 block">
                    The Culinary Standard
                  </span>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 lg:py-32 bg-bgPrimary relative border-t border-borderGold/10" id="reservations">
<div className="ambient-glow w-[350px] h-[350px] top-[10%] left-[20%] bg-goldSecondary/5"></div>
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5 space-y-8 reveal-on-scroll">
<div className="flex items-center gap-3">
<div className="w-8 h-[1px] bg-goldPrimary"></div>
<span className="text-[10px] tracking-[0.25em] text-goldPrimary uppercase">
                The Reservation Desk
              </span>
</div>
<h2 className="font-serif text-4xl lg:text-5xl uppercase">
              Secure your
              <span className="italic text-goldPrimary">Atelier Table</span>
</h2>
<p className="text-textSecondary font-light leading-relaxed text-sm">
              As we prioritize custom sourcing of fresh daily deliveries, we
              accommodate very limited seats per evening. We strongly recommend
              reserving tables 14 days in advance.
            </p>
<div className="space-y-4 pt-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-borderGold/20 flex items-center justify-center">
<i className="text-goldPrimary w-4 h-4" data-lucide="phone"></i>
</div>
<div>
<span className="text-[9px] text-textMuted uppercase tracking-wider block">
                    CONCIERGE CONTACT
                  </span>
<span className="text-sm font-medium text-textPrimary">
                    +1 (555) 234-5678
                  </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-borderGold/20 flex items-center justify-center">
<i className="text-goldPrimary w-4 h-4" data-lucide="mail"></i>
</div>
<div>
<span className="text-[9px] text-textMuted uppercase tracking-wider block">
                    PRIVATE DINING &amp; EVENTS
                  </span>
<span className="text-sm font-medium text-textPrimary">
                    atelier@nereoseafood.com
                  </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 reveal-on-scroll">
<form className="glass-card p-8 rounded-3xl space-y-6" id="reservation-form">
<h3 className="font-serif text-2xl text-textPrimary uppercase">
                Concierge Request
              </h3>
<div className="w-16 h-[1px] bg-goldPrimary"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">
                    Full Name
                  </label>
<input className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-goldPrimary transition-colors" placeholder="E.g., Julian Vance" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">
                    Email Address
                  </label>
<input className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-goldPrimary transition-colors" placeholder="Julian@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">
                    Guests Count
                  </label>
<select className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-goldPrimary transition-colors">
<option className="bg-bgSecondary text-textPrimary">
                      2 Guests
                    </option>
<option className="bg-bgSecondary text-textPrimary">
                      4 Guests
                    </option>
<option className="bg-bgSecondary text-textPrimary">
                      6 Guests
                    </option>
<option className="bg-bgSecondary text-textPrimary">
                      Chef Table Tasting (Bespoke)
                    </option>
</select>
</div>
<div className="space-y-2">
<label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">
                    Date
                  </label>
<input className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-goldPrimary transition-colors" required="" type="date"/>
</div>
<div className="space-y-2">
<label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">
                    Hour
                  </label>
<select className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-goldPrimary transition-colors">
<option className="bg-bgSecondary text-textPrimary">
                      5:30 PM
                    </option>
<option className="bg-bgSecondary text-textPrimary">
                      7:00 PM
                    </option>
<option className="bg-bgSecondary text-textPrimary">
                      8:30 PM
                    </option>
<option className="bg-bgSecondary text-textPrimary">
                      9:45 PM
                    </option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[9px] text-textMuted tracking-widest uppercase font-semibold">
                  Dietary Notes / Requests
                </label>
<textarea className="w-full bg-[#110e0a] border border-borderGold/20 rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-goldPrimary transition-colors resize-none" placeholder="Please tell us about any seafood allergies or specific requirements..." rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-[#E4B760] to-[#B9852E] text-[#080604] py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-none hover:brightness-110 shadow-lg shadow-shadowWarm transition-all duration-300" type="submit">
                Submit Request &amp; Inform Culinary Team
              </button>
</form>
</div>
</div>
</section>

<footer className="bg-bgSecondary border-t border-borderGold/10 pt-20 pb-12 relative overflow-hidden">
<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="w-12 h-12 flex items-center justify-center border border-goldPrimary/40 rounded-full">
<span className="font-serif text-xl text-goldPrimary">N</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-2xl tracking-[0.25em] text-textPrimary uppercase">
                  Nereo
                </span>
<span className="text-[9px] tracking-[0.35em] text-goldPrimary uppercase">
                  Seafood Atelier
                </span>
</div>
</a>
<p className="text-xs text-textMuted font-light leading-relaxed max-w-sm">
              Crafting elite maritime masterpieces daily under candlelight.
              Uncompromising standard of taste, aesthetic, and exclusivity.
            </p>
</div>

<div className="md:col-span-4 space-y-6 md:pl-12">
<h4 className="text-[10px] tracking-[0.2em] text-goldPrimary font-bold uppercase">
              Quick Directives
            </h4>
<ul className="space-y-3 text-xs text-textSecondary font-light">
<li>
<a className="hover:text-goldPrimary transition-colors" href="#about">
                  Our Gastronomy Story
                </a>
</li>
<li>
<a className="hover:text-goldPrimary transition-colors" href="#menu">
                  Weekly Chef Collection
                </a>
</li>
<li>
<a className="hover:text-goldPrimary transition-colors" href="#atelier-bento">
                  Wine Cellar &amp; Reserve
                </a>
</li>
<li>
<a className="hover:text-goldPrimary transition-colors" href="#reservations">
                  Book Private Events
                </a>
</li>
</ul>
</div>

<div className="md:col-span-4 space-y-6">
<h4 className="text-[10px] tracking-[0.2em] text-goldPrimary font-bold uppercase font-sans">
              Atelier Address
            </h4>
<p className="text-xs text-textSecondary font-light leading-relaxed">
              42 Ocean Atelier Avenue, Lower East Coast Harbor,
              <br/>
              Suite 100, New York, NY
            </p>
<div className="flex gap-4 pt-2">
<a className="w-8 h-8 rounded-full border border-borderGold/20 flex items-center justify-center text-textMuted hover:text-goldPrimary hover:border-goldPrimary transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full border border-borderGold/20 flex items-center justify-center text-textMuted hover:text-goldPrimary hover:border-goldPrimary transition-all" href="#">
<i className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="facebook" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(216, 169, 79)'}}></i>
</a>
<a className="w-8 h-8 rounded-full border border-borderGold/20 flex items-center justify-center text-textMuted hover:text-goldPrimary hover:border-goldPrimary transition-all" href="#">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</a>
</div>
</div>
</div>

<div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 border-t border-borderGold/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-textMuted tracking-wider">
            © 2025 Nereo Seafood Atelier. All Rights Reserved.
          </p>
<div className="flex gap-6 text-[10px] text-textMuted tracking-wider">
<a className="hover:text-goldPrimary transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-goldPrimary transition-colors" href="#">
              Terms of Atelier Dining
            </a>
</div>
</div>
</footer>
</div>



    </>
  );
}
