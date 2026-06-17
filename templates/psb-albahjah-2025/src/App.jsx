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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
cream: '#f4f4f0',
sage: '#587a58',
darkGreen: '#2f452f',
red: '#d65a5a',
dark: '#0a0a0a'
}
},
animation: {
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // Spotlight Logic
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // Dark Mode Toggle Logic
            const themeToggle = document.getElementById('theme-toggle');
            const html = document.documentElement;

            // Check local storage or system preference
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }

            themeToggle.addEventListener('click', () => {
                html.classList.toggle('dark');
                if (html.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[var(--accent-green)] text-[var(--bg)] rounded flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="book-open-check"></i>
</div>
<div className="flex flex-col">
<span className="font-display font-bold tracking-tight text-lg leading-none">AL-BAHJAH</span>
<span className="text-[10px] font-mono tracking-widest uppercase opacity-70">Pendidikan Formal</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-widest" href="#jadwal">Jadwal</a>
<a className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-widest" href="#persyaratan">Syarat</a>
<a className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-widest" href="#biaya">Biaya</a>

<button className="p-2 rounded-full hover:bg-[var(--surface-secondary)] border border-[var(--border)] transition-all" id="theme-toggle">
<i className="w-4 h-4 hidden dark:block" data-lucide="moon"></i>
<i className="w-4 h-4 block dark:hidden text-orange-500" data-lucide="sun"></i>
</button>
<a className="px-5 py-2.5 bg-[var(--accent)] text-white text-xs font-bold rounded shadow-lg hover:brightness-110 transition-all" href="#daftar">
                    DAFTAR SEKARANG
                </a>
</div>
</div>
</nav>
<main className="relative w-full z-10 pt-20">

<section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6">
<div className="absolute inset-0 grid-bg z-0 pointer-events-none opacity-50"></div>

<div className="absolute top-20 right-[-100px] w-96 h-96 bg-[var(--accent-green)] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-20 left-[-100px] w-96 h-96 bg-[var(--accent)] rounded-full blur-[150px] opacity-10"></div>
<div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 border border-[var(--border)] rounded-full px-4 py-1.5 bg-[var(--surface)] backdrop-blur-sm shadow-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
</span>
<span className="text-xs font-mono font-semibold text-[var(--text-secondary)] tracking-wider">PENERIMAAN SANTRI BARU 2024/2025</span>
</div>
<h1 className="text-6xl md:text-8xl font-display font-semibold leading-[0.9] tracking-tighter text-[var(--text-primary)]">
                        GENERASI<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--text-primary)]">QUR'ANI</span><br/>
                        BERAKHLAK
                    </h1>
<p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl font-medium">
                        "Membangun Masyarakat Berakhlak Mulia Bersendikan Al-Qur'an dan Sunnah Rasulullah SAW."
                    </p>
<div className="flex flex-wrap gap-3 font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wide">
<span className="px-3 py-1 border border-[var(--border)] rounded bg-[var(--surface)]">SDIQu</span>
<span className="px-3 py-1 border border-[var(--border)] rounded bg-[var(--surface)]">SMPIQu</span>
<span className="px-3 py-1 border border-[var(--border)] rounded bg-[var(--surface)]">SMAIQu</span>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group flex items-center justify-center gap-2 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg)] font-bold text-sm rounded transition-transform hover:-translate-y-1" href="#daftar">
                            DAFTAR ONLINE
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-center gap-2 px-8 py-4 border border-[var(--border)] text-[var(--text-primary)] font-bold text-sm rounded bg-[var(--surface)] hover:bg-[var(--surface-secondary)] transition-colors" href="#info">
<i className="w-4 h-4" data-lucide="download"></i>
                            UNDUH BROSUR
                        </a>
</div>
</div>

