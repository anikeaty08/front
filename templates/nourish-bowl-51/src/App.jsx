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
primary: '#B45309',
accent: '#FCD34D',
neutral: '#FFFBEB',
dark: '#111111',
},
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
},
boxShadow: {
'brutal': '4px 4px 0px #111111',
'brutal-hover': '6px 6px 0px #111111',
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
      

<main className="max-w-xl mx-auto bg-neutral min-h-screen border-x-[4px] border-dark shadow-2xl relative paper-noise overflow-hidden">

<section className="py-16 px-6 relative z-10">
<h1 className="font-serif font-extrabold tracking-tight leading-[1.1] text-left">
<span className="block text-5xl">Pagi Ini Lo</span>
<span className="block text-6xl md:text-7xl mt-1">Skip Sarapan</span>
<span className="inline-block text-6xl md:text-7xl text-primary -rotate-3 ml-8 mt-2 origin-left">LAGI.</span>
</h1>
<hr className="border-t-[3px] border-dark my-8"/>
<div className="inline-block text-primary font-sans text-xs font-semibold uppercase tracking-[0.15em] rotate-2 mb-8 bg-neutral px-1">
                30 detik. Cuma 30 detik.
            </div>
<div className="font-sans text-base leading-relaxed flex flex-col gap-1">
<p>Dan lo tau itu salah.</p>
<p>Tapi tetep aja dilakuin.</p>
<p className="font-semibold text-lg mt-1">Tiap. Pagi.</p>
</div>
<hr className="border-t-[2px] border-dashed border-dark mt-10"/>
</section>

<section className="py-16 px-6 bg-[#f8f5ea] relative z-10 border-y-[4px] border-dark">
<div className="absolute -left-6 top-8 text-accent font-serif text-[120px] leading-none opacity-80 select-none">"</div>
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight relative z-10 mb-8">
                Lo Tau Banget<br/>Rutinitasnya.
            </h2>
<div className="font-sans text-sm md:text-base leading-loose relative z-10 flex flex-col">
<div className="border-b border-dark/30 pb-3 mb-3">Alarm bunyi. Snooze dua kali. Bangun panik.</div>
<div className="border-b border-dark/30 pb-3 mb-3">Dapur gelap. Males nyalain kompor.</div>
<div className="border-b border-dark/30 pb-3 mb-3">Gorengan di ujung gang, atau ya udah skip.</div>
<div className="border-b border-dark/30 pb-3 mb-3 leading-relaxed">
<span className="inline-block font-semibold text-primary rotate-2 underline decoration-2 underline-offset-4 px-1">Naik ojek perut kosong,</span> dendam sama hari Senin.
                </div>
<div className="border-b border-dark/30 pb-3">Lo tau ini salah. Lo juga tau gak ada waktu.</div>
</div>
</section>

<section className="py-16 px-6 bg-dark text-neutral relative z-10">
<h2 className="font-serif font-extrabold text-6xl tracking-tight leading-[1.1] mb-2">
                Baik-Baik Aja.<br/>
<span className="inline-block text-accent italic -rotate-2 mt-2">Katanya.</span>
</h2>
<div className="text-accent font-sans text-xs font-semibold uppercase tracking-[0.2em] mt-6 mb-8">
                Spoiler: enggak.
            </div>
<hr className="border-t-[3px] border-primary my-8"/>
<div className="font-sans text-base text-neutral/70 flex flex-col gap-3">
<p>Jam 10, lapar parah. Fokus ilang.</p>
<p>Rapat pagi? Badan hadir, pikiran di kantin.</p>
<p>Mood ancur sebelum kopi kedua habis.</p>
</div>
<div className="mt-8 border-[3px] border-primary p-5 font-sans text-base text-neutral bg-dark">
                Bukan kelelahan. Perut kosong di pagi hari punya harga, dan lo udah bayar berkali-kali.
            </div>
</section>

<section className="py-16 px-6 relative z-10">
<div className="flex flex-col md:flex-row md:gap-8 items-start">
<div className="w-full md:w-[55%]">
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight">
                        Oke.<br/>Dengerin Sebentar.
                    </h2>
<div className="font-sans text-xs italic text-dark/60 mt-3 mb-6 uppercase tracking-widest">
                        Gak ribet. Serius.
                    </div>
<hr className="border-t-[4px] border-dark mb-6"/>
<div className="font-sans text-sm font-semibold flex flex-col">
<div className="border-[2px] border-dark p-3 flex items-center gap-4 mb-[-2px] bg-neutral relative z-20">
<span className="text-3xl font-extrabold text-primary w-6">1</span>
<span>Buka bungkus.</span>
</div>
<div className="border-[2px] border-dark p-3 flex items-center gap-4 mb-[-2px] bg-neutral relative z-10">
<span className="text-3xl font-extrabold text-primary w-6">2</span>
<span>Tuang susu atau yogurt.</span>
</div>
<div className="border-[2px] border-dark p-3 flex items-center gap-4 bg-neutral relative z-0">
<span className="text-3xl font-extrabold text-primary w-6">3</span>
<span>Makan. Pergi.</span>
</div>
</div>
<div className="font-sans text-sm mt-5 font-semibold text-primary">
                        Tiga puluh detik. Bukan angka marketing.
                    </div>
</div>
<div className="w-full md:w-[45%] mt-10 md:mt-0">
<div className="w-full aspect-[4/5] bg-[#e5dfce] border-[3px] border-dark rotate-[1.5deg] relative flex flex-col items-center justify-center overflow-hidden p-4">
<div className="font-serif font-extrabold text-4xl tracking-tighter text-dark/10 -rotate-45 absolute w-[150%] text-center">NOURISH BOWL</div>

<div className="w-3/4 h-3/4 border-2 border-dark/20 rounded-full flex items-center justify-center relative z-10 bg-[url('https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&amp;w=400&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-multiply">
<div className="absolute inset-0 bg-primary mix-blend-color opacity-30 rounded-full"></div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-neutral text-xs font-semibold px-2 py-1 rotate-[-3deg] border border-dark">NOURISH</div>
</div>
</div>
</div>
<a className="btn-brutal w-full py-4 text-lg mt-12 block" href="#pesan">Pesan Sekarang</a>
</section>

<section className="py-16 px-6 bg-[#f8f5ea] border-y-[4px] border-dark relative z-10">
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight">
                Beneran Sehat<br/>Atau Pura-pura?
            </h2>
<div className="font-sans text-xs italic text-dark/60 mt-3 mb-8">
                Gue bacain labelnya buat lo.
            </div>
<hr className="border-t-[4px] border-dark mb-10"/>
<div className="flex flex-col gap-4">
<div className="border-[2px] border-dark p-4 -rotate-1 bg-neutral shadow-sm">
<div className="font-serif font-semibold text-xl mb-2">Rolled Oat</div>
<div className="font-sans text-xs leading-relaxed">
<span className="bg-accent border border-dark px-1.5 py-0.5 font-bold text-dark inline-block -rotate-2 mr-1">Kenyang</span> 
                        lebih lama. Karbo kompleks beneran.
                    </div>
</div>
<div className="border-[2px] border-dark p-4 rotate-[1.5deg] bg-neutral shadow-sm">
<div className="font-serif font-semibold text-xl mb-2">Almond Slice</div>
<div className="font-sans text-xs leading-relaxed">
<span className="bg-accent border border-dark px-1.5 py-0.5 font-bold text-dark inline-block rotate-1 mr-1">Lemak</span> 
                        baik. Biar otak jalan pas rapat.
                    </div>
</div>
<div className="border-[2px] border-dark p-4 -rotate-1 bg-neutral shadow-sm">
<div className="font-serif font-semibold text-xl mb-2">Chia Seed</div>
<div className="font-sans text-xs leading-relaxed">
<span className="bg-accent border border-dark px-1.5 py-0.5 font-bold text-dark inline-block -rotate-1 mr-1">Serat</span> 
                        tinggi. Pencernaan aman, gak begah.
                    </div>
</div>
<div className="border-[2px] border-dark p-4 rotate-[1.5deg] bg-neutral shadow-sm">
<div className="font-serif font-semibold text-xl mb-2">Dried Cranberry</div>
<div className="font-sans text-xs leading-relaxed">
<span className="bg-accent border border-dark px-1.5 py-0.5 font-bold text-dark inline-block rotate-2 mr-1">Antioksidan.</span> 
                        Manis alami yang gak bikin dosa.
                    </div>
</div>
<div className="border-[2px] border-dark p-4 -rotate-1 bg-neutral shadow-sm">
<div className="font-serif font-semibold text-xl mb-2">Dark Choco Chips</div>
<div className="font-sans text-xs leading-relaxed">
<span className="bg-accent border border-dark px-1.5 py-0.5 font-bold text-dark inline-block -rotate-2 mr-1">Mood</span> 
                        booster. Karena pagi emang nyebelin.
                    </div>
</div>
</div>
<div className="mt-12 text-center font-sans text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                NO ADDED SUGAR. NO PENGAWET.
            </div>
</section>

<section className="py-16 px-6 relative z-10">
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight mb-8">
                Pilih Sesuai<br/>Mood Pagi Lo.
            </h2>
<hr className="border-t-[3px] border-dark mb-10"/>
<div className="flex flex-col gap-6 mb-12">
<div className="border-[3px] border-dark p-5 bg-neutral -rotate-2 shadow-sm">
<h3 className="font-serif font-semibold text-2xl tracking-tight">Original Honey Macadamia</h3>
<p className="font-sans text-xs italic text-primary mt-2">Buat lo yang purist, gak suka macem-macem.</p>
</div>
<div className="border-[3px] border-dark p-5 bg-neutral rotate-[2.5deg] shadow-sm">
<h3 className="font-serif font-semibold text-2xl tracking-tight">Double Dark Choco</h3>
<p className="font-sans text-xs italic text-primary mt-2">Kalo lo butuh alasan buat senyum sebelum jam 9.</p>
</div>
<div className="border-[3px] border-dark p-5 bg-neutral -rotate-[1.5deg] shadow-sm">
<h3 className="font-serif font-semibold text-2xl tracking-tight">Berry Burst</h3>
<p className="font-sans text-xs italic text-primary mt-2">Pagi yang sedikit dramatis dan butuh yang seger.</p>
</div>
<div className="border-[3px] border-dark p-5 bg-neutral rotate-3 shadow-sm">
<h3 className="font-serif font-semibold text-2xl tracking-tight">Matcha Almond</h3>
<p className="font-sans text-xs italic text-primary mt-2">Sok zen padahal telat 15 menit.</p>
</div>
<div className="border-[3px] border-dark p-5 bg-neutral -rotate-[2.5deg] shadow-sm">
<h3 className="font-serif font-semibold text-2xl tracking-tight">Peanut Butter Chunky</h3>
<p className="font-sans text-xs italic text-primary mt-2">Energi brutal buat jadwal yang padat merayap.</p>
</div>
</div>
<a className="btn-brutal w-full py-4 text-lg block" href="#pesan">Pesan Sekarang</a>
</section>

<section className="py-20 px-6 bg-dark text-neutral relative z-10">
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight mb-10">
                8.000 Pack.<br/>Bukan Klaim.
            </h2>
<div className="border-[2px] border-dashed border-neutral p-6 -rotate-[1.5deg] relative max-w-sm">
<div className="absolute -top-3 -right-3 bg-primary text-neutral text-xs px-2 py-1 font-semibold rotate-6 border-[2px] border-dark uppercase tracking-widest shadow-[2px_2px_0px_#FFFBEB]">
                    WhatsApp
                </div>
<p className="font-sans text-lg md:text-xl italic leading-relaxed">
                    "Anak gue yang susah sarapan sekarang minta tiap pagi."
                </p>
</div>
<p className="font-sans text-xs text-neutral/60 mt-5 mb-12 uppercase tracking-wide">
                Bukan endorse. Bukan bayaran. WhatsApp yang gue screenshot.
            </p>
<hr className="border-t-[2px] border-accent mb-8 max-w-[100px]"/>
<div className="font-serif font-extrabold text-7xl md:text-8xl text-accent tracking-tighter leading-none mb-3">
                8.000+
            </div>
<div className="font-sans text-xs text-neutral font-semibold tracking-[0.15em] uppercase">
                Pack Terjual Bulan Ini
            </div>
</section>

<section className="py-16 px-6 bg-[#f8f5ea] border-y-[4px] border-dark relative z-10">
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight">
                Yang Lo<br/>Mau Tanya.
            </h2>
<div className="font-sans text-xs italic text-dark/70 mt-3 mb-8">
                Gue jawab singkat.
            </div>
<hr className="border-t-[4px] border-dark mb-10"/>
<div className="flex flex-col">
<details className="group border-[3px] border-dark bg-neutral mb-[-3px] relative z-40" open="">
<summary className="p-5 flex justify-between items-center cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<span className="font-sans font-semibold text-sm md:text-base text-primary pr-4">Kenyang ga?</span>
<iconify-icon className="text-xl text-dark transition-transform duration-200 group-open:rotate-45 shrink-0" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-5 pt-0 font-sans text-sm text-dark border-t-[3px] border-dark/10 mt-1 leading-relaxed">
                        Oat itu karbohidrat kompleks. Beda sama mie instan yang lewat doang. Ini nahan lapar persisten sampai jam makan siang.
                    </div>
</details>
<details className="group border-[3px] border-dark bg-neutral mb-[-3px] relative z-30">
<summary className="p-5 flex justify-between items-center cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<span className="font-sans font-semibold text-sm md:text-base text-primary pr-4">Anak kecil bisa?</span>
<iconify-icon className="text-xl text-dark transition-transform duration-200 group-open:rotate-45 shrink-0" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-5 pt-0 font-sans text-sm text-dark border-t-[3px] border-dark/10 mt-1 leading-relaxed">
                        Aman banget. Gak ada pemanis buatan, pengawet, atau pewarna. Cuma bahan asli yang bisa lo eja namanya.
                    </div>
</details>
<details className="group border-[3px] border-dark bg-neutral mb-[-3px] relative z-20">
<summary className="p-5 flex justify-between items-center cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<span className="font-sans font-semibold text-sm md:text-base text-primary pr-4">Bedanya sama granola biasa apa?</span>
<iconify-icon className="text-xl text-dark transition-transform duration-200 group-open:rotate-45 shrink-0" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-5 pt-0 font-sans text-sm text-dark border-t-[3px] border-dark/10 mt-1 leading-relaxed">
                        Rasio isiannya brutal. Kita gak banyakan oat murah buat ngakalin berat. Almond, chia, dan topping lainnya melimpah tiap sendokan.
                    </div>
</details>
<details className="group border-[3px] border-dark bg-neutral relative z-10">
<summary className="p-5 flex justify-between items-center cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<span className="font-sans font-semibold text-sm md:text-base text-primary pr-4">Kalau gak suka bisa retur?</span>
<iconify-icon className="text-xl text-dark transition-transform duration-200 group-open:rotate-45 shrink-0" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-5 pt-0 font-sans text-sm text-dark border-t-[3px] border-dark/10 mt-1 leading-relaxed">
                        Makanan gak bisa diretur. Tapi dengan 8.000+ pack terjual bulan ini, kemungkinannya kecil banget lo bakal nyesel.
                    </div>
</details>
</div>
</section>

<section className="py-16 px-6 relative z-10" id="pesan">
<h2 className="font-serif font-extrabold text-5xl tracking-tight leading-tight">
                Hitung<br/>Sendiri Deh.
            </h2>
<div className="font-sans text-xs italic text-primary mt-3 mb-8 font-semibold">
                Gorengan + kopi pagi lo berapa? Nah.
            </div>
<div className="font-sans text-sm space-y-3 mb-10 border-l-[3px] border-primary pl-4">
<p>Satu pack NOURISH Bowl: <span className="font-semibold text-primary">Rp 11.800.</span></p>
<p>Gorengan 3 biji + kopi sachet: lebih dari itu. Dan lo masih lapar jam 10.</p>
<p className="font-semibold mt-4">Pilih yang masuk akal.</p>
</div>
<hr className="border-t-[4px] border-dark mb-10"/>
<div className="flex flex-col">

<div className="border-[4px] border-dark p-8 bg-neutral mb-[-4px] relative z-0 text-center">
<div className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dark/60 mb-3">
                        Paket Coba-coba (5 Pack)
                    </div>
<div className="font-serif font-extrabold text-5xl tracking-tight">
                        Rp 59.000
                    </div>
</div>

<div className="border-[4px] border-dark p-8 bg-accent relative z-10 text-center shadow-sm">
<div className="absolute -top-4 right-4 bg-neutral border-[3px] border-dark px-3 py-1.5 rotate-2 shadow-[2px_2px_0px_#111]">
<span className="font-sans text-xs font-extrabold uppercase tracking-widest text-primary">Pilihan Masuk Akal</span>
</div>
<div className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dark/80 mb-3 mt-2">
                        Paket Serius (10 Pack)
                    </div>
<div className="font-serif font-extrabold text-6xl tracking-tighter">
                        Rp 99.000
                    </div>
</div>
</div>
<button className="btn-brutal w-full py-5 text-xl mt-12 block">Pesan Sekarang</button>
</section>

<section className="py-20 px-6 bg-dark text-neutral text-left relative z-10">
<h2 className="font-serif font-extrabold text-6xl md:text-7xl tracking-tight leading-[1.1] mb-5">
                Besok Pagi<br/>
<span className="text-accent">Bisa Beda.</span>
</h2>
<div className="font-sans text-sm text-neutral/60 italic mb-8">
                Atau sama kayak biasa. Terserah.
            </div>
<hr className="border-t-[3px] border-primary mb-8 w-1/4"/>
<div className="font-sans text-sm text-neutral/80 flex flex-col gap-4 mb-12 max-w-sm">
<p>Gak ada countdown palsu. Gak ada stok terbatas yang dikarang-karang.</p>
<p>Cuma granola. Cuma 30 detik. Cuma keputusan yang harusnya udah lo buat dari tadi.</p>
</div>

<button className="w-full py-5 text-lg mb-10 font-sans font-semibold uppercase tracking-[0.08em] bg-black text-neutral border-[3px] border-neutral shadow-[4px_4px_0px_#FFFBEB] transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#FFFBEB] text-center block cursor-pointer">
                Pesan Sekarang
            </button>
<div className="flex flex-wrap items-center gap-3 font-sans text-xs font-semibold uppercase text-neutral/40 tracking-[0.15em]">
<span>NO ADDED SUGAR</span>
<span className="w-[2px] h-3 bg-neutral/20"></span>
<span>NO PENGAWET</span>
<span className="w-[2px] h-3 bg-neutral/20"></span>
<span>MULAI BESOK PAGI</span>
</div>
</section>
</main>

    </>
  );
}
