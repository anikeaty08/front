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
dark: '#0F1B22',
textMain: '#1A1614',
mutedBg: '#EBF4FA'
},
fontFamily: {
display: ['Plus Jakarta Sans', 'sans-serif'],
body: ['Nunito', 'sans-serif'],
},
animation: {
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
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
      
<main className="flex flex-col min-h-screen">

<section className="w-full bg-neutral px-5 pt-16 pb-12 flex flex-col relative z-10" id="section-1">
<div className="flex flex-col animate-slide-up">
<h1 className="text-[36px] font-[800] font-display leading-[1.1] tracking-tight text-textMain relative pr-6">
                    Audit Iklan yang Kasih <span className="relative z-10">Jawaban<span className="absolute bottom-1 left-0 w-full h-[6px] bg-accent -z-10 rounded-sm opacity-80"></span></span>, Bukan Laporan yang Numpuk
                    <iconify-icon className="text-accent text-3xl absolute right-0 top-2 opacity-80" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</h1>
<p className="text-[18px] font-semibold text-primary mt-6 leading-snug">
                    Satu sesi. Temukan di mana budget kamu bocor. Punya action plan yang bisa jalan minggu depan.
                </p>
<p className="text-base font-normal text-textMain/80 mt-4 leading-relaxed max-w-[90%]">
                    Bukan sekadar cek metrik atau ngerangkum dashboard yang udah kamu lihat sendiri. Audit ini masuk sampai level funnel, creative, dan targeting, lalu keluar dengan rekomendasi konkret yang bisa langsung dieksekusi, bukan tunggu bulan depan.
                </p>
<a className="mt-8 bg-accent text-white font-bold text-base font-display rounded-[12px] w-full min-h-[52px] flex items-center justify-center shadow-[0_4px_12px_rgba(87,197,182,0.35)] transition-transform active:scale-[0.98]" href="#section-10">
                    Jadwalkan Audit
                </a>
</div>
<div className="mt-10 w-full rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(26,95,122,0.08)] animate-slide-up delay-200">
<img alt="Ads Audit Session" className="w-full h-auto object-cover aspect-[4/3]" src="https://placehold.co/800x600/EBF4FA/1A5F7A?text=Strategy+Session"/>
</div>
</section>

<section className="w-full bg-mutedBg px-5 py-16 flex flex-col wave-top relative z-20" id="section-2">
<h2 className="text-[28px] font-[700] font-display leading-tight tracking-tight text-textMain mb-8 animate-slide-up">
                Kalau Ini Kedengarannya Familiar, Kamu Gak Sendirian
            </h2>
<div className="flex flex-col gap-2">

<div className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-start gap-3 animate-slide-up delay-100">
<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 opacity-80"></div>
<p className="text-base text-textMain font-body leading-relaxed">
                        Dashboard ijo semua, tapi penjualan bulan ini sama aja kayak bulan lalu.
                    </p>
</div>

<div className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-start gap-3 animate-slide-up delay-200">
<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 opacity-80"></div>
<p className="text-base text-textMain font-body leading-relaxed">
                        Agency bilang 'masih dalam fase testing' padahal udah bulan ketiga.
                    </p>
</div>

<div className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-start gap-3 animate-slide-up delay-300">
<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 opacity-80"></div>
<p className="text-base text-textMain font-body leading-relaxed">
                        Kamu nambah budget karena takut kalah saing, tapi hasilnya tetap gak keliatan.
                    </p>
</div>

<div className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-start gap-3 animate-slide-up delay-[400ms]">
<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 opacity-80"></div>
<p className="text-base text-textMain font-body leading-relaxed">
                        Data ada banyak, tapi gak tau harus mulai dari mana buat benerin sesuatu. Bukan soal kerja keras. Bukan soal budget yang kurang. <span className="italic text-accent font-semibold">Kadang yang kurang cuma satu pandangan baru dari luar.</span>
</p>
</div>
</div>
</section>

<section className="w-full bg-dark px-5 py-20 flex flex-col items-start relative z-10" id="section-3">
<div className="w-10 h-[2px] bg-accent mb-8 animate-fade-in"></div>
<h2 className="text-[34px] font-[800] font-display text-white leading-[1.15] tracking-tight animate-slide-up">
                Budget Iklan Kamu <span className="text-accent">Bukan Masalahnya</span>
</h2>
<h3 className="text-lg font-semibold font-display text-white/90 mt-5 animate-slide-up delay-100">
                Cara kamu spend-nya yang perlu diperbaiki. Dan itu bisa dibenerin.
            </h3>
<p className="text-base text-white/80 font-body leading-relaxed mt-6 pr-4 animate-slide-up delay-200">
                Kebanyakan brand yang ROAS-nya stuck bukan karena budget kecil atau produknya kurang bagus. Ada kebocoran spesifik di suatu titik, entah di targeting, di creative, di landing page, atau di offer-nya sendiri. Begitu titik bocornya ketemu, perbaikannya sering lebih simpel dari yang kamu bayangkan. Di sinilah audit masuk.
            </p>
</section>

<section className="w-full bg-neutral px-5 py-20 flex flex-col wave-top relative z-20" id="section-4">

<div className="flex flex-col gap-4 mb-10">
<div className="bg-white rounded-[12px] border-l-[3px] border-accent p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col animate-slide-up">
<div className="flex items-center gap-2">
<span className="text-[52px] font-[800] font-display text-primary leading-none tracking-tight">150+</span>
<iconify-icon className="text-accent text-3xl opacity-60" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-[13px] font-semibold text-primary/70 uppercase tracking-wider mt-2">Akun Diaudit</span>
</div>
<div className="bg-white rounded-[12px] border-l-[3px] border-accent p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col animate-slide-up delay-100">
<div className="flex items-center gap-2">
<span className="text-[52px] font-[800] font-display text-primary leading-none tracking-tight">40%</span>
<iconify-icon className="text-accent text-3xl opacity-60" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-[13px] font-semibold text-primary/70 uppercase tracking-wider mt-2">Rata-rata ROAS Naik</span>
</div>
</div>
<h2 className="text-[28px] font-[800] font-display leading-tight tracking-tight text-textMain mb-4 animate-slide-up delay-200">
                150+ Akun Diaudit. Rata-rata ROAS Naik 40% dalam 30 Hari.
            </h2>
<h3 className="text-base font-semibold text-primary/80 mb-6 animate-slide-up delay-[250ms]">
                Bukan klaim. Ini rata-rata hasil implementasi rekomendasi dari audit yang sama yang akan kamu dapatkan.
            </h3>
<p className="text-base font-normal text-textMain/80 leading-relaxed animate-slide-up delay-300">
                150+ akun ads yang sudah diaudit, dari Meta sampai Google, dari brand fashion sampai jasa dan digital produk. Rata-rata improve ROAS 40% dalam 30 hari setelah implementasi rekomendasi. Bukan karena nambah budget. Tapi karena tau persis di mana yang perlu dibenerin dan langsung eksekusi.
            </p>
</section>

<section className="w-full bg-mutedBg px-5 py-20 flex flex-col" id="section-5">
<h2 className="text-[30px] font-[800] font-display leading-tight tracking-tight text-textMain mb-3 animate-slide-up">
                Satu Sesi, Empat Hal yang Kamu Bawa Pulang
            </h2>
<h3 className="text-base text-primary/80 mb-10 animate-slide-up delay-100">
                Ini yang terjadi dari pertama kita mulai sampai kamu keluar dengan rencana di tangan.
            </h3>
<div className="flex flex-col gap-2">

<div className="bg-white w-full rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col animate-slide-up delay-100">
<div className="flex items-center gap-4 mb-2">
<div className="w-[28px] h-[28px] rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-sm shrink-0">1</div>
<h4 className="text-[15px] font-[700] font-display text-textMain">Full Audit Akun Meta dan Google</h4>
</div>
<p className="text-[14px] text-primary/70 font-body leading-relaxed pl-[44px]">
                        Kita buka semua, campaign, ad set, creative, targeting, bidding strategy, dan cari titik bocornya satu per satu.
                    </p>
</div>

<div className="bg-white w-full rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col animate-slide-up delay-200">
<div className="flex items-center gap-4 mb-2">
<div className="w-[28px] h-[28px] rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-sm shrink-0">2</div>
<h4 className="text-[15px] font-[700] font-display text-textMain">Review Funnel End-to-End</h4>
</div>
<p className="text-[14px] text-primary/70 font-body leading-relaxed pl-[44px]">
                        Dari pertama audiens lihat iklan sampai ke thank you page. Karena kebocoran sering ada di luar akun ads-nya sendiri.
                    </p>
</div>

<div className="bg-white w-full rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col animate-slide-up delay-300">
<div className="flex items-center gap-4 mb-2">
<div className="w-[28px] h-[28px] rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-sm shrink-0">3</div>
<h4 className="text-[15px] font-[700] font-display text-textMain">Report Tertulis 10+ Halaman</h4>
</div>
<p className="text-[14px] text-primary/70 font-body leading-relaxed pl-[44px]">
                        Semua findings terdokumentasi, lengkap dengan konteks dan rekomendasi prioritas yang bisa langsung dikerjain.
                    </p>
</div>

<div className="bg-white w-full rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col animate-slide-up delay-[400ms]">
<div className="flex items-center gap-4 mb-2">
<div className="w-[28px] h-[28px] rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-sm shrink-0">4</div>
<h4 className="text-[15px] font-[700] font-display text-textMain">Sesi 60 Menit Bahas Rekomendasi</h4>
</div>
<p className="text-[14px] text-primary/70 font-body leading-relaxed pl-[44px]">
                        Bukan presentasi satu arah. Kita bahas bareng, kamu bisa tanya, dan kamu keluar dengan clarity penuh soal langkah selanjutnya.
                    </p>
</div>
</div>

<div className="mt-12 bg-white rounded-t-[8px] rounded-b-[4px] p-4 w-[160px] mx-auto shadow-[0_8px_24px_rgba(26,95,122,0.12)] border border-neutral flex flex-col gap-3 relative animate-fade-in delay-[500ms] rotate-2">
<div className="w-full h-[6px] bg-accent/20 rounded-full"></div>
<div className="w-3/4 h-[4px] bg-neutral-200 rounded-full"></div>
<div className="w-full h-[4px] bg-neutral-200 rounded-full"></div>
<div className="w-5/6 h-[4px] bg-neutral-200 rounded-full"></div>
<div className="w-full h-[32px] bg-mutedBg rounded-[4px] mt-2"></div>
<div className="w-full h-[4px] bg-neutral-200 rounded-full mt-1"></div>
<div className="w-2/3 h-[4px] bg-neutral-200 rounded-full"></div>
<div className="absolute -bottom-3 -right-3 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">10+ Hal</div>
</div>
</section>

<section className="w-full bg-neutral px-5 py-20 flex flex-col" id="section-6">
<h2 className="text-[32px] font-[800] font-display leading-tight tracking-tight text-textMain mb-12 animate-slide-up text-center">
                Sebelum Audit <span className="text-primary/30">vs</span> Sesudah Audit
            </h2>
<div className="flex flex-col gap-8">

<div className="flex flex-col relative animate-slide-up delay-100">
<div className="bg-[#FFF3F3] p-5 pb-10 rounded-[12px] flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#E57373] mt-2 shrink-0"></div>
<div>
<span className="text-[12px] font-bold text-[#E57373] tracking-widest uppercase block mb-1">Sebelum</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Nebak-nebak mana campaign yang works</p>
</div>
</div>
<div className="bg-[#F0FAF8] p-5 rounded-[12px] flex items-start gap-3 -mt-6 relative z-10 shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-white">
<iconify-icon className="text-accent text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-[12px] font-bold text-accent tracking-widest uppercase block mb-1">Sesudah</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Tau persis mana yang perlu dimatiin dan mana yang perlu discale</p>
</div>
</div>
<div className="absolute left-6 top-1/2 -mt-2 z-20 bg-white rounded-full p-1 shadow-sm border border-neutral flex items-center justify-center">
<iconify-icon className="text-primary text-sm" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col relative animate-slide-up delay-200">
<div className="bg-[#FFF3F3] p-5 pb-10 rounded-[12px] flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#E57373] mt-2 shrink-0"></div>
<div>
<span className="text-[12px] font-bold text-[#E57373] tracking-widest uppercase block mb-1">Sebelum</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Nunggu agency kasih update tiap minggu</p>
</div>
</div>
<div className="bg-[#F0FAF8] p-5 rounded-[12px] flex items-start gap-3 -mt-6 relative z-10 shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-white">
<iconify-icon className="text-accent text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-[12px] font-bold text-accent tracking-widest uppercase block mb-1">Sesudah</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Punya data dan keputusan di tangan sendiri</p>
</div>
</div>
<div className="absolute left-6 top-1/2 -mt-2 z-20 bg-white rounded-full p-1 shadow-sm border border-neutral flex items-center justify-center">
<iconify-icon className="text-primary text-sm" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col relative animate-slide-up delay-300">
<div className="bg-[#FFF3F3] p-5 pb-10 rounded-[12px] flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#E57373] mt-2 shrink-0"></div>
<div>
<span className="text-[12px] font-bold text-[#E57373] tracking-widest uppercase block mb-1">Sebelum</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Budget nambah tapi ROAS tetap stuck</p>
</div>
</div>
<div className="bg-[#F0FAF8] p-5 rounded-[12px] flex items-start gap-3 -mt-6 relative z-10 shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-white">
<iconify-icon className="text-accent text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-[12px] font-bold text-accent tracking-widest uppercase block mb-1">Sesudah</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Spend lebih efisien, hasil lebih terukur</p>
</div>
</div>
<div className="absolute left-6 top-1/2 -mt-2 z-20 bg-white rounded-full p-1 shadow-sm border border-neutral flex items-center justify-center">
<iconify-icon className="text-primary text-sm" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col relative animate-slide-up delay-[400ms]">
<div className="bg-[#FFF3F3] p-5 pb-10 rounded-[12px] flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-[#E57373] mt-2 shrink-0"></div>
<div>
<span className="text-[12px] font-bold text-[#E57373] tracking-widest uppercase block mb-1">Sebelum</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Report banyak tapi gak tau mau ngapain</p>
</div>
</div>
<div className="bg-[#F0FAF8] p-5 rounded-[12px] flex items-start gap-3 -mt-6 relative z-10 shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-white">
<iconify-icon className="text-accent text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div>
<span className="text-[12px] font-bold text-accent tracking-widest uppercase block mb-1">Sesudah</span>
<p className="text-[14px] text-textMain font-body leading-relaxed">Action plan konkret yang bisa jalan minggu depan</p>
</div>
</div>
<div className="absolute left-6 top-1/2 -mt-2 z-20 bg-white rounded-full p-1 shadow-sm border border-neutral flex items-center justify-center">
<iconify-icon className="text-primary text-sm" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="w-full bg-mutedBg px-5 py-20 flex flex-col wave-top relative z-20" id="section-7">
<h2 className="text-[28px] font-[800] font-display leading-tight tracking-tight text-textMain mb-2 animate-slide-up">
                Ada yang Mau Kamu Tanyain Dulu?
            </h2>
<h3 className="text-base text-primary/80 mb-8 animate-slide-up delay-100">
                Wajar. Ini jawabannya.
            </h3>
<div className="flex flex-col gap-2">

<details className="group bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden border-l-[3px] border-transparent open:border-accent transition-all duration-200 animate-slide-up delay-100">
<summary className="flex justify-between items-center p-5 cursor-pointer font-display font-semibold text-primary text-[15px]">
<span className="pr-4 leading-snug">Apakah ini bakal relevan buat bisnis saya?</span>
<iconify-icon className="text-accent text-[24px] shrink-0 group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-accent text-[24px] shrink-0 hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-[14px] text-primary/80 font-body leading-relaxed">
                        Kalau kamu spend antara 3 sampai 20 juta per bulan di Meta atau Google dan ROAS-nya di bawah 2x, audit ini dirancang persis untuk kondisi itu. Bukan template generik, tapi deep-dive ke akun kamu sendiri.
                    </div>
</details>

<details className="group bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden border-l-[3px] border-transparent open:border-accent transition-all duration-200 animate-slide-up delay-200">
<summary className="flex justify-between items-center p-5 cursor-pointer font-display font-semibold text-primary text-[15px]">
<span className="pr-4 leading-snug">Apakah Rp 750.000 worth it?</span>
<iconify-icon className="text-accent text-[24px] shrink-0 group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-accent text-[24px] shrink-0 hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-[14px] text-primary/80 font-body leading-relaxed">
                        Satu campaign yang salah targeting bisa buang 2 sampai 5 juta dalam seminggu tanpa hasil. Audit ini dirancang untuk nemuin dan benerin hal itu. Rata-rata klien balik modal dari audit ini dalam 7 sampai 14 hari pertama implementasi.
                    </div>
</details>

<details className="group bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden border-l-[3px] border-transparent open:border-accent transition-all duration-200 animate-slide-up delay-300">
<summary className="flex justify-between items-center p-5 cursor-pointer font-display font-semibold text-primary text-[15px]">
<span className="pr-4 leading-snug">Berapa lama sampai saya lihat hasilnya?</span>
<iconify-icon className="text-accent text-[24px] shrink-0 group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-accent text-[24px] shrink-0 hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-[14px] text-primary/80 font-body leading-relaxed">
                        Rekomendasi dari sesi ini bisa langsung kamu eksekusi minggu depan. Rata-rata klien yang implementasi full recommendation lihat perubahan ROAS dalam 30 hari.
                    </div>
</details>

<details className="group bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden border-l-[3px] border-transparent open:border-accent transition-all duration-200 animate-slide-up delay-[400ms]">
<summary className="flex justify-between items-center p-5 cursor-pointer font-display font-semibold text-primary text-[15px]">
<span className="pr-4 leading-snug">Saya harus kasih akses ke mana aja?</span>
<iconify-icon className="text-accent text-[24px] shrink-0 group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-accent text-[24px] shrink-0 hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-[14px] text-primary/80 font-body leading-relaxed">
                        Akses read-only ke Meta Ads Manager dan Google Ads sudah cukup. Kamu tetap pegang kendali penuh, kita hanya butuh lihat datanya.
                    </div>
</details>
</div>
</section>

<section className="w-full bg-neutral px-5 py-20 flex flex-col wave-top relative z-10" id="section-8">
<h2 className="text-[30px] font-[800] font-display leading-tight tracking-tight text-textMain mb-10 animate-slide-up text-center">
                Kata Mereka yang Udah Coba
            </h2>
<div className="flex flex-col gap-6">

<div className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(26,95,122,0.08)] relative flex flex-col animate-slide-up delay-100">
<span className="absolute -top-4 left-4 text-[64px] text-accent/30 font-display leading-none rotate-180 font-serif">"</span>
<p className="text-[14px] text-primary font-body leading-relaxed relative z-10 mt-2 italic">
                        "Sebelum audit, saya kira masalahnya di budget. Ternyata ada 3 ad set yang overlap audience dan 1 campaign yang cannibalizing satu sama lain. Setelah dibenerin, ROAS naik dari 1.4x ke 2.6x dalam 3 minggu. Laporan 10 halamannya worth every rupiah."
                    </p>
