import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        const mainImage = document.getElementById('mainImage');
        const zoomImage = document.getElementById('zoomImage');
        const zoomBtn = document.getElementById('zoomBtn');
        const zoomModal = document.getElementById('zoomModal');
        const zoomClose = document.getElementById('zoomClose');

        // Thumbnail switching
        const thumbButtons = document.querySelectorAll('.thumb');
        const thumbImgs = document.querySelectorAll('[data-thumb]');
        thumbImgs.forEach((img, idx) => {
          img.addEventListener('click', () => {
            mainImage.src = img.src.replace('400x400', '1200x900');
            zoomImage.src = mainImage.src;
            thumbButtons.forEach(b => b.classList.remove('ring-2', 'ring-neutral-900', 'ring-offset-2', 'ring-offset-white'));
            thumbButtons[idx].classList.add('ring-2', 'ring-neutral-900', 'ring-offset-2', 'ring-offset-white');
          });
        });

        // Zoom modal
        function openZoom() {
          zoomImage.src = mainImage.src;
          zoomModal.classList.remove('hidden');
          lucide.createIcons(); // ensure icons inside modal render
        }
        function closeZoom() {
          zoomModal.classList.add('hidden');
        }
        zoomBtn.addEventListener('click', openZoom);
        zoomClose.addEventListener('click', closeZoom);
        zoomModal.addEventListener('click', (e) => {
          if (e.target === zoomModal) closeZoom();
        });

        // Quantity controls (desktop + mobile)
        function clampQty(v) {
          const n = Math.max(1, parseInt(v || '1', 10));
          return Number.isNaN(n) ? 1 : n;
        }
        const qtyInput = document.getElementById('qtyInput');
        document.getElementById('qtyMinus').addEventListener('click', () => qtyInput.value = clampQty(qtyInput.value - 1));
        document.getElementById('qtyPlus').addEventListener('click', () => qtyInput.value = clampQty(Number(qtyInput.value) + 1));

        const mQtyInput = document.getElementById('mQtyInput');
        document.getElementById('mQtyMinus').addEventListener('click', () => mQtyInput.value = clampQty(mQtyInput.value - 1));
        document.getElementById('mQtyPlus').addEventListener('click', () => mQtyInput.value = clampQty(Number(mQtyInput.value) + 1));

        // Toast helper
        const toast = document.getElementById('toast');
        let toastTimer;
        function showToast(msg='Added to cart') {
          toast.querySelector('span').textContent = msg;
          toast.classList.remove('hidden');
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => toast.classList.add('hidden'), 2000);
        }

        // Actions
        document.getElementById('addCart').addEventListener('click', () => showToast());
        document.getElementById('mAddCart').addEventListener('click', () => showToast());
        document.getElementById('buyNow').addEventListener('click', () => showToast('Redirecting to checkout…'));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="flex items-center gap-2 text-neutral-900" href="#">
<div className="h-8 w-8 rounded-lg bg-neutral-900 text-white grid place-items-center">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Playful</span>
</a>
<span className="hidden sm:inline text-neutral-300 select-none">/</span>
<nav className="hidden sm:flex items-center gap-2 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition" href="#">Party</a>
<span className="text-neutral-300">/</span>
<a className="hover:text-neutral-900 transition" href="#">Favors</a>
<span className="text-neutral-300">/</span>
<span className="text-neutral-900">Giant Lollipop Kit</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center gap-2">
<svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="text-sm font-medium">Share</span>
</button>
<button aria-label="Wishlist" className="h-9 w-9 rounded-lg bg-neutral-100 hover:bg-neutral-200 grid place-items-center text-neutral-700">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="grid lg:grid-cols-12 gap-8">

<div className="lg:col-span-7">
<div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
<div className="relative group">
<img alt="Giant Lollipop Party Favors Kit hero" className="w-full aspect-[4/3] object-cover" id="mainImage" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f16f0b02-58bb-4f2f-937a-ac5e8c06c09b_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/90">
<svg className="lucide lucide-zoom-in h-4 w-4" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
<span className="text-xs font-medium">Click to zoom</span>
</div>
<button aria-label="Open image zoom" className="absolute inset-0" id="zoomBtn"></button>
</div>

