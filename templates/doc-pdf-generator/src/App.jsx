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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
colors: {
slate: {
850: '#151b2e',
950: '#020617',
}
}
}
}
}



        // Dark Mode Toggle Logic
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

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        
        mobileMenuBtn.addEventListener('click', () => {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                // Create overlay
                const overlay = document.createElement('div');
                overlay.id = 'sidebar-overlay';
                overlay.className = 'fixed inset-0 bg-slate-900/50 z-30 md:hidden backdrop-blur-sm';
                overlay.onclick = () => {
                    sidebar.classList.add('-translate-x-full');
                    overlay.remove();
                };
                document.body.appendChild(overlay);
            } else {
                sidebar.classList.add('-translate-x-full');
                const overlay = document.getElementById('sidebar-overlay');
                if(overlay) overlay.remove();
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
      

<header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80 md:hidden">
<div className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white">
<span className="iconify text-indigo-500" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="20"></span>
<span>PDFGEN</span>
</div>
<button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</header>
<div className="flex min-h-screen flex-col md:flex-row">

<aside className="fixed inset-y-0 left-0 z-40 w-64 -translate-x-full transform border-r border-slate-200 bg-slate-50/50 pb-10 pt-8 transition-transform duration-200 dark:border-slate-800 dark:bg-slate-950 md:translate-x-0 md:bg-transparent" id="sidebar">
<div className="flex h-full flex-col justify-between px-6">
<div>
<div className="mb-8 flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white md:px-2">
<span className="iconify text-indigo-500" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="20"></span>
<span>PDFGEN</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200/50 dark:text-white dark:hover:bg-slate-800/50" href="#introduction">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="16"></span>
                            Pengantar
                        </a>
<div className="pt-4 text-xs font-semibold text-slate-400 dark:text-slate-500 px-2 uppercase tracking-wider">Panduan</div>
<a className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white" href="#spreadsheet">
                            Setup Spreadsheet
                        </a>
<a className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white" href="#storage">
                            Penyimpanan
                        </a>
<a className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white" href="#template">
                            Buat Template
                        </a>
<a className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white" href="#data">
                            Persiapan Data
                        </a>
<a className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white" href="#auth">
                            Otorisasi
                        </a>
</nav>
</div>
<div className="mt-auto border-t border-slate-200 pt-6 dark:border-slate-800">
<button className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/50" id="theme-toggle">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="16"></span>
                            Tema
                        </span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition-colors dark:bg-slate-700">
<span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white transition-transform dark:translate-x-5"></span>
</div>
</button>
</div>
</div>
</aside>

<main className="w-full flex-1 md:pl-64">
<div className="mx-auto max-w-3xl px-6 py-12 lg:px-12">

<section className="mb-16" id="introduction">
<div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-900/20 dark:text-indigo-300">
                        Versi 2.0 Dokumentasi
                    </div>
<h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Cara Pakai PDF Generator</h1>
<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                        Dokumentasi lengkap untuk mengotomatisasi pembuatan dokumen PDF massal menggunakan Google Spreadsheet dan Docs.
                    </p>
<div className="mt-10 rounded-xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
<h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-900 dark:text-white">Persiapan Awal</h3>
<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
<li className="flex items-center gap-3 text-sm">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="12"></span>
</span>
                                Google Spreadsheet
                            </li>
<li className="flex items-center gap-3 text-sm">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="12"></span>
</span>
                                Template Docs
                            </li>
<li className="flex items-center gap-3 text-sm">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="12"></span>
</span>
                                Penyimpanan Google Drive
                            </li>
<li className="flex items-center gap-3 text-sm">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="12"></span>
</span>
                                Data Master
                            </li>
</ul>
</div>
</section>
<hr className="my-12 border-slate-200 dark:border-slate-800"/>

<section className="mb-16" id="spreadsheet">
<div className="mb-4 flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">1</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Konfigurasi Spreadsheet</h2>
</div>
<div className="ml-11 space-y-8">

<div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100">Duplikasi Template Master</h3>
<p className="mt-2 text-sm leading-6">
                                Buka Spreadsheet <strong>"✅ Template - PDF Generator"</strong> melalui tautan di bawah ini, lalu buat salinan (Make a Copy) ke drive Anda.
                            </p>
<div className="mt-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-indigo-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-400 dark:hover:bg-slate-700" href="https://docs.google.com/spreadsheets/d/12Mxj_YXSW2cyG2s2mUQWserw13Df-hRBymUYelxn7RA/edit?usp=sharing" target="_blank">
<span className="iconify" data-icon="lucide:external-link" data-strokeWidth="1.5" data-width="14"></span>
                                    Buka Template Master
                                </a>
</div>
<div className="mt-4 rounded bg-slate-100 p-3 text-xs font-mono text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                                File &gt; Buat Salinan &gt; Ubah nama file &gt; Klik 'Buat Salinan'
                            </div>
</div>

<div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100">Setup Sheet &amp; Data</h3>
<p className="mt-2 text-sm leading-6">
                                Duplicate sheet yang ada, rename sesuai kebutuhan. Buat header data dimulai dari <strong>Kolom D Baris ke-2</strong>. Isi data lengkap di bawah header tersebut.
                            </p>
</div>

<div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100">Input Link Template</h3>
<p className="mt-2 text-sm leading-6">
                                Masukkan link Google Docs (template) yang sudah Anda siapkan ke dalam kolom "TEMPALTE DOCS" di Spreadsheet. Pastikan akses link template adalah <strong>Editor</strong>.
                            </p>
<div className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-500">
<span className="font-bold">Penting:</span> Set permission ke "Anyone with the link" sebagai "Editor".
                            </div>
</div>

<div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100">Registrasi Index</h3>
<p className="mt-2 text-sm leading-6">
                                Tambahkan link spreadsheet Anda ke file Index Pusat agar tercatat sistem.
                            </p>
<div className="mt-3 space-y-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400" href="https://docs.google.com/spreadsheets/d/1RJMMZTZUYzdq4IUDlEk0v5wuLRmWo6cpcTgV333lLLg/edit?usp=sharing" target="_blank">
                                    Buka File Index
                                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
<p className="text-xs text-slate-500">
                                    Buka sheet INDEX &gt; pilih kolom "edit rapor" &gt; Cari list atau buat baru lalu paste link spreadsheet tersebut &gt; Centang jika selesai generate.
                                </p>
</div>
</div>

<div className="relative border-l-0 pl-6">
<h3 className="text-base font-medium text-slate-900 dark:text-slate-100">Eksekusi</h3>
<p className="mt-2 text-sm leading-6">
                                Kembali ke spreadsheet Anda. Klik menu custom <strong>Action &gt; START</strong>.
                            </p>
<div className="mt-3 flex gap-2">
<span className="inline-flex items-center gap-1 rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">START</span>
<span className="inline-flex items-center gap-1 rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">STOP</span>
<span className="inline-flex items-center gap-1 rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">REMOVE ERROR</span>
</div>
</div>
</div>
</section>

<section className="mb-16" id="storage">
<div className="mb-4 flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">2</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Penyimpanan Data</h2>
</div>
<div className="ml-11 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/30">
<div className="flex flex-col md: flex-row items-start gap-4">
<div className="mt-1 rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
<span className="iconify" data-icon="lucide:hard-drive" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white">Folder Otomatis</h4>
<p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                    Semua data hasil generate akan disimpan otomatis di Google Drive Anda dalam folder bernama <strong>"DATA PDF GENERATOR"</strong>.
                                </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:globe" data-width="14"></span>
                                        File bersifat Public (dapat diakses via link).
                                    </li>
<li className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:trash-2" data-width="14"></span>
                                        Hati-hati saat menghapus file jika masih diperlukan.
                                    </li>
</ul>
</div>
</div>
</div>
</section>

<section className="mb-16" id="template">
<div className="mb-4 flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">3</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Membuat Template</h2>
</div>
<div className="ml-11 space-y-6">
<p className="text-sm leading-relaxed">
                            Gunakan variabel dinamis untuk menghubungkan data spreadsheet ke dokumen.
                        </p>
<div className="grid gap-6 md:grid-cols-2">

<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
<h4 className="mb-2 text-sm font-medium text-slate-900 dark:text-white">1. Salin Master Template</h4>
<p className="mb-3 text-xs text-slate-500">Pilih sheet "TEMPLATE 1", copy link kolom B baris 3.</p>
<div className="rounded bg-slate-100 p-2 text-xs font-mono dark:bg-slate-900">
                                    File &gt; Buat Salinan &gt; Rename
                                </div>
</div>

<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
<h4 className="mb-2 text-sm font-medium text-slate-900 dark:text-white">2. Format Variabel</h4>
<p className="mb-3 text-xs text-slate-500">Gunakan kurung kurawal ganda untuk data dinamis.</p>
<div className="rounded bg-slate-100 p-2 text-xs font-mono dark:bg-slate-900">
                                    {{kolom1}}<br/>
                                    {{kolom2}}
                                </div>
</div>
</div>
<div className="rounded-lg bg-slate-50 p-4 text-sm dark:bg-slate-900/50">
<span className="font-semibold text-slate-900 dark:text-white">Penting:</span> ubah data dinamis dengan {{kolom + nomor kolom}} sesuai data.
                        </div>
</div>
</section>

<section className="mb-16" id="data">
<div className="mb-4 flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">4</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Persiapan Data</h2>
</div>
<div className="ml-11">
<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Olah terlebih dahulu data yang ingin digenerate. Pastikan data bersih dan terformat dengan benar sebelum dipaste ke sheet input.
                        </p>
</div>
</section>

<section className="mb-16" id="auth">
<div className="mb-4 flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">5</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Otorisasi (Authorization)</h2>
</div>
<div className="ml-11">
<p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                            Diperlukan hanya saat pertama kali menjalankan <strong>Action &gt; Start</strong> pada spreadsheet baru.
                        </p>
<div className="space-y-2 rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-950">
<div className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-900">
<span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500 dark:border-slate-700">1</span>
<span className="text-sm">Klik <strong>OK</strong> pada popup authorization required.</span>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 p-3 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">
<span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500 dark:border-slate-700">2</span>
<span className="text-sm">Pilih <strong>Akun Email</strong> Google Anda.</span>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 p-3 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">
<span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500 dark:border-slate-700">3</span>
<span className="text-sm">Klik <strong>Advanced</strong> (Lanjutan) di pojok kiri bawah.</span>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 p-3 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">
<span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500 dark:border-slate-700">4</span>
<span className="text-sm">Klik <strong>Go to Project (Unsafe)</strong>.</span>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 p-3 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">
<span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500 dark:border-slate-700">5</span>
<span className="text-sm">Centang "Select All" lalu klik <strong>Continue</strong>.</span>
</div>
</div>
</div>
</section>

<section className="mb-20 rounded-xl border border-red-100 bg-red-50 p-6 dark:border-red-900/30 dark:bg-red-900/10">
<div className="flex items-start gap-3">
<span className="iconify mt-0.5 flex-none text-red-600 dark:text-red-400" data-icon="lucide:alert-circle" data-width="20"></span>
<div>
<h3 className="font-medium text-red-900 dark:text-red-400">Catatan Penting (Troubleshooting)</h3>
<ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-red-800 dark:text-red-300">
<li>
<strong>Limit Harian:</strong> Jika terjadi error, biasanya karena mencapai batas limit harian Google (sekitar 1000 generate/hari untuk akun Gmail biasa).
                                </li>
<li>
<strong>Revisi Data:</strong> Jika ada kesalahan data setelah generate, update data di spreadsheet terlebih dahulu, hapus link PDF di kolom hasil, lalu klik <strong>Action &gt; START</strong> kembali.
                                </li>
</ul>
</div>
</div>
</section>

<footer className="mt-auto border-t border-slate-200 pt-8 text-center dark:border-slate-800">
<p className="text-xs text-slate-500">© 2026 PDF Generator Tool. All rights reserved.</p>
</footer>
</div>
</main>

<aside className="hidden w-64 flex-none px-6 py-12 xl:block">
<div className="sticky top-12">
<h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Daftar Isi</h5>
<nav className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
<a className="block py-1 hover:text-indigo-600 dark:hover:text-indigo-400" href="#introduction">Pengantar</a>
<a className="block py-1 hover:text-indigo-600 dark:hover:text-indigo-400" href="#spreadsheet">1. Spreadsheet</a>
<a className="block py-1 hover:text-indigo-600 dark:hover:text-indigo-400" href="#storage">2. Penyimpanan</a>
<a className="block py-1 hover:text-indigo-600 dark:hover:text-indigo-400" href="#template">3. Template</a>
<a className="block py-1 hover:text-indigo-600 dark:hover:text-indigo-400" href="#data">4. Data</a>
<a className="block py-1 hover:text-indigo-600 dark:hover:text-indigo-400" href="#auth">5. Authorization</a>
</nav>
</div>
</aside>
</div>


    </>
  );
}
