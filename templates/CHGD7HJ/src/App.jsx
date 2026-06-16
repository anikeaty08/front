import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      import {
        createIcons,
        Battery,
        Wifi,
        Signal,
        ChevronLeft,
        MoreHorizontal,
        MapPin,
        Briefcase,
        Link2,
        ShieldCheck,
        Banknote,
        Camera,
        UserCheck,
        BadgeCheck,
        GraduationCap,
        Handshake,
        Heart,
        Lock,
        Compass,
        Stars,
        Sparkles,
        MessageSquare,
        User,
        X,
        ChevronRight
      } from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";

      createIcons({
        icons: { Battery, Wifi, Signal, ChevronLeft, MoreHorizontal, MapPin, Briefcase, Link2, ShieldCheck, Banknote, Camera, UserCheck, BadgeCheck, GraduationCap, Handshake, Heart, Lock, Compass, Stars, Sparkles, MessageSquare, User, X, ChevronRight },
        attrs: { 'stroke-width': 1.5 }
      });

      const screen = document.getElementById('screen');

      // Simple toast
      let toastTimer;
      const showToast = (msg) => {
        let el = screen.querySelector('#toast');
        if (!el) {
          el = document.createElement('div');
          el.id = 'toast';
          el.className = 'absolute left-1/2 bottom-24 -translate-x-1/2 rounded-full bg-white/10 text-slate-100 text-[12px] px-3 py-1.5 ring-1 ring-white/15 backdrop-blur pointer-events-none opacity-0 translate-y-2 transition';
          screen.appendChild(el);
        }
        el.textContent = msg;
        el.classList.remove('opacity-0','translate-y-2');
        el.classList.add('opacity-100','translate-y-0');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          el.classList.add('opacity-0','translate-y-2');
          el.classList.remove('opacity-100','translate-y-0');
        }, 1500);
      };

      // Tooltips
      (() => {
        let openTip = null;
        const showTip = (target) => {
          const text = target.getAttribute('data-tooltip');
          if (!text) return;
          hideTip();

          const tip = document.createElement('div');
          tip.className = 'absolute z-50 max-w-[220px] text-[12px] text-slate-100 bg-black/90 rounded-md px-2 py-1 ring-1 ring-white/10 pointer-events-none opacity-0 translate-y-1 transition';
          tip.textContent = text;

          const rectContainer = screen.getBoundingClientRect();
          const rect = target.getBoundingClientRect();
          tip.style.left = (rect.left - rectContainer.left) + 'px';
          tip.style.top = (rect.top - rectContainer.top - 32) + 'px';
          screen.appendChild(tip);

          requestAnimationFrame(() => {
            tip.style.transform = 'translateX(0)';
            tip.classList.remove('opacity-0','translate-y-1');
            tip.classList.add('opacity-100','-translate-y-0');
          });
          openTip = { el: tip };
        };
        const hideTip = () => {
          if (!openTip) return;
          openTip.el.classList.add('opacity-0','translate-y-1');
          setTimeout(() => {
            openTip?.el.remove();
            openTip = null;
          }, 150);
        };
        screen.querySelectorAll('[data-tooltip]').forEach(el => {
          el.addEventListener('pointerenter', () => showTip(el));
          el.addEventListener('pointerleave', hideTip);
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            showTip(el);
            setTimeout(hideTip, 1200);
          });
        });
        document.addEventListener('pointerdown', (e) => {
          if (openTip && !screen.contains(e.target)) hideTip();
        });
      })();

      // View toggle (full / minimal)
      const fullBtn = document.getElementById('view-full');
      const minimalBtn = document.getElementById('view-minimal');
      const minimalNote = document.getElementById('minimal-note');
      const modules = {
        interests: screen.querySelector('[data-module="interests"]'),
        education: screen.querySelector('[data-module="education"]'),
        about: screen.querySelector('[data-module="about"]'),
      };

      const setView = (mode) => {
        const isMinimal = mode === 'minimal';
        fullBtn.setAttribute('aria-pressed', String(!isMinimal));
        minimalBtn.setAttribute('aria-pressed', String(isMinimal));
        fullBtn.classList.toggle('bg-white/5', !isMinimal);
        fullBtn.classList.toggle('bg-transparent', isMinimal);
        minimalBtn.classList.toggle('bg-white/5', isMinimal);

        // Hide modules for minimal
        modules.interests.hidden = isMinimal;
        modules.education.hidden = isMinimal;
        modules.about.hidden = isMinimal;
        minimalNote.hidden = !isMinimal;

        // In minimal, keep only primary photo (thumbs area visually dims)
        const thumbs = screen.querySelectorAll('[data-photo-index]:not([data-photo-index="0"])');
        thumbs.forEach(t => t.closest('button')?.classList.toggle('opacity-30', isMinimal));
        showToast(isMinimal ? 'Минимальный профиль' : 'Полный профиль');
      };

      fullBtn.addEventListener('click', () => setView('full'));
      minimalBtn.addEventListener('click', () => setView('minimal'));

      // Bio expand/collapse
      const bio = document.getElementById('bio');
      const bioBtn = document.getElementById('btn-toggle-bio');
      let bioExpanded = false;
      bioBtn.addEventListener('click', () => {
        bioExpanded = !bioExpanded;
        bio.classList.toggle('line-clamp-4', !bioExpanded);
        bioBtn.textContent = bioExpanded ? 'Свернуть' : 'Развернуть';
      });

      // Like button
      const likeBtn = document.getElementById('btn-like');
      likeBtn.addEventListener('click', () => {
        const pressed = likeBtn.getAttribute('aria-pressed') === 'true';
        const next = !pressed;
        likeBtn.setAttribute('aria-pressed', String(next));
        const icon = likeBtn.querySelector('svg');
        likeBtn.classList.toggle('ring-pink-400/40', next);
        icon?.setAttribute('fill', next ? 'currentColor' : 'none');
        icon?.classList.add('transition','duration-200');
        icon?.classList.add(next ? 'scale-110' : 'scale-100');
        setTimeout(() => icon?.classList.remove('scale-110'), 180);
        showToast(next ? 'Добавлено в избранное' : 'Удалено из избранного');
      });

      // Bottom nav active state
      (() => {
        const navButtons = screen.querySelectorAll('nav [data-nav]');
        const setActive = (key) => {
          navButtons.forEach(b => {
            const active = b.getAttribute('data-nav') === key;
            b.classList.toggle('text-white', active);
            b.classList.toggle('text-slate-300', !active);
          });
        };
        setActive('profile');
        navButtons.forEach(b => {
          b.addEventListener('click', () => {
            const key = b.getAttribute('data-nav');
            setActive(key);
            showToast(key.charAt(0).toUpperCase() + key.slice(1));
          });
        });
      })();

      // Lightbox
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxCount = document.getElementById('lightbox-count');
      const btnPrev = document.getElementById('lightbox-prev');
      const btnNext = document.getElementById('lightbox-next');
      const btnClose = document.getElementById('lightbox-close');

      const photoNodes = Array.from(screen.querySelectorAll('[data-photo-src]'));
      const photos = photoNodes.map(n => n.getAttribute('data-photo-src'));
      let currentIndex = 0;

      const openLightbox = (idx = 0) => {
        currentIndex = Math.max(0, Math.min(idx, photos.length - 1));
        updateLightbox();
        lightbox.classList.remove('hidden');
      };
      const closeLightbox = () => lightbox.classList.add('hidden');
      const updateLightbox = () => {
        lightboxImg.src = photos[currentIndex];
        lightboxCount.textContent = `${currentIndex + 1} из ${photos.length}`;
        btnPrev.classList.toggle('opacity-50', currentIndex === 0);
        btnNext.classList.toggle('opacity-50', currentIndex === photos.length - 1);
      };

      btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) { currentIndex--; updateLightbox(); }
      });
      btnNext.addEventListener('click', () => {
        if (currentIndex < photos.length - 1) { currentIndex++; updateLightbox(); }
      });
      btnClose.addEventListener('click', closeLightbox);

      photoNodes.forEach(n => {
        n.addEventListener('click', () => {
          const idx = Number(n.getAttribute('data-photo-index')) || 0;
          openLightbox(idx);
        });
      });
      document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') btnPrev.click();
        if (e.key === 'ArrowRight') btnNext.click();
      });

      // Header "more" simple menu
      (() => {
        const btnMore = document.getElementById('btn-more');
        let openMenu = null;

        const closeMenu = () => {
          if (!openMenu) return;
          openMenu.classList.add('opacity-0','scale-95');
          setTimeout(() => { openMenu?.remove(); openMenu = null; }, 150);
        };

        const createMenu = () => {
          closeMenu();
          const menu = document.createElement('div');
          menu.className = 'absolute z-50 min-w-[180px] rounded-xl bg-[#0B0B0F]/95 ring-1 ring-white/10 backdrop-blur shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] p-1 text-[13px] text-slate-200 opacity-0 scale-95 transition origin-top-right';
          ['Поделиться', 'Пожаловаться', 'Скрыть профиль'].forEach(label => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'w-full text-left px-3 py-2 rounded-lg hover:bg-white/5';
            item.textContent = label;
            item.addEventListener('click', () => { showToast(label); closeMenu(); });
            menu.appendChild(item);
          });

          const sRect = screen.getBoundingClientRect();
          const tRect = btnMore.getBoundingClientRect();
          menu.style.top = (tRect.bottom - sRect.top + 8) + 'px';
          menu.style.left = (tRect.right - sRect.left - 180) + 'px';
          screen.appendChild(menu);
          requestAnimationFrame(() => {
            menu.classList.remove('opacity-0','scale-95');
            menu.classList.add('opacity-100','scale-100');
          });
          openMenu = menu;
        };

        btnMore.addEventListener('click', (e) => { e.stopPropagation(); createMenu(); });
        document.addEventListener('pointerdown', (e) => {
          if (openMenu && !openMenu.contains(e.target) && e.target !== btnMore) closeMenu();
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
      })();

      // Initial view
      setView('full');

      // Entrance animation
      (() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;
        const seq = [];
        const header = screen.querySelector('header');
        if (header) seq.push(header);
        screen.querySelectorAll('section').forEach(s => seq.push(s));
        const nav = screen.querySelector('nav');
        if (nav) seq.push(nav);

        seq.forEach(el => {
          el.style.willChange = 'transform, opacity, filter';
          el.classList.add('opacity-0','translate-y-3','blur-sm','transition','duration-500','ease-out');
        });
        requestAnimationFrame(() => {
          seq.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0','translate-y-3','blur-sm');
              el.classList.add('opacity-100','translate-y-0','blur-none');
              setTimeout(() => { el.style.willChange = ''; }, 650);
            }, 100 + i * 80);
          });
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>

