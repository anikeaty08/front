import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[375px] h-[812px] bg-[#F4F6F9] overflow-hidden shadow-2xl sm:rounded-[40px] sm:border-[8px] border-gray-900 flex flex-col">

<div className="absolute top-0 inset-x-0 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-[#6200EE]/10 to-transparent pointer-events-none z-0"></div>

<div className="h-12 w-full flex-shrink-0 relative z-10"></div>

<div className="flex-1 overflow-y-auto no-scrollbar relative z-10 pb-40">

<header className="px-6 mb-8 flex items-start justify-between">
<div>

<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2.5 leading-tight">Good Morning,<br/>Marc</h1>

<div className="inline-flex items-center gap-1.5 bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-full px-3 py-1.5">
<span className="text-xs">📍</span>
<span className="text-xs font-medium text-gray-800">Akwa Central</span>
</div>
</div>

<div className="w-12 h-12 rounded-full bg-white p-1 shadow-sm border border-white/50">
<img alt="Marc" className="w-full h-full rounded-full object-cover" src="https://ui-avatars.com/api/?name=Marc+Agent&amp;background=f4f6f9&amp;color=6200EE&amp;rounded=true"/>
</div>
</header>

<section className="mx-6 p-5 rounded-[28px] bg-gradient-to-br from-[#5A00D6] to-[#8E2DE2] text-white shadow-[0_20px_40px_-10px_rgba(98,0,238,0.5)] relative overflow-hidden ring-1 ring-white/20 inset">

<div className="absolute -top-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#00B4D8]/30 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10">

<div className="flex items-start justify-between mb-6">

<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" icon="solar:wallet-linear" width="24"></iconify-icon>
</div>

<button className="text-xs font-medium bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-colors px-4 py-2 rounded-full shadow-sm">
                            Withdraw
                        </button>
</div>

<div className="mb-6">
<h2 className="text-[10px] text-white/70 font-medium uppercase tracking-wider mb-1">Total Balance</h2>
<div className="text-3xl font-semibold tracking-tight drop-shadow-md">45,200 FCFA</div>
</div>

<div>
<div className="flex items-center justify-between text-[11px] text-white/90 font-medium mb-2">
<span>Progress</span>
<span>75% to Next Payout</span>
</div>
<div className="w-full h-1.5 bg-black/20 rounded-full relative">

<div className="absolute left-0 top-0 h-full w-[75%] bg-gradient-to-r from-white/60 to-white rounded-full">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.8)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-6 mt-6 grid grid-cols-2 gap-4">

<div className="col-span-1 bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between aspect-square border border-gray-50/50">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative">
<iconify-icon className="drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]" icon="solar:box-linear" width="26"></iconify-icon>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 leading-none">12</div>
<div className="text-xs text-gray-500 mt-2 font-medium leading-snug">Packages<br/>Arriving</div>
</div>
</div>

<div className="col-span-1 flex flex-col gap-4">

<div className="flex-1 bg-white rounded-[20px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center gap-3 border border-gray-50/50">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xl font-semibold tracking-tight text-gray-900 leading-none">85</div>
<div className="text-[11px] text-gray-500 mt-1 font-medium">On Shelf</div>
</div>
</div>

<div className="flex-1 bg-white rounded-[20px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex items-center gap-3 border border-red-50 relative overflow-hidden">
<div className="absolute inset-0 bg-red-50/30 pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-500 flex-shrink-0 relative z-10">
<iconify-icon icon="solar:alarm-linear" width="20"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-xl font-semibold tracking-tight text-red-600 leading-none">03</div>
<div className="text-[11px] text-red-500 font-medium mt-1">Needs Action</div>
</div>
</div>
</div>
</section>

<section className="mx-6 mt-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Recent Tasks</h3>
<button className="text-xs text-[#6200EE] font-medium bg-[#6200EE]/5 px-3 py-1.5 rounded-full hover:bg-[#6200EE]/10 transition-colors">View All</button>
</div>
<div className="flex flex-col gap-3">

<div className="bg-white rounded-[20px] p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-50/50 flex items-center justify-between">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Delivered #KLI-8942</div>
<div className="text-[11px] text-gray-400 mt-0.5">Today, 10:30 AM</div>
</div>
</div>
<div className="text-xs font-medium text-emerald-600 bg-emerald-50/50 px-2.5 py-1 rounded-lg">
                            +150
                        </div>
</div>

<div className="bg-white rounded-[20px] p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-50/50 flex items-center justify-between">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:archive-down-minimlistic-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Restocked Lot #KLI-05</div>
<div className="text-[11px] text-gray-400 mt-0.5">Today, 09:15 AM</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none">

<div className="absolute inset-0 bg-[#6200EE]/20 rounded-full blur-xl animate-pulse scale-150"></div>
<button className="pointer-events-auto relative w-[72px] h-[72px] bg-[#F4F6F9] rounded-full flex items-center justify-center shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] transition-transform active:scale-95 border border-white/50">

<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-transparent opacity-60"></div>
<iconify-icon className="text-[#6200EE] relative z-10 drop-shadow-sm" icon="solar:qr-code-linear" width="32"></iconify-icon>
</button>
</div>

<nav className="absolute bottom-6 left-6 right-6 h-[72px] bg-white/75 backdrop-blur-xl rounded-[32px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white/60 flex items-center justify-between px-6 z-20">

<button className="text-[#6200EE] flex flex-col items-center gap-1 transition-transform active:scale-95">
<iconify-icon className="drop-shadow-[0_2px_4px_rgba(98,0,238,0.2)]" icon="solar:home-2-bold" width="24"></iconify-icon>
</button>

<button className="text-gray-400 hover:text-gray-600 flex flex-col items-center gap-1 transition-all active:scale-95">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</button>

<div className="w-16"></div>

<button className="text-gray-400 hover:text-gray-600 flex flex-col items-center gap-1 transition-all active:scale-95">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</button>

<button className="text-gray-400 hover:text-gray-600 flex flex-col items-center gap-1 transition-all active:scale-95">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</button>
</nav>
</div>

    </>
  );
}
