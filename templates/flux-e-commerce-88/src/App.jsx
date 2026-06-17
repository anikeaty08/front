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



      const menuToggle = document.getElementById('menuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const yearEl = document.getElementById('year');
      if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          menuToggle.innerHTML = mobileMenu.classList.contains('hidden')
            ? '<iconify-icon icon="lucide:menu" style="stroke-width:1.5"></iconify-icon>'
            : '<iconify-icon icon="lucide:x" style="stroke-width:1.5"></iconify-icon>';
        });
      }
      if (yearEl) yearEl.textContent = new Date().getFullYear();
      // Testimonial nudge (basic)
      const grid = document.getElementById('testimonialGrid');
      const prev = document.getElementById('prevTestimonial');
      const next = document.getElementById('nextTestimonial');
      const rotate = (dir = 1) => {
        if (!grid) return;
        const cards = Array.from(grid.children);
        if (dir > 0) grid.appendChild(cards[0]);
        else grid.insertBefore(cards[cards.length - 1], cards[0]);
      };
      prev && prev.addEventListener('click', () => rotate(-1));
      next && next.addEventListener('click', () => rotate(1));
    
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
      

<div className="w-full border-b backdrop-blur bg-neutral-900/60 border-neutral-800/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between py-2">
<p className="text-xs font-geist text-neutral-300" style={{}}>Free express shipping on orders over $100</p>
<a className="text-xs transition-colors font-geist text-neutral-300 hover:text-white" href="#products" style={{}}>Shop new arrivals →</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur border-b bg-neutral-950/70 border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="inline-flex items-center justify-center rounded-md border h-9 w-9 bg-neutral-900 border-neutral-800">
<span className="text-sm font-semibold tracking-tight font-geist" style={{}}>FX</span>
</div>
<span className="text-lg font-medium tracking-tight font-geist" style={{}}>flux</span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-white" href="#products" style={{}}>Products</a>
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-white" href="#features" style={{}}>Features</a>
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-white" href="#stories" style={{}}>Stories</a>
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-white" href="#support" style={{}}>Support</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<div className="relative">
<iconify-icon className="text-neutral-400" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="hidden md:block h-9 w-64 rounded-md border pl-9 pr-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 bg-neutral-900/70 border-neutral-800 text-neutral-200" placeholder="Search products" type="text"/><input className="peer outline-none focus:w-64 focus:pl-9 transition-[width] duration-300 text-transparent bg-transparent w-9 h-9 rounded-md pl-9 absolute top-0 right-0 bottom-0 left-0" placeholder="Search" type="text"/>
<iconify-icon className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<a className="inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm transition-colors border-neutral-800 bg-neutral-900/70 text-neutral-200 hover:bg-neutral-900" href="#account">
<iconify-icon className="text-neutral-300" icon="lucide:user-round" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>Account</span>
</a>
<button className="relative inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors bg-white text-neutral-900 hover:bg-neutral-200" id="cartBtn">
<iconify-icon icon="lucide:shopping-bag" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>Cart</span>
<span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full text-xs px-1 font-geist bg-neutral-900 text-white" id="cartCount" style={{}}>2</span>
</button>
</div>

<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70" id="menuToggle">
<iconify-icon className="text-neutral-300" icon="lucide:menu" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="md:hidden hidden border-t border-neutral-900" id="mobileMenu">
<div className="py-3 space-y-1">
<a className="block rounded-md px-3 py-2 text-sm font-geist text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#products" style={{}}>Products</a>
<a className="block rounded-md px-3 py-2 text-sm font-geist text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#features" style={{}}>Features</a>
<a className="block rounded-md px-3 py-2 text-sm font-geist text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#stories" style={{}}>Stories</a>
<a className="block rounded-md px-3 py-2 text-sm font-geist text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#support" style={{}}>Support</a>
<div className="flex items-center gap-2 px-3 pt-2">
<a className="flex-1 inline-flex h-10 items-center justify-center gap-2 rounded-md border text-sm border-neutral-800 bg-neutral-900/70 text-neutral-200" href="#account">
<iconify-icon icon="lucide:user-round" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>Account</span>
</a>
<button className="flex-1 inline-flex h-10 items-center justify-center gap-2 rounded-md text-sm font-medium bg-white text-neutral-900">
<iconify-icon icon="lucide:shopping-bag" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist" style={{}}>Cart</span>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl from-white/10"></div>
<div className="absolute -bottom-40 -left-20 h-96 w-[36rem] rounded-full bg-gradient-to-tr to-transparent blur-3xl from-neutral-800/60"></div>
<div className="absolute -bottom-40 -right-20 h-96 w-[36rem] rounded-full bg-gradient-to-tl to-transparent blur-3xl from-neutral-800/60"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16">
<div className="grid lg:grid-cols-2 sm:gap-14 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist border-neutral-800 bg-neutral-900/70 text-neutral-300" style={{}}>
<span className="inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
              New: Summer capsule just dropped
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-geist font-semibold" style={{}}>
              Elevate your everyday essentials
            </h1>
