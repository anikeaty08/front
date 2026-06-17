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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl opacity-20" style={{background: 'linear-gradient(135deg, rgba(236,72,153,0.6), rgba(168,85,247,0.45), rgba(59,130,246,0.35))'}}></div>
<div className="absolute top-1/3 left-0 h-72 w-72 rounded-full blur-3xl opacity-10" style={{background: 'rgba(251,191,36,0.35)'}}></div>
<div className="absolute right-0 top-1/2 h-96 w-96 rounded-full blur-3xl opacity-10" style={{background: 'rgba(34,197,94,0.28)'}}></div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(255,255,255,0.15) 0.0625rem, transparent 0.0625rem)', backgroundSize: '3rem 3rem'}}></div>
</div>
<header className="relative z-20">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl" style={{transform: 'perspective(75rem) rotateX(10deg) rotateY(-12deg)'}}>
<span className="text-sm font-semibold tracking-tight">LP</span>
</div>
<div>
<div className="text-sm font-medium tracking-[0.25em] text-white/70">LUMA</div>
<div className="text-xs text-white/40">Fine Perfume House</div>
</div>
</div>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-white/70 transition hover:text-white" href="#home">Home</a>
<a className="text-sm text-white/70 transition hover:text-white" href="#collection">Perfumes</a>
<a className="text-sm text-white/70 transition hover:text-white" href="#reviews">Reviews</a>
<a className="text-sm text-white/70 transition hover:text-white" href="#order">Order Online</a>
<a className="text-sm text-white/70 transition hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-xl transition hover:bg-white/15" href="#order">Shop Now</a>
</div>
</div>
</header>
<section className="relative z-10" id="home">
<div className="mx-auto grid min-h-[48rem] max-w-7xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:px-10 lg:pb-24 lg:pt-16">
<div className="max-w-2xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 shadow-xl backdrop-blur-xl">
<iconify-icon height="18" icon="solar:stars-line-duotone" style={{color: 'rgba(255,255,255,0.85)'}} width="18"></iconify-icon>
            Signature scents with modern luxury
          </div>
<h1 className="text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover the art of scent in a luxurious 3D experience
          </h1>
<p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Explore elegant perfumes crafted for every mood. From floral freshness to deep oud intensity, find the fragrance that becomes your signature.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90" href="#collection">
              Explore Collection
            </a>
<a className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-xl transition hover:bg-white/10" href="#reviews">
              Read Reviews
            </a>
</div>
<div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl" style={{transform: 'perspective(75rem) rotateX(8deg) rotateY(-8deg)'}}>
<div className="text-2xl font-semibold tracking-tight">120+</div>
<div className="mt-1 text-xs text-white/55">Luxury perfumes</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl" style={{transform: 'perspective(75rem) rotateX(8deg) rotateY(6deg)'}}>
<div className="text-2xl font-semibold tracking-tight">4.9</div>
<div className="mt-1 text-xs text-white/55">Customer rating</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl" style={{transform: 'perspective(75rem) rotateX(6deg) rotateY(-4deg)'}}>
<div className="text-2xl font-semibold tracking-tight">24h</div>
<div className="mt-1 text-xs text-white/55">Fast dispatch</div>
</div>
</div>
</div>
<div className="relative flex items-center justify-center">
<div className="relative h-[36rem] w-full max-w-2xl">
<div className="absolute left-8 top-16 h-80 w-56 rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl" style={{transform: 'perspective(75rem) rotateY(20deg) rotateX(8deg)'}}>
<img alt="Perfume bottle" className="h-full w-full rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="absolute right-6 top-0 h-96 w-64 rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl" style={{transform: 'perspective(75rem) rotateY(-20deg) rotateX(10deg)'}}>
<img alt="Luxury perfume" className="h-full w-full rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="absolute bottom-8 left-1/2 h-64 w-72 -translate-x-1/2 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl" style={{transform: 'perspective(75rem) rotateX(14deg) rotateY(-10deg)'}}>
<img alt="Perfume collection" className="h-full w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="absolute bottom-0 right-0 rounded-3xl border border-white/10 bg-black/30 px-5 py-4 shadow-2xl backdrop-blur-xl" style={{transform: 'perspective(75rem) rotateX(8deg) rotateY(-12deg)'}}>
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Featured</div>
<div className="mt-1 text-lg font-medium tracking-tight">Midnight Bloom</div>
<div className="mt-1 text-xs text-white/55">Velvet rose, amber, musk</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-6 lg:px-10">
<div className="grid gap-4 md:grid-cols-4">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
<iconify-icon height="22" icon="solar:box-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<h3 className="mt-4 text-base font-medium">Elegant Packaging</h3>
<p className="mt-2 text-xs leading-6 text-white/55">Premium gift-ready boxes with refined detail for every order.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
<iconify-icon height="22" icon="solar:leaf-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<h3 className="mt-4 text-base font-medium">Natural Notes</h3>
<p className="mt-2 text-xs leading-6 text-white/55">Blended with floral, woody, citrus and oriental inspirations.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
<iconify-icon height="22" icon="solar:shield-check-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<h3 className="mt-4 text-base font-medium">Authentic Quality</h3>
<p className="mt-2 text-xs leading-6 text-white/55">Only verified, long-lasting and premium fragrance formulas.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
<iconify-icon height="22" icon="solar:delivery-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<h3 className="mt-4 text-base font-medium">Worldwide Delivery</h3>
<p className="mt-2 text-xs leading-6 text-white/55">Safe shipping and live order support for every destination.</p>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-20" id="collection">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Perfume List</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our signature collection</h2>
</div>
<p className="max-w-xl text-sm leading-7 text-white/60">
            Browse carefully curated fragrances designed for daily sophistication, evening elegance, and unforgettable moments.
          </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
