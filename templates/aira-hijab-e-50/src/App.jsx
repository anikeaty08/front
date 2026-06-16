import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#9c265f',
accent: '#e4605e',
neutral: '#d6d1d4',
offwhite: '#f9f8f6',
dark: '#181514',
},
fontFamily: {
display: ['"Playfair Display"', 'serif'],
body: ['Lato', 'sans-serif'],
},
transitionTimingFunction: {
'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
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
      
<main className="w-full flex flex-col">

<section className="section-container relative pt-12 pb-24 px-5 bg-[#fdfcfb] overflow-hidden" id="section-1">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#9c265f0a_1px,transparent_1px),linear-gradient(to_bottom,#9c265f0a_1px,transparent_1px)] bg-[size:32px_32px] z-0 pointer-events-none"></div>

<div className="absolute top-[-5%] right-[-10%] w-80 h-80 bg-primary/20 z-0 blob-1 mix-blend-multiply blur-3xl pointer-events-none animate-[spin_20s_linear_infinite]"></div>
<div className="absolute bottom-[5%] left-[-15%] w-72 h-72 bg-accent/15 z-0 blob-2 mix-blend-multiply blur-3xl pointer-events-none animate-[spin_25s_linear_infinite_reverse]"></div>
<div className="absolute top-[40%] right-[20%] w-64 h-64 bg-neutral/40 z-0 rounded-full mix-blend-multiply blur-2xl pointer-events-none"></div>

<div className="absolute top-[12%] left-[5%] w-16 h-16 bg-[radial-gradient(#9c265f33_2px,transparent_2px)] bg-[size:8px_8px] z-0 pointer-events-none opacity-60"></div>
<div className="absolute bottom-[15%] right-[5%] w-24 h-24 bg-[radial-gradient(#e4605e33_2px,transparent_2px)] bg-[size:8px_8px] z-0 pointer-events-none opacity-50 rounded-full"></div>
<div className="absolute top-[22%] right-[8%] w-10 h-10 rounded-full border-[1.5px] border-primary/20 z-0 pointer-events-none"></div>
<div className="absolute bottom-[28%] left-[10%] w-6 h-6 rounded-full border border-accent/30 z-0 pointer-events-none"></div>
<iconify-icon className="absolute top-[35%] left-[6%] text-primary/40 text-3xl z-0 pointer-events-none rotate-12" icon="solar:stars-linear"></iconify-icon>
<iconify-icon className="absolute bottom-[40%] right-[10%] text-accent/30 text-4xl z-0 pointer-events-none -rotate-12" icon="solar:star-ring-linear"></iconify-icon>

<div className="absolute top-28 left-4 z-20 bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full py-2 px-4 flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
<iconify-icon className="text-primary text-lg" icon="solar:verified-check-linear"></iconify-icon>
<span className="font-body text-xs font-semibold text-dark tracking-wide uppercase">Premium Choice</span>
</div>

<div className="relative z-10 w-full mb-12 max-w-md mx-auto group">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-accent/10 rounded-[2.5rem] rounded-tr-xl rounded-bl-xl transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<img alt="Tekstur voal dipakai langsung dengan cahaya natural" className="relative w-full h-auto rounded-[2.5rem] rounded-tr-xl rounded-bl-xl object-cover shadow-xl border-[3px] border-white" src="https://placehold.co/800x1000/d6d1d4/9c265f?text=Tekstur+Voal+Nyata"/>
</div>

<div className="relative z-10 w-full max-w-[60ch] mx-auto flex flex-col">
<h1 className="font-display text-4xl md:text-5xl leading-[1.15] tracking-tight text-[#181514] mb-4 font-semibold text-left">Voal 89 Ribu yang Bikin Orang Tanya 'Beli di Mana?'</h1>
<h2 className="font-display text-xl text-primary mb-8 font-medium italic text-left opacity-90">Bukan karena murah. Tapi karena memang sebagus itu.</h2>
<p className="text-base md:text-lg leading-relaxed mb-10 text-[#3a3533] font-light text-left backdrop-blur-sm bg-white/30 p-4 rounded-2xl border border-white/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">Ada titik di mana kamu udah males kompromi antara kualitas dan harga. AIRA ada di situ, voal premium 120x120, laser cut, anti-kusut, 24 warna, di harga yang tidak perlu kamu pikir dua kali.</p>
<a className="w-full flex items-center justify-center gap-2 rounded-full bg-primary text-white font-body text-sm tracking-wide min-h-[52px] py-4 transition-all duration-700 ease-out-expo border-2 border-primary hover:bg-transparent hover:text-primary font-medium group" href="#section-9">
                    Lihat Koleksinya
                    <iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="section-container relative py-20 px-5 bg-[#eceae8]" id="section-2">
<div className="w-full max-w-[55ch] mx-auto flex flex-col gap-3 mb-12 relative">
<img alt="Hijab di kulit cerah" className="w-[90%] h-auto rounded-2xl rotate-2 object-cover shadow-sm origin-bottom-left" src="https://placehold.co/800x900/d6d1d4/9c265f?text=Skin+Tone+Cerah"/>
<img alt="Hijab di kulit hangat" className="w-[90%] h-auto rounded-2xl -rotate-2 object-cover self-end -mt-16 shadow-md border-4 border-[#eceae8] origin-top-right relative z-10" src="https://placehold.co/800x900/d6d1d4/9c265f?text=Skin+Tone+Hangat"/>
</div>
<div className="w-full max-w-[60ch] mx-auto flex flex-col">
<h2 className="font-display text-4xl leading-tight tracking-tight text-[#181514] mb-4 font-semibold text-left">Bukan Karena Mahal. Tapi Karena Jatuhnya Begitu.</h2>
<h3 className="font-display text-xl text-primary mb-8 font-medium italic text-left">Voal 89 ribu yang orang kira kamu beli di butik.</h3>
<p className="text-base md:text-lg leading-relaxed mb-10 text-[#3a3533] font-light text-left">Sebelum kamu baca satu angka pun, lihat dulu bagaimana hijab ini jatuh di bahu nyata, di kulit nyata, di hari-hari biasa yang tetap terasa indah.</p>
<a className="w-full flex items-center justify-center rounded-full bg-primary text-white font-body text-sm tracking-wide min-h-[52px] py-4 transition-all duration-700 ease-out-expo border-2 border-primary hover:bg-transparent hover:text-primary font-medium" href="#section-5">Lihat Semua Warna</a>
</div>
</section>

<section className="section-container relative py-24 px-5 bg-[#fdfcfb]" id="section-3">
<div className="w-full max-w-[60ch] mx-auto">
<h2 className="font-display text-3xl leading-tight tracking-tight text-[#181514] mb-10 font-semibold text-left">Waktu Pertama Lihat Harganya, Aku Pikir Pasti Ada yang Dikompromikan</h2>
<div className="text-base md:text-lg leading-relaxed text-[#3a3533] font-light text-left flex flex-col gap-6">
<p>Voal murah kusut dalam lima menit, warnanya pudar setelah tiga kali cuci. Yang 300rb bagus, tapi nggak semua bulan ada alokasi segitu.</p>
<div className="w-[85%] ml-auto my-4 relative">
<div className="absolute -inset-2 bg-primary opacity-5 rounded-xl -rotate-1"></div>
<img alt="Lipatan hijab yang rapi" className="w-full h-auto rounded-xl shadow-sm object-cover relative z-10" src="https://placehold.co/800x600/e6e2e0/9c265f?text=Lipatan+Rapi"/>
</div>
<p className="bg-primary/5 px-5 py-6 rounded-r-2xl border-l-[3px] border-primary text-[#181514] italic mt-2">Waktu coba AIRA pertama kali, aku curiga. Ternyata bahannya lembut, laser cut-nya rapi tanpa satu benang keluar, dan sudah kucuci belasan kali. Masih sama seperti hari pertama.</p>
</div>
</div>
</section>

<section className="section-container relative py-24 px-5 bg-[#eceae8]" id="section-4">
<div className="w-full max-w-[60ch] mx-auto mb-14">
<h2 className="font-display text-4xl leading-tight tracking-tight text-[#181514] font-semibold text-left">Tiga Hal yang Tidak Kamu Temukan di Harga Segini</h2>
</div>
<div className="w-full max-w-[60ch] mx-auto flex flex-col gap-8">

<div className="bg-[#f5f0ee] rounded-2xl p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group">
<div className="absolute left-7 top-8 w-[2px] h-[48px] bg-primary rounded-full"></div>
<div className="pl-8">
<p className="font-display text-xl leading-snug font-semibold text-[#181514]">Laser cut edges: pinggiran selalu rapi, jatuh lebih lebar di bahu.</p>
<div className="mt-6 w-full h-32 rounded-xl overflow-hidden">
<img alt="Detail pinggiran laser cut" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://placehold.co/600x300/d6d1d4/9c265f?text=Detail+Laser+Cut"/>
</div>
</div>
</div>

<div className="bg-[#f5f0ee] rounded-2xl p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden ml-4 group">
<div className="absolute left-7 top-8 w-[2px] h-[48px] bg-primary rounded-full"></div>
<div className="pl-8">
<p className="font-display text-xl leading-snug font-semibold text-[#181514]">Anti-kusut: lipat di tas pagi, buka siang, langsung pakai tanpa setrika.</p>
<div className="mt-6 w-full h-32 rounded-xl overflow-hidden">
<img alt="Hijab dilipat dalam tas" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://placehold.co/600x300/d6d1d4/9c265f?text=Hijab+di+Tote+Bag"/>
</div>
</div>
</div>

<div className="bg-[#f5f0ee] rounded-2xl p-7 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group">
<div className="absolute left-7 top-8 w-[2px] h-[48px] bg-primary rounded-full"></div>
<div className="pl-8">
<p className="font-display text-xl leading-snug font-semibold text-[#181514]">Tahan 50+ kali cuci: warna Dusty Rose atau Sage Green kamu pilih hari ini masih rich enam bulan ke depan.</p>
<div className="mt-6 w-full h-32 rounded-xl overflow-hidden">
<img alt="Ketahanan warna setelah dicuci" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://placehold.co/600x300/d6d1d4/9c265f?text=Warna+Tetap+Kaya"/>
</div>
</div>
</div>
</div>
</section>

<section className="section-container relative py-24 px-5 bg-[#fdfcfb]" id="section-5">
<div className="absolute top-32 left-[-15%] w-72 h-72 bg-neutral opacity-30 z-0 blob-2 mix-blend-multiply blur-2xl pointer-events-none"></div>
<div className="relative z-10 w-full max-w-[60ch] mx-auto mb-12">
<h2 className="font-display text-4xl leading-tight tracking-tight text-[#181514] mb-3 font-semibold text-left">24 Warna yang Kurasi, Bukan Asal Banyak</h2>
<h3 className="font-body text-sm text-primary font-medium uppercase tracking-widest text-left">Bestseller: Dusty Rose, Sage Green, Mocca</h3>
</div>
<div className="relative z-10 w-full max-w-[60ch] mx-auto flex flex-col gap-4 mb-14">

<div className="relative w-full h-72 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Warna Dusty Rose" className="w-full h-full object-cover" src="https://placehold.co/800x600/bca4a6/fff?text=Dusty+Rose"/>
<div className="absolute bottom-5 left-5 bg-white/95 px-4 py-2 rounded-full shadow-sm">
<span className="font-body text-xs italic text-[#181514] font-semibold tracking-widest uppercase">Terlaris</span>
</div>
</div>

<div className="flex gap-4 h-56">
<div className="relative w-[55%] h-full rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Warna Sage Green" className="w-full h-full object-cover" src="https://placehold.co/600x600/a3b0a5/fff?text=Sage+Green"/>
<div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 rounded-full shadow-sm">
<span className="font-body text-xs italic text-[#181514] font-semibold tracking-widest uppercase">Terlaris</span>
</div>
</div>
<div className="relative w-[45%] h-full rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<img alt="Warna Mocca" className="w-full h-full object-cover" src="https://placehold.co/400x600/cbb4a0/fff?text=Mocca"/>
</div>
</div>
</div>
<div className="relative z-10 w-full max-w-[60ch] mx-auto">
<p className="text-base md:text-lg leading-relaxed text-[#3a3533] font-light text-left">Palet ini terasa seperti hasil riset, bukan sekadar koleksi warna. Setiap pilihan punya karakternya sendiri, dari neutral harian sampai bold untuk momen khusus. Waktu pertama scroll, aku muter di Dusty Rose dan Sage Green cukup lama sebelum akhirnya ambil keduanya sekaligus.</p>
</div>
</section>

<section className="section-container relative py-32 px-5 bg-[#181514] overflow-hidden" id="section-6">

<div className="absolute top-10 left-4 font-display text-9xl text-primary opacity-20 leading-none select-none z-0 tracking-tighter pointer-events-none">“</div>
<div className="relative z-10 w-full max-w-[60ch] mx-auto flex flex-col">
<span className="font-body text-xs uppercase tracking-[0.25em] text-[#d6d1d4] mb-10 font-semibold text-left">50.000+ Hijab Terjual. Dusty Rose Habis Berulang Kali.</span>
<div className="pl-4 border-l border-primary/30 mb-12">
<h2 className="font-display text-3xl leading-snug text-primary font-semibold italic text-left mb-6">"Bahan selembut harga 300rb, serius."</h2>
<span className="font-body text-sm text-[#d6d1d4] font-light text-left tracking-wide block">— @hijabdaily</span>
</div>
<p className="text-base md:text-lg leading-relaxed text-white/90 font-light text-left">Restok selalu dinantikan. Kalau satu kutipan bisa mewakili ribuan pembeli, mungkin ini yang paling jujur.</p>
</div>
</section>

<section className="section-container relative py-24 px-5 bg-[#eceae8]" id="section-7">
<div className="w-full max-w-[60ch] mx-auto mb-12">
<div className="relative">
<div className="absolute inset-0 bg-neutral translate-x-3 translate-y-3 rounded-[20px] opacity-40"></div>
<img alt="Packaging premium dengan pita" className="w-full h-auto rounded-[20px] relative z-10 object-cover" src="https://placehold.co/800x800/d6d1d4/9c265f?text=Editorial+Packaging"/>
</div>
</div>
<div className="w-full max-w-[60ch] mx-auto">
<h2 className="font-display text-4xl leading-tight tracking-tight text-[#181514] mb-6 font-semibold text-left">Terlihat Lebih Mahal dari Harganya. Sengaja.</h2>
<p className="text-base md:text-lg leading-relaxed text-[#3a3533] font-light text-left">Packagingnya dibuat dengan niat, bukan sekadar kantong plastik. Waktu aku kasih ke kakakku untuk ulang tahunnya, dia langsung tanya 'ini beli di mana, mahal ya?' Packaging AIRA sudah jadi bagian dari hadiahnya sebelum hijabnya dibuka.</p>
</div>
</section>

<section className="section-container relative py-24 px-5 bg-[#fdfcfb]" id="section-8">
<div className="w-full max-w-[60ch] mx-auto bg-[#f5f0ee] rounded-[24px] p-8 shadow-[0_10px_40px_-15px_rgba(156,38,95,0.1)] border border-white relative overflow-hidden">

<div className="absolute -right-16 -top-16 w-64 h-64 bg-white opacity-60 z-0 rounded-full blur-[40px] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-start gap-1 mb-8">
<span className="font-body text-xl text-[#181514] font-medium pt-2">Rp</span>
<span className="font-display text-6xl leading-none text-primary font-bold tracking-tight">89.000</span>
</div>
<h2 className="font-display text-2xl leading-snug text-[#181514] mb-8 font-semibold pr-4">89.000 Per Hijab. Beli 3, Gratis Hijab Clip Set.</h2>
<div className="flex flex-col gap-8">
<p className="text-base leading-relaxed text-[#3a3533] font-light text-left">Bukan karena promo, tapi kalau satu sudah sebagus ini, punya tiga warna sekaligus masuk akal. Clip set-nya bukan bonus asal, cukup bagus untuk dipakai sehari-hari. Harga tetap 89rb per hijab, kamu cuma dapat lebih.</p>
<div className="self-end w-[70%] rotate-[-2deg]">
<img alt="Hijab Clip Set Gratis" className="w-full h-auto rounded-xl object-cover shadow-sm border-[3px] border-white" src="https://placehold.co/500x400/e6e2e0/9c265f?text=Detail+Clip+Set"/>
</div>
</div>
</div>
</div>
</section>

<section className="section-container relative py-28 px-5 bg-primary text-center" id="section-9">

<div className="absolute inset-0 bg-[url('https://placehold.co/100x100/ffffff/ffffff?text=+')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
<div className="relative z-10 w-full max-w-[55ch] mx-auto flex flex-col items-center">
<h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-white mb-8 font-semibold">Pilih Warna Kamu Sekarang</h2>
<p className="text-base leading-relaxed text-white/90 mb-12 font-light text-left w-full pl-2 border-l-2 border-white/20">Dusty Rose dan Sage Green sudah beberapa kali habis. Kalau kamu sudah tahu warna yang kamu mau dari tadi, ini saatnya.</p>
<a className="w-full flex items-center justify-center rounded-full bg-white text-primary font-body text-sm tracking-wide min-h-[52px] py-4 transition-all duration-700 ease-out-expo font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)]" href="#">Pilih Warna Kamu</a>
<span className="mt-6 font-body text-xs text-white/70 font-light tracking-wide">Free ongkir. Packaging siap kado.</span>
</div>
</section>
</main>

    </>
  );
}
