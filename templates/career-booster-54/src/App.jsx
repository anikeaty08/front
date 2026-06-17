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
      

<nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6">
<div className="max-w-md mx-auto w-full flex justify-center">
<span className="font-inter text-xl tracking-tighter text-[#f2f2f2] font-semibold">HYRED.</span>
</div>
</nav>

<section className="relative bg-[#0a0a0a] min-h-[95vh] flex flex-col justify-center px-6 pt-20 pb-16 overflow-hidden">
<div className="absolute inset-0 grain-bg mix-blend-overlay pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-10 flex flex-col items-start mt-10">
<h1 className="font-inter text-4xl text-[#f2f2f2] font-semibold tracking-tight leading-[1.1] mb-6">
                Capek apply ratusan kali tapi tetep ga dapet panggilan?
            </h1>
<p className="font-inter text-xl text-[#f2f2f2] font-medium tracking-tight mb-8 leading-snug" style={{textShadow: '0 0 12px rgba(254,22,22,0.8)'}}>
                Bukan karena kamu nggak layak buat dapet kerja, tapi pasti ada yang masih salah di proses cari kerjamu.
            </p>
<p className="font-plex text-sm text-[#a3a3a3] mb-8 leading-relaxed">
                dan kamu bisa dapetin jawabannya di sini.<br/>
<span className="text-[#f2f2f2]">Webinar Career Booster. Gratis. Live via Zoom.</span>
</p>
<div className="inline-flex items-center gap-2 bg-[#fe1616]/10 text-[#fe1616] border border-[#fe1616]/20 rounded-full px-3.5 py-1.5 mb-10 text-xs font-semibold font-plex tracking-wide">
<iconify-icon icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                25 April 2025 · 19.00 WIB
            </div>
<button className="w-full bg-[#fe1616] text-white font-semibold font-inter h-13 rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center" onclick="document.getElementById('diagnosis').scrollIntoView()" style={{boxShadow: '0 0 16px 4px rgba(254,22,22,0.35)'}}>
                Daftar Sekarang, Gratis
            </button>
</div>
</section>

<section className="bg-[#f5f5f5] py-24 px-6 relative" id="diagnosis">
<div className="max-w-md mx-auto w-full">
<h2 className="font-inter text-2xl text-[#0a0a0a] font-semibold tracking-tight mb-2">
                Bingung ya tiap kali gagal salahnya di mana?
            </h2>
<p className="font-plex text-sm italic text-[#555] mb-12">
                stop salahin dirimu sendiri, karena bisa jadi alasannya karna ini
            </p>
<div className="space-y-8 mb-14 font-plex text-sm text-[#111] leading-[1.7]">
<div className="flex gap-4 items-start">
<span className="text-[#fe1616] font-semibold mt-0.5">01</span>
<p>CV kamu nggak lolos ATS padahal rekruter belum sempet baca</p>
</div>
<div className="flex gap-4 items-start">
<span className="text-[#fe1616] font-semibold mt-0.5">02</span>
<p>CV yang masuk nggak cocok sama posisi yang kamu lamar dan kamu nggak punya cara buat ukur itu</p>
</div>
<div className="flex gap-4 items-start">
<span className="text-[#fe1616] font-semibold mt-0.5">03</span>
<p>waktu dapet panggilan interview kamu ngeblank dan jawabanmu nggak terstruktur</p>
</div>
</div>
<p className="font-plex text-base italic text-[#0a0a0a] pl-5 border-l-2 border-[#fe1616]/40 leading-relaxed">
                Jadi ini bukan soal layak atau enggak, tapi strateginya udah bener atau belum?
            </p>
</div>
</section>

<section className="relative bg-white pt-24 pb-32 px-6">
<div className="max-w-md mx-auto w-full relative z-10">
<span className="block text-[#fe1616] font-plex text-sm font-semibold tracking-wide mb-3">
                Solusi Praktis
            </span>
<h2 className="font-inter text-3xl text-[#0a0a0a] font-semibold tracking-tight leading-tight mb-3">
                Trus di webinar ini kamu bakal dapetin apa?
            </h2>
<p className="font-plex text-sm italic text-[#666] leading-relaxed">
                ga cuma sekedar materi yang lewat aja di telinga, tapi bisa langsung kamu terapin
            </p>
</div>
</section>

<section className="relative bg-[#1a1a1a] px-6 pb-24 -mt-16 overflow-hidden">
<div className="absolute inset-0 grain-bg mix-blend-overlay pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-20">
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[20px] p-8 shadow-2xl flex flex-col gap-6">
<div className="pl-5 border-l border-[#fe1616] font-inter text-sm text-[#f2f2f2] leading-relaxed">
                    Cara susun CV-ATS friendly yang relevan sama posisi yang kamu incar
                </div>
