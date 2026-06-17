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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
dark: '#050505',
card: '#0A0A0A',
},
backgroundImage: {
'glow': 'radial-gradient(circle at center, rgba(120, 119, 198, 0.15) 0%, transparent 50%)',
}
}
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
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-glow z-0 pointer-events-none opacity-60"></div>

<nav className="fixed top-0 w-full z-50 border-b bg-dark/80 backdrop-blur-md border-white/5">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
<span className="text-sm font-semibold tracking-tight text-white">THE METHOD DLB</span>
</div>
<a className="text-sm font-medium transition-colors text-neutral-400 hover:text-white" href="#waiting-list">Join Waiting List</a>
</div>
</nav>

<section className="text-center max-w-5xl z-10 mr-auto ml-auto pt-36 pr-6 pb-24 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm mb-10 border-white/10 bg-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">New Cohort Opening Soon</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tighter mb-8 text-white">Bisnis sukses bukan dengan <br className="hidden md:block"/> <span className="text-neutral-500">mengejar customer.</span></h1>
<p className="md:text-2xl leading-relaxed text-xl font-light max-w-3xl mr-auto mb-12 ml-auto text-neutral-400">
            Jadilah bisnis yang <span className="font-medium text-white">Oversubscribed</span>. Ciptakan antrian di mana permintaan melebihi kapasitas, harga terus naik, dan profit menjadi maksimal.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="transition-colors flex cursor-pointer text-base font-semibold h-12 rounded-full pr-8 pl-8 gap-x-2 gap-y-2 items-center hover:bg-neutral-200 text-black bg-white" onclick="window.location.href='https://subkhiblog.com'" role="button">
                Join Waiting List
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="transition-colors text-base font-semibold h-12 border rounded-full pr-8 pl-8 hover:bg-white/5 text-neutral-300 border-white/10">Pelajari Prinsipnya</button>
</div>
</section>

<section className="z-10 border-y pt-24 pr-6 pb-24 pl-6 relative border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Prinsip 1: The Economics of Demand</h2>
<p className="mb-8 text-lg leading-relaxed text-neutral-400">
                        Hanya bisnis yang oversubscribed yang benar-benar profit. Ketika Supply &gt; Demand, Anda rugi. Ketika Demand &gt; Supply, profit ditoleransi dan harga menjadi irrelevan.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-5 p-5 rounded-xl border border-cyan-900/20 bg-cyan-900/5">
<svg className="text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="M12 2v20"></path><path d="m12 6 5 5H7l5-5Z"></path></svg>
<div>
<h4 className="text-base font-semibold text-white">Maskapai (Low Margin)</h4>
<p className="text-sm text-neutral-400 mt-1.5">Risiko tinggi, operasional mahal, margin 3-7%. Tidak oversubscribed. Tiket selalu tersedia.</p>
</div>
</div>
<div className="flex items-start gap-5 p-5 rounded-xl border border-blue-900/20 bg-blue-900/5">
<svg className="text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<div>
<h4 className="text-base font-semibold text-white">Rolex (High Margin)</h4>
<p className="text-sm text-neutral-400 mt-1.5">Produk sama puluhan tahun, inovasi minim. Tensi demand vs supply diciptakan. Harga terus naik.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[340px] border rounded-2xl p-10 flex flex-col justify-center items-center text-center border-white/10 bg-neutral-900/50">
<div className="text-sm font-semibold text-neutral-500 mb-3 tracking-widest uppercase">The Goal</div>
<div className="text-4xl md:text-5xl font-semibold mb-3 text-white tracking-tight">Demand &gt; Capacity</div>
<div className="text-blue-500 text-base font-semibold mb-10">Profit Ditoleransi</div>
<div className="w-full max-w-sm space-y-4">
<div className="flex justify-between text-sm text-neutral-400 font-medium">
<span>Capacity (5 Clients)</span>
<span>Demand (10 Clients)</span>
</div>
<div className="h-3 w-full rounded-full overflow-hidden bg-neutral-800">
<div className="h-full w-1/2 relative bg-neutral-700">
<div className="absolute inset-0 animate-pulse bg-white/10"></div>
</div>
<div className="h-full bg-blue-500 w-1/2 ml-auto -mt-3 opacity-0"></div>
</div>
<p className="text-sm text-neutral-500 italic">"Mereka bidding sampai harga naik."</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 px-6 max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">Menciptakan "Your People"</h2>
<p className="max-w-2xl mx-auto text-lg text-neutral-400">
                Hanya kelompok kecil yang penting. Ubah orang asing menjadi fans loyal yang mengabaikan kompetitor dengan metode 7-11-4.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group border rounded-2xl p-10 transition duration-300 border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50">
