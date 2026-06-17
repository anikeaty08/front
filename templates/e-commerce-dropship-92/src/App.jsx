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
theme: {
extend: {
colors: {
primary: '#1E3A8A',
accent: '#60A5FA',
neutral: '#F0F4FF',
'neutral-dark': '#E5EDFB',
'dark-bg': '#1A1614',
'yellow-hlt': '#FDE68A',
'note-bg': '#FEF9C3',
'note-border': '#F59E0B'
},
fontFamily: {
display: ['Lora', 'serif'],
body: ['Plus Jakarta Sans', 'sans-serif'],
},
fontSize: {
'xs': '0.75rem',
'sm': '0.875rem',
'base': '1rem',
'lg': '1.125rem',
'xl': '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
'6xl': '3.75rem',
'7xl': '4.5rem',
}
}
}
}



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
      
<main className="w-full flex flex-col">

<section className="section-container pt-16 pb-20 md:pt-24 md:pb-28" id="section-1">
<div className="content-wrapper content-rel">
<h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6 text-primary">
                    Ini Bukan E-Book.<br/>
<span className="stabilo text-[#1A1614]">Ini Sistem Kerja yang Sudah Jalan.</span>
</h2>
<h3 className="font-display font-medium text-xl md:text-2xl mb-10 text-primary/80">
                    87 halaman bukan teori. Ini persis yang Rena pakai dari hari pertama sampai omset 15jt per bulan.
                </h3>
<div className="flex flex-col gap-6 text-[15px] text-[#1A1614] opacity-90">
<p>
                        Kebanyakan e-book dropship isinya hal yang sama: "riset produk," "cari supplier," "upload foto." Kamu beli, baca, terus bingung mulai dari mana.
                    </p>
<p>
                        Yang ini beda. Setiap bagian ada langkah konkret, link langsung ke 12 supplier, template yang <span className="relative inline-block font-semibold">tinggal copy-paste<svg className="absolute w-full h-[6px] -bottom-[2px] left-0 text-accent rotate-[-1deg]" fill="none" preserveaspectratio="none" viewbox="0 0 100 10" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5C25.5 2.5 75.5 8.5 99 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></svg></span>, dan tools gratis yang bisa dipakai hari ini.
                    </p>
<p className="font-semibold text-primary mt-2">
                        Bukan panduan untuk dipelajari. Ini alat kerja untuk langsung dijalankan.
                    </p>
</div>
</div>
</section>

<section className="section-container bg-neutral-dark py-20 torn-top" id="section-2">
<div className="content-wrapper content-rel flex flex-col gap-10">

<div className="w-full max-w-[220px] mx-auto border-[3px] border-primary rounded-[32px] p-2 bg-neutral shadow-sm rotate-[1.5deg] self-start md:self-center mr-auto ml-2">
<div className="w-full h-full border border-primary/10 rounded-[22px] bg-white px-4 py-8 flex flex-col items-center justify-center gap-2 min-h-[260px] relative overflow-hidden">

<div className="absolute top-0 w-[40%] h-[12px] bg-primary rounded-b-[8px]"></div>
<div className="text-center font-display font-bold text-2xl text-primary leading-tight mt-4">
                            4 bulan.<br/>0 jadi 15jt.
                        </div>
</div>
</div>
<div className="flex flex-col">
<h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-4 text-primary">
                        Rena Bukan Siapa-Siapa.<br/>
                        Itu yang Bikin Ini Relevan.
                    </h2>
<h3 className="text-base md:text-lg font-medium text-primary/70 mb-8 italic pr-4">
                        Bukan influencer. Bukan lulusan bisnis. Ibu rumah tangga dengan HP Android lama dan waktu kurang dari 2 jam sehari.
                    </h3>
<div className="flex flex-col gap-5 text-[15px] opacity-90 pl-1 border-l-2 border-accent/30">
<p>
                            Waktu mulai, Rena masih kerja kantoran. Gaji pas-pasan. Anaknya masih kecil. HP-nya lemot kalau buka 2 aplikasi sekalian.
                        </p>
<p>
                            Tidak ada modal awal. Tidak ada kenalan supplier. Tidak ada pengalaman jualan online sama sekali.
                        </p>
<p className="font-medium bg-white/50 p-3 rounded-lg border border-primary/5 mt-2">
                            Kalau kamu punya kondisi yang lebih baik dari itu, kamu sudah selangkah lebih maju dari titik Rena mulai.
                        </p>
