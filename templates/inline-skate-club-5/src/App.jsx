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
      

<nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-2">
<i className="text-red-500 w-8 h-8" data-lucide="zap" strokeWidth="2"></i>
<span className="text-white text-xl font-semibold tracking-tight uppercase">All Star <span className="text-red-500">Skate</span></span>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Beranda</a>
<a className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#about">Tentang Kami</a>
<a className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#classes">Kelas</a>
<a className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#trainers">Pelatih</a>
</div>
</div>
<div>
<a className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-red-600/20 flex items-center gap-2" href="#join">
                        Gabung Sekarang <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="relative bg-slate-950 pt-32 pb-48 overflow-hidden clip-path-slant">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
<div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600 rounded-full blur-3xl filter"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl filter mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Pendaftaran Anggota Baru Dibuka
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    KUASAI JALANAN <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">RAIH JUARAMU</span>
</h1>
<p className="text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed">
                    Bergabunglah dengan komunitas inline skate terbesar. Dari pemula hingga pro, kami membentuk atlet tangguh dengan teknik yang presisi dan mental juara.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-red-600 hover:bg-red-500 text-white text-lg px-8 py-4 rounded-lg font-medium transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-2">
                        Jadwal Latihan
                    </button>
<button className="group bg-transparent border border-slate-700 text-white hover:border-white text-lg px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
<span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
<i className="w-4 h-4 fill-current ml-0.5" data-lucide="play"></i>
</span>
                        Lihat Video
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-slate-400">
<div>
<p className="text-3xl text-white font-semibold tracking-tight">2k+</p>
<p className="text-sm">Anggota Aktif</p>
</div>
<div className="w-px h-10 bg-slate-800"></div>
<div>
<p className="text-3xl text-white font-semibold tracking-tight">15+</p>
<p className="text-sm">Tahun Pengalaman</p>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-[400px] h-[400px] border border-red-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<img alt="Inline Skater" className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/50 mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-10 -left-10 bg-slate-900/90 backdrop-blur border border-slate-700 p-6 rounded-xl shadow-2xl z-20 max-w-xs hidden lg:block">
<div className="flex items-center gap-4 mb-3">
<div className="bg-green-500/20 p-2 rounded-full text-green-500">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Performa</p>
<p className="text-white font-medium">Meningkat 85%</p>
</div>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 w-[85%] h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-20 -mt-20 relative z-20 pb-32">
<div className="max-w-4xl mx-auto px-6 relative">
<div className="text-center mb-10 pt-10">
<span className="text-red-500 font-medium tracking-wide uppercase text-sm">Temukan Levelmu</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mt-2 tracking-tight">Cari Kelas Yang Tepat</h2>
</div>
<div className="bg-slate-950 p-8 rounded-2xl shadow-2xl border border-white/5">
<form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
<div className="space-y-2">
<label className="text-slate-400 text-sm font-medium ml-1">Nama Lengkap</label>
<input className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-slate-600" placeholder="Nama Anda" type="text"/>
</div>
<div className="space-y-2">
<label className="text-slate-400 text-sm font-medium ml-1">Umur</label>
<input className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-slate-600" placeholder="Contoh: 12" type="number"/>
</div>
<div className="space-y-2">
<label className="text-slate-400 text-sm font-medium ml-1">Skill Level</label>
<div className="relative">
<select className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all cursor-pointer">
<option>Pemula (Newbie)</option>
<option>Menengah (Intermediate)</option>
<option>Mahir (Pro)</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<button className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-lg font-medium transition-all shadow-lg shadow-red-600/20" type="button">
                            Cari Jadwal
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4 relative">
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl"></div>
<img alt="Kids Skating" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Pro Skater" className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl">
<div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white">
<i className="w-8 h-8" data-lucide="trophy"></i>
</div>
</div>
</div>

<div>
<div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
                        TENTANG KAMI
                    </div>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                        Pengalaman Melatih <br/>Atlet Juara
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Di All Star Inline Skate, kami tidak hanya mengajarkan cara bermain sepatu roda. Kami membangun karakter, kedisiplinan, dan komunitas yang suportif.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<i className="w-5 h-5" data-lucide="medal"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900">Kurikulum Berstandar Nasional</h3>
<p className="text-slate-500 mt-1 text-lg">Materi latihan yang terstruktur untuk perkembangan skill yang optimal.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900">Pelatih Bersertifikat</h3>
<p className="text-slate-500 mt-1 text-lg">Dibimbing langsung oleh atlet nasional yang berpengalaman.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center text-red-600 font-medium hover:text-red-700 text-lg group" href="#">
                            Pelajari Lebih Lanjut 
                            <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-red-600 font-semibold tracking-wide uppercase text-sm">PROSES KAMI</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mt-2 tracking-tight">Langkah Mudah Bergabung</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-300 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