<div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:text-indigo-300 transition-colors text-indigo-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 text-white">11 Kontak</h3>
<p className="text-base leading-relaxed text-neutral-400">
                    Seseorang butuh melihat Anda 11 kali untuk benar-benar <span className="text-white font-medium">notice</span> keberadaan Anda. Pecah 1 konten panjang menjadi 11 potongan pendek.
                </p>
</div>

<div className="group border rounded-2xl p-10 transition duration-300 border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50">
<div className="flex group-hover:text-indigo-300 transition-colors bg-indigo-500/10 w-12 h-12 rounded-xl mb-8 items-center justify-center text-indigo-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 text-white">7 Jam Waktu</h3>
<p className="text-base leading-relaxed text-neutral-400">
                    Butuh 7 jam konsumsi konten (video, podcast, webinar) agar mereka merasa <span className="text-white font-medium">kenal &amp; percaya</span>. Ini menciptakan kedekatan emosional.
                </p>
</div>

<div className="group border rounded-2xl p-10 transition duration-300 border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50">
<div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:text-indigo-300 transition-colors text-indigo-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 text-white">4 Platform</h3>
<p className="text-base leading-relaxed text-neutral-400">
                    Muncul di 4 tempat berbeda (YouTube, IG, Email, Blog) agar Anda dianggap <span className="text-white font-medium">relevan &amp; bonafide</span>. Ubah stranger menjadi "7-Eleven-Ford".
                </p>
</div>
</div>
</section>

<section className="relative z-10 py-28 bg-card border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16">
<span className="text-sm font-semibold tracking-wider uppercase text-indigo-400">Prinsip 3</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 mb-8 text-white">First Make Your Market,<br/>Then Make Your Sales</h2>
<div className="h-0.5 w-24 bg-indigo-500/50"></div>
</div>
<div className="rounded-2xl border overflow-hidden bg-neutral-900 border-white/10 shadow-2xl">
<div className="grid md:grid-cols-5 min-h-[400px]">
<div className="md:col-span-2 p-10 border-r flex flex-col justify-center bg-neutral-800/50 border-white/5">
<h3 className="text-xl font-semibold mb-3 text-white">The Glastonbury Effect</h3>
<p className="text-base text-neutral-400">364 Hari: Signal Collection.</p>
<p className="text-base mb-6 text-neutral-400">1 Hari: Sales.</p>
<div className="flex items-center gap-3 text-sm font-medium text-neutral-500">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            750k Registrasi vs 136k Tiket
                        </div>
</div>
<div className="md:col-span-3 p-10 flex flex-col justify-center">
<h4 className="text-lg font-semibold mb-6 text-white">Implementasi Bisnis Anda</h4>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-0.5 text-indigo-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div>
<p className="text-base font-medium text-neutral-200">Signal Collection</p>
<p className="text-sm text-neutral-500 mt-1">Kumpulkan sinyal minat dulu (Waiting list, form aplikasi) sebelum jualan.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-0.5 text-indigo-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div>
<p className="text-base font-medium text-neutral-200">Official Capacity</p>
<p className="text-sm text-neutral-500 mt-1">Umumkan kapasitas resmi (misal: hanya 5 klien/tahun).</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-0.5 text-indigo-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div>
<p className="text-base font-medium text-neutral-200">Transparency</p>
<p className="text-sm text-neutral-500 mt-1">Tunjukkan jumlah peminat vs kapasitas yang tersedia untuk validasi sosial.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 px-6 max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-center tracking-tight mb-20 text-white">Orang Beli Saat Kondisinya Tepat</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="relative p-8 rounded-2xl border bg-neutral-900 border-white/5">
<div className="absolute -top-3.5 left-8 px-4 py-1.5 border rounded-full text-xs font-semibold bg-neutral-800 border-white/10 text-white uppercase tracking-wider">Logic</div>
<p className="text-base mt-6 text-neutral-400 leading-relaxed">Alasan rasional yang bisa ditulis di spreadsheet. Store of value, ROI, harga jual kembali.</p>
<div className="mt-6 pt-6 border-t flex items-center gap-3 text-sm font-medium text-neutral-500 border-white/5">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="9" x2="9" y1="9" y2="21"></line><line x1="15" x2="15" y1="9" y2="21"></line></svg>
                    Spreadsheet friendly
                </div>
</div>
<div className="relative p-8 rounded-2xl border shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)] border-indigo-500/30 bg-neutral-900 border-white/5">
<div className="absolute -top-3.5 left-8 px-4 py-1.5 border rounded-full text-xs font-semibold bg-indigo-600 border-indigo-400/50 text-white uppercase tracking-wider">The Sweet Spot</div>
<p className="text-base mt-6 text-center font-medium text-neutral-200 leading-relaxed">
                    Saat Logic, Emotion, dan Urgency selaras, katakan: "Ini saatnya membeli."
                </p>
