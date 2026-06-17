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



{
"@context": "https://schema.org",
"@type": "WholesaleStore",
"name": "Home Mix",
"url": "https://homemix.uz/",
"logo": "https://homemix.uz/logo.png",
"description": "Uy-ro‘zg‘or buyumlari ulgurji savdosi: keng assortiment, tez yetkazib berish, kafolat.",
"telephone": "+998 90 123 45 67",
"address": {
"@type": "PostalAddress",
"streetAddress": "Toshkent, Yunusobod, 12-kvartal",
"addressRegion": "Toshkent",
"addressCountry": "UZ"
},
"sameAs": [
"https://t.me/homemix",
"https://instagram.com/homemix",
"https://facebook.com/homemix"
],
"openingHours": "Mo-Fr 09:00-18:00"
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }

        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        }

        const leadForm = document.getElementById('leadForm');
        const formToast = document.getElementById('formToast');
        if (leadForm) {
          leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (formToast) {
              formToast.classList.remove('hidden');
              setTimeout(() => formToast.classList.add('hidden'), 4000);
            }
            leadForm.reset();
          });
        }

        const funnelEl = document.getElementById('funnelChart');
        if (funnelEl && window.Chart) {
          const ctx = funnelEl.getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['So‘rovlar', 'Taklif yuborildi', 'Buyurtma', 'To‘lov'],
              datasets: [{
                label: 'Konversiya',
                data: [100, 58, 24, 9],
                backgroundColor: ['#0f172a', '#1e293b', '#334155', '#475569']
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              indexAxis: 'y',
              plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
              },
              scales: {
                x: { display: false, grid: { display: false } },
                y: { ticks: { color: '#334155' }, grid: { display: false } }
              }
            }
          });
        }
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div className="border-b bg-emerald-950 border-emerald-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm">
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-2 text-emerald-400">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
            5 mln so‘m+ buyurtmalarga bepul yetkazib berish
          </span>
<span className="hidden md:inline-flex items-center gap-2 text-emerald-400">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            12 oy kafolat
          </span>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100" href="tel:+998901234567">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +998 90 123 45 67
          </a>
<a className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100" href="https://t.me/homemix" target="_blank">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Telegram
          </a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur border-b bg-black/80 border-emerald-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="grid place-items-center text-sm font-semibold text-black tracking-tight bg-gradient-to-r from-green-400 to-emerald-400 w-8 h-8 rounded-md" style={{}}></div>
<span className="text-lg font-semibold tracking-tight" style={{}}>EVDE</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-emerald-300 hover:text-emerald-100" href="#katalog">Katalog</a>
<a className="text-emerald-300 hover:text-emerald-100" href="#taklif">Taklif</a>
<a className="text-emerald-300 hover:text-emerald-100" href="#biz">Biz haqimizda</a>
<a className="text-emerald-300 hover:text-emerald-100" href="#blog">Blog</a>
<a className="text-emerald-300 hover:text-emerald-100" href="#aloqa">Aloqa</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm border-emerald-700 hover:bg-emerald-950 hover:border-emerald-600" href="#taklif">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              Tijorat taklifi
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200" href="#katalog">
<svg className="lucide lucide-grid w-4 h-4" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
              Katalog
            </a>
</div>
<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded-md border p-2 border-emerald-700 hover:bg-emerald-950" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t py-3 border-emerald-800" id="mobileMenu">
<div className="grid gap-2">
<a className="px-2 py-2 rounded hover:bg-emerald-950" href="#katalog">Katalog</a>
<a className="px-2 py-2 rounded hover:bg-emerald-950" href="#taklif">Tijorat taklifi</a>
<a className="px-2 py-2 rounded hover:bg-emerald-950" href="#biz">Biz haqimizda</a>
<a className="px-2 py-2 rounded hover:bg-emerald-950" href="#blog">Blog</a>
<a className="px-2 py-2 rounded hover:bg-emerald-950" href="#aloqa">Aloqa</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 md:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4 border-emerald-700 text-emerald-400">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Yangi kelib tushganlar + maxsus narxlar
            </div>
<h1 className="sm:text-5xl text-4xl font-semibold text-emerald-100 tracking-tight -translate-y-1">
              Ulgurji uy-ro‘zg‘or buyumlari: tez yetkazib, kafolatli sifat
            </h1>