<p className="mt-4 text-base font-geist text-neutral-300" style={{}}>
              Crafted with premium materials and timeless design. From carry to comfort, discover products that work beautifully—day in, day out.
            </p>
<div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium px-5 py-3 transition-colors font-geist bg-white text-neutral-900 hover:bg-neutral-200" href="#products" style={{}}>
<iconify-icon icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
                Shop bestsellers
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border text-sm px-5 py-3 transition-colors font-geist border-neutral-800 bg-neutral-900/70 text-neutral-200 hover:bg-neutral-900" href="#features" style={{}}>
<iconify-icon icon="lucide:play" style={{strokeWidth: '1.5'}}></iconify-icon>
                Explore features
              </a>
</div>

<div className="mt-8">
<p className="text-xs font-geist text-neutral-400" style={{}}>Trusted by teams at</p>
<div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
<div className="flex items-center justify-center rounded-md border h-12 border-neutral-800 bg-neutral-900/50">
<span className="text-sm font-medium tracking-tight font-geist text-neutral-300" style={{}}>ALTO</span>
</div>
<div className="flex items-center justify-center rounded-md border h-12 border-neutral-800 bg-neutral-900/50">
<span className="text-sm font-medium tracking-tight font-geist text-neutral-300" style={{}}>NOVA</span>
</div>
<div className="flex items-center justify-center rounded-md border h-12 border-neutral-800 bg-neutral-900/50">
<span className="text-sm font-medium tracking-tight font-geist text-neutral-300" style={{}}>LYT</span>
</div>
<div className="flex items-center justify-center rounded-md border h-12 border-neutral-800 bg-neutral-900/50">
<span className="text-sm font-medium tracking-tight font-geist text-neutral-300" style={{}}>ATLAS</span>
</div>
<div className="flex items-center justify-center rounded-md border h-12 border-neutral-800 bg-neutral-900/50">
<span className="text-sm font-medium tracking-tight font-geist text-neutral-300" style={{}}>KIND</span>
</div>
<div className="flex items-center justify-center rounded-md border h-12 border-neutral-800 bg-neutral-900/50">
<span className="text-sm font-medium tracking-tight font-geist text-neutral-300" style={{}}>ARC</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl border p-2 sm:p-3 border-neutral-800 bg-neutral-900/60">
<div className="aspect-[5/4] w-full rounded-xl bg-gradient-to-br overflow-hidden relative from-neutral-800 to-neutral-900">
<img alt="Featured sneaker" className="absolute right-4 top-6 w-2/3 rounded-lg border shadow-2xl border-neutral-800/60 shadow-black/50" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Minimal backpack" className="absolute left-4 bottom-6 w-1/2 rounded-lg border shadow-2xl border-neutral-800/60 shadow-black/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-neutral-950/70 border-neutral-800">
<iconify-icon className="text-neutral-300" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-geist text-neutral-300" style={{}}>Limited capsule</span>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-3">
<div className="flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-800 bg-neutral-900/70">
<iconify-icon className="text-neutral-300" icon="lucide:truck" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-geist text-neutral-300" style={{}}>Fast shipping</span>
</div>
<div className="flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-800 bg-neutral-900/70">
<iconify-icon className="text-neutral-300" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-geist text-neutral-300" style={{}}>Secure checkout</span>
</div>
<div className="flex items-center gap-2 rounded-md border px-3 py-2 border-neutral-800 bg-neutral-900/70">
<iconify-icon className="text-neutral-300" icon="lucide:rotate-ccw" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-geist text-neutral-300" style={{}}>30‑day returns</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16" id="features">
<div className="grid md:grid-cols-4 gap-4">
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
<iconify-icon icon="lucide:crown" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight font-geist" style={{}}>Premium materials</h3>
<p className="mt-1 text-sm font-geist text-neutral-400" style={{}}>Every stitch and finish is carefully considered for longevity.</p>
</div>
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
<iconify-icon icon="lucide:hand" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight font-geist" style={{}}>Human comfort</h3>
<p className="mt-1 text-sm font-geist text-neutral-400" style={{}}>Ergonomic designs that look great and feel better.</p>
</div>
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
<iconify-icon icon="lucide:recycle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight font-geist" style={{}}>Responsible</h3>
<p className="mt-1 text-sm font-geist text-neutral-400" style={{}}>Lower‑impact materials and traceable supply chain.</p>
</div>
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
<iconify-icon icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight font-geist" style={{}}>Timeless style</h3>
<p className="mt-1 text-sm font-geist text-neutral-400" style={{}}>Versatile silhouettes that outlast seasons.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14" id="products">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-geist font-semibold" style={{}}>New arrivals</h2>
<p className="mt-1 text-sm font-geist text-neutral-400" style={{}}>Curated pieces designed to move with you.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>
          View all
          <iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border overflow-hidden border-neutral-800 bg-neutral-900/60">
