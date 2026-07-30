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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) lucide.createIcons();
      });

      // Dynamic year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Navbar on scroll
      const header = document.getElementById('nav');
      let lastY = 0;
      const onScroll = () => {
        const y = window.scrollY || window.pageYOffset;
        header.classList.toggle('shadow-sm', y > 8);
        header.classList.toggle('bg-white/80', y > 8);
        header.classList.toggle('py-2', y > 8);
        header.classList.toggle('py-3', y <= 8);
        lastY = y;
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      // Calm scroll reveals
      const revealEls = document.querySelectorAll('[data-reveal]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6', 'blur-sm');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      revealEls.forEach((el) => io.observe(el));

      // Routine builder state
      const state = { cleanser: null, serum: null, moisturizer: null };
      const formatMoney = (n) => '$' + n.toFixed(0);
      const previewList = document.getElementById('preview-list');
      const totalEl = document.getElementById('routine-total');
      const addBtn = document.getElementById('add-routine');
      const resetBtn = document.getElementById('reset-routine');
      const cartCountEl = document.getElementById('cart-count');

      // Render preview items
      function renderPreview() {
        const steps = [
          { key: 'cleanser', label: 'Cleanser' },
          { key: 'serum', label: 'Serum' },
          { key: 'moisturizer', label: 'Moisturizer' },
        ];
        previewList.innerHTML = steps.map(({ key, label }) => {
          const item = state[key];
          if (!item) {
            return `
              <div class="flex items-center gap-4 p-3 rounded-lg border border-dashed border-neutral-300">
                <div class="h-14 w-14 rounded-md bg-neutral-100 border border-neutral-200"></div>
                <div class="flex-1">
                  <div class="text-sm font-medium">${label}</div>
                  <div class="text-sm text-neutral-500">Choose an option</div>
                </div>
              </div>
            `;
          }
          return `
            <div class="flex items-center gap-4 p-3 rounded-lg border border-neutral-200">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${item.name}" class="h-14 w-14 object-cover rounded-md border border-neutral-200" />
              <div class="flex-1">
                <div class="text-sm font-medium tracking-tight">${item.name}</div>
                <div class="text-sm text-neutral-600">${formatMoney(item.price)}</div>
              </div>
              <button data-remove="${key}" class="text-neutral-500 hover:text-neutral-900 transition" aria-label="Remove ${label}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          `;
        }).join('');

        // Remove handlers
        previewList.querySelectorAll('[data-remove]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-remove');
            state[key] = null;
            document.querySelectorAll('[data-step="' + key + '"]').forEach((b) => b.classList.remove('ring-1', 'ring-neutral-900/10', 'bg-neutral-50'));
            updateTotals();
            renderPreview();
          });
        });
      }

      function updateTotals() {
        const sum = ['cleanser','serum','moisturizer'].reduce((acc, k) => acc + (state[k]?.price || 0), 0);
        totalEl.textContent = formatMoney(sum);
        const allSelected = !!(state.cleanser && state.serum && state.moisturizer);
        addBtn.disabled = !allSelected;
      }

      // Selection
      document.querySelectorAll('[data-step]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const step = btn.getAttribute('data-step');
          const item = {
            name: btn.getAttribute('data-name'),
            price: Number(btn.getAttribute('data-price')),
            img: btn.getAttribute('data-img')
          };
          state[step] = item;
          // Style selection
          document.querySelectorAll('[data-step="' + step + '"]').forEach((b) => b.classList.remove('ring-1', 'ring-neutral-900/10', 'bg-neutral-50'));
          btn.classList.add('ring-1', 'ring-neutral-900/10', 'bg-neutral-50');
          renderPreview();
          updateTotals();
        });
      });

      resetBtn.addEventListener('click', () => {
        Object.keys(state).forEach((k) => state[k] = null);
        document.querySelectorAll('[data-step]').forEach((b) => b.classList.remove('ring-1', 'ring-neutral-900/10', 'bg-neutral-50'));
        renderPreview();
        updateTotals();
      });

      addBtn.addEventListener('click', () => {
        if (addBtn.disabled) return;
        // Increment cart count
        const current = Number(cartCountEl.textContent || '0');
        cartCountEl.textContent = current + 1;
        // Micro feedback
        const original = addBtn.innerHTML;
        addBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg> Added!';
        addBtn.classList.add('bg-neutral-800');
        setTimeout(() => {
          addBtn.innerHTML = original;
          addBtn.classList.remove('bg-neutral-800');
        }, 1200);
      });

      // Initial preview render
      renderPreview();
      updateTotals();

      // Before/After slider
      const range = document.getElementById('ba-range');
      const overlay = document.getElementById('ba-overlay');
      const handle = document.getElementById('ba-handle');
      function setBA(val) {
        const pct = Number(val);
        overlay.style.width = pct + '%';
        handle.style.left = pct + '%';
      }
      range.addEventListener('input',e) => setBA(e.target.value));
      setBA(range.value);

      // Testimonials controls
      const tTrack = document.getElementById('t-track');
      document.getElementById('t-prev').addEventListener('click', () => {
        tTrack.scrollBy({ left: -320, behavior: 'smooth' });
      });
      document.getElementById('t-next').addEventListener('click', () => {
        tTrack.scrollBy({ left: 320, behavior: 'smooth' });
      });

      // Fake stock animation on view
      const stockBar = document.getElementById('stock-bar');
      const stockLabel = document.getElementById('stock-label');
      if (stockBar && stockLabel) {
        const so = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate to a target width
              const target = 85; // %
              let current = 0;
              const step = () => {
                current += 3;
                if (current > target) current = target;
                stockBar.style.width = current + '%';
                stockLabel.textContent = current + '% sold';
                if (current < target) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
              so.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        so.observe(stockBar);
      }
    
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
      

<header className="fixed z-50 left-1/2 -translate-x-1/2 top-4 w-[min(1200px,94%)] rounded-xl border border-neutral-200/60 bg-white/60 backdrop-blur-lg py-3 px-4 transition-all duration-300" id="nav">
<nav className="flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="text-xl tracking-tight font-semibold">Éclat</div>
</a>

<ul className="hidden md:flex items-center gap-8 text-[15px]">
<li><a className="relative hover:opacity-100 opacity-90 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#shop">Shop</a></li>
<li><a className="relative hover:opacity-100 opacity-90 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#science">Science</a></li>
<li><a className="relative hover:opacity-100 opacity-90 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#ritual">Ritual</a></li>
<li><a className="relative hover:opacity-100 opacity-90 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#journal">Journal</a></li>
<li><a className="relative hover:opacity-100 opacity-90 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#contact">Contact</a></li>
</ul>

<div className="flex items-center gap-3">
<button aria-label="Open cart" className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200/80 hover:border-neutral-300 transition">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="sr-only">Cart</span>
<span className="absolute -top-1.5 -right-1.5 text-[11px] leading-none px-1.5 py-0.5 rounded bg-neutral-900 text-white" id="cart-count">2</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-neutral-900/80 bg-neutral-900 text-white hover:bg-neutral-800 hover:border-neutral-800 transition" href="#ritual">
<i className="w-4.5 h-4.5" data-lucide="wand-2"></i>
<span className="text-sm">Start Routine</span>
</a>
</div>
</nav>
</header>
<main className="pt-28 md:pt-32">

<section className="relative">
<div className="w-[min(1200px,94%)] mx-auto grid md:grid-cols-2 gap-10 items-center">
<div className="order-2 md:order-1">
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.05] opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{transitionDelay: `80ms`}}>
              Science in Simplicity
            </h1>
