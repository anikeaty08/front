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



    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }
  


      // Lucide icons
      lucide.createIcons();

      // Mobile menu toggle
      const btn = document.getElementById('menuBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[900px]"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe></div></div>

<header className="sticky top-0 z-40 supports-[backdrop-filter]:bg-white/100 bg-white border-slate-200 border-b">
<div className="" edit-mode-selected"="" max-w-7xl="" ml-auto="" mr-auto="" pl-4="" pr-4="">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fcf4e8ac-90d5-47b7-8200-f9522a43295c_320w.jpg)] bg-cover rounded invert" href="/home"></a><nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-slate-900 transition font-medium text-slate-700" href="/about">About</a>
<a className="hover:text-slate-900 transition font-medium text-slate-700" href="/work">Work</a>
<a className="hover:text-slate-900 transition font-medium text-slate-700" href="/shop">Shop</a>
<a className="hover:text-slate-900 transition font-medium text-slate-700" href="/contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50" href="#contact">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Hire
      </a>
<button aria-label="Open menu" className="md:hidden inline-flex hover:bg-slate-50 text-slate-700 w-9 h-9 border-slate-300 border rounded-md items-center justify-center" id="menuToggle" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden border-t border-slate-200 hidden" id="mobileMenu">
<div className="py-3 grid gap-2 text-sm">
<a className="hover:bg-slate-50 font-medium rounded pt-2 pr-1.5 pb-2 pl-1.5" href="/#about">About</a>
<a className="hover:bg-slate-50 font-medium rounded pt-2 pr-1.5 pb-2 pl-1.5" href="/#work">Work</a>
<a className="hover:bg-slate-50 font-medium rounded pt-2 pr-1.5 pb-2 pl-1.5" href="/#shop">Shop</a>
<a className="hover:bg-slate-50 font-medium rounded pt-2 pr-1.5 pb-2 pl-1.5" href="/contact">Contact</a>
</div>
</div>

</div>
</header>

<section className="relative overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="relative sm:py-20 lg:py-28 pt-16 pb-16">

<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(2,6,23,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
</div>

<div className="hidden md:flex absolute left-0 top-16 items-center gap-3 text-xs text-slate-600">
<span className="font-medium">01</span>
<span className="h-px w-24 bg-slate-300"></span>
<svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="relative mx-auto max-w-3xl">
<div className="aspect-square w-full max-w-[520px] rounded-full mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="w-full h-full ring-stone-500/10 ring-1 rounded-full" style={{background: 'repeating-linear-gradient(45deg, rgba(2,6,23,0.05) 0, rgba(2,6,23,0.05) 2px, transparent 2px, transparent 8px)'}}></div>
</div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-xs uppercase tracking-[0.2em] text-rose-600 font-medium">Illustration • Systems</p>
<h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Mira Kade
                </h1>
<p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">Generative design, 3D renderings, and modular identities.</p>
</div>
</div>
</div>

<div className="mt-12 flex items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="#work">
<svg className="lucide lucide-layout-grid h-4 w-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
              View Work
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50" href="#contact">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Contact
            </a>
</div>
</div>
</div>
</section>

<section className="sm:py-14 pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<a className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-blue-600 transition" href="#">
<img alt="3D generative sculpture" className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39c0f4c2-606b-41d0-aa3b-9ed97ec9495b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="">
<p className="text-xs text-slate-600 font-medium">Studio Kit</p>
<p className="text-sm font-medium tracking-tight">Forma I</p>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-blue-700" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>

<a className="group relative overflow-hidden hover:border-blue-600 transition border-slate-200 border rounded-lg" href="#">
<img alt="Abstract chrome render" className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/647e43ef-bc7d-4077-9e45-ce2ea6645447_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-xs text-slate-600 font-medium">Series 02</p>
<p className="text-sm font-medium tracking-tight">Chromic Fold</p>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-blue-700" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a><a className="group relative overflow-hidden hover:border-blue-600 transition border-slate-200 border rounded-lg" href="#">
<img alt="Digital landscape abstraction" className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-xs text-slate-600 font-medium">Digital Lab</p>
<p className="text-sm font-medium tracking-tight">Pixel Dreams</p>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-blue-700" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>


<a className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-blue-600 transition" href="#">
<img alt="Mountainscape concept art" className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/319e51fd-51ca-4d6c-ba52-420dcd2f2591_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="">
<p className="text-xs text-slate-600 font-medium">Terrain Lab</p>
<p className="text-sm font-medium tracking-tight">Horizon Map</p>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-blue-700" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-7 order-2 lg:order-1">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Boundless Forms: 3D Discovery
            </h2>
<p className="mt-3 text-slate-600 text-base">A study on procedural geometry and light-driven color systems: building worlds from seed rules and letting them evolve through constraints.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="#">
                Read more
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Minimal geometric light study" className="w-full h-64 sm:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/64f0d4bd-476f-486c-b427-1a26ca765dc4_800w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-14 pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative rounded-xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">
<div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
<div className="lg:col-span-6">
<div className="relative rounded-lg border-2 border-rose-500 overflow-hidden">
<img alt="Portrait with graphic overlay" className="h-64 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3b11be0-a11b-4956-8c79-6ba44348ba52_800w.jpg"/>
</div>
</div>
<div className="lg:col-span-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-3 w-3 rounded-full bg-rose-500"></span>
<p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-medium">Personal Project</p>
</div>
<h3 className="mt-3 text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>Chromatic Atlas</h3>
<p className="mt-3 text-slate-600">Mapping color memory with generative fields, pairing portrait fragments with parametric palettes and motion blur records.</p>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="#">
                  Explore
                  <svg className="lucide lucide-compass h-4 w-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50" href="#">
                  Case study
                  <svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 pt-14 pb-14">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-medium">Live events</p>
<h3 className="mt-2 text-4xl sm:text-5xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Planning an exhibition?
        </h3>
<p className="mt-3 text-slate-600">We create immersive identity systems, on-stage visuals, and interactive installations for conferences and galleries.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-50" href="mailto:hello@mkstudio.design">
            Contact us
            <svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
</div>
</div>
</section>

<section className="sm:py-12 pt-8 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<a className="group relative overflow-hidden rounded-lg border-2 border-blue-600" href="#">
<img alt="Generative lines poster" className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/882f35de-4483-41d0-b5a4-d072734721fc_1600w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-white/90 via-white/40 to-transparent">
<p className="text-sm font-medium tracking-tight">TNQ Project</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-blue-600 transition" href="#">
<img alt="Dreamscape 3D print" className="transition duration-300 group-hover:scale-[1.02] w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb976ea7-50d8-4e6d-bf5d-8600ca855bf4_1600w.jpg" style={{}}/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-white/90 via-white/40 to-transparent">
<p className="text-sm font-medium tracking-tight">Dreams</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-blue-600 transition" href="#">
<img alt="Escape series minimal print" className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c5eda603-1fa3-4130-9355-21f4264ed610_1600w.jpg" style={{}}/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-white/90 via-white/40 to-transparent">
<p className="text-sm font-medium tracking-tight">Escape</p>
</div>
</a>
</div>
</div>
</section>

<footer className="text-white bg-slate-900/90 mt-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 grid md:grid-cols-2 gap-8 items-center">
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fcf4e8ac-90d5-47b7-8200-f9522a43295c_320w.jpg)] bg-cover rounded invert-0" href="/home"></a>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
<a className="hover:underline" href="/about">About</a>
<a className="hover:underline" href="/work">Work</a>
<a className="hover:underline" href="/shop">Shop</a>
<a className="hover:underline" href="/contact">Contacts</a>
</nav>
</div>
<div className="md:text-right text-sm text-white/90">
<p className="">© 2025 Drift Studio — Mira Kade. All rights reserved.</p>
</div>
</div>
</div>
</footer>




    </>
  );
}
