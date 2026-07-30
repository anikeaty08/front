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
      {

      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' } });

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
      }

      // Smooth scroll anchors
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const href = a.getAttribute('href');
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Go to top
      const goToTop = document.getElementById('goToTop');
      if (goToTop) {
        goToTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Spotlight (difference blend)
      const spotlight = document.getElementById('spotlight');
      const hero = document.getElementById('hero');
      if (hero && spotlight) {
        let inside = false;
        hero.addEventListener('mouseenter', () => {
          inside = true;
          spotlight.style.opacity = '1';
          document.body.style.cursor = 'none';
        });
        hero.addEventListener('mouseleave', () => {
          inside = false;
          spotlight.style.opacity = '0';
          document.body.style.cursor = 'auto';
        });
        hero.addEventListener('mousemove', (e) => {
          if (!inside) return;
          spotlight.style.left = e.clientX + 'px';
          spotlight.style.top = e.clientY + 'px';
        });
      }

      // Web Animations API helpers
      const easings = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
      function animateIn(el, type, delay = 0) {
        let keyframes = [];
        let options = { duration: 800, easing: easings, fill: 'forwards', delay };
        switch (type) {
          case 'fade-in':
            keyframes = [{ opacity: 0 }, { opacity: 1 }];
            break;
          case 'slide-up':
            keyframes = [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }];
            break;
          case 'blur-in':
            keyframes = [{ opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)' }];
            break;
          case 'scale-in':
            keyframes = [{ opacity: 0, transform: 'scale(0.95)' }, { opacity: 1, transform: 'scale(1)' }];
            break;
          case 'slide-in-left':
            keyframes = [{ opacity: 0, transform: 'translateX(-100%)' }, { opacity: 1, transform: 'translateX(0)' }];
            break;
          default:
            keyframes = [{ opacity: 0 }, { opacity: 1 }];
        }
        el.animate(keyframes, options);
      }

      // Float and pulse-glow (continuous)
      function float(el) {
        el.animate(
          [{ transform: 'translateY(0)' }, { transform: 'translateY(-8px)' }, { transform: 'translateY(0)' }],
          { duration: 6000, iterations: Infinity, easing: 'ease-in-out' }
        );
      }
      function pulseGlow(el, color = 'rgba(16,185,129,0.5)') {
        el.animate(
          [
            { boxShadow: `0 0 16px ${color}` },
            { boxShadow: `0 0 36px ${color}` },
            { boxShadow: `0 0 16px ${color}` }
          ],
          { duration: 2400, iterations: Infinity, easing: 'ease-in-out' }
        );
      }
      function ping(el) {
        el.animate(
          [
            { transform: 'scale(1)', opacity: 0.75 },
            { transform: 'scale(2.25)', opacity: 0 }
          ],
          { duration: 1400, iterations: Infinity, easing: 'ease-out' }
        );
      }

      // In-view observer
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const type = el.getAttribute('data-anim');
          const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          animateIn(el, type, delay);
          io.unobserve(el);
        });
      }, { root: null, threshold: 0.2 });

      document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));

      // Float demo
      const floatBadge = document.getElementById('floatBadge');
      if (floatBadge) float(floatBadge);

      // Status indicator effects
      const glowDot = document.getElementById('glowDot');
      const pingDot = document.getElementById('pingDot');
      if (glowDot) pulseGlow(glowDot, 'rgba(16,185,129,0.55)');
      if (pingDot) ping(pingDot);
      const statusIndicator = document.getElementById('statusIndicator');
      let lastY = window.scrollY;
      function onScroll() {
        const y = window.scrollY;
        const progress = Math.min(y / (document.documentElement.scrollHeight - window.innerHeight), 1);
        if (statusIndicator) {
          const translateY = -y * 0.1;
          const scale = Math.max(0.9, 1 - progress * 0.08);
          statusIndicator.style.transform = `translateY(calc(-50% + ${translateY}px)) scale(${scale})`;
          statusIndicator.style.filter = `drop-shadow(0 0 ${20 + Math.sin(progress * Math.PI) * 18}px rgba(34,197,94,0.55))`;
        }
        lastY = y;
      }
      window.addEventListener('scroll', onScroll, { passive: true });

      // Click status -> contact
      if (statusIndicator) {
        statusIndicator.addEventListener('click', () => {
          const contact = document.getElementById('contact');
          if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      // Headline letter-by-letter
      function animateHeadlineLetters() {
        const h = document.getElementById('heroHeadline');
        if (!h) return;
        const text = h.textContent || '';
        h.textContent = '';
        const baseDelay = 200;
        [...text].forEach((ch, idx) => {
          const span = document.createElement('span');
          span.textContent = ch;
          span.style.display = 'inline-block';
          if (ch === ' ') span.style.marginRight = '0.5rem';
          h.appendChild(span);
          span.animate(
            [
              { opacity: 0, transform: 'translateY(24px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ],
            { duration: 600, delay: baseDelay + idx * 40, easing: easings, fill: 'forwards' }
          );
        });
      }

      // Typing animation (code window)
      function startCodeTyping() {
        const container = document.getElementById('codeContainer');
        if (!container) return;

        const lines = [
          { html: '<span style="color:#60A5FA">// Дизайн‑система</span>' },
          { html: '<span style="color:#60A5FA">const</span> <span style="color:#FBBF24">components</span> = <span style="color:#E5E7EB">{</span>' },
          { text: '  button: "primary-cta",' },
          { text: '  card: "glass-container",' },
          { text: '  typography: "system-fonts"' },
          { text: '};' },
          { html: '<span style="color:#9CA3AF">// Интерактивные прототипы</span>' },
          { html: '<span style="color:#60A5FA">function</span> <span style="color:#FBBF24">createPrototype</span>() <span style="color:#E5E7EB">{</span>' },
          { text: '  return userTesting;' },
          { text: '}' }
        ];

        let i = 0;
        const speed = 24;
        const lineGap = 260;

        function typeLine() {
          if (i >= lines.length) return;
          const row = document.createElement('div');
          row.style.whiteSpace = 'pre';
          row.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
          row.style.lineHeight = '1.6';
          row.style.fontSize = '0.9rem';
          row.style.borderRight = '2px solid #10B981';
          row.style.opacity = '1';
          if (lines[i].html) {
            row.innerHTML = lines[i].html;
            container.appendChild(row);
            row.style.borderRight = 'none';
            i += 1;
            setTimeout(typeLine, 180);
            return;
          }
          const txt = lines[i].text || '';
          container.appendChild(row);
          let c = 0;
          function step() {
            if (c <= txt.length) {
              row.textContent = txt.slice(0, c);
              c += 1;
              setTimeout(step, speed);
            } else {
              row.style.borderRight = 'none';
              i += 1;
              setTimeout(typeLine, lineGap);
            }
          }
          step();
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && container.childElementCount === 0) {
              setTimeout(typeLine, 300);
            }
          });
        }, { threshold: 0.3 });
        observer.observe(container);
      }

      // Marquee
      function startMarquee() {
        const track = document.getElementById('marquee');
        if (!track) return;
        let totalWidth = 0;
        track.childNodes.forEach(node => {
          if (node.nodeType === 1) totalWidth += node.getBoundingClientRect().width;
        });
        // Animate translateX loop
        track.animate(
          [
            { transform: 'translateX(0)' },
            { transform: `translateX(-${totalWidth / 3}px)` }
          ],
          { duration: 25000, iterations: Infinity, easing: 'linear' }
        );
      }

      // Init
      document.addEventListener('DOMContentLoaded', () => {
        animateHeadlineLetters();
        startCodeTyping();
        startMarquee();
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe></div></div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl opacity-0" data-anim="fade-in" data-delay="300"></div>
<div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl opacity-0" data-anim="fade-in" data-delay="500"></div>
<div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl opacity-0" data-anim="fade-in" data-delay="700"></div>
</div>

<div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block" id="statusIndicator" style={{transform: `translateY(calc(-50% - 188.75px)) scale(0.931519)`, filter: `drop-shadow(rgba(34, 197, 94, 0.55) 0px 0px 27.8676px)`}}>
<button className="relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl pl-6 pr-6 py-3 transition-all hover:bg-white/15" data-anim="slide-up" data-delay="900" style={{transform: `translateY(24px)`}}>
<span className="relative flex h-3 w-3">
<span aria-hidden="true" className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" id="pingDot"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.6)]" id="glowDot"></span>
</span>
<span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-gray-300 whitespace-nowrap tracking-wide">Доступен для проектов</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-emerald-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span aria-hidden="true" className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-30"></span>
</button>
<div aria-hidden="true" className="absolute top-1/2 -left-6 h-px w-5 -translate-y-1/2 bg-gradient-to-l from-white/30 to-transparent"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-30">
<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4">
<div className="relative h-16 rounded-2xl border border-white/15 bg-white/10 ring-1 ring-white/10 backdrop-blur-xl shadow-lg flex items-center justify-between px-4">
<a className="inline-flex items-center gap-2" href="#">
<span className="rounded-xl border border-white/25 bg-white/15 px-3 py-1.5 text-lg font-semibold tracking-tight">JC</span>
</a>
<nav className="hidden md:flex items-center gap-7">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#work">Работы</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#about">Обо мне</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#process">Процесс</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#contact">Контакты</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-5 py-2.5 text-sm font-semibold hover:bg-white transition-all hover:scale-[1.02]" href="#contact">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
            Связаться
          </a>
<button className="md:hidden rounded-xl bg-white/15 border border-white/30 p-2.5 text-white hover:bg-white/20 backdrop-blur-md" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
<div className="hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl ring-1 ring-white/10 shadow-lg md:hidden" id="mobileNav">
<div className="p-4 space-y-2">
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white" href="#work">Работы</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white" href="#about">Обо мне</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white" href="#process">Процесс</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white" href="#contact">Контакты</a>
</div>
</div>
</div>
</div>
</header>

<div className="fixed z-[60] pointer-events-none rounded-full" id="spotlight" style={{width: `220px`, height: `220px`, borderRadius: `9999px`, background: `white`, mixBlendMode: `difference`, opacity: `0`, transform: `translate(-50%, -50%)`, left: `68px`, top: `87px`}}></div>

<section className="relative pt-36 pb-20" id="hero">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center">
<div className="mb-8 flex justify-center">
<img alt="Jordan Chen" className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-white/15 shadow-2xl opacity-0" data-anim="scale-in" data-delay="200" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dcddf2a1-9a2d-4dd1-9679-ea874ae3a1d5_800w.jpg" />
</div>
<h1 className="md:text-7xl lg:text-8xl text-5xl font-semibold tracking-tight" id="heroHeadline"><span style={{display: `inline-block`}}>
</span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span className="" style={{display: `inline-block`}}>П</span><span className="" style={{display: `inline-block`}}>р</span><span style={{display: `inline-block`}}>о</span><span style={{display: `inline-block`}}>д</span><span style={{display: `inline-block`}}>у</span><span className="" style={{display: `inline-block`}}>к</span><span style={{display: `inline-block`}}>т</span><span className="" style={{display: `inline-block`}}>о</span><span style={{display: `inline-block`}}>в</span><span style={{display: `inline-block`}}>ы</span><span style={{display: `inline-block`}}>й</span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`}}>д</span><span style={{display: `inline-block`}}>и</span><span style={{display: `inline-block`}}>з</span><span style={{display: `inline-block`}}>а</span><span style={{display: `inline-block`}}>й</span><span style={{display: `inline-block`}}>н</span><span style={{display: `inline-block`}}>е</span><span style={{display: `inline-block`}}>р</span><span style={{display: `inline-block`}}>
</span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span><span style={{display: `inline-block`, marginRight: `0.5rem`}}> </span></h1>
<p className="max-w-3xl md:text-xl leading-relaxed opacity-0 text-lg text-gray-100 mt-6 mr-auto ml-auto" data-anim="slide-up" data-delay="400">
            Создаю цифровые продукты, которые интуитивны, красивы и решают реальные задачи для инновационных команд.
          </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0" data-anim="slide-up" data-delay="600">
<a className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-3.5 text-sm md:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-[1.02]" href="#work">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Смотреть работы
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-7 py-3.5 text-sm md:text-base font-medium hover:bg-white/15 transition-all hover:scale-[1.02]" href="#about">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="7"></circle></svg>
              Обо мне
            </a>
</div>
<div className="mt-14 grid grid-cols-3 gap-8 max-w-lg mx-auto">
<div className="text-center opacity-0" data-anim="fade-in" data-delay="800">
<div className="text-2xl md:text-3xl tracking-tight font-light">8+</div>
<div className="text-xs md:text-sm text-gray-400 mt-1">лет</div>
</div>
<div className="text-center opacity-0" data-anim="fade-in" data-delay="900">
<div className="text-2xl md:text-3xl tracking-tight font-light">50+</div>
<div className="text-xs md:text-sm text-gray-400 mt-1">проектов</div>
</div>
<div className="text-center opacity-0" data-anim="fade-in" data-delay="1000">
<div className="text-2xl md:text-3xl tracking-tight font-light">12</div>
<div className="text-xs md:text-sm text-gray-400 mt-1">наград</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<p className="text-sm font-medium text-gray-500 text-center mb-8">Мне доверяют лидеры отрасли</p>
<div className="relative overflow-hidden">
<div className="flex whitespace-nowrap will-change-transform" id="marquee">
<div className="flex gap-16 md:gap-20 text-gray-400 mr-8 ml-8 items-center">
<span className="hover:text-gray-300 transition">Правительство РФ</span>
<span className="hover:text-gray-300 transition">Газпром</span>
<span className="hover:text-gray-300 transition">Сбер</span>
<span className="hover:text-gray-300 transition">amoCRM</span>
<span className="hover:text-gray-300 transition">ZionCity</span>
<span className="hover:text-gray-300 transition">АльфаБанк</span>
</div>
<div aria-hidden="true" className="flex items-center gap-16 md:gap-20 mx-8 text-gray-400">
<span className="hover:text-gray-300 transition">AFK system</span>
<span className="hover:text-gray-300 transition">AngelsIT</span>
<span className="hover:text-gray-300 transition">Ростелеком </span>
<span className="hover:text-gray-300 transition">Philips</span>
<span className="hover:text-gray-300 transition">Ангстрем </span>
<span className="hover:text-gray-300 transition">Правительство РФ</span>
</div>
<div aria-hidden="true" className="flex items-center gap-16 md:gap-20 mx-8 text-gray-400">
<span className="hover:text-gray-300 transition">МТС</span>
<span className="hover:text-gray-300 transition">Tesla</span>
<span className="hover:text-gray-300 transition">Stripe</span>
<span className="hover:text-gray-300 transition">Notion</span>
<span className="hover:text-gray-300 transition">Figma</span>
<span className="hover:text-gray-300 transition">Linear</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="work">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-14">
<h2 className="text-4xl md:text-5xl tracking-tight font-light">Чем я занимаюсь</h2>
<p className="mt-4 text-lg md:text-xl text-gray-400">Короткая подборка пользовательских анимаций и микро‑взаимодействий</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="hover:bg-white/[0.08] transition group opacity-0 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg" data-anim="scale-in" data-delay="100">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-light">Плавное появление и сдвиг</h3>
<svg className="lucide lucide-sparkles w-5 h-5 text-emerald-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</div>
<p className="mt-3 text-gray-400">Плавные входные переходы через прозрачность и вертикальный сдвиг.</p>
<div className="mt-6 h-28 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center opacity-0" data-anim="slide-up" data-delay="200">
<span className="text-sm text-gray-300">подъём при появлении</span>
</div>
</div>
<div className="hover:bg-white/[0.08] transition group opacity-0 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg" data-anim="scale-in" data-delay="200">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-light">Появление через размытие</h3>
<svg className="lucide lucide-focus w-5 h-5 text-indigo-400" data-lucide="focus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path><path></path></svg>
</div>
<p className="mt-3 text-gray-400">Чёткое раскрытие: от размытого к резкому.</p>
<div className="mt-6 h-28 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center opacity-0" data-anim="blur-in" data-delay="300">
<span className="text-sm text-gray-300">размытие при входе</span>
</div>
</div>
<div className="hover:bg-white/[0.08] transition group opacity-0 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg" data-anim="scale-in" data-delay="300">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-light">Парение и свечение</h3>
<svg className="lucide lucide-activity w-5 h-5 text-pink-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="mt-3 text-gray-400">Лёгкое покачивание и мягкое пульсирующее свечение.</p>
<div className="mt-6 h-28 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 bg-white/10" id="floatBadge">
<span className="h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_16px_rgba(244,114,182,0.6)]"></span>
<span className="text-sm text-gray-200">парящий бейдж</span>
</div>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8" id="process">
<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="h-8 w-full bg-white/10 rounded-md flex items-center px-3 gap-2 border border-white/10">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="mt-4 min-h-[160px] font-mono text-sm leading-relaxed text-gray-300" id="codeContainer"><div style={{whiteSpace: `pre`, fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`, lineHeight: `1.6`, fontSize: `0.9rem`, borderRight: `none`, opacity: `1`}}><span style={{color: `#60A5FA`}}>// Дизайн‑система</span></div><div style={{whiteSpace: `pre`, fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`, lineHeight: `1.6`, fontSize: `0.9rem`, borderRight: `none`, opacity: `1`}}><span style={{color: `#60A5FA`}}>const</span> <span style={{color: `#FBBF24`}}>components</span> = <span style={{color: `#E5E7EB`}}>{"{"}</span></div><div style={{whiteSpace: `pre`, fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`, lineHeight: `1.6`, fontSize: `0.9rem`, borderRight: `2px solid rgb(16, 185, 129)`, opacity: `1`}}></div></div>
</div>
<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<h3 className="text-2xl tracking-tight font-light">Дизайн и прототипирование</h3>
<p className="mt-3 text-gray-300">От вайрфреймов до отполированных прототипов — взаимодействия проверяются на ранних этапах благодаря постоянной обратной связи.</p>
<ul className="mt-6 space-y-3 text-gray-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Исследование и аналитика
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Прототипирование и микро‑взаимодействия
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Юзабилити‑тестирование
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="relative mb-12 text-center">
<div aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl"></div>
<h2 className="relative text-4xl md:text-5xl tracking-tight font-light">Обо <span className="text-white/80">мне</span></h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Работа на свежем воздухе" className="w-full h-[360px] md:h-[420px] object-cover opacity-0" data-anim="blur-in" data-delay="150" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6453140-0e66-40b1-89b8-06321fdcdc09_1600w.jpg" />
</div>
</div>
<div className="border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-lg">
<h3 className="text-2xl tracking-tight font-light">Интересно узнать обо мне?</h3>
<div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-white/60 to-transparent"></div>
<p className="mt-6 text-gray-300">
              Я продуктовый дизайнер, сфокусированный на ясности, темпе и измеримых результатах. Тесно работаю с инженерией и продуктом, чтобы находить простые и изящные решения сложных задач.
            </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition-all hover:scale-[1.02]" href="#contact">
                Узнать больше
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10 pt-20 pb-24" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl tracking-tight font-light">Давайте создадим что‑то отличное</h2>
<p className="mt-4 text-xl text-gray-400">Расскажите о своих целях. Я помогу наметить путь к ним.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-3.5 text-sm md:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-[1.02]" href="mailto:hello@jordanchen.design">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
                hello@jordanchen.design
              </a>
<a className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-7 py-3.5 text-sm md:text-base font-medium hover:bg-white/15 transition-all hover:scale-[1.02]" href="#">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
                Назначить звонок
              </a>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-dribbble w-5 h-5 text-gray-300" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path></svg>
</a>
<a className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-twitter w-5 h-5 text-gray-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-gray-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" width="4"></rect><circle cx="4" cy="4"></circle></svg>
</a>
<a className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-github w-5 h-5 text-gray-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8">
<h3 className="text-2xl tracking-tight font-light">Быстрые ссылки</h3>
<div className="mt-6 grid grid-cols-2 gap-4 text-gray-300">
<a className="hover:text-white transition" href="#work">Работы</a>
<a className="hover:text-white transition" href="#about">Обо мне</a>
<a className="hover:text-white transition" href="#process">Процесс</a>
<a className="hover:text-white transition" href="#contact">Контакты</a>
</div>
</div>
</div>
<div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
<div className="flex items-center gap-2">
<span className="rounded-xl border border-white/25 bg-white/10 px-3 py-1.5 text-lg font-semibold tracking-tight">JC</span>
<span className="text-sm text-gray-500">© 2024 Jordan Cole. Все права защищены.</span>
</div>
<div className="text-sm text-gray-500">Спроектировано осознанно, сделано с заботой</div>
</div>
</div>

<button aria-label="Наверх" className="group fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition shadow-lg hover:shadow-white/10" id="goToTop">
<svg className="lucide lucide-arrow-up w-5 h-5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</footer>




    </>
  );
}
