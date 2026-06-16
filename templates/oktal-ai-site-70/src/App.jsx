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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        (function() {
            const root = document.getElementById('innovation-features-root');
            const ring = root.querySelector('#orbit-ring');
            const hero = root.querySelector('#hero-content');
            const cards = root.querySelectorAll('.ui-card');

            const images = [
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=400&auto=format&fit=crop"
            ];
            const angles = [-80, -60, -40, -20, 0, 20, 40, 60, 80];

            // Initialize Orbit
            angles.forEach((angle, i) => {
                const item = document.createElement('div');
                item.className = "orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300";
                item.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" class="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" alt="">`;
                ring.appendChild(item);
            });

            const orbitItems = ring.querySelectorAll('.orbit-item');

            function updatePositions() {
                const radius = window.innerWidth < 640 ? 320 : (window.innerWidth < 1024 ? 450 : 650);
                orbitItems.forEach((item, index) => {
                    item.style.transform = `rotate(${angles[index]}deg) translateY(${radius}px)`;
                });
            }

            // Entry Animations
            setTimeout(() => {
                hero.style.opacity = '1';
                hero.style.transform = 'translateY(0)';
            }, 100);

            setTimeout(() => {
                cards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }, 300);

            // Infinite Rotation
            let currentRotation = 0;
            function animateOrbit() {
                currentRotation -= 0.05;
                ring.style.transform = `rotate(${currentRotation}deg)`;
                requestAnimationFrame(animateOrbit);
            }

            window.addEventListener('resize', updatePositions);
            updatePositions();
            animateOrbit();
        })();
      


        (() => {
          const section = document.currentScript.closest('section');
          if (!section) return;

          const steps = Array.from(section.querySelectorAll('.logic-step'));
          const line = section.querySelector('#logic-process-line');
          let visibleCount = 0;

          const updateLine = () => {
            const progress = visibleCount / steps.length;
            line.style.strokeDashoffset = `${1 - progress}`;
          };

          updateLine();

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              const index = steps.indexOf(entry.target);
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add('is-visible');
                  visibleCount = Math.max(
                    visibleCount,
                    steps.filter((step) => step.classList.contains('is-visible')).length
                  );
                  updateLine();
                }, index * 120);
              }
            });
          }, {
            threshold: 0.45,
            rootMargin: "0px 0px -8% 0px"
          });

          steps.forEach((step) => observer.observe(step));
        })();
      


      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
        }
      });
    


          document.addEventListener('DOMContentLoaded', () => {
            const accessSection = document.getElementById('access');
            if (!accessSection) return;

            const priceCounters = accessSection.querySelectorAll('.price-count');
            const btnMonthly = document.getElementById('btn-monthly');
            const btnYearly = document.getElementById('btn-yearly');
            const slider = document.getElementById('billing-slider');
            const billingLabels = accessSection.querySelectorAll('.billing-cycle-label');
            const desktopArch = accessSection.querySelector('.desktop-architecture');

            let hasAnimated = false;
            let isYearly = false;

            // Easing interpolation
            const animateCounters = () => {
              priceCounters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const startValue = parseInt(counter.textContent) || 0;
                const duration = 1200;
                const startTimestamp = performance.now();

                const step = (timestamp) => {
                  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                  // easeOutExpo function
                  const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                  counter.textContent = Math.floor(startValue + (target - startValue) * easeOut);

                  if (progress < 1) {
                    window.requestAnimationFrame(step);
                  } else {
                    counter.textContent = target;
                  }
                };

                window.requestAnimationFrame(step);
              });
            };

            // Scroll Observer
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                  hasAnimated = true;
                  setTimeout(() => {
                    accessSection.classList.add('is-visible');
                    setTimeout(animateCounters, 600);
                  }, 100);
                  observer.unobserve(accessSection);
                }
              });
            }, { threshold: 0.2 });

            observer.observe(accessSection);

            // Billing Mode Switcher
            function setBilling(yearly) {
              if (isYearly === yearly) return;
              isYearly = yearly;

              if (yearly) {
                slider.style.transform = 'translateX(100px)';
                slider.style.width = '140px';
                btnYearly.classList.remove('text-gray-500', 'hover:text-gray-300');
                btnYearly.classList.add('text-white');
                btnMonthly.classList.remove('text-white');
                btnMonthly.classList.add('text-gray-500', 'hover:text-gray-300');
              } else {
                slider.style.transform = 'translateX(0)';
                slider.style.width = '100px';
                btnMonthly.classList.remove('text-gray-500', 'hover:text-gray-300');
                btnMonthly.classList.add('text-white');
                btnYearly.classList.remove('text-white');
                btnYearly.classList.add('text-gray-500', 'hover:text-gray-300');
              }

              if (desktopArch) {
                desktopArch.classList.remove('mode-switch-active');
                void desktopArch.offsetWidth; // Reflow reset
                desktopArch.classList.add('mode-switch-active');
              }

              priceCounters.forEach(counter => {
                const target = parseInt(yearly ? counter.getAttribute('data-yearly') : counter.getAttribute('data-monthly'), 10);
                counter.setAttribute('data-target', target);
              });

              animateCounters();

              billingLabels.forEach(label => {
                label.textContent = yearly ? '/mo billed yearly' : '/mo';
              });
            }

            if (btnMonthly && btnYearly) {
              btnMonthly.addEventListener('click', () => setBilling(false));
              btnYearly.addEventListener('click', () => setBilling(true));
            }
          });
        


      if (window.lucide && lucide.createIcons) lucide.createIcons();
    


      if (window.lucide && lucide.createIcons) lucide.createIcons();
    


      (function() {
        function initAccordion() {
          const headers = document.querySelectorAll('.accordion-header');
          headers.forEach(header => {
            header.addEventListener('click', function() {
              const item = this.closest('.accordion-item');
              const container = item.parentElement;
              const allItems = container.querySelectorAll('.accordion-item');
              const isOpen = item.classList.contains('open');
              allItems.forEach(el => el.classList.remove('open'));
              if (!isOpen) item.classList.add('open');
            });
          });
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initAccordion);
        } else {
          initAccordion();
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[200vh] absolute top-0 opacity-40" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="5UmJmFVVxnDOIkdUYRnh"></div>

</div>


<header className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-6">

<a className="inline-flex items-center justify-center text-xl font-bold font-manrope tracking-tight text-white [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll animate" href="#">
            Oktal AI
          </a>

<nav className="hidden items-center gap-8 text-sm text-white/80 md:flex [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<a className="transition-colors hover:text-white font-sans" href="#">
              Explore
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Features
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Pricing
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Changelog
            </a>
</nav>

<div className="hidden md:block [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<a className="glitch-btn inline-flex items-center justify-center transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative px-6 py-2" href="#">
<span className="relative z-10 font-sans">Sign Up</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</a>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 border-gradient before:rounded-lg">
<svg aria-hidden="true" className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="sr-only font-sans">Open menu</span>
</button>
</div>
</div>
</header>

<section className="relative">
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:pt-10 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-16 pl-6 gap-x-10 gap-y-10 items-center">

<div className="relative z-10">
<h1 className="text-4xl font-semibold tracking-tight leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate">
<span className="block text-white tracking-tighter font-manrope font-semibold">
              Build stunning websites
            </span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-amber-200 tracking-tighter font-manrope font-semibold">
              in minutes
            </span>
</h1>
<p className="leading-relaxed md:text-lg [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll text-base text-white/70 max-w-xl mt-6 animate font-sans">
            Oktal AI orchestrates 8 elite AI models (including Gemini, OpenAI,
            and Claude) to instantly generate bespoke, clean-coded WordPress
            sites from a single prompt.
          </p>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll mt-10 relative animate">

<div className="-inset-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-40 w-64 rounded-full absolute blur-xl"></div>
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(129,140,248,0.25)]" href="#" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<img alt="Advisor headshot" className="ring-2 ring-white/10 z-10 w-8 h-8 object-cover rounded-full relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg"/>
<span className="whitespace-nowrap relative z-10 font-sans">
                  Generate My Site
                </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative">
<svg aria-hidden="true" className="lucide lucide-wand-sparkles lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="wand-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</span>
<style>
                  @keyframes borderBeamRotation {
                    0% {
                      transform: translate(-50%, -50%) rotate(0deg);
                    }
                    100% {
                      transform: translate(-50%, -50%) rotate(360deg);
                    }
                  }
                </style>
</div>
</a>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.6s_both] animate-on-scroll text-sm text-white/60 mt-10 animate">
<p className="font-sans">No templates. 100% custom code.</p>
</div>
</div>