<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="spotlight-card rounded-xl p-6 flex flex-col justify-between h-48">
<i className="w-8 h-8 text-[var(--accent)]" data-lucide="calendar-clock"></i>
<div>
<h3 className="text-2xl font-bold text-[var(--text-primary)]">22 Des</h3>
<p className="text-xs font-mono text-[var(--text-secondary)] mt-1">Batas Pendaftaran</p>
</div>
</div>
<div className="spotlight-card rounded-xl p-6 flex flex-col justify-between h-48 bg-[var(--accent-green)] text-white border-transparent">
<i className="w-8 h-8 text-white/80" data-lucide="graduation-cap"></i>
<div>
<h3 className="text-2xl font-bold text-white">Full Day</h3>
<p className="text-xs font-mono text-white/70 mt-1">&amp; Boarding School</p>
</div>
</div>
<div className="spotlight-card rounded-xl p-6 flex flex-col justify-between h-48 col-span-2">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-[var(--text-primary)]" data-lucide="check-circle-2"></i>
<span className="badge px-2 py-1 text-[10px] rounded">STATUS</span>
</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-xl font-bold text-[var(--text-primary)]">Gelombang 1</h3>
<p className="text-xs font-mono text-[var(--text-secondary)] mt-1">Dibuka s/d 22 Desember 2023</p>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-[var(--border)] bg-[var(--surface)] overflow-hidden py-4">
<div className="flex whitespace-nowrap animate-marquee">
<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="info"></i> PENDAFTARAN: 1 OKT - 22 DES 2023
                </span>
<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="file-edit"></i> TES SELEKSI: 26 DES - 7 JAN 2024
                </span>
<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="megaphone"></i> PENGUMUMAN: 24 JAN 2024
                </span>
<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="user-check"></i> DAFTAR ULANG: 29 JAN 2024
                </span>

<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="info"></i> PENDAFTARAN: 1 OKT - 22 DES 2023
                </span>
<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="file-edit"></i> TES SELEKSI: 26 DES - 7 JAN 2024
                </span>
<span className="mx-8 font-mono text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="megaphone"></i> PENGUMUMAN: 24 JAN 2024
                </span>
</div>
</div>

<section className="py-24 px-6 relative bg-[var(--surface-secondary)]/30">
<div className="max-w-7xl mx-auto">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">Program Unggulan</h2>
<div className="h-1 w-20 bg-[var(--accent)]"></div>
</div>
<p className="text-[var(--text-secondary)] text-sm max-w-md text-right hidden md:block">
                        Kurikulum terintegrasi mencakup aspek spiritual, akademik, dan pengembangan karakter.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="spotlight-card p-6 rounded-lg bg-[var(--surface)] border-[var(--border)] col-span-1 md:col-span-2">
<div className="w-10 h-10 rounded bg-green-100 text-green-700 flex items-center justify-center mb-4 dark:bg-green-900 dark:text-green-300">
<i className="w-5 h-5" data-lucide="book"></i>
</div>
<h3 className="text-lg font-bold text-[var(--text-primary)]">Kurikulum Tahfidzul Qur'an</h3>
<p className="mt-2 text-sm text-[var(--text-secondary)]">Program intensif menghafal dengan target hafalan mutqin bersanad.</p>
</div>

<div className="spotlight-card p-6 rounded-lg bg-[var(--surface)] border-[var(--border)]">
<div className="w-10 h-10 rounded bg-blue-100 text-blue-700 flex items-center justify-center mb-4 dark:bg-blue-900 dark:text-blue-300">
<i className="w-5 h-5" data-lucide="languages"></i>
</div>
<h3 className="text-lg font-bold text-[var(--text-primary)]">Bahasa Asing</h3>
<p className="mt-2 text-sm text-[var(--text-secondary)]">Karantina Bahasa Arab &amp; Inggris aktif.</p>
</div>

<div className="spotlight-card p-6 rounded-lg bg-[var(--surface)] border-[var(--border)]">
<div className="w-10 h-10 rounded bg-red-100 text-red-700 flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-300">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-bold text-[var(--text-primary)]">Akhlakul Karimah</h3>
<p className="mt-2 text-sm text-[var(--text-secondary)]">Pembinaan karakter adab harian.</p>
</div>

<div className="spotlight-card p-6 rounded-lg bg-[var(--surface)] border-[var(--border)]">
<div className="w-10 h-10 rounded bg-purple-100 text-purple-700 flex items-center justify-center mb-4 dark:bg-purple-900 dark:text-purple-300">
<i className="w-5 h-5" data-lucide="school"></i>
</div>
<h3 className="text-lg font-bold text-[var(--text-primary)]">Madrasah Diniyah</h3>
<p className="mt-2 text-sm text-[var(--text-secondary)]">Pebekalan ilmu Fiqih, Aqidah, dan Siroh.</p>
</div>