<div className="mt-6 pt-4 border-t border-mutedBg flex items-center justify-between">
<span className="text-[13px] font-[600] font-display text-accent tracking-wide">Dinda R., brand fashion Bandung</span>
</div>
</div>

<div className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(26,95,122,0.08)] relative flex flex-col animate-slide-up delay-200">
<span className="absolute -top-4 left-4 text-[64px] text-accent/30 font-display leading-none rotate-180 font-serif">"</span>
<p className="text-[14px] text-primary font-body leading-relaxed relative z-10 mt-2 italic">
                        "Udah 4 bulan agency saya bilang 'masih testing'. Setelah 1 sesi audit ini, saya akhirnya ngerti sendiri kenapa campaign Google saya gak convert. Langsung saya implementasi rekomendasinya, bulan berikutnya cost per lead turun 38%."
                    </p>
<div className="mt-6 pt-4 border-t border-mutedBg flex items-center justify-between">
<span className="text-[13px] font-[600] font-display text-accent tracking-wide">Arif S., jasa konsultan Jakarta</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-dark px-5 py-24 flex flex-col items-center text-center relative z-20" id="section-9">
<h2 className="text-[30px] font-[700] font-display text-white leading-tight tracking-tight animate-slide-up">
                Slot Audit Dibatasi 4 per Minggu
            </h2>