<div className="p-3 sm:p-4">
<div className="grid grid-cols-5 gap-2 sm:gap-3">
<button className="thumb ring-2 ring-neutral-900 ring-offset-2 ring-offset-white rounded-lg overflow-hidden" data-active="true">
<img alt="thumb-1" className="w-full h-20 object-cover" data-thumb="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d0accb9-f74b-46ac-9a6e-2f2e1af4bf8d_800w.jpg" style={{}}/>
</button>
<button className="thumb rounded-lg overflow-hidden hover:ring-2 hover:ring-neutral-300">
<img alt="thumb-2" className="w-full h-20 object-cover" data-thumb="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c32fe04-d162-4771-ac9b-b420bfbfe0e3_320w.jpg"/>
</button>
<button className="thumb rounded-lg overflow-hidden hover:ring-2 hover:ring-neutral-300">
<img alt="thumb-3" className="w-full h-20 object-cover" data-thumb="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/62584797-b587-4d2e-87f7-b714371f575c_320w.jpg" style={{}}/>
</button>
<button className="thumb rounded-lg overflow-hidden hover:ring-2 hover:ring-neutral-300">
<img alt="thumb-4" className="w-full h-20 object-cover" data-thumb="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b201fbab-0845-4780-9fa7-7018d249dbca_320w.jpg"/>
</button>
<button className="thumb rounded-lg overflow-hidden hover:ring-2 hover:ring-neutral-300">
<img alt="thumb-5" className="w-full h-20 object-cover" data-thumb="" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4facd9f-e0bc-4f4e-a8c7-9d89b67603c3_320w.jpg"/>
</button>
</div>
</div>
</div>

<div className="mt-8 bg-white border border-neutral-200 rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What's included</h2>
<span className="text-sm text-neutral-500">24-piece party favor kit</span>
</div>
<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-party-popper h-5 w-5 text-violet-600" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
<span className="text-sm font-medium">Mini party poppers</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-sticker h-5 w-5 text-pink-600" data-lucide="sticker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path><path d="M14 3v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h.01"></path><path d="M16 13h.01"></path><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"></path></svg>
<span className="text-sm font-medium">Emoji stickers</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<i className="h-5 w-5 text-rose-600" data-lucide="balloon"></i>
<span className="text-sm font-medium">Lollipop wraps</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-puzzle h-5 w-5 text-blue-600" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
<span className="text-sm font-medium">Mini puzzles</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-smile h-5 w-5 text-amber-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<span className="text-sm font-medium">Foam rings</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-gift h-5 w-5 text-emerald-600" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span className="text-sm font-medium">Gift bags</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-sparkles h-5 w-5 text-fuchsia-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium">Glitter bands</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-shapes h-5 w-5 text-cyan-600" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect className="" height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
<span className="text-sm font-medium">Foam shapes</span>
</li>

<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-stars h-5 w-5 text-indigo-600" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium">Star clips</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-badge-check h-5 w-5 text-teal-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium">Reward tickets</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-dribbble h-5 w-5 text-purple-600" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
<span className="text-sm font-medium">Bouncy balls</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<svg className="lucide lucide-music-2 h-5 w-5 text-rose-600" data-lucide="music-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg>
<span className="text-sm font-medium">Whistles</span>
</li>
</ul>
<p className="mt-4 text-sm text-neutral-600">Exact colors and shapes may vary slightly to keep the assortment fun.</p>
</div>

<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="bg-white border border-neutral-200 rounded-2xl p-5">
<div className="flex items-center gap-2 text-neutral-700 mb-2">
<svg className="lucide lucide-palette h-4 w-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="font-medium">Color</h3>
</div>
<p className="text-sm text-neutral-600">Multicolor</p>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-5">
<div className="flex items-center gap-2 text-neutral-700 mb-2">
<svg className="lucide lucide-package h-4 w-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<h3 className="font-medium">Material</h3>
</div>
<p className="text-sm text-neutral-600">Paper, Plastic, Metal</p>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-5">
<div className="flex items-center gap-2 text-neutral-700 mb-2">
<svg className="lucide lucide-scale h-4 w-4" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
<h3 className="font-medium">Weight</h3>
</div>
<p className="text-sm text-neutral-600">1.7 kg (total kit)</p>
</div>
</div>
</div>

<aside className="lg:col-span-5">
<div className="bg-white border border-neutral-200 rounded-2xl p-6 sticky top-24">
<div className="flex items-start justify-between gap-4">
<h1 className="md:text-4xl text-3xl font-semibold tracking-tight">Giant Lollipop Party Favors Kit (24 Pack)</h1>
<button aria-label="Bookmark" className="shrink-0 h-9 w-9 rounded-lg bg-neutral-100 hover:bg-neutral-200 grid place-items-center text-neutral-700">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="flex items-center text-amber-500">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-4 w-4" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-sm text-neutral-600">4.9 · 36 reviews</span>
</div>
<div className="mt-4 flex items-center gap-3">
<div className="text-3xl font-semibold tracking-tight">S$71.18</div>
<span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">In stock</span>
</div>
<p className="mt-4 text-neutral-700 text-sm leading-6">
                  A ready-to-gift set of colorful favors wrapped like giant lollipops — perfect for birthdays, classrooms, and prize boxes. Easy to assemble, delightful to open.
                </p>

