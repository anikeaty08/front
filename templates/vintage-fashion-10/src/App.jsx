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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="vintage-noise"></div>

<header className="bg-[#f4f0e6] text-[#081a21] border-b-2 border-[#081a21] sticky top-0 z-40 relative">
<div className="absolute inset-x-0 bottom-0 h-px bg-[#c4a777]/30 translate-y-[2px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-[#c4a777]" height="24" icon="solar:stars-linear" width="24"></iconify-icon>
<span className="font-serif text-xl tracking-widest text-[#081a21] font-medium uppercase">Vintaria</span>
</div>

<nav className="hidden md:flex space-x-10">
<a className="text-xs uppercase tracking-widest font-medium text-[#081a21]/70 hover:text-[#c4a777] transition-colors" href="#">Beranda</a>
<a className="text-xs uppercase tracking-widest font-medium text-[#081a21]/70 hover:text-[#c4a777] transition-colors" href="#">Koleksi Baru</a>
<a className="text-xs uppercase tracking-widest font-medium text-[#081a21]/70 hover:text-[#c4a777] transition-colors" href="#">Pakaian</a>
<a className="text-xs uppercase tracking-widest font-medium text-[#081a21]/70 hover:text-[#c4a777] transition-colors" href="#">Aksesoris</a>
</nav>

<div className="flex items-center space-x-5 text-[#081a21]/80">
<button className="hover:text-[#c4a777] transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="hover:text-[#c4a777] transition-colors relative">
<iconify-icon height="22" icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-[#c4a777] text-[#081a21] text-[0.65rem] w-4 h-4 rounded-full flex items-center justify-center font-medium border border-[#f4f0e6]">2</span>
</button>
<button className="md:hidden hover:text-[#c4a777] transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative py-32 overflow-hidden border-b border-[#c4a777]/30 bg-[#06141a]">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, #c4a777 25%, transparent 25%, transparent 75%, #c4a777 75%, #c4a777), repeating-linear-gradient(45deg, #c4a777 25%, #06141a 25%, #06141a 75%, #c4a777 75%, #c4a777)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px'}}></div>
<div className="relative max-w-7xl mx-auto px-4 flex items-center justify-center z-10">

<div className="p-1 border border-[#c4a777]/40 max-w-xl w-full">
<div className="border border-[#c4a777]/20 bg-[#081a21]/95 backdrop-blur-sm p-12 md:p-16 text-center">
<p className="text-sm uppercase tracking-widest text-[#c4a777] mb-4 font-serif">Arsip &amp; Kurasi</p>
<h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[#f4f0e6] mb-4 leading-tight uppercase">
                        Koleksi<br/>Vintage
                    </h1>
<div className="flex items-center justify-center gap-3 my-6">
<div className="w-12 h-px bg-[#c4a777]/50"></div>
<iconify-icon className="text-[#c4a777]/80" height="16" icon="solar:star-fall-linear" width="16"></iconify-icon>
<div className="w-12 h-px bg-[#c4a777]/50"></div>
</div>
<p className="text-lg text-[#e6dfd1]/80 italic font-serif">
                        Inspirasi gaya klasik dari masa lalu<br/>untuk lemari pakaian modern Anda.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#f4f0e6] mb-6">
                Temukan potongan sejarah yang menyempurnakan gaya Anda tahun ini.
            </h2>
<p className="text-lg text-[#c4a777] italic font-serif">
                Kurasi eksklusif dari pakaian wanita era 70-an hingga 90-an.
            </p>
<div className="w-16 h-px bg-[#c4a777]/40 mx-auto mt-10"></div>
</div>

<div className="columns-1 md:columns-2 gap-x-12 gap-y-16 space-y-16">

<article className="break-inside-avoid group cursor-pointer">
<div className="p-2 bg-[#06141a] border border-[#c4a777]/20 mb-6 relative">
<div className="overflow-hidden bg-[#081a21] aspect-[4/5] relative">
<div className="absolute inset-0 bg-[#c4a777]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Gaun vintage floral" className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] sepia-[30%] contrast-[1.1] opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#f4f0e6] mb-2 font-serif group-hover:text-[#c4a777] transition-colors">Gaun floral sutra untuk tampilan elegan.</h3>
<p className="text-sm text-[#e6dfd1]/60 uppercase tracking-widest">Era 1980-an</p>
</div>
<span className="text-xs uppercase tracking-widest text-[#c4a777] border border-[#c4a777]/40 px-2 py-1 whitespace-nowrap">No. 01</span>
</div>
</article>

<article className="break-inside-avoid group cursor-pointer">
<div className="p-2 bg-[#06141a] border border-[#c4a777]/20 mb-6 relative">
<div className="overflow-hidden bg-[#081a21] aspect-square relative">
<div className="absolute inset-0 bg-[#c4a777]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Aksesoris vintage" className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] sepia-[30%] contrast-[1.1] opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#f4f0e6] mb-2 font-serif group-hover:text-[#c4a777] transition-colors">Aksesori emas klasik yang tak lekang oleh waktu.</h3>
<p className="text-sm text-[#e6dfd1]/60 uppercase tracking-widest">Arsip Perhiasan</p>
</div>
<span className="text-xs uppercase tracking-widest text-[#c4a777] border border-[#c4a777]/40 px-2 py-1 whitespace-nowrap">No. 02</span>
</div>
</article>

<article className="break-inside-avoid group cursor-pointer">
<div className="p-2 bg-[#06141a] border border-[#c4a777]/20 mb-6 relative">
<div className="overflow-hidden bg-[#081a21] aspect-[16/10] relative">
<div className="absolute inset-0 bg-[#c4a777]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Jaket kulit vintage" className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] sepia-[30%] contrast-[1.1] opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#f4f0e6] mb-2 font-serif group-hover:text-[#c4a777] transition-colors">Jaket kulit dengan patina alami.</h3>
<p className="text-sm text-[#e6dfd1]/60 uppercase tracking-widest">Era 1990-an</p>
</div>
<span className="text-xs uppercase tracking-widest text-[#c4a777] border border-[#c4a777]/40 px-2 py-1 whitespace-nowrap">No. 03</span>
</div>
</article>

