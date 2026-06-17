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



      // Render lucide icons with consistent stroke width
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Update year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Service tabs logic (no page change)
      (function () {
        const tabs = document.querySelectorAll('[data-service-tab]');
        const studio = document.getElementById('service-studio');
        const outdoor = document.getElementById('service-outdoor');

        function activate(which) {
          if (which === 'studio') {
            studio.classList.remove('hidden');
            outdoor.classList.add('hidden');
          } else {
            outdoor.classList.remove('hidden');
            studio.classList.add('hidden');
          }
          tabs.forEach(btn => {
            const active = btn.getAttribute('data-service-tab') === which;
            btn.classList.toggle('bg-slate-900', active);
            btn.classList.toggle('text-white', active);
            btn.classList.toggle('hover:bg-black', active);
            btn.classList.toggle('text-slate-700', !active);
            btn.classList.toggle('hover:text-slate-900', !active);
            btn.classList.toggle('hover:bg-slate-50', !active);
          });
        }

        tabs.forEach(btn => {
          btn.addEventListener('click', () => activate(btn.getAttribute('data-service-tab')));
        });

        // default
        activate('studio');
      })();
    
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
      

<div className="w-full bg-white/60 backdrop-blur border-b border-slate-200/70">
<div className="max-w-7xl mx-auto px-6 py-2.5 text-[13px] text-slate-600 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Soft opening: diskon 15% untuk booking weekday — kode: SFOPEN15</span>
</div>
</div>

<header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#home">
<div className="h-8 w-8 rounded-md border border-white/15 flex items-center justify-center text-[12px] tracking-tight font-medium text-white group-hover:border-white/25 transition-colors">
            SF
          </div>
<span className="text-[17px] tracking-tight font-medium text-white">studioforty.id</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-[14px]">
<a className="text-white/80 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-white/80 hover:text-white transition-colors" href="#about">About us</a>
<a className="text-white/80 hover:text-white transition-colors" href="#services" title="Studio Experience &amp; Outdoor Experience">Service</a>
<a className="text-white/80 hover:text-white transition-colors" href="#kontak">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-white/20 text-white text-[14px] hover:border-white/30 hover:bg-white/5 transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20jadwal." target="_blank">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Jadwalkan</span>
</a>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white text-slate-900 text-[14px] hover:bg-white/90 transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20jadwal." target="_blank">
<i className="w-4 h-4" data-lucide="flashlight"></i>
<span>Booking</span>
</a>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-slate-200 text-[12px] text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="camera"></i>
<span>Studio foto minimalis untuk brand &amp; kreator</span>
</div>
<h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900 leading-[1.1]">
            Sewa studio foto yang siap produksi. Cahaya konsisten, ruang bersih, hasil maksimal.
          </h1>
<p className="text-[15px] md:text-[16px] text-slate-600 leading-7">
            Dari produk hingga portrait profesional—tim kami membantu menyiapkan set, mengatur lighting, dan memastikan workflow efisien. Booking fleksibel per jam, paket hemat untuk sesi lebih lama.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
<a className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 text-white text-[14px] hover:bg-black transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20jadwal." target="_blank">
<i className="w-4 h-4" data-lucide="calendar-check"></i>
<span>Booking Sekarang</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-200 text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors" href="#portfolio">
<i className="w-4 h-4" data-lucide="images"></i>
<span>Lihat Portofolio</span>
</a>
</div>
<div className="pt-6">
<div className="text-[12px] text-slate-500 mb-3">Dipercaya tim kreatif &amp; brand lokal</div>
<div className="flex items-center gap-4 sm:gap-6">
<div className="h-9 px-3 rounded-md border border-slate-200 text-[12px] tracking-tight flex items-center">AK</div>
<div className="h-9 px-3 rounded-md border border-slate-200 text-[12px] tracking-tight flex items-center">MN</div>
<div className="h-9 px-3 rounded-md border border-slate-200 text-[12px] tracking-tight flex items-center">VR</div>
<div className="h-9 px-3 rounded-md border border-slate-200 text-[12px] tracking-tight flex items-center">LT</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="Studio minimalis" className="w-full h-[320px] md:h-[480px] object-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-5 -left-5 hidden md:block">
<div className="rounded-lg bg-white border border-slate-200 shadow-sm px-4 py-3 flex items-center gap-3">
<i className="w-4 h-4 text-amber-500" data-lucide="sun"></i>
<div className="text-[12px]">
<div className="text-slate-900">Lighting siap</div>
<div className="text-slate-500">Softbox + Strip + Beauty</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/80" id="services">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
<div className="flex items-end justify-between mb-6 md:mb-8">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Service</h2>
<p className="text-[15px] text-slate-600 mt-2">Pilih pengalaman pemotretan Anda. Klik kategori untuk menampilkan kartu layanan.</p>
</div>
</div>