<p className="mt-4 text-base sm:text-lg text-emerald-400">
              5 000+ SKU, moslashuvchan chegirmalar va doimiy zaxira. Oshxona, tozalash, yoritish, bezak va yana ko‘p.
            </p>
<div className="flex flex-col sm:flex-row gap-3 mt-6 gap-x-3 gap-y-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm bg-emerald-100 text-black hover:bg-emerald-200" href="#katalog">
<svg className="lucide lucide-grid w-5 h-5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                Katalogni ko‘rish
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm border-emerald-700 hover:bg-emerald-950 hover:border-emerald-600" href="#taklif">
<svg className="lucide lucide-file-plus-2 w-5 h-5" data-lucide="file-plus-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M3 15h6"></path><path d="M6 12v6"></path></svg>
                Tijorat taklifi olish
              </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border p-3 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">5k+</div>
<div className="text-xs text-emerald-400">SKU</div>
</div>
<div className="rounded-lg border p-3 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">24 soat</div>
<div className="text-xs text-emerald-400">Jo‘natish</div>
</div>
<div className="rounded-lg border p-3 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">12 oy</div>
<div className="text-xs text-emerald-400">Kafolat</div>
</div>
<div className="rounded-lg border p-3 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">10+ yil</div>
<div className="text-xs text-emerald-400">Tajribamiz</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Oshxona anjomlari" className="sm:h-64 w-full h-48 object-cover border-emerald-800 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1bcb112b-dc72-4b4a-98ba-521bf0ee2b23_800w.jpg" style={{}}/>
<img alt="Tozalash vositalari" className="sm:h-64 w-full h-48 object-cover border-emerald-800 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6956e4e6-5ba1-458e-9195-72de86336962_800w.jpg"/>
<img alt="Yoritish" className="sm:h-56 w-full h-40 object-cover border-emerald-800 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2e7fb92d-128d-490a-a654-1852ceec3268_800w.jpg"/>
<img alt="Uy bezaklari" className="rounded-xl border object-cover h-40 sm:h-56 w-full border-emerald-800" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-emerald-800 border-t pt-12 pb-12" id="katalog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-100">Asosiy kategoriyalar</h2>
<p className="mt-2 text-sm text-emerald-400">Ombordagi popular yo‘nalishlar.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-100" href="#mahsulotlar">
            Barchasi
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<a className="group rounded-xl border hover:shadow-sm transition p-4 flex items-center gap-4 border-emerald-800 hover:border-emerald-700" href="#mahsulotlar">
<img alt="Oshxona anjomlari" className="w-20 h-20 rounded-lg object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-emerald-100">Oshxona anjomlari</h3>
<span className="text-xs text-emerald-400">1200+</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Qozon, tovoqlar, pichoqlar, idish-tovoqlar</p>
</div>
</a>
<a className="group rounded-xl border hover:shadow-sm transition p-4 flex items-center gap-4 border-emerald-800 hover:border-emerald-700" href="#mahsulotlar">
<img alt="Maishiy texnika" className="w-20 h-20 rounded-lg object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-emerald-100">Maishiy texnika</h3>
<span className="text-xs text-emerald-400">300+</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Choynak, blender, fen, kichik texnika</p>
</div>
</a>
<a className="group rounded-xl border hover:shadow-sm transition p-4 flex items-center gap-4 border-emerald-800 hover:border-emerald-700" href="#mahsulotlar">
<img alt="Tozalash vositalari" className="w-20 h-20 rounded-lg object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-emerald-100">Tozalash vositalari</h3>
<span className="text-xs text-emerald-400">600+</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Salfetka, sochiq, kimyoviy vositalar</p>
</div>
</a>
<a className="group rounded-xl border hover:shadow-sm transition p-4 flex items-center gap-4 border-emerald-800 hover:border-emerald-700" href="#mahsulotlar">
<img alt="Yoritish" className="w-20 h-20 rounded-lg object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-emerald-100">Yoritish</h3>
<span className="text-xs text-emerald-400">400+</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Lampalar, bra, stol chiroqlari</p>
</div>
</a>
<a className="group rounded-xl border hover:shadow-sm transition p-4 flex items-center gap-4 border-emerald-800 hover:border-emerald-700" href="#mahsulotlar">
<img alt="Uy bezaklari" className="w-20 h-20 rounded-lg object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-emerald-100">Uy bezaklari</h3>
<span className="text-xs text-emerald-400">800+</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Rasm, guldon, dekor to‘plamlar</p>
</div>
</a>
<a className="group rounded-xl border hover:shadow-sm transition p-4 flex items-center gap-4 border-emerald-800 hover:border-emerald-700" href="#mahsulotlar">
<img alt="Bog‘ va hovli" className="w-20 h-20 rounded-lg object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-emerald-100">Bog‘ va hovli</h3>
<span className="text-xs text-emerald-400">250+</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Sug‘orish, asboblar, tashqi dekor</p>
</div>
</a>
</div>
</div>
</section>