<i className="w-8 h-8" data-lucide="clipboard-list"></i>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full text-white flex items-center justify-center text-sm font-bold border-4 border-white">1</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Daftar Online</h3>
<p className="text-slate-600 text-lg leading-relaxed">Isi formulir pendaftaran melalui website atau kunjungi basecamp kami.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<i className="w-8 h-8" data-lucide="activity"></i>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full text-white flex items-center justify-center text-sm font-bold border-4 border-white">2</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Latihan Intensif</h3>
<p className="text-slate-600 text-lg leading-relaxed">Ikuti jadwal latihan rutin yang disesuaikan dengan level kemampuanmu.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
<i className="w-8 h-8" data-lucide="crown"></i>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full text-white flex items-center justify-center text-sm font-bold border-4 border-white">3</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Raih Prestasi</h3>
<p className="text-slate-600 text-lg leading-relaxed">Ikuti kompetisi lokal maupun nasional dan bawa pulang medalimu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="classes">

<div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 clip-path-slant-reverse"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-red-500 font-medium tracking-wide uppercase text-sm">PILIHAN KELAS</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-white mt-2 tracking-tight">Pilih Rencana Latihanmu</h2>
</div>

<div className="bg-slate-800 p-1 rounded-lg flex items-center gap-1">
<button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium shadow-sm transition-all">Bulanan</button>
<button className="px-4 py-2 text-slate-400 hover:text-white rounded-md text-sm font-medium transition-all">Tahunan</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-red-500/50 transition-all hover:-translate-y-2 group">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-colors">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Pemula</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">Rp 350k</span>
<span className="text-slate-500 text-sm">/ bulan</span>
</div>
<p className="text-slate-400 text-sm mb-8 border-b border-slate-800 pb-8">Sempurna untuk yang baru ingin belajar berdiri dan meluncur.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-4 h-4 text-red-500" data-lucide="check"></i> 4x Latihan Sebulan
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-4 h-4 text-red-500" data-lucide="check"></i> Dasar Keseimbangan
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-4 h-4 text-red-500" data-lucide="check"></i> Peminjaman Alat
                        </li>
</ul>
<a className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg text-sm font-medium transition-colors" href="#">Pilih Paket</a>
</div>

<div className="bg-red-600 p-8 rounded-2xl transform md:-translate-y-4 shadow-2xl shadow-red-900/40 relative">
<div className="absolute top-0 right-0 bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">Terpopuler</div>
<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-6">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Regular</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">Rp 600k</span>
<span className="text-white/80 text-sm">/ bulan</span>
</div>
<p className="text-white/80 text-sm mb-8 border-b border-white/20 pb-8">Untuk yang ingin meningkatkan teknik speed dan agility.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-white rounded-full p-0.5"><i className="w-3 h-3 text-red-600" data-lucide="check"></i></div> 8x Latihan Sebulan
                        </li>
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-white rounded-full p-0.5"><i className="w-3 h-3 text-red-600" data-lucide="check"></i></div> Teknik Slalom &amp; Speed
                        </li>
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-white rounded-full p-0.5"><i className="w-3 h-3 text-red-600" data-lucide="check"></i></div> Jersey Tim Gratis
                        </li>
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-white rounded-full p-0.5"><i className="w-3 h-3 text-red-600" data-lucide="check"></i></div> Akses Kompetisi
                        </li>
</ul>
<a className="block w-full text-center bg-white text-red-600 hover:bg-slate-100 py-3 rounded-lg text-sm font-bold transition-colors" href="#">Mulai Sekarang</a>
</div>

<div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-red-500/50 transition-all hover:-translate-y-2 group">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-colors">
<i className="w-6 h-6" data-lucide="star"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Atlet Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">Rp 950k</span>
<span className="text-slate-500 text-sm">/ bulan</span>
</div>
<p className="text-slate-400 text-sm mb-8 border-b border-slate-800 pb-8">Program intensif untuk persiapan kejuaraan nasional.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-4 h-4 text-red-500" data-lucide="check"></i> Unlimited Latihan
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-4 h-4 text-red-500" data-lucide="check"></i> Private Coaching
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-4 h-4 text-red-500" data-lucide="check"></i> Konsultasi Nutrisi
                        </li>
</ul>
<a className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg text-sm font-medium transition-colors" href="#">Pilih Paket</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-4">
<i className="text-red-600 w-6 h-6" data-lucide="zap"></i>
<span className="text-white text-lg font-bold tracking-tight uppercase">All Star</span>
</div>
<p className="text-sm leading-relaxed">Membangun generasi atlet sepatu roda yang tangguh, disiplin, dan berprestasi di kancah nasional.</p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Menu Cepat</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-red-500 transition-colors" href="#">Tentang Kami</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Jadwal Latihan</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Galeri Foto</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Berita &amp; Event</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="map-pin"></i>
<span>GOR Velodrome, Jakarta Timur<br/>Indonesia</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="phone"></i>
<span>+62 812 3456 7890</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-600 shrink-0" data-lucide="mail"></i>
<span>join@allstarskate.id</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Berlangganan</h4>
<p className="text-sm mb-4">Dapatkan info jadwal dan promo terbaru.</p>
<div className="flex gap-2">
<input className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg w-full text-sm focus:outline-none focus:ring-1 focus:ring-red-600" placeholder="Email Anda" type="email"/>
<button className="bg-red-600 hover:bg-red-500 px-3 rounded-lg text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 All Star Inline Skate Club. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