<p className="mt-4 text-[17px] leading-7 text-neutral-600 opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{transitionDelay: `180ms`}}>
              Clean, dermatologically tested formulations crafted to do more with less—designed for skin that prefers quiet luxury.
            </p>
<div className="mt-7 flex items-center gap-3 opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{transitionDelay: `260ms`}}>
<a className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition border border-neutral-900/90" href="#shop">
                Shop the Collection
              </a>
<a className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-neutral-300 hover:border-neutral-400 hover:bg-white transition" href="#science">
                Explore the Science
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="leaf"></i>
                Clean formulas
              </div>
<div className="hidden sm:flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="check-circle"></i>
                Dermatologist tested
              </div>
<div className="hidden md:flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="beaker"></i>
                Evidence-led
              </div>
</div>
</div>
<div className="order-1 md:order-2 relative">
<div className="relative overflow-hidden rounded-2xl border border-neutral-200">
<img alt="Éclat cream jar on textured stone" className="w-full h-[420px] md:h-[520px] object-cover" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="mt-20 md:mt-28" id="shop">
<div className="w-[min(1200px,94%)] mx-auto">
<div className="flex items-end justify-between">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Essential Edit</h2>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#">View all</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Purifying Gel Cleanser" className="w-full h-80 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<button className="absolute inset-x-3 bottom-3 h-10 rounded-lg bg-neutral-900 text-white text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition flex items-center justify-center gap-2 border border-neutral-900/80">
<i className="w-4.5 h-4.5" data-lucide="eye"></i>
                  Quick View
                </button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Purifying Gel Cleanser</h3>