<section className="border-emerald-800 border-t pt-12 pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-100">Ommabop mahsulotlar</h2>
<p className="mt-2 text-sm text-emerald-400">To‘g‘ridan-to‘g‘ri ombor narxlari.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400">
            Gorizontal aylantiring
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="mt-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]" style={{scrollbarWidth: 'none'}}>
<div className="flex gap-4 snap-x snap-mandatory">
<div className="min-w-[260px] snap-start rounded-xl border p-4 hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Anti-stick tovoq 28cm" className="w-full h-40 object-cover border-emerald-800 border rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b0982458-49c2-47e1-b938-dce0670442ff_800w.jpg"/>
<div className="mt-3">
<h3 className="font-semibold tracking-tight text-emerald-100">Anti-stick tovoq 28cm</h3>
<p className="text-sm mt-1 text-emerald-400">MOQ: 24 dona · Qadoq: 6x</p>
<div className="flex items-end gap-2 mt-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">89 000 so‘m</div>
<div className="text-xs text-emerald-400">100+ dona: 82 000</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> So‘rovga qo‘shish
                </button>
</div>
</div>
<div className="min-w-[260px] snap-start rounded-xl border p-4 hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Elektr choynak 1.7L" className="w-full h-40 object-cover border-emerald-800 border rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e670be2e-8431-404a-9ae0-4509b8d02012_800w.jpg"/>
<div className="mt-3">
<h3 className="font-semibold tracking-tight text-emerald-100">Elektr choynak 1.7L</h3>
<p className="text-sm mt-1 text-emerald-400">MOQ: 16 dona · Kafolat: 12 oy</p>
<div className="flex items-end gap-2 mt-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">169 000 so‘m</div>
<div className="text-xs text-emerald-400">48+ dona: 159 000</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> So‘rovga qo‘shish
                </button>
</div>
</div>
<div className="min-w-[260px] snap-start rounded-xl border p-4 hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Mikrofiber salfetka set" className="w-full h-40 object-cover border-emerald-800 border rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ea4ebb10-ab08-4b85-9ba8-34c059f63c07_800w.jpg"/>
<div className="mt-3">
<h3 className="font-semibold tracking-tight text-emerald-100">Mikrofiber salfetka 6x</h3>
<p className="text-sm mt-1 text-emerald-400">MOQ: 48 set · Qadoq: 12x</p>
<div className="flex items-end gap-2 mt-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">24 000 so‘m</div>
<div className="text-xs text-emerald-400">200+ set: 21 000</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> So‘rovga qo‘shish
                </button>
</div>
</div>
<div className="min-w-[260px] snap-start rounded-xl border p-4 hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Dekorativ guldon" className="w-full h-40 object-cover border-emerald-800 border rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a791f96-7474-4a17-aeee-2ade70fb5ef8_800w.jpg"/>
<div className="mt-3">
<h3 className="font-semibold tracking-tight text-emerald-100">Dekorativ guldon</h3>
<p className="text-sm mt-1 text-emerald-400">MOQ: 30 dona · Ranglar: Mix</p>
<div className="flex items-end gap-2 mt-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">59 000 so‘m</div>
<div className="text-xs text-emerald-400">120+ dona: 52 000</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> So‘rovga qo‘shish
                </button>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl border p-5 border-emerald-800 bg-emerald-950">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border grid place-items-center bg-black border-emerald-800">
<svg className="lucide lucide-percent w-5 h-5 text-emerald-100" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
</div>
<div>
<div className="font-semibold tracking-tight text-emerald-100">Aksiyalar haftaligi</div>
<div className="text-sm text-emerald-400">Oshxona to‘plamlariga -15% · 5 mln so‘m+ bepul yetkazib</div>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200" href="#taklif">
<svg className="lucide lucide-ticket w-4 h-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
              Promo olish
            </a>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-emerald-800" id="taklif">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-100">Tijorat taklifi — 1 ish kuni ichida</h2>