<div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
<div className="overflow-hidden rounded-[1.5rem]">
<img alt="Rose perfume" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="mt-4 flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight">Rose Éclat</h3>
<p className="mt-1 text-xs text-white/55">Rose petals, vanilla, white musk</p>
</div>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">50ml</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-base font-medium">$89</span>
<button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium transition hover:bg-white/15">Add to Cart</button>
</div>
</div>
<div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
<div className="overflow-hidden rounded-[1.5rem]">
<img alt="Oud perfume" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight">Velvet Oud</h3>
<p className="mt-1 text-xs text-white/55">Oud wood, amber, spice</p>
</div>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">75ml</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-base font-medium">$124</span>
<button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium transition hover:bg-white/15">Add to Cart</button>
</div>
</div>
<div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
<div className="overflow-hidden rounded-[1.5rem]">
<img alt="Citrus perfume" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="mt-4 flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight">Citrus Veil</h3>
<p className="mt-1 text-xs text-white/55">Bergamot, neroli, cedar</p>
</div>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">60ml</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-base font-medium">$95</span>
<button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium transition hover:bg-white/15">Add to Cart</button>
</div>
</div>
<div className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
<div className="overflow-hidden rounded-[1.5rem]">
<img alt="Night perfume" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="mt-4 flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight">Noir Mist</h3>
<p className="mt-1 text-xs text-white/55">Blackcurrant, patchouli, musk</p>
</div>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">90ml</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-base font-medium">$138</span>
<button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium transition hover:bg-white/15">Add to Cart</button>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-20">
<div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
<div className="text-xs uppercase tracking-[0.25em] text-white/45">About Us</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">A refined perfume destination</h2>
<p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
            We create a boutique fragrance journey where luxury meets personality. Every bottle tells a story through layered notes and timeless ingredients selected for depth, elegance, and staying power.
          </p>
