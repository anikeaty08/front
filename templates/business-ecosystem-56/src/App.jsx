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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        function submitProjectForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.textContent = 'Memproses...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'PERTANYAAN TERKIRIM';
                // Changed success color to silver/grey theme
                btn.style.backgroundColor = '#e5e5e5';
                btn.style.color = '#000000';
                status.classList.remove('hidden');
                status.innerHTML = '<span class="text-neutral-300">Terima kasih. Tim kami akan segera menghubungi Anda.</span>';
                e.target.reset();
            }, 1500);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>

<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/95 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-white"></div>
<span className="text-sm font-medium tracking-tight text-white">CSI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">TENTANG</a>
<a className="hover:text-white transition-colors" href="#services">LAYANAN</a>
<a className="hover:text-white transition-colors" href="#ecosystem">EKOSISTEM</a>
</div>
<a className="text-xs font-medium border border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-2 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-2 rounded-sm" href="#contact">

<span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
<span className="hidden sm:inline">Login Mitra</span>
<span className="sm:hidden">Masuk</span>
</a>
</div>
</nav>

<main className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-800 border-l pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-neutral-950 border border-neutral-800"></div>
<div aria-hidden="true" className="absolute -left-[5px] bottom-0 w-[9px] h-[9px] bg-neutral-950 border border-neutral-800"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 border border-neutral-800 rounded-full animate-in animate-in-delay-1">
<span className="relative flex h-2 w-2">

<span className="absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>

<span className="text-[10px] font-medium text-neutral-300 uppercase tracking-wide">Ekosistem Bisnis Terpusat</span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-white tracking-tighter">
                Ruang. Layanan. <br/> <span className="text-neutral-500">Pertumbuhan Bisnis.</span>
</h1>
<p className="max-w-xl text-neutral-400 text-sm md:text-base leading-relaxed font-light animate-in animate-in-delay-2">
                CSI adalah infrastruktur lengkap untuk bisnis Anda. Mulai dari sewa kantor fleksibel hingga kepatuhan hukum berizin dan akselerasi digital. Satu ekosistem untuk Founder, UKM, dan Korporasi.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">
<a className="text-center px-6 py-3.5 bg-white text-black text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto rounded-sm" href="#contact">
                    JADWALKAN KONSULTASI
                </a>
<a className="text-center px-6 py-3.5 border border-neutral-800 text-neutral-300 text-xs font-medium hover:bg-neutral-900 hover:text-white transition-colors w-full sm:w-auto rounded-sm flex items-center justify-center gap-2" href="#services">
                    LIHAT LAYANAN
                </a>
</div>
</div>

<div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-800 animate-in animate-in-delay-3">
<div className="p-4 sm:p-8 border-r border-neutral-800 text-center">
<div className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1">Satu Pintu</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Solusi Terintegrasi</div>
</div>
<div className="p-4 sm:p-8 md:border-r border-neutral-800 text-center">
<div className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1">Legalitas</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Berizin &amp; Patuh</div>
</div>
<div className="p-4 sm:p-8 border-r border-t md:border-t-0 border-neutral-800 text-center">
<div className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1">Terpercaya</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Mitra Asosiasi</div>
</div>
<div className="p-4 sm:p-8 text-center border-t md:border-t-0 border-neutral-800">
<div className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1">Skalabel</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Infrastruktur Fleksibel</div>
</div>
</div>
</main>

<section className="py-16 sm:py-24 border-b border-neutral-800 bg-neutral-950 relative" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6">

<h2 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                Siapa Kami
            </h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6 sm:mb-8">Infrastruktur Perdagangan.</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light mb-12 max-w-2xl">
                CSI (Central Space Indosewa) lebih dari sekadar penyedia tempat. Kami adalah mitra pertumbuhan strategis yang menyediakan ruang fisik, kerangka hukum, dan layanan operasional yang diperlukan untuk membangun dan mengembangkan bisnis yang patuh dan sukses di Indonesia.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
<div className="p-6 bg-neutral-900/20 border border-neutral-800/60 glow-hover rounded-sm">

<div className="mb-4 text-neutral-200">
<iconify-icon icon="lucide:building-2" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Penyedia Ruang Kerja</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                        Kantor premium dan coworking fleksibel yang dirancang untuk produktivitas.
                    </p>
</div>
<div className="p-6 bg-neutral-900/20 border border-neutral-800/60 glow-hover rounded-sm">
<div className="mb-4 text-neutral-200">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Layanan Bisnis</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                        Pendirian legal, administrasi pajak, dan manajemen kepatuhan.
                    </p>
</div>
<div className="p-6 bg-neutral-900/20 border border-neutral-800/60 glow-hover rounded-sm">
<div className="mb-4 text-neutral-200">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Mitra Pertumbuhan</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                        Strategi pemasaran digital dan fasilitas produksi media.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950 relative" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 border-b border-neutral-800 pb-6 sm:pb-8">
<div>

<h2 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                        Solusi Inti
                    </h2>
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tighter">Layanan Bisnis Terintegrasi.</h3>
</div>
<p className="text-xs sm:text-sm text-neutral-400 max-w-md font-light">
                    Beroperasi dengan percaya diri menggunakan rangkaian layanan pendukung bisnis kami yang komprehensif.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:building" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Ruang Kantor</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Private suites, virtual office, dan ruang meeting untuk kebutuhan perusahaan.
                    </p>
</div>

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:scale" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Legalitas Bisnis</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Pendirian badan usaha, pembuatan kontrak, dan konsultasi kepatuhan regulasi.
                    </p>
