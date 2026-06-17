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
primary: '#9c265f',
accent: '#e4605e',
neutral: '#d6d1d4',
dark: '#1c1518', /* Near-black with brand hue */
lightWarm: '#fdfcfb',
mutedWarm: '#f0eceb',
cardWarm: '#f5f0ee'
},
fontFamily: {
display: ['"Playfair Display"', 'serif'],
body: ['Lato', 'sans-serif'],
},
transitionTimingFunction: {
'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
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
      
<main className="w-full max-w-[480px] mx-auto bg-white overflow-hidden shadow-2xl relative shadow-neutral/20 min-h-screen">

<section className="section bg-lightWarm pt-8 pb-16 px-5 relative" id="section-1">
<div className="flex flex-col gap-8 w-full relative z-10">

<div className="w-full ml-auto w-[90%] overflow-hidden rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm shadow-md">
<img alt="Close-up tekstur voal dipakai langsung" className="w-full h-auto object-cover aspect-[4/5] scale-105 transform transition-transform duration-[2s] hover:scale-100 ease-expo-out" src="https://placehold.co/800x1000/d6d1d4/1c1518?text=Natural+Light+Voal"/>
</div>

<div className="flex flex-col gap-5 w-[95%]">
<h1 className="font-display font-thinner-bold text-4xl tracking-tight leading-[1.1] text-dark">
                        Voal 89 Ribu yang Bikin Orang Tanya 'Beli di Mana?'
                    </h1>
<h2 className="font-body font-thinner-normal text-lg text-dark/80 leading-snug">
                        Bukan karena murah. Tapi karena memang sebagus itu.
                    </h2>
<p className="font-body font-thinner-normal text-base leading-relaxed text-dark/70 mt-2 mb-4 max-w-[65ch]">
                        Ada titik di mana kamu udah males kompromi antara kualitas dan harga. AIRA ada di situ, voal premium 120x120, laser cut, anti-kusut, 24 warna, di harga yang tidak perlu kamu pikir dua kali.
                    </p>
<a className="btn btn-primary" href="#section-5">Lihat Koleksinya</a>
</div>
</div>
</section>

<section className="section bg-mutedWarm py-16 px-5 relative" id="section-2">

<div className="deco-blob w-64 h-64 -top-12 -right-12"></div>
<div className="flex flex-col gap-10 w-full relative z-10">
<div className="flex flex-col gap-4">
<h2 className="font-display font-thinner-bold text-3xl tracking-tight leading-tight text-dark">
                        Bukan Karena Mahal. Tapi Karena Jatuhnya Begitu.
                    </h2>
<h3 className="font-body font-thinner-normal text-base text-dark/80 italic">
                        Voal 89 ribu yang orang kira kamu beli di butik.
                    </h3>
</div>

<div className="flex flex-col -space-y-12 my-4">
<img alt="Hijab styled loosely on skin tone 1" className="w-[85%] h-auto rounded-xl shadow-lg transform -rotate-2 relative z-10" src="https://placehold.co/800x900/c7baba/1c1518?text=Style+1"/>
<img alt="Hijab styled loosely on skin tone 2" className="w-[85%] ml-auto h-auto rounded-xl shadow-xl transform rotate-1 relative z-20" src="https://placehold.co/800x900/e0d4d4/1c1518?text=Style+2"/>
<img alt="Hijab styled loosely on skin tone 3" className="w-[80%] h-auto rounded-xl shadow-lg transform -rotate-1 relative z-30 mx-auto mt-4" src="https://placehold.co/800x900/bba9a9/1c1518?text=Style+3"/>
</div>
<div className="flex flex-col gap-6">
<p className="font-body font-thinner-normal text-base leading-relaxed text-dark/80">
                        Sebelum kamu baca satu angka pun, lihat dulu bagaimana hijab ini jatuh di bahu nyata, di kulit nyata, di hari-hari biasa yang tetap terasa indah.
                    </p>
<a className="btn btn-primary" href="#section-5">Lihat Semua Warna</a>
</div>
</div>
</section>

<section className="section bg-lightWarm py-20 px-6 relative" id="section-3">
<div className="flex flex-col gap-8 w-full max-w-[75ch]">
<h2 className="font-display font-thinner-bold text-3xl leading-tight text-dark pr-4">
                    Waktu Pertama Lihat Harganya, Aku Pikir Pasti Ada yang Dikompromikan
                </h2>
<div className="font-body font-thinner-normal text-base text-dark/80 space-y-6 leading-[1.8]">
<p>
                        Voal murah kusut dalam lima menit, warnanya pudar setelah tiga kali cuci. Yang 300rb bagus, tapi nggak semua bulan ada alokasi segitu.
                    </p>

<p className="bg-cardWarm p-5 rounded-2xl border-l-4 border-primary/40 italic text-dark/90 text-sm shadow-sm">
                        Waktu coba AIRA pertama kali, aku curiga. Ternyata bahannya lembut, laser cut-nya rapi tanpa satu benang keluar, dan sudah kucuci belasan kali.
                    </p>
<p>
                        Masih sama seperti hari pertama.
                    </p>
</div>
<div className="w-full flex justify-end mt-4">
<img alt="Single hijab photo folded neatly" className="w-[80%] h-auto rounded-lg shadow-sm" src="https://placehold.co/600x400/d6d1d4/1c1518?text=Folded+Neatly"/>
</div>
</div>
</section>

<section className="section bg-mutedWarm py-20 px-5" id="section-4">
<div className="flex flex-col gap-12 w-full">
<h2 className="font-display font-thinner-bold text-[28px] tracking-tight leading-tight text-dark w-[90%]">
                    Tiga Hal yang Tidak Kamu Temukan di Harga Segini
                </h2>
<div className="flex flex-col gap-8">

<div className="bg-cardWarm rounded-2xl p-6 shadow-sm flex flex-col gap-5 border border-white/50">
<img alt="Laser edge detail close up" className="w-full h-32 object-cover rounded-xl" src="https://placehold.co/800x400/d6d1d4/1c1518?text=Laser+Edge+Detail"/>
<div className="flex items-start gap-4">
<div className="deco-line mt-1"></div>
<div className="flex flex-col gap-2">
<h4 className="font-display font-thinner-semibold text-xl text-dark">Laser cut edges</h4>
<p className="font-body font-thinner-normal text-sm leading-relaxed text-dark/70">
                                    pinggiran selalu rapi, jatuh lebih lebar di bahu.
                                </p>
</div>
</div>
</div>

<div className="bg-cardWarm rounded-2xl p-6 shadow-sm flex flex-col gap-5 border border-white/50 w-[95%] ml-auto">
<img alt="Folded hijab in tote bag" className="w-full h-32 object-cover rounded-xl" src="https://placehold.co/800x400/d6d1d4/1c1518?text=Folded+in+Tote"/>
<div className="flex items-start gap-4">
<div className="deco-line mt-1"></div>
<div className="flex flex-col gap-2">
<h4 className="font-display font-thinner-semibold text-xl text-dark">Anti-kusut</h4>
<p className="font-body font-thinner-normal text-sm leading-relaxed text-dark/70">
                                    lipat di tas pagi, buka siang, langsung pakai tanpa setrika.
                                </p>
</div>
</div>
</div>

<div className="bg-cardWarm rounded-2xl p-6 shadow-sm flex flex-col gap-5 border border-white/50">
<img alt="Color swatch post-wash" className="w-full h-32 object-cover rounded-xl" src="https://placehold.co/800x400/d6d1d4/1c1518?text=Color+Swatch+Post-Wash"/>
<div className="flex items-start gap-4">
<div className="deco-line mt-1"></div>
<div className="flex flex-col gap-2">
<h4 className="font-display font-thinner-semibold text-xl text-dark">Tahan 50+ kali cuci</h4>
<p className="font-body font-thinner-normal text-sm leading-relaxed text-dark/70">
                                    warna Dusty Rose atau Sage Green kamu pilih hari ini masih rich enam bulan ke depan.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section bg-lightWarm py-20 px-5 relative" id="section-5">

<div className="deco-blob w-48 h-72 top-1/3 -left-20"></div>
<div className="flex flex-col gap-8 w-full relative z-10">
<div className="flex flex-col gap-3 pr-4">
<h2 className="font-display font-thinner-bold text-3xl tracking-tight leading-tight text-dark">
                        24 Warna yang Kurasi, Bukan Asal Banyak
                    </h2>
<h3 className="font-body font-thinner-normal text-sm text-dark/60 tracking-wide uppercase mt-2">
                        Bestseller: Dusty Rose, Sage Green, Mocca
                    </h3>
</div>

<div className="flex flex-col gap-3 w-full">

<div className="w-full bg-[#d0a7a4] h-40 rounded-2xl shadow-sm relative flex items-end p-4">
<span className="font-body text-white font-thinner-semibold text-sm tracking-wide bg-black/10 px-3 py-1 rounded-full backdrop-blur-sm">Dusty Rose</span>
<span className="absolute top-4 right-4 font-body text-white text-[10px] italic opacity-80">Terlaris</span>
</div>
<div className="flex gap-3 w-full">

<div className="w-[60%] bg-[#9ab5a6] h-32 rounded-2xl shadow-sm relative flex items-end p-3">
<span className="font-body text-white font-thinner-semibold text-xs tracking-wide bg-black/10 px-2 py-1 rounded-full backdrop-blur-sm">Sage Green</span>
<span className="absolute top-3 right-3 font-body text-white text-[10px] italic opacity-80">Terlaris</span>
</div>
<div className="w-[40%] bg-[#b09684] h-32 rounded-2xl shadow-sm relative flex items-end p-3">
<span className="font-body text-white font-thinner-semibold text-xs tracking-wide bg-black/10 px-2 py-1 rounded-full backdrop-blur-sm">Mocca</span>
</div>
</div>
<div className="flex gap-3 w-full">
<div className="w-[30%] bg-[#e3deda] h-24 rounded-2xl shadow-sm"></div>
<div className="w-[40%] bg-[#4a4853] h-24 rounded-2xl shadow-sm"></div>
<div className="w-[30%] bg-[#c2b4a5] h-24 rounded-2xl shadow-sm"></div>
</div>
<div className="flex gap-3 w-full justify-end">
<div className="w-[50%] bg-[#8c7476] h-20 rounded-2xl shadow-sm flex items-center justify-center">
<span className="font-body font-thinner-normal text-xs text-white/70">+18 Warna Lainnya</span>
</div>
</div>
</div>
<p className="font-body font-thinner-normal text-base leading-relaxed text-dark/80 mt-4 max-w-[70ch]">
                    Palet ini terasa seperti hasil riset, bukan sekadar koleksi warna. Setiap pilihan punya karakternya sendiri, dari neutral harian sampai bold untuk momen khusus. Waktu pertama scroll, aku muter di Dusty Rose dan Sage Green cukup lama sebelum akhirnya ambil keduanya sekaligus.
                </p>
</div>
</section>

<section className="section bg-dark py-24 px-8 relative overflow-hidden" id="section-6">

<div aria-hidden="true" className="deco-quote absolute top-10 left-4 text-[120px] font-display text-primary/15 leading-none select-none">“</div>
<div className="flex flex-col gap-10 w-full relative z-10 pt-8">
<h3 className="font-body font-thinner-normal text-[11px] text-white/60 tracking-[0.15em] uppercase text-center w-full block">
                    50.000+ Hijab Terjual. Dusty Rose Habis Berulang Kali.
                </h3>
<h2 className="font-display font-thinner-semibold text-3xl leading-snug text-primary italic text-center w-full px-2">
                    "Bahan selembut harga 300rb, serius."
                </h2>
<div className="flex flex-col items-center gap-1 mt-2">
<p className="font-body font-thinner-normal text-sm text-white/50">
                        @hijabdaily
                    </p>
</div>
<div className="w-[1px] h-12 bg-primary/30 mx-auto mt-4 mb-4"></div>
<p className="font-body font-thinner-normal text-[15px] leading-relaxed text-white/80 text-center max-w-[50ch] mx-auto">
                    Restok selalu dinantikan. Kalau satu kutipan bisa mewakili ribuan pembeli, mungkin ini yang paling jujur.
                </p>
</div>
</section>

<section className="section bg-mutedWarm py-20 px-5" id="section-7">
<div className="flex flex-col gap-10 w-full">

<div className="w-full relative">
<img alt="Editorial flat-lay packaging on cream surface, ribbon slightly undone" className="w-full h-auto rounded-lg shadow-sm" src="https://placehold.co/800x600/d6d1d4/1c1518?text=Editorial+Flatlay+Packaging"/>
</div>

<div className="flex flex-col gap-5 px-2">
<h2 className="font-display font-thinner-bold text-[26px] tracking-tight leading-tight text-dark">
                        Terlihat Lebih Mahal dari Harganya. Sengaja.
                    </h2>
<p className="font-body font-thinner-normal text-[15px] leading-relaxed text-dark/80">
                        Packagingnya dibuat dengan niat, bukan sekadar kantong plastik. Waktu aku kasih ke kakakku untuk ulang tahunnya, dia langsung tanya 'ini beli di mana, mahal ya?' Packaging AIRA sudah jadi bagian dari hadiahnya sebelum hijabnya dibuka.
                    </p>
</div>
</div>
</section>

<section className="section bg-lightWarm py-20 px-6" id="section-8">
<div className="flex flex-col gap-10 w-full bg-white rounded-3xl p-8 shadow-[0_4px_40px_-10px_rgba(214,209,212,0.6)] border border-neutral/20 relative overflow-hidden">

<div className="absolute -right-16 -top-16 w-40 h-40 bg-cardWarm rounded-full opacity-50 blur-2xl"></div>
<div className="flex flex-col gap-2 relative z-10">
<div className="flex items-baseline gap-2">
<span className="font-body font-thinner-normal text-xl text-dark/70 mb-2">Rp</span>
<h2 className="font-display font-thinner-bold text-[52px] leading-none tracking-tight text-dark">
                            89.000
                        </h2>
</div>
<p className="font-body font-thinner-semibold text-primary text-[15px] mt-2">
                        89.000 Per Hijab. Beli 3, Gratis Hijab Clip Set.
                    </p>
</div>
<p className="font-body font-thinner-normal text-sm leading-[1.7] text-dark/80 relative z-10">
                    Bukan karena promo, tapi kalau satu sudah sebagus ini, punya tiga warna sekaligus masuk akal. Clip set-nya bukan bonus asal, cukup bagus untuk dipakai sehari-hari. Harga tetap 89rb per hijab, kamu cuma dapat lebih.
                </p>

<div className="w-full flex justify-end mt-2 relative z-10">
<img alt="Small editorial image of clip set" className="w-[60%] h-auto rounded-xl shadow-sm rotate-2" src="https://placehold.co/400x300/f5f0ee/1c1518?text=Clip+Set+Detail"/>
</div>
</div>
</section>

<section className="section bg-primary py-24 px-6 flex flex-col justify-center items-center text-center" id="section-9">
<div className="flex flex-col gap-10 w-full max-w-[85%] mx-auto items-center">
<h2 className="font-display font-thinner-bold text-[32px] tracking-tight leading-tight text-white">
                    Pilih Warna Kamu Sekarang
                </h2>
<p className="font-body font-thinner-normal text-sm leading-[1.6] text-white/90">
                    Dusty Rose dan Sage Green sudah beberapa kali habis. Kalau kamu sudah tahu warna yang kamu mau dari tadi, ini saatnya.
                </p>
<div className="w-full flex flex-col gap-3 mt-4">
<button className="btn btn-inverted" type="button">
                        Pilih Warna Kamu
                    </button>
<p className="font-body font-thinner-normal text-[11px] text-white/70 tracking-wide mt-2">
                        Free ongkir. Packaging siap kado.
                    </p>
</div>
</div>
</section>
</main>

    </>
  );
}
