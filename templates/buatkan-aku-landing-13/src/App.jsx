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
      
tailwind.config = {
darkMode: 'class',
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.setAttribute('icon', isDark ? 'solar:sun-linear' : 'solar:moon-linear');
            }
        }
    
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-opacity duration-500">
<div className="absolute top-0 -left-10 w-[500px] h-[500px] bg-blue-200 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
<div className="absolute top-0 -right-10 w-[500px] h-[500px] bg-purple-200 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-pink-200 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-300">
<div className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-colors duration-300">
<a className="text-xl font-semibold tracking-tighter text-slate-900 dark:text-white uppercase transition-colors" href="#">SMPK</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#about">Cerita Kami</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#products">Koleksi</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2 sm:gap-4">
<button className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center justify-center" onclick="toggleTheme()">
<iconify-icon height="20" icon="solar:moon-linear" id="theme-icon" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center justify-center relative">
<iconify-icon height="20" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>
</div>
</div>
</header>
<main className="pt-32 pb-16">

<section className="max-w-6xl mx-auto px-4 md:px-8 min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1 space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Koleksi Generasi Baru Telah Hadir
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors">
                    Kenyamanan <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Tanpa Batas.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-300 font-light max-w-md leading-relaxed transition-colors">
                    Didesain ulang dari nol. Menggunakan material micro-modal breathable yang terasa seperti kulit kedua. Bebas gerah, sepanjang hari.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#products">
                        Lihat Koleksi
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-full glass-card text-slate-900 dark:text-white text-sm font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-all" href="#about">
                        Pelajari Teknologi Kami
                    </a>
</div>
</div>
<div className="flex-1 w-full max-w-lg relative z-10 flex justify-center items-center">

<div className="relative w-full aspect-square flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-white/40 dark:from-white/5 to-transparent rounded-full filter blur-2xl transition-colors"></div>
<svg className="w-full h-full animate-float drop-shadow-2xl relative z-10" viewbox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">

<path d="M 40 70 C 100 80 140 80 200 70 C 210 110 200 160 160 190 C 120 220 120 220 80 190 C 40 160 30 110 40 70 Z" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2" style={{backdropFilter: 'blur(12px)'}}></path>

<path d="M 40 70 C 100 85 140 85 200 70" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 40 70 C 100 85 140 85 200 70" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeLinecap="round" strokeWidth="12"></path>

<path d="M 80 190 C 100 150 140 150 160 190" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M 120 85 L 120 140" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 md:px-8 py-24 relative z-10" id="about">
<div className="glass-card rounded-[2rem] p-8 md:p-12 text-center space-y-6 transition-colors duration-300">
<iconify-icon className="text-blue-500 dark:text-blue-400 mx-auto transition-colors" height="40" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">Mendefinisikan Ulang Dasar.</h2>
<p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto transition-colors">
                    Kami percaya bahwa pakaian pertama yang Anda kenakan harus menjadi yang paling nyaman. Dibuat dengan presisi di studio kami, memadukan serat alami dengan teknologi rajutan tanpa jahitan untuk memberikan sirkulasi udara maksimal.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/40 dark:border-white/10 transition-colors">
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">99%</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Breathable</p>
</div>
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">0</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Jahitan Kasar</p>
</div>
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">24h</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Kenyamanan</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 md:px-8 py-24 relative z-10" id="products">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2 transition-colors">Koleksi Esensial</h2>
<p className="text-slate-600 dark:text-slate-300 font-light transition-colors">Pilih tingkat kenyamanan Anda.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-[2rem] p-4 group hover:-translate-y-1 transition-all duration-300">
<div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-white/60 to-white/20 dark:from-white/10 dark:to-transparent mb-6 flex items-center justify-center relative overflow-hidden transition-colors">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500" height="64" icon="solar:box-minimalistic-linear" width="64"></iconify-icon>
<div className="absolute top-4 left-4 px-2.5 py-1 glass-card rounded-full text-[10px] font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider transition-colors">Terlaris</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors">The Classic Brief</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-1 mb-4 transition-colors">Potongan abadi, support maksimal.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900 dark:text-white transition-colors">Rp 149.000</span>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass-card rounded-[2rem] p-4 group hover:-translate-y-1 transition-all duration-300">
<div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 mb-6 flex items-center justify-center relative overflow-hidden transition-colors">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500" height="64" icon="solar:layers-linear" width="64"></iconify-icon>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors">Air Trunk</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-1 mb-4 transition-colors">Lebih panjang, untuk aktivitas dinamis.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900 dark:text-white transition-colors">Rp 169.000</span>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass-card rounded-[2rem] p-4 group hover:-translate-y-1 transition-all duration-300">
<div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-slate-100/50 to-white/20 dark:from-slate-800/50 dark:to-transparent mb-6 flex items-center justify-center relative overflow-hidden transition-colors">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500" height="64" icon="solar:magic-stick-3-linear" width="64"></iconify-icon>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors">Invisible Boxer</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-1 mb-4 transition-colors">Tanpa lipatan di balik celana bahan.</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900 dark:text-white transition-colors">Rp 189.000</span>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 md:px-8 py-24 relative z-10 overflow-hidden">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 dark:text-white mb-12 transition-colors">Apa Kata Mereka</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card rounded-[2rem] p-6 space-y-4 transition-colors duration-300">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 dark:text-slate-300 font-light text-sm leading-relaxed transition-colors">
                        "Saya belum pernah merasakan bahan yang selembut ini. Rasanya benar-benar seperti tidak memakai apa-apa. Sangat direkomendasikan untuk dipakai kerja seharian."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/30 dark:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-xs font-semibold text-blue-600 dark:text-blue-400 transition-colors">RA</div>