<p className="mt-2 text-sm text-emerald-400">
              Katalogdan tanlang yoki bizga talab ro‘yxatini yuboring. Sizga mos narx-lar, MOQ va yetkazib muddati bilan qaytamiz.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-file-check-2 w-4 h-4" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Moslashuvchan chegirmalar</div>
<div className="text-sm text-emerald-400">Hajm va to‘lov turiga qarab.</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-warehouse w-4 h-4" data-lucide="warehouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"></path><path d="M6 13h12"></path><path d="M6 17h12"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Doimiy zaxira</div>
<div className="text-sm text-emerald-400">Omborda mavjud SKU-lar bilan.</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Tez logistika</div>
<div className="text-sm text-emerald-400">Toshkentda 24–48 soatda.</div>
</div>
</li>
</ul>

<div className="mt-8 rounded-xl border p-4 border-emerald-800">
<h3 className="font-semibold tracking-tight text-emerald-100">Savdo voronkasi (namunaviy)</h3>
<p className="text-sm mt-1 text-emerald-400">Lidlardan shartnomagacha bo‘lgan konversiya nazorati.</p>
<div className="mt-4">
<div className="w-full max-w-md">
<div className="rounded-lg border p-3 border-emerald-800">
<div>
<canvas aria-label="Savdo voronkasi" height="315" id="funnelChart" style={{display: 'block', boxSizing: 'border-box', height: '140px', width: '422px'}} width="949"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border p-6 border-emerald-800">
<form className="grid grid-cols-1 gap-4" id="leadForm" novalidate="">
<div>
<label className="block text-sm mb-1 text-emerald-300">Ismingiz</label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="name" placeholder="Aliyev Anvar" required="" type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-emerald-300">Kompaniya nomi</label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="company" placeholder="MCHJ Namuna" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm mb-1 text-emerald-300">Telefon</label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="phone" placeholder="+998 90 123 45 67" required="" type="tel"/>
</div>
<div>
<label className="block text-sm mb-1 text-emerald-300">Email (ixtiyoriy)</label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="email" placeholder="sales@kompaniya.uz" type="email"/>
</div>
</div>
<div>
<label className="block text-sm mb-1 text-emerald-300">Qiziqish yo‘nalishi</label>
<select className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="category">
<option>Oshxona anjomlari</option>
<option>Maishiy texnika</option>
<option>Tozalash vositalari</option>
<option>Yoritish</option>
<option>Uy bezaklari</option>
<option>Bog‘ va hovli</option>
</select>
</div>
<div>
<label className="block text-sm mb-1 text-emerald-300">Taxminiy oyiga hajm</label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="volume" placeholder="Masalan, 5 000 dona / 150 mln so‘m" type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-emerald-300">Izoh</label>
<textarea className="w-full rounded-md border px-3 py-2 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 border-emerald-700" name="note" placeholder="Mahsulot kodi yoki talab ro‘yxatini kiriting" rows="4"></textarea>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-emerald-100 text-black hover:bg-emerald-200" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  So‘rov yuborish
                </button>
<p className="text-xs text-emerald-400">“Yuborish” bilan maxfiylik siyosatiga rozilik bildirasiz.</p>
</div>
</form>
<div className="hidden mt-4 rounded-lg border p-3 border-sky-800 bg-sky-950 text-sky-200" id="formToast">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                So‘rovingiz qabul qilindi. Menejerimiz tez orada bog‘lanadi.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-emerald-800" id="mahsulotlar">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-100">Mahsulotlar katalogi</h2>
<p className="mt-2 text-sm text-emerald-400">Namunaviy SKU kartalari. To‘liq katalog uchun so‘rov yuboring.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="text-sm px-3 py-1.5 rounded-md border border-emerald-700 hover:bg-emerald-950">Excel narxnoma</button>
<button className="text-sm px-3 py-1.5 rounded-md border border-emerald-700 hover:bg-emerald-950">PDF katalog</button>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl border hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Idish to‘plami" className="w-full h-44 object-cover rounded-t-xl border-b border-emerald-800" src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="font-semibold tracking-tight text-emerald-100">Idish to‘plami 18x</h3>
<span className="text-xs rounded-md px-2 py-1 border bg-emerald-900 text-emerald-300 border-emerald-800">Omborda</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Nerj, induksiya mos · MOQ: 10 set</p>
<div className="mt-3 flex items-end gap-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">649 000 so‘m</div>
<div className="text-xs text-emerald-400">20+ set: 619 000</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  So‘rovga qo‘shish
                </button>
