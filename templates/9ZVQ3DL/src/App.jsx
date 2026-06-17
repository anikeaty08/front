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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
  const container = document.getElementById('aura-emeb8ndsf');
  if (!container) return;

  const filterOptions = {
    engagement: ['All Engagement','High to Low','Low to High','Top 10%'],
    format: ['All Formats','Video','Article','Podcast','Short'],
    status: ['All Status','Published','Draft','Scheduled','Archived']
  };

  let openMenu = null;

  const closeMenu = () => {
    if (!openMenu) return;
    openMenu.el.classList.add('opacity-0','scale-95');
    openMenu.el.classList.remove('opacity-100','scale-100');
    openMenu.button.setAttribute('aria-expanded','false');
    setTimeout(() => {
      openMenu?.el.remove();
      openMenu = null;
    }, 150);
  };

  const createMenu = (button, options) => {
    closeMenu();
    const menu = document.createElement('div');
    menu.setAttribute('role','menu');
    menu.className = 'absolute z-50 min-w-[180px] rounded-xl bg-[#0B0B0F]/95 ring-1 ring-white/10 backdrop-blur shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] p-1 text-[13px] text-slate-200 opacity-0 scale-95 transition duration-200 ease-out origin-top-left';

    options.forEach(opt => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 focus-visible:outline-none';
      item.textContent = opt;
      item.addEventListener('click', () => {
        const label = button.querySelector('span');
        if (label) label.textContent = opt;
        button.classList.remove('text-slate-300');
        button.classList.add('text-slate-200','bg-white/10');
        closeMenu();
      });
      menu.appendChild(item);
    });

    const bRect = button.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    const top = bRect.bottom - cRect.top + 6;
    let left = bRect.left - cRect.left;
    const maxLeft = cRect.width - 200;
    if (left > maxLeft) left = maxLeft;

    menu.style.top = top + 'px';
    menu.style.left = left + 'px';
    menu.style.position = 'absolute';

    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    container.appendChild(menu);

    requestAnimationFrame(() => {
      menu.classList.remove('opacity-0','scale-95');
      menu.classList('opacity-100','scale-100');
    });

    openMenu = { el: menu, button };
    button.setAttribute('aria-expanded','true');
  };

  container.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.getAttribute('data-filter');
      const options = filterOptions[key] || [];
      if (!options.length) return;
      createMenu(btn, options);
    });
  });

  document.addEventListener('pointerdown', (e) => {
    if (!openMenu) return;
    if (!container.contains(e.target)) {
      closeMenu();
    } else if (openMenu.el && !openMenu.el.contains(e.target) && e.target !== openMenu.button && !openMenu.button.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();



      import {
        createIcons,
        Battery,
        Bell,
        Plus,
        ChevronDown,
        Heart,
        MoreHorizontal,
        Wifi,
        Signal,
        LayoutDashboard,
        FileText,
        LineChart,
        DollarSign,
        Users
      } from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";

      createIcons({
        icons: { Battery, Bell, Plus, ChevronDown, Heart, MoreHorizontal, Wifi, Signal, LayoutDashboard, FileText, LineChart, DollarSign, Users },
        attrs: { 'stroke-width': 1.5 }
      });

      const screen = document.getElementById('screen');

      // Utility: add transitions to interactive elements with reduced-motion fallback
      const addInteractiveTransitions = () => {
        const interactive = screen.querySelectorAll('button, [role="button"]');
        interactive.forEach(el => {
          el.classList.add(
            'transition','duration-200','ease-out','motion-reduce:transition-none',
            'active:scale-95','motion-reduce:transform-none'
          );
        });
      };

      // Entrance animation: sequence fade-in, slide-in, blur-in
      const animateInSequence = () => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        const seq = [];
        const header = screen.querySelector('header');
        if (header) seq.push(header);

        screen.querySelectorAll('[data-filter]').forEach(el => seq.push(el));

        screen.querySelectorAll('section').forEach(section => {
          const title = section.querySelector('h2');
          if (title) seq.push(title);
          section.querySelectorAll('article').forEach(card => seq.push(card));
        });

        const nav = screen.querySelector('nav');
        if (nav) seq.push(nav);

        // Initialize hidden state
        seq.forEach(el => {
          el.style.willChange = 'transform, opacity, filter';
          el.classList.add('opacity-0','translate-y-3','blur-sm','transition','duration-500','ease-out','motion-reduce:transition-none');
        });

        // Stagger in
        requestAnimationFrame(() => {
          seq.forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0','translate-y-3','blur-sm');
              el.classList.add('opacity-100','translate-y-0','blur-none');
              setTimeout(() => { el.style.willChange = ''; }, 650);
            }, 100 + i * 70);
          });
        });
      };

      // Toast
      let toastTimeout;
      const showToast = (msg) => {
        let el = screen.querySelector('#toast');
        if (!el) {
          el = document.createElement('div');
          el.id = 'toast';
          el.className = 'absolute left-1/2 bottom-24 -translate-x-1/2 rounded-full bg-white/10 text-slate-100 text-[12px] px-3 py-1.5 ring-1 ring-white/15 backdrop-blur pointer-events-none opacity-0 translate-y-2 transition duration-200 ease-out motion-reduce:transition-none';
          screen.appendChild(el);
        }
        el.textContent = msg;
        el.classList.remove('opacity-0','translate-y-2');
        el.classList.add('opacity-100','translate-y-0');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          el.classList.add('opacity-0','translate-y-2');
          el.classList.remove('opacity-100','translate-y-0');
        }, 1400);
      };

      // Simple popover menu (reused)
      let openMenu = null;
      const closeMenu = () => {
        if (openMenu) {
          openMenu.el.classList.add('opacity-0','scale-95');
          openMenu.el.classList.remove('opacity-100','scale-100');
          openMenu.trigger?.setAttribute('aria-expanded','false');
          setTimeout(() => {
            openMenu?.el.remove();
            openMenu = null;
          }, 200);
        }
      };

      const createMenu = (trigger, items = [], onSelect = () => {}) => {
        closeMenu();
        const menu = document.createElement('div');
        menu.role = 'menu';
        menu.className = 'absolute z-50 min-w-[180px] rounded-xl bg-[#0B0B0F]/95 ring-1 ring-white/10 shadow-2xl p-1 text-[13px] text-slate-200 backdrop-blur opacity-0 scale-95 transition duration-200 ease-out motion-reduce:transition-none origin-top-left';
        items.forEach((label, idx) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 focus-visible:outline-none';
          btn.textContent = label;
          btn.addEventListener('click', () => {
            onSelect(label, idx);
            closeMenu();
          });
          menu.appendChild(btn);
        });

        // Position relative to screen container
        const sRect = screen.getBoundingClientRect();
        const tRect = trigger.getBoundingClientRect();
        const top = tRect.bottom - sRect.top + 8;
        let left = tRect.left - sRect.left;
        // prevent overflow
        const maxLeft = sRect.width - 200;
        if (left > maxLeft) left = maxLeft;

        menu.style.top = top + 'px';
        menu.style.left = left + 'px';
        screen.appendChild(menu);

        // animate in
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0','scale-95');
          menu.classList.add('opacity-100','scale-100');
        });

        openMenu = { el: menu, trigger };
        trigger.setAttribute('aria-expanded','true');
      };

      // Click outside / Escape to close menus
      document.addEventListener('pointerdown', (e) => {
        if (openMenu && !openMenu.el.contains(e.target) && e.target !== openMenu.trigger) {
          closeMenu();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });

      // Filters
      const filterOptions = {
        engagement: ['All Engagement','High to Low','Low to High','Top 10%'],
        format: ['All Formats','Video','Article','Podcast','Short'],
        status: ['All Status','Published','Draft','Scheduled','Archived'],
        pricing: ['All Pricing','Free','Paid','Members']
      };

      const setupFilters = () => {
        screen.querySelectorAll('[data-filter]').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const key = btn.getAttribute('data-filter');
            const options = filterOptions[key] || [];
            createMenu(btn, options, (label) => {
              const span = btn.querySelector('span');
              if (span) span.textContent = label;
              btn.classList.remove('text-slate-300');
              btn.classList.add('text-slate-200','bg-white/10');
              showToast(`${label} applied`);
            });
          });
        });
      };

      // Hearts (like)
      const setupHearts = () => {
        screen.querySelectorAll('svg[data-lucide="heart"]').forEach(svg => {
          const btn = svg.closest('button');
          if (!btn) return;
          btn.addEventListener('click', () => {
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            const next = !pressed;
            btn.setAttribute('aria-pressed', String(next));
            btn.classList.toggle('text-pink-400', next);
            // Fill toggle for heart
            svg.setAttribute('fill', next ? 'currentColor' : 'none');
            svg.classList.add('transition','duration-200','ease-out','motion-reduce:transition-none');
            svg.classList.add(next ? 'scale-110' : 'scale-100', 'motion-reduce:transform-none');
            setTimeout(() => svg.classList.remove('scale-110'), 180);
            showToast(next ? 'Added to likes' : 'Removed from likes');
          });
        });
      };

      // Card "more" menus
      const setupMoreMenus = () => {
        screen.querySelectorAll('svg[data-lucide="more-horizontal"]').forEach(svg => {
          const btn = svg.closest('button');
          if (!btn) return;
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            createMenu(btn, ['Share','Add to playlist','Report'], (label) => showToast(label));
          });
        });
      };

      // Header actions
      const setupHeaderActions = () => {
        const bell = screen.querySelector('[data-action="toggle-notifications"]');
        const plus = screen.querySelector('[data-action="create-new"]');
        if (bell) {
          let enabled = false;
          bell.addEventListener('click', () => {
            enabled = !enabled;
            bell.classList.toggle('ring-emerald-400/40', enabled);
            showToast(enabled ? 'Notifications enabled' : 'Notifications disabled');
          });
        }
        if (plus) {
          plus.addEventListener('click', () => showToast('New item — coming soon'));
        }
      };

      // Section "More" buttons
      const setupSectionMore = () => {
        screen.querySelectorAll('[data-action="more-series"],[data-action="more-guides"],[data-action="more-live"]').forEach(btn => {
          btn.addEventListener('click', () => showToast('Loading more...'));
        });
      };

      // Bottom nav active state
      const setupBottomNav = () => {
        const navButtons = screen.querySelectorAll('nav [data-nav]');
        const setActive = (key) => {
          navButtons.forEach(b => {
            const isActive = b.getAttribute('data-nav') === key;
            b.classList.toggle('text-white', isActive);
            b.classList.toggle('text-slate-300', !isActive);
          });
        };
        setActive('insights');
        navButtons.forEach(b => {
          b.addEventListener('click', () => {
            const key = b.getAttribute('data-nav');
            setActive(key);
            showToast(`${key.charAt(0).toUpperCase() + key.slice(1)} selected`);
          });
        });
      };

      // Initialize
      addInteractiveTransitions();
      setupFilters();
      setupHearts();
      setupMoreMenus();
      setupHeaderActions();
      setupSectionMore();
      setupBottomNav();
      animateInSequence();
    
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" width="100%"></iframe></div>
<div className="min-h-screen flex pt-6 pr-6 pb-6 pl-6 items-center justify-center">

