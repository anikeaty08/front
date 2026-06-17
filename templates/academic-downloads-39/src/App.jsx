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
theme: {
extend: {
colors: {
benhur: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#0046b8', /* Biru Benhur approx */
700: '#003690',
900: '#001e52',
},
unered: {
500: '#ef4444',
600: '#dc2626', /* UNEJ Red approx */
700: '#b91c1c',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



        // Initialize AOS
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });

        // Sticky Navbar Logic for extra styling
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('bg-white/95', 'bg-white/80');
            }
        });
    
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60 top-0" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-benhur-600 to-benhur-700 text-white flex items-center justify-center font-bold text-lg tracking-tighter">
                        S
                    </div>
<div className="flex flex-col">
<span className="text-benhur-900 font-semibold tracking-tight text-sm leading-none">SIKEPO</span>
<span className="text-slate-400 text-xs tracking-tight">FKEP UNEJ</span>
</div>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-slate-500 hover:text-benhur-600 px-3 py-2 text-sm font-medium transition-colors" href="#">Beranda</a>
<a className="text-benhur-600 px-3 py-2 text-sm font-medium transition-colors" href="#">Unduhan</a>
<a className="text-slate-500 hover:text-benhur-600 px-3 py-2 text-sm font-medium transition-colors" href="#footer">Kontak</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-benhur-600 focus:outline-none">
<i className="fa-solid fa-bars text-xl"></i>
</button>
</div>
</div>
</div>
</nav>

<header className="relative h-[60vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 parallax" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&amp'}}>
<div className="absolute inset-0 bg-benhur-900/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16" data-aos="fade-up" data-aos-duration="1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-benhur-500/20 border border-benhur-400/30 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-unered-500 animate-pulse"></span>
<span className="text-benhur-50 text-xs font-medium tracking-wide uppercase">Pusat Layanan Akademik</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4 leading-tight">
                Dokumen &amp; Unduhan
            </h1>
<p className="text-lg text-benhur-100 max-w-2xl mx-auto font-light leading-relaxed">
                Akses cepat ke seluruh formulir, surat keterangan, dan lisensi zoom untuk Dosen dan Mahasiswa Fakultas Keperawatan Universitas Jember.
            </p>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 mb-8 flex items-center gap-4 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
<i className="fa-solid fa-magnifying-glass text-slate-400 ml-3"></i>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-600 placeholder:text-slate-400 h-10 outline-none" placeholder="Cari dokumen..." type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-benhur-200 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="fa-solid fa-building-columns text-6xl text-benhur-600"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-benhur-50 flex items-center justify-center mb-4 text-benhur-600 group-hover:bg-benhur-600 group-hover:text-white transition-colors">
<i className="fa-solid fa-file-contract text-xl"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-benhur-700">SK Aktif Kuliah PNS</h3>
<p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Surat Keterangan aktif kuliah khusus bagi mahasiswa berstatus Pegawai Negeri Sipil.</p>
<a className="inline-flex items-center text-xs font-semibold text-benhur-600 uppercase tracking-wide hover:gap-2 transition-all gap-1" href="#">
                    Unduh Dokumen <i className="fa-solid fa-arrow-right ml-1"></i>
</a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-benhur-200 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="150">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="fa-solid fa-user-graduate text-6xl text-benhur-600"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-benhur-50 flex items-center justify-center mb-4 text-benhur-600 group-hover:bg-benhur-600 group-hover:text-white transition-colors">
<i className="fa-regular fa-file-lines text-xl"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-benhur-700">SK Aktif Kuliah Non PNS</h3>
<p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Surat Keterangan aktif kuliah reguler untuk keperluan administrasi umum.</p>
<a className="inline-flex items-center text-xs font-semibold text-benhur-600 uppercase tracking-wide hover:gap-2 transition-all gap-1" href="#">
                    Unduh Dokumen <i className="fa-solid fa-arrow-right ml-1"></i>
</a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-benhur-200 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="fa-solid fa-award text-6xl text-amber-500"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="fa-solid fa-medal text-xl"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-benhur-700">Verifikasi SKPI</h3>
<p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Formulir verifikasi Surat Keterangan Pendamping Ijazah (SKPI).</p>
<a className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-benhur-600 uppercase tracking-wide hover:gap-2 transition-all gap-1" href="#">
                    Unduh Dokumen <i className="fa-solid fa-arrow-right ml-1"></i>
</a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-benhur-200 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="250">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="fa-solid fa-hand-holding-dollar text-6xl text-emerald-600"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<i className="fa-solid fa-stamp text-xl"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-benhur-700">Form Tidak Menerima Beasiswa</h3>
<p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Surat pernyataan tidak sedang menerima beasiswa dari pihak lain.</p>
<a className="inline-flex items-center text-xs font-semibold text-emerald-600 uppercase tracking-wide hover:gap-2 transition-all gap-1" href="#">
                    Buka Formulir <i className="fa-solid fa-arrow-right ml-1"></i>