<button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm border-emerald-700 hover:bg-emerald-950">Batafsil</button>
</div>
</div>
</div>
<div className="rounded-xl border hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Pichoq seti" className="w-full h-44 object-cover rounded-t-xl border-b border-emerald-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="font-semibold tracking-tight text-emerald-100">Pichoq seti 5x + stend</h3>
<span className="text-xs rounded-md px-2 py-1 border bg-emerald-900 text-emerald-300 border-emerald-800">Yangi</span>
</div>
<p className="text-sm mt-1 text-emerald-400">Xrom, ergonomik tutqich · MOQ: 24 set</p>
<div className="mt-3 flex items-end gap-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">119 000 so‘m</div>
<div className="text-xs text-emerald-400">100+ set: 109 000</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  So‘rovga qo‘shish
                </button>
<button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm border-emerald-700 hover:bg-emerald-950">Batafsil</button>
</div>
</div>
</div>
<div className="rounded-xl border hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="LED stol chirog‘i" className="w-full h-44 object-cover rounded-t-xl border-b border-emerald-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="font-semibold tracking-tight text-emerald-100">LED stol chirog‘i</h3>
<span className="text-xs rounded-md px-2 py-1 border bg-emerald-900 text-emerald-300 border-emerald-800">Omborda</span>
</div>
<p className="text-sm mt-1 text-emerald-400">USB, 3 rejim · MOQ: 36 dona</p>
<div className="mt-3 flex items-end gap-2">
<div className="text-lg font-semibold tracking-tight text-emerald-100">79 000 so‘m</div>
<div className="text-xs text-emerald-400">120+ dona: 72 000</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-emerald-100 text-black hover:bg-emerald-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  So‘rovga qo‘shish
                </button>
<button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm border-emerald-700 hover:bg-emerald-950">Batafsil</button>
</div>
</div>
</div>
</div>

<div className="mt-10 grid sm:grid-cols-4 gap-4">
<div className="rounded-lg border p-4 border-emerald-800">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-handshake w-5 h-5" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<div className="mt-3 font-medium text-emerald-100">So‘rov</div>
<div className="text-sm text-emerald-400">Kontakt va talab ro‘yxati</div>
</div>
<div className="rounded-lg border p-4 border-emerald-800">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-file-stack w-5 h-5" data-lucide="file-stack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"></path><path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></path><path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"></path></svg>
</div>
<div className="mt-3 font-medium text-emerald-100">Taklif</div>
<div className="text-sm text-emerald-400">Narx, MOQ, shartlar</div>
</div>
<div className="rounded-lg border p-4 border-emerald-800">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-warehouse w-5 h-5" data-lucide="warehouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"></path><path d="M6 13h12"></path><path d="M6 17h12"></path></svg>
</div>
<div className="mt-3 font-medium text-emerald-100">Yig‘ish</div>
<div className="text-sm text-emerald-400">Sifat nazorati</div>
</div>
<div className="rounded-lg border p-4 border-emerald-800">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="mt-3 font-medium text-emerald-100">Yetkazib</div>
<div className="text-sm text-emerald-400">24–72 soat</div>
</div>
</div>
</div>
</section>

<section className="border-emerald-800 border-t pt-12 pb-12" id="biz">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold text-emerald-100 tracking-tight">Evde haqida</h2>
<p className="mt-3 text-emerald-400">
              Biz 2014-yildan beri uy-ro‘zg‘or buyumlari bozorida ulgurji yetkazib beruvchimiz. Mahsulot assortimenti muntazam yangilanadi,
              sifat va logistika jarayonlari esa doimiy nazoratda. Hamkorlarimiz — yirik chakana tarmoqlar, marketpleys sotuvchilari va kichik do‘konlar.
            </p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border p-4 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">120+</div>
