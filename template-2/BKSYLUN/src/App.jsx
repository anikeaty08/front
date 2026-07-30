import React, { useEffect } from 'react';
import {
      createIcons,
      Battery,
      Wifi,
      Signal,
      ChevronLeft,
      MoreHorizontal,
      Crown,
      Building2,
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
      ChevronRight,
      Linkedin,
      Instagram
    } from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";

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

  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

    createIcons({
      icons: {
        Battery, Wifi, Signal, ChevronLeft, MoreHorizontal, Crown, Building2, GraduationCap,
        Handshake, Heart, Lock, Compass, Stars, Sparkles, MessageSquare, User, X, ChevronRight,
        Linkedin, Instagram
      },
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

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCount = document.getElementById('lightbox-count');
    const btnPrev = document.getElementById('lightbox-prev');
    const btnNext = document.getElementById('lightbox-next');
    const btnClose = document.getElementById('lightbox-close');

    // Figma assets hook (non-breaking)
    // Provide window.FIGMA_ASSETS = { 'photo-0-full': 'https://...', 'photo-0-thumb': 'https://...', ... }
    (() => {
      const assets = window.FIGMA_ASSETS;
      if (!assets) return;

      // Replace full-size photo URLs stored in data-photo-src on buttons/hero
      screen.querySelectorAll('[data-figma-full-key]').forEach(el => {
        const key = el.getAttribute('data-figma-full-key');
        const url = assets[key];
        if (url) el.setAttribute('data-photo-src', url);
      });

      // Replace visible <img> sources (thumbs/hero/lightbox)
      screen.querySelectorAll('img[data-figma-key]').forEach(img => {
        const key = img.getAttribute('data-figma-key');
        const url = assets[key];
        if (url) img.src = url;
      });

      // Ensure hero and lightbox default align with first full image if provided
      const firstUrl = assets['photo-0-full'];
      if (firstUrl) {
        const hero = screen.querySelector('img[data-figma-hero]');
        if (hero) {
          hero.src = firstUrl;
          hero.setAttribute('data-photo-src', firstUrl);
        }
        if (lightboxImg) lightboxImg.src = firstUrl;
      }
    })();

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
      lightboxCount.textContent = `${currentIndex + 1} of ${photos.length}`;
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
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
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
<svg className="lucide lucide-signal h-4 w-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="16"></rect></svg>
</div>
</div>

<header className="flex items-center justify-between mt-3 px-5 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 active:scale-95 transition duration-200 ease-out" id="btn-back">
<svg className="lucide lucide-chevron-left h-5 w-5 text-slate-200" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<div className="select-none text-[24px] tracking-tight" style={{fontFamily: `'Cormorant SC', serif`, fontWeight: `300`, letterSpacing: `-0.02em`, color: `rgb(194 194 194)`}}>
              premium dating
            </div>
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 active:scale-95 transition duration-200 ease-out" id="btn-more">
<svg className="lucide lucide-more-horizontal h-5 w-5 text-slate-200" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</header>

<section className="mt-5 px-5 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.02]">
<div className="relative h-[520px]">
<img alt="Jessica primary" className="h-full w-full object-cover" data-figma-full-key="photo-0-full" data-figma-hero="" data-figma-key="photo-0-full" data-photo-index="0" data-photo-src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop" src="/assets/ee1fe383-974f-460a-8bee-c6d7d036d439_1600w.jpg" />
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

<div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
<div className="space-y-2">
<div className="flex items-center gap-2">
<h2 className="text-[24px] leading-none tracking-tight font-semibold text-white" style={{fontFamily: `'Cormorant SC', serif`}}>Jessica Parker, 24</h2>
<span className="inline-flex items-center justify-center ring-0 ring-white/15 rounded-full pt-1 pr-1 pb-1 pl-1 grayscale-0">
<svg className="lucide lucide-crown w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="badge-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(251, 191, 36)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30"></span>
<span className="text-[14px] text-slate-300">Chicago, IL United States</span>
</div>
</div>
<div className="inline-flex items-center rounded-full bg-black/40 backdrop-blur px-3 py-1.5 ring-1 ring-white/15 text-[12px] text-white">
                    2.1 mi
                  </div>
</div>

<div className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 text-[11px] text-white ring-1 ring-white/15">
                  1 of 6
                </div>
</div>
</div>
</section>

<section className="mt-3 px-5 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button aria-label="Photo 1" className="relative shrink-0 h-20 w-[76px] rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/40 active:scale-95 transition" data-figma-full-key="photo-0-full" data-photo-index="0" data-photo-src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop">
<img alt="" className="h-full w-full object-cover" data-figma-key="photo-0-thumb" src="/assets/9485e25a-8c62-422d-8c02-5a21bb8d4ac1_320w.jpg" />
</button>
<button aria-label="Photo 2" className="relative shrink-0 h-20 w-[76px] rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/40 active:scale-95 transition" data-figma-full-key="photo-1-full" data-photo-index="1" data-photo-src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop">
<img alt="" className="h-full w-full object-cover" data-figma-key="photo-1-thumb" src="/assets/ea5ad3b5-2bdb-470b-bd2d-8a68a4b2edc3_320w.jpg" />
</button>
<button aria-label="Photo 3" className="relative shrink-0 h-20 w-[76px] rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/40 active:scale-95 transition" data-figma-full-key="photo-2-full" data-photo-index="2" data-photo-src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=2000&auto=format&fit=crop">
<img alt="" className="h-full w-full object-cover" data-figma-key="photo-2-thumb" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec433375-6c18-43a9-98e0-2b230cb41655_800w.jpg" />
</button>
<button aria-label="Photo 4" className="relative shrink-0 h-20 w-[76px] rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/40 active:scale-95 transition" data-figma-full-key="photo-3-full" data-photo-index="3" data-photo-src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop">
<img alt="" className="h-full w-full object-cover" data-figma-key="photo-3-thumb" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/23dd0807-794e-46bb-be7d-db3ea2a37bb9_800w.jpg" />
</button>
<button aria-label="Photo 5" className="relative shrink-0 h-20 w-[76px] rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/40 active:scale-95 transition" data-figma-full-key="photo-4-full" data-photo-index="4" data-photo-src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2000&auto=format&fit=crop">
<img alt="" className="h-full w-full object-cover" data-figma-key="photo-4-thumb" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8959742f-056e-47d5-95d1-d305697c2b52_800w.jpg" />
</button>
<button aria-label="Photo 6" className="relative shrink-0 h-20 w-[76px] rounded-2xl ring-1 ring-white/10 overflow-hidden hover:ring-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/40 active:scale-95 transition" data-figma-full-key="photo-5-full" data-photo-index="5" data-photo-src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000&auto=format&fit=crop">
<img alt="" className="h-full w-full object-cover" data-figma-key="photo-5-thumb" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop" />
</button>
</div>
</section>

<section className="mt-4 px-5 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02] p-4">
<h3 className="text-[22px] tracking-tight font-semibold text-white" style={{fontFamily: `'Cormorant SC', serif`}}>About me</h3>
<div className="mt-2 text-[14px] leading-relaxed text-slate-300">
                My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience...
                <button className="inline text-amber-300 hover:text-amber-200 active:scale-95 transition">More</button>
</div>

<div className="mt-4 flex items-center gap-3">
<span className="inline-flex items-center gap-2 ring-1 ring-amber-300/50 text-[12px] text-amber-300/95 bg-amber-300/20 rounded-full pt-1.5 pr-2.5 pb-1.5 pl-2.5">
<span className="inline-flex h-3.5 w-3.5 items-center justify-center ring-0 ring-amber-300/40 border-stone-300 border-0 rounded-none">
<svg className="lucide lucide-linkedin w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="12" stroke="currentColor" strokeLinecap="none" strokeLinejoin="none" strokeWidth="1.5" style={{width: `12px`, height: `12px`, color: `rgb(252, 211, 77)`}} viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" width="4"></rect><circle cx="4" cy="4"></circle></svg>
</span>
                  LinkedIn
                </span>
<span className="inline-flex items-center gap-2 ring-1 ring-amber-300/50 text-[12px] text-amber-300 bg-amber-300/20 rounded-full pt-1.5 pr-2.5 pb-1.5 pl-2.5">
<span className="inline-flex h-3.5 w-3.5 items-center justify-center ring-0 ring-amber-300/40 rounded-full">
<svg className="lucide lucide-instagram h-3 w-3" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20"></rect><path></path><line></line></svg>
</span>
                  Instagram
                </span>
</div>
</div>
</section>

<section className="mt-4 px-5 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02] p-4">
<h3 className="text-[22px] tracking-tight font-semibold text-white" style={{fontFamily: `'Cormorant SC', serif`}}>Profession</h3>

<div className="mt-3 flex items-center gap-3">
<div className="shrink-0">
<svg className="lucide lucide-building-2 h-5 w-5 text-slate-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div className="min-w-0">
<div className="text-[14px] text-white">Tesla, Inc.</div>
<div className="text-[12px] text-slate-400">Product designer</div>
</div>
</div>

<div className="mt-3 flex items-center gap-3">
<div className="shrink-0">
<svg className="lucide lucide-graduation-cap h-5 w-5 text-slate-400" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="min-w-0">
<div className="text-[14px] text-white">MBA, INSEAD</div>
<div className="text-[12px] text-slate-400">International economics</div>
</div>
</div>
</div>
</section>

<section className="mt-4 px-5 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="rounded-3xl ring-1 ring-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<h3 className="text-[22px] tracking-tight font-semibold text-white" style={{fontFamily: `'Cormorant SC', serif`}}>Interests</h3>
</div>
<div className="mt-3 flex flex-wrap gap-2">

<span className="inline-flex items-center rounded-full bg-amber-300/10 px-3 py-1.5 text-[13px] text-amber-300 ring-1 ring-amber-300/30">Music</span>
<span className="inline-flex items-center rounded-full bg-amber-300/10 px-3 py-1.5 text-[13px] text-amber-300 ring-1 ring-amber-300/30">Art</span>

<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">Tennis</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">Literature</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">Wine</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-200 ring-1 ring-white/10">Travel</span>
</div>
</div>
</section>
</div>

<nav className="absolute inset-x-0 bottom-0 z-50 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="relative ring-1 ring-white/10 bg-white/5 rounded-3xl m-4 px-4 py-3 backdrop-blur">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="discover">
<svg className="lucide lucide-compass h-5 w-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="">Discover</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="matches">
<svg className="lucide lucide-stars h-5 w-5" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<span className="">Matches</span>
</button>
<div className="relative -mt-10 w-1/5">
<button aria-label="Connect" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#CBA35A] to-[#9E7F3F] text-black/90 shadow-[0_10px_30px_rgba(203,163,90,0.35)] ring-2 ring-white/10 hover:ring-[#E3CDA0]/40 transition active:scale-95 text-slate-300" data-nav="connect">
<svg className="lucide lucide-heart lucide-sparkles w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(203, 213, 225)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<div className="text-[11px] font-medium text-slate-200 text-center mt-1">Like</div>
</div>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="messages">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="">Messages</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-white" data-nav="profile">
<svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="7"></circle></svg>
<span>Profile</span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-black/90 hidden" id="lightbox">
<div className="absolute inset-0 flex items-center justify-center">
<img alt="Просмотр фото" className="max-h-[80vh] max-w-[88vw] rounded-2xl ring-1 ring-white/10 object-contain" data-figma-key="photo-0-full" id="lightbox-img" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="absolute top-4 left-4 right-4 flex items-center justify-between">
<button className="ring-1 ring-white/15 hover:bg-white/20 active:scale-95 transition bg-white/10 rounded-full pt-2 pr-2 pb-2 pl-2" id="lightbox-close">
<svg className="lucide lucide-x w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 text-[12px] text-white">
<span id="lightbox-count">1 of 7</span>
</div>
</div>
<button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20 active:scale-95 transition opacity-50" id="lightbox-prev">
<svg className="lucide lucide-chevron-left h-6 w-6 text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/15 hover:bg-white/20 active:scale-95 transition" id="lightbox-next">
<svg className="lucide lucide-chevron-right h-6 w-6 text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="absolute left-1/2 bottom-24 -translate-x-1/2 rounded-full bg-white/10 text-slate-100 text-[12px] px-3 py-1.5 ring-1 ring-white/15 backdrop-blur pointer-events-none transition opacity-0 translate-y-2" id="toast">Done</div>
</div>
</div>
</div>



    </>
  );
}