</div>

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:file-spreadsheet" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Pajak &amp; Admin</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Pembukuan profesional, pelaporan pajak, dan layanan dukungan administrasi.
                    </p>
</div>

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:shield-check" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Penagihan &amp; Pemulihan</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Solusi pemulihan aset bisnis secara hukum yang profesional dan patuh aturan.
                    </p>
</div>

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:award" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">ISO &amp; Pelatihan</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Bantuan sertifikasi dan program pelatihan perusahaan untuk standarisasi.
                    </p>
</div>

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:bar-chart-2" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Pemasaran Digital</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Branding strategis, manajemen media sosial, dan pemasaran kinerja.
                    </p>
</div>

<div className="bg-neutral-950 p-6 sm:p-8 hover:bg-neutral-900/50 transition-colors lg:col-span-2">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:mic-2" width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Podcast &amp; Studio</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        Studio produksi lengkap untuk livestreaming, podcast, dan pembuatan konten.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-b border-neutral-800 py-16 sm:py-24 relative" id="ecosystem">
<div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-10 border-b border-neutral-800 pb-6 sm:pb-8">
<div>

<h2 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-4">Jaringan Asosiasi</h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white max-w-2xl leading-[1.1]">
                        Didukung <span className="text-neutral-500">Ahli Terverifikasi.</span>
</h3>
</div>
<div className="max-w-sm">
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Layanan CSI dijalankan oleh jaringan rekanan berlisensi. Kami memastikan setiap tugas hukum, keuangan, dan operasional ditangani oleh profesional yang berkualifikasi.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-neutral-900/20 p-6 rounded-sm border border-neutral-800">
<div className="text-neutral-200 mb-4"><iconify-icon icon="lucide:check-circle" width="18"></iconify-icon></div>
<h4 className="text-sm font-medium text-white mb-2">Profesional Berlisensi</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed">
                        Semua layanan hukum dan pajak dilakukan oleh praktisi terdaftar.
                    </p>
</div>

<div className="bg-neutral-900/20 p-6 rounded-sm border border-neutral-800">
<div className="text-neutral-200 mb-4"><iconify-icon icon="lucide:users" width="18"></iconify-icon></div>
<h4 className="text-sm font-medium text-white mb-2">Sinergi Asosiasi</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed">
                        Kolaborasi tanpa batas antara tim hukum, kreatif, dan operasional.
                    </p>
</div>

<div className="bg-neutral-900/20 p-6 rounded-sm border border-neutral-800">
<div className="text-neutral-200 mb-4"><iconify-icon icon="lucide:lock" width="18"></iconify-icon></div>
<h4 className="text-sm font-medium text-white mb-2">Aman &amp; Rahasia</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed">
                        Protokol perlindungan data ketat untuk semua informasi sensitif klien.
                    </p>
</div>

<div className="bg-neutral-900/20 p-6 rounded-sm border border-neutral-800">
<div className="text-neutral-200 mb-4"><iconify-icon icon="lucide:arrow-up-right" width="18"></iconify-icon></div>
<h4 className="text-sm font-medium text-white mb-2">Berorientasi Hasil</h4>
<p className="text-[11px] text-neutral-500 leading-relaxed">
                        Fokus pada hasil bisnis nyata, mulai dari kepatuhan hingga pendapatan.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-8 sm:mb-12">

<h2 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-4">Mulai Sekarang</h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                    Siap Beroperasi?
                </h3>
<p className="text-neutral-400 text-xs sm:text-sm font-light">
                    Jadwalkan konsultasi untuk mendiskusikan ketersediaan kantor atau layanan bisnis.
                </p>
</div>
<form className="space-y-4 sm:space-y-6 bg-neutral-900/10 border border-neutral-800 p-6 sm:p-8 rounded-sm" id="projectForm" onsubmit="submitProjectForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Nama Lengkap</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="name" placeholder="Nama Anda" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Email Perusahaan</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="email" placeholder="nama@perusahaan.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Nama Perusahaan / Entitas</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="company" placeholder="Nama Perusahaan" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Minat Utama</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-300" name="interest" required="">
<option disabled="" selected="" value="">Pilih Layanan</option>
<option value="office">Ruang Kantor / Virtual Office</option>
<option value="legal">Legalitas &amp; Pendirian</option>
<option value="tax">Pajak &amp; Administrasi</option>
<option value="marketing">Pemasaran Digital / Studio</option>
<option value="other">Pertanyaan Lainnya</option>
</select>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Jenis Entitas</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-300" name="type" required="">
<option disabled="" selected="" value="">Pilih Tipe</option>
<option value="startup">Startup / Founder</option>
<option value="sme">SME / UKM</option>
<option value="corporate">Korporasi</option>
<option value="creator">Kreator Konten</option>
</select>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Detail Pertanyaan</label>
<textarea className="w-full input-base px-3 py-3 rounded-sm text-sm" name="message" placeholder="Bagaimana kami dapat membantu Anda?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black py-4 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors rounded-sm flex items-center justify-center gap-2 mt-4" id="submitBtn" type="submit">
                    KIRIM PERTANYAAN
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<div className="hidden text-center text-xs mt-4" id="formStatus"></div>
</form>
</div>
</section>

<footer className="bg-neutral-950 py-8 sm:py-12 border-t border-neutral-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-800"></div>
<span>CSI - Central Space Indosewa © 2025</span>
</div>
<div className="flex items-center gap-2">

<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                Ekosistem Bisnis
            </div>
</div>
</footer>



    </>
  );
}