<div className="text-sm text-emerald-400">Brend va yetkazib beruvchi</div>
</div>
<div className="rounded-lg border p-4 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">20k m²</div>
<div className="text-sm text-emerald-400">Ombor maydoni</div>
</div>
<div className="rounded-lg border p-4 border-emerald-800">
<div className="text-2xl font-semibold tracking-tight">98.4%</div>
<div className="text-sm text-emerald-400">O‘z vaqtida yetkazib</div>
</div>
</div>
</div>
<div className="rounded-xl border p-6 border-emerald-800 bg-emerald-950">
<div className="grid gap-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border grid place-items-center bg-black border-emerald-800">
<svg className="lucide lucide-shield-check w-5 h-5 text-emerald-100" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Sifat kafolati</div>
<div className="text-sm text-emerald-400">Har bir partiya kelib tushganda tekshiriladi.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border grid place-items-center bg-black border-emerald-800">
<svg className="lucide lucide-scale w-5 h-5 text-emerald-100" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Narx / sifat balansi</div>
<div className="text-sm text-emerald-400">Turli narx segmentlarida assortiment.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border grid place-items-center bg-black border-emerald-800">
<svg className="lucide lucide-recycle w-5 h-5 text-emerald-100" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Barqaror yetkazib</div>
<div className="text-sm text-emerald-400">Mavsumiy va doimiy tovarlar balansi.</div>
</div>
</div>
</div>
<div className="mt-6 border-t pt-4 border-emerald-800">
<div className="flex items-center gap-3">
<img alt="Mijoz" className="w-10 h-10 rounded-full object-cover border border-emerald-800" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-emerald-100">Malika R., xarid bo‘limi</div>
<div className="text-xs text-emerald-400">“Hisob-faktura va jo‘natish juda tez. Defekt bo‘lsa ham tez almashtirishdi.”</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-emerald-800 bg-emerald-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-100">Sotishni tezlashtiruvchi marketing strategiyalari</h2>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border p-4 border-emerald-800 bg-black">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div>
<div className="font-medium text-emerald-100">SEO optimizatsiyasi</div>
<ul className="list-disc ml-5 text-sm mt-1 space-y-1 text-emerald-400">
<li>Kalit so‘zlar: “uy-ro‘zg‘or buyumlari ulgurji”, “arzon uy buyumlari”.</li>
<li>Schema belgilash va tez yuklanish.</li>
<li>Kategoriya sahifalarini ichki linklar bilan kuchaytirish.</li>
</ul>
</div>
</div>
</div>
<div className="rounded-xl border p-4 border-emerald-800 bg-black">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-megaphone w-5 h-5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Ijtimoiy tarmoqlar</div>
<ul className="list-disc ml-5 text-sm mt-1 space-y-1 text-emerald-400">
<li>Instagram/Telegramda “SKU-haftaligi” postlari.</li>
<li>Stories: “Skladga tushdi” + CTA “Narx so‘rash”.</li>
<li>Reels: unboxing, foydalanish lifehacklari.</li>
</ul>
</div>
</div>
</div>
<div className="rounded-xl border p-4 border-emerald-800 bg-black">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-inbox w-5 h-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">E-mail marketing</div>
<ul className="list-disc ml-5 text-sm mt-1 space-y-1 text-emerald-400">
<li>Segmentatsiya: do‘konlar, marketplace, HoReCa.</li>
<li>Chegirma hodisalari va yangi tovar digesti.</li>
<li>Retarget: savatdagi so‘rovlarni eslatish.</li>
</ul>
</div>
</div>
</div>
<div className="rounded-xl border p-4 border-emerald-800 bg-black">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-gift w-5 h-5" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Aktsiyalar va paketlar</div>
<ul className="list-disc ml-5 text-sm mt-1 space-y-1 text-emerald-400">
<li>Kombo to‘plamlar: “Oshxona start” −12%.</li>
<li>MOQ pasaytirilgan test-partiyalar.</li>
<li>“5 mln+” bepul logistika banneri.</li>
</ul>
</div>
</div>
</div>
<div className="rounded-xl border p-4 border-emerald-800 bg-black">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Kontent va UGC</div>
<ul className="list-disc ml-5 text-sm mt-1 space-y-1 text-emerald-400">
<li>Qisqa video sharhlar, qadoqlash sifati.</li>
<li>Mijoz fotosuratlari uchun bonus.</li>
<li>Blogda “sotuvchi cheklovlar chek-listi”.</li>
</ul>
</div>
</div>
</div>
<div className="rounded-xl border p-4 border-emerald-800 bg-black">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-headset w-5 h-5" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
</div>
<div>
<div className="font-medium text-emerald-100">Sotuvga yordam</div>
<ul className="list-disc ml-5 text-sm mt-1 space-y-1 text-emerald-400">
<li>Onlayn chat va tez qo‘ng‘iroq.</li>
<li>Standart narxnomalar va oson eksport.</li>
<li>Qaytarish siyosati aniq va shaffof.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border p-6 h-fit border-emerald-800 bg-black">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center bg-emerald-100 text-black">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="font-semibold tracking-tight text-emerald-100">Tezkor aloqa</div>
<div className="text-sm text-emerald-400">09:00–18:00 (Du–Ju)</div>
</div>
</div>
<div className="mt-4 grid gap-2 text-sm">
<a className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100" href="tel:+998901234567">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +998 90 123 45 67
              </a>
