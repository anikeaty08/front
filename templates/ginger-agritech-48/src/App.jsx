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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center group-hover:border-amber-600/50 transition-colors">
<span className="text-white font-medium text-xs">Y</span>
</div>
<span className="text-white font-medium tracking-tight text-lg uppercase">Yarehnasa</span>
</a>

<div className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-wide">
<a className="hover:text-white transition-colors" href="#about">Tentang</a>
<a className="hover:text-white transition-colors" href="#products">Produk</a>
<a className="hover:text-white transition-colors" href="#sustainability">Eco</a>
<a className="hover:text-white transition-colors" href="#tech">Teknologi</a>
<a className="hover:text-white transition-colors" href="#global">Global</a>
<a className="hover:text-white transition-colors" href="#investors">Investor</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors" href="#contact">
<span>Kontak</span>
</a>
<button className="lg:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="hidden fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl pt-20 px-6" id="mobile-menu">
<div className="flex flex-col gap-4 text-lg font-medium text-white">
<a href="#about" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Tentang Kami</a>
<a href="#products" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Produk &amp; Pasar</a>
<a href="#sustainability" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Keberlanjutan</a>
<a href="#tech" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Teknologi</a>
<a href="#global" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Jaringan Global</a>
<a href="#investors" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Investor</a>
<a href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Kontak</a>
</div>
</div>

<header className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
<div className="flex flex-col items-start max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-200/80 text-xs font-medium mb-8">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>"Nama baik lebih berharga daripada kekayaan besar" (Amsal 22:1)</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                    Penyuplai Jahe Terbesar <br/>
<span className="text-gradient">Dunia dari Timur.</span>
</h1>

<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
                    Mengintegrasikan warisan rempah Maluku dengan teknologi agrikultur presisi. Sejarah inovasi, pertanian regeneratif, dan akses global untuk kualitas jahe premium.
                </p>

<div className="flex flex-wrap items-center gap-4">
<a className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-zinc-200 transition-all" href="#investors">
<span>Unduh Ringkasan Eksekutif</span>
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
</a>
<a className="flex items-center gap-2 border border-zinc-800 text-zinc-300 px-6 py-3 rounded text-sm font-medium hover:bg-zinc-900 hover:text-white hover:border-zinc-600 transition-all" href="#contact">
<span>Hubungi Tim Sales</span>
</a>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-8">
<div>
<h4 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:history-linear"></iconify-icon> Warisan
                    </h4>
<p className="text-xs text-zinc-500">Pusat Rempah Maluku</p>
</div>
<div>
<h4 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:leaf-linear"></iconify-icon> Regeneratif
                    </h4>
<p className="text-xs text-zinc-500">Pertanian Berkelanjutan</p>
</div>
<div>
<h4 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:satellite-linear"></iconify-icon> Traceability
                    </h4>
<p className="text-xs text-zinc-500">Integrasi Satelit &amp; AI</p>
</div>
<div>
<h4 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:globe-linear"></iconify-icon> Akses Global
                    </h4>
<p className="text-xs text-zinc-500">Ekspor 5 Negara</p>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Meneruskan Warisan <span className="text-amber-500">Maluku</span></h2>
<div className="space-y-6 text-sm leading-relaxed text-zinc-400">
<p>
                            PT ESE (Yarehnasa) melanjutkan narasi historis Kepulauan Maluku sebagai pusat rempah dunia. Kami beroperasi di perkebunan Hatusua, Kabupaten Seram Bagian Barat (SBB), Indonesia.
                        </p>
<p>
                            Kami memegang teguh <strong>Visi &amp; Misi</strong> untuk menjaga integritas dan nama baik dalam bisnis pangan global, memastikan setiap rimpang jahe yang kami kirimkan membawa kualitas terbaik dari tanah Indonesia.
                        </p>

<div className="pt-6 border-t border-white/5">
<h3 className="text-white font-medium mb-3">Kepemimpinan</h3>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white">DR</div>
<div>
<div className="text-white text-xs font-medium">Dewan Direksi</div>
<div className="text-[10px] text-zinc-500 uppercase">Manajemen Kunci</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] pointer-events-none"></div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-3xl text-white font-medium tracking-tight mb-1">10<span className="text-sm text-zinc-500 ml-1">Ha</span></div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Luas Saat Ini</div>
</div>
<div>
<div className="text-3xl text-emerald-400 font-medium tracking-tight mb-1">100<span className="text-sm text-zinc-500 ml-1">Ha</span></div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Target Ekspansi</div>
</div>
<div className="col-span-2 border-t border-white/5 pt-6">
<div className="flex items-end justify-between mb-2">
<span className="text-3xl text-white font-medium tracking-tight">400<span className="text-sm text-zinc-500 ml-1">Ton</span></span>
<span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">+30Ton/Ha</span>
</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Potensi Produksi Tahunan</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-white/5" id="products">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="mb-12">
<span className="text-amber-500 text-xs font-medium uppercase tracking-wider mb-2 block">Komoditas Unggulan</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Jahe Premium Yarehnasa</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-black card-hover">
<iconify-icon className="text-amber-500 text-2xl mb-4" icon="solar:stars-linear"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Tanah Vulkanis</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Tumbuh di tanah vulkanis Maluku yang kaya mineral, menghasilkan rimpang dengan profil rasa pedas intens dan kandungan minyak atsiri tinggi.
                    </p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-black card-hover">
