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
      

<nav className="absolute top-0 w-full z-50 py-6 px-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
<div className="tracking-widest uppercase text-xs font-semibold text-[#4a4533] opacity-80" style={{letterSpacing: '0.2em'}}>MAILCLUB</div>
</nav>

<header className="relative w-full min-h-[85vh] flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden bg-[#faf9f5]">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">

<div className="absolute w-64 md:w-80 h-96 bg-[#fdfce7] shadow-xl rotate-[3deg] translate-x-12 translate-y-12 md:translate-x-32 md:translate-y-8" style={{border: '1px solid rgba(0,0,0,0.03)', borderRadius: '2px 255px 3px 25px / 255px 5px 225px 3px'}}></div>

<div className="absolute w-56 md:w-72 h-48 bg-white/40 backdrop-blur-sm shadow-md -rotate-[4deg] -translate-x-16 -translate-y-20 md:-translate-x-40 md:-translate-y-16" style={{border: '1px solid rgba(255,255,255,0.8)'}}>
<div className="grid grid-cols-3 gap-2 p-3 opacity-20">
<div className="w-full aspect-square rounded-full bg-gray-400"></div><div className="w-full aspect-square rounded-full bg-gray-300"></div><div className="w-full aspect-square rounded-full bg-gray-400"></div>
</div>
</div>

<div className="absolute w-32 h-32 bg-[#e8e4d3] shadow-sm rotate-[12deg] translate-x-40 -translate-y-32 md:translate-x-64 md:-translate-y-24" style={{borderRadius: '1px'}}></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-start" style={{marginTop: '10vh'}}>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#2d2a1e] leading-[1.1] rotate-[1.5deg] origin-left drop-shadow-sm mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Sticker-mu numpuk.<br/>
<span className="text-[#5a5441]">Journalingmu sepi.</span>
</h1>
<p className="text-base md:text-lg text-[#5a5441] mb-6 italic leading-relaxed max-w-lg shadow-sm bg-white/50 backdrop-blur-md p-1 rounded-sm">
                Bukan karena kamu kurang rajin. Tapi karena sendirian memang lama-lama melelahkan.
            </p>
<p className="text-sm md:text-base text-[#4a4533] leading-loose max-w-md">
                Kamu buka laci, lihat koleksi sticker dan postcard yang belum tersentuh, lalu tutup lagi. Bukan karena tidak suka. Tapi tidak ada yang mau diajak cerita soal itu.
            </p>
</div>
</header>

<section className="relative bg-[#f5f3dc] py-24 md:py-32 px-6 overflow-hidden" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.06%22/%3E%3C/svg%3E\')'}}>

<svg className="absolute top-0 left-0 w-full h-8 text-[#faf9f5] fill-current -mt-1 z-10" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M0,0 V120 Q30,80 60,110 T120,90 T180,105 T240,85 T300,115 T360,95 T420,105 T480,80 T540,110 T600,90 T660,105 T720,85 T780,115 T840,95 T900,105 T960,80 T1020,110 T1080,90 T1140,105 T1200,85 V0 Z"></path>
</svg>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#2d2a1e] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Kamu sudah pernah coba.<br/>Tahu sendiri bagaimana akhirnya.
            </h2>
<div className="space-y-6 text-base md:text-lg text-[#5a5441] italic leading-loose">
<p>
                    Post di TikTok, ramai dua hari, lalu sunyi. DM Instagram, satu-dua orang balas, tidak ada yang lanjut. Bukan salah siapa-siapa. Memang tidak ada yang merawat koneksi itu supaya tumbuh.
                </p>
<p>
                    Jadi kamu kembali ke jurnal sendirian, dengan kertas yang sudah terlalu cantik untuk cuma disimpan.
                </p>
</div>
</div>

<div className="absolute bottom-8 right-8 md:bottom-16 md:right-24 w-48 h-32 border-2 border-[#d1cbbd] rotate-[2deg] opacity-20 pointer-events-none flex flex-col justify-between p-3" style={{borderRadius: '2px 2px 2px 2px / 2px 2px 2px 2px'}}>
<div className="self-end w-6 h-8 border border-[#d1cbbd]"></div>
<div className="space-y-2 w-full">
<div className="h-px bg-[#d1cbbd] w-full"></div>
<div className="h-px bg-[#d1cbbd] w-3/4"></div>
</div>
</div>
</section>

<section className="bg-[#faf9f5] py-24 md:py-32 px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative h-96 w-full flex items-center justify-center">


<div className="absolute w-64 md:w-72 aspect-[3/4] bg-[#fdfce7] shadow-lg -rotate-[2deg] p-4 flex flex-col justify-end pb-8" style={{border: '1px solid rgba(0,0,0,0.05)'}}>
<div className="w-full h-1/2 bg-[#e8e4d3]/50 mb-2"></div>
<div className="w-3/4 h-3 bg-[#e8e4d3]"></div>
</div>