</div>
</div>
</div>
</section>

<section className="section-container bg-neutral py-24 torn-top" id="section-3">
<div className="content-wrapper content-rel relative">
<h2 className="font-display font-bold text-3xl md:text-[34px] tracking-tight leading-tight mb-5 text-primary">
                    Satu Malam Rena Ubah Cara Dia Pilih Produk.
                </h2>
<h3 className="text-base font-semibold text-accent mb-10">
                    Bukan kerja lebih keras. Bukan tambah modal. Cuma satu keputusan yang beda.
                </h3>
<div className="relative border-l-[1.5px] border-primary/20 pl-5 flex flex-col gap-6 text-[15px] py-2">
<p>
                        Rena pernah jualan dan sepi selama 6 minggu. Bukan karena malas. Tapi karena dia pilih produk berdasarkan suka, bukan data.
                    </p>
<div className="relative">

<div className="absolute -right-2 top-0 sticky-note px-3 py-1.5 z-20 w-fit">
<span className="font-display italic text-sm text-primary font-medium">halaman 14</span>
</div>
<p className="pr-16 relative z-10">
                            Malam itu dia belajar satu cara riset gratis yang bisa lihat produk apa yang sedang naik sebelum orang lain sadar. Besoknya dia ganti produk. Minggu pertama sudah ada 3 orderan.
                        </p>
</div>
<p className="font-medium text-primary mt-4">
                        Metode riset itu ada di halaman 14. Itu titik balik Rena. Dan itu yang pertama kamu baca di e-book ini.
                    </p>
</div>
</div>
</section>

<section className="section-container bg-dark-bg py-24 text-white" id="section-4">
<div className="content-wrapper content-rel flex flex-col">
<h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-4">
                    Isi E-Book Ini Dirancang<br/>
                    Buat Kondisi Kamu.
                </h2>
<h3 className="text-base md:text-lg text-white/70 mb-12">
                    Setiap bagian menjawab satu ketakutan spesifik yang mungkin kamu rasakan sekarang.
                </h3>

<div className="w-full aspect-video border-[4px] border-white/10 rounded-[20px] bg-[#2A2421] relative flex items-center justify-center mb-10 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent flex items-end p-5">
<span className="font-display italic text-lg text-white opacity-90">Preview Sistem 2025</span>
</div>
<div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center cursor-pointer z-10 transition-transform hover:scale-105">
<iconify-icon className="text-primary text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-5 text-sm md:text-[15px] text-white/80 mb-12">
<p className="flex items-start gap-3">
<span className="text-accent mt-1 flex-shrink-0"><iconify-icon className="text-xs" icon="solar:record-circle-bold"></iconify-icon></span>
<span><strong className="text-white">Takut gak punya modal:</strong> Cara mulai dari Rp 0, tanpa stok, tanpa DP ke supplier. Semua dijelaskan di bab pertama.</span>
</p>
<p className="flex items-start gap-3">
<span className="text-accent mt-1 flex-shrink-0"><iconify-icon className="text-xs" icon="solar:record-circle-bold"></iconify-icon></span>
<span><strong className="text-white">Bingung riset produk:</strong> Metode riset trending yang Rena pakai, langkah per langkah, pakai tools gratis yang ada di HP kamu sekarang.</span>
</p>
<p className="flex items-start gap-3">
<span className="text-accent mt-1 flex-shrink-0"><iconify-icon className="text-xs" icon="solar:record-circle-bold"></iconify-icon></span>
<span><strong className="text-white">Gak tau supplier mana yang aman:</strong> 12 supplier terpercaya dengan link langsung. Sudah diverifikasi. Tidak perlu cari sendiri.</span>
</p>
<p className="flex items-start gap-3">
<span className="text-accent mt-1 flex-shrink-0"><iconify-icon className="text-xs" icon="solar:record-circle-bold"></iconify-icon></span>
<span><strong className="text-white">Gak pinter closing:</strong> Template chat yang tinggal ganti nama pembeli. Sudah dipakai Rena untuk ratusan orderan.</span>
</p>
<p className="flex items-start gap-3">
<span className="text-accent mt-1 flex-shrink-0"><iconify-icon className="text-xs" icon="solar:record-circle-bold"></iconify-icon></span>
<span><strong className="text-white">Gak ada waktu ngurusin orderan:</strong> Tutorial cara automate proses pakai tools gratis, jadi orderan jalan meski kamu lagi kerja.</span>
</p>
<div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
<p className="italic">3 video tutorial juga tersedia, durasi total di bawah 40 menit, bisa ditonton sambil rebahan.</p>
</div>
</div>
<a className="btn-rena min-h-[52px]" href="#section-8">
                    Beli Sekarang — Rp 79.000
                </a>