<div className="relative ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.75)] bg-indigo-950/30 rounded-[38px] pt-3 pr-3 pb-3 pl-3 backdrop-blur">

<div className="pointer-events-none absolute -left-1 top-28 h-16 w-[3px] rounded-r-full bg-white/10"></div>
<div className="pointer-events-none absolute -right-1 top-24 h-10 w-[3px] rounded-l-full bg-white/10"></div>
<div className="pointer-events-none absolute -right-1 top-40 h-20 w-[3px] rounded-l-full bg-white/10"></div>

<div className="relative overflow-hidden w-[448px] bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-[#5e2ce8]/10 via-[#0B0B0F] to-[#0B0B0F] border-slate-50/10 border rounded-[30px]">

<div className="pointer-events-none absolute left-1/2 top-2 z-30 h-7 w-40 -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/5"></div>
<div className="max-w-md mr-auto ml-auto pb-28">

<div className="flex text-xs text-slate-300 pt-5 pr-5 pl-5 items-center justify-between">
<div className="font-medium tracking-tight">9:41</div>
<div className="flex items-center gap-2 opacity-80">
<svg className="lucide lucide-signal h-4 w-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<header className="mt-3 flex items-center justify-between px-5 transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>
<h1 className="text-[28px] leading-tight tracking-tight font-semibold text-white">Insights</h1>
<div className="flex items-center gap-3">
<div className="h-8 w-8 flex text-[13px] font-semibold text-[#0B0B0F] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c3af2bd-32da-4659-8095-1deb5455b9f6_320w.jpg)] bg-cover rounded-full items-center justify-center"></div>
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none" data-action="toggle-notifications">
<svg className="lucide lucide-bell h-5 w-5 text-slate-200" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none" data-action="create-new">
<svg className="lucide lucide-plus h-5 w-5 text-slate-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</header>

