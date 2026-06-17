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



  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');
    const navInner = nav?.firstElementChild;
    const revealItems = document.querySelectorAll('.js-reveal');

    if (hamburger && mobileMenu) {
      const openMenu = () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('overflow-hidden');
      };

      const closeMenu = () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      };

      const toggleMenu = () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      };

      hamburger.addEventListener('click', toggleMenu);

      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('click', (event) => {
        const clickedInsideNav = nav?.contains(event.target);
        if (!clickedInsideNav && !mobileMenu.classList.contains('hidden')) {
          closeMenu();
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          closeMenu();
        }
      });
    }

    window.addEventListener(
      'scroll',
      () => {
        if (!navInner) return;

        if (window.scrollY > 24) {
          navInner.classList.add(
            'bg-[#F7F1E8]/95',
            'shadow-[0_16px_55px_rgba(44,36,22,0.18)]'
          );
          navInner.classList.remove(
            'bg-[#F7F1E8]/92',
            'supports-[backdrop-filter]:bg-[#F7F1E8]/78'
          );
        } else {
          navInner.classList.remove(
            'bg-[#F7F1E8]/95',
            'shadow-[0_16px_55px_rgba(44,36,22,0.18)]'
          );
          navInner.classList.add(
            'bg-[#F7F1E8]/92',
            'supports-[backdrop-filter]:bg-[#F7F1E8]/78'
          );
        }
      },
      { passive: true }
    );

    if ('IntersectionObserver' in window && revealItems.length) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('opacity-0', 'translate-y-7');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'is-visible');
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      revealItems.forEach((el) => observer.observe(el));
    }
  });



  document.addEventListener('DOMContentLoaded', () => {
    const SECTION_SELECTOR = '#services, #about, #gallery, #contact';
    const REVEAL_SELECTOR = '.js-reveal';
    const OBSERVER_OPTIONS = {
      threshold: 0.14,
      rootMargin: '0px 0px -40px 0px',
    };

    document.querySelectorAll(SECTION_SELECTOR).forEach((section) => {
      section.classList.add('site-section');
    });

    const revealItems = document.querySelectorAll(REVEAL_SELECTOR);
    revealItems.forEach((item) => item.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      }, OBSERVER_OPTIONS);

      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
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
      

<nav bis_size='{"x":0,"y":0,"w":393,"h":88,"abs_x":-29,"abs_y":352}' className="fixed top-0 right-0 left-0 z-50 px-3 pt-3 transition-all duration-500 ease-out sm:px-4" id="nav">
<div bis_size='{"x":12,"y":12,"w":369,"h":76,"abs_x":-17,"abs_y":364}' className="mx-auto flex h-[76px] max-w-7xl items-center justify-between rounded-[22px] border border-[#E7E1D6] bg-[#fdfcf7]/90 px-4 shadow-[0_18px_48px_rgba(44,36,22,0.14)] ring-1 ring-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-[#fdfcf7]/90 sm:px-6 lg:px-8">
<a aria-label="Inna Beauty начало" bis_size='{"x":29,"y":18,"w":64,"h":64,"abs_x":0,"abs_y":370}' className="flex shrink-0 items-center" href="#hero">
<img alt="Inna Beauty" bis_size='{"x":29,"y":18,"w":64,"h":64,"abs_x":0,"abs_y":370}' className="w-16 h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b971e8fa-349a-42f0-9bf6-a56461acf577_3840w.png"/>
</a>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="hidden md:flex items-center gap-7 lg:gap-9">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="group relative text-[11px] font-normal uppercase tracking-[0.28em] text-[#2B2318] transition-colors duration-300 hover:text-[#A8832A]" href="#hero">
                  Начало
                  <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#A8832A] transition-all duration-300 group-hover:w-full"></span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="group relative text-[11px] font-normal uppercase tracking-[0.28em] text-[#2B2318] transition-colors duration-300 hover:text-[#A8832A]" href="#services">
                  Услуги
                  <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#A8832A] transition-all duration-300 group-hover:w-full"></span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="group relative text-[11px] font-normal uppercase tracking-[0.28em] text-[#2B2318] transition-colors duration-300 hover:text-[#A8832A]" href="#about">
                  За мен
                  <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#A8832A] transition-all duration-300 group-hover:w-full"></span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="group relative text-[11px] font-normal uppercase tracking-[0.28em] text-[#2B2318] transition-colors duration-300 hover:text-[#A8832A]" href="#gallery">
                  Галерия
                  <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#A8832A] transition-all duration-300 group-hover:w-full"></span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="group relative text-[11px] font-normal uppercase tracking-[0.28em] text-[#2B2318] transition-colors duration-300 hover:text-[#A8832A]" href="#contact">
                  Контакти
                  <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#A8832A] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="group relative hidden items-center justify-center overflow-hidden rounded-full border border-[#A8832A]/20 bg-[#A8832A] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.20em] text-white shadow-[0_10px_26px_rgba(168,131,42,0.30)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#B89233] hover:shadow-[0_14px_34px_rgba(168,131,42,0.38)] focus:outline-none focus:ring-2 focus:ring-[#A8832A]/40 md:inline-flex" href="https://wa.me/359896306313" rel="noopener noreferrer" target="_blank">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.28)_50%,transparent_80%)] translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]"></span>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="relative z-10">Запази час</span>
</a>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Меню" bis_size='{"x":320,"y":28,"w":44,"h":44,"abs_x":291,"abs_y":380}' className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2C2416]/8 bg-white/85 text-[#241D12] shadow-[0_6px_16px_rgba(44,36,22,0.10)] transition hover:bg-white md:hidden" id="hamburger">
<iconify-icon bis_size='{"x":331,"y":39,"w":22,"h":22,"abs_x":302,"abs_y":391}' className="text-[22px]" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="mx-auto mt-2 hidden max-w-7xl flex-col items-center gap-0 rounded-[22px] border border-white/35 bg-[#F5F0E8]/92 px-6 pb-6 pt-3 text-center shadow-[0_10px_35px_rgba(44,36,22,0.10)] backdrop-blur-xl md:hidden" id="mobile-menu">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="block w-full border-b border-[#2C2416]/6 py-3 text-center text-xs font-medium uppercase tracking-[0.20em] text-[#2C2416] transition-colors hover:text-[#A8832A]" href="#hero">
    Начало
  </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="block w-full border-b border-[#2C2416]/6 py-3 text-center text-xs font-medium uppercase tracking-[0.20em] text-[#2C2416] transition-colors hover:text-[#A8832A]" href="#services">
    Услуги
  </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="block w-full border-b border-[#2C2416]/6 py-3 text-center text-xs font-medium uppercase tracking-[0.20em] text-[#2C2416] transition-colors hover:text-[#A8832A]" href="#about">
    За мен
  </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="block w-full border-b border-[#2C2416]/6 py-3 text-center text-xs font-medium uppercase tracking-[0.20em] text-[#2C2416] transition-colors hover:text-[#A8832A]" href="#gallery">
    Галерия
  </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="block w-full py-3 text-center text-xs font-medium uppercase tracking-[0.20em] text-[#2C2416] transition-colors hover:text-[#A8832A]" href="#contact">
    Контакти
  </a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#A8832A] px-6 py-3.5 text-center text-xs font-medium uppercase tracking-[0.20em] text-white shadow-[0_8px_24px_rgba(168,131,42,0.28)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(168,131,42,0.38)]" href="https://wa.me/359896306313" rel="noopener noreferrer" target="_blank">
    Запази час
  </a>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":393,"h":852,"abs_x":-29,"abs_y":352}' className="flex min-h-[100svh] overflow-hidden text-center pt-36 pr-6 pb-24 pl-6 relative items-center justify-center" id="hero">
<div bis_size='{"x":0,"y":0,"w":393,"h":852,"abs_x":-29,"abs_y":352}' className="absolute inset-0 -z-20">
<img alt="" aria-hidden="true" bis_size='{"x":0,"y":0,"w":393,"h":852,"abs_x":-29,"abs_y":352}' className="h-full w-full object-cover object-center opacity-90" fetchpriority="high" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ceed1c0d-f8a6-426b-add6-1ed082e4b9d0_3840w.png"/>
</div>
<div aria-hidden="true" bis_size='{"x":0,"y":0,"w":393,"h":852,"abs_x":-29,"abs_y":352}' className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(253,252,247,0.58)_0%,rgba(253,252,247,0.50)_38%,rgba(253,252,247,0.56)_68%,rgba(253,252,247,0.72)_100%)]"></div>
<div aria-hidden="true" bis_size='{"x":0,"y":692,"w":393,"h":160,"abs_x":-29,"abs_y":1044}' className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#fdfcf7] via-[#fdfcf7]/70 to-transparent"></div>
<div bis_size='{"x":24,"y":176,"w":345,"h":546,"abs_x":-5,"abs_y":528}' className="flex flex-col w-full max-w-5xl mr-auto ml-auto relative items-center">
<div bis_size='{"x":36,"y":176,"w":320,"h":277,"abs_x":7,"abs_y":528}' className="js-reveal motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 reveal">
<img alt="Inna Beauty" bis_size='{"x":36,"y":176,"w":320,"h":277,"abs_x":7,"abs_y":528}' className="sm:max-w-[420px] md:max-w-[400px] lg:max-w-[450px] w-full max-w-[320px] object-contain mr-auto ml-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b971e8fa-349a-42f0-9bf6-a56461acf577_3840w.png"/>
</div>
<div bis_size='{"x":92,"y":454,"w":208,"h":76,"abs_x":63,"abs_y":806}' className="js-reveal motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 reveal">
<p bis_size='{"x":92,"y":494,"w":208,"h":36,"abs_x":63,"abs_y":846}' className="mt-10 font-['Dancing_Script',cursive] text-3xl font-medium tracking-tight text-[#A8832A] sm:text-4xl md:text-[42px]">
        Be beautiful. Be you.
      </p>
