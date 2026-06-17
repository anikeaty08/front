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



      const menuToggle = document.getElementById('menu-toggle');
      const menuOverlay = document.getElementById('menu-overlay');
      const menuIcon = menuToggle.querySelector('iconify-icon');
      const menuText = menuToggle.querySelector('span');
      let isMenuOpen = false;

      function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
          menuOverlay.classList.add('open');
          menuIcon.setAttribute('icon','lucide:x');
          menuText.textContent = "Close";
          document.body.style.overflow = 'hidden';
        } else {
          menuOverlay.classList.remove('open');
          menuIcon.setAttribute('icon','lucide:menu');
          menuText.textContent = "Menu";
          document.body.style.overflow = '';
        }
      }
      menuToggle.addEventListener('click', toggleMenu);

      const cursor = document.querySelector('.cursor');
      const follower = document.querySelector('.cursor-follower');
      let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px,${mouseY}px) translate(-50%,-50%)`;
      });

      function animateCursor() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate(${followerX}px,${followerY}px) translate(-50%,-50%)`;
        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      function updateHoverTriggers() {
        document.querySelectorAll('.hover-trigger').forEach(trigger => {
          trigger.addEventListener('mouseenter', () => {
            follower.style.width = '80px'; follower.style.height = '80px';
            follower.style.border = '1px solid var(--accent)';
            follower.style.backgroundColor = 'rgba(205,92,69,0.1)';
          });
          trigger.addEventListener('mouseleave', () => {
            follower.style.width = '40px'; follower.style.height = '40px';
            follower.style.border = '1px solid rgba(255,255,255,0.2)';
            follower.style.backgroundColor = 'transparent';
          });
        });
      }
      updateHoverTriggers();

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      const footerText = document.getElementById('footer-text');
      if (footerText) {
        footerText.addEventListener('mouseenter', () => footerText.classList.add('filled'));
        footerText.addEventListener('mouseleave', () => footerText.classList.remove('filled'));
      }
    


            (function() {
              // Intersection Observer with a tight margin to detect middle of viewport
              const options = {
                root: null,
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-index');
                    updateActiveState(index);
                  }
                });
              }, options);

              // Observe all testimonial items
              const items = document.querySelectorAll('.testimonial-item');
              items.forEach(item => observer.observe(item));

              // Click to scroll functionality for avatars
              const avatars = document.querySelectorAll('.avatar-indicator');
              avatars.forEach(avatar => {
                avatar.addEventListener('click', () => {
                  const targetIndex = avatar.getAttribute('data-target');
                  const targetItem = document.querySelector(`.testimonial-item[data-index="${targetIndex}"]`);
                  if (targetItem) {
                    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    updateActiveState(targetIndex);
                  }
                });
              });

              function updateActiveState(index) {
                // Toggle active class on text items
                items.forEach(item => {
                  if (item.getAttribute('data-index') === index) {
                    item.classList.add('active');
                  } else {
                    item.classList.remove('active');
                  }
                });

                // Toggle active class on avatars
                avatars.forEach(avatar => {
                  if (avatar.getAttribute('data-target') === index) {
                    avatar.classList.add('active');
                  } else {
                    avatar.classList.remove('active');
                  }
                });
              }

              // Initialize first item as active
              setTimeout(() => updateActiveState('0'), 100);
            })();
          


            (function() {
              const options = {
                root: null,
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-index');
                    updateActiveState(index);
                  }
                });
              }, options);

              const items = document.querySelectorAll('.testimonial-item-2');
              items.forEach(item => observer.observe(item));

              const avatars = document.querySelectorAll('.avatar-indicator-2');
              avatars.forEach(avatar => {
                avatar.addEventListener('click', () => {
                  const targetIndex = avatar.getAttribute('data-target');
                  const targetItem = document.querySelector(`.testimonial-item-2[data-index="${targetIndex}"]`);
                  if (targetItem) {
                    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    updateActiveState(targetIndex);
                  }
                });
              });

              function updateActiveState(index) {
                items.forEach(item => {
                  if (item.getAttribute('data-index') === index) {
                    item.classList.add('active');
                  } else {
                    item.classList.remove('active');
                  }
                });

                avatars.forEach(avatar => {
                  if (avatar.getAttribute('data-target') === index) {
                    avatar.classList.add('active');
                  } else {
                    avatar.classList.remove('active');
                  }
                });
              }

              setTimeout(() => updateActiveState('0'), 100);
            })();
          
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
      

<div id="global-animated-bg">
<div style={{position: 'absolute', width: '100%', height: '100%', left: '0', top: '0', filter: 'sepia(1) saturate(5) hue-rotate(340deg) brightness(1.1)'}}>
<div data-us-project="vTTCp5g4cVl9nwjlT56Z" style={{position: 'absolute', width: '100%', height: '100%', left: '0', top: '0'}}></div>
</div>
<img alt="" onload="setTimeout(function(){if(typeof UnicornStudio !== 'undefined'){UnicornStudio.init()}else{let s=document.createElement('script');s.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg';s.onload=function(){UnicornStudio.init()};document.head.appendChild(s);}}, 100)" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style={{display: 'none'}}/>
</div>
<div className="noise-overlay"></div>
<div className="cursor" style={{transform: 'translate(139px, 777px) translate(-50%, -50%)'}}></div>
<div className="cursor-follower" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-darkreader-inline-border-right="" data-darkreader-inline-border-short="" data-darkreader-inline-border-top="" style={{width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'transparent', transform: 'translate(0px, 0px) translate(-50%, -50%)', -DarkreaderInlineBorderRight: 'var(--darkreader-border-ffffff33, rgba(48, 52, 54, 0.2))', -DarkreaderInlineBorderLeft: 'var(--darkreader-border-ffffff33, rgba(48, 52, 54, 0.2))', -DarkreaderInlineBgcolor: 'transparent', -DarkreaderInlineBorderShort: '1px solid var(--darkreader-border--accent)', -DarkreaderInlineBorderTop: 'var(--darkreader-border-ffffff33, rgba(48, 52, 54, 0.2))', -DarkreaderInlineBorderBottom: 'var(--darkreader-border-ffffff33, rgba(48, 52, 54, 0.2))'}}></div>
<nav className="">
<div className="nav-logo z-50">
<img alt="The Body Rhythm Logo" className="h-20 md:h-24 w-auto object-contain mix-blend-screen bg-transparent border-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03c35867-d0e9-4a50-898c-b1d90b510b6f_320w.png"/>
</div>
<button className="hover-trigger z-50 text-white flex items-center gap-2 group focus:outline-none" id="menu-toggle">
<span className="font-display uppercase text-xs tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors duration-300">
          Menu
        </span>