<article className="break-inside-avoid group cursor-pointer">
<div className="p-2 bg-[#06141a] border border-[#c4a777]/20 mb-6 relative">
<div className="overflow-hidden bg-[#081a21] aspect-[3/4] relative">
<div className="absolute inset-0 bg-[#c4a777]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Blus putih detail renda" className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] sepia-[30%] contrast-[1.1] opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#f4f0e6] mb-2 font-serif group-hover:text-[#c4a777] transition-colors">Blus katun berenda dengan detail rumit.</h3>
<p className="text-sm text-[#e6dfd1]/60 uppercase tracking-widest">Gaya Romantis</p>
</div>
<span className="text-xs uppercase tracking-widest text-[#c4a777] border border-[#c4a777]/40 px-2 py-1 whitespace-nowrap">No. 04</span>
</div>
</article>

<article className="break-inside-avoid group cursor-pointer">
<div className="p-2 bg-[#06141a] border border-[#c4a777]/20 mb-6 relative">
<div className="overflow-hidden bg-[#081a21] aspect-square relative">
<div className="absolute inset-0 bg-[#c4a777]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Tas kulit vintage" className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] sepia-[30%] contrast-[1.1] opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#f4f0e6] mb-2 font-serif group-hover:text-[#c4a777] transition-colors">Tas selempang kulit untuk gaya sehari-hari.</h3>
<p className="text-sm text-[#e6dfd1]/60 uppercase tracking-widest">Kerajinan Kulit</p>
</div>
<span className="text-xs uppercase tracking-widest text-[#c4a777] border border-[#c4a777]/40 px-2 py-1 whitespace-nowrap">No. 05</span>
</div>
</article>