<div className="mt-5 px-5">
<div className="flex flex-wrap gap-3" id="aura-emeb8ndsf"><button aria-expanded="false" aria-haspopup="menu" className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none duration-500 opacity-100 translate-y-0 blur-none" data-filter="engagement" style={{}}>
<span className="mr-2">Engagement</span>
<svg className="lucide lucide-chevron-down inline w-[16px] h-[16px]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button><button aria-expanded="false" aria-haspopup="menu" className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/10 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none duration-500 opacity-100 translate-y-0 blur-none" data-filter="format" style={{}}>
<span className="mr-2">Format</span>
<svg className="lucide lucide-chevron-down inline h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button><button aria-expanded="false" aria-haspopup="menu" className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/10 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none duration-500 opacity-100 translate-y-0 blur-none" data-filter="status" style={{}}>
<span className="mr-2">Status</span>
<svg className="lucide lucide-chevron-down inline h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button></div>
</div>

<section className="mt-6 pr-5 pl-5">
<div className="flex mb-3 items-center justify-between">
<h2 className="text-[22px] tracking-tight font-semibold text-white transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>Series</h2>
<button className="text-sm text-slate-300 hover:text-slate-200 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none" data-action="more-series">More</button>
</div>
<div className="grid grid-cols-2 gap-4">