<div className="p-2 border border-white/20 rounded-full group-hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon height="20" icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</button>
</nav>
<div className="menu-overlay" id="menu-overlay">
<div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between">
<div className="menu-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-16">
<div className="md:col-start-2">
<div className="menu-category">
<div className="menu-header">ECOSYSTEM</div>
<a className="menu-link hover-trigger !text-3xl py-1" href="#the-gap" onclick="toggleMenu()">
                The Gap
              </a>
<a className="menu-link hover-trigger !text-3xl py-1" href="#market-evolution" onclick="toggleMenu()">
                Market Evolution
              </a>
<a className="menu-link hover-trigger !text-3xl py-1" href="#kynare-ecosystem" onclick="toggleMenu()">
                KYNARE Ecosystem
              </a>
<a className="menu-link hover-trigger !text-3xl py-1" href="#reshaping-the-future" onclick="toggleMenu()">
                Reshaping The Future
              </a>
<a className="menu-link hover-trigger !text-3xl py-1" href="#our-philosophy" onclick="toggleMenu()">
                Our Philosophy
              </a>
</div>
</div>
</div>
</div>
</div>

<main className="">

<section className="section" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" style={{alignItems: 'center', textAlign: 'center', background: 'transparent !important', '--darkreader-inline-bgimage': 'initial', '--darkreader-inline-bgcolor': 'transparent'}}>
<div className="hero-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
<span className="label reveal active xl:bg-clip-text xl:text-transparent text-4xl font-semibold bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#ffffff] to-[#b9c7da]" style={{textAlign: 'center'}}>
            kynare modern healthcare
          </span>
<h1 className="display-xl reveal active hover-trigger tracking-tight" onmouseenter="this.classList.add('filled')" onmouseleave="this.classList.remove('filled')" style={{fontFamily: '"Helios Extended", sans-serif', textAlign: 'center'}}>
            ecosystem
          </h1>
<p className="reveal active md:text-3xl text-2xl italic tracking-wider font-jetbrains-mono drop-shadow-xl" data-darkreader-inline-color="" style={{maxWidth: '800px', marginTop: '2.5rem', color: 'var(--text-main)', lineHeight: '1.5', textAlign: 'center', -DarkreaderInlineColor: 'var(--darkreader-text--text-main, var(--darkreader-text-000000, #e8e6e3))'}}>
            From fragmented care to a continuous journey of recovery &amp;
            resilience.
          </p>
</div>
</section>

<section className="section flex flex-col text-center items-center justify-center" id="the-gap">
<span className="label reveal text-[var(--accent)] uppercase active text-3xl font-semibold italic text-lime-50 tracking-[0.15em] font-display mb-4">
          The Gap the industry ignores
        </span>
<h2 className="heading-lg reveal leading-tight text-8xl font-light tracking-tight max-w-4xl mb-20 active">
          FRAGMENTED CARE
          <br/>
<span className="text-[var(--accent)] font-bold italic text-slate-50">
            ERODES TRUST
          </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left w-full max-w-6xl pr-4 pl-4 gap-x-8 gap-y-8">
<div className="reveal flex flex-col gap-4 h-full active">
<article className="relative overflow-hidden lg:rounded-3xl group shadow-xl backdrop-blur-lg w-full h-full rounded-md bg-[length:300%_auto] bg-no-repeat bg-left" data-darkreader-inline-bgimage="" style={{backgroundImage: 'linear-gradient(to right, rgb(15, 23, 42) 0%, rgb(30, 58, 138) 25%, rgb(125, 211, 252) 50%, rgb(255, 255, 255) 75%, rgb(234, 88, 12) 100%)', backgroundBlendMode: 'color', -DarkreaderInlineBgimage: 'linear-gradient(to right, var(--darkreader-background-0f172a, #0c1222) 0%, var(--darkreader-background-1e3a8a, #182e6e) 25%, var(--darkreader-background-7dd3fc, #035880) 50%, var(--darkreader-background-ffffff, #181a1b) 75%, var(--darkreader-background-ea580c, #bb460a) 100%)'}}>
<div className="z-10 flex flex-col lg:p-8 min-h-[320px] lg:min-h-[400px] h-full pt-6 pr-6 pb-6 pl-6 relative justify-between bg-black/60">
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="uppercase text-3xl font-black text-orange-500/90 tracking-wider bg-white/15 ring-white/30 ring-1 rounded-md pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                      PROBLEM 1
                    </span>
</div>
</div>
<div className="mt-auto">
<h3 className="-translate-y-16 -translate-y-2 -translate-y-8 text-5xl font-bold text-white tracking-tighter font-bricolage text-center max-w-xs mb-2">
                    TRUST GAP
                  </h3>
<blockquote className="mb-4">
<p className="leading-relaxed text-2xl text-white/85 translate-y-3">
                      Clients navigate a disconnected landscape where
                      professionals rarely speak the same language.
                    </p>
</blockquote>
</div>
</div>
</article>
</div>
<div className="reveal flex flex-col gap-4 h-full active">
<article className="relative overflow-hidden lg:rounded-3xl group shadow-xl backdrop-blur-lg w-full h-full rounded-md bg-center bg-[length:300%_auto] bg-no-repeat" data-darkreader-inline-bgimage="" style={{backgroundImage: 'linear-gradient(to right, rgb(15, 23, 42) 0%, rgb(30, 58, 138) 25%, rgb(125, 211, 252) 50%, rgb(255, 255, 255) 75%, rgb(234, 88, 12) 100%)', backgroundBlendMode: 'color', -DarkreaderInlineBgimage: 'linear-gradient(to right, var(--darkreader-background-0f172a, #0c1222) 0%, var(--darkreader-background-1e3a8a, #182e6e) 25%, var(--darkreader-background-7dd3fc, #035880) 50%, var(--darkreader-background-ffffff, #181a1b) 75%, var(--darkreader-background-ea580c, #bb460a) 100%)'}}>
<div className="z-10 flex flex-col lg:p-8 min-h-[320px] lg:min-h-[400px] h-full pt-6 pr-6 pb-6 pl-6 relative justify-between bg-black/60">
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="uppercase text-3xl font-black text-orange-500/90 tracking-wider bg-white/15 ring-white/30 ring-1 rounded-md pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                      PROBLEM 2
                    </span>
</div>
</div>
<div className="mt-auto">
<h3 className="-translate-y-8 text-5xl font-bold text-white tracking-tighter font-bricolage text-center mb-2 translate-y-8">
                    SYSTEMIC FAILURE
                  </h3>
