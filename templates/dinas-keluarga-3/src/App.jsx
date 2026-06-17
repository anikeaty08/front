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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-md flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter">DKB.</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#beranda">Beranda</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#layanan">Layanan</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#program">Program</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#edukasi">Edukasi</a>
</nav>
<div className="flex items-center gap-4">

<div className="relative group hidden md:block">
<button className="flex items-center justify-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors py-2">
<iconify-icon className="text-lg" icon="solar:shield-user-linear"></iconify-icon>
                        Admin
                        <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full right-0 mt-1 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg shadow-neutral-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col py-2 z-50">
<div className="px-4 py-2 border-b border-neutral-100 mb-1">
<div className="text-xs font-medium text-neutral-900">Administrator</div>
<div className="text-xs text-neutral-500">admin@dkb.go.id</div>
</div>
<a className="px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 flex items-center gap-2" href="#admin-panel">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Kelola Menu
                        </a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 flex items-center gap-2" href="#admin-panel">
<iconify-icon icon="solar:documents-linear"></iconify-icon> Konten Web
                        </a>
<hr className="my-1 border-neutral-100"/>
<a className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2" href="#">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Keluar
                        </a>
</div>
</div>
<a className="bg-neutral-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 shadow-sm shadow-neutral-900/20" href="#konsultasi">
                    Daftar Konsultasi
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="overflow-hidden pt-32 pb-24 relative scroll-mt-16" id="beranda">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Layanan Konseling Online Kini Tersedia
                </div>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-neutral-900 max-w-4xl mx-auto leading-tight text-balance">
                    Keluarga Terencana, <br/> Masa Depan <span className="text-blue-600">Sejahtera.</span>
</h1>
<p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto font-normal text-balance">
                    Dinas Keluarga Berencana hadir untuk memberikan pendampingan, edukasi, dan layanan kesehatan reproduksi demi mewujudkan keluarga yang sehat dan berkualitas.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-md shadow-neutral-900/10 text-center" href="#layanan">
                        Jelajahi Layanan
                    </a>
<a className="w-full sm:w-auto bg-white text-neutral-900 border border-neutral-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2" href="#konsultasi">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        Hubungi Call Center
                    </a>
</div>
</div>
</section>

<section className="py-24 scroll-mt-16 border-t border-neutral-100" id="layanan">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl tracking-tight font-medium text-neutral-900">Layanan Kami</h2>
<p className="text-base text-neutral-500 mt-3 max-w-2xl font-normal">Solusi komprehensif untuk perencanaan keluarga dan kesehatan reproduksi yang aman dan terpercaya.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 transition-colors bg-white hover:shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:pill-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-900 mb-3">Pelayanan Kontrasepsi</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed mb-6">Penyediaan alat kontrasepsi yang aman seperti Pil, Suntik, Implan, IUD, dan konseling pemilihan metode yang tepat.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                            Selengkapnya <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 transition-colors bg-white hover:shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-900 mb-3">Konseling Pra-Nikah</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed mb-6">Pendampingan bagi calon pengantin mengenai kesehatan reproduksi, kesiapan mental, dan perencanaan finansial.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                            Selengkapnya <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 transition-colors bg-white hover:shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:stroller-linear"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-900 mb-3">Kesehatan Ibu &amp; Anak</h3>
<p className="text-sm text-neutral-500 font-normal leading-relaxed mb-6">Pemeriksaan kehamilan rutin, pemantauan tumbuh kembang balita (Posyandu), dan edukasi gizi mencegah stunting.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                            Selengkapnya <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/50 border-y border-neutral-100 scroll-mt-16" id="program">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/50 text-neutral-700 text-xs font-medium mb-6">
                            Program Unggulan
                        </div>
<h2 className="text-3xl tracking-tight font-medium text-neutral-900 mb-6">Bina Keluarga Balita (BKB)</h2>
<p className="text-base text-neutral-500 font-normal mb-8 leading-relaxed">
                            BKB adalah wadah kegiatan keluarga yang mempunyai balita-anak, bertujuan meningkatkan pengetahuan dan keterampilan orang tua untuk membina tumbuh kembang anak secara optimal melalui interaksi yang bermakna.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-neutral-900">Pemantauan Tumbuh Kembang</h4>
