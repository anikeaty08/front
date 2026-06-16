import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Icons
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' } });
      }

      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
          const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
          menuBtn.setAttribute('aria-expanded', String(!expanded));
        });
        // Close on link click
        mobileNav.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
          });
        });
        // Close on ESC
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            mobileNav.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
          }
        });
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
      if (hero && spotlight && !prefersReduced) {
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
        if (prefersReduced) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.filter = 'none';
          return;
        }
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
        if (prefersReduced) return;
        el.animate(
          [{ transform: 'translateY(0)' }, { transform: 'translateY(-8px)' }, { transform: 'translateY(0)' }],
          { duration: 6000, iterations: Infinity, easing: 'ease-in-out' }
        );
      }
      function pulseGlow(el, color = 'rgba(16,185,129,0.5)') {
        if (prefersReduced) return;
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
        if (prefersReduced) return;
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

      // Status indicator effects
      const glowDot = document.getElementById('glowDot');
      const pingDot = document.getElementById('pingDot');
      if (glowDot) pulseGlow(glowDot, 'rgba(16,185,129,0.55)');
      if (pingDot) ping(pingDot);
      const statusIndicator = document.getElementById('statusIndicator');
      function onScroll() {
        const y = window.scrollY;
        const progress = Math.min(y / (document.documentElement.scrollHeight - window.innerHeight), 1);
        if (statusIndicator) {
          const translateY = -y * 0.1;
          const scale = Math.max(0.9, 1 - progress * 0.08);
          statusIndicator.style.transform = `translateY(calc(-50% + ${translateY}px)) scale(${scale})`;
          statusIndicator.style.filter = `drop-shadow(0 0 ${20 + Math.sin(progress * Math.PI) * 18}px rgba(34,197,94,0.55))`;
        }
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
        const text = (h.textContent || '').trim();
        h.textContent = '';
        const baseDelay = 200;
        if (prefersReduced) {
          h.textContent = text;
          return;
        }
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

  const sharedRowStyle = 'white-space: pre; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; line-height: 1.6; font-size: 0.9rem;';

    const lines = [
  { html: '<span style="color:#60A5FA">// Дизайн‑система</span>' },
  { html: '<span style="color:#60A5FA">const</span> <span style="color:#FBBF24">components</span> = <span style="color:#E5E7EB">{</span>' },
  { text: '  button: {', color: '#E5E7EB' },
  { text: '    primary: "bg-blue-500 text-white py-2 px-4 rounded",', color: '#FBBF24' },
  { text: '    secondary: "bg-gray-200 text-gray-800 py-2 px-4 rounded"', color: '#FBBF24' },
  { text: '  },', color: '#E5E7EB' },
  { text: '  card: "bg-white rounded-lg shadow-md p-6",', color: '#FBBF24' },
  // Вариант 3: горизонтальная компактность с переносами
  { text: '  input: "border border-gray-300 rounded px-3 py-2', color: '#FBBF24' },

  { text: '};', color: '#E5E7EB' },
  { html: '<span style="color:#9CA3AF">// Экспорт для использования</span>' },
  { html: '<span style="color:#60A5FA">export</span> <span style="color:#60A5FA">default</span> components;' }
];

  if (prefersReduced) {
    lines.forEach(l => {
      const row = document.createElement('div');
      row.setAttribute('style', sharedRowStyle);
      if (l.html) row.innerHTML = l.html; 
      else if (l.text) {
        row.innerHTML = `<span style="color:${l.color}">${l.text}</span>`;
      }
      container.appendChild(row);
    });
    return;
  }

  // Очищаем контейнер перед началом анимации
  container.innerHTML = '';
  
  let currentLine = 0;
  const typingSpeed = 30;
  const lineDelay = 100;
  let animationStarted = false;

  function typeNextLine() {
    if (currentLine >= lines.length) return;
    
    const lineData = lines[currentLine];
    const lineDiv = document.createElement('div');
    lineDiv.style = sharedRowStyle + ' border-right: 2px solid #10B981;';
    container.appendChild(lineDiv);

    if (lineData.html) {
      // Для HTML-строк просто вставляем содержимое
      lineDiv.innerHTML = lineData.html;
      lineDiv.style.borderRight = 'none';
      currentLine++;
      setTimeout(typeNextLine, lineDelay);
    } else if (lineData.text) {
      // Для текстовых строк анимируем печать
      let charIndex = 0;
      const text = lineData.text;
      
      function typeChar() {
        if (charIndex < text.length) {
          lineDiv.innerHTML = `<span style="color:${lineData.color}">${text.substring(0, charIndex + 1)}</span>`;
          charIndex++;
          setTimeout(typeChar, typingSpeed);
        } else {
          lineDiv.style.borderRight = 'none';
          currentLine++;
          setTimeout(typeNextLine, lineDelay);
        }
      }
      typeChar();
    }
  }

  // Создаем Intersection Observer для запуска анимации при видимости 30%
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          typeNextLine();
          observer.unobserve(container); // Прекращаем наблюдение после запуска
        }
      });
    },
    { threshold: 0.3 } // Запускаем, когда 30% элемента видно
  );

  // Начинаем наблюдение за контейнером
  observer.observe(container);
}

      // Marquee
      let marqueeAnim = null;
      function startMarquee() {
        const track = document.getElementById('marquee');
        if (!track) return;
        if (prefersReduced) {
          track.style.transform = 'none';
          return;
        }
        // Cancel previous
        if (marqueeAnim) marqueeAnim.cancel();

        // Calculate total width of children
        let totalWidth = 0;
        [...track.children].forEach(node => {
          totalWidth += node.getBoundingClientRect().width;
        });

        // Guard against zero width
        if (totalWidth === 0) return;

        marqueeAnim = track.animate(
          [
            { transform: 'translateX(0)' },
            { transform: `translateX(-${Math.max(200, totalWidth / 3)}px)` }
          ],
          { duration: 25000, iterations: Infinity, easing: 'linear' }
        );
      }

      // Handle resize for marquee
      let resizeTO;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTO);
        resizeTO = setTimeout(startMarquee, 200);
      }, { passive: true });

      // Init
      document.addEventListener('DOMContentLoaded', () => {
        animateHeadlineLetters();
        startCodeTyping();
        startMarquee();

        // Accessibility: if reduced motion, reveal all [data-anim] immediately
        if (prefersReduced) {
          document.querySelectorAll('[data-anim]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.filter = 'none';
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component top-0 w-full -z-10 absolute h-[975px]"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl opacity-0" data-anim="fade-in" data-delay="300"></div>
<div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl opacity-0" data-anim="fade-in" data-delay="500"></div>
<div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl opacity-0" data-anim="fade-in" data-delay="700"></div>
</div>

<div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block" id="statusIndicator" style={{transform: 'translateY(calc(-50% - 206px)) scale(0.933306)', filter: 'drop-shadow(rgba(34, 197, 94, 0.55) 0px 0px 28.9835px)'}}>
<button className="relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl pl-6 pr-6 py-3 transition-all hover:bg-white/15" data-anim="slide-up" data-delay="900" style={{transform: 'translateY(24px)'}}>
<span className="relative flex h-3 w-3">
<span aria-hidden="true" className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" id="pingDot"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.6)]" id="glowDot"></span>
</span>
<span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-gray-300 whitespace-nowrap tracking-wide">Доступен для проектов</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-emerald-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Связаться
          </a>
<button aria-controls="mobileNav" aria-expanded="false" aria-label="Открыть меню" className="md:hidden rounded-xl bg-white/15 border border-white/30 p-2.5 text-white hover:bg-white/20 backdrop-blur-md" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
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

<div className="fixed z-[60] pointer-events-none rounded-full" id="spotlight" style={{width: '220px', height: '220px', borderRadius: '9999px', background: 'white', mixBlendMode: 'difference', opacity: '0', transform: 'translate(-50%, -50%)', left: '656px', top: '82px'}}></div>

<section className="relative pt-36 pb-20" id="hero">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center">
<div className="flex mb-8 pt-0 pb-10 justify-center">
<img alt="Jordan Chen" className="h-28 w-28 md:h-32 md:w-32 ring-4 ring-white/15 opacity-0 object-cover rounded-full shadow-2xl" data-anim="scale-in" data-delay="200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<h1 className="md:text-3xl lg:text-6xl text-4xl font-semibold tracking-tight font-nunito mt-2 mb-2" id="heroHeadline"><span className="" style={{display: 'inline-block'}}>П</span><span className="" style={{display: 'inline-block'}}>р</span><span style={{display: 'inline-block'}}>о</span><span style={{display: 'inline-block'}}>д</span><span style={{display: 'inline-block'}}>у</span><span style={{display: 'inline-block'}}>к</span><span className="" style={{display: 'inline-block'}}>т</span><span style={{display: 'inline-block'}}>о</span><span style={{display: 'inline-block'}}>в</span><span style={{display: 'inline-block'}}>ы</span><span style={{display: 'inline-block'}}>й</span><span style={{display: 'inline-block', marginRight: '0.5rem'}}> </span><span style={{display: 'inline-block'}}>д</span><span style={{display: 'inline-block'}}>и</span><span style={{display: 'inline-block'}}>з</span><span style={{display: 'inline-block'}}>а</span><span style={{display: 'inline-block'}}>й</span><span style={{display: 'inline-block'}}>н</span><span style={{display: 'inline-block'}}>е</span><span style={{display: 'inline-block'}}>р</span></h1>
<p className="max-w-2xl md:text-lg leading-relaxed opacity-0 text-2xl text-gray-100 mt-6 mr-auto ml-auto" data-anim="slide-up" data-delay="400">
            Создаю цифровые продукты, которые интуитивны, красивы и решают реальные задачи для инновационных команд.
          </p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 mt-20 items-center justify-center" data-anim="slide-up" data-delay="600">
<a className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-3.5 text-sm md:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-[1.02]" href="#work">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Смотреть работы
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-7 py-3.5 text-sm md:text-base font-medium hover:bg-white/15 transition-all hover:scale-[1.02]" href="#about">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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

<section className="border-y border-white/10 pt-12 pb-12 backdrop-blur-lg">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<p className="text-sm font-medium text-gray-500 text-center mb-8">Мне доверяют лидеры отрасли</p>
<div className="relative overflow-hidden">
<div className="flex whitespace-nowrap will-change-transform" id="marquee">
<div className="flex gap-16 md:gap-20 text-gray-200 mr-8 ml-8 items-center">
<span className="hover:text-gray-300 transition">Правительство РФ</span>
<span className="hover:text-gray-300 transition">Газпром</span>
<span className="hover:text-gray-300 transition">Сбер</span>
<span className="hover:text-gray-300 transition">amoCRM</span>
<span className="hover:text-gray-300 transition">ZionCity</span>
<span className="hover:text-gray-300 transition">АльфаБанк</span>
</div>
<div aria-hidden="true" className="flex gap-16 md:gap-20 text-gray-200 mr-8 ml-8 items-center">
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
<p className="mt-4 text-lg md:text-xl text-gray-400">Подборка направлений, где плавность, динамика и взаимодействие работают на результат</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900 border-zinc-800/70 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur" data-anim="slide-up" data-delay="100">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">UX/UI дизайн</h3>
<p className="leading-relaxed text-gray-400">Создание интуитивных и эстетичных интерфейсов, где каждый элемент продуман для комфорта пользователя. Разработка 3D графики.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="UX/UI дизайн — превью" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70c9e818-8e08-4e5c-ae2f-4fc0f3b2b30e_800w.jpg"/>
</div>
</div>
<div className="flex text-sm text-[#ffffff] mt-6 items-center">
<span>Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900/80 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur" data-anim="slide-up" data-delay="180">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Product Design</h3>
<p className="leading-relaxed text-gray-400">Глубокое погружение в продукт: от исследования аудитории и проектирования логики до финального визуального исполнения</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Product Design — превью" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40da0c82-6e2f-4b70-a7b5-0498f0e7f525_800w.jpg"/>
</div>
</div>
<div className="flex text-sm text-[#ffffff] mt-6 items-center">
<span>Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl bg-zinc-900/90 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur-md" data-anim="slide-up" data-delay="260">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Дизайн-системы</h3>
<p className="leading-relaxed text-gray-400">Создание и поддержание библиотек компонентов, которые обеспечивают единство визуального языка и ускоряют работу над проектом</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Дизайн‑системы — превью" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/562ccd5e-2c33-4a35-9897-6bc64b012fca_800w.jpg"/>
</div>
</div>
<div className="flex text-sm text-[#ffffff] mt-6 items-center">
<span>Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8" id="process">
<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg" data-anim="fade-in" data-delay="120">
<div className="h-8 w-full bg-white/10 rounded-md flex items-center px-3 gap-2 border border-white/10">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="mt-4 min-h-[160px] font-mono text-sm leading-relaxed text-gray-300" id="codeContainer"></div>
</div>
<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg" data-anim="slide-up" data-delay="180">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Дизайн и прототипирование</h2>
<p className="mt-3 text-gray-300">От вайрфреймов до отполированных прототипов — взаимодействия проверяются на ранних этапах благодаря постоянной обратной связи.</p>
<ul className="mt-6 space-y-3 text-gray-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Исследование и аналитика
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Прототипирование и микро‑взаимодействия
              </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
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
<h2 className="relative md:text-5xl text-4xl font-light tracking-tight">Портфолио</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Интерактивный прототип amoCRM" className="w-full h-[360px] md:h-[420px] opacity-0 object-cover" data-anim="blur-in" data-delay="150" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<div className="border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-lg" data-anim="slide-up" data-delay="140">
<h3 className="text-2xl tracking-tight font-light">Интересно узнать обо мне?</h3>
<div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-white/60 to-transparent"></div>
<p className="mt-6 text-gray-300">
              Я продуктовый дизайнер, сфокусированный на ясности, темпе и измеримых результатах. Тесно работаю с инженерией и продуктом, чтобы находить простые и изящные решения сложных задач.
            </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition-all hover:scale-[1.02]" href="#contact">
                Узнать больше
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10 pt-20 pb-24" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div data-anim="fade-in" data-delay="120">
<h2 className="text-4xl md:text-5xl tracking-tight font-light">Давайте создадим что‑то отличное</h2>
<p className="mt-4 text-xl text-gray-400">Расскажите о своих целях. Я помогу наметить путь к ним.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-3.5 text-sm md:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-[1.02]" href="mailto:hello@jordanchen.design">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@jordanchen.design
              </a>
<a className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-7 py-3.5 text-sm md:text-base font-medium hover:bg-white/15 transition-all hover:scale-[1.02]" href="#">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Назначить звонок
              </a>
</div>
<div className="mt-6 flex items-center gap-3">
<a aria-label="Dribbble" className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-dribbble w-5 h-5 text-gray-300" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a aria-label="X/Twitter" className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-twitter w-5 h-5 text-gray-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-gray-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="GitHub" className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition" href="#">
<svg className="lucide lucide-github w-5 h-5 text-gray-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8" data-anim="fade-in" data-delay="200">
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
<svg className="lucide lucide-arrow-up w-5 h-5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</footer>




    </>
  );
}