<h3 className="text-[14px] font-body text-accent mt-4 animate-slide-up delay-100 max-w-[90%]">
                Bukan buat bikin kamu buru-buru. Tapi supaya tiap sesi bisa dikerjain dengan serius.
            </h3>

<div className="flex items-center gap-3 mt-8 bg-white/5 px-4 py-2 rounded-full animate-fade-in delay-200">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
<div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
<div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
<div className="w-2.5 h-2.5 rounded-full border border-white/40"></div>
</div>
<span className="text-[12px] font-body text-white/60">3 dari 4 slot minggu ini</span>
</div>
<p className="text-[14px] text-white/75 font-body leading-relaxed mt-8 text-left w-full animate-slide-up delay-300">
                Setiap audit butuh waktu persiapan yang proper sebelum sesi dimulai. Karena itu jumlah slot per minggu dibatasin, biar kualitasnya tetap terjaga dan kamu gak dapat review yang asal-asalan. Kalau minggu ini sudah penuh, kamu bisa daftar untuk minggu berikutnya.
            </p>
<a className="mt-10 bg-accent text-white font-bold text-base font-display rounded-[12px] w-full min-h-[52px] flex items-center justify-center transition-all hover:brightness-110 active:scale-[0.98] animate-slide-up delay-[400ms]" href="#section-10">
                Cek Slot Tersedia
            </a>
