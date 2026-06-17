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
      
      // Icons
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
      });

      // State
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
      

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0B0D12]/70 bg-[#0B0D12]/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-4">
<button className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10 text-white text-sm tracking-tight font-medium group-hover:ring-white/20 transition">R</div>
<span className="text-lg md:text-xl font-semibold tracking-tight">RVX</span>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-xl mx-4">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 h-10 rounded-md bg-white/5 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/40 text-sm" id="search-input" placeholder="Поиск предметов, сетов, авторов..." type="text"/>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<div className="hidden lg:flex items-center">
<button className="hidden xl:inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="open-filter-btn">
<i className="w-4 h-4" data-lucide="filter"></i>
<span className="text-sm">Фильтры</span>
</button>
<div className="relative ml-2">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="sort-menu-btn">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
<span className="text-sm">Сортировка</span>
</button>
<div className="hidden absolute right-0 mt-2 w-56 rounded-md bg-[#0F131A] ring-1 ring-white/10 shadow-lg overflow-hidden" id="sort-menu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="popular">Популярные</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="new">Новые</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="price_asc">Цена: по возрастанию</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="price_desc">Цена: по убыванию</button>
</div>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center gap-2">
<i className="w-4 h-4 text-white/70" data-lucide="wallet"></i>
<span className="text-sm font-medium tracking-tight" id="balance-amount">₽ 0</span>
</div>
<button className="h-10 px-3 rounded-md bg-white text-black hover:bg-white/90 transition text-sm font-medium" id="topup-open-btn">
                Пополнить
              </button>
</div>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="profile-open-btn">
<i className="w-5 h-5" data-lucide="user-round"></i>
<span className="hidden sm:inline text-sm">Профиль</span>
</button>

<button className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="admin-open-btn">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-sm">Админ</span>
</button>
<button className="relative inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="cart-open-btn">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<span className="hidden sm:inline text-sm">Корзина</span>
<span className="absolute -top-1 -right-1 h-5 min-w-[20px] text-[11px] px-1.5 grid place-items-center rounded-full bg-white text-black font-medium" id="cart-count">0</span>
</button>
</div>
</div>

<div className="md:hidden pb-3">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 h-10 rounded-md bg-white/5 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/40 text-sm" placeholder="Поиск..." type="text"/>
</div>
</div>
</div>
</header>

<div className="lg:hidden fixed inset-0 z-40 hidden" id="mobile-menu">
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute left-0 top-0 h-full w-80 max-w-[80%] bg-[#0F131A] ring-1 ring-white/10 p-4 overflow-y-auto">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10 text-white text-sm tracking-tight font-medium">R</div>
<span className="text-lg font-semibold tracking-tight">RVX</span>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20" id="mobile-menu-close">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-6 space-y-1">
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="package"></i>
            Каталог
          </button>
<button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10 flex items-center gap-2" id="mm-open-profile">
<i className="w-4 h-4" data-lucide="user-round"></i>
            Профиль
          </button>
<div className="mt-4 border-t border-white/10 pt-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-white/70" data-lucide="wallet"></i>
<span className="text-sm text-white/80">Баланс</span>
</div>
<span className="text-sm font-medium tracking-tight" id="balance-amount-mm">₽ 0</span>
</div>
<button className="mt-3 w-full h-10 rounded-md bg-white text-black hover:bg-white/90 transition text-sm font-medium" id="topup-open-btn-mm">Пополнить</button>
</div>
</div>
</div>
</div>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Магазин предметов Roblox с моментальной доставкой
            </h1>
<p className="mt-3 text-white/70 text-sm sm:text-base">
              Выбирайте сеты, аксессуары и лимитки. Безопасная оплата, защита сделок и мгновенное зачисление.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-2">
<span className="text-xs uppercase text-white/50">Популярные теги:</span>
<button className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs">Limited</button>
<button className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs">UGC</button>
<button className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs">Аватары</button>
<button className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs">Коллекции</button>
</div>
</div>
<div className="rounded-xl bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-white/10 p-4 sm:p-6">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<img alt="Preview" className="w-full h-28 sm:h-24 object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Preview" className="w-full h-28 sm:h-24 object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
<img alt="Preview" className="w-full h-28 sm:h-24 object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
<img alt="Preview" className="w-full h-28 sm:h-24 object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Preview" className="w-full h-28 sm:h-24 object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Preview" className="w-full h-28 sm:h-24 object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Предметов</div>
<div className="mt-1 text-lg font-semibold tracking-tight">+8 000</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Заказов</div>
<div className="mt-1 text-lg font-semibold tracking-tight">+120k</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 sm:p-4">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs uppercase text-white/50">Категории:</span>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-white/90 transition category-btn" data-category="all">Все</button>
<button className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs category-btn" data-category="limited">Limited</button>
<button className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs category-btn" data-category="ugc">UGC</button>
<button className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs category-btn" data-category="avatar">Аватары</button>
<button className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs category-btn" data-category="bundle">Сеты</button>

<button className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs category-btn" data-category="animation">Анимации</button>
<button className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs category-btn" data-category="emote">Эмоции</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-white/50">Цена:</span>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs price-btn" data-price="all">Все</button>
<button className="px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs price-btn" data-price="1">до 100₽</button>
<button className="px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs price-btn" data-price="2">100–500₽</button>
<button className="px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs price-btn" data-price="3">500+₽</button>
</div>
</div>
</div>
</div>
</section>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4" id="products-grid">

<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="limited" data-id="p1" data-name="Valkyrie Helm" data-price="1499">
<div className="relative">
<img alt="Valkyrie Helm" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="badge-check"></i>
              Limited
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Valkyrie Helm</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 1 499</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p1">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="ugc" data-id="p2" data-name="UGC Cyber Wings" data-price="399">
<div className="relative">
<img alt="UGC Cyber Wings" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="tag"></i>
              UGC
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">UGC Cyber Wings</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 399</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p2">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="bundle" data-id="p3" data-name="Avatar Bundle Neon" data-price="899">
<div className="relative">
<img alt="Avatar Bundle Neon" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="package"></i>
              Сет
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Avatar Bundle Neon</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 899</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p3">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="avatar" data-id="p4" data-name="Holographic Visor" data-price="129">
<div className="relative">
<img alt="Holographic Visor" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check"></i>
              Аватар
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Holographic Visor</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 129</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p4">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="limited" data-id="p5" data-name="Classic Fedora" data-price="549">
<div className="relative">
<img alt="Classic Fedora" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="badge-check"></i>
              Limited
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Classic Fedora</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 549</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p5">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="ugc" data-id="p6" data-name="Neon Katana" data-price="299">
<div className="relative">
<img alt="Neon Katana" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Neon Katana</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 299</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p6">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="bundle" data-id="p7" data-name="Cyber Runner Set" data-price="1099">
<div className="relative">
<img alt="Cyber Runner Set" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-violet-400" data-lucide="package"></i>
              Сет
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Cyber Runner Set</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 1 099</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p7">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="avatar" data-id="p8" data-name="Prismatic Aura" data-price="219">
<div className="relative">
<img alt="Prismatic Aura" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check"></i>
              Аватар
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Prismatic Aura</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 219</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p8">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="ugc" data-id="p9" data-name="Galaxy Scarf" data-price="179">
<div className="relative">
<img alt="Galaxy Scarf" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="tag"></i>
              UGC
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Galaxy Scarf</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 179</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p9">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="avatar" data-id="p10" data-name="Plasma Headphones" data-price="259">
<div className="relative">
<img alt="Plasma Headphones" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check"></i>
              Аватар
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Plasma Headphones</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 259</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p10">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="limited" data-id="p11" data-name="Emerald Crown" data-price="799">
<div className="relative">
<img alt="Emerald Crown" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur text-[11px]">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="badge-check"></i>
              Limited
            </div>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Emerald Crown</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 799</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p11">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
<div className="product-card group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition overflow-hidden" data-category="ugc" data-id="p12" data-name="Neon Runner Shoes" data-price="139">
<div className="relative">
<img alt="Neon Runner Shoes" className="w-full h-36 sm:h-40 object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1280&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<div className="text-sm font-medium tracking-tight line-clamp-1">Neon Runner Shoes</div>
<div className="mt-1 flex items-center justify-between">
<div className="text-[13px] text-white/70" data-role="price">₽ 139</div>
<button className="add-to-cart inline-flex items-center gap-1.5 text-[12px] px-2 py-1 rounded-md bg-white text-black hover:bg-white/90 transition" data-id="p12">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                В корзину
              </button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-40 hidden" id="cart-drawer">
<div className="absolute inset-0 bg-black/50"></div>
<aside className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-[#0F131A] ring-1 ring-white/10 shadow-2xl flex flex-col">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<h3 className="text-lg font-semibold tracking-tight">Корзина</h3>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10" id="cart-close-btn">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto divide-y divide-white/10" id="cart-items"></div>
<div className="p-4 border-t border-white/10 space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Итого</span>
<span className="font-medium tracking-tight" id="cart-total">₽ 0</span>
</div>
<button className="w-full h-11 rounded-md bg-white text-black hover:bg-white/90 transition font-medium" id="checkout-btn">Оплатить</button>
<p className="text-[12px] text-white/50">Оплата безопасна. Доставка предметов — мгновенно после подтверждения.</p>
</div>
</aside>
</div>

<div className="fixed inset-0 z-40 hidden" id="profile-modal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute inset-x-0 top-0 sm:top-1/2 sm:-translate-y-1/2 mx-auto w-full sm:max-w-4xl bg-[#0F131A] ring-1 ring-white/10 rounded-none sm:rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="user-round"></i>
<h3 className="text-lg font-semibold tracking-tight">Профиль</h3>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10" id="profile-close-btn">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4 sm:p-6">

<div className="grid md:grid-cols-2 gap-4" id="auth-view">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<h4 className="text-base font-semibold tracking-tight">Вход через Telegram</h4>
<p className="mt-1 text-sm text-white/70">Авторизуйтесь через официальный виджет Telegram. Данные верифицируются на сервере.</p>
<div className="mt-4" id="tg-login-widget"></div>
<p className="mt-3 text-[12px] text-white/50">Нажимая «Войти», вы принимаете условия сервиса и политику конфиденциальности.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<h4 className="text-base font-semibold tracking-tight">Преимущества аккаунта</h4>
<ul className="mt-2 space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i> Синхронизация покупок и инвентаря</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i> Ускоренная доставка предметов</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i> Кэшбэк и промо-акции</li>
</ul>
</div>
</div>

<div className="hidden" id="profile-view">
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-12 h-12 rounded-full ring-1 ring-white/10 object-cover" id="profile-avatar" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight" id="profile-name">Пользователь</div>
<div className="text-xs text-white/60" id="profile-username">@username</div>
</div>
</div>
<div className="sm:ml-auto flex items-center gap-2">
<div className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center gap-2">
<i className="w-4 h-4 text-white/70" data-lucide="wallet"></i>
<span className="text-sm font-medium tracking-tight" id="balance-amount-prof">₽ 0</span>
</div>
<button className="h-10 px-3 rounded-md bg-white text-black hover:bg-white/90 transition text-sm font-medium" id="topup-open-btn-prof">Пополнить</button>
<button className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition text-sm" id="logout-btn">Выйти</button>
</div>
</div>
<div className="mt-6">
<div className="flex items-center gap-2 border-b border-white/10">
<button className="profile-tab px-3 py-2 text-sm border-b-2 border-white text-white" data-tab="overview">Обзор</button>
<button className="profile-tab px-3 py-2 text-sm text-white/70 hover:text-white" data-tab="orders">Заказы</button>
<button className="profile-tab px-3 py-2 text-sm text-white/70 hover:text-white" data-tab="payments">Платежи</button>
<button className="profile-tab px-3 py-2 text-sm text-white/70 hover:text-white" data-tab="security">Безопасность</button>
</div>
<div className="pt-4 grid md:grid-cols-3 gap-4" id="tab-overview">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-white/70">Последняя покупка</div>
<div className="mt-1 text-base font-medium tracking-tight" id="last-order">—</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-white/70">Всего потрачено</div>
<div className="mt-1 text-base font-medium tracking-tight" id="spent-total">₽ 0</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-white/70">Бонусы</div>
<div className="mt-1 text-base font-medium tracking-tight">Скоро</div>
</div>
<div className="md:col-span-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<h4 className="text-sm font-medium tracking-tight">Активность</h4>
<p className="text-xs text-white/60">Статистика пополнений и покупок</p>
<div className="mt-3">
<div className="relative h-40">
<div className="w-full h-full">
<div className="w-full h-full"><canvas id="activityChart"></canvas></div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden pt-4" id="tab-orders">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-2 border-b border-white/10 text-sm text-white/70">История заказов</div>
<div className="divide-y divide-white/10" id="orders-list">
<div className="px-4 py-4 text-sm text-white/50">Пока нет заказов</div>
</div>
</div>
</div>
<div className="hidden pt-4" id="tab-payments">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-2 border-b border-white/10 text-sm text-white/70">История пополнений</div>
<div className="divide-y divide-white/10" id="payments-list">
<div className="px-4 py-4 text-sm text-white/50">Пополнений ещё не было</div>
</div>
</div>
</div>
<div className="hidden pt-4 grid md:grid-cols-2 gap-4" id="tab-security">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Двухфакторная аутентификация</div>
<p className="text-xs text-white/60">Добавьте дополнительный уровень защиты</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="2fa-toggle" type="checkbox"/>
<div className="w-10 h-6 bg-white/10 peer-checked:bg-emerald-500 rounded-full relative transition">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-4"></div>
</div>
</label>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Уведомления</div>
<p className="text-xs text-white/60">Получать оповещения о покупках</p>
</div>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="notif-toggle" type="checkbox"/>
<div className="w-10 h-6 bg-white/10 peer-checked:bg-emerald-500 rounded-full relative transition">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-4"></div>
</div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="topup-modal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute inset-x-0 top-0 sm:top-1/2 sm:-translate-y-1/2 mx-auto w-full sm:max-w-md bg-[#0F131A] ring-1 ring-white/10 rounded-none sm:rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="wallet"></i>
<h3 className="text-lg font-semibold tracking-tight">Пополнить баланс</h3>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10" id="topup-close-btn">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4 sm:p-5 space-y-4">
<div>
<label className="text-sm text-white/70">Сумма пополнения (₽)</label>
<div className="mt-1 relative">
<input className="w-full h-11 rounded-md bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 px-3 text-sm" id="topup-amount" min="50" placeholder="Например, 500" step="50" type="number"/>
<div className="mt-2 flex gap-2">
<button className="preset-amount px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs" data-value="250">+250</button>
<button className="preset-amount px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs" data-value="500">+500</button>
<button className="preset-amount px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs" data-value="1000">+1000</button>
</div>
</div>
</div>
<div>
<label className="text-sm text-white/70">Провайдер оплаты</label>
<div className="mt-2 grid grid-cols-4 gap-2">
<label className="relative">
<input checked="" className="peer sr-only" name="paymethod" type="radio" value="stripe"/>
<div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10 peer-checked:ring-white/30 peer-checked:bg-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="credit-card"></i>
<span className="text-xs">Stripe</span>
</div>
</label>
<label className="relative">
<input className="peer sr-only" name="paymethod" type="radio" value="cloudpayments"/>
<div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10 peer-checked:ring-white/30 peer-checked:bg-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-xs">CloudP.</span>
</div>
</label>
<label className="relative">
<input className="peer sr-only" name="paymethod" type="radio" value="yookassa"/>
<div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10 peer-checked:ring-white/30 peer-checked:bg-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="banknote"></i>
<span className="text-xs">ЮKassa</span>
</div>
</label>
<label className="relative">
<input className="peer sr-only" name="paymethod" type="radio" value="crypto"/>
<div className="h-20 rounded-lg bg-white/5 ring-1 ring-white/10 peer-checked:ring-white/30 peer-checked:bg-white/10 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition">
<i className="w-5 h-5" data-lucide="bitcoin"></i>
<span className="text-xs">Crypto</span>
</div>
</label>
</div>
</div>
<button className="w-full h-11 rounded-md bg-white text-black hover:bg-white/90 transition font-medium" id="topup-pay-btn">Оплатить</button>
<p className="text-[12px] text-white/50">После успешной оплаты баланс пополнится автоматически.</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="admin-modal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute inset-x-0 top-0 sm:top-1/2 sm:-translate-y-1/2 mx-auto w-full sm:max-w-2xl bg-[#0F131A] ring-1 ring-white/10 rounded-none sm:rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="settings"></i>
<h3 className="text-lg font-semibold tracking-tight">Админка</h3>
</div>
<button className="p-2 rounded-md hover:bg-white/5 ring-1 ring-white/10/0 hover:ring-white/10" id="admin-close-btn">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4 sm:p-5 space-y-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
<div className="text-sm font-medium tracking-tight">Синхронизация цен</div>
</div>
<p className="mt-1 text-xs text-white/60">Подтянуть цены с провайдера и обновить карточки.</p>
<div className="mt-3 flex items-center gap-2">
<button className="h-9 px-3 rounded-md bg-white text-black hover:bg-white/90 text-sm font-medium" id="admin-sync-prices">Обновить цены</button>
<button className="h-9 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm" id="admin-reindex">Реиндекс каталога</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="tags"></i>
<div className="text-sm font-medium tracking-tight">Категории</div>
</div>
<div className="mt-3 flex flex-col sm:flex-row gap-2">
<input className="flex-1 h-10 rounded-md bg-white/5 ring-1 ring-white/10 px-3 text-sm" id="admin-cat-title" placeholder="Название (например, Шапки)" type="text"/>
<input className="flex-1 h-10 rounded-md bg-white/5 ring-1 ring-white/10 px-3 text-sm" id="admin-cat-slug" placeholder="Слаг (например, head)" type="text"/>
<button className="h-10 px-3 rounded-md bg-white text-black hover:bg-white/90 text-sm font-medium" id="admin-add-category">Добавить</button>
</div>
<p className="mt-2 text-[12px] text-white/50">Категория добавится в блок фильтров и станет доступной для фильтрации.</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="server-cog"></i>
<div className="text-sm font-medium tracking-tight">Импорт/Синк</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="h-9 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm" id="admin-sync-catalog">Синхронизировать каталог</button>
<button className="h-9 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-sm" id="admin-flush-cache">Очистить кэш</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="px-3 py-2 rounded-md bg-white text-black text-sm shadow">
<span id="toast-text">Добавлено в корзину</span>
</div>
</div>

<footer className="mt-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10 text-white text-sm tracking-tight font-medium">R</div>
<span className="text-sm text-white/70">© 2025 RVX. Все права защищены.</span>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-white/70 hover:text-white" href="#">Поддержка</a>
<a className="text-white/70 hover:text-white" href="#">Правила</a>
<a className="text-white/70 hover:text-white" href="#">Конфиденциальность</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