<div className="relative">

<div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 blur-3xl"></div>
<div className="overflow-hidden shadow-indigo-900/30 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll border-gradient before:rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] w-full max-w-xl rounded-3xl mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 relative shadow-2xl backdrop-blur animate">
<div className="rounded-2xl bg-black/40 p-2">
<img alt="Abstract 3D ring render" className="object-center md:h-[520px] w-full h-[420px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b907ece-2dd2-4009-9170-a82e3e3e5910_1600w.webp"/>
</div>

<div className="mt-3 flex items-center justify-between px-1">
<div className="flex items-center gap-2 text-xs text-white/50">
<svg aria-hidden="true" className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-sans">Design • Generate • Publish</span>
</div>
<div className="text-xs text-white/40 font-sans">Live Preview</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative bg-transparent text-white antialiased selection:bg-blue-500/30 overflow-hidden flex flex-col items-center min-h-screen pt-40 pb-24 px-6 md:px-12" id="innovation-features-root" style={{fontFamily: '\'Inter\', sans-serif'}}>


<div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)'}}></div>

<div className="absolute top-[-50px] md:top-[-100px] left-1/2 -translate-x-1/2 w-0 h-0 z-0 flex items-center justify-center pointer-events-none" id="orbit-center">
<div className="relative w-0 h-0 transition-transform duration-75" id="orbit-ring">

