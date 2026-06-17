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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



            document.querySelectorAll('svg[data-orbit]').forEach(svg => {
              const val = Number(svg.getAttribute('value') || 0);           // 0..100
              const suffix = svg.getAttribute('data-suffix') || '';         // e.g. "%"
              const label = svg.getAttribute('data-label') || 'PERFORMANCE';

              const r = 78;                                                 // must match arc r
              const C = 2 * Math.PI * r;
              const arc = svg.querySelector('[data-arc]');
              arc.setAttribute('stroke-dasharray', C.toFixed(2));
              arc.setAttribute('stroke-dashoffset', C.toFixed(2));
              // animate
              requestAnimationFrame(() => {
                arc.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.22,.9,.2,1)';
                arc.setAttribute('stroke-dashoffset', ((100 - val) / 100 * C).toFixed(2));
              });

              // cap position at arc end
              const cap = svg.querySelector('[data-cap]');
              const endAngle = -Math.PI / 2 + (val / 100) * 2 * Math.PI;   // starts at top
              const cx = 100 + r * Math.cos(endAngle);
              const cy = 100 + r * Math.sin(endAngle);
              cap.setAttribute('cx', cx.toFixed(2));
              cap.setAttribute('cy', cy.toFixed(2));

              // center number
              const valueSpan = svg.parentElement.querySelector('[data-value]');
              if (valueSpan) valueSpan.textContent = val + suffix;

              // radial label text (optional)
              svg.querySelectorAll('tspan[data-label]').forEach(n => n.textContent = label);
            });
          


                document.querySelectorAll('svg[data-orbit]').forEach(svg => {
                  const val = Number(svg.getAttribute('value') || 0);
                  const r = 78;
                  const C = 2 * Math.PI * r;
                  const arc = svg.querySelector('[data-arc]');
                  arc.setAttribute('stroke-dasharray', C.toFixed(2));
                  arc.setAttribute('stroke-dashoffset', C.toFixed(2));
                  requestAnimationFrame(() => {
                    arc.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.22,.9,.2,1)';
                    arc.setAttribute('stroke-dashoffset', ((100 - val) / 100 * C).toFixed(2));
                  });

                  const cap = svg.querySelector('[data-cap]');
                  const endAngle = -Math.PI / 2 + (val / 100) * 2 * Math.PI;
                  const cx = 100 + r * Math.cos(endAngle);
                  const cy = 100 + r * Math.sin(endAngle);
                  cap.setAttribute('cx', cx.toFixed(2));
                  cap.setAttribute('cy', cy.toFixed(2));

                  const valueSpan = svg.parentElement.querySelector('[data-value]');
                  if (valueSpan) valueSpan.textContent = val;
                });
              


        (function() {
          const sections = [
            { heading: '[data-heading="1"]', text: '[data-text="1"]', panel: '[data-panel="1"]', section: '[data-section="1"]' },
            { heading: '[data-heading="2"]', text: '[data-text="2"]', panel: '[data-panel="2"]', section: '[data-section="2"]' },
            { heading: '[data-heading="3"]', text: '[data-text="3"]', panel: '[data-panel="3"]', section: '[data-section="3"]' }
          ];

          let currentIndex = 0;
          let ticking = false;

          function updateActiveSection() {
            sections.forEach((sec, idx) => {
              const panel = document.querySelector(sec.panel);
              const section = document.querySelector(sec.section);
              const heading = document.querySelector(sec.heading);
              const text = document.querySelector(sec.text);

              if (!panel || !section) return;

              const rect = panel.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const isActive = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;

              if (isActive && idx !== currentIndex) {
                currentIndex = idx;

                sections.forEach((s, i) => {
                  const sectionEl = document.querySelector(s.section);
                  const headingEl = document.querySelector(s.heading);
                  const textEl = document.querySelector(s.text);

                  if (i === idx) {
                    sectionEl.style.opacity = '1';
                    if (headingEl) {
                      headingEl.classList.remove('text-white/60', 'text-white/80');
                      headingEl.classList.add('text-white');
                    }
                    if (textEl) {
                      textEl.classList.remove('text-white/60');
                      textEl.classList.add('text-white/90');
                    }
                  } else {
                    sectionEl.style.opacity = '0.6';
                    if (headingEl) {
                      headingEl.classList.remove('text-white');
                      headingEl.classList.add('text-white/60');
                    }
                    if (textEl) {
                      textEl.classList.remove('text-white/90');
                      textEl.classList.add('text-white/60');
                    }
                  }
                });
              }
            });
          }

          function onScroll() {
            if (!ticking) {
              window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
              });
              ticking = true;
            }
          }

          window.addEventListener('scroll', onScroll, { passive: true });
          updateActiveSection();
        })();
      


    (function() {
      // Initialize Lucide Icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }

      // Intersection Observer for slide-in animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const delay = target.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
              target.classList.remove('opacity-0', 'translate-y-12');
              target.classList.add('opacity-100', 'translate-y-0');
            }, parseInt(delay));
            
            observer.unobserve(target);
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('[data-animate-item]').forEach(item => {
        observer.observe(item);
      });
    })();
  


      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-animate-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
      });

      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    


      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              
              if (el.hasAttribute("data-animate-number")) {
                const target = parseInt(el.getAttribute("data-animate-number"));
                const suffix = el.getAttribute("data-suffix") || "";
                const prefix = el.getAttribute("data-prefix") || "";
                const duration = 2000;
                const start = 0;
                const startTime = performance.now();
                
                const step = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 3);
                  const current = Math.floor(start + (target - start) * ease);
                  el.textContent = `${prefix}${current}${suffix}`;
                  if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
                observer.unobserve(el);
              }
              
              if (el.hasAttribute("data-animate-width")) {
                setTimeout(() => {
                  el.style.width = el.getAttribute("data-animate-width");
                }, 200);
                observer.unobserve(el);
              }

              if (el.hasAttribute("data-animate-code")) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                observer.unobserve(el);
              }
            }
          });
        }, { threshold: 0.2 });

        document.querySelectorAll("[data-animate-number], [data-animate-width]").forEach(el => observer.observe(el));
        
        const codeBox = document.querySelector("[data-animate-code]");
        if (codeBox) {
            codeBox.style.opacity = "0";
            codeBox.style.transform = "translateY(10px)";
            codeBox.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            observer.observe(codeBox);
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-screen" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[rgba(60,130,255,0.15)] blur-[120px] sm:blur-[180px]"></div>
</div>

<div className="pointer-events-none absolute inset-0 opacity-25" style="
    --line: rgba(255,255,255,0.06);
    --vline: rgba(255,255,255,0.08);
    --gap: 260px;
    --thick: 1px;

    background-image:
      repeating-linear-gradient(
        45deg,
        var(--line) 0 var(--thick),
        transparent var(--thick) var(--gap)
      ),
      repeating-linear-gradient(
        135deg,
        var(--line) 0 var(--thick),
        transparent var(--thick) var(--gap)
      ),
      linear-gradient(
        to right,
        transparent calc(50% - var(--thick)/2),
        var(--vline)   calc(50% - var(--thick)/2) calc(50% + var(--thick)/2),
        transparent    calc(50% + var(--thick)/2)
      );

    background-size:
      100% 100%,
      100% 100%,
      var(--gap) 100%;
    background-position:
      center, center, center;
    background-repeat:
      no-repeat, no-repeat, repeat;
  "></div>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_35%,transparent_0%,transparent_55%,rgba(0,0,0,0.7)_100%)]"></div>

<header className="fixed z-50 animated bg-black/50 w-full border-[#ffffff]/10 border rounded-none backdrop-blur-md" data-animate="">
<div className="flex sm:py-4 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2 sm:gap-3">
<span className="inline-grid place-items-center shadow-violet-700/30 hover:scale-105 transition-transform duration-300 cursor-pointer sm:w-12 sm:h-14 sm:pl-14 sm:pr-8 mix-blend-screen w-10 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86acc108-c8f9-4174-b099-16aadd42c157_320w.jpg)] max-w-sm bg-cover rounded-xl pr-8 pl-14 invert-0" onclick="window.location.href='/home'" role="button"></span>
</div>
<nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-sm text-white/70">
<a className="transition-colors duration-200 hover:text-white" href="/library">
        Library
      </a>
<a className="transition-colors duration-200 hover:text-white" href="/showcase">
        Showcase
      </a>
<a className="transition-colors duration-200 hover:text-white" href="/documentation">
        Documentation
      </a>
<a className="transition-colors duration-200 hover:text-white" href="/updates">
        Updates
      </a>
<a className="transition-colors duration-200 hover:text-white" href="/pricing">
        Pricing
      </a>
</nav>
<div className="hidden lg:flex items-center gap-3">
<a className="transition-colors duration-200 hover:text-white text-sm text-white/70" href="/log-in">
        Log in
      </a>
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[120px] lg:min-w-[140px] transition-colors duration-300 group-hover:bg-black/50 lg:pt-3 lg:pr-5 lg:pb-3 lg:pl-5 font-medium bg-black/80 w-full h-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4">
<span className="cursor-pointer" onclick="window.location.href='/sign-up'" role="button">Try it free</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
<button className="lg:hidden inline-flex transition-all duration-200 hover:bg-white/10 hover:ring-white/20 text-sm text-white/80 bg-white/5 rounded-md ring-white/10 ring-1 pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" id="menuBtn">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path className="" d="M4 12h16"></path>
<path className="" d="M4 19h16"></path>
</svg>
<span className="hidden sm:inline">Menu</span>
</button>
</div>
<div className="lg:hidden border-t border-white/10 bg-black/80 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-2">
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/library">
          Library
        </a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/showcase">
          Showcase
        </a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/documentation">
          Documentation
        </a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/updates">
          Updates
        </a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/pricing">
          Pricing
        </a>
<div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-white/10 mt-2">
<a className="flex-1 rounded-md bg-white/5 px-4 py-2.5 text-center text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-200" href="#">
            Log in
          </a>
<a className="flex-1 rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-4 py-2.5 text-center text-sm font-semibold tracking-tight text-white shadow-lg shadow-indigo-500/30 hover:scale-[1.02] transition-transform duration-200" href="#">
            Try it free
          </a>
</div>
</div>
</div>
</div>
</header>

<section className="sm:px-6 lg:px-8 sm:pt-40 z-0 lg:grid lg:grid-cols-2 lg:gap-12 max-w-7xl mr-auto ml-auto pt-32 pr-4 pl-4 relative items-center">
<div className="sm:space-y-6 text-left max-w-2xl mt-10 space-y-4 relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-sm backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer animated" data-animate="">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
</svg>
          Fresh update released today
          <svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<h1 className="bg-clip-text xl:font-medium sm:text-6xl lg:text-7xl animated text-5xl font-bold text-transparent text-left bg-gradient-to-r from-white via-white/90 to-white/30 tracking-tight pr-2 pl-0" data-animate="" data-animate-delay="100">
          Design faster. Stay intentional
        </h1>
<p className="sm:text-lg lg:text-xl animated text-base text-white/70 max-w-xl pr-4 pl-0" data-animate="" data-animate-delay="200">
          Create high-fidelity layouts with clear hierarchy, purposeful motion,
          and AI support where it matters.
        </p>
<div className="flex flex-col sm:flex-row sm:gap-y-6 px-0 gap-x-4 gap-y-4 items-start justify-start animated" data-animate="" data-animate-delay="300">
<button className="flex hover:bg-white/15 transition duration-300 border-gradient before:rounded-lg sm:pt-2 sm:pr-10 sm:pb-2 sm:pl-10 hover:scale-[1.02] sm:text-base sm:w-auto text-sm font-medium text-white tracking-wide bg-white/5 w-full border-white/5 border rounded-lg pt-2.5 pr-8 pb-2.5 pl-8 relative shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),_inset_0_-2px_6px_rgba(255,255,255,0.1),_0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center">
            START FREE TRIAL
            <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="sm:mt-0 mt-12 relative animated perspective-[2000px] w-full" data-animate="" data-animate-delay="400">
<div className="sm:rounded-2xl sm:p-3 hover:border-indigo-500/40 transition-all duration-1000 ease-out max-w-6xl border-white/10 border rounded-xl mr-auto ml-auto p-3 relative shadow-[0_20px_80px_-20px_rgba(99,102,241,0.4)] backdrop-blur-xl bg-white/5 hover:[transform:rotateY(-12deg)_rotateX(6deg)_scale(1.02)] transform-gpu origin-center">
<div className="ring-inset sm:rounded-xl sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 bg-white/5 ring-white/10 ring-1 rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl">
<div className="mb-3 sm:mb-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors duration-200 cursor-pointer"></span>
<span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors duration-200 cursor-pointer"></span>
<span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500/70 hover:bg-emerald-500 transition-colors duration-200 cursor-pointer"></span>
<span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-white/70">
                  Dashboard
                </span>
</div>
<div className="flex items-center gap-1.5 sm:gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200 backdrop-blur-md">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
</svg>
<input className="w-32 bg-transparent text-xs text-white/70 placeholder:text-white/40 focus:outline-none sm:w-40 lg:w-56" placeholder="Search workspace"/>
</div>
<button className="rounded-md bg-white/5 p-1.5 sm:p-2 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/10 hover:ring-white/20 backdrop-blur-md">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
</svg>
</button>
<img alt="avatar" className="ring-white/20 ring-1 w-6 h-6 sm:w-7 sm:h-7 object-cover rounded-full hover:ring-white/40 hover:scale-110 transition-all duration-300 cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pb-20 sm:pb-4">
<aside className="rounded-lg border border-white/10 bg-white/5 p-2.5 sm:p-3 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-2 text-xs font-medium text-white/60">
                  Workspace
                </div>
<div className="grid gap-1.5 sm:gap-2 text-xs sm:text-sm">
<button className="group flex items-center justify-between rounded-md px-2 py-1.5 sm:py-2 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
</svg>
                      Overview
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">
                      12
                    </span>
</button>
<button className="group flex items-center justify-between rounded-md px-2 py-1.5 sm:py-2 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                      Designs
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">
                      48
                    </span>
</button>
<button className="group flex items-center justify-between rounded-md px-2 py-1.5 sm:py-2 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
                      Analytics
                    </span>
<span className="rounded-full flex-none bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">
                      8
                    </span>
</button>
<button className="group flex transition-all duration-200 hover:bg-white/5 hover:text-white text-white/80 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-2 sm:pb-2 sm:pl-2 items-center justify-between">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
                      Preferences
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">
                      3
                    </span>
</button>
</div>
</aside>
<div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-x-3 gap-y-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-2 sm:mb-3 flex items-center justify-between">
<span className="text-xs font-medium text-white/60">
                      Recent Activity
                    </span>
<button className="rounded-md bg-white/5 px-2 py-1 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 backdrop-blur-md">
                      View All
                    </button>
</div>
<div className="grid gap-1.5 sm:gap-2">
<div className="flex items-center justify-between rounded-md bg-white/5 backdrop-blur-md px-2 py-1.5 sm:px-3 sm:py-2 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">
                        UI-3420
                      </div>
<div className="text-[10px] sm:text-xs text-white/60">
                        Design → Build
                      </div>
<div className="text-[10px] sm:text-xs text-emerald-400">
                        Done
                      </div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">
                        FE-1892
                      </div>
<div className="text-[10px] sm:text-xs text-white/60">
                        Code → Review
                      </div>
<div className="text-[10px] sm:text-xs text-yellow-300">
                        Active
                      </div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-3 sm:pb-2 sm:pl-3 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">
                        DS-5671
                      </div>
<div className="text-[10px] sm:text-xs text-white/60">
                        Test → Ship
                      </div>
<div className="text-[10px] sm:text-xs text-yellow-300 xl:text-[#e663f8]">
                        Review
                      </div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-3 sm:pb-2 sm:pl-3 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">
                        BR-7123
                      </div>
<div className="text-[10px] sm:text-xs text-white/60">
                        Monitor → Fix
                      </div>
<div className="text-[10px] sm:text-xs text-yellow-300 xl:text-[#6b40e2]">
                        Open
                      </div>
</div>
</div>
</div>
<div className="group overflow-hidden sm:p-4 ring-1 ring-white/10 hover:border-white/20 hover:from-white/[0.07] transition-all duration-300 bg-white/5 backdrop-blur-xl border-white/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 relative">
<div className="mb-2 sm:mb-3 flex items-center justify-between">
<i className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/60 group-hover:text-white/80 transition-colors duration-200" data-lucide="cube"></i>
<img alt="3D render" className="transition duration-700 hover:scale-[1.03] w-full h-full object-cover saturate-100 group-hover:saturate-[1.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab0b3891-bc36-4e1f-8314-71ee4161dd3d_3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="pointer-events-auto -bottom-16 sm:-bottom-8 left-0 sm:-left-4 sm:right-auto w-[calc(100%-2rem)] sm:w-[min(100%,340px)] sm:rounded-2xl sm:p-5 hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer text-white/90 bg-white/10 border-white/10 border ring-white/10 ring-1 rounded-lg absolute pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl shadow-md" data-animate="" data-animate-delay="300">
<div className="flex items-start justify-between">
<div className="">
<div className="sm:text-sm text-xs font-medium tracking-tight">
                      Interface Design Mastery
                    </div>
<p className="mt-1 text-[10px] sm:text-xs text-white/70">
                      Learn the core principles of building scalable design
                      systems that empower product teams and delight users.
                    </p>
</div>
<svg className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 flex-shrink-0 ml-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<div className="flex mt-2 sm:mt-3 items-center justify-between flex-wrap gap-2">
<div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-white/5 backdrop-blur-md px-2 py-1 text-[10px] sm:text-[11px] text-white/70 ring-1 ring-white/10">
<svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                    8 lessons
                  </div>
<button className="inline-flex shadow-indigo-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-indigo-500/50 text-[10px] sm:text-xs font-semibold text-white tracking-tight border-[#ffffff]/5 border rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5 sm:pt-1.5 sm:pr-3 sm:pb-1.5 sm:pl-3 backdrop-blur-lg gap-x-1.5 gap-y-1.5 items-center bg-white/5">
                    Start course
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-20 top-16 hidden sm:block">
<div className="relative flex items-center justify-center rounded-full bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">

<div className="size-28">
<div className="relative size-full">

<svg className="block size-full overflow-visible" data-label="PERFORMANCE" data-orbit="" value="98" viewbox="0 0 200 200">

<defs>

<filter height="200%" id="outerGlow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="6"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>

<filter height="200%" id="innerShadow" width="200%" x="-50%" y="-50%">
<feoffset dx="0" dy="2"></feoffset>
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="inner"></fecomposite>
<fecolormatrix in="inner" type="matrix" values="
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0.55 0"></fecolormatrix>
<fecomposite in="SourceGraphic"></fecomposite>
</filter>

<lineargradient id="arcGrad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#C8D5FF"></stop>
<stop offset="40%" stop-color="#7FB2FF"></stop>
<stop offset="100%" stop-color="#3A83FF"></stop>
</lineargradient>

<lineargradient id="bevel" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,.45)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,.06)"></stop>
</lineargradient>