<div className="absolute w-56 h-40 bg-[#d4cbb8] shadow-md rotate-[4deg] translate-x-12 -translate-y-8 flex items-center justify-center" style={{border: '1px dashed rgba(0,0,0,0.1)'}}>
<iconify-icon className="text-4xl text-[#8b8473] opacity-50" icon="solar:scissors-linear"></iconify-icon>
</div>

<div className="absolute w-48 h-32 bg-white shadow-xl -rotate-[5deg] -translate-x-12 translate-y-12 p-2 flex justify-end" style={{border: '1px solid rgba(0,0,0,0.08)'}}>
<div className="w-5 h-6 bg-[#c1d133]/20 border border-[#c1d133]/40"></div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2d2a1e] leading-[1.15]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Ada yang memang didesain<br/>untuk membuat ini terjadi.
                </h2>
<p className="text-base text-[#5a5441] italic">
                    Mail Club Kit: kit journaling original, sekaligus tiket masuk ke komunitas tukar mail club.
                </p>
<p className="text-sm md:text-base text-[#4a4533] leading-loose">
                    Sticker pack, postcard, paper craft, zine art poster, mini notes, semuanya didesain sendiri, bukan reseller. Bukan untuk dikumpulkan di laci. Untuk dikirim, diterima, dan ditulis atas nama orang nyata yang kamu kenal dari komunitas yang sama.
                </p>
<button className="group relative w-full md:w-auto inline-flex items-center justify-center mt-4 bg-transparent border-2 border-[#2d2a1e] text-[#2d2a1e] px-8 py-4 text-xs font-semibold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:text-[#1a1614] hover:border-[#c1d133]">
<span className="absolute inset-0 bg-[#c1d133] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
<span className="relative z-10 flex items-center gap-2">
                        Lihat Isi Kitnya
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="bg-[#1A1614] py-24 md:py-32 px-6 text-[#fdfce7] relative overflow-hidden" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E\')'}}>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveaspectratio="xMidYMid slice" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
<path d="M 200 0 Q 300 250 200 500 T 250 1000" fill="none" stroke="#fdfce7" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#fdfce7]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Empat langkah.
                </h2>
<p className="text-lg text-[#b5a995] italic">Admin yang urus awkwardnya.</p>
</div>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#4a4036] before:to-transparent">