<div className="w-full h-px bg-gradient-to-r from-[#2a2a2a] to-transparent"></div>
<div className="pl-5 border-l border-[#fe1616] font-inter text-sm text-[#f2f2f2] leading-relaxed">
                    Cara nilai kecocokan CV kamu sama lowongan yang kamu targetin
                </div>
<div className="w-full h-px bg-gradient-to-r from-[#2a2a2a] to-transparent"></div>
<div className="pl-5 border-l border-[#fe1616] font-inter text-sm text-[#f2f2f2] leading-relaxed">
                    Cara buat "contekan" interview biar jawabanmu lebih terstruktur
                </div>
</div>
</div>
</section>

<section className="bg-[#fcfcfc] py-24 px-6 border-b border-[#eaeaea]">
<div className="max-w-md mx-auto w-full">
<h2 className="font-inter text-2xl text-[#0a0a0a] font-semibold tracking-tight mb-2">
                Ini cocok buat siapa?
            </h2>
<p className="font-plex text-sm italic text-[#666] mb-10">
                pastinya buat kamu yang:
            </p>
<ul className="space-y-5 font-plex text-sm text-[#222] leading-relaxed">
<li className="flex gap-3.5 items-start">
<iconify-icon className="text-[#fe1616] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Fresh graduate yang udah apply banyak tapi belum dapat panggilan</span>
</li>
<li className="flex gap-3.5 items-start">
<iconify-icon className="text-[#fe1616] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Yang udah kerja tapi pingin punya opportunity baru</span>
</li>
<li className="flex gap-3.5 items-start">
<iconify-icon className="text-[#fe1616] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Career switcher yang gak yakin bisa pindah haluan atau enggak</span>
</li>
</ul>
</div>
</section>

<section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
<div className="absolute inset-0 grain-bg mix-blend-overlay pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-10 text-center">
<h2 className="font-inter text-2xl text-[#f2f2f2] font-semibold tracking-tight mb-14 leading-snug">
                Kamu bakal belajar langsung bareng ahlinya
            </h2>
<div className="relative w-36 h-36 mx-auto mb-10 rounded-[12px] border border-dashed border-[#fe1616]/60 p-1 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
<div className="absolute inset-0 bg-[#fe1616] opacity-10 z-10 mix-blend-color"></div>
<iconify-icon className="text-[#fe1616]/30 text-5xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="font-inter text-5xl font-semibold text-[#fe1616] tracking-tight mb-1">300+</div>
<div className="font-plex text-sm text-[#f2f2f2] mb-12">orang mendapat pekerjaan</div>
<div className="font-inter text-sm font-medium text-[#f2f2f2] tracking-wide uppercase mb-1">Gandhi Surya Buana</div>
<div className="font-plex text-xs text-[#888] leading-relaxed">
                Recruitment Consultant dan<br/>Labour Market Intelligence Research.
            </div>
</div>
</section>

<section className="bg-[#f5f5f5] py-24 px-6 overflow-hidden">
<div className="max-w-md mx-auto w-full relative">
<h2 className="font-inter text-2xl text-[#0a0a0a] font-semibold tracking-tight mb-12 text-center">
                Kata mereka yang pernah ikut webinar kita
            </h2>

<div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] flex overflow-hidden mb-12 select-none pointer-events-none">
<div className="flex shrink-0 gap-8 animate-marquee font-inter text-xs font-semibold text-[#fe1616] uppercase tracking-widest opacity-60">
<span className="shrink-0">STRATEGI APLICABLE</span>
<span className="shrink-0">•</span>
<span className="shrink-0">LOLOS ATS SYSTEM</span>
<span className="shrink-0">•</span>
<span className="shrink-0">INTERVIEW ANTI NGEBLANK</span>
<span className="shrink-0">•</span>
<span className="shrink-0">STRATEGI APLICABLE</span>
<span className="shrink-0">•</span>
<span className="shrink-0">LOLOS ATS SYSTEM</span>
<span className="shrink-0">•</span>
<span className="shrink-0">INTERVIEW ANTI NGEBLANK</span>
<span className="shrink-0">•</span>
</div>
<div aria-hidden="true" className="flex shrink-0 gap-8 animate-marquee font-inter text-xs font-semibold text-[#fe1616] uppercase tracking-widest opacity-60">
<span className="shrink-0">STRATEGI APLICABLE</span>
<span className="shrink-0">•</span>
<span className="shrink-0">LOLOS ATS SYSTEM</span>
<span className="shrink-0">•</span>
<span className="shrink-0">INTERVIEW ANTI NGEBLANK</span>
<span className="shrink-0">•</span>
<span className="shrink-0">STRATEGI APLICABLE</span>
<span className="shrink-0">•</span>
<span className="shrink-0">LOLOS ATS SYSTEM</span>
<span className="shrink-0">•</span>
<span className="shrink-0">INTERVIEW ANTI NGEBLANK</span>
<span className="shrink-0">•</span>
</div>
</div>
<div className="space-y-5">
<div className="bg-[#111] border border-[#222] rounded-[16px] p-7 transition-colors hover:border-[#333]">
<p className="font-plex text-sm text-[#e0e0e0] leading-relaxed mb-6">
                        "Soo lucky ketemu postingan event Hyred bulan kemarin dan memutuskan untuk ikut webinarnya dan ternyata nendang banget ilmu dari kakak-kakak Hyred."
                    </p>