</div>
<div bis_size='{"x":39,"y":530,"w":313,"h":45,"abs_x":10,"abs_y":882}' className="js-reveal motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 reveal">
<p bis_size='{"x":39,"y":546,"w":313,"h":29,"abs_x":10,"abs_y":898}' className="leading-relaxed sm:text-2xl md:text-[30px] text-lg font-medium italic text-yellow-900 tracking-tight font-['Cormorant_Garamond',serif] max-w-2xl mt-4">
        Перфектна грижа. Перфектен поглед. Всеки ден.
      </p>
</div>
<div bis_size='{"x":70,"y":575,"w":251,"h":148,"abs_x":41,"abs_y":927}' className="js-reveal motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 reveal">
<div bis_size='{"x":70,"y":615,"w":251,"h":108,"abs_x":41,"abs_y":967}' className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
<a bis_size='{"x":86,"y":615,"w":220,"h":46,"abs_x":57,"abs_y":967}' className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-full border border-[#A8832A]/20 bg-[#A8832A] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(168,131,42,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89233] hover:shadow-[0_16px_38px_rgba(168,131,42,0.34)] focus:outline-none focus:ring-2 focus:ring-[#A8832A]/40" href="https://wa.me/359896306313" rel="noopener noreferrer" target="_blank">
<span bis_size='{"x":-174,"y":616,"w":218,"h":44,"abs_x":-203,"abs_y":968}' className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.3)_50%,transparent_80%)] translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]"></span>
<span bis_size='{"x":144,"y":630,"w":103,"h":16,"abs_x":115,"abs_y":982}' className="relative z-10">Запази час</span>
</a>
<a bis_size='{"x":70,"y":677,"w":251,"h":46,"abs_x":41,"abs_y":1029}' className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#CDBDA6] bg-[#efe7d8] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#2C2416] shadow-[0_12px_30px_rgba(44,36,22,0.10)] transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 hover:bg-[#fdfcf7] hover:shadow-[0_16px_34px_rgba(44,36,22,0.14)] focus:outline-none focus:ring-2 focus:ring-[#2C2416]/10" href="#services">
  Разгледай услугите
</a>
</div>
</div>
</div>
</section>

<section aria-labelledby="services-heading" bis_size='{"x":0,"y":852,"w":393,"h":1691,"abs_x":-29,"abs_y":1204}' className="overflow-hidden sm:px-6 sm:py-24 site-section bg-[#] pt-20 pr-4 pb-20 pl-4 relative" id="services">
<div aria-hidden="true" bis_label="style" bis_size='{"x":16,"y":932,"w":361,"h":0,"abs_x":-13,"abs_y":1284}' className="pointer-events-none absolute inset-0 opacity-[0.035]">
</div>
<div aria-hidden="true" bis_size='{"x":16,"y":932,"w":361,"h":160,"abs_x":-13,"abs_y":1284}' className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/20 to-transparent">
</div>
<div bis_size='{"x":16,"y":1092,"w":361,"h":1371,"abs_x":-13,"abs_y":1444}' className="max-w-6xl z-10 mr-auto ml-auto relative">
<header bis_size='{"x":16,"y":1092,"w":361,"h":170,"abs_x":-13,"abs_y":1444}' className="js-reveal sm:mb-16 text-center max-w-2xl mr-auto mb-12 ml-auto reveal">
<p bis_size='{"x":16,"y":1092,"w":361,"h":32,"abs_x":-13,"abs_y":1444}' className="mb-3 font-['Dancing_Script',cursive] text-2xl font-medium tracking-tight text-[#A8832A] sm:text-3xl">
        Нашите услуги
      </p>
<h2 bis_size='{"x":16,"y":1136,"w":361,"h":40,"abs_x":-13,"abs_y":1488}' className="font-['Cormorant_Garamond',serif] text-4xl font-medium tracking-tight text-[#2C2416] sm:text-5xl" id="services-heading">
        Красота с грижа
      </h2>
<p bis_size='{"x":16,"y":1192,"w":361,"h":45,"abs_x":-13,"abs_y":1544}' className="leading-relaxed sm:text-base text-sm text-[#6F624A] tracking-wider max-w-xl mt-4 mr-auto ml-auto">
        Подбрани процедури, които съчетават естетика, комфорт и внимание към всеки детайл.
      </p>