</section>

<section className="w-full bg-neutral px-5 py-24 flex flex-col items-center text-center relative z-10" id="section-10">
<iconify-icon className="text-accent text-3xl mb-4 animate-slide-up" icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-[32px] font-[800] font-display text-primary leading-tight tracking-tight mb-4 animate-slide-up delay-100">
                Mulai dari Satu Sesi. Itu Aja Dulu.
            </h2>
<h3 className="text-[20px] font-[700] font-display text-accent mb-6 animate-slide-up delay-200 max-w-[90%] mx-auto leading-snug">
                Rp 750.000 untuk tahu persis di mana budget kamu bocor dan apa yang harus dilakukan selanjutnya.
            </h3>
<p className="text-base text-textMain/80 font-body leading-relaxed text-left w-full mb-10 animate-slide-up delay-300">
                Kamu gak perlu commit ke retainer panjang atau ganti agency dulu. Cukup satu sesi ini, dan kamu udah punya jawaban konkret yang bisa langsung dieksekusi.
            </p>
<a className="bg-accent text-white font-bold text-[16px] font-display rounded-[12px] w-full min-h-[52px] flex items-center justify-center shadow-[0_4px_12px_rgba(87,197,182,0.35)] transition-all hover:shadow-[0_6px_16px_rgba(87,197,182,0.45)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 animate-slide-up delay-[400ms]" href="#">
                Jadwalkan Audit Sekarang
            </a>
<span className="text-[13px] font-body text-primary/60 mt-4 block animate-fade-in delay-[500ms]">
                Proses cepat dan aman
            </span>
</section>
</main>

    </>
  );
}
