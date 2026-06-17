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
      
<main className="w-full">

<section className="relative bg-[var(--brand-bg-dark)] px-5 py-20 md:py-32 overflow-hidden items-start justify-center min-h-[90vh]">
<div className="grain-overlay"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-10">
<div className="flex flex-col gap-4">
<h2 className="display-font text-huge font-bold text-white text-left break-words">
<span className="text-[var(--brand-red)]">katanya capek</span><br/>dan pingin resign
                </h2>
<div className="rule-red-thick w-full my-2"></div>
<h3 className="display-font text-xl md:text-3xl font-semibold text-white tracking-tight">
                    tapi kok sampe sekarang cuma jadi rencana?
                </h3>
</div>
<div className="flex flex-col gap-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
<p>
                    Kamu tau kamu harus resign, tapi karna masih sibuk kerja akhirnya ga sempet dan bahkan gatau harus mulai dari mana buat siapin semuanya
                </p>
<p className="font-semibold text-white">
                    Dan 'siap' itu nggak pernah dateng karena kamu nggak pernah mulai.
                </p>
</div>
<div className="mt-4 w-full sm:w-auto self-start">
<button className="btn-raw text-base">Gue mau siap sekarang</button>
</div>
</div>
</section>

<section className="relative bg-[var(--brand-bg-muted)] text-[var(--brand-black)] px-5 py-20 md:py-28 border-y-4 border-[var(--brand-black)]">
<div className="grain-overlay opacity-5"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-12">
<h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight uppercase">
                coba lihat perbedaannya
            </h2>
<div className="flex flex-col gap-8 w-full">

<div className="bg-[#2A2624] text-gray-300 p-6 md:p-10 flex flex-col gap-6 border border-[#3E3835]">
<span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-500">SEKARANG:</span>
<ul className="flex flex-col gap-4 text-base">
<li className="flex items-start gap-3">
<span className="text-gray-500 mt-1">-</span>
<span>CV belum juga ke update, masih gatau harus apply kemana</span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-500 mt-1">-</span>
<span>Scroll job portal terus tapi nggak ada lamaran yang dikirim</span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-500 mt-1">-</span>
<span>Nunda resign dari minggu ke minggu</span>
</li>
</ul>
</div>

<div className="bg-white text-[var(--brand-black)] p-6 md:p-10 flex flex-col gap-6 border-l-[6px] border-[var(--brand-red)] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
<span className="text-xs tracking-[0.2em] uppercase font-semibold text-[var(--brand-red)]">SETELAH:</span>
<ul className="flex flex-col gap-4 text-base md:text-lg font-bold display-font">
<li className="flex items-start gap-3">
<span className="text-[var(--brand-red)] mt-1">+</span>
<span>5 CV buat 5 target role beda udah siap hari ini</span>
</li>
<li className="flex items-start gap-3">
<span className="text-[var(--brand-red)] mt-1">+</span>
<span>Linkedin udah dioptimasi, portofolio &amp; cover letter udah dibuat</span>
</li>
<li className="flex items-start gap-3">
<span className="text-[var(--brand-red)] mt-1">+</span>
<span>Lamaran langsung bisa dikirim hari ini</span>
</li>
</ul>
</div>
</div>
<div className="mt-8 w-full">
<button className="btn-raw text-base">yakin gamau mulai perubahan ini?</button>
</div>
</div>
</section>

<section className="relative bg-white text-[var(--brand-black)] px-5 py-20 md:py-32 border-b-[6px] border-[var(--brand-red)]">
<div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-16">
<div className="flex flex-col gap-4">
<h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight">
                    nggak ribet, cukup 5 langkah aja
                </h2>
<h3 className="text-base md:text-xl font-medium text-gray-600">
                    dan kamu bakal dibantu selesain persiapan resignmu hari ini juga
                </h3>
</div>
<div className="flex flex-col w-full">