<div>
<p className="text-xs font-medium text-slate-900 dark:text-white transition-colors">Reza A.</p>
<p className="text-[10px] text-slate-500 dark:text-slate-400 transition-colors">Pembeli Terverifikasi</p>
</div>
</div>
</div>
<div className="glass-card rounded-[2rem] p-6 space-y-4 transition-colors duration-300">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 dark:text-slate-300 font-light text-sm leading-relaxed transition-colors">
                        "Desainnya minimalis dan karet pinggangnya tidak bikin gatal atau berbekas sama sekali. Akhirnya nemu merk lokal dengan kualitas sekelas brand luar."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/30 dark:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400 transition-colors">DW</div>
<div>
<p className="text-xs font-medium text-slate-900 dark:text-white transition-colors">Dimas W.</p>
<p className="text-[10px] text-slate-500 dark:text-slate-400 transition-colors">Pembeli Terverifikasi</p>
</div>
</div>
</div>
<div className="glass-card rounded-[2rem] p-6 space-y-4 transition-colors duration-300">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 dark:text-slate-300 font-light text-sm leading-relaxed transition-colors">
                        "Teknologi breathablenya bukan gimmick. Dipakai untuk lari pagi tetap nyaman dan tidak lembab. Langsung checkout 3 pcs lagi untuk cadangan."
                    </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/30 dark:border-white/10 transition-colors">
<div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-xs font-semibold text-green-600 dark:text-green-400 transition-colors">BS</div>
<div>
<p className="text-xs font-medium text-slate-900 dark:text-white transition-colors">Budi S.</p>
<p className="text-[10px] text-slate-500 dark:text-slate-400 transition-colors">Pembeli Terverifikasi</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 md:px-8 py-24 relative z-10" id="faq">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 dark:text-white mb-12 transition-colors">Pertanyaan Umum</h2>
<div className="space-y-4">
<details className="group glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300" open="">
<summary className="font-medium text-slate-900 dark:text-white flex justify-between items-center text-sm md:text-base outline-none transition-colors">
                        Material apa yang digunakan?
                        <iconify-icon className="text-slate-400 dark:text-slate-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="mt-4 text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed border-t border-white/30 dark:border-white/10 pt-4 transition-colors">
                        Kami menggunakan campuran 90% Micro-Modal organik dan 10% Elastane. Material ini dikenal 3x lebih lembut dari katun biasa dan memiliki sirkulasi udara yang jauh lebih baik untuk mencegah kelembaban.
                    </div>
</details>
<details className="group glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300">
<summary className="font-medium text-slate-900 dark:text-white flex justify-between items-center text-sm md:text-base outline-none transition-colors">
                        Bagaimana cara merawatnya agar awet?
                        <iconify-icon className="text-slate-400 dark:text-slate-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="mt-4 text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed border-t border-white/30 dark:border-white/10 pt-4 transition-colors">
                        Cuci dengan mesin menggunakan air dingin dan putaran lembut. Hindari penggunaan pemutih dan pelembut kain. Sebaiknya dijemur di tempat teduh dan jangan disetrika.
                    </div>
</details>
<details className="group glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300">
<summary className="font-medium text-slate-900 dark:text-white flex justify-between items-center text-sm md:text-base outline-none transition-colors">
                        Apakah ada garansi tukar ukuran?
                        <iconify-icon className="text-slate-400 dark:text-slate-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="mt-4 text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed border-t border-white/30 dark:border-white/10 pt-4 transition-colors">
                        Tentu, kami memiliki kebijakan "First Try Guarantee". Jika ukuran pada pesanan pertama Anda tidak pas, kami akan mengirimkan ukuran baru secara gratis tanpa perlu mengembalikan barang yang sudah dicoba.
                    </div>
</details>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 md:px-8 py-24 relative z-10">
<div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden transition-colors duration-300">

<div className="absolute inset-0 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none transition-colors"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 relative z-10 transition-colors">Tingkatkan Standar Anda.</h2>
<p className="text-slate-600 dark:text-slate-300 font-light text-lg mb-10 max-w-xl mx-auto relative z-10 transition-colors">
                    Mulai hari Anda dengan pondasi yang tepat. Pesan sekarang dan rasakan perbedaan kenyamanan premium yang sesungguhnya.
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-xl hover:-translate-y-1 relative z-10" href="#products">
                    Belanja Sekarang
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-6 text-xs text-slate-500 dark:text-slate-400 font-medium relative z-10 transition-colors">Gratis ongkir untuk pesanan di atas Rp 300.000</p>
</div>
</section>
</main>

<footer className="relative z-10 px-4 md:px-8 pb-8 pt-12 border-t border-white/40 dark:border-white/10 bg-white/10 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="space-y-4">
<a className="text-2xl font-semibold tracking-tighter text-slate-900 dark:text-white uppercase transition-colors" href="#">SMPK</a>
<p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xs transition-colors">
                    Inovasi pakaian dalam pria. Didesain untuk performa, dirancang untuk kenyamanan.
                </p>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900 dark:text-white mb-4 transition-colors">Toko</h4>
<ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-light">
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Semua Produk</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Bundles (Hemat 15%)</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Panduan Ukuran</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900 dark:text-white mb-4 transition-colors">Bantuan</h4>
<ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-light">
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Pengiriman &amp; Pengembalian</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Hubungi Kami</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900 dark:text-white mb-4 transition-colors">Sosial</h4>
<div className="flex gap-4 text-slate-600 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors p-2 glass-card rounded-full flex" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors p-2 glass-card rounded-full flex" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/40 dark:border-white/10 text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wide uppercase transition-colors">
<p>© 2023 SMPK. Semua Hak Dilindungi.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors" href="#">Privasi</a>
<a className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors" href="#">Ketentuan</a>
</div>
</div>
</footer>


    </>
  );
}