</div>
<div className="min-h-screen flex pt-6 pr-6 pb-6 pl-6 items-center justify-center">

<div className="relative ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.75)] bg-slate-900/30 rounded-[38px] pt-3 pr-3 pb-3 pl-3 backdrop-blur">

<div className="pointer-events-none absolute -left-1 top-28 h-16 w-[3px] rounded-r-full bg-white/10"></div>
<div className="pointer-events-none absolute -right-1 top-24 h-10 w-[3px] rounded-l-full bg-white/10"></div>
<div className="pointer-events-none absolute -right-1 top-40 h-20 w-[3px] rounded-l-full bg-white/10"></div>

<div className="relative overflow-hidden w-[448px] rounded-[30px] border border-white/10 bg-[radial-gradient(120%_140%_at_0%_100%,rgba(27,32,48,0.9)_0%,rgba(11,11,15,1)_40%,rgba(11,11,15,1)_100%)]" id="screen">

<div className="pointer-events-none absolute left-1/2 top-2 z-30 h-7 w-40 -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/5"></div>

<div className="max-w-md mr-auto ml-auto pb-28">

<div className="flex items-center justify-between text-xs text-slate-300 pt-5 px-5">
<div className="font-medium tracking-tight">9:41</div>
<div className="flex items-center gap-2 opacity-80">
<svg className="lucide lucide-signal h-4 w-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect className="" height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<header className="flex transition duration-500 ease-out mt-3 pr-5 pl-5 items-center justify-between" style={{willChange: 'transform, opacity, filter'}}>
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 active:scale-95 transition duration-200 ease-out" id="btn-back">
<svg className="lucide lucide-chevron-left h-5 w-5 text-slate-200" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-2">
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 active:scale-95 transition duration-200 ease-out" id="btn-more">
<svg className="lucide lucide-more-horizontal h-5 w-5 text-slate-200" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</header>

