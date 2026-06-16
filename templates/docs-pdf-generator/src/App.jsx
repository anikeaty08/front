import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] }
}
}
}



        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/5 glass-nav transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg flex items-center justify-center text-slate-700 dark:text-white group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">PDF GENERATOR</span>
<span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide group-hover:border-indigo-500/30 transition-colors">Docs v1.0</span>
</div>

<button aria-label="Toggle Dark Mode" className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-all focus:outline-none" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="lucide:sun" id="theme-icon-sun" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" id="theme-icon-moon" width="18"></iconify-icon>
</button>
</div>
</nav>
<div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20">
<div className="flex flex-col lg:flex-row gap-12">

<aside className="hidden lg:block w-64 shrink-0 fixed h-[calc(100vh-6rem)] overflow-y-auto pr-4 animate-entry">
<div className="space-y-8">
<div>
<h5 className="mb-3 text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider pl-3 border-l border-indigo-500">Pendahuluan</h5>
<ul className="space-y-1">
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:border-indigo-500/50 transition-all" href="#overview">Ikhtisar</a></li>
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all" href="#prerequisites">Prasyarat Sistem</a></li>
</ul>
</div>
<div>
<h5 className="mb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider pl-3">Langkah Penggunaan</h5>
<ul className="space-y-1">
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all" href="#step-1">1. Konfigurasi Spreadsheet</a></li>
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all" href="#step-2">2. Manajemen Penyimpanan</a></li>
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all" href="#step-3">3. Pembuatan Template</a></li>
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all" href="#step-4">4. Eksekusi Data</a></li>
</ul>
</div>
<div>
<h5 className="mb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider pl-3">Lainnya</h5>
<ul className="space-y-1">
<li><a className="block py-1.5 pl-3 border-l border-transparent text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all" href="#troubleshooting">Pemecahan Masalah</a></li>
</ul>
</div>
</div>
</aside>

<main className="lg:pl-72 w-full max-w-4xl">

<div className="mb-16 border-b border-slate-200 dark:border-white/5 pb-10 animate-entry delay-100" id="overview">
<h1 className="text-4xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4 text-gradient">Panduan Penggunaan PDF Generator</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        Otomatisasi pembuatan dokumen PDF masal menggunakan Google Spreadsheet dan Google Docs. Panduan ini mencakup persiapan data, templating, hingga proses generate.
                    </p>
</div>

<section className="mb-16 animate-entry delay-200" id="prerequisites">
<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-indigo-500 dark:text-indigo-400" icon="lucide:layers"></iconify-icon>
                        Prasyarat Sistem
                    </h2>
<div className="grid sm:grid-cols-2 gap-4">

<div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 group shadow-sm dark:shadow-none">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="lucide:sheet" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 dark:text-slate-200 mb-1">Google Spreadsheet</h3>
<p className="text-sm text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">Akses untuk mengolah basis data.</p>
</div>

<div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 group shadow-sm dark:shadow-none">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-blue-600 dark:text-blue-400">
<iconify-icon icon="lucide:hard-drive" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 dark:text-slate-200 mb-1">Google Drive</h3>
<p className="text-sm text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">Penyimpanan yang memadai.</p>
</div>

<div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 group shadow-sm dark:shadow-none">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400">
<iconify-icon icon="lucide:file-edit" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 dark:text-slate-200 mb-1">Template Docs</h3>
<p className="text-sm text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">Desain dokumen master.</p>
</div>

<div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 group shadow-sm dark:shadow-none">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-orange-600 dark:text-orange-400">
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 dark:text-slate-200 mb-1">Data Valid</h3>
<p className="text-sm text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">Data matang siap generate.</p>
</div>
</div>
</section>
<hr className="border-slate-200 dark:border-white/5 mb-16 transition-colors"/>

<section className="mb-20 animate-entry delay-300" id="step-1">
<div className="flex items-start gap-4 mb-6">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center text-sm font-medium shadow-sm dark:shadow-black/50 transition-colors">1</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 tracking-tight">Konfigurasi Spreadsheet</h2>
<p className="text-slate-500 mt-1">Menyiapkan lingkungan kerja utama.</p>
</div>
</div>
<div className="pl-12 space-y-8">
<div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden transition-colors">
<div className="p-6">
<h3 className="font-medium text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="lucide:copy"></iconify-icon>
                                    Salin Master Spreadsheet
                                </h3>
<ol className="list-decimal list-inside space-y-3 text-sm text-slate-600 dark:text-slate-400 marker:text-slate-400 dark:marker:text-slate-600">
<li>Buka <a className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium underline underline-offset-4 decoration-indigo-500/30" href="#">✅ Template - PDF Generator</a>.</li>
<li>Klik menu <span className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/5 rounded text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 text-xs transition-colors">File</span> &gt; <span className="font-medium text-slate-700 dark:text-slate-300">Buat Salinan (Make a Copy)</span>.</li>
<li>Ubah nama file sesuai proyek Anda, lalu simpan.</li>
<li>Lakukan <strong>Duplicate Sheet</strong> dan rename sesuai kebutuhan data.</li>
</ol>
</div>

