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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#F3E9D7]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-[#385432] w-6 h-6" data-lucide="sprout"></i>
<span className="font-['Playfair_Display'] font-semibold text-lg tracking-tight text-[#385432]">GAMBIR.ID</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6A4A3C]">
<a className="hover:text-[#385432] transition-colors" href="#about">Tentang Kami</a>
<a className="hover:text-[#385432] transition-colors" href="#definition">Apa itu Gambir?</a>
<a className="hover:text-[#385432] transition-colors" href="#process">Proses</a>
<a className="px-4 py-2 border border-[#6A4A3C] rounded-full hover:bg-[#6A4A3C] hover:text-white transition-all" href="#contact">Hubungi Kami</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FAF7F2] via-white to-white"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E9D7] text-[#6A4A3C] text-xs font-medium mb-8 border border-[#D6B679]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#385432]"></span>
                Komoditas Unggulan Sumatra Barat
            </div>
<h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium tracking-tight text-[#4A2E23] mb-6 leading-[1.1]">
                Gambir Sumatra Barat: <br className="hidden md:block"/>
<span className="italic text-[#6C8E5A]">Warisan Alam,</span> Potensi Masa Depan
            </h1>
<p className="text-lg md:text-xl text-[#6A4A3C] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Dari tanah Minangkabau, kami menghadirkan gambir berkualitas tinggi untuk kebutuhan industri dan kesehatan.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-[#385432] text-white rounded-full font-medium hover:bg-[#2b4026] transition-colors flex items-center justify-center gap-2 group" href="#definition">
                    Pelajari Lebih Lanjut
                    <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-[#D6B679] text-[#4A2E23] rounded-full font-medium hover:bg-[#FAF7F2] transition-colors" href="#contact">
                    Hubungi Kami
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#F3E9D7] bg-[#FAF7F2]/50" id="about">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium tracking-tight text-[#4A2E23]">
                    Tentang Kami
                </h2>
<div className="space-y-4 text-[#6A4A3C] text-lg leading-relaxed font-light">
<p>
                        Kami adalah komunitas dan pelaku usaha yang berfokus pada pengembangan gambir asli Sumatra Barat. Berlokasi di daerah Sentra Gambir, kami bekerja sama dengan petani lokal untuk menghadirkan produk gambir terbaik melalui proses panen dan pengolahan yang berkelanjutan.
                    </p>
<p>
                        Dengan mengedepankan kualitas, transparansi, dan pemberdayaan petani, kami ingin memperkenalkan potensi besar gambir ke pasar nasional maupun internasional.
                    </p>
</div>
<div className="pt-4 flex items-center gap-8">
<div>
<p className="font-['Playfair_Display'] text-3xl font-medium text-[#385432]">100%</p>
<p className="text-xs uppercase tracking-widest text-[#6A4A3C] mt-1">Asli Sumatra</p>
</div>
<div>
<p className="font-['Playfair_Display'] text-3xl font-medium text-[#385432]">Eco</p>
<p className="text-xs uppercase tracking-widest text-[#6A4A3C] mt-1">Berkelanjutan</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-[#D6B679]/20 border border-[#D6B679]/30 flex items-center justify-center group">

<div className="absolute inset-0 bg-gradient-to-br from-[#6C8E5A]/10 to-[#4A2E23]/5"></div>
<div className="text-center p-8">
<i className="w-16 h-16 text-[#6C8E5A] mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500" data-lucide="handshake"></i>
<p className="font-['Playfair_Display'] italic text-2xl text-[#4A2E23]">"Sinergi Petani &amp; Industri"</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="definition">
<div className="max-w-7xl mx-auto">

<div className="max-w-3xl mb-16">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium tracking-tight text-[#4A2E23] mb-4">
                    Apa itu Gambir?
                </h2>
<p className="text-[#6A4A3C] text-lg font-light leading-relaxed">
                    Ekstrak alami dari daun dan ranting <em>Uncaria gambir Roxb</em>, sebuah identitas hasil alam Sumatra Barat yang kaya akan senyawa aktif.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

<div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#F3E9D7] hover:border-[#D6B679] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#D6B679]/20 flex items-center justify-center mb-6 text-[#6A4A3C]">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#4A2E23] mb-3">Asal Usul</h3>
<p className="text-[#6A4A3C] text-sm leading-relaxed">
                        Diperkirakan berasal dari Sumatra dan Kalimantan. Tanaman ini tumbuh subur di tanah Minangkabau dan telah lama menjadi komoditas unggulan daerah.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#F3E9D7] hover:border-[#D6B679] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#6C8E5A]/20 flex items-center justify-center mb-6 text-[#385432]">
<i className="w-6 h-6" data-lucide="flask-conical"></i>
</div>
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#4A2E23] mb-3">Kandungan Katekin</h3>
<p className="text-[#6A4A3C] text-sm leading-relaxed">
                        Gambir menghasilkan bahan berwarna kecoklatan yang kaya antioksidan dan astringen. Kandungan katekin tinggi membuatnya bernilai farmasi tinggi.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#F3E9D7] hover:border-[#D6B679] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#4A2E23]/10 flex items-center justify-center mb-6 text-[#4A2E23]">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#4A2E23] mb-3">Pasar Global</h3>
<p className="text-[#6A4A3C] text-sm leading-relaxed">
                        Digunakan luas dari produk herbal, skincare, hingga pewarna tekstil. Permintaan global terus meningkat untuk pengembangan produk bernilai tambah.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#4A2E23] text-[#FAF7F2]" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#D6B679] font-medium tracking-widest text-xs uppercase mb-2 block">Workflow Process</span>
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium tracking-tight">Dari Alam ke Industri</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D6B679]/50 to-transparent"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-[#385432] rounded-full border-4 border-[#4A2E23] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-['Playfair_Display'] text-2xl text-[#D6B679]">01</span>
</div>
<div className="text-center px-2">
<h3 className="text-[#D6B679] font-medium mb-2">Panen Bahan Baku</h3>
<p className="text-sm text-[#F3E9D7]/70 font-light">Petani memanen daun dan ranting Uncaria gambir kualitas optimal.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-[#385432] rounded-full border-4 border-[#4A2E23] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-['Playfair_Display'] text-2xl text-[#D6B679]">02</span>
</div>
<div className="text-center px-2">
<h3 className="text-[#D6B679] font-medium mb-2">Perebusan</h3>
<p className="text-sm text-[#F3E9D7]/70 font-light">Daun direbus hingga zat aktif keluar menjadi cairan ekstraksi.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-[#385432] rounded-full border-4 border-[#4A2E23] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-['Playfair_Display'] text-2xl text-[#D6B679]">03</span>
</div>
<div className="text-center px-2">
<h3 className="text-[#D6B679] font-medium mb-2">Pengendapan</h3>
<p className="text-sm text-[#F3E9D7]/70 font-light">Cairan diendapkan hingga getah memisah dan mengental.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-[#385432] rounded-full border-4 border-[#4A2E23] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-['Playfair_Display'] text-2xl text-[#D6B679]">04</span>
</div>
<div className="text-center px-2">
<h3 className="text-[#D6B679] font-medium mb-2">Pengeringan</h3>
<p className="text-sm text-[#F3E9D7]/70 font-light">Getah dicetak dan dikeringkan hingga bertekstur padat.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-[#D6B679] rounded-full border-4 border-[#4A2E23] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(214,182,121,0.3)]">
<i className="w-8 h-8 text-[#4A2E23]" data-lucide="check"></i>
</div>
<div className="text-center px-2">
<h3 className="text-white font-medium mb-2">Siap Olah</h3>
<p className="text-sm text-[#F3E9D7]/70 font-light">Bahan baku siap digunakan untuk kebutuhan industri.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-[#FAF7F2] p-10 rounded-3xl border border-[#F3E9D7]">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-white rounded-xl border border-[#F3E9D7]">
<i className="w-6 h-6 text-[#4A2E23]" data-lucide="briefcase"></i>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A2E23]">Nilai Profesional</h3>
</div>
<ul className="space-y-8">
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-[#6A4A3C] mt-1 shrink-0" data-lucide="shield-check"></i>
<div>
<h4 className="font-semibold text-[#4A2E23] mb-1">Membangun Kepercayaan</h4>
<p className="text-sm text-[#6A4A3C] leading-relaxed">Menjadi pemasok kredibel dan terstandar untuk industri farmasi, kosmetik, dan tekstil. Serius, terorganisir, dan dapat diandalkan.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-[#6A4A3C] mt-1 shrink-0" data-lucide="award"></i>
<div>
<h4 className="font-semibold text-[#4A2E23] mb-1">Standar Kualitas</h4>
<p className="text-sm text-[#6A4A3C] leading-relaxed">Panen terstandar dan pengolahan berkelanjutan. Bukan sekadar produk rumahan, melainkan komoditas *industrial-grade*.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-[#6A4A3C] mt-1 shrink-0" data-lucide="building-2"></i>
<div>
<h4 className="font-semibold text-[#4A2E23] mb-1">Relevan untuk B2B</h4>
<p className="text-sm text-[#6A4A3C] leading-relaxed">Memberikan rasa aman bagi importir dan pabrik internasional dalam mempertimbangkan kerja sama jangka panjang.</p>
</div>
</li>
</ul>
</div>

<div className="bg-[#385432] p-10 rounded-3xl text-[#F3E9D7]">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-[#4A2E23] rounded-xl border border-[#6C8E5A]/30">
<i className="w-6 h-6 text-[#D6B679]" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-medium text-white">Nilai Kemanusiaan</h3>
</div>
<ul className="space-y-8">
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-[#D6B679] mt-1 shrink-0" data-lucide="map-pin"></i>
<div>
<h4 className="font-semibold text-white mb-1">Asal-usul &amp; Cerita</h4>
<p className="text-sm text-[#F3E9D7]/80 leading-relaxed">Gambir adalah hasil kerja keras petani Sumatra Barat. Kami membawa cerita daerah dan nilai budaya untuk koneksi emosional.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-[#D6B679] mt-1 shrink-0" data-lucide="users"></i>
<div>
<h4 className="font-semibold text-white mb-1">Empati &amp; Kedekatan</h4>
<p className="text-sm text-[#F3E9D7]/80 leading-relaxed">Pemberdayaan komunitas petani. Brand yang peduli, bukan hanya menjual, menciptakan kepercayaan lebih dalam.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-[#D6B679] mt-1 shrink-0" data-lucide="leaf"></i>
<div>
<h4 className="font-semibold text-white mb-1">Etis &amp; Bertanggung Jawab</h4>
<p className="text-sm text-[#F3E9D7]/80 leading-relaxed">Harmonisasi dengan alam dan kesejahteraan petani, nilai yang sangat dicari oleh pasar global modern.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#FAF7F2] border-t border-[#F3E9D7] pt-20 pb-10 px-6" id="contact">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium tracking-tight text-[#4A2E23] mb-6">
                Siap Bermitra dengan Kami?
            </h2>
<p className="text-[#6A4A3C] mb-10 text-lg font-light">
                Mari diskusikan kebutuhan suplai gambir Anda. Kami menjamin kualitas, transparansi, dan keberlanjutan.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A2E23] text-[#F3E9D7] rounded-full font-medium hover:bg-[#385432] transition-all hover:scale-105 shadow-lg shadow-[#4A2E23]/20" href="mailto:contact@gambir.id">
<i className="w-5 h-5" data-lucide="mail"></i>
                Hubungi Tim Kami
            </a>
<div className="mt-20 pt-10 border-t border-[#6A4A3C]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#6A4A3C]/60 gap-4">
<p>© 2023 Gambir Sumatra Barat. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#4A2E23]" href="#">Privacy</a>
<a className="hover:text-[#4A2E23]" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
