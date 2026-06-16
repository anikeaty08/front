import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(tabId) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            // Remove active styles from all buttons
            document.querySelectorAll('button[onclick^="switchTab"]').forEach(btn => {
                btn.classList.remove('bg-neutral-100', 'text-neutral-900');
                btn.classList.add('text-neutral-600');
            });
            
            // Show selected tab
            document.getElementById(tabId).classList.add('active');
            // Add active style to clicked button
            event.target.classList.add('bg-neutral-100', 'text-neutral-900');
            event.target.classList.remove('text-neutral-600');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-white border-b border-neutral-200 p-3 flex justify-center gap-2 md:gap-4 shrink-0 overflow-x-auto text-sm">
<button className="px-4 py-2 rounded-md font-medium bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors whitespace-nowrap" onclick="switchTab('guest')">1. Guest Request (Mobile)</button>
<button className="px-4 py-2 rounded-md font-medium text-neutral-600 hover:bg-neutral-100 transition-colors whitespace-nowrap" onclick="switchTab('dashboard')">2. FO Dashboard (Desktop)</button>
<button className="px-4 py-2 rounded-md font-medium text-neutral-600 hover:bg-neutral-100 transition-colors whitespace-nowrap" onclick="switchTab('staff')">3. Staff Task (Mobile)</button>
</div>

<div className="flex-1 overflow-hidden relative">

<div className="tab-content active h-full overflow-y-auto bg-neutral-100 pb-20" id="guest">

<div className="max-w-md mx-auto min-h-full bg-white shadow-sm border-x border-neutral-200 flex flex-col relative">

<header className="p-6 pb-4 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
<div>
<p className="text-xs text-neutral-500 font-medium tracking-wide uppercase">Kamar Anda</p>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">302</h1>
</div>
<div className="h-10 w-10 bg-neutral-50 rounded-full flex items-center justify-center border border-neutral-200">
<iconify-icon className="text-neutral-600" icon="solar:user-linear" width="20"></iconify-icon>
</div>
</header>

<div className="p-6 flex-1">
<h2 className="text-xl font-semibold tracking-tight mb-1">Ada yang bisa dibantu?</h2>
<p className="text-sm text-neutral-500 mb-8">Pilih layanan yang Anda butuhkan di bawah ini.</p>

<div className="grid grid-cols-2 gap-4">

<button className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-blue-500 hover:bg-blue-50/50 transition-all group shadow-sm">
<div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:broom-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700">Pembersihan</span>
</button>

<button className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group shadow-sm">
<div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700">Fasilitas Kamar</span>
</button>

<button className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-orange-500 hover:bg-orange-50/50 transition-all group shadow-sm">
<div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700">Makanan</span>
</button>

<button className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-rose-500 hover:bg-rose-50/50 transition-all group shadow-sm">
<div className="h-12 w-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tools-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700">Perbaikan</span>
</button>
</div>

<div className="mt-10">
<h3 className="text-sm font-medium text-neutral-900 mb-3">Permintaan Aktif</h3>
<div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex items-start gap-3">
<div className="mt-0.5 text-amber-500">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">Minta Handuk Tambahan</p>
<p className="text-xs text-neutral-500 mt-1">Sedang disiapkan oleh staf. Estimasi: 5 menit.</p>
</div>
</div>
</div>
</div>

<div className="p-6 mt-auto">
<button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
                        Chat Resepsionis via WhatsApp
                    </button>
</div>
</div>
</div>

<div className="tab-content h-full bg-neutral-50 flex" id="dashboard">

<aside className="w-64 bg-white border-r border-neutral-200 flex flex-col hidden md:flex shrink-0">
<div className="h-16 flex items-center px-6 border-b border-neutral-100">
<div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded font-semibold tracking-tighter text-sm">HO</div>
<span className="ml-3 font-semibold tracking-tight">HotelOps</span>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 bg-neutral-100 text-neutral-900 rounded-md text-sm font-medium" href="#">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                        Live Requests
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:history-linear" width="18"></iconify-icon>
                        Riwayat
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
                        Staf
                    </a>
<div className="pt-6 pb-2">
<p className="px-3 text-xs font-medium text-neutral-400 uppercase tracking-wider">Status Staf (Shift Pagi)</p>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between px-3 py-2 text-sm">
<div className="flex items-center gap-2 text-neutral-700">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Budi (HK)
                            </div>
<span className="text-xs text-neutral-400">Siap</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm bg-amber-50 rounded-md">
<div className="flex items-center gap-2 text-neutral-700">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                Siti (HK)
                            </div>
<span className="text-xs font-medium text-amber-700">1 Tugas</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm bg-rose-50 rounded-md">
<div className="flex items-center gap-2 text-neutral-700">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                Agus (MT)
                            </div>
<span className="text-xs font-medium text-rose-700">Sibuk</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm">
<div className="flex items-center gap-2 text-neutral-700 opacity-50">
<span className="w-2 h-2 rounded-full bg-neutral-300"></span>
                                Rina (RS)
                            </div>