<div className="font-inter text-xs font-semibold text-[#fe1616]">Kahfi Prawitasari</div>
</div>
<div className="bg-[#111] border border-[#222] rounded-[16px] p-7 relative transition-colors hover:border-[#333]">
<div className="absolute top-5 right-5 bg-[#fe1616] text-white text-[0.625rem] font-semibold uppercase px-2 py-1 rounded-sm tracking-wider">
                        Lolos Kemnaker
                    </div>
<p className="font-plex text-sm text-[#e0e0e0] leading-relaxed mb-6 pr-24">
                        "Thank you Hyred, CV sama interview aku tembus di maganghub kemnaker batch 3 ini."
                    </p>
<div className="font-inter text-xs font-semibold text-[#fe1616]">Fathunajah Elsha C</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#fe1616] py-24 px-6 overflow-hidden">
<div className="absolute inset-0 grain-bg-intense mix-blend-overlay pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-10 text-white flex flex-col items-center">
<h2 className="font-inter text-3xl font-semibold tracking-tight mb-3 text-center">
                Bonus Career Check Up Gratis
            </h2>
<div className="font-plex text-sm mb-12 border-b border-white/30 pb-1.5 inline-block text-center">
<span className="italic opacity-95">terbatas hanya untuk</span>
<span className="underline underline-offset-4 opacity-100 px-1">100 peserta</span>
<span className="italic opacity-95">yang mengikuti webinar</span>
</div>
<div className="font-inter text-3xl font-semibold tracking-widest mb-12 flex items-center justify-center gap-2">
<div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg shadow-inner">02</div>
<span className="opacity-50 pb-1">:</span>
<div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg shadow-inner">14</div>
<span className="opacity-50 pb-1">:</span>
<div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg shadow-inner">59</div>
</div>
<div className="w-full bg-black/10 rounded-2xl p-6 mb-10 border border-white/10 backdrop-blur-md">
<p className="font-plex text-sm mb-6 opacity-90">Di Career Check Up kamu bisa check:</p>
<div className="font-plex text-sm space-y-4">
<div className="pb-4 border-b border-white/20 flex gap-3 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
                        Keterbacaan CV di ATS
                    </div>
<div className="pb-4 border-b border-white/20 flex gap-3 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
                        Kecocokan CV sama posisi yang kamu lamar
                    </div>
<div className="pt-1 flex gap-3 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
                        Kualitas jawaban interviewmu
                    </div>
</div>
</div>
<button className="w-full bg-white text-[#fe1616] font-semibold font-inter h-13 rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center" style={{boxShadow: '0 0 16px 4px rgba(255,255,255,0.25)'}}>
                Daftar Sekarang Sebelum Penuh
            </button>
</div>
</section>

<section className="relative bg-[#0a0a0a] min-h-[75vh] flex flex-col justify-center py-24 px-6 overflow-hidden pb-48">
<div className="absolute inset-0 grain-bg-intense mix-blend-overlay pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-10 text-center flex flex-col items-center">
<div className="inline-flex items-center justify-center bg-[#fe1616]/10 text-[#fe1616] border border-[#fe1616]/20 rounded-full px-4 py-1.5 mb-8 text-[0.6875rem] font-semibold font-plex tracking-wider uppercase">
                25 April · 19.00 WIB
            </div>
<h2 className="font-inter text-4xl text-[#f2f2f2] font-semibold tracking-tight leading-[1.1] mb-5">
                Daftar webinar career booster sekarang, gratis!
            </h2>
<p className="font-plex text-sm text-[#888] italic mb-10">
                25 April 2025, 19.00 WIB via Zoom.
            </p>
<div className="font-plex text-sm text-[#d4d4d4] leading-[1.8] space-y-6 text-center max-w-[90%]">
<p>kapan lagi kamu bisa dapetin jawaban dari keresahanmu selama ini dan juga strategi yang kamu butuhin untuk cari kerja lebih efektif kalau bukan sekarang!</p>
<p className="font-medium text-[#f2f2f2]">buruan amanin kursimu sebelum kehabisan</p>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
<div className="h-24 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
<div className="bg-[#0a0a0a] pb-8 px-6 pt-2 pointer-events-auto">
<div className="max-w-md mx-auto w-full">
<button className="w-full bg-[#fe1616] text-white font-semibold font-inter h-13 rounded-full transition-all hover:bg-[#e61313] active:scale-[0.98] flex items-center justify-center" style={{boxShadow: '0 0 20px 6px rgba(254,22,22,0.45)'}}>
                    Daftar di sini
                </button>
</div>
</div>
</div>

    </>
  );
}
