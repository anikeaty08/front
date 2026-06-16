import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#1A5F7A',
accent: '#57C5B6',
neutral: '#F5FAFE',
red: '#C1121F',
dark: '#1A1614',
newsprint: '#FAFAF7',
ink: '#1A1A1A'
},
fontFamily: {
display: ['"Playfair Display"', 'serif'],
body: ['"DM Sans"', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Reveal Animations using Intersection Observer
    document.addEventListener("DOMContentLoaded", () => {
      const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
      
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });

      // Sticky CTA Logic
      const section1 = document.getElementById('section-1');
      const stickyCta = document.getElementById('sticky-cta');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > (section1.offsetTop + section1.offsetHeight - 100)) {
          stickyCta.classList.remove('translate-y-full');
        } else {
          stickyCta.classList.add('translate-y-full');
        }
      });

      // Simple Dummy Timer Logic for Visual Loop
      const hEl = document.getElementById('hours');
      const mEl = document.getElementById('minutes');
      const sEl = document.getElementById('seconds');
      
      let time = 23 * 3600 + 59 * 60 + 59; // start at 23:59:59
      
      setInterval(() => {
        time--;
        if(time < 0) time = 86400; // loop back
        
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        
        hEl.textContent = h.toString().padStart(2, '0');
        mEl.textContent = m.toString().padStart(2, '0');
        sEl.textContent = s.toString().padStart(2, '0');
      }, 1000);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full !important max-w-[600px] mx-auto flex flex-col relative bg-newsprint shadow-[0_0_40px_rgba(0,0,0,0.05)] min-h-screen">

<section className="w-full bg-dark px-5 py-20 sm:py-28 flex flex-col justify-center border-b-[8px] border-red" id="section-1">
<div className="reveal">
<h2 className="font-display text-5xl sm:text-6xl font-extrabold text-white leading-[1.05] tracking-tighter mb-6 text-left">
          Spend <span className="block text-5xl sm:text-7xl font-extrabold text-white mt-2 mb-1">3 Juta.</span>
<span className="block text-5xl sm:text-7xl font-extrabold text-white mb-2">Nol</span> Konversi.<br/>
<span className="text-red block mt-2">Dashboard Hijau Semua.</span>
</h2>
<h3 className="font-body text-sm font-light text-gray-400 mb-10 tracking-wide">
          Kantong kamu yang merah.
        </h3>
</div>
<div className="w-full h-[4px] bg-red mb-10 reveal delay-1"></div>
<div className="space-y-6 reveal delay-2">
<p className="font-body text-base sm:text-lg font-light text-white leading-relaxed max-w-[65ch]">
          Kamu buka Ads Manager. Reach 40 ribu. CTR 2,3%. Semua angka terlihat oke. Tapi penjualan? Nol. Atau satu. Dari orang yang kenal kamu secara personal.
        </p>
<p className="font-body text-base sm:text-lg font-light text-white leading-relaxed max-w-[65ch]">
          Itu bukan keberuntungan yang kurang. Itu sistem yang salah dari awal. Dan kamu sudah bayar 3 juta untuk belajar hal itu dengan cara paling menyakitkan.
        </p>
</div>
</section>

<section className="w-full bg-newsprint px-5 py-20 flex flex-col" id="section-2">
<div className="reveal">
<h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.1] tracking-tighter mb-4">
          Bukan Kamu yang Salah. Systemnya yang Salah.
        </h2>
<h3 className="font-body text-sm font-semibold text-ink/70 uppercase tracking-widest mb-12">
          Dan tidak ada yang memberitahu kamu ini sejak awal.
        </h3>
</div>

<div className="my-8 py-8 border-y-[2px] border-red reveal delay-1 relative">
<span className="absolute top-0 left-0 -translate-y-1/2 bg-newsprint px-2 font-body text-xs font-semibold text-red tracking-widest uppercase">Fakta</span>
<p className="font-display italic text-2xl sm:text-3xl font-light text-ink leading-snug">
          Meta tidak dirancang untuk mengajarkan kamu cara beriklan. Meta dirancang untuk mengambil budget kamu secepat mungkin.
        </p>
