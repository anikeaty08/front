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



          (function() {
                  var segBtns = document.querySelectorAll('[data-shop-filter]');
                  var shopLists = document.querySelectorAll('[data-shop-list]');
                  segBtns.forEach(function(btn) {
                    btn.addEventListener('click', function(e) {
                      e.stopPropagation();
                      var filter = btn.getAttribute('data-shop-filter');
                      segBtns.forEach(function(b) {
                        b.style.background = 'transparent';
                        b.style.color = 'rgba(255,255,255,0.5)';
                      });
                      btn.style.background = 'rgba(255,255,255,0.14)';
                      btn.style.color = '#ffffff';
                      shopLists.forEach(function(list) {
                        list.style.display = list.getAttribute('data-shop-list') === filter ? 'flex' : 'none';
                      });
                    });
                  });
                  var mobSegBtns = document.querySelectorAll('[data-mob-shop-filter]');
                  var mobShopLists = document.querySelectorAll('[data-mob-shop-list]');
                  mobSegBtns.forEach(function(btn) {
                    btn.addEventListener('click', function(e) {
                      e.stopPropagation();
                      var filter = btn.getAttribute('data-mob-shop-filter');
                      mobSegBtns.forEach(function(b) {
                        b.style.background = 'transparent';
                        b.style.color = 'rgba(255,255,255,0.5)';
                      });
                      btn.style.background = 'rgba(255,255,255,0.14)';
                      btn.style.color = '#ffffff';
                      mobShopLists.forEach(function(list) {
                        list.style.display = list.getAttribute('data-mob-shop-list') === filter ? 'block' : 'none';
                      });
                    });
                  });
                })();
        


        (function() {
          var menus = ['shop', 'collection', 'world'];
          var activeMenu = null;
          var overlay = document.getElementById('nav-overlay');

          function closeAllDrops() {
            menus.forEach(function(name) {
              var btn = document.getElementById('nav-btn-' + name);
              var drop = document.getElementById('nav-drop-' + name);
              if (btn) btn.setAttribute('aria-expanded', 'false');
              if (drop) drop.classList.remove('etha-drop-open');
            });
            if (overlay) overlay.classList.remove('etha-overlay-active');
            activeMenu = null;
          }

          menus.forEach(function(name) {
            var btn = document.getElementById('nav-btn-' + name);
            if (!btn) return;
            btn.addEventListener('click', function(e) {
              e.stopPropagation();
              if (activeMenu === name) {
                closeAllDrops();
                return;
              }
              closeAllDrops();
              var drop = document.getElementById('nav-drop-' + name);
              btn.setAttribute('aria-expanded', 'true');
              if (drop) drop.classList.add('etha-drop-open');
              if (overlay) overlay.classList.add('etha-overlay-active');
              activeMenu = name;
            });
          });

          if (overlay) overlay.addEventListener('click', closeAllDrops);

          document.addEventListener('click', function(e) {
            if (activeMenu) {
              var drop = document.getElementById('nav-drop-' + activeMenu);
              var btn = document.getElementById('nav-btn-' + activeMenu);
              if (drop && !drop.contains(e.target) && btn && !btn.contains(e.target)) {
                closeAllDrops();
              }
            }
          });

          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
              closeAllDrops();
              closeMobile();
            }
          });

          // Mobile
          var mobileBtn = document.getElementById('nav-mobile-btn');
          var mobilePanel = document.getElementById('nav-mobile-panel');

          function closeMobile() {
            if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
            if (mobilePanel) mobilePanel.classList.remove('etha-mobile-active');
          }

          if (mobileBtn && mobilePanel) {
            mobileBtn.addEventListener('click', function(e) {
              e.stopPropagation();
              var isOpen = mobileBtn.getAttribute('aria-expanded') === 'true';
              if (isOpen) { closeMobile(); } else {
                mobileBtn.setAttribute('aria-expanded', 'true');
                mobilePanel.classList.add('etha-mobile-active');
              }
            });
          }

          // Mobile accordions
          document.querySelectorAll('.etha-mob-acc-btn').forEach(function(trigger) {
            trigger.addEventListener('click', function() {
              var targetId = trigger.getAttribute('data-target');
              var target = document.getElementById(targetId);
              var isOpen = trigger.getAttribute('aria-expanded') === 'true';
              document.querySelectorAll('.etha-mob-acc-btn').forEach(function(t) {
                t.setAttribute('aria-expanded', 'false');
                var tid = t.getAttribute('data-target');
                var el = document.getElementById(tid);
                if (el) el.classList.remove('etha-acc-open');
              });
              if (!isOpen && target) {
                trigger.setAttribute('aria-expanded', 'true');
                target.classList.add('etha-acc-open');
              }
            });
          });
        })();
      


          (function() {
            function updateClock() {
              var el = document.getElementById('etha-seed-clock');
              if (!el) return;
              try {
                var fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
                el.textContent = fmt.format(new Date());
              } catch(e) {
                var n = new Date();
                el.textContent = String(n.getUTCHours()).padStart(2,'0') + ':' + String(n.getUTCMinutes()).padStart(2,'0') + ':' + String(n.getUTCSeconds()).padStart(2,'0');
              }
            }
            updateClock();
            setInterval(updateClock, 1000);

            var underlayText = document.getElementById('etha-underlay-text');
            var underlaySub = document.getElementById('etha-underlay-sub');
            if (underlayText) {
              var obs = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    underlayText.classList.add('etha-revealed');
                    if (underlaySub) underlaySub.classList.add('etha-revealed');
                  }
                });
              }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
              obs.observe(underlayText);
            }
          })();
        


      lucide.createIcons();
    


      (function(){var products=document.querySelectorAll('.ether-product');function clearAll(){products.forEach(function(p){p.classList.remove('is-active');});}products.forEach(function(p){p.addEventListener('mouseenter',function(){clearAll();p.classList.add('is-active');});p.addEventListener('mouseleave',function(){p.classList.remove('is-active');});p.addEventListener('focusin',function(){clearAll();p.classList.add('is-active');});p.addEventListener('focusout',function(){p.classList.remove('is-active');});});})();
    
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
      