<div className="spotlight-card p-6 rounded-lg bg-[var(--surface)] border-[var(--border)] col-span-1 md:col-span-2">
<div className="w-10 h-10 rounded bg-orange-100 text-orange-700 flex items-center justify-center mb-4 dark:bg-orange-900 dark:text-orange-300">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-bold text-[var(--text-primary)]">Kurikulum Kedinasan &amp; Ekstrakurikuler</h3>
<p className="mt-2 text-sm text-[var(--text-secondary)]">Persiapan masuk sekolah kedinasan/PTN dan pengembangan bakat minat santri.</p>
</div>

<div className="spotlight-card p-6 rounded-lg bg-[var(--text-primary)] text-[var(--bg)] flex items-center justify-center text-center">
<p className="font-display font-bold text-lg leading-tight">"Pendidikan Adalah Investasi Peradaban"</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[var(--border)]" id="jadwal">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-12">
<div>
<span className="badge px-3 py-1 rounded text-xs font-mono mb-4 inline-block">TIMELINE</span>
<h3 className="text-3xl font-semibold mb-8 text-[var(--text-primary)]">Jadwal Seleksi</h3>
<div className="relative border-l-2 border-[var(--border)] pl-8 space-y-8 ml-3">
<div className="relative">
<div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--surface)] border-4 border-[var(--accent)]"></div>
<h4 className="text-lg font-bold text-[var(--text-primary)]">Pendaftaran</h4>
<p className="text-sm font-mono text-[var(--text-secondary)] mb-1">16 Rabiul Awal - 9 Jumadil Akhir 1445 H</p>
<p className="text-base text-[var(--text-primary)] font-medium">1 Oktober - 22 Desember 2023</p>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--surface)] border-4 border-[var(--text-secondary)]"></div>
<h4 className="text-lg font-bold text-[var(--text-primary)]">Pelaksanaan Tes</h4>
<p className="text-sm font-mono text-[var(--text-secondary)] mb-1">26 Desember 2023 - 7 Januari 2024</p>
<ul className="list-disc pl-4 mt-2 text-sm text-[var(--text-secondary)] space-y-1">
<li>Tes Pengetahuan Akademik</li>
<li>Tes Psikologi</li>
<li>Tes Tahsin &amp; Tahfidz</li>
<li>Tes Bahasa Arab &amp; Inggris (SMAIQu)</li>
<li>Wawancara Calon Santri &amp; Walisantri</li>
<li>Tes Ubudiyah (Ibadah)</li>
</ul>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--surface)] border-4 border-[var(--text-secondary)]"></div>
<h4 className="text-lg font-bold text-[var(--text-primary)]">Pengumuman</h4>
<p className="text-base text-[var(--text-primary)] font-medium">24 Januari 2024</p>
<p className="text-xs text-[var(--text-secondary)]">via Website psb.albahjah.or.id</p>
</div>
</div>
</div>
<div className="p-6 bg-[var(--surface-secondary)] rounded-xl border border-[var(--border)]">
<h4 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-[var(--accent)]" data-lucide="map-pin"></i> Lokasi Pendaftaran
                        </h4>
<p className="text-sm text-[var(--text-secondary)]">
                            Jl. P. Cakrabuana No. 179, Blok Gudang Air, Kel. Sendang, Kec. Sumber, Kab. Cirebon
                        </p>
</div>
</div>

