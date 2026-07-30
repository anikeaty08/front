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
      
    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sample data
    const PRODUCTS = [
      {name: 'Aero Sneakers',     category: 'Apparel',     price: '$129', img: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80'},
      {name: 'Orbit Backpack',    category: 'Gear',        price: '$89',  img: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80'},
      {name: 'Luna Jacket',       category: 'Apparel',     price: '$229', img: 'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80'},
      {name: 'Nova Headphones',   category: 'Accessories', price: '$199', img: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80'},
      {name: 'Sol Sunglasses',    category: 'Accessories', price: '$79',  img: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80'},
      {name: 'Zen Watch',         category: 'Accessories', price: '$259', img: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80'},
      {name: 'Quantum Tee',       category: 'Apparel',     price: '$35',  img: 'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80'},
      {name: 'Galaxy Hoodie',     category: 'Apparel',     price: '$99',  img: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80'}
    ];

    // Populate grid
    const grid = document.getElementById('productGrid');
    const tpl  = document.getElementById('cardTpl').content;

    PRODUCTS.forEach((p, idx) => {
      const node = tpl.cloneNode(true);
      node.querySelector('img').src = p.img;
      node.querySelector('img').alt = p.name;
      node.querySelector('.name').textContent = p.name;
      node.querySelector('.category').textContent = p.category;
      node.querySelector('.price').textContent = p.price;
      node.firstElementChild.style.animationDelay = (100 + idx * 60) + 'ms';
      grid.appendChild(node);
    });

    // Sort dropdown
    const sortBtn  = document.getElementById('sortBtn');
    const sortMenu = document.getElementById('sortMenu');
    sortBtn.addEventListener('click', () => {
      const expanded = sortBtn.getAttribute('aria-expanded') === 'true';
      sortBtn.setAttribute('aria-expanded', String(!expanded));
      sortMenu.classList.toggle('hidden');
    });
    window.addEventListener('click', (e)=> {
      if(!sortBtn.contains(e.target) && !sortMenu.contains(e.target)) {
        sortBtn.setAttribute('aria-expanded','false');
        sortMenu.classList.add('hidden');
      }
    });

    lucide.createIcons();

    // Intersection fade
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('opacity-100'); });
    }, {threshold:.2});
    document.querySelectorAll('.animate-fade').forEach(el => obs.observe(el));
  
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
      

<header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
<nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a className="flex items-center gap-2 font-semibold text-lg" href="#">
<i className="w-6 h-6 text-indigo-600" data-lucide="square"></i>
        Check
      </a>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li><a className="hover:text-indigo-600" href="#">Home</a></li>
<li><a className="hover:text-indigo-600" href="#">Shop</a></li>
<li><a className="hover:text-indigo-600" href="#">About</a></li>
<li><a className="hover:text-indigo-600" href="#">Contact</a></li>
</ul>
<button aria-label="Open menu" className="md:hidden p-2 -mr-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>
</header>

<section className="relative isolate overflow-hidden">
<div className="absolute inset-0">
<img alt="" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80" />
<div className="absolute inset-0 bg-indigo-900/60"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center text-white">
<h1 className="text-4xl md:text-6xl font-semibold animate-fade tracking-tight">
        Explore the Check Collection
      </h1>
<p className="mt-6 text-lg/relaxed font-normal animate-fade delay-[120ms]">
        Timeless designs. Premium materials. Thoughtfully made for everyday adventures.
      </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-20 animate-fade">
<div className="flex flex-wrap items-center justify-between gap-6">
<h2 className="text-2xl font-semibold">All Products</h2>
<div className="flex items-center gap-4 w-full sm:w-auto">

<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500">All</button>
<button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500">Apparel</button>
<button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500">Accessories</button>
<button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500">Gear</button>
</div>

<div className="relative dropdown">
<button aria-expanded="false" aria-haspopup="true" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500" id="sortBtn">
            Sort
            <i className="w-4 h-4 transition" data-lucide="chevron-down"></i>
</button>
<div aria-label="Sort options" className="hidden absolute right-0 mt-2 w-44 rounded-lg bg-white shadow-lg ring-1 ring-black/5 p-2 space-y-1 text-sm" id="sortMenu" role="menu">
<button className="w-full px-3 py-2 rounded-md text-left hover:bg-gray-100" role="menuitem">Newest</button>
<button className="w-full px-3 py-2 rounded-md text-left hover:bg-gray-100" role="menuitem">Price: Low to High</button>
<button className="w-full px-3 py-2 rounded-md text-left hover:bg-gray-100" role="menuitem">Price: High to Low</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="productGrid"></div>

<template id="cardTpl"><div className="relative group bg-white p-4 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"><img alt="" className="w-full h-64 object-cover rounded-xl" src="" /><div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-indigo-500/40 transition pointer-events-none"></div><div className="pt-5 flex items-start justify-between gap-4"><div><h3 className="font-medium text-lg leading-snug name"></h3><p className="text-gray-500 text-sm mt-1 category"></p></div><span className="text-indigo-600 font-semibold price"></span></div><button aria-label="Add to cart" className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"><i className="w-4 h-4" data-lucide="shopping-cart"></i></button></div></template>
</section>

<footer className="border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
<div>
<h3 className="font-semibold mb-4">Check</h3>
<p className="text-gray-600">© <span id="year"></span> Check Inc.</p>
</div>
<div>
<h4 className="font-medium mb-3">Company</h4>
<ul className="space-y-2 text-gray-600">
<li><a className="hover:text-indigo-600" href="#">About</a></li>
<li><a className="hover:text-indigo-600" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-3">Support</h4>
<ul className="space-y-2 text-gray-600">
<li><a className="hover:text-indigo-600" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-600" href="#">Returns</a></li>
<li><a className="hover:text-indigo-600" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-3">Legal</h4>
<ul className="space-y-2 text-gray-600">
<li><a className="hover:text-indigo-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-600" href="#">Terms & Conditions</a></li>
</ul>
</div>
</div>
</footer>


    </>
  );
}
