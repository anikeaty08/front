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



        lucide.createIcons();
    
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
      

<aside className="w-72 bg-white border-r border-slate-100 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div className="p-6">

<div className="mb-10">
<div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 font-semibold text-xl">
                    W
                </div>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 text-emerald-600" data-lucide="layout-dashboard"></i>
<span className="font-medium text-base">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="file-text"></i>
<span className="font-medium text-base">Laporan</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="settings"></i>
<span className="font-medium text-base">Pengaturan</span>
</a>
</nav>
</div>

<div className="p-6 border-t border-slate-50">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 leading-none">Admin User</span>
<span className="text-xs text-slate-500 mt-1">admin@example.com</span>
</div>
</div>
<button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors w-full text-left">
<i className="w-4 h-4" data-lucide="log-out"></i>
<span className="font-medium text-sm">Logout</span>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="max-w-7xl mx-auto px-6 py-8 md:px-10 md:py-10">

<div className="mb-8">
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight">Dashboard Utama</h1>
<p className="text-slate-500 text-lg mt-2">Ringkasan utama terkait laporan pengguna.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-500 font-medium text-sm">Total Laporan</span>
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">42</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-500 font-medium text-sm">Laporan Masuk</span>
<div className="p-2 bg-rose-50 rounded-lg text-rose-500">
<i className="w-5 h-5" data-lucide="inbox"></i>
</div>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">1</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-500 font-medium text-sm">Dalam Proses</span>
<div className="p-2 bg-amber-50 rounded-lg text-amber-500">
<i className="w-5 h-5" data-lucide="hourglass"></i>
</div>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">1</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-500 font-medium text-sm">Selesai Ditangani</span>
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">40</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] lg:col-span-2">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Grafik Laporan Bulanan</h2>
<div className="w-full bg-slate-50/80 rounded-lg h-80 border border-dashed border-slate-200 flex items-center justify-center">
<p className="text-slate-400 font-medium text-sm">Placeholder untuk grafik</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Laporan Terbaru</h2>
<div className="space-y-6">

<div className="flex items-start justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0">
<div>
<h3 className="font-medium text-slate-900 text-sm mb-1">Kerusakan Fasilitas</h3>
<p className="text-sm text-slate-500">Umum</p>
<p className="text-xs text-slate-400 mt-1">Budi Santoso - 12 Agu 2024</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
                                Selesai
                            </span>
</div>

<div className="flex items-start justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0">
<div>
<h3 className="font-medium text-slate-900 text-sm mb-1">Lampu Jalan Mati</h3>
<p className="text-sm text-slate-500">Citra Lestari - 11 Agu 2024</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
                                Proses
                            </span>
</div>

<div className="flex items-start justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0">
<div>
<h3 className="font-medium text-slate-900 text-sm mb-1">Jalan Berlubang</h3>
<p className="text-sm text-slate-500">Ahmad Zulkarnain - 11 Agu 2024</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-600">
                                Masuk
                            </span>
</div>

<div className="flex items-start justify-between pb-0 border-b border-slate-50 last:border-0 last:pb-0">
<div>
<h3 className="font-medium text-slate-900 text-sm mb-1">Kebocoran Pipa Air</h3>
<p className="text-sm text-slate-500">Siti Aminah - 10 Agu 2024</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
                                Selesai
                            </span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