<article className="break-inside-avoid group cursor-pointer">
<div className="p-2 bg-[#06141a] border border-[#c4a777]/20 mb-6 relative">
<div className="overflow-hidden bg-[#081a21] aspect-[4/3] relative">
<div className="absolute inset-0 bg-[#c4a777]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Sepatu vintage" className="w-full h-full object-cover object-top transition-all duration-1000 grayscale-[40%] sepia-[30%] contrast-[1.1] opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#f4f0e6] mb-2 font-serif group-hover:text-[#c4a777] transition-colors">Sepatu hak medium untuk menemani langkah.</h3>
<p className="text-sm text-[#e6dfd1]/60 uppercase tracking-widest">Koleksi Alas Kaki</p>
</div>
<span className="text-xs uppercase tracking-widest text-[#c4a777] border border-[#c4a777]/40 px-2 py-1 whitespace-nowrap">No. 06</span>
</div>
</article>
</div>
</section>

<footer className="bg-[#051116] border-t-2 border-[#c4a777]/20 pt-20 pb-10 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div className="flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#c4a777]" height="32" icon="solar:stars-linear" width="32"></iconify-icon>
<span className="font-serif text-2xl tracking-widest text-[#f4f0e6] font-medium uppercase">Vintaria</span>
</div>
<p className="text-base text-[#e6dfd1]/70 max-w-xs font-serif italic">
                        Mengkurasi keindahan masa lalu untuk wanita modern. Setiap pakaian memiliki cerita otentik.
                    </p>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-[#c4a777] uppercase mb-6">Lokasi Kami</h4>
<address className="not-italic text-base text-[#e6dfd1]/80 space-y-2 font-serif">
<p>Jl. Kemang Selatan No. 11</p>
<p>Kawasan Kreatif</p>
<p>Jakarta Selatan, 12730</p>
</address>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-[#c4a777] uppercase mb-6">Hubungi Kami</h4>
<div className="text-base text-[#e6dfd1]/80 space-y-3 font-serif">
<p>Telepon: <a className="hover:text-[#c4a777] transition-colors" href="#">+62 21 555 0123</a></p>
<p>WA: <a className="hover:text-[#c4a777] transition-colors" href="#">+62 811 888 999</a></p>
<p>Email: <a className="hover:text-[#c4a777] transition-colors" href="#">hello@vintaria.id</a></p>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-4 mb-10">
<div className="w-full h-px bg-[#c4a777]/20"></div>
<iconify-icon className="text-[#c4a777]/50 flex-shrink-0" height="20" icon="solar:crown-star-linear" width="20"></iconify-icon>
<div className="w-full h-px bg-[#c4a777]/20"></div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
<p className="text-xs text-[#e6dfd1]/50 uppercase tracking-widest">
                    © 1998 - 2024 Vintaria Archive.
                </p>
<div className="flex space-x-6 text-[#c4a777]">
<a className="hover:text-[#f4f0e6] transition-colors" href="#"><iconify-icon height="22" icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon></a>
<a className="hover:text-[#f4f0e6] transition-colors" href="#"><iconify-icon height="22" icon="solar:camera-linear" width="22"></iconify-icon></a>
<a className="hover:text-[#f4f0e6] transition-colors" href="#"><iconify-icon height="22" icon="solar:planet-linear" width="22"></iconify-icon></a>
<a className="hover:text-[#f4f0e6] transition-colors" href="#"><iconify-icon height="22" icon="solar:letter-linear" width="22"></iconify-icon></a>
</div>
<div className="flex space-x-6 text-xs text-[#e6dfd1]/50 uppercase tracking-widest">
<a className="hover:text-[#c4a777] transition-colors" href="#">Kebijakan Privasi</a>
<span className="text-[#c4a777]/40">|</span>
<a className="hover:text-[#c4a777] transition-colors" href="#">Syarat Penggunaan</a>
</div>

<button className="absolute -top-20 right-0 md:-top-28 md:right-0 bg-[#06141a] border border-[#c4a777]/30 hover:border-[#c4a777] text-[#c4a777] p-3 transition-colors group" onclick="window.scrollTo(0,0)">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" height="22" icon="solar:alt-arrow-up-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</footer>

    </>
  );
}