<span className="text-[15px] text-neutral-600">$24</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Gentle daily cleanse without the strip.</p>
</div>
</article>
<article className="group relative rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Peptide Repair Serum" className="w-full h-80 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1200&q=80" />
<button className="absolute inset-x-3 bottom-3 h-10 rounded-lg bg-neutral-900 text-white text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition flex items-center justify-center gap-2 border border-neutral-900/80">
<i className="w-4.5 h-4.5" data-lucide="eye"></i>
                  Quick View
                </button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Peptide Repair Serum</h3>
<span className="text-[15px] text-neutral-600">$38</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Firming peptides and barrier support.</p>
</div>
</article>
<article className="group relative rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Barrier Cream Moisturizer" className="w-full h-80 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<button className="absolute inset-x-3 bottom-3 h-10 rounded-lg bg-neutral-900 text-white text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition flex items-center justify-center gap-2 border border-neutral-900/80">
<i className="w-4.5 h-4.5" data-lucide="eye"></i>
                  Quick View
                </button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Barrier Cream Moisturizer</h3>
<span className="text-[15px] text-neutral-600">$34</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Rich hydration with a weightless feel.</p>
</div>
</article>
<article className="group relative rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Mineral SPF 30" className="w-full h-80 object-cover transition duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80" />
<button className="absolute inset-x-3 bottom-3 h-10 rounded-lg bg-neutral-900 text-white text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition flex items-center justify-center gap-2 border border-neutral-900/80">
<i className="w-4.5 h-4.5" data-lucide="eye"></i>
                  Quick View
                </button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-medium tracking-tight">Mineral SPF 30</h3>
<span className="text-[15px] text-neutral-600">$28</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Invisible shield with no white cast.</p>
</div>
</article>
</div>
</div>
</section>

<section className="mt-24 md:mt-32" id="ritual">
<div className="w-[min(1200px,94%)] mx-auto">
<div className="flex items-end justify-between">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Build Your Ritual</h2>
<span className="text-sm text-neutral-600">3 steps • dermatologist aligned</span>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-10">

<div className="rounded-xl border border-neutral-200 bg-white p-4 md:p-6">

<div className="pb-6 border-b border-neutral-200">
<div className="flex items-center gap-2 text-[13px] text-neutral-600 mb-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300">1</span>
                  Cleanser
                </div>
<div className="grid sm:grid-cols-3 gap-3">
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1604335399105-a0c49bd84f4a?auto=format&fit=crop&w=1200&q=80" data-name="Purifying Gel Cleanser" data-price="24" data-step="cleanser">
<img alt="Purifying Gel Cleanser" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Purifying Gel</span>
<span className="text-sm text-neutral-600">$24</span>
</div>
</button>
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1585386959984-a41552231659?auto=format&fit=crop&w=1200&q=80" data-name="Milky Enzyme Cleanser" data-price="26" data-step="cleanser">
<img alt="Milky Enzyme Cleanser" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Milky Enzyme</span>
<span className="text-sm text-neutral-600">$26</span>
</div>
</button>
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=80" data-name="Oil-Balm Cleanser" data-price="28" data-step="cleanser">
<img alt="Oil-Balm Cleanser" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Oil-Balm</span>
<span className="text-sm text-neutral-600">$28</span>
</div>
</button>
</div>
</div>

<div className="py-6 border-b border-neutral-200">
<div className="flex items-center gap-2 text-[13px] text-neutral-600 mb-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300">2</span>
                  Serum
                </div>
