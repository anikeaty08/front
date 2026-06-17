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
      
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Bookmark toggle
      document.querySelectorAll(".bookmark-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("bg-amber-400");
          btn.classList.toggle("text-neutral-900");
        });
      });

      // About expand/collapse
      const about = document.getElementById('about-text');
      const fade = document.getElementById('about-fade');
      const toggle = document.getElementById('about-toggle');
      let expanded = false;
      toggle?.addEventListener('click', () => {
        expanded = !expanded;
        if (expanded) {
          about.classList.remove('max-h-40');
          about.classList.add('max-h-[1600px]');
          fade.classList.add('hidden');
          toggle.innerHTML = '<span>Свернуть</span><i data-lucide="chevron-up" class="w-4 h-4"></i>';
        } else {
          about.classList.remove('max-h-[1600px]');
          about.classList.add('max-h-40');
          fade.classList.remove('hidden');
          toggle.innerHTML = '<span>Читать далее</span><i data-lucide="chevron-down" class="w-4 h-4"></i>';
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Gallery
      const currentImg = document.getElementById('gallery-current');
      const count = document.getElementById('aura-gallery-count');
      const thumbsWrap = document.getElementById('aura-gallery-thumbs');
      const openBtn = document.getElementById('aura-gallery-open');

      const modal = document.getElementById('aura-gallery-modal');
      const modalImg = document.getElementById('aura-gallery-modal-img');
      const modalCount = document.getElementById('aura-gallery-modal-count');
      const closeBtn = document.getElementById('aura-gallery-close');
      const prevBtn = document.getElementById('aura-gallery-prev');
      const nextBtn = document.getElementById('aura-gallery-next');

      const thumbImgs = Array.from(thumbsWrap.querySelectorAll('img[data-full]'));
      const images = thumbImgs
        .sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index))
        .map(img => img.getAttribute('data-full'));
      let index = 0;

      function updateActiveThumb() {
        thumbsWrap.querySelectorAll('button').forEach((btn, i) => {
          btn.classList.toggle('ring-2', i === index);
          btn.classList.toggle('ring-white/80', i === index);
          btn.classList.toggle('ring-1', i !== index);
          btn.classList.toggle('ring-white/10', i !== index);
          btn.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
      }

      function setCurrent(newIndex) {
        index = (newIndex + images.length) % images.length;
        currentImg.src = images[index];
        currentImg.alt = `Фото ${index + 1}`;
        count.textContent = `${index + 1} / ${images.length}`;
        updateActiveThumb();
      }

      function openModal() {
        modal.classList.remove('hidden');
        modalImg.src = images[index];
        modalImg.alt = `Фото ${index + 1} — полноэкранный режим`;
        modalCount.textContent = `${index + 1} / ${images.length}`;
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
      function next() {
        setCurrent(index + 1);
        if (!modal.classList.contains('hidden')) {
          modalImg.src = images[index];
          modalCount.textContent = `${index + 1} / ${images.length}`;
        }
      }
      function prev() {
        setCurrent(index - 1);
        if (!modal.classList.contains('hidden')) {
          modalImg.src = images[index];
          modalCount.textContent = `${index + 1} / ${images.length}`;
        }
      }

      // Init
      setCurrent(0);

      // Thumb click
      thumbImgs.forEach(img => {
        img.parentElement.addEventListener('click', () => {
          const i = Number(img.dataset.index);
          setCurrent(i);
        });
      });

      // Open fullscreen on button or image click
      openBtn?.addEventListener('click', openModal);
      currentImg?.addEventListener('click', openModal);

      // Modal controls
      closeBtn?.addEventListener('click', closeModal);
      nextBtn?.addEventListener('click', next);
      prevBtn?.addEventListener('click', prev);

      // Keyboard in modal
      document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      });

      // Close when clicking backdrop
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
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
      

<div className="fixed inset-0 -z-10 bg-center bg-cover opacity-[0.18]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp'}}></div>
<div className="max-w-7xl min-h-screen mx-auto px-6 pt-8 pb-10 flex items-center">
<div className="grid lg:grid-cols-3 gap-8 w-full">
<div className=""></div>

<div className="relative mx-auto">
<div className="relative h-[854px] w-[393px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.85)] bg-neutral-900" style={{borderRadius: '47px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, \'Helvetica Neue\', ui-sans-serif'}}>

<div className="absolute left-0 right-0 top-0 z-50 flex h-12 items-center justify-between px-8 pt-2">
<div className="text-[17px] font-semibold tracking-tight">9:41</div>
<div className="flex items-center gap-1">
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white/40"></div>
</div>
<div className="ml-2 h-3 w-6 rounded-sm border border-white/80 bg-white">
<div className="h-full w-4/5 rounded-sm bg-emerald-500"></div>
</div>
</div>
</div>

<div className="absolute inset-x-0 top-12 bottom-28 overflow-y-auto pr-5 pl-5">

<div className="relative overflow-hidden rounded-[22px] ring-1 ring-white/10">
<div className="relative h-[420px] bg-black">
<img alt="Фото 1" className="absolute inset-0 h-full w-full select-none cursor-zoom-in object-cover" id="gallery-current" loading="eager" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?q=80&amp;w=2160&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>

<div className="absolute top-3 left-3 text-[12px] font-medium text-white/90 bg-black/40 border-white/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur">1 / 6</div>

<div className="absolute top-3 right-3 flex items-center gap-2">
<button className="p-2.5 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur border border-white/10 transition">
<svg className="lucide lucide-maximize-2 w-5 h-5 text-white/90" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
<button className="bookmark-btn p-2.5 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur border border-white/10 transition">
<svg className="lucide lucide-bookmark w-5 h-5 text-white/90" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>

<div className="px-2.5 py-2.5">
<div className="flex gap-2 overflow-x-auto">
<button aria-current="true" className="relative h-16 w-24 overflow-hidden rounded-md ring-2 ring-white/80">
<img alt="Превью 1" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1640906152676-dace6710d24b?q=80&amp;w=2160&amp;auto=format&amp;fit=crop" data-index="0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?q=80&amp;w=480&amp;auto=format&amp;fit=crop"/>
</button>
<button aria-current="false" className="relative h-16 w-24 overflow-hidden rounded-md ring-1 ring-white/10">
<img alt="Превью 2" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1629946832022-c327f74956e0?q=80&amp;w=2160&amp;auto=format&amp;fit=crop" data-index="1" loading="lazy" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?q=80&amp;w=480&amp;auto=format&amp;fit=crop"/>
</button>
<button aria-current="false" className="relative h-16 w-24 overflow-hidden rounded-md ring-1 ring-white/10">
<img alt="Превью 3" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1724525647065-f948fc102e68?q=80&amp;w=2160&amp;auto=format&amp;fit=crop" data-index="2" loading="lazy" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?q=80&amp;w=480&amp;auto=format&amp;fit=crop"/>
</button>
<button aria-current="false" className="relative h-16 w-24 overflow-hidden rounded-md ring-1 ring-white/10">
<img alt="Превью 4" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=2160&amp;auto=format&amp;fit=crop" data-index="3" loading="lazy" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=480&amp;auto=format&amp;fit=crop"/>
</button>
<button aria-current="false" className="relative h-16 w-24 overflow-hidden rounded-md ring-1 ring-white/10">
<img alt="Превью 5" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=2160&amp;auto=format&amp;fit=crop" data-index="4" loading="lazy" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=480&amp;auto=format&amp;fit=crop"/>
</button>
<button aria-current="false" className="relative h-16 w-24 overflow-hidden rounded-md ring-1 ring-white/10">
<img alt="Превью 6" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&amp;w=2160&amp;auto=format&amp;fit=crop" data-index="5" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</button>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur px-4 py-4">

<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2">
<h1 className="text-[28px] tracking-tight font-semibold leading-tight">Maya S., 28</h1>
<svg className="lucide lucide-badge-check w-5 h-5 text-blue-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="mt-1 flex items-center gap-2 text-[14px] text-white/80">
<span className="inline-flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      online
                    </span>
<span className="text-white/30">•</span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/60" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Dubai, UAE
                    </span>
</div>
</div>

<div className="flex items-center gap-2">
<div className="group relative">
<div className="p-2 rounded-full border border-white/10 bg-white/5">
<svg className="lucide lucide-banknote w-4.5 h-4.5 text-amber-300" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="absolute right-0 top-10 hidden group-hover:block px-2 py-1 text-[12px] rounded-md bg-black/70 border border-white/10 whitespace-nowrap">Подтвержденный доход</div>
</div>
<div className="group relative">
<div className="p-2 rounded-full border border-white/10 bg-white/5">
<svg className="lucide lucide-instagram w-4.5 h-4.5 text-pink-300" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="absolute right-0 top-10 hidden group-hover:block px-2 py-1 text-[12px] rounded-md bg-black/70 border border-white/10 whitespace-nowrap">Верифицированный Instagram</div>
</div>
<div className="group relative">
<div className="p-2 rounded-full border border-white/10 bg-white/5">
<svg className="lucide lucide-shield-check w-4.5 h-4.5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="absolute right-0 top-10 hidden group-hover:block px-2 py-1 text-[12px] rounded-md bg-black/70 border border-white/10 whitespace-nowrap">Личность подтверждена</div>
</div>
<div className="group relative">
<div className="p-2 rounded-full border border-white/10 bg-white/5">
<svg className="lucide lucide-lock w-4.5 h-4.5 text-cyan-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="absolute right-0 top-10 hidden group-hover:block px-2 py-1 text-[12px] rounded-md bg-black/70 border border-white/10 whitespace-nowrap">Двухфакторная защита</div>
</div>
</div>
</div>
<div className="my-4 h-px bg-white/10"></div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-[15px]">
<svg className="lucide lucide-briefcase w-4.5 h-4.5 text-white/60" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<div className="truncate">Investment Director</div>
</div>
<div className="flex items-center gap-2 text-[13px] text-white/70">
<svg className="lucide lucide-link w-4 h-4 text-[#8AB4F8]" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  Подтверждено через LinkedIn
                </div>
</div>
<div className="mt-4 h-px bg-white/10"></div>

<div className="mt-4">
<div className="text-[13px] text-white/60 mb-2">Образование</div>
<div className="space-y-2">
<div className="flex items-start gap-2">
<svg className="lucide lucide-graduation-cap w-4.5 h-4.5 text-white/60 mt-0.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<div className="min-w-0">
<div className="text-[15px]">MBA — INSEAD</div>
<div className="text-[13px] text-white/60">Fontainebleau / Singapore</div>
</div>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-graduation-cap w-4.5 h-4.5 text-white/60 mt-0.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<div className="min-w-0">
<div className="text-[15px]">BSc Economics — LSE</div>
<div className="text-[13px] text-white/60">London</div>
</div>
</div>
</div>
</div>
<div className="mt-4 h-px bg-white/10"></div>

<div className="mt-4">
<div className="text-[13px] text-white/60 mb-2">Интересы</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 text-[13px] rounded-full border border-white/10 bg-white/[0.03]">⛵️ Яхтинг</span>
<span className="px-3 py-1.5 text-[13px] rounded-full border border-white/10 bg-white/[0.03]">🎨 Искусство</span>
<span className="px-3 py-1.5 text-[13px] rounded-full border border-white/10 bg-white/[0.03]">✈️ Путешествия</span>
<span className="px-3 py-1.5 text-[13px] rounded-full border border-white/10 bg-white/[0.03]">🍷 Вино</span>
<span className="px-3 py-1.5 text-[13px] rounded-full border border-white/10 bg-white/[0.03]">🐎 Верховая езда</span>
<span className="px-3 py-1.5 text-[13px] rounded-full border border-white/10 bg-white/[0.03]">🧘‍♀️ Well‑being</span>
</div>
</div>
<div className="mt-4 h-px bg-white/10"></div>

<div className="mt-4">
<div className="text-[13px] text-white/60 mb-2">О себе</div>
<div className="relative">
<div className="text-[15px] leading-relaxed max-h-40 overflow-hidden transition-all text-white/90" id="about-text">
                    Родилась и выросла в Европе, последние годы живу между Дубаем и Лондоном. Работаю в инвестициях, люблю системное мышление и эстетические детали во всем — от архитектуры до сервиса. Свободное время делю между яхтингом и современным искусством, слежу за программами музеев и частных галерей, регулярно бываю на биеннале.
                    
                    Ценю приватность и простоту. Ищу зрелое общение с людьми, которые уважают свое и чужое время, умеют наслаждаться тишиной и хорошо организованным отдыхом. В путешествиях предпочитаю короткие насыщенные маршруты, камерные отели и кухни с сильной школой вина. Открыта к новым проектам и интересным собеседникам.
                  </div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-900 to-transparent" id="about-fade"></div>
</div>
<button className="mt-2 text-[14px] text-white/80 hover:text-white inline-flex items-center gap-1" id="about-toggle">
<span className="">Читать далее</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-8">
<nav className="px-4">
<div className="relative rounded-3xl backdrop-blur bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Discover</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95">
<svg className="lucide lucide-stars w-5 h-5" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Matches</span>
</button>
<div className="relative -mt-10 w-1/5">
<button className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-black/90 shadow-[0_10px_30px_rgba(203,163,90,0.35)] ring-2 ring-white/10 active:scale-95 transition bg-gradient-to-b from-[#CBA35A] to-[#9E7F3F]">
<svg className="lucide lucide-sparkle w-6 h-6" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</button>
<div className="text-[11px] font-medium text-slate-200 text-center mt-1">Connect</div>
</div>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="">Messages</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-white">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Profile</span>
</button>
</div>
</div>
</nav>
</div>

<div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 bg-white/40 rounded-full"></div>
</div>
</div>
<div className=""></div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden">
<div className="absolute inset-0 bg-black/90"></div>
<div className="absolute inset-0 flex pr-4 pl-4 items-center justify-center">
<img alt="Фото" className="max-h-[85vh] max-w-[92vw] object-contain rounded-3xl" src="https://aura.build/editor/243e2fdf-171d-4b8a-814c-fc947b5eadc4"/>
</div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 text-[13px] font-medium rounded-full bg-white/10 text-white backdrop-blur border border-white/10">1 / 6</div>
<button className="absolute right-4 top-4 p-3 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur transition-colors border border-white/10">
<svg className="lucide lucide-x w-5 h-5 text-white/90" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur transition-colors border border-white/10">
<svg className="lucide lucide-chevron-left w-6 h-6 text-white/90" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur transition-colors border border-white/10">
<svg className="lucide lucide-chevron-right w-6 h-6 text-white/90" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>


    </>
  );
}