<span className="text-xs text-neutral-400">Offline</span>
</div>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-4">
<h2 className="text-lg font-medium tracking-tight">Live Requests</h2>
<div className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                            2 Pending
                        </div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 w-64" placeholder="Cari kamar..." type="text"/>
</div>
<button className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-6">
<div className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-neutral-50/80 border-b border-neutral-200 text-neutral-500">
<tr>
<th className="px-4 py-3 font-medium">Waktu</th>
<th className="px-4 py-3 font-medium">Kamar</th>
<th className="px-4 py-3 font-medium">Permintaan</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Ditugaskan Ke</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100">

<tr className="bg-rose-50/30 hover:bg-neutral-50 transition-colors group">
<td className="px-4 py-4 text-neutral-500">10:42 <span className="text-rose-500 font-medium ml-1">(Baru)</span></td>
<td className="px-4 py-4 font-medium text-neutral-900">205</td>
<td className="px-4 py-4 text-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:bath-linear"></iconify-icon>
                                            Minta Sabun &amp; Sampo
                                        </div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                            Menunggu
                                        </span>
</td>
<td className="px-4 py-4">

<button className="flex items-center justify-between w-40 px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm hover:border-neutral-300 transition-colors shadow-sm">
<span className="text-neutral-500">Pilih Staf...</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-4 py-4 text-neutral-500">10:30</td>
<td className="px-4 py-4 font-medium text-neutral-900">412</td>
<td className="px-4 py-4 text-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:tools-linear"></iconify-icon>
                                            AC Kurang Dingin
                                        </div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            Dikerjakan
                                        </span>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-600">A</div>
<span className="text-neutral-700">Agus (MT)</span>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-4 py-4 text-neutral-500">10:25</td>
<td className="px-4 py-4 font-medium text-neutral-900">108</td>
<td className="px-4 py-4 text-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:broom-linear"></iconify-icon>
                                            Bersihkan Kamar
                                        </div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            Dikerjakan
                                        </span>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-600">S</div>
<span className="text-neutral-700">Siti (HK)</span>
</div>
</td>
</tr>

<tr className="bg-neutral-50/50">
<td className="px-4 py-4 text-neutral-400">09:15</td>
<td className="px-4 py-4 font-medium text-neutral-500">302</td>
<td className="px-4 py-4 text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="solar:bath-linear"></iconify-icon>
                                            Handuk Tambahan
                                        </div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Selesai
                                        </span>
</td>
<td className="px-4 py-4 text-neutral-500">
                                        Budi (HK)
                                    </td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

<div className="tab-content h-full overflow-y-auto bg-neutral-100 pb-20" id="staff">

<div className="max-w-md mx-auto min-h-full bg-neutral-50 border-x border-neutral-200 flex flex-col">

<header className="bg-white p-4 border-b border-neutral-200 flex items-center justify-between sticky top-0 z-10">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 font-medium">Housekeeping</span>
<span className="text-base font-semibold text-neutral-900 tracking-tight">Halo, Budi</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-100">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Online
                        </div>
</div>
</header>
<div className="p-4 space-y-4">

<div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
<div className="bg-rose-50 border-b border-rose-100 p-3 flex justify-between items-center">
<span className="text-xs font-semibold text-rose-700 uppercase tracking-wide">Tugas Baru Masuk</span>
<span className="text-xs text-rose-600 font-medium">2 mnt lalu</span>
</div>
<div className="p-5 flex gap-4">

<div className="flex-1">
<p className="text-sm text-neutral-500 mb-1">Kamar</p>
<h2 className="text-4xl font-semibold tracking-tighter text-neutral-900 mb-2">205</h2>
<p className="text-lg font-medium text-neutral-800 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:bath-linear"></iconify-icon>
                                    Sabun &amp; Sampo
                                </p>
</div>
</div>

<div className="px-4 pb-4">
<button className="w-full bg-black text-white py-4 rounded-xl text-base font-medium active:scale-[0.98] transition-transform">
                                Terima Tugas
                            </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden opacity-90">
<div className="bg-amber-50 border-b border-amber-100 p-3 flex justify-between items-center">
<span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Sedang Dikerjakan</span>
</div>
<div className="p-5 flex gap-4">
<div className="flex-1">
<p className="text-sm text-neutral-500 mb-1">Kamar</p>
<h2 className="text-4xl font-semibold tracking-tighter text-neutral-900 mb-2">302</h2>
<p className="text-lg font-medium text-neutral-800 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:bath-linear"></iconify-icon>
                                    Kirim Handuk
                                </p>
</div>
</div>

<div className="px-4 pb-4">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-1 flex">

<button className="w-full bg-white border border-neutral-200 text-emerald-600 py-3.5 rounded-lg text-base font-medium flex items-center justify-center gap-2 hover:bg-emerald-50 hover:border-emerald-200 transition-colors shadow-sm">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
                                    Selesaikan Tugas
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
