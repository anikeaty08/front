import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
emerald: {
400: '#34d399',
500: '#10b981',
600: '#059669',
900: '#064e3b',
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Dark Mode Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[100px]"></div>
</div>

<header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-[#0a0a12]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
<i className="w-5 h-5 fill-white" data-lucide="moon-star"></i>
</div>
<span className="font-bold text-lg tracking-tight dark:text-white text-zinc-900">Al-Bahjah</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#program">Program</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#jadwal">Jadwal</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#syarat">Persyaratan</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#kontak">Kontak</a>
</nav>

<div className="flex items-center gap-4">

<button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors text-zinc-600 dark:text-zinc-300" id="theme-toggle">
<i className="w-5 h-5 hidden dark:block" data-lucide="sun"></i>
<i className="w-5 h-5 block dark:hidden" data-lucide="moon"></i>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all bg-emerald-600 rounded-lg hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95" href="https://psb.albahjah.or.id">
<span className="mr-2">Daftar Sekarang</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-20 pb-20 sm:pt-32 sm:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Penerimaan Santri Baru 1445-1446 H
                </div>
<h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
                    Membangun Generasi <br className="hidden sm:block"/>
<span className="gradient-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Qur'ani &amp; Berakhlak</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Penerimaan Santri Baru SDIQu, SMPIQu, dan SMAIQu Al-Bahjah. Membangun masyarakat mulia bersendikan Al-Qur'an dan Sunnah Rasulullah SAW.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2" href="#cara-daftar">
                        Daftar Online
                        <i className="w-4 h-4" data-lucide="mouse-pointer-2"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-white font-semibold hover:bg-zinc-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#brosur">
<i className="w-4 h-4" data-lucide="download"></i>
                        Download Brosur
                    </a>
</div>
</div>

<div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:[mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20 dark:opacity-20 pointer-events-none">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full stroke-emerald-600/20">
<defs>
<pattern height="40" id="grid-pattern" patternunits="userSpaceOnUse" width="40">
<path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" strokeWidth="2"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
</svg>
</div>
</section>

<section className="py-24 bg-zinc-50/50 dark:bg-white/5 border-y border-zinc-200 dark:border-white/5" id="program">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">Program Unggulan</h2>
<p className="text-zinc-600 dark:text-zinc-400">Kurikulum terpadu untuk membentuk karakter santri yang cerdas secara intelektual dan spiritual.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-xl dark:hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Akhlakul Karimah</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Pembentukan karakter mulia sesuai tuntunan Rasulullah SAW sebagai fondasi utama pendidikan.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-xl dark:hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Tahfidzul Qur'an</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Program intensif menghafal Al-Qur'an dengan metode yang terstruktur dan mutqin.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-xl dark:hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Madrasah Diniyah</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Pendalaman ilmu agama Islam (Fiqh, Aqidah, Akhlak) berbasis kitab kuning.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-xl dark:hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Kurikulum Kedinasan</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Persiapan akademik sesuai standar nasional untuk jenjang pendidikan formal.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-xl dark:hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="languages"></i>
</div>
<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Karantina Bahasa</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Program intensif Bahasa Inggris dan Bahasa Arab untuk komunikasi global.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-xl dark:hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Ekstrakurikuler</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Pengembangan bakat dan minat santri melalui berbagai kegiatan positif.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="jadwal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider text-sm uppercase">Timeline</span>
<h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-2">Jadwal Pelaksanaan</h2>
</div>
<div className="text-zinc-500 dark:text-zinc-400 text-sm text-right">
                        Tahun Pelajaran 2024/2025
                    </div>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 dark:bg-white/10 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 border-4 border-white dark:border-[#0a0a12] text-white text-xs font-bold mx-auto mb-6 relative z-10 shadow-lg shadow-emerald-600/20">1</div>
<div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
<div className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold mb-3">1</div>
<h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Pendaftaran</h4>
<p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">1 Okt - 22 Des 2023</p>
<p className="text-sm text-zinc-600 dark:text-zinc-400">16 Rabiul Awal - 9 Jumadil Akhir 1445 H</p>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-[#0a0a12] text-zinc-600 dark:text-zinc-400 text-xs font-bold mx-auto mb-6 relative z-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">2</div>
<div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
<div className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold mb-3">2</div>
<h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Pelaksanaan Tes</h4>
<p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">26 Des 2023 - 7 Jan 2024</p>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Tes Akademik, Psikologi, Tahsin, &amp; Wawancara.</p>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-[#0a0a12] text-zinc-600 dark:text-zinc-400 text-xs font-bold mx-auto mb-6 relative z-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">3</div>
<div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
<div className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold mb-3">3</div>
<h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Pengumuman</h4>
<p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">24 Januari 2024</p>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Hasil seleksi dapat diakses melalui website resmi.</p>
</div>
</div>

<div className="relative group">
<div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-[#0a0a12] text-zinc-600 dark:text-zinc-400 text-xs font-bold mx-auto mb-6 relative z-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors">4</div>
<div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
<div className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold mb-3">4</div>
<h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Daftar Ulang</h4>
<p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">29 Januari 2024</p>
<p className="text-sm text-zinc-600 dark:text-zinc-400">Registrasi ulang bagi santri yang dinyatakan lulus.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 dark:bg-[#0c0d15] border-t border-zinc-200 dark:border-white/5" id="syarat">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
<i className="text-emerald-600" data-lucide="clipboard-list"></i>
                            Persyaratan
                        </h3>
<div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-8">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-zinc-600 dark:text-zinc-300">Mengisi formulir pendaftaran</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-zinc-600 dark:text-zinc-300">Foto 3x4 latar merah (4 lembar)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-zinc-600 dark:text-zinc-300">Fotokopi Kartu Keluarga &amp; Akta Kelahiran</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-zinc-600 dark:text-zinc-300">Fotokopi KTP Orang Tua</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-zinc-600 dark:text-zinc-300">Fotokopi Rapor (SD Kls 5 / SMP Kls 8)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-zinc-600 dark:text-zinc-300">Mengisi surat pernyataan</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-zinc-100 dark:border-white/10">
<p className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Biaya Administrasi Tes:</p>
<div className="flex flex-col sm:flex-row gap-4">
<div className="px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20">
<span className="block text-xs text-emerald-600 dark:text-emerald-400">SDIQu</span>
<span className="font-bold text-zinc-800 dark:text-zinc-200">Rp 400.000</span>
</div>
<div className="px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20">
<span className="block text-xs text-emerald-600 dark:text-emerald-400">SMPIQu / SMAIQu</span>
<span className="font-bold text-zinc-800 dark:text-zinc-200">Rp 500.000</span>
</div>
</div>
</div>
</div>
</div>

<div id="cara-daftar">
<h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
<i className="text-emerald-600" data-lucide="map-pin"></i>
                            Cara Pendaftaran
                        </h3>
<div className="space-y-4">

<div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 transition-all hover:border-emerald-500/50">
<div className="absolute right-0 top-0 h-24 w-24 bg-emerald-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
<h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Offline (Datang Langsung)</h4>
<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                                    Datang langsung ke stand pendaftaran PSB di <strong>Pondok Pesantren Al-Bahjah Cirebon</strong>.
                                </p>
<div className="text-sm text-zinc-500 dark:text-zinc-500 space-y-1">
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="clock"></i> Senin - Jum'at: 08.00 - 15.00 WIB</p>
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="clock"></i> Sabtu - Ahad: 10.00 - 15.00 WIB</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 bg-white/10 rounded-bl-full -mr-8 -mt-8"></div>
<h4 className="text-lg font-bold mb-2 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="globe"></i>
                                    Online (Website)
                                </h4>
<p className="text-emerald-100 text-sm mb-6">
                                    Daftar dari mana saja melalui website resmi kami atau scan barcode yang tersedia.
                                </p>
<div className="flex flex-wrap gap-3">
<a className="px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-bold hover:bg-emerald-50 transition-colors" href="https://psb.albahjah.or.id">
                                        psb.albahjah.or.id
                                    </a>
<a className="px-4 py-2 bg-emerald-500/30 text-white rounded-lg text-sm font-semibold hover:bg-emerald-500/40 transition-colors border border-white/20" href="https://desty.page/sekolah.albahjah">
                                        desty.page
                                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-[#064e3b] text-white overflow-hidden" id="kontak">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div>
<h4 className="text-xl font-bold mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="phone"></i>
                            Informasi Lanjut
                        </h4>
<ul className="space-y-4 text-emerald-100">
<li>
<span className="block text-xs opacity-70 uppercase tracking-wider mb-1">Humas PSB (Umum)</span>
<a className="text-lg font-semibold hover:text-white transition-colors" href="tel:082121320575">0821-2132-0575</a>
</li>
<li>
<span className="block text-xs opacity-70 uppercase tracking-wider mb-1">Humas SDIQu</span>
<a className="text-lg font-semibold hover:text-white transition-colors" href="tel:081222388117">0812-2238-8117</a>
</li>
<li>
<span className="block text-xs opacity-70 uppercase tracking-wider mb-1">Humas SMPIQu</span>
<a className="text-lg font-semibold hover:text-white transition-colors" href="tel:082217279997">0822-1727-9997</a>
</li>
<li>
<span className="block text-xs opacity-70 uppercase tracking-wider mb-1">Humas SMAIQu</span>
<a className="text-lg font-semibold hover:text-white transition-colors" href="tel:085155119239">0851-5511-9239</a>
</li>
</ul>
</div>

<div>
<h4 className="text-xl font-bold mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="instagram"></i>
                            Sosial Media
                        </h4>
<div className="space-y-4">
<a className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10" href="#">
<div className="bg-gradient-to-tr from-yellow-500 to-pink-500 w-8 h-8 rounded-md flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="instagram"></i>
</div>
<div>
<p className="font-medium text-sm">sekolah.albahjah</p>
<p className="text-xs text-emerald-200">Official Account</p>
</div>
</a>
<div className="text-sm text-emerald-100 space-y-2 pl-2 border-l-2 border-white/20">
<p>@sdiqualbahjah_cirebon</p>
<p>@smpiqualbahjah_cirebon</p>
<p>@smaiqualbahjah_cirebon</p>
</div>
</div>
</div>

<div>
<h4 className="text-xl font-bold mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="map"></i>
                            Lokasi
                        </h4>
<address className="not-italic text-emerald-100 leading-relaxed mb-6">
                            Jl. P. Cakrabuana No. 179,<br/>
                            Blok Gudang Air, Kel. Sendang,<br/>
                            Kec. Sumber, Kab. Cirebon
                        </address>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors" href="https://maps.google.com" target="_blank">
<i className="w-4 h-4" data-lucide="navigation"></i>
                            Lihat di Google Maps
                        </a>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10 text-center text-emerald-200/60 text-sm">
                    © 2024 Panitia PSB Al-Bahjah. All rights reserved.
                </div>
</div>
</section>
</main>



    </>
  );
}
