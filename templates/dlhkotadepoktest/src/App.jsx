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



function navigate(pageId) {
// Hide all pages
document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
// Show selected page
const target = document.getElementById(pageId);
if(target) {
target.classList.remove('hidden');
target.classList.add('page-transition');
window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Update active state in nav (desktop)
document.querySelectorAll('.nav-link').forEach(el => {
el.classList.remove('text-slate-900', 'bg-slate-100');
el.classList.add('text-slate-500');
});
const activeBtn = document.getElementById(`btn-${pageId}`);
if(activeBtn) {
activeBtn.classList.remove('text-slate-500');
activeBtn.classList.add('text-slate-900', 'bg-slate-100');
}
// Close mobile menu if open
document.getElementById('mobile-menu').classList.add('hidden');
}
function toggleMobileMenu() {
document.getElementById('mobile-menu').classList.toggle('hidden');
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

<button className="flex items-center gap-2 group focus:outline-none" onclick="navigate('home')">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-sm group-hover:shadow-md transition-all">
<iconify-icon icon="solar:leaf-bold" width="18"></iconify-icon>
</div>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Pemerintah</span>
<span className="text-sm font-semibold tracking-tight text-slate-900">Kota Depok</span>
</div>
</button>

<nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
<button className="nav-link rounded-full px-4 py-1.5 text-xs font-medium text-slate-900 bg-slate-100 transition-colors" id="btn-home" onclick="navigate('home')">Beranda</button>
<button className="nav-link rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" id="btn-profil" onclick="navigate('profil')">Profil</button>
<button className="nav-link rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" id="btn-layanan" onclick="navigate('layanan')">Layanan</button>
<button className="nav-link rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" id="btn-informasi" onclick="navigate('informasi')">Informasi</button>
<button className="nav-link rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" id="btn-berita" onclick="navigate('berita')">Berita</button>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition-all" onclick="navigate('kontak')">
<iconify-icon icon="solar:bell-bing-linear" width="16"></iconify-icon>
                    Lapor
                </button>
<button className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="hidden border-b border-slate-200 bg-white md:hidden" id="mobile-menu">
<div className="space-y-1 p-4">
<button className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50" onclick="navigate('home')">Beranda</button>
<button className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50" onclick="navigate('profil')">Profil</button>
<button className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50" onclick="navigate('layanan')">Layanan</button>
<button className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50" onclick="navigate('informasi')">Informasi Publik</button>
<button className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50" onclick="navigate('berita')">Berita</button>
<button className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-emerald-600 hover:bg-emerald-50" onclick="navigate('kontak')">Pengaduan &amp; Kontak</button>
</div>
</div>
</header>
<main className="min-h-screen pt-20 pb-12">

<div className="page-section" id="home">

<section className="relative isolate overflow-hidden px-6 lg:px-8 pb-16">
<div className="mx-auto max-w-7xl pt-10 sm:pt-16 lg:flex lg:items-center lg:gap-x-16">
<div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
<div className="mb-8 flex">
<div className="relative rounded-full px-3 py-1 text-xs leading-6 text-slate-500 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
                                Indeks Kualitas Udara Depok: <span className="font-semibold text-emerald-600">Baik (45 AQI)</span>
</div>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                            Wujudkan Depok <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Bersih &amp; Hijau.</span>
</h1>
<p className="mt-6 text-lg leading-8 text-slate-600">
                            Portal layanan digital Dinas Lingkungan Hidup Kota Depok. Kelola sampah, pantau kualitas udara, dan lestarikan 23 Situ di kota kita.
                        </p>
<div className="mt-10 flex items-center gap-x-4">
<button className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600" onclick="navigate('layanan')">
                                Layanan Kami
                            </button>
<button className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50" onclick="navigate('kontak')">
                                Lapor Masalah
                            </button>
</div>
</div>
<div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
<div className="relative grid grid-cols-2 gap-4">
<div className="col-span-2 overflow-hidden rounded-2xl bg-slate-100 shadow-lg border border-slate-100">
<img alt="UI Depok" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1596423736732-7212eb7607a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="font-semibold text-slate-900">Ruang Terbuka Hijau</h3>
<p className="text-xs text-slate-500">Target 30% RTH Publik</p>
</div>
</div>
<div className="overflow-hidden rounded-2xl bg-emerald-50 p-6 border border-emerald-100 flex flex-col justify-center items-center text-center">
<div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
<iconify-icon icon="solar:trash-bin-trash-bold" width="20"></iconify-icon>
</div>
<span className="text-2xl font-bold text-slate-900">120+</span>
<span className="text-xs text-slate-500">Bank Sampah</span>
</div>
<div className="overflow-hidden rounded-2xl bg-blue-50 p-6 border border-blue-100 flex flex-col justify-center items-center text-center">
<div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
<iconify-icon icon="solar:waterdrops-bold" width="20"></iconify-icon>
</div>
<span className="text-2xl font-bold text-slate-900">23</span>
<span className="text-xs text-slate-500">Situ &amp; Danau</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="profil">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Profil Dinas</h2>
<p className="mt-4 text-base leading-7 text-slate-600">Mengenal lebih dekat Dinas Lingkungan Hidup Kota Depok.</p>
</div>

<div className="grid gap-6 md:grid-cols-2 mb-12">
<div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:target-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Visi</h3>
<p className="text-sm leading-6 text-slate-600">
                            "Kota Depok yang Maju, Berbudaya dan Sejahtera."
                        </p>
</div>
<div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<iconify-icon icon="solar:rocket-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Misi</h3>
<ul className="text-sm leading-6 text-slate-600 space-y-2 list-disc list-inside">
<li>Meningkatkan kualitas pelayanan publik.</li>
<li>Mewujudkan infrastruktur lingkungan yang berkelanjutan.</li>
<li>Mengembangkan budaya masyarakat peduli lingkungan.</li>
</ul>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Struktur Organisasi</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
<div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-bold" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Kepala Dinas</p>
<p className="text-sm text-slate-500">Dinas Lingkungan Hidup</p>
</div>
</div>
<div className="ml-8 border-l-2 border-slate-200 pl-8 space-y-4">
<div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-slate-200">
<div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Sekretariat</span>
</div>
<div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-slate-200">
<div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:trash-bin-2-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Bidang Kebersihan &amp; Kemitraan</span>
</div>
<div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-slate-200">
<div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Bidang Tata Lingkungan &amp; Konservasi</span>
</div>
<div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-slate-200">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:danger-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Bidang Pengendalian Pencemaran</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="layanan">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Layanan Publik</h2>
<p className="mt-4 text-slate-600">Akses layanan lingkungan hidup untuk warga dan badan usaha.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:truck-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Penyedotan Kakus</h3>
<p className="mt-2 flex-auto text-sm leading-6 text-slate-500">Layanan penyedotan lumpur tinja domestik dengan armada resmi DLH.</p>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Retribusi berlaku</span>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">Pesan <span aria-hidden="true">→</span></a>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Pemangkasan Pohon</h3>
<p className="mt-2 flex-auto text-sm leading-6 text-slate-500">Permohonan pemangkasan pohon rawan tumbang di area publik/jalan raya.</p>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Gratis (Area Publik)</span>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">Ajukan <span aria-hidden="true">→</span></a>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Lab Lingkungan</h3>
<p className="mt-2 flex-auto text-sm leading-6 text-slate-500">Uji kualitas air limbah, air permukaan, dan udara ambien untuk industri/usaha.</p>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Sesuai Parameter</span>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">Lihat Tarif <span aria-hidden="true">→</span></a>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Izin Lingkungan (AMDAL)</h3>
<p className="mt-2 flex-auto text-sm leading-6 text-slate-500">Penerbitan persetujuan lingkungan (SPPL, UKL-UPL) untuk kegiatan usaha.</p>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Online via OSS</span>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">Panduan <span aria-hidden="true">→</span></a>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:trash-bin-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Bank Sampah</h3>
<p className="mt-2 flex-auto text-sm leading-6 text-slate-500">Registrasi unit bank sampah baru atau penjemputan hasil pilah sampah anorganik.</p>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Program Warga</span>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">Gabung <span aria-hidden="true">→</span></a>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bomb-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900">Limbah B3</h3>
<p className="mt-2 flex-auto text-sm leading-6 text-slate-500">Rekomendasi penyimpanan dan pengangkutan limbah Bahan Berbahaya Beracun.</p>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Khusus Usaha</span>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">Info <span aria-hidden="true">→</span></a>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="informasi">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900">Dokumen &amp; Data Publik</h2>
<p className="text-slate-500 text-sm mt-1">Transparansi kinerja dan regulasi lingkungan.</p>
</div>
<div className="relative">
<input className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Cari dokumen..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
</div>
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">Judul Dokumen</th>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:table-cell" scope="col">Kategori</th>
<th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:table-cell" scope="col">Tahun</th>
<th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<iconify-icon className="text-red-500 mr-3" icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Laporan Akuntabilitas Kinerja (LAKIP)</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">Laporan Kinerja</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">2023</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-emerald-600 hover:text-emerald-900" href="#">Unduh</a>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<iconify-icon className="text-red-500 mr-3" icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Dokumen Informasi Kinerja Pengelolaan Lingkungan (DIKPLHD)</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">Lingkungan</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">2023</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-emerald-600 hover:text-emerald-900" href="#">Unduh</a>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<iconify-icon className="text-blue-500 mr-3" icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Perda No. 5 Tahun 2014 tentang Sampah</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">Regulasi</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">2014</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-emerald-600 hover:text-emerald-900" href="#">Unduh</a>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<iconify-icon className="text-green-500 mr-3" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Data Indeks Kualitas Udara (AQI) Semester 1</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">Data</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 hidden sm:table-cell">2024</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a className="text-emerald-600 hover:text-emerald-900" href="#">Lihat</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-section hidden" id="berita">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Kabar Lingkungan Depok</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
<div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer">
<img alt="Taman Kota" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<span className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-xs font-medium mb-3">Utama</span>
<h3 className="text-2xl font-bold leading-snug group-hover:underline decoration-2 underline-offset-4">Pemkot Depok Resmikan Alun-Alun Wilayah Barat, Usung Konsep Ecopark</h3>
<p className="mt-2 text-slate-200 line-clamp-2 text-sm">Menambah ruang terbuka hijau baru bagi warga Sawangan dan Bojongsari dengan fasilitas pengolahan sampah mandiri.</p>
</div>
</div>
<div className="flex flex-col gap-6">

<div className="flex gap-4 group cursor-pointer">
<div className="w-32 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100">
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1611288870280-4a39e47fe45c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">12 Nov 2023 • Cimanggis</div>
<h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 leading-tight">Giat Bersih Situ Rawa Kalong Libatkan 500 Relawan Lingkungan</h4>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-32 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100">
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">10 Nov 2023 • Balaikota</div>
<h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 leading-tight">DLH Depok Terima Penghargaan Proklim Utama dari KLHK</h4>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-32 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100">
<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1595278069441-2cf29f525a3c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">08 Nov 2023 • Margonda</div>
<h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 leading-tight">Uji Emisi Gratis Bagi Kendaraan Roda 4 di Balaikota Depok</h4>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="kontak">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Hubungi Kami</h2>
<p className="mt-4 text-slate-600">Sampaikan pengaduan, kritik, atau saran untuk lingkungan Depok yang lebih baik.</p>
<div className="mt-8 space-y-6">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Kantor Dinas</h3>
<p className="text-sm text-slate-600 mt-1">Gedung Dibaleka II, Lantai 6, Komplek Balaikota Depok, Jl. Margonda Raya No. 54, Depok, Jawa Barat 16431</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Telepon &amp; Fax</h3>
<p className="text-sm text-slate-600 mt-1">(021) 777-3610 / (021) 776-2968</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:letter-bold" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Email Resmi</h3>
<p className="text-sm text-slate-600 mt-1">dlh@depok.go.id</p>
</div>
</div>
</div>

<div className="mt-10 flex gap-4">
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Formulir Pengaduan</h3>
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Nama Lengkap</label>
<input className="block w-full rounded-md border-slate-200 shadow-sm text-sm focus:border-emerald-500 focus:ring-emerald-500 py-2.5 px-3 bg-slate-50 border" id="name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">No. WhatsApp</label>
<input className="block w-full rounded-md border-slate-200 shadow-sm text-sm focus:border-emerald-500 focus:ring-emerald-500 py-2.5 px-3 bg-slate-50 border" id="phone" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="category">Kategori Laporan</label>
<select className="block w-full rounded-md border-slate-200 shadow-sm text-sm focus:border-emerald-500 focus:ring-emerald-500 py-2.5 px-3 bg-slate-50 border" id="category">
<option>Tumpukan Sampah Liar</option>
<option>Pencemaran Sungai/Situ</option>
<option>Pembakaran Sampah Terbuka</option>
<option>Penebangan Pohon Ilegal</option>
<option>Lainnya</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Detail Laporan</label>
<textarea className="block w-full rounded-md border-slate-200 shadow-sm text-sm focus:border-emerald-500 focus:ring-emerald-500 py-2.5 px-3 bg-slate-50 border" id="message" placeholder="Jelaskan lokasi dan detail kejadian..." rows="4"></textarea>
</div>
<div>
<button className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-all flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:plain-3-bold" width="18"></iconify-icon> Kirim Laporan
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white py-8">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2024 Dinas Lingkungan Hidup Kota Depok.</p>
<div className="flex gap-4 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900" href="#">Kebijakan Privasi</a>
<a className="hover:text-slate-900" href="#">Syarat Layanan</a>
</div>
</div>
</footer>

    </>
  );
}