<div className="relative">
<img alt="Velocity Sneaker" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/60"></div>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist bg-white text-neutral-900" style={{}}>
<iconify-icon icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
              Quick add
            </button>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium font-geist" style={{}}>Velocity Sneaker</h3>
<p className="mt-1 text-xs font-geist text-neutral-400" style={{}}>Cloudfoam sole, recycled knit</p>
</div>
<span className="text-sm font-medium font-geist" style={{}}>$128</span>
</div>
<div className="mt-3 flex items-center gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star-half" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="ml-2 text-xs font-geist text-neutral-400" style={{}}>(214)</span>
</div>
</div>
</div>
<div className="group rounded-xl border overflow-hidden border-neutral-800 bg-neutral-900/60">
<div className="relative">
<img alt="Transit Backpack" className="h-64 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/60"></div>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist bg-white text-neutral-900" style={{}}>
<iconify-icon icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
              Quick add
            </button>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium font-geist" style={{}}>Transit Backpack</h3>
<p className="mt-1 text-xs font-geist text-neutral-400" style={{}}>Modular pockets, water‑resistant</p>
</div>
<span className="text-sm font-medium font-geist" style={{}}>$179</span>
</div>
<div className="mt-3 flex items-center gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="ml-2 text-xs font-geist text-neutral-400" style={{}}>(98)</span>
</div>
</div>
</div>
<div className="group rounded-xl border overflow-hidden border-neutral-800 bg-neutral-900/60">
<div className="relative">
<img alt="Aura Headphones" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/60"></div>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist bg-white text-neutral-900" style={{}}>
<iconify-icon icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
              Quick add
            </button>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium font-geist" style={{}}>Aura Headphones</h3>
<p className="mt-1 text-xs font-geist text-neutral-400" style={{}}>Hybrid ANC, 35h playback</p>
</div>
<span className="text-sm font-medium font-geist" style={{}}>$249</span>
</div>
<div className="mt-3 flex items-center gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="ml-2 text-xs font-geist text-neutral-400" style={{}}>(1,142)</span>
</div>
</div>
</div>
<div className="group rounded-xl border overflow-hidden border-neutral-800 bg-neutral-900/60">
<div className="relative">
<img alt="Nimbus Runner" className="h-64 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/60"></div>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist bg-white text-neutral-900" style={{}}>
<iconify-icon icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
              Quick add
            </button>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium font-geist" style={{}}>Nimbus Runner</h3>
<p className="mt-1 text-xs font-geist text-neutral-400" style={{}}>Breathable mesh, responsive foam</p>
</div>
<span className="text-sm font-medium font-geist" style={{}}>$139</span>
</div>
<div className="mt-3 flex items-center gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star-half" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="ml-2 text-xs font-geist text-neutral-400" style={{}}>(523)</span>
</div>
</div>
</div>
<div className="group rounded-xl border overflow-hidden border-neutral-800 bg-neutral-900/60">
<div className="relative">
<img alt="Contour Bottle" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/60"></div>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist bg-white text-neutral-900" style={{}}>
<iconify-icon icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
              Quick add
            </button>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium font-geist" style={{}}>Contour Bottle</h3>