<div bis_size='{"x":168,"y":1261,"w":56,"h":1,"abs_x":139,"abs_y":1613}' className="mx-auto mt-6 h-px w-14 bg-[#A8832A]/50">
</div>
</header>
<div bis_size='{"x":16,"y":1310,"w":361,"h":1153,"abs_x":-13,"abs_y":1662}' className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-7">
<a aria-label="Маникюр — виж детайли и запази час" bis_size='{"x":16,"y":1310,"w":361,"h":371,"abs_x":-13,"abs_y":1662}' className="group js-service-card js-reveal relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[24px] border border-[#E8DDCC] bg-[#F8F4EC]/95 p-6 text-left shadow-[0_8px_30px_rgba(44,36,22,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(44,36,22,0.10)] focus-visible:-translate-y-1 focus-visible:shadow-[0_18px_40px_rgba(44,36,22,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4527A]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDE8DC] sm:min-h-[360px] sm:p-7 reveal" href="/services/manicure">
<div bis_size='{"x":17,"y":1311,"w":359,"h":4,"abs_x":-12,"abs_y":1663}' className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C4527A] via-[#D46A90] to-[#F2D9E4]">
</div>
<div aria-hidden="true" bis_size='{"x":312,"y":1279,"w":96,"h":96,"abs_x":283,"abs_y":1631}' className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#C4527A]/6 blur-2xl transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110">
</div>
<div bis_size='{"x":41,"y":1335,"w":311,"h":48,"abs_x":12,"abs_y":1687}' className="mb-5 flex items-center justify-between gap-4">
<div bis_size='{"x":41,"y":1335,"w":48,"h":48,"abs_x":12,"abs_y":1687}' className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2D9E4]/50 ring-1 ring-[#C4527A]/10">
<iconify-icon aria-hidden="true" bis_size='{"x":53,"y":1347,"w":24,"h":24,"abs_x":24,"abs_y":1699}' className="text-2xl text-[#C4527A]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span bis_size='{"x":241,"y":1346,"w":110,"h":25,"abs_x":212,"abs_y":1698}' className="rounded-full bg-[#F7D9E4] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#C4527A]">
  Популярно
</span>
</div>
<div bis_size='{"x":41,"y":1403,"w":311,"h":253,"abs_x":12,"abs_y":1755}' className="flex flex-1 flex-col">
<h3 bis_size='{"x":41,"y":1403,"w":311,"h":32,"abs_x":12,"abs_y":1755}' className="mb-3 font-['Cormorant_Garamond',serif] text-2xl font-medium tracking-tight text-[#2C2416] sm:text-[30px]">
            Маникюр
          </h3>
<p bis_size='{"x":41,"y":1447,"w":311,"h":72,"abs_x":12,"abs_y":1799}' className="min-h-[72px] text-sm leading-relaxed text-[#6F624A] sm:min-h-[78px] sm:text-[15px]">
            Перфектни нокти с траен гел лак. Форма, блясък и дълготрайност — всеки път.
          </p>
<div bis_size='{"x":41,"y":1535,"w":311,"h":52,"abs_x":12,"abs_y":1887}' className="mt-4 min-h-[52px] flex flex-wrap content-start items-center gap-2">
<span bis_size='{"x":41,"y":1535,"w":74,"h":24,"abs_x":12,"abs_y":1887}' className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#7A6A4F] ring-1 ring-[#E6DDCF]">
          ~ 60 мин
        </span>
<span bis_size='{"x":123,"y":1535,"w":67,"h":24,"abs_x":94,"abs_y":1887}' className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#7A6A4F] ring-1 ring-[#E6DDCF]">
          Гел лак
        </span>
</div>
<div bis_size='{"x":41,"y":1587,"w":311,"h":69,"abs_x":12,"abs_y":1939}' className="mt-auto flex items-end justify-between gap-4 border-t border-[#E6DDCF] pt-5">
<div bis_size='{"x":41,"y":1608,"w":150,"h":48,"abs_x":12,"abs_y":1960}' className="">
<p bis_size='{"x":41,"y":1608,"w":150,"h":28,"abs_x":12,"abs_y":1960}' className="font-['Cormorant_Garamond',serif] text-xl font-medium text-[#C4527A] sm:text-2xl">
                от €20
              </p>
<span bis_size='{"x":41,"y":1640,"w":150,"h":16,"abs_x":12,"abs_y":1992}' className="mt-1 block text-xs tracking-wide text-[#8B7A5E]">Фин детайл • Траен ефект</span>
</div>
<span bis_size='{"x":273,"y":1636,"w":78,"h":20,"abs_x":244,"abs_y":1988}' className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2416] transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
          Виж повече
          
        </span>
</div>
</div>
</a>
<a aria-label="Миглопластика — виж детайли и запази час" bis_size='{"x":16,"y":1701,"w":361,"h":371,"abs_x":-13,"abs_y":2053}' className="group js-service-card js-reveal relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[24px] border border-[#E8DDCC] bg-[#F8F4EC]/95 p-6 text-left shadow-[0_8px_30px_rgba(44,36,22,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(44,36,22,0.10)] focus-visible:-translate-y-1 focus-visible:shadow-[0_18px_40px_rgba(44,36,22,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8832A]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDE8DC] sm:min-h-[360px] sm:p-7 reveal" href="/services/lashes">
<div bis_size='{"x":17,"y":1702,"w":359,"h":4,"abs_x":-12,"abs_y":2054}' className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#A8832A] via-[#C9A84C] to-[#E7D29B]">
</div>
<div aria-hidden="true" bis_size='{"x":312,"y":1670,"w":96,"h":96,"abs_x":283,"abs_y":2022}' className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#A8832A]/6 blur-2xl transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110">
</div>
<div bis_size='{"x":41,"y":1726,"w":311,"h":48,"abs_x":12,"abs_y":2078}' className="mb-5 flex items-center justify-between gap-4">
<div bis_size='{"x":41,"y":1726,"w":48,"h":48,"abs_x":12,"abs_y":2078}' className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8832A]/10 ring-1 ring-[#A8832A]/10">
<iconify-icon aria-hidden="true" bis_size='{"x":53,"y":1738,"w":24,"h":24,"abs_x":24,"abs_y":2090}' className="text-2xl text-[#A8832A]" icon="solar:eye-linear"></iconify-icon>
</div>
<span bis_size='{"x":259,"y":1737,"w":92,"h":25,"abs_x":230,"abs_y":2089}' className="rounded-full bg-[#A8832A]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8E6F20]">
        Премиум
      </span>
</div>
<div bis_size='{"x":41,"y":1794,"w":311,"h":253,"abs_x":12,"abs_y":2146}' className="flex flex-1 flex-col">
<h3 bis_size='{"x":41,"y":1794,"w":311,"h":32,"abs_x":12,"abs_y":2146}' className="mb-3 font-['Cormorant_Garamond',serif] text-2xl font-medium tracking-tight text-[#2C2416] sm:text-[30px]">
            Миглопластика
          </h3>
<p bis_size='{"x":41,"y":1838,"w":311,"h":72,"abs_x":12,"abs_y":2190}' className="min-h-[72px] text-sm leading-relaxed text-[#6F624A] sm:min-h-[78px] sm:text-[15px]">
            Обемни, копринени мигли — косъм по косъм, 4D или руски обем. Погледът, за който мечтаеш.
          </p>
<div bis_size='{"x":41,"y":1926,"w":311,"h":52,"abs_x":12,"abs_y":2278}' className="mt-4 min-h-[52px] flex flex-wrap content-start items-center gap-2">
<span bis_size='{"x":41,"y":1926,"w":74,"h":24,"abs_x":12,"abs_y":2278}' className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#7A6A4F] ring-1 ring-[#E6DDCF]">
          ~ 90 мин
        </span>
<span bis_size='{"x":123,"y":1926,"w":153,"h":24,"abs_x":94,"abs_y":2278}' className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#7A6A4F] ring-1 ring-[#E6DDCF]">
          Косъм по косъм / обем
        </span>
</div>
<div bis_size='{"x":41,"y":1978,"w":311,"h":69,"abs_x":12,"abs_y":2330}' className="mt-auto flex items-end justify-between gap-4 border-t border-[#E6DDCF] pt-5">
<div bis_size='{"x":41,"y":1999,"w":117,"h":48,"abs_x":12,"abs_y":2351}' className="">
<p bis_size='{"x":41,"y":1999,"w":117,"h":28,"abs_x":12,"abs_y":2351}' className="sm:text-2xl text-xl font-medium text-[#A8832A] font-['Cormorant_Garamond',serif]">
                от €30
              </p>
<span bis_size='{"x":41,"y":2031,"w":117,"h":16,"abs_x":12,"abs_y":2383}' className="mt-1 block text-xs tracking-wide text-[#8B7A5E]">Изразителен поглед</span>
</div>
<span bis_size='{"x":273,"y":2027,"w":78,"h":20,"abs_x":244,"abs_y":2379}' className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2416] transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
          Виж повече
          
        </span>