<nav className="" style={{position: 'fixed', top: '0px', left: '0px', width: '100%', zIndex: '9999', background: 'transparent'}}>
<style className="">
        .etha-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          white-space: nowrap;
          user-select: none;
        }
        .etha-pill:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.22);
        }
        .etha-pill[aria-expanded="true"] {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.28);
        }
        .etha-pill-arrow {
          width: 10px;
          height: 10px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .etha-pill[aria-expanded="true"] .etha-pill-arrow {
          transform: rotate(180deg);
        }
        .etha-pill-sm {
          padding: 8px 18px;
          font-size: 10px;
        }
        .etha-logo {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
        }

        /* Contained dropdown - the ONLY dropdown style */
        .etha-contained-drop {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-12px);
          width: 90vw;
          max-width: 720px;
          background: rgba(34, 85, 51, 0.38);
          backdrop-filter: blur(40px) saturate(1.4);
          -webkit-backdrop-filter: blur(40px) saturate(1.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.15);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 100;
          overflow: hidden;
        }
        .etha-contained-drop.etha-wide {
          max-width: 880px;
        }
        .etha-contained-drop.etha-drop-open {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .etha-contained-drop-inner {
          padding: 32px 36px;
        }
        .etha-drop-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 8px;
        }
        .etha-drop-cat-link {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: color 0.25s ease, padding-left 0.25s ease;
          letter-spacing: -0.01em;
        }
        .etha-drop-cat-link:last-child { border-bottom: none; }
        .etha-drop-cat-link:hover {
          color: #ffffff;
          padding-left: 6px;
        }
        .etha-drop-viewall {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.25s ease;
        }
        .etha-drop-viewall:hover { color: rgba(255, 255, 255, 0.9); }
        .etha-collection-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          text-decoration: none;
          transition: opacity 0.25s ease;
        }
        .etha-collection-item:last-child { border-bottom: none; }
        .etha-collection-item:hover { opacity: 0.75; }
        .etha-collection-thumb-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .etha-collection-thumb-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .etha-collection-name {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin-bottom: 3px;
        }
        .etha-collection-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.45;
        }
        .etha-world-col-title {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 12px;
        }
        .etha-world-link {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 9px 0;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .etha-world-link:hover {
          color: #ffffff;
          padding-left: 4px;
        }
        .etha-nav-overlay {
          position: fixed;
          inset: 0;
          z-index: -1;
          display: none;
        }
        .etha-nav-overlay.etha-overlay-active { display: block; }

        /* Mobile */
        .etha-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .etha-mobile-panel {
          display: none;
          position: absolute;
          top: calc(100% + 8px);
          left: 16px;
          right: 16px;
          background: rgba(34, 85, 51, 0.38);
          backdrop-filter: blur(40px) saturate(1.4);
          -webkit-backdrop-filter: blur(40px) saturate(1.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          padding: 8px;
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          pointer-events: none;
          z-index: 100;
          max-height: 75vh;
          overflow-y: auto;
        }
        .etha-mobile-panel.etha-mobile-active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .etha-mob-acc-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 14px 16px;
          border-radius: 12px;
          transition: background 0.2s ease;
        }
        .etha-mob-acc-btn:hover { background: rgba(255, 255, 255, 0.06); }
        .etha-mob-acc-btn svg { transition: transform 0.3s ease; flex-shrink: 0; }
        .etha-mob-acc-btn[aria-expanded="true"] svg { transform: rotate(180deg); }
        .etha-mob-acc-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
          padding: 0 16px;
        }
        .etha-mob-acc-body.etha-acc-open { max-height: 500px; }
        .etha-mob-acc-body a {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color 0.2s ease;
        }
        .etha-mob-acc-body a:last-child { border-bottom: none; }
        .etha-mob-acc-body a:hover { color: rgba(255, 255, 255, 0.95); }
        .etha-mob-section {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .etha-mob-section:last-of-type { border-bottom: none; }

        @media (max-width: 768px) {
          .etha-nav-center-pills, .etha-nav-right-pills { display: none !important; }
          .etha-mobile-toggle { display: flex !important; }
          .etha-contained-drop { display: none !important; }
          .etha-mobile-panel { display: block; }
        }
        @media (prefers-reduced-motion: reduce) {
          .etha-contained-drop, .etha-mobile-panel, .etha-pill-arrow, .etha-mob-acc-btn svg, .etha-mob-acc-body {
            transition: none !important;
          }
        }
      </style>
<div className="flex md:px-10 md:py-6 w-full pt-4 pr-6 pb-4 pl-6 relative items-center justify-between">

<a className="etha-logo relative z-20 transition-opacity duration-200 ease-out opacity-95 hover:opacity-100" href="/" style={{textDecoration: 'none'}}>
<img alt="Ether" className="w-auto h-[100px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c825cde-0a20-4812-bb3f-d8bfea8804c1_800w.png" style={{display: 'block', filter: 'brightness(0) invert(1)'}}/>
</a>
<style>
          /* === GLASS LEVEL 4 — WILD TEXTURED GLASS === */

          /* SVG noise texture for cathedral/hammered glass effect */
          .glass-wild-texture-svg {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
            border-radius: inherit;
            overflow: hidden;
          }
          .glass-wild-texture-svg::before {
            content: '';
            position: absolute;
            inset: -50%;
            width: 200%;
            height: 200%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            background-size: 128px 128px;
            opacity: 0.07;
            mix-blend-mode: overlay;
            border-radius: inherit;
          }

          /* Second organic texture layer — water-glass ripple */
          .glass-wild-texture-svg::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='warp'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.04 0.06' numOctaves='3' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.12'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23warp)'/%3E%3C/svg%3E");
            background-size: 200px 200px;
            opacity: 0.06;
            mix-blend-mode: soft-light;
            border-radius: inherit;
          }

          /* Inner highlight layer */
          .glass-wild-highlight {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 2;
            border-radius: inherit;
            background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%);
          }

          /* === PILL GLASS TREATMENT === */
          .etha-pill.glass-wild {
            position: relative;
            background: rgba(34, 85, 51, 0.42);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px) saturate(1.3);
            -webkit-backdrop-filter: blur(20px) saturate(1.3);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.06);
            transition: background 280ms ease-out, border-color 280ms ease-out, transform 280ms ease-out, filter 280ms ease-out;
            overflow: hidden;
            isolation: isolate;
          }

          .etha-pill.glass-wild:hover {
            background: rgba(34, 85, 51, 0.52);
            border-color: rgba(255, 255, 255, 0.18);
            transform: translateY(-1px);
            filter: brightness(1.05);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          }

          .etha-pill.glass-wild[aria-expanded="true"] {
            background: rgba(34, 85, 51, 0.55);
            border-color: rgba(255, 255, 255, 0.22);
          }

          /* === STATUS DOT === */
          .etha-pill .etha-status-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            display: block;
            background: radial-gradient(circle at 45% 45%, #5a9e78, #2d6b4a 60%, #1e4d35 100%);
            box-shadow: 0 0 4px 1px rgba(45, 107, 74, 0.25), 0 0 8px 2px rgba(45, 107, 74, 0.1);
            transition: transform 280ms ease, box-shadow 280ms ease, background 280ms ease;
            flex-shrink: 0;
          }

          .etha-pill:hover .etha-status-dot {
            background: radial-gradient(circle at 45% 45%, #6db88a, #3a7d5a 60%, #245a3e 100%);
            box-shadow: 0 0 5px 1.5px rgba(55, 130, 88, 0.35), 0 0 10px 3px rgba(55, 130, 88, 0.15);
            transform: scale(1.08);
          }

          /* === MEGA MENU DROPDOWN GLASS TREATMENT === */
          .etha-contained-drop.glass-wild {
            background: rgba(28, 72, 44, 0.45);
            backdrop-filter: blur(22px) saturate(1.4);
            -webkit-backdrop-filter: blur(22px) saturate(1.4);
            border: 1px solid rgba(255, 255, 255, 0.09);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
            overflow: hidden;
            isolation: isolate;
            transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .etha-contained-drop.glass-wild.etha-drop-open {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
          }

          /* Dropdown texture overlay — applied via pseudo on inner container */
          .etha-contained-drop.glass-wild > .etha-contained-drop-inner {
            position: relative;
            z-index: 3;
          }

          .etha-contained-drop.glass-wild::before {
            content: '';
            position: absolute;
            inset: -50%;
            width: 200%;
            height: 200%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.55' numOctaves='5' stitchTiles='stitch' seed='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)'/%3E%3C/svg%3E");
            background-size: 150px 150px;
            opacity: 0.065;
            mix-blend-mode: overlay;
            pointer-events: none;
            z-index: 1;
            border-radius: inherit;
          }

          .etha-contained-drop.glass-wild::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(160deg, rgba(255,255,255,0.05) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.025) 100%);
            pointer-events: none;
            z-index: 2;
            border-radius: inherit;
          }
        </style>