<p className="mt-1 text-xs font-geist text-neutral-400" style={{}}>Vacuum insulated, 24h cold</p>
</div>
<span className="text-sm font-medium font-geist" style={{}}>$39</span>
</div>
<div className="mt-3 flex items-center gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="ml-2 text-xs font-geist text-neutral-400" style={{}}>(64)</span>
</div>
</div>
</div>
<div className="group rounded-xl border overflow-hidden border-neutral-800 bg-neutral-900/60">
<div className="relative">
<img alt="Orbit Watch" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-black/60"></div>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist bg-white text-neutral-900" style={{}}>
<iconify-icon icon="lucide:plus" style={{strokeWidth: '1.5'}}></iconify-icon>
              Quick add
            </button>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium font-geist" style={{}}>Orbit Watch</h3>
<p className="mt-1 text-xs font-geist text-neutral-400" style={{}}>Sapphire glass, 10‑ATM</p>
</div>
<span className="text-sm font-medium font-geist" style={{}}>$289</span>
</div>
<div className="mt-3 flex items-center gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="ml-2 text-xs font-geist text-neutral-400" style={{}}>(302)</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14">
<div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r border-neutral-800 from-neutral-900 to-neutral-800">
<div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
<div className="relative grid lg:grid-cols-2 gap-6 p-6 sm:p-10">
<div>
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist border-neutral-800 bg-neutral-900/70 text-neutral-300" style={{}}>
<iconify-icon icon="lucide:sparkle" style={{strokeWidth: '1.5'}}></iconify-icon>
              Member exclusive
            </div>
<h3 className="mt-3 text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{}}>Build your perfect everyday kit</h3>
<p className="mt-2 text-sm font-geist text-neutral-300" style={{}}>Bundle and save up to 20% on curated sets—bags, bottles, and accessories tuned to your routine.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-4 py-2.5 transition-colors font-geist bg-white text-neutral-900 hover:bg-neutral-200" href="#" style={{}}>
                Create bundle
                <iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>
                Learn more
                <iconify-icon icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
<img alt="Bundle preview" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14" id="stories">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-geist font-semibold" style={{}}>What customers say</h2>
<p className="mt-1 text-sm font-geist text-neutral-400" style={{}}>Real stories from our community.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70" id="prevTestimonial">
<iconify-icon icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70" id="nextTestimonial">
<iconify-icon icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-3 gap-4" id="testimonialGrid">
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center bg-neutral-800">
<span className="text-xs font-medium tracking-tight font-geist text-neutral-300" style={{}}>AV</span>
</div>
<div>
<p className="text-sm font-medium font-geist" style={{}}>Ava R.</p>
<p className="text-xs font-geist text-neutral-400" style={{}}>Designer, Berlin</p>
</div>
</div>
<p className="mt-3 text-sm font-geist text-neutral-300" style={{}}>The backpack is a masterclass in organization. It disappears on the shoulders and still fits everything.</p>
<div className="mt-3 flex gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center bg-neutral-800">
<span className="text-xs font-medium tracking-tight font-geist text-neutral-300" style={{}}>JL</span>
</div>
<div>
<p className="text-sm font-medium font-geist" style={{}}>Jalen M.</p>
<p className="text-xs font-geist text-neutral-400" style={{}}>Engineer, Toronto</p>
</div>
</div>
<p className="mt-3 text-sm font-geist text-neutral-300" style={{}}>Sneakers are insanely comfortable—great grip, great support. Zero break‑in needed.</p>
<div className="mt-3 flex gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star-half" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="rounded-xl border p-5 border-neutral-800 bg-neutral-900/60">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full flex items-center justify-center bg-neutral-800">
<span className="text-xs font-medium tracking-tight font-geist text-neutral-300" style={{}}>SK</span>
</div>
<div>
<p className="text-sm font-medium font-geist" style={{}}>Sara K.</p>
<p className="text-xs font-geist text-neutral-400" style={{}}>Photographer, Seattle</p>
</div>
</div>
<p className="mt-3 text-sm font-geist text-neutral-300" style={{}}>The bottle keeps ice all day. The cap threads are buttery smooth—love the details.</p>
<div className="mt-3 flex gap-1 text-indigo-300">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14" id="support">
<div className="rounded-2xl border p-6 sm:p-8 border-neutral-800 bg-neutral-900/60">
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl tracking-tight font-geist font-semibold" style={{}}>We’re here to help</h3>
<p className="mt-2 text-sm font-geist text-neutral-300" style={{}}>Questions about fit, shipping, or returns? Our team responds in under 24 hours.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-4 py-2.5 transition-colors font-geist bg-white text-neutral-900 hover:bg-neutral-200" href="#" style={{}}>
<iconify-icon icon="lucide:message-square" style={{strokeWidth: '1.5'}}></iconify-icon>
                Live chat
              </a>
