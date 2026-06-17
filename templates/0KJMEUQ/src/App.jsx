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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Shopping cart functionality
        const cartBtn = document.getElementById('cart-btn');
        const cartDrawer = document.getElementById('cart-drawer');
        const cartClose = document.getElementById('cart-close');
        const cartBackdrop = document.getElementById('cart-backdrop');
        
        function openCart() {
            cartDrawer.classList.remove('hidden');
            setTimeout(() => {
                cartBackdrop.classList.remove('opacity-0');
                cartDrawer.querySelector('aside').classList.remove('translate-x-full');
            }, 10);
        }
        
        function closeCart() {
            cartBackdrop.classList.add('opacity-0');
            cartDrawer.querySelector('aside').classList.add('translate-x-full');
            setTimeout(() => {
                cartDrawer.classList.add('hidden');
            }, 300);
        }
        
        cartBtn?.addEventListener('click', openCart);
        cartClose?.addEventListener('click', closeCart);
        cartBackdrop?.addEventListener('click', closeCart);

        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
            .animate-fade-in-delay-1 { animation: fadeIn 0.8s ease-out 0.2s both; }
            .animate-fade-in-delay-2 { animation: fadeIn 0.8s ease-out 0.4s both; }
            .animate-fade-in-delay-3 { animation: fadeIn 0.8s ease-out 0.6s both; }
            .animate-fade-in-delay-4 { animation: fadeIn 0.8s ease-out 0.8s both; }
        `;
        document.head.appendChild(style);
    
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
      
<div className="aura-background-component top-0 w-full -z-10 h-[780px] absolute"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="vRUeei6AVOtWgmHT28mN"></div>
</div>

<div className="absolute -z-10 inset-0 overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(1200px 600px at 50% 30%, #111827 10%, #9CA3AF 40%, transparent 70%)'}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-black/70 border-white/5">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="h-16 flex items-center justify-between gap-4">

<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/95bbcda7-777d-46c5-84fe-b4dfae5381a9_320w.jpg)] bg-cover rounded" href="#"></a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition text-white/60 hover:text-white font-geist" href="#cameras" style={{}}>Cameras</a>
<a className="text-sm transition text-white/60 hover:text-white font-geist" href="#lenses" style={{}}>Lenses</a>
<a className="text-sm transition text-white/60 hover:text-white font-geist" href="#accessories" style={{}}>Accessories</a>
<a className="text-sm transition text-white/60 hover:text-white font-geist" href="#lighting" style={{}}>Lighting</a>
<a className="text-sm transition text-white/60 hover:text-white font-geist" href="#audio" style={{}}>Audio</a>
<a className="text-sm transition text-rose-400 hover:text-rose-300 font-geist" href="#deals" style={{}}>Deals</a>
</nav>

<div className="hidden lg:flex flex-1 max-w-xl mx-6">
<div className="relative w-full">
<input className="w-full h-10 pr-10 pl-10 rounded-xl border backdrop-blur placeholder-white/40 text-sm outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition border-white/5 bg-black/70 text-white" placeholder="Search cameras, lenses, brands..." type="text"/>
<div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-white/50">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="absolute right-2 inset-y-0 my-auto inline-flex items-center justify-center h-7 px-2 rounded-lg text-xs transition bg-white/5 text-white/60 hover:text-white hover:bg-white/10 font-geist" style={{}}>⌘K</button>
</div>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex transition hover:bg-white/5 text-sm text-white/70 bg-black h-9 border-white/5 border rounded-lg pr-4 pl-4 items-center justify-center">
<span className="font-geist" style={{}}>Account</span>
</button>
<button aria-label="Shopping cart" className="relative inline-flex items-center justify-center rounded-lg border h-9 w-9 transition border-white/5 bg-black text-white/70 hover:bg-white/5" id="cart-btn">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.75 7H5.12"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 min-w-[16px] px-1 rounded-full text-[10px] leading-none bg-white text-black font-geist" id="cart-count" style={{}}>0</span>
</button>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border h-9 w-9 transition border-white/5 bg-black text-white/70 hover:bg-white/5" id="mobile-menu-btn">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden pb-3">
<div className="relative">
<input className="w-full h-10 pr-10 pl-10 rounded-xl border backdrop-blur placeholder-white/40 text-sm outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition border-white/5 bg-black/70 text-white" placeholder="Search cameras, lenses, brands..." type="text"/>
<div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-white/50">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
</div>

<div className="md:hidden hidden border-t backdrop-blur border-white/5 bg-black/80" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
<nav className="grid grid-cols-2 gap-3">
<a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white font-geist" href="#cameras" style={{}}>Cameras</a>
<a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white font-geist" href="#lenses" style={{}}>Lenses</a>
<a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white font-geist" href="#accessories" style={{}}>Accessories</a>
<a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white font-geist" href="#lighting" style={{}}>Lighting</a>
<a className="text-sm px-4 py-3 rounded-xl border transition border-rose-800 text-rose-400 hover:bg-rose-950 font-geist" href="#deals" style={{}}>Deals</a>
<a className="text-sm px-4 py-3 rounded-xl border transition border-white/5 hover:bg-white/5 text-white/70 hover:text-white font-geist" href="#support" style={{}}>Support</a>
</nav>
</div>
</div>
</header>

<section className="sm:px-8 max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6">
<div className="">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in-delay-3 w-fit mb-2">
<div className="flex gap-2 bg-white/5 border-white/5 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur items-center">
<span className="text-xs text-white/70 font-geist">New Store Opening!</span>
</div>
</div><h1 className="sm:text-7xl lg:text-8xl leading-[1.02] animate-fade-in text-5xl font-medium text-white tracking-tighter font-geist" style={{}}>Professional gear for bold creators</h1>
<p className="sm:text-2xl leading-relaxed text-xl mt-6 text-white/60 animate-fade-in-delay-1 tracking-tighter font-geist font-medium" style={{}}>Premium equipment. Expert advice. Delivered globally.</p>
<div className="flex flex-wrap gap-4 mt-10 items-center animate-fade-in-delay-2">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center">

<span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl font-geist">Shop cameras</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 blur-md rounded-xl font-geist">Shop cameras</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
</button>
<a className="inline-flex items-center gap-2 text-sm transition text-white/70 hover:text-white font-geist" href="#featured" style={{}}>
                            View featured gear
                            <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="flex gap-2 text-white/40 mt-6 items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div><div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in-delay-3 w-fit mt-2">
<div className="flex gap-2 bg-white/5 border-white/5 border rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur items-center">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m7.5 4.27 9 5.15"></path><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xs text-white/70 font-geist">Free shipping</span>
</div>
<div className="flex gap-2 bg-white/5 border-white/5 border rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur items-center">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path className="" d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-white/70 font-geist">Authorized dealer</span>
</div>
<div className="flex gap-2 bg-white/5 border-white/5 border rounded-full pt-2 pr-3 pb-2 pl-3 backdrop-blur items-center">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs text-white/70 font-geist">2-year warranty</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full pt-16 pr-6 pb-16 pl-6">
<div className="text-center">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide font-geist">Trusted by players and creators worldwide</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 items-center justify-items-center">
<a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eb918941-1db2-423a-ab9a-2881b35c08bc_320w.jpg)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b5b2de50-6ebb-43d6-a4a6-ecfe53a41b81_320w.jpg)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d9433c5e-003d-44cf-ac47-432b24fc3c49_320w.jpg)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0758808b-2344-4531-b769-f80e56a74ba7_320w.jpg)] bg-cover rounded" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fcc2e06d-dbfd-44d0-9a5d-9b80494f630d_320w.jpg)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center h-[100px] w-[150px] bg-center mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2fcfc21f-a64e-4090-ba33-8851db754b1b_320w.jpg)] bg-cover rounded" href="#"></a>
</div>
</div><div className="flex gap-2 text-white/40 mt-6 mr-auto mb-24 ml-auto pr-6 pl-6 items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div><div className="w-full max-w-7xl mt-6 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="relative">
<div className="text-sm text-white/40 font-geist">(Featured)</div>
<div className="text-center">
<h2 className="text-5xl sm:text-7xl lg:text-8xl leading-none text-white/90 tracking-tight uppercase font-geist font-medium" style={{}}>CAPTURE</h2>
<h2 className="text-5xl sm:text-7xl lg:text-8xl leading-none text-white/90 tracking-tight uppercase mt-1 font-geist font-medium" style={{}}>THE MOMENT</h2>
<div className="flex gap-2 text-white/40 mt-6 items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div>
<p className="mt-6 text-xl sm:text-2xl text-white/70 tracking-tight max-w-3xl mx-auto font-geist font-medium" style={{}}>Professional camera equipment designed for creators who demand excellence. Every frame tells a story—make yours unforgettable.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Editorial portrait in cool tones" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3c39a55-81b6-4f82-8226-b3f5996357fc_800w.jpg" style={{}}/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Motion-led dance silhouette" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/10a964a6-0dd5-433d-81b4-77149d138bdf_800w.jpg" style={{}}/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Purple cinematic lighting study" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/53b394ef-9752-457f-aea2-87c90f69e56b_800w.jpg" style={{}}/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Fashion portrait with sunglasses" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0d7cc76-a8ea-4112-a0e6-f3eb9be4d5d1_800w.jpg"/>
</div>
</div>
</div>
</div>
<div className="flex gap-2 text-white/40 max-w-7xl mt-6 mr-auto mb-24 ml-auto items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div><section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-white/5">
<div className="flex items-center gap-3">
<h2 className="text-4xl sm:text-5xl text-white tracking-tighter font-geist font-medium" style={{}}>Featured Products</h2>
<span className="text-lg text-white/50 font-geist" style={{}}>Pro Choice</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border text-sm transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" id="filter-btn" style={{}}>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                        Filters
                    </button>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border text-sm border-white/5 bg-black text-white/70 font-geist" style={{}}>Cameras</span>
<span className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border text-sm border-white/5 bg-black text-white/70 font-geist" style={{}}>Lenses</span>
<span className="inline-flex items-center gap-2 px-4 h-10 rounded-xl border text-sm border-white/5 bg-black text-white/70 font-geist" style={{}}>Accessories</span>
</div>
</div>
</div>
</section>

<section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="py-12 sm:py-16">

<article className="mb-12 rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="grid lg:grid-cols-2 gap-0">
<div className="relative">
<img alt="Canon EOS R5" className="w-full h-[300px] lg:h-[400px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/34fa9afc-3d27-4ab4-b6b5-cd6e89cab95b_1600w.jpg"/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 text-xs border border-emerald-500/20 text-emerald-300 font-geist" style={{}}>Editor's Choice</div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<h3 className="lg:text-3xl text-2xl mb-4 text-white tracking-tighter font-geist font-medium" style={{}}>Canon EOS R5 Mirrorless Camera</h3>
<p className="text-lg mb-6 text-white/60 font-geist" style={{}}>Professional 45MP full-frame mirrorless camera with 8K video recording, perfect for photographers and videographers demanding the highest quality.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-2xl text-white tracking-tighter font-geist font-medium" style={{}}>$3,899</span>
<span className="text-lg text-white/50 line-through font-geist">$4,299</span>
</div>
<button className="inline-flex items-center gap-2 h-12 px-6 rounded-xl transition bg-white text-black hover:bg-white/90 font-geist" style={{}}>
                                Add to cart
                                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.75 7H5.12"></path></svg>
</button>
</div>
</div>
</div>
</article>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="relative">
<img alt="Sony A7 IV" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b201fbab-0845-4780-9fa7-7018d249dbca_800w.jpg"/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-rose-500/10 border border-rose-500/20 text-rose-300 font-geist" style={{}}>Hot Deal</div>
<button aria-label="Add to wishlist" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border transition bg-black/80 border-white/5 text-white/70 hover:text-white hover:bg-black">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl mb-3 text-white tracking-tighter font-geist font-medium" style={{}}>Sony A7 IV Mirrorless Camera</h3>
<p className="text-base mb-4 text-white/60 font-geist" style={{}}>33MP full-frame sensor with advanced autofocus.</p>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold text-white font-geist">$2,499</span>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                                Add to cart
                            </button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="relative">
<img alt="Canon RF 24-70mm" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/edab2a0c-3815-44d9-94fb-d7ebea501c33_800w.jpg"/>
<button aria-label="Add to wishlist" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border transition bg-black/80 border-white/5 text-white/70 hover:text-white hover:bg-black">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl mb-3 text-white tracking-tighter font-geist font-medium" style={{}}>Canon RF 24-70mm f/2.8L</h3>
<p className="text-base mb-4 text-white/60 font-geist" style={{}}>Professional zoom lens with constant f/2.8 aperture.</p>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold text-white font-geist">$2,299</span>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                                Add to cart
                            </button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="relative">
<img alt="DJI Ronin-S" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e69626e7-2c40-4d3f-ab56-e183cf1702c4_800w.jpg"/>
<button aria-label="Add to wishlist" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border transition bg-black/80 border-white/5 text-white/70 hover:text-white hover:bg-black">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl mb-3 text-white tracking-tighter font-geist font-medium" style={{}}>DJI Ronin-S Gimbal</h3>
<p className="text-base mb-4 text-white/60 font-geist" style={{}}>Professional 3-axis gimbal for smooth video shots.</p>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold text-white font-geist">$699</span>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                                Add to cart
                            </button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="relative">
<img alt="Nikon Z9" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dd7739ca-a486-4c3c-9a56-65ed72d536a6_800w.jpg"/>
<div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 text-xs border border-emerald-500/20 text-emerald-300 font-geist" style={{}}>New Arrival</div>
<button aria-label="Add to wishlist" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border transition bg-black/80 border-white/5 text-white/70 hover:text-white hover:bg-black">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl mb-3 text-white tracking-tighter font-geist font-medium" style={{}}>Nikon Z9 Mirrorless Camera</h3>
<p className="text-base mb-4 text-white/60 font-geist" style={{}}>45.7MP full-frame flagship with 8K video.</p>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold text-white font-geist">$5,499</span>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                                Add to cart
                            </button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="relative">
<img alt="Godox Lighting Kit" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cbb7d5a5-338c-4742-aa67-75c898a97678_800w.jpg"/>
<button aria-label="Add to wishlist" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border transition bg-black/80 border-white/5 text-white/70 hover:text-white hover:bg-black">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl mb-3 text-white tracking-tighter font-geist font-medium" style={{}}>Godox Studio Lighting Kit</h3>
<p className="text-base mb-4 text-white/60 font-geist" style={{}}>Complete 3-light studio setup with stands.</p>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold text-white font-geist">$899</span>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                                Add to cart
                            </button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 bg-black border-white/5">
<div className="relative">
<img alt="Audio Equipment" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d6402f2-db30-4d17-8b51-47ee62c763f1_800w.jpg"/>
<button aria-label="Add to wishlist" className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border transition bg-black/80 border-white/5 text-white/70 hover:text-white hover:bg-black">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path></svg>
</button>
</div>
<div className="p-6">
<h3 className="text-2xl mb-3 text-white tracking-tighter font-geist font-medium" style={{}}>Rode Wireless GO II</h3>
<p className="text-base mb-4 text-white/60 font-geist" style={{}}>Dual-channel wireless microphone system.</p>
<div className="flex items-center justify-between">
<span className="text-xl font-semibold text-white font-geist">$299</span>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                                Add to cart
                            </button>
</div>
</div>
</article>
</div>

<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5 font-geist" style={{}}>
                    Load more products
                    <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</section>

<div className="flex gap-2 text-white/40 max-w-7xl mt-6 mr-auto ml-auto items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div><section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="py-12 sm:py-16">
<div className="text-sm text-white/40 font-geist">(Recognition)</div>
<h2 className="mt-4 text-5xl sm:text-7xl lg:text-8xl leading-none text-white tracking-tight font-geist font-medium" style={{}}>AWARD WINNING</h2>
<h2 className="text-5xl sm:text-7xl lg:text-8xl leading-none text-white tracking-tight font-geist font-medium" style={{}}>EXCELLENCE</h2>
<div className="mt-6 flex items-center gap-3 text-white/30">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div>
<div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
<div className="hidden lg:block lg:col-span-5"></div>
<div className="lg:col-span-7">
<p className="text-xl sm:text-2xl text-white/70 tracking-tight font-geist font-medium" style={{}}>Our commitment to professional photography excellence has been recognized by leading industry organizations and publications worldwide.</p>
<div className="mt-8 border-t border-white/10 divide-y divide-white/10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Camera Retailer Awards</div>
<div className="text-base text-white/80 font-geist">Best Online Camera Store</div>
<div className="text-base text-white/60 text-right font-geist">(2024)</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Professional Photo Magazine</div>
<div className="text-base text-white/80 font-geist">Dealer of the Year</div>
<div className="text-base text-white/60 text-right font-geist">(2024)</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Industry Excellence Awards</div>
<div className="text-base text-white/80 font-geist">Customer Service Excellence</div>
<div className="text-base text-white/60 text-right font-geist">(2024)</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Digital Photography Review</div>
<div className="text-base text-white/80 font-geist">Trusted Gear Partner</div>
<div className="text-base text-white/60 text-right font-geist">(2024)</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Imaging Trade Association</div>
<div className="text-base text-white/80 font-geist">Innovation in Retail</div>
<div className="text-base text-white/60 text-right font-geist">(2023)</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Photo Industry Awards</div>
<div className="text-base text-white/80 font-geist">Best Equipment Selection</div>
<div className="text-base text-white/60 text-right font-geist">(2023)</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-geist">Retail Excellence Awards</div>
<div className="text-base text-white/80 font-geist">Outstanding User Experience</div>
<div className="text-base text-white/60 text-right font-geist">(2023)</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="flex gap-2 text-white/40 max-w-7xl mt-6 mr-auto ml-auto items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div><section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="py-20 sm:py-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<article className="sm:p-12 bg-black border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 transition hover:bg-white/5 hover:border-white/10">
<h3 className="text-3xl sm:text-4xl text-white tracking-tight font-geist font-medium" style={{}}>Gear financing program</h3>

<div className="mt-6 grid grid-cols-2 gap-6">
<div className="">
<p className="text-xs uppercase text-white/50 font-geist">Equipment Value</p>
<p className="mt-1 text-2xl text-white tracking-tight font-geist font-medium" style={{}}>$349,900</p>
</div>
<div className="text-right">
<p className="text-xs uppercase text-white/50 font-geist">Financed</p>
<p className="mt-1 text-2xl text-white tracking-tight font-geist font-medium" style={{}}>$157,230</p>
</div>
</div>

<div className="mt-8">
<div className="relative h-2 w-full rounded-full bg-white/10">
<div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-200 shadow-[0_6px_20px_rgba(255,255,255,0.12)] transition-all" style={{width: '45%'}}></div>

<span className="absolute -top-1 h-4 w-0.5 bg-white/40 left-[30%]"></span>

<span className="absolute -top-1 h-4 w-0.5 bg-white/40 right-0"></span>
</div>
<div className="mt-3 flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="text-white/50 uppercase font-geist">Goal 1</span>
<span className="text-white/80 font-geist">$100,000</span>
</div>
<div className="flex items-center gap-2">
<span className="text-white/50 uppercase font-geist">Goal 2</span>
<span className="text-white/80 font-geist">$350,000</span>
</div>
</div>
</div>

<div className="mt-10">
<p className="text-base text-white/70 font-geist">Special financing ends in:</p>
<p className="mt-4 text-5xl sm:text-7xl leading-none text-white tracking-tight font-geist font-medium" style={{}}>07:14:32:18</p>
</div>

<div className="mt-8">
<button className="inline-flex gap-3 sm:h-14 sm:px-8 transition transform hover:scale-[1.02] hover:ring-2 hover:ring-white/20 text-white font-geist h-12 rounded-xl pr-6 pl-6 shadow-xl items-center" style={{background: 'linear-gradient(135deg, #374151 0%, #4B5563 50%, #6B7280 100%)', boxShadow: '0 12px 24px rgba(255, 255, 255, 0.12), inset 0 1px 0 rgba(255,255,255,0.08)'}}>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
<svg className="lucide lucide-credit-card w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="credit-card" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</span>
<span className="text-sm sm:text-base font-semibold tracking-tight font-geist">Apply for Financing</span>
</button>
</div>
</article>

<article className="rounded-3xl border border-white/5 bg-black p-8 sm:p-12">
<h3 className="text-3xl sm:text-4xl text-white tracking-tight font-geist font-medium" style={{}}>Financing details</h3>
<div className="mt-6 border-t border-white/10 divide-y divide-white/10">
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Application deadline</span>
<span className="text-sm text-right text-white/80 font-geist">March 15, 2025</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Program ends</span>
<span className="text-sm text-right text-white/80 font-geist">December 31, 2025</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Available credit</span>
<span className="text-sm text-right text-white/80 font-geist">$500,000</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Equipment allocated</span>
<span className="text-sm text-right text-white/80 font-geist">$350,000</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Max financing</span>
<span className="text-sm text-right text-white/80 font-geist">$100,000</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Min purchase</span>
<span className="text-sm text-right text-white/80 font-geist">$5,000</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Interest rate</span>
<span className="text-sm text-right text-white/80 font-geist">0% APR*</span>
</div>
<div className="grid grid-cols-2 gap-4 py-4">
<span className="text-sm text-white/60 font-geist">Accepted brands</span>
<span className="text-sm text-right font-geist"><span className="text-sky-400 font-geist">Canon, Sony, Nikon, Fuji</span></span>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="sm:px-8 max-w-full mr-auto ml-auto pt-16 pr-6 pb-12 pl-6">
<div className="relative">
<div className="text-sm text-white/40 font-geist">(Connect)</div>
<div className="text-center">
<h2 className="text-5xl sm:text-7xl lg:text-8xl leading-none text-white/90 tracking-tight uppercase font-geist font-medium" style={{}}>JOIN THE</h2>
<h2 className="text-5xl sm:text-7xl lg:text-8xl leading-none text-white/90 tracking-tight uppercase mt-1 font-geist font-medium" style={{}}>COMMUNITY</h2>
<div className="flex gap-2 text-white/40 mt-6 items-center">
<span className="text-base font-geist">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-geist">+</span>
</div>
<p className="mt-6 text-xl sm:text-2xl text-white/70 tracking-tight max-w-3xl mx-auto font-geist font-medium" style={{}}>Professional camera gear for bold creators. Expert advice, premium equipment, and worldwide shipping.</p>
</div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 px-3 py-2 text-sm text-emerald-600 mb-4 font-geist">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    Newsletter
                </div>
<h4 className="text-xl text-white tracking-tighter mb-4 font-geist">Stay updated</h4>
<form className="space-y-3">
<input className="w-full h-10 px-4 rounded-xl border text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 backdrop-blur border-white/20 bg-white/10 text-white" placeholder="you@domain.com" required="" type="email"/>
<button className="w-full inline-flex items-center gap-2 h-10 px-4 rounded-xl ring-1 text-sm transition ring-white/20 text-white bg-white/10 hover:bg-white/20 justify-center font-geist">
                        Join
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-6">
<h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-geist">Products</h5>
<ul className="space-y-3 text-base text-white/70">
<li className=""><a className="transition hover:text-white font-geist" href="#cameras">Cameras</a></li>
<li><a className="transition hover:text-white font-geist" href="#lenses">Lenses</a></li>
<li className=""><a className="transition hover:text-white font-geist" href="#accessories">Accessories</a></li>
<li className=""><a className="transition hover:text-white font-geist" href="#lighting">Lighting</a></li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-6">
<h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-geist">Support</h5>
<ul className="space-y-3 text-base text-white/70">
<li><a className="transition hover:text-white font-geist" href="#consultation">Expert Advice</a></li>
<li><a className="transition hover:text-white font-geist" href="#shipping">Shipping Info</a></li>
<li><a className="transition hover:text-white font-geist" href="#returns">Returns</a></li>
<li><a className="transition hover:text-white font-geist" href="#warranty">Warranty</a></li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-6">
<h5 className="text-sm uppercase tracking-wider font-medium mb-4 text-white/80 font-geist">Company</h5>
<ul className="space-y-3 text-base text-white/70">
<li><a className="transition hover:text-white font-geist" href="#about">About</a></li>
<li><a className="transition hover:text-white font-geist" href="#careers">Careers</a></li>
<li><a className="transition hover:text-white font-geist" href="#blog">Blog</a></li>
<li className=""><a className="transition hover:text-white font-geist" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/95bbcda7-777d-46c5-84fe-b4dfae5381a9_320w.jpg)] bg-cover rounded" href="#"></a>
<div className="flex items-center gap-4 text-base text-white/60">
<span className="font-geist">© 2025 Bold Camera</span>
<span className="hidden sm:inline text-white/20 font-geist">|</span>
<a className="transition hover:text-white font-geist" href="#privacy">Privacy</a>
<span className="text-white/20 font-geist">/</span>
<a className="transition hover:text-white font-geist" href="#terms">Terms</a>
</div>
</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-white/5 text-white/70 hover:text-white hover:bg-white/10" href="https://instagram.com" rel="noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-white/5 text-white/70 hover:text-white hover:bg-white/10" href="https://youtube.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20"><path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5v-7L16 12z"></path></svg>
</a>
<a aria-label="Twitter/X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition bg-white/5 text-white/70 hover:text-white hover:bg-white/10" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 16 16" width="20"><path d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path></svg>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="cart-drawer">
<div className="absolute inset-0 opacity-0 transition-opacity bg-black/40" id="cart-backdrop"></div>
<aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] shadow-2xl border-l transform translate-x-full transition-transform bg-black border-white/5">
<div className="flex h-full flex-col">
<header className="flex items-center justify-between px-6 h-16 border-b border-white/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.75 7H5.12"></path></svg>
<h3 className="text-base font-medium tracking-tight text-white font-geist" style={{}}>Shopping cart</h3>
</div>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-xl border transition border-white/5 bg-black text-white/70 hover:bg-white/5" id="cart-close">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<div className="flex-1 px-6 py-12 text-center text-white/60" id="cart-empty">
<div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white/60">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.75 7H5.12"></path></svg>
</div>
<p className="text-base font-geist" style={{}}>Your cart is empty.</p>
</div>
</div>
</aside>
</div>


    </>
  );
}
