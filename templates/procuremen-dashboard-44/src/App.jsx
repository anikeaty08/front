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
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex shrink-0 z-10">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="text-xl font-semibold tracking-tighter text-slate-900">SOURCE.</span>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<div className="space-y-1">
<p className="px-3 text-xs font-medium text-slate-400 mb-2 mt-4 uppercase tracking-wider">Menu Utama</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-md transition-colors relative" href="#">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                    Projects
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-600 rounded-r-full"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Vendor Directory
                </a>
</div>
<div className="space-y-1 mt-8">
<p className="px-3 text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Sourcing Tools</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
                    Create New Project
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                    Savings Tracker
                </a>
</div>
</div>
<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full px-2 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">
                    AD
                </div>
<div className="flex-1 overflow-hidden">
<p className="font-medium truncate">Admin Procurement</p>
<p className="text-xs text-slate-400 truncate">Sourcing Dept.</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<nav className="hidden sm:flex text-sm text-slate-500">
<ol className="flex items-center gap-2">
<li><a className="hover:text-slate-900 transition-colors" href="#">Projects</a></li>
<li><span className="text-slate-300">/</span></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Raw Material</a></li>
<li><span className="text-slate-300">/</span></li>
<li className="font-medium text-slate-900 truncate max-w-xs">PRJ-2026-0042</li>
</ol>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-slate-900 transition-colors p-2">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="h-5 w-px bg-slate-200"></div>
<button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200">
                    Cancel
                </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow-sm hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center gap-2">
<iconify-icon icon="solar:diskette-linear" strokeWidth="1.5"></iconify-icon>
                    Save Changes
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div>
<div className="flex items-start justify-between gap-4 flex-wrap">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2.5 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md">PRJ-2026-0042</span>
<span className="px-2.5 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    On Progress
                                </span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Strategic Sourcing Security Paper Rupiah 2027</h1>
<p className="text-sm text-slate-500 mt-1">Dibuat pada 10 Feb 2026 • Terakhir diubah 2 jam yang lalu</p>
</div>

<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-all tooltip" title="Print Report">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-red-600 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-red-50 hover:border-red-200 transition-all">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:routing-2-linear"></iconify-icon>
                            Sourcing Pipeline
                        </h2>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                            Update Progress <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="p-6">

<div className="relative flex items-center justify-between w-full max-w-4xl mx-auto">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full z-0"></div>

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[42%] h-1 bg-indigo-500 rounded-full z-0 transition-all duration-500"></div>


<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold shadow-sm ring-4 ring-white">
<iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-500 whitespace-nowrap">P1</span>
</div>

<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold shadow-sm ring-4 ring-white">
<iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-500 whitespace-nowrap">P2</span>
</div>

<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold shadow-sm ring-4 ring-white">
<iconify-icon className="text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-500 whitespace-nowrap">P3</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center text-xs font-semibold ring-4 ring-indigo-50 shadow-sm">
                                    P4
                                </div>
<span className="absolute -bottom-6 text-[10px] font-semibold text-indigo-600 whitespace-nowrap">P4</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-medium ring-4 ring-white shadow-sm">
                                    P5
                                </div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-400 whitespace-nowrap">P5</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-medium ring-4 ring-white shadow-sm">
                                    P6
                                </div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-400 whitespace-nowrap">P6</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-medium ring-4 ring-white shadow-sm">
                                    SC
                                </div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-400 whitespace-nowrap">SC</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-xs font-medium ring-4 ring-white shadow-sm">
                                    SS
                                </div>
<span className="absolute -bottom-6 text-[10px] font-medium text-slate-400 whitespace-nowrap">SS</span>
</div>
</div>

<div className="mt-12 bg-indigo-50/50 border border-indigo-100 rounded-lg p-4 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-indigo-900">Fase Saat Ini: P4 - Evaluasi RFI &amp; Uji Sampel</h3>
<p className="text-xs text-indigo-700/80 mt-1 leading-relaxed">
                                    Menganalisis tanggapan Request for Information (RFI) dari vendor yang terdaftar dan melakukan pengujian sampel material sesuai spesifikasi kualitas durability yang ditargetkan.
                                </p>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Project Information</h2>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">

<div className="lg:col-span-2 relative">
<label className="block text-xs font-medium text-slate-600 mb-1.5">
                                Nama Project <span className="text-red-500">*</span>