<a className="inline-flex items-center gap-2 hover:text-emerald-100 text-emerald-300" href="mailto:sales@homemix.uz">sales@evde.uz<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
<a className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100" href="https://t.me/homemix" target="_blank">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Telegram
              </a>
</div>
<div className="mt-6 rounded-lg border p-4 border-emerald-800 bg-emerald-950">
<div className="text-sm text-emerald-300">Katta buyurtmalar uchun yakka narxlar va brendlash (private label) mavjud.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-emerald-800" id="blog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-100">Blog va yangiliklar</h2>
<p className="mt-2 text-sm text-emerald-400">Foydali maslahatlar va aksiyalar.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-100" href="#blog">
            Barchasi
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="rounded-xl border hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Oshxona trendlar" className="w-full h-44 object-cover rounded-t-xl border-b border-emerald-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<h3 className="font-semibold tracking-tight text-emerald-100">2025-yil oshxona anjomlari trendlari</h3>
<p className="text-sm mt-1 text-emerald-400">Qaysi SKU-lar tez aylanadi va marja yuqori?</p>
<div className="mt-3 text-xs text-emerald-400">8 daqiqa o‘qish</div>
</div>
</article>
<article className="rounded-xl border hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Tozalash lifehacklari" className="w-full h-44 object-cover rounded-t-xl border-b border-emerald-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<h3 className="font-semibold tracking-tight text-emerald-100">Tozalash vositalari: savdo punktlari</h3>
<p className="text-sm mt-1 text-emerald-400">Sotuvchilar uchun qisqa skript va polkada joylash.</p>
<div className="mt-3 text-xs text-emerald-400">5 daqiqa o‘qish</div>
</div>
</article>
<article className="rounded-xl border hover:shadow-sm transition border-emerald-800 hover:border-emerald-700">
<img alt="Logistika e'lonlari" className="w-full h-44 object-cover rounded-t-xl border-b border-emerald-800" src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="font-semibold tracking-tight text-emerald-100">Logistika: yangi marshrutlar</h3>
<p className="text-sm mt-1 text-emerald-400">Hududlar bo‘yicha yetkazib muddati yangilandi.</p>
<div className="mt-3 text-xs text-emerald-400">3 daqiqa o‘qish</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-emerald-800 border-t pt-12 pb-12" id="aloqa">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-2 gap-8">
<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold text-emerald-100 tracking-tight">Aloqa va manzil</h2>
<div className="mt-4 grid gap-3 text-sm">
<div className="inline-flex gap-2 text-emerald-300 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Toshkent, Yunusobod, 12-kvartal
              </div>
<a className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100" href="tel:+998901234567">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                +998 90 123 45 67
              </a>
<a className="inline-flex items-center gap-2 hover:text-emerald-100 text-emerald-300" href="mailto:info@homemix.uz">info@evde.uz<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
<div className="inline-flex items-center gap-2 text-emerald-300">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Du–Ju 09:00–18:00
              </div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-100" href="https://maps.google.com/?q=Toshkent,+Yunusobod,+12-kvartal" target="_blank">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                Yo‘l ko‘rsatish
              </a>
</div>
</div>
<div className="rounded-xl border overflow-hidden border-emerald-800">
<img alt="Xarita ko‘rinishi" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bbbdf4a2-95b3-4933-980c-d227d3d4ff16_1600w.jpg"/>
</div>
</div>
</div>
</section>

<footer className="border-t border-emerald-800">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-emerald-400">
<div className="grid place-items-center text-xs font-semibold text-black tracking-tight bg-emerald-100 w-7 h-7 rounded-md">E</div>
<span className="">© 2025 Evde. Barcha huquqlar himoyalangan.</span>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-emerald-300 hover:text-emerald-100" href="#taklif">Taklif</a>
<a className="text-emerald-300 hover:text-emerald-100" href="#katalog">Katalog</a>
<a className="text-emerald-300 hover:text-emerald-100" href="#aloqa">Aloqa</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
