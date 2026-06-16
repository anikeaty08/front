import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0cb4b8',
accent: '#559eec',
neutral: '#c8dfe0',
dark: '#161818', /* Tinted dark, not pure black */
muted: '#eef4f4', /* Very subtle off-white tinted with neutral */
},
fontFamily: {
display: ['Plus Jakarta Sans', 'sans-serif'],
body: ['Inter', 'sans-serif'],
},
animation: {
'marquee': 'scroll 30s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Tiny script to reveal sticky CTA after scrolling past hero section
    document.addEventListener('DOMContentLoaded', () => {
      const stickyCta = document.getElementById('sticky-cta');
      const section1 = document.getElementById('section-1');
      
      if (!stickyCta || !section1) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            // Scrolled past section 1
            stickyCta.classList.remove('translate-y-full');
          } else {
            // Scrolling up into section 1
            stickyCta.classList.add('translate-y-full');
          }
        });
      }, { threshold: 0.1 });

      observer.observe(section1);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main>

<section className="relative w-full overflow-hidden bg-white pt-6 pb-16 md:pt-12 md:pb-24" id="section-1">
<div className="absolute top-0 right-0 w-64 h-64 dot-pattern opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-5 relative z-10">

<div className="inline-flex items-center space-x-2 bg-neutral/40 px-3 py-1.5 rounded-full mb-8 md:mb-12">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-semibold tracking-tight text-gray-800">500+ Produk</span>
</div>
<div className="flex flex-col md:grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 lg:gap-24 items-center">

<div className="w-full order-1 md:order-2">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square bg-muted">
<img alt="Real sharp product flat-lay photo" className="object-cover w-full h-full" loading="lazy" src="https://placehold.co/800x1000/eef4f4/0cb4b8?text=Product+Flatlay+Shot"/>

<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center space-x-4">
<iconify-icon className="text-primary text-2xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium text-gray-600">Optimized for Marketplace</div>
</div>
</div>
</div>

<div className="flex flex-col items-start order-2 md:order-1 w-full">
<h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-[#1A1614] mb-6 max-w-[15ch]">
              500+ Produk. Rata-rata <span className="text-primary block mt-2">CTR Naik 3x</span> di Shopee Setelah Ganti Foto.
            </h1>
<h2 className="font-body text-base md:text-lg font-medium text-gray-600 leading-relaxed mb-8 max-w-[45ch]">
              Bukan klaim. Ini pola yang kami lihat dari ratusan seller yang situasinya sama seperti kamu.
            </h2>
<div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed max-w-[50ch] mb-10">
<p>Produk yang sama. Harga yang sama. Tapi foto baru bikin orang berhenti scroll dan klik.</p>
<p>CTR naik 3x bukan angka ajaib. Itu yang terjadi ketika foto kamu berhenti bikin orang ragu.</p>
<p className="font-medium bg-neutral/20 p-4 rounded-xl mt-6 border-l-2 border-primary">
                Product Glow-Up: 20 foto siap pakai. 10 untuk marketplace, 10 untuk sosmed. Delivered 3 hari kerja. Rp 850.000.
              </p>
</div>
<a className="btn-pill btn-primary w-full md:w-auto text-base" href="#section-6">Booking Slot</a>
</div>
</div>
</div>
</section>

<section className="w-full bg-muted py-20 md:py-32 border-y border-neutral/50" id="section-2">
<div className="max-w-5xl mx-auto px-5">
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1614] leading-[1.2] mb-12 flex flex-col items-start gap-3">
<span className="inline-flex font-mono text-sm md:text-base font-medium bg-primary/10 text-primary px-4 py-2 rounded-full tracking-normal">Foto HP di Kasur.</span>
<span className="inline-flex font-mono text-sm md:text-base font-medium bg-primary/10 text-primary px-4 py-2 rounded-full tracking-normal">Lighting Kuning.</span>
<span className="inline-flex font-mono text-sm md:text-base font-medium bg-primary/10 text-primary px-4 py-2 rounded-full tracking-normal">Background Berantakan.</span>
</h2>
<div className="max-w-2xl pl-0 md:pl-8 border-l-0 md:border-l border-primary/30">
<h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[#1A1614] mb-6">
            Kita tau persis kondisi foto kamu sekarang.
          </h3>
<div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-body">
<p>
              Produk difoto pake HP, ditaruh di atas kasur atau lantai. Cahaya dari lampu kamar yang hangat dan kuning. Background yang tidak konsisten, meja kerja, kain, atau tembok berpola.
            </p>
<p>
              Hasilnya: <span className="text-[#1A1614] font-medium border-b border-primary/40 pb-0.5">produk terlihat murahan, padahal aslinya bagus. Buyer scroll, tidak klik.</span>
</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-dark py-24 md:py-32" id="section-3">
<div className="max-w-5xl mx-auto px-5">
<h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6 max-w-3xl">
          Produk Kamu 3x Lebih Bagus <span className="text-primary">dari Fotonya.</span>
</h2>
<h3 className="font-body text-lg md:text-xl font-medium text-white/70 mb-16 max-w-2xl leading-relaxed">
          Setiap hari tanpa foto yang benar, kompetitor yang menang.
        </h3>
<div className="space-y-12">
<p className="text-base md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
            Buyer tidak bisa pegang produk kamu. Mereka hanya bisa melihat.
          </p>
<div className="flex flex-col gap-6 max-w-3xl bg-white/5 p-6 md:p-10 rounded-2xl border border-white/10">

<div className="flex items-start gap-4">
<iconify-icon className="text-primary text-2xl md:text-3xl shrink-0 mt-1" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<p className="text-base md:text-lg text-white/90 leading-relaxed">
                Kompetitor dengan produk biasa tapi foto studio: terlihat premium, dipercaya, diklik.
              </p>
</div>

<div className="flex items-start gap-4">
<iconify-icon className="text-[#ff6b6b] text-2xl md:text-3xl shrink-0 mt-1" icon="solar:close-circle-linear" strokeWidth="2"></iconify-icon>
<p className="text-base md:text-lg text-white/60 leading-relaxed">
                Kamu dengan produk bagus tapi foto HP: terlihat amatir, dilewati.
              </p>
</div>
</div>
<p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mt-12 pl-4 border-l border-primary/50">
            Selisihnya bukan kualitas produk. Selisihnya adalah foto. Dan itu bisa dibenerin hari ini.
          </p>
</div>
</div>
</section>

<section className="w-full bg-white py-24 md:py-32" id="section-4">
<div className="max-w-4xl mx-auto px-5">
<div className="mb-16 md:mb-24">
<h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1614] leading-tight mb-4">
            Bukan Sekadar Foto.<br/>
            Sistem Visual Siap Pakai.
          </h2>