</div>
<div className="space-y-6 reveal delay-2 mt-4">
<p className="font-body text-base font-light text-ink leading-relaxed">
          Kamu tidak bodoh. Produk kamu tidak jelek. Kamu cuma tidak pernah diajarkan setup yang benar. Kamu belajar dari YouTube random, teman yang juga nebak-nebak, dan trial error yang cost-nya mahal.
        </p>
<p className="font-body text-base font-semibold text-primary leading-relaxed bg-primary/10 p-4 border-l-[4px] border-primary">
          Rasa malu itu bisa disimpan dulu. Yang perlu dibenerin adalah setup-nya.
        </p>
</div>
</section>

<section className="w-full bg-neutral px-5 py-20 flex flex-col border-y border-ink/20" id="section-3">
<div className="reveal mb-12">
<h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-[1.1] tracking-tighter mb-3">
          3 Setup Salah yang Membunuh Iklan Kamu Diam-Diam
        </h2>
<h3 className="font-body text-sm font-light text-ink/70">
          Tidak terlihat di dashboard. Tapi itulah yang bocorkan uang kamu.
        </h3>
</div>
<div className="flex flex-col w-full">

<div className="border-t border-ink py-8 reveal delay-1">
<div className="font-body text-xs font-semibold uppercase tracking-widest text-red mb-3">KESALAHAN 1</div>
<h4 className="font-display text-xl sm:text-2xl font-extrabold text-ink leading-tight mb-3">
            Kamu optimasi untuk Reach, bukan Conversion.
          </h4>
<p className="font-body text-sm font-light text-ink leading-relaxed">
            Meta akan kasih kamu apa yang kamu minta. Kalau kamu minta reach, kamu dapat reach. Tapi reach tidak bayar tagihan. Setup objective yang salah adalah alasan paling umum iklan terlihat 'jalan' tapi tidak menghasilkan.
          </p>
</div>

<div className="border-t border-ink py-8 reveal delay-2">
<div className="font-body text-xs font-semibold uppercase tracking-widest text-red mb-3">KESALAHAN 2</div>
<h4 className="font-display text-xl sm:text-2xl font-extrabold text-ink leading-tight mb-3">
            Audience kamu terlalu luas atau terlalu sempit sekaligus.
          </h4>
<p className="font-body text-sm font-light text-ink leading-relaxed">
            Kamu pilih interest 10 kategori karena takut miss. Atau kamu terlalu narrow sampai budget tidak bisa terserap. Dua ekstrem ini sama-sama mematikan. Ada zona tengah yang spesifik dan itu bisa dihitung.
          </p>
</div>

<div className="border-y border-ink py-8 reveal delay-3">
<div className="font-body text-xs font-semibold uppercase tracking-widest text-red mb-3">KESALAHAN 3</div>
<h4 className="font-display text-xl sm:text-2xl font-extrabold text-ink leading-tight mb-3">
            Creative kamu stop the scroll, tapi landing page kamu tidak close the deal.
          </h4>
<p className="font-body text-sm font-light text-ink leading-relaxed">
            Iklan bagus yang landing di halaman tokopedia biasa, atau WhatsApp tanpa script, adalah konversi yang mati di ujung jalan. Funnel-nya putus di sana.
          </p>
</div>
</div>
</section>

<section className="w-full bg-newsprint px-5 py-24 flex flex-col" id="section-4">
<div className="reveal flex items-end mb-8 relative">
<span className="font-display text-8xl font-extrabold text-red leading-none opacity-20 absolute -top-8 -left-4 pointer-events-none">14</span>
<span className="font-display text-7xl font-extrabold text-red leading-none relative z-10">14</span>
<span className="font-body text-sm font-semibold uppercase tracking-widest text-ink ml-2 mb-2 relative z-10">Hari</span>
</div>
<div className="reveal delay-1 mb-8">
<h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-[1.1] tracking-tighter mb-4">
          Ada Sistem di Balik Iklan yang Profit. Dan Sistem Bisa Dipelajari.
        </h2>
