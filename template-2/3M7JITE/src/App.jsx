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



    // Icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Desktop thumbs
    const mainImage = document.getElementById('mainImage');
    document.querySelectorAll('.thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        if (src && mainImage) mainImage.src = src;
      });
    });
    // Mobile thumbs
    const mainImageMobile = document.getElementById('mainImageMobile');
    document.querySelectorAll('.thumb-m').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        if (src && mainImageMobile) mainImageMobile.src = src;
      });
    });

    // Quantity
    const qtyInput = document.getElementById('qtyInput');
    document.getElementById('qtyMinus').addEventListener('click', () => {
      const v = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
      qtyInput.value = v;
    });
    document.getElementById('qtyPlus').addEventListener('click', () => {
      const v = Math.max(1, (parseInt(qtyInput.value, 10) || 1) + 1);
      qtyInput.value = v;
    });

    // Warranty selection (custom checkbox style, mutually exclusive)
    const warrantyCards = document.querySelectorAll('.warranty-card');
    function updateWarrantyVisual(card, checked) {
      const cbx = card.querySelector('.cbx');
      const checkIcon = card.querySelector('[data-lucide="check"]');
      card.setAttribute('aria-checked', checked ? 'true' : 'false');
      if (checked) {
        card.classList.add('ring-2');
        card.style.setProperty('--tw-ring-color', '#9ebac8');
        cbx.classList.remove('ring-[#cfc3c3]/80');
        cbx.style.background = '#485b59';
        if (checkIcon) checkIcon.classList.remove('hidden');
        cbx.classList.add('text-white');
      } else {
        card.classList.remove('ring-2');
        cbx.classList.add('ring-[#cfc3c3]/80');
        cbx.style.background = '#ffffff';
        if (checkIcon) checkIcon.classList.add('hidden');
        cbx.classList.remove('text-white');
      }
    }
    function selectWarranty(card) {
      const isChecked = card.getAttribute('aria-checked') === 'true';
      if (!isChecked) {
        warrantyCards.forEach(c => updateWarrantyVisual(c, false));
        updateWarrantyVisual(card, true);
      } else {
        updateWarrantyVisual(card, false);
      }
    }
    warrantyCards.forEach(card => {
      card.addEventListener('click', () => selectWarranty(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          selectWarranty(card);
        }
      });
    });

    // Add to cart (demo)
    document.getElementById('addToCart').addEventListener('click', () => {
      const qty = parseInt(qtyInput.value, 10) || 1;
      const selected = Array.from(document.querySelectorAll('.warranty-card[aria-checked="true"]'));
      const warrantyId = selected[0]?.dataset.id || 'none';
      const warrantyPrice = selected.reduce((sum, c) => sum + (parseInt(c.dataset.price, 10) || 0), 0);
      const base = 2490;
      const total = base * qty + warrantyPrice * qty;
      alert(`Added ${qty} × Marais Modular Sofa\nWarranty: ${warrantyId}\nTotal: $${total.toLocaleString()}`);
    });

    // Horizontal scroll helpers
    function attachScroller(selector) {
      document.querySelectorAll(selector).forEach(btn => {
        btn.addEventListener('click', () => {
          const track = document.querySelector(btn.dataset.target);
          const dir = parseInt(btn.dataset.dir, 10) || 1;
          if (track) track.scrollBy({ left: dir * 320, behavior: 'smooth' });
        });
      });
    }
    attachScroller('.scroll-btn-ctl');
    attachScroller('.scroll-btn-ymal');
  
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-20 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-60" style={{background: `radial-gradient(60% 60% at 50% 50%, #fefbf6 0%, #f1ece5 40%, rgba(187,122,126,0.25) 75%, transparent 100%)`}}></div>
<div className="absolute -bottom-40 -right-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-60" style={{background: `radial-gradient(60% 60% at 50% 50%, #fefbf6 0%, #b5ccc2 35%, rgba(158,186,200,0.28) 70%, transparent 100%)`}}></div>
</div>

<div className="relative">
<div className="mx-auto max-w-7xl px-4">
<div className="mt-3 rounded-2xl bg-white/70 ring-1 ring-[#cfc3c3]/60 backdrop-blur-md">
<div className="flex items-center justify-between gap-3 px-4 py-2.5">
<p className="text-sm text-[#413b38]">
            Spring Edit: New upholstery hues in Mint and Ritual now available.
          </p>