<div className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 p-8 flex items-center justify-center relative overflow-hidden transition-colors">
<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] bg-slate-900 dark:bg-white" style={{maskImage: 'radial-gradient(#000 1px, transparent 1px)', WebkitMaskImage: 'radial-gradient(#000 1px, transparent 1px)', maskSize: '20px 20px', WebkitMaskSize: '20px 20px'}}></div>
<div className="text-center relative z-10">
<iconify-icon className="text-slate-300 dark:text-slate-700 mb-3 mx-auto transition-colors" icon="lucide:table" width="48"></iconify-icon>
<span className="text-xs text-slate-500 dark:text-slate-600 font-medium uppercase tracking-wide">Ilustrasi Spreadsheet Header</span>
<div className="mt-4 flex gap-1 justify-center opacity-80">
<div className="w-16 h-4 bg-slate-200 dark:bg-slate-800 rounded-sm"></div>
<div className="w-16 h-4 bg-slate-200 dark:bg-slate-800 rounded-sm"></div>
<div className="w-16 h-4 bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 rounded-sm"></div>
<div className="w-16 h-4 bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 rounded-sm"></div>
</div>
<p className="mt-2 text-[10px] text-slate-500 dark:text-slate-600">Pastikan Header dimulai dari Kolom D, Baris 2</p>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="font-medium text-slate-900 dark:text-slate-200 text-sm">Pengaturan Izin &amp; Indexing</h3>
<ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
<li className="flex gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 flex-shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>
<strong className="text-slate-800 dark:text-slate-300">Bagikan Akses:</strong> Klik Share &gt; Ubah ke "Anyone with the link" &gt; Set sebagai <strong className="text-slate-800 dark:text-slate-300">Editor</strong>. Salin Link.
                                    </span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-emerald-500 mt-0.5 flex-shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>
<strong className="text-slate-800 dark:text-slate-300">Registrasi Link:</strong> Buka <a className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium" href="#">Index Spreadsheet</a>, masuk ke sheet "Index" kolom "Edit Rapor". Tempel link spreadsheet Anda di sana.
                                    </span>
</li>
</ul>
</div>
</div>
</section>

<section className="mb-20 animate-entry delay-300" id="step-2">
<div className="flex items-start gap-4 mb-6">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center text-sm font-medium shadow-sm dark:shadow-black/50 transition-colors">2</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 tracking-tight">Manajemen Penyimpanan</h2>
<p className="text-slate-500 mt-1">Lokasi output file PDF.</p>
</div>
</div>
<div className="pl-12 grid sm:grid-cols-2 gap-6">
<div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/30 hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-amber-500" icon="lucide:folder-open" width="20"></iconify-icon>
<span className="font-medium text-slate-900 dark:text-slate-200 text-sm">Folder Output</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Semua hasil generate otomatis tersimpan di Google Drive Anda dalam folder bernama <code className="text-xs bg-slate-200 dark:bg-white/5 px-1 py-0.5 rounded text-amber-700 dark:text-amber-200/70 border border-slate-300 dark:border-amber-500/10 transition-colors">DATA PDF GENERATOR</code>.
                            </p>
</div>
<div className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/30 hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-rose-500 dark:text-rose-400" icon="lucide:shield-alert" width="20"></iconify-icon>
<span className="font-medium text-slate-900 dark:text-slate-200 text-sm">Keamanan Data</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                File bersifat <strong className="text-slate-800 dark:text-slate-300">Public</strong>. Hapus file jika sudah tidak diperlukan, namun berhati-hatilah agar tidak menghapus data master.
                            </p>
</div>
</div>
</section>

<section className="mb-20 animate-entry delay-400" id="step-3">
<div className="flex items-start gap-4 mb-6">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center text-sm font-medium shadow-sm dark:shadow-black/50 transition-colors">3</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 tracking-tight">Pembuatan Template</h2>
<p className="text-slate-500 mt-1">Desain dokumen dan variabel dinamis.</p>
</div>
</div>
<div className="pl-12 space-y-6">

<div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden relative group transition-colors">
<div className="absolute top-4 right-4 z-10">
<span className="bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-[10px] font-semibold px-2 py-1 rounded backdrop-blur-md">DOCS EDITOR</span>
</div>
<div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 p-3 flex gap-2 transition-colors">
<div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
</div>
<div className="p-8 flex justify-center bg-slate-100 dark:bg-slate-950 relative transition-colors">
<div className="w-full max-w-[400px] bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-black border border-slate-200 dark:border-white/5 aspect-[1/1.4] p-8 text-[10px] text-slate-400 dark:text-slate-600 transition-all duration-500 group-hover:scale-[1.02]">
<div className="w-1/3 h-2 bg-slate-200 dark:bg-slate-700 mb-6"></div>
<div className="space-y-2">
<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800/50"></div>
<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800/50"></div>
<div className="w-2/3 h-1.5 bg-slate-100 dark:bg-slate-800/50"></div>
</div>
<div className="mt-8 p-3 border border-dashed border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/5 rounded text-indigo-600 dark:text-indigo-400 font-mono text-center">
                                        Nama: {{kolom3}}
                                    </div>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="font-medium text-slate-900 dark:text-slate-200 text-sm">Cara Membuat Template</h3>
<ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
<li className="flex gap-3">
<span className="text-slate-400 dark:text-slate-600">•</span>
<span>Buka sheet "TEMPLATE 1", salin link di Kolom B Baris 3.</span>
</li>
<li className="flex gap-3">
<span className="text-slate-400 dark:text-slate-600">•</span>
<span>Buat Salinan template tersebut.</span>
</li>
<li className="flex gap-3">
<span className="text-slate-400 dark:text-slate-600">•</span>
<span>
                                        Gunakan format variabel: <code className="text-xs text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-500/20 font-mono">{{kolom + nomor}}</code>. Contoh: Jika nama ada di kolom 3, tulis <code className="font-mono text-slate-700 dark:text-slate-300">{{kolom3}}</code>.
                                    </span>
</li>
<li className="flex gap-3">
<span className="text-slate-400 dark:text-slate-600">•</span>
<span>Ubah akses ke "Anyone with the link" sebagai Editor, lalu salin link template ke Spreadsheet Data Anda.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="mb-20 animate-entry delay-400" id="step-4">
<div className="flex items-start gap-4 mb-6">
<div className="flex-none w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center text-sm font-medium shadow-sm dark:shadow-black/50 transition-colors">4</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 tracking-tight">Eksekusi Data</h2>
<p className="text-slate-500 mt-1">Generate PDF secara otomatis.</p>
</div>
</div>
<div className="pl-12">
<div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-slate-900 dark:from-indigo-900/80 dark:to-slate-900 border border-indigo-500/20 p-6 text-white shadow-xl dark:shadow-2xl transition-all hover:border-indigo-500/40">

<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 dark:bg-indigo-500/20 blur-3xl transition-opacity group-hover:opacity-70"></div>
<div className="relative flex items-start gap-4 z-10">
<iconify-icon className="mt-1 text-indigo-200 dark:text-indigo-400 group-hover:text-white dark:group-hover:text-indigo-300 transition-colors" icon="lucide:play-circle" width="32"></iconify-icon>
<div>
<h3 className="font-medium text-white text-lg mb-2">Mulai Generate</h3>
<p className="text-indigo-100 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                                        Pastikan data sudah diolah dan ditempel di sheet. Kembali ke menu Spreadsheet Anda.
                                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white/10 backdrop-blur rounded text-xs border border-white/10 font-mono text-white dark:text-indigo-200 hover:bg-white/20 transition-colors">Menu: Action &gt; START</span>
<span className="px-3 py-1.5 bg-white/10 backdrop-blur rounded text-xs border border-white/10 font-mono text-white dark:text-indigo-200 hover:bg-white/20 transition-colors">Stop: Action &gt; STOP</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20 animate-entry delay-400" id="troubleshooting">
<div className="bg-orange-50 dark:bg-orange-500/[0.03] rounded-xl border border-orange-200 dark:border-orange-500/10 p-6 hover:bg-orange-100 dark:hover:bg-orange-500/[0.06] transition-colors duration-300">
<h3 className="text-orange-600 dark:text-orange-400 font-semibold mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:alert-triangle" width="18"></iconify-icon>
                            Catatan Teknis &amp; Pemecahan Masalah
                        </h3>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<h4 className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">Batas Harian (Limit)</h4>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Google membatasi eksekusi skrip. Jika terjadi error, kemungkinan Anda telah mencapai batas <strong className="text-slate-800 dark:text-slate-300">1000 generate/hari</strong>. Tunggu 24 jam untuk reset.
                                </p>
</div>
<div>
<h4 className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">Koreksi Data</h4>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Jika ada kesalahan data setelah generate: Update data di spreadsheet, hapus link PDF yang sudah terbuat di kolom hasil, lalu jalankan Action &gt; START lagi.
                                </p>
</div>
<div className="sm:col-span-2 pt-4 border-t border-orange-200 dark:border-orange-500/10">
<h4 className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">Tombol Remove Error</h4>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Jika script berhenti mendadak atau macet, gunakan menu <strong className="text-slate-800 dark:text-slate-300">Action &gt; REMOVE ERROR</strong> untuk membersihkan status sistem sebelum memulai ulang.
                                </p>
</div>
</div>
</div>
</section>
</main>
</div>
</div>

<footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500 dark:text-slate-600">© 2025 PDF Generator Tool. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