<article className="group relative overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(120,80,255,0.35)] transition duration-500 ease-out motion-reduce:transition-none opacity-100 bg-gradient-to-b from-[#7E6ECA]/20 to-[#4F4FB8]/10 rounded-3xl blur-none translate-y-0" style={{}}>
<div className="relative aspect-[4/3] group" onmouseenter="const v=this.querySelector('video'); if(v){v.play().catch(()=&gt;{});}" onmouseleave="const v=this.querySelector('video'); if(v){v.pause(); v.currentTime=0;}">
<img alt="Abstract 3D blocks" className="h-full w-full object-cover transition duration-300 ease-out group-hover:opacity-0" src="https://cdn.midjourney.com/1fd8c9b3-471e-47d7-b085-99b79896f990/0_0.png?w=800&amp;q=80"/>
<video className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 ease-out group-hover:opacity-100" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/63a591d9-5b67-44ca-baa1-e6f0099ee298/0.mp4"></video>
<span className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-1 text-[11px] text-white">42:18</span>
<div className="absolute inset-0 opacity-90 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent"></div>
</div>
<div className="bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#3e3097]/50 to-slate-800/0 pt-4 pr-4 pb-4 pl-4">
<h3 className="line-clamp-2 text-[15px] leading-snug font-semibold text-white tracking-tight">
      Reframing Creativity: Systems for Digital Craft
    </h3>
<p className="mt-2 text-[12px] text-slate-300">27k views — 2 months ago</p>
<div className="mt-3 flex items-center justify-between">
<button aria-pressed="false" className="rounded-full p-1 text-slate-300 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button aria-expanded="false" aria-haspopup="menu" className="rounded-full p-1 text-slate-300 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</article>

<article className="group relative overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(120,80,255,0.35)] transition duration-500 ease-out motion-reduce:transition-none opacity-100 bg-gradient-to-b from-[#7E6ECA]/20 to-[#4F4FB8]/10 rounded-3xl blur-none translate-y-0" onmouseenter="const v=this.querySelector('video'); if(v){v.play().catch(()=&gt;{});}" onmouseleave="const v=this.querySelector('video'); if(v){v.pause(); v.currentTime=0;}" style={{}}>
<div className="relative aspect-[4/3] group" onmouseenter="const v=this.querySelector('video'); if(v){v.play().catch(()=&gt;{});}" onmouseleave="const v=this.querySelector('video'); if(v){v.pause(); v.currentTime=0;}">
<img alt="Futuristic shapes" className="h-full w-full object-cover transition duration-300 ease-out group-hover:opacity-0" src="https://cdn.midjourney.com/3ab37cc8-83a6-48d9-b0dd-3834b2dbab0b/0_0.png?w=800&amp;q=80"/>
<video className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 ease-out group-hover:opacity-100" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/4c9e241d-98ea-489f-9102-0f5b5e0401ce/3.mp4"></video>
<span className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-1 text-[11px] text-white">38:07</span>
<div className="absolute inset-0 opacity-90 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent"></div>
</div>
<div className="bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#3e3097]/50 to-slate-800/0 pt-4 pr-4 pb-4 pl-4">
<h3 className="line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-white">
                      Motion Structures: Building Visual Systems
                    </h3>
<p className="mt-2 text-[12px] text-slate-300">84k views — 3 months ago</p>
<div className="mt-3 flex items-center justify-between">
<button aria-pressed="false" className="rounded-full p-1 text-slate-300 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button aria-expanded="false" aria-haspopup="menu" className="rounded-full p-1 text-slate-300 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</article>
</div>
</section>