<h3 className="font-body text-sm font-semibold text-primary uppercase tracking-wide">
          14 hari. Bukan 6 bulan. Bukan teori. Langsung di akun kamu sendiri.
        </h3>
</div>

<div className="w-full border-2 border-ink bg-white p-5 mb-10 reveal delay-2 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[12px] bg-neutral border-b-2 border-ink flex items-center px-2 gap-1">
<div className="w-1.5 h-1.5 bg-ink"></div>
<div className="w-1.5 h-1.5 bg-ink"></div>
</div>
<div className="mt-4 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-[15%] h-[8px] bg-primary"></div>
<div className="font-body text-xs text-ink uppercase">Modul 1-2</div>
</div>
<div className="flex items-center gap-3">
<div className="w-[45%] h-[8px] bg-primary"></div>
<div className="font-body text-xs text-ink uppercase">Modul 3-5</div>
</div>
<div className="flex items-center gap-3 pt-2">
<div className="w-[85%] h-[12px] bg-red"></div>
<div className="font-body text-[10px] font-semibold text-red tracking-widest uppercase">Profit Setup Complete</div>
</div>
</div>
</div>
<div className="space-y-6 reveal delay-3 mb-10">
<p className="font-body text-base font-light text-ink leading-relaxed">
          Iklan yang profitable bukan keberuntungan. Bukan karena budget besar. Bukan karena produknya viral.
        </p>
<p className="font-body text-base font-light text-ink leading-relaxed">
          Ada urutan setup yang benar. Ada cara baca data yang tidak perlu gelar statistik. Ada struktur creative yang bisa diulang setiap kali kamu mau scale.
        </p>
<p className="font-body text-base font-semibold text-ink leading-relaxed p-4 bg-red/5 border-l-[4px] border-red">
          Sistem itu yang diajarkan di Meta Ads Mastery. Kamu tidak belajar teori Meta dari whitepaper. Kamu benerin setup akun kamu langsung, modul per modul, dalam 14 hari.
        </p>
</div>
<div className="w-full reveal delay-3 mt-4">
<a className="btn-primary" href="#section-8">
<span className="flex flex-col items-center">
<span>Daftar Batch Ini</span>
<span className="text-xs tracking-normal mt-1 opacity-90">Rp 297.000</span>
</span>
</a>
</div>
</section>

<section className="w-full bg-dark px-5 py-24 flex flex-col" id="section-5">
<div className="reveal mb-16">
<h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] tracking-tighter mb-4">
          Mereka Juga Pernah Boncos. Angkanya Sama Persis dengan Kamu.
        </h2>
<h3 className="font-body text-sm font-light text-white/60">
          Bukan influencer. Bukan brand besar. Pemilik bisnis biasa.
        </h3>
</div>
<div className="flex flex-col gap-12 w-full border-l-[2px] border-red ml-2 pl-6 relative">

<div className="relative reveal delay-1">
<div className="absolute w-[10px] h-[10px] bg-dark border-[2px] border-red -left-[31px] top-1"></div>
<div className="font-body text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">Riko, jual produk skincare lokal</div>
<p className="font-body text-sm font-light text-white leading-relaxed mb-3">
            Budget iklan habis Rp 4,2 juta dalam 3 minggu, 2 transaksi. Setelah ikuti modul 2 dan 3, minggu ke-12 ROAS-nya:
          </p>
<div className="font-display text-4xl sm:text-5xl font-extrabold text-white">3,8x ROAS</div>
<div className="font-body text-xs font-light text-white/50 mt-1">dengan budget sama.</div>
</div>

<div className="relative reveal delay-2">
<div className="absolute w-[10px] h-[10px] bg-dark border-[2px] border-red -left-[31px] top-1"></div>
<div className="font-body text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">Dwi, toko fashion Shopee</div>
<p className="font-body text-sm font-light text-white leading-relaxed mb-3">
            Sudah coba boost post 6 bulan. Setelah setup ulang campaign objective dan audience di hari ke-7, cost per purchase turun dari Rp 87.000 ke:
          </p>