<section className="mt-5 px-5 transition duration-500 ease-out" style={{willChange: 'transform, opacity, filter'}}>
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.02]">

</div>
</section>

<section className="mt-6 px-5 transition duration-500 ease-out" style={{willChange: 'transform, opacity, filter'}}>
<div className="space-y-3">

<div className="relative group overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>
<div className="absolute right-2 bottom-2 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 text-[11px] text-white ring-1 ring-white/15">
                    1 из 6
                  </div>
</div>

</div>
</section>

<section className="mt-6 px-5 transition duration-500 ease-out" data-module="interests" style={{willChange: 'transform, opacity, filter'}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02]">
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold text-white">Интересы</h3>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">⛵️ Яхтинг</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">🎨 Искусство</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">✈️ Путешествия</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">🍷 Вино</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">🎾 Теннис</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">📚 Литература</span>
</div>
</div>
</div>
</section>

<section className="mt-6 px-5 transition duration-500 ease-out" data-module="education" style={{willChange: 'transform, opacity, filter'}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02]">
<div className="p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-white">Образование</h3>
<div className="mt-3 space-y-3">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="lucide lucide-graduation-cap h-5 w-5 text-slate-300" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="min-w-0">
<div className="text-[14px] text-white">MBA, INSEAD</div>
<div className="text-[12px] text-slate-400">Финансы и стратегии</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="lucide lucide-graduation-cap h-5 w-5 text-slate-300" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="min-w-0">
<div className="text-[14px] text-white">Бакалавр, МГУ</div>
<div className="text-[12px] text-slate-400">Международная экономика</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="transition duration-500 ease-out mt-6 pr-5 pl-5" data-module="about" style={{willChange: 'transform, opacity, filter'}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02]">
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold text-white">О себе</h3>
<button className="text-sm text-slate-300 hover:text-slate-200 active:scale-95 transition" id="btn-toggle-bio">Развернуть</button>
</div>
<div className="mt-2 text-[14px] leading-relaxed text-slate-300 line-clamp-4" id="bio">
                    Люблю проекты с высоким импактом и команду, в которой ценится вкус и ответственность. Свободное время делю между морем и музеями — учусь у художников видеть мир тоньше. Часто бываю в Европе, рада новым маршрутам и хорошему разговору за бокалом вина. В людях ценю деликатность, чувство юмора и внутреннюю свободу.
                  </div>
