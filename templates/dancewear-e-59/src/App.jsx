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



      document.addEventListener('DOMContentLoaded', () => {
        // Icons
        if (window.lucide) lucide.createIcons();

        // Year
        const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

        // Spotlight cursor
        const spot = document.getElementById('spotlight');
        if (spot) {
          spot.style.background = 'radial-gradient(180px 180px at -100px -100px, rgba(255,255,255,0.12), transparent 60%)';
          window.addEventListener('pointermove', (e) => {
            spot.style.background = \`radial-gradient(180px 180px at \${e.clientX}px \${e.clientY}px, rgba(255,255,255,0.16), transparent 60%)\`;
          }, { passive: true });
        }

        // Mobile menu
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileBtn?.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
        mobileMenu?.addEventListener('click', (e) => { if (e.target?.dataset?.close === 'mobileMenu') mobileMenu.classList.add('hidden'); });

        // Search suggestions
        const sInput = document.getElementById('searchInput');
        const sSuggest = document.getElementById('searchSuggest');
        if (sInput && sSuggest) {
          sInput.addEventListener('focus', () => sSuggest.classList.remove('hidden'));
          sInput.addEventListener('blur', () => setTimeout(() => sSuggest.classList.add('hidden'), 120));
        }

        // Quick view
        const qv = document.getElementById('quickView');
        document.querySelectorAll('[data-quickview="open"]').forEach(btn => {
          btn.addEventListener('click', () => qv.classList.remove('hidden'));
        });
        qv?.addEventListener('click', (e) => { if (e.target?.dataset?.close === 'quickView') qv.classList.add('hidden'); });

        // Size guide
        const sg = document.getElementById('sizeGuide');
        document.getElementById('openSizeGuide')?.addEventListener('click', () => sg.classList.remove('hidden'));
        sg?.addEventListener('click', (e) => { if (e.target?.dataset?.close === 'sizeGuide') sg.classList.add('hidden'); });

        // Filters drawer (mobile)
        const filtersDrawer = document.getElementById('filtersDrawer');
        document.getElementById('mobileFilters')?.addEventListener('click', () => filtersDrawer.classList.remove('hidden'));
        filtersDrawer?.addEventListener('click', (e) => { if (e.target?.dataset?.close === 'filtersDrawer') filtersDrawer.classList.add('hidden'); });

        // Wishlist toggle
        document.querySelectorAll('[data-wishlist="toggle"]').forEach(btn => {
          btn.addEventListener('click', () => {
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', (!pressed).toString());
            btn.classList.toggle('bg-rose-100');
          });
        });

        // Gallery thumbs
        const mainImg = document.getElementById('pdMain');
        document.querySelectorAll('[data-gallery-thumb]').forEach(th => {
          th.addEventListener('click', () => {
            document.querySelectorAll('[data-gallery-thumb][data-active]').forEach(a => a.removeAttribute('data-active'));
            th.setAttribute('data-active', 'true');
            const src = th.getAttribute('data-src');
            if (src && mainImg) {
              mainImg.style.opacity = '0';
              setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 150);
            }
          });
        });

        // Product options
        function bindOption(group) {
          document.querySelectorAll(\`[data-option="\${group}"]\`).forEach(opt => {
            opt.addEventListener('click', () => {
              document.querySelectorAll(\`[data-option="\${group}"][data-active]\`).forEach(a => a.removeAttribute('data-active'));
              opt.setAttribute('data-active', 'true');
              if (group === 'color') {
                const v = opt.getAttribute('data-value');
                const l = document.getElementById('pdColorLabel'); if (l && v) l.textContent = v;
              }
            });
          });
        }
        bindOption('color'); bindOption('size');

        // Qty stepper
        const qty = document.getElementById('pdQty');
        document.querySelector('[data-qty="inc"]')?.addEventListener('click', () => { qty.value = Math.max(1, (+qty.value || 1) + 1); });
        document.querySelector('[data-qty="dec"]')?.addEventListener('click', () => { qty.value = Math.max(1, (+qty.value || 1) - 1); });

        // Cart logic (simple demo)
        const cartDrawer = document.getElementById('cartDrawer');
        const cartItems = document.getElementById('cartItems');
        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartCount = document.getElementById('cartCount');
        let subtotal = 0, count = 0;
        function openCart() { cartDrawer.classList.remove('hidden'); }
        function closeCart(e) { if (e?.target?.dataset?.close === 'cartDrawer') cartDrawer.classList.add('hidden'); }
        document.getElementById('openCart')?.addEventListener('click', openCart);
        cartDrawer?.addEventListener('click', closeCart);

        function addItem(name, price, color, size, img, qty) {
          const item = document.createElement('div');
          item.className = 'flex gap-3 p-3 rounded-lg border border-neutral-200';
          item.innerHTML = \`
            <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="" class="w-16 h-16 object-cover rounded-md border border-neutral-200"/>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div class="text-[14px] font-medium">\${name}</div>
                <button class="p-1 rounded-md border border-neutral-200 hover:bg-neutral-50" aria-label="Remove"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
              </div>
              <div class="text-[12px] text-neutral-600 mt-0.5">Color: \${color} • Size: \${size}</div>
              <div class="mt-2 flex items-center justify-between">
                <div class="text-[12px] text-neutral-600">Qty: \${qty}</div>
                <div class="text-[14px]">\${(price * qty).toLocaleString(undefined,{style:'currency',currency:'USD'})}</div>
              </div>
            </div>\`;
          cartItems?.appendChild(item);
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          subtotal += price * qty; count += qty;
          if (cartSubtotal) cartSubtotal.textContent = subtotal.toLocaleString(undefined,{style:'currency',currency:'USD'});
          if (cartCount) cartCount.textContent = count.toString();
          const emptyMsg = cartItems?.querySelector('.text-neutral-600'); emptyMsg?.remove();
          item.querySelector('button')?.addEventListener('click', () => {
            cartItems.removeChild(item);
            subtotal -= price * qty; count -= qty;
            cartSubtotal.textContent = subtotal.toLocaleString(undefined,{style:'currency',currency:'USD'});
            cartCount.textContent = Math.max(0, count).toString();
            if (!cartItems.children.length) {
              const msg = document.createElement('div'); msg.className = 'text-[14px] text-neutral-600'; msg.textContent = 'Your cart is empty.'; cartItems.appendChild(msg);
            }
          });
        }

        document.getElementById('addToCart')?.addEventListener('click', () => {
          const color = document.querySelector('[data-option="color"][data-active]')?.getAttribute('data-value') || 'Rose';
          const size = document.querySelector('[data-option="size"][data-active]')?.getAttribute('data-value') || 'S';
          const q = parseInt(document.getElementById('pdQty').value || '1', 10);
          addItem('Signature Leotard', 68, color, size, document.getElementById('pdMain')?.src || '', q);
          openCart();
        });
        document.getElementById('buyNow')?.addEventListener('click', () => {
          document.getElementById('addToCart')?.click();
        });
        document.getElementById('qvAdd')?.addEventListener('click', () => {
          addItem('Signature Leotard', 68, 'Rose', 'S', document.getElementById('qvImg')?.src || '', 1);
          document.getElementById('quickView')?.classList.add('hidden');
          openCart();
        });

        // Filter chips (demo only)
        const activeFilters = document.getElementById('activeFilters');
        function addFilterChip(group, value) {
          const chip = document.createElement('button');
          chip.className = 'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-neutral-200 text-[12px]';
          chip.innerHTML = \`\${group}: \${value} <i data-lucide="x" class="w-3.5 h-3.5"></i>\`;
          chip.dataset.group = group; chip.dataset.value = value;
          chip.addEventListener('click', () => chip.remove());
          activeFilters?.appendChild(chip);
          if (window.lucide) lucide.createIcons();
        }
        document.querySelectorAll('[data-filter]').forEach(el => {
          el.addEventListener('click', (e) => {
            const group = el.getAttribute('data-filter'); const value = el.getAttribute('value') || el.textContent?.trim();
            if (!group || !value) return;
            addFilterChip(group, value);
          });
          if (el.type === 'checkbox') {
            el.addEventListener('change', () => {
              if (el.checked) addFilterChip(el.getAttribute('data-filter'), el.value);
            });
          }
        });
        document.getElementById('clearFilters')?.addEventListener('click', () => { activeFilters.innerHTML = ''; });

        // Close drawers by button
        document.querySelectorAll('[data-close]').forEach(btn => {
          btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-close');
            document.getElementById(target)?.classList.add('hidden');
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
      

<div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[5] hidden md:block" id="spotlight" style={{mixBlend: 'overlay', transition: 'opacity .3s ease'}}></div>

<div className="w-full bg-neutral-950 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-white/80">
<i className="w-4 h-4" data-lucide="megaphone"></i>
<span className="tracking-tight">Free shipping over $75 • Every purchase supports student scholarships</span>
</span>
</div>
<div className="hidden md:flex items-center gap-6 text-white/70">
<span className="inline-flex items-center gap-1 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="badge-check"></i>
            501(c)(3) nonprofit
          </span>
<span className="inline-flex items-center gap-1 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="shield"></i>
            Secure checkout
          </span>
<a className="inline-flex items-center gap-1 hover:text-white transition-colors" href="#policies">
<i className="w-4 h-4" data-lucide="undo-2"></i>
            Easy returns
          </a>
</div>
</div>
<div className="border-t border-white/10"></div>
</div>

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

<button aria-label="Open menu" className="md:hidden p-2 rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>

<a className="flex items-center gap-3 group" href="#home">

<img alt="Debbie Allen Dance Academy logo" className="h-9 w-auto object-contain" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="leading-tight">
<div className="text-[17px] sm:text-[18px] font-semibold tracking-tight group-hover:text-neutral-700 transition-colors" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Debbie Allen</div>
<div className="text-[12px] text-neutral-500 -mt-0.5">Dance Academy • Shop</div>
</div>
</a>

<nav className="hidden md:flex items-center gap-6">
<div className="relative group">
<a className="text-[15px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#collection">Shop</a>

<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-8 w-[760px] bg-white border border-neutral-200 rounded-xl shadow-xl p-6">
<div className="grid grid-cols-3 gap-6">
<div>
<div className="text-sm font-medium text-neutral-900 tracking-tight">Featured</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="flex items-center justify-between text-neutral-700 hover:text-neutral-900" href="#collection">New Arrivals <i className="w-4 h-4" data-lucide="arrow-right"></i></a></li>
<li><a className="flex items-center justify-between text-neutral-700 hover:text-neutral-900" href="#collection">Bestsellers <i className="w-4 h-4" data-lucide="arrow-right"></i></a></li>
<li><a className="flex items-center justify-between text-neutral-700 hover:text-neutral-900" href="#collection">On Sale <i className="w-4 h-4" data-lucide="arrow-right"></i></a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-neutral-900 tracking-tight">Categories</div>
<ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
<li><a className="block text-neutral-700 hover:text-neutral-900" href="#collection">Apparel</a></li>
<li><a className="block text-neutral-700 hover:text-neutral-900" href="#collection">Footwear</a></li>
<li><a className="block text-neutral-700 hover:text-neutral-900" href="#collection">Warm-ups</a></li>
<li><a className="block text-neutral-700 hover:text-neutral-900" href="#collection">Accessories</a></li>
</ul>
</div>
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4">
<div className="text-sm text-neutral-600">Every order supports scholarships and access to world-class dance education.</div>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-80 transition-opacity" href="#mission">
                    Learn more <i className="w-4 h-4" data-lucide="sparkles"></i>
</a>
</div>
</div>
</div>
</div>
<a className="text-[15px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#collection">New</a>
<a className="text-[15px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#mission">Mission</a>
<a className="text-[15px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#stories">Stories</a>
<a className="text-[15px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-2">
<div className="relative hidden md:block">
<input className="w-56 rounded-md border border-neutral-200 bg-white px-9 py-2 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-neutral-300 transition-all" id="searchInput" placeholder="Search" type="search"/>
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search"></i>

<div className="hidden absolute mt-2 w-[320px] bg-white border border-neutral-200 rounded-xl shadow-lg p-2" id="searchSuggest">
<div className="text-[12px] px-2 py-1 text-neutral-500">Suggested</div>
<ul className="divide-y divide-neutral-100">
<li><a className="flex items-center justify-between px-3 py-2 text-sm hover:bg-neutral-50 rounded-md" href="#collection">Leotards <i className="w-4 h-4" data-lucide="arrow-up-right"></i></a></li>
<li><a className="flex items-center justify-between px-3 py-2 text-sm hover:bg-neutral-50 rounded-md" href="#collection">Ballet Shoes <i className="w-4 h-4" data-lucide="arrow-up-right"></i></a></li>
<li><a className="flex items-center justify-between px-3 py-2 text-sm hover:bg-neutral-50 rounded-md" href="#collection">Warm-ups <i className="w-4 h-4" data-lucide="arrow-up-right"></i></a></li>
</ul>
</div>
</div>
<a aria-label="Account" className="hidden md:inline-flex p-2 rounded-md border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-colors" href="#account"><i className="w-5 h-5" data-lucide="user"></i></a>
<button aria-label="Cart" className="relative p-2 rounded-md border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-colors" id="openCart">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 text-[11px] min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-neutral-900 text-white" id="cartCount">0</span>
</button>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/30" data-close="mobileMenu"></div>
<div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white border-r border-neutral-200 p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<img alt="DADA logo" className="h-8 w-auto object-contain" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="text-[15px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>DADA • Shop</div>
</div>
<button className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50" data-close="mobileMenu"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="divide-y divide-neutral-200">
<a className="block py-3" href="#collection">Shop</a>
<a className="block py-3" href="#collection">New</a>
<a className="block py-3" href="#mission">Mission</a>
<a className="block py-3" href="#stories">Stories</a>
<a className="block py-3" href="#contact">Contact</a>
</div>
<div className="mt-4">
<div className="relative">
<input className="w-full rounded-md border border-neutral-200 bg-white px-10 py-2 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Search" type="search"/>
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search"></i>
</div>
</div>
<div className="mt-auto flex items-center gap-2">
<a className="flex-1 text-center py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 transition" href="#account">Account</a>
<button className="flex-1 text-center py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 transition" data-close="mobileMenu">Close</button>
</div>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="relative h-[78vh] sm:h-[86vh] overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1518364538800-6bae3c9a2e96?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/2606890/2606890-uhd_4096_2160_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

<div className="absolute inset-0 z-[8] flex items-center justify-center pointer-events-none">

<img alt="Centered feature" className="h-16 sm:h-20 md:h-24 opacity-95 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>

<div className="absolute inset-0"></div>
<div className="z-10 h-full bg-[url(https://images.unsplash.com/photo-1719573590033-c1924865a915?w=3840&amp;q=80)] bg-cover relative">
<div className="sm:px-6 lg:px-8 flex h-full max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center">
<div className="max-w-2xl text-white">
<h1 className="text-[40px] sm:text-[54px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif', letterSpacing: '-0.02em'}}>Move with purpose. Wear the legacy.</h1>
<p className="mt-3 text-white/80 text-[16px] sm:text-[17px]">Premium dancewear and essentials crafted for performance—supporting scholarships and access to world-class training.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-[15px] font-medium hover:bg-neutral-100 hover:-translate-y-0.5 transition-all" href="#collection">
                  Shop New Arrivals <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-5 py-3 text-[15px] hover:bg-white/10 hover:-translate-y-0.5 transition-all" href="#mission">
                  Our Mission <i className="w-4 h-4" data-lucide="heart"></i>
</a>
</div>
<div className="mt-6 flex items-center gap-6 text-white/70 text-sm">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="sparkles"></i> Scholarship impact</span>
<span className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="shield-check"></i> Quality guaranteed</span>
<span className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="truck"></i> Free shipping $75+</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute right-12 top-16 w-24 h-24 rounded-full border border-white/20 animate-pulse"></div>
<div className="absolute left-10 bottom-16 w-10 h-10 border-2 border-white/30 rounded-sm rotate-45"></div>
</div>
</div>
</section>

<section className="relative">
<div className="bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Bestsellers</h2>
<p className="text-neutral-600 mt-1">Studio-tested, stage-ready.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-80" href="#collection">
              View all <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<button aria-label="Add to wishlist" className="absolute z-10 top-3 right-3 p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white" data-wishlist="toggle">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Signature Leotard" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.06] group-hover:rotate-[0.8deg]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Signature Leotard Back" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-rose-600 text-white">New</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between gap-2">
<h3 className="text-[15px] font-medium tracking-tight text-neutral-900">Signature Leotard</h3>
<div className="text-[14px] text-neutral-900">$68</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Rose • XS–XL</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-[12px] text-neutral-600">In stock</span>
</div>
</div>
</a>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<button aria-label="Add to wishlist" className="absolute z-10 top-3 right-3 p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white" data-wishlist="toggle">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Studio Warm-Up Top" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.06] group-hover:-rotate-[0.8deg]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Studio Warm-Up Top Back" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-amber-500 text-white">Limited</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between gap-2">
<h3 className="text-[15px] font-medium tracking-tight text-neutral-900">Studio Warm-Up Top</h3>
<div className="text-[14px] text-neutral-900">$82</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Black • XS–XL</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-amber-500"></div>
<span className="text-[12px] text-neutral-600">Only 3 left!</span>
</div>
</div>
</a>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<button aria-label="Add to wishlist" className="absolute z-10 top-3 right-3 p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white" data-wishlist="toggle">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Canvas Ballet Shoes" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Canvas Ballet Shoes Alt" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-neutral-900 text-white">Bestseller</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between gap-2">
<h3 className="text-[15px] font-medium tracking-tight text-neutral-900">Canvas Ballet Shoes</h3>
<div className="text-[14px] text-neutral-900">$42</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Blush • 4–10</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-[12px] text-neutral-600">In stock</span>
</div>
</div>
</a>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<button aria-label="Add to wishlist" className="absolute z-10 top-3 right-3 p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white" data-wishlist="toggle">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Performance Tights" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.06] group-hover:rotate-[0.6deg]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Performance Tights Alt" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-emerald-600 text-white">Bundle &amp; Save</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between gap-2">
<h3 className="text-[15px] font-medium tracking-tight text-neutral-900">Performance Tights</h3>
<div className="text-[14px] text-neutral-900">$26</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Sand • S–XL</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-[12px] text-neutral-600">In stock</span>
</div>
</div>
</a>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex items-end justify-between">
<h2 className="text-[26px] sm:text-[30px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Shop by category</h2>
<a className="hidden md:inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-80" href="#collection">Explore all <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative overflow-hidden rounded-xl border border-neutral-200" href="#collection">
<div className="relative h-56 bg-fixed">
<img alt="Apparel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-4 text-white">
<div className="text-[18px] font-medium tracking-tight">Apparel</div>
<div className="text-[13px] text-white/80">Leotards, tops, bottoms</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-neutral-200" href="#collection">
<div className="relative h-56 bg-fixed">
<img alt="Footwear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-4 text-white">
<div className="text-[18px] font-medium tracking-tight">Footwear</div>
<div className="text-[13px] text-white/80">Ballet, jazz, contemporary</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-neutral-200" href="#collection">
<div className="relative h-56 bg-fixed">
<img alt="Warm-ups" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-4 text-white">
<div className="text-[18px] font-medium tracking-tight">Warm-ups</div>
<div className="text-[13px] text-white/80">Layers for studio &amp; stage</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-xl border border-neutral-200" href="#collection">
<div className="relative h-56 bg-fixed">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
</div>
<div className="absolute bottom-0 p-4 text-white">
<div className="text-[18px] font-medium tracking-tight">Accessories</div>
<div className="text-[13px] text-white/80">Bags, bottles, gear</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="bg-neutral-50 border-y border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-8">

<div className="rounded-2xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-5">
<div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>New Arrivals</h3>
<p className="text-neutral-600 text-sm">Fresh styles for the season</p>
</div>
<a className="text-[14px] inline-flex items-center gap-2 text-neutral-900 hover:opacity-80" href="#collection">Shop now <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 pt-0">
<img alt="" className="rounded-lg border border-neutral-200 hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="rounded-lg border border-neutral-200 hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="" className="rounded-lg border border-neutral-200 hover:scale-[1.02] transition hidden sm:block" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-5">
<div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Seasonal Sale</h3>
<p className="text-neutral-600 text-sm">Up to 30% off select styles</p>
</div>
<a className="text-[14px] inline-flex items-center gap-2 text-neutral-900 hover:opacity-80" href="#collection">Shop sale <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 pt-0">
<img alt="" className="rounded-lg border border-neutral-200 hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1484516758160-69878111a911?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="rounded-lg border border-neutral-200 hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="rounded-lg border border-neutral-200 hover:scale-[1.02] transition hidden sm:block" onerror="this.style.display='none'" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="grid md:grid-cols-2 gap-8 items-start">
<div>
<h3 className="text-[26px] sm:text-[30px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>What dancers are saying</h3>
<div className="mt-6 space-y-5">
<div className="p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[15px] font-medium tracking-tight">Alyssa M.</div>
<div className="text-[12px] text-neutral-500">Company Dancer</div>
</div>
</div>
<p className="mt-3 text-[14px] text-neutral-700">The quality is unreal. Pieces move with me and the mission moves me even more.</p>
<div className="mt-3 flex text-amber-500"><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i></div>
</div>
<div className="p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 transition">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[15px] font-medium tracking-tight">Marcus J.</div>
<div className="text-[12px] text-neutral-500">Alumni</div>
</div>
</div>
<p className="mt-3 text-[14px] text-neutral-700">I graduated on scholarship. Every purchase helps the next student take the stage.</p>
<div className="mt-3 flex text-amber-500"><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i></div>
</div>
</div>
</div>
<div>
<h3 className="text-[18px] font-medium tracking-tight">From our community</h3>
<div className="mt-3 grid grid-cols-3 gap-2">
<img alt="" className="h-28 w-full object-cover rounded-lg border border-neutral-200" src="https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-28 w-full object-cover rounded-lg border border-neutral-200" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-28 w-full object-cover rounded-lg border border-neutral-200" src="https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-28 w-full object-cover rounded-lg border border-neutral-200" src="https://images.unsplash.com/photo-1483918793747-5adbf82956c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-28 w-full object-cover rounded-lg border border-neutral-200" src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-28 w-full object-cover rounded-lg border border-neutral-200" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="mission">
<div className="relative bg-neutral-900 text-white">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_40%)]"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Every purchase powers possibility</h2>
<p className="mt-3 text-white/80 text-[15px]">We are a nonprofit institution dedicated to transforming lives through dance. Your order funds scholarships, outreach, and access to world-class training—opening doors for the next generation of artists.</p>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-[22px] font-semibold tracking-tight">1,200+</div>
<div className="text-[12px] text-white/70">Scholarships awarded</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-[22px] font-semibold tracking-tight">30+</div>
<div className="text-[12px] text-white/70">Community programs</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-[22px] font-semibold tracking-tight">100%</div>
<div className="text-[12px] text-white/70">Mission-driven</div>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-[15px] font-medium hover:bg-neutral-100 transition" href="#stories">Student Stories <i className="w-4 h-4" data-lucide="play"></i></a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-5 py-3 text-[15px] hover:bg-white/10 transition" href="#about">About the Academy <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="" className="rounded-xl border border-white/10 object-cover h-72 w-full hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="" className="rounded-xl border border-white/10 object-cover h-72 w-full mt-8 hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="rounded-xl border border-white/10 object-cover h-64 w-full col-span-2 hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="rounded-2xl border border-neutral-200 p-6">
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Join our list—get 10% off</h3>
<p className="mt-1 text-neutral-600 text-[14px]">Be the first to know about new drops, restocks, and performances.</p>
<form className="mt-4 flex gap-3" onsubmit="event.preventDefault(); this.reset(); alert('Thanks for joining! Check your inbox for the code.');">
<input className="flex-1 rounded-md border border-neutral-200 px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Your email" required="" type="email"/>
<button className="rounded-md bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 transition">Subscribe</button>
</form>
<div className="mt-3 text-[12px] text-neutral-500">We respect your privacy. Unsubscribe anytime.</div>
</div>
<div className="rounded-2xl border border-neutral-200 p-6">
<h3 className="text-[18px] font-medium tracking-tight">Shop with confidence</h3>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-800" data-lucide="lock"></i>
<div>
<div className="text-[14px] font-medium tracking-tight">Secure Payments</div>
<div className="text-[13px] text-neutral-600">SSL, major cards, Shop Pay</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-800" data-lucide="badge-check"></i>
<div>
<div className="text-[14px] font-medium tracking-tight">Nonprofit</div>
<div className="text-[13px] text-neutral-600">501(c)(3) verified</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-800" data-lucide="undo-2"></i>
<div>
<div className="text-[14px] font-medium tracking-tight">Easy Returns</div>
<div className="text-[13px] text-neutral-600">30-day window</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-800" data-lucide="truck"></i>
<div>
<div className="text-[14px] font-medium tracking-tight">Fast Shipping</div>
<div className="text-[13px] text-neutral-600">Free over $75</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="collection">
<div className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<nav className="text-[13px] text-neutral-500">
<ol className="flex items-center gap-2">
<li><a className="hover:text-neutral-700" href="#home">Home</a></li>
<li className="text-neutral-300">/</li>
<li className="text-neutral-700">Shop All</li>
</ol>
</nav>
<div className="mt-4 flex items-end justify-between">
<div>
<h2 className="text-[26px] sm:text-[30px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Shop All</h2>
<p className="text-neutral-600 text-[14px]">Filter by category, size, and color.</p>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 text-[13px]">
<span className="text-neutral-500">Sort:</span>
<select className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-rose-200">
<option>Bestselling</option>
<option>Newest</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
<button className="sm:hidden inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50" id="mobileFilters">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i> Filters
              </button>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">

<aside className="md:col-span-1 rounded-xl border border-neutral-200 p-4 h-max" id="filters">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight">Filters</div>
<button className="text-[12px] text-neutral-500 hover:text-neutral-800" id="clearFilters">Clear all</button>
</div>
<div className="mt-3 flex flex-wrap gap-2" id="activeFilters"></div>
<div className="mt-4 space-y-3">
<details className="rounded-lg border border-neutral-200 p-3" open="">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Category</summary>
<div className="mt-2 grid grid-cols-2 gap-2 text-[13px]">
<label className="flex items-center gap-2 cursor-pointer"><input className="accent-black" data-filter="category" type="checkbox" value="Apparel"/> Apparel</label>
<label className="flex items-center gap-2 cursor-pointer"><input className="accent-black" data-filter="category" type="checkbox" value="Footwear"/> Footwear</label>
<label className="flex items-center gap-2 cursor-pointer"><input className="accent-black" data-filter="category" type="checkbox" value="Warm-ups"/> Warm-ups</label>
<label className="flex items-center gap-2 cursor-pointer"><input className="accent-black" data-filter="category" type="checkbox" value="Accessories"/> Accessories</label>
</div>
</details>
<details className="rounded-lg border border-neutral-200 p-3">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Size</summary>
<div className="mt-2 flex flex-wrap gap-1">

<button className="px-3 py-1.5 text-[12px] rounded-md border border-neutral-200 hover:border-neutral-300" data-filter="size" value="XS">XS</button>
<button className="px-3 py-1.5 text-[12px] rounded-md border border-neutral-200 hover:border-neutral-300" data-filter="size" value="S">S</button>
<button className="px-3 py-1.5 text-[12px] rounded-md border border-neutral-200 hover:border-neutral-300" data-filter="size" value="M">M</button>
<button className="px-3 py-1.5 text-[12px] rounded-md border border-neutral-200 hover:border-neutral-300" data-filter="size" value="L">L</button>
<button className="px-3 py-1.5 text-[12px] rounded-md border border-neutral-200 hover:border-neutral-300" data-filter="size" value="XL">XL</button>
</div>
</details>
<details className="rounded-lg border border-neutral-200 p-3">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Color</summary>
<div className="mt-3 flex flex-wrap gap-2">
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-black" data-filter="color" value="Black"></button>
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-rose-500" data-filter="color" value="Rose"></button>
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-amber-200" data-filter="color" value="Blush"></button>
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-stone-300" data-filter="color" value="Sand"></button>
</div>
</details>
<details className="rounded-lg border border-neutral-200 p-3">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Price</summary>
<div className="mt-2 flex items-center gap-3">
<input className="w-20 rounded-md border border-neutral-200 px-2 py-1.5 text-[13px]" placeholder="Min" type="number"/>
<span className="text-neutral-400">—</span>
<input className="w-20 rounded-md border border-neutral-200 px-2 py-1.5 text-[13px]" placeholder="Max" type="number"/>
<button className="ml-auto px-3 py-1.5 rounded-md border border-neutral-200 text-[13px] hover:bg-neutral-50">Apply</button>
</div>
</details>
</div>
</aside>

<div className="md:col-span-3">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Zip Warm-Up" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-rose-600 text-white">Sale</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Zip Warm-Up</h3>
<div className="text-[14px]">$68 <span className="text-[12px] text-neutral-400 line-through ml-1">$84</span></div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Black • XS–XL</div>
</div>
</a>
<div className="absolute top-3 right-3 z-10">
<button aria-label="Wishlist" className="p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white"><i className="w-4 h-4" data-lucide="heart"></i></button>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>
<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Studio Jogger" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.06] group-hover:-rotate-[0.6deg]" src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-neutral-900 text-white">Bestseller</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Studio Jogger</h3>
<div className="text-[14px]">$78</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Charcoal • XS–XL</div>
</div>
</a>
<div className="absolute top-3 right-3 z-10">
<button aria-label="Wishlist" className="p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white"><i className="w-4 h-4" data-lucide="heart"></i></button>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>
<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Crossover Top" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-emerald-600 text-white">In stock</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Crossover Top</h3>
<div className="text-[14px]">$52</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Rose • XS–L</div>
</div>
</a>
<div className="absolute top-3 right-3 z-10">
<button aria-label="Wishlist" className="p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white"><i className="w-4 h-4" data-lucide="heart"></i></button>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>
<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all">
<a className="block" href="#product">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Carry Tote" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-amber-500 text-white">Giftable</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Carry Tote</h3>
<div className="text-[14px]">$36</div>
</div>
<div className="mt-1 text-[13px] text-neutral-500">Black</div>
</div>
</a>
<div className="absolute top-3 right-3 z-10">
<button aria-label="Wishlist" className="p-2 rounded-full bg-white/90 border border-neutral-200 hover:bg-white"><i className="w-4 h-4" data-lucide="heart"></i></button>
</div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-white/90 backdrop-blur border border-neutral-200 text-[13px] hover:bg-white transition" data-quickview="open">Quick view</button>
</div>

</div>

<div className="mt-8 flex items-center justify-between">
<div className="text-[13px] text-neutral-500">Showing 1–12 of 48</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="px-3 py-2 rounded-md border border-neutral-200 bg-neutral-900 text-white">1</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50">2</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50">3</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="product">
<div className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<nav className="text-[13px] text-neutral-500">
<ol className="flex items-center gap-2">
<li><a className="hover:text-neutral-700" href="#home">Home</a></li>
<li className="text-neutral-300">/</li>
<li><a className="hover:text-neutral-700" href="#collection">Shop All</a></li>
<li className="text-neutral -300">/</li>
<li className="text-neutral-700">Signature Leotard</li>
</ol>
</nav>
<div className="mt-6 grid md:grid-cols-2 gap-10">

<div>
<div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-200">
<img alt="Signature Leotard - front" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500" id="pdMain" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-3 grid grid-cols-5 gap-2">
<button aria-label="Front view" className="group relative aspect-[4/5] rounded-lg overflow-hidden border border-neutral-200 ring-2 ring-transparent data-[active=true]:ring-neutral-900" data-active="true" data-gallery-thumb="" data-src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80">
<img alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=400&amp;q=80"/>
</button>
<button aria-label="Back view" className="group relative aspect-[4/5] rounded-lg overflow-hidden border border-neutral-200 ring-2 ring-transparent" data-gallery-thumb="" data-src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition" src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</button>
<button aria-label="Detail 1" className="group relative aspect-[4/5] rounded-lg overflow-hidden border border-neutral-200 ring-2 ring-transparent" data-gallery-thumb="" data-src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1200&amp;q=80">
<img alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=500&amp;q=80"/>
</button>
<button aria-label="Detail 2" className="group relative aspect-[4/5] rounded-lg overflow-hidden border border-neutral-200 ring-2 ring-transparent" data-gallery-thumb="" data-src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1200&amp;q=80">
<img alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=500&amp;q=80"/>
</button>
<button aria-label="On body" className="group relative aspect-[4/5] rounded-lg overflow-hidden border border-neutral-200 ring-2 ring-transparent" data-gallery-thumb="" data-src="https://images.unsplash.com/photo-1484516758160-69878111a911?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition" src="https://images.unsplash.com/photo-1484516758160-69878111a911?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>

<div>
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-[28px] sm:text-[32px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Signature Leotard</h1>
<div className="mt-1 flex items-center gap-3 text-sm text-neutral-600">
<div aria-label="Rated 5 out of 5" className="flex text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
</div>
<a className="hover:text-neutral-900 underline underline-offset-4" href="#reviews">42 reviews</a>
</div>
</div>
<div className="shrink-0 text-right">
<div className="text-[18px] font-medium">$68</div>
<div className="text-[12px] text-neutral-500">Free shipping $75+</div>
</div>
</div>
<div className="mt-4 text-[14px] text-neutral-700">
                A breathable, studio-to-stage essential with a supportive fit and elegant lines—crafted to move with you.
              </div>

<div className="mt-6">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium tracking-tight">Color: <span className="text-neutral-600" id="pdColorLabel">Rose</span></div>
</div>
<div className="mt-2 flex items-center gap-2">
<button aria-label="Select Rose" className="w-8 h-8 rounded-full border-2 border-neutral-300 data-[active=true]:border-neutral-900 bg-rose-500" data-active="true" data-option="color" data-value="Rose"></button>
<button aria-label="Select Black" className="w-8 h-8 rounded-full border-2 border-neutral-300 bg-black" data-option="color" data-value="Black"></button>
<button aria-label="Select Blush" className="w-8 h-8 rounded-full border-2 border-neutral-300 bg-amber-200" data-option="color" data-value="Blush"></button>
</div>
</div>

<div className="mt-5">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium tracking-tight">Size</div>
<button className="text-[12px] text-neutral-600 hover:text-neutral-900 underline underline-offset-4" id="openSizeGuide">Size guide</button>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 text-[13px] data-[active=true]:border-neutral-900" data-option="size" data-value="XS">XS</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 text-[13px] data-[active=true]:border-neutral-900" data-active="true" data-option="size" data-value="S">S</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 text-[13px] data-[active=true]:border-neutral-900" data-option="size" data-value="M">M</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 text-[13px] data-[active=true]:border-neutral-900" data-option="size" data-value="L">L</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 text-[13px] data-[active=true]:border-neutral-900 opacity-60 cursor-not-allowed" data-option="size" data-value="XL" disabled="" title="Out of stock">XL</button>
</div>
<div className="mt-2 flex items-center gap-2 text-[12px] text-neutral-600">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div> In stock and ready to ship
                </div>
</div>

<div className="mt-6 flex items-center gap-3">
<div className="inline-flex items-center rounded-md border border-neutral-200 overflow-hidden">
<button aria-label="Decrease quantity" className="px-3 py-2 hover:bg-neutral-50" data-qty="dec"><i className="w-4 h-4" data-lucide="minus"></i></button>
<input aria-label="Quantity" className="w-12 text-center py-2 focus:outline-none" id="pdQty" min="1" type="number" value="1"/>
<button aria-label="Increase quantity" className="px-3 py-2 hover:bg-neutral-50" data-qty="inc"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text px-5 py-3 text-[14px] hover:bg-neutral-800 transition" id="addToCart">
<i className="w-4 h-4" data-lucide="shopping-bag"></i> Add to cart
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 px-4 py-3 text-[14px] hover:bg-neutral-50 transition" id="buyNow">Buy now</button>
<button aria-label="Add to wishlist" className="p-3 rounded-md border border-neutral-200 hover:bg-neutral-50" data-wishlist="toggle"><i className="w-5 h-5" data-lucide="heart"></i></button>
</div>

<ul className="mt-6 grid sm:grid-cols-2 gap-3 text-[14px] text-neutral-700">
<li className="flex items-start gap-3"><i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="feather"></i><span>Four-way stretch, breathable fabric</span></li>
<li className="flex items-start gap-3"><i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="droplets"></i><span>Moisture-wicking and quick-dry</span></li>
<li className="flex items-start gap-3"><i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="scissors"></i><span>Flat seams for comfort</span></li>
<li className="flex items-start gap-3"><i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="recycle"></i><span>Made with recycled fibers</span></li>
</ul>

<div className="mt-6 space-y-3">
<details className="rounded-lg border border-neutral-200 p-4" open="">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Description</summary>
<p className="mt-2 text-[14px] text-neutral-700">Designed with dancers in mind, our Signature Leotard offers a sculpted fit and elegant neckline. The double-lined bodice provides support without sacrificing mobility.</p>
</details>
<details className="rounded-lg border border-neutral-200 p-4">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Fabric &amp; Care</summary>
<ul className="mt-2 list-disc pl-5 text-[14px] text-neutral-700 space-y-1">
<li>78% recycled nylon, 22% spandex</li>
<li>Machine wash cold, lay flat to dry</li>
<li>Do not bleach or iron</li>
</ul>
</details>
<details className="rounded-lg border border-neutral-200 p-4" id="policies">
<summary className="cursor-pointer text-[14px] font-medium tracking-tight">Shipping &amp; Returns</summary>
<div className="mt-2 text-[14px] text-neutral-700">
                    Free standard shipping on orders over $75. Orders ship within 2–3 business days. Returns accepted within 30 days of delivery in original condition.
                  </div>
</details>
</div>

<div className="mt-6 flex items-center gap-2 text-[13px] text-neutral-600">
<span>Share:</span>
<button aria-label="Share to X" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="twitter"></i></button>
<button aria-label="Share to Facebook" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="facebook"></i></button>
<button aria-label="Share link" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="link"></i></button>
</div>
</div>
</div>

<div className="mt-12" id="reviews">
<div className="flex items-center justify-between">
<h3 className="text-[20px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Customer Reviews</h3>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50"><i className="w-4 h-4" data-lucide="pen-line"></i> Write a review</button>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-6">
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center justify-between">
<div className="font-medium text-[14px]">Comfort &amp; Fit</div>
<div className="flex text-amber-500"><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i></div>
</div>
<p className="mt-2 text-[14px] text-neutral-700">Holds beautifully during rehearsals and looks stunning on stage.</p>
<div className="mt-3 text-[12px] text-neutral-500">— Jordan</div>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center justify-between">
<div className="font-medium text-[14px]">Quality</div>
<div className="flex text-amber-500"><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i></div>
</div>
<p className="mt-2 text-[14px] text-neutral-700">Fabric feels premium and supportive. No see-through issues.</p>
<div className="mt-3 text-[12px] text-neutral-500">— Priya</div>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center justify-between">
<div className="font-medium text-[14px]">Value</div>
<div className="flex text-amber-500"><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i></div>
</div>
<p className="mt-2 text-[14px] text-neutral-700">Worth every penny—and I love supporting scholarships.</p>
<div className="mt-3 text-[12px] text-neutral-500">— Elena</div>
</div>
</div>
</div>

<div className="mt-12">
<div className="flex items-end justify-between">
<div>
<h3 className="text-[22px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>You may also like</h3>
<p className="text-neutral-600 text-sm">Mix, match, and move.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-80" href="#collection">View all <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-sm transition">
<a className="block" href="#product">
<div className="relative aspect-[4/5]">
<img alt="Crossover Top" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 text-[12px] px-2 py-1 rounded-md bg-emerald-600 text-white">In stock</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight">Crossover Top</div>
<div className="text-[14px]">$52</div>
</div>
<div className="text-[13px] text-neutral-500 mt-1">Rose • XS–L</div>
</div>
</a>
</div>

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-sm transition">
<a className="block" href="#product">
<div className="relative aspect-[4/5]">
<img alt="Studio Jogger" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight">Studio Jogger</div>
<div className="text-[14px]">$78</div>
</div>
<div className="text-[13px] text-neutral-500 mt-1">Charcoal • XS–XL</div>
</div>
</a>
</div>

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-sm transition">
<a className="block" href="#product">
<div className="relative aspect-[4/5]">
<img alt="Carry Tote" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight">Carry Tote</div>
<div className="text-[14px]">$36</div>
</div>
<div className="text-[13px] text-neutral-500 mt-1">Black</div>
</div>
</a>
</div>

<div className="group relative rounded-xl border border-neutral-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-sm transition">
<a className="block" href="#product">
<div className="relative aspect-[4/5]">
<img alt="Canvas Ballet Shoes" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.06]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight">Canvas Ballet Shoes</div>
<div className="text-[14px]">$42</div>
</div>
<div className="text-[13px] text-neutral-500 mt-1">Blush • 4–10</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="stories">
<div className="bg-neutral-50 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-[26px] sm:text-[30px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Stories from the stage</h2>
<p className="text-neutral-600 text-sm">Scholarship impact, alumni journeys, and behind-the-scenes.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-80" href="#mission">Our mission <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<a className="group rounded-xl border border-neutral-200 overflow-hidden" href="#">
<div className="relative aspect-video">
<img alt="" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-[12px]"><i className="w-3.5 h-3.5" data-lucide="play"></i> Watch</div>
</div>
<div className="p-4">
<div className="text-[15px] font-medium tracking-tight">A day in rehearsal</div>
<div className="text-[13px] text-neutral-600 mt-1">Inside technique class with DADA faculty</div>
</div>
</a>
<a className="group rounded-xl border border-neutral-200 overflow-hidden" href="#">
<div className="relative aspect-video">
<img alt="" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-[12px]"><i className="w-3.5 h-3.5" data-lucide="film"></i> Mini doc</div>
</div>
<div className="p-4">
<div className="text-[15px] font-medium tracking-tight">Scholarship spotlight</div>
<div className="text-[13px] text-neutral-600 mt-1">How your purchase supports access</div>
</div>
</a>
<a className="group rounded-xl border border-neutral-200 overflow-hidden" href="#">
<div className="relative aspect-video">
<img alt="" className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-[12px]"><i className="w-3.5 h-3.5" data-lucide="mic"></i> Interview</div>
</div>
<div className="p-4">
<div className="text-[15px] font-medium tracking-tight">Alumni Q&amp;A</div>
<div className="text-[13px] text-neutral-600 mt-1">From DADA to the world stage</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="bg-white border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="grid md:grid-cols-2 gap-8">
<div>
<h2 className="text-[26px] sm:text-[30px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Contact us</h2>
<p className="mt-1 text-neutral-600 text-[14px]">Questions about sizing, orders, or our mission? We’re here to help.</p>
<div className="mt-6 space-y-3 text-[14px]">
<div className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="mail"></i> support@dada-shop.org</div>
<div className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="phone"></i> (555) 123-4567</div>
<div className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="clock"></i> Mon–Fri, 9am–5pm PT</div>
</div>
</div>
<form className="rounded-2xl border border-neutral-200 p-6 grid gap-3" onsubmit="event.preventDefault(); this.reset(); alert('Thanks! We will get back to you soon.');">
<div className="grid sm:grid-cols-2 gap-3">
<input className="rounded-md border border-neutral-200 px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="First name" required=""/>
<input className="rounded-md border border-neutral-200 px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Last name" required=""/>
</div>
<input className="rounded-md border border-neutral-200 px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Email" required="" type="email"/>
<textarea className="rounded-md border border-neutral-200 px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="How can we help?" required="" rows="4"></textarea>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 transition"><i className="w-4 h-4" data-lucide="send"></i> Send</button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative bg-neutral-950 text-white">
<div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(600px_200px_at_70%_-20%,#fff,transparent),radial-gradient(600px_200px_at_20%_120%,#fff,transparent)]"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="grid md:grid-cols-4 gap-8">
<div className="col-span-2">
<a className="inline-flex items-center gap-3" href="#home">
<img alt="Debbie Allen Dance Academy logo" className="h-9 w-auto object-contain" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="leading-tight">
<div className="text-[18px] font-semibold tracking-tight" style={{fontFamily: 'Fraunces, Georgia, ui-serif'}}>Debbie Allen</div>
<div className="text-[12px] text-white/70 -mt-0.5">Dance Academy • Shop</div>
</div>
</a>
<p className="mt-4 text-white/70 text-[14px] max-w-md">Every order helps fund scholarships, outreach, and access to world-class dance training.</p>
<div className="mt-4 flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-white/80 text-[13px]"><i className="w-4 h-4" data-lucide="badge-check"></i> 501(c)(3)</span>
<span className="inline-flex items-center gap-1 text-white/80 text-[13px]"><i className="w-4 h-4" data-lucide="shield"></i> Secure checkout</span>
<span className="inline-flex items-center gap-1 text-white/80 text-[13px]"><i className="w-4 h-4" data-lucide="truck"></i> Free $75+</span>
</div>
</div>
<div>
<div className="text-[14px] font-medium tracking-tight mb-3">Shop</div>
<ul className="space-y-2 text-[14px] text-white/80">
<li><a className="hover:text-white" href="#collection">All products</a></li>
<li><a className="hover:text-white" href="#collection">New arrivals</a></li>
<li><a className="hover:text-white" href="#collection">Bestsellers</a></li>
<li><a className="hover:text-white" href="#collection">Sale</a></li>
</ul>
</div>
<div>
<div className="text-[14px] font-medium tracking-tight mb-3">Support</div>
<ul className="space-y-2 text-[14px] text-white/80">
<li><a className="hover:text-white" href="#policies">Shipping &amp; returns</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
<li><a className="hover:text-white" href="#mission">Our mission</a></li>
<li><a className="hover:text-white" href="#stories">Stories</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
<div className="text-[12px] text-white/60">© <span id="year"></span> Debbie Allen Dance Academy. All rights reserved.</div>
<div className="flex items-center gap-2">
<a className="p-2 rounded-md border border-white/10 hover:bg-white/10" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="p-2 rounded-md border border-white/10 hover:bg-white/10" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="p-2 rounded-md border border-white/10 hover:bg-white/10" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="p-2 rounded-md border border-white/10 hover:bg-white/10" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="cartDrawer">
<div className="absolute inset-0 bg-black/30" data-close="cartDrawer"></div>
<aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white border-l border-neutral-200 grid grid-rows-[auto_1fr_auto]">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
<div className="text-[16px] font-medium tracking-tight">Your Cart</div>
<button aria-label="Close cart" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50" data-close="cartDrawer"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="overflow-y-auto p-5 space-y-4" id="cartItems">
<div className="text-[14px] text-neutral-600">Your cart is empty.</div>
</div>
<div className="border-t border-neutral-200 p-5 space-y-3">
<div className="flex items-center justify-between text-[14px]">
<span>Subtotal</span><span className="font-medium" id="cartSubtotal">$0</span>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 transition"><i className="w-4 h-4" data-lucide="lock"></i> Checkout</button>
<div className="text-[12px] text-neutral-500 text-center">A portion of every order supports student scholarships.</div>
</div>
</aside>
</div>

<div className="fixed inset-0 z-50 hidden" id="quickView">
<div className="absolute inset-0 bg-black/40" data-close="quickView"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] max-w-3xl bg-white rounded-2xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<div className="text-[15px] font-medium tracking-tight">Quick view</div>
<button aria-label="Close quick view" className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50" data-close="quickView"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="grid md:grid-cols-2 gap-0">
<img alt="" className="h-72 md:h-full w-full object-cover" id="qvImg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center justify-between">
<div className="text-[16px] font-medium tracking-tight">Signature Leotard</div>
<div className="text-[14px]">$68</div>
</div>
<div className="mt-2 text-[13px] text-neutral-600">A breathable, performance-ready essential.</div>
<div className="mt-4 flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-200 text-[12px]">XS</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 text-[12px]">S</button>
<button className="px-3 py-2 rounded-md border border-neutral-200 text-[12px]">M</button>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-2.5 text-[14px] hover:bg-neutral-800 transition" id="qvAdd"><i className="w-4 h-4" data-lucide="shopping-bag"></i> Add to cart</button>
<button className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50" data-close="quickView">Close</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden sm:hidden" id="filtersDrawer">
<div className="absolute inset-0 bg-black/30" data-close="filtersDrawer"></div>
<div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl border-t border-neutral-200 p-5 max-h-[80vh] overflow-y-auto">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight">Filters</div>
<button className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50" data-close="filtersDrawer"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>

<div className="mt-4 space-y-4 text-[14px]">
<div>
<div className="font-medium">Category</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<label className="flex items-center gap-2"><input className="accent-black" data-filter="category" type="checkbox" value="Apparel"/> Apparel</label>
<label className="flex items-center gap-2"><input className="accent-black" data-filter="category" type="checkbox" value="Footwear"/> Footwear</label>
<label className="flex items-center gap-2"><input className="accent-black" data-filter="category" type="checkbox" value="Warm-ups"/> Warm-ups</label>
<label className="flex items-center gap-2"><input className="accent-black" data-filter="category" type="checkbox" value="Accessories"/> Accessories</label>
</div>
</div>
<div>
<div className="font-medium">Size</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-md border border-neutral-200" data-filter="size" value="XS">XS</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-200" data-filter="size" value="S">S</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-200" data-filter="size" value="M">M</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-200" data-filter="size" value="L">L</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-200" data-filter="size" value="XL">XL</button>
</div>
</div>
<div>
<div className="font-medium">Color</div>
<div className="mt-2 flex items-center gap-2">
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-black" data-filter="color" value="Black"></button>
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-rose-500" data-filter="color" value="Rose"></button>
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-amber-200" data-filter="color" value="Blush"></button>
<button className="w-7 h-7 rounded-full border border-neutral-300 bg-stone-300" data-filter="color" value="Sand"></button>
</div>
</div>
<button className="w-full mt-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 transition" data-close="filtersDrawer">Apply filters</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="sizeGuide">
<div className="absolute inset-0 bg-black/40" data-close="sizeGuide"></div>
<div className="absolute left-1/2 top-1/2 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl border border-neutral-200 overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<div className="text-[15px] font-medium tracking-tight">Size guide</div>
<button className="p-2 rounded-md border border-neutral-200 hover:bg-neutral-50" data-close="sizeGuide"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="p-5 text-[14px] text-neutral-700">
<p className="mb-3">Measure around the fullest part of your bust and hips. If between sizes, we recommend sizing up for comfort.</p>
<div className="grid grid-cols-3 gap-3 text-[13px]">
<div className="rounded-lg border border-neutral-200 p-3">
<div className="font-medium">XS</div>
<div className="text-neutral-600">Bust 30–32"</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="font-medium">S</div>
<div className="text-neutral-600">Bust 32–34"</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="font-medium">M</div>
<div className="text-neutral-600">Bust 34–36"</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="font-medium">L</div>
<div className="text-neutral-600">Bust 36–38"</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="font-medium">XL</div>
<div className="text-neutral-600">Bust 38–40"</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