<div className="font-display text-4xl sm:text-5xl font-extrabold text-white">Rp 31.000</div>
</div>

<div className="relative reveal delay-3">
<div className="absolute w-[10px] h-[10px] bg-dark border-[2px] border-red -left-[31px] top-1"></div>
<div className="font-body text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">Yuni, jasa catering rumahan</div>
<p className="font-body text-sm font-light text-white leading-relaxed mb-3">
            Tidak punya tim marketing. Pakai template creative bonus, iklan pertama yang 'masuk akal' jalan di hari ke-10:
          </p>
<div className="font-display text-4xl sm:text-5xl font-extrabold text-white">14 inquiry</div>
<div className="font-body text-xs font-light text-white/50 mt-1">dalam seminggu.</div>
</div>
</div>
</section>

<section className="w-full bg-neutral px-5 py-24 flex flex-col" id="section-6">
<div className="reveal mb-12 border-b-[4px] border-ink pb-8">
<h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-[1.1] tracking-tighter mb-4">
          Bukan Kursus. Ini Kit Perbaikan untuk Akun Iklan Kamu.
        </h2>
<h3 className="font-body text-sm font-semibold text-ink/70">
          Setiap modul menjawab satu pertanyaan yang sudah lama menggantung.
        </h3>
</div>
<div className="flex flex-col w-full reveal delay-1">

<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4">
<div className="w-8 shrink-0 text-xs font-semibold text-red uppercase tracking-widest mt-1">M1</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold">Kenapa iklan kamu tidak converting?</strong> Audit akun dari nol, temukan lubang yang selama ini bocorkan budget.
          </p>
</div>
<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4">
<div className="w-8 shrink-0 text-xs font-semibold text-red uppercase tracking-widest mt-1">M2</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold">Setup campaign yang benar untuk bisnis ukuran kamu.</strong> Bukan untuk brand dengan budget 100 juta per bulan.
          </p>
</div>
<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4">
<div className="w-8 shrink-0 text-xs font-semibold text-red uppercase tracking-widest mt-1">M3</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold">Cara baca data yang sebenarnya penting.</strong> Dari 20 metrik di dashboard, hanya 4 yang perlu kamu pantau setiap hari.
          </p>
</div>
<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4">
<div className="w-8 shrink-0 text-xs font-semibold text-red uppercase tracking-widest mt-1">M4</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold">Struktur creative yang bisa diulang.</strong> Bukan satu viral, tapi sistem yang konsisten.
          </p>
</div>
<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4">
<div className="w-8 shrink-0 text-xs font-semibold text-red uppercase tracking-widest mt-1">M5</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold">Scaling tanpa gambling.</strong> Kapan dan berapa naikkan budget tanpa bunuh performa.
          </p>
</div>
<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4">
<div className="w-8 shrink-0 text-xs font-semibold text-red uppercase tracking-widest mt-1">M6</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold">Troubleshooting langsung.</strong> Iklan tiba-tiba mati, ROAS turun, CPM melonjak, ada jawabannya.
          </p>
</div>

<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4 bg-primary/5 -mx-5 px-5">
<div className="w-8 shrink-0 mt-0.5">
<span className="bg-primary text-white text-[10px] px-1.5 py-0.5 uppercase tracking-wider font-semibold">B1</span>
</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold text-primary">3 template creative ads proven.</strong> Tinggal ganti foto dan copy kamu, framework-nya sudah terbukti.
          </p>
</div>
<div className="flex flex-row items-start border-t border-[#D4D4D0] py-5 gap-4 bg-primary/5 -mx-5 px-5">
<div className="w-8 shrink-0 mt-0.5">
<span className="bg-primary text-white text-[10px] px-1.5 py-0.5 uppercase tracking-wider font-semibold">B2</span>
</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold text-primary">Spreadsheet budget tracker.</strong> Tidak perlu hitung manual, tidak perlu buka Ads Manager tiap jam.
          </p>