<a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white transition" href="#" style={{background: `#805e39`}}>
            Explore
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>

<header className="relative">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-center justify-between py-5">
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-lg ring-1 ring-[#cfc3c3]/70" style={{background: `conic-gradient(from 180deg at 50% 50%,#c4a092, #b5ccc2, #ccb583, #a39aad, #bb7a7e, #c4a092)`}}></div>
<span className="text-lg font-semibold tracking-tight">TOV</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-[#5b5551] hover:text-[#0F0F10] transition font-medium" href="#">Living</a>
<a className="text-[#5b5551] hover:text-[#0F0F10] transition font-medium" href="#">Seating</a>
<a className="text-[#5b5551] hover:text-[#0F0F10] transition font-medium" href="#">Tables</a>
<a className="text-[#5b5551] hover:text-[#0F0F10] transition font-medium" href="#">Lighting</a>
<a className="text-[#5b5551] hover:text-[#0F0F10] transition font-medium" href="#">Sale</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#0F0F10] bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:bg-white transition backdrop-blur">
<i className="w-4 h-4" data-lucide="search"></i> Search
          </button>
<button className="relative rounded-full p-2 bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:bg-white backdrop-blur transition">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full text-[10px] font-medium text-white" style={{background: `#bb7a7e`}}>2</span>
</button>
<button className="md:hidden rounded-full p-2 bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:bg-white transition backdrop-blur">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative mt-6">
<div className="mx-auto max-w-7xl px-4">

<div className="grid md:grid-cols-2 gap-10 items-start">

<div className="w-full">
<div className="hidden md:flex items-start gap-4">

<div className="flex md:flex-col gap-3 md:h=[560px] md:h-[560px] overflow-auto pr-1">
<button aria-label="Sofa front" className="thumb group relative rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 hover:ring-[#c4a092] focus:outline-none" data-src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop">
<img alt="Front angle" className="h-24 w-24 object-cover transition" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=400&auto=format&fit=crop" />
</button>
<button aria-label="Sofa angle" className="thumb group relative rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 hover:ring-[#c4a092]" data-src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop">
<img alt="Angle view" className="h-24 w-24 object-cover transition" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=400&auto=format&fit=crop" />
</button>
<button aria-label="Sofa detail" className="thumb group relative rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 hover:ring-[#c4a092]" data-src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop">
<img alt="Detail" className="h-24 w-24 object-cover transition" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=400&auto=format&fit=crop" />
</button>
<button aria-label="Sofa lifestyle" className="thumb group relative rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 hover:ring-[#c4a092]" data-src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?q=80&w=1600&auto=format&fit=crop">
<img alt="Lifestyle" className="h-24 w-24 object-cover transition" src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?q=80&w=400&auto=format&fit=crop" />
</button>
</div>

<div className="relative flex-1">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f1ece5] ring-1 ring-[#cfc3c3]/70">
<img alt="Marais Modular Sofa" className="h-full w-full object-cover" id="mainImage" loading="eager" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>
</div>

<div className="md:hidden">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f1ece5] ring-1 ring-[#cfc3c3]/70">
<img alt="Marais Modular Sofa" className="h-full w-full object-cover" id="mainImageMobile" loading="eager" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="mt-3 flex gap-3 overflow-x-auto snap-x">
<button className="thumb-m rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 snap-start" data-src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop">
<img alt="Front angle" className="h-20 w-28 object-cover" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=600&auto=format&fit=crop" />
</button>
<button className="thumb-m rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 snap-start" data-src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop">
<img alt="Angle view" className="h-20 w-28 object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=600&auto=format&fit=crop" />
</button>
<button className="thumb-m rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 snap-start" data-src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop">
<img alt="Detail" className="h-20 w-28 object-cover" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600&auto=format&fit=crop" />
</button>
<button className="thumb-m rounded-xl overflow-hidden ring-1 ring-[#cfc3c3]/70 snap-start" data-src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?q=80&w=1600&auto=format&fit=crop">
<img alt="Lifestyle" className="h-20 w-28 object-cover" src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?q=80&w=600&auto=format&fit=crop" />
</button>
</div>
</div>
</div>

<div className="w-full space-y-6">
<div className="space-y-3">
<h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Marais Modular Sofa — 3-Seater</h1>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
</div>
<span className="text-sm text-[#5b5551]">4.8 (128)</span>
<span aria-hidden="true" className="h-3 w-px bg-[#cfc3c3]/80"></span>
<a className="text-sm font-medium underline underline-offset-4 hover:opacity-80" href="#reviews">Write a review</a>
</div>
</div>
<div className="rounded-2xl bg-white/80 ring-1 ring-[#cfc3c3]/70 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-[#5b5551]">Price</p>
<p className="text-2xl font-semibold tracking-tight">$2,490</p>
</div>
<div className="flex items-center gap-2 text-sm text-[#485b59]">
<i className="w-4 h-4" data-lucide="truck"></i>
                Free scheduled delivery
              </div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium">Quantity</label>
<div className="inline-flex items-center rounded-xl bg-white/80 ring-1 ring-[#cfc3c3]/70">
<button aria-label="Decrease quantity" className="p-3 hover:bg-[#f1ece5] rounded-l-xl" id="qtyMinus">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<input className="w-12 text-center bg-transparent focus:outline-none text-sm" id="qtyInput" min="1" type="number" value="1" />
<button aria-label="Increase quantity" className="p-3 hover:bg-[#f1ece5] rounded-r-xl" id="qtyPlus">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-medium">Extended warranty</label>
<a className="text-xs inline-flex items-center gap-1 text-[#485b59] hover:opacity-80" href="#">
<i className="w-3.5 h-3.5" data-lucide="info"></i> What’s covered
              </a>
</div>
<div className="grid sm:grid-cols-2 gap-3">

<div aria-checked="false" className="warranty-card group relative rounded-xl p-4 text-left bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#9ebac8] transition cursor-pointer select-none" data-id="w2" data-price="149" role="checkbox" tabindex="0">
<div className="absolute top-3 right-3">
<span className="cbx inline-flex h-5 w-5 items-center justify-center rounded-[6px] ring-1 ring-[#cfc3c3]/80 bg-white/90 text-white">
<i className="w-3.5 h-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="flex items-start justify-between pr-7">
<div>
<p className="text-sm font-medium">2-Year Extended Warranty</p>
<p className="text-xs text-[#5b5551]">Covers structural and upholstery incidents.</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-[#0F0F10]" style={{background: `#f1ece5`}}>+$149</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-[#485b59]">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                  Peace-of-mind protection
                </div>
</div>

<div aria-checked="false" className="warranty-card group relative rounded-xl p-4 text-left bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#9ebac8] transition cursor-pointer select-none" data-id="w4" data-price="249" role="checkbox" tabindex="0">
<div className="absolute top-3 right-3">
<span className="cbx inline-flex h-5 w-5 items-center justify-center rounded-[6px] ring-1 ring-[#cfc3c3]/80 bg-white/90 text-white">
<i className="w-3.5 h-3.5 hidden" data-lucide="check"></i>
</span>
</div>
<div className="flex items-start justify-between pr-7">
<div>
<p className="text-sm font-medium">4-Year Extended Warranty</p>
<p className="text-xs text-[#5b5551]">Maximum coverage with hassle-free claims.</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-white" style={{background: `#805e39`}}>+$249</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-[#485b59]">
<i className="w-4 h-4" data-lucide="shield"></i>
                  Best value coverage
                </div>
</div>
</div>
<p className="text-xs text-[#5b5551]">Select one option or continue without coverage.</p>
</div>

<div className="space-y-3">
<button className="w-full inline-flex items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2" id="addToCart" style={{background: `#805e39`}}>
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
              Add to cart
            </button>
<div className="flex items-center gap-3 text-xs text-[#5b5551]">
<i className="w-4 h-4" data-lucide="package"></i> In stock — ready to ship
              <span aria-hidden="true" className="h-3 w-px bg-[#cfc3c3]"></span>
<i className="w-4 h-4" data-lucide="refresh-ccw"></i> 30-day returns
            </div>
</div>

<div className="divide-y divide-[#cfc3c3]/70 rounded-2xl ring-1 ring-[#cfc3c3]/70 bg:white/80 bg-white/80 backdrop-blur">
<details className="group open:rounded-t-2xl">
<summary className="flex cursor-pointer items-center justify-between p-4">
<span className="text-sm font-medium">Product details</span>
<i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-[#413b38]">
                Hand-upholstered modular sofa with kiln-dried hardwood frame. High-resilience foam and feather blend cushions. Available in performance fabric options including Mint and Ritual hues.
              </div>
</details>
<details className="group">
<summary className="flex cursor-pointer items-center justify-between p-4">
<span className="text-sm font-medium">Dimensions</span>
<i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-[#413b38] grid grid-cols-2 gap-3">
<div><span className="text-[#5b5551]">Overall</span><br /> 102” W x 36” D x 32” H</div>
<div><span className="text-[#5b5551]">Seat</span><br /> 22” D x 18” H</div>
<div><span className="text-[#5b5551]">Arm</span><br /> 24” H</div>
<div><span className="text-[#5b5551]">Weight</span><br /> 165 lbs</div>
</div>
</details>
<details className="group open:rounded-b-2xl">
<summary className="flex cursor-pointer items-center justify-between p-4">
<span className="text-sm font-medium">Additional details</span>
<i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-[#413b38] space-y-2">
<p>Removable cushion covers. Sinuous spring support. FSC-certified wood. Low-VOC finishes.</p>
<p>Assembly: Tool-less bracket system. Care: Vacuum regularly; professional cleaning recommended.</p>
</div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-16">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-end justify-between mb-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Complete the look</h2>
<div className="flex items-center gap-2">
<button aria-label="Scroll left" className="scroll-btn-ctl rounded-full p-2 ring-1 ring-[#cfc3c3]/70 bg-white/80 hover:bg-[#f1ece5]" data-dir="-1" data-target="#ctlTrack">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Scroll right" className="scroll-btn-ctl rounded-full p-2 ring-1 ring-[#cfc3c3]/70 bg-white/80 hover:bg-[#f1ece5]" data-dir="1" data-target="#ctlTrack">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="overflow-x-auto snap-x snap-mandatory" id="ctlTrack">
<div className="flex gap-5 min-w-max">

<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#9ebac8] transition backdrop-blur">
<div className="relative">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Oak Coffee Table" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop" />
</div>
<span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-[#0F0F10]" style={{background: `#f1ece5`}}>
<span className="h-2 w-2 rounded-full" style={{background: `#ccb583`}}></span> Sunshine
              </span>
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Atelier Oak Coffee Table</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$690</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#485b59`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#9ebac8] transition backdrop-blur">
<div className="relative">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Bouclé Lounge Chair" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop" />
</div>
<span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-white" style={{background: `#bb7a7e`}}>
                Mauve
              </span>
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Bouclé Lounge Chair</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$890</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#485b59`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#9ebac8] transition backdrop-blur">
<div className="relative">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Marble Side Table" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1400&auto=format&fit=crop" />
</div>
<span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text:[11px] text-[11px] font-medium text-[#0F0F10]" style={{background: `#f1ece5`}}>
<span className="h-2 w-2 rounded-full" style={{background: `#a39aad`}}></span> Lavendar
              </span>
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Calacatta Side Table</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$420</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text:white text-white" style={{background: `#485b59`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
<article className="group w-72 rounded-2xl overflow-hidden bg:white/80 bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#9ebac8] transition backdrop-blur">
<div className="relative">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Wool Area Rug" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop" />
</div>
<span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-white" style={{background: `#7b8675`}}>
                Lagoon
              </span>
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Handloom Wool Area Rug</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$560</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#485b59`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="relative mt-12">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-end justify-between mb-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">You may also like</h2>
<div className="flex items-center gap-2">
<button aria-label="Scroll left" className="scroll-btn-ymal rounded-full p-2 ring-1 ring-[#cfc3c3]/70 bg-white/80 hover:bg-[#f1ece5]" data-dir="-1" data-target="#ymalTrack">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Scroll right" className="scroll-btn-ymal rounded-full p-2 ring-1 ring-[#cfc3c3]/70 bg-white/80 hover:bg-[#f1ece5]" data-dir="1" data-target="#ymalTrack">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="overflow-x-auto snap-x snap-mandatory" id="ymalTrack">
<div className="flex gap-5 min-w-max">

<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#bb7a7e] transition backdrop-blur">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Velvet Sofa" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1400&auto=format&fit=crop" />
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Valette Velvet Sofa</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$2,190</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#bb7a7e`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#bb7a7e] transition backdrop-blur">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Modern Sectional" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1550226891-ef816aed4a99?q=80&w=1400&auto=format&fit=crop" />
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Aalto Sectional</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$3,290</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#bb7a7e`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#bb7a7e] transition backdrop-blur">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Leather Sofa" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1400&auto=format&fit=crop" />
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Monaco Leather Sofa</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$2,990</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#bb7a7e`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
<article className="group w-72 rounded-2xl overflow-hidden bg-white/80 ring-1 ring-[#cfc3c3]/70 hover:ring-[#bb7a7e] transition backdrop-blur">
<div className="h-44 w-full bg-[#f1ece5] overflow-hidden">
<img alt="Low Profile Sofa" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1400&auto=format&fit=crop" />
</div>
<div className="p-4">
<h3 className="text-sm font-medium">Orsay Low-Profile Sofa</h3>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-[#5b5551]">$2,390</span>
<button className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white" style={{background: `#bb7a7e`}}>
                  Add <i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="relative mt-16" id="reviews">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-start justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Reviews</h2>
<div className="mt-3 flex items-center gap-3">
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#ccb583]" data-lucide="star"></i>
</div>
<span className="text-sm text-[#5b5551]">4.8 out of 5 • 128 reviews</span>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition" href="#" style={{background: `#805e39`}}>
          Write a review <i className="w-4 h-4" data-lucide="edit-3"></i>
</a>
</div>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<article className="rounded-2xl bg-white/80 ring-1 ring-[#cfc3c3]/70 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full ring-1 ring-[#cfc3c3]/70 overflow-hidden">
<img alt="Reviewer" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
</div>
<div>
<p className="text-sm font-medium">Amelia K.</p>
<p className="text-[11px] text-[#5b5551]">Mar 3, 2025</p>
</div>
</div>
<div className="flex items-center gap-1 text-[#ccb583]">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-[#413b38]">Comfortable and beautifully made. The fabric feels luxe and the modular pieces connect seamlessly.</p>
</article>
<article className="rounded-2xl bg-white/80 ring-1 ring-[#cfc3c3]/70 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full ring-1 ring-[#cfc3c3]/70 overflow-hidden">
<img alt="Reviewer" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
</div>
<div>
<p className="text-sm font-medium">Marcus D.</p>
<p className="text-[11px] text-[#5b5551]">Feb 21, 2025</p>
</div>
</div>
<div className="flex items-center gap-1 text-[#ccb583]">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-[#413b38]">Great proportions and easy delivery. Went with the Mint fabric and it’s a perfect neutral with character.</p>
</article>
<article className="rounded-2xl bg-white/80 ring-1 ring-[#cfc3c3]/70 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full ring-1 ring-[#cfc3c3]/70 overflow-hidden">
<img alt="Reviewer" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
</div>
<div>
<p className="text-sm font-medium">Sofia R.</p>
<p className="text-[11px] text-[#5b5551]">Jan 18, 2025</p>
</div>
</div>
<div className="flex items-center gap-1 text-[#ccb583]">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-[#413b38]">The cushions are supportive yet soft. Looks elevated in our space.</p>
</article>
</div>
<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition" href="#" style={{background: `#805e39`}}>
          Write a review <i className="w-4 h-4" data-lucide="edit-3"></i>
</a>
</div>
</div>
</section>

<footer className="relative mt-24">
<div className="mx-auto max-w-7xl px-4">
<div className="rounded-3xl bg-white/80 ring-1 ring-[#cfc3c3]/70 p-6 backdrop-blur">
<div className="grid md:grid-cols-3 gap-8 items-center">
<div>
<h4 className="text-xl font-semibold tracking-tight">Join for design drops</h4>
<p className="mt-2 text-sm text-[#5b5551]">New collections, upholstery colors, and interior notes.</p>
</div>
<form className="md:col-span-2 flex w-full gap-3">
<input className="w-full rounded-xl bg:white/90 bg-white/90 px-4 py-3 text-sm ring-1 ring-[#cfc3c3]/70 focus:outline-none focus:ring-2" placeholder="Your email" required style={{'--tw-ring-color': `#9ebac8`}} type="email" />
<button className="rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{background: `#485b59`}} type="submit">
              Subscribe
            </button>
</form>
</div>
<div className="mt-6 flex items-center justify-between">
<p className="text-xs text-[#5b5551]">© 2025 TOV</p>
<div className="flex items-center gap-3 text-[#5b5551]">
<a className="rounded-full p-2 hover:bg-[#f1ece5] transition ring-1 ring-transparent hover:ring-[#cfc3c3]/70" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="rounded-full p-2 hover:bg-[#f1ece5] transition ring-1 ring-transparent hover:ring-[#cfc3c3]/70" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="rounded-full p-2 hover:bg-[#f1ece5] transition ring-1 ring-transparent hover:ring-[#cfc3c3]/70" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
