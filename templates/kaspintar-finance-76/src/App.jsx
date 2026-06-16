import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200">
<div className="text-xl font-semibold tracking-tighter text-slate-900">KAS</div>
<button className="p-2 text-slate-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>
<div className="flex h-full max-w-[1600px] mx-auto">

<aside className="hidden lg:flex flex-col w-1/4 border-r border-slate-200 bg-white p-6 gap-8 overflow-y-auto custom-scrollbar">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<h1 className="text-xl font-semibold tracking-tighter text-slate-900 uppercase">Kaspintar</h1>
</div>

<div className="p-1 bg-slate-100 rounded-xl flex">
<button className="flex-1 py-2 text-sm font-medium bg-white shadow-sm rounded-lg text-slate-900">Semua</button>
<button className="flex-1 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">Keluar</button>
<button className="flex-1 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">Masuk</button>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Rentang Waktu</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
<option>Januari 2025</option>
<option>Desember 2024</option>
<option>November 2024</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-6">
<div>
<div className="flex items-center justify-between mb-3">
<label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Kategori Primer</label>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-up-linear" width="14"></iconify-icon>
</div>
<div className="space-y-1">
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group">
<input checked="" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/>
<span className="text-sm group-hover:text-slate-900">Makan &amp; Minum</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group">
<input checked="" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/>
<span className="text-sm group-hover:text-slate-900">Listrik &amp; Air</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group">
<input checked="" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/>
<span className="text-sm group-hover:text-slate-900">Transportasi</span>
</label>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Kategori Sekunder</label>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
<div className="space-y-1">
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox"/>
<span className="text-sm group-hover:text-slate-900">Hobi &amp; Hiburan</span>
</label>
</div>
</div>
</div>
<div className="mt-auto p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
<p className="text-xs font-medium text-emerald-800 mb-1">Tips Keuangan</p>
<p className="text-xs text-emerald-700 leading-relaxed">Pengeluaran makan kamu naik 12% minggu ini. Coba kurangi jajan kopi!</p>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">
<div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Aktivitas Transaksi</h2>
<p className="text-sm text-slate-500">Januari 2025 • 24 Transaksi</p>
</div>
<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
                    Tambah Baru
                </button>
</div>
<div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 custom-scrollbar">

<div className="flex items-center gap-4 py-2">
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Hari Ini — 15 Jan 2025</span>
<div className="flex-1 h-[1px] bg-slate-200"></div>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:chef-hat-heart-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-slate-900 truncate">Makan Siang Bakso</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-500 font-medium">Primer</span>
<span className="text-[10px] text-slate-400">• Makan</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-rose-500">- Rp 45.000</div>
<div className="text-[10px] text-slate-400 mt-1">12:30 WIB</div>
</div>
</div>
<div className="group bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:card-receive-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-slate-900 truncate">Gaji Bulanan</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-2 py-0.5 bg-emerald-50 rounded-full text-emerald-600 font-medium">Utama</span>
<span className="text-[10px] text-slate-400">• Gaji</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-600">+ Rp 8.500.000</div>
<div className="text-[10px] text-slate-400 mt-1">08:00 WIB</div>
</div>
</div>
<div className="group bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer">
<div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-slate-900 truncate">Kopi Pagi &amp; Snack</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-500 font-medium">Tersier</span>
<span className="text-[10px] text-slate-400">• Kafe</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-rose-500">- Rp 28.500</div>
<div className="text-[10px] text-slate-400 mt-1">09:15 WIB</div>
</div>
</div>

<div className="flex items-center gap-4 py-2 mt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Kemarin — 14 Jan 2025</span>
<div className="flex-1 h-[1px] bg-slate-200"></div>
</div>
<div className="group bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer opacity-80">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:gas-station-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-slate-900 truncate">Isi Bensin Motor</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full text-slate-500 font-medium">Primer</span>
<span className="text-[10px] text-slate-400">• Bensin</span>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-rose-500">- Rp 50.000</div>
<div className="text-[10px] text-slate-400 mt-1">17:45 WIB</div>
</div>
</div>

<div className="hidden flex flex-col items-center justify-center py-20 text-center">
<div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-slate-300" icon="solar:box-minimalistic-linear" width="48"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Belum ada transaksi nih!</h3>
<p className="text-sm text-slate-500 mt-1">Mulai catat pengeluaran harianmu untuk pantau kesehatan keuangan.</p>
<button className="mt-6 text-emerald-600 font-medium text-sm flex items-center gap-2">
                        Mulai Catat Transaksi <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>

<aside className="hidden xl:flex flex-col w-1/3 bg-white border-l border-slate-200 p-8 gap-8 overflow-y-auto custom-scrollbar">
<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Ringkasan Bulan Ini</h3>
<div className="grid grid-cols-1 gap-4">

<div className="p-5 bg-emerald-600 rounded-2xl text-white shadow-xl shadow-emerald-600/10">
<p className="text-xs text-emerald-100 mb-1">Total Saldo</p>
<h2 className="text-2xl font-semibold tracking-tight">Rp 12.450.000</h2>
<div className="mt-4 flex items-center gap-2 text-xs text-emerald-200">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
<span>+4.2% dari bulan lalu</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">Pemasukan</p>
<h3 className="text-base font-semibold text-emerald-600 mt-1">Rp 8.5M</h3>
</div>
<div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">Pengeluaran</p>
<h3 className="text-base font-semibold text-rose-500 mt-1">Rp 3.2M</h3>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Alokasi Pengeluaran</h3>
<div className="flex items-center justify-center py-4">
<div className="relative w-40 h-40">
<div className="pie-chart w-full h-full"></div>
<div className="absolute inset-4 bg-white rounded-full flex items-center justify-center flex-col shadow-inner">
<span className="text-[10px] text-slate-400 uppercase font-semibold">Total</span>
<span className="text-sm font-semibold text-slate-900">100%</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-3 gap-x-6">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-600">Makan (45%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
<span className="text-xs text-slate-600">Rumah (25%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<span className="text-xs text-slate-600">Tagihan (15%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
<span className="text-xs text-slate-600">Lainnya (15%)</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Tren 7 Hari Terakhir</h3>
<div className="h-32 flex items-end justify-between gap-1 px-2">
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-100 rounded-t-sm h-[40%]"></div>
<span className="text-[8px] text-slate-400">09 Jan</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-200 rounded-t-sm h-[60%]"></div>
<span className="text-[8px] text-slate-400">10 Jan</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-400 rounded-t-sm h-[30%]"></div>
<span className="text-[8px] text-slate-400">11 Jan</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-600 rounded-t-sm h-[85%]"></div>
<span className="text-[8px] text-slate-400">12 Jan</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-300 rounded-t-sm h-[50%]"></div>
<span className="text-[8px] text-slate-400">13 Jan</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-500 rounded-t-sm h-[70%]"></div>
<span className="text-[8px] text-slate-400">14 Jan</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full bg-emerald-600 rounded-t-sm h-[95%]"></div>
<span className="text-[8px] text-slate-900 font-semibold">Hari Ini</span>
</div>
</div>
</div>
<div className="mt-auto flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-sm">
                    JD
                </div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-900 leading-none">Jane Doe</p>
<p className="text-[10px] text-slate-400 mt-1 uppercase font-medium">Premium Member</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</aside>
</div>

<button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
<iconify-icon icon="solar:add-circle-linear" width="28"></iconify-icon>
</button>

    </>
  );
}