<div className="flex flex-col gap-4 py-8 border-t border-gray-300">
<div className="flex items-start gap-6">
<span className="text-[64px] leading-none font-bold text-[var(--brand-red)]">1.</span>
<div className="flex flex-col gap-2 pt-2">
<p className="display-font text-lg md:text-xl font-bold">Ceritain pengalaman kerjamu lewat career journal</p>
</div>
</div>
<div className="w-full bg-gray-100 aspect-video border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic mt-2">
                        [Placeholder Media / VSL / GIF]
                    </div>
</div>

<div className="flex flex-col gap-4 py-8 border-t border-gray-300">
<div className="flex items-start gap-6">
<span className="text-[64px] leading-none font-bold text-[var(--brand-red)]">2.</span>
<div className="flex flex-col gap-2 pt-2">
<p className="display-font text-lg md:text-xl font-bold">Hyred bantu riset target posisi yang cocok sama kamu</p>
</div>
</div>
<div className="w-full bg-gray-100 aspect-video border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic mt-2">
                        [Placeholder Media / VSL / GIF]
                    </div>
</div>

<div className="flex flex-col gap-4 py-8 border-t border-gray-300">
<div className="flex items-start gap-6">
<span className="text-[64px] leading-none font-bold text-[var(--brand-red)]">3.</span>
<div className="flex flex-col gap-2 pt-2">
<p className="display-font text-lg md:text-xl font-bold">CV langsung di generate otomatis buat tiap target yang kamu pilih</p>
</div>
</div>
<div className="w-full bg-gray-100 aspect-video border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic mt-2">
                        [Placeholder Media / VSL / GIF]
                    </div>
</div>

<div className="flex flex-col gap-4 py-8 border-t border-gray-300">
<div className="flex items-start gap-6">
<span className="text-[64px] leading-none font-bold text-[var(--brand-red)]">4.</span>
<div className="flex flex-col gap-2 pt-2">
<p className="display-font text-lg md:text-xl font-bold">Optimasi linkedin, buat cover letter &amp; portofoliomu</p>
</div>
</div>
<div className="w-full bg-gray-100 aspect-video border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic mt-2">
                        [Placeholder Media / VSL / GIF]
                    </div>
</div>

<div className="flex flex-col gap-4 py-8 border-t border-gray-300">
<div className="flex items-start gap-6">
<span className="text-[64px] leading-none font-bold text-[var(--brand-red)]">5.</span>
<div className="flex flex-col gap-2 pt-2">
<p className="display-font text-lg md:text-xl font-bold">Kamu tinggal kirim lamaranmu hari ini</p>
</div>
</div>
<div className="w-full bg-gray-100 aspect-video border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic mt-2">
                        [Placeholder Media / VSL / GIF]
                    </div>
</div>
</div>
</div>
</section>

<section className="relative bg-[var(--brand-bg-dark)] px-5 py-20 md:py-32">
<div className="grain-overlay"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-16">
<div className="flex flex-col gap-6">
<h2 className="display-font text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Beli sekali aja, kamu bisa dapet semuanya
                </h2>
<h3 className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                    Bukan 1 CV yang bisa kamu pakai ke semua lowongan, tapi bakal dipersonalisasi sama tiap lowongan
                </h3>
</div>
<div className="flex flex-col w-full">
<div className="py-6 border-l-2 border-[var(--brand-red)] pl-5 mb-4 bg-gradient-to-r from-[#1f1a18] to-transparent">
<p className="display-font text-lg md:text-xl font-bold text-white">5 CV untuk 5 target pekerjaan</p>
</div>
<div className="py-6 border-l-2 border-[var(--brand-red)] pl-5 mb-4 bg-gradient-to-r from-[#1f1a18] to-transparent">
<p className="display-font text-lg md:text-xl font-bold text-white">Unlimited Portfolio siap kapanpun dibutuhkan</p>
</div>
<div className="py-6 border-l-2 border-[var(--brand-red)] pl-5 mb-4 bg-gradient-to-r from-[#1f1a18] to-transparent">
<p className="display-font text-lg md:text-xl font-bold text-white">LinkedIn dioptimasi biar recruiter yang duluan nyari kamu</p>
</div>
<div className="py-6 border-l-2 border-[var(--brand-red)] pl-5 mb-8 bg-gradient-to-r from-[#1f1a18] to-transparent">
<p className="display-font text-lg md:text-xl font-bold text-white">Cover Letter yang nyambung ke lowongannya, bukan copas</p>
</div>

