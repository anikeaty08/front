import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#5B21B6',
accent: '#A78BFA',
neutral: '#F5F3FF',
bone: '#FAFAF8',
gridline: '#E0DDD8',
dark: '#1A1614',
muted: '#F2F0ED'
},
fontFamily: {
display: ['Barlow Condensed', 'sans-serif'],
body: ['DM Sans', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
letterSpacing: {
'ultratight': '-0.05em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Simple logic to show sticky CTA after scrolling past the hero section
    document.addEventListener('DOMContentLoaded', () => {
      const stickyBar = document.getElementById('sticky-bar');
      const section1 = document.getElementById('section-1');
      
      if (!stickyBar || !section1) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // If Section 1 is not intersecting (scrolled past), show sticky bar
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            stickyBar.classList.remove('translate-y-full');
          } else {
            stickyBar.classList.add('translate-y-full');
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
      

<div aria-hidden="true" className="bg-oversized-text">Rp 349rb</div>
<main className="w-full max-w-[1440px] mx-auto overflow-hidden bg-bone relative z-10 border-x border-gridline">

<section className="w-full border-b border-gridline flex flex-col md:flex-row relative" id="section-1">
<div className="w-full md:w-[60%] flex flex-col justify-between pt-12 md:pt-24 pb-8 px-5 md:px-12 md:pr-0 border-r-0 md:border-r border-gridline z-10">
<div className="flex flex-col w-full">
<h1 className="flex flex-col m-0 p-0 leading-none">
<span className="text-3xl md:text-5xl font-display font-w-600 text-neutral-400 line-through decoration-1 uppercase tracking-tight mb-2">Rp 700rb</span>
<span className="text-[18vw] md:text-[11vw] font-display font-w-900 text-primary uppercase tracking-ultratight leading-[0.85] w-full -ml-1 md:-ml-2">vs Rp 349rb</span>
</h1>
</div>
<div className="mt-12 md:mt-24 max-w-[65ch]">
<h2 className="text-xl md:text-2xl font-display font-w-800 uppercase tracking-tight text-dark mb-4">Protein sama. Rasa lebih enak. Kembung hilang.</h2>
<p className="text-base md:text-lg font-body font-w-400 leading-relaxed text-dark mb-8">
            Whey import bukan lebih baik. Cuma lebih mahal. GAINZ: 24g protein, 5.5g BCAA, rasa coklat yang beneran enak. 4.400+ unit terjual. BPOM &amp; Halal MUI.
          </p>
<div className="flex flex-col gap-4 w-full sm:max-w-md">
<a aria-label="Order Sekarang" className="btn-sharp touch-target w-full text-sm py-4 px-8" href="#order">Order Sekarang</a>

<div className="flex items-center justify-center gap-6 mt-2 opacity-60">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:card-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="w-full md:w-[40%] relative flex items-end justify-center md:justify-end overflow-hidden pt-12 md:pt-0">
<img alt="Kemasan GAINZ Whey Protein Coklat" className="w-[90%] md:w-full h-auto object-cover object-bottom transform translate-y-4 md:translate-y-8" height="1200" loading="eager" src="https://placehold.co/800x1200/E0DDD8/1A1614?text=GAINZ+Whey+Product+Shot" width="800"/>
</div>
</section>

<section className="w-full border-b border-gridline" id="section-2">
<div className="sr-only">
<h2>Angka yang tidak butuh penjelasan</h2>
<p>Bandingkan dengan apapun yang kamu pakai sekarang. Buka label belakangnya, cek nomor-nya.</p>
</div>
<div className="flex flex-col md:flex-row w-full">

<div className="w-full md:w-1/3 flex flex-col items-start p-5 md:p-12 border-b md:border-b-0 md:border-r border-gridline">
<div className="text-[5rem] md:text-[6rem] font-display font-w-900 text-primary leading-[0.8] tracking-tighter">24g</div>
<div className="text-[0.6875rem] font-body font-w-700 uppercase tracking-widest text-dark mt-4">Protein per serving</div>
</div>

<div className="w-full md:w-1/3 flex flex-col items-start p-5 md:p-12 border-b md:border-b-0 md:border-r border-gridline">
<div className="text-[5rem] md:text-[6rem] font-display font-w-900 text-primary leading-[0.8] tracking-tighter">5.5g</div>
<div className="text-[0.6875rem] font-body font-w-700 uppercase tracking-widest text-dark mt-4">BCAA Profile</div>
</div>

<div className="w-full md:w-1/3 flex flex-col items-start p-5 md:p-12">
<div className="text-[5rem] md:text-[6rem] font-display font-w-900 text-primary leading-[0.8] tracking-tighter">33</div>
<div className="text-[0.6875rem] font-body font-w-700 uppercase tracking-widest text-dark mt-4">Total Servings</div>
</div>
</div>
<div className="p-5 md:p-8 bg-muted text-center border-t border-gridline">
<p className="text-sm font-body font-w-600 text-dark uppercase tracking-wide">Bandingkan dengan apapun yang kamu pakai sekarang. Buka label belakangnya, cek nomor-nya.</p>
</div>
</section>

<section className="w-full bg-muted border-b border-gridline py-16 md:py-32 px-5 md:px-12 flex flex-col items-start" id="section-3">
<h2 className="text-4xl md:text-7xl font-display font-w-800 uppercase tracking-tight text-dark mb-12 md:mb-20 max-w-[20ch] leading-[0.9]">
        Bukan soal latihan. Soal protein yang <span className="text-primary">tidak pernah cukup.</span>
</h2>
<div className="flex flex-col gap-6 w-full max-w-[65ch] mb-12 md:mb-16">
<div className="flex items-start gap-4">
<div aria-hidden="true" className="w-2 h-2 bg-dark mt-2.5 flex-shrink-0"></div>
<p className="text-lg md:text-xl font-body font-w-700 text-dark leading-snug">Whey import Rp 500-800rb bikin kamu beli setengah-setengah, intake berantakan.</p>
</div>
<div className="flex items-start gap-4">
<div aria-hidden="true" className="w-2 h-2 bg-dark mt-2.5 flex-shrink-0"></div>
<p className="text-lg md:text-xl font-body font-w-700 text-dark leading-snug">Yang murah rasanya seperti coklat kimia campur sabun, skip minum jadi kebiasaan.</p>
</div>
<div className="flex items-start gap-4">
<div aria-hidden="true" className="w-2 h-2 bg-dark mt-2.5 flex-shrink-0"></div>
<p className="text-lg md:text-xl font-body font-w-700 text-dark leading-snug">Perut begah seharian, latihan ikut mati.</p>
</div>
</div>
<hr className="tech-rule mb-6 md:mb-8"/>
<div className="bg-primary px-4 md:px-6 py-3 w-full md:w-auto inline-block">
<p className="text-lg md:text-xl font-display font-w-800 uppercase text-white tracking-wide m-0">GAINZ memotong ketiga masalah itu dari akarnya.</p>
</div>
</section>

<section className="w-full border-b border-gridline flex flex-col relative" id="section-4">
<div className="w-full h-[50vh] md:h-[60vh] relative border-b border-gridline">
<img alt="GAINZ dicampur dengan air dingin di shaker biasa" className="w-full h-full object-cover" loading="lazy" src="https://placehold.co/1440x800/E0DDD8/1A1614?text=Shaker+Mid-Pour+No+Styling"/>
</div>
<div className="w-full flex flex-col md:flex-row p-5 md:p-12 gap-8 md:gap-16 items-start">
<div className="w-full md:w-1/2">
<h2 className="text-4xl md:text-5xl font-display font-w-900 uppercase tracking-tight text-dark leading-[0.9] mb-2">Beneran coklat. Bukan coklat sabun.</h2>
<h3 className="text-[0.8125rem] font-body font-w-600 uppercase tracking-widest text-primary mt-4">Larut di shaker biasa. Tanpa blender, tanpa gumpal.</h3>
</div>
<div className="w-full md:w-1/2">
<p className="text-base md:text-lg font-body font-w-400 leading-relaxed text-dark max-w-[45ch]">
            Tuang air dingin, kocok 10 detik, minum. Tetap coklat premium, tidak pahit, tidak aneh di tenggorokan. Ini yang dirasakan 4.400+ orang, bukan klaim marketing.
          </p>
</div>
</div>
</section>

<section className="w-full bg-[#0A0807] border-b border-gridline overflow-hidden relative flex flex-col pt-16 md:pt-32 pb-0" id="section-5">

<div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="px-5 md:px-12 relative z-10 flex flex-col items-start mb-16 md:mb-24">
<div className="text-6xl md:text-[5rem] font-display font-w-900 text-accent leading-none tracking-tighter mb-8 md:mb-12">4.400+</div>
<h2 className="text-3xl md:text-5xl font-body font-w-700 text-white leading-tight max-w-[30ch] mb-4">"Rasanya gak bikin mual. Akhirnya."</h2>
<h3 className="text-sm md:text-base font-body font-w-400 text-[#A0A0A0] max-w-[40ch] mb-16">4.400+ unit terjual dari repeat order, bukan endorsement.</h3>
<div className="flex flex-col gap-6 w-full max-w-2xl border-t border-[#333333] pt-6">
<blockquote className="text-[0.8125rem] md:text-sm font-body font-w-400 text-white leading-relaxed">
            "Udah 3 bulan pakai, naik 4kg lean mass. Harganya bikin gue bisa konsisten tiap bulan." 
            <span className="block mt-2 text-accent font-w-600">@riofit.id</span>
</blockquote>
<hr className="border-[#333333]"/>
<blockquote className="text-[0.8125rem] md:text-sm font-body font-w-400 text-white leading-relaxed">
            "Sempet skeptis karena lokal, ternyata lebih enak dari import gue sebelumnya." 
            <span className="block mt-2 text-accent font-w-600">@dimasgym23</span>
</blockquote>
</div>
</div>

<div className="w-full border-t border-b border-[#333333] py-3 bg-[#0A0807] relative z-10 overflow-hidden flex whitespace-nowrap">
<div className="animate-marquee text-xs font-mono text-[#555555] uppercase tracking-widest flex items-center">
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
</div>
<div aria-hidden="true" className="animate-marquee text-xs font-mono text-[#555555] uppercase tracking-widest flex items-center">
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
<span className="mx-4">VERIFIED BUYER</span> <span className="mx-4">•</span>
</div>
</div>
</section>

<section className="w-full bg-muted border-b border-gridline py-16 md:py-24 px-5 md:px-12" id="section-6">
<div className="max-w-3xl flex flex-col items-start">
<h2 className="text-3xl md:text-5xl font-display font-w-800 uppercase tracking-tight text-dark mb-12">BPOM &amp; Halal MUI. Syarat, bukan stiker.</h2>
<div className="flex flex-col gap-12 w-full">
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-4 border-l-[3px] border-primary">
<div aria-label="Sertifikasi BPOM" className="stamp-label text-xl md:text-2xl min-w-[120px] text-center">BPOM</div>
<p className="text-[0.8125rem] md:text-sm font-body font-w-400 text-dark leading-relaxed m-0 max-w-[45ch]">
              Banyak suplemen lokal beredar tanpa izin BPOM. GAINZ punya keduanya karena kami lewati uji klinis yang memang wajib. Kamu tahu persis apa yang masuk ke tubuh kamu.
            </p>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-4 border-l-[3px] border-primary">
<div aria-label="Sertifikasi Halal MUI" className="stamp-label text-xl md:text-2xl min-w-[120px] text-center">HALAL</div>
<p className="text-[0.8125rem] md:text-sm font-body font-w-400 text-dark leading-relaxed m-0 max-w-[45ch] opacity-0 select-none hidden md:block">

</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-primary py-16 md:py-32 px-5 md:px-12 flex flex-col items-start border-b border-gridline" id="section-7">
<div className="w-full max-w-4xl flex flex-col">
<h2 className="text-5xl md:text-7xl font-display font-w-900 text-white uppercase tracking-tighter leading-[0.85] mb-6 md:mb-8 -ml-1">Rp 10.575 per sesi latihan</h2>
<h3 className="text-lg md:text-xl font-body font-w-600 text-accent mb-12 md:mb-16">Lebih murah dari kopi susu kamu.</h3>
<div className="flex flex-col w-full border-t border-accent/30 mb-12">
<div className="py-4 border-b border-accent/30 flex flex-col md:flex-row md:items-center justify-between gap-2 text-sm md:text-base font-body font-w-400 text-white">
<span>Rp 349.000 dibagi 33 serving = Rp 10.575.</span>
</div>
<div className="py-4 border-b border-accent/30 flex flex-col md:flex-row md:items-center justify-between gap-2 text-sm md:text-base font-body font-w-400 text-white">
<span>Kopi susu Rp 25.000. Ayam geprek Rp 20.000.</span>
</div>
<div className="py-4 border-b border-accent/30 flex flex-col md:flex-row md:items-center justify-between gap-2 text-sm md:text-base font-body font-w-400 text-white">
<span>Satu scoop GAINZ lebih murah dari keduanya, dan ini satu-satunya yang kerja untuk massa otot kamu.</span>
</div>
</div>
<div className="w-full flex flex-col items-center sm:items-start gap-4">
<a aria-label="Order Sekarang" className="btn-sharp btn-inverted touch-target w-full sm:w-auto text-base py-5 px-12" href="#order">Order Sekarang</a>
<div className="flex items-center gap-4 text-[0.625rem] font-mono text-white/60 uppercase tracking-widest mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="solar:lock-keyhole-linear" width="14"></iconify-icon> SECURE CHECKOUT</span>
<span>•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon> ALL PAYMENTS</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0A0807] py-24 md:py-40 px-5 md:px-12 flex flex-col items-start relative pb-32" id="section-8">

<div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col items-start w-full max-w-2xl">
<h2 className="text-4xl md:text-5xl font-display font-w-900 text-white uppercase tracking-tight leading-none mb-0 w-full">Stok terbatas tiap batch produksi.</h2>
<h3 className="text-base md:text-lg font-display font-w-800 text-accent uppercase tracking-wide mt-0 mb-8 md:mb-12">Whey premium. Harga lokal. 4.400+ sudah buktikan.</h3>
<p className="text-[0.8125rem] md:text-sm font-body font-w-400 text-[#A0A0A0] leading-relaxed max-w-[50ch] mb-8">
          Tidak ada countdown. Tidak ada diskon palsu. Kalau stok habis, kamu tunggu batch berikutnya.
        </p>

<a aria-label="Order Sekarang" className="btn-sharp touch-target w-full sm:w-auto text-base py-5 px-12" href="#order">Order Sekarang</a>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full p-4 bg-[#0A0807]/90 backdrop-blur-md z-50 transform translate-y-full transition-transform duration-300 ease-out border-t border-[#333333]" id="sticky-bar">
<div className="max-w-[1440px] mx-auto flex justify-center">
<a aria-label="Order Sekarang" className="btn-sharp touch-target w-full md:w-auto md:min-w-[400px] text-base py-4 px-12 shadow-[0_0_0_2px_#A78BFA]" href="#order">Order Sekarang</a>
</div>
</div>


    </>
  );
}