</div>
</section>

<section className="section-container bg-neutral-dark py-24 torn-top" id="section-5">
<div className="content-wrapper content-rel flex flex-col">
<div className="text-primary opacity-20 mb-2">
<iconify-icon className="text-6xl" icon="solar:quote-left-bold"></iconify-icon>
</div>
<h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4 text-primary">
                    Dimulai Kecil. Tetap Nyata.
                </h2>
<h3 className="text-base font-medium text-primary/70 mb-12">
                    Sebelum 15jt per bulan, ada minggu pertama dengan 3 orderan. Begini jalannya.
                </h3>

<div className="relative flex flex-col gap-4 mb-10">

<div className="bg-neutral p-6 rounded-2xl shadow-[4px_6px_12px_rgba(30,58,138,0.06)] border border-white rotate-[-0.8deg] z-10 mr-4">
<h4 className="font-display font-bold text-xl md:text-[28px] text-primary mb-5 leading-tight">3 orderan, minggu pertama</h4>
<div className="flex flex-col gap-4 text-sm text-[#1A1614] opacity-90">
<p><strong className="text-primary font-semibold">Minggu 1:</strong> 3 orderan masuk. Total Rp 270.000 profit. Bukan banyak, tapi nyata.</p>
<p><strong className="text-primary font-semibold">Bulan 2:</strong> Konsisten 40 sampai 60 orderan per bulan. Rena masih kerja kantoran.</p>
<p><strong className="text-primary font-semibold">Bulan 4:</strong> Rena resign bukan karena dipaksa, tapi karena penghasilan dropship-nya sudah 2x gaji.</p>
</div>
</div>

<div className="bg-white p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-primary/5 ml-8 -mt-6 z-20 relative">
<p className="font-body italic text-sm md:text-[15px] leading-relaxed text-[#1A1614] opacity-80">
                            "Aku <span className="stabilo">screenshot semua chat pertama</span>. Sampai sekarang masih tersimpan. Itu yang bikin aku percaya ini bisa terus jalan."
                        </p>
</div>
</div>
<p className="text-sm text-center opacity-70 bg-primary/5 p-3 rounded-lg italic">
                    Angka ini bukan jaminan kamu dapat sama. Tapi ini bukti titik awalnya tidak perlu besar.
                </p>
</div>
</section>

<section className="section-container bg-neutral py-24 torn-top" id="section-6">
<div className="content-wrapper content-rel">
<h2 className="font-display font-bold text-3xl md:text-[32px] tracking-tight leading-tight mb-4 text-primary">
                    Jujur: Ini Bukan Untuk Semua Orang.
                </h2>
<h3 className="text-base md:text-lg font-medium text-[#1A1614]/60 mb-14 border-b border-primary/10 pb-4 inline-block">
                    Baca ini dulu sebelum beli.
                </h3>
<div className="flex flex-col gap-12 text-[15px]">

<div className="relative">
<div className="absolute -left-2 -top-4 text-accent/20">
<svg fill="none" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="font-bold text-lg mb-3 text-primary relative z-10 flex items-center gap-2">
                            Cocok buat kamu kalau:
                        </h4>
<p className="opacity-90 pl-1 leading-relaxed">
                            Kamu masih kerja dan cari side income yang gak ganggu waktu kerja. Kamu belum punya modal besar tapi mau mulai. Kamu mau sistem yang sudah teruji, bukan eksperimen sendiri dari nol.
                        </p>
</div>

<div className="relative pl-6 md:pl-12 mt-6">
<div className="absolute left-2 -top-4 text-red-500/10">
<svg fill="none" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="font-bold text-lg mb-3 text-[#1A1614] opacity-80 relative z-10">
                            Kurang cocok kalau:
                        </h4>
<p className="opacity-80 leading-relaxed">
                            Kamu cari cara cepat kaya dalam seminggu. Kamu sudah punya sistem dropship yang jalan dan cuma butuh optimasi lanjutan. Kamu tidak mau lakukan apapun, mau hasilnya langsung datang.
                        </p>