<div className="w-full flex items-center justify-start">
<div className="inline-flex rounded-md border border-slate-200 overflow-hidden">
<button className="px-3.5 py-2.5 text-[14px] font-medium tracking-tight bg-slate-900 text-white hover:bg-black transition-colors" data-service-tab="studio" type="button">Studio Experience</button>
<button className="px-3.5 py-2.5 text-[14px] font-medium tracking-tight text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors" data-service-tab="outdoor" type="button">Outdoor Experience</button>
</div>
</div>

<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" id="service-studio">
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="badge-check"></i>
<h3 className="font-medium tracking-tight">Pas Foto</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="user-round"></i>
<h3 className="font-medium tracking-tight">Profesional Headshot</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<h3 className="font-medium tracking-tight">Graduation</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="users-round"></i>
<h3 className="font-medium tracking-tight">Family Group</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="heart"></i>
<h3 className="font-medium tracking-tight">Couple</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="camera"></i>
<h3 className="font-medium tracking-tight">Prewedding</h3>
</div>
</div>
</div>

<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 hidden" id="service-outdoor">
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<h3 className="font-medium tracking-tight">Graduation</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="briefcase"></i>
<h3 className="font-medium tracking-tight">Company Profile</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="camera"></i>
<h3 className="font-medium tracking-tight">Photobooth</h3>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-5 hover:bg-slate-50/70 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="heart"></i>
<h3 className="font-medium tracking-tight">Wedding</h3>
</div>
</div>
</div>

<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 text-white text-[14px] hover:bg-black transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20tanya%20tentang%20layanan%20pemotretan." target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>Tanyakan via WhatsApp</span>
</a>
</div>
</div>
</section>

<section className="border-t border-slate-200/80" id="about">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18 grid md:grid-cols-2 gap-10 items-center">
<div className="space-y-5">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Tentang studioforty.id</h2>
<p className="text-[15px] text-slate-600">
            Kami menghadirkan studio foto modern dengan pencahayaan profesional, latar yang bersih, dan kru yang siap membantu. Fokus kami: proses efisien, hasil rapi, dan pengalaman yang nyaman untuk klien maupun tim kreatif.
          </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-900" data-lucide="check"></i>