<p className="text-sm text-neutral-500 font-normal mt-1">Menggunakan Kartu Kembang Anak (KKA) untuk mendeteksi dini keterlambatan.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-neutral-900">Edukasi Pola Asuh</h4>
<p className="text-sm text-neutral-500 font-normal mt-1">Materi pengasuhan positif dan pembentukan karakter anak usia dini.</p>
</div>
</li>
</ul>
<button className="bg-neutral-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
                            Gabung Program BKB
                        </button>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl bg-gradient-to-tr from-neutral-200 to-white border border-neutral-200 shadow-sm relative overflow-hidden flex items-center justify-center p-8">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl w-full max-w-sm p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Grafik KKA</div>
<div className="text-xs text-neutral-500">Update bulan ini</div>
</div>
</div>
<div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Normal</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[75%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500">
<span>Motorik Kasar</span>
<span>75%</span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden mt-2">
<div className="h-full bg-blue-400 w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500">
<span>Kecerdasan</span>
<span>85%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 scroll-mt-16" id="edukasi">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl tracking-tight font-medium text-neutral-900">Edukasi &amp; Artikel</h2>
<p className="text-base text-neutral-500 mt-3 max-w-xl font-normal">Informasi terbaru seputar kesehatan keluarga, tips pola asuh, dan panduan gizi seimbang.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0" href="#">
                        Lihat Semua Artikel <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200 mb-4 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-5xl text-neutral-300 group-hover:scale-110 transition-transform duration-500" icon="solar:apple-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-2">
<span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Gizi Anak</span>
<span>•</span>
<span>12 Okt 2023</span>
</div>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">Pentingnya Gizi Seimbang di 1000 Hari Pertama</h3>
<p className="text-sm text-neutral-500 font-normal line-clamp-2">Masa 1000 Hari Pertama Kehidupan (HPK) merupakan periode emas yang menentukan kualitas kesehatan anak di masa depan.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200 mb-4 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-5xl text-neutral-300 group-hover:scale-110 transition-transform duration-500" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-2">
<span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Kesehatan Ibu</span>
<span>•</span>
<span>08 Okt 2023</span>
</div>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">Persiapan Mental dan Fisik Sebelum Kehamilan</h3>
<p className="text-sm text-neutral-500 font-normal line-clamp-2">Kesiapan calon ibu sangat penting untuk mencegah resiko komplikasi dan memastikan janin berkembang optimal.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200 mb-4 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-5xl text-neutral-300 group-hover:scale-110 transition-transform duration-500" icon="solar:chat-square-like-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-2">
<span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Psikologi</span>
<span>•</span>
<span>05 Okt 2023</span>
</div>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">Komunikasi Efektif dalam Keluarga Modern</h3>
<p className="text-sm text-neutral-500 font-normal line-clamp-2">Tips membangun kedekatan emosional dan komunikasi terbuka antara orang tua dan anak di era digital.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200 scroll-mt-16" id="konsultasi">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl tracking-tight font-medium text-neutral-900">Mulai Konsultasi Anda</h2>
<p className="text-base text-neutral-500 mt-2 font-normal">Isi formulir singkat di bawah ini untuk mengatur jadwal pertemuan dengan konselor kami.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-900">Nama Lengkap</label>
<input className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all" placeholder="Budi Santoso" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-900">Nomor Telepon</label>
<input className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all" placeholder="0812 3456 7890" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-900">Pilih Layanan</label>
<div className="relative">
<select className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all text-neutral-600">
<option>Konseling Pra-Nikah</option>
<option>Layanan Kontrasepsi (KB)</option>
<option>Konsultasi Psikologi</option>
<option>Lainnya</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm shadow-neutral-900/20" type="button">
                        Kirim Permintaan Jadwal
                    </button>
</form>
</div>
</section>

<section className="py-24 border-t border-neutral-200 scroll-mt-16 bg-white" id="admin-panel">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-3 border border-blue-100">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Mode Administrator
                        </div>
<h2 className="text-2xl tracking-tight font-medium text-neutral-900">Pengelolaan Menu Website</h2>
<p className="text-sm text-neutral-500 mt-1 font-normal">Aktifkan, atur ikon, atau kelola tautan navigasi dan bagian konten.</p>
</div>
<button className="bg-neutral-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon> Tambah Menu
                    </button>
</div>
<div className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-neutral-50 border-b border-neutral-200">
<th className="px-6 py-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Nama Menu</th>
<th className="px-6 py-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Ikon</th>
<th className="px-6 py-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Tautan (URL/ID)</th>
<th className="px-6 py-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Status Tampil</th>
<th className="px-6 py-4 text-xs font-medium text-neutral-500 uppercase tracking-wider text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100">

<tr className="hover:bg-neutral-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-neutral-900">Beranda</div>
<div className="text-xs text-neutral-500">Header Navigasi Utama</div>
</td>
<td className="px-6 py-4">
<button className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 active:scale-95 shadow-sm" title="Ubah Ikon" type="button">
<iconify-icon className="text-lg" icon="solar:home-smile-linear"></iconify-icon>
</button>
</td>
<td className="px-6 py-4 text-sm text-neutral-500">#beranda</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 flex items-center justify-center cursor-pointer" title="Pengaturan Lanjutan" type="button">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-100 flex items-center justify-center cursor-pointer" title="Edit Menu" type="button">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-100 flex items-center justify-center cursor-pointer" title="Hapus Menu" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-neutral-900">Layanan</div>
<div className="text-xs text-neutral-500">Header Navigasi Utama</div>
</td>
<td className="px-6 py-4">
<button className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 active:scale-95 shadow-sm" title="Ubah Ikon" type="button">
<iconify-icon className="text-lg" icon="solar:heart-pulse-linear"></iconify-icon>
</button>
</td>
<td className="px-6 py-4 text-sm text-neutral-500">#layanan</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 flex items-center justify-center cursor-pointer" title="Pengaturan Lanjutan" type="button">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-100 flex items-center justify-center cursor-pointer" title="Edit Menu" type="button">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-100 flex items-center justify-center cursor-pointer" title="Hapus Menu" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-neutral-900">Program</div>
<div className="text-xs text-neutral-500">Header Navigasi Utama</div>
</td>
<td className="px-6 py-4">
<button className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 active:scale-95 shadow-sm" title="Ubah Ikon" type="button">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
</button>
</td>
<td className="px-6 py-4 text-sm text-neutral-500">#program</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 flex items-center justify-center cursor-pointer" title="Pengaturan Lanjutan" type="button">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-100 flex items-center justify-center cursor-pointer" title="Edit Menu" type="button">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-100 flex items-center justify-center cursor-pointer" title="Hapus Menu" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-neutral-900">Edukasi</div>
<div className="text-xs text-neutral-500">Header Navigasi Utama</div>
</td>
<td className="px-6 py-4">
<button className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 active:scale-95 shadow-sm" title="Ubah Ikon" type="button">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
</button>
</td>
<td className="px-6 py-4 text-sm text-neutral-500">#edukasi</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 flex items-center justify-center cursor-pointer" title="Pengaturan Lanjutan" type="button">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-100 flex items-center justify-center cursor-pointer" title="Edit Menu" type="button">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-100 flex items-center justify-center cursor-pointer" title="Hapus Menu" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50/50 transition-colors">
<td className="px-6 py-4">
<div className="text-sm font-medium text-neutral-400">Galeri Foto</div>
<div className="text-xs text-neutral-400">Header Navigasi Utama</div>
</td>
<td className="px-6 py-4">
<button className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 active:scale-95 shadow-sm opacity-60" title="Ubah Ikon" type="button">
<iconify-icon className="text-lg" icon="solar:gallery-linear"></iconify-icon>
</button>
</td>
<td className="px-6 py-4 text-sm text-neutral-400">#galeri</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 flex items-center justify-center cursor-pointer" title="Pengaturan Lanjutan" type="button">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-100 flex items-center justify-center cursor-pointer" title="Edit Menu" type="button">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-100 flex items-center justify-center cursor-pointer" title="Hapus Menu" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-50 border-t border-neutral-200 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
<div className="md:col-span-1 text-sm font-medium text-neutral-900 flex justify-center text-center mx-auto">
<div className="flex flex-col mx-auto">
<span className="font-medium tracking-tighter text-xl mb-4">DKB.</span>
<p className="text-xs text-neutral-500 font-normal leading-relaxed mt-4">
                            Mewujudkan keluarga yang terencana, sehat, sejahtera, dan berkualitas.
                        </p>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Layanan</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#layanan">Kontrasepsi</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#layanan">Kesehatan Ibu &amp; Anak</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Informasi</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#edukasi">Artikel &amp; Edukasi</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Data &amp; Statistik</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Kontak</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-neutral-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            Jl. Kesehatan No. 12, Pusat Kota
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-500">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            (021) 555-0123
                        </li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-normal">
                    © 2024 Dinas Keluarga Berencana. Hak Cipta Dilindungi.
                </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:gallery-bold-duotone"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