<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div><div className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"><img alt="" className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-3xl mt-24 sm:mt-40 opacity-0 translate-y-4" id="hero-content" style={{transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6 mt-8">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-manrope">Build at the Speed of Thought</h2>
</div>
<p className="text-neutral-400 md:text-lg max-w-2xl mb-10 leading-relaxed font-sans">
          Skip the templates. Generate bespoke, native WordPress websites from a
          single prompt, backed by the power of an orchestrated multi-model AI
          engine.
        </p>
<a className="glitch-btn inline-flex items-center justify-center transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative px-8 py-3" href="#">
<span className="relative z-10 flex items-center gap-2">
            Start Building
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-40 z-10 relative">

<div className="ui-card opacity-0 translate-y-8 bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/10" style={{transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
<div className="absolute top-0 w-1/2 h-[8px] bg-blue-500 blur-[10px] opacity-40 rounded-full"></div>
</div>
<div className="relative z-10">
<div className="flex flex-col gap-4">
<h3 className="text-xl font-semibold text-white tracking-tight font-manrope">
                Multi-Model Orchestration
              </h3>
<p className="text-neutral-400 leading-relaxed font-sans">
                We route your prompt through up to 8 elite AI models (including
                Gemini, Claude, and OpenAI) to dynamically generate your layout,
                logic, and copy simultaneously.
              </p>
</div>
</div>
</div>

<div className="ui-card opacity-0 translate-y-8 bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/10" style={{transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms'}}>
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
<div className="absolute top-0 w-1/2 h-[8px] bg-blue-500 blur-[10px] opacity-40 rounded-full"></div>
</div>
<div className="relative z-10">
<div className="flex flex-col gap-4">
<h3 className="text-xl font-semibold text-white tracking-tight font-manrope">
                Standard Architecture
              </h3>
<p className="text-neutral-400 leading-relaxed font-sans">
                No proprietary builders, no learning curve. Every site generated
                is a standard, fully functional WordPress site, making it
                incredibly easy to edit and manage without AI.
              </p>
</div>
</div>
</div>

<div className="ui-card opacity-0 translate-y-8 bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/10" style={{transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms'}}>
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
<div className="absolute top-0 w-1/2 h-[8px] bg-blue-500 blur-[10px] opacity-40 rounded-full"></div>
</div>
<div className="relative z-10">
<div className="flex flex-col gap-4">
<h3 className="text-xl font-semibold text-white tracking-tight font-manrope">
                Complete Ownership
              </h3>
<p className="text-neutral-400 leading-relaxed font-sans">
                We build it, you own it. You are never stuck on our system.
                Export your clean source code at any time, or launch instantly
                with our included premium hosting.
              </p>
</div>
</div>
</div>
</div>

</section>
<section className="z-10 my-20 relative">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="text-center mb-16 lg:mb-20 relative z-10 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-manrope">
            Core Platform Advantages
          </h2>
</div>
<div className="grid gap-12 lg:grid-cols-2">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll border-gradient before:rounded-[36px] bg-gradient-to-br from-indigo-500/5 via-fuchsia-500/5 to-amber-400/5 rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-neutral-900/70 border border-neutral-700 rounded-3xl shadow-xl backdrop-blur-xl border-gradient before:rounded-3xl" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="mb-8 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<h3 className="leading-[1.15] sm:text-xl text-3xl font-semibold text-white tracking-tight font-manrope">
                    100% human-grade code, tailored just for you.
                  </h3>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 ring-1 ring-inset ring-white/5 mb-8 border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">

<div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm border-gradient before:rounded-2xl">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">
                        index.html
                      </span>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-green-400"></span>
<span className="text-xs text-green-400 font-sans">
                          Live
                        </span>
</div>
</div>
<div className="p-2 font-mono text-[8px] sm:text-[10px] leading-relaxed">
<div className="text-purple-400 font-sans">
                        &lt;
                        <span className="text-blue-400 font-sans">section</span>
<span className="text-green-400 font-sans">class</span>
                        =
                        <span className="text-amber-300 font-sans">"hero"</span>
                        &gt;
                      </div>
<div className="text-neutral-500 pl-3 font-sans">
                        &lt;
                        <span className="text-blue-400 font-sans">div</span>
<span className="text-green-400 font-sans">class</span>
                        =
                        <span className="text-amber-300 font-sans">
                          "container"
                        </span>
                        &gt;
                      </div>
<div className="text-white pl-6 font-sans">
                        &lt;
                        <span className="text-blue-400 font-sans">h1</span>
                        &gt;Welcome&lt;/
                        <span className="text-blue-400 font-sans">h1</span>
                        &gt;
                      </div>
<div className="text-neutral-500 pl-3 font-sans">
                        &lt;/
                        <span className="text-blue-400 font-sans">div</span>
                        &gt;
                      </div>
<div className="text-purple-400 font-sans">
                        &lt;/
                        <span className="text-blue-400 font-sans">section</span>
                        &gt;
                      </div>
</div>
</div>

<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm border-gradient before:rounded-2xl">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">
                        TAILWIND
                      </span>
</div>
<div className="p-2 space-y-1 font-mono text-[9px] sm:text-[10px]">
<div className="flex items-center justify-between text-cyan-400">
<span className="text-blue-400 font-sans">
                          flex items-center
                        </span>
<span className="text-green-400 font-sans">✓</span>
</div>
<div className="flex items-center justify-between text-cyan-400">
<span className="text-blue-400 font-sans">
                          rounded-xl p-6
                        </span>
<span className="text-green-400 font-sans">✓</span>
</div>
<div className="flex items-center justify-between text-cyan-400">
<span className="text-blue-400 font-sans">
                          bg-gradient-to-r
                        </span>
<span className="text-green-400 font-sans">✓</span>
</div>
</div>
</div>

<div className="sm:left-6 h-[44%] border-neutral-800 border rounded-2xl absolute top-6 left-3 shadow-sm backdrop-blur border-gradient before:rounded-2xl bg-neutral-900/90">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">
                        PROCESS
                      </span>
</div>
<div className="text-[9px] sm:text-[10px] pt-2 pr-2 pb-2 pl-2 space-y-1.5">
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
<span className="text-neutral-300 font-sans">
                          Parse request
                        </span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
<span className="text-neutral-300 font-sans">
                          Generate HTML
                        </span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse"></div>
<span className="text-neutral-300 font-sans">
                          Apply Tailwind
                        </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll">
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white font-sans">
                      The engine understands your intent and generates a fully
                      functional WordPress architecture ready to launch or
                      export.
                    </h4>
<p className="mt-2 text-sm text-neutral-400 font-sans">
                      GPT-5 understands design intent and generates
                      pixel-perfect Tailwind classes automatically.
                    </p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white font-sans">
                      Real-time Preview
                    </h4>
<p className="mt-2 text-sm text-neutral-400 font-sans">
                      See your changes instantly as GPT-5 generates and updates
                      your HTML components.
                    </p>
</div>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll">
<a className="glitch-btn inline-flex items-center justify-center transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative px-6 py-2.5" href="#">
<span className="relative z-10 flex items-center gap-2 font-sans">
                      Try GPT-5 Editor
                      <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</a>
</div>
</div>
</article>
</div>

<div className="">
<div className="tech-content [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll" id="technology">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="">
<div className="space-y-4">
<div className="flex items-start gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5 border-gradient before:rounded-full">
<svg aria-hidden="true" className="lucide lucide-eye text-indigo-400 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="eye" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(129, 140, 248)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h5 className="font-medium text-white font-sans">
                          Take full control. Premium hosting is included in your
                          subscription, but you are free to export your clean
                          code anytime.
                        </h5>
<p className="text-sm text-neutral-400 mt-1 font-sans">
                          Take full control of your codebase. Export clean HTML
                          anytime, or let us host it on our global edge network
                          for free.
                        </p>
</div>
</div>
<div className="flex items-start gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center mt-0.5 border-gradient before:rounded-full">
<svg className="text-fuchsia-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m7.5 4.27 9 5.15"></path>
<path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<div className="">
<h5 className="font-medium text-white font-sans">
                          No watermarks, no messy artifacts, and no AI tags in
                          the source code. Your secret weapon stays a secret.
                        </h5>
<p className="text-sm text-neutral-400 mt-1 font-sans">
                          No watermarks, no messy artifacts, and no bloated
                          classes. Get semantic code that looks perfectly
                          hand-crafted.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-white/10 border-t mt-8 pt-6 [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight text-white font-manrope font-semibold" data-target="99">
                        99.9%
                      </span>
<span className="text-sm text-neutral-400"></span>
</div>
<p className="text-xs text-neutral-400 font-sans">
                      Included CDN uptime guarantee
                    </p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="">
<div className="flex items-baseline gap-2" data-target="100">
                      100%
                    </div>
<p className="text-xs text-neutral-400 font-sans">
                      Code ownership and freedom
                    </p>
</div>
</div>
</div>
</div>
<div className="border-white/10 border-t mt-8 pt-6 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll">
<style>
                .btn-purple-border {
                  box-shadow: 0 0 0 2px #7e22ce !important;
                }
                .btn-purple-border:active {
                  box-shadow: 0 0 0 4px #7e22ce !important;
                }
                .btn-purple-border:hover {
                  box-shadow: 0 0 0 12px transparent !important;
                }
              </style>
<a className="glitch-btn inline-flex items-center justify-center transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative px-8 py-3 w-full sm:w-auto" href="#">
<span className="relative z-10">Start Building With Oktal AI</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10">
<div className="mx-auto max-w-7xl px-4 pt-10 pb-8 md:px-6 md:pt-16">
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-manrope text-center">
          Oktal AI Website Builder
        </h2>
<div className="flex flex-col text-center mb-12 px-2 items-center">
          Oktal is a visual builder that lets you design, collaborate, and
          publish in one place. No code required unless you want it.
        </div>
</div>

<div className="-mb-8 max-w-7xl md:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="relative w-full overflow-hidden shadow-black/50 bg-gradient-to-b from-white/[0.04] to-white/[0.02] border-white/10 border rounded-2xl mr-auto ml-auto shadow-2xl backdrop-blur-lg">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 sm:flex">
<svg aria-hidden="true" className="lucide lucide-layout-panel-left h-3.5 w-3.5 text-slate-200" data-lucide="layout-panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect></svg>
                Oktal Studio — Project: Aurora
              </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex">
<svg aria-hidden="true" className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex">
<svg aria-hidden="true" className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
<button className="rounded-md bg-sky-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">
                Publish
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg aria-hidden="true" className="lucide lucide-panel-left h-3.5 w-3.5" data-lucide="panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
                  Outline
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="space-y-1 text-slate-300">
<div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-laptop h-4 w-4 text-sky-400" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
<span className="text-xs font-medium">Desktop — 1200</span>
</div>
<span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">
                      Primary
                    </span>
</div>
<ul className="space-y-1 pl-6 text-xs">
<li className="flex items-center gap-2 rounded-md bg-sky-500/10 px-2 py-1">
<svg aria-hidden="true" className="lucide lucide-layers h-3.5 w-3.5 text-sky-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                      Header
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg aria-hidden="true" className="lucide lucide-image h-3.5 w-3.5 text-purple-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                      Hero
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg aria-hidden="true" className="lucide lucide-grid h-3.5 w-3.5 text-emerald-400" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                      Features
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg aria-hidden="true" className="lucide lucide-credit-card h-3.5 w-3.5 text-amber-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                      Pricing
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg aria-hidden="true" className="lucide lucide-messages-square h-3.5 w-3.5 text-pink-400" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
                      Testimonials
                    </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
<div className="mb-1 flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-package h-4 w-4 text-indigo-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="text-xs font-medium">Assets</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0950426a-fd01-4dc5-a916-33b7c3a94646_320w.jpg"/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/859fc099-059b-4ec4-b0f1-06e736a8bdf4_320w.jpg"/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f17ac654-630a-4fb6-ae2e-e2c4a8fe9274_320w.jpg"/>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<svg aria-hidden="true" className="lucide lucide-monitor-smartphone h-4 w-4 text-sky-400" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
<span className="">Breakpoint</span>
<span className="rounded-md bg-white/5 px-1.5 py-0.5">Desktop</span>
<span className="text-slate-500">|</span>
<span>1200</span>
<div className="ml-auto flex items-center gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-undo-2 h-4 w-4" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg>
</button>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-redo-2 h-4 w-4" data-lucide="redo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 14 5-5-5-5"></path><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg>
</button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-white/10">
<img alt="" className="h-[360px] w-full object-cover sm:h-[460px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fb3eba2-d3b1-4a3c-9feb-29a0b47b70c6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="max-w-xl rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                      A limitless generative engine outputting clean, semantic
                      WordPress code ready for immediate use and easy editing.
                    </div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-6 right-4 hidden w-64 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur lg:block">
<div className="rounded-lg border border-white/10 bg-black/50 p-2">
<div className="aspect-[9/16] overflow-hidden rounded-md">
<img alt="" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e080ec8d-304b-41cc-a8e7-c2b6efc8ab07_800w.jpg"/>
</div>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
<span className="inline-flex items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-smartphone h-3 w-3" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                        Mobile 390
                      </span>
<span className="rounded bg-white/5 px-1 py-0.5">
                        Preview
                      </span>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 border-l border-white/10 bg-black/30 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg aria-hidden="true" className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                  Properties
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-3">
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Position</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
                      Relative
                    </span>
</div>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-align-start-vertical mr-1 inline h-3.5 w-3.5" data-lucide="align-start-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="9" x="6" y="14"></rect><rect height="6" rx="2" width="16" x="6" y="4"></rect><path d="M2 2v20"></path></svg>
                      Top
                    </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-align-center-vertical mr-1 inline h-3.5 w-3.5" data-lucide="align-center-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"></path><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"></path><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"></path><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"></path></svg>
                      Center
                    </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10">
<svg aria-hidden="true" className="lucide lucide-align-end-vertical mr-1 inline h-3.5 w-3.5" data-lucide="align-end-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="16" x="2" y="4"></rect><rect height="6" rx="2" width="9" x="9" y="14"></rect><path d="M22 22V2"></path></svg>
                      Bottom
                    </button>
</div>
</div>
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-medium">Size</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
                      Auto
                    </span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px]">
<div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">
                      W: 1200
                    </div>
<div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">
                      H: Auto
                    </div>
</div>
<div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">
                      Fill
                    </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">
                      Fit
                    </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">
                      Fixed
                    </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">
                      Min
                    </button>
</div>
</div>
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Effects</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
                      3
                    </span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300">
<svg aria-hidden="true" className="lucide lucide-droplet w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="droplet" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(56, 189, 248)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
                        Blur
                      </span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">
                        8px
                      </span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300">
<svg aria-hidden="true" className="lucide lucide-sun h-3.5 w-3.5 text-amber-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                        Glow
                      </span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">
                        20%
                      </span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300">
<svg aria-hidden="true" className="lucide lucide-layers h-3.5 w-3.5 text-purple-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        Blend
                      </span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">
                        Overlay
                      </span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#050505] pt-32 pb-32 relative">
<style>
        .logic-grid {
          background-image:
            linear-gradient(rgba(129, 140, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129, 140, 248, 0.03) 1px, transparent 1px);
          background-size: 120px 120px;
          mask-image: radial-gradient(circle at center, black 35%, transparent 95%);
          -webkit-mask-image: radial-gradient(circle at center, black 35%, transparent 95%);
        }

        .logic-line-bg {
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 2;
          stroke-dasharray: 4 6;
        }

        .logic-line-progress {
          stroke: #818cf8;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          filter: drop-shadow(0 0 8px rgba(129, 140, 248, 0.6));
          transition: stroke-dashoffset 0.8s ease;
        }

        .logic-step {
          opacity: 0.35;
          transform: translateY(30px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .logic-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .logic-node {
          transition:
            border-color 0.5s ease,
            box-shadow 0.5s ease,
            background 0.5s ease,
            transform 0.5s ease;
        }

        .logic-step.is-visible .logic-node {
          border-color: rgba(129, 140, 248, 0.42);
          box-shadow:
            0 0 0 1px rgba(129, 140, 248, 0.08),
            0 0 24px rgba(129, 140, 248, 0.08),
            inset 0 0 30px rgba(129, 140, 248, 0.04);
          background:
            radial-gradient(circle at center, rgba(129, 140, 248, 0.08), rgba(5, 5, 5, 1) 70%);
          transform: scale(1.03);
        }

        .logic-step.is-visible .logic-card {
          border-color: rgba(129, 140, 248, 0.14);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.02),
            0 0 0 1px rgba(129, 140, 248, 0.02),
            0 18px 60px rgba(0, 0, 0, 0.24);
        }

        .logic-step.is-visible .logic-accent {
          opacity: 1;
          transform: scaleX(1);
        }

        .logic-card {
          position: relative;
          overflow: hidden;
          transition:
            border-color 0.5s ease,
            box-shadow 0.5s ease,
            opacity 0.5s ease,
            transform 0.5s ease;
        }

        .logic-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg,
              transparent 0%,
              rgba(129, 140, 248, 0.05) 50%,
              transparent 100%);
          transform: translateX(-130%);
          transition: transform 0.9s ease;
          pointer-events: none;
        }

        .logic-step.is-visible .logic-card::after {
          transform: translateX(130%);
        }

        .logic-accent {
          opacity: 0;
          transform: scaleX(0.3);
          transform-origin: left;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .logic-bars span {
          transform-origin: left center;
          animation: logicBarPulse 2.6s ease-in-out infinite;
        }

        .logic-bars span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .logic-bars span:nth-child(3) {
          animation-delay: 0.3s;
        }

        .logic-squares div {
          animation: logicSquarePulse 2.8s ease-in-out infinite;
        }

        .logic-squares div:nth-child(2) {
          animation-delay: 0.2s;
        }

        .logic-squares div:nth-child(3) {
          animation-delay: 0.4s;
        }

        .logic-wave span {
          animation: logicWave 1.8s ease-in-out infinite;
          transform-origin: bottom;
        }

        .logic-wave span:nth-child(2) {
          animation-delay: 0.12s;
        }

        .logic-wave span:nth-child(3) {
          animation-delay: 0.24s;
        }

        .logic-wave span:nth-child(4) {
          animation-delay: 0.36s;
        }

        .logic-wave span:nth-child(5) {
          animation-delay: 0.48s;
        }

        .logic-orbit::before,
        .logic-orbit::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(129, 140, 248, 0.12);
          border-radius: 9999px;
          inset: 18px;
        }

        .logic-orbit::after {
          inset: 28px;
          border-color: rgba(255, 255, 255, 0.06);
        }

        .logic-orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #818cf8;
          box-shadow: 0 0 14px rgba(129, 140, 248, 0.5);
          top: 50%;
          left: 50%;
          margin-top: -4px;
          margin-left: -4px;
          animation: logicOrbit 5s linear infinite;
        }

        .logic-orbit-dot.delay-1 {
          animation-delay: -1.6s;
        }

        .logic-orbit-dot.delay-2 {
          animation-delay: -3.2s;
        }

        @keyframes logicBarPulse {

          0%,
          100% {
            opacity: 0.28;
            transform: scaleX(0.55);
          }

          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes logicSquarePulse {

          0%,
          100% {
            opacity: 0.35;
            transform: translateY(0) scale(1);
            border-color: rgba(255, 255, 255, 0.14);
          }

          50% {
            opacity: 1;
            transform: translateY(-2px) scale(1.03);
            border-color: rgba(129, 140, 248, 0.35);
          }
        }

        @keyframes logicWave {

          0%,
          100% {
            transform: scaleY(0.45);
            opacity: 0.35;
          }

          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes logicOrbit {
          0% {
            transform: rotate(0deg) translateX(34px) rotate(0deg);
          }

          100% {
            transform: rotate(360deg) translateX(34px) rotate(-360deg);
          }
        }
      </style>
<div className="logic-grid absolute inset-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.06),transparent_55%)] pointer-events-none"></div>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-manrope text-center">The Engine Behind Oktal AI</h2><div className="max-w-3xl mx-auto px-6 text-center mb-24 relative z-10">Watch our multi-model engine transform your raw vision into a live WordPress site and production-ready assets in four autonomous steps.</div><div className="z-10 max-w-5xl mx-auto px-6 relative">

<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-20 -translate-x-1/2 pointer-events-none flex justify-center">
<svg className="absolute inset-y-0 left-1/2 -translate-x-1/2 overflow-visible" height="100%" width="2">
<line className="logic-line-bg" x1="1" x2="1" y1="0" y2="100%"></line>
<line className="logic-line-progress" id="logic-process-line" pathlength="1" style={{strokeDashoffset: '1', stroke: '#22d3ee', filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.8))'}} x1="1" x2="1" y1="0" y2="100%"></line>
</svg>
</div>
<div className="space-y-28 md:space-y-32 relative" id="logic-steps">

<div className="logic-step flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 relative min-h-[170px]" data-step="1">
<div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 pl-20 md:pl-0">
              Describe your vision. Our multi-model engine parses your exact
              intent, industry, and style requirements.
            </div>
<div className="absolute left-0 md:left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
<div className="logic-node w-20 h-20 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-xs font-mono text-white/70">01</span>
</div>
</div>
<div className="md:w-5/12 pl-20 md:pl-12 transition-all duration-500">
<div className="logic-card h-24 bg-[#111] border border-white/5 rounded-xl p-4 flex items-center gap-4">
<iconify-icon className="text-2xl text-indigo-400/60" icon="solar:document-text-linear"></iconify-icon>
<div className="space-y-2 w-full">
<div className="logic-accent h-px bg-gradient-to-r from-indigo-400 to-transparent w-full rounded-full"></div>
<div className="logic-bars space-y-2">
<span className="block h-1 bg-white/10 rounded w-full"></span>
<span className="block h-1 bg-white/10 rounded w-3/4"></span>
<span className="block h-1 bg-indigo-400/20 rounded w-1/2"></span>
</div>
</div>
</div>
</div>
</div>

<div className="logic-step flex flex-col md:flex-row-reverse items-start md:items-center justify-between gap-8 md:gap-0 relative min-h-[170px]" data-step="2">
<div className="md:w-5/12 text-left pl-20 md:pl-12">
              The system simultaneously delegates layout, code generation, and
              copy to the best AI models for the job.
            </div>
<div className="absolute left-0 md:left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
<div className="logic-node w-20 h-20 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-xs font-mono text-white/70">02</span>
</div>
</div>
<div className="md:w-5/12 pr-0 md:pr-12 pl-20 md:pl-0 transition-all duration-500">
<div className="logic-card h-24 bg-[#111] border border-white/5 rounded-xl p-4 flex items-center justify-center gap-3">
<div className="logic-squares flex items-center gap-3">
<div className="w-8 h-8 rounded border border-white/20 bg-white/5"></div>
<div className="w-8 h-8 rounded border border-indigo-400/20 bg-indigo-400/10"></div>
<div className="w-8 h-8 rounded border border-white/20 bg-white/5"></div>
</div>
</div>
</div>
</div>

<div className="logic-step flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 relative min-h-[170px]" data-step="3">
<div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 pl-20 md:pl-0">
              Your custom, fully-owned WordPress site is compiled, polished, and
              pushed live on our included premium hosting.
            </div>
<div className="absolute left-0 md:left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
<div className="logic-node w-20 h-20 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-xs font-mono text-white/70">03</span>
</div>
</div>
<div className="md:w-5/12 pl-20 md:pl-12">
<div className="logic-card h-24 bg-[#111] border border-white/5 rounded-xl p-4 flex items-center justify-center">
<div className="logic-wave flex items-end gap-1.5 h-10">
<span className="block w-2 h-4 rounded-full bg-white/20"></span>
<span className="block w-2 h-8 rounded-full bg-indigo-400/50"></span>
<span className="block w-2 h-6 rounded-full bg-white/25"></span>
<span className="block w-2 h-9 rounded-full bg-indigo-400/30"></span>
<span className="block w-2 h-5 rounded-full bg-white/15"></span>
</div>
</div>
</div>
</div>


<div className="logic-step flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 relative min-h-[170px]" data-step="5">
<div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 pl-20 md:pl-0">
<h3 className="text-xl font-semibold text-white tracking-tight mb-2 font-manrope">
                Materialization
              </h3>
<p className="text-xs text-white/50 font-light leading-relaxed font-sans">
                Output production-ready assets across all formats. Vectors,
                layered files, and high-fidelity renders delivered instantly.
              </p>
</div>
<div className="absolute left-0 md:left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
<div className="logic-node w-20 h-20 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-xs font-mono text-white/70">04</span>
</div>
</div>
<div className="md:w-5/12 pl-20 md:pl-12">
<div className="logic-card h-24 bg-gradient-to-br from-[#0e1610] to-[#111] border border-white/10 rounded-xl p-4 flex items-center justify-center">
<div className="logic-accent absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
<span className="text-[10px] font-medium tracking-widest uppercase text-white font-sans">
                  Campaign_Ready.zip
                </span>
</div>
</div>
</div>
</div>
</div>

</section>

<header className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
<div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="animate-fade-slide-left delay-100 flex items-center gap-3">
<div className="gradient-border">
<div className="gradient-border-inner px-4 py-2">
<span className="text-xs font-medium tracking-wider text-lime-300 uppercase flex items-center gap-2">
                  DONE-FOR-YOU SERVICE
                </span>
</div>
</div>
<div className="h-px bg-gradient-to-r from-lime-300/50 to-transparent flex-1"></div>
</div>
<h1 className="animate-fade-slide-left delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.9] tracking-tight text-white">
            Building is as simple as lifting a finger. If you'd rather not, we
            are here.
          </h1>
</div>
<div className="lg:col-span-5 space-y-6 lg:space-y-8">
<div className="animate-fade-slide-right delay-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<p className="text-neutral-300 leading-relaxed text-sm sm:text-base mb-4">
              Oktal AI makes generating your website effortless, but we know
              your time is valuable. Hand the keys to our expert team at
              Digitize HQ. We will design, build, and deploy a fully customized,
              high-converting digital presence for you, so you truly don't have
              to lift a single finger.
            </p>
<details className="text-neutral-400 text-sm leading-relaxed">
<summary className="cursor-pointer font-medium mb-2 select-none hover:text-lime-300 transition-colors">
                How our agency works
              </summary>
<p className="mt-2">
                Explore the latest trends in artificial intelligence, blockchain
                innovation, cybersecurity advancements, and the expanding
                Internet of Things ecosystem.
              </p>
</details>
</div>
<div className="animate-fade-slide-right delay-400 flex flex-col sm:flex-row gap-4">
<button className="glitch-btn inline-flex items-center justify-center transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative px-8 py-3">
<span className="relative z-10 flex items-center gap-3">
<span className="">Hire Digitize</span>
<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</button>
<button className="glitch-btn inline-flex items-center justify-center transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative px-8 py-3">
<span className="relative z-10 flex items-center gap-3">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
</svg>
<span className="">View Agency Portfolio</span>
</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</button>
</div>
</div>
</div>
</header>
<section className="mt-24 mb-24 relative"></section>
<section className="overflow-hidden bg-[#02040A] pt-32 pb-40 relative" id="access">
<style>
        #access.is-visible .core-node {
          opacity: 1;
          transform: scale(1);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        #access:not(.is-visible) .core-node {
          opacity: 0;
          transform: scale(0.8);
        }

        #access.is-visible .connection-lines {
          opacity: 1;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        #access:not(.is-visible) .connection-lines {
          opacity: 0;
        }

        #access.is-visible .module-card {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        #access:not(.is-visible) .module-card {
          opacity: 0;
          transform: translateY(40px);
        }

        #access.is-visible .module-card.card-1 {
          transition-delay: 0.6s;
        }

        #access.is-visible .module-card.card-2 {
          transition-delay: 0.8s;
        }

        #access.is-visible .module-card.card-3 {
          transition-delay: 1s;
        }

        #access.is-visible .module-card.card-4 {
          transition-delay: 1.2s;
        }

        #access .module-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }

        #access.is-visible .module-line {
          animation: drawLine 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        .module-card:hover .top-node-point {
          background-color: #fff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          border-color: #fff;
          transform: scale(1.2);
        }

        .core-glow {
          transition: all 0.5s ease;
        }

        .module-card:hover~.desktop-architecture .core-container .core-glow {
          opacity: 0.8;
          filter: blur(50px);
          transform: scale(1.1);
        }

        /* Billing Toggle Pulse Animations */
        @keyframes modeSwitchCore {
          0% {
            transform: scale(1);
            box-shadow: 0 0 40px rgba(255, 255, 255, 1);
          }

          20% {
            transform: scale(1.15);
            box-shadow: 0 0 80px rgba(255, 255, 255, 1), inset 0 0 20px #fff;
            background: #fff;
          }

          100% {
            transform: scale(1);
            box-shadow: 0 0 40px rgba(255, 255, 255, 1);
          }
        }

        @keyframes modeSwitchLine {
          0% {
            stroke: rgba(255, 255, 255, 0.15);
            filter: drop-shadow(0 0 0px #fff);
            stroke-width: 1.5;
          }

          20% {
            stroke: rgba(255, 255, 255, 1);
            filter: drop-shadow(0 0 12px #fff);
            stroke-width: 2.5;
          }

          100% {
            stroke: rgba(255, 255, 255, 0.15);
            filter: drop-shadow(0 0 0px #fff);
            stroke-width: 1.5;
          }
        }

        @keyframes centerLinePulse {
          0% {
            stroke: rgba(255, 255, 255, 0.28);
            filter: drop-shadow(0 0 0px #fff);
            stroke-width: 2;
          }

          20% {
            stroke: rgba(255, 255, 255, 1);
            filter: drop-shadow(0 0 12px #fff);
            stroke-width: 3.5;
          }

          100% {
            stroke: rgba(255, 255, 255, 0.28);
            filter: drop-shadow(0 0 0px #fff);
            stroke-width: 2;
          }
        }

        .mode-switch-active .core-node {
          animation: modeSwitchCore 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mode-switch-active .module-line:not(.center-line) {
          animation: modeSwitchLine 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mode-switch-active .center-line {
          animation: centerLinePulse 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      </style>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-7xl relative z-10">

<div className="text-center relative z-20 mb-8">
<div className="inline-flex uppercase text-[10px] font-semibold text-gray-400 tracking-widest bg-white/5 border border-white/10 rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            System Access Tiers
          </div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Pricing
          </h2>
<p className="text-gray-400 max-w-xl mx-auto font-light">
            Select the infrastructure layer matching your scale. Seamless
            upgrades, instant network propagation.
          </p>
</div>

<div className="flex justify-center relative z-20 mb-10">
<div className="relative flex items-center p-1.5 bg-[#060913]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.03)]">

<div className="absolute left-1.5 top-1.5 bottom-1.5 w-[100px] bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="billing-slider"></div>

<button className="relative z-10 w-[100px] h-9 flex items-center justify-center text-sm font-medium text-white transition-colors duration-300" id="btn-monthly">
              Monthly
            </button>
<button className="relative z-10 w-[140px] h-9 flex items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors duration-300" id="btn-yearly">
              Yearly
              <span className="ml-2 text-[9px] font-mono tracking-widest text-white/60 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-full">
                SAVE 20%
              </span>
</button>
</div>
</div>
<div className="relative w-full mx-auto mt-12 md:mt-24">

<div className="desktop-architecture absolute inset-0 pointer-events-none z-0 hidden lg:block">

<div className="core-container absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 z-10">
<div className="absolute inset-0 bg-white/20 rounded-full blur-[40px] core-glow"></div>
<div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" style={{borderStyle: 'dashed'}}></div>
<div className="absolute inset-6 border border-white/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{borderStyle: 'dotted'}}></div>
<div className="absolute inset-[38px] bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,1)] core-node"></div>
<div className="absolute inset-0 animate-spin-slow">
<div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
</div>
</div>


<svg className="absolute top-[3.25rem] left-0 w-full h-[14rem] z-0 connection-lines" preserveaspectratio="none" viewbox="0 0 1200 260">

<path className="module-line" d="M 600 0 C 600 92, 150 92, 150 220" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<circle fill="#fff" filter="drop-shadow(0 0 4px #fff)" r="2.5">
<animatemotion dur="2.5s" path="M 600 0 C 600 92, 150 92, 150 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<path className="module-line center-line" d="M 600 0 C 600 100, 450 100, 450 220" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2"></path>
<circle fill="#fff" filter="drop-shadow(0 0 5px #fff)" r="3">
<animatemotion dur="2s" path="M 600 0 C 600 100, 450 100, 450 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<path className="module-line center-line" d="M 600 0 C 600 100, 750 100, 750 220" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2"></path>
<circle fill="#fff" filter="drop-shadow(0 0 5px #fff)" r="3">
<animatemotion dur="2.2s" path="M 600 0 C 600 100, 750 100, 750 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.2s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<path className="module-line" d="M 600 0 C 600 92, 1050 92, 1050 220" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<circle fill="#fff" filter="drop-shadow(0 0 4px #fff)" r="2.5">
<animatemotion dur="2.8s" path="M 600 0 C 600 92, 1050 92, 1050 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.8s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<circle cx="150" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"></circle>
<circle cx="450" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"></circle>
<circle cx="750" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"></circle>
<circle cx="1050" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-4 lg:pt-[16rem] items-start">

<div className="relative group module-card card-1 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform">
<div className="absolute inset-0 bg-white/5 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:blur-2xl"></div>
<div className="relative h-full glass-panel bg-[#060913]/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 transition-colors duration-500 group-hover:border-white/30 flex flex-col z-10">
<div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#060913] border border-white/30 rounded-full transition-all duration-300 top-node-point"></div>
<h3 className="font-display text-lg font-semibold text-white mb-2 tracking-tight">
                  Node
                </h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-xl text-gray-500">$</span>
<span className="text-3xl text-white font-light tracking-tight price-count" data-monthly="10" data-target="10" data-yearly="8">
                    0
                  </span>
<span className="text-xs text-gray-500 ml-1 billing-cycle-label">
                    /mo
                  </span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Includes Premium Hosting
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    WordPress Generation
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Exportable Source Code
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Invisible AI Footprint
                  </li>
</ul>
<button className="glitch-btn inline-flex items-center justify-center w-full transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative py-3">
<span className="relative z-10">Initialize Node</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</button>
</div>
</div>

<div className="relative group module-card card-2 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform lg:-translate-y-4 z-10">
<div className="absolute inset-0 bg-white/5 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:blur-2xl"></div>
<div className="relative h-full glass-panel bg-[#060913]/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 transition-colors duration-500 group-hover:border-white/30 flex flex-col z-10">
<div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#060913] border border-white/30 rounded-full transition-all duration-300 top-node-point"></div>
<h3 className="font-display text-lg font-semibold text-white mb-2 tracking-tight">
                  Instance
                </h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-xl text-gray-500">$</span>
<span className="text-3xl text-white font-light tracking-tight price-count" data-monthly="99" data-target="99" data-yearly="79">
                    0
                  </span>
<span className="text-xs text-gray-500 ml-1 billing-cycle-label">
                    /mo
                  </span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    500k API Calls
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Fast Cache
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Advanced Routing
                  </li>
</ul>
<button className="glitch-btn inline-flex items-center justify-center w-full transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative py-3">
<span className="relative z-10">Initialize Instance</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</button>
</div>
</div>

<div className="relative group module-card card-3 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform lg:-translate-y-6 z-20">
<div className="absolute inset-[-30px] rounded-full bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,0.15)_360deg)] animate-spin-slow opacity-40 blur-[30px] z-0 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/20 group-hover:blur-2xl"></div>
<div className="transition-colors duration-500 group-hover:border-white/50 flex flex-col bg-[#060913]/90 h-full z-10 border-white/20 border rounded-[2rem] p-6 relative shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-2xl">
<div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white/20 border border-white/80 rounded-full transition-all duration-300 top-node-point shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-b-lg shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
                  Optimal Layer
                </div>
<h3 className="font-display text-xl font-semibold text-white mb-2 tracking-tight mt-3">
                  Cluster
                </h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-xl text-gray-400">$</span>
<span className="text-4xl text-white font-semibold tracking-tight price-count" data-monthly="149" data-target="149" data-yearly="119">
                    0
                  </span>
<span className="text-xs text-gray-500 ml-1 billing-cycle-label">
                    /mo
                  </span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-200">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                    1M API Calls
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-200">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                    Deep Memory Cache
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-200">
<div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
                    Neural Engine
                  </li>
</ul>
<button className="glitch-btn inline-flex items-center justify-center w-full transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-black bg-white hover:bg-transparent hover:text-white border-transparent border rounded-md relative py-3">
<span className="relative z-10">Deploy Cluster</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</button>
</div>
</div>

<div className="relative group module-card card-4 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform">
<div className="absolute inset-0 bg-white/5 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:blur-2xl"></div>
<div className="relative h-full glass-panel bg-[#060913]/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 transition-colors duration-500 group-hover:border-white/30 flex flex-col z-10">
<div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#060913] border border-white/30 rounded-full transition-all duration-300 top-node-point"></div>
<h3 className="font-display text-lg font-semibold text-white mb-2 tracking-tight">
                  Nebula
                </h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl text-white font-light tracking-tight mt-1">
                    Custom
                  </span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Unlimited Routing
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Custom Topology
                  </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                    Dedicated Architect
                  </li>
</ul>
<button className="glitch-btn inline-flex items-center justify-center w-full transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md relative py-3">
<span className="relative z-10">Contact Team</span>
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-md z-0">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88,28,135,0.35) 0%, rgba(24,24,32,0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 z-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
</button>
</div>
</div>
</div>
</div>

</div>
</section>
<footer className="max-w-7xl sm:px-6 sm:mt-10 mt-8 mr-auto mb-16 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<h2 className="text-[16vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter font-geist">
<span className="block">Ready to build</span>
<span className="block text-white/60">something extraordinary?</span>
</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="">
<p className="text-sm text-white/60 font-geist">Get Started</p>
<a className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-white font-geist" href="mailto:hello@oktalai.com">
<svg aria-hidden="true" className="lucide lucide-mail w-5 h-5 stroke-[1.5] flex-shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="break-all">hello@oktalai.com</span>
</a>
</div>


<div className="">
<p className="text-sm text-white/60 font-geist">Follow Along</p>
<div className="flex flex-wrap gap-3 mt-2 items-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 text-gray-900 bg-white border-white/10 border rounded-full hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-behance" data-lucide="behance" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path className="" d="m10 15 5-3-5-3z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="">
<p className="text-sm text-white/60 font-geist">Explore</p>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline font-geist" href="#work">
                  Our Work
                </a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#services">
                  What We Do
                </a>
<a className="font-medium tracking-tight hover:underline font-geist" href="/www.digitizehq.com">Digitize HQ</a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#blog">
                  Insights
                </a>
</div>
</div>

<div className="">
<p className="text-sm text-white/60 font-geist">Fine Print</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline font-geist" href="#">
                  Terms &amp; Conditions
                </a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#">
                  Privacy Notice
                </a>
</div>
</div>
</div>
<p className="mt-6 text-center text-xs text-white/70 font-geist">
            ©
            <span id="year">2026</span>
            Digitize Jamaica Limited — Crafted with care in the Tropics
          </p>
</div>
</div>
</footer>




    </>
  );
}