<section className="mt-8 px-5">
<div className="mb-3 flex items-center justify-between">
<h2 className="text-[22px] tracking-tight font-semibold text-white transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>Guides</h2>
<button className="text-sm text-slate-300 hover:text-slate-200 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none" data-action="more-guides">More</button>
</div>
<article className="relative overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(160,100,255,0.35)] bg-gradient-to-t from-[#362A84]/0 to-[#362A84]/20 rounded-3xl transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>
<div className="flex bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-[#8879D1]/20 to-slate-800/0">
<div className="relative w-[44%]">
<img alt="Crystal array" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37f704fc-8b0f-4c5d-8a64-a61ac371001c_800w.jpg"/>
<span className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-1 text-[11px] text-white">5:50</span>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60"></div>
</div>
<div className="w-[56%] bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-[#362A84]/50 to-[#362A84]/0 pt-4 pr-4 pb-4 pl-4">
<h3 className="line-clamp-1 text-[16px] font-semibold text-white tracking-tight">Prototype to Publish</h3>
<p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">By Orbits Studio</p>
<p className="mt-2 text-[12px] text-slate-300">14k views — 1 month ago</p>
</div>
</div>
</article>
</section>

<section className="mt-8 px-5">
<div className="mb-3 flex items-center justify-between">
<h2 className="text-[22px] tracking-tight font-semibold text-white transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>Live</h2>
<button className="text-sm text-slate-300 hover:text-slate-200 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none" data-action="more-live">More</button>
</div>
<div className="grid grid-cols-2 gap-4">

<article className="relative overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-[#8879D1] to-purple-500/0 rounded-3xl transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>
<div className="relative aspect-[4/3]">
<img alt="Mountains" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7b1b4397-d561-464c-9729-1d5617f66579_800w.jpg"/>
<div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-pink-500/80 px-2 py-1 text-[10px] font-medium text-white">
<span className="h-2 w-2 rounded-full bg-white"></span> Live
                    </div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-90"></div>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="line-clamp-1 text-[13px] font-medium tracking-tight">Field Render: Lighting Landscapes</p>
<p className="text-[11px] text-slate-400 mt-1">3.2k watching</p>
</div>
</article>

<article className="relative overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-[#8879D1] to-purple-500/0 rounded-3xl transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>
<div className="relative aspect-[4/3]">
<img alt="Minimal sculpture" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5f1af33b-0995-477f-b4a3-a68c5057c193_800w.jpg"/>
<div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-pink-500/80 px-2 py-1 text-[10px] font-medium text-white">
<span className="h-2 w-2 rounded-full bg-white"></span> Live
                    </div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-90"></div>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="line-clamp-1 text-[13px] font-medium tracking-tight">Sculpting with Constraints</p>
<p className="text-[11px] text-slate-400 mt-1">1.8k watching</p>
</div>
</article>
</div>
</section>
</div>

<nav className="absolute inset-x-0 bottom-0 z-50 transition duration-500 ease-out motion-reduce:transition-none opacity-100 translate-y-0 blur-none" style={{}}>
<div className="relative ring-1 ring-white/10 bg-white/5 rounded-3xl mr-4 mb-4 ml-4 pt-3 pr-4 pb-3 pl-4 backdrop-blur">
<div className="flex text-[11px] text-slate-300 items-center justify-between">
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none text-slate-300" data-nav="dashboard">
<svg className="lucide lucide-layout-dashboard h-5 w-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="">Dashboard</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none text-slate-300" data-nav="content">
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="">Content</span>
</button>

<div className="relative -mt-10 w-1/5">
<button className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-violet-400 to-violet-600 text-white shadow-[0_10px_30px_rgba(139,92,246,0.5)] ring-2 ring-white/10 hover:ring-violet-400/40 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none" data-nav="insights">
<svg className="lucide lucide-line-chart h-6 w-6" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</button>
<div className="text-[11px] font-medium text-slate-200 text-center mt-1">Insights</div>
</div>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none text-slate-300" data-nav="revenue">
<svg className="lucide lucide-dollar-sign h-5 w-5" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span>Revenue</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition duration-200 ease-out motion-reduce:transition-none active:scale-95 motion-reduce:transform-none text-slate-300" data-nav="community">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Community</span>
</button>
</div>
</div>
</nav>
</div>
</div>
</div>



    </>
  );
}
