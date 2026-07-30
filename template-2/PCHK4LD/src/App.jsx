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
      
      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Gallery data
      const gallery = [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1600&auto=format&fit=crop"
      ];

      // Populate thumbnails
      const thumbs = document.getElementById('thumbs');
      const hero = document.getElementById('hero-image');

      function renderThumbs(activeIndex = 0) {
        thumbs.innerHTML = '';
        gallery.forEach((src, i) => {
          const btn = document.createElement('button');
          btn.className = "group relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-1 transition-all " + (i === activeIndex ? "ring-amber-300/40" : "ring-white/10 hover:ring-white/20");
          btn.setAttribute('data-index', i);
          btn.innerHTML = `
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="Фото ${i+1}" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            ${i === activeIndex ? '<div class="absolute inset-0 ring-2 ring-amber-300/40 rounded-xl pointer-events-none"></div>' : ''}
          `;
          btn.addEventListener('click', () => {
            setActive(i);
          });
          btn.addEventListener('dblclick', () => openViewer(i));
          thumbs.appendChild(btn);
        });
      }

      function setActive(i) {
        hero.src = gallery[i];
        renderThumbs(i);
      }

      renderThumbs(0);

      // Fullscreen viewer
      const viewer = document.getElementById('viewer');
      const viewerImg = document.getElementById('viewer-image');
      const viewerCounter = document.getElementById('viewer-counter');
      const btnClose = document.getElementById('viewer-close');
      const btnPrev = document.getElementById('viewer-prev');
      const btnNext = document.getElementById('viewer-next');
      let currentIndex = 0;

      function syncCounter() {
        viewerCounter.textContent = (currentIndex + 1) + " / " + gallery.length;
      }

      function openViewer(index = 0) {
        currentIndex = index;
        viewerImg.src = gallery[currentIndex];
        syncCounter();
        viewer.classList.remove('pointer-events-none', 'invisible');
        viewer.style.opacity = '1';
      }

      function closeViewer() {
        viewer.style.opacity = '0';
        setTimeout(() => {
          viewer.classList.add('pointer-events-none', 'invisible');
          viewerImg.src = '';
        }, 160);
      }

      function next() {
        currentIndex = (currentIndex + 1) % gallery.length;
        viewerImg.src = gallery[currentIndex];
        syncCounter();
      }
      function prev() {
        currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        viewerImg.src = gallery[currentIndex];
        syncCounter();
      }

      hero.addEventListener('click', () => openViewer(gallery.indexOf(hero.src) >= 0 ? gallery.indexOf(hero.src) : 0));
      btnClose.addEventListener('click', closeViewer);
      btnNext.addEventListener('click', next);
      btnPrev.addEventListener('click', prev);
      viewer.addEventListener('click', (e) => {
        if (e.target === viewer) closeViewer();
      });
      document.addEventListener('keydown', (e) => {
        if (viewer.classList.contains('pointer-events-none')) return;
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      });

      // Tooltips
      const tooltip = document.createElement('div');
      tooltip.className = "pointer-events-none fixed z-[200] hidden rounded-md border border-white/10 bg-black/85 px-2 py-1 text-[11px] text-white/90 shadow-sm";
      document.body.appendChild(tooltip);

      function showTooltip(e, text) {
        tooltip.textContent = text;
        tooltip.style.left = (e.clientX + 10) + 'px';
        tooltip.style.top = (e.clientY + 12) + 'px';
        tooltip.classList.remove('hidden');
      }
      function hideTooltip() {
        tooltip.classList.add('hidden');
      }

      document.querySelectorAll('[data-tooltip]').forEach(el => {
        el.addEventListener('mouseenter', (e) => showTooltip(e, el.getAttribute('data-tooltip') || ''));
        el.addEventListener('mousemove', (e) => showTooltip(e, el.getAttribute('data-tooltip') || ''));
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('focus', (e) => showTooltip(e, el.getAttribute('data-tooltip') || ''));
        el.addEventListener('blur', hideTooltip);
      });

      // About expand / collapse
      const aboutWrap = document.getElementById('about-wrap');
      const aboutText = document.getElementById('about-text');
      const aboutFade = document.getElementById('about-fade');
      const aboutToggle = document.getElementById('about-toggle');
      let aboutExpanded = false;

      function updateAbout() {
        if (aboutExpanded) {
          aboutText.classList.remove('max-h-40', 'overflow-hidden');
          aboutFade.classList.add('hidden');
          aboutToggle.innerHTML = `<i data-lucide="chevron-up" class="h-4 w-4" stroke-width="1.5"></i> Свернуть`;
        } else {
          aboutText.classList.add('max-h-40', 'overflow-hidden');
          aboutFade.classList.remove('hidden');
          aboutToggle.innerHTML = `<i data-lucide="chevron-down" class="h-4 w-4" stroke-width="1.5"></i> Показать больше`;
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      aboutToggle.addEventListener('click', () => {
        aboutExpanded = !aboutExpanded;
        updateAbout();
      });
      updateAbout();

      // Mode toggle: full vs minimal
      const profileRoot = document.getElementById('profile-root');
      document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.dataset.mode;
          profileRoot.setAttribute('data-state', mode);
          // Buttons visual
          document.querySelectorAll('.mode-btn').forEach(b => {
            if (b === btn) {
              b.classList.add('bg-white', 'text-neutral-900', 'font-semibold');
              b.classList.remove('hover:bg-white/10', 'text-white/80', 'font-medium');
            } else {
              b.classList.remove('bg-white', 'text-neutral-900', 'font-semibold');
              b.classList.add('hover:bg-white/10', 'text-white/80', 'font-medium');
            }
          });

          // Toggle modules
          const isMinimal = mode === 'minimal';
          document.querySelectorAll('.module-full').forEach(s => s.classList.toggle('hidden', isMinimal));
          document.querySelectorAll('.module-minimal').forEach(s => s.classList.toggle('hidden', !isMinimal));

          // In minimal, keep only name on hero and hide meta badges (optionally dim them)
          const badges = document.querySelectorAll('.verification-badge');
          badges.forEach(b => b.classList.toggle('opacity-40', isMinimal));
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
      
<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-40">
<div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="mx-auto grid w-full place-items-center">

<div className="relative h-[854px] w-[393px] overflow-hidden rounded-[44px] bg-neutral-900 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">

<div className="absolute left-0 right-0 top-0 z-50 flex h-12 items-center justify-between px-6 pt-2">
<div className="text-[17px] font-semibold">9:41</div>
<div className="flex items-center gap-1">
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white/60"></div>
<div className="h-1 w-1 rounded-full bg-white/40"></div>
</div>
<div className="ml-2 h-3 w-6 rounded-sm border border-white/80 bg-white/90">
<div className="h-full w-4/5 rounded-sm bg-green-500"></div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col pt-12">

<div className="flex items-center justify-between px-5 pt-4">
<button aria-label="Назад" className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/15">
<i className="h-5 w-5 text-white/85" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>

<div className="flex items-center gap-1 rounded-full bg-white/10 p-1">
<button className="mode-btn rounded-full px-4 py-2 text-[14px] font-semibold tracking-tight text-neutral-900 bg-white" data-mode="full">Полный</button>
<button className="mode-btn rounded-full px-4 py-2 text-[14px] font-medium text-white/80 hover:bg-white/10" data-mode="minimal">Минимум</button>
</div>
<button aria-label="Опции" className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/15">
<i className="h-5 w-5 text-white/85" data-lucide="ellipsis" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-5 pb-32 pt-4 space-y-6" data-state="full" id="profile-root">

<section className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
<div className="relative h-[420px]">
<img alt="Профиль — главное фото" className="absolute inset-0 h-full w-full object-cover" id="hero-image" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60"></div>

<div className="absolute right-3 top-3 flex items-center gap-2">
<button className="verification-badge flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 p-2 text-amber-300 backdrop-blur-sm" data-tooltip="Подтвержденная личность">
<i className="h-4.5 w-4.5" data-lucide="shield-check" strokeWidth="1.5"></i>
</button>
<button className="verification-badge flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 p-2 text-amber-300 backdrop-blur-sm" data-tooltip="Подтвержденный доход">
<i className="h-4.5 w-4.5" data-lucide="badge-check" strokeWidth="1.5"></i>
</button>
<button className="verification-badge flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 p-2 text-amber-300 backdrop-blur-sm" data-tooltip="Верифицированный Instagram">
<i className="h-4.5 w-4.5" data-lucide="instagram" strokeWidth="1.5"></i>
</button>
<button className="verification-badge flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 p-2 text-amber-300 backdrop-blur-sm" data-tooltip="Подтверждено через LinkedIn">
<i className="h-4.5 w-4.5" data-lucide="linkedin" strokeWidth="1.5"></i>
</button>
</div>

<div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
<div className="flex items-end justify-between">
<div>
<div className="flex items-center gap-2">
<h1 className="text-[28px] font-semibold tracking-tight">Александра, 29</h1>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-sm">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> online
                          </span>
</div>
<div className="mt-1 flex items-center gap-2 text-[14px] text-white/85">
<i className="h-4 w-4 text-white/70" data-lucide="map-pin" strokeWidth="1.5"></i>
                          Москва • 2.1 км
                        </div>
</div>
<div className="rounded-full bg-black/40 px-3 py-1.5 text-[12px] font-medium text-white/85 ring-1 ring-white/10 backdrop-blur">7 фото</div>
</div>
</div>
</div>

<div className="relative border-t border-white/10 bg-neutral-950/40 px-3 py-3 backdrop-blur">
<div className="flex items-center gap-2 overflow-x-auto" id="thumbs">

</div>
</div>
</section>

<section className="module-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="flex items-start justify-between">
<div className="min-w-0">
<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
<h2 className="text-[22px] font-semibold tracking-tight">Основная информация</h2>
</div>
<div className="mt-3 space-y-2.5 text-[14px] text-white/85">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-white/70" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="truncate">Product Director — Goldman Sachs</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-white/70" data-lucide="building-2" strokeWidth="1.5"></i>
<span>Сфера: Финансы и технологии</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-white/70" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Город: Москва</span>
</div>
</div>
</div>
<div className="ml-3 shrink-0">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium text-amber-300">
<i className="h-3.5 w-3.5" data-lucide="linkedin" strokeWidth="1.5"></i>
                      Подтверждено через LinkedIn
                    </span>
</div>
</div>
</section>

<section className="module-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<h2 className="text-[22px] font-semibold tracking-tight">Образование</h2>
</div>
<div className="mt-3 divide-y divide-white/10">
<div className="flex items-start gap-3 py-3 first:pt-1">
<div className="mt-0.5 rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-white/85" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div className="min-w-0">
<p className="text-[14px] font-medium">MBA — INSEAD</p>
<p className="text-[13px] text-white/70">2018</p>
</div>
</div>
<div className="flex items-start gap-3 py-3">
<div className="mt-0.5 rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-white/85" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div className="min-w-0">
<p className="text-[14px] font-medium">BSc Economics — LSE</p>
<p className="text-[13px] text-white/70">2013</p>
</div>
</div>
</div>
</section>

<section className="module-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<h2 className="text-[22px] font-semibold tracking-tight">Интересы</h2>
<span className="text-[12px] text-white/60">5–7 ключевых</span>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">⛵️ Яхтинг</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">🎨 Искусство</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">✈️ Путешествия</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">🍷 Вино</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">🏔 Трекинг</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">🎻 Классика</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white/90">🍣 Гастрономия</span>
</div>
</section>

<section className="module-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
<h2 className="text-[22px] font-semibold tracking-tight">О себе</h2>
<div className="relative mt-3" id="about-wrap">
<p className="text-[14px] leading-7 text-white/85 max-h-40 overflow-hidden" id="about-text">
                    Родилась и живу между Москвой и Парижем. Люблю честные разговоры, внимание к деталям и людей, которые умеют слушать. Увлекаюсь современным искусством, морскими прогулками и гастрономическими путешествиями по малоизвестным регионам. Работаю на стыке финтеха и продуктов: собираю сильные команды, делаю сложное простым и помогаю бизнесу расти. В свободное время — фортепиано, йога, горные треки. Ищу человека, который ценит приватность, качество и умеет наслаждаться тишиной так же, как и яркими моментами. Если откликается — будем знакомы.
                  </p>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-900 to-transparent" id="about-fade"></div>
<button className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] font-medium text-white/90 transition-colors hover:bg-white/10" id="about-toggle">
<i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
                    Показать больше
                  </button>
</div>
</section>

<section className="module-full rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[18px] font-medium tracking-tight text-white/90">Модульный блок</h3>
<p className="mt-1 text-[13px] text-white/60">Например: Музыкальные предпочтения, Любимые места</p>
</div>
<button className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
<i className="h-4.5 w-4.5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section className="module-minimal hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-[14px] text-white/70">
                Профиль в минимальном состоянии: отображаются только фото и имя. Остальная информация скрыта владельцем.
              </section>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-8 z-40 px-5">
<div className="pointer-events-auto flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-950/85 px-3 py-2 backdrop-blur">
<button className="flex items-center gap-2 rounded-full px-3 py-2 text-[13px] text-white/85 hover:bg-white/10">
<i className="h-4.5 w-4.5" data-lucide="share-2" strokeWidth="1.5"></i>
                  Поделиться
                </button>
<div className="flex items-center gap-2">
<button aria-label="Симпатия" className="rounded-full border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10">
<i className="h-5 w-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<button className="rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold tracking-tight text-neutral-900 hover:bg-white/90">
                    Отправить запрос
                  </button>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-white/35"></div>
</div>

<div className="invisible pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black/90 opacity-0 transition-opacity" id="viewer">
<div aria-hidden="true" className="absolute inset-0"></div>
<div className="relative mx-auto flex max-h-[86vh] w-full max-w-[96vw] items-center justify-center px-6">
<button aria-label="Предыдущее" className="absolute left-3 rounded-full border border-white/10 bg-white/5 p-3 text-white/90 hover:bg-white/10" id="viewer-prev">
<i className="h-6 w-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="relative rounded-2xl ring-1 ring-white/10">
<img alt="Просмотр фото" className="max-h-[86vh] max-w-[86vw] rounded-2xl object-contain" id="viewer-image" src="" />
<div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[12px] text-white/90 ring-1 ring-white/10 backdrop-blur" id="viewer-counter">1/1</div>
</div>
<button aria-label="Следующее" className="absolute right-3 rounded-full border border-white/10 bg-white/5 p-3 text-white/90 hover:bg-white/10" id="viewer-next">
<i className="h-6 w-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<button aria-label="Закрыть" className="absolute top-6 right-6 rounded-full border border-white/10 bg-white/5 p-3 text-white/90 hover:bg-white/10" id="viewer-close">
<i className="h-5 w-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
