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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Pause marquee animation on hover of the marquee container
      document.addEventListener('DOMContentLoaded', function () {
        const marquee = document.querySelector('.marquee-track');
        const container = marquee?.parentElement?.parentElement;

        if (!marquee || !container) return;

        container.addEventListener('mouseenter', function () {
          marquee.style.animationPlayState = 'paused';
        });

        container.addEventListener('mouseleave', function () {
          marquee.style.animationPlayState = 'running';
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
      

<div className="bg-[#1a4d8d]/10 text-[#1a4d8d] border-b border-[#1a4d8d]/20">
<div className="sm:px-6 lg:px-8 sm:text-sm text-xs text-center max-w-7xl mr-auto ml-auto pt-2 pr-4 pb-2 pl-4">Tukar Timbangan Laboratory Anda, Hemat Hingga 40%!</div>
</div>

<header className="sticky top-0 z-50 supports-[backdrop-filter]:bg-white/70 bg-white/90 border-neutral-200 border-b backdrop-blur">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 relative items-center justify-between">

<a aria-label="Home" className="inline-flex items-center gap-2 group" href="#">
<span className="sr-only">Brand</span>
</a>

<nav className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2 items-center">
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition" href="#">Beranda</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition" href="#">Produk</a>
<a className="hover:text-neutral-900 transition text-sm text-neutral-700" href="#">Kontak</a>
</nav>

<div className="hidden sm:flex items-center gap-3">
<button className="group inline-flex transition-colors duration-200 hover:bg-[#18467f] hover:border-[#18467f] text-sm text-neutral-700 bg-white border-neutral-200 border rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-x-2 items-center">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(22, 163, 74)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .21 5.29.21 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.8 11.8 0 0 0 5.67 1.44h.01c6.56 0 11.85-5.29 11.85-11.85 0-3.17-1.24-6.16-3.4-8.44ZM12.07 21.3a9.42 9.42 0 0 1-4.8-1.31l-.35-.21-3.8.99 1.02-3.7-.23-.38a9.42 9.42 0 0 1-1.45-5.03c0-5.19 4.22-9.41 9.41-9.41 2.52 0 4.89.98 6.68 2.77a9.41 9.41 0 0 1 2.76 6.66c0 5.19-4.22 9.41-9.41 9.41Zm5.46-7.05c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.21-.57-.36Z"></path></svg>
<span className="group-hover:text-white transition-colors duration-200">
  Hubungi kami
</span>
</button>
<button aria-label="Search" className="relative inline-flex items-center justify-center h-10 w-10 rounded-md bg-white hover:bg-neutral-50 border border-neutral-200 transition focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/30">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle className="" cx="11" cy="11" r="8"></circle></svg>
</button>
</div>

<div className="flex sm:hidden items-center gap-2">
<button aria-label="Search" className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white hover:bg-neutral-50 border border-neutral-200 transition focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/30">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Search" className="relative inline-flex items-center justify-center h-10 w-10 rounded-md bg-white hover:bg-neutral-50 border border-neutral-200 transition focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/30">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle menu" className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white hover:bg-neutral-50 border border-neutral-200 transition focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/30" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" id="mobileMenuIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-200" id="mobileMenu">
<div className="px-4 py-4 space-y-4">
<nav className="grid gap-2">
<a className="px-3 py-2 rounded-md text-sm text-neutral-900 bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition" href="#">Beranda</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-700 hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition" href="#">Produk</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-700 hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition" href="#">Kontak</a>
</nav>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 text-sm bg-white hover:bg-neutral-50 border border-neutral-200 rounded-md px-3 py-2 text-neutral-700 transition focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/30">
<svg aria-hidden="true" className="h-4 w-4 text-green-600" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .21 5.29.21 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.8 11.8 0 0 0 5.67 1.44h.01c6.56 0 11.85-5.29 11.85-11.85 0-3.17-1.24-6.16-3.4-8.44ZM12.07 21.3a9.42 9.42 0 0 1-4.8-1.31l-.35-.21-3.8.99 1.02-3.7-.23-.38a9.42 9.42 0 0 1-1.45-5.03c0-5.19 4.22-9.41 9.41-9.41 2.52 0 4.89.98 6.68 2.77a9.41 9.41 0 0 1 2.76 6.66c0 5.19-4.22 9.41-9.41 9.41Zm5.46-7.05c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.21-.57-.36Z"></path></svg>
              Hubungi kami
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 sm:py-14 lg:py-20 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="">
<div className="inline-flex gap-2 sm:text-sm text-xs text-[#1a4d8d] bg-[#1a4d8d]/10 border-[#1a4d8d]/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 items-center">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              New arrival
            </div>
<h1 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-neutral-900 tracking-tight font-inter mt-4">Didesain untuk Akurasi, Dibangun untuk Kepatuhan</h1>
<p className="sm:mt-4 sm:text-base leading-relaxed text-sm text-neutral-600 mt-3">Radwag Mengintegrasikan Teknologi Timbangan Digital dengan Standar Global untuk Memastikan Akurasi, Kepatuhan Regulasi, dan Integritas Data Terbaik di Setiap Proses Bisnis Anda.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 hover:bg-[#18467f] transition focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/40 text-sm font-medium text-white bg-[#1a4d8d] rounded-md pt-3 pr-5 pb-3 pl-5" href="#products">Minta
  Harga<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></a>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
<div className="bg-white border-neutral-200 border rounded-lg pt-3 pr-4 pb-3 pl-4">
<div className="text-xl font-semibold text-neutral-900 tracking-tight">24h</div>
<div className="text-xs text-neutral-500">Support</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white px-4 py-3">
<div className="text-xl font-semibold text-neutral-900 tracking-tight">4.8★</div>
<div className="text-xs text-neutral-500">Average rating</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white px-4 py-3">
<div className="text-xl font-semibold tracking-tight text-neutral-900">2yr</div>
<div className="text-xs text-neutral-500">Warranty</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-b from-neutral-100 to-white">
<img alt="Hero product setup" className="object-center w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c23ee80d-1e8d-494b-a29c-de38c60e19aa_1600w.jpg"/>
</div>
<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50/60">
<div className="sm:px-6 lg:px-8 sm:py-8 max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="flex gap-4 text-center mb-4 gap-x-4 gap-y-4 items-center justify-between">
<h2 className="sm:text-2xl text-sm font-semibold text-neutral-700 tracking-tight text-center" style={{width: '100%'}}>Dipercaya oleh lebih dari 10.000 pengguna</h2>
</div>
<div aria-label="Our clients" className="relative overflow-hidden group">

<div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-neutral-50/90 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-neutral-50/90 to-transparent"></div>

<div className="flex items-center gap-8 sm:gap-10 lg:gap-12 marquee-track" style={{animation: '30s linear 0s infinite normal none running logo-marquee', willChange: 'transform'}}>

<div className="flex items-center gap-8 sm:gap-10 lg:gap-12">
<img alt="Client 1" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecf1a66d-57a0-4a11-914d-22afbc663511_800w.png"/>
<img alt="Client 2" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Client 3" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Client 4" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
<img alt="Client 5" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
<img alt="Client 6" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
<img alt="Client 7" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
</div>

<div aria-hidden="true" className="flex items-center gap-8 sm:gap-10 lg:gap-12">
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecf1a66d-57a0-4a11-914d-22afbc663511_800w.png"/>
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
<img alt="" className="h-6 sm:h-7 lg:h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-200 ease-out hover:scale-105 mx-auto object-contain" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=600&amp;auto=format&amp;fit=max"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white" id="products">
<div className="sm:px-6 lg:px-8 sm:py-8 max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 gap-x-4 gap-y-4">
<h2 className="sm:text-2xl text-xl font-semibold text-neutral-900 tracking-tight text-center">Produk Kami</h2>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

<article className="group rounded-lg overflow-hidden border border-neutral-200 bg-white hover:bg-neutral-50 transition">
<div className="relative">
<img alt="Mechanical Keyboard Pro" className="sm:h-56 w-full h-48 object-cover" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&amp;w=1620&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-neutral-900">Analitycal Balance</h3>
<p className="mt-1 text-sm text-neutral-600">Hot‑swap switches, RGB backlight.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-neutral-200 bg-white hover:bg-neutral-50 transition">
<div className="relative">
<img alt="Wireless Headset X" className="h-48 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=1620&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-neutral-900">Wireless Headset X</h3>
<p className="mt-1 text-sm text-neutral-600">Low‑latency, noise isolation.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-neutral-200 bg-white hover:bg-neutral-50 transition">
<div className="relative">
<img alt="Precision Gaming Mouse" className="h-48 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-neutral-900">Precision Gaming Mouse</h3>
<p className="mt-1 text-sm text-neutral-600">69g ultralight, 26K sensor.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-neutral-200 bg-white hover:bg-neutral-50 transition">
<div className="relative">
<img alt="Studio Microphone" className="h-48 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1620&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-neutral-900">Studio Microphone</h3>
<p className="mt-1 text-sm text-neutral-600">Cardioid, pro voice clarity.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden border border-neutral-200 bg-white hover:bg-neutral-50 transition">
<div className="relative">
<img alt="Aluminum Laptop Stand" className="h-48 sm:h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-neutral-900">Aluminum Laptop Stand</h3>
<p className="mt-1 text-sm text-neutral-600">Ergonomic height &amp; cooling.</p>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<h2 className="text-center sm:text-2xl text-xl font-semibold tracking-tight text-neutral-900">Mengapa Memilih Kami</h2>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
<div className="rounded-lg border border-neutral-200 bg-white p-6 text-center hover:bg-neutral-50 transition">
<div className="mx-auto h-10 w-10 rounded-md grid place-content-center bg-neutral-50 border border-neutral-200 mb-3">
<svg className="h-5 w-5 text-neutral-700" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-900">Akurasi Tinggi</h3>
<p className="mt-1 text-sm text-neutral-600">Pengukuran presisi untuk proses kritis Anda.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-6 text-center hover:bg-neutral-50 transition">
<div className="mx-auto h-10 w-10 rounded-md grid place-content-center bg-neutral-50 border border-neutral-200 mb-3">
<svg className="h-5 w-5 text-neutral-700" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-900">Kepatuhan Regulasi</h3>
<p className="mt-1 text-sm text-neutral-600">Terpenuhi standar internasional dan audit.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-6 text-center hover:bg-neutral-50 transition">
<div className="mx-auto h-10 w-10 rounded-md grid place-content-center bg-neutral-50 border border-neutral-200 mb-3">
<svg className="h-5 w-5 text-neutral-700" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-6a9 9 0 1 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-900">Dukungan Respon Cepat</h3>
<p className="mt-1 text-sm text-neutral-600">Tim ahli siap membantu 24/7.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-6 text-center hover:bg-neutral-50 transition">
<div className="mx-auto h-10 w-10 rounded-md grid place-content-center bg-neutral-50 border border-neutral-200 mb-3">
<svg className="h-5 w-5 text-neutral-700" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-900">Integrasi Data</h3>
<p className="mt-1 text-sm text-neutral-600">Terhubung mulus ke sistem Anda.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-6 text-center hover:bg-neutral-50 transition">
<div className="mx-auto h-10 w-10 rounded-md grid place-content-center bg-neutral-50 border border-neutral-200 mb-3">
<svg className="h-5 w-5 text-neutral-700" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.86 10.54a3 3 0 0 0 0 2.92l1.07 2.14a3 3 0 0 0 1.34 1.34l2.14 1.07a3 3 0 0 0 2.92 0l2.14-1.07a3 3 0 0 0 1.34-1.34l1.07-2.14a3 3 0 0 0 0-2.92L14.81 8.4a3 3 0 0 0-1.34-1.34L11.33 6A3 3 0 0 0 8.4 6L6.26 7.07A3 3 0 0 0 4.92 8.4z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-900">Garansi 2 Tahun</h3>
<p className="mt-1 text-sm text-neutral-600">Perlindungan produk lebih lama.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-6 text-center hover:bg-neutral-50 transition">
<div className="mx-auto h-10 w-10 rounded-md grid place-content-center bg-neutral-50 border border-neutral-200 mb-3">
<svg className="h-5 w-5 text-neutral-700" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15.67 4.01 14 5.69l3.31 3.31 1.68-1.67a4 4 0 1 1-5.66-5.66z"></path><path d="m4 21 5-5"></path><path d="M14 7 7 14"></path><path d="M5 16l-2 2 3 3 2-2"></path></svg>
</div>
<h3 className="text-sm font-medium text-neutral-900">Kalibrasi Bersertifikat</h3>
<p className="mt-1 text-sm text-neutral-600">Jaminan hasil uji yang dapat ditelusuri.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<h2 className="text-center sm:text-2xl text-xl font-semibold tracking-tight text-neutral-900">Our Client</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 gap-x-4 gap-y-4">


<div className="grid place-content-center text-xs text-neutral-500 bg-white h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecf1a66d-57a0-4a11-914d-22afbc663511_800w.png)] bg-contain border-neutral-200 border rounded-md">Client 01</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 02</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 03</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 04</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 05</div>

<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 06</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 07</div>
<div className="grid place-content-center text-xs text-neutral-500 bg-white h-16 border-neutral-200 border rounded-md">Client 08</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 09</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 10</div>

<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 11</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 12</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 13</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 14</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 15</div>

<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 16</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 17</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 18</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 19</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 20</div>

<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 21</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 22</div>
<div className="grid place-content-center text-xs text-neutral-500 bg-white h-16 border-neutral-200 border rounded-md">Client 23</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 24</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 25</div>

<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 26</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 27</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 28</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 29</div>
<div className="h-16 rounded-md border border-neutral-200 bg-white grid place-content-center text-xs text-neutral-500">Client 30</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<h2 className="sm:text-2xl text-xl font-semibold tracking-tight text-neutral-900">Layanan &amp; Dukungan</h2>
<ul className="mt-6 space-y-4">
<li className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 hover:bg-neutral-50 transition">
<div className="flex items-start gap-4">
<div className="h-16 w-16 rounded-md overflow-hidden border border-neutral-200 bg-neutral-50 flex-shrink-0">
<img alt="Kalibrasi" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-neutral-900">Kalibrasi Peralatan</h3>
<p className="mt-1 text-sm text-neutral-600">Kalibrasi akurat untuk timbangan dan standar massa.</p>
</div>
</div>
</li>
<li className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 hover:bg-neutral-50 transition">
<div className="flex items-start gap-4">
<div className="h-16 w-16 rounded-md overflow-hidden border border-neutral-200 bg-neutral-50 flex-shrink-0">
<img alt="Instalasi" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-neutral-900">Instalasi &amp; Validasi</h3>
<p className="mt-1 text-sm text-neutral-600">IQ/OQ/PQ untuk memastikan performa sesuai standar.</p>
</div>
</div>
</li>
<li className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 hover:bg-neutral-50 transition">
<div className="flex items-start gap-4">
<div className="h-16 w-16 rounded-md overflow-hidden border border-neutral-200 bg-neutral-50 flex-shrink-0">
<img alt="Pelatihan" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-neutral-900">Pelatihan Pengguna</h3>
<p className="mt-1 text-sm text-neutral-600">Peningkatan skill operator dan SOP terbaik.</p>
</div>
</div>
</li>
<li className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 hover:bg-neutral-50 transition">
<div className="flex items-start gap-4">
<div className="h-16 w-16 rounded-md overflow-hidden border border-neutral-200 bg-neutral-50 flex-shrink-0">
<img alt="Perawatan" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-neutral-900">Perawatan Berkala</h3>
<p className="mt-1 text-sm text-neutral-600">Preventive maintenance untuk meminimalkan downtime.</p>
</div>
</div>
</li>
<li className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5 hover:bg-neutral-50 transition">
<div className="flex items-start gap-4">
<div className="h-16 w-16 rounded-md overflow-hidden border border-neutral-200 bg-neutral-50 flex-shrink-0">
<img alt="Dukungan" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-neutral-900">Dukungan Teknis</h3>
<p className="mt-1 text-sm text-neutral-600">Bantuan onsite/remote sesuai kebutuhan Anda.</p>
</div>
</div>
</li>
</ul>
</div>
</section>

<section className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<h2 className="sm:text-2xl text-xl font-semibold tracking-tight text-neutral-900">FAQ</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<details className="rounded-lg border border-neutral-200 bg-white p-4 open:bg-neutral-50 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-neutral-900">Apakah produk sudah tersertifikasi?</span>
<svg className="h-4 w-4 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600">Ya, seluruh produk memenuhi standar dan regulasi yang berlaku.</p>
</details>
<details className="rounded-lg border border-neutral-200 bg-white p-4 open:bg-neutral-50 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-neutral-900">Berapa lama garansinya?</span>
<svg className="h-4 w-4 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600">Garansi standar 2 tahun dengan opsi perpanjangan.</p>
</details>
<details className="rounded-lg border border-neutral-200 bg-white p-4 open:bg-neutral-50 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-neutral-900">Apakah tersedia instalasi di tempat?</span>
<svg className="h-4 w-4 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600">Tersedia layanan instalasi dan validasi onsite oleh teknisi kami.</p>
</details>
<details className="rounded-lg border border-neutral-200 bg-white p-4 open:bg-neutral-50 transition">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-neutral-900">Bagaimana cara pemesanan?</span>
<svg className="h-4 w-4 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600">Hubungi tim kami untuk penawaran dan konsultasi kebutuhan.</p>
</details>
<details className="rounded-lg border border-neutral-200 bg-white p-4 open:bg-neutral-50 transition md:col-span-2">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-neutral-900">Apakah tersedia kontrak perawatan?</span>
<svg className="h-4 w-4 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600">Ya, kami menyediakan paket maintenance berkala yang fleksibel.</p>
</details>
</div>
</div>
</section>

<section className="border-t border-neutral-200">
<div className="sm:px-6 lg:px-8 sm:py-12 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="rounded-xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-6 sm:p-8 lg:p-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
<div className="lg:col-span-2">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">Get updates and exclusive offers</h3>
<p className="mt-2 text-sm text-neutral-600">Subscribe to our newsletter. No spam, unsubscribe anytime.</p>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<label className="relative flex-1">
<svg className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-[#1a4d8d]/40 focus:border-[#1a4d8d]/40 transition text-sm text-neutral-900 bg-white w-full border-neutral-200 border rounded-md pt-2.5 pr-3 pb-2.5 pl-9" placeholder="you@example.com" required="" type="email"/>
</label>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1a4d8d] text-white hover:bg-[#18467f] transition px-5 py-2 .5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1a4d8d]/40">
                Subscribe
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
<div className="col-span-2 sm:col-span-1">
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-9 w-9 rounded-md bg-neutral-50 border border-neutral-200 grid place-content-center">
<span className="text-[12px] font-semibold tracking-tight text-neutral-900">VS</span>
</div>
<span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition">VeloStore</span>
</a>
<p className="text-sm text-neutral-600 mt-3">Radwag Indonesia menjamin akurasi dan integritas data bisnis Anda.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900">Servis</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Kalibrasi peralatan penimbangan elektronik</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Kalibrasi standar massa</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Kalibrasi pipet piston</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Validasi peralatan penimbangan</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900">Tautan Cepat</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Beranda</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Produk</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Kontak</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900">Informasi Kontak</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">082210000621</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">salessupport@intitek.co.id</a></li>
<li className=""><a className="hover:text-neutral-900 transition text-neutral-600" href="#">Ruko Silktown Avenue Graha Raya, blok RK no SA-15. Tangerang Selatan, Banten 15326</a></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900">Follow us</h4>
<div className="flex gap-2 mt-3 gap-x-2 gap-y-2 items-center">
<a aria-label="Twitter" className="h-9 w-9 grid place-content-center rounded-md bg-white hover:bg-neutral-50 border border-neutral-200 transition" href="#">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22.23 5.924c-.793.352-1.647.59-2.542.696a4.408 4.408 0 0 0 1.935-2.431 8.82 8.82 0 0 1-2.796 1.068 4.4 4.4 0 0 0-7.49 4.01A12.487 12.487 0 0 1 3.151 4.9a4.398 4.398 0 0 0 1.36 5.871 4.368 4.368 0 0 1-1.993-.55v.056a4.402 4.402 0 0 0 3.53 4.312 4.4 4.4 0 0 1-1.987.076 4.404 4.404 0 0 0 4.111 3.056A8.827 8.827 0 0 1 2 19.54a12.447 12.447 0 0 0 6.745 1.977c8.094 0 12.524-6.706 12.524-12.524 0-.191-.004-.381-.012-.57a8.948 8.948 0 0 0 2.19-2.3z"></path></svg>
</a>
<a aria-label="Instagram" className="h-9 w-9 grid place-content-center rounded-md bg-white hover:bg-neutral-50 border border-neutral-200 transition" href="#">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(64, 64, 64)', width: '16px', height: '16px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></a></div></div></div></div></footer>


    </>
  );
}