<div className="relative flex items-center md:justify-between group">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d9d0c1] text-[#1A1614] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] z-10 shrink-0 md:order-1 md:left-1/2 md:-translate-x-1/2 md:absolute">
<span className="text-xl font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>1</span>
</div>
<div className="ml-6 md:ml-0 md:w-[45%] md:pr-8 md:text-right">
<p className="text-sm md:text-base text-[#d1cbbd] leading-relaxed">Beli kit dan join grup komunitas. Terima kit fisikmu setelah pengiriman diset up.</p>
</div>
</div>

<div className="relative flex items-center md:justify-between group">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d9d0c1] text-[#1A1614] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] z-10 shrink-0 md:order-1 md:left-1/2 md:-translate-x-1/2 md:absolute">
<span className="text-xl font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>2</span>
</div>
<div className="ml-6 md:ml-0 md:w-[45%] md:pl-8 md:order-2">
<p className="text-sm md:text-base text-[#d1cbbd] leading-relaxed">Admin kenalkan semua orang dan cek interest masing-masing.</p>
</div>
</div>

<div className="relative flex items-center md:justify-between group">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d9d0c1] text-[#1A1614] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] z-10 shrink-0 md:order-1 md:left-1/2 md:-translate-x-1/2 md:absolute">
<span className="text-xl font-semibold" style={{fontFamily: '\'Playfair Display\', serif'}}>3</span>
</div>
<div className="ml-6 md:ml-0 md:w-[45%] md:pr-8 md:text-right">
<p className="text-sm md:text-base text-[#d1cbbd] leading-relaxed">Temukan pasangan tukeranmu sendiri, atau minta admin carikan.</p>
</div>
</div>

<div className="relative flex items-center md:justify-between group">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c1d133] text-[#1A1614] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] z-10 shrink-0 md:order-1 md:left-1/2 md:-translate-x-1/2 md:absolute">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="ml-6 md:ml-0 md:w-[45%] md:pl-8 md:order-2">
<p className="text-sm md:text-base text-[#d1cbbd] leading-relaxed">Kirim mail club pertamamu dengan kit di tangan dan sentuhan personalmu.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#faf9f5] py-24 md:py-32 px-6">
<div className="max-w-2xl mx-auto text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#2d2a1e]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Dari seseorang yang<br/>sudah duluan.
            </h2>
</div>

<div className="max-w-3xl mx-auto bg-[#fdfce7] p-8 md:p-16 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] rotate-[0.5deg]" style={{borderRadius: '2px 255px 3px 25px / 255px 5px 225px 3px', border: '1px solid #e2ddc7', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.05%22/%3E%3C/svg%3E\')'}}>

<div className="absolute top-6 right-6 w-12 h-14 bg-white shadow-sm flex items-center justify-center rotate-[3deg] p-1 border border-gray-100" style={{maskImage: 'radial-gradient(circle at 0 0, transparent 2px, black 2.5px)', maskSize: '100% 100%', maskRepeat: 'no-repeat'}}>
<div className="w-full h-full border border-[#c1d133]/50 flex items-center justify-center bg-[#f5f3dc]">
<iconify-icon className="text-lg text-[#9b7be6]/70" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
</div>

<div className="relative z-10 pt-8 pb-12">
<iconify-icon className="text-4xl text-[#d1cbbd] absolute -top-4 -left-2 opacity-50" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-xl md:text-2xl text-[#2d2a1e] italic leading-snug relative z-10">
                    "Akhirnya dapet journaling kit baru setelah bosen pake yang udah ada, selain itu dapet temen juga yang punya interest yang sama!"
                </p>
</div>

<div className="w-full h-px bg-[url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%223%22%20height%3D%221%22%20fill%3D%22%23d1cbbd%22%2F%3E%3C%2Fsvg%3E')] mb-8"></div>

<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#9b7be6] shrink-0 mt-0.5" icon="solar:heart-angle-linear"></iconify-icon>
<p className="text-xs md:text-sm text-[#5a5441] leading-relaxed">
                    Mail Club Kit dibuat oleh journaler yang mengalami frustrasi yang sama. Bukan brand yang tiba-tiba jual stationery. Komunitas yang kebetulan punya kitnya juga.
                </p>
</div>
</div>
</section>

<section className="bg-[#ebe9dd] py-24 md:py-32 px-6 relative pb-40">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2d2a1e]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Semua yang ada di dalamnya.
                </h2>
<p className="text-lg text-[#5a5441] italic">Termasuk yang tak kelihatan.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-[#f5f3dc] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.03)] rotate-[-1deg] transition-transform hover:rotate-0 flex flex-col gap-3" style={{border: '1px solid rgba(0,0,0,0.02)'}}>
<iconify-icon className="text-2xl text-[#8b8473]" icon="solar:sticker-smile-circle-linear"></iconify-icon>
<p className="text-sm text-[#4a4533] leading-relaxed">Sticker pack &amp; Postcard original desain</p>
</div>
<div className="bg-[#e8e4d3] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.03)] rotate-[1.5deg] transition-transform hover:rotate-0 flex flex-col gap-3" style={{border: '1px solid rgba(0,0,0,0.02)'}}>
<iconify-icon className="text-2xl text-[#8b8473]" icon="solar:document-text-linear"></iconify-icon>
<p className="text-sm text-[#4a4533] leading-relaxed">Paper craft &amp; Zine art poster</p>
</div>
<div className="bg-[#fdfce7] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.03)] rotate-[-0.5deg] transition-transform hover:rotate-0 flex flex-col gap-3" style={{border: '1px solid rgba(0,0,0,0.02)'}}>
<iconify-icon className="text-2xl text-[#8b8473]" icon="solar:notebook-linear"></iconify-icon>
<p className="text-sm text-[#4a4533] leading-relaxed">Mini notes untuk sentuhan personal</p>
</div>
<div className="bg-[#f5f3dc] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.03)] rotate-[1deg] transition-transform hover:rotate-0 flex flex-col gap-3 md:col-span-1" style={{border: '1px solid rgba(0,0,0,0.02)'}}>
<iconify-icon className="text-2xl text-[#8b8473]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<p className="text-sm text-[#4a4533] leading-relaxed">Akses komunitas journaling club selamanya</p>
</div>
<div className="bg-[#e8e4d3] p-6 shadow-[0_2px_10px_rgb(0,0,0,0.03)] rotate-[-1.5deg] transition-transform hover:rotate-0 flex flex-col gap-3 md:col-span-2" style={{border: '1px solid rgba(0,0,0,0.02)'}}>
<iconify-icon className="text-2xl text-[#8b8473]" icon="solar:hand-shake-linear"></iconify-icon>
<p className="text-sm text-[#4a4533] leading-relaxed">Sistem matching tukar mail club yang dijaga dan difasilitasi penuh oleh admin</p>
</div>
</div>

<div className="mt-20 p-8 max-w-2xl mx-auto text-center relative">

<div className="absolute inset-0 z-0 pointer-events-none" style={{border: '2px solid #c1d133', borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px', opacity: '0.8'}}></div>
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="inline-flex items-center justify-center px-3 py-1 bg-[#c1d133]/20 text-[#5a6b0c] text-xs font-semibold tracking-wider uppercase rounded-sm mb-2">
                        10 Pembeli Pertama
                    </div>
<p className="text-sm md:text-base text-[#4a4533] leading-relaxed">
                        Mendapatkan bonus tambahan berupa <strong>keychain eksklusif</strong> dan <strong>washi tape limited edition</strong>.
                    </p>
</div>
</div>
</div>

<svg className="absolute bottom-0 left-0 w-full h-12 text-[#1A1614] fill-current translate-y-px z-10" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M0,120 V0 Q30,40 60,10 T120,30 T180,15 T240,35 T300,5 T360,25 T420,15 T480,40 T540,10 T600,30 T660,15 T720,35 T780,5 T840,25 T900,15 T960,40 T1020,10 T1080,30 T1140,15 T1200,35 V120 Z"></path>
</svg>
</section>

<section className="bg-[#1A1614] py-32 px-6 relative flex flex-col items-center justify-center min-h-[80vh]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E\')'}}>
<div className="max-w-xl mx-auto w-full text-center relative z-10">
<div className="inline-flex flex-col items-center justify-center p-8 md:p-12 rotate-[0.5deg]">

<div className="relative inline-block mb-4">
<span className="text-xl md:text-2xl text-[#8b8473] tracking-wide" style={{fontFamily: '\'Playfair Display\', serif'}}>Rp109.000</span>

<div className="absolute inset-x-0 top-1/2 h-[3px] bg-white -translate-y-1/2 -rotate-[6deg] rounded-full opacity-90 shadow-[0_0_2px_rgba(255,255,255,0.5)]"></div>
</div>

<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#c1d133] mb-6 drop-shadow-md" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Rp69.000.
                </h2>
<p className="text-base text-[#d1cbbd] italic mb-8">
                    30 slot. Tidak ditambah.<br/>
<span className="text-sm opacity-60">Bukan countdown palsu.</span>
</p>
<p className="text-sm text-[#b5a995] leading-relaxed max-w-sm mx-auto mb-12">
                    Sudah termasuk semua isi kit, akses komunitas lifetime, dan sistem matching yang dijaga admin. Untuk 10 pembeli pertama, keychain eksklusif dan washi tape masuk ke paketmu.
                </p>

<button className="group w-full max-w-sm mx-auto block py-4 bg-transparent text-[#fdfce7] hover:bg-[#c1d133] hover:text-[#1A1614] hover:border-[#c1d133] transition-all duration-300 uppercase tracking-widest text-sm font-semibold relative" style={{border: '2px solid #fdfce7', boxShadow: 'inset 0 0 0 4px rgba(253,252,231,0.1)'}}>
<span className="relative z-10 flex items-center justify-center gap-2">
                        Iya, Aku Mau Gabung
                        <iconify-icon className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:ticket-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="bg-[#faf9f5] py-24 px-6 relative">

<svg className="absolute top-0 left-0 w-full h-4 text-[#1A1614] fill-current -mt-px z-10" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M0,0 V120 Q30,80 60,110 T120,90 T180,105 T240,85 T300,115 T360,95 T420,105 T480,80 T540,110 T600,90 T660,105 T720,85 T780,115 T840,95 T900,105 T960,80 T1020,110 T1080,90 T1140,105 T1200,85 V0 Z"></path>
</svg>
<div className="max-w-xl mx-auto mt-12">
<h3 className="text-lg font-semibold text-[#2d2a1e] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>P.S.</h3>
<div className="space-y-4 text-base text-[#4a4533] italic leading-relaxed mb-8">
<p>
                    Aku buat ini karena aku tahu persis rasanya: laci penuh sticker, tidak ada yang mau diajak ngobrol soal itu.
                </p>
<p>
                    Kalau kamu sudah baca sampai sini, kurasa kamu tahu rasa itu juga.
                </p>
</div>

<div className="mb-12 rotate-[2deg] opacity-70">
<iconify-icon className="text-3xl text-[#9b7be6]" icon="solar:pen-bold-duotone"></iconify-icon>
</div>

<button className="inline-flex items-center gap-2 border-b border-[#2d2a1e] pb-1 uppercase tracking-wider text-xs font-semibold text-[#2d2a1e] hover:text-[#7d8f08] hover:border-[#7d8f08] transition-colors duration-300">
                Kirim Kit-ku Sekarang
                <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</section>

    </>
  );
}