<blockquote className="mb-4">
<p className="leading-relaxed text-2xl text-white/85 translate-y-8">
                      Intervention are short sighted, fixed on isolated pain
                      points rather than the body's integrated movement systems.
                    </p>
</blockquote>
</div>
</div>
</article>
</div>
<div className="reveal flex flex-col gap-4 h-full active">
<article className="relative overflow-hidden lg:rounded-3xl group shadow-xl backdrop-blur-lg w-full h-full rounded-md bg-[length:300%_auto] bg-no-repeat bg-right" data-darkreader-inline-bgimage="" style={{backgroundImage: 'linear-gradient(to right, rgb(15, 23, 42) 0%, rgb(30, 58, 138) 25%, rgb(125, 211, 252) 50%, rgb(255, 255, 255) 75%, rgb(234, 88, 12) 100%)', backgroundBlendMode: 'color', -DarkreaderInlineBgimage: 'linear-gradient(to right, var(--darkreader-background-0f172a, #0c1222) 0%, var(--darkreader-background-1e3a8a, #182e6e) 25%, var(--darkreader-background-7dd3fc, #035880) 50%, var(--darkreader-background-ffffff, #181a1b) 75%, var(--darkreader-background-ea580c, #bb460a) 100%)'}}>
<div className="flex flex-col lg:p-8 min-h-[320px] lg:min-h-[400px] h-full z-10 pt-6 pr-6 pb-6 pl-6 relative justify-between bg-black/80">
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="uppercase text-3xl font-extrabold text-orange-500/90 tracking-wider bg-white/15 rounded-md ring-white/30 ring-1 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                      PROBLEM 3
                    </span>
</div>
</div>
<div className="mt-auto">
<h3 className="-translate-y-12 text-5xl font-bold text-white tracking-tighter font-bricolage text-center mb-2 translate-y-1">
                    CO-EXIST ≠ INTEGRATION
                  </h3>
<blockquote className="mb-4">
<p className="leading-relaxed text-2xl text-white/85 translate-y-6">
                      More the merrier, the more disintegration. An un-unified
                      system is, convenience without a purpose.
                    </p>
<footer className="mt-3 flex items-center gap-3">
<div className="text-xs"></div>
</footer>
</blockquote>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="service-grid">
<style>
          .service-grid { display:flex !important; flex-direction:column !important; height:auto !important; }
          .service-panel { width:100% !important; height:auto !important; min-height:50vh !important; border-right:none !important; border-bottom:1px solid rgba(255,255,255,0.05) !important; padding:4rem 2rem !important; }
          @media (min-width:768px) { .service-panel { padding:6rem 4rem !important; } }
        </style>
<section className="container max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="market-evolution">
<style>
            .testimonial-item {
              transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
              opacity: 0.15;
              filter: blur(4px);
              transform: scale(0.96) translateX(-10px);
            }
            .testimonial-item.active {
              opacity: 1;
              filter: blur(0);
              transform: scale(1) translateX(0);
            }
            .avatar-indicator {
              transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
              opacity: 0.3;
              filter: grayscale(100%);
              transform: scale(1);
              border-color: rgba(255, 255, 255, 0.05);
              box-shadow: none;
            }
            .avatar-indicator.active {
              opacity: 1;
              filter: grayscale(0%);
              transform: scale(1.4);
              border-color: rgba(255, 255, 255, 0.8);
              box-shadow: 0 0 40px -5px rgba(168, 85, 247, 0.4);
              z-index: 20;
            }
            .avatar-indicator::after {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 9999px;
              box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
            }
          </style>

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 relative z-10">
<div className="flex-1">
<h2 className="uppercase leading-[0.9] md:text-7xl lg:text-7xl text-6xl font-semibold text-white tracking-tight font-sans">
                What if HEALTHCARE WORKED DIFFERENTLY ?
              </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12">
<p className="leading-relaxed text-2xl font-medium italic text-zinc-400 text-right max-w-xs translate-y-16">
                SCROLL FOR MODERN HEALTHCARE
              </p>
<div className="w-full flex justify-end"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[800px] relative gap-x-12 gap-y-12">

<div className="lg:col-span-9 flex flex-col gap-40 lg:pb-40 w-full pt-12 pb-12 gap-x-40 gap-y-40">

<div className="testimonial-item group relative aura-reveal active" data-index="0">
<div className="md:pl-12 relative">

<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-8">
                    A structured system where medical insights, modern
                    rehabilitation, and performance are embedded under 1 system.
                  </blockquote>
<div className="flex gap-x-4 gap-y-4 items-center">

<div className="overflow-hidden flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 lg:hidden">
<img className="w-full h-full object-contain scale-[1.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bde2a0f-5b3c-4ff0-a349-bc676fca64ab_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-5xl font-medium text-white">
                        A NEW PARADIGM
                      </span>
<span className="text-[10px] uppercase text-xl font-medium italic text-zinc-500 tracking-wider font-mono">
                        KYNARE ECOSYSTEMS
                      </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="1">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-8">
                    Through Innerflow restoration, we instill the client's
                    ability to be present in life, and complete confidence to
                    thrive daily.
                  </blockquote>
<div className="flex items-center gap-4">
<div className="overflow-hidden flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 lg:hidden">
<img className="w-full h-full object-contain scale-[1.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ef439f8-3e1b-4c95-b0d1-f32fbac7a9c6_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-5xl font-medium text-white">
                        BEYOND MENTAL BARRIERS
                      </span>
<span className="text-[10px] uppercase text-xl font-medium italic text-zinc-500 tracking-wider font-mono">
                        kynare ecosystems
                      </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="2">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl text-white font-light leading-[1.1] tracking-tight mb-8 md:text-5xl">
                    The industry is in need for an ecosystem where medical
                    insights, modern physical therapy, and strength performance
                    are embedded in 1 journey to strive human resilience.
                  </blockquote>
<div className="flex items-center gap-4">
<div className="overflow-hidden flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 lg:hidden">
<img className="w-full h-full object-contain scale-[1.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebbd4833-ab65-4712-b7d2-0174b4aedca6_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-5xl font-medium text-white">
                        MARKET EVOLUTION
                      </span>
