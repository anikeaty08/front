import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#cc80ff',
accent: '#f28ce8',
neutral: '#f8f4fa',
dark: '#1A1614',
surface: '#ffffff',
},
fontFamily: {
display: ['Plus Jakarta Sans', 'sans-serif'],
body: ['Lato', 'sans-serif'],
},
animation: {
'marquee': 'marquee 30s linear infinite',
'blob': 'blob 10s infinite alternate',
'float-slow': 'float 6s ease-in-out infinite',
'float-fast': 'float 4s ease-in-out infinite reverse',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
'50%': { borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%' },
'100%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Intersection Observer to show sticky CTA only after scrolling past Section 1
    document.addEventListener("DOMContentLoaded", () => {
      const section1 = document.getElementById('section-1');
      const stickyCta = document.getElementById('sticky-cta');
      
      if (!section1 || !stickyCta) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // If section 1 is NOT intersecting (scrolled past), show sticky CTA
          if (!entry.isIntersecting) {
            stickyCta.classList.remove('translate-y-full');
          } else {
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
      

<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-neutral/50">
<div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
<div className="font-display font-semibold text-lg tracking-tighter text-dark uppercase">LUMA</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300" href="#section-7">
        Beli Sekarang
      </a>
</div>
</header>
<main className="pt-20">

<section className="lg:py-32 overflow-hidden w-full pt-16 pb-20 relative" id="section-1">
<div className="max-w-6xl mx-auto px-5 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">

<div className="flex flex-col gap-8 max-w-2xl">
<div className="">
<h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] mb-6">
<span className="text-primary block mb-2">Udah Ganti Serum Berkali-kali,</span>
<span className="text-dark">Tapi Kulit Tetap Sama Aja?</span>
</h1>
<p className="font-display font-medium text-xl md:text-2xl text-dark/60 tracking-tight">
                Kamu nggak salah. Serumnya yang salah.
              </p>
</div>
<div className="space-y-6 text-base md:text-lg leading-relaxed text-dark/80">
<p>
                Kamu udah coba berbagai serum. Udah sabar nunggu berminggu-minggu. Tapi bekas jerawat itu masih di sana, kulit masih kusam, dan setiap pagi kamu masih perlu foundation tebal sebelum keluar rumah.
              </p>
<p className="pl-4 border-l-2 border-primary/30">
                Bukan kulit kamu yang susah diurus. Bukan juga kamu yang kurang rajin. Ada alasan spesifik kenapa serum-serum itu nggak bekerja, dan itu bukan salah kamu.
              </p>
</div>

<div className="block lg:hidden mt-4">
<a className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-primary text-white font-display font-semibold text-base shadow-lg shadow-primary/25 hover:brightness-110 transition-all active:scale-[0.98]" href="#section-7">
                Beli Sekarang — Rp 129.000
              </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center lg:justify-end">

<div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]"></div>

<div className="relative z-10 flex flex-col items-center group animate-float-slow">

<div className="w-12 h-14 bg-neutral border border-[#e8dff0] rounded-t-full shadow-[inset_0_-4px_10px_rgba(0,0,0,0.02)] z-30 relative transition-transform duration-500 group-hover:-translate-y-1"></div>

<div className="w-14 h-5 bg-gradient-to-r from-surface via-neutral to-surface border-x border-y border-dark/5 z-20 flex flex-col justify-evenly py-0.5">
<div className="w-full h-[1px] bg-dark/5"></div>
<div className="w-full h-[1px] bg-dark/5"></div>
</div>

<div className="w-36 h-48 bg-surface/60 backdrop-blur-md rounded-[2rem] border border-white shadow-2xl shadow-primary/15 overflow-hidden relative flex flex-col items-center justify-end pb-8 z-10 transition-transform duration-500 group-hover:scale-[1.02]">

<div className="absolute bottom-0 w-full h-[65%] bg-gradient-to-t from-primary/15 via-primary/5 to-transparent"></div>

<div className="relative z-30 text-center flex flex-col items-center">
<span className="font-display font-semibold text-xl tracking-[0.25em] text-dark uppercase ml-1">LUMA</span>
<div className="w-6 h-px bg-dark/20 my-2"></div>
<span className="font-body font-medium text-xs text-dark/40 tracking-widest uppercase">Serum</span>
</div>

<div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/70 to-transparent skew-x-[15deg] transform -translate-x-4 pointer-events-none"></div>
</div>
</div>


<div className="absolute top-10 md:top-20 left-0 lg:-left-12 bg-surface/90 backdrop-blur-sm border border-[#e8dff0] shadow-xl shadow-dark/5 px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-fast z-20">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-primary text-lg" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-display font-semibold text-xs tracking-tight text-dark uppercase leading-none mb-1">10% Niacinamide</span>
<span className="font-body text-xs text-dark/50 leading-none">High Concentrate</span>
</div>
</div>

<div className="absolute bottom-10 md:bottom-20 right-0 lg:-right-4 bg-surface/90 backdrop-blur-sm border border-[#e8dff0] shadow-xl shadow-dark/5 px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-slow z-20" style={{animationDelay: '1s'}}>
<div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-accent text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-display font-semibold text-xs tracking-tight text-dark uppercase leading-none mb-1">BPOM Approved</span>
<span className="font-body text-xs text-dark/50 leading-none">Clinically Tested</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-50 z-0"></div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-neutral/60 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply"></div>
</section>

<section className="w-full py-16 md:py-24 bg-neutral border-y border-neutral/80" id="section-2">
<div className="max-w-6xl mx-auto px-5">
<div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 md:gap-16 items-center">

<div className="order-2 md:order-1">
<h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
              Bukan Kulitmu yang Bermasalah.<br/>Formulasinya yang Nggak Cukup.
            </h2>
<h3 className="font-display text-lg md:text-xl text-primary font-medium tracking-tight mb-6">
              Ini yang jarang brand lain mau jujur bilang ke kamu.
            </h3>
<div className="space-y-5 text-base md:text-lg leading-relaxed text-dark/70">
<p>
                Kebanyakan serum di pasaran pakai Niacinamide di bawah 5%, konsentrasi yang terlalu rendah untuk mengubah hiperpigmentasi secara nyata. Sisanya pakai bahan pengisi yang terlihat mewah di label tapi tidak berkontribusi ke hasil.
              </p>
<p>
                Kulit kusam dan bekas jerawat butuh konsentrasi aktif yang tepat, kombinasi bahan yang saling mendukung, dan formulasi yang bisa menembus lapisan kulit dengan benar. Tanpa tiga hal itu, tidak ada perubahan yang akan terjadi, seberapapun rajin kamu pakainya.
              </p>
</div>
</div>

<div className="order-1 md:order-2 bg-surface p-6 md:p-8 rounded-2xl border border-primary/10 shadow-sm relative overflow-hidden">
<div className="relative z-10 flex flex-col gap-8">

<div>
<div className="flex justify-between items-end mb-2">
<span className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-dark/50">Serum rata-rata</span>
<span className="font-body text-xs font-medium text-dark/50">&lt; 5%</span>
</div>
<div className="h-1.5 w-full bg-[#e8e8e8] rounded-full overflow-hidden">
<div className="h-full bg-[#d0d0d0] w-[30%]"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<span className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-primary">LUMA</span>
<span className="font-body text-xs font-medium text-primary">10%</span>
</div>
<div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
<div className="h-full bg-primary w-full origin-left"></div>
</div>
</div>
</div>

<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-16 md:py-24 bg-surface bg-grid-pattern" id="section-3">
<div className="max-w-3xl mx-auto px-5 relative z-10">
<div className="mb-12">
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-[4rem] tracking-tight leading-[1.05] mb-4">
            Tiga Bahan, Satu Tujuan:<br/>Kulit Cerah yang Bisa Dipertahankan
          </h2>
<h3 className="font-display text-lg md:text-xl text-dark/60 font-medium tracking-tight">
            Bukan klaim. Ini mekanisme kerja yang sudah dibuktikan riset.
          </h3>
</div>
<div className="flex flex-col">

<div className="py-6 border-b border-[#f0eaf5]">
<div className="mb-3">
<span className="inline-block bg-neutral border-l-[3px] border-primary px-3 py-1 font-display text-[11px] md:text-xs font-semibold tracking-wider text-primary uppercase rounded-r-md">
                Niacinamide 10%
              </span>
</div>
<p className="text-base md:text-lg leading-relaxed text-dark/80">
              Menghambat transfer melanin ke permukaan kulit, langsung menyasar akar penyebab kusam dan bekas gelap. <span className="text-primary font-medium">Konsentrasi 10% adalah titik efektif yang divalidasi penelitian dermatologi.</span>
</p>
</div>

<div className="py-6 border-b border-[#f0eaf5]">
<div className="mb-3">
<span className="inline-block bg-neutral border-l-[3px] border-primary px-3 py-1 font-display text-[11px] md:text-xs font-semibold tracking-wider text-primary uppercase rounded-r-md">
                Zinc PCA
              </span>
</div>
<p className="text-base md:text-lg leading-relaxed text-dark/80">
              Mengatur produksi sebum, menenangkan peradangan aktif, dan membantu mencegah jerawat baru terbentuk. Bukan sekadar pelengkap, ini yang menjaga hasil tetap konsisten.
            </p>
</div>

<div className="py-6 border-b border-[#f0eaf5]">
<div className="mb-3">
<span className="inline-block bg-neutral border-l-[3px] border-primary px-3 py-1 font-display text-[11px] md:text-xs font-semibold tracking-wider text-primary uppercase rounded-r-md">
                Centella Asiatica
              </span>
</div>
<p className="text-base md:text-lg leading-relaxed text-dark/80">
              Mempercepat regenerasi sel kulit dan memperkuat skin barrier. Kulit yang barriernya kuat menyerap bahan aktif jauh lebih optimal.
            </p>
</div>
<div className="pt-8">
<p className="text-base md:text-lg leading-relaxed text-dark/80 italic font-medium">
              Ketiga bahan ini bekerja dalam satu jalur yang saling mendukung, bukan tiga bahan terpisah yang asal dicampur.
            </p>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-surface to-transparent z-0"></div>
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface to-transparent z-0"></div>
</section>

<section className="w-full py-20 md:py-32 bg-[#1A1614] overflow-hidden" id="section-4">
<div className="max-w-5xl mx-auto px-5 mb-16">
<div className="mb-16">
<h2 className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            23.000+ Orang Sudah Coba.<br/>Mereka Juga Awalnya Skeptis.
          </h2>
<h3 className="font-display text-lg md:text-xl text-primary font-medium tracking-tight">
            Angka ini bukan marketing. Ini catatan botol yang sudah habis dan dipesan lagi.
          </h3>
</div>
<div className="grid grid-cols-2 gap-8 md:gap-12 mb-16">

<div className="flex flex-col">
<span className="font-display font-semibold text-4xl md:text-[3.5rem] text-primary leading-none mb-2">23.000+</span>
<span className="font-body text-xs md:text-sm text-[#e0d5ea]">botol terjual</span>
</div>

<div className="flex flex-col">
<span className="font-display font-semibold text-4xl md:text-[3.5rem] text-primary leading-none mb-2">4.8 <span className="text-xl md:text-2xl text-primary/50">/ 5</span></span>
<span className="font-body text-xs md:text-sm text-[#e0d5ea]">rating rata-rata</span>
</div>

<div className="flex flex-col">
<span className="font-display font-semibold text-4xl md:text-[3.5rem] text-primary leading-none mb-2">2.400+</span>
<span className="font-body text-xs md:text-sm text-[#e0d5ea]">review terverifikasi</span>
</div>

<div className="flex flex-col">
<span className="font-display font-semibold text-4xl md:text-[3.5rem] text-primary leading-none mb-2">BPOM</span>
<span className="font-body text-xs md:text-sm text-[#e0d5ea]">Certified, aman untuk pemakaian harian</span>
</div>
</div>
<div className="max-w-[65ch]">
<p className="text-base md:text-lg leading-relaxed text-[#e0d5ea]/80">
            Kalau LUMA tidak bekerja, tidak akan ada yang repot-repot beli lagi. Tidak akan ada 2.400 orang yang meluangkan waktu menulis review. Dan tidak akan ada sertifikasi BPOM yang diterima tanpa melalui serangkaian uji keamanan dan efektivitas yang ketat.
          </p>
</div>
</div>

<div className="w-full relative py-6 border-y border-[#302a36]/50 bg-[#1A1614]/50 backdrop-blur-sm flex overflow-hidden">
<div className="flex w-[200%] animate-marquee">

<div className="flex min-w-full justify-around items-center gap-8 px-4 text-xs md:text-sm font-display font-medium uppercase tracking-widest text-[#e0d5ea]/40 whitespace-nowrap">
<span>23.000+ Terjual</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
<span>Rating 4.8/5</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
<span>Dermatologist Tested</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
<span>BPOM Certified</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
</div>

<div className="flex min-w-full justify-around items-center gap-8 px-4 text-xs md:text-sm font-display font-medium uppercase tracking-widest text-[#e0d5ea]/40 whitespace-nowrap">
<span>23.000+ Terjual</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
<span>Rating 4.8/5</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
<span>Dermatologist Tested</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
<span>BPOM Certified</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
</div>
</div>
</div>
</section>

<section className="relative w-full py-20 md:py-32 bg-neutral overflow-hidden flex flex-col justify-center" id="section-5">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
<span className="text-[12rem] md:text-[25rem] font-display font-bold text-primary opacity-[0.03] select-none leading-none tracking-tighter">4.8</span>
</div>
<div className="max-w-6xl mx-auto w-full px-5 relative z-10 mb-12">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-dark mb-2">
          Kata Mereka yang Udah Duluan Coba
        </h2>
<h3 className="font-display text-base md:text-lg text-dark/60">
          Review nyata dari pengguna nyata, bukan endorsement berbayar.
        </h3>

<div className="mt-6 flex items-center gap-3">
<span className="text-xs font-display font-semibold text-dark/40">5 Bintang</span>
<div className="flex-1 h-1 bg-surface rounded-full max-w-[200px] overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-primary to-accent"></div>
</div>
<span className="text-xs font-display font-semibold text-dark/40">92%</span>
</div>
</div>

<div className="w-full relative z-10">
<div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 max-w-6xl mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">

<div className="flex-none w-[85vw] md:w-auto bg-surface p-6 rounded-2xl border border-[#e8dff0] snap-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[220px]">
<div>
<iconify-icon className="text-primary/30 text-3xl mb-3" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-sm md:text-base text-dark/80 italic leading-relaxed">
                "Baru 2 minggu, bekas jerawat udah mulai pudar. Aku yang biasanya butuh concealer tiap hari, sekarang bisa skip."
              </p>
</div>
<div className="mt-6">
<p className="font-display font-semibold text-xs text-primary tracking-tight">@sarahbeauty</p>
<p className="font-body text-xs text-[#999] mt-0.5">kulit berminyak + bekas jerawat</p>
</div>
</div>

<div className="flex-none w-[85vw] md:w-auto bg-surface p-6 rounded-2xl border border-[#e8dff0] snap-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[220px] md:translate-y-4">
<div>
<iconify-icon className="text-primary/30 text-3xl mb-3" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-sm md:text-base text-dark/80 italic leading-relaxed">
                "Kulit sensitifku nggak reaksi sama sekali. Justru kemerahan yang biasanya ada mulai berkurang di minggu ketiga."
              </p>
</div>
<div className="mt-6">
<p className="font-display font-semibold text-xs text-primary tracking-tight">@rizkafadila</p>
<p className="font-body text-xs text-[#999] mt-0.5">kulit sensitif + kemerahan</p>
</div>
</div>

<div className="flex-none w-[85vw] md:w-auto bg-surface p-6 rounded-2xl border border-[#e8dff0] snap-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[220px]">
<div>
<iconify-icon className="text-primary/30 text-3xl mb-3" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-sm md:text-base text-dark/80 italic leading-relaxed">
                "Udah coba 4 serum niacinamide sebelumnya. Ini yang pertama kali aku ngerasa beda di minggu pertama."
              </p>
</div>
<div className="mt-6">
<p className="font-display font-semibold text-xs text-primary tracking-tight">@dewisp_</p>
<p className="font-body text-xs text-[#999] mt-0.5">kulit kombinasi + kusam</p>
</div>
</div>

<div className="flex-none w-[85vw] md:w-auto bg-surface p-6 rounded-2xl border border-[#e8dff0] snap-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[220px] md:translate-y-4">
<div>
<iconify-icon className="text-primary/30 text-3xl mb-3" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-sm md:text-base text-dark/80 italic leading-relaxed">
                "Teksturnya ringan banget, nggak bikin pori-pori tersumbat. Akhirnya nemu serum yang bisa dipakai pagi dan malem."
              </p>
</div>
<div className="mt-6">
<p className="font-display font-semibold text-xs text-primary tracking-tight">@fitrihandayani</p>
<p className="font-body text-xs text-[#999] mt-0.5">kulit normal + tidak merata</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-16 md:py-24 bg-surface" id="section-6">
<div className="max-w-3xl mx-auto px-5">
<div className="mb-12">
<h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight text-dark mb-3">
            Pertanyaan Jujur, Jawaban Jujur
          </h2>
<h3 className="font-display text-lg text-dark/60 font-medium">
            Kami tidak mau kamu beli tanpa yakin.
          </h3>
</div>
<div className="flex flex-col border-t border-[#e8dff0]">

<label className="cursor-pointer block border-b border-[#e8dff0] group">
<input className="peer sr-only" type="checkbox"/>
<div className="py-5 flex justify-between items-center gap-4 group-hover:text-primary transition-colors duration-200">
<h4 className="font-display font-semibold text-[15px] md:text-base text-dark group-hover:text-primary transition-colors">
                Pasti sama aja kayak serum niacinamide yang lain?
              </h4>
<div className="icon-toggle shrink-0 text-primary transition-transform duration-300">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pb-6 pr-8 text-sm md:text-[15px] leading-[1.7] text-dark/70">
                  Sebagian besar serum niacinamide di pasaran pakai konsentrasi 2-5%, jauh di bawah ambang efektif. LUMA pakai 10% dengan kombinasi Zinc PCA dan Centella Asiatica yang bekerja sinergis. Konsentrasi dan kombinasi ini yang membuat perbedaan nyata, bukan sekadar label yang berbeda.
                </p>
</div>
</div>
</label>

<label className="cursor-pointer block border-b border-[#e8dff0] group">
<input className="peer sr-only" type="checkbox"/>
<div className="py-5 flex justify-between items-center gap-4 group-hover:text-primary transition-colors duration-200">
<h4 className="font-display font-semibold text-[15px] md:text-base text-dark group-hover:text-primary transition-colors">
                Kulit sensitifku bisa cocok nggak?
              </h4>
<div className="icon-toggle shrink-0 text-primary transition-transform duration-300">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pb-6 pr-8 text-sm md:text-[15px] leading-[1.7] text-dark/70">
                  Formulasi LUMA dirancang tanpa fragrance, tanpa alkohol, dan tanpa bahan iritan umum. Centella Asiatica di dalamnya justru berfungsi menenangkan kulit yang reaktif. Sudah diuji dermatologis dan terbukti aman untuk kulit sensitif.
                </p>
</div>
</div>
</label>

<label className="cursor-pointer block border-b border-[#e8dff0] group">
<input className="peer sr-only" type="checkbox"/>
<div className="py-5 flex justify-between items-center gap-4 group-hover:text-primary transition-colors duration-200">
<h4 className="font-display font-semibold text-[15px] md:text-base text-dark group-hover:text-primary transition-colors">
                Rp 129.000 sayang kalau ternyata nggak cocok lagi.
              </h4>
<div className="icon-toggle shrink-0 text-primary transition-transform duration-300">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="pb-6 pr-8 text-sm md:text-[15px] leading-[1.7] text-dark/70">
                  Masuk akal kalau kamu berpikir begitu setelah beberapa kali kecewa. Tapi pertimbangkan ini: 2.400+ review dengan rating 4.8/5 bukan angka yang bisa dipalsukan, dan BPOM tidak memberikan sertifikasi tanpa uji klinis. Ini bukan percobaan, ini pilihan yang sudah banyak diverifikasi orang lain.
                </p>
</div>
</div>
</label>
</div>
</div>
</section>

<section className="w-full py-16 md:py-24 bg-neutral border-t border-neutral/80" id="section-7">
<div className="max-w-3xl mx-auto px-5">
<div className="mb-10">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4 text-dark">
            Rp 129.000 untuk Apa, Tepatnya?
          </h2>
<h3 className="font-display text-lg text-primary font-medium tracking-tight">
            Bukan soal murah. Soal apakah nilainya masuk akal.
          </h3>
</div>
<div className="space-y-8">
<div>
<p className="font-display font-semibold text-sm text-dark/60 uppercase tracking-wider mb-4">Yang kamu dapat:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-primary shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="text-[15px] md:text-base text-dark/80 leading-relaxed">Serum LUMA 30ml, cukup untuk pemakaian 2x sehari selama 30 hari.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-primary shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="text-[15px] md:text-base text-dark/80 leading-relaxed">Niacinamide 10% + Zinc PCA + Centella Asiatica dalam satu formulasi.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-primary shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="text-[15px] md:text-base text-dark/80 leading-relaxed">BPOM certified, aman untuk semua jenis kulit termasuk sensitif.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-primary shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="text-[15px] md:text-base text-dark/80 leading-relaxed font-medium">Beli 2 botol, gratis pouch eksklusif senilai Rp 50.000.</span>
</li>
</ul>
</div>
<div className="pl-4 border-l-[3px] border-primary/40 py-1">
<p className="text-[15px] md:text-base italic leading-relaxed text-dark/70">
              Coba hitung serum yang sudah kamu beli dan tidak bekerja. Kalau totalnya lebih dari Rp 129.000, maka mencoba LUMA bukan keputusan mahal. Itu keputusan yang lebih efisien.
            </p>
</div>
<div className="pt-6 flex flex-col items-center gap-4">

<button className="w-full md:w-auto min-w-[280px] min-h-[52px] flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-display font-semibold text-base rounded-xl border-2 border-transparent hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98]">
              Beli Sekarang — Rp 129.000
            </button>

<div className="flex items-center justify-center gap-4 text-dark/40 mt-2">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[11px] font-display font-medium uppercase tracking-wider">BPOM</span>
</div>
<div className="w-1 h-1 rounded-full bg-dark/20"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
<span className="text-[11px] font-display font-medium uppercase tracking-wider">All Skin Type</span>
</div>
<div className="w-1 h-1 rounded-full bg-dark/20"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-[11px] font-display font-medium uppercase tracking-wider">Secure</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-16 md:py-24 bg-surface" id="section-8">
<div className="max-w-6xl mx-auto px-5">
<div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-16 items-center">

<div className="order-1 md:order-2 flex justify-center md:justify-end">

<div className="relative w-full max-w-[320px] aspect-[4/5] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 animate-blob mix-blend-multiply"></div>

<div className="relative w-3/4 h-2/3 bg-neutral border border-[#e0d5ea] rounded-[16px] shadow-sm flex flex-col items-center justify-center p-6 backdrop-blur-sm z-10">
<div className="w-12 h-16 border-2 border-primary/20 rounded-md mb-4 opacity-50 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-3 bg-primary/20 rounded-t-sm"></div>
</div>
<span className="font-display font-semibold tracking-widest text-primary text-sm uppercase mb-2">LUMA</span>
<span className="font-body text-xs text-dark/50 mb-6">30ml</span>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max px-2.5 py-1 bg-surface border border-primary/10 rounded-full flex items-center gap-1">
<iconify-icon className="text-primary text-[10px]" icon="solar:verified-check-bold"></iconify-icon>
<span className="text-xs font-display font-semibold tracking-wider text-dark/60 uppercase">BPOM Certified</span>
</div>
</div>
</div>
</div>

<div className="order-2 md:order-1">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-[1.1] mb-3">
              Ini Bukan Gambling.<br/>Ini Pilihan yang Sudah Diverifikasi.
            </h2>
<h3 className="font-display text-base md:text-lg text-dark/60 mb-8">
              Kamu tidak perlu percaya kata kami dulu. Percaya datanya.
            </h3>
<div className="flex flex-col gap-5 border-t border-[#f0eaf5] pt-6 mb-8">

<div className="pb-5 border-b border-[#f0eaf5] flex gap-4 items-start">
<iconify-icon className="text-primary text-2xl shrink-0 mt-0.5" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="font-display font-semibold text-[14px] text-dark mb-1">BPOM Certified</h4>
<p className="font-body text-[13px] text-dark/70 leading-relaxed">
                    Setiap batch produksi diuji dan diawasi oleh Badan Pengawas Obat dan Makanan. Ini bukan klaim, ini kewajiban hukum yang kami penuhi.
                  </p>
</div>
</div>

<div className="pb-5 border-b border-[#f0eaf5] flex gap-4 items-start">
<iconify-icon className="text-primary text-2xl shrink-0 mt-0.5" icon="solar:test-tube-linear"></iconify-icon>
<div>
<h4 className="font-display font-semibold text-[14px] text-dark mb-1">Dermatologist Tested</h4>
<p className="font-body text-[13px] text-dark/70 leading-relaxed">
                    Formula LUMA diuji untuk keamanan kulit, termasuk kulit sensitif dan reaktif.
                  </p>
</div>
</div>

<div className="pb-5 border-b border-[#f0eaf5] flex gap-4 items-start">
<iconify-icon className="text-primary text-2xl shrink-0 mt-0.5" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div>
<h4 className="font-display font-semibold text-[14px] text-dark mb-1">23.000+ pengguna aktif</h4>
<p className="font-body text-[13px] text-dark/70 leading-relaxed">
                    Angka ini terus bertambah bukan karena iklan, tapi karena orang yang sudah coba merekomendasikan ke orang lain.
                  </p>
</div>
</div>
</div>
<p className="text-[15px] font-medium text-primary">
              Kulit kamu tidak sedang coba-coba. Kamu sedang memilih produk yang sudah ribuan orang buktikan.
            </p>
</div>
</div>
</div>
</section>

<section className="relative w-full py-24 md:py-32 bg-[#1A1614] overflow-hidden flex flex-col items-center text-center px-5" id="section-9">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1A1614]/80 to-[#1A1614] z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
<h2 className="font-display font-semibold text-[34px] md:text-5xl text-white tracking-tight leading-[1.1] mb-6">
          Kamu Udah Coba yang Lain.<br/>Sekarang Coba yang <span className="text-primary">Terakhir.</span>
</h2>
<div className="space-y-4 mb-10 max-w-[360px] mx-auto">
<p className="font-body text-[15px] md:text-base text-[#c0b0cc] leading-relaxed">
            Kulit cerah tanpa bekas jerawat bukan sesuatu yang harus kamu kejar terus tanpa hasil. LUMA dirancang untuk orang yang sudah frustrasi dan butuh sesuatu yang benar-benar bekerja.
          </p>
<p className="font-body text-[15px] md:text-base text-[#c0b0cc] leading-relaxed">
            23.000+ orang sudah membuktikannya. Beli 2, gratis pouch. Satu keputusan.
          </p>
</div>

<button className="w-full md:w-auto min-w-[280px] min-h-[52px] px-8 py-4 rounded-xl bg-primary text-white font-display font-semibold text-base hover:bg-white hover:text-primary transition-colors duration-300">
          Beli Sekarang — Rp 129.000
        </button>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full z-50 transform translate-y-full transition-transform duration-500 ease-out" id="sticky-cta">
<div className="bg-surface/90 backdrop-blur-md border-t border-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-4 md:p-5 flex justify-center">
<div className="w-full max-w-md">

<button className="w-full min-h-[52px] bg-primary text-white rounded-xl font-display font-semibold text-base shadow-lg shadow-primary/25 hover:brightness-110 transition-all active:scale-[0.98]">
          Beli Sekarang — Rp 129.000
        </button>
</div>
</div>
</div>


    </>
  );
}