<div id="persyaratan">
<span className="badge px-3 py-1 rounded text-xs font-mono mb-4 inline-block">REQUIREMENTS</span>
<h3 className="text-3xl font-semibold mb-8 text-[var(--text-primary)]">Persyaratan Dokumen</h3>
<div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 shadow-sm">
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-green)] mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-base text-[var(--text-secondary)]">Mengisi Formulir Pendaftaran</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-green)] mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-base text-[var(--text-secondary)]">Foto 3x4 Latar Merah (4 Lembar)</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-green)] mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-base text-[var(--text-secondary)]">Fotokopi Kartu Keluarga &amp; Akta Kelahiran</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-green)] mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-base text-[var(--text-secondary)]">Fotokopi KTP Orang Tua</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-green)] mt-0.5 group-hover:bg-[var(--accent-green)] group-hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<div>
<span className="text-base text-[var(--text-secondary)]">Fotokopi Rapor</span>
<p className="text-xs text-[var(--text-secondary)] opacity-70 mt-1">SD Kelas 5 (Sem 1&amp;2) utk SMP, Kelas 8 (Sem 1&amp;2) utk SMA</p>
</div>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-[var(--border)]" id="biaya">
<h4 className="font-bold text-[var(--text-primary)] mb-4">Biaya Administrasi Tes</h4>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-[var(--surface-secondary)] rounded border border-[var(--border)] text-center">
<span className="block text-xs font-mono text-[var(--text-secondary)]">SDIQu</span>
<span className="block text-xl font-bold text-[var(--text-primary)] mt-1">Rp 400.000</span>
</div>
<div className="p-4 bg-[var(--surface-secondary)] rounded border border-[var(--border)] text-center">
<span className="block text-xs font-mono text-[var(--text-secondary)]">SMPIQu &amp; SMAIQu</span>
<span className="block text-xl font-bold text-[var(--text-primary)] mt-1">Rp 500.000</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[var(--surface-secondary)] relative overflow-hidden" id="daftar">
<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="max-w-5xl mx-auto bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-6">Mulai Pendaftaran</h2>
<p className="text-[var(--text-secondary)] mb-8 leading-relaxed text-lg">
                            Pastikan data yang Anda masukkan sesuai dengan dokumen resmi (KK/Akta). 
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[var(--accent-green)]/10 text-[var(--accent-green)] rounded-full flex items-center justify-center">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h5 className="font-bold text-[var(--text-primary)]">Butuh Bantuan?</h5>
<div className="text-sm text-[var(--text-secondary)] font-mono mt-1 space-y-1">
<p>Humas PSB: 0821-2132-0575</p>
<p>Humas SD: 0812-2238-8117</p>
<p>Humas SMP: 0822-1727-9997</p>
<p>Humas SMA: 0851-5511-9239</p>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[var(--accent-green)]/10 text-[var(--accent-green)] rounded-full flex items-center justify-center">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<div>
<h5 className="font-bold text-[var(--text-primary)]">Website Resmi</h5>
<p className="text-sm text-[var(--text-secondary)] font-mono mt-1">psb.albahjah.or.id</p>
</div>
</div>
</div>
</div>
<form className="space-y-5">
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-[var(--text-secondary)]">Nama Lengkap Santri</label>
<input className="custom-input w-full p-4 rounded-lg text-sm" placeholder="Sesuai Akta Kelahiran" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-[var(--text-secondary)]">Jenjang</label>
<div className="relative">
<select className="custom-input w-full p-4 rounded-lg text-sm appearance-none bg-transparent">
<option>Pilih Jenjang</option>
<option>SDIQu</option>
<option>SMPIQu</option>
<option>SMAIQu</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)] pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-[var(--text-secondary)]">No. WhatsApp</label>
<input className="custom-input w-full p-4 rounded-lg text-sm" placeholder="08..." type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-[var(--text-secondary)]">Asal Sekolah</label>
<input className="custom-input w-full p-4 rounded-lg text-sm" placeholder="Nama Sekolah Sebelumnya" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-[var(--text-primary)] text-[var(--bg)] font-bold text-base py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group" type="button">
                                LANJUT PEMBAYARAN
                                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-xs text-[var(--text-secondary)] mt-3">
                                Dengan mendaftar, Anda menyetujui seluruh persyaratan yang berlaku.
                            </p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-[var(--surface-secondary)] border-t border-[var(--border)] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-1 md:col-span-2">
<h2 className="text-2xl font-display font-bold tracking-tighter mb-4 text-[var(--text-primary)]">AL-BAHJAH</h2>
<p className="text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
                    Lembaga Pendidikan Formal di bawah naungan Buya Yahya. Membentuk generasi Rabbani yang intelek.
                </p>
<div className="flex gap-4 mt-6">
<a className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
<a className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-[var(--text-primary)] mb-4 uppercase text-xs tracking-wider">Jenjang</h4>
<ul className="space-y-2 text-sm text-[var(--text-secondary)] font-medium">
<li><a className="hover:text-[var(--accent)] transition-colors" href="#">SDIQu Al-Bahjah</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#">SMPIQu Al-Bahjah</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#">SMAIQu Al-Bahjah</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[var(--text-primary)] mb-4 uppercase text-xs tracking-wider">Download</h4>
<ul className="space-y-2 text-sm text-[var(--text-secondary)] font-medium">
<li><a className="hover:text-[var(--accent)] transition-colors" href="#">Brosur PSB 2024</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#">Panduan Pendaftaran</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#">Surat Pernyataan</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-[var(--text-secondary)] font-mono uppercase">
<span>© 2024 AL-BAHJAH ISLAMIC SCHOOL.</span>
<span className="mt-2 md:mt-0">desty.page/sekolah.albahjah</span>
</div>
</footer>


    </>
  );
}