<path d="M100,100 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" id="textCircleLarge"></path>
</defs>

<g filter="url(#innerShadow)">

<circle cx="100" cy="100" fill="none" r="84" stroke="url(#bevel)" strokeWidth="2"></circle>

<circle cx="100" cy="100" fill="none" r="94" stroke="rgba(255,255,255,.08)" strokeWidth="2"></circle>
</g>

<circle cx="100" cy="100" fill="none" r="92" stroke="rgba(190,200,220,.18)" stroke-dasharray="2 10" strokeWidth="2" transform="rotate(-90 100 100)"></circle>

<circle cx="100" cy="100" fill="none" r="78" stroke="rgba(255,255,255,.10)" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 100 100)"></circle>

<circle cx="100" cy="100" data-arc="" fill="none" r="78" stroke="url(#arcGrad)" stroke-dasharray="490.09" stroke-dashoffset="490.09" strokeLinecap="round" strokeWidth="10" style={{filter: 'url("#outerGlow")'}} transform="rotate(-90 100 100)"></circle>

<circle cx="90.22" cy="22.62" data-cap="" fill="#EAF1FF" opacity=".95" r="5"></circle>

<g style={{transformOrigin: '100px 100px', animation: 'orbitSpin 18s linear infinite'}}>
<text fill="rgba(220,230,255,.32)" fontSize="12" letter-spacing="2">
<textpath href="#textCircleLarge" startoffset="0%">
<tspan>•</tspan>
<tspan>PERFORMANCE</tspan>
<tspan>•</tspan>
<tspan>PERFORMANCE</tspan>
<tspan>•</tspan>
<tspan>PERFORMANCE</tspan>
<tspan>•</tspan>
<tspan>PERFORMANCE</tspan>
</textpath>
</text>
</g>
</svg>