<div className="py-6 border-l-2 border-gray-600 pl-5 mb-4">
<span className="text-[var(--brand-red)] text-xs tracking-widest uppercase mb-2 block font-bold">BONUS</span>
<p className="display-font text-lg md:text-xl font-bold text-white">Interview Prep Kit dari persiapan awal sampai kamu pegang offer</p>
</div>
<div className="py-6 border-l-2 border-gray-600 pl-5 mb-4">
<span className="text-[var(--brand-red)] text-xs tracking-widest uppercase mb-2 block font-bold">BONUS</span>
<p className="display-font text-lg md:text-xl font-bold text-white">Support Group aktif, bisa tanya apa saja kapan saja</p>
</div>
<div className="py-6 border-l-2 border-gray-600 pl-5 mb-10">
<span className="text-[var(--brand-red)] text-xs tracking-widest uppercase mb-2 block font-bold">BONUS</span>
<p className="display-font text-lg md:text-xl font-bold text-white">Job Matching Score sebelum kirim buat check kesiapanmu</p>
</div>
</div>
<div className="w-full">
<button className="btn-raw text-base">Dapetin semuanya sekarang</button>
</div>
</div>
</section>

<section className="relative bg-white text-[var(--brand-black)] px-5 py-20 md:py-32">
<div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-16">
<h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight">
                Masih aja mau alasan biar ga mulai sekarang?
            </h2>
<div className="flex flex-col gap-12">
<div className="flex flex-col gap-3">
<p className="text-sm md:text-base italic text-gray-500">"Template gratis bisa..."</p>
<div className="rule-red-thin w-8 mb-2"></div>
<p className="display-font text-lg md:text-xl font-bold leading-relaxed">
                        Template gratis bisa, tapi kamu pasti bakal kirim satu CV yang sama ke semua lowongan dan itu nggak oke karna apa yang kamu tulis sama apa yang mereka cari nggak relevan
                    </p>
</div>
<div className="flex flex-col gap-3">
<p className="text-sm md:text-base italic text-gray-500">"Joki CV lebih gampang..."</p>
<div className="rule-red-thin w-8 mb-2"></div>
<p className="display-font text-lg md:text-xl font-bold leading-relaxed">
                        Joki CV lebih gampang, sampe kamu nggak bisa tweak CVmu sendiri, karena nggak ngerti isinya, dan akhirnya asal apply ke mana-mana.
                    </p>
</div>
<div className="flex flex-col gap-3">
<p className="text-sm md:text-base italic text-gray-500">"Belum siap..."</p>
<div className="rule-red-thin w-8 mb-2"></div>
<p className="display-font text-lg md:text-xl font-bold leading-relaxed">
                        Belum siap? Platform ini dibuat emang buat kamu yang ngerasa belum siap dan clueless. Jadi belum siap bukan alasan buat nunda resign ya
                    </p>
</div>
</div>
<div className="mt-8 w-full">
<button className="btn-raw text-base">Oke, gue mau mulai</button>
</div>
</div>
</section>

<section className="relative bg-[var(--brand-red)] px-5 py-24 md:py-32 flex flex-col items-center justify-center text-center">
<div className="grain-overlay opacity-20"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10">
<div className="flex flex-col gap-4 items-center">
<span className="text-xs tracking-[0.3em] font-bold uppercase text-black bg-white px-3 py-1 mb-4 border-2 border-black">URGENT</span>
<h2 className="display-font text-4xl md:text-6xl font-bold text-white tracking-tight uppercase max-w-2xl">
                    Harga akan naik tiap 10 orang pembeli
                </h2>
<h3 className="text-lg md:text-xl font-semibold text-white/90 bg-black px-4 py-2 mt-2">
                    Tiap 10 pembeli berikutnya, harga bakal naik Rp25.000
                </h3>