<span className="text-[10px] uppercase text-xl font-medium italic text-zinc-500 tracking-wider font-mono">
                        KYNARE ECOSYSTEMS
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-3 relative h-full">
<div className="sticky top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center justify-center">
<div className="avatar-indicator hover-trigger cursor-pointer rounded-full border-2 border-white/10 overflow-hidden w-40 h-40 transition-all duration-500 relative flex items-center justify-center bg-zinc-900/50 p-2 active" data-target="0">
<img className="w-full h-full object-contain scale-[1.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bde2a0f-5b3c-4ff0-a349-bc676fca64ab_320w.png"/>
</div>
<div className="avatar-indicator hover-trigger cursor-pointer rounded-full border-2 border-white/10 overflow-hidden w-40 h-40 transition-all duration-500 relative flex items-center justify-center bg-zinc-900/50 p-2" data-target="1">
<img className="w-full h-full object-contain scale-[1.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ef439f8-3e1b-4c95-b0d1-f32fbac7a9c6_320w.png"/>
</div>
<div className="avatar-indicator hover-trigger cursor-pointer rounded-full border-2 border-white/10 overflow-hidden w-40 h-40 transition-all duration-500 relative flex items-center justify-center bg-zinc-900/50 p-2" data-target="2">
<img className="w-full h-full object-contain scale-[1.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebbd4833-ab65-4712-b7d2-0174b4aedca6_320w.png"/>
</div>
</div>
</div>
</div>

</section>
<div className="w-full"></div>
<div className="w-full border-b border-white/10"></div>
<meta charset="utf-8"/>
<div className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pl-6 pb-24" id="kynare-ecosystem">

<div className="flex flex-col lg:flex-row gap-12 mb-16 gap-x-12 gap-y-12 items-start justify-between">
<div className="flex flex-col">
<span className="label text-[var(--accent)] uppercase text-4xl font-semibold italic text-[#f8401c] tracking-[0.15em] font-display mb-4 translate-y-4">
                4 pillars of the
              </span>
<h2 className="leading-[0.95] text-5xl font-semibold text-white tracking-tighter md:text-8xl">
                KYNARE ECOSYSTEM
              </h2>
</div>
<div className="max-w-md flex flex-col gap-6 lg:pt-2"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 lg:gap-10">

<div className="group relative rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10 aspect-square">

<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-500 perspective-[1000px]">
<div className="relative w-80 h-80 transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-[-10px] -translate-y-6">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl transform -translate-x-4 -translate-y-2 -rotate-[15deg] backdrop-blur-[6px] shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-x-8 group-hover:-rotate-[20deg]"></div>

<div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent border border-white/15 rounded-2xl transform translate-x-0 translate-y-0 -rotate-[5deg] backdrop-blur-[4px] transition-transform duration-500 delay-75 ease-out group-hover:rotate-0"></div>

<img alt="Hematology Science Concept Illustration" className="absolute inset-0 w-full h-full object-cover border border-white/20 rounded-2xl transform translate-x-4 translate-y-2 rotate-[5deg] shadow-2xl transition-transform duration-500 delay-150 ease-out group-hover:translate-x-8 group-hover:rotate-[15deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fa4ecb1-ca04-4ebd-b179-bc3bcdfdfa86_800w.png"/>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="leading-none group-hover:text-indigo-200 transition-colors text-4xl font-medium text-white tracking-tight">
                    Medical Diagnostics &amp; Services
                  </h3>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110" id="trigger-modal-1" onclick="document.getElementById('modal-medical').classList.remove('hidden'); document.getElementById('modal-medical').classList.add('flex'); document.body.style.overflow='hidden';">
<svg className="lucide lucide-plus w-[20px] h-[20px]" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 0, 0)', '--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-color': 'var(--darkreader-text-000000, #e8e6e3)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10 aspect-square">

<div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<img alt="Abstract Hands with Interconnected Glowing Lines" className="absolute inset-0 w-full h-full object-cover mix-blend-lighten opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e22d4c85-705d-4898-a0a3-3f0aba85c5dd_800w.png"/>
<div className="relative w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500">

<div className="absolute top-1/4 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transform -rotate-12 translate-x-[-10%] group-hover:translate-x-[10%] transition-transform duration-[2s] ease-in-out"></div>
<div className="absolute top-1/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-12 translate-x-[-20%] group-hover:translate-x-[5%] transition-transform duration-[2.5s] ease-in-out delay-75"></div>
<div className="absolute top-1/2 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-12 translate-x-[-15%] group-hover:translate-x-[15%] transition-transform duration-[1.8s] ease-in-out delay-100"></div>
<div className="absolute top-2/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-12 translate-x-[-5%] group-hover:translate-x-[20%] transition-transform duration-[2.2s] ease-in-out delay-150"></div>

<div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
<div className="absolute top-[40%] right-[20%] text-[10px] font-mono text-emerald-500/60 opacity-0 group-hover:opacity-00">
                    120fps
                  </div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="leading-none group-hover:text-emerald-200 transition-colors text-4xl font-medium text-white tracking-tight -translate-y-2">
                    Movement Continuum
                  </h3>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110" onclick="document.getElementById('modal-movement').classList.remove('hidden'); document.getElementById('modal-movement').classList.add('flex'); document.body.style.overflow='hidden';">
<svg className="lucide lucide-plus w-[20px] h-[20px]" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '20px', height: '20px', '--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-color': 'var(--darkreader-text-000000, #e8e6e3)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10 aspect-square">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
<div className="absolute inset-0 w-full h-full bg-[#0A0A0A] relative overflow-hidden">
<img alt="Education Costs" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d4cc6a5-4aa3-48ff-b515-522c9c774e50_800w.webp"/>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="leading-none group-hover:text-rose-200 transition-colors text-4xl font-medium text-white tracking-tight">
                    Education &amp; Licensing
                  </h3>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110" onclick="document.getElementById('modal-education').classList.remove('hidden'); document.getElementById('modal-education').classList.add('flex'); document.body.style.overflow='hidden';">
<svg className="lucide lucide-plus w-[20px] h-[20px]" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '20px', height: '20px', '--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-color': 'var(--darkreader-text-000000, #e8e6e3)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10 aspect-square">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 h-64 flex items-center justify-center -translate-y-6">

<div className="absolute inset-0 rounded-full border border-white/5 scale-100 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-4 rounded-full border border-white/5 scale-100 group-hover:scale-110 transition-transform duration-700 delay-75 ease-out"></div>
<div className="absolute inset-8 rounded-full border border-white/10 scale-100 group-hover:scale-105 transition-transform duration-700 delay-150 ease-out border-dashed opacity-50"></div>

<div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] opacity-30">
<div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2"></div>
<div className="absolute left-0 top-1/2 w-2 h-0.5 bg-white -translate-y-1/2"></div>
<div className="absolute right-0 top-1/2 w-2 h-0.5 bg-white -translate-y-1/2"></div>
</div>

