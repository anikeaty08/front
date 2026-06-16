import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-8">
<button @click="page = 'home'" className="text-xl font-bold tracking-tighter text-white">
                        GS<span className="text-indigo-500">STORE</span>
</button>
<div className="hidden md:flex items-center gap-6">
<button :className="page === 'home' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'" @click="page = 'home'" className="text-sm font-medium transition-colors">Beranda</button>
<button :className="page === 'games' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'" @click="page = 'games'" className="text-sm font-medium transition-colors">Daftar Game</button>
<button :className="page === 'history' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'" @click="page = 'history'" className="text-sm font-medium transition-colors">Riwayat</button>
<button :className="page === 'admin' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'" @click="page = 'admin'" className="text-sm font-medium transition-colors" x-show="isAdmin">Admin Panel</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<span className="text-xs text-zinc-400">Saldo Anda</span>
<span className="text-sm font-semibold text-indigo-400" x-text="'Rp ' + balance.toLocaleString()"></span>
</div>
<div className="h-8 w-[1px] bg-zinc-800 hidden sm:block"></div>
<button @click="page = 'profile'" className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1.5 pr-3 rounded-full hover:bg-zinc-800 transition-all">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
<iconify-icon height="18" icon="solar:crown-minimalistic-linear" width="18" x-show="userRole === 'Sultan'"></iconify-icon>
</div>
<span className="text-sm font-medium" x-text="userRole"></span>
</button>
</div>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[70vh]">

<template x-if="page === 'home'">
<div className="space-y-12">

<section className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 md:p-16">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 leading-tight">
                            Top Up Game Favorit <br/> <span className="text-zinc-500">Cepat, Aman, &amp; Otomatis.</span>
</h1>
<p className="text-zinc-400 text-base mb-8 max-w-md">Layanan pengisian saldo game, pulsa, dan voucher digital dengan proses instan 24 jam nonstop.</p>
<div className="flex flex-wrap gap-4">
<button @click="page = 'games'" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all">Mulai Top Up</button>
<div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-4 py-3 rounded-xl">
<iconify-icon className="text-amber-500" icon="solar:fire-linear"></iconify-icon>
<span className="text-xs font-medium">10,290+ Pesanan hari ini</span>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight">Game Populer</h2>
<button @click="page = 'games'" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">Lihat Semua</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
<template :key="game.id" x-htmlFor="game in games.slice(0, 5)">
<div @click="selectedGame = game; page = 'order'" className="group cursor-pointer">
<div :className="game.img" className="aspect-[3/4] rounded-2xl mb-3 relative overflow-hidden ring-1 ring-zinc-800 group-hover:ring-indigo-500/50 transition-all shadow-xl">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<p :className="game.status === 'Online' ? 'text-emerald-400' : 'text-rose-400'" className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10" x-text="game.status"></p>
</div>
</div>
<h3 className="text-sm font-semibold truncate" x-text="game.name"></h3>
<p className="text-xs text-zinc-500">Top Up Instan</p>
</div>
</template>
</div>
</section>
</div>
</template>

<template x-if="page === 'games'">
<div className="space-y-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight">Daftar Semua Game</h2>
<p className="text-sm text-zinc-500">Pilih game favoritmu dan mulai top up sekarang.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Cari game..." type="text" x-model="searchQuery"/>
</div>
<select className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" x-model="activeCategory">
<option value="Semua">Semua Kategori</option>
<option value="Game Mobile">Game Mobile</option>
<option value="Game PC">Game PC</option>
<option value="Voucher">Voucher</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
<template :key="game.id" x-htmlFor="game in filteredGames()">
<div @click="selectedGame = game; page = 'order'" className="group cursor-pointer">
<div :className="game.img" className="aspect-[3/4] rounded-2xl mb-3 relative overflow-hidden ring-1 ring-zinc-800 group-hover:ring-indigo-500/50 transition-all">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-2 right-2">
<div :className="game.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-500'" className="w-2 h-2 rounded-full"></div>
</div>
</div>
<h3 className="text-xs font-semibold truncate text-zinc-200" x-text="game.name"></h3>
<span className="text-[10px] text-zinc-500 uppercase tracking-tighter" x-text="game.cat"></span>
</div>
</template>
</div>
</div>
</template>