</div>
<div className="relative p-8 rounded-2xl border bg-neutral-900 border-white/5">
<div className="absolute -top-3.5 left-8 px-4 py-1.5 border rounded-full text-xs font-semibold bg-neutral-800 border-white/10 text-white uppercase tracking-wider">Emotion</div>
<p className="text-base mt-6 text-neutral-400 leading-relaxed">"Film di kepala" customer. Status, simbol sukses, kebahagiaan tim, celebration.</p>
<div className="mt-6 pt-6 border-t flex items-center gap-3 text-sm font-medium text-neutral-500 border-white/5">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    Feeling based
                </div>
</div>
<div className="md:col-span-3 p-8 rounded-2xl bg-gradient-to-r border flex flex-col md:flex-row items-center justify-between gap-6 from-neutral-900 to-neutral-800 border-white/5">
<div className="flex items-center gap-6">
<div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.1.5-3z"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-white">Urgency (FOMO)</h4>
<p className="text-sm text-neutral-400">Takut ketinggalan. "Sinyal minat jauh lebih banyak dari kapasitas."</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-20">

<div className="flex gap-8">
<div className="flex-shrink-0 mt-1">
<div className="h-10 w-10 rounded-lg flex items-center justify-center font-serif text-base bg-neutral-800 text-white font-semibold">5</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-3 text-white">Berani Berbeda &amp; Buat Aturan Main</h3>
<p className="text-base leading-relaxed mb-4 text-neutral-400">
                        Jika Anda melakukan hal yang sama seperti orang lain, hasilnya akan biasa. Anda berhak menentukan jam kerja, pre-register, atau menolak klien yang tidak cocok. Ini justru meningkatkan kompetensi di mata klien.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg> "Saya tidak kerja malam/subuh"</li>
<li className="flex items-center gap-2"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> "Isi aplikasi dulu sebelum meeting"</li>
</ul>
</div>
</div>

<div className="flex gap-8">
<div className="flex-shrink-0 mt-1">
<div className="h-10 w-10 rounded-lg flex items-center justify-center font-serif text-base bg-neutral-800 text-white font-semibold">6</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-3 text-white">Value dari Ekosistem, Bukan 1 Produk</h3>
<p className="text-base leading-relaxed mb-4 text-neutral-400">
                        Produk mudah ditiru, ekosistem tidak. Value datang dari kombinasi konten, produk, layanan, dan komunitas. Berikan edukasi gratis, jual implementasi.
                    </p>
</div>
</div>

<div className="flex gap-8">
<div className="flex-shrink-0 mt-1">
<div className="h-10 w-10 rounded-lg flex items-center justify-center font-serif text-base bg-neutral-800 text-white font-semibold">7</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-3 text-white">Temui Customer di Tempat Mereka</h3>
<p className="text-base leading-relaxed mb-4 text-neutral-400">
                        Jangan hanya expert teknis, jadilah expert dalam memahami customer. Pakai bahasa mereka, pahami frustrasi "pemula" mereka. Empati dulu, baru edukasi. Jemput mereka di posisi mereka saat ini.
                    </p>
</div>
</div>

<div className="flex gap-8">
<div className="flex-shrink-0 mt-1">
<div className="h-10 w-10 rounded-lg flex items-center justify-center font-serif text-base bg-neutral-800 text-white font-semibold">8</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-3 text-white">Positively Remarkable</h3>
<p className="text-base leading-relaxed mb-4 text-neutral-400">
                        Buat orang membicarakan Anda. Perlakukan customer seperti selebriti. Buat bisnis Anda "social media friendly". Jadilah <i>Key Person of Influence</i> yang memiliki signature ideas.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-28 px-6 max-w-5xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">The Campaign Driven Enterprise</h2>
<p className="text-lg text-neutral-400">Bisnis adalah serangkaian campaign yang berputar.</p>
</div>
<div className="relative border-l ml-4 md:ml-0 md:pl-10 space-y-16 border-neutral-800">