<img alt="Human Brain with Digital Glitch Effect" className="absolute w-96 h-96 max-w-none object-contain z-10 transition-transform duration-700 ease-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4496f248-7999-4660-b9aa-d6ccc8ab4897_800w.png"/>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="leading-none group-hover:text-blue-200 transition-colors text-4xl font-medium text-white tracking-tight">
                    Neuro Integration
                  </h3>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110" onclick="document.getElementById('modal-neuro').classList.remove('hidden'); document.getElementById('modal-neuro').classList.add('flex'); document.body.style.overflow='hidden';">
<svg className="lucide lucide-plus" data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="w-full border-b border-white/10"></div>
</section>

<div className="w-full border-b border-white/5 relative z-10 group" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="" id="reshaping-the-future" style={{background: 'rgba(10, 9, 9, 0.12)', -DarkreaderInlineBgimage: 'initial', -DarkreaderInlineBgcolor: 'var(--darkreader-background-0a09091f, rgba(7, 8, 8, 0.12))'}}>
<section className="container max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 -translate-x-2">
<style>
            .testimonial-item-2 {
              transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
              opacity: 0.15;
              filter: blur(4px);
              transform: scale(0.96) translateX(-10px);
            }
            .testimonial-item-2.active {
              opacity: 1;
              filter: blur(0);
              transform: scale(1) translateX(0);
            }
            .avatar-indicator-2 {
              transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
              opacity: 0.3;
              filter: grayscale(100%);
              transform: scale(1);
              border-color: rgba(255, 255, 255, 0.05);
              box-shadow: none;
              border-radius: 0 !important;
              border: none !important;
            }
            .avatar-indicator-2.active {
              opacity: 1;
              filter: grayscale(0%);
              transform: scale(1.4);
              border-color: rgba(255, 255, 255, 0.8);
              box-shadow: none !important;
              z-index: 20;
              border-radius: 0 !important;
              border: none !important;
            }
          </style>

<div className="flex flex-col lg:flex-row items-center justify-between mb-16 pb-12 border-b border-white/10 gap-12 relative z-10">
<div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto gap-6">
<img alt="LifeCare Wellness Ecosystems Logo" className="sm:h-32 md:h-40 lg:h-48 w-auto h-24 object-contain translate-x-16 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/890312ac-a1c9-4f5f-98f2-d9cf7e816be1_800w.png"/>
</div>
<div className="flex-1 flex justify-center lg:justify-end text-center lg:text-right">
<h2 className="uppercase leading-[0.9] md:text-7xl lg:text-7xl text-6xl font-semibold text-white tracking-tight font-sans max-w-2xl">
                reshaping the future of movement
              </h2>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[800px] relative gap-x-12 gap-y-12">
<div className="hidden lg:block lg:col-span-3 relative h-full pt-10">
<div className="sticky top-32 flex flex-col gap-8 items-start pl-6">
<div className="avatar-indicator-2 hover-trigger cursor-pointer overflow-hidden w-64 h-64 transition-all duration-500 relative flex items-center justify-center" data-target="0">
<img className="w-full h-full object-contain -translate-y-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5a4ee12-619a-4234-9c3e-e13ad4cf9f7c_320w.png"/>
</div>
<div className="avatar-indicator-2 hover-trigger cursor-pointer overflow-hidden w-64 h-64 transition-all duration-500 relative flex items-center justify-center" data-target="1">
<img className="w-full h-full object-contain -translate-y-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4abcf17b-f209-46e4-af29-a83b1f34add0_320w.png"/>
</div>
<div className="avatar-indicator-2 hover-trigger cursor-pointer overflow-hidden w-64 h-64 transition-all duration-500 relative flex items-center justify-center" data-target="2">
<img className="w-full h-full object-contain -translate-y-16 scale-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/890312ac-a1c9-4f5f-98f2-d9cf7e816be1_800w.png"/>
</div>
</div>
</div>


<div className="lg:col-span-9 flex flex-col gap-40 lg:pb-40 pt-12 pb-12 gap-x-40 gap-y-40">

<div className="testimonial-item-2 group relative aura-reveal" data-index="0">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-8 xl:pr-16">
                    A new generation of practitioners capable of guiding people
                    through life? Embedding rehab science, movement diagnostics
                    &amp; performance.
                  </blockquote>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="lg:hidden overflow-hidden w-24 h-24 sm:w-32 sm:h-32">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5a4ee12-619a-4234-9c3e-e13ad4cf9f7c_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-5xl font-medium text-white">MODERN ROLES</span>
<span className="text-[10px] uppercase text-xl font-medium italic text-zinc-300 tracking-wider font-sans">KYNARE ECOSYSTEM</span>
</div>
</div>
</div>
</div>

<div className="testimonial-item-2 group relative" data-index="1">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="md:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-8 xl:pr-16">
                    A model where practitioners expand beyond traditional roles,
                    embedding modern physical therapy &amp; strength performance
                    principles to deliver better musculoskeletal outcomes.
                  </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden overflow-hidden w-24 h-24 sm:w-32 sm:h-32">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4abcf17b-f209-46e4-af29-a83b1f34add0_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-5xl font-medium text-white">CAREER GROWTH</span>
<span className="text-[10px] uppercase text-xl font-medium italic text-zinc-500 tracking-wider font-mono">KYNARE EDUCATION</span>
</div>
</div>
</div>
</div>

<div className="testimonial-item-2 group relative" data-index="2">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path className="" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="leading-[1.1] md:text-5xl xl:pr-16 text-3xl font-light text-white tracking-tight mb-8">
                    LIFECARE leading new norm with medical interventions, rehab
                    &amp; performance are all experienced as a branded
                    healthcare experience throughout the nation. (GP Model)
                  </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden overflow-hidden w-24 h-24 sm:w-32 sm:h-32">
<img className="w-full h-full object-contain scale-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/890312ac-a1c9-4f5f-98f2-d9cf7e816be1_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-5xl font-medium text-white">
                        INDUSTRY TRANSFORMATION
                      </span>
<span className="text-[10px] uppercase text-xl font-medium italic text-zinc-500 tracking-wider font-mono">LIFECARE WELLNESS ECOSYSTEM</span>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
</div>
<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-24" id="our-philosophy">
<div className="col-span-1 lg:col-span-12 w-full flex flex-col items-center justify-center mb-8 pb-12 border-b border-white/10 relative z-10">
<section className="z-10 w-full sm:py-24 fade-in fade-in-delay-4 pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase lg:text-7xl text-6xl font-semibold text-slate-50 tracking-tight">
                  KYNARE terminologies
                </p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 text-xl gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-light tracking-tight">
                        Human Movement
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight font-bricolage">
                        Force Transfer
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-merriweather">
                        Efficient Movements
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-light tracking-tight font-instrument-serif">
                        Body Awareness
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-playfair">
                        Resistance Training
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl lg:text-4xl font-light tracking-tighter">
                        Applied Biomechanics
                      </span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-light tracking-tight">
                        Human Movement
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight font-bricolage">
                        Force Transfer
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-merriweather">
                        Efficient Movements
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-light tracking-tight font-instrument-serif">
                        Body Awareness
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-4xl lg:text-5xl font-medium tracking-tight font-playfair">
                        Resistance Training
                      </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-3xl lg:text-4xl font-light tracking-tighter">
                        Applied Biomechanics
                      </span>
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
</section>
</div>
<style id="border-gradient-shared-style">
  [style*="--border-gradient"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius-before, inherit);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: var(--border-gradient);
    pointer-events: none;
  }</style>