<div className="grid sm:grid-cols-3 gap-3">
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1200&q=80" data-name="Peptide Repair Serum" data-price="38" data-step="serum">
<img alt="Peptide Repair Serum" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1200&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Peptide Repair</span>
<span className="text-sm text-neutral-600">$38</span>
</div>
</button>
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1595753109320-9f8563a6d88e?auto=format&fit=crop&w=1200&q=80" data-name="10% Niacinamide Serum" data-price="30" data-step="serum">
<img alt="Niacinamide Serum" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">10% Niacinamide</span>
<span className="text-sm text-neutral-600">$30</span>
</div>
</button>
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1599689019336-184f0f5f9870?auto=format&fit=crop&w=1200&q=80" data-name="Bright C Serum" data-price="36" data-step="serum">
<img alt="Bright C Serum" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Bright C</span>
<span className="text-sm text-neutral-600">$36</span>
</div>
</button>
</div>
</div>

<div className="pt-6">
<div className="flex items-center gap-2 text-[13px] text-neutral-600 mb-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300">3</span>
                  Moisturizer
                </div>
<div className="grid sm:grid-cols-3 gap-3">
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?auto=format&fit=crop&w=1200&q=80" data-name="Barrier Cream" data-price="34" data-step="moisturizer">
<img alt="Barrier Cream" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Barrier Cream</span>
<span className="text-sm text-neutral-600">$34</span>
</div>
</button>
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1616587226960-c7e9b93c71b6?auto=format&fit=crop&w=1200&q=80" data-name="Hydra-Gel Cream" data-price="32" data-step="moisturizer">
<img alt="Hydra-Gel Cream" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Hydra-Gel Cream</span>
<span className="text-sm text-neutral-600">$32</span>
</div>
</button>
<button className="group inline-flex flex-col items-start gap-2 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition" data-img="https://images.unsplash.com/photo-1591369822096-4a6c7f9d3d79?auto=format&fit=crop&w=1200&q=80" data-name="Ceramide Lotion" data-price="30" data-step="moisturizer">
<img alt="Ceramide Lotion" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="flex items-center justify-between w-full">
<span className="text-sm font-medium tracking-tight">Ceramide Lotion</span>
<span className="text-sm text-neutral-600">$30</span>
</div>
</button>
</div>
</div>
</div>

<aside className="rounded-xl border border-neutral-200 bg-white p-4 md:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Your Routine</h3>
<button className="text-sm text-neutral-600 hover:text-neutral-900 transition inline-flex items-center gap-1" id="reset-routine">
<i className="w-4.5 h-4.5" data-lucide="rotate-ccw"></i> Reset
                </button>
</div>
<div className="mt-4 space-y-3" id="preview-list">

<div className="flex items-center gap-4 p-3 rounded-lg border border-dashed border-neutral-300">
<div className="h-14 w-14 rounded-md bg-neutral-100 border border-neutral-200"></div>
<div className="flex-1">
<div className="text-sm font-medium">Cleanser</div>
<div className="text-sm text-neutral-500">Choose an option</div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg border border-dashed border-neutral-300">
<div className="h-14 w-14 rounded-md bg-neutral-100 border border-neutral-200"></div>
<div className="flex-1">
<div className="text-sm font-medium">Serum</div>
<div className="text-sm text-neutral-500">Choose an option</div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg border border-dashed border-neutral-300">
<div className="h-14 w-14 rounded-md bg-neutral-100 border border-neutral-200"></div>
<div className="flex-1">
<div className="text-sm font-medium">Moisturizer</div>
<div className="text-sm text-neutral-500">Choose an option</div>
</div>
</div>
</div>
<div className="mt-5 border-t border-neutral-200 pt-4 flex items-center justify-between">
<div className="text-sm text-neutral-600">Subtotal</div>
<div className="text-lg font-medium tracking-tight" id="routine-total">$0</div>
</div>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 h-12 rounded-lg border border-neutral-900/90 bg-neutral-900 text-white hover:bg-neutral-800 hover:border-neutral-800 transition disabled:opacity-50 disabled:pointer-events-none" id="add-routine">
<i className="w-4.5 h-4.5" data-lucide="plus"></i>
                Add Routine to Cart
              </button>
</aside>
</div>
</div>
</section>