<span className="text-[14px] text-slate-700">Lighting Godox &amp; modifier lengkap: softbox, strip, beauty dish, reflector.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-900" data-lucide="check"></i>
<span className="text-[14px] text-slate-700">Backdrop berbagai warna, cyc wall mini, dan area styling props.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-900" data-lucide="check"></i>
<span className="text-[14px] text-slate-700">Ruang rias, steamer, dan parkir — nyaman untuk tim &amp; talent.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5 text-slate-900" data-lucide="map-pin"></i>
<span className="text-[14px] text-slate-700">2 studio: Pessanggrahan &amp; Pos Pengumben.</span>
</li>
</ul>
<div className="flex items-center gap-3 pt-1">
<a className="inline-flex items-center gap-2 text-[14px] text-slate-700 hover:text-slate-900" href="#portfolio">
<span>Kenali karya kami</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-slate-200 text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20cek%20ketersediaan%20jadwal." target="_blank">
<i className="w-4 h-4" data-lucide="clock-8"></i>
<span>Cek ketersediaan</span>
</a>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="Tentang studioforty.id" className="w-full h-[320px] md:h-[480px] object-cover" src="https://images.unsplash.com/photo-1551292831-023188e78222?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="border-t border-slate-200/80" id="portfolio">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Portofolio Terpilih</h2>
<p className="text-[15px] text-slate-600 mt-2">Cuplikan pekerjaan untuk brand, UMKM, dan kreator.</p>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="h-9 w-9 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
<div className="group rounded-lg overflow-hidden border border-slate-200">
<img alt="Produk" className="h-64 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Packshot Skincare</div>
<div className="text-[12px] text-slate-500">Produk</div>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="expand"></i>
</div>
</div>
<div className="group rounded-lg overflow-hidden border border-slate-200">
<img alt="Portrait" className="h-64 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Corporate Headshot</div>
<div className="text-[12px] text-slate-500">Portrait</div>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="expand"></i>
</div>
</div>
<div className="group rounded-lg overflow-hidden border border-slate-200">
<img alt="Lookbook" className="h-64 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Lookbook Apparel</div>
<div className="text-[12px] text-slate-500">Editorial</div>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="expand"></i>
</div>
</div>
<div className="group rounded-lg overflow-hidden border border-slate-200">
<img alt="Food" className="h-64 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Menu Resto</div>
<div className="text-[12px] text-slate-500">Food</div>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="expand"></i>
</div>
</div>
<div className="group rounded-lg overflow-hidden border border-slate-200">
<img alt="Accessories" className="h-64 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Accessories Stylized</div>
<div className="text-[12px] text-slate-500">Produk</div>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="expand"></i>
</div>
</div>
<div className="group rounded-lg overflow-hidden border border-slate-200">
<img alt="Beauty" className="h-64 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Beauty Campaign</div>
<div className="text-[12px] text-slate-500">Editorial</div>
</div>
<i className="w-4 h-4 text-slate-600" data-lucide="expand"></i>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/80">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Paket Sewa Studio</h2>
<p className="text-[15px] text-slate-600 mt-2">Pilih durasi sesuai kebutuhan. Termasuk penggunaan lighting &amp; basic modifier.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-5">
<div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Lite</h3>
<span className="text-[12px] text-slate-500">Cocok test shoot</span>
</div>
<div className="mt-3">
<div className="text-xl tracking-tight font-semibold">Rp350.000</div>
<div className="text-[12px] text-slate-500">per 1 jam</div>
</div>
<ul className="mt-4 space-y-2 text-[14px] text-slate-700">
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> 1 set lighting + softbox</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> 1 backdrop warna</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> Area rias &amp; steamer</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 px-3.5 py-2.5 rounded-md border border-slate-200 text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20paket%20Lite." target="_blank">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
<span>Pilih Jadwal</span>
</a>
</div>
<div className="rounded-xl border border-slate-900 p-5 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-3 right-3 text-[11px] px-2 py-0.5 rounded-md border border-white/15 text-white/90">Rekomendasi</div>
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Standard</h3>
<span className="text-[12px] text-white/70">Untuk sesi reguler</span>
</div>
<div className="mt-3">
<div className="text-xl tracking-tight font-semibold">Rp650.000</div>
<div className="text-[12px] text-white/70">per 2 jam</div>
</div>
<ul className="mt-4 space-y-2 text-[14px] text-white/90">
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> 2 set lighting + modifier</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> 2 backdrop warna</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> Bantuan kru on-set</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 px-3.5 py-2.5 rounded-md bg-white text-slate-900 text-[14px] hover:bg-white/90 transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20paket%20Standard." target="_blank">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
<span>Pilih Jadwal</span>
</a>
</div>
<div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Pro</h3>
<span className="text-[12px] text-slate-500">Produksi intens</span>
</div>
<div className="mt-3">
<div className="text-xl tracking-tight font-semibold">Rp1.200.000</div>
<div className="text-[12px] text-slate-500">per 4 jam</div>
</div>
<ul className="mt-4 space-y-2 text-[14px] text-slate-700">
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> 3 set lighting + full modifier</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> Semua backdrop</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="check"></i> Asisten teknis</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 px-3.5 py-2.5 rounded-md border border-slate-200 text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20paket%20Pro." target="_blank">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
<span>Pilih Jadwal</span>
</a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/80" id="booking">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
<div className="grid lg:grid-cols-5 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Booking via WhatsApp</h2>
<p className="text-[15px] text-slate-600 mt-2">Klik tombol di bawah untuk terhubung langsung. Gratis reschedule maksimal H-2. Overtime dikenakan per 30 menit.</p>
<div className="mt-6 rounded-lg border border-slate-200 p-4 flex items-center gap-3">
<i className="w-4 h-4 text-slate-700" data-lucide="info"></i>
<p className="text-[13px] text-slate-600">Cantumkan: tanggal, waktu, durasi, jenis layanan, jumlah orang/produk, dan lokasi studio (Pessanggrahan/Pos Pengumben).</p>
</div>
</div>
<div className="lg:col-span-3 rounded-xl border border-slate-200 p-5 md:p-6 flex flex-col items-start justify-center">
<div className="text-[14px] text-slate-700">Siapkan format cepat:</div>
<div className="w-full mt-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] text-slate-700">
              Halo Studioforty, saya ingin booking:
              <br/>• Tanggal &amp; Jam:
              <br/>• Durasi:
              <br/>• Layanan (Studio/Outdoor + jenis):
              <br/>• Jumlah orang/produk:
              <br/>• Lokasi Studio (Pessanggrahan/Pos Pengumben):
              <br/>• Catatan:
            </div>
