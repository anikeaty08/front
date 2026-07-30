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
      
    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    const q = (s, r = document) => r.querySelector(s);
    const qa = (s, r = document) => Array.from(r.querySelectorAll(s));

    const listContainer = q('#content');
    const emptyState = q('#emptyState');
    const btnMarkAll = q('#btnMarkAll');
    const btnCancelSelect = q('#btnCancelSelect');
    const bulkBar = q('#bulkBar');
    const selectedCountEl = q('#selectedCount');
    const bulkMarkRead = q('#bulkMarkRead');
    const bulkDelete = q('#bulkDelete');

    let selectMode = false;
    const selected = new Set();

    function updateEmptyState() {
      const items = qa('.notif-item');
      const hasAny = items.length > 0;
      emptyState.classList.toggle('hidden', hasAny);
      listContainer.classList.toggle('hidden', !hasAny);
    }

    function setUnreadState(item, isUnread) {
      item.dataset.unread = isUnread ? 'true' : 'false';
      const swipeable = q('.swipeable', item);
      swipeable.classList.toggle('bg-gray-50', isUnread);
      const dot = q('.unread-dot', item);
      if (dot) dot.classList.toggle('hidden', !isUnread);
    }

    function closeAllSwipes(except) {
      qa('.notif-item .swipeable').forEach(el => {
        if (el !== except) {
          el.style.transform = 'translateX(0px)';
          el.dataset.open = 'false';
        }
      });
    }

    function enterSelectMode(withItem) {
      selectMode = true;
      btnMarkAll.classList.add('hidden');
      btnCancelSelect.classList.remove('hidden');

      bulkBar.classList.remove('pointer-events-none', 'opacity-0');
      qa('.notif-item .select-dot').forEach(dot => {
        dot.classList.remove('opacity-0', 'scale-90', 'pointer-events-none');
      });

      if (withItem) toggleSelect(withItem);
    }

    function exitSelectMode() {
      selectMode = false;
      selected.clear();
      btnMarkAll.classList.remove('hidden');
      btnCancelSelect.classList.add('hidden');

      bulkBar.classList.add('pointer-events-none', 'opacity-0');
      qa('.notif-item .select-dot').forEach(dot => {
        dot.classList.add('opacity-0', 'scale-90', 'pointer-events-none');
        q('i', dot).classList.add('hidden');
        dot.classList.remove('bg-gray-900', 'text-white', 'border-gray-900');
        dot.classList.add('border-gray-300', 'bg-white');
      });
      qa('.notif-item').forEach(item => item.classList.remove('ring', 'ring-gray-300', 'rounded-lg'));
      updateSelectedCount();
    }

    function updateSelectedCount() {
      selectedCountEl.textContent = selected.size + ' selected';
    }

    function toggleSelect(item) {
      const id = item.dataset.id;
      const dot = q('.select-dot', item);
      const icon = q('i', dot);

      if (selected.has(id)) {
        selected.delete(id);
        icon.classList.add('hidden');
        dot.classList.remove('bg-gray-900', 'text-white', 'border-gray-900');
        dot.classList.add('border-gray-300', 'bg-white');
        item.classList.remove('ring', 'ring-gray-300', 'rounded-lg');
      } else {
        selected.add(id);
        icon.classList.remove('hidden');
        dot.classList.add('bg-gray-900', 'text-white', 'border-gray-900');
        dot.classList.remove('border-gray-300', 'bg-white');
        item.classList.add('ring', 'ring-gray-300', 'rounded-lg');
      }
      updateSelectedCount();
    }

    function setupSwipe(item) {
      const row = q('.swipeable', item);
      let startX = 0;
      let dragging = false;
      let lock = false;
      let longPressTimer;

      const maxReveal = 140;

      function onTouchStart(e) {
        if (selectMode) return;
        const touch = e.touches ? e.touches[0] : e;
        startX = touch.clientX;
        dragging = true;
        lock = false;

        longPressTimer = setTimeout(() => {
          dragging = false;
          enterSelectMode(item);
        }, 450);
      }

      function onTouchMove(e) {
        if (!dragging || selectMode) return;
        const touch = e.touches ? e.touches[0] : e;
        const dx = touch.clientX - startX;
        if (!lock && Math.abs(dx) > 6) {
          clearTimeout(longPressTimer);
          lock = true;
        }
        if (dx < 0) {
          const t = Math.max(-maxReveal, dx);
          row.style.transform = `translateX(${t}px)`;
        } else {
          row.style.transform = 'translateX(0px)';
        }
      }

      function onTouchEnd() {
        clearTimeout(longPressTimer);
        if (selectMode) return;
        dragging = false;
        const computed = getComputedStyle(row).transform;
        let x = 0;
        if (computed && computed !== 'none') {
          const m = computed.match(/matrix\(([-0-9., ]+)\)/);
          if (m) {
            const parts = m[1].split(',');
            x = parseFloat(parts[4]) || 0;
          }
        }
        if (x < -60) {
          closeAllSwipes(row);
          row.style.transform = `translateX(${-maxReveal}px)`;
          row.dataset.open = 'true';
        } else {
          row.style.transform = 'translateX(0px)';
          row.dataset.open = 'false';
        }
      }

      row.addEventListener('touchstart', onTouchStart, { passive: true });
      row.addEventListener('touchmove', onTouchMove, { passive: true });
      row.addEventListener('touchend', onTouchEnd);
      row.addEventListener('mousedown', onTouchStart);
      row.addEventListener('mousemove', onTouchMove);
      row.addEventListener('mouseup', onTouchEnd);

      row.addEventListener('click', (e) => {
        if (selectMode) {
          e.preventDefault();
          toggleSelect(item);
        } else {
          closeAllSwipes(row);
        }
      });

      q('.action-delete', item).addEventListener('click', (e) => {
        e.stopPropagation();
        item.remove();
        updateEmptyState();
      });
      q('.action-read', item).addEventListener('click', (e) => {
        e.stopPropagation();
        setUnreadState(item, false);
        q('.swipeable', item).style.transform = 'translateX(0px)';
      });
    }

    qa('.notif-item').forEach(item => {
      const unread = item.dataset.unread === 'true';
      setUnreadState(item, unread);
      setupSwipe(item);
    });

    btnMarkAll.addEventListener('click', () => {
      qa('.notif-item').forEach(item => setUnreadState(item, false));
    });

    btnCancelSelect.addEventListener('click', () => {
      exitSelectMode();
    });

    bulkMarkRead.addEventListener('click', () => {
      qa('.notif-item').forEach(item => {
        if (selected.has(item.dataset.id)) setUnreadState(item, false);
      });
      exitSelectMode();
    });
    bulkDelete.addEventListener('click', () => {
      qa('.notif-item').forEach(item => {
        if (selected.has(item.dataset.id)) item.remove();
      });
      exitSelectMode();
      updateEmptyState();
    });

    document.addEventListener('click', (e) => {
      const within = e.target.closest('.notif-item');
      if (!within) closeAllSwipes(null);
    });

    updateEmptyState();
  
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
      