<template x-if="page === 'history'">
<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Riwayat Transaksi</h2>
<button className="text-xs text-indigo-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:download-linear"></iconify-icon> Ekspor PDF
                    </button>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-950 text-zinc-500 uppercase text-[10px] tracking-widest border-b border-zinc-800">
<tr>
<th className="px-6 py-4">Invoice / Game</th>
<th className="px-6 py-4">Item &amp; ID</th>
<th className="px-6 py-4">Harga</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Tanggal</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<template x-for="tr in [
                                    { inv: 'INV-88210', game: 'Mobile Legends', item: '86 Diamonds', target: '8821920 (2192)', price: 20500, status: 'Success', date: '12 Feb, 14:20' },
                                    { inv: 'INV-88209', game: 'Valorant', item: '625 Points', target: 'RiotID#TAG', price: 65000, status: 'Pending', date: '12 Feb, 12:05' },
                                    { inv: 'INV-88198', game: 'Free Fire', item: '140 Diamonds', target: '102931211', price: 19800, status: 'Failed', date: '11 Feb, 09:45' }
                                ]">
<tr className="hover:bg-zinc-800/30 transition-colors cursor-pointer">
<td className="px-6 py-4">
<div className="font-medium text-white" x-text="tr.inv"></div>
<div className="text-[10px] text-zinc-500" x-text="tr.game"></div>
</td>
<td className="px-6 py-4">
<div className="text-zinc-300" x-text="tr.item"></div>
<div className="text-[10px] text-zinc-500" x-text="tr.target"></div>
</td>
<td className="px-6 py-4 font-medium" x-text="'Rp'+tr.price.toLocaleString()"></td>
<td className="px-6 py-4">
<span :class="{
                                                    'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20': tr.status === 'Success',
                                                    'bg-amber-500/10 text-amber-500 border border-amber-500/20': tr.status === 'Pending',
                                                    'bg-rose-500/10 text-rose-500 border border-rose-500/20': tr.status === 'Failed'
                                                }" className="px-2 py-0.5 rounded-full text-[10px] font-medium" x-text="tr.status"></span>
</td>
<td className="px-6 py-4 text-zinc-500 text-xs" x-text="tr.date"></td>
</tr>
</template>
</tbody>
</table>
</div>
</div>
</div>
</template>

<template x-if="page === 'order'">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 space-y-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sticky top-24">
<div :className="selectedGame?.img" className="w-full aspect-video rounded-2xl mb-6 flex items-center justify-center shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-black/20"></div>
<iconify-icon className="text-white relative z-10 opacity-50" height="48" icon="solar:gamepad-linear" width="48"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2" x-text="selectedGame?.name"></h2>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>Proses instan 24 jam otomatis. Masukkan data akun dengan benar.</p>
<div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-3">
<div className="flex items-center gap-2 text-indigo-400">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="font-medium">Jaminan Layanan:</span>
</div>
<ul className="space-y-2 text-xs">
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Lisensi Resmi &amp; Legal</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Keamanan Akun 100%</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Support CS 24/7</li>
</ul>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
<h3 className="text-lg font-semibold tracking-tight">Data Akun</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">User ID</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="ID" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Zone ID</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="(Zone)" type="text"/>
</div>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
<h3 className="text-lg font-semibold tracking-tight">Nominal</h3>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<template x-for="item in [
                                { label: '5 Diamonds', price: 1500 },
                                { label: '12 Diamonds', price: 3500 },
                                { label: '50 Diamonds', price: 14500 },
                                { label: '250 Diamonds', price: 68000 },
                                { label: '500 Diamonds', price: 135000 },
                                { label: '1000 Diamonds', price: 265000 }
                            ]">