<div className="relative flex w-full h-full lg:col-span-7">
<div className="-inset-4 -translate-x-6 sm:-inset-5 sm:rounded-[3rem] z-0 pointer-events-none border-white/10 border rounded-[2.75rem] mx-20 my-4 absolute translate-x-2 scale-110"></div>
<img alt="Innerflow Athletic Performance Concept Graphic" className="min-h-[500px] lg:min-h-[700px] -translate-x-6 [--fx-filter:blur(10px)_liquid-glass(0.6,10)_saturate(1.25)_noise(0.5,1,0)] opacity-100 mix-blend-normal w-full h-full object-cover z-10 rounded-[2rem] relative shadow blur-none backdrop-blur-none scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abf44c52-09bb-4374-b703-57624b7739d4_1600w.png"/>


</div>

<div className="flex flex-col gap-4 lg:gap-5 lg:col-span-5">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-br from-white/10 to-white/0 rounded-3xl pt-4 pr-5 pb-4 pl-5 backdrop-blur-xl -translate-y-8 gap-x-4 gap-y-4" style={{'--darkreader-bgimg--border-gradient': 'linear-gradient(135deg, var(--darkreader-background-ffffff1a, rgba(24, 26, 27, 0.1)), var(--darkreader-background-ffffff00, rgba(24, 26, 27, 0)))', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(24, 24, 27, 0.1), rgba(24, 24, 27, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-center gap-4">
<img alt="Abstract Fluid Gradient Shape" className="object-cover rounded-full w-16 h-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb4eb851-03b6-4e7a-8342-50c9f12e4f56_320w.png"/>
<div className="">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
                  The body's currency to organize human movement &amp;
                  distribute force efficiently in life.
                </h1>
<p className="text-xl font-bold text-[#F8401C] tracking-wider translate-y-3">
                  DEFINITION
                </p>