<span className="absolute inset-0 grid place-items-center text-white text-4xl font-semibold" data-value="">98</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -left-20 bottom-40 hidden sm:block">
<div className="relative flex items-center justify-center rounded-full bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
<div className="size-24">
<div className="relative size-full">
<svg className="block size-full" data-label="PERFORMANCE" data-orbit="" data-suffix="%" value="50" viewbox="0 0 200 200">
<use href="#textCircle" style={{display: 'none'}}></use>


<defs>
<filter height="200%" id="outerGlow2" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="5"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="innerShadow2" width="200%" x="-50%" y="-50%">
<feoffset dx="0" dy="2"></feoffset>
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="inner"></fecomposite>
<fecolormatrix in="inner" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0"></fecolormatrix>
<fecomposite in="SourceGraphic"></fecomposite>
</filter>
<lineargradient id="arcGrad2" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#D8E3FF"></stop>
<stop offset="40%" stop-color="#93BDFF"></stop>
<stop offset="100%" stop-color="#4E8FFF"></stop>
</lineargradient>
<lineargradient id="bevel2" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,.5)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,.06)"></stop>
</lineargradient>
</defs>
<g filter="url(#innerShadow2)">
<circle cx="100" cy="100" fill="rgba(10,14,20,0.9)" r="84"></circle>
<circle cx="100" cy="100" fill="none" r="84" stroke="url(#bevel2)" strokeWidth="2"></circle>
<circle cx="100" cy="100" fill="none" r="94" stroke="rgba(255,255,255,.08)" strokeWidth="2"></circle>
</g>
<circle cx="100" cy="100" fill="none" r="92" stroke="rgba(190,200,220,.25)" stroke-dasharray="2 10" strokeWidth="2" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="78" stroke="rgba(255,255,255,.10)" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" data-arc="" fill="none" r="78" stroke="url(#arcGrad2)" stroke-dasharray="490.09" stroke-dashoffset="490.09" strokeLinecap="round" strokeWidth="10" style={{filter: 'url("#outerGlow2")'}} transform="rotate(-90 100 100)"></circle>
<circle cx="100.00" cy="178.00" data-cap="" fill="#EAF1FF" opacity=".95" r="5"></circle>
</svg>
<span className="absolute inset-0 grid place-items-center text-white text-xl font-semibold" data-value="">50</span>
</div>
</div>
</div>
</div>


<style>
            @keyframes orbitSpin {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }
          </style>
</div>
</div>
</section>

<section className="sm:px-6 sm:mt-32 sm:pt-16 sm:pb-16 lg:px-8 lg:mt-60 bg-center max-w-7xl mt-32 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="relative overflow-visible">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -left-32 top-0 h-[28rem] w-[32rem] rounded-full bg-white/10 blur-[140px] opacity-20"></div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[rgba(60,130,255,0.15)] blur-[120px] sm:blur-[180px]"></div>
</div>
<div className="absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-white/10 blur-[120px] opacity-10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-10 gap-x-6 gap-y-8 items-start">
<div className="space-y-6 sm:space-y-8 lg:sticky lg:top-32">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight sm:leading-none" data-animate="">
<span className="text-white xl:font-thin">Create</span>
<span className="xl:font-thin text-white/30">stunning</span>
<span className="text-white/30 xl:font-thin">
                digital products with
              </span>
<span className="xl:font-thin text-white/30">tools you love</span>
</h1>
<div className="space-y-5 sm:space-y-7">
<div className="transition-opacity duration-500 cursor-pointer hover:opacity-100" data-animate="" data-animate-delay="100" data-section="1">
<div className="text-sm font-medium transition-opacity duration-500" data-heading="1">
                  Library
                </div>
<div className="mt-2 h-px w-20 sm:w-24 bg-white/10"></div>
<p className="mt-2 max-w-[46ch] text-xs sm:text-sm lg:text-base text-white/70 transition-opacity duration-500" data-text="1">
                  A rich collection of adaptable components designed for
                  flexibility and consistency, ensuring seamless integration
                  across your entire product ecosystem.
                </p>
</div>
<div className="transition-opacity duration-500 opacity-60 cursor-pointer hover:opacity-100" data-animate="" data-animate-delay="200" data-section="2">
<div className="text-sm font-medium transition-opacity duration-500" data-heading="2">
                  Multiple visual styles
                </div>
<p className="mt-2 max-w-[46ch] text-xs sm:text-sm transition-opacity duration-500" data-text="2">
                  Switch between glass, outline, and solid variants to match
                  your brand identity and design vision.
                </p>
</div>
<div className="transition-opacity duration-500 opacity-60 cursor-pointer hover:opacity-100" data-animate="" data-animate-delay="300" data-section="3">
<div className="text-sm font-medium transition-opacity duration-500" data-heading="3">
                  Ready‑made templates
                </div>
<p className="mt-2 max-w-[46ch] text-xs sm:text-sm transition-opacity duration-500" data-text="3">
                  Accelerate delivery with pre‑designed page layouts and
                  sections that work beautifully right out of the box.
                </p>
</div>
</div>
<button className="flex hover:bg-white/15 transition duration-300 border-gradient before:rounded-lg sm:pt-2 sm:pr-10 sm:pb-2 sm:pl-10 hover:scale-[1.02] sm:text-base sm:w-auto text-sm font-medium text-white tracking-wide bg-white/5 w-full border-white/5 border rounded-lg pt-2.5 pr-8 pb-2.5 pl-8 relative shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),_inset_0_-2px_6px_rgba(255,255,255,0.1),_0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" data-animate="" data-animate-delay="400">
              EXPLORE LIBRARY
              <svg className="size-3.5 sm:size-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="space-y-0">
<div className="min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex relative items-center" data-panel="1">

<div className="hidden lg:block pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 z-20" style={{animation: 'orbitFloat 6s ease-in-out infinite'}}>
<div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 p-4 ring-1 ring-white/20 backdrop-blur-xl shadow-2xl" style={{animation: 'orbitPulse 4s ease-in-out infinite'}}>
<div className="size-28">
<div className="relative size-full">
<svg className="block size-full overflow-visible" data-label="PERFORMANCE" data-orbit="" value="98" viewbox="0 0 200 200">
<defs>
<path d="M100,100 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" id="textCircleLarge"></path>
</defs>
<g filter="url(#glassGlow)">
<circle cx="100" cy="100" fill="rgba(255,255,255,0.05)" r="84" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="94" stroke="rgba(255,255,255,0.15)" strokeWidth="1"></circle>
</g>
<circle cx="100" cy="100" fill="none" r="92" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 10" strokeWidth="1" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="78" stroke="rgba(255,255,255,0.08)" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" data-arc="" fill="none" r="78" stroke="url(#glassGrad)" stroke-dasharray="490.09" stroke-dashoffset="490.09" strokeLinecap="round" strokeWidth="10" style={{filter: 'url("#glassGlow")'}} transform="rotate(-90 100 100)"></circle>
<circle cx="90.22" cy="22.62" data-cap="" fill="rgba(255,255,255,0.9)" opacity="0.95" r="6" style={{filter: 'url(#glassGlow)'}}></circle>
</svg>
<span className="absolute inset-0 grid place-items-center text-white text-4xl font-semibold drop-shadow-lg" data-value="">98</span>
</div>
</div>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="absolute inset-2 rounded-full ring-1 ring-white/10"></div>
</div>
</div>
<style>
                @keyframes orbitFloat {
                  0%, 100% { transform: translateY(-50%) translateX(-25%) translateZ(0); }
                  50% { transform: translateY(-50%) translateX(-25%) translateY(-10px) translateZ(0); }
                }

                @keyframes orbitPulse {
                  0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3), 0 0 40px rgba(255,255,255,0.1); }
                  50% { box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(255,255,255,0.2); }
                }
              </style>