<label className="relative cursor-pointer">
<input className="peer sr-only" name="item" type="radio"/>
<div className="h-full border border-zinc-800 bg-zinc-950 rounded-2xl p-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-500/5 transition-all">
<p className="text-xs font-semibold mb-1" x-text="item.label"></p>
<p className="text-[10px] text-zinc-500" x-text="'Rp ' + item.price.toLocaleString()"></p>
</div>
</label>
</template>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
<h3 className="text-lg font-semibold tracking-tight">Pembayaran</h3>
</div>
<div className="grid grid-cols-1 gap-3">
<label className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-2xl cursor-pointer hover:border-zinc-700 transition-all">
<div className="flex items-center gap-4">
<input className="text-indigo-600 focus:ring-0" name="payment" type="radio"/>
<span className="text-sm font-medium">QRIS (All Payment)</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:qr-code-linear" width="20"></iconify-icon>
</label>
<label className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-2xl cursor-pointer hover:border-zinc-700 transition-all">
<div className="flex items-center gap-4">
<input className="text-indigo-600 focus:ring-0" name="payment" type="radio"/>
<span className="text-sm font-medium">Saldo Akun</span>
</div>
<span className="text-xs text-indigo-400 font-semibold" x-text="'Rp' + balance.toLocaleString()"></span>
</label>
</div>
</div>
<button @click="showModal = true" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-semibold shadow-xl shadow-indigo-500/20 transition-all">
                        Konfirmasi Pembelian
                    </button>
</div>
</div>
</template>
</main>

<a className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" href="https://wa.me/6283871282794" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" width="28"></iconify-icon>
</a>

<div className="fixed inset-0 z-[60] flex items-center justify-center p-4" x-cloak="" x-show="showModal">
<div @click="showModal = false" className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl">
<div className="p-6 text-center">
<div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:shield-warning-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-1">Cek Pesanan Anda</h3>
<p className="text-xs text-zinc-500">Pastikan data yang dimasukkan sudah benar.</p>
</div>
<div className="px-6 pb-6 space-y-3">
<div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Item</span>
<span className="text-zinc-200">50 Diamonds</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Target</span>
<span className="text-zinc-200">8821920 (2192)</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Total Harga</span>
<span className="text-indigo-400 font-bold">Rp 14.500</span>
</div>
</div>
<div className="flex gap-3 pt-2">
<button @click="showModal = false" className="flex-1 py-3 text-xs font-semibold bg-zinc-800 rounded-xl">Batal</button>
<button @click="showModal = false; alert('Memproses...')" className="flex-1 py-3 text-xs font-semibold bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20">Bayar Sekarang</button>
</div>
</div>
</div>
</div>

<footer className="mt-20 border-t border-zinc-900 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl font-bold tracking-tighter text-white mb-6 block">GS<span className="text-indigo-500">STORE</span></span>
<p className="text-sm text-zinc-500 leading-relaxed">Penyedia layanan top up game online otomatis tercepat dan termurah di Indonesia.</p>
</div>
<div>
<h4 className="text-xs font-semibold mb-6 uppercase tracking-widest text-zinc-400">Navigasi</h4>
<ul className="space-y-4 text-xs text-zinc-500">
<li><a @click.prevent="page='games'" className="hover:text-indigo-400" href="#">Daftar Game</a></li>
<li><a @click.prevent="page='history'" className="hover:text-indigo-400" href="#">Lacak Pesanan</a></li>
<li><a className="hover:text-indigo-400" href="#">Syarat &amp; Ketentuan</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-6 uppercase tracking-widest text-zinc-400">Metode Bayar</h4>
<div className="grid grid-cols-3 gap-2">
<div className="h-6 bg-zinc-900 border border-zinc-800 rounded"></div>
<div className="h-6 bg-zinc-900 border border-zinc-800 rounded"></div>
<div className="h-6 bg-zinc-900 border border-zinc-800 rounded"></div>
</div>
</div>
<div>
<h4 className="text-xs font-semibold mb-6 uppercase tracking-widest text-zinc-400">Hubungi Kami</h4>
<p className="text-xs text-zinc-500 mb-4">CS Ready 24/7</p>
<div className="flex gap-3">
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-900 text-center text-[10px] text-zinc-600">
                © 2024 GSSTORE Digital. Made with precision.
            </div>
</div>
</footer>

    </>
  );
}