</div>
</div>
</a>
<button aria-label="Козметика — отвори модал за детайли и записване" bis_size='{"x":16,"y":2092,"w":361,"h":371,"abs_x":-13,"abs_y":2444}' className="group js-service-card js-reveal flex min-h-[340px] flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(44,36,22,0.10)] focus-visible:-translate-y-1 focus-visible:shadow-[0_18px_40px_rgba(44,36,22,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6A4F]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDE8DC] sm:min-h-[360px] sm:p-7 text-left bg-[#F8F4EC]/95 w-full h-full border-[#E8DDCC] border rounded-[24px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_8px_30px_rgba(44,36,22,0.06)] reveal" data-modal-target="booking-modal" data-service="Козметика" type="button">
<div bis_size='{"x":17,"y":2093,"w":359,"h":4,"abs_x":-12,"abs_y":2445}' className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7A6A4F] via-[#9A8767] to-[#E5DDD0]"></div>
<div aria-hidden="true" bis_size='{"x":312,"y":2061,"w":96,"h":96,"abs_x":283,"abs_y":2413}' className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7A6A4F]/6 blur-2xl transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110"></div>
<div bis_size='{"x":41,"y":2117,"w":311,"h":48,"abs_x":12,"abs_y":2469}' className="mb-5 flex items-center justify-between gap-4">
<div bis_size='{"x":41,"y":2117,"w":48,"h":48,"abs_x":12,"abs_y":2469}' className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7A6A4F]/10 ring-1 ring-[#7A6A4F]/10">
<iconify-icon aria-hidden="true" bis_size='{"x":53,"y":2129,"w":24,"h":24,"abs_x":24,"abs_y":2481}' className="text-2xl text-[#7A6A4F]" icon="solar:leaf-linear"></iconify-icon>
</div>
<span bis_size='{"x":231,"y":2128,"w":120,"h":25,"abs_x":202,"abs_y":2480}' className="rounded-full bg-[#7A6A4F]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#6D5C43]">
        Персонално
      </span>
</div>
<div bis_size='{"x":41,"y":2185,"w":311,"h":253,"abs_x":12,"abs_y":2537}' className="flex flex-1 flex-col">
<h3 bis_size='{"x":41,"y":2185,"w":311,"h":32,"abs_x":12,"abs_y":2537}' className="mb-3 font-['Cormorant_Garamond',serif] text-2xl font-medium tracking-tight text-[#2C2416] sm:text-[30px]">
        Козметика
      </h3>
<p bis_size='{"x":41,"y":2229,"w":311,"h":72,"abs_x":12,"abs_y":2581}' className="min-h-[72px] text-sm leading-relaxed text-[#6F624A] sm:min-h-[78px] sm:text-[15px]">
        Козметични процедури за сияйна кожа. Отпусни се и се довери на опитни ръце.
      </p>
<div bis_size='{"x":41,"y":2317,"w":311,"h":52,"abs_x":12,"abs_y":2669}' className="mt-4 min-h-[52px] flex flex-wrap content-start items-center gap-2">
<span bis_size='{"x":41,"y":2317,"w":72,"h":24,"abs_x":12,"abs_y":2669}' className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#7A6A4F] ring-1 ring-[#E6DDCF]">
          ~ 75 мин
        </span>
<span bis_size='{"x":121,"y":2317,"w":167,"h":24,"abs_x":92,"abs_y":2669}' className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#7A6A4F] ring-1 ring-[#E6DDCF]">
          Персонална консултация
        </span>
</div>
<div bis_size='{"x":41,"y":2369,"w":311,"h":69,"abs_x":12,"abs_y":2721}' className="mt-auto flex items-end justify-between gap-4 border-t border-[#E6DDCF] pt-5">
<div bis_size='{"x":41,"y":2390,"w":125,"h":48,"abs_x":12,"abs_y":2742}' className="">
<p bis_size='{"x":41,"y":2390,"w":125,"h":28,"abs_x":12,"abs_y":2742}' className="sm:text-2xl text-xl font-medium text-[#7A6A4F] font-['Cormorant_Garamond',serif]">
  От €50
</p>
<span bis_size='{"x":41,"y":2422,"w":125,"h":16,"abs_x":12,"abs_y":2774}' className="mt-1 block text-xs tracking-wide text-[#8B7A5E]">Грижа според кожата</span>
</div>
<span bis_size='{"x":273,"y":2418,"w":78,"h":20,"abs_x":244,"abs_y":2770}' className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 text-sm font-medium text-[#2C2416]">
          Виж повече
          
        </span>
</div>
</div>
</button>
</div>
</div>
</section>

<section aria-labelledby="lashes-heading" bis_size='{"x":0,"y":2543,"w":393,"h":1334,"abs_x":-29,"abs_y":2895}' className="overflow-hidden sm:px-6 sm:py-24 bg-[#EDE8DC] pt-20 pr-4 pb-20 pl-4 relative" id="lashes">
<div aria-hidden="true" bis_label="style" bis_size='{"x":0,"y":2543,"w":393,"h":1334,"abs_x":-29,"abs_y":2895}' className="pointer-events-none absolute inset-0 opacity-[0.04]"></div>
<div aria-hidden="true" bis_size='{"x":52,"y":2543,"w":288,"h":288,"abs_x":23,"abs_y":2895}' className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full" style={{background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 72%)'}}></div>
<div bis_size='{"x":16,"y":2623,"w":361,"h":1174,"abs_x":-13,"abs_y":2975}' className="relative z-10 mx-auto max-w-5xl">
<header bis_size='{"x":16,"y":2623,"w":361,"h":193,"abs_x":-13,"abs_y":2975}' className="mx-auto mb-12 max-w-2xl text-center js-reveal transition-all duration-700 ease-out sm:mb-14 reveal">
<p bis_size='{"x":16,"y":2623,"w":361,"h":32,"abs_x":-13,"abs_y":2975}' className="mb-3 font-['Dancing_Script',cursive] text-2xl font-medium tracking-tight text-[#A8832A] sm:text-3xl">
        Специалитетът ни
      </p>
<h2 bis_size='{"x":16,"y":2667,"w":361,"h":40,"abs_x":-13,"abs_y":3019}' className="mb-4 font-['Cormorant_Garamond',serif] text-4xl font-medium tracking-tight text-[#2C2416] sm:text-5xl" id="lashes-heading">
        Миглопластика
      </h2>
<p bis_size='{"x":16,"y":2723,"w":361,"h":68,"abs_x":-13,"abs_y":3075}' className="mx-auto max-w-xl text-sm leading-relaxed text-[#6F624A] sm:text-base">
        Красивите мигли не са лукс — те са начин да спестиш време сутрин и да изглеждаш завършено през целия ден.
      </p>
<div bis_size='{"x":168,"y":2815,"w":56,"h":1,"abs_x":139,"abs_y":3167}' className="mx-auto mt-6 h-px w-14 bg-[#A8832A]/50"></div>
</header>
<div bis_size='{"x":16,"y":2864,"w":361,"h":639,"abs_x":-13,"abs_y":3216}' className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
<article bis_size='{"x":16,"y":2864,"w":361,"h":309,"abs_x":-13,"abs_y":3216}' className="js-reveal rounded-[24px] border border-[#E4D8C8] bg-[#F8F4EC] p-6 shadow-[0_10px_30px_rgba(44,36,22,0.05)] transition-all duration-500 sm:p-8 reveal">
<div bis_size='{"x":41,"y":2889,"w":311,"h":25,"abs_x":12,"abs_y":3241}' className="mb-6 flex items-center justify-between gap-3">
<h3 bis_size='{"x":41,"y":2894,"w":94,"h":16,"abs_x":12,"abs_y":3246}' className="text-xs font-medium uppercase tracking-[0.18em] text-[#A8832A]">
            Поставяне
          </h3>
<span bis_size='{"x":268,"y":2889,"w":83,"h":25,"abs_x":239,"abs_y":3241}' className="rounded-full bg-[#A8832A]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8E6F20]">
            Нов сет
          </span>
</div>
<div bis_size='{"x":41,"y":2939,"w":311,"h":210,"abs_x":12,"abs_y":3291}' className="space-y-1">
<div bis_size='{"x":41,"y":2939,"w":311,"h":64,"abs_x":12,"abs_y":3291}' className="flex items-center justify-between gap-4 rounded-2xl px-0 py-3 text-sm">
<div bis_size='{"x":41,"y":2951,"w":139,"h":40,"abs_x":12,"abs_y":3303}'>
<p bis_size='{"x":41,"y":2951,"w":139,"h":20,"abs_x":12,"abs_y":3303}' className="text-[#2C2416]">Косъм по косъм</p>
<p bis_size='{"x":41,"y":2975,"w":139,"h":16,"abs_x":12,"abs_y":3327}' className="mt-1 text-xs text-[#8A7A5F]">Естествен и нежен ефект</p>
</div>
<span bis_size='{"x":319,"y":2955,"w":32,"h":32,"abs_x":290,"abs_y":3307}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€33</span>
</div>
<div bis_size='{"x":41,"y":3007,"w":311,"h":1,"abs_x":12,"abs_y":3359}' className="h-px bg-[#DCCFBF]"></div>
<div bis_size='{"x":41,"y":3012,"w":311,"h":64,"abs_x":12,"abs_y":3364}' className="flex items-center justify-between gap-4 rounded-2xl px-0 py-3 text-sm">
<div bis_size='{"x":41,"y":3024,"w":164,"h":40,"abs_x":12,"abs_y":3376}'>
<p bis_size='{"x":41,"y":3024,"w":164,"h":20,"abs_x":12,"abs_y":3376}' className="text-[#2C2416]">4D обем</p>
<p bis_size='{"x":41,"y":3048,"w":164,"h":16,"abs_x":12,"abs_y":3400}' className="mt-1 text-xs text-[#8A7A5F]">По-плътен и изразителен вид</p>
</div>
<span bis_size='{"x":318,"y":3028,"w":33,"h":32,"abs_x":289,"abs_y":3380}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€35</span>
</div>
<div bis_size='{"x":41,"y":3080,"w":311,"h":1,"abs_x":12,"abs_y":3432}' className="h-px bg-[#DCCFBF]"></div>
<div bis_size='{"x":41,"y":3085,"w":311,"h":64,"abs_x":12,"abs_y":3437}' className="flex items-center justify-between gap-4 rounded-2xl px-0 py-3 text-sm">
<div bis_size='{"x":41,"y":3097,"w":146,"h":40,"abs_x":12,"abs_y":3449}'>
<p bis_size='{"x":41,"y":3097,"w":146,"h":20,"abs_x":12,"abs_y":3449}' className="text-[#2C2416]">Руски обем</p>
<p bis_size='{"x":41,"y":3121,"w":146,"h":16,"abs_x":12,"abs_y":3473}' className="mt-1 text-xs text-[#8A7A5F]">Максимален обем и драма</p>
</div>
<span bis_size='{"x":315,"y":3101,"w":36,"h":32,"abs_x":286,"abs_y":3453}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€40</span>
</div>
</div>
</article>
<article bis_size='{"x":16,"y":3194,"w":361,"h":309,"abs_x":-13,"abs_y":3546}' className="js-reveal rounded-[24px] border border-[#E4D8C8] bg-[#F8F4EC] p-6 shadow-[0_10px_30px_rgba(44,36,22,0.05)] transition-all duration-500 sm:p-8 reveal">
<div bis_size='{"x":41,"y":3219,"w":311,"h":25,"abs_x":12,"abs_y":3571}' className="mb-6 flex items-center justify-between gap-3">
<h3 bis_size='{"x":41,"y":3224,"w":100,"h":16,"abs_x":12,"abs_y":3576}' className="text-xs font-medium uppercase tracking-[0.18em] text-[#A8832A]">
            Поддръжка
          </h3>
<span bis_size='{"x":258,"y":3219,"w":93,"h":25,"abs_x":229,"abs_y":3571}' className="rounded-full bg-[#7A6A4F]/10 px-3 py-1 text-[11px] font-medium text-[#6D5C43]">
            на 3 седмици
          </span>
</div>
<div bis_size='{"x":41,"y":3269,"w":311,"h":210,"abs_x":12,"abs_y":3621}' className="space-y-1">
<div bis_size='{"x":41,"y":3269,"w":311,"h":64,"abs_x":12,"abs_y":3621}' className="flex items-center justify-between gap-4 rounded-2xl px-0 py-3 text-sm">
<div bis_size='{"x":41,"y":3281,"w":139,"h":40,"abs_x":12,"abs_y":3633}' className="">
<p bis_size='{"x":41,"y":3281,"w":139,"h":20,"abs_x":12,"abs_y":3633}' className="text-[#2C2416]">Косъм по косъм</p>
<p bis_size='{"x":41,"y":3305,"w":139,"h":16,"abs_x":12,"abs_y":3657}' className="mt-1 text-xs text-[#8A7A5F]">Освежаване и попълване</p>
</div>
<span bis_size='{"x":318,"y":3285,"w":33,"h":32,"abs_x":289,"abs_y":3637}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€22</span>
</div>
<div bis_size='{"x":41,"y":3337,"w":311,"h":1,"abs_x":12,"abs_y":3689}' className="h-px bg-[#DCCFBF]"></div>
<div bis_size='{"x":41,"y":3342,"w":311,"h":64,"abs_x":12,"abs_y":3694}' className="flex items-center justify-between gap-4 rounded-2xl px-0 py-3 text-sm">
<div bis_size='{"x":41,"y":3354,"w":171,"h":40,"abs_x":12,"abs_y":3706}' className="">
<p bis_size='{"x":41,"y":3354,"w":171,"h":20,"abs_x":12,"abs_y":3706}' className="text-[#2C2416]">4D обем</p>
<p bis_size='{"x":41,"y":3378,"w":171,"h":16,"abs_x":12,"abs_y":3730}' className="mt-1 text-xs text-[#8A7A5F]">Запазва плътността и формата</p>
</div>
<span bis_size='{"x":318,"y":3358,"w":33,"h":32,"abs_x":289,"abs_y":3710}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€25</span>
</div>
<div bis_size='{"x":41,"y":3410,"w":311,"h":1,"abs_x":12,"abs_y":3762}' className="h-px bg-[#DCCFBF]"></div>
<div bis_size='{"x":41,"y":3415,"w":311,"h":64,"abs_x":12,"abs_y":3767}' className="flex items-center justify-between gap-4 rounded-2xl px-0 py-3 text-sm">
<div bis_size='{"x":41,"y":3427,"w":182,"h":40,"abs_x":12,"abs_y":3779}' className="">
<p bis_size='{"x":41,"y":3427,"w":182,"h":20,"abs_x":12,"abs_y":3779}' className="text-[#2C2416]">Руски обем</p>
<p bis_size='{"x":41,"y":3451,"w":182,"h":16,"abs_x":12,"abs_y":3803}' className="mt-1 text-xs text-[#8A7A5F]">За плътен и поддържан резултат</p>
</div>
<span bis_size='{"x":317,"y":3431,"w":34,"h":32,"abs_x":288,"abs_y":3783}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€30</span>
</div>
</div>
</article>
</div>
<div bis_size='{"x":16,"y":3524,"w":361,"h":82,"abs_x":-13,"abs_y":3876}' className="mt-5 js-reveal transition-all duration-700 ease-out reveal">
<div bis_size='{"x":16,"y":3524,"w":361,"h":82,"abs_x":-13,"abs_y":3876}' className="rounded-[24px] border border-[#E4D8C8] bg-[#F8F4EC] p-5 shadow-[0_10px_30px_rgba(44,36,22,0.05)] sm:p-6">
<div bis_size='{"x":37,"y":3545,"w":319,"h":40,"abs_x":8,"abs_y":3897}' className="flex items-center justify-between gap-4">
<div bis_size='{"x":37,"y":3545,"w":160,"h":40,"abs_x":8,"abs_y":3897}'>
<p bis_size='{"x":37,"y":3545,"w":160,"h":20,"abs_x":8,"abs_y":3897}' className="text-sm text-[#2C2416]">Сваляне на мигли</p>
<p bis_size='{"x":37,"y":3569,"w":160,"h":16,"abs_x":8,"abs_y":3921}' className="mt-1 text-xs text-[#8A7A5F]">Бързо и щадящо премахване</p>
</div>
<span bis_size='{"x":330,"y":3549,"w":25,"h":32,"abs_x":301,"abs_y":3901}' className="font-['Cormorant_Garamond',serif] text-2xl font-medium text-[#A8832A]">€8</span>
</div>
</div>
</div>
<div bis_size='{"x":16,"y":3638,"w":361,"h":73,"abs_x":-13,"abs_y":3990}' className="mt-8 rounded-[24px] border border-[#E4D8C8] bg-white/40 px-5 py-4 text-center js-reveal sm:px-6 reveal">
<p bis_size='{"x":37,"y":3655,"w":319,"h":39,"abs_x":8,"abs_y":4007}' className="text-xs leading-relaxed text-[#7A6A4F] sm:text-sm">
        Поддръжката се прави на 3 седмици. При паднали над 50% мигли
        <br bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="hidden md:block"/>
        се таксува като първоначално поставяне.
      </p>
</div>
<div bis_size='{"x":16,"y":3751,"w":361,"h":46,"abs_x":-13,"abs_y":4103}' className="mt-10 text-center js-reveal transition-all duration-700 ease-out reveal">
<a bis_size='{"x":113,"y":3751,"w":165,"h":46,"abs_x":84,"abs_y":4103}' className="inline-flex items-center justify-center rounded-full border border-[#A8832A] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-[#A8832A] transition-all duration-300 hover:bg-[#A8832A] hover:text-[#F8F4EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8832A]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDE8DC]" href="https://wa.me/359896306313" rel="noopener noreferrer" target="_blank">
        Запази час
      </a>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3877,"w":393,"h":1207,"abs_x":-29,"abs_y":4229}' className="overflow-hidden bg-[#F5F0E8] pt-24 pr-6 pb-24 pl-6 relative site-section" id="about">
<div bis_label="style" bis_size='{"x":24,"y":3973,"w":345,"h":0,"abs_x":-5,"abs_y":4325}' className="pointer-events-none absolute inset-0 opacity-[0.035]">
</div>
<div bis_size='{"x":24,"y":3973,"w":345,"h":1015,"abs_x":-5,"abs_y":4325}' className="max-w-6xl mx-auto relative z-10">
<div bis_size='{"x":24,"y":3973,"w":345,"h":1015,"abs_x":-5,"abs_y":4325}' className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
<div bis_size='{"x":24,"y":3973,"w":345,"h":431,"abs_x":-5,"abs_y":4325}' className="js-reveal transition-all duration-700 ease-out relative reveal">
<div bis_size='{"x":24,"y":3973,"w":345,"h":431,"abs_x":-5,"abs_y":4325}' className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-[#EDE8DC]">
<img alt="Ina Beauty Studio интериор" bis_size='{"x":24,"y":3973,"w":345,"h":431,"abs_x":-5,"abs_y":4325}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4c3dc0-31a0-4ae9-a236-c157532fa8f0_1600w.png"/>
<div bis_size='{"x":24,"y":3973,"w":345,"h":431,"abs_x":-5,"abs_y":4325}' className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_0_1px_rgba(168,131,42,0.15)]"></div>
</div>
<div bis_size='{"x":40,"y":4344,"w":101,"h":75,"abs_x":11,"abs_y":4696}' className="absolute -bottom-4 left-4 rounded-2xl border border-[#A8832A]/15 bg-[#F8F3EB] px-4 py-3 shadow-sm sm:-bottom-5 sm:left-5">
<p bis_size='{"x":57,"y":4357,"w":67,"h":17,"abs_x":28,"abs_y":4709}' className="text-[11px] uppercase tracking-[0.18em] text-[#8B6B23]">Пловдив</p>
<p bis_size='{"x":57,"y":4379,"w":67,"h":28,"abs_x":28,"abs_y":4731}' className="mt-1 font-['Cormorant_Garamond',serif] text-xl text-[#2C2416]">Тракия</p>
</div>
</div>
<div bis_size='{"x":24,"y":4468,"w":345,"h":520,"abs_x":-5,"abs_y":4820}' className="js-reveal flex h-full min-h-[520px] flex-col items-start justify-center gap-5 transition-all duration-700 ease-out sm:gap-6 md:min-h-[640px] reveal">
<p bis_size='{"x":24,"y":4512,"w":81,"h":36,"abs_x":-5,"abs_y":4864}' className="font-['Dancing_Script',cursive] text-3xl font-medium tracking-tight text-[#A8832A]">
    За мен
  </p>
<h2 bis_size='{"x":24,"y":4568,"w":261,"h":68,"abs_x":-5,"abs_y":4920}' className="font-['Cormorant_Garamond',serif] text-4xl font-normal tracking-wide text-[#2C2416] leading-[0.95] sm:text-5xl">
    Ина и<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":-29,"abs_y":352}' className="hidden md:inline"> </span><br bis_size='{"x":115,"y":4563,"w":0,"h":44,"abs_x":86,"abs_y":4915}' className="md:hidden"/>нейното студио
  </h2>
<div bis_size='{"x":24,"y":4656,"w":56,"h":1,"abs_x":-5,"abs_y":5008}' className="h-px w-14 bg-[#A8832A]/50"></div>
<p bis_size='{"x":24,"y":4677,"w":345,"h":84,"abs_x":-5,"abs_y":5029}' className="max-w-xl text-sm leading-7 text-[#6F624A] sm:text-base">
    Здравей, аз съм Ина — създадох това студио като спокойно и уютно място, в което всяка жена може да се отпусне и да
    се почувства специална.
  </p>
<p bis_size='{"x":24,"y":4781,"w":345,"h":84,"abs_x":-5,"abs_y":5133}' className="max-w-xl text-sm leading-7 text-[#6F624A] sm:text-base">
    Работя с внимание към детайла и лично отношение, специализирайки в миглопластика, маникюр с гел лак и козметични
    процедури.
  </p>
<a bis_size='{"x":24,"y":4901,"w":163,"h":44,"abs_x":-5,"abs_y":5253}' className="mt-4 inline-flex items-center justify-center rounded-full bg-[#A8832A] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-sm transition-all duration-300 hover:bg-[#C19A3D] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8832A]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EEE8]" href="https://wa.me/359896306313" rel="noopener noreferrer" target="_blank">
    Запази час
  </a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5084,"w":393,"h":916,"abs_x":-29,"abs_y":5436}' className="py-24 px-6 bg-[#EDE8DC] site-section" id="gallery">