</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required="" type="text" value="Strategic Sourcing Security Paper Rupiah 2027"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Project ID</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 outline-none cursor-not-allowed" readonly="" type="text" value="PRJ-2026-0042"/>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Jenis Project</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-200 bg-white pl-3 pr-10 py-2 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer">
<option value="Investasi">Investasi</option>
<option selected="" value="Raw Material">Raw Material</option>
<option value="Packaging">Packaging</option>
<option value="Chemical">Chemical</option>
<option value="Consumable">Consumable</option>
<option value="IT &amp; Digital">IT &amp; Digital</option>
<option value="Konstruksi &amp; Utilitas">Konstruksi &amp; Utilitas</option>
<option value="Admin &amp; Barang Umum">Admin &amp; Barang Umum</option>
<option value="MRO">Maintenance, Repair &amp; Operations</option>
<option value="Other">Other</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Tanggal</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 py-2 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 relative z-10 bg-transparent" type="date" value="2026-02-10"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-0" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Status</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-200 bg-white pl-3 pr-10 py-2 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer">
<option value="Draft">Draft</option>
<option selected="" value="On Progress">On Progress</option>
<option value="On Hold">On Hold</option>
<option value="Completed">Completed</option>
<option value="Cancelled">Cancelled</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5">Pengguna (Unit Inisiator)</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-200 bg-white pl-3 pr-10 py-2 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer">
<option selected="" value="Divisi Produksi Uang">Divisi Produksi Uang</option>
<option value="Divisi Pengadaan">Divisi Pengadaan</option>
<option value="Divisi IT">Divisi IT</option>

</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="lg:col-span-2">
<label className="block text-xs font-medium text-slate-600 mb-1.5">Target Sourcing</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 py-2 text-sm text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="Efisiensi 6% + peningkatan kualitas durability"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:target-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Unit Kerja Terkait</h2>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2 py-1 rounded">Edit</button>
</div>
<div className="p-6 flex-1">
<p className="text-xs text-slate-500 mb-3">Departemen yang terlibat dalam evaluasi dan approval:</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear"></iconify-icon> Produksi
                                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:box-linear"></iconify-icon> Procurement
                                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:shield-check-linear"></iconify-icon> QA
                                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:lock-linear"></iconify-icon> Keamanan
                                </span>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-900 flex items-center gap-2">
                                Rekanan Diundang
                                <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200">3</span>
</h2>
<button className="text-slate-400 hover:text-indigo-600 transition-colors tooltip" title="Manage Vendors">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-0 flex-1">
<ul className="divide-y divide-slate-100">
<li className="px-6 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-indigo-500 bg-indigo-500">
<input checked="" className="sr-only" type="checkbox"/>
<iconify-icon className="text-white text-[10px]" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">PT Security Paper Indonesia</p>
<p className="text-[10px] text-slate-500">Lokal • Vendor ID: V-0921</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity">RFI Submitted</span>
</li>
<li className="px-6 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-indigo-500 bg-indigo-500">
<input checked="" className="sr-only" type="checkbox"/>
<iconify-icon className="text-white text-[10px]" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">De La Rue International Ltd</p>
<p className="text-[10px] text-slate-500">Internasional • Vendor ID: V-1045</p>
</div>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 opacity-0 group-hover:opacity-100 transition-opacity">Pending Info</span>
</li>
<li className="px-6 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-indigo-500 bg-indigo-500">
<input checked="" className="sr-only" type="checkbox"/>
<iconify-icon className="text-white text-[10px]" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Giesecke+Devrient GmbH</p>
<p className="text-[10px] text-slate-500">Internasional • Vendor ID: V-0883</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity">RFI Submitted</span>
</li>
</ul>
</div>
</section>
</div>

<section className="mb-8">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">Recent Activity</h3>
<div className="space-y-4 px-1">
<div className="flex gap-4">
<div className="relative mt-1">
<div className="w-2 h-2 rounded-full bg-slate-300 ring-4 ring-slate-50"></div>
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200"></div>
</div>
<div className="flex-1">
<p className="text-sm text-slate-600"><span className="font-medium text-slate-900">Admin Procurement</span> mengubah status progress ke <span className="font-medium text-indigo-600">P4 - Evaluasi RFI</span></p>
<p className="text-xs text-slate-400 mt-0.5">Hari ini, 10:42 WIB</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative mt-1">
<div className="w-2 h-2 rounded-full bg-slate-300 ring-4 ring-slate-50"></div>
</div>
<div className="flex-1">
<p className="text-sm text-slate-600"><span className="font-medium text-slate-900">Sistem</span> mengenerate ID Project <span className="font-medium">PRJ-2026-0042</span></p>
<p className="text-xs text-slate-400 mt-0.5">10 Feb 2026, 09:00 WIB</p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