<section className="mt-24 md:mt-32" id="science">
<div className="w-[min(1200px,94%)] mx-auto">
<div className="flex items-end justify-between">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Ingredient Transparency</h2>
<span className="text-sm text-neutral-600">Swipe to explore</span>
</div>
<div className="mt-6 overflow-x-auto -mx-4 px-4">
<div className="flex gap-4 min-w-max snap-x snap-mandatory">

<article className="snap-start shrink-0 w-72 rounded-xl border border-neutral-200 bg-white p-4">
<div className="h-40 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Niacinamide" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="mt-3 flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Niacinamide</h3>
<p className="text-sm text-neutral-600 mt-1">Refines pores, calms redness.</p>
</div>
<span className="text-xs text-neutral-600">10%</span>
</div>
</article>
<article className="snap-start shrink-0 w-72 rounded-xl border border-neutral-200 bg-white p-4">
<div className="h-40 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Peptides" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="mt-3 flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Peptides</h3>
<p className="text-sm text-neutral-600 mt-1">Supports firmness visibly.</p>
</div>
<span className="text-xs text-neutral-600">Multi</span>
</div>
</article>
<article className="snap-start shrink-0 w-72 rounded-xl border border-neutral-200 bg-white p-4">
<div className="h-40 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Ceramides" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="mt-3 flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Ceramides</h3>
<p className="text-sm text-neutral-600 mt-1">Strengthens skin barrier.</p>
</div>
<span className="text-xs text-neutral-600">3x</span>
</div>
</article>
<article className="snap-start shrink-0 w-72 rounded-xl border border-neutral-200 bg-white p-4">
<div className="h-40 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Squalane" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="mt-3 flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Squalane</h3>
<p className="text-sm text-neutral-600 mt-1">Weightless moisture.</p>
</div>
<span className="text-xs text-neutral-600">1%</span>
</div>
</article>
<article className="snap-start shrink-0 w-72 rounded-xl border border-neutral-200 bg-white p-4">
<div className="h-40 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Green Tea" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="mt-3 flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Green Tea</h3>
<p className="text-sm text-neutral-600 mt-1">Antioxidant defense.</p>
</div>
<span className="text-xs text-neutral-600">EGCG</span>
</div>
</article>
<article className="snap-start shrink-0 w-72 rounded-xl border border-neutral-200 bg-white p-4">
<div className="h-40 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Hyaluronic Acid" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="mt-3 flex items-start justify-between">
<div>
<h3 className="font-medium tracking-tight">Hyaluronic Acid</h3>
<p className="text-sm text-neutral-600 mt-1">Multi-weight hydration.</p>
</div>
<span className="text-xs text-neutral-600">3D</span>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32">
<div className="w-[min(1200px,94%)] mx-auto">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Skin Transformation</h2>
<p className="text-[15px] text-neutral-600 mt-2">Slide to compare before and after 6 weeks of consistent use.</p>
<div className="mt-6 relative rounded-2xl overflow-hidden border border-neutral-200">
<div className="relative w-full h-[380px] md:h-[460px]">

<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80" />

<div className="absolute inset-0 overflow-hidden" id="ba-overlay" style={{width: `50%`}}>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80" />
</div>

<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 backdrop-blur-sm" id="ba-handle">
<div className="absolute inset-y-1/2 -translate-y-1/2 -left-4 right-[-16px] pointer-events-none flex items-center justify-center">
<div className="pointer-events-auto h-10 w-10 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
<i className="w-5 h-5" data-lucide="chevrons-left-right"></i>
</div>
</div>
</div>

<input className="absolute inset-x-0 bottom-4 mx-auto w-[min(560px,90%)] appearance-none bg-transparent" id="ba-range" max="100" min="0" type="range" value="50" />
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32">
<div className="w-[min(1200px,94%)] mx-auto grid md:grid-cols-2 gap-10 items-center">
<div className="order-2 md:order-1">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">The Science Behind Our Formula</h2>
<div className="mt-4 space-y-4">
<p className="text-[15px] text-neutral-700 opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{transitionDelay: `80ms`}}>
                Multi-peptide complexes support visible firmness and elasticity.
              </p>
<p className="text-[15px] text-neutral-700 opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{transitionDelay: `160ms`}}>
                Niacinamide and ceramides reinforce the barrier for resilient skin.
              </p>
<p className="text-[15px] text-neutral-700 opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal="" style={{transitionDelay: `240ms`}}>
                Antioxidants neutralize free radicals, minimizing oxidative stress.
              </p>