<iconify-icon className="text-blue-500 text-2xl mb-4" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Prospek Pasar</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Permintaan B2B global terus meningkat seiring tren kesehatan herbal. Jahe Indonesia menjadi primadona industri farmasi dan F&amp;B.
                    </p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-black card-hover">
<iconify-icon className="text-emerald-500 text-2xl mb-4" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Grade A Export</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Disortir ketat untuk memenuhi standar ekspor internasional. Bebas hama, ukuran seragam, dan bersih.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="sustainability">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
<div className="md:w-1/2">
<span className="text-emerald-500 text-xs font-medium uppercase tracking-wider mb-2 block">Eco-Friendly</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Pertanian Regeneratif &amp; <br/>Dampak Sosial</h2>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                        Kami menerapkan metode tanam tanpa merusak hutan (<strong>Zero Deforestation</strong>). Fokus kami adalah memulihkan kesehatan tanah sambil meningkatkan taraf hidup petani lokal melalui kemitraan yang adil.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Pemberdayaan Petani Lokal
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Tanpa Pembakaran Lahan
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                            Penggunaan Pupuk Organik
                        </li>
</ul>
</div>
<div className="md:w-1/2">
<div className="bg-zinc-900 border border-zinc-800 p-1 rounded-2xl">
<div className="aspect-video bg-zinc-800 rounded-xl flex items-center justify-center overflow-hidden relative">

<div className="absolute inset-0 bg-emerald-900/20"></div>
<iconify-icon className="text-6xl text-emerald-500/50" icon="solar:leaf-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black" id="tech">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-indigo-500 text-xs font-medium uppercase tracking-wider mb-2 block">Agri-Tech 4.0</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Integrasi Teknologi Presisi</h2>
<p className="text-sm text-zinc-500">
                    Manajemen operasional kebun seluas 10 hektar dari genggaman, didukung data satelit untuk kepastian panen.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group p-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 to-transparent">
<div className="bg-zinc-950 h-full p-6 rounded-xl border border-indigo-500/30 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-3xl text-indigo-400 mb-4" icon="solar:satellite-bold-duotone"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Integrasi NASA</h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            Pemantauan cuaca dan iklim mikro secara real-time menggunakan data satelit untuk mitigasi risiko gagal panen.
                        </p>
</div>
</div>

<div className="relative group p-1 rounded-2xl bg-zinc-900">
<div className="bg-zinc-950 h-full p-6 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:verified-check-bold-duotone"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Kepatuhan Global</h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            Sistem pencatatan digital otomatis untuk kesiapan sertifikasi ISO 22000 dan GlobalG.A.P.
                        </p>
</div>
</div>

<div className="relative group p-1 rounded-2xl bg-zinc-900">
<div className="bg-zinc-950 h-full p-6 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:smartphone-2-bold-duotone"></iconify-icon>
<h3 className="text-white font-medium text-lg mb-2">Aplikasi Yarehnasa</h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            Kontrol penuh ekspansi volume dan kualitas produk melalui dashboard manajemen terpusat.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="global">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-blue-500 text-xs font-medium uppercase tracking-wider mb-2 block">Ekspansi Internasional</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Rute Ekspor &amp; Mitra</h2>
<p className="text-sm text-zinc-400 mt-2">Entitas C-Corp di Amerika Serikat sebagai hub distribusi global.</p>
</div>
<div className="flex gap-4">
<div className="px-4 py-2 rounded bg-zinc-900 border border-zinc-800">
<div className="text-[10px] text-zinc-500 uppercase">Ekspor 2026 (Estimasi)</div>
<div className="text-white font-medium">Coming Soon</div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 md:p-10">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="p-4 rounded-xl bg-black border border-zinc-800 hover:border-blue-500/50 transition-all group">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-xl rounded-sm" icon="flag:us-4x3"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-blue-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">USA</h4>
<p className="text-[10px] text-zinc-500 mb-3">Distribution Hub</p>
<button className="w-full py-1.5 rounded bg-zinc-900 text-[10px] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors" onclick="alert('MOU/LOI Document Preview Placeholder')">
                            Lihat MOU/LOI
                        </button>
</div>