</div>
</div>
</section>

<section className="mt-6 px-5 transition duration-500 ease-out" style={{willChange: 'transform, opacity, filter'}}>
<div className="ring-1 ring-white/10 rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-2 gap-3">
<button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-[#CBA35A]/90 to-[#9E7F3F] text-black/90 px-4 py-3 ring-1 ring-[#E3CDA0]/40 hover:brightness-110 active:scale-95 transition">
<svg className="lucide lucide-handshake h-5 w-5" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<span className="text-[14px] font-medium tracking-tight">Запросить интро</span>
</button>
<button aria-pressed="false" className="inline-flex gap-2 ring-1 ring-white/10 hover:bg-white/10 active:scale-95 transition bg-white/5 rounded-2xl pt-3 pr-4 pb-3 pl-4 items-center justify-center" id="btn-like">
<svg className="lucide lucide-heart h-5 w-5 text-slate-200" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-[14px] font-medium tracking-tight text-slate-200">Отметить</span>
</button>
</div>
</div>
</section>

<section className="mt-6 px-5 transition duration-500 ease-out" hidden="" id="minimal-note" style={{willChange: 'transform, opacity, filter'}}>
<div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-lock h-5 w-5 text-slate-300 mt-0.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="text-[13px] text-slate-300 leading-relaxed">
                    Владелец включил минимальный режим профиля. Доступны имя и фото. Отправьте запрос на интро, чтобы увидеть больше.
                  </div>
</div>
</div>
</section>

<section className="mt-6 px-5 transition duration-500 ease-out" data-module="future" hidden="" style={{willChange: 'transform, opacity, filter'}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold text-white">Любимые места</h3>
<span className="text-xs text-slate-400">скоро</span>
</div>
<p className="mt-2 text-[13px] text-slate-400">Модуль легко добавить, интерфейс — модульный.</p>
</div>
</section>
</div>

<nav className="absolute inset-x-0 bottom-0 z-50 transition duration-500 ease-out" style={{willChange: 'transform, opacity, filter'}}>
<div className="relative ring-1 ring-white/10 bg-white/5 rounded-3xl m-4 px-4 py-3 backdrop-blur">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="discover">
<svg className="lucide lucide-compass h-5 w-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">Discover</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="matches">
<svg className="lucide lucide-stars h-5 w-5" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Matches</span>
</button>
<div className="relative -mt-10 w-1/5">
<button aria-label="Connect" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#CBA35A] to-[#9E7F3F] text-black/90 shadow-[0_10px_30px_rgba(203,163,90,0.35)] ring-2 ring-white/10 hover:ring-[#E3CDA0]/40 transition active:scale-95 text-slate-300" data-nav="connect">
<svg className="lucide lucide-sparkles h-6 w-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<div className="text-[11px] font-medium text-slate-200 text-center mt-1">Connect</div>
</div>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="messages">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="">Messages</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-white" data-nav="profile">
<svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Profile</span>
</button>
</div>
</div>
</nav>

<div className="hidden fixed inset-0 z-50 bg-black/90" id="lightbox">
<div className="absolute inset-0 flex items-center justify-center">
<img alt="Просмотр фото" className="max-h-[80vh] max-w-[88vw] rounded-2xl ring-1 ring-white/10 object-contain" id="lightbox-img" src=""/>
</div>
<div className="absolute top-4 left-4 right-4 flex items-center justify-between">
<button className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20 active:scale-95 transition" id="lightbox-close">
<svg className="lucide lucide-x h-6 w-6 text-white" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 text-[12px] text-white">
<span id="lightbox-count">—</span>
</div>
</div>
<button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20 active:scale-95 transition" id="lightbox-prev">
<svg className="lucide lucide-chevron-left h-6 w-6 text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20 active:scale-95 transition" id="lightbox-next">
<svg className="lucide lucide-chevron-right h-6 w-6 text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="absolute left-1/2 bottom-24 -translate-x-1/2 rounded-full bg-white/10 text-slate-100 text-[12px] px-3 py-1.5 ring-1 ring-white/15 backdrop-blur pointer-events-none transition opacity-0 translate-y-2" id="toast">Полный профиль</div>
</div>
</div>
</div>



    </>
  );
}