<div bis_size='{"x":24,"y":5180,"w":345,"h":724,"abs_x":-5,"abs_y":5532}' className="max-w-6xl mx-auto">
<div bis_size='{"x":24,"y":5180,"w":345,"h":166,"abs_x":-5,"abs_y":5532}' className="js-reveal mb-14 text-center transition-all duration-700 ease-out reveal">
<p bis_size='{"x":24,"y":5180,"w":345,"h":32,"abs_x":-5,"abs_y":5532}' className="mb-2 font-['Dancing_Script',cursive] text-2xl font-medium tracking-tight text-[#A8832A]">
    Нашата работа
  </p>
<h2 bis_size='{"x":24,"y":5220,"w":345,"h":40,"abs_x":-5,"abs_y":5572}' className="md:text-5xl text-4xl font-medium text-[#2C2416] tracking-tight font-['Cormorant_Garamond',serif]">
    Галерия
  </h2>
<p bis_size='{"x":24,"y":5276,"w":345,"h":45,"abs_x":-5,"abs_y":5628}' className="leading-relaxed sm:text-base text-sm text-[#6F624A] tracking-wider max-w-xl mt-4 mr-auto ml-auto">
  Малка селекция от резултати, създадени с внимание към детайла и усет към красивото.
</p>
<div bis_size='{"x":172,"y":5346,"w":48,"h":1,"abs_x":143,"abs_y":5698}' className="mx-auto mt-6 h-px w-12 bg-[#A8832A]/50"></div>
</div>
<div bis_size='{"x":24,"y":5403,"w":345,"h":402,"abs_x":-5,"abs_y":5755}' className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div bis_size='{"x":24,"y":5403,"w":164,"h":123,"abs_x":-5,"abs_y":5755}' className="overflow-hidden rounded-xl bg-[#F5F0E8] aspect-[4/3] js-reveal transition-all duration-700 ease-out group reveal">
<img alt="Маникюр 1" bis_size='{"x":24,"y":5403,"w":164,"h":123,"abs_x":-5,"abs_y":5755}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65f8b647-8d52-4e85-a178-40283e944400_800w.png"/>
</div>
<div bis_size='{"x":204,"y":5403,"w":164,"h":123,"abs_x":175,"abs_y":5755}' className="overflow-hidden rounded-xl bg-[#F5F0E8] aspect-[4/3] js-reveal transition-all duration-700 ease-out group reveal">
<img alt="Маникюр 2" bis_size='{"x":204,"y":5403,"w":164,"h":123,"abs_x":175,"abs_y":5755}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b704aacb-e326-4591-a238-a5df40cac78c_800w.png"/>
</div>
<div bis_size='{"x":24,"y":5542,"w":164,"h":123,"abs_x":-5,"abs_y":5894}' className="overflow-hidden rounded-xl bg-[#F5F0E8] aspect-[4/3] js-reveal transition-all duration-700 ease-out group reveal">
<img alt="Маникюр 3" bis_size='{"x":24,"y":5542,"w":164,"h":123,"abs_x":-5,"abs_y":5894}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a351340c-42c7-4315-aa35-816ee0ae2711_1600w.png"/>
</div>
<div bis_size='{"x":204,"y":5542,"w":164,"h":123,"abs_x":175,"abs_y":5894}' className="overflow-hidden rounded-xl bg-[#F5F0E8] aspect-[4/3] js-reveal transition-all duration-700 ease-out group reveal">
<img alt="Маникюр 4" bis_size='{"x":204,"y":5542,"w":164,"h":123,"abs_x":175,"abs_y":5894}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4d0ac47-cf93-49fe-8ec3-368daaf61639_800w.png"/>
</div>
<div bis_size='{"x":24,"y":5682,"w":164,"h":123,"abs_x":-5,"abs_y":6034}' className="overflow-hidden rounded-xl bg-[#F5F0E8] aspect-[4/3] js-reveal transition-all duration-700 ease-out group reveal">
<img alt="Маникюр 5" bis_size='{"x":24,"y":5682,"w":164,"h":123,"abs_x":-5,"abs_y":6034}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b68b94e-3ea6-4803-bd75-05c85786cb4c_800w.png"/>
</div>
<div bis_size='{"x":204,"y":5682,"w":164,"h":123,"abs_x":175,"abs_y":6034}' className="overflow-hidden rounded-xl bg-[#F5F0E8] aspect-[4/3] js-reveal transition-all duration-700 ease-out group reveal">
<img alt="Маникюр 6" bis_size='{"x":204,"y":5682,"w":164,"h":123,"abs_x":175,"abs_y":6034}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98a9b7f6-8bc5-494a-a7eb-53b4d5f89783_800w.png"/>
</div>
</div>
<div bis_size='{"x":24,"y":5861,"w":345,"h":44,"abs_x":-5,"abs_y":6213}' className="text-center mt-14 js-reveal transition-all duration-700 ease-out reveal">
<a bis_size='{"x":70,"y":5861,"w":251,"h":44,"abs_x":41,"abs_y":6213}' className="bg-[#A8832A] text-white text-xs uppercase tracking-widest font-normal px-8 py-3.5 rounded-full hover:bg-[#C9A84C] transition-all inline-block shadow-sm" href="https://www.instagram.com/inabeautystudio2026" rel="noopener noreferrer" target="_blank">
        Виж повече в Instagram
      </a>