<div className="transition-all duration-700 bg-gradient-to-b from-white/10 to-white/5 w-full border-white/10 border ring-white/10 ring-1 rounded-xl sm:rounded-2xl shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur hover:border-white/20 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.7)] relative z-10" data-animate="" data-content="1">
<div className="flex bg-black/30 border-white/10 rounded-t-xl sm:rounded-t-2xl border-b pt-3 pr-4 pb-3 pl-4 sm:pt-4 sm:pr-5 sm:pb-4 sm:pl-5 items-center justify-between flex-wrap gap-2">
<div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                    Voyager
                  </div>
<div className="hidden sm:flex gap-2">
<span className="rounded-md bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white ring-1 ring-white/10 cursor-pointer hover:bg-white/10 hover:ring-white/20 transition-all duration-200">
                      Trips
                    </span>
<span className="rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 cursor-pointer hover:bg-white/5 hover:text-white transition-all duration-200">
                      Hotels
                    </span>
<span className="rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 cursor-pointer hover:bg-white/5 hover:text-white transition-all duration-200">
                      Rentals
                    </span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 pr-4 pb-4 pl-4 sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 bg-transparent">

<aside className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
<div className="flex items-center justify-between pb-2 border-b border-white/5">
<div className="flex items-center gap-2">
<svg className="text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="4" y1="21" y2="14"></line>
<line x1="4" x2="4" y1="10" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="12"></line>
<line x1="12" x2="12" y1="8" y2="3"></line>
<line x1="20" x2="20" y1="21" y2="16"></line>
<line x1="20" x2="20" y1="12" y2="3"></line>
<line x1="1" x2="7" y1="14" y2="14"></line>
<line x1="9" x2="15" y1="8" y2="8"></line>
<line x1="17" x2="23" y1="16" y2="16"></line>
</svg>
<h3 className="text-sm font-medium text-white/90">
                          Filters
                        </h3>
</div>
<button className="text-xs font-medium text-white/40 hover:text-white transition-colors duration-200">
                        Reset
                      </button>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-white/60">
                          Stops
                        </label>
<span className="text-[10px] text-white/40">Any</span>
</div>
<div className="space-y-2">
<label className="group flex items-center justify-between p-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 transition-colors">
<svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-sm text-white/80 font-medium">
                              Nonstop
                            </span>
</div>
<span className="text-xs text-emerald-400 font-medium">
                            $842
                          </span>
</label>
<label className="group flex items-center justify-between p-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 transition-colors"></div>
<span className="text-sm text-white/70">1 Stop</span>
</div>
<span className="text-xs text-white/40">$620</span>
</label>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-white/60">
                          Airlines
                        </label>
<span className="text-[10px] text-white/40">
                          Select all
                        </span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 bg-white/5 group-hover:border-white/40 flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[9px] text-indigo-300 font-bold ring-1 ring-indigo-500/30">
                            UA
                          </div>
<span className="text-sm text-white/70">
                            United Airlines
                          </span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 bg-white/5 group-hover:border-white/40"></div>
<div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-[9px] text-rose-300 font-bold ring-1 ring-rose-500/30">
                            DL
                          </div>
<span className="text-sm text-white/70">Delta</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 bg-white/5 group-hover:border-white/40"></div>
<div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-[9px] text-sky-300 font-bold ring-1 ring-sky-500/30">
                            AA
                          </div>
<span className="text-sm text-white/70">American</span>
</div>
</div>
</div>

<div className="space-y-4 pt-2 border-t border-white/5">
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Price Range</span>
<span className="font-mono text-white/80">$0 - $2,500</span>
</div>
<div className="relative h-6 flex items-center select-none group cursor-pointer">
<div className="absolute w-full h-1 bg-white/10 rounded-full group-hover:bg-white/15 transition-colors"></div>
<div className="absolute left-[0%] right-[30%] h-1 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,0.5)]"></div>
<div className="absolute left-[0%] w-3.5 h-3.5 bg-white border-2 border-indigo-500 rounded-full shadow cursor-grab hover:scale-125 transition-transform -translate-x-1.5 z-10"></div>
<div className="absolute right-[30%] w-3.5 h-3.5 bg-white border-2 border-fuchsia-500 rounded-full shadow cursor-grab hover:scale-125 transition-transform translate-x-1.5 z-10"></div>
</div>
</div>
</aside>

<div className="lg:col-span-8 flex flex-col gap-4 order-1 lg:order-2">

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-5 shadow-xl shadow-black/20 backdrop-blur-sm relative overflow-hidden group">

<div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>

<div className="flex items-center gap-4 border-b border-white/5 pb-4 relative z-10 overflow-x-auto sm:overflow-visible">
<button className="text-sm font-medium text-white border-b-2 border-indigo-500 pb-4 -mb-4.5 transition-colors whitespace-nowrap">
                          Round trip
                        </button>
<button className="text-sm font-medium text-white/50 hover:text-white transition-colors pb-4 -mb-4.5 whitespace-nowrap">
                          One way
                        </button>
<button className="text-sm font-medium text-white/50 hover:text-white transition-colors pb-4 -mb-4.5 whitespace-nowrap">
                          Multi-city
                        </button>
<div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-all cursor-pointer ring-1 ring-white/5">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="whitespace-nowrap">2 Travelers</span>
<svg className="ml-1 opacity-50" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">

<div className="space-y-1.5 group/input">
<label className="text-[10px] uppercase tracking-wider text-white/40 font-semibold pl-1">
                            From
                          </label>
<div className="flex items-center justify-between p-3.5 rounded-lg bg-black/20 border border-white/10 hover:border-white/30 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all cursor-text group-hover/input:ring-1 ring-white/5">
<div className="">
<div className="text-xl font-bold text-white tracking-tight">
                                SFO
                              </div>
<div className="text-xs text-white/50 font-medium">
                                San Francisco
                              </div>
</div>
<svg className="w-5 h-5 text-white/20 group-hover/input:text-white/40 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M22 2l-10 10"></path>
<path d="M12 12l9.5-9.5"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
</div>

<button className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:scale-110 transition-all z-20 hidden sm:flex shadow-lg shadow-black/50 group/swap">
<svg className="w-4 h-4 group-hover/swap:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M7 16V4M7 4L3 8M7 4L11 8"></path>
<path d="M17 8V20M17 20L21 16M17 20L13 16"></path>
</svg>
</button>

<div className="space-y-1.5 group/input">
<label className="text-[10px] uppercase tracking-wider text-white/40 font-semibold pl-1">
                            To
                          </label>
<div className="flex items-center justify-between p-3.5 rounded-lg bg-black/20 border border-white/10 hover:border-white/30 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all cursor-text group-hover/input:ring-1 ring-white/5">
<div>
<div className="text-xl font-bold text-white tracking-tight">
                                JFK
                              </div>
<div className="text-xs text-white/50 font-medium">
                                New York
                              </div>
</div>
<svg className="w-5 h-5 text-white/20 group-hover/input:text-white/40 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
</div>

<div className="space-y-1.5 group/input sm:col-span-2 mt-1">
<label className="text-[10px] uppercase tracking-wider text-white/40 font-semibold pl-1">
                            Departure &amp; Return
                          </label>
<div className="grid grid-cols-2 gap-3">
<div className="p-3.5 rounded-lg bg-black/20 border border-white/10 hover:border-white/30 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all flex items-center gap-3 cursor-pointer group-hover/input:ring-1 ring-white/5">
<svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<div className="">
<div className="text-sm font-semibold text-white">
                                  Dec 15, Sun
                                </div>
<div className="text-[10px] text-white/40">
                                  10:00 AM
                                </div>
</div>
</div>
<div className="p-3.5 rounded-lg bg-black/20 border border-white/10 hover:border-white/30 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all flex items-center gap-3 cursor-pointer group-hover/input:ring-1 ring-white/5">
<svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<div>
<div className="text-sm font-semibold text-white">
                                  Dec 22, Sun
                                </div>
<div className="text-[10px] text-white/40">
                                  Anytime
                                </div>
</div>
</div>
</div>
</div>
</div>

<button className="relative w-full py-4 rounded-xl bg-white text-black font-bold tracking-tight hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0)] overflow-hidden group/btn z-10">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s4 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>

                          Search Flights
                        </span>
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:bg-white/[0.04] transition-colors group cursor-default">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                            Price History
                          </span>