<a className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 text-white text-[14px] hover:bg-black transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%3A%0A%E2%80%A2%20Tanggal%20%26%20Jam%3A%0A%E2%80%A2%20Durasi%3A%0A%E2%80%A2%20Layanan%20(Studio%2FOutdoor%20%2B%20jenis)%3A%0A%E2%80%A2%20Jumlah%20orang%2Fproduk%3A%0A%E2%80%A2%20Lokasi%20Studio%20(Pessanggrahan%2FPos%20Pengumben)%3A%0A%E2%80%A2%20Catatan%3A" target="_blank">
<i className="w-4 h-4" data-lucide="send"></i>
<span>Chat WhatsApp Sekarang</span>
</a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/80">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
<div className="mb-8">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Apa kata klien</h2>
<p className="text-[15px] text-slate-600 mt-2">Pengalaman nyata dari brand dan kreator yang berkarya di studio kami.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-5">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Ayu Pramesti</div>
<div className="text-[12px] text-slate-500">Brand Manager</div>
</div>
</div>
<p className="text-[14px] text-slate-700 mt-4">Tim responsif dan lighting-nya konsisten. Proses cepat, hasil rapi sesuai guideline brand.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Raka Putra</div>
<div className="text-[12px] text-slate-500">Fotografer</div>
</div>
</div>
<p className="text-[14px] text-slate-700 mt-4">Ruang bersih, alat lengkap, kru membantu setup. Value for money.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Nadya Aulia</div>
<div className="text-[12px] text-slate-500">Content Creator</div>
</div>
</div>
<p className="text-[14px] text-slate-700 mt-4">Booking mudah dan fleksibel. Banyak opsi backdrop untuk konten variatif.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/80">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
<div className="text-center max-w-2xl mx-auto mb-8">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Pertanyaan Umum</h2>
<p className="text-[15px] text-slate-600 mt-2">Informasi penting seputar pemesanan, fasilitas, dan kebijakan.</p>
</div>
<div className="max-w-3xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
<details className="group open:bg-slate-50">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight text-slate-900">Apa saja yang termasuk saat sewa studio?</div>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 text-[14px] text-slate-700">
              Termasuk penggunaan lighting sesuai paket, backdrop, area rias, steamer, dan bantuan kru dasar. Akses props dasar tersedia terbatas.
            </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight text-slate-900">Bisakah reschedule jadwal?</div>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 text-[14px] text-slate-700">
              Bisa. Reschedule maksimal H-2 tanpa biaya. Di bawah itu mengikuti ketersediaan dan mungkin dikenakan biaya.
            </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight text-slate-900">Apakah ada layanan fotografer &amp; retouch?</div>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 text-[14px] text-slate-700">
              Ada. Kami menyediakan fotografer in-house dan opsi retouch sesuai kebutuhan (dikenakan biaya tambahan).
            </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight text-slate-900">Bagaimana ketentuan overtime?</div>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 text-[14px] text-slate-700">
              Overtime dihitung per 30 menit. Mohon informasikan ke kru minimal 15 menit sebelum sesi berakhir.
            </div>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-5 py-4 flex items-center justify-between">