</div>
</div>
</section>


<section bis_size='{"x":0,"y":6001,"w":393,"h":1141,"abs_x":-29,"abs_y":6353}' className="relative overflow-hidden bg-[#F3EEE8] px-4 py-20 sm:px-6 sm:py-24 site-section" id="contact">
<div aria-hidden="true" bis_label="style" bis_size='{"x":16,"y":6081,"w":361,"h":0,"abs_x":-13,"abs_y":6433}' className="pointer-events-none absolute inset-0 opacity-[0.035]">
</div>
<div bis_size='{"x":16,"y":6081,"w":361,"h":981,"abs_x":-13,"abs_y":6433}' className="relative z-10 mx-auto max-w-6xl">
<div bis_size='{"x":16,"y":6081,"w":361,"h":166,"abs_x":-13,"abs_y":6433}' className="mb-12 text-center js-reveal transition-all duration-700 ease-out sm:mb-16 reveal">
<p bis_size='{"x":16,"y":6081,"w":361,"h":32,"abs_x":-13,"abs_y":6433}' className="mb-2 font-['Dancing_Script',cursive] text-2xl font-medium tracking-tight text-[#A8832A]">
        Намери ни
      </p>
<h2 bis_size='{"x":16,"y":6121,"w":361,"h":40,"abs_x":-13,"abs_y":6473}' className="font-['Cormorant_Garamond',serif] text-4xl font-medium tracking-tight text-[#2C2416] md:text-5xl">
        Контакти
      </h2>