<span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            -12%
                          </span>
</div>
<div className="h-12 flex items-end gap-1 px-1">
<div className="flex-1 bg-white/10 rounded-t-[2px] h-[40%] group-hover:bg-white/20 transition-all duration-500"></div>
<div className="flex-1 bg-white/10 rounded-t-[2px] h-[60%] group-hover:bg-white/20 transition-all duration-500 delay-75"></div>
<div className="flex-1 bg-white/10 rounded-t-[2px] h-[45%] group-hover:bg-white/20 transition-all duration-500 delay-100"></div>
<div className="flex-1 bg-white/10 rounded-t-[2px] h-[75%] group-hover:bg-white/20 transition-all duration-500 delay-150"></div>
<div className="flex-1 bg-white/10 rounded-t-[2px] h-[30%] group-hover:bg-white/20 transition-all duration-500 delay-200"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-400 rounded-t-[2px] h-[55%] animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
</div>
</div>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="text-xs font-medium text-white/50 uppercase tracking-wider mb-1.5">
                            Best Time to Book
                          </div>
<div className="text-base sm:text-lg text-white font-bold tracking-tight">
                            Book now
                          </div>
<p className="text-[10px] sm:text-xs text-white/40 mt-1 leading-relaxed">
                            Prices are expected to rise by
                            <span className="text-white/70 font-medium">$45</span>
                            in the next 48 hours.
                          </p>
</div>
<div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
<polyline points="17 6 23 6 23 12"></polyline>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
<div className="min-h-[60vh] sm:min-h-[75vh] lg:min-h-screen flex relative items-center py-16 sm:py-24">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full mix-blend-screen opacity-30"></div>
</div>
<div className="sm:px-6 z-10 w-full max-w-6xl mr-auto ml-auto pr-4 pl-4 relative">

<div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-medium tracking-wide text-white/70 mb-6 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_8px_rgba(129,140,248,0.5)]"></span>
</span>
                    THEMING ENGINE
                  </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 drop-shadow-sm">
                    Visual Style Variants
                  </h2>
<p className="text-base sm:text-lg text-white/50 leading-relaxed font-light max-w-2xl mx-auto">
                    Switch seamlessly between distinct visual languages. From
                    ethereal glassmorphism to strict utilitarian outlines, our
                    engine adapts your entire interface with a single prop.
                  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-x-6 gap-y-6 overflow-visible">

