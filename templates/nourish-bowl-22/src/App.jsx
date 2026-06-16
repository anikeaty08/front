import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#B45309',
accent: '#FCD34D',
neutral: '#FFFBEB',
dark: '#1A1614',
black: '#111111'
},
fontFamily: {
display: ['Playfair Display', 'serif'],
body: ['DM Sans', 'sans-serif'],
},
borderWidth: {
'3': '3px',
},
boxShadow: {
'brutal': '4px 4px 0px #111111',
'brutal-hover': '6px 6px 0px #111111',
'brutal-orange': '4px 4px 0px #B45309',
},
animation: {
'marquee': 'marquee 15s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-black text-neutral overflow-hidden py-2 border-b-3 border-black relative z-10 flex whitespace-nowrap">
<div className="animate-marquee inline-block font-body text-xs font-semibold tracking-widest uppercase">
      TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . 
    </div>
<div className="animate-marquee inline-block font-body text-xs font-semibold tracking-widest uppercase absolute top-2 left-full">
      TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . TUANG . MAKAN . PERGI . 
    </div>
</div>
<main className="w-full mx-auto flex flex-col scalev-single-column">

<section className="relative w-full bg-neutral px-5 py-16 md:py-24 flex flex-col overflow-hidden border-b-3 border-black" id="section-1">

<div className="absolute -top-4 -right-8 md:top-4 md:right-12 z-0 transform rotate-[-3deg] border-double border-4 border-black bg-accent px-4 py-2 flex items-center justify-center pointer-events-none opacity-90">
<span className="font-display font-bold text-xl md:text-2xl text-black tracking-tight whitespace-nowrap">8.000+ TERJUAL</span>
</div>
<div className="relative z-10 flex flex-col w-full max-w-2xl mx-auto">
<h2 className="font-display font-bold text-5xl md:text-7xl leading-none text-black flex flex-col items-start gap-2 mb-6">
<span>Pagi Ini Lo</span>
<span className="bg-black text-neutral px-4 py-1 transform rotate-[-3deg] inline-block shadow-brutal mt-2 mb-1">Skip Sarapan</span>
<span className="text-primary italic mt-2">Lagi.</span>
</h2>
<div className="w-full border-t-3 border-black my-6"></div>
<h3 className="font-body text-xs md:text-sm font-semibold text-primary uppercase tracking-widest transform rotate-[2deg] self-start bg-accent border-2 border-black px-3 py-1 shadow-[2px_2px_0px_#111] mb-10">
          30 detik. Cuma 30 detik.
        </h3>
<div className="font-body text-lg md:text-xl text-black flex flex-col gap-2">
<p>Dan lo tau itu salah.</p>
<p>Tapi tetep aja dilakuin.</p>
<p className="font-semibold text-primary">Tiap. Pagi.</p>
</div>
</div>
</section>

<section className="relative w-full bg-[#F5F0DC] px-5 py-16 md:py-24 flex flex-col border-b-3 border-black overflow-hidden" id="section-2">

<div className="absolute -left-10 top-10 font-display text-[15rem] leading-none text-accent opacity-40 select-none pointer-events-none">
        "
      </div>
<div className="relative z-10 w-full max-w-2xl mx-auto">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-black mb-12">
          Lo Tau Banget<br/>Rutinitasnya.
        </h2>
<div className="notepad-lines text-lg md:text-xl text-black pt-1 pb-4">
<p className="mb-4">Alarm bunyi. Snooze dua kali. Bangun panik.</p>
<p className="mb-4">Dapur gelap. Males nyalain kompor.</p>
<p className="mb-4">Gorengan di ujung gang, atau ya udah skip.</p>
<p className="mb-4 font-semibold text-primary transform rotate-[1deg] inline-block border-b-2 border-primary leading-tight">Naik ojek perut kosong, dendam sama hari Senin.</p>
<p className="mt-4">Lo tau ini salah. Lo juga tau gak ada waktu.</p>
</div>
</div>
</section>

<section className="w-full bg-dark px-5 py-20 md:py-28 flex flex-col border-b-3 border-black" id="section-3">
<div className="w-full max-w-2xl mx-auto flex flex-col items-start text-white">
<h2 className="font-display font-bold text-5xl md:text-7xl leading-tight mb-4 flex flex-col items-start gap-1">
<span>Baik-Baik Aja.</span>
<span className="text-accent italic font-medium transform rotate-[-2deg] mt-2">Katanya.</span>
</h2>
<h3 className="font-body text-base md:text-lg text-neutral/60 mb-10 border-l-2 border-primary pl-4">
          Spoiler: enggak.
        </h3>
<div className="font-body text-base md:text-lg text-neutral/80 space-y-6 max-w-[60ch]">
<p>Jam 10, lapar parah. Fokus ilang.</p>
<p>Rapat pagi? Badan hadir, pikiran di kantin.</p>
<p>Mood ancur sebelum kopi kedua habis.</p>
<div className="border-3 border-primary p-4 mt-6 transform rotate-[1deg]">
<p className="text-white font-medium">Bukan kelelahan. Perut kosong di pagi hari punya harga, dan lo udah bayar berkali-kali.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-neutral px-5 py-16 md:py-24 flex flex-col border-b-3 border-black" id="section-4">
<div className="w-full max-w-2xl mx-auto flex flex-col gap-10">

<div className="flex flex-col">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-black leading-tight mb-2">
            Oke.<br/>Dengerin Sebentar.
          </h2>
<h3 className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-10">
            Gak ribet. Serius.
          </h3>
<div className="font-body text-lg text-black font-semibold mb-6">
<p>NOURISH Bowl. Granola siap santap.</p>
</div>
<div className="flex flex-col border-t-2 border-black">
<div className="flex items-center gap-4 py-4 border-b-2 border-black">
<span className="font-display text-4xl font-bold text-primary">1</span>
<span className="font-body font-semibold text-base">Step 1: Buka bungkus.</span>
</div>
<div className="flex items-center gap-4 py-4 border-b-2 border-black">
<span className="font-display text-4xl font-bold text-primary">2</span>
<span className="font-body font-semibold text-base">Step 2: Tuang susu atau yogurt.</span>
</div>
<div className="flex items-center gap-4 py-4 border-b-2 border-black">
<span className="font-display text-4xl font-bold text-primary">3</span>
<span className="font-body font-semibold text-base">Step 3: Makan. Pergi.</span>
</div>
</div>
<p className="font-body text-base italic text-black/70 mt-6 border-l-3 border-accent pl-4">
            Tiga puluh detik. Bukan angka marketing.
          </p>
</div>

<div className="w-full mt-4 md:mt-8">
<div className="relative w-full aspect-square border-3 border-black transform rotate-[1.5deg] shadow-brutal bg-white p-2">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/80 border border-black/20 transform rotate-[-2deg] shadow-sm z-10 backdrop-blur-sm"></div>
<img alt="NOURISH Bowl" className="w-full h-full object-cover" src="https://placehold.co/600x600/f5f0dc/1a1614?text=Product+Shot"/>
</div>
</div>
<div className="w-full mt-6">
<button className="btn-brutal text-lg">Pesan Sekarang</button>
</div>
</div>
</section>

<section className="w-full bg-[#F5F0DC] px-5 py-16 md:py-24 flex flex-col border-b-3 border-black" id="section-5">
<div className="w-full max-w-2xl mx-auto flex flex-col">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-black leading-tight mb-4 text-center">
          Beneran Sehat<br/>Atau Pura-pura?
        </h2>
<h3 className="font-body text-base text-center text-primary font-medium italic mb-12">
          Gue bacain labelnya buat lo.
        </h3>

<div className="flex flex-col gap-6 mb-16">
<div className="w-full border-2 border-black bg-neutral p-6 transform rotate-[-1deg] shadow-[2px_2px_0px_#111]">

<div className="h-4 w-1/3 bg-black/10 mb-2"></div>
<div className="h-3 w-2/3 bg-black/5"></div>
</div>
<div className="w-full border-2 border-black bg-neutral p-6 transform rotate-[1.5deg] shadow-[2px_2px_0px_#111]">
<div className="h-4 w-1/4 bg-black/10 mb-2"></div>
<div className="h-3 w-3/4 bg-black/5"></div>
</div>
<div className="w-full border-2 border-black bg-neutral p-6 transform rotate-[-1deg] shadow-[2px_2px_0px_#111]">
<div className="h-4 w-1/2 bg-black/10 mb-2"></div>
<div className="h-3 w-2/3 bg-black/5"></div>
</div>
</div>

<div className="w-full text-center py-4 border-t-2 border-b-2 border-black bg-neutral">
<p className="font-body text-xs font-semibold uppercase text-primary tracking-[0.2em]">
            NO ADDED SUGAR. NO PENGAWET.
          </p>
</div>
</div>
</section>

<section className="w-full bg-neutral px-5 py-16 md:py-24 flex flex-col border-b-3 border-black" id="section-6">
<div className="w-full max-w-2xl mx-auto flex flex-col">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-black leading-tight mb-12 text-center">
          Pilih Sesuai<br/>Mood Pagi Lo.
        </h2>

<div className="flex flex-col gap-8 mb-16 px-4">
<div className="w-full border-3 border-black bg-neutral h-32 transform rotate-[-2deg] flex items-center justify-center border-dashed">
<iconify-icon className="text-4xl text-black/20" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full border-3 border-black bg-neutral h-32 transform rotate-[3deg] flex items-center justify-center border-dashed">
<iconify-icon className="text-4xl text-black/20" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full border-3 border-black bg-neutral h-32 transform rotate-[-1.5deg] flex items-center justify-center border-dashed">
<iconify-icon className="text-4xl text-black/20" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="w-full">
<button className="btn-brutal text-lg">Pesan Sekarang</button>
</div>
</div>
</section>

<section className="relative w-full bg-dark px-5 py-20 md:py-28 flex flex-col border-b-3 border-black overflow-hidden" id="section-7">
<div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-white mb-16">
          8.000 Pack.<br/>
<span className="text-primary italic">Bukan Klaim.</span>
</h2>
<div className="w-full border-2 border-dashed border-white p-6 md:p-8 transform rotate-[-1.5deg] relative bg-dark mb-16 shadow-[4px_4px_0px_#FFFBEB]">

<div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-white border-r-[16px] border-r-transparent"></div>
<p className="font-body text-lg md:text-xl italic text-white mb-6">
            "Anak gue yang susah sarapan sekarang minta tiap pagi."
          </p>
<p className="font-body text-sm text-white/70">
            Bukan endorse. Bukan bayaran. WhatsApp yang gue screenshot.
          </p>
</div>
<div className="w-full border-t-2 border-accent mb-8"></div>
<div className="flex flex-col items-start">
<p className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-accent leading-none mb-2 tracking-tighter">
            8.000+
          </p>
<p className="font-body text-xs md:text-sm text-white uppercase tracking-[0.15em] font-medium">
            PACK TERJUAL BULAN INI
          </p>
</div>
</div>
</section>

<section className="w-full bg-[#F5F0DC] px-5 py-16 md:py-24 flex flex-col border-b-3 border-black" id="section-8">
<div className="w-full max-w-2xl mx-auto flex flex-col">
<h2 className="font-display font-semibold text-4xl md:text-5xl text-black mb-2">
          Yang Lo<br/>Mau Tanya.
        </h2>
<h3 className="font-body text-base text-primary font-medium italic mb-12">
          Gue jawab singkat.
        </h3>

<div className="flex flex-col w-full border-t-3 border-black">
<details className="w-full border-b-3 border-black group">
<summary className="flex justify-between items-center py-5 cursor-pointer bg-neutral hover:bg-white transition-colors">
<span className="font-body font-semibold text-[15px] text-primary px-4">Ada pertanyaan lain?</span>
<span className="icon-toggle text-xl text-black font-medium transition-transform duration-300 pr-4">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-5 pt-2 font-body text-sm text-black bg-neutral">

<div className="h-2 w-3/4 bg-black/10 mt-2"></div>
<div className="h-2 w-1/2 bg-black/10 mt-2"></div>
</div>
</details>
<details className="w-full border-b-3 border-black group">
<summary className="flex justify-between items-center py-5 cursor-pointer bg-neutral hover:bg-white transition-colors">
<span className="font-body font-semibold text-[15px] text-primary px-4">Pertanyaan lainnya?</span>
<span className="icon-toggle text-xl text-black font-medium transition-transform duration-300 pr-4">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-5 pt-2 font-body text-sm text-black bg-neutral">
<div className="h-2 w-full bg-black/10 mt-2"></div>
</div>
</details>
</div>
</div>
</section>

<section className="w-full bg-neutral px-5 py-16 md:py-24 flex flex-col border-b-3 border-black" id="section-9">
<div className="w-full max-w-2xl mx-auto flex flex-col">
<h2 className="font-display font-semibold text-5xl md:text-6xl text-black leading-tight mb-4">
          Hitung<br/>Sendiri Deh.
        </h2>
<h3 className="font-body text-base md:text-lg text-black bg-accent inline-block self-start px-2 py-1 transform rotate-[-1deg] border border-black mb-12">
          Gorengan + kopi pagi lo berapa? Nah.
        </h3>
<div className="flex flex-col w-full">

<div className="w-full border-4 border-black p-6 md:p-8 bg-white shadow-[4px_4px_0px_#111] mb-8 relative">
<p className="font-body text-sm text-black/60 font-semibold uppercase tracking-wider mb-2">Satu pack NOURISH Bowl:</p>
<p className="font-display font-bold text-4xl md:text-5xl text-black">Rp 11.800.</p>
</div>

<div className="font-body text-lg text-black mb-10 pl-4 border-l-4 border-primary">
<p className="mb-2"><span className="line-through decoration-2 decoration-black/50 font-medium">Gorengan 3 biji + kopi sachet:</span> lebih dari itu.</p>
<p className="italic">Dan lo masih lapar jam 10.</p>
</div>

<div className="w-full border-4 border-black p-6 md:p-8 bg-accent shadow-[4px_4px_0px_#111] mb-12 relative flex flex-col items-center text-center">
<div className="absolute -top-3 -right-3 bg-white border-2 border-black px-3 py-1 transform rotate-[2deg] shadow-sm z-10">
<span className="font-body text-[11px] font-bold uppercase text-primary tracking-widest">PILIHAN MASUK AKAL</span>
</div>
<p className="font-display font-semibold text-3xl md:text-4xl text-black mb-2">Pilih yang masuk akal.</p>
</div>
</div>
<div className="w-full">
<button className="btn-brutal text-xl py-5">Pesan Sekarang</button>
</div>
</div>
</section>

<section className="w-full bg-dark px-5 py-24 md:py-32 flex flex-col" id="section-10">
<div className="w-full max-w-2xl mx-auto flex flex-col items-start text-white">
<h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-none mb-6 flex flex-col items-start gap-2">
<span>Besok Pagi</span>
<span className="text-accent">Bisa Beda.</span>
</h2>
<h3 className="font-body text-lg text-neutral/50 italic mb-12">
          Atau sama kayak biasa. Terserah.
        </h3>
<div className="font-body text-base md:text-lg text-white/70 space-y-4 max-w-[55ch] mb-12 border-l-2 border-white/20 pl-4">
<p>Gak ada countdown palsu. Gak ada stok terbatas yang dikarang-karang.</p>
<p className="text-white font-medium">Cuma granola. Cuma 30 detik. Cuma keputusan yang harusnya udah lo buat dari tadi.</p>
</div>
<div className="w-full mb-8">
<button className="btn-brutal text-xl py-5 bg-primary text-neutral border-black shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] w-full">
            Pesan Sekarang
          </button>
</div>

<div className="w-full flex justify-center gap-3 md:gap-4 items-center">
<span className="font-body text-[11px] uppercase text-white/50 tracking-wider">NO ADDED SUGAR</span>
<span className="w-[1px] h-3 bg-white/20"></span>
<span className="font-body text-[11px] uppercase text-white/50 tracking-wider">NO PENGAWET</span>
<span className="w-[1px] h-3 bg-white/20"></span>
<span className="font-body text-[11px] uppercase text-white/50 tracking-wider">MULAI BESOK PAGI</span>
</div>
</div>
</section>
</main>

    </>
  );
}