</a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-benhur-200 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="fa-solid fa-video text-xl"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-benhur-700">Form Zoom Mahasiswa</h3>
<p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Pengajuan peminjaman akun Zoom berlisensi untuk kegiatan kemahasiswaan.</p>
<div className="flex gap-3">
<a className="flex-1 py-2 text-center rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-benhur-600 hover:text-white transition-colors" href="#">Formulir</a>
<a className="flex-1 py-2 text-center rounded-md border border-slate-200 text-xs font-medium text-slate-500 hover:border-benhur-600 hover:text-benhur-600 transition-colors" href="#">Lisensi</a>
</div>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-benhur-200 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="350">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
<i className="fa-solid fa-chalkboard-user text-xl"></i>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-benhur-700">Form Zoom Dosen</h3>
<p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">Pengajuan peminjaman akun Zoom berlisensi untuk kegiatan perkuliahan/dosen.</p>
<div className="flex gap-3">
<a className="flex-1 py-2 text-center rounded-md bg-slate-100 text-xs font-medium text-slate-600 hover:bg-benhur-600 hover:text-white transition-colors" href="#">Formulir</a>
<a className="flex-1 py-2 text-center rounded-md border border-slate-200 text-xs font-medium text-slate-500 hover:border-benhur-600 hover:text-benhur-600 transition-colors" href="#">Lisensi</a>
</div>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-unered-200 transition-all duration-300 relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-3" data-aos="fade-up" data-aos-delay="400">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="fa-solid fa-calendar-check text-8xl text-unered-600"></i>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 shrink-0 rounded-lg bg-unered-50 flex items-center justify-center text-unered-600 group-hover:bg-unered-600 group-hover:text-white transition-colors">
<i className="fa-solid fa-check-to-slot text-2xl"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-800 tracking-tight mb-2 group-hover:text-unered-600">Persetujuan Kegiatan</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed max-w-2xl">
                            Dokumen persetujuan untuk pelaksanaan kegiatan di lingkungan Fakultas Keperawatan. 
                            Pastikan anda telah melengkapi prasyarat sebelum mengunduh atau mengisi formulir ini.
                        </p>
</div>
<div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
<a className="flex-1 md:flex-none px-6 py-2.5 text-center rounded-md bg-unered-600 text-white text-xs font-semibold hover:bg-unered-700 transition-colors shadow-sm" href="#">
<i className="fa-solid fa-pen-to-square mr-2"></i>Isi Formulir
                        </a>
<a className="flex-1 md:flex-none px-6 py-2.5 text-center rounded-md border border-slate-200 text-slate-600 text-xs font-semibold hover:border-unered-600 hover:text-unered-600 transition-colors" href="#">
<i className="fa-solid fa-download mr-2"></i>Unduh Dokumen
                        </a>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400 font-light text-sm" id="footer">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded bg-gradient-to-br from-benhur-600 to-benhur-700 text-white flex items-center justify-center font-bold text-xl tracking-tighter">
                            S
                        </div>
<div className="flex flex-col">
<span className="text-white font-semibold tracking-tight leading-none">SIKEPO</span>
<span className="text-slate-500 text-xs tracking-tight">FKEP UNEJ</span>
</div>
</div>
<p className="leading-relaxed mb-6 text-slate-500">
                        Sistem Informasi Keperawatan Online. Mitra Fakultas Keperawatan Universitas Jember dalam digitalisasi layanan akademik.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-benhur-600 hover:text-white transition-colors" href="#"><i className="fa-brands fa-instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-benhur-600 hover:text-white transition-colors" href="#"><i className="fa-brands fa-youtube"></i></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-benhur-600 hover:text-white transition-colors" href="#"><i className="fa-solid fa-globe"></i></a>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4 tracking-tight">Alamat Kantor</h4>
<address className="not-italic leading-relaxed text-slate-500">
                        Jl. Kalimantan No. 37,<br/>
                        Kampus Tegalboto,<br/>
                        Jember, Jawa Timur 68121
                    </address>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4 tracking-tight">Hubungi Kami</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<i className="fa-solid fa-phone text-benhur-600 text-xs"></i>
<span>(0331) 323450</span>
</li>
<li className="flex items-center gap-3">
<i className="fa-solid fa-envelope text-benhur-600 text-xs"></i>
<a className="hover:text-benhur-500 transition-colors" href="mailto:humas_fkep@unej.ac.id">humas_fkep@unej.ac.id</a>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4 tracking-tight">Jam Operasional</h4>
<ul className="space-y-2 text-slate-500">
<li className="flex justify-between border-b border-slate-800 pb-2">
<span>Senin - Kamis</span>
<span className="text-slate-300">07.30 - 16.00</span>
</li>
<li className="flex justify-between border-b border-slate-800 pb-2">
<span>Jumat</span>
<span className="text-slate-300">07.30 - 16.30</span>
</li>
<li className="flex justify-between pt-2">
<span>Sabtu - Minggu</span>
<span className="text-unered-500">Tutup</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 Fakultas Keperawatan Universitas Jember. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