<div className="mt-8 grid gap-4 sm:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-black/20 p-5">
<div className="text-xl font-semibold tracking-tight">15+</div>
<div className="mt-1 text-xs text-white/55">Years of fragrance craft</div>
</div>
<div className="rounded-3xl border border-white/10 bg-black/20 p-5">
<div className="text-xl font-semibold tracking-tight">80k</div>
<div className="mt-1 text-xs text-white/55">Happy online customers</div>
</div>
<div className="rounded-3xl border border-white/10 bg-black/20 p-5">
<div className="text-xl font-semibold tracking-tight">30</div>
<div className="mt-1 text-xs text-white/55">Global shipping regions</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">
<img alt="Perfume display shelf" className="h-full min-h-[24rem] w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</section>
<section className="relative z-10 py-20" id="reviews">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="mb-10">
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Reviews</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">What our customers say</h2>
</div>
<div className="grid gap-6 lg:grid-cols-3">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
<div className="flex items-center gap-1 text-amber-300">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="mt-4 text-sm leading-7 text-white/65">
              “The fragrance lasted all day and the packaging felt beautifully premium. I ordered Rose Éclat and instantly loved the soft floral finish.”
            </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Customer Olivia" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<div className="text-sm font-medium">Olivia M.</div>
<div className="text-xs text-white/50">Verified Buyer</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
<div className="flex items-center gap-1 text-amber-300">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="mt-4 text-sm leading-7 text-white/65">
              “Velvet Oud is rich, warm and sophisticated. The online order process was smooth and delivery arrived earlier than expected.”
            </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Customer Daniel" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<div className="text-sm font-medium">Daniel R.</div>
<div className="text-xs text-white/50">Verified Buyer</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
<div className="flex items-center gap-1 text-amber-300">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="mt-4 text-sm leading-7 text-white/65">
              “Noir Mist feels luxurious and unforgettable. This store has become my favorite place to shop for both gifts and personal use.”
            </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Customer Sophia" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<div className="text-sm font-medium">Sophia K.</div>
<div className="text-xs text-white/50">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-20" id="order">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Order Online</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Place your fragrance order</h2>
<p className="mt-4 text-sm leading-7 text-white/60">
              Select your perfume, quantity, and delivery details. A sleek online ordering experience designed for comfort and speed.
            </p>
<form className="mt-8 space-y-4">
<div>
<label className="mb-2 block text-xs text-white/55">Full Name</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Enter your full name" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs text-white/55">Email Address</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Enter your email" type="email"/>
</div>
<div>
<label className="mb-2 block text-xs text-white/55">Select Perfume</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/25">
<option className="text-black">Rose Éclat</option>
<option className="text-black">Velvet Oud</option>
<option className="text-black">Citrus Veil</option>
<option className="text-black">Noir Mist</option>
</select>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs text-white/55">Quantity</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/25" min="1" type="number" value="1"/>
</div>
<div>
<label className="mb-2 block text-xs text-white/55">Phone Number</label>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="+1 555 000 000" type="tel"/>
</div>
</div>
<div>
<label className="mb-2 block text-xs text-white/55">Delivery Address</label>
<textarea className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Enter your address" rows="4"></textarea>
</div>
<button className="w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90" type="button">
                Confirm Order
              </button>
</form>
</div>
<div className="space-y-6">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
<div className="flex items-center justify-between">
<div>
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Best Seller</div>
<h3 className="mt-2 text-2xl font-medium tracking-tight">Midnight Bloom Set</h3>
</div>
<span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">Limited</span>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
<img alt="Perfume gift set" className="h-64 w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="flex flex-col justify-between">
<p className="text-sm leading-7 text-white/60">
                    A gift collection featuring two premium scents, a travel vial, and a velvet presentation box for special occasions.
                  </p>
<div className="mt-5 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-white/55">Gift box</span>
<span>Included</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/55">Travel size</span>
<span>10ml</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/55">Price</span>
<span className="font-medium">$179</span>
</div>
</div>
</div>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
<iconify-icon height="22" icon="solar:card-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<h4 className="mt-4 text-base font-medium">Secure Payment</h4>
<p className="mt-2 text-xs leading-6 text-white/55">Protected checkout with trusted payment methods.</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
<iconify-icon height="22" icon="solar:chat-round-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<h4 className="mt-4 text-base font-medium">Live Support</h4>
<p className="mt-2 text-xs leading-6 text-white/55">Our team is available to help with fragrance selection.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
<div className="grid gap-6 lg:grid-cols-3">
<div>
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Gallery</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Fragrance visuals</h2>
<p className="mt-4 text-sm leading-7 text-white/60">
                Discover the mood, texture, and beauty behind our collection through editorial-inspired imagery.
              </p>