<div className="mt-5 grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<svg className="lucide lucide-truck h-4 w-4 text-neutral-900" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span>Free delivery over S$50</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-700">
<svg className="lucide lucide-shield-check h-4 w-4 text-neutral-900" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Secure checkout</span>
</div>
</div>

<div className="mt-6 flex items-center gap-4">
<div className="flex items-center border border-neutral-300 rounded-xl overflow-hidden">
<button aria-label="Decrease quantity" className="h-10 w-10 grid place-items-center text-neutral-700 hover:bg-neutral-100" id="qtyMinus">
<svg className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<input className="h-10 w-12 text-center outline-none text-neutral-900" id="qtyInput" min="1" type="number" value="1"/>
<button aria-label="Increase quantity" className="h-10 w-10 grid place-items-center text-neutral-700 hover:bg-neutral-100" id="qtyPlus">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<button className="flex-1 h-11 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition shadow-sm" id="addCart">
                    Add to Cart
                  </button>
</div>
<button className="mt-3 w-full h-11 rounded-xl bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition" id="buyNow">Buy Now</button>

<div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin h-5 w-5 text-neutral-700 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="text-sm">
<div className="font-medium">Delivering to</div>
<div className="text-neutral-600">Enter your postal code at checkout for exact dates</div>
</div>
</div>
</div>

<div className="mt-6 divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden">
<details className="group open:bg-white">
<summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
<span className="font-medium">Description</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
                      Each set wraps around a central stick to create the oversized lollipop effect. No glue needed. Ideal for party bags, classroom rewards, carnivals, and festivals.
                    </div>
</details>
<details className="">
<summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
<span className="font-medium">Specifications</span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
<div><span className="text-neutral-500">Unit count:</span> 24 favors</div>
<div><span className="text-neutral-500">Theme:</span> Birthday / Classroom</div>
<div><span className="text-neutral-500">Wrap size:</span> 28 cm tall</div>
<div><span className="text-neutral-500">Ages:</span> 3+ years</div>
</div>
</details>
<details className="">
<summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
<span className="font-medium">Shipping &amp; returns</span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
                      Standard delivery within 2–5 business days. Unopened kits may be returned within 30 days.
                    </div>
</details>
</div>

<div className="mt-8">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Reviews</h3>
<a className="text-sm text-neutral-700 hover:text-neutral-900" href="#">View all</a>
</div>
<div className="mt-3 space-y-4">
<article className="p-4 border border-neutral-200 rounded-xl bg-white">
<div className="flex items-center gap-2">
<div className="flex text-amber-500">
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-neutral-500">Verified purchase</span>
</div>
<p className="mt-2 text-sm text-neutral-700">Super cute favors! Assembly was quick and the kids loved the surprise mix.</p>
</article>
<article className="p-4 border border-neutral-200 rounded-xl bg-white">
<div className="flex items-center gap-2">
<div className="flex text-amber-500">
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-3.5 w-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-3.5 w-3.5" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs text-neutral-500">Verified purchase</span>
</div>
<p className="mt-2 text-sm text-neutral-700">Nice variety and bright colors. Will reorder for our next class party.</p>
</article>
</div>
</div>
</div>
</aside>
</div>
</section>
</main>

<div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-neutral-200 bg-white p-3">
<div className="mx-auto max-w-7xl flex items-center gap-3">
<div className="flex items-center border border-neutral-300 rounded-xl overflow-hidden">
<button className="h-10 w-10 grid place-items-center text-neutral-700" id="mQtyMinus">
<svg className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<input className="h-10 w-12 text-center outline-none text-neutral-900" id="mQtyInput" min="1" type="number" value="1"/>
<button className="h-10 w-10 grid place-items-center text-neutral-700" id="mQtyPlus">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<button className="flex-1 h-11 rounded-xl bg-neutral-900 text-white" id="mAddCart">Add to Cart</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="zoomModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
<div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
<div className="flex items-center justify-between p-3 border-b border-neutral-200">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<svg className="lucide lucide-image h-4 w-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span>Image preview</span>
</div>
<button className="h-9 w-9 rounded-lg bg-neutral-100 hover:bg-neutral-200 grid place-items-center" id="zoomClose">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-2 bg-neutral-50">
<div className="relative rounded-xl overflow-hidden bg-white">
<img alt="Zoomed image" className="w-full max-h-[75vh] object-contain" id="zoomImage" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/237a17c6-bb60-4aec-96a0-a4220d50aa36_800w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-50 hidden" id="toast">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900 text-white shadow-lg">
<svg className="lucide lucide-check-circle h-5 w-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm">Added to cart</span>
</div>
</div>

<footer className="mt-16 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex items-center justify-between">
<p>© 2025 Playful. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
<a className="hover:text-neutral-900" href="#">Support</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