</div>
</div>
<div className="order-1 md:order-2">

<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 h-[360px] overflow-hidden">
<svg className="absolute inset-0 w-full h-full">

<line stroke="#cfcfcf" strokeWidth="1.5"></line>
<line stroke="#cfcfcf" strokeWidth="1.5"></line>
<line stroke="#cfcfcf" strokeWidth="1.5"></line>
</svg>

<div className="absolute left-[25%] top-[35%] -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-neutral-900 opacity-0 translate-y-4 blur-[2px] transition-all duration-700" data-reveal="" style={{transitionDelay: `80ms`}}></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-neutral-900 opacity-0 translate-y-4 blur-[2px] transition-all duration-700" data-reveal="" style={{transitionDelay: `160ms`}}></div>
<div className="absolute left-[75%] top-[35%] -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-neutral-900 opacity-0 translate-y-4 blur-[2px] transition-all duration-700" data-reveal="" style={{transitionDelay: `240ms`}}></div>
<div className="absolute left-[60%] top-[75%] -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-neutral-900 opacity-0 translate-y-4 blur-[2px] transition-all duration-700" data-reveal="" style={{transitionDelay: `320ms`}}></div>
<div className="absolute bottom-4 left-6 text-[13px] text-neutral-600">Simplified schematic for illustration only.</div>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32">
<div className="w-[min(1200px,94%)] mx-auto">
<div className="flex items-end justify-between">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">What They’re Saying</h2>
<div className="flex items-center gap-2">
<button className="h-10 w-10 rounded-lg border border-neutral-200 hover:border-neutral-300 bg-white flex items-center justify-center" id="t-prev">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="h-10 w-10 rounded-lg border border-neutral-200 hover:border-neutral-300 bg-white flex items-center justify-center" id="t-next">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-6 overflow-x-auto -mx-4 px-4 scroll-smooth" id="t-track">
<div className="flex gap-4 min-w-max">

<article className="shrink-0 w-72 rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="h-40">
<img alt="User Julia" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="p-4">
<div className="text-sm font-medium tracking-tight">Julia</div>
<p className="text-sm text-neutral-600 mt-1">My skin feels calmer and looks brighter. Minimal steps, maximum effect.</p>
</div>
</article>
<article className="shrink-0 w-72 rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="h-40">
<img alt="User Amir" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="p-4">
<div className="text-sm font-medium tracking-tight">Amir</div>
<p className="text-sm text-neutral-600 mt-1">Fast-absorbing and non-greasy. It simplified my entire routine.</p>
</div>
</article>
<article className="shrink-0 w-72 rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="h-40">
<img alt="User Hana" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="p-4">
<div className="text-sm font-medium tracking-tight">Hana</div>
<p className="text-sm text-neutral-600 mt-1">Finally products that play well together—no overwhelm.</p>
</div>
</article>
<article className="shrink-0 w-72 rounded-xl border border-neutral-200 bg-white overflow-hidden">
<div className="h-40">
<img alt="User Leo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" />
</div>
<div className="p-4">
<div className="text-sm font-medium tracking-tight">Leo</div>
<p className="text-sm text-neutral-600 mt-1">Noticeable texture improvement in two weeks.</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32" id="journal">
<div className="w-[min(1200px,94%)] mx-auto">
<div className="flex items-end justify-between">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Journal</h2>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full" href="#">All posts</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<article className="group rounded-xl border border-neutral-200 overflow-hidden bg-white">
<div className="relative h-56 overflow-hidden">
<img alt="Less But Better" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
<div className="absolute inset-0 flex items-end">
<div className="p-4 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
<h3 className="font-medium tracking-tight">Less, But Better</h3>
<p className="text-sm text-white/80 mt-1">Why minimalist routines outperform maximalist stacks.</p>
</div>
</div>
</div>
</article>
<article className="group rounded-xl border border-neutral-200 overflow-hidden bg-white">
<div className="relative h-56 overflow-hidden">
<img alt="Barrier Health" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
<div className="absolute inset-0 flex items-end">
<div className="p-4 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
<h3 className="font-medium tracking-tight">A Case for Barrier Health</h3>
<p className="text-sm text-white/80 mt-1">The role ceramides play in resilient skin.</p>
</div>
</div>
</div>
</article>
<article className="group rounded-xl border border-neutral-200 overflow-hidden bg-white">
<div className="relative h-56 overflow-hidden">
<img alt="Photoprotection" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
<div className="absolute inset-0 flex items-end">
<div className="p-4 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
<h3 className="font-medium tracking-tight">Invisible Photoprotection</h3>
<p className="text-sm text-white/80 mt-1">Modern SPF that disappears on skin.</p>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="mt-24 md:mt-32">
<div className="w-[min(1200px,94%)] mx-auto">
<div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 p-6 md:p-8">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-md border border-neutral-300 bg-white">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Limited Release
                </div>