<div className="etha-nav-center-pills absolute left-1/2 -translate-x-1/2 flex items-center gap-2" role="menubar">
<button aria-expanded="false" aria-haspopup="true" className="etha-pill glass-wild group" id="nav-btn-shop" role="menuitem" style={{position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<span className="glass-wild-texture-svg"></span>
<span className="glass-wild-highlight"></span>
<span className="etha-status-dot" style={{position: 'relative', zIndex: '3'}}></span>
<span className="text-[11px] group-hover:text-white uppercase font-medium text-white/90 tracking-wide font-geist" style={{position: 'relative', zIndex: '3'}}>
              Shop
            </span>
<svg className="etha-pill-arrow" fill="none" height="10" style={{position: 'relative', zIndex: '3'}} viewbox="0 0 10 10" width="10">
<path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
</button>
<button aria-expanded="false" aria-haspopup="true" className="etha-pill glass-wild group" id="nav-btn-collection" role="menuitem" style={{position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<span className="glass-wild-texture-svg"></span>
<span className="glass-wild-highlight"></span>
<span className="etha-status-dot" style={{position: 'relative', zIndex: '3'}}></span>
<span className="text-[11px] group-hover:text-white uppercase font-medium text-white/90 tracking-wide font-geist" style={{position: 'relative', zIndex: '3'}}>
              Collections
            </span>
<svg className="etha-pill-arrow" fill="none" height="10" style={{position: 'relative', zIndex: '3'}} viewbox="0 0 10 10" width="10">
<path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
</button>
<button aria-expanded="false" aria-haspopup="true" className="etha-pill glass-wild group" id="nav-btn-world" role="menuitem" style={{position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<span className="glass-wild-texture-svg"></span>
<span className="glass-wild-highlight"></span>
<span className="etha-status-dot" style={{position: 'relative', zIndex: '3'}}></span>
<span className="text-[11px] group-hover:text-white uppercase font-medium text-white/90 tracking-wide font-geist" style={{position: 'relative', zIndex: '3'}}>
              World
            </span>
<svg className="etha-pill-arrow w-[10px] h-[10px]" data-icon-replaced="true" fill="none" height="10" strokeWidth="2" style={{width: '10px', height: '10px', color: 'rgb(255, 255, 255)', position: 'relative', zIndex: '3'}} viewbox="0 0 10 10" width="10">
<path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
</button>

<div aria-label="Shop menu" className="etha-contained-drop glass-wild" id="nav-drop-shop" role="menu" style={{maxWidth: '420px', width: '420px'}}>
<div className="etha-contained-drop-inner" style={{padding: '24px 28px 28px 28px', display: 'flex', flexDirection: 'column', gap: '0'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', padding: '3px', marginBottom: '20px', width: 'fit-content'}}>
<button className="etha-shop-seg-btn etha-shop-seg-active font-geist" data-shop-filter="all" style={{padding: '7px 20px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.25s ease', background: 'rgba(255,255,255,0.14)', color: '#ffffff'}}>
                  All
                </button>
<button className="etha-shop-seg-btn font-geist" data-shop-filter="women" style={{padding: '7px 20px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.25s ease', background: 'rgba(255,255,255,0.14)', color: '#ffffff'}}>
                  Women
                </button>
<button className="etha-shop-seg-btn font-geist" data-shop-filter="men" style={{padding: '7px 20px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.25s ease', background: 'rgba(255,255,255,0.14)', color: '#ffffff'}}>
                  Men
                </button>
</div>
<p className="etha-drop-section-title font-geist" style={{marginBottom: '6px', fontSize: '10px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)'}}>
                Categories
              </p>
<div data-shop-list="all" style={{display: 'flex', flexDirection: 'column'}}>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Outerwear
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Tops
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Bottoms
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: 'none', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Accessories
                </a>
</div>
<div data-shop-list="women" style={{flexDirection: 'column', display: 'none'}}>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Outerwear
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Dresses
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Tops
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: 'none', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Accessories
                </a>
</div>
<div data-shop-list="men" style={{flexDirection: 'column', display: 'none'}}>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Outerwear
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Shirts
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Bottoms
                </a>
<a className="etha-drop-cat-link font-geist" href="#" style={{fontSize: '14px', padding: '11px 0px', borderBottom: 'none', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'block', letterSpacing: '-0.01em'}}>
                  Accessories
                </a>
</div>
<div style={{marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)'}}>
<a className="font-geist" href="#" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '12px', fontWeight: '500', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.25s ease'}}>
                  View All →
                </a>
</div>
</div>
</div>

<div aria-label="Collections menu" className="etha-contained-drop glass-wild" id="nav-drop-collection" role="menu" style={{maxWidth: '420px', width: '420px'}}>
<div className="etha-contained-drop-inner" style={{padding: '28px 32px'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
<a href="#" style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', textDecoration: 'none'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden'}}>
<img alt="Cosmos" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7dc27b8a-06e6-401c-8ce1-ae764d88eb47_1600w.png?w=120&amp;q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', letterSpacing: '-0.01em', marginBottom: '2px'}}>
                      COSMOS
                    </div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.4'}}>
                      Upcycled leather jackets and statement pieces.
                    </div>
</div>
</a>
<a href="#" style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', textDecoration: 'none'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden'}}>
<img alt="Land" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47a0318-7a78-45cc-b280-c510190c8182_1600w.png?w=120&amp;q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', letterSpacing: '-0.01em', marginBottom: '2px'}}>
                      LAND
                    </div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.4'}}>
                      Recycled nylon and technical outdoor garments.
                    </div>
</div>
</a>
<a href="#" style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', textDecoration: 'none'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden'}}>
<img alt="Soil" className="object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b779dc3f-8379-4858-a8a4-1149caabe96d_320w.png?w=800&amp;q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', letterSpacing: '-0.01em', marginBottom: '2px'}}>
                      SOIL
                    </div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.4'}}>
                      Organic cotton workwear and foundational pieces.
                    </div>
</div>
</a>
<a href="#" style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0px', borderBottom: 'none', textDecoration: 'none'}}>
<div style={{width: '48px', height: '48px', borderRadius: '12px', flexShrink: '0', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden'}}>
<img alt="Sanctuary" className="object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/964dfbee-b21d-4d39-b008-45fba5518f3b_320w.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '500', color: 'rgb(255, 255, 255)', letterSpacing: '-0.01em', marginBottom: '2px'}}>
                      SANCTUARY
                    </div>
<div className="font-geist" style={{fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.4'}}>
                      Homeware and ritual objects.
                    </div>
</div>
</a>
</div>
</div>
</div>

<div aria-label="World menu" className="etha-contained-drop glass-wild" id="nav-drop-world" role="menu" style={{maxWidth: '420px', width: '420px'}}>
<div className="etha-contained-drop-inner" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '28px', padding: '28px 32px'}}>
<div>
<p className="font-geist" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px'}}>
                  Explore
                </p>
<a className="etha-world-link font-geist" href="#">Lookbook</a>
<a className="etha-world-link font-geist" href="#">Campaign</a>
</div>
<div>
<p className="font-geist" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px'}}>
                  Stories
                </p>
<a className="etha-world-link font-geist" href="#">Journal</a>
<a className="etha-world-link font-geist" href="#">
                  Behind the Scenes
                </a>
</div>
<div>
<p className="font-geist" style={{fontFamily: '\'Inter\', sans-serif', fontSize: '10px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px'}}>
                  About
                </p>
<a className="etha-world-link font-geist" href="#">Our Story</a>
<a className="etha-world-link font-geist" href="#">
                  Responsibility
                </a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 relative z-20">
<div className="etha-nav-right-pills flex items-center gap-2">
<a className="etha-pill etha-pill-sm glass-wild transition-colors text-white font-geist" href="#" style={{textDecoration: 'none', position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<span className="glass-wild-texture-svg"></span>
<span className="glass-wild-highlight"></span>
<span style={{position: 'relative', zIndex: '3'}}>Cart (0)</span>
</a>
</div>
<button aria-expanded="false" aria-label="Toggle menu" className="etha-mobile-toggle" id="nav-mobile-btn">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="etha-mobile-panel" id="nav-mobile-panel">
<div className="etha-mob-section">
<button aria-expanded="false" className="etha-mob-acc-btn" data-target="mob-shop">
<span className="font-geist">Shop</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="etha-mob-acc-body" id="mob-shop">
<div style={{display: 'flex', alignItems: 'center', gap: '0', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', padding: '3px', margin: '8px 0 12px 0', width: 'fit-content'}}>
<button className="etha-mob-shop-seg-active font-geist" data-mob-shop-filter="all" style={{padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.14)', color: '#ffffff', transition: 'all 0.25s ease'}}>
                  All
                </button>
<button className="font-geist" data-mob-shop-filter="women" style={{padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.14)', color: '#ffffff', transition: 'all 0.25s ease'}}>
                  Women
                </button>
<button className="font-geist" data-mob-shop-filter="men" style={{padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: '\'Inter\', sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.14)', color: '#ffffff', transition: 'all 0.25s ease'}}>
                  Men
                </button>
</div>
<div data-mob-shop-list="all">
<a className="font-geist" href="#">Outerwear</a>
<a className="font-geist" href="#">Tops</a>
<a className="font-geist" href="#">Bottoms</a>
<a className="font-geist" href="#">Knitwear</a>
<a className="font-geist" href="#">Accessories</a>
</div>
<div data-mob-shop-list="women" style={{display: 'none'}}>
<a className="font-geist" href="#">Outerwear</a>
<a className="font-geist" href="#">Dresses</a>
<a className="font-geist" href="#">Tops</a>
<a className="font-geist" href="#">Accessories</a>
</div>
<div data-mob-shop-list="men" style={{display: 'none'}}>
<a className="font-geist" href="#">Outerwear</a>
<a className="font-geist" href="#">Shirts</a>
<a className="font-geist" href="#">Bottoms</a>
<a className="font-geist" href="#">Accessories</a>
</div>
<a className="font-geist" href="#" style={{color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                View All →
              </a>
</div>
</div>
<div className="etha-mob-section">
<button aria-expanded="false" className="etha-mob-acc-btn" data-target="mob-coll">
<span className="font-geist">Collections</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="etha-mob-acc-body" id="mob-coll">
<a href="#" style={{display: 'flex', flexDirection: 'column', gap: '2px', padding: '12px 0'}}>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', fontSize: '14px'}}>
                  Cosmos
                </span>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px'}}>
                  Upcycled leather jackets &amp; statement pieces.
                </span>
</a>
<a href="#" style={{display: 'flex', flexDirection: 'column', gap: '2px', padding: '12px 0'}}>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', fontSize: '14px'}}>
                  Land
                </span>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px'}}>
                  Recycled nylon &amp; technical outdoor garments.
                </span>
</a>
<a href="#" style={{display: 'flex', flexDirection: 'column', gap: '2px', padding: '12px 0'}}>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', fontSize: '14px'}}>
                  Soil
                </span>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px'}}>
                  Organic cotton workwear &amp; foundational pieces.
                </span>
</a>
<a href="#" style={{display: 'flex', flexDirection: 'column', gap: '2px', padding: '12px 0'}}>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500', fontSize: '14px'}}>
                  Sanctuary
                </span>
<span className="font-geist" style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px'}}>
                  Homeware, incense &amp; ritual objects.
                </span>
</a>
</div>
</div>
<div className="etha-mob-section">
<button aria-expanded="false" className="etha-mob-acc-btn" data-target="mob-world">
<span className="font-geist">World</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="etha-mob-acc-body" id="mob-world">
<a className="font-geist" href="#">Lookbook</a>
<a className="font-geist" href="#">Campaign</a>
<a className="font-geist" href="#">Journal</a>
<a className="font-geist" href="#">Behind the Scenes</a>
<a className="font-geist" href="#">Our Story</a>
<a className="font-geist" href="#">Responsibility</a>
</div>
</div>
<div style={{padding: '12px 8px 8px', display: 'flex', gap: '8px'}}>
<a className="etha-pill etha-pill-sm font-geist" href="#" style={{textDecoration: 'none', flex: '1 1 0%', justifyContent: 'center', fontSize: '11px'}}>
              Log In
            </a>
<a className="etha-pill etha-pill-sm font-geist" href="#" style={{textDecoration: 'none', flex: '1 1 0%', justifyContent: 'center', fontSize: '11px'}}>
              Cart (0)
            </a>
</div>
</div>

<div className="etha-nav-overlay" id="nav-overlay"></div>


</div>

</nav>

<main className="" style={{margin: '0', padding: '0'}}>
<div className="grid-item relative w-full h-[60vh] md:h-[80vh] bg-neutral-200 cursor-pointer">
<img alt="Hero image" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ea40774-7441-4074-9e74-6e07b8c7cb05_3840w.png"/>

<div className="absolute inset-x-0 bottom-0 h-[60%] md:h-1/2 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-6 pb-8 md:p-12 md:pb-12 z-10 flex flex-col justify-end text-white pointer-events-none hero-editorial">
<style>
            @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400&display=swap');
            @keyframes editorial-reveal {
              0% { opacity: 0; transform: translateY(12px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .hero-editorial {
              animation: editorial-reveal 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
            }
            .editorial-meta {
              font-family: 'Space Mono', ui-monospace, SFMono-Regular, monospace;
            }
          </style>
<div className="flex flex-col gap-6 md:gap-8">
<span className="editorial-meta text-[10px] md:text-[11px] tracking-[0.25em] text-white/60 uppercase">
              001
            </span>
<div className="flex flex-col gap-3">
<h2 className="font-geist text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-white/95">
                Ether — SUMMER '026
              </h2>
<p className="font-geist text-[12px] md:text-[13px] leading-[1.7] text-white/70 max-w-[280px] md:max-w-[340px] font-light tracking-[0.02em]">
                Garments shaped through natural texture, utility, and organic
                form. Soil explores grounded silhouettes through cotton,
                structure, and lived-in materiality.
              </p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="grid-item relative aspect-[3/4] bg-neutral-300 cursor-pointer ether-product">
<img alt="Model in brown jacket" className="object-cover absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/product'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d3c35f4-a5a0-4ac3-9d55-77f9c687c50a_1600w.png"/>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">RECONSTRUCTED LEATHER COAT</div>
<div className="ether-meta-desc">
              Upcycled leather outerwear rebuilt through age, wear, and
              preservation.
            </div>
</div>
</div>
<div className="grid-item relative aspect-[3/4] bg-neutral-100 cursor-pointer ether-product">
<img alt="Model in patterned shirt" className="object-cover absolute top-0 right-0 bottom-0 left-0 -multi" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d774c29d-b97d-42d7-9d68-18917ff6603b_1600w.png?w=800&amp;q=80"/>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">PRINTED ARCHIVE SHIRT</div>
<div className="ether-meta-desc">
              Lightweight cotton shirt patterned through layered studio prints.
            </div>
</div>
</div>
<div className="grid-item relative aspect-[3/4] bg-amber-800 cursor-pointer ether-product">
<img alt="Detail shot with warm tones" className="object-cover absolute top-0 right-0 bottom-0 left-0 -multi" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7dc27b8a-06e6-401c-8ce1-ae764d88eb47_1600w.png?w=800&amp;q=80"/>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">EARTH TONE STUDY</div>
<div className="ether-meta-desc">
              A material exploration in warm pigment, raw cotton, and natural
              dye.
            </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">
<div className="grid-item relative aspect-[3/4] md:aspect-auto md:h-[90vh] bg-black cursor-pointer ether-product">
<img alt="Model with crochet hat" className="absolute inset-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&amp;q=80&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center top'}}/>
<div className="bg-black/30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cd81e28-7b78-43b1-942e-42c3f995951c_1600w.png)] bg-cover bg-center absolute inset-0"></div>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">HAND-CROCHETED HEADPIECE</div>
<div className="ether-meta-desc">
              Slow-made knit accessory shaped from undyed regenerative wool.
            </div>
</div>
</div>
<div className="grid-item relative aspect-[3/4] md:aspect-auto md:h-[90vh] bg-neutral-200 cursor-pointer ether-product">
<img alt="Model in brown shirt" className="object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/548ad8cf-65d4-4ce5-833e-5da3aadb1616_1600w.png"/>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">UTILITY OVERSHIRT — UMBER</div>
<div className="ether-meta-desc">
              Mid-weight workwear cut from organic cotton, finished in earth
              umber.
            </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="grid-item relative aspect-[3/4] bg-neutral-100 cursor-pointer ether-product">
<img alt="Model in black outfit" className="object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47a0318-7a78-45cc-b280-c510190c8182_1600w.png?w=800&amp;q=80"/>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">TECHNICAL FIELD ENSEMBLE</div>
<div className="ether-meta-desc">
              Recycled nylon system designed for movement, weather, and quiet
              utility.
            </div>
</div>
</div>
<div className="grid-item relative aspect-[3/4] bg-neutral-200 cursor-pointer ether-product">
<video autoplay="" className="w-full h-full object-cover absolute inset-0" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f537f8a-583d-494e-aa01-9ed0f54e2877_1600w.png?w=800&amp;q=80" src="https://videos.pexels.com/video-files/6604479/6604479-hd_1920_1080_25fps.mp4"></video>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">MOTION STUDY — 026</div>
<div className="ether-meta-desc">
              Garment in motion. A study of fabric behaviour under natural
              light.
            </div>
</div>
</div>
<div className="grid-item relative aspect-[3/4] bg-amber-100 cursor-pointer ether-product">
<img alt="Model in terracotta shirt" className="absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83af9431-e13a-4f98-beee-73415ac90f3d_1600w.png?w=800&amp;q=80"/>

<div aria-hidden="true" className="ether-product-symbol">
<span className="ether-sym-x">x</span>
<span className="ether-sym-deg">°</span>
</div>

<div className="ether-product-meta">
<div className="ether-meta-deg">°</div>
<div className="ether-meta-title">TERRACOTTA LINEN SHIRT</div>
<div className="ether-meta-desc">
              Loose-cut shirt in pigment-dyed linen — a quiet study in warmth.
            </div>
</div>
</div>
</div>
</main>

<footer className="border-neutral-200 border-t mt-0">
<div className="z-10 w-full relative" style={{backgroundColor: '#2d4a3e', position: 'relative'}}>
<style>
          .etha-seed-footer { background-color: #2d4a3e; color: #ffffff; font-family: 'Inter', sans-serif; position: relative; z-index: 2; }
          .etha-seed-inner { max-width: 1440px; margin: 0 auto; padding: 72px 56px 56px 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
          .etha-seed-statement { font-size: clamp(28px, 3.5vw, 44px); font-weight: 400; line-height: 1.2; letter-spacing: -0.025em; color: #ffffff; margin-bottom: 32px; }
          .etha-seed-subline { font-size: 14px; font-weight: 400; color: rgba(255, 255, 255, 0.7); line-height: 1.5; margin-bottom: 4px; }
          .etha-seed-consent { font-size: 12px; font-weight: 400; color: rgba(255, 255, 255, 0.45); line-height: 1.5; margin-bottom: 20px; }
          .etha-seed-cols-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
          .etha-seed-col-heading { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255, 255, 255, 0.4); margin-bottom: 16px; }
          .etha-seed-col-links { display: flex; flex-direction: column; gap: 10px; }
          .etha-seed-col-link { font-size: 14px; font-weight: 400; color: rgba(255, 255, 255, 0.85); text-decoration: none; transition: opacity 0.25s ease; display: block; }
          .etha-seed-col-link:hover { opacity: 0.6; }
          .etha-underlay-section { position: relative; z-index: 1; width: 100%; height: 100vh; min-height: 600px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #0a0a0a; }
          .etha-underlay-bg { position: absolute; inset: 0; background-image: url('https://images.unsplash.com/photo-1451186859696-371d9477be93?w=1920&q=80'); background-size: cover; background-position: center; opacity: 0.5; }
          .etha-underlay-text { position: relative; z-index: 2; font-family: 'Inter', sans-serif; font-size: clamp(48px, 10vw, 160px); font-weight: 300; letter-spacing: -0.04em; color: #ffffff; text-align: center; opacity: 0; filter: blur(12px); transform: translateY(30px); transition: opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
          .etha-underlay-text.etha-revealed { opacity: 1; filter: blur(0px); transform: translateY(0); }
          .etha-underlay-sub { position: relative; z-index: 2; font-size: 13px; font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255, 255, 255, 0.5); text-align: center; margin-top: 16px; opacity: 0; transition: opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s; }
          .etha-underlay-sub.etha-revealed { opacity: 1; }
          @media (max-width: 1023px) { .etha-seed-inner { grid-template-columns: 1fr; padding: 56px 32px 48px 32px; gap: 48px; } }
          @media (max-width: 639px) { .etha-seed-inner { padding: 40px 20px 36px 20px; gap: 40px; } .etha-seed-cols-row { grid-template-columns: 1fr 1fr; gap: 28px; } .etha-underlay-section { height: 70vh; min-height: 400px; } }
          @media (max-width: 479px) { .etha-seed-cols-row { grid-template-columns: 1fr; gap: 32px; } }
        </style>
<div className="etha-seed-footer">
<div className="etha-seed-inner">
<div className="" style={{display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '560px'}}>
<div style={{aspectRatio: '1/1', maxHeight: '88px', maxWidth: '88px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', marginBottom: '40px'}}>
<img alt="ETHA Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c825cde-0a20-4812-bb3f-d8bfea8804c1_800w.png" style={{height: '100%', width: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)', display: 'block'}}/>
</div>
<h2 className="etha-seed-statement">
                Modern utility, crafted in London, rooted in material honesty.
              </h2>
<p className="etha-seed-subline">
                Studio notes, drops, and new releases — to your inbox.
              </p>
<p className="etha-seed-consent">
                By signing up you consent to receive ETHA emails.
              </p>
<div style={{position: 'relative', width: '100%', maxWidth: '440px', marginBottom: '16px'}}>
<input onblur="this.style.borderColor='rgba(255,255,255,0.12)'" onfocus="this.style.borderColor='rgba(255,255,255,0.3)'" placeholder="Sign Up For Our Newsletter" style={{width: '100%', background: 'rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '22px', padding: '16px 56px 16px 24px', color: 'rgb(255, 255, 255)', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: '400'}} type="email"/>
<button aria-label="Submit" style={{position: 'absolute', right: '6px', top: '50%', width: '40px', height: '40px', borderRadius: '50%', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div style={{display: 'inline-flex', width: 'fit-content', flexDirection: 'column', gap: '4px', background: 'rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '22px', padding: '14px 24px'}}>
<span style={{fontSize: '11px', fontWeight: '400', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.02em'}}>
                  UK Time (Europe/London)
                </span>
<span id="etha-seed-clock" style={{fontFamily: '\'Geist Mono\', ui-monospace, SFMono-Regular, monospace', fontSize: '13px', fontWeight: '500', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em'}}>21:16:09</span>
</div>
</div>
<div className="" style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
<div className="etha-seed-cols-row">
<div>
<p className="etha-seed-col-heading">Products</p>
<div className="etha-seed-col-links">
<a className="etha-seed-col-link" href="#">cosmos</a>
<a className="etha-seed-col-link" href="#">land</a>
<a className="etha-seed-col-link" href="#">soil</a>
<a className="etha-seed-col-link" href="#">sanctuary</a>
</div>
</div>
<div>
<p className="etha-seed-col-heading">Brand</p>
<div className="etha-seed-col-links">
<a className="etha-seed-col-link" href="#">about</a>
<a className="etha-seed-col-link" href="#">materials</a>
<a className="etha-seed-col-link" href="#">journal</a>
</div>
</div>
<div>
<p className="etha-seed-col-heading">Inquire</p>
<div className="etha-seed-col-links">
<a className="etha-seed-col-link" href="#">contact</a>
<a className="etha-seed-col-link" href="#">stockists</a>
<a className="etha-seed-col-link" href="#">press</a>
<a className="etha-seed-col-link" href="#">collaborations</a>
</div>
</div>
</div>
<div className="etha-seed-cols-row">
<div className="">
<p className="etha-seed-col-heading">Help</p>
<div className="etha-seed-col-links">
<a className="etha-seed-col-link" href="#">
                      shipping &amp; returns
                    </a>
<a className="etha-seed-col-link" href="#">size guide</a>
<a className="etha-seed-col-link" href="#">f.a.q</a>
</div>
</div>
<div>
<p className="etha-seed-col-heading">Social</p>
<div className="etha-seed-col-links">
<a className="etha-seed-col-link" href="#">instagram</a>
<a className="etha-seed-col-link" href="#">email</a>
</div>
</div>
<div>
<p className="etha-seed-col-heading">Legal</p>
<div className="etha-seed-col-links">
<a className="etha-seed-col-link" href="#">
                      terms &amp; conditions
                    </a>
<a className="etha-seed-col-link" href="#">privacy policy</a>
<a className="etha-seed-col-link" href="#">accessibility</a>
</div>
</div>
</div>
</div>
</div>
<div className="" style={{borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', maxWidth: '1440px', margin: '0 auto'}}>
<p style={{color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: '400'}}>
              © 2026 ether° all rights reserved.
            </p>
<p style={{color: 'rgba(255,255,255,0.25)', fontSize: '11px', fontWeight: '400', letterSpacing: '0.04em'}}>
              Built in London
            </p>
</div>
</div>
<div className="etha-underlay-section" id="etha-underlay">
<div className="etha-underlay-bg"></div>
<div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
<div className="etha-underlay-text" id="etha-underlay-text">ether°</div>
<div className="etha-underlay-sub" id="etha-underlay-sub">
              Explore the world of ETHA
            </div>
</div>
</div>

</div>
</footer>



    </>
  );
}