</div>
<div className="mt-8 relative">
<div className="absolute -left-4 top-1/2 -translate-y-1/2 text-primary/10 rotate-90 hidden md:block">
<iconify-icon className="text-4xl" icon="solar:arrow-right-line-duotone"></iconify-icon>
</div>
<p className="font-semibold text-primary p-5 bg-white rounded-xl shadow-sm border border-primary/5 relative z-10">
                            Kalau kamu masuk <span className="stabilo relative inline-block">kelompok pertama<span className="absolute -right-6 -top-5 text-[10px] font-display italic text-accent rotate-[1.2deg] bg-white px-1 shadow-sm border border-black/5 rounded">ya, kamu</span></span>, e-book ini bisa jadi alat kerja yang paling praktis yang pernah kamu beli.
                        </p>
</div>
</div>
</div>
</section>

<section className="section-container bg-neutral-dark py-24 torn-top" id="section-7">
<div className="content-wrapper content-rel flex flex-col">
<h2 className="font-display font-bold text-3xl md:text-[34px] tracking-tight leading-tight mb-4 text-primary">
                    Beberapa Hal yang Mungkin<br/>
                    Kamu Pikirin Sekarang.
                </h2>
<h3 className="text-base font-medium text-primary/70 mb-12 italic">
                    Rena sendiri pernah punya pertanyaan yang sama.
                </h3>
<div className="flex flex-col gap-4">

<details className="group bg-[#FAFAF8] rounded-lg border-l-[3px] border-accent shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
<summary className="p-5 font-bold text-[15px] text-primary flex justify-between items-start gap-4 hover:bg-black/[0.02] transition-colors">
<span className="leading-snug">Q: Aku kerja full time, gak ada waktu. Gimana?</span>
<span className="toggle-icon text-accent font-display text-xl leading-none mt-0.5"></span>
</summary>
<div className="px-5 pb-5 text-sm opacity-80 leading-relaxed border-t border-black/5 pt-3">
                            A: <span className="group-open:stabilo transition-all duration-500">Rena mulai dengan 1 jam per malam.</span> Sistem di e-book ini dirancang untuk kondisi itu. Automate yang bisa di-automate, sisanya memang butuh waktu tapi tidak sebanyak yang kamu pikir.
                        </div>
</details>

<details className="group bg-[#FAFAF8] rounded-lg border-l-[3px] border-accent shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
<summary className="p-5 font-bold text-[15px] text-primary flex justify-between items-start gap-4 hover:bg-black/[0.02] transition-colors">
<span className="leading-snug">Q: Aku pernah coba dropship dan gagal. Kenapa kali ini beda?</span>
<span className="toggle-icon text-accent font-display text-xl leading-none mt-0.5"></span>
</summary>
<div className="px-5 pb-5 text-sm opacity-80 leading-relaxed border-t border-black/5 pt-3">
                            A: <span className="group-open:stabilo transition-all duration-500">Kemungkinan besar kamu pilih produk sembarangan atau supplier yang tidak aman.</span> Dua masalah itu punya solusi konkret di e-book ini, lengkap dengan link supplier yang sudah diverifikasi.
                        </div>
</details>

<details className="group bg-[#FAFAF8] rounded-lg border-l-[3px] border-accent shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
<summary className="p-5 font-bold text-[15px] text-primary flex justify-between items-start gap-4 hover:bg-black/[0.02] transition-colors">
<span className="leading-snug">Q: Konten YouTube tentang dropship kan banyak dan gratis. Apa bedanya?</span>
<span className="toggle-icon text-accent font-display text-xl leading-none mt-0.5"></span>
</summary>
<div className="px-5 pb-5 text-sm opacity-80 leading-relaxed border-t border-black/5 pt-3">
                            A: <span className="group-open:stabilo transition-all duration-500">YouTube kasih kamu konten terpencar dari banyak orang dengan pengalaman berbeda.</span> E-book ini satu sistem dari satu orang yang sudah jalankan sendiri, urut dari hari pertama sampai bulan keempat. Konteksnya berbeda.
                        </div>
</details>