<h3 className="font-body text-base md:text-xl text-gray-600 font-medium">
            Dirancang khusus untuk Tokopedia, Shopee, dan konten sosmed kamu.
          </h3>
</div>
<div className="space-y-12 md:space-y-16">

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
<div className="hidden md:flex mt-1">
<iconify-icon className="text-neutral text-3xl group-hover:text-primary transition-colors duration-300" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<div className="relative pl-5 md:pl-0 border-l-[3px] border-primary md:border-none">
<h4 className="font-body font-semibold text-lg md:text-xl text-primary tracking-tight mb-2 flex items-center gap-3">
<iconify-icon className="md:hidden text-primary text-xl" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
                10 Foto White Background:
              </h4>
<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Ratio dan ukuran sudah dioptimasi untuk Tokopedia dan Shopee. Upload langsung, tanpa edit ulang.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
<div className="hidden md:flex mt-1">
<iconify-icon className="text-neutral text-3xl group-hover:text-primary transition-colors duration-300" icon="solar:smartphone-update-bold-duotone"></iconify-icon>
</div>
<div className="relative pl-5 md:pl-0 border-l-[3px] border-primary md:border-none">
<h4 className="font-body font-semibold text-lg md:text-xl text-primary tracking-tight mb-2 flex items-center gap-3">
<iconify-icon className="md:hidden text-primary text-xl" icon="solar:smartphone-update-linear" strokeWidth="1.5"></iconify-icon>
                10 Foto Lifestyle:
              </h4>
<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Konteks nyata untuk Instagram, TikTok, dan WhatsApp catalog. Orang beli cerita, bukan objek.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
<div className="hidden md:flex mt-1">
<iconify-icon className="text-neutral text-3xl group-hover:text-primary transition-colors duration-300" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<div className="relative pl-5 md:pl-0 border-l-[3px] border-primary md:border-none">
<h4 className="font-body font-semibold text-lg md:text-xl text-primary tracking-tight mb-2 flex items-center gap-3">
<iconify-icon className="md:hidden text-primary text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                Basic Retouching + Color Correction:
              </h4>