</div>
<div className="flex flex-row items-start border-y border-[#D4D4D0] py-5 gap-4 bg-primary/5 -mx-5 px-5">
<div className="w-8 shrink-0 mt-0.5">
<span className="bg-primary text-white text-[10px] px-1.5 py-0.5 uppercase tracking-wider font-semibold">B3</span>
</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
<strong className="font-semibold text-primary">Private group diskusi dan 2x live QnA per bulan.</strong> Kamu tidak belajar sendirian.
          </p>
</div>
</div>
</section>

<section className="w-full bg-newsprint px-5 py-24 flex flex-col" id="section-7">
<div className="reveal mb-14">
<h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.1] tracking-tighter mb-4">
          Kursus Ini Bukan untuk Semua Orang. Cek Dulu.
        </h2>
<h3 className="font-body text-sm font-light text-ink/70">
          Kamu cocok masuk jika situasinya seperti ini.
        </h3>
</div>
<div className="flex flex-col gap-8 w-full mb-12">
<div className="border-l-[4px] border-primary pl-5 reveal delay-1 py-1">
<div className="font-body text-xs font-semibold uppercase tracking-widest text-primary mb-3">COCOK UNTUK KAMU JIKA:</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
            Kamu sudah pernah pasang iklan Meta minimal sekali dan hasilnya mengecewakan. Kamu punya produk atau jasa yang sudah terjual secara organik, iklan cuma belum jalan. Kamu siap kerja 1 jam per hari selama 14 hari, bukan hanya nonton.
          </p>
</div>
<div className="border-l-[4px] border-red pl-5 reveal delay-2 py-1">
<div className="font-body text-xs font-semibold uppercase tracking-widest text-red mb-3">BELUM COCOK JIKA:</div>
<p className="font-body text-sm font-light text-ink leading-relaxed">
            Kamu belum punya produk sama sekali dan masih di tahap ide. Kamu cari cara instan tanpa mau pahami prosesnya. Kamu tidak punya akun Meta Ads aktif atau tidak bisa akses Ads Manager.
          </p>
</div>
</div>
<p className="font-display italic text-xl sm:text-2xl font-light text-ink text-left w-full reveal delay-3 border-t border-ink/20 pt-8 mb-10">
        Jika kamu masuk deskripsi pertama, kamu persis orang yang dirancang untuk ikut kursus ini.
      </p>
<div className="w-full reveal delay-3">
<a className="btn-primary" href="#section-8">
<span className="flex flex-col items-center">
<span>Daftar Batch Ini</span>
<span className="text-xs tracking-normal mt-1 opacity-90">Rp 297.000</span>
</span>
</a>
</div>
</section>

<section className="w-full bg-dark px-5 py-24 flex flex-col border-y-[8px] border-red relative" id="section-8">

<div className="absolute -top-[16px] left-1/2 -translate-x-1/2 bg-red px-6 py-2 border-2 border-dark shadow-[4px_4px_0px_#1A1614] z-10">
<span className="font-body text-xs font-semibold uppercase tracking-widest text-white">BATCH TERBATAS</span>
</div>
<div className="reveal mb-12 pt-6">
<h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tighter mb-4">
          Rp 297.000 atau Terus Buang Jutaan Tanpa Arah?
        </h2>
<h3 className="font-body text-sm font-light text-white/60">
          Hitung dulu sebelum skip bagian ini.
        </h3>
</div>
<div className="space-y-6 reveal delay-1 mb-12">
<p className="font-body text-base font-light text-white leading-relaxed">
          Kamu sudah habis berapa untuk iklan yang tidak balik modal? Rp 2 juta? 5 juta? Lebih?
        </p>
<p className="font-body text-base font-semibold text-accent leading-relaxed">
          Rp 297.000 adalah biaya satu kali untuk berhenti mengulang kesalahan yang sama setiap bulan. Bukan biaya belajar. Ini biaya berhenti bocor.
        </p>
</div>