</div>
<div className="lg:col-span-2">
<div className="grid gap-4 sm:grid-cols-3">
<img alt="Perfume visual one" className="h-52 w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<img alt="Perfume visual two" className="h-52 w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1608528577891-eb055944f2e7?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<img alt="Perfume visual three" className="h-52 w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-20" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Contact</div>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch with us</h2>
<p className="mt-4 text-sm leading-7 text-white/60">
              Visit our perfume studio, call for support, or send a message for product guidance and custom recommendations.
            </p>
<div className="mt-8 space-y-5">
<div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/20 p-4">
<iconify-icon height="22" icon="solar:map-point-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<div>
<div className="text-sm font-medium">Store Address</div>
<div className="mt-1 text-xs leading-6 text-white/55">245 Aroma Avenue, Luxury District, New York, USA</div>
</div>
</div>
<div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/20 p-4">
<iconify-icon height="22" icon="solar:phone-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<div>
<div className="text-sm font-medium">Phone</div>
<div className="mt-1 text-xs leading-6 text-white/55">+1 800 555 9273</div>
</div>
</div>
<div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/20 p-4">
<iconify-icon height="22" icon="solar:letter-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<div>
<div className="text-sm font-medium">Email</div>
<div className="mt-1 text-xs leading-6 text-white/55">hello@lumaperfume.com</div>
</div>
</div>
<div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/20 p-4">
<iconify-icon height="22" icon="solar:clock-circle-line-duotone" style={{color: 'rgba(255,255,255,0.9)'}} width="22"></iconify-icon>
<div>
<div className="text-sm font-medium">Opening Hours</div>
<div className="mt-1 text-xs leading-6 text-white/55">Mon - Sat: 10:00 AM - 8:00 PM</div>
</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
<h3 className="text-2xl font-medium tracking-tight">Send a message</h3>
<form className="mt-6 grid gap-4">
<div className="grid gap-4 sm:grid-cols-2">
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Your name" type="text"/>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Your email" type="email"/>
</div>
<input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Subject" type="text"/>
<textarea className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/25" placeholder="Write your message" rows="6"></textarea>
<button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90" type="button">Send Message</button>
</form>
</div>
</div>
</div>
</section>
<section className="relative z-10 pb-20">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:p-8">
<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
<div>
<div className="text-xs uppercase tracking-[0.25em] text-white/45">Social Media</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Stay connected with LUMA</h2>
<p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                Follow us for fragrance launches, gift sets, seasonal offers, and behind-the-scenes perfume stories.
              </p>
</div>
<div className="flex flex-wrap gap-3">
<a className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10" href="#">
<iconify-icon height="18" icon="solar:camera-line-duotone" width="18"></iconify-icon>
                Instagram
              </a>
<a className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10" href="#">
<iconify-icon height="18" icon="solar:hashtag-chat-line-duotone" width="18"></iconify-icon>
                TikTok
              </a>
<a className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10" href="#">
<iconify-icon height="18" icon="solar:chat-round-like-line-duotone" width="18"></iconify-icon>
                Facebook
              </a>
<a className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10" href="#">
<iconify-icon height="18" icon="solar:play-stream-line-duotone" width="18"></iconify-icon>
                YouTube
              </a>
</div>
</div>
</div>
</div>
</section>
<footer className="relative z-10 border-t border-white/10">
<div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
<div>
<div className="text-sm font-medium tracking-[0.25em] text-white/80">LUMA</div>
<div className="mt-2 text-xs text-white/45">Luxury perfume store for timeless fragrance lovers.</div>
</div>
<div className="flex flex-wrap gap-5 text-xs text-white/50">
<a className="transition hover:text-white" href="#home">Home</a>
<a className="transition hover:text-white" href="#collection">Perfumes</a>
<a className="transition hover:text-white" href="#reviews">Reviews</a>
<a className="transition hover:text-white" href="#order">Order Online</a>
<a className="transition hover:text-white" href="#contact">Contact</a>
</div>
<div className="text-xs text-white/40">© 2026 LUMA. All rights reserved.</div>
</div>
</footer>
</div>

    </>
  );
}