</div>
<div className="w-full h-px bg-white/30 my-4 max-w-lg"></div>
<p className="display-font text-xl md:text-2xl font-bold text-white max-w-xl">
                70% user yang sudah generate dapat panggilan interview dalam 2 minggu
            </p>
<div className="flex flex-col items-center gap-2 my-8">
<p className="text-lg md:text-xl text-white/70 line-through decoration-black decoration-4 font-semibold">
                    Harga normal Rp589.000
                </p>
<p className="text-gray-200">sekarang</p>
<p className="display-font text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                    Rp147.000
                </p>
</div>
<p className="text-base md:text-lg font-bold text-black bg-white px-6 py-3 uppercase tracking-wider mb-4 border-[3px] border-black border-dashed">
                Tapi harga ini bukan buat semua orang ya!
            </p>
<div className="w-full max-w-md">
<button className="btn-raw btn-raw-inverted text-base md:text-lg tracking-wide">Amanin slotmu sekarang</button>
</div>
</div>
</section>

<section className="relative bg-[var(--brand-bg-muted)] text-[var(--brand-black)] px-5 py-20 md:py-32 border-t-8 border-black">
<div className="grain-overlay opacity-5"></div>
<div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-12">
<h2 className="display-font text-4xl md:text-5xl font-bold tracking-tight border-b-4 border-black pb-6">
                Yang paling sering ditanyakan
            </h2>