<div className="mx-auto min-h-screen w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col relative md:my-6 md:rounded-2xl md:border md:border-gray-200 md:bg-white md:shadow-sm">

<header className="sticky top-0 z-20 bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-gray-200 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
<div className="pt-[12px] pb-[10px] px-4 flex items-center justify-between">
<button aria-label="Back" className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center hover:bg-gray-100 active:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-colors" id="btnBack">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<div className="flex-1 text-center">
<h1 className="text-[17px] md:text-[18px] tracking-tight font-semibold">Notifications</h1>
</div>
<div className="flex items-center gap-2">
<button className="text-[13px] md:text-[14px] font-medium text-gray-700 hover:text-gray-900 hover:underline decoration-gray-300 underline-offset-4 px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-colors" id="btnMarkAll">
            Mark all as read
          </button>
<button className="hidden text-[13px] md:text-[14px] font-medium text-gray-700 hover:text-gray-900 px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-colors" id="btnCancelSelect">
            Cancel
          </button>
</div>
</div>
</header>

<div className="pointer-events-none opacity-0 transition-opacity duration-200 fixed left-0 right-0 bottom-0" id="bulkBar">
<div className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl px-4 pb-[max(env(safe-area-inset-bottom),16px)] pt-2">
<div className="rounded-xl border border-gray-200 bg-white shadow-sm">
<div className="px-3 py-2 text-[13px] md:text-[14px] text-gray-600 flex items-center justify-between">
<span id="selectedCount">0 selected</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-gray-200 text-[13px] md:text-[14px] font-medium hover:bg-gray-50 active:opacity-80 transition-colors" id="bulkMarkRead">Mark read</button>
<button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-[13px] md:text-[14px] font-medium hover:opacity-90 active:opacity-80 transition-opacity" id="bulkDelete">Delete</button>
</div>
</div>
</div>
</div>
</div>

