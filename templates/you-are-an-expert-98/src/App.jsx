import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#c93505',
accent: '#c4f502',
neutral: '#c9cbcf',
brand: {
dark: '#0f0c09',
cream: '#f0e6d3',
cyan: '#00bcc8',
muted: '#e6e4df',
light: '#f5f4f0'
}
},
fontFamily: {
display: ['Cormorant Garamond', 'serif'],
body: ['Space Grotesk', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.05em',
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
  }, []);

  return (
    <>
      
<main>

<section className="bg-brand-dark px-5 py-32 md:py-48 flex flex-col justify-center min-h-screen" id="section-1">
<div className="max-w-3xl mx-auto w-full">
<h3 className="font-body text-xs md:text-sm text-brand-cream/40 uppercase tracking-widest mb-6">Kamu sadar tapi gak tau penyebabnya.</h3>
<h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-cream mb-12 leading-tight">Hari Ini Terasa Sama Seperti Kemarin</h2>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-cream/80 max-w-xl">
          Kamu buka HP, cek angka, mulai kerja. Bukan karena tidak serius, kamu sudah lama serius. Tapi di suatu titik, kerja keras berhenti terasa seperti kemajuan. Ada yang belum ketemu, dan <span className="text-brand-cyan/90">kamu belum tahu persisnya di mana</span>.
        </p>
</div>
</section>

<section className="bg-brand-muted text-brand-dark relative overflow-hidden px-5 py-24 md:py-32" id="section-2">
<div className="absolute -top-10 -left-10 md:top-0 md:-left-4 md:text-[12rem] text-9xl font-display font-bold text-brand-cyan/10 select-none pointer-events-none leading-none tracking-tighter">300</div>
<div className="max-w-3xl mx-auto w-full relative z-10">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
          Kamu Kerja 300 Jam Sebulan.<br/>
          Hasilnya Masih Segini.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-dark/60 mb-10 tracking-wide">Bukan perasaan. Ini matematika yang perlu dilihat.</h3>
<p className="font-body text-base md:text-lg leading-relaxed max-w-2xl text-brand-dark/90">
          12 jam sehari, 25 hari sebulan, revenue 20 juta. Sekitar 66 ribu per jam, di bawah UMR Jakarta. Yang bikin berat bukan angkanya saja, tapi kenyataan bahwa kamu sudah melakukan semua yang kamu tahu, dan hasilnya tidak banyak berubah. Itu pertanda <span className="bg-brand-cyan/20 px-1 font-medium">ada yang bocor di dalam sistemnya</span>, bukan di dalam dirimu.
        </p>
</div>
</section>

<section className="bg-brand-light text-brand-dark px-5 py-24 md:py-32" id="section-3">
<div className="max-w-3xl mx-auto w-full">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-4 leading-tight">
          Bukunya Masuk Akal.<br/>
          Bisnis Kamu Tidak Bergerak.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-dark/60 tracking-wide">Bukan salah materinya. Tapi materi itu tidak pernah melihat kondisi kamu.</h3>
<div className="h-[1px] w-full max-w-sm bg-brand-cyan/25 my-10"></div>
<div className="space-y-6 max-w-2xl">
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90">
            Framework yang kamu pelajari memang benar, untuk bisnis secara umum. Tapi bisnis kamu bukan kasus umum.
          </p>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90">
            Masalah yang kamu hadapi punya konteks spesifik: angka kamu, pelanggan kamu, kapasitas kamu hari ini. Solusi yang dibuat untuk semua orang tidak bisa menjawab itu.
          </p>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90">
            Makanya tidak banyak yang bergerak, meski kamu sudah sungguh-sungguh.
          </p>
</div>
</div>
</section>

<section className="bg-brand-dark text-brand-cream px-5 py-24 md:py-32" id="section-4">
<div className="max-w-3xl mx-auto w-full">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
          Bukan Soal Kurang Kerja Keras.<br/>
          Ada Titik Spesifik yang Tersumbat.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-cream/40 tracking-wide mb-12">Dan titik itu bisa ditemukan kalau ada yang melihat dari luar.</h3>
<div className="space-y-6 max-w-2xl">
<p className="font-body text-base md:text-lg leading-relaxed text-brand-cream/80">
            Setiap bisnis yang tidak bergerak punya satu atau dua <span className="text-brand-cyan font-medium">bottleneck</span> yang menahan semuanya.
          </p>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-cream/80 border-l border-brand-cream/10 pl-4 md:pl-6 ml-2 md:ml-4">
            Bisa di struktur harga yang tidak sustainable.<br/>
            Bisa di offer yang tidak cukup jelas untuk membuat orang memutuskan beli.<br/>
            Bisa di alokasi waktu yang tidak sebanding dengan output.
          </p>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-cream/80">
            Kamu terlalu di dalam untuk bisa melihat itu dengan jelas, dan itu bukan kelemahan, itu kondisi siapapun yang menjalankan bisnisnya sendiri.
          </p>
</div>
</div>
</section>

<section className="bg-brand-muted text-brand-dark px-5 py-24 md:py-32" id="section-5">
<div className="max-w-3xl mx-auto w-full">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4 leading-tight">
          90 Menit Melihat Bisnis Kamu<br/>
          dari Sudut yang Belum Pernah Ada.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-dark/60 tracking-wide mb-16">Bukan kelas. Bukan webinar. Satu sesi khusus untuk bisnis kamu.</h3>
<p className="font-body text-base mb-10 text-brand-dark/80">Sesi ini berjalan dalam empat tahap.</p>
<div className="relative border-l border-brand-cyan/50 pl-6 md:pl-10 ml-3 md:ml-4 space-y-12 mb-16">
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-cyan ring-4 ring-brand-muted"></div>
<div className="absolute -top-6 -left-2 text-6xl font-display font-medium text-brand-dark/5 pointer-events-none select-none">1</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark">Pertama, Review Angka:</span> revenue, margin, konversi, dan alokasi waktu dibuka bersama tanpa diperindah. Dari situ baru terlihat mana yang benar-benar bermasalah.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-cyan ring-4 ring-brand-muted"></div>
<div className="absolute -top-6 -left-2 text-6xl font-display font-medium text-brand-dark/5 pointer-events-none select-none">2</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark">Kedua, Identifikasi Bottleneck:</span> satu sampai dua titik paling kritis yang menahan bisnis naik, spesifik untuk kondisi kamu.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-cyan ring-4 ring-brand-muted"></div>
<div className="absolute -top-6 -left-2 text-6xl font-display font-medium text-brand-dark/5 pointer-events-none select-none">3</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark">Ketiga, Action Plan 30 Hari:</span> langkah konkret yang bisa dimulai besok pagi, bukan catatan seminar yang dibiarkan.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-cyan ring-4 ring-brand-muted"></div>
<div className="absolute -top-6 -left-2 text-6xl font-display font-medium text-brand-dark/5 pointer-events-none select-none">4</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark">Keempat, Follow-up 7 Hari:</span> setelah sesi, kamu bisa tanya langsung via chat selama tujuh hari.</p>
</div>
</div>
<a className="btn-pill w-full md:w-auto py-4 px-8 min-h-[52px]" href="#section-10">
          Lihat Detail Session
        </a>
</div>
</section>

<section className="bg-brand-light text-brand-dark relative overflow-hidden px-5 py-24 md:py-32 flex flex-col justify-center" id="section-6">
<div className="absolute top-10 right-10 text-7xl md:text-9xl font-display font-bold text-brand-cyan/5 select-none pointer-events-none tracking-tighter text-right leading-none">
        200+<br/>73%
      </div>
<div className="max-w-4xl mx-auto w-full relative z-10">
<div className="mb-16">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-4 leading-tight">
            200 Lebih Bisnis.<br/>
            73% Naik Dua Kali Lipat dalam 90 Hari.
          </h2>
<h3 className="font-body text-sm md:text-base text-brand-dark/60 tracking-wide">Ini bukan angka untuk impress. Ini konteks agar kamu bisa menimbang sendiri.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-1 gap-12 md:gap-16">
<div className="pl-4 md:pl-8 border-l border-brand-cyan/20">
<div className="text-4xl text-brand-cyan/30 font-display leading-none mb-2">"</div>
<p className="font-display italic text-xl md:text-3xl text-brand-dark mb-6 leading-relaxed max-w-2xl">
              Saya kira masalah saya di marketing. Setelah sesi, ternyata di pricing. Dalam enam minggu revenue naik dari 18 juta ke 34 juta.
            </p>
<p className="font-body text-xs md:text-sm text-brand-dark/50 tracking-wider uppercase">
              Rizky A., custom furniture, Bandung
            </p>
</div>
<div className="pl-4 md:pl-8 border-l border-brand-cyan/20 md:ml-12">
<div className="text-4xl text-brand-cyan/30 font-display leading-none mb-2">"</div>
<p className="font-display italic text-xl md:text-3xl text-brand-dark mb-6 leading-relaxed max-w-2xl">
              Tiga kelas sebelumnya tidak ada yang seberdampak ini. Karena baru kali ini ada yang benar-benar melihat bisnis saya, bukan bisnis secara umum.
            </p>
<p className="font-body text-xs md:text-sm text-brand-dark/50 tracking-wider uppercase">
              Dewi S., skincare brand, Jakarta
            </p>
</div>
</div>
</div>
</section>

<section className="bg-brand-dark text-brand-cream px-5 py-24 md:py-32" id="section-7">
<div className="max-w-3xl mx-auto w-full">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
          Ini Bukan untuk Semua Orang.<br/>
          Dan Itu Disengaja.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-cream/40 tracking-wide mb-16">Supaya yang datang adalah yang memang siap menggunakannya.</h3>
<div className="space-y-8 max-w-2xl text-brand-cream/80">
<p className="font-body text-base md:text-lg leading-relaxed">
            Sesi ini untuk kamu yang sudah di angka 10 sampai 30 juta per bulan, sudah kerja keras, dan butuh seseorang yang melihat dari luar lalu bicara jujur tentang apa yang perlu diubah.
          </p>
<div className="h-[1px] w-full bg-brand-cream/10"></div>
<p className="font-body text-base md:text-lg leading-relaxed">
            Ini bukan untuk kamu yang baru mulai atau belum punya revenue. Juga bukan untuk yang datang hanya untuk semangat baru tanpa rencana untuk berubah.
          </p>
<div className="h-[1px] w-full bg-brand-cream/10"></div>
<p className="font-body text-base md:text-lg leading-relaxed font-medium text-brand-cream">
            Kalau kamu yang pertama, sesi ini memang dibuat untuk kondisi seperti kamu.
          </p>
</div>
</div>
</section>

<section className="bg-brand-muted text-brand-dark px-5 py-24 md:py-32" id="section-8">
<div className="max-w-3xl mx-auto w-full">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4 leading-tight">
          Prosesnya Sederhana.<br/>
          Tidak Ada yang Perlu Ditebak.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-dark/60 tracking-wide mb-16">Ini yang terjadi setelah kamu klik booking.</h3>
<div className="relative border-l border-dashed border-brand-cyan/30 pl-6 md:pl-10 ml-3 md:ml-4 space-y-16">
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-muted border-2 border-brand-cyan"></div>
<div className="absolute -top-8 -left-4 text-7xl md:text-8xl font-display font-medium text-brand-cyan/10 pointer-events-none select-none">1</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark block mb-1">Langkah pertama,</span> pilih slot tersedia. Konfirmasi jadwal dan link Zoom dikirim dalam 24 jam.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-muted border-2 border-brand-cyan"></div>
<div className="absolute -top-8 -left-4 text-7xl md:text-8xl font-display font-medium text-brand-cyan/10 pointer-events-none select-none">2</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark block mb-1">Langkah kedua,</span> isi form singkat berisi angka dasar bisnis kamu sebelum sesi. Ini yang membuat 90 menit kita tidak terbuang untuk perkenalan.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-muted border-2 border-brand-cyan"></div>
<div className="absolute -top-8 -left-4 text-7xl md:text-8xl font-display font-medium text-brand-cyan/10 pointer-events-none select-none">3</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark block mb-1">Langkah ketiga,</span> sesi 90 menit berlangsung: buka data, identifikasi bottleneck, bangun action plan 30 hari bersama.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-brand-muted border-2 border-brand-cyan"></div>
<div className="absolute -top-8 -left-4 text-7xl md:text-8xl font-display font-medium text-brand-cyan/10 pointer-events-none select-none">4</div>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 relative z-10"><span className="font-semibold text-brand-dark block mb-1">Langkah keempat,</span> tujuh hari setelah sesi kamu bisa tanya langsung via chat untuk hal-hal yang muncul saat implementasi.</p>
</div>
</div>
</div>
</section>

<section className="bg-brand-light text-brand-dark px-5 pt-24 pb-16 md:pt-32 md:pb-24" id="section-9">
<div className="max-w-3xl mx-auto w-full">
<h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-brand-dark mb-4 leading-none">Rp 497.000</h2>
<h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
          untuk 90 Menit<br/>
          yang Sepenuhnya tentang Bisnis Kamu.
        </h2>
<h3 className="font-body text-sm md:text-base text-brand-dark/60 tracking-wide mb-12">Bukan yang termurah. Tapi mungkin yang pertama benar-benar melihat kondisi kamu.</h3>
<div className="space-y-6 max-w-2xl">
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90">
            Kalau kamu hitung apa yang sudah keluar untuk kelas, buku, dan tools dalam setahun terakhir, banyak yang sudah habis 2 sampai 5 juta. Hasilnya kamu sudah tahu sendiri. Bedanya, semua yang kamu pelajari itu dibuat untuk audiens luas.
          </p>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90 bg-white p-6 shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-brand-dark/5 rounded-sm">
            Sesi ini 90 menit khusus: angka kamu, kondisi kamu, masalah kamu.
          </p>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-dark/90">
            Slot per bulan terbatas karena setiap sesi butuh persiapan penuh sebelum kita duduk bersama. <span className="font-medium">Itu logistik, bukan taktik.</span>
</p>
</div>
</div>
</section>

<section className="bg-brand-dark text-brand-cream px-5 py-32 md:py-48 flex flex-col items-center justify-center text-center min-h-[80vh]" id="section-10">
<div className="max-w-3xl mx-auto w-full flex flex-col items-center">
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-2 leading-tight">
          Kalau kamu sudah sampai di sini<br/>
          dan ini terasa tentang kamu,
        </h2>
<h3 className="font-body text-base md:text-xl text-brand-cream/40 tracking-wide mb-12">langkah berikutnya tidak rumit.</h3>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-cream/80 max-w-xl mb-16 text-center">
          Tidak ada kuesioner panjang. Tidak ada yang perlu dibuktikan dulu. Cukup booking, isi form singkat, dan kita duduk bersama 90 menit melihat bisnis kamu dari sudut yang selama ini tidak terlihat.
        </p>

<a className="btn-pill w-full md:w-auto py-4 px-10 min-h-[52px] text-base" href="#">
          Booking Session, Rp 497.000
        </a>
</div>
</section>
</main>

<a aria-label="Chat di WhatsApp" className="wa-float" href="https://wa.me/6281234567890" rel="noopener noreferrer" target="_blank">
<iconify-icon height="28" icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>

    </>
  );
}