<p bis_size='{"x":16,"y":6177,"w":361,"h":45,"abs_x":-13,"abs_y":6529}' className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6F624A] sm:text-base">
        Свържи се с нас лесно и избери най-удобния начин за записване или посещение.
      </p>
<div bis_size='{"x":172,"y":6246,"w":48,"h":1,"abs_x":143,"abs_y":6598}' className="mx-auto mt-6 h-px w-12 bg-[#A8832A]/50"></div>
</div>
<div bis_size='{"x":16,"y":6295,"w":361,"h":767,"abs_x":-13,"abs_y":6647}' className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
<div className="js-reveal flex flex-col transition-all duration-700 ease-out reveal my-10 gap-x-4 gap-y-4">
<div className="rounded-[24px] border border-[#E4D8C8] bg-[#F8F3EB]/90 p-5 shadow-[0_8px_24px_rgba(44,36,22,0.05)] sm:p-6">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EDE4D6]">
<iconify-icon className="text-2xl text-[#A8832A]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="mb-1 text-sm font-medium uppercase tracking-[0.14em] text-[#8B6B23]">
          Адрес
        </p>
<p className="text-sm leading-relaxed text-[#2C2416] sm:text-base">
          Пловдив, ж.к. Тракия, бл. 83Б, вх. Б
        </p>
<p className="mt-1 text-xs leading-relaxed text-[#7A6A4F]/80">
          срещу ветеринарна клиника Провет
        </p>
</div>
</div>
</div>
<div className="rounded-[24px] border border-[#E4D8C8] bg-[#F8F3EB]/90 p-5 shadow-[0_8px_24px_rgba(44,36,22,0.05)] sm:p-6">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EDE4D6]">
<iconify-icon className="text-2xl text-[#A8832A]" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="mb-1 text-sm font-medium uppercase tracking-[0.14em] text-[#8B6B23]">
          Телефон
        </p>
<a className="text-sm text-[#2C2416] transition-colors hover:text-[#A8832A] sm:text-base" href="tel:0896306313">
          0896 306 313
        </a>
</div>
</div>
</div>
<div className="rounded-[24px] border border-[#E4D8C8] bg-[#F8F3EB]/90 p-5 shadow-[0_8px_24px_rgba(44,36,22,0.05)] sm:p-6">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EDE4D6]">
<iconify-icon className="text-[22px] text-[#A8832A]" icon="mdi:instagram"></iconify-icon>
</div>
<div>
<p className="mb-1 text-sm font-medium uppercase tracking-[0.14em] text-[#8B6B23]">
          Instagram
        </p>
<a className="text-sm text-[#2C2416] transition-colors hover:text-[#A8832A] sm:text-base" href="https://www.instagram.com/inabeautystudio2026" rel="noopener noreferrer" target="_blank">
          @inabeautystudio2026
        </a>