</div>
</div>
<div className="flex flex-col sm:items-end gap-3"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 -translate-y-8 gap-x-4 gap-y-4">
<div className="md:col-span-3 flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-3xl backdrop-blur-xl overflow-hidden p-0" style={{'--darkreader-bgimg--border-gradient': 'linear-gradient(135deg, var(--darkreader-background-ffffff1a, rgba(24, 26, 27, 0.1)), var(--darkreader-background-ffffff00, rgba(24, 26, 27, 0)))', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(24, 24, 27, 0.1), rgba(24, 24, 27, 0))', '--border-radius-before': '24px'}}>
<img alt="Body Performance and Movement Quote Graphic" className="min-h-[240px] object-center w-full h-full object-cover rounded-3xl blur-none backdrop-blur-none brightness-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6a258a7-a776-45eb-af82-2b00b1add1aa_800w.png"/>
</div>
<div className="flex flex-col md:col-span-2 bg-gradient-to-tl from-white/10 via-white/0 to-white/10 rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl gap-x-2 gap-y-2" style={{'--darkreader-bgimg--border-gradient': 'linear-gradient(135deg, var(--darkreader-background-ffffff1a, rgba(24, 26, 27, 0.1)), var(--darkreader-background-ffffff00, rgba(24, 26, 27, 0)))', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(24, 24, 27, 0.1), rgba(24, 24, 27, 0))', '--border-radius-before': '24px'}}>
<div className="flex flex-col gap-2 text-xs text-slate-200">
<button className="flex hover:bg-slate-800/80 transition text-2xl bg-slate-900/80 border-slate-700/80 border rounded-2xl px-3 py-2 items-center justify-between">
<span className="">Disruption</span>
<span className="flex items-center gap-1 text-[11px] text-slate-400">
<svg className="lucide lucide-arrow-up-right w-[26px] h-[26px]" data-darkreader-inline-color="" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="git-pull-request-close-line" height="26" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '26px', height: '26px'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" fill-rule="evenodd">
<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
<path className="" d="M18 10a1 1 0 0 1 .993.883L19 11v4.17a3.001 3.001 0 1 1-2.172.068L17 15.17V11a1 1 0 0 1 1-1M6 3a3 3 0 0 1 1.172 5.762L7 8.83v6.342a3.001 3.001 0 1 1-2.172.067L5 15.17V8.829A3.001 3.001 0 0 1 6 3m12 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m9.172-13.828a1 1 0 0 1 1.32-.084l.094.084L18 4.586l1.414-1.414a1 1 0 0 1 1.498 1.32l-.084.094L19.414 6l1.414 1.414a1 1 0 0 1-1.32 1.498l-.094-.084L18 7.414l-1.414 1.414a1 1 0 0 1-1.498-1.32l.084-.094L16.586 6l-1.414-1.414a1 1 0 0 1 0-1.414M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" fill="#ea580c"></path>
</g>
</svg>
</span>
</button>
<button className="flex hover:bg-slate-800/80 transition text-2xl bg-slate-900/60 border-slate-700/80 border rounded-2xl pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<span className="">Education</span>
<span className="flex items-center gap-1 text-[11px] text-slate-400">
<svg className="lucide lucide-arrow-up-right w-[22px] h-[22px]" data-darkreader-inline-color="" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="map-line" height="26" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '22px', height: '22px'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" fill-rule="evenodd">
<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
<path className="" d="M8.526 3.104a1.5 1.5 0 0 1 .948 0L15 4.946l5.289-1.763A1.3 1.3 0 0 1 22 4.416V17.64a1.5 1.5 0 0 1-1.026 1.423l-5.5 1.833c-.308.103-.64.103-.948 0L9 19.054l-5.289 1.763A1.3 1.3 0 0 1 2 19.584V6.36a1.5 1.5 0 0 1 1.026-1.423zM8 17.28V5.387L4 6.721v11.892l4-1.334Zm2-11.892V17.28l4 1.334V6.72l-4-1.334Zm6 1.334v11.892l4-1.334V5.387l-4 1.334Z" fill="#ea580c"></path>
</g>
</svg>
</span>
</button>
<button className="flex hover:bg-slate-800/80 transition text-2xl bg-slate-900/60 border-slate-700/80 border rounded-2xl pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<span className="">Solution</span>
<span className="flex items-center gap-1 text-[11px] text-slate-400">
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 w-[24px] h-[24px]" data-darkreader-inline-color="" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="map-pin-fill" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" fill-rule="evenodd">
<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
<path className="" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z" fill="#ea580c"></path>
</g>
</svg>
</span>
</button>
</div>
<button className="inline-flex hover:bg-slate-200 transition text-sm font-bold text-slate-950 bg-gradient-to-br from-[#b6a190] to-orange-600 rounded-2xl mt-2 pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<span className="">ECOSYSTEM FLOW</span>
<svg className="lucide lucide-mail w-[16px] h-[16px]" data-darkreader-inline-color="" data-icon-replaced="true" data-icon-set="solar" data-solar="arrow-right-up-outline" height="16" strokeWidth="2" style={{width: '16px', height: '16px', '--darkreader-inline-color': 'var(--darkreader-text-020617, #e0ddd9)', color: 'rgb(2, 6, 23)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" data-darkreader-inline-fill="" fill="#020617" fill-rule="evenodd" style={{'--darkreader-inline-fill': 'var(--darkreader-text-020617, #e0ddd9)'}}></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col bg-gradient-to-br from-white/10 to-white/0 rounded-3xl backdrop-blur-xl -translate-y-8 gap-x-3 gap-y-3 overflow-hidden pb-0" style={{'--darkreader-bgimg--border-gradient': 'linear-gradient(135deg, var(--darkreader-background-ffffff1a, rgba(24, 26, 27, 0.1)), var(--darkreader-background-ffffff00, rgba(24, 26, 27, 0)))', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(24, 24, 27, 0.1), rgba(24, 24, 27, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-center justify-between pt-5 px-5 relative z-10">
<div className="flex items-center gap-2">
<span className="uppercase text-xl font-extrabold text-[#f8401c] tracking-widest text-left">
                  SOLUTION
                </span>
<i className="lucide lucide-arrow-down h-3.5 w-3.5 text-slate-500"></i>
</div>
</div>
<div className="relative w-full h-56 sm:h-64 md:h-72 flex-1">
<img alt="Optimised Recovery Graphic" className="-translate-y-8 w-full h-full object-cover rounded-b-3xl blur-none backdrop-blur-none scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ebd86e5-df1d-4d34-9f94-267578c26f01_800w.png"/>
<div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
<p className="text-[11px] text-base font-medium text-slate-300 tracking-wide translate-x-4">
                  MEDICAL INSIGHTS | MOVEMENT CONTINUUM PILLAR
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto pt-32 pb-32 px-6" id="contact">
<section className="lg:px-12 text-white bg-black/80 bg-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97a12c55-649a-4c17-b6e4-928ee6cdb19b_1600w.webp)] bg-cover bg-center border-white/10 border-b pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto grid gap-20 items-center lg:grid-cols-1">

<div className="">
<h2 className="text-5xl mb-6 text-white leading-[1.1] font-playfair tracking-tight font-bold lg:text-7xl">
                Malaysia &amp; APAC Market Size
              </h2>

<div className="w-full">
<div className="flex justify-between text-[10px] font-bold text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-2"></div>

<div className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default -mx-4 px-4 rounded-xl">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-white font-semibold text-lg">
<iconify-icon className="text-xl" icon="simple-icons:archdaily"></iconify-icon>
<span className="text-4xl font-geist">
                        Health &amp; Wellness Market
                      </span>
</div>
<span className="text-2xl font-medium italic text-white/80 font-geist">
                      USD 11.42B in 2024
                    </span>
<span className="text-3xl font-black text-orange-600 font-geist">
                      Projected USD 18B by 2033
                    </span>
</div>
<span className="text-xl md:text-3xl font-semibold italic text-white font-mono w-36 h-36 md:w-44 md:h-44 p-4 flex items-center justify-center text-center relative z-10 before:absolute before:inset-0 before:rounded-full before:scale-0 group-hover:before:scale-100 before:transition-transform before:duration-500 before:ease-out before:-z-10 rounded-full transition-all duration-500 flex-shrink-0 lg:-translate-x-8 before:border-2 before:border-white">
                    CAGR 4.6%
                  </span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default -mx-4 px-4 rounded-xl">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-white font-semibold text-lg">
<iconify-icon className="text-xl" icon="simple-icons:dezeen"></iconify-icon>
<span className="text-4xl font-geist">Physical Therapy</span>
</div>
<span className="text-2xl font-medium italic text-white/80 font-geist">
                      USD 85M in 2022
                    </span>
<span className="text-3xl font-black text-orange-600 font-geist">
                      Projected USD 135M by 2030
                    </span>
</div>
<span className="text-xl md:text-3xl font-semibold italic text-white font-mono w-36 h-36 md:w-44 md:h-44 p-4 flex items-center justify-center text-center relative z-10 before:absolute before:inset-0 before:rounded-full before:scale-0 group-hover:before:scale-100 before:transition-transform before:duration-500 before:ease-out before:-z-10 rounded-full transition-all duration-500 flex-shrink-0 lg:-translate-x-8 before:border-2 before:border-white">
                    CAGR 5.85%
                  </span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default -mx-4 px-4 rounded-xl">
<div className="flex flex-col gap-1.5 gap-x-1.5 gap-y-1.5">
<div className="flex items-center gap-3 text-white font-semibold text-lg">
<span className="text-4xl font-geist">
                        Personal Training (APAC)
                      </span>
</div>
<span className="text-2xl font-medium italic text-white/80 font-geist">
                      USD 2.93B in 2022
                    </span>
<span className="text-3xl font-black text-orange-600 font-geist">
                      Projected USD 4.56B in 2030
                    </span>
</div>
<span className="text-xl md:text-3xl font-semibold italic text-white font-mono w-36 h-36 md:w-44 md:h-44 p-4 flex items-center justify-center text-center relative z-10 before:absolute before:inset-0 before:rounded-full before:scale-0 group-hover:before:scale-100 before:transition-transform before:duration-500 before:ease-out before:-z-10 rounded-full transition-all duration-500 flex-shrink-0 lg:-translate-x-8 before:border-2 before:border-white">
                    CAGR 9.24%
                  </span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default -mx-4 px-4 rounded-xl">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-white font-semibold text-lg">
<span className="text-4xl font-geist">Sports Medicine</span>
</div>
<span className="text-2xl font-medium italic text-white/80 font-geist">
                      USD 1.8B in 2024
                    </span>
<span className="text-3xl font-black text-orange-600 font-geist">
                      Projected USD 4.1B by 2030
                    </span>
</div>
<span className="text-xl md:text-3xl font-semibold italic text-white font-mono w-36 h-36 md:w-44 md:h-44 p-4 flex items-center justify-center text-center relative z-10 before:absolute before:inset-0 before:rounded-full before:scale-0 group-hover:before:scale-100 before:transition-transform before:duration-500 before:ease-out before:-z-10 rounded-full transition-all duration-500 flex-shrink-0 lg:-translate-x-8 before:border-2 before:border-white">
                    CAGR 9.62%
                  </span>
</div>
<div className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default -mx-4 px-4 rounded-xl">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-white font-semibold text-lg">
<span className="text-4xl font-geist">
                        Stroke Rehab (APAC fastest growing region)
                      </span>
</div>
<span className="text-2xl font-medium italic text-white/80 font-geist">
                      444,000 ongoing pool, 50K-60K new cases / year
                    </span>
<span className="text-2xl font-black text-white font-geist">
                      Estimated private rehab (USD 150 - 300M)
                    </span>
<span className="text-2xl font-medium italic text-orange-300/60 font-geist">
                      Neurologist to patient ration (1:323,000). Massive unmet
                      demand
                    </span>
</div>
<span className="text-lg md:text-2xl font-semibold italic text-white font-mono w-36 h-36 md:w-44 md:h-44 p-4 flex items-center justify-center text-center relative z-10 before:absolute before:inset-0 before:rounded-full before:scale-0 group-hover:before:scale-100 before:transition-transform before:duration-500 before:ease-out before:-z-10 rounded-full transition-all duration-500 flex-shrink-0 lg:-translate-x-8 before:border-2 before:border-white">
                    Global CAGR 11.24%
                  </span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<h4 className="uppercase text-xs font-black italic tracking-widest font-geist mb-2">
                  References
                </h4>
<div className="text-sm text-white/60 font-geist space-y-1">
<p className="">
                    - Towards Healthcare Research &amp; Consulting. Stroke
                    Rehabilitation Market Size, Shares &amp; Millions Growth.
                    Report Code 5414. Last updated April 2026.
                    https://www.towardshealthcare.com/insights/stroke-rehabilitation-market-sizing
                  </p>
<p className="">
                    - Ministry of Health MNHA 2011–2023 report (Dec 2024) —
                    codeblue.galencentre.org
                  </p>
<p className="">
                    - Tan KS &amp; Venketasubramanian N. Cerebrovasc Dis Extra.
                    2022;12(2):58–67. Karger Publishers. Available:
                    karger.com/cee/article/12/2/58/821900
                  </p>
</div>
</div>
</div>

</div>
</section>
</section>
<footer className="w-full border-t border-white/5 mt-32 pt-12 pb-12 pr-6 pl-6 relative z-10 bg-black/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<img alt="Logo" className="h-8 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03c35867-d0e9-4a50-898c-b1d90b510b6f_320w.png"/>
</div>
<div className="flex gap-8 text-sm text-neutral-500 font-geist"></div>
<div className="text-sm text-neutral-600 font-geist">
            © 2026 Kynare Ecosystems. All rights reserved.
          </div>
</div>
</footer>
</main>
<div className="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8" id="modal-neuro" onclick="this.classList.add('hidden'); this.classList.remove('flex'); document.body.style.overflow='';">
<div className="relative w-full max-w-[98vw] lg:max-w-[1400px] xl:max-w-[1800px] max-h-[98vh] overflow-y-auto bg-transparent p-2 md:p-6" onclick="event.stopPropagation();">
<button aria-label="Close modal" className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" onclick="document.getElementById('modal-neuro').classList.add('hidden'); document.getElementById('modal-neuro').classList.remove('flex'); document.body.style.overflow='';">
<svg data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Healthcare Innovation and Rehabilitation Infographic" className="w-full h-auto rounded-xl md:rounded-2xl mix-blend-screen object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca687d46-ea26-4c41-bc51-bd0bc9d46c34_1600w.png"/>
</div>
</div>
<div className="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8" id="modal-education" onclick="this.classList.add('hidden'); this.classList.remove('flex'); document.body.style.overflow='';">
<div className="relative w-full max-w-[98vw] lg:max-w-[1400px] xl:max-w-[1800px] max-h-[98vh] overflow-y-auto bg-transparent p-2 md:p-6" onclick="event.stopPropagation();">
<button aria-label="Close modal" className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" onclick="document.getElementById('modal-education').classList.add('hidden'); document.getElementById('modal-education').classList.remove('flex'); document.body.style.overflow='';">
<svg data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="KYNARE Methodology and Corporate Integration Infographic" className="w-full h-auto rounded-xl md:rounded-2xl mix-blend-screen object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d611cfec-c3ba-461a-886d-eef94e8e3bbd_1600w.png"/>
</div>
</div>
<div className="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8" id="modal-movement" onclick="this.classList.add('hidden'); this.classList.remove('flex'); document.body.style.overflow='';">
<div className="relative w-full max-w-[98vw] lg:max-w-[1400px] xl:max-w-[1800px] max-h-[98vh] overflow-y-auto bg-transparent p-2 md:p-6" onclick="event.stopPropagation();">
<button aria-label="Close modal" className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" onclick="document.getElementById('modal-movement').classList.add('hidden'); document.getElementById('modal-movement').classList.remove('flex'); document.body.style.overflow='';">
<svg data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Physical Therapy and Movement Recalibration Infographic" className="w-full h-auto rounded-xl md:rounded-2xl mix-blend-screen object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c54e54c-8193-40fe-b436-d2ec1965da6b_1600w.png"/>
</div>
</div>
<div className="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8" id="modal-medical" onclick="this.classList.add('hidden'); this.classList.remove('flex'); document.body.style.overflow='';">
<div className="relative w-full max-w-[98vw] lg:max-w-[1400px] xl:max-w-[1800px] max-h-[98vh] overflow-y-auto bg-transparent p-2 md:p-6" onclick="event.stopPropagation();">
<button aria-label="Close modal" className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300" onclick="document.getElementById('modal-medical').classList.add('hidden'); document.getElementById('modal-medical').classList.remove('flex'); document.body.style.overflow='';">
<svg data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<img alt="Sports Physician Musculoskeletal Diagnostic Infographic" className="w-full h-auto rounded-xl md:rounded-2xl mix-blend-screen object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/510311e3-4324-4fa2-8214-e2debf6a5a5d_1600w.png"/>
</div>
</div>

    </>
  );
}