<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Warna akurat, detail tajam, tidak ada noda atau distraksi.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
<div className="hidden md:flex mt-1">
<iconify-icon className="text-neutral text-3xl group-hover:text-primary transition-colors duration-300" icon="solar:box-bold-duotone"></iconify-icon>
</div>
<div className="relative pl-5 md:pl-0 border-l-[3px] border-primary md:border-none">
<h4 className="font-body font-semibold text-lg md:text-xl text-primary tracking-tight mb-2 flex items-center gap-3">
<iconify-icon className="md:hidden text-primary text-xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                Delivery 3 Hari Kerja:
              </h4>
<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                File high-res siap download. Tidak ada menunggu berminggu-minggu.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-muted py-24 overflow-hidden border-y border-neutral/50" id="section-5">

<div className="marquee-container relative w-full overflow-hidden flex bg-transparent py-4 mb-16">
<div className="animate-marquee whitespace-nowrap flex items-center space-x-4 w-max">

<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Fashion</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Skincare</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Kuliner</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Elektronik</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>

<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Fashion</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Skincare</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Kuliner</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
<span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">Elektronik</span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral"></span>
</div>
</div>
<div className="max-w-5xl mx-auto px-5">
<div className="mb-16">
<h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[#1A1614] leading-tight mb-4">
            Hasil Nyata.<br/>Bukan Kata-Kata.
          </h2>
<h3 className="font-body text-base md:text-lg text-gray-600 font-medium">
            Sebelum dan sesudah dari 500+ produk yang sudah kami kerjakan.
          </h3>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

<div className="w-full bg-white border border-neutral/60 rounded-2xl p-8 md:p-10 shadow-sm relative z-10 md:mt-0">
<iconify-icon className="text-neutral/40 text-4xl absolute top-6 right-8" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="font-body text-lg md:text-xl text-gray-800 italic leading-relaxed mb-8 relative z-10">
              "Setelah ganti foto, CTR naik 3x di Shopee dalam 2 minggu. Produknya sama, harganya sama."
            </p>
<div className="flex items-center gap-4 border-t border-neutral/30 pt-6">
<div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
<span className="text-primary font-bold text-sm tracking-tighter">DR</span>
</div>
<p className="font-body text-sm font-semibold text-primary">
                Dinda R., seller fashion Shopee
              </p>
</div>
</div>

<div className="w-full bg-white border border-neutral/60 rounded-2xl p-8 md:p-10 shadow-sm relative z-10 md:mt-16">
<iconify-icon className="text-neutral/40 text-4xl absolute top-6 right-8" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="font-body text-lg md:text-xl text-gray-800 italic leading-relaxed mb-8 relative z-10">
              "Impression produk saya naik drastis di minggu pertama setelah pakai foto baru. Beli lagi buat koleksi kedua."
            </p>
<div className="flex items-center gap-4 border-t border-neutral/30 pt-6">
<div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
<span className="text-primary font-bold text-sm tracking-tighter">BS</span>
</div>
<p className="font-body text-sm font-semibold text-primary">
                Bram S., seller aksesoris Tokopedia
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-primary py-24 md:py-32 relative overflow-hidden" id="section-6">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-5 relative z-10">
<div className="text-center md:text-left mb-12">
<h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-4">
            Rp 850.000 untuk 20 Foto<br className="hidden md:block"/>
            yang Kerja 24 Jam.
          </h2>
<h3 className="font-body text-base md:text-lg text-white/80 font-medium">
            Rp 42.500 per foto high-res, siap upload ke marketplace.
          </h3>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
<div className="w-full md:w-2/3">
<div className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight mb-2">
              Rp 850.000 <span className="text-2xl font-medium text-white/70">/ 20 foto</span>
</div>
<div className="mt-8 space-y-4">
<p className="text-sm md:text-base text-white/90 leading-relaxed font-body">
                Sudah termasuk: 10 foto white background (siap marketplace) + 10 foto lifestyle (siap sosmed) + retouching + color correction + optimasi rasio Tokopedia/Shopee + delivery 3 hari kerja.
              </p>
<p className="text-sm md:text-base text-white font-medium bg-white/10 p-4 rounded-xl border-l-2 border-white/40">
                Bandingkan dengan biaya iklan yang habis dalam 3 hari. Foto ini dipakai berbulan-bulan.
              </p>
</div>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-4">

<form action="#" className="w-full" method="POST">
<button className="btn-pill btn-inverted w-full text-base md:text-lg py-5 shadow-xl" type="submit">
                Booking Slot, Rp 850.000
              </button>
</form>

<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
<span className="text-white/70 text-[11px] font-semibold tracking-wider uppercase">500+ Produk</span>
<span className="text-white/30 text-[11px]">•</span>
<span className="text-white/70 text-[11px] font-semibold tracking-wider uppercase">3 Hari Kerja</span>
<span className="text-white/30 text-[11px]">•</span>
<span className="text-white/70 text-[11px] font-semibold tracking-wider uppercase">File High-Res</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 md:py-32" id="section-7">
<div className="max-w-3xl mx-auto px-5">
<div className="mb-16">
<h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1614] leading-tight mb-4">
            Tidak Perlu Repot.<br/>
            Dua Cara, Pilih yang Paling Mudah.
          </h2>