<div className="w-full border-2 border-red p-6 mb-10 reveal delay-2 flex flex-col items-center bg-dark text-center">
<span className="font-display text-5xl sm:text-6xl font-extrabold text-red block mb-2">Rp 297.000</span>
<span className="font-display text-xl sm:text-2xl font-light text-white/50 line-through decoration-2 mb-8">vs Rp 497.000</span>
<p className="font-body text-sm font-light text-white leading-relaxed mb-6 text-left w-full border-t border-white/10 pt-6">
          Harga ini berlaku untuk batch ini saja. Setelah batch ditutup, harga naik ke Rp 497.000. Bukan countdown palsu. Batch terbatas karena ada sesi live QnA yang perlu bisa ditangani dengan benar.
        </p>

<div className="flex gap-4 justify-center w-full">
<div className="bg-red text-newsprint font-mono text-3xl font-semibold p-4 flex flex-col items-center justify-center min-w-[5rem] shadow-[4px_4px_0px_#FAFAF7]">
<span id="hours">23</span>
<span className="text-[9px] font-body uppercase tracking-widest mt-2">JAM</span>
</div>
<div className="bg-red text-newsprint font-mono text-3xl font-semibold p-4 flex flex-col items-center justify-center min-w-[5rem] shadow-[4px_4px_0px_#FAFAF7]">
<span id="minutes">59</span>
<span className="text-[9px] font-body uppercase tracking-widest mt-2">MENIT</span>
</div>
<div className="bg-red text-newsprint font-mono text-3xl font-semibold p-4 flex flex-col items-center justify-center min-w-[5rem] shadow-[4px_4px_0px_#FAFAF7]">
<span id="seconds">59</span>
<span className="text-[9px] font-body uppercase tracking-widest mt-2">DETIK</span>
</div>
</div>
</div>
<div className="space-y-6 reveal delay-3 mb-12">
<p className="font-body text-base font-light text-white leading-relaxed text-center">
          Kalau kamu lewatkan batch ini, bayar Rp 200.000 lebih mahal, atau tunggu batch berikutnya sambil budget iklan kamu terus jalan tanpa sistem.
        </p>
</div>
<div className="w-full reveal delay-3">
<button className="btn-primary" onclick="alert('Checkout initiated')">
<span className="flex flex-col items-center">
<span>Daftar Batch Ini</span>
<span className="text-xs tracking-normal mt-1 opacity-90">Rp 297.000</span>
</span>
</button>
</div>
</section>

<section className="w-full bg-neutral px-5 py-24 flex flex-col" id="section-9">
<div className="reveal mb-12">
<h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-[1.1] tracking-tighter mb-4">
          Jawaban untuk 4 Keberatan yang Biasanya Menahan Orang
        </h2>
</div>
<div className="w-full flex flex-col reveal delay-1">
<details className="group border-t-[2px] border-ink py-6">
<summary className="flex justify-between items-start cursor-pointer w-full text-left">
<div className="flex gap-3">
<span className="font-display italic text-xl text-red">Q:</span>
<span className="font-body text-base font-semibold text-ink leading-snug mt-1">Saya awam banget soal Meta Ads, bisa ngikutin?</span>
</div>
<span className="font-body text-lg font-extrabold text-ink shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200">+</span>
</summary>
<div className="mt-4 pl-8">
<span className="font-display italic text-xl text-ink/30 absolute -ml-8">A:</span>
<p className="font-body text-sm font-light text-ink leading-relaxed">
              Bisa. Kursus ini dimulai dari audit akun, bukan asumsi kamu sudah paham. Kalau kamu bisa buka Ads Manager, kamu bisa mulai modul 1.
            </p>
