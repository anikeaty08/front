import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#99ff00',
accent: '#96f28c',
neutral: '#f3f7ed',
dark: '#1A1614',
},
fontFamily: {
display: ['Sora', 'sans-serif'],
body: ['Nunito', 'sans-serif'],
},
animation: {
'marquee': 'marquee 30s linear infinite',
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
countUp: {
'0%': { content: '"290+"' },
'20%': { content: '"293+"' },
'40%': { content: '"296+"' },
'60%': { content: '"298+"' },
'80%': { content: '"299+"' },
'100%': { content: '"300+"' },
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
      
<main>

<section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-5 max-w-7xl mx-auto overflow-hidden" id="section-1">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

<div className="md:col-span-7 flex flex-col items-start opacity-0 animate-fade-up">
<h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight mb-6">
<span className="highlight">7 Hari.</span> Dari Canva DIY ke Brand yang Keliatan Serius.
          </h1>
<p className="font-display font-medium text-xl md:text-2xl text-dark/80 mb-8 max-w-[90%] tracking-tight">
            Bukan cuma logo. Kamu dapat sistem visual lengkap yang bikin customer langsung percaya, bukan tanya-tanya dulu.
          </p>
<div className="space-y-4 mb-10 text-base md:text-lg leading-relaxed text-dark/70 max-w-[65ch]">
<p>Jasa desain lain kasih file PNG dan selesai.</p>
<p>Brand-in-a-Week kasih logo, warna, font, guideline, template Instagram, kartu nama, semua source file, dan 2 ronde revisi.</p>
<p>Dalam 7 hari kerja.</p>
<p className="text-dark font-medium">Satu harga. Rp 1.500.000.</p>
</div>
<div className="w-full md:w-auto flex flex-col items-start">
<div className="w-full">
<p className="text-xs text-dark/60 font-body mb-2 pl-1 uppercase tracking-wider font-semibold">Tanpa DP, langsung mulai</p>
<button className="w-full md:w-auto min-h-[52px] bg-primary text-dark font-display font-semibold text-base px-8 py-4 rounded-xl hover:brightness-95 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Mulai Project , Rp 1.5jt
              </button>
</div>
<a className="mt-4 text-sm font-body text-dark/60 underline underline-offset-4 hover:text-dark transition-colors self-center md:self-start" href="#section-2">
              Lihat dulu cara kerjanya
            </a>
</div>
</div>

<div className="md:col-span-5 relative opacity-0 animate-fade-up delay-200">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral border border-dark/5">
<img alt="Visualisasi Brand System Lengkap" className="w-full h-full object-cover" src="https://placehold.co/800x1000/f3f7ed/1A1614?text=Brand+System"/>

<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 blur-2xl rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-neutral px-5" id="section-2">
<div className="max-w-4xl mx-auto">
<div className="mb-16 md:mb-24 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-4">Satu Harga. Satu Minggu. Semua Ini.</h2>
<p className="font-display text-lg md:text-xl text-dark/70 tracking-tight">Bukan logo doang. Ini brand system yang langsung bisa kamu pakai hari pertama.</p>
</div>

<ul className="flex flex-col gap-6 md:gap-8">
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Logo utama plus 3 variasi pemakaian.</p>
</li>
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Color palette dan typography system yang konsisten.</p>
</li>
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-200">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Brand guideline PDF 20 halaman.</p>
</li>
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Enam template IG post, story template, kartu nama.</p>
</li>
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Semua source file: AI, PNG, PDF, Figma.</p>
</li>
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Dua ronde revisi.</p>
</li>
<li className="flex items-start gap-4 md:gap-6 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-200">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<p className="font-body font-semibold text-base md:text-lg leading-relaxed pt-1">Selesai 7 hari kerja.</p>
</li>
</ul>
</div>
</section>

<section className="py-20 md:py-32 px-5 bg-white" id="section-3">
<div className="max-w-3xl mx-auto">
<div className="mb-16">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-4">Kamu Tau Kapan Brand Kamu Siap. Titik.</h2>
<p className="font-display text-lg md:text-xl text-dark/70 tracking-tight">Ada timeline-nya. Bukan 'nanti ya, lagi banyak project'.</p>
</div>

<div className="relative border-l border-accent/50 ml-3 md:ml-4 space-y-12 pb-8">
<div className="relative pl-8 md:pl-12 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<div className="absolute w-2.5 h-2.5 bg-white border-2 border-primary rounded-full timeline-dot top-1.5"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
<h3 className="font-display font-semibold text-lg min-w-[100px]">Hari 1-2:</h3>
<p className="font-body text-[15px] leading-relaxed text-dark/80">brief dan riset brand.</p>
</div>
</div>
<div className="relative pl-8 md:pl-12 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-100">
<div className="absolute w-2.5 h-2.5 bg-white border-2 border-primary rounded-full timeline-dot top-1.5"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
<h3 className="font-display font-semibold text-lg min-w-[100px]">Hari 3-4:</h3>
<p className="font-body text-[15px] leading-relaxed text-dark/80">konsep visual pertama dikirim.</p>
</div>
</div>
<div className="relative pl-8 md:pl-12 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-200">
<div className="absolute w-2.5 h-2.5 bg-white border-2 border-primary rounded-full timeline-dot top-1.5"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
<h3 className="font-display font-semibold text-lg min-w-[100px]">Hari 5:</h3>
<p className="font-body text-[15px] leading-relaxed text-dark/80">revisi ronde satu.</p>
</div>
</div>
<div className="relative pl-8 md:pl-12 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-300">
<div className="absolute w-2.5 h-2.5 bg-white border-2 border-primary rounded-full timeline-dot top-1.5"></div>
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
<h3 className="font-display font-semibold text-lg min-w-[100px]">Hari 6:</h3>
<p className="font-body text-[15px] leading-relaxed text-dark/80">revisi ronde dua.</p>
</div>
</div>
<div className="relative pl-8 md:pl-12 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-[400ms]">

<div className="absolute w-3 h-3 bg-primary rounded-full top-3 -left-[6px] shadow-[0_0_0_4px_rgba(153,255,0,0.2)]"></div>
<div className="bg-primary px-5 py-4 rounded-xl inline-block">
<div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
<h3 className="font-display font-bold text-lg min-w-[100px] text-dark">Hari 7:</h3>
<p className="font-body font-medium text-[15px] leading-relaxed text-dark">semua file final, siap pakai.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-neutral max-w-2xl opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<p className="font-body text-base md:text-lg text-dark/70 leading-relaxed">
            Dua ronde revisi bukan batasan. Itu jaminan kita gak buang waktu satu sama lain.
          </p>
</div>
</div>
</section>

<section className="bg-dark text-white pt-20 md:pt-32 pb-12 relative overflow-hidden flex flex-col" id="section-4">
<div className="px-5 max-w-7xl mx-auto w-full flex-grow mb-20">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
<div className="max-w-2xl">
<div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
<span className="font-display font-semibold text-primary text-sm tracking-widest uppercase css-counter"></span>
<span className="font-display font-semibold text-white text-sm tracking-widest uppercase ml-1">Brand</span>
</div>
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              Satu Pun Gak Pernah Tanya 'Ini Bisnis Beneran?'
            </h2>
<p className="font-body text-lg text-white/70 max-w-[50ch] leading-relaxed">
              F&amp;B, fashion, skincare, tech, personal brand. Kalau bisnis kamu masuk kategori manusia, kita udah pernah ngerjainnya.
            </p>
</div>
<div className="hidden md:block">
<button className="bg-primary text-dark font-display font-semibold text-base px-8 py-4 rounded-xl hover:bg-accent transition-colors min-h-[52px]">
              Lihat Portfolio
            </button>
</div>
</div>
<div className="mb-16">
<p className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-[65ch]">
            Bukan soal estetika. Soal persepsi customer pertama waktu lihat feed atau kartu nama kamu.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 rounded-2xl overflow-hidden bg-dark">

<div className="relative bg-[#2A2421] p-6 md:p-12 aspect-square md:aspect-[4/3] flex flex-col justify-between items-start rounded-2xl border border-white/5">
<div className="bg-white/10 text-white/60 font-body text-[12px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full backdrop-blur-md">
              Sebelum: keliatan iseng
            </div>
<div className="w-full h-full flex items-center justify-center mt-6">
<img alt="Desain amatir" className="w-4/5 h-auto object-cover rounded shadow-lg opacity-50 grayscale" src="https://placehold.co/400x300/3A332F/5A514B?text=Random+Fonts+%26+Colors"/>
</div>
</div>

<div className="relative bg-primary/5 p-6 md:p-12 aspect-square md:aspect-[4/3] flex flex-col justify-between items-start rounded-2xl border border-primary/20">
<div className="bg-primary text-dark font-body text-[12px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-lg">
              Sesudah: keliatan kayak brand yang udah fundraising
            </div>
<div className="w-full h-full flex items-center justify-center mt-6">
<img alt="Desain profesional" className="w-full h-auto object-cover rounded-lg shadow-2xl" src="https://placehold.co/400x300/99ff00/1A1614?text=Cohesive+Brand+System"/>
</div>
</div>
</div>

<div className="mt-12 md:hidden w-full">
<button className="w-full bg-primary text-dark font-display font-semibold text-base px-8 py-4 rounded-xl hover:bg-accent transition-colors min-h-[52px]">
              Lihat Portfolio
            </button>
</div>
</div>

<div className="marquee-container w-full bg-[#14100E] border-t border-white/5 py-4 overflow-hidden relative mt-auto">
<div className="flex w-[200%] animate-marquee whitespace-nowrap items-center">

<div className="flex justify-around w-1/2 items-center">
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">F&amp;B</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Fashion</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Skincare</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Tech Startup</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Personal Brand</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Retail</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
</div>

<div className="flex justify-around w-1/2 items-center">
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">F&amp;B</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Fashion</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Skincare</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Tech Startup</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Personal Brand</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="font-body text-[13px] uppercase tracking-[0.2em] text-white/40">Retail</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-5 bg-neutral" id="section-5">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<iconify-icon className="text-primary text-5xl md:text-6xl mb-6 opacity-80" icon="solar:quote-right-linear"></iconify-icon>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">Mereka Juga Ragu. Sampai Lihat Hasilnya.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">

<div className="bg-white p-8 rounded-[16px] border-l-[4px] border-primary shadow-sm flex flex-col h-full opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up">
<p className="font-body text-base leading-relaxed text-dark/80 mb-8 flex-grow">
              "Awalnya mikir 1.5jt lumayan buat logo. Pas nerima PDF guideline sama template feed, baru sadar ini murah banget. <span className="highlight text-dark font-medium">Sekarang PD banget ngasih kartu nama</span> ke investor."
            </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Klien F&amp;B" className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/e5e7eb/a3a3a3?text=A"/>
<div>
<p className="font-display text-[13px] font-bold text-dark">Andi R.</p>
<p className="font-body text-[12px] text-dark/60">Owner Artisan Bakery</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[16px] border-l-[4px] border-primary shadow-sm flex flex-col h-full md:mt-12 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-100">
<p className="font-body text-base leading-relaxed text-dark/80 mb-8 flex-grow">
              "Dulu IG feed berantakan karena ganti-ganti font di Canva. Sejak pake template dari Brand-in-a-Week, <span className="highlight text-dark font-medium">keliatan kayak brand gede yang punya tim kreatif</span> sendiri padahal cuma aku sendirian."
            </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Klien Skincare" className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/e5e7eb/a3a3a3?text=S"/>
<div>
<p className="font-display text-[13px] font-bold text-dark">Sarah M.</p>
<p className="font-body text-[12px] text-dark/60">Founder Skincare Lokal</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[16px] border-l-[4px] border-primary shadow-sm flex flex-col h-full md:mt-24 opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-fade-up delay-200">
<p className="font-body text-base leading-relaxed text-dark/80 mb-8 flex-grow">
              "7 hari beneran selesai. Revisinya cepet tanggap dan ngerti maksudku. Gak pake drama <span className="highlight text-dark font-medium">langsung siap launching</span> minggu depannya."
            </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Klien Tech" className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/e5e7eb/a3a3a3?text=D"/>
<div>
<p className="font-display text-[13px] font-bold text-dark">Dimas P.</p>
<p className="font-body text-[12px] text-dark/60">SaaS Startup</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-5 bg-white" id="section-6">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<div className="w-full border-2 border-primary rounded-[24px] p-8 md:p-16 bg-white shadow-[0_20px_50px_-12px_rgba(153,255,0,0.15)] relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-neutral rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<h2 className="font-display font-semibold text-2xl md:text-3xl text-dark/60 tracking-tight mb-4">Rp 1.500.000. Semua Yang Tadi. Gak Ada Lagi.</h2>

<div className="font-display font-black text-6xl md:text-[80px] tracking-tighter text-dark my-8 leading-none">
              Rp 1.5jt
            </div>
<p className="font-body text-lg md:text-xl text-dark/80 max-w-2xl mx-auto mb-12">
              Hire freelancer terpisah untuk logo, template, dan guideline? Angkanya bisa tiga kali lipat.
            </p>
<div className="text-left font-body text-base text-dark/70 space-y-6 max-w-2xl mx-auto mb-12 bg-neutral/50 p-6 md:p-8 rounded-2xl">
<p>Lihat apa yang kamu dapat. Hitung sendiri harga pasarannya. Terus bandingkan.</p>
<p>Satu harga, satu paket, satu minggu. Gak ada addon tersembunyi. Gak ada biaya revisi extra di dalam 2 ronde yang udah dijanjikan.</p>
</div>
<div className="w-full max-w-sm mx-auto flex flex-col items-center">
<p className="text-xs text-dark/60 font-body mb-3 uppercase tracking-wider font-semibold">Tanpa DP, langsung mulai</p>
<button className="w-full bg-primary text-dark font-display font-bold text-lg px-8 py-5 rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 min-h-[56px]">
                Mulai Project, Rp 1.5jt
              </button>
</div>

<div className="mt-12 flex justify-center items-center gap-6 md:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:card-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:wallet-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark text-white py-24 md:py-40 px-5" id="section-7">
<div className="max-w-4xl mx-auto">
<h2 className="font-display font-semibold text-5xl md:text-[72px] leading-[1.1] tracking-tight mb-20 max-w-3xl">
          Ini Untuk Kamu Atau Bukan. <span className="text-primary">Cek Sendiri.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">

<div className="md:col-span-5 space-y-8">
<p className="font-body text-lg md:text-xl font-normal text-white leading-relaxed">
              Kalau bisnis kamu baru dan mau keliatan legit dari hari pertama, bukan setelah 6 bulan trial and error sendiri, ini untuk kamu.
            </p>
<p className="font-body text-lg md:text-xl font-normal text-white leading-relaxed">
              Kalau bisnis kamu udah jalan tapi brandingnya masih keliatan kayak draft, ini juga untuk kamu.
            </p>
</div>

<div className="md:col-span-2 flex justify-center py-4 md:py-0">
<div className="w-24 h-[1px] md:w-[1px] md:h-full bg-primary/30"></div>
</div>

<div className="md:col-span-5 space-y-8">
<p className="font-body text-lg md:text-xl font-light text-white/40 leading-relaxed">
              Ini bukan untuk yang butuh logo doang. Bukan untuk yang mau revisi tanpa batas.
            </p>
<p className="font-body text-lg md:text-xl font-light text-white/40 leading-relaxed">
              Kalau kamu yang kedua itu, kita mungkin gak cocok. Gak apa-apa.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-5 bg-white" id="section-8">
<div className="max-w-3xl mx-auto flex flex-col items-start">
<h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-dark mb-6 text-left">
          15 Menit. Gratis. Kamu Pulang Dengan Clarity.
        </h2>
<h3 className="font-body text-lg md:text-xl text-dark/70 mb-12 text-left font-medium">
          Slot per minggu terbatas karena setiap project kita kerjain langsung, bukan di-outsource.
        </h3>
<div className="w-full md:w-auto p-8 bg-neutral rounded-2xl border border-dark/5 mb-10">
<p className="font-body text-base md:text-lg text-dark/80 leading-relaxed">
            Kalau ternyata belum cocok sekarang, ya udah. Tapi setidaknya kamu tau persis apa yang brand kamu butuhkan.
          </p>
</div>
<div className="w-full md:w-auto">
<p className="text-xs text-dark/50 font-body mb-2 pl-1 font-semibold uppercase tracking-wider">Tanpa DP, langsung mulai</p>
<button className="w-full md:w-auto min-w-[280px] bg-primary text-dark font-display font-bold text-base px-8 py-4 rounded-xl hover:bg-accent transition-colors min-h-[52px]">
            Jadwalkan Konsultasi Gratis
          </button>
</div>
</div>
</section>
</main>


<a aria-label="Chat via WhatsApp" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50" href="https://wa.me/6280000000000">
<iconify-icon className="text-white text-3xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>

<div className="fixed bottom-0 left-0 w-full bg-primary/95 backdrop-blur-md border-t border-dark/10 z-40 transform translate-y-full animate-[slideUp_0.5s_ease-out_2s_forwards]">
<style>
      @keyframes slideUp {
        to { transform: translateY(0); }
      }
    </style>
<div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
<div className="font-display font-semibold text-dark text-sm md:text-base hidden sm:block">
        Mulai Project Rp 1.5jt
      </div>
<div className="w-full sm:w-auto flex justify-center sm:justify-end">
<button className="bg-dark text-white font-display font-semibold text-sm px-6 py-2 rounded-lg hover:bg-dark/80 transition-colors w-full sm:w-auto">
            Mulai Sekarang
          </button>
</div>
</div>
</div>

    </>
  );
}