<div className="p-4 rounded-xl bg-black border border-zinc-800 hover:border-red-500/50 transition-all group">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-xl rounded-sm" icon="flag:jp-4x3"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-red-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Jepang</h4>
<p className="text-[10px] text-zinc-500 mb-3">Pharma Partner</p>
<button className="w-full py-1.5 rounded bg-zinc-900 text-[10px] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors" onclick="alert('MOU/LOI Document Preview Placeholder')">
                            Lihat MOU/LOI
                        </button>
</div>

<div className="p-4 rounded-xl bg-black border border-zinc-800 hover:border-orange-500/50 transition-all group">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-xl rounded-sm" icon="flag:nl-4x3"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-orange-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Rotterdam</h4>
<p className="text-[10px] text-zinc-500 mb-3">Gateway Europe</p>
<button className="w-full py-1.5 rounded bg-zinc-900 text-[10px] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors" onclick="alert('MOU/LOI Document Preview Placeholder')">
                            Lihat MOU/LOI
                        </button>
</div>

<div className="p-4 rounded-xl bg-black border border-zinc-800 hover:border-white/50 transition-all group">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-xl rounded-sm" icon="flag:sg-4x3"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Singapura</h4>
<p className="text-[10px] text-zinc-500 mb-3">Trade Finance</p>
<button className="w-full py-1.5 rounded bg-zinc-900 text-[10px] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors" onclick="alert('MOU/LOI Document Preview Placeholder')">
                            Lihat MOU/LOI
                        </button>
</div>

<div className="p-4 rounded-xl bg-black border border-zinc-800 hover:border-yellow-500/50 transition-all group">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-xl rounded-sm" icon="flag:de-4x3"></iconify-icon>
<iconify-icon className="text-zinc-600 group-hover:text-yellow-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Jerman</h4>
<p className="text-[10px] text-zinc-500 mb-3">Processing Tech</p>
<button className="w-full py-1.5 rounded bg-zinc-900 text-[10px] text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors" onclick="alert('MOU/LOI Document Preview Placeholder')">
                            Lihat MOU/LOI
                        </button>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span>Transaksi Aman: Support Letter of Credit (L/C) &amp; End-to-End Logistics.</span>
</div>
<button className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:file-pdf-linear"></iconify-icon>
<span>Download Laporan Statistik Ekspor 2026 (PDF)</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-zinc-900/50 to-black" id="investors">
<div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Hubungan Investor</h2>
<p className="text-sm text-zinc-400 max-w-2xl mx-auto mb-12">
                Bergabunglah dalam skalabilitas bisnis agrikultur modern. Akses dokumen rahasia, proyeksi finansial, dan rencana bisnis.
            </p>
<div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); alert('Permintaan akses terkirim.')">
<div className="text-left">
<label className="block text-xs font-medium text-zinc-500 mb-1">Email Perusahaan</label>
<input className="w-full bg-black border border-zinc-800 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all" placeholder="investor@company.com" type="email"/>
</div>
<div className="text-left">
<label className="block text-xs font-medium text-zinc-500 mb-1">Pilih Dokumen</label>
<select className="w-full bg-black border border-zinc-800 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-600 transition-all">
<option>Pitch Deck</option>
<option>Rencana Bisnis (Business Plan)</option>
<option>Proyeksi Finansial</option>
</select>
</div>
<button className="w-full bg-white text-black font-medium py-2.5 rounded hover:bg-zinc-200 transition-colors mt-2" type="submit">
                        Request Access
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-zinc-950 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center">
<span className="text-white font-medium text-xs">Y</span>
</div>
<span className="text-white font-medium tracking-tight text-lg uppercase">Yarehnasa</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">
                        Bridging heritage to global dominance. Penyuplai jahe terbesar dunia dengan integritas tinggi.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:brand-instagram-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:brand-linkedin-linear"></iconify-icon></a>
</div>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-medium mb-4">Kantor Pusat</h4>
<address className="not-italic text-sm text-zinc-400 space-y-3">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Jl. Dr. J. Leimena, Desa Riang, Kec. Teluk Ambon,<br/>Maluku, Indonesia.</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:Yarehnasa@gmail.com">Yarehnasa@gmail.com</a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="https://wa.me/6282122854195">+62 821-2285-4195 (WhatsApp)</a>
</div>
</address>
</div>

<div>
<h4 className="text-white font-medium mb-4">Perwakilan Global</h4>
<ul className="text-sm text-zinc-400 space-y-2">
<li>United States (C-Corp Entity)</li>
<li>Europe (Distributor)</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 w-full border border-zinc-800 py-2 rounded text-xs font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors" href="https://wa.me/6282122854195">
                        Hubungi via WhatsApp
                    </a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600 uppercase tracking-wider">© 2024 PT ESE - YAREHNASA. All rights reserved.</p>
<div className="flex gap-6 text-[10px] text-zinc-600 uppercase tracking-wider">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