<h3 className="mt-3 text-2xl md:text-3xl tracking-tight font-semibold">Peptide Repair Serum — Edition No. 01</h3>
<p className="mt-2 text-[15px] text-neutral-700">Small-batch production. High-purity actives. Reserved for those who value focus over clutter.</p>
<div className="mt-5">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-600">Stock</span>
<span className="font-medium" id="stock-label">85% sold</span>
</div>
<div className="mt-2 h-2 rounded-full bg-neutral-200 overflow-hidden">
<div className="h-full bg-neutral-900 rounded-full" id="stock-bar" style={{width: `85%`}}></div>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition border border-neutral-900/90" href="#shop">
                    Get it before it’s gone
                  </a>
<button className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-neutral-300 hover:border-neutral-400 bg-white transition">
                    Details
                  </button>
</div>
</div>
<div className="relative">
<div className="rounded-xl overflow-hidden border border-neutral-200">
<img alt="Peptide Repair Serum bottle" className="w-full h-64 md:h-80 object-cover" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&q=80" />
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-24 md:mt-32 border-t border-neutral-200" id="contact">
<div className="w-[min(1200px,94%)] mx-auto py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="text-lg tracking-tight font-semibold">Éclat</div>
<p className="mt-2 text-sm text-neutral-600">Modern skincare for minimalists. Clean, focused, result-driven.</p>
<div className="mt-4 flex items-center gap-2">
<a aria-label="Instagram" className="h-10 w-10 rounded-lg border border-neutral-200 hover:border-neutral-300 bg-white flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a aria-label="Twitter" className="h-10 w-10 rounded-lg border border-neutral-200 hover:border-neutral-300 bg-white flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a aria-label="Email" className="h-10 w-10 rounded-lg border border-neutral-200 hover:border-neutral-300 bg-white flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
<form aria-label="Newsletter signup" className="mt-4">
<label className="sr-only" htmlFor="newsletter">Email address</label>
<div className="flex gap-2">
<input className="flex-1 h-10 px-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 bg-white placeholder:text-neutral-400" id="newsletter" placeholder="Email address" required type="email" />
<button className="h-10 px-4 rounded-lg bg-neutral-900 text-white border border-neutral-900/90 hover:bg-neutral-800 hover:border-neutral-800 transition" type="submit">
                  Join
                </button>
</div>
<p className="mt-2 text-xs text-neutral-500">By subscribing, you agree to our Privacy Policy.</p>
</form>
</div>
<nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
<div>
<div className="text-sm font-medium tracking-tight">Shop</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#shop">Cleansers</a></li>
<li><a className="hover:text-neutral-900 transition" href="#shop">Serums</a></li>
<li><a className="hover:text-neutral-900 transition" href="#shop">Moisturizers</a></li>
<li><a className="hover:text-neutral-900 transition" href="#shop">SPF</a></li>
<li><a className="hover:text-neutral-900 transition" href="#ritual">Sets & Rituals</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Company</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#science">Our Science</a></li>
<li><a className="hover:text-neutral-900 transition" href="#journal">Journal</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Press</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Careers</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Support</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#contact">Contact</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Shipping & Returns</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">FAQ</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Terms of Service</a></li>
</ul>
</div>
</nav>
</div>
<div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<p className="text-sm text-neutral-600">© <span id="year"></span> Éclat Labs Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition" href="#">Accessibility</a>
<a className="hover:text-neutral-900 transition" href="#">Cookie Settings</a>
<a className="inline-flex items-center gap-1 hover:text-neutral-900 transition" href="#nav">
              Back to top <i className="w-4 h-4" data-lucide="arrow-up"></i>
</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
