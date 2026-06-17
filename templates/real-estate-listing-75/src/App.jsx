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
          // -- Scroll Logic for Header Collapse (rAF throttled for smoother scroll) --
          const mainScroll = document.getElementById('main-scroll');
          const largeTabs = document.getElementById('header-tabs');
          const compactSearch = document.getElementById('header-compact-search');
          const largeSearch = document.getElementById('header-large-search');

          let lastKnownScrollTop = 0;
          let rafId = null;
          let isScrolled = mainScroll.scrollTop > 60;

          const applyHeaderState = (scrolled) => {
              if (scrolled) {
                  // Collapse
                  largeTabs.style.gridTemplateRows = '0fr';
                  largeTabs.style.opacity = '0';
                  largeSearch.style.gridTemplateRows = '0fr';
                  largeSearch.style.opacity = '0';

                  // Show compact
                  compactSearch.style.gridTemplateRows = '1fr';
                  compactSearch.style.opacity = '1';
              } else {
                  // Expand
                  largeTabs.style.gridTemplateRows = '1fr';
                  largeTabs.style.opacity = '1';
                  largeSearch.style.gridTemplateRows = '1fr';
                  largeSearch.style.opacity = '1';

                  // Hide compact
                  compactSearch.style.gridTemplateRows = '0fr';
                  compactSearch.style.opacity = '0';
              }
          };

          const onScroll = () => {
              lastKnownScrollTop = mainScroll.scrollTop;
              if (rafId) return;

              rafId = requestAnimationFrame(() => {
                  rafId = null;
                  let nextScrolled = isScrolled;

                  // Hysteresis thresholds to prevent bounce
                  if (!isScrolled && lastKnownScrollTop > 60) {
                      nextScrolled = true;
                  } else if (isScrolled && lastKnownScrollTop < 20) {
                      nextScrolled = false;
                  }

                  if (nextScrolled !== isScrolled) {
                      isScrolled = nextScrolled;
                      applyHeaderState(isScrolled);
                  }
              });
          };

          mainScroll.addEventListener('scroll', onScroll, { passive: true });
          applyHeaderState(isScrolled);

          // -- Tab Switching Logic --
          const tabBtns = document.querySelectorAll('.tab-btn');
          const searchMiddleBuy = document.getElementById('search-middle-Buy');
          const searchMiddleRent = document.getElementById('search-middle-Rent');
          const searchMiddleDaily = document.getElementById('search-middle-Daily');

          const compactLabel2 = document.getElementById('compact-label-2');
          const compactLabel3 = document.getElementById('compact-label-3');

          tabBtns.forEach(btn => {
              btn.addEventListener('click', () => {
                  const targetTab = btn.getAttribute('data-tab');

                  // Reset tab styles
                  tabBtns.forEach(t => {
                      t.classList.remove('text-zinc-900');
                      t.classList.add('text-zinc-500');
                      t.querySelector('.tab-indicator').classList.remove('bg-zinc-900');
                      t.querySelector('.tab-indicator').classList.add('bg-transparent');
                  });

                  // Set active style
                  btn.classList.remove('text-zinc-500');
                  btn.classList.add('text-zinc-900');
                  btn.querySelector('.tab-indicator').classList.remove('bg-transparent');
                  btn.querySelector('.tab-indicator').classList.add('bg-zinc-900');

                  // Switch search bar segments
                  searchMiddleBuy.classList.add('hidden');
                  searchMiddleRent.classList.add('hidden');
                  searchMiddleDaily.classList.add('hidden');

                  if (targetTab === 'Buy') {
                      searchMiddleBuy.classList.remove('hidden');
                      compactLabel2.textContent = 'Any price';
                      compactLabel3.textContent = 'Any type';
                  } else if (targetTab === 'Rent') {
                      searchMiddleRent.classList.remove('hidden');
                      compactLabel2.textContent = 'Any date';
                      compactLabel3.textContent = 'Any budget';
                  } else if (targetTab === 'Daily') {
                      searchMiddleDaily.classList.remove('hidden');
                      compactLabel2.textContent = 'Anytime';
                      compactLabel3.textContent = 'Add guests';
                  }
              });
          });

          // -- Search Input Dropdown Logic --
          const searchInput = document.getElementById('search-input');
          const searchDropdown = document.getElementById('search-dropdown');
          const searchWrapper = document.getElementById('search-where');
          const clearBtn = document.getElementById('clear-search');

          searchInput.addEventListener('focus', () => {
              searchDropdown.classList.remove('hidden');
          });

          searchInput.addEventListener('input', (e) => {
              if (e.target.value.trim() !== '') {
                  clearBtn.classList.remove('hidden');
              } else {
                  clearBtn.classList.add('hidden');
              }
          });

          clearBtn.addEventListener('click', () => {
              searchInput.value = '';
              clearBtn.classList.add('hidden');
              searchInput.focus();
          });

          document.addEventListener('mousedown', (e) => {
              if (!searchWrapper.contains(e.target)) {
                  searchDropdown.classList.add('hidden');
              }
          });

          // -- Category Carousel Scroll Logic --
          const catScroll = document.getElementById('category-scroll');
          const scrollLeftBtn = document.getElementById('scroll-left-btn');
          const scrollRightBtn = document.getElementById('scroll-right-btn');
          const leftFade = document.getElementById('scroll-left-fade');
          const rightFade = document.getElementById('scroll-right-fade');

          const handleScrollFade = () => {
              if (catScroll.scrollLeft > 0) {
                  leftFade.style.opacity = '1';
              } else {
                  leftFade.style.opacity = '0';
              }

              if (catScroll.scrollLeft + catScroll.clientWidth >= catScroll.scrollWidth - 10) {
                  rightFade.style.opacity = '0';
              } else {
                  rightFade.style.opacity = '1';
              }
          };

          catScroll.addEventListener('scroll', handleScrollFade, { passive: true });
          window.addEventListener('resize', handleScrollFade);

          scrollLeftBtn.addEventListener('click', () => {
              catScroll.scrollBy({ left: -300, behavior: 'smooth' });
          });

          scrollRightBtn.addEventListener('click', () => {
              catScroll.scrollBy({ left: 300, behavior: 'smooth' });
          });

          setTimeout(handleScrollFade, 100);

          // -- Category Selection Logic --
          const catBtns = document.querySelectorAll('.cat-btn');
          catBtns.forEach(btn => {
              btn.addEventListener('click', () => {
                  catBtns.forEach(b => {
                      b.classList.remove('opacity-100');
                      b.classList.add('opacity-60');
                      b.querySelector('.cat-indicator').classList.remove('bg-zinc-900');
                      b.querySelector('.cat-indicator').classList.add('bg-transparent');
                  });
                  btn.classList.remove('opacity-60');
                  btn.classList.add('opacity-100');
                  btn.querySelector('.cat-indicator').classList.remove('bg-transparent');
                  btn.querySelector('.cat-indicator').classList.add('bg-zinc-900');
              });
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
      
<div className="w-full h-screen overflow-y-auto no-scrollbar relative flex flex-col scroll-smooth" id="main-scroll" style={{overflowAnchor: 'none'}}>

<header className="sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300" style={{backgroundColor: 'var(--dash-card-bg-alpha)', borderColor: 'var(--dash-border-light)'}}>

<div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out" id="header-tabs" style={{gridTemplateRows: '1fr', opacity: '1'}}>
<div className="overflow-hidden">
<div className="flex justify-center pt-4 pb-2">
<nav className="flex items-center gap-2" id="tab-nav">
<button className="tab-btn relative flex flex-col items-center px-6 py-2 cursor-pointer transition-all duration-200 group text-zinc-900" data-tab="Buy" type="button">
<iconify-icon className="text-2xl mb-1.5 transition-transform duration-200 group-hover:scale-110" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Buy</span>
<span className="tab-indicator absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-200 bg-zinc-900"></span>
</button>
<button className="tab-btn relative flex flex-col items-center px-6 py-2 cursor-pointer transition-all duration-200 group text-zinc-500" data-tab="Rent" type="button">
<iconify-icon className="text-2xl mb-1.5 transition-transform duration-200 group-hover:scale-110" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Rent</span>
<span className="tab-indicator absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-200 bg-transparent"></span>
</button>
<button className="tab-btn relative flex flex-col items-center px-6 py-2 cursor-pointer transition-all duration-200 group text-zinc-500" data-tab="Daily" type="button">
<iconify-icon className="text-2xl mb-1.5 transition-transform duration-200 group-hover:scale-110" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Daily</span>
<span className="tab-indicator absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-200 bg-transparent"></span>
</button>
</nav>
</div>
</div>
</div>

<div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out" id="header-compact-search" style={{gridTemplateRows: '0fr', opacity: '0'}}>
<div className="overflow-hidden">
<div className="flex items-center justify-center py-3">
<button className="flex items-center rounded-full border shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md active:scale-[0.98] bg-white border-zinc-200" onclick="document.getElementById('main-scroll').scrollTo({top: 0, behavior: 'smooth'})" type="button">
<span className="flex items-center gap-2 pl-5 pr-4 py-2.5 text-sm font-medium border-r border-zinc-200 text-zinc-900">
<iconify-icon className="text-lg opacity-50" icon="solar:magnifer-linear"></iconify-icon>
                  Anywhere
                </span>
<span className="flex items-center px-4 py-2.5 text-sm border-r border-zinc-200 text-zinc-500" id="compact-label-2">
                  Any price
                </span>
<span className="flex items-center px-4 py-2.5 text-sm text-zinc-500" id="compact-label-3">
                  Any type
                </span>
<span className="size-8 rounded-full flex items-center justify-center shrink-0 mr-1.5 ml-2 bg-zinc-900 text-white">
<iconify-icon className="text-sm" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</div>
</div>
</div>

<div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out" id="header-large-search" style={{gridTemplateRows: '1fr', opacity: '1'}}>
<div className="overflow-hidden">
<div className="max-w-[860px] mx-auto px-5 py-2 pb-6 flex items-center justify-center gap-3">

<div className="flex items-center w-full rounded-full border shadow-sm transition-shadow hover:shadow-md bg-white border-zinc-200 relative" id="search-wrapper">

<div className="relative flex-1" id="search-where">
<div className="flex items-center gap-3 pl-6 pr-4 py-3 cursor-pointer rounded-l-full transition-colors hover:bg-zinc-50 group">
<div className="flex flex-col w-full">
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                        Where
                      </span>
<input autocomplete="off" className="border-none outline-none placeholder:text-zinc-500 truncate text-sm text-zinc-900 bg-transparent w-full" id="search-input" placeholder="City, neighborhood…" type="text"/>
</div>
<button className="hidden size-5 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-colors bg-zinc-100 text-zinc-500 hover:bg-zinc-200" id="clear-search" type="button">
<iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-full left-0 mt-3 w-[360px] rounded-2xl border border-zinc-200 shadow-lg overflow-hidden z-50 bg-white" id="search-dropdown">
<div className="py-2">
<div className="px-4 py-2 text-xs font-semibold text-zinc-500 tracking-tight">
                        Recent searches
                      </div>
<button className="w-full flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 text-left" type="button">
<div className="size-10 rounded-xl flex items-center justify-center shrink-0 bg-zinc-100 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex flex-col min-w-0">
<span className="text-sm font-medium text-zinc-900 truncate">
                            Phnom Penh
                          </span>
<span className="text-xs text-zinc-500 truncate">
                            1,204 properties · Cambodia
                          </span>
</div>
</button>
<button className="w-full flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 text-left" type="button">
<div className="size-10 rounded-xl flex items-center justify-center shrink-0 bg-zinc-100 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex flex-col min-w-0">
<span className="text-sm font-medium text-zinc-900 truncate">
                            Siem Reap
                          </span>
<span className="text-xs text-zinc-500 truncate">
                            342 properties · Cambodia
                          </span>
</div>
</button>
</div>
</div>
</div>
<div className="w-px h-8 shrink-0 bg-zinc-200"></div>


<div className="flex flex-1 items-center" id="search-middle-Buy">
<div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50">
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase font-semibold text-zinc-900 tracking-wider">
                        Price
                      </span>
<span className="text-sm text-zinc-500 truncate">
                        Any range
                      </span>
</div>
</div>
<div className="w-px h-8 shrink-0 bg-zinc-200"></div>
<div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 rounded-r-full">
<div className="flex flex-col px-2">
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                        Type
                      </span>
<span className="text-sm text-zinc-500 truncate">
                        Any type
                      </span>
</div>
</div>
</div>

<div className="hidden flex-1 items-center" id="search-middle-Rent">
<div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50">
<div className="flex flex-col px-2">
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                        Move in
                      </span>
<span className="text-sm text-zinc-500 truncate">
                        Add date
                      </span>
</div>
</div>
<div className="w-px h-8 shrink-0 bg-zinc-200"></div>
<div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 rounded-r-full">
<div className="flex flex-col px-2">
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                        Budget
                      </span>
<span className="text-sm text-zinc-500 truncate">
                        Per month
                      </span>
</div>
</div>
</div>

<div className="hidden flex-1 items-center" id="search-middle-Daily">
<div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50">
<div className="flex flex-col px-2">
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                        Dates
                      </span>
<span className="text-sm text-zinc-500 truncate">
                        Add dates
                      </span>
</div>
</div>
<div className="w-px h-8 shrink-0 bg-zinc-200"></div>
<div className="flex-1 flex items-center gap-0 px-4 py-3 cursor-pointer transition-colors hover:bg-zinc-50 rounded-r-full">
<div className="flex flex-col px-2">
<span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-900">
                        Guests
                      </span>
<span className="text-sm text-zinc-500 truncate">
                        Add guests
                      </span>
</div>
</div>
</div>

<div className="pr-2 pl-1 shrink-0 z-10 bg-white md:bg-transparent rounded-r-full absolute right-0 md:relative h-full flex items-center">
<button className="size-10 md:size-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-95 bg-zinc-900 shadow-sm" type="button">
<iconify-icon className="text-white text-lg md:text-xl" icon="solar:magnifer-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>

<button className="hidden md:flex size-14 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer transition-all hover:bg-zinc-50 active:scale-95 shrink-0 bg-white text-zinc-900" type="button">
<iconify-icon className="text-xl" icon="solar:tuning-3-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="border-t border-zinc-200 bg-white">
<div className="max-w-[1400px] mx-auto relative group">

<div className="absolute left-0 top-0 bottom-0 z-10 flex items-center pl-4 bg-gradient-to-r from-white via-white/90 to-transparent w-24 opacity-0 transition-opacity duration-300 pointer-events-none" id="scroll-left-fade">
<button className="size-8 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer transition-all hover:shadow-md active:scale-95 bg-white text-zinc-900 pointer-events-auto" id="scroll-left-btn" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex overflow-x-auto scroll-smooth no-scrollbar md:px-12 pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-end" id="category-scroll">

<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  All Homes
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-zinc-900"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:city-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  Apartments
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:swimming-pool-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  With Pool
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:armchair-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  Furnished
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:tree-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  Garden
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">Gated</span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:star-ring-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  New Build
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">Gym</span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:dog-paw-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  Pet Friendly
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">Land</span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
<button className="cat-btn flex flex-col items-center gap-2 px-3 pt-2 pb-2 shrink-0 cursor-pointer transition-all duration-200 relative opacity-60 hover:opacity-100 text-zinc-900">
<iconify-icon className="text-[26px] transition-transform duration-200 hover:scale-110" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium whitespace-nowrap">
                  Balcony
                </span>
<div className="cat-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-200 bg-transparent"></div>
</button>
</div>

<div className="absolute right-0 top-0 bottom-0 z-10 flex items-center pr-4 justify-end bg-gradient-to-l from-white via-white/90 to-transparent w-24 opacity-100 transition-opacity duration-300 pointer-events-none" id="scroll-right-fade">
<button className="size-8 rounded-full border border-zinc-200 flex items-center justify-center cursor-pointer transition-all hover:shadow-md active:scale-95 bg-white text-zinc-900 pointer-events-auto" id="scroll-right-btn" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-8 min-h-screen">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors">
<iconify-icon className="text-white text-xl drop-shadow-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-0.5">
<h3 className="font-medium text-zinc-900 truncate">
                  Modern Tropical Villa
                </h3>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900 shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
                  4.9
                </div>
</div>
<p className="text-sm text-zinc-500 truncate">Siem Reap, Cambodia</p>
<p className="text-sm text-zinc-500 mt-0.5">
                4 Beds · 3 Baths · 250 sqm
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900">$850,000</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
<img alt="Apartment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors">
<iconify-icon className="text-white text-xl drop-shadow-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-0.5">
<h3 className="font-medium text-zinc-900 truncate">
                  Luxury Penthouse
                </h3>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900 shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
                  5.0
                </div>
</div>
<p className="text-sm text-zinc-500 truncate">BKK1, Phnom Penh</p>
<p className="text-sm text-zinc-500 mt-0.5">
                3 Beds · 3 Baths · City View
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900">$1,200,000</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
<img alt="House" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors">
<iconify-icon className="text-white text-xl drop-shadow-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-0.5">
<h3 className="font-medium text-zinc-900 truncate">
                  Minimalist Family Home
                </h3>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900 shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
                  4.8
                </div>
</div>
<p className="text-sm text-zinc-500 truncate">
                Toul Kork, Phnom Penh
              </p>
<p className="text-sm text-zinc-500 mt-0.5">
                5 Beds · 4 Baths · Garden
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900">$540,000</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
<img alt="Condo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors">
<iconify-icon className="text-white text-xl drop-shadow-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-0.5">
<h3 className="font-medium text-zinc-900 truncate">
                  Riverside Condo
                </h3>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900 shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
                  4.7
                </div>
</div>
<p className="text-sm text-zinc-500 truncate">
                Daun Penh, Phnom Penh
              </p>
<p className="text-sm text-zinc-500 mt-0.5">
                1 Bed · 1 Bath · Gym Pool
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900">$120,000</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors">
<iconify-icon className="text-white text-xl drop-shadow-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-0.5">
<h3 className="font-medium text-zinc-900 truncate">
                  Courtyard Oasis
                </h3>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900 shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
                  4.9
                </div>
</div>
<p className="text-sm text-zinc-500 truncate">Chroy Changvar</p>
<p className="text-sm text-zinc-500 mt-0.5">
                3 Beds · 3 Baths · Pool
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900">$480,000</span>
</div>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
<img alt="Apartment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&amp;q=80"/>
<div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors">
<iconify-icon className="text-white text-xl drop-shadow-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start mb-0.5">
<h3 className="font-medium text-zinc-900 truncate">
                  Downtown Loft
                </h3>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-900 shrink-0">
<iconify-icon className="text-zinc-900" icon="solar:star-bold"></iconify-icon>
                  4.6
                </div>
</div>
<p className="text-sm text-zinc-500 truncate">BKK1, Phnom Penh</p>
<p className="text-sm text-zinc-500 mt-0.5">
                2 Beds · 2 Baths · Furnished
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-zinc-900">$320,000</span>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 mb-4">
<button className="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all hover:scale-[1.02] active:scale-95 bg-zinc-900 text-white" type="button">
            Show more
          </button>
</div>
</main>

<footer className="border-t border-zinc-200 bg-zinc-50 mt-auto shrink-0">
<div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="flex gap-0.5 items-center font-bold tracking-tight text-zinc-900">
<iconify-icon className="text-lg" icon="solar:box-minimalistic-linear" strokeWidth="2"></iconify-icon>
              AP
            </div>
<span className="text-sm text-zinc-500 ml-2">
              © 2026 Anachak Property
            </span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Privacy
            </a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Terms
            </a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Sitemap
            </a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Support
            </a>
</div>
</div>
</footer>
</div>


    </>
  );
}