<main className="flex-1 overflow-y-auto md:bg-white" id="content">

<section className="px-4">
<div className="pt-3 pb-2 sticky top-[49px] bg-white/85 backdrop-blur z-10">
<div className="text-[12px] md:text-[13px] font-medium text-gray-500 uppercase tracking-wide">Today</div>
</div>
<div className="divide-y divide-gray-100">

<div className="relative notif-item" data-id="n1" data-unread="true">

<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>

<div className="swipeable relative bg-gray-50 transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />

<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
<span className="font-semibold">Alex Carter</span> confirmed your appointment
                    </div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">10m</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full border border-gray-200 text-[12px] md:text-[13px] text-gray-700 hover:bg-gray-50 transition-colors">View</span>
<span className="unread-dot h-2 w-2 rounded-full bg-gray-900"></span>
</div>
</div>
</button>
</div>
</div>

<div className="relative notif-item" data-id="n2" data-unread="true">
<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>
<div className="swipeable relative bg-gray-50 transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
<span className="font-semibold">Mia Lopez</span> sent you a message about your booking
                    </div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">25m</div>
</div>
<div className="shrink-0 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full border border-gray-200 text-[12px] md:text-[13px] text-gray-700 hover:bg-gray-50 transition-colors">Reply</span>
<span className="unread-dot h-2 w-2 rounded-full bg-gray-900"></span>
</div>
</div>
</button>
</div>
</div>

<div className="relative notif-item" data-id="n3">
<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>
<div className="swipeable relative bg-white transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<div className="h-10 w-10 rounded-full ring-1 ring-gray-200 bg-gray-100 flex items-center justify-center">
<i className="h-5 w-5 text-gray-700" data-lucide="calendar"></i>
</div>
<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
                      New timeslot available for <span className="font-semibold">Skin Therapy</span>
</div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">1h</div>
</div>
<div className="shrink-0">
<img alt="" className="h-10 w-10 rounded-md object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=160&auto=format&fit=crop" />
</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="px-4">
<div className="pt-3 pb-2 sticky top-[49px] bg-white/85 backdrop-blur z-10">
<div className="text-[12px] md:text-[13px] font-medium text-gray-500 uppercase tracking-wide">Yesterday</div>
</div>
<div className="divide-y divide-gray-100">
<div className="relative notif-item" data-id="n4">
<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>
<div className="swipeable relative bg-white transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<div className="h-10 w-10 rounded-full ring-1 ring-gray-200 bg-gray-100 flex items-center justify-center">
<i className="h-5 w-5 text-gray-700" data-lucide="receipt"></i>
</div>
<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
                      Payment received for your session
                    </div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">13:05</div>