<div className="group flex flex-col overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer h-full max-h-fit border-white/10 border rounded-2xl pt-2 pr-2 pl-2 relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 pt-2 pb-2 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="flex overflow-hidden bg-[#050505] w-full h-24 rounded-lg relative items-center justify-center">

<div className="flex max-h-fit absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 opacity-60"></div>
<div className="-right-4 -bottom-4 group-hover:-translate-y-4 transition-transform duration-700 bg-fuchsia-500/20 opacity-60 w-24 h-24 rounded-full px-2 absolute blur-xl"></div>
</div>

<div className="z-10 flex flex-col gap-4 w-48 h-fit relative gap-x-4 gap-y-4 items-center">
<div className="flex transform group-hover:-translate-y-2 transition-transform duration-500 bg-white/10 w-40 h-24 max-h-full border-white/20 border rounded-xl relative shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl pointer-events-none"></div>
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 shadow-inner"></div>
<div className="absolute top-3 left-3 w-16 h-2 rounded-full bg-white/20"></div>
<div className="absolute top-7 left-3 w-10 h-2 rounded-full bg-white/10"></div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 border-t border-white/5 bg-white/[0.01]">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-white tracking-tight">
                          Glass
                        </h3>
<i className="w-4 h-4 text-white/40" data-lucide="layers"></i>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer bg-black h-full max-h-fit border-white/10 border rounded-2xl relative">

<div className="flex overflow-hidden bg-[#080808] w-full h-44 max-h-fit relative items-center justify-center">

<div className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 max-h-fit absolute top-0 right-0 bottom-0 left-0"></div>

<div className="border-dashed flex group-hover:border-white/50 transition-colors duration-500 bg-black/40 w-48 h-32 z-10 border-white/30 border rounded-lg relative backdrop-blur-sm items-center justify-center">

<div className="absolute -top-px -left-px w-2 h-2 border-l border-t border-white"></div>
<div className="absolute -top-px -right-px w-2 h-2 border-r border-t border-white"></div>
<div className="absolute -bottom-px -left-px w-2 h-2 border-l border-b border-white"></div>
<div className="absolute -bottom-px -right-px w-2 h-2 border-r border-b border-white"></div>

<div className="w-24 h-10 border border-white/60 rounded flex items-center justify-center relative">
<span className="text-[10px] font-mono text-white/60 tracking-wider">
                            BUTTON
                          </span>

<div className="absolute -bottom-4 left-0 w-full flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-2 w-px bg-white/20"></div>
<div className="h-px flex-1 bg-white/20 flex items-center justify-center">
<span className="bg-[#080808] px-1 text-[8px] font-mono text-white/40">
                                96px
                              </span>
</div>
<div className="h-2 w-px bg-white/20"></div>
</div>
</div>
</div>
</div>

<div className="sm:p-8 border-white/5 border-t pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-white tracking-tight">
                          Outline
                        </h3>
<i className="w-4 h-4 text-white/40" data-lucide="pen-tool"></i>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer bg-zinc-900/50 h-full max-h-fit border-white/10 border rounded-2xl px-2 py-2 relative">

<div className="flex overflow-hidden bg-gradient-to-b from-zinc-800/20 to-zinc-900/40 w-full h-full max-h-fit relative items-center justify-center">

<div className="bg-gradient-to-b from-white/5 to-transparent opacity-50 w-full h-full max-h-fit absolute top-0"></div>

<div className="relative z-10 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500">
<div className="flex group-hover:bg-indigo-500 transition-colors text-sm font-medium text-white bg-indigo-600 w-48 h-28 max-h-full border-indigo-500 border rounded-lg shadow-[0_4px_12px_rgba(79,70,229,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] items-center justify-center">
                          Action Button
                        </div>
</div>
</div>

<div className="sm:p-8 border-white/5 border-t pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-white tracking-tight">
                          Solid
                        </h3>
<i className="w-4 h-4 text-white/40" data-lucide="box"></i>
</div>
</div>
</div>
</div>

<div className="mt-16 sm:mt-24 max-w-lg mx-auto">
<div className="bg-white/5 border border-white/10 rounded-full p-2 flex items-center gap-4 backdrop-blur-md opacity-0 animate-[fadeIn_1s_ease-out_forwards] hover:bg-white/[0.07] transition-colors hover:border-white/20">
<div className="pl-4 text-[10px] font-mono uppercase tracking-widest text-white/40 select-none">
                      Density
                    </div>
<div className="flex-1 group/slider cursor-pointer h-6 relative">
<div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-white/10 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-indigo-500/50 to-indigo-500 rounded-full"></div>
</div>
<div className="absolute top-1/2 left-2/3 w-4 h-4 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transform transition-transform group-hover/slider:scale-125 border border-indigo-200"></div>
</div>
<div className="flex gap-1 pr-1">
<button aria-label="Decrease density" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
<button aria-label="Increase density" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="min-h-[60vh] sm:min-h-[75vh] lg:min-h-screen flex relative items-center" data-panel="3">
<div className="transition-all duration-700 sm:rounded-2xl sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 hover:border-white/20 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.7)] bg-gradient-to-b from-white/10 to-white/5 w-full border-white/10 border ring-white/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur" data-animate="" data-content="3">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                      Ready-Made Templates
                    </h3>
<p className="text-xs sm:text-sm text-white/70 max-w-xl">
                      Launch faster with professionally designed templates that
                      adapt to your brand. Each template includes responsive
                      layouts, accessibility features, and production-ready
                      code.
                    </p>
</div>
<div className="inline-flex ring-1 ring-white-500/30 max-w-fit rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<div className="h-1.5 w-1.5 rounded-full bg-white-400 animate-pulse"></div>
<span className="text-white-400 xl:px-4 text-xs font-small px-4">
                      12 Templates
                    </span>
</div>
</div>
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
<div className="group aspect-video bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee938364-0ff1-4042-8d2d-824055b38b24_3840w.webp)] bg-cover ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">
                      Dashboard
                    </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">
                        Analytics &amp; reporting interface with real-time data
                        visualization
                      </p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Charts
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Tables
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Metrics
                        </span>
</div>
</div>
</div>
<div className="group aspect-video bg-gradient-to-br from-emerald-500/20 to-sky-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f826149d-7e8d-4b68-a4fd-cc16fb762142_3840w.jpg)] bg-cover ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">
                      Landing Page
                    </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">
                        High-converting landing page with hero sections and CTAs
                      </p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Hero
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Features
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          CTA
                        </span>
</div>
</div>
</div>
<div className="group aspect-video bg-gradient-to-br from-amber-500/20 to-rose-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_3840w.webp)] bg-cover ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">
                      E-commerce
                    </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">
                        Complete store with product grids, cart, and checkout
                        flow
                      </p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Products
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Cart
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Checkout
                        </span>
</div>
</div>
</div>
<div className="group aspect-video ring-1 ring-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78877756-9e45-410e-b630-78c3dfb8e94c_3840w.jpg)] bg-cover rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">
                      Portfolio
                    </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">
                        Showcase your work with elegant project galleries and
                        case studies
                      </p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Gallery
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Projects
                        </span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                          Bio
                        </span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-2 mb-1.5">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path className="" d="M7 3v18"></path>
<path d="M3 7.5h4"></path>
<path d="M3 12h18"></path>
<path d="M3 16.5h4"></path>
<path d="M17 3v18"></path>
<path d="M17 7.5h4"></path>
<path d="M17 16.5h4"></path>
</svg>
<span className="text-xs sm:text-sm font-medium text-white/90">
                        Responsive
                      </span>
</div>
<p className="text-[10px] sm:text-xs text-white/60">
                      Mobile-first design that adapts perfectly to any screen
                      size
                    </p>
</div>
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-2 mb-1.5">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
<span className="text-xs sm:text-sm font-medium text-white/90">
                        Production Ready
                      </span>
</div>
<p className="text-[10px] sm:text-xs text-white/60">
                      Clean, optimized code with best practices built-in
                    </p>
</div>
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-2 mb-1.5">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V2H8"></path>
<path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
<path d="M2 12h2"></path>
<path d="M9 11v2"></path>
<path d="M15 11v2"></path>
<path d="M20 12h2"></path>
</svg>
<span className="text-xs sm:text-sm font-medium text-white/90">
                        Accessible
                      </span>
</div>
<p className="text-[10px] sm:text-xs text-white/60">
                      WCAG compliant with full keyboard and screen reader
                      support
                    </p>
</div>
</div>
<div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white ring-1 ring-white/20 transition-all duration-200 hover:scale-[1.02] hover:ring-white/30">
                    Browse All Templates
                    <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="sm:px-6 lg:px-8 sm:mt-32 max-w-7xl mt-24 mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-visible">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-0 h-[32rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-[140px] opacity-20"></div>
<div className="absolute -left-20 bottom-0 h-[20rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[140px] opacity-30"></div>
<div className="-full bg-fuchsia-500/20 blur-[120px] opacity-20"></div>
</div>

<div className="text-center mb-12 sm:mb-16" data-animate="">
<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 shadow-sm backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default mb-6">
<svg className="text-indigo-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
        Complete Design System
      </div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
        Everything you need to launch
        <span className="text-white/60 block mt-1">world‑class products</span>
</h2>
<p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
        From foundational elements to complex patterns—discover the building blocks that empower your creative process.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:auto-rows-[180px] gap-x-4 gap-y-4">

<div className="group relative col-span-1 md:col-span-2 lg:col-span-7 lg:row-span-2 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm p-8 overflow-hidden transition-all duration-300">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider text-white/70 uppercase">
              Systems
            </div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-400/80">Live</span>
</div>
</div>
<div className="mb-8">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Scalable Foundation</h3>
<p className="text-white/60 leading-relaxed max-w-md">Build cohesive design systems with reusable components, unified tokens, and comprehensive guidelines.</p>
</div>
<div className="mt-auto grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/5 p-4 transition-colors hover:bg-white/10 cursor-pointer">
<div className="text-2xl font-semibold text-white mb-1" data-animate-number="200" data-suffix="+">200+</div>
<div className="text-xs text-white/50">Elements</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/5 p-4 transition-colors hover:bg-white/10 cursor-pointer">
<div className="text-2xl font-semibold text-white mb-1" data-animate-number="64">64</div>
<div className="text-xs text-white/50">Variables</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/5 p-4 transition-colors hover:bg-white/10 cursor-pointer">
<div className="text-2xl font-semibold text-white mb-1" data-animate-number="15">15</div>
<div className="text-xs text-white/50">Layouts</div>
</div>
</div>
</div>

<div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
</div>

<div className="group relative col-span-1 lg:col-span-5 lg:row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm p-6 overflow-hidden transition-all duration-300">
<div className="flex h-full justify-between gap-6">
<div className="flex flex-col justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider text-white/70 uppercase mb-4">
                Identity
              </div>
<h3 className="text-lg font-medium text-white mb-1">Avatar System</h3>
<p className="text-sm text-white/60">Flexible components for user profiles.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-3">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-[#050505] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;q=80&amp;crop=faces&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-[#050505] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;q=80&amp;crop=faces&amp;fit=crop"/>
<div className="w-8 h-8 rounded-fullcenter text-[10px] text-white/60 hover:bg-white/20 cursor-pointer transition-colors">+</div>
</div>
<span className="text-xs text-white/40">Active users</span>
</div>
</div>
<div className="relative shrink-0 self-center">
<div className="w-20 h-20 rounded-full border border-white/10 p-1 relative hover:scale-105 transition-transform duration-300">
<img alt="" className="w-full h-full object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#050505] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative col-span-1 lg:col-span-5 lg:row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm p-6 overflow-hidden transition-all duration-300">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider text-white/70 uppercase">
                Interactive
              </div>
<svg className="text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</div>
<div className="space-y-2 mt-auto">
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
<span className="text-xs font-medium text-white/80">Theme Mode</span>
<div className="w-8 h-4 bg-indigo-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div></div>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex justify-between text-[10px] text-white/60 mb-1.5"><span className="">Intensity</span><span className="" data-animate-number="72" data-suffix="%">72%</span></div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-1000 ease-out" data-animate-width="72%" style={{width: '72%'}}></div></div>
</div>
</div>
</div>
</div>

<div className="group col-span-1 lg:col-span-4 lg:row-span-2 hover:bg-white/[0.04] overflow-visible transition-all duration-300 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider text-white/70 uppercase mb-3">
            Visuals
         </div>
<h3 className="text-lg font-medium text-white">Rich Media</h3>
<p className="text-sm text-white/60 mt-1">Adaptive galleries &amp; layouts.</p>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<div className="aspect-square rounded-xl bg-white/5 overflow-hidden border border-white/10 cursor-pointer">
<img alt="" className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6be47bd1-bd74-45c4-999d-fbc825b15b5c_800w.webp"/>
</div>
<div className="aspect-square rounded-xl bg-white/5 overflow-hidden border border-white/10 cursor-pointer">
<img alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=400&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="group col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 hover:bg-white/[0.04] overflow-visible transition-all duration-300 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">
<div className="flex flex-col h-full">
<div className="inline-flex self-start items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider text-white/70 uppercase mb-4">
         Developer
      </div>
<h3 className="text-lg font-medium text-white mb-4">Framework Ready</h3>
<div className="text-[10px] leading-relaxed transition-all duration-500 overflow-hidden -ml-[7.5%] -mb-10 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:border-white/20 text-white/70 font-mono bg-[#0a0a0a] w-[115%] max-h-full border-white/10 border rounded-xl mt-auto relative shadow-2xl">
<style>
      @keyframes typeCode {
         0% {
            width: 0;
            opacity: 1;
         }
         100% {
            width: 100%;
            opacity: 1;
         }
      }

      @keyframes blink {
         0%, 100% { opacity: 1; }
         50% { opacity: 0; }
      }

      @keyframes fadeInLine {
         0% { opacity: 0; transform: translateX(-4px); }
         100% { opacity: 1; transform: translateX(0); }
      }

      @keyframes scanline {
         0% { top: -2px; opacity: 0; }
         10% { opacity: 0.6; }
         90% { opacity: 0.6; }
         100% { top: 100%; opacity: 0; }
      }

      .type-line {
         overflow: hidden;
         white-space: nowrap;
         width: 0;
         opacity: 0;
         display: block;
      }

      .line-number {
         display: inline-block;
         width: 20px;
         text-align: right;
         margin-right: 12px;
         color: rgba(255,255,255,0.15);
         user-select: none;
         font-size: 9px;
      }

      .cursor-blink::after {
         content: '▎';
         color: rgba(99, 102, 241, 0.8);
         animation: blink 1s step-end infinite;
         font-weight: 300;
      }

      .code-scanline {
         position: absolute;
         left: 0;
         right: 0;
         height: 1px;
         background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
         pointer-events: none;
         animation: scanline 4s ease-in-out infinite;
         z-index: 5;
      }
   </style>

<div className="flex border-white/5 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex gap-2 items-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/10 hover:brightness-125 transition-all cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/10 hover:brightness-125 transition-all cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/10 hover:brightness-125 transition-all cursor-pointer"></div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 opacity-50">
<svg className="text-indigo-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
<span className="text-[9px] font-medium tracking-tight">Button.tsx</span>
</div>
<div className="flex items-center gap-1 opacity-30">
<svg className="text-white/50" fill="none" height="9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="9" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</div>
</div>
</div>

<div className="code-scanline"></div>

<div className="flex flex-col space-y-0.5 p-4 pb-8 relative">
<div className="type-line" style={{animation: 'typeCode 0.8s steps(20, end) forwards 0.2s'}}>
<span className="line-number">1</span><span className="text-purple-400">import</span> { Button } <span className="text-purple-400">from</span>
<span className="text-emerald-400">'@nexus/ui'</span>
</div>
<div className="type-line" style={{animation: 'typeCode 0.8s steps(20, end) forwards 1.2s'}}>
<span className="line-number">2</span><span className="text-purple-400">import</span> { motion } <span className="text-purple-400">from</span>
<span className="text-emerald-400">'framer-motion'</span>
</div>
<div className="h-1"></div>
<div className="type-line" style={{animation: 'typeCode 1s steps(25, end) forwards 2.2s'}}>
<span className="line-number">4</span><span className="text-blue-400">export default</span> <span className="text-purple-400">function</span>
<span className="text-yellow-200">Hero</span>() {
      </div>
<div className="type-line" style={{animation: 'typeCode 0.6s steps(15, end) forwards 3.4s'}}>
<span className="line-number">5</span>  <span className="text-purple-400">return</span> (
      </div>
<div className="type-line" style={{animation: 'typeCode 1s steps(30, end) forwards 4.2s'}}>
<span className="line-number">6</span>    <span className="text-white/40">&lt;</span><span className="text-yellow-400">Button</span>
</div>
<div className="type-line" style={{animation: 'typeCode 1s steps(25, end) forwards 5.4s'}}>
<span className="line-number">7</span>      <span className="text-sky-300">variant</span>=<span className="text-emerald-400">"glow"</span>
</div>
<div className="type-line" style={{animation: 'typeCode 1.2s steps(35, end) forwards 6.6s'}}>
<span className="line-number">8</span>      <span className="text-sky-300">icon</span>={<span className="text-white/40">&lt;</span><span className="text-yellow-400">Rocket</span>
<span className="text-white/40">/&gt;</span>}
      </div>
<div className="type-line" style={{animation: 'typeCode 0.4s steps(10, end) forwards 8.0s'}}>
<span className="line-number">9</span>    <span className="text-white/40">&gt;</span>
</div>
<div className="type-line" style={{animation: 'typeCode 0.8s steps(20, end) forwards 8.6s'}}>
<span className="line-number">10</span>      <span className="text-white/90">Deploy App</span>
</div>
<div className="type-line" style={{animation: 'typeCode 0.5s steps(12, end) forwards 9.6s'}}>
<span className="line-number">11</span>    <span className="text-white/40">&lt;/</span><span className="text-yellow-400">Button</span><span className="text-white/40">&gt;</span>
</div>
<div className="type-line" style={{animation: 'typeCode 0.3s steps(5, end) forwards 10.2s'}}>
<span className="line-number">12</span>  )
      </div>
<div className="type-line cursor-blink" style={{animation: 'typeCode 0.3s steps(5, end) forwards 10.6s'}}>
<span className="line-number">13</span>}
      </div>
</div>

<div className="flex items-center justify-between px-4 py-1.5 border-t border-white/5 bg-white/[0.01]">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 opacity-50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[8px] font-medium tracking-wider text-white/50">No errors</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[8px] text-white/30 font-medium">Ln 13, Col 2</span>
<div className="flex items-center gap-1.5 opacity-50 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
<span className="text-[9px] font-semibold tracking-wider text-white">TSX</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm p-6 overflow-hidden transition-all duration-300">
<div className="flex flex-col h-full justify-between">
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider text-white/70 uppercase">
              Performance
             </div>
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="text-xl font-bold text-emerald-400" data-animate-number="12" data-suffix="KB">12KB</div>
<div className="text-[10px] text-white/40 uppercase tracking-wide">Core Size</div>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="text-xl font-bold text-sky-400" data-animate-number="100">100</div>
<div className="text-[10px] text-white/40 uppercase tracking-wide">Lighthouse</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 overflow-hidden pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>
<div className="z-10 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<style>
    @keyframes float-plate-top {
      0%, 100% { transform: translateY(0px) rotateX(55deg) rotateZ(-45deg); }
      50% { transform: translateY(-15px) rotateX(55deg) rotateZ(-45deg); }
    }
    @keyframes float-plate-bottom {
      0%, 100% { transform: translateY(0px) rotateX(55deg) rotateZ(-45deg); }
      50% { transform: translateY(15px) rotateX(55deg) rotateZ(-45deg); }
    }
    @keyframes flow-arrows {
      0% { opacity: 0; transform: translateY(-10px); }
      50% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(10px); }
    }
    .iso-plate {
      transform-style: preserve-3d;
      box-shadow: 
        -1px 1px 0px rgba(255,255,255,0.1),
        -2px 2px 0px rgba(255,255,255,0.1),
        -3px 3px 0px rgba(255,255,255,0.1),
        -4px 4px 0px rgba(255,255,255,0.1),
        -20px 20px 50px rgba(0,0,0,0.8);
    }
    .plate-shine {
      background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.05) 100%);
    }
  </style>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">