<h3 className="font-body text-base md:text-lg text-gray-500 font-medium">
            Tidak ada alasan untuk tunda.
          </h3>
</div>
<div className="space-y-0">

<div className="py-8 border-t border-neutral/50">
<h4 className="font-body font-bold text-sm tracking-wider uppercase text-primary mb-3">
              Kirim Produk ke Studio
            </h4>
<p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Kamu tidak perlu datang. Kirim produk via kurir, kami foto, kami kirim file-nya balik ke kamu.
            </p>
</div>

<div className="py-8 border-t border-neutral/50">
<h4 className="font-body font-bold text-sm tracking-wider uppercase text-primary mb-3">
              Datang ke Studio
            </h4>
<p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Mau lihat langsung prosesnya? Datang ke studio kami, sesi selesai dalam 1-2 jam.
            </p>
</div>
</div>
<p className="mt-8 text-sm md:text-base text-gray-800 font-medium bg-muted p-5 rounded-xl">
          Produk diterima, difoto, dikirim balik. Semua terdokumentasi.
        </p>
</div>
</section>

<section className="w-full bg-dark py-32 md:py-48 pb-48 border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center" id="section-8">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.03] pointer-events-none flex flex-wrap gap-2 justify-center content-center z-0">
<div className="w-16 h-16 rounded bg-white"></div><div className="w-16 h-16 rounded border border-white/30"></div><div className="w-16 h-16 rounded border border-white/30"></div><div className="w-16 h-16 rounded border border-white/30"></div>
<div className="w-16 h-16 rounded bg-white"></div><div className="w-16 h-16 rounded bg-white"></div><div className="w-16 h-16 rounded border border-white/30"></div><div className="w-16 h-16 rounded border border-white/30"></div>
</div>
<div className="max-w-2xl mx-auto px-5 relative z-10 flex flex-col items-center">
<h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white leading-[1.15] mb-6">
          Slot Minggu Ini Terbatas.<br/>
          Amankan Jadwal Kamu.
        </h2>
<h3 className="font-body text-base md:text-lg text-white/60 font-medium mb-10 max-w-lg">
          Kami hanya menerima sesi terbatas per minggu agar kualitas tetap terjaga.
        </h3>
<div className="space-y-6 text-sm md:text-base text-[#aaaaaa] font-light leading-relaxed max-w-[280px] md:max-w-md mx-auto mb-12">
<p>
            Kapasitas studio kami nyata: maksimal 8 sesi per minggu, dan slot terisi dari awal pekan.
          </p>
<p>
            Kalau kamu sudah di sini dan produk kamu belum difoto dengan benar, ini waktunya berubah. Jangan biarkan kompetitor mengisi slot yang seharusnya milik kamu.
          </p>
</div>
<a className="btn-pill btn-primary w-full md:w-auto text-base md:text-lg shadow-[0_4px_24px_rgba(12,180,184,0.2)]" href="#section-6">
          Booking Slot Sekarang
        </a>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-neutral/50 p-4 z-50 transition-transform duration-500 translate-y-full shadow-[0_-4px_20px_rgba(0,0,0,0.05)]" id="sticky-cta">
<div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
<div className="hidden md:block">
<div className="text-sm font-bold text-[#1A1614] tracking-tight">Product Glow-Up</div>
<div className="text-xs text-gray-500 font-medium">Rp 850.000 / 20 Foto</div>
</div>
<a className="btn-pill btn-primary w-full md:w-auto text-sm py-3 min-h-[44px] shadow-none flex-1 md:flex-none" href="#section-6">
        Booking Slot Sekarang
      </a>
</div>
</div>


    </>
  );
}