</div>
</details>
<details className="group border-t border-ink/30 py-6">
<summary className="flex justify-between items-start cursor-pointer w-full text-left">
<div className="flex gap-3">
<span className="font-display italic text-xl text-red">Q:</span>
<span className="font-body text-base font-semibold text-ink leading-snug mt-1">Bagaimana kalau setelah ikut saya masih boncos?</span>
</div>
<span className="font-body text-lg font-extrabold text-ink shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200">+</span>
</summary>
<div className="mt-4 pl-8">
<span className="font-display italic text-xl text-ink/30 absolute -ml-8">A:</span>
<p className="font-body text-sm font-light text-ink leading-relaxed">
              Ada garansi 14 hari. Kalau kamu sudah jalankan semua modul dan hasilnya tidak ada perubahan sama sekali, refund penuh. Tanpa pertanyaan panjang.
            </p>
</div>
</details>
<details className="group border-t border-ink/30 py-6">
<summary className="flex justify-between items-start cursor-pointer w-full text-left">
<div className="flex gap-3">
<span className="font-display italic text-xl text-red">Q:</span>
<span className="font-body text-base font-semibold text-ink leading-snug mt-1">Apakah ini untuk semua jenis bisnis?</span>
</div>
<span className="font-body text-lg font-extrabold text-ink shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200">+</span>
</summary>
<div className="mt-4 pl-8">
<span className="font-display italic text-xl text-ink/30 absolute -ml-8">A:</span>
<p className="font-body text-sm font-light text-ink leading-relaxed">
              Untuk bisnis yang jual produk atau jasa dan sudah punya permintaan organik. Metode ini tidak cocok untuk bisnis yang belum punya pelanggan sama sekali.
            </p>
</div>
</details>
<details className="group border-y-[2px] border-ink py-6">
<summary className="flex justify-between items-start cursor-pointer w-full text-left">
<div className="flex gap-3">
<span className="font-display italic text-xl text-red">Q:</span>
<span className="font-body text-base font-semibold text-ink leading-snug mt-1">Kontennya bisa diakses selamanya?</span>
</div>
<span className="font-body text-lg font-extrabold text-ink shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200">+</span>
</summary>
<div className="mt-4 pl-8">
<span className="font-display italic text-xl text-ink/30 absolute -ml-8">A:</span>
<p className="font-body text-sm font-light text-ink leading-relaxed">
              Ya. Plus kamu dapat akses ke rekaman semua sesi live QnA selama batch ini berjalan.
            </p>
</div>
</details>
</div>
</section>

<section className="w-full bg-newsprint px-5 py-24 flex flex-col pb-48" id="section-10">
<div className="reveal mb-8">
<h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05] tracking-tighter mb-6 text-left">
          Setup Iklan Kamu Bisa Dibenerin. Mulai Hari Ini.
        </h2>
<h3 className="font-display italic text-xl font-light text-ink/70 leading-snug">
          Iklan kamu bukan boncos karena produknya jelek. Setup-nya yang salah. 14 hari, kita benerin bareng.
        </h3>
</div>
<div className="w-full h-[8px] bg-red mb-10 reveal delay-1"></div>
<div className="w-full reveal delay-2 mb-6 text-center">
<p className="font-body text-sm font-light text-ink mb-6">Daftar Batch Ini , Rp 297.000</p>
<button className="btn-primary" onclick="alert('Checkout initiated')">
<span className="flex flex-col items-center">
<span>Daftar Batch Ini</span>
<span className="text-xs tracking-normal mt-1 opacity-90">Rp 297.000</span>
</span>
</button>
</div>
<p className="font-body text-[13px] font-light italic text-red text-center mt-4 reveal delay-3 px-4">
        Setiap hari kamu tunda, budget iklan kamu jalan dengan sistem yang sama yang sudah terbukti tidak bekerja.
      </p>
</section>

<div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] bg-ink border-t-[2px] border-red p-4 translate-y-full transition-transform duration-300 ease-out z-50" id="sticky-cta">
<button className="btn-primary !min-h-[48px] !py-3" onclick="alert('Checkout initiated')">
<span className="flex items-center gap-2">
<span>Daftar Batch Ini</span>
<span className="text-white/50 text-xs mt-0.5">•</span>
<span className="text-xs mt-0.5">Rp 297.000</span>
</span>
</button>
</div>
</main>


    </>
  );
}