<a className="inline-flex items-center gap-2 rounded-md border text-sm px-4 py-2.5 transition-colors font-geist border-neutral-800 bg-neutral-900/70 text-neutral-200 hover:bg-neutral-900" href="#" style={{}}>
<iconify-icon icon="lucide:help-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                FAQs
              </a>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border p-4 border-neutral-800 bg-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="lucide:truck" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium font-geist" style={{}}>Shipping</h4>
</div>
<p className="mt-2 text-xs font-geist text-neutral-400" style={{}}>Free express on $100+. Same‑day in select cities.</p>
</div>
<div className="rounded-xl border p-4 border-neutral-800 bg-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="lucide:rotate-ccw" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium font-geist" style={{}}>Returns</h4>
</div>
<p className="mt-2 text-xs font-geist text-neutral-400" style={{}}>30‑day, free returns. Instant exchanges available.</p>
</div>
<div className="rounded-xl border p-4 border-neutral-800 bg-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="lucide:lock" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium font-geist" style={{}}>Payments</h4>
</div>
<p className="mt-2 text-xs font-geist text-neutral-400" style={{}}>All major cards, wallets, and installment providers.</p>
</div>
<div className="rounded-xl border p-4 border-neutral-800 bg-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="lucide:sun" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium font-geist" style={{}}>Care</h4>
</div>
<p className="mt-2 text-xs font-geist text-neutral-400" style={{}}>Care guides for each material and product line.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14">
<div className="rounded-2xl border p-6 sm:p-10 border-neutral-800 bg-neutral-900/60">
<div className="grid lg:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{}}>Join the list</h3>
<p className="mt-2 text-sm font-geist text-neutral-300" style={{}}>Get early access to drops, exclusive offers, and stories from behind the scenes.</p>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="h-11 w-full rounded-md border pl-10 pr-3 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 border-neutral-800 bg-neutral-950 text-neutral-200" placeholder="you@domain.com" required="" type="email"/>
</div>
<button className="inline-flex h-11 items-center justify-center rounded-md text-sm font-medium px-5 transition-colors font-geist bg-white text-neutral-900 hover:bg-neutral-200" style={{}} type="submit">
              Subscribe
            </button>
</form>
</div>
</div>
</section>

<footer className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
<div className="grid md:grid-cols-5 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="#">
<div className="inline-flex items-center justify-center rounded-md border h-9 w-9 bg-neutral-900 border-neutral-800">
<span className="text-sm font-semibold tracking-tight font-geist" style={{}}>FX</span>
</div>
<span className="text-lg font-medium tracking-tight font-geist" style={{}}>flux</span>
</a>
<p className="mt-3 text-sm font-geist text-neutral-400" style={{}}>Thoughtful essentials that work beautifully—made to last, designed to love.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-900" href="#">
<iconify-icon icon="lucide:instagram" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-900" href="#">
<iconify-icon icon="lucide:twitter" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-900" href="#">
<iconify-icon icon="lucide:youtube" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-medium font-geist" style={{}}>Shop</h5>
<ul className="mt-3 space-y-2">
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>New arrivals</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Bestsellers</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Accessories</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Gift cards</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium font-geist" style={{}}>Company</h5>
<ul className="mt-3 space-y-2">
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>About</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Sustainability</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Careers</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Press</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium font-geist" style={{}}>Support</h5>
<ul className="mt-3 space-y-2">
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Help center</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Shipping</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Returns</a></li>
<li><a className="text-sm font-geist text-neutral-300 hover:text-white" href="#" style={{}}>Contact</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-6 border-neutral-900">
<p className="text-xs text-neutral-500 font-geist" style={{}}>© <span className="font-geist" id="year" style={{}}>2025</span> Flux Co. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-neutral-500 font-geist hover:text-neutral-300" href="#" style={{}}>Privacy</a>
<a className="text-xs text-neutral-500 font-geist hover:text-neutral-300" href="#" style={{}}>Terms</a>
<a className="text-xs text-neutral-500 font-geist hover:text-neutral-300" href="#" style={{}}>Cookies</a>
</div>
</div>
</footer>



    </>
  );
}