<div className="text-[15px] font-medium tracking-tight text-slate-900">Apakah tersedia parkir?</div>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-4 text-[14px] text-slate-700">
              Tersedia area parkir terbatas untuk mobil dan motor. Disarankan datang 10 menit lebih awal.
            </div>
</details>
</div>
</div>
</section>

<section className="border-t border-slate-200/80" id="kontak">
<div className="max-w-7xl mx-auto px-6 py-14 md:py-18 grid md:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Kontak &amp; Lokasi</h2>
<p className="text-[15px] text-slate-600 mt-2">Hubungi kami untuk konsultasi konsep, ketersediaan, dan penawaran khusus.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5" data-lucide="map-pin"></i>
<div className="text-[14px] text-slate-700">
                Studio 1 — Pessanggrahan
                <br/>Studio 2 — Pos Pengumben
                <br/>Jam Operasional: Senin–Minggu, 09.00–21.00
              </div>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="phone"></i>
<a className="text-[14px] text-slate-700 hover:text-slate-900" href="tel:+6281234567890">+62 812-3456-7890</a>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="mail"></i>
<a className="text-[14px] text-slate-700 hover:text-slate-900" href="mailto:hello@studioforty.id">hello@studioforty.id</a>
</div>
<div className="flex items-center gap-3 pt-2">
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-slate-200 text-[14px] hover:bg-slate-50 hover:border-slate-300 transition-colors" href="https://wa.me/6281234567890" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>WhatsApp</span>
</a>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-900 text-white text-[14px] hover:bg-black transition-colors" href="https://wa.me/6281234567890?text=Halo%20Studioforty,%20saya%20ingin%20booking%20jadwal." target="_blank">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Booking Jadwal</span>
</a>
</div>
</div>
</div>
<div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<img alt="Peta lokasi" className="w-full h-[320px] md:h-[420px] object-cover" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-6">
<a className="flex items-center gap-3 group" href="#home">
<div className="h-8 w-8 rounded-md border border-white/15 flex items-center justify-center text-[12px] tracking-tight font-medium text-white group-hover:border-white/25 transition-colors">
              SF
            </div>
<span className="text-[15px] tracking-tight font-medium text-white">studioforty.id</span>
</a>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[13px] text-white/80">
<div>
<div className="flex items-center gap-2 text-white">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="font-medium tracking-tight">Studio Pos Pengumben</span>
</div>
<div className="mt-2">
                Jl. Pos Pengumben, Kebon Jeruk
                <br/>Jakarta Barat 11530
                <br/>Buka: 09.00–21.00
              </div>
</div>
<div>
<div className="flex items-center gap-2 text-white">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="font-medium tracking-tight">Studio Pesanggrahan</span>
</div>
<div className="mt-2">
                Jl. Pesanggrahan, Kembangan
                <br/>Jakarta Barat 11610
                <br/>Buka: 09.00–21.00
              </div>
</div>
</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="h-9 w-9 rounded-md border border-white/15 hover:bg-white/5 flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-md border border-white/15 hover:bg-white/5 flex items-center justify-center transition-colors" href="mailto:hello@studioforty.id">
<i className="w-4 h-4" data-lucide="mail"></i>
</a>
<a aria-label="Telepon" className="h-9 w-9 rounded-md border border-white/15 hover:bg-white/5 flex items-center justify-center transition-colors" href="tel:+6281234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
</a>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<p className="text-[12px] text-white/60">© <span id="year">2025</span> studioforty.id. Semua hak dilindungi.</p>
<div className="flex items-center gap-4 text-[12px] text-white/60">
<a className="hover:text-white" href="#">Kebijakan Privasi</a>
<span className="w-px h-3.5 bg-white/15"></span>
<a className="hover:text-white" href="#">Syarat &amp; Ketentuan</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
