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



        // Init Icons
        lucide.createIcons();

        // Data for details
        const details = {
            'sidoarjo': {
                title: 'Kavling Tanah di Sidoarjo',
                loc: 'Sidoarjo, Surabaya',
                desc: 'Sebidang tanah luas di Sidoarjo, ideal untuk dibagi menjadi beberapa kavling perumahan. Beli tanahnya bersama, bangun rumah impian Anda sendiri.',
                price: 'Rp 200.000.000',
                type: 'Lahan Siap Bagi',
                cap: '9 Kavling',
                total: 'Rp 1.8 Miliar',
                badge: 'Patungan Lahan',
                img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            },
            'bekasi': {
                title: 'Apartemen Co-Build di Bekasi',
                loc: 'Bekasi, Jawa Barat',
                desc: 'Proyek patungan untuk membeli tanah dan membangun gedung apartemen 5 lantai di lokasi strategis Bekasi. Miliki satu lantai penuh.',
                price: 'Rp 500.000.000',
                type: 'Proyek Bangunan',
                cap: '5 Lantai',
                total: 'Rp 2.5 Miliar',
                badge: 'Patungan Bangunan',
                img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            },
            'jakarta': {
                title: 'Flat Co-Build di Jakarta Pusat',
                loc: 'Jakarta Pusat, DKI Jakarta',
                desc: 'Miliki satu lantai di gedung flat modern yang akan kita bangun bersama di jantung kota Jakarta. Investasi cerdas untuk hunian vertikal.',
                price: 'Rp 400.000.000',
                type: 'Proyek Bangunan',
                cap: '8 Lantai',
                total: 'Rp 3.2 Miliar',
                badge: 'Patungan Bangunan',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            },
             'tangerang': {
                title: 'Tanah Kavling Fleksibel',
                loc: 'Tangerang, Banten',
                desc: 'Kawasan tanah prospektif di Tangerang untuk dimiliki bersama. Jumlah dan luas kavling akan ditentukan bersama berdasarkan jumlah investor.',
                price: 'Rp 2.000.000 / m²',
                type: 'Tanah Fleksibel',
                cap: '1000 m²',
                total: 'Rp 2 Miliar',
                badge: 'Patungan Fleksibel',
                img: 'https://images.unsplash.com/photo-1599809275372-b7f58db2ca73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            }
        };

        function hideAll() {
            const sections = ['landing', 'explore', 'projects', 'partners', 'recommendations', 'detail-view'];
            sections.forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            window.scrollTo(0,0);
        }

        function showSection(id) {
            hideAll();
            document.getElementById(id).classList.remove('hidden');
        }

        function showDetail(key) {
            hideAll();
            const data = details[key];
            if(data) {
                document.getElementById('detail-title').innerText = data.title;
                document.getElementById('detail-loc').innerText = data.loc;
                document.getElementById('detail-desc').innerText = data.desc;
                document.getElementById('detail-price-1').innerText = data.price;
                document.getElementById('detail-type').innerText = data.type;
                document.getElementById('detail-cap').innerText = data.cap;
                document.getElementById('detail-total').innerText = data.total;
                document.getElementById('detail-badge').innerText = data.badge;
                document.getElementById('detail-img').src = data.img;
            }
            document.getElementById('detail-view').classList.remove('hidden');
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="text-zinc-900 font-semibold tracking-tight text-lg" href="#" onclick="showSection('landing')">
                    BeliRumahBareng
                </a>

<div className="hidden md:flex items-center gap-6">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="showSection('explore')">Jelajahi</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="showSection('projects')">Proyek Saya</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="showSection('partners')">Cari Rekan</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="showSection('recommendations')">Rekomendasi</button>
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative text-zinc-500 hover:text-zinc-900">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
<span className="sr-only">Buka notifikasi</span>
</button>
<button className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center border border-zinc-300 overflow-hidden">
<span className="text-xs font-semibold text-zinc-600">AD</span>
</div>
<span className="sr-only">Buka menu pengguna</span>
</button>
</div>
</div>

<div className="md:hidden flex items-center gap-6 px-6 pb-3 overflow-x-auto no-scrollbar border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<button className="text-sm font-medium text-zinc-600 whitespace-nowrap" onclick="showSection('explore')">Jelajahi</button>
<button className="text-sm font-medium text-zinc-600 whitespace-nowrap" onclick="showSection('projects')">Proyek Saya</button>
<button className="text-sm font-medium text-zinc-600 whitespace-nowrap" onclick="showSection('partners')">Cari Rekan</button>
<button className="text-sm font-medium text-zinc-600 whitespace-nowrap" onclick="showSection('recommendations')">Rekomendasi</button>
</div>
</nav>

<main className="pt-24 max-w-7xl mx-auto px-6 min-h-screen">

<div className="space-y-24 fade-in" id="landing">

<section className="relative rounded-2xl overflow-hidden bg-zinc-900 text-white py-20 px-8 md:px-16 md:py-32">

<div className="absolute inset-0 z-0">
<img alt="Modern house background" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 max-w-2xl space-y-6">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                        Kepemilikan Properti Jadi Lebih Mudah, <span className="text-zinc-300">Bersama-sama.</span>
</h1>
<p className="text-lg text-zinc-300 leading-relaxed font-light max-w-xl">
                        BeliRumahBareng membuka jalan baru untuk memiliki properti. Dengan patungan, Anda bisa membeli lahan luas atau membangun hunian dengan biaya yang jauh lebih terjangkau.
                    </p>
<div className="pt-4">
<button className="bg-white text-zinc-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors shadow-lg shadow-black/20" onclick="showSection('explore')">
                            Jelajahi Properti
                        </button>
</div>
</div>
</section>

<section>
<div className="mb-10">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Bagaimana BeliRumahBareng Bekerja?</h2>
<p className="mt-2 text-zinc-500">Miliki properti impian Anda melalui tiga langkah sederhana.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 border border-zinc-200">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<h3 className="text-base font-medium text-zinc-900">1. Patungan Beli Lahan Luas</h3>
<p className="mt-2 text-sm text-zinc-500 leading-relaxed">Beli tanah dalam ukuran besar bersama grup membuat harga per meter jadi jauh lebih murah.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 border border-zinc-200">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-base font-medium text-zinc-900">2. Bangun Properti Bersama</h3>
<p className="mt-2 text-sm text-zinc-500 leading-relaxed">Ingin hunian vertikal? Patungan bangun flat atau apartemen untuk memangkas biaya konstruksi tanpa developer.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 border border-zinc-200">
<i className="w-5 h-5" data-lucide="key"></i>
</div>
<h3 className="text-base font-medium text-zinc-900">3. Miliki Bagian Anda</h3>
<p className="mt-2 text-sm text-zinc-500 leading-relaxed">Selesaikan proses legal dan miliki kavling atau unit properti Anda dengan hak yang jelas dan berkekuatan hukum.</p>
</div>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Peluang Patungan Populer</h2>
<p className="mt-2 text-zinc-500">Lihat beberapa peluang kepemilikan properti kolektif yang sedang tren.</p>
</div>
<button className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600" onclick="showSection('explore')">
                        Lihat Semua <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all cursor-pointer group" onclick="showDetail('sidoarjo')">
<div className="h-48 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800 border border-white/20">Patungan Lahan</div>
<img alt="Sidoarjo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium text-zinc-900 text-base">Kavling Tanah di Sidoarjo</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Sidoarjo, Surabaya</p>
</div>
</div>
<p className="mt-3 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                Sebidang tanah luas di Sidoarjo, ideal untuk dibagi menjadi beberapa kavling perumahan.
                            </p>
<div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Estimasi per Kavling</p>
<p className="text-sm font-semibold text-zinc-900">Rp 200.000.000</p>
</div>
<span className="text-xs font-medium text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full group-hover:bg-zinc-900 group-hover:text-white transition-colors">Lihat Detail</span>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all cursor-pointer group" onclick="showDetail('bekasi')">
<div className="h-48 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800 border border-white/20">Patungan Bangunan</div>
<img alt="Bekasi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium text-zinc-900 text-base">Apartemen Co-Build di Bekasi</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Bekasi, Jawa Barat</p>
</div>
</div>
<p className="mt-3 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                Proyek patungan untuk membeli tanah dan membangun gedung apartemen 5 lantai.
                            </p>
<div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Estimasi per Lantai</p>
<p className="text-sm font-semibold text-zinc-900">Rp 500.000.000</p>
</div>
<span className="text-xs font-medium text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full group-hover:bg-zinc-900 group-hover:text-white transition-colors">Lihat Detail</span>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all cursor-pointer group" onclick="showDetail('jakarta')">
<div className="h-48 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800 border border-white/20">Patungan Bangunan</div>
<img alt="Jakarta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium text-zinc-900 text-base">Flat Co-Build di Jakarta Pusat</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Jakarta Pusat, DKI Jakarta</p>
</div>
</div>
<p className="mt-3 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                Miliki satu lantai di gedung flat modern yang akan kita bangun bersama di jantung kota Jakarta.
                            </p>
<div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Estimasi per Lantai</p>
<p className="text-sm font-semibold text-zinc-900">Rp 400.000.000</p>
</div>
<span className="text-xs font-medium text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full group-hover:bg-zinc-900 group-hover:text-white transition-colors">Lihat Detail</span>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="md:hidden w-full bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium" onclick="showSection('explore')">
                        Lihat Semua Peluang
                    </button>
</div>
</section>

<section className="bg-zinc-100 rounded-2xl p-8 md:p-12 text-center border border-zinc-200">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Siap Memiliki Properti Dengan Cara Cerdas?</h2>
<p className="mt-3 text-zinc-500 max-w-2xl mx-auto">Jangan biarkan harga mahal menghalangi impian Anda. Bergabunglah dengan komunitas BeliRumahBareng.</p>
<div className="mt-8">
<button className="bg-zinc-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors" onclick="showSection('partners')">Mulai Sekarang</button>
</div>
</section>
</div>

<div className="hidden space-y-10 fade-in" id="explore">
<div className="border-b border-zinc-200 pb-8">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Properti Terkurasi</h2>
<p className="mt-2 text-zinc-500">Jelajahi properti yang telah terverifikasi dan siap untuk investasi kolektif.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group" onclick="showDetail('sidoarjo')">
<div className="h-40 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800">Patungan Lahan</div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="font-medium text-zinc-900">Kavling Tanah di Sidoarjo</h3>
<p className="text-xs text-zinc-500 mt-1">Sidoarjo, Surabaya</p>
<div className="mt-4 flex justify-between items-end border-t border-zinc-100 pt-3">
<div>
<p className="text-[10px] text-zinc-400 font-medium uppercase">Per Kavling</p>
<p className="text-sm font-semibold text-zinc-900">Rp 200 Juta</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group" onclick="showDetail('bekasi')">
<div className="h-40 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800">Co-Build</div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="font-medium text-zinc-900">Apartemen Bekasi</h3>
<p className="text-xs text-zinc-500 mt-1">Bekasi, Jawa Barat</p>
<div className="mt-4 flex justify-between items-end border-t border-zinc-100 pt-3">
<div>
<p className="text-[10px] text-zinc-400 font-medium uppercase">Per Lantai</p>
<p className="text-sm font-semibold text-zinc-900">Rp 500 Juta</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group" onclick="showDetail('jakarta')">
<div className="h-40 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800">Co-Build</div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="font-medium text-zinc-900">Flat Jakarta Pusat</h3>
<p className="text-xs text-zinc-500 mt-1">Jakarta Pusat, DKI</p>
<div className="mt-4 flex justify-between items-end border-t border-zinc-100 pt-3">
<div>
<p className="text-[10px] text-zinc-400 font-medium uppercase">Per Lantai</p>
<p className="text-sm font-semibold text-zinc-900">Rp 400 Juta</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group" onclick="showDetail('tangerang')">
<div className="h-40 overflow-hidden relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-800">Fleksibel</div>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4">
<h3 className="font-medium text-zinc-900">Tanah Tangerang</h3>
<p className="text-xs text-zinc-500 mt-1">Tangerang, Banten</p>
<div className="mt-4 flex justify-between items-end border-t border-zinc-100 pt-3">
<div>
<p className="text-[10px] text-zinc-400 font-medium uppercase">Per m²</p>
<p className="text-sm font-semibold text-zinc-900">Rp 2 Juta</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-10 fade-in" id="projects">
<div className="border-b border-zinc-200 pb-8">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Proyek Saya</h2>
<p className="mt-2 text-zinc-500">Kelola dan pantau semua proyek co-buy Anda di sini</p>
</div>
<div className="space-y-6">

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h3 className="font-medium text-zinc-900">Kavling Tanah di Sidoarjo</h3>
<p className="text-sm text-zinc-500">Sidoarjo, Surabaya</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                Proses Pembayaran
                            </span>
<button className="text-xs font-medium text-zinc-900 border border-zinc-300 px-3 py-1.5 rounded-md hover:bg-zinc-50" onclick="showDetail('sidoarjo')">Lihat Detail</button>
</div>
</div>
<div className="space-y-2 mb-6">
<div className="flex justify-between text-xs font-medium">
<span className="text-zinc-500">Progress Pembayaran (37%)</span>
<span className="text-zinc-900">Rp 228.800.000 / Rp 624.000.000</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-2">
<div className="bg-zinc-900 h-2 rounded-full" style={{width: '37%'}}></div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-100 pt-6">
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Anggota</p>
<p className="text-sm font-medium text-zinc-900 mt-1">4 Orang</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Unit Anda</p>
<p className="text-sm font-medium text-zinc-900 mt-1">3 Unit</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Dokumen</p>
<p className="text-sm font-medium text-zinc-900 mt-1">2/3 Selesai</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Pesan</p>
<p className="text-sm font-medium text-blue-600 mt-1">3 pesan baru</p>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h3 className="font-medium text-zinc-900">Apartemen Co-Build Bekasi</h3>
<p className="text-sm text-zinc-500">Bekasi, Jawa Barat</p>
</div>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
                            Sedang Berjalan
                        </span>
</div>
<div className="grid grid-cols-5 gap-1 mb-6">

<div className="space-y-1">
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<p className="text-[10px] text-zinc-500">KYC</p>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<p className="text-[10px] text-zinc-500">Pendanaan</p>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<p className="text-[10px] text-zinc-500">Legal</p>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-zinc-200 rounded-full"></div>
<p className="text-[10px] text-zinc-400">Bangun</p>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-zinc-200 rounded-full"></div>
<p className="text-[10px] text-zinc-400">Serah Terima</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-100 pt-6">
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Progress</p>
<p className="text-sm font-medium text-zinc-900 mt-1">56%</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Anggota</p>
<p className="text-sm font-medium text-zinc-900 mt-1">3 Orang</p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Unit Anda</p>
<p className="text-sm font-medium text-zinc-900 mt-1">1 Lantai</p>
</div>
<div>
<button className="text-sm font-medium text-zinc-900 hover:underline" onclick="showDetail('bekasi')">Lihat Detail Proyek</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-10 fade-in" id="partners">
<div className="border-b border-zinc-200 pb-8">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Pencarian Rekan</h2>
<p className="mt-2 text-zinc-500">Temukan rekan yang cocok untuk memulai grup co-buy Anda berikutnya.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<div className="bg-white border border-zinc-200 rounded-xl p-6 sticky top-24">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xl font-medium">AD</div>
<div>
<h3 className="font-medium text-zinc-900">Adi</h3>
<p className="text-sm text-zinc-500">Pengguna Saat Ini</p>
</div>
</div>
<div className="space-y-4">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Tujuan</p>
<p className="text-sm text-zinc-900">Kepemilikan rumah pertama</p>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Lokasi Minat</p>
<p className="text-sm text-zinc-900">Surabaya, Sidoarjo</p>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Anggaran</p>
<p className="text-sm text-zinc-900">300-600 Juta IDR</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-4">
<h3 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">Calon Rekan Potensial</h3>

<div className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium border border-zinc-200">B</div>
<div>
<h4 className="font-medium text-zinc-900">Budi</h4>
<p className="text-xs text-zinc-500">Bandung • Minat Lahan Luas</p>
</div>
</div>
<button className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-md font-medium">Ajak Diskusi</button>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium border border-zinc-200">C</div>
<div>
<h4 className="font-medium text-zinc-900">Citra</h4>
<p className="text-xs text-zinc-500">Bandung • Minat Apartemen</p>
</div>
</div>
<button className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-md font-medium">Ajak Diskusi</button>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium border border-zinc-200">D</div>
<div>
<h4 className="font-medium text-zinc-900">Dewi</h4>
<p className="text-xs text-zinc-500">Yogyakarta • Investor Pasif</p>
</div>
</div>
<button className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-md font-medium">Ajak Diskusi</button>
</div>
</div>
</div>
</div>

<div className="hidden space-y-10 fade-in" id="recommendations">
<div className="border-b border-zinc-200 pb-8">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Rekomendasi AI</h2>
<p className="mt-2 text-zinc-500">Masukkan preferensi Anda dan biarkan AI kami menemukan properti yang paling cocok.</p>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-8 max-w-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Lokasi Pilihan</label>
<select className="w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 text-sm py-2 px-3 border bg-white">
<option>Surabaya</option>
<option>Jakarta</option>
<option>Bandung</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Rentang Harga</label>
<select className="w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 text-sm py-2 px-3 border bg-white">
<option>Rp 200jt - 400jt</option>
<option>Rp 400jt - 800jt</option>
<option>&gt; Rp 1 Milyar</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Kapasitas Finansial (IDR)</label>
<input className="w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 text-sm py-2 px-3 border" type="number" value="500000000"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Horison Waktu</label>
<select className="w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 text-sm py-2 px-3 border bg-white">
<option>Jangka Panjang (10+ tahun)</option>
<option>Jangka Menengah (5-10 tahun)</option>
</select>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex justify-end">
<button className="bg-zinc-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors">
                        Hasilkan Rekomendasi
                    </button>
</div>
</div>
</div>

<div className="hidden fade-in" id="detail-view">
<button className="flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6 group" onclick="showSection('explore')">
<i className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i> Kembali
            </button>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="lg:col-span-2 space-y-8">

<div className="relative w-full aspect-video bg-zinc-100 rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover" id="detail-img" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="bg-white/90 p-2 rounded-full hover:bg-white text-zinc-900 transition"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="bg-white/90 p-2 rounded-full hover:bg-white text-zinc-900 transition"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200" id="detail-badge">Patungan Lahan</span>
<span className="flex items-center text-xs text-zinc-500"><i className="w-3 h-3 mr-1" data-lucide="map-pin"></i> <span id="detail-loc">Sidoarjo, Surabaya</span></span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900" id="detail-title">Kavling Tanah di Sidoarjo</h1>
<p className="mt-4 text-zinc-600 leading-relaxed" id="detail-desc">
                            Sebidang tanah luas di Sidoarjo, ideal untuk dibagi menjadi beberapa kavling perumahan. Beli tanahnya bersama, bangun rumah impian Anda sendiri dengan biaya jauh lebih hemat dibandingkan membeli dari developer.
                        </p>
</div>

<div className="border-y border-zinc-200 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Sertifikat</p>
<p className="text-sm font-medium text-zinc-900 mt-1">SHM (Induk)</p>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Tipe Proyek</p>
<p className="text-sm font-medium text-zinc-900 mt-1" id="detail-type">Lahan Siap Bagi</p>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Kapasitas</p>
<p className="text-sm font-medium text-zinc-900 mt-1" id="detail-cap">9 Kavling</p>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Total Nilai</p>
<p className="text-sm font-medium text-zinc-900 mt-1" id="detail-total">Rp 1.8 Miliar</p>
</div>
</div>

<div>
<div className="flex border-b border-zinc-200 mb-6">
<button className="px-4 py-2 text-sm font-medium text-zinc-900 border-b-2 border-zinc-900">Denah Lokasi</button>
<button className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900">Analisis Lingkungan</button>
<button className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900">Legalitas</button>
</div>
<div className="bg-zinc-50 border border-zinc-200 rounded-lg h-64 flex items-center justify-center text-zinc-400">
<span className="flex items-center gap-2 text-sm"><i className="w-4 h-4" data-lucide="map"></i> Tampilan Peta Interaktif</span>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 space-y-6">
<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
<h3 className="font-medium text-zinc-900 mb-4">Estimasi Harga Unit</h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between items-center text-sm p-3 rounded-lg bg-zinc-50 border border-zinc-100 cursor-pointer hover:border-zinc-300">
<span className="text-zinc-600">Unit 1 (Standard)</span>
<span className="font-semibold text-zinc-900" id="detail-price-1">Rp 200.000.000</span>
</div>
<div className="flex justify-between items-center text-sm p-3 rounded-lg bg-white border border-zinc-200 cursor-pointer hover:border-zinc-300 opacity-60">
<span className="text-zinc-600">Unit 2 (Hook)</span>
<span className="font-semibold text-zinc-900">Rp 220.000.000</span>
</div>
<div className="flex justify-between items-center text-sm p-3 rounded-lg bg-white border border-zinc-200 cursor-pointer hover:border-zinc-300 opacity-60">
<span className="text-zinc-600">Unit 3</span>
<span className="font-semibold text-zinc-900">Rp 204.000.000</span>
</div>
</div>
<button className="w-full bg-zinc-900 text-white py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors mb-3">
                                Gabung Grup Patungan
                            </button>
<p className="text-xs text-center text-zinc-400">Dengan bergabung, Anda menyetujui S&amp;K.</p>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-6">
<h3 className="text-sm font-medium text-zinc-900 mb-4">Anggota Tertarik (3)</h3>
<div className="flex -space-x-2 overflow-hidden mb-4">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-[10px] font-medium">B</div>
<div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white flex items-center justify-center text-[10px] font-medium">C</div>
<div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-white flex items-center justify-center text-[10px] font-medium">D</div>
</div>
<p className="text-xs text-zinc-500">Bergabunglah dengan Budi, Citra, dan Dewi dalam proyek ini.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-24 border-t border-zinc-200 bg-white py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<p className="text-zinc-900 font-semibold tracking-tight">BeliRumahBareng</p>
<p className="mt-4 text-xs text-zinc-500 leading-relaxed">
                    Wujudkan properti impian dengan patungan. Beli lahan luas atau bangun hunian dengan biaya lebih terjangkau.
                </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Navigasi</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><button className="hover:text-zinc-900" onclick="showSection('explore')">Jelajahi</button></li>
<li><button className="hover:text-zinc-900" onclick="showSection('projects')">Proyek Saya</button></li>
<li><button className="hover:text-zinc-900" onclick="showSection('partners')">Cari Rekan</button></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Syarat &amp; Ketentuan</a></li>
<li><a className="hover:text-zinc-900" href="#">Kebijakan Privasi</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Perusahaan</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Tentang Kami</a></li>
<li><a className="hover:text-zinc-900" href="#">Kontak</a></li>
<li><a className="hover:text-zinc-900" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-100 text-center text-[10px] text-zinc-400">
            © 2025 BeliRumahBareng. Semua hak dilindungi.
        </div>
</footer>



    </>
  );
}