<div className="relative pl-10 md:pl-0">
<div className="absolute -left-1.5 top-2.5 h-3 w-3 rounded-full border bg-neutral-600 border-neutral-900"></div>
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Weekly</span>
<h3 className="text-xl font-semibold text-white mt-1">Perfect Repeatable Week</h3>
</div>
<div className="md:col-span-3">
<p className="text-base mb-4 text-neutral-400">Sistem rutin untuk menghasilkan leads &amp; sales stabil. Jangan gonta-ganti cara tiap minggu.</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1.5 border rounded text-xs font-medium text-neutral-400 bg-neutral-900 border-white/10">Scorecard</span>
<span className="px-3 py-1.5 border rounded text-xs font-medium text-neutral-400 bg-neutral-900 border-white/10">Webinar Intro</span>
<span className="px-3 py-1.5 border rounded text-xs font-medium text-neutral-400 bg-neutral-900 border-white/10">Routine Ads</span>
</div>
</div>
</div>
</div>

<div className="relative pl-10 md:pl-0">
<div className="absolute -left-1.5 top-2.5 h-3 w-3 rounded-full border shadow-[0_0_12px_white] bg-white border-neutral-900"></div>
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Quarterly (90 Days)</span>
<h3 className="text-xl font-semibold text-white mt-1">Spotlight Campaign</h3>
</div>
<div className="md:col-span-3">
<p className="text-base mb-4 text-neutral-400">Momen besar untuk lonjakan sales. Orang "memantul" antara rutinitas mingguan dan campaign besar ini.</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1.5 border rounded text-xs font-medium text-neutral-400 bg-neutral-900 border-white/10">Product Launch</span>
<span className="px-3 py-1.5 border rounded text-xs font-medium text-neutral-400 bg-neutral-900 border-white/10">Special Event</span>
<span className="px-3 py-1.5 border rounded text-xs font-medium text-neutral-400 bg-neutral-900 border-white/10">Collaboration</span>
</div>
</div>
</div>
</div>

<div className="relative pl-10 md:pl-0">
<div className="absolute -left-1.5 top-2.5 h-3 w-3 rounded-full border bg-neutral-600 border-neutral-900"></div>
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Annual</span>
<h3 className="text-xl font-semibold text-white mt-1">Big Message / Cloud Cover</h3>
</div>
<div className="md:col-span-3">
<p className="text-base mb-4 text-neutral-400">Arus konten 7-11-4 sepanjang tahun. Menjadi payung brand awareness yang mengarahkan orang ke campaign lainnya.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-neutral-900/20">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

<div className="relative shrink-0 group">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
<div className="relative h-64 w-64 md:h-80 md:w-80 rounded-2xl overflow-hidden border border-white/10 bg-neutral-800 shadow-2xl rotate-2 group-hover:rotate-0 transition duration-500 ease-out">
<img alt="Subkhi - The Creator" className="w-full h-full object-cover object-top bg-neutral-800" src="https://file.rendit.io/n/uTf5h32bL8q3P1c3t8o1.png"/>
</div>
</div>

<div className="text-center md:text-left">
<div className="inline-flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-indigo-500"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">The Creator</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">Subkhi</h2>
<div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
<p>
                            "Bisnis bukan tentang siapa yang paling keras berteriak, tapi siapa yang paling didengar."
                        </p>
<p>
                            Saya membangun <span className="text-white font-medium">The Method DLB</span> untuk membantu entrepreneur keluar dari 'rat race' kompetisi harga. Fokus saya adalah mengubah bisnis komoditas menjadi brand yang memiliki authority, di mana demand selalu melebihi supply.
                        </p>
</div>
<div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors" href="https://subkhiblog.com">
                            Baca tulisan saya
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-card border-t text-center border-white/5" id="waiting-list">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-white">Think Big. Go Global.</h2>
<p className="text-xl mb-12 leading-relaxed text-neutral-400">
                Di era digital, Anda bisa menjangkau customer di seluruh dunia. <br/>
                Bangun tim campaign, berhenti kerja sendiri, dan jadikan bisnis Anda <span className="text-white font-medium">Oversubscribed</span>.
            </p>
<div className="max-w-md mx-auto p-2 rounded-full border flex items-center bg-neutral-900 border-white/10 shadow-lg">
<input className="flex-1 bg-transparent border-none px-6 text-base focus:outline-none focus:ring-0 placeholder-neutral-600 text-white" placeholder="Enter your email for access..." type="email"/>
<button className="text-sm font-semibold px-8 py-3 rounded-full transition-colors bg-white text-black hover:bg-neutral-200">
                    Join List
                </button>
</div>
<p className="text-sm mt-6 text-neutral-600">We respect your inbox. Only high-value signals.</p>
</div>
</section>
<footer className="relative z-10 py-10 text-center text-sm border-t text-neutral-600 border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p>© 2024 The Method DLB. All rights reserved.</p>
<div className="flex gap-8">
<a className="transition-colors hover:text-neutral-400" href="#">Principles</a>
<a className="transition-colors hover:text-neutral-400" href="#">Manifesto</a>
<a className="transition-colors hover:text-neutral-400" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
