import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
dairy: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
},
cream: {
50: '#fdfbf7',
100: '#fbf6e9',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-cream-50/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dairy-500 to-dairy-600 flex items-center justify-center text-white shadow-lg shadow-dairy-500/20">
<iconify-icon height="18" icon="solar:drop-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-dairy-600 transition-colors">AURADAIRY</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-dairy-600 transition-colors" href="#home">Utama</a>
<a className="hover:text-dairy-600 transition-colors" href="#brands">Jenama</a>
<a className="hover:text-dairy-600 transition-colors" href="#products">Produk</a>
<a className="hover:text-dairy-600 transition-colors" href="#testimonials">Testimoni</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-4 py-2 rounded-full text-xs font-medium transition-all ring-1 ring-emerald-200/50" href="#contact">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
                        WhatsApp Kami
                    </a>
<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-dairy-100 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Stokis Sah Malaysia</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Susu sedap <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-dairy-600 to-emerald-500">dijamin halal.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Pengedar rasmi Susu Lazz &amp; Produk Sawanah. Pilihan nutrisi terbaik untuk seisi keluarga dengan ramuan bermutu tinggi.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto md:max-w-none">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xl shadow-slate-200" href="#products">
                    Lihat Produk
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all hover:border-slate-300" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Jadi Stokis Kami
                </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">100% Halal</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-dairy-500" icon="solar:box-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Ready Stock</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:scooter-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Penghantaran Pantas</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="brands">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Jenama Pilihan Ramai</h2>
<p className="text-slate-500">Dua jenama gergasi tempatan yang dipercayai ibu bapa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 md:p-12 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 mb-6 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
<iconify-icon icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Susu Lazz</h3>
<p className="text-slate-500 mb-6 line-clamp-2">Susu kambing premium dengan kurma. Alternatif terbaik untuk mereka yang alah susu lembu.</p>
<a className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1" href="#lazz">
                            Lihat Koleksi <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-orange-50 rounded-full blur-3xl group-hover:bg-orange-100 transition-colors"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 md:p-12 hover:shadow-xl hover:shadow-dairy-500/5 transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 mb-6 bg-dairy-100 text-dairy-600 rounded-xl flex items-center justify-center">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Produk Sawanah</h3>
<p className="text-slate-500 mb-6 line-clamp-2">Minuman koko dan malt berkhasiat dengan makanan sunnah. Pilihan bijak untuk tenaga harian.</p>
<a className="text-sm font-semibold text-dairy-600 hover:text-dairy-700 flex items-center gap-1" href="#sawanah">
                            Lihat Koleksi <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-dairy-50 rounded-full blur-3xl group-hover:bg-dairy-100 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cream-50">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-start gap-4">
<iconify-icon className="text-emerald-600" icon="solar:shield-check-linear" width="32"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Dijamin Halal</h4>
<p className="text-xs text-slate-500 leading-relaxed">Produk disahkan Halal oleh JAKIM.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4">
<iconify-icon className="text-emerald-600" icon="solar:leaf-linear" width="32"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Ramuan Bermutu</h4>
<p className="text-xs text-slate-500 leading-relaxed">Bahan semulajadi tanpa pengawet.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4">
<iconify-icon className="text-emerald-600" icon="solar:user-check-linear" width="32"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Pengedar Sah</h4>
<p className="text-xs text-slate-500 leading-relaxed">Stokis berdaftar dan dipercayai.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4">
<iconify-icon className="text-emerald-600" icon="solar:box-linear" width="32"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Pos Pantas</h4>
<p className="text-xs text-slate-500 leading-relaxed">Pengeposan setiap hari bekerja.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Katalog Produk</h2>
<p className="text-slate-500">Pilih produk kegemaran keluarga anda.</p>
</div>

<div className="bg-slate-100 p-1 rounded-lg inline-flex overflow-x-auto no-scrollbar max-w-full">
<button className="px-4 py-2 text-sm font-medium rounded-md bg-white text-slate-900 shadow-sm transition-all whitespace-nowrap">Semua</button>
<button className="px-4 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-700 transition-all whitespace-nowrap">Susu Lazz</button>
<button className="px-4 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-700 transition-all whitespace-nowrap">Sawanah</button>
<button className="px-4 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-700 transition-all whitespace-nowrap">Combo</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">

<div className="group relative">
<div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 mb-4 group-hover:border-slate-300 transition-colors">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-2 py-1 rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-wide z-10">Lazz</div>

<div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-orange-50 to-white">
<div className="w-3/5 h-4/5 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center relative">
<span className="text-orange-900/20 font-bold text-xl rotate-[-10deg]">Lazz <br/> Kurma</span>
</div>
</div>

<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">Lihat Detail</button>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1 text-sm md:text-base">Lazz Susu Kambing Kurma</h3>
<p className="text-xs text-slate-500 mb-3">500g • Pek Kotak</p>
<div className="flex items-center justify-between">
<span className="text-sm md:text-base font-semibold text-emerald-600">RM 45.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 mb-4 group-hover:border-slate-300 transition-colors">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-2 py-1 rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-wide z-10">Lazz</div>
<div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-orange-50 to-white">
<div className="w-3/5 h-4/5 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center relative">
<span className="text-orange-900/20 font-bold text-xl rotate-[-10deg]">Lazz <br/> Asli</span>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">Lihat Detail</button>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1 text-sm md:text-base">Lazz Susu Kambing Asli</h3>
<p className="text-xs text-slate-500 mb-3">500g • Tanpa Gula</p>
<div className="flex items-center justify-between">
<span className="text-sm md:text-base font-semibold text-emerald-600">RM 45.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 mb-4 group-hover:border-slate-300 transition-colors">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-2 py-1 rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-wide z-10">Sawanah</div>
<div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-dairy-50 to-white">
<div className="w-3/5 h-4/5 bg-slate-800 border border-slate-700 rounded-lg shadow-sm flex items-center justify-center relative">
<span className="text-white/20 font-bold text-lg rotate-[-10deg] text-center">Sawanah <br/> Koko</span>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">Lihat Detail</button>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1 text-sm md:text-base">Sawanah Koko</h3>
<p className="text-xs text-slate-500 mb-3">1kg • Minuman Malt</p>
<div className="flex items-center justify-between">
<span className="text-sm md:text-base font-semibold text-emerald-600">RM 19.90</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 mb-4 group-hover:border-slate-300 transition-colors">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-2 py-1 rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-wide z-10">Sawanah</div>
<div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-dairy-50 to-white">
<div className="w-3/5 h-4/5 bg-amber-800 border border-amber-900 rounded-lg shadow-sm flex items-center justify-center relative">
<span className="text-white/20 font-bold text-lg rotate-[-10deg] text-center">Sawanah <br/> Kurma</span>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">Lihat Detail</button>
</div>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1 text-sm md:text-base">Sawanah Wow (Kurma)</h3>
<p className="text-xs text-slate-500 mb-3">1kg • Koko &amp; Kurma</p>
<div className="flex items-center justify-between">
<span className="text-sm md:text-base font-semibold text-emerald-600">RM 23.00</span>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    Lihat semua produk
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 bg-cream-50 border-t border-slate-200/50" id="testimonials">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Keluarga Malaysia Percaya Kami</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Susu Lazz Kurma memang sedap, tak hamis langsung. Anak-anak suka, sesuai untuk sarapan pagi."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">SN</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">Siti Nurhaliza</p>
<p className="text-slate-400">Ibu kepada 3 orang anak</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Penghantaran sangat laju! Order hari ni, lusa dah sampai. Sawanah Koko memang terbaik rasa coklatnya."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">AH</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">Azman Hashim</p>
<p className="text-slate-400">Pelanggan Tetap</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Terima kasih, servis mantap. Seller sangat peramah bila tanya pasal khasiat produk."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">FZ</div>
<div className="text-xs">
<p className="font-semibold text-slate-900">Farah Zulaikha</p>
<p className="text-slate-400">Guru</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4">
<div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
<div className="relative z-10 max-w-xl">
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Ingin buat tempahan?</h2>
<p className="text-slate-400 mb-6">Hubungi kami melalui WhatsApp untuk respon pantas dan konsultasi percuma.</p>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                    WhatsApp Sekarang
                </button>
</div>

<div className="absolute right-0 top-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-dairy-500 to-dairy-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:drop-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight">AURADAIRY</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Membekalkan produk nutrisi berkualiti tinggi untuk keluarga Malaysia sejak 2020.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="brandico:tiktok" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Pautan Pantas</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-dairy-600 transition-colors" href="#">Utama</a></li>
<li><a className="hover:text-dairy-600 transition-colors" href="#">Produk</a></li>
<li><a className="hover:text-dairy-600 transition-colors" href="#">Testimoni</a></li>
<li><a className="hover:text-dairy-600 transition-colors" href="#">Hubungi Kami</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Produk</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-dairy-600 transition-colors" href="#">Susu Lazz Kurma</a></li>
<li><a className="hover:text-dairy-600 transition-colors" href="#">Susu Lazz Asli</a></li>
<li><a className="hover:text-dairy-600 transition-colors" href="#">Sawanah Koko</a></li>
<li><a className="hover:text-dairy-600 transition-colors" href="#">Sawanah Wow</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Hubungi</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:map-point-linear" width="14"></iconify-icon>
<span>Shah Alam, Selangor</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear" width="14"></iconify-icon>
<span>+60 12-345 6789</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear" width="14"></iconify-icon>
<span>hello@auradairy.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-400">© 2024 Aura Dairy Enterprise. Hak cipta terpelihara.</p>
<div className="flex gap-4 text-[10px] text-slate-400">
<a className="hover:text-slate-600" href="#">Privasi</a>
<a className="hover:text-slate-600" href="#">Terma</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