<div className="flex min-h-[500px] w-full relative perspective-[1000px] items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent blur-[100px] rounded-full opacity-60 pointer-events-none">
</div>

<div className="relative w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center perspective-[1000px] transform-style-3d">
<style>
      .transform-style-3d { transform-style: preserve-3d; }

      @keyframes hover-top {
        0%, 100% { transform: translateY(0) rotateX(55deg) rotateZ(-45deg) translateZ(60px); }
        50% { transform: translateY(-8px) rotateX(55deg) rotateZ(-45deg) translateZ(60px); }
      }

      @keyframes hover-mid {
        0%, 100% { transform: translateY(0) rotateX(55deg) rotateZ(-45deg) translateZ(0px); }
        50% { transform: translateY(-4px) rotateX(55deg) rotateZ(-45deg) translateZ(0px); }
      }

      @keyframes hover-bottom {
        0%, 100% { transform: translateY(0) rotateX(55deg) rotateZ(-45deg) translateZ(-60px); }
        50% { transform: translateY(8px) rotateX(55deg) rotateZ(-45deg) translateZ(-60px); }
      }

      @keyframes flow-particle {
        0% { transform: translateY(-40px); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(40px); opacity: 0; }
      }

      .iso-card {
        background: #121212;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow:
          -1px 1px 0 rgba(255, 255, 255, 0.05),
          -20px 20px 40px rgba(0, 0, 0, 0.6),
          inset 0 0 20px rgba(255, 255, 255, 0.02);
      }

      .iso-node {
        background: #1e1e24;
        border: 1px solid rgba(99, 102, 241, 0.3);
        box-shadow:
          0 0 15px rgba(99, 102, 241, 0.2),
          -10px 10px 30px rgba(0, 0, 0, 0.5);
      }
    </style>

<div className="iso-card flex z-30 w-40 h-40 rounded-3xl absolute items-center justify-center" style={{animation: 'hover-top 6s ease-in-out infinite'}}>
<div className="flex items-center justify-center">
<svg className="w-[80px] h-[80px] drop-shadow-xl" style={{width: '80px', height: '80px'}} viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<mask id="linear-logo-mask-v2">
<rect fill="white" height="100" width="100"></rect>
<circle cx="62" cy="38" fill="black" r="26"></circle>
</mask>
</defs>

<rect fill="white" height="100" width="100"></rect>

<circle cx="50" cy="50" fill="white" mask="url(#linear-logo-mask-v2)" r="48"></circle>

<rect fill="black" height="8" width="120" x="-10" y="52"></rect>
<rect fill="black" height="8" width="120" x="-10" y="70"></rect>
<rect fill="black" height="8" width="120" x="-10" y="88"></rect>
</svg>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
<div className="w-0.5 h-14 bg-gradient-to-b from-white/20 to-indigo-500/50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-white blur-[1px]" style={{animation: 'flow-particle 1.5s linear infinite'}}></div>
</div>
</div>

<div className="absolute w-20 h-20 rounded-2xl iso-node flex items-center justify-center z-20" style={{animation: 'hover-mid 6s ease-in-out infinite 0.5s'}}>
<div className="flex items-center justify-center">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40 shadow-[0_0_10px_rgba(99,102,241,0.4)]">

<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
<path d="M11 7h4a2 2 0 0 1 2 2v4"></path>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
<div className="w-0.5 h-14 bg-gradient-to-b from-indigo-500/50 to-white/20 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-white blur-[1px]" style={{animation: 'flow-particle 1.5s linear infinite 0.75s'}}></div>
</div>
</div>

<div className="absolute w-40 h-40 rounded-3xl iso-card flex items-center justify-center z-10" style={{animation: 'hover-bottom 6s ease-in-out infinite 1s'}}>
<div className="flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
<svg className="w-14 h-14 text-[#121212]" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z">
</path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
        Powerful Git 
        automations
      </h2>
<p className="text-lg text-white/60 leading-relaxed mb-12 max-w-lg">
        Link Linear with GitHub and GitLab to automate your pull request workflows. Less grunt work, less context switching. More focus, more flow.
      </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-12">

<div className="space-y-3">
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-white/70" data-lucide="git-pull-request"></i>
            Link and automate PRs
          </div>
<p className="text-sm text-white/50 leading-relaxed">
            Automatically change issue status based on pull/merge request updates.
          </p>
</div>

<div className="space-y-3">
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-white/70" data-lucide="user-check"></i>
            Auto-assign and update
          </div>
<p className="text-sm text-white/50 leading-relaxed">
            Auto-assign issues and move them to a started status when you copy the git branch name.
          </p>
</div>

<div className="space-y-3">
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-white/70" data-lucide="check-circle"></i>
            PR review status
          </div>
<p className="text-sm text-white/50 leading-relaxed">
            See the reviewers and review states of your pull and merge requests directly in Linear.
          </p>
</div>

<div className="space-y-3">
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-white/70" data-lucide="git-branch"></i>
            Branch-specific rules
          </div>