<details className="group bg-[#FAFAF8] rounded-lg border-l-[3px] border-accent shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
<summary className="p-5 font-bold text-[15px] text-primary flex justify-between items-start gap-4 hover:bg-black/[0.02] transition-colors">
<span className="leading-snug">Q: 79 ribu worth it gak sih?</span>
<span className="toggle-icon text-accent font-display text-xl leading-none mt-0.5"></span>
</summary>
<div className="px-5 pb-5 text-sm opacity-80 leading-relaxed border-t border-black/5 pt-3">
                            A: <span className="group-open:stabilo transition-all duration-500">Kalau kamu dapat 1 orderan pertama karena sistem ini, kamu sudah balik modal.</span> Kalau tidak dapat apa-apa dalam 30 hari, Rena kasih refund.
                        </div>
</details>
</div>
</div>
</section>

<section className="section-container bg-primary py-28 text-white relative torn-top" id="section-8">
<div className="content-wrapper content-rel flex flex-col items-center text-center">
<h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-5">
                    Rp 79.000 untuk Sistem<br/>
                    yang Sudah Terbukti Jalan.
                </h2>
<h3 className="text-[15px] text-white/80 mb-12 max-w-md mx-auto leading-relaxed">
                    Harga normal Rp 149.000. Kamu dapat e-book 87 halaman, 12 link supplier, template closing, dan 3 video tutorial.
                </h3>
<div className="flex flex-col items-center mb-8">
<div className="flex items-baseline justify-center gap-3 font-display">
<span className="text-white/50 line-through text-lg font-body">149.000</span>
<span className="text-5xl md:text-[52px] font-bold text-white tracking-tight">79.000</span>
</div>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-10">
<span className="bg-yellow-hlt text-[#1A1614] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">87 hal</span>
<span className="bg-yellow-hlt text-[#1A1614] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">12 supplier</span>
<span className="bg-yellow-hlt text-[#1A1614] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">3 video</span>
</div>
<div className="w-full max-w-sm mb-12 flex flex-col gap-4 text-sm text-white/70">
<p className="bg-white/10 p-3 rounded-lg border border-white/5">
                        Langsung dapat akses setelah bayar. Tidak perlu nunggu email. Tidak ada syarat tambahan.
                    </p>
<p>
                        Bukan tentang rugi kalau tidak beli. Tapi kalau kamu serius mau mulai side income tahun ini, ini salah satu langkah paling konkret yang bisa kamu ambil hari ini.
                    </p>
</div>
<a className="btn-rena btn-rena-inverse min-h-[52px]" href="#">
                    Beli Sekarang — Rp 79.000
                </a>
</div>
</section>

<section className="section-container bg-neutral bg-grain py-24 pb-32 torn-top" id="section-9">
<div className="content-wrapper content-rel flex flex-col items-center text-center">
<h2 className="font-display font-bold text-2xl md:text-[30px] tracking-tight leading-tight mb-4 text-primary max-w-sm">
                    Kalau <span className="stabilo">30 Hari</span> Gak Ada Manfaatnya,<br/>
                    Bilang ke Aku.
                </h2>
<h3 className="text-[15px] font-medium text-[#1A1614]/60 mb-10">
                    Rena kasih full refund. Tidak perlu alasan panjang.
                </h3>
<div className="flex flex-col gap-5 text-[15px] text-left w-full max-w-[340px] opacity-90 mx-auto mb-14">
<p>
                        Serius. Kalau kamu baca e-booknya, coba sistemnya, dan dalam 30 hari kamu merasa ini tidak kasih nilai apapun buat kamu, <span className="relative inline-block font-semibold text-primary">DM langsung<svg className="absolute w-[110%] h-[5px] -bottom-[1px] -left-[5%] text-accent" fill="none" preserveaspectratio="none" viewbox="0 0 100 10" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C30 3 70 7 98 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg></span> dan Rena kembalikan uangnya.
                    </p>
<p>
                        Bukan karena Rena yakin kamu pasti sukses dalam 30 hari. Tapi karena Rena yakin sistem ini layak untuk dicoba, dan kamu tidak seharusnya menanggung risikonya sendirian.
                    </p>
<p className="font-display italic font-semibold text-primary text-center mt-4">
                        Satu langkah kecil. Tidak ada yang hilang.
                    </p>
</div>
<a className="btn-rena min-h-[52px]" href="#section-8">
                    Beli Sekarang — Rp 79.000
                </a>
</div>
</section>
</main>

    </>
  );
}