</div>
</div>
</div>
</div>
<div bis_size='{"x":16,"y":6664,"w":361,"h":399,"abs_x":-13,"abs_y":7016}' className="js-reveal transition-all duration-700 ease-out reveal">
<div bis_size='{"x":16,"y":6664,"w":361,"h":399,"abs_x":-13,"abs_y":7016}' className="overflow-hidden rounded-[28px] border border-[#E4D8C8] bg-[#F8F3EB] shadow-[0_12px_30px_rgba(44,36,22,0.06)]">
<div bis_size='{"x":17,"y":6665,"w":359,"h":77,"abs_x":-12,"abs_y":7017}' className="flex items-center justify-between border-b border-[#E6DBCC] px-5 py-4 sm:px-6">
<div bis_size='{"x":37,"y":6681,"w":111,"h":44,"abs_x":8,"abs_y":7033}' className="">
<p bis_size='{"x":37,"y":6681,"w":111,"h":20,"abs_x":8,"abs_y":7033}' className="text-sm font-medium uppercase tracking-[0.14em] text-[#8B6B23]">Локация</p>
<p bis_size='{"x":37,"y":6705,"w":111,"h":20,"abs_x":8,"abs_y":7057}' className="mt-1 text-sm text-[#6F624A]">Ina beauty studio</p>
</div>
<a bis_size='{"x":242,"y":6695,"w":113,"h":16,"abs_x":213,"abs_y":7047}' className="text-xs font-medium uppercase tracking-[0.14em] text-[#A8832A] transition-colors hover:text-[#8B6B23]" href="https://www.google.com/maps/place/Ina+beauty+studio/@42.1360775,24.7989718,19.43z/data=!4m12!1m5!3m4!2zNDLCsDA4JzA5LjUiTiAyNMKwNDcnNTkuMCJF!8m2!3d42.135957!4d24.799722!3m5!1s0x14acd1977790c3a1:0xf1fcedf5057f357c!8m2!3d42.1360063!4d24.7995942!16s%2Fg%2F11yq8b4hp1?entry=ttu&amp;g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
              Отвори карта
            </a>
</div>
<div bis_size='{"x":17,"y":6742,"w":359,"h":320,"abs_x":-12,"abs_y":7094}' className="relative h-[320px] bg-[#EDE4D6] sm:h-[380px]">
<iframe bis_chainid="11" bis_depth="1" bis_id="fr_7qmoj94laxw2h5vz8an5t2" bis_size='{"x":17,"y":6742,"w":359,"h":320,"abs_x":-12,"abs_y":7094}' className="h-full w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=bg&amp;q=Ina%20beauty%20studio,%20Plovdiv&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Ina beauty studio — карта"></iframe>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C2416] px-4 pt-14 pb-14 text-[#F5F0E8] sm:px-6 sm:py-16">
<div className="mx-auto max-w-6xl">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:items-start lg:gap-12 xl:gap-16">
<div className="flex flex-col items-center text-center lg:items-start lg:justify-start lg:text-left">
<a className="inline-flex items-center justify-center lg:justify-start" href="#hero">
<img alt="Ina Beauty Studio" className="h-20 w-auto max-w-[220px] object-contain sm:h-24 sm:max-w-[260px] lg:h-24 lg:max-w-[280px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f78c514-9db3-47de-ad54-af0a81795678_320w.png"/>
</a>
<p className="mt-5 max-w-[18rem] text-sm leading-6 text-[#F5F0E8]/60 sm:max-w-[20rem] lg:max-w-[22rem]">
          Уютно студио за красота с внимание към детайла, спокойна атмосфера и услуги, създадени да подчертаят
          естествената ти красота.
        </p>
<div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
<span className="rounded-full border border-[#F5F0E8]/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#F5F0E8]/60">
            Маникюр
          </span>
<span className="rounded-full border border-[#F5F0E8]/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#F5F0E8]/60">
            Миглопластика
          </span>
<span className="rounded-full border border-[#F5F0E8]/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#F5F0E8]/60">
            Козметика
          </span>
</div>
</div>
<div className="grid grid-cols-2 items-start gap-x-8 gap-y-6">
<nav aria-label="Футър навигация" className="min-w-0">
<p className="text-[11px] uppercase tracking-[0.18em] text-[#F5F0E8]/40">
      Навигация
    </p>
<div className="mt-5 flex flex-col gap-3">
<a className="group inline-flex w-max max-w-full text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="#hero">
<span className="relative">
          Начало
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
<a className="group inline-flex w-max max-w-full text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="#services">
<span className="relative">
          Услуги
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
<a className="group inline-flex w-max max-w-full text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="#gallery">
<span className="relative">
          Галерия
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
<a className="group inline-flex w-max max-w-full text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="#about">
<span className="relative">
          За мен
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
<a className="group inline-flex w-max max-w-full text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="#contact">
<span className="relative">
          Контакти
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
</div>
</nav>
<div className="min-w-0 -ml-2">
<p className="text-[11px] uppercase tracking-[0.18em] text-[#F5F0E8]/40">
      Свържи се
    </p>
<div className="mt-5 flex flex-col gap-3">
<a className="group inline-flex w-max max-w-full items-center gap-3 text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="tel:0896306313">
<iconify-icon className="shrink-0 text-[18px]" icon="solar:phone-linear"></iconify-icon>
<span className="relative">
          0896 306 313
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
<a className="group inline-flex max-w-full items-center gap-3 whitespace-nowrap text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="https://www.instagram.com/inabeautystudio2026" rel="noopener noreferrer" target="_blank">
<iconify-icon className="shrink-0 text-[18px]" icon="mdi:instagram"></iconify-icon>
<span className="relative">
          @inabeautystudio2026
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
<a className="group inline-flex w-max max-w-full items-center gap-3 text-sm text-[#F5F0E8]/72 transition-colors duration-300 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:text-[#C9A84C]" href="https://www.facebook.com/profile.php?id=100067230310418" rel="noopener noreferrer" target="_blank">
<iconify-icon className="shrink-0 text-[18px]" icon="mdi:facebook"></iconify-icon>
<span className="relative">
          Facebook
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A84C]/80 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
</span>
</a>
</div>
</div>
<div className="col-span-2 mt-2 rounded-2xl border border-[#F5F0E8]/10 bg-white/5 px-4 py-4">
<p className="text-[11px] uppercase tracking-[0.18em] text-[#F5F0E8]/40">
      Работно време
    </p>
<p className="mt-3 text-sm leading-6 text-[#F5F0E8]/72">
      Пон–Съб: 9:00 – 19:00 • Неделя: почивен ден
    </p>
</div>
</div>
</div>
<div className="my-8 h-px bg-[#F5F0E8]/10"></div>
<div className="flex flex-col gap-3 text-center text-xs text-[#F5F0E8]/40 md:flex-row md:items-center md:justify-between md:text-left">
<p className="">© 2026 Ina Beauty Studio. Всички права запазени.</p>
<p className="">Пловдив, ж.к. Тракия, бл. 83Б</p>
</div>
</div>
</footer>

<a aria-label="Запази час в WhatsApp" bis_size='{"x":313,"y":772,"w":56,"h":56,"abs_x":284,"abs_y":1124}' className="fixed bottom-6 right-6 z-[100] bg-[#A8832A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(168,131,42,0.45)] hover:bg-[#C9A84C] transition-all hover:scale-110" href="https://wa.me/359896306313" rel="noopener noreferrer" target="_blank">
<iconify-icon bis_size='{"x":329,"y":788,"w":24,"h":24,"abs_x":300,"abs_y":1140}' className="text-2xl" icon="solar:chat-line-linear"></iconify-icon>
</a>

<style>
  /* Ambient background */
  .site-section {
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .site-section::before,
  .site-section::after {
    content: "";
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
    z-index: 0;
    filter: blur(70px);
    opacity: 0.4;
  }

  .site-section::before {
    width: 20rem;
    height: 20rem;
    top: -5rem;
    left: -4rem;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%);
  }

  .site-section::after {
    width: 18rem;
    height: 18rem;
    right: -4rem;
    bottom: -6rem;
    background: radial-gradient(circle, rgba(168, 131, 42, 0.08) 0%, transparent 72%);
  }

  .site-section > * {
    position: relative;
    z-index: 1;
  }

  /* Reveal animation */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<style>
  #mobile-menu {
    transform-origin: top;
  }

  #mobile-menu.flex {
    animation: mobileMenuIn 0.24s ease-out;
  }

  @keyframes mobileMenuIn {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>

    </>
  );
}