</div>
<div className="shrink-0">
<span className="px-2.5 py-1 rounded-full border border-gray-200 text-[12px] md:text-[13px] text-gray-700 hover:bg-gray-50 transition-colors">Receipt</span>
</div>
</div>
</button>
</div>
</div>
<div className="relative notif-item" data-id="n5">
<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>
<div className="swipeable relative bg-white transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<div className="h-10 w-10 rounded-full ring-1 ring-gray-200 bg-gray-100 flex items-center justify-center">
<i className="h-5 w-5 text-gray-700" data-lucide="alarm-clock"></i>
</div>
<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
                      Reminder: Appointment starts in 2 hours
                    </div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">09:00</div>
</div>
<div className="shrink-0">
<span className="px-2.5 py-1 rounded-full border border-gray-200 text-[12px] md:text-[13px] text-gray-700 hover:bg-gray-50 transition-colors">Details</span>
</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="px-4 mb-24">
<div className="pt-3 pb-2 sticky top-[49px] bg-white/85 backdrop-blur z-10">
<div className="text-[12px] md:text-[13px] font-medium text-gray-500 uppercase tracking-wide">This Week</div>
</div>
<div className="divide-y divide-gray-100">
<div className="relative notif-item" data-id="n6">
<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>
<div className="swipeable relative bg-white transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
<span className="font-semibold">Jamie Fox</span> rescheduled to Fri 3:00 PM
                    </div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">Tue</div>
</div>
<div className="shrink-0">
<span className="px-2.5 py-1 rounded-full border border-gray-200 text-[12px] md:text-[13px] text-gray-700 hover:bg-gray-50 transition-colors">View</span>
</div>
</div>
</button>
</div>
</div>
<div className="relative notif-item" data-id="n7">
<div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 pl-6">
<button className="action-read px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-[12px] md:text-[13px] font-medium hover:bg-gray-300 active:opacity-80 transition-colors flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="check"></i> Read
              </button>
<button className="action-delete px-3 py-2 rounded-lg bg-gray-900 text-white text-[12px] md:text-[13px] font-medium hover:opacity-90 active:opacity-80 transition-opacity flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="trash-2"></i> Delete
              </button>
</div>
<div className="swipeable relative bg-white transition-transform duration-200">
<button className="w-full text-left active:scale-[0.997] transition-transform">
<div className="px-4 py-3 flex items-center gap-3">
<div className="relative shrink-0">
<div className="h-10 w-10 rounded-full ring-1 ring-gray-200 bg-gray-100 flex items-center justify-center">
<i className="h-5 w-5 text-gray-700" data-lucide="star"></i>
</div>
<span className="select-dot absolute -top-1 -left-1 h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm opacity-0 scale-90 pointer-events-none transition">
<i className="h-3.5 w-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="min-w-0 flex-1">
<div className="line-clamp-2 text-[14px] md:text-[15px] leading-tight">
                      Rate your last visit
                    </div>
<div className="mt-1 text-[12px] md:text-[13px] text-gray-500">Sun</div>
</div>
<div className="shrink-0 flex items-center">
<div className="flex -space-x-0.5 text-gray-700">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="hidden px-6 pt-16 pb-24 text-center" id="emptyState">
<div className="mx-auto max-w-xs">
<div className="mx-auto h-16 w-16 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
<i className="h-7 w-7 text-gray-700" data-lucide="bell-off"></i>
</div>
<h2 className="mt-4 text-[18px] md:text-[20px] font-semibold tracking-tight">You're all caught up</h2>
<p className="mt-2 text-[14px] md:text-[15px] text-gray-600">New notifications will appear here as your appointments update.</p>
<div className="mt-6">
<button className="px-4 py-2 rounded-lg border border-gray-200 text-[14px] md:text-[15px] font-medium hover:bg-gray-50 active:opacity-80 transition-colors">
              Explore services
            </button>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