<div className="flex flex-col divide-y-2 divide-black">

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">1. “Aku belum siap resign, takut belum cukup bagus buat apply kerja.”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Justru produk ini dibuat untuk kondisi itu.</p>
<p>Kamu nggak perlu “siap dulu” baru mulai. Di dalam platform ini, kamu bakal dipandu dari nol: mulai dari nulis pengalaman kerja, tentuin target job, sampai hasilin CV yang sesuai sama posisi yang dituju</p>
<p>Dalam kurang dari satu hari, kamu udah punya semua dokumen yang biasanya bikin kamu stuck berbulan-bulan.</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">2. “Kalau aku belum punya CV sama sekali, bisa pakai ini?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Bisa banget.</p>
<p>Kamu nggak perlu CV lama, kamu cukup isi pengalaman kerja lewat Career Journal, lalu sistem bakal bantu ubah jadi CV yang relevan dan siap kamu kirim</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">3. “Bedanya apa sama bikin CV pakai template gratis?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Template cuma bantu desain, bukan strategi</p>
<p>Masalahnya bukan di “punya CV”, tapi di:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>CV tidak sesuai posisi</li>
<li>CV terlalu general</li>
<li>Tidak lolos screening</li>
</ul>
<p>Di sini, kamu bisa dapat 5 CV berbeda buat masing-masing lowongan<br/>bukan satu CV untuk semua lamaran</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">4. “Kenapa harus 5 CV? Memang perlu?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Karena tiap posisi butuh pendekatan yang beda-beda</p>
<p>Kamu melamar sebagai:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>Data Analyst</li>
<li>Business Analyst</li>
<li>Product Analyst</li>
</ul>
<p>… itu butuh highlight yang berbeda, walaupun background kamu sama</p>
<p>Dengan 5 CV, kamu bisa apply lebih strategis, bukan cuma asal kirim</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">5. “Kalau aku nggak suka hasil CV-nya, gimana?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Kamu bisa generate ulang gaada batasan</p>
<p>Nggak ada limit revisi, kamu bisa tweak, adjust, atau generate ulang sampai hasilnya benar-benar sesuai sama targetmu</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">6. “Aku takut CV-ku tetap nggak lolos, ada cara ngeceknya?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Ada, kamu bakal dapat fitur Job Matching Score</p>
<p>Sebelum kamu kirim lamaran, kamu bisa cek:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>Seberapa cocok CV kamu dengan job target</li>
<li>Apa yang perlu diperbaiki</li>
</ul>
<p>Jadi kamu nggak apply asal apply, tapi berdasarkan evaluasi.</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">7. “Ini cuma buat CV aja atau lengkap sampai apply kerja?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Ini bukan cuma CV</p>
<p>Kamu bakal dapat:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>CV (5 versi untuk tiap lowongan)</li>
<li>Cover Letter</li>
<li>LinkedIn optimization</li>
<li>Portfolio</li>
<li>Bonus Interview Preparation Kit</li>
</ul>
<p>Jadi kamu nggak berhenti di “punya dokumen”, tapi sampai siap interview</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">8. “Berapa lama sampai aku benar-benar bisa apply kerja?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Kurang dari satu hari</p>
<p>Selama kamu ikutin step-by-step di platform, kamu bisa:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>Punya semua dokumen</li>
<li>Siap kirim lamaran di hari yang sama</li>
</ul>
<p>Dan dari data user sebelumnya, 70% sudah dapat panggilan interview dalam 2 minggu.</p>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">9. “Kenapa nggak pakai jasa joki CV aja?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Joki CV memang cepat, tapi:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>Tidak bisa kamu tweak sendiri</li>
<li>Tidak transparan prosesnya</li>
<li>Berisiko asal apply</li>
</ul>
<p>Di sini, kamu tetap cepat, tapi:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>Bisa kontrol hasil</li>
<li>Bisa adjust kapan saja</li>
<li>Bisa bikin CV berbeda untuk tiap job</li>
</ul>
</div>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-bold display-font text-lg md:text-xl text-[var(--brand-black)] hover:text-[var(--brand-red)] transition-colors">
<span className="pr-6">10. “Kalau aku masih bingung target kerja, bisa pakai ini?”</span>
<iconify-icon className="toggle-icon text-2xl text-[var(--brand-red)] shrink-0 transition-transform duration-300" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="mt-6 pl-4 border-l-2 border-black text-base text-gray-700 leading-relaxed flex flex-col gap-4">
<p className="font-bold text-black uppercase text-xs tracking-wider">Jawaban:</p>
<p>Bisa, justru ini salah satu fitur utamanya</p>
<p>Dibantu Ideal Job Fit, kamu bisa:</p>
<ul className="list-disc pl-5 flex flex-col gap-1">
<li>Riset posisi yang cocok</li>
<li>Tentukan arah karir</li>
<li>Nggak asal apply</li>
</ul>
<p>Jadi kamu nggak cuma “keluar dari kerjaan sekarang”, tapi tahu mau ke mana.</p>
</div>
</details>
</div>
</div>
</section>

<section className="relative bg-[var(--brand-bg-dark)] px-5 py-32 min-h-screen flex items-center border-t border-[#333333]">
<div className="grain-overlay opacity-30"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-12 text-left">
<div className="flex flex-col gap-6">
<h2 className="display-font text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[1.05]">
                    Yakin gamau selesain semuanya hari ini?
                </h2>
<div className="rule-red-thick w-1/4 my-2"></div>
<h3 className="display-font text-xl md:text-2xl font-bold text-gray-300">
                    semua dokumen bakal siap kirim, tinggal kamu yang mulai
                </h3>
</div>
<div className="flex flex-col gap-4 text-base md:text-lg text-gray-400 max-w-2xl">
<p className="text-white font-bold bg-[#221e1c] p-4 border-l-4 border-[var(--brand-red)]">
                    Rp147.000 sebelum slot ini penuh dan harga naik
                </p>
<p className="mt-4">
                    dengan harga segitu, kamu udah bisa dapetin support dari awal sampai akhir untuk cari kerja sebelum kamu kirim surat resign
                </p>
</div>
<div className="mt-8 w-full">
<button className="btn-raw text-lg md:text-xl py-5">Mulai Sekarang</button>
</div>
</div>
</section>

<a aria-label="Chat via WhatsApp" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-y-[-2px] transition-transform" href="https://wa.me/628000000000" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-3xl" icon="logos:whatsapp-icon"></iconify-icon>
</a>
</main>

    </>
  );
}