<p className="text-sm text-white/50 leading-relaxed">
            Define custom workflow automations based on specific target branches.
          </p>
</div>
</div>

<div className="rounded-xl bg-[#121212] border border-white/10 overflow-hidden">
<div className="p-6 sm:p-8">
<h3 className="text-base font-medium text-white mb-2">GitHub Issues Sync for open source teams</h3>
<p className="text-sm text-white/50 leading-relaxed">
            Manage OSS issues from Linear. Collaborate with GitHub contributors in synced comment threads. Keep everything else private.
          </p>
</div>
<div className="bg-white/[0.02] border-t border-white/5 px-6 py-4 flex items-center gap-6">
<span className="text-xs text-white/30 font-medium">Used by</span>

<svg className="h-4 w-auto fill-white/80" viewbox="0 0 75 65" xmlns="http://www.w3.org/2000/svg"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>

<div className="flex items-center gap-1.5 opacity-80">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z"></path></svg>
<span className="text-sm font-semibold text-white tracking-tight">outline</span>
</div>

<div className="flex flex-col leading-none opacity-80">
<span className="text-[8px] font-bold text-white uppercase tracking-wider">The</span>
<span className="text-[10px] font-bold text-white uppercase tracking-tight">Linux</span>
<span className="text-[8px] font-bold text-white uppercase tracking-wider">Foundation</span>
</div>
</div>
</div>
</div>
</div>
</div>
<style>
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      </style>
</section>
<section className="relative py-24 sm:py-32 overflow-hidden">

<div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50">
</div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[100px] mix-blend-screen opacity-30">
</div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-24 space-y-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Trusted By Leading Teams</h2>
<p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base font-light">
        Join thousands of developers and designers building the future with Aura.
      </p>
</div>

<div className="flex flex-col sm:gap-14 max-w-5xl mr-auto ml-auto perspective-[1200px] gap-x-10 gap-y-10" id="testimonials-container">

<div className="group relative flex items-center self-start w-full sm:w-[85%] md:w-[75%] opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" data-animate-item="" data-delay="0">

<div className="relative z-20 shrink-0">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<img alt="Sarah Chen" className="w-full h-full object-cover z-10 rounded-full relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3733b827-107f-4514-a999-9df3440ff6a7_320w.webp"/>
</div>
<div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl -z-10 group-hover:bg-indigo-500/40 transition-colors duration-500">
</div>
</div>

<div className="relative z-10 -ml-8 sm:-ml-10 flex-1 min-w-0">
<div className="sm:pl-14 sm:pr-8 sm:py-5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 flex gap-4 bg-gradient-to-r from-white/[0.07] to-transparent rounded-2xl pt-3 pr-4 pb-3 pl-10 shadow-lg backdrop-blur-md gap-x-4 gap-y-4 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2">
<h4 className="text-sm sm:text-base font-medium text-white group-hover:text-indigo-200 transition-colors">
                  Sarah
                  Chen</h4>
<span className="text-xs text-white/40 font-light hidden sm:inline-block">• TechFlow</span>
</div>
<p className="text-xs sm:text-sm text-white/60 truncate group-hover:text-white/80 transition-colors max-w-[180px] sm:max-w-md">
                "Nexus Design transformed our UI development..."</p>
</div>
</div>
</div>
</div>

<div className="group relative flex items-center self-end flex-row-reverse w-full sm:w-[85%] md:w-[75%] transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" data-animate-item="" data-delay="150">

<div className="relative z-20 shrink-0">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<img alt="Marcus Rodriguez" className="w-full h-full object-cover z-10 rounded-full relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bf8834b-579f-42e8-9584-29ab14b0aab1_320w.webp"/>
</div>
<div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-xl -z-10 group-hover:bg-fuchsia-500/40 transition-colors duration-500">
</div>
</div>

<div className="relative z-10 -mr-8 sm:-mr-10 flex-1 min-w-0">
<div className="sm:pr-14 sm:pl-8 sm:py-5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 flex flex-row-reverse gap-4 bg-gradient-to-l from-white/[0.07] to-transparent rounded-2xl pt-3 pl-4 pb-3 pr-10 shadow-lg backdrop-blur-md items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex flex-col gap-1 min-w-0 text-right">
<div className="flex items-center gap-2 justify-end">
<span className="text-xs text-white/40 font-light hidden sm:inline-block">StartupLabs •</span>
<h4 className="text-sm sm:text-base font-medium text-white group-hover:text-fuchsia-200 transition-colors">
                  Marcus Rodriguez</h4>
</div>
<p className="text-xs sm:text-sm text-white/60 truncate group-hover:text-white/80 transition-colors max-w-[180px] sm:max-w-md">
                "Every component feels production-ready..."</p>
</div>
</div>
</div>
</div>

<div className="group relative flex items-center self-start w-full sm:w-[85%] md:w-[75%] sm:translate-x-12 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" data-animate-item="" data-delay="300">

<div className="relative z-20 shrink-0">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<img alt="Emily Foster" className="w-full h-full rounded-full object-cover relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68d0e141-c428-45cd-819a-d7123081d736_3840w.jpg"/>
</div>
<div className="absolute inset-0 rounded-full bg-sky-500/20 blur-xl -z-10 group-hover:bg-sky-500/40 transition-colors duration-500">
</div>
</div>

<div className="relative z-10 -ml-8 sm:-ml-10 flex-1 min-w-0">
<div --border-gradient:="" --border-radius-before:="" 0));="" 0),="" 0.1),="" 16px"="" 255,="" className="sm:pl-14 sm:pr-8 sm:py-5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 flex gap-4 bg-gradient-to-r from-white/[0.07] to-transparent rounded-2xl pt-3 pr style={{}}" position:="" relative;="" rgba(255,="">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2">
<h4 className="text-sm sm:text-base font-medium text-white group-hover:text-sky-200 transition-colors">Emily
                  Foster</h4>
<span className="text-xs text-white/40 font-light hidden sm:inline-block">• CloudScale</span>
</div>
<p className="text-xs sm:text-sm text-white/60 truncate group-hover:text-white/80 transition-colors max-w-[180px] sm:max-w-md">
                "Documentation is clear, support is responsive..."</p>
</div>
</div>
</div>
</div>

<div className="group relative flex items-center self-end flex-row-reverse w-full sm:w-[85%] md:w-[75%] sm:-translate-x-12 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" data-animate-item="" data-delay="450">

<div className="relative z-20 shrink-0">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<img alt="David Kim" className="w-full h-full rounded-full object-cover relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
</div>
<div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl -z-10 group-hover:bg-emerald-500/40 transition-colors duration-500">
</div>
</div>

<div className="relative z-10 -mr-8 sm:-mr-10 flex-1 min-w-0">
<div className="sm:pr-14 sm:pl-8 sm:py-5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 flex flex-row-reverse gap-4 bg-gradient-to-l from-white/[0.07] to-transparent rounded-2xl pt-3 pl-4 pb-3 pr-10 shadow-lg backdrop-blur-md items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex flex-col gap-1 min-w-0 text-right">
<div className="flex items-center gap-2 justify-end">
<span className="text-xs text-white/40 font-light hidden sm:inline-block">DataViz •</span>
<h4 className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-200 transition-colors">
                  David
                  Kim</h4>
</div>
<p className="text-xs sm:text-sm text-white/60 truncate group-hover:text-white/80 transition-colors max-w-[180px] sm:max-w-md">
                "TypeScript support is excellent and performant..."</p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="overflow-hidden sm:pt-32 bg-[#050505] border-white/10 border-t mt-32 pt-24 pb-10 relative">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden select-none -translate-y-20">
<span className="text-[25vw] font-bold tracking-tighter text-white">AURA</span>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
<div className="lg:col-span-5">
<span className="inline-grid place-items-center shadow-violet-700/30 hover:scale-105 transition-transform duration-300 cursor-pointer sm:w-12 sm:h-14 sm:pl-14 sm:pr-8 mix-blend-screen w-10 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86acc108-c8f9-4174-b099-16aadd42c157_320w.jpg)] max-w-sm bg-cover rounded-xl pr-8 pl-14 invert-0"></span>
<h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">Build Premium Digital Experiences.
        </h3>
<p className="text-white/50 max-w-sm mb-8 text-sm sm:text-base leading-relaxed">A modern interface library for
          crafting beautiful, high-performance applications and dynamic dashboards seamlessly.</p>
<div className="flex gap-3 max-w-md">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500 w-full transition-colors backdrop-blur-md" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">Subscribe</button>
</div>
</div>
<div className="lg:col-span-2 lg:col-start-7">
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Licenses</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
<div className="flex items-center gap-6">
<p>© 2024 Aura Design. All rights reserved.</p>
</div>
<div className="flex items-center gap-5">
<a aria-label="Twitter" className="hover:text-white transition-colors hover:scale-110 transform-gpu" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>
</a>
<a aria-label="GitHub" className="hover:text-white transition-colors hover:scale-110 transform-gpu" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 22v-4a4.8 0 0 0-4.8-4.8H8.2A4.8 4.8 0 0 0 3.4 18v4"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</a>
<a aria-label="Discord" className="hover:text-white transition-colors hover:scale-110 transform-gpu" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32">
</path>
</svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
