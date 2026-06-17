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
fontFamily: {
display: ['"Space Grotesk"', 'sans-serif'],
body: ['"IBM Plex Sans"', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
},
colors: {
sys: {
black: '#000000',
dark: '#0a0a0a',
accent: '#a80000',
neutral: '#FAF8F4',
muted: '#EBE8E1',
}
},
animation: {
'glow-pulse': 'glowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
glowPulse: {
'0%, 100%': { boxShadow: '0 0 12px rgba(168,0,0,0.4)', opacity: 1 },
'50%': { boxShadow: '0 0 24px rgba(168,0,0,0.8)', opacity: .8 },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      // 1. FAQ Accordion Logic
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = btn.querySelector('span:last-child');
        
        btn.addEventListener('click', () => {
          const isOpen = answer.classList.contains('open');
          
          // Close all others
          document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
          document.querySelectorAll('.faq-btn span:last-child').forEach(ic => ic.textContent = '+');
          
          if (!isOpen) {
            answer.classList.add('open');
            icon.textContent = 'x';
          }
        });
      });

      // 2. Simple Fake Countdown Timer logic (just for visual representation of urgency as requested to build a timer component)
      function startTimer() {
        const timerDisplay = document.getElementById('countdown-timer');
        if(!timerDisplay) return;
        
        // Setup 24 hours from now
        let time = 24 * 60 * 60; 
        
        setInterval(() => {
          const d = Math.floor(time / (24 * 3600)).toString().padStart(2, '0');
          const h = Math.floor((time % (24 * 3600)) / 3600).toString().padStart(2, '0');
          const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
          const s = Math.floor(time % 60).toString().padStart(2, '0');
          
          timerDisplay.innerHTML = `<span>${d}</span><span class="text-[#444]">:</span><span>${h}</span><span class="text-[#444]">:</span><span>${m}</span><span class="text-[#444]">:</span><span>${s}</span>`;
          
          if(time > 0) time--;
        }, 1000);
      }
      startTimer();

      // 3. Sticky CTA Reveal Logic
      const stickyCta = document.getElementById('sticky-cta');
      const firstSection = document.querySelector('section');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > firstSection.offsetHeight * 0.8) {
          stickyCta.classList.remove('translate-y-full');
        } else {
          stickyCta.classList.add('translate-y-full');
        }
      });
      
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    });
  
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
      
<main className="w-full relative pb-24">

<section className="relative bg-sys-dark bg-grid-dark px-5 py-20 md:py-32 min-h-[90vh] justify-center items-start border-b border-[#222]">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-8 relative z-10">

<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-sys-accent animate-pulse"></div>
<span className="font-mono text-xs text-sys-neutral/60 uppercase tracking-widest">Status: Stuck</span>
</div>
<div className="flex flex-col gap-6">
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter-custom leading-[1.1] text-sys-neutral">
            Kamu Capek.<br/>Tapi Kamu Belum Resign.
          </h2>
<h3 className="font-body text-lg md:text-xl text-sys-neutral/80 max-w-2xl leading-relaxed">
            Bukan karena tidak mau. CV belum siap, dan kamu tidak tahu harus mulai dari mana.
          </h3>
</div>
<p className="font-body text-base md:text-lg text-sys-neutral/60 leading-relaxed max-w-2xl border-l-2 border-[#222] pl-4">
          Setiap hari kerja terasa lebih berat. Kamu sudah tahu harus pindah. Tapi dokumen lamaran tidak kunjung selesai, dan ketidaksiapan itu menahan kamu di tempat yang sudah tidak cocok.
        </p>
<div className="pt-6 w-full sm:w-auto">
<a className="btn-terminal sm:max-w-md w-full" href="#launch">Lihat Sistemnya</a>
</div>
</div>
</section>

<section className="bg-sys-neutral flex flex-col w-full">

<div className="px-5 py-12 md:py-16 w-full max-w-3xl mx-auto bg-grid-light">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter-custom text-sys-black text-center">
          Dua Versi Kamu. Jaraknya Satu Hari.
        </h2>
</div>

<div className="w-full bg-[#EBE8E1] px-5 py-12 md:py-16">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
<span className="font-mono text-xs text-sys-black/50 uppercase tracking-widest">State 01: Sebelum</span>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="w-3 h-3 bg-sys-black/20 mt-1.5 shrink-0"></div>
<p className="font-body text-base text-sys-black leading-relaxed">SEBELUM: CV belum diperbarui. Tidak tahu mau apply ke mana. Scroll lowongan kerja tapi tidak ada yang terkirim. Nunda resign minggu ke minggu.</p>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-sys-black relative flex items-center justify-center">
<div className="bg-sys-black text-sys-neutral font-display text-xs px-3 py-1 uppercase tracking-widest absolute">Shift</div>
</div>

<div className="w-full bg-sys-dark bg-grid-dark px-5 py-12 md:py-16">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
<span className="font-mono text-xs text-sys-accent uppercase tracking-widest">State 02: Sesudah</span>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="w-3 h-3 bg-sys-accent mt-1.5 shrink-0"></div>
<p className="font-body text-base text-sys-neutral leading-relaxed">SESUDAH: 5 CV siap untuk 5 target berbeda. LinkedIn dioptimasi. Portfolio dan cover letter selesai. Lamaran terkirim hari ini.</p>
</div>
</div>
<div className="pt-8 w-full">
<a className="btn-terminal w-full sm:max-w-md" href="#launch">Mulai Perpindahan Ini</a>
</div>
</div>
</div>
</section>

<section className="bg-sys-muted bg-grid-light px-5 py-20 md:py-24 border-b border-[#d1cdcd]">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
<div className="flex flex-col gap-4">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter-custom text-sys-black">
            Lima Langkah. Semua Dipandu. Selesai Hari Ini.
          </h2>
<h3 className="font-body text-base md:text-lg text-sys-black/70">
            Tidak ada tebak-tebakan. Platform ini mengerjakan prosesnya bersamamu.
          </h3>
</div>

<div className="relative flex flex-col gap-10 pl-6 border-l border-sys-accent py-4">
<div className="relative flex flex-col gap-2">
<div className="absolute w-2 h-2 rounded-full bg-sys-accent -left-[29px] top-1.5 ring-4 ring-sys-muted"></div>
<span className="font-mono text-xs text-sys-accent font-semibold">01</span>
<p className="font-display text-base font-medium text-sys-black leading-snug">Ceritakan pengalaman kerja lewat Career Journal.</p>
</div>
<div className="relative flex flex-col gap-2">
<div className="absolute w-2 h-2 rounded-full bg-sys-accent -left-[29px] top-1.5 ring-4 ring-sys-muted"></div>
<span className="font-mono text-xs text-sys-accent font-semibold">02</span>
<p className="font-display text-base font-medium text-sys-black leading-snug">Riset target posisi paling cocok dengan Ideal Job Fit.</p>
</div>
<div className="relative flex flex-col gap-2">
<div className="absolute w-2 h-2 rounded-full bg-sys-accent -left-[29px] top-1.5 ring-4 ring-sys-muted"></div>
<span className="font-mono text-xs text-sys-accent font-semibold">03</span>
<p className="font-display text-base font-medium text-sys-black leading-snug">Generate CV otomatis untuk tiap target yang kamu pilih.</p>
</div>
<div className="relative flex flex-col gap-2">
<div className="absolute w-2 h-2 rounded-full bg-sys-accent -left-[29px] top-1.5 ring-4 ring-sys-muted"></div>
<span className="font-mono text-xs text-sys-accent font-semibold">04</span>
<p className="font-display text-base font-medium text-sys-black leading-snug">Buat LinkedIn, Cover Letter, dan Portfolio.</p>
</div>
<div className="relative flex flex-col gap-2">
<div className="absolute w-3 h-3 rounded-full bg-sys-accent -left-[29.5px] top-1.5 ring-4 ring-sys-muted"></div>
<span className="font-mono text-xs text-sys-accent font-semibold">05</span>
<p className="font-display text-base font-semibold text-sys-black leading-snug">Kirim lamaran hari ini.</p>
</div>
</div>

<div className="w-full aspect-video bg-[#D9D5CD] border border-[#C5C0B5] flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-grid-light opacity-50"></div>
<div className="flex flex-col items-center gap-3 z-10">
<iconify-icon className="text-4xl text-sys-black/40" icon="solar:play-circle-linear"></iconify-icon>
<span className="font-mono text-xs text-sys-black/40 uppercase tracking-widest">System Preview</span>
</div>
</div>
</div>
</section>

<section className="bg-sys-dark bg-grid-dark px-5 py-20 md:py-24 border-b border-[#222]">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
<div className="flex flex-col gap-4">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter-custom text-sys-neutral">
            Sekali Beli, Kamu Dapet Semuanya
          </h2>
<h3 className="font-body text-base text-sys-neutral/70">
            Bukan satu CV generik untuk semua posisi. Ini sistem lamaran yang bekerja per target.
          </h3>
</div>
<div className="flex flex-col gap-0 border-t border-[#222]">
<div className="flex items-center gap-4 py-4 border-b border-[#222] group hover:bg-[#111] transition-colors pl-2">
<div className="w-1 h-full bg-sys-accent hidden group-hover:block absolute left-0"></div>
<p className="font-body text-sm md:text-base text-sys-neutral">5 CV otomatis, masing-masing disesuaikan per target pekerjaan.</p>
</div>
<div className="flex items-center gap-4 py-4 border-b border-[#222] group hover:bg-[#111] transition-colors pl-2 relative">
<div className="w-1 h-full bg-sys-accent hidden group-hover:block absolute left-0"></div>
<p className="font-body text-sm md:text-base text-sys-neutral">Unlimited Portfolio dan optimasi profil LinkedIn.</p>
</div>
<div className="flex items-center gap-4 py-4 border-b border-[#222] group hover:bg-[#111] transition-colors pl-2 relative">
<div className="w-1 h-full bg-sys-accent hidden group-hover:block absolute left-0"></div>
<p className="font-body text-sm md:text-base text-sys-neutral">Cover Letter relevan per posisi.</p>
</div>
<div className="flex items-center gap-4 py-4 border-b border-[#222] group hover:bg-[#111] transition-colors pl-2 relative">
<div className="w-1 h-full bg-sys-accent hidden group-hover:block absolute left-0"></div>
<p className="font-body text-sm md:text-base text-sys-neutral"><span className="text-sys-accent font-semibold mr-2">BONUS:</span>Interview Preparation Kit, dari persiapan sampai dapat offer.</p>
</div>
<div className="flex items-center gap-4 py-4 border-b border-[#222] group hover:bg-[#111] transition-colors pl-2 relative">
<div className="w-1 h-full bg-sys-accent hidden group-hover:block absolute left-0"></div>
<p className="font-body text-sm md:text-base text-sys-neutral"><span className="text-sys-accent font-semibold mr-2">BONUS:</span>Support Group, tanya apa saja kapan saja.</p>
</div>
<div className="flex items-center gap-4 py-4 border-b border-[#222] group hover:bg-[#111] transition-colors pl-2 relative">
<div className="w-1 h-full bg-sys-accent hidden group-hover:block absolute left-0"></div>
<p className="font-body text-sm md:text-base text-sys-neutral"><span className="text-sys-accent font-semibold mr-2">BONUS:</span>Job Matching Score, cek kecocokan CV sebelum kirim.</p>
</div>
</div>

<div className="mt-8 flex flex-col gap-4 p-6 bg-[#111] border border-[#333]">
<span className="font-display text-4xl md:text-5xl font-semibold tracking-tighter-custom text-sys-neutral">70%</span>
<div className="w-full h-1 bg-[#222]">
<div className="h-full bg-sys-accent w-[70%]"></div>
</div>
<p className="font-body text-sm text-sys-neutral/80 uppercase tracking-wide">
            70% user mendapat panggilan interview dalam 2 minggu.
          </p>
</div>
<div className="w-full mt-4">
<a className="btn-terminal w-full" href="#launch">Dapatkan Semuanya</a>
</div>
</div>
</section>

<section className="bg-sys-neutral px-5 py-20 md:py-24 border-b border-[#d1cdcd]">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-10">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter-custom text-sys-black pr-8">
          Opsi Lain Sudah Ada di Kepalamu. Ini Faktanya.
        </h2>
<div className="flex flex-col gap-4 w-full">

<div className="flex flex-col border border-[#d1cdcd] p-5 gap-3 bg-white">
<div className="flex justify-between items-center border-b border-[#efefef] pb-2">
<span className="font-mono text-xs font-semibold uppercase text-sys-black/60 tracking-widest">Opsi 01</span>
<iconify-icon className="text-lg text-[#888]" icon="solar:close-circle-linear"></iconify-icon>
</div>
<p className="font-body text-sm text-sys-black leading-relaxed">
<span className="font-semibold text-sys-black block mb-1">Template gratis:</span> 
              satu CV generik, tidak tepat per posisi, prosesnya makan waktu.
            </p>
</div>
<div className="flex flex-col border border-[#d1cdcd] p-5 gap-3 bg-white">
<div className="flex justify-between items-center border-b border-[#efefef] pb-2">
<span className="font-mono text-xs font-semibold uppercase text-sys-black/60 tracking-widest">Opsi 02</span>
<iconify-icon className="text-lg text-[#888]" icon="solar:close-circle-linear"></iconify-icon>
</div>
<p className="font-body text-sm text-sys-black leading-relaxed">
<span className="font-semibold text-sys-black block mb-1">Joki CV:</span> 
              hasilnya tidak bisa ditweak, rawan asal apply ke mana-mana.
            </p>
</div>
<div className="flex flex-col border border-[#d1cdcd] p-5 gap-3 bg-white">
<div className="flex justify-between items-center border-b border-[#efefef] pb-2">
<span className="font-mono text-xs font-semibold uppercase text-sys-black/60 tracking-widest">Opsi 03</span>
<iconify-icon className="text-lg text-[#888]" icon="solar:close-circle-linear"></iconify-icon>
</div>
<p className="font-body text-sm text-sys-black leading-relaxed">
<span className="font-semibold text-sys-black block mb-1">Tunggu sampai siap:</span> 
              kamu tidak akan siap sampai ada sistem yang membuat kamu siap.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-sys-muted bg-grid-light px-5 py-20 md:py-24 border-b border-[#d1cdcd]">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-10">
<div className="flex flex-col gap-4">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter-custom text-sys-black">
            Harga Naik Setiap 10 Pembeli. Bukan Countdown Palsu.
          </h2>
<h3 className="font-body text-base text-sys-black/70">
            Slot ke-100 sampai ke-110: Rp147.000. Setelah itu, naik Rp25.000.
          </h3>
</div>
<div className="bg-sys-black p-6 md:p-8 flex flex-col gap-8 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-grid-dark opacity-30"></div>
<div className="relative z-10 flex flex-col gap-2">
<div className="flex justify-between items-end mb-2">
<span className="font-mono text-xs text-sys-neutral/50 uppercase tracking-widest">Current Batch Progress</span>
<span className="font-display text-3xl font-semibold text-sys-neutral">8/10</span>
</div>
<div className="w-full h-2 bg-[#222]">
<div className="h-full bg-sys-accent w-[80%] animate-pulse"></div>
</div>
</div>
<div className="relative z-10 flex flex-col items-center justify-center gap-1 py-4 border-y border-[#333]">
<div className="font-mono text-3xl md:text-4xl font-semibold text-sys-accent tracking-widest flex gap-2" id="countdown-timer">
<span>00</span><span className="text-[#444]">:</span><span>00</span><span className="text-[#444]">:</span><span>00</span><span className="text-[#444]">:</span><span>00</span>
</div>
<span className="font-mono text-[10px] text-sys-neutral/40 uppercase tracking-widest mt-1">D : H : M : S</span>
</div>
<div className="relative z-10 flex items-end gap-4 justify-start">
<span className="font-display text-4xl md:text-5xl font-semibold text-sys-neutral">Rp147.000</span>
<span className="font-body text-lg text-sys-neutral/40 line-through pb-1">Rp589.000</span>
</div>
<p className="relative z-10 font-body text-sm text-sys-neutral/70 border-l-2 border-sys-accent pl-3">
            Mekanismenya transparan. Setiap 10 pembeli berikutnya, harga naik otomatis. Tidak ada timer buatan. Hanya slot yang berkurang nyata.
          </p>
<div className="relative z-10 w-full mt-2">
<a className="btn-terminal btn-terminal-solid w-full animate-glow-pulse" href="#launch">Beli Sekarang di Rp147.000</a>
</div>
</div>
</div>
</section>

<section className="bg-sys-dark bg-grid-dark px-5 py-20 md:py-24 border-b border-[#222]">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
<div className="flex flex-col gap-2 border-b border-[#333] pb-6">
<h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tighter-custom text-sys-neutral">
            Pertanyaan Sudah Diantisipasi.
          </h2>
<p className="font-mono text-xs text-sys-accent uppercase tracking-widest">
            Sistem ini sudah tahu apa yang kamu tanyakan sebelum kamu mengetiknya.
          </p>
</div>
<div className="flex flex-col gap-0 w-full">

<div className="faq-item border-b border-[#222] w-full">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left group">
<span className="font-display text-sm font-semibold text-sys-neutral flex items-center gap-3">
<span className="text-sys-accent font-mono">&gt;</span> Bukannya bisa pakai template gratis?
              </span>
<span className="font-mono text-sys-neutral/40 group-hover:text-sys-accent transition-colors">+</span>
</button>
<div className="faq-answer">
<div className="faq-inner pb-5 pl-5 pr-4">
<p className="font-body text-sm text-sys-neutral/70 leading-relaxed">
                  Template gratis hanya memberi desain, bukan strategi. Kamu tetap harus menyusun isi sendiri yang rawan tidak sesuai standar ATS, prosesnya memakan waktu lama, dan hasilnya adalah satu CV generik yang tidak spesifik menargetkan posisi incaranmu.
                </p>
</div>
</div>
</div>

<div className="faq-item border-b border-[#222] w-full">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left group">
<span className="font-display text-sm font-semibold text-sys-neutral flex items-center gap-3">
<span className="text-sys-accent font-mono">&gt;</span> Kalau pakai joki CV bisa kan?
              </span>
<span className="font-mono text-sys-neutral/40 group-hover:text-sys-accent transition-colors">+</span>
</button>
<div className="faq-answer">
<div className="faq-inner pb-5 pl-5 pr-4">
<p className="font-body text-sm text-sys-neutral/70 leading-relaxed">
                  Bisa, tapi kamu kehilangan kendali. CV hasil joki bersifat kaku, sulit kamu ubah sendiri jika sewaktu-waktu target posisimu berubah, harganya jauh lebih mahal, dan seringkali mendorong kebiasaan buruk asal apply ke banyak lowongan tanpa penyesuaian.
                </p>
</div>
</div>
</div>

<div className="faq-item border-b border-[#222] w-full">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left group">
<span className="font-display text-sm font-semibold text-sys-neutral flex items-center gap-3">
<span className="text-sys-accent font-mono">&gt;</span> Bagaimana kalau hasilnya tidak sesuai?
              </span>
<span className="font-mono text-sys-neutral/40 group-hover:text-sys-accent transition-colors">+</span>
</button>
<div className="faq-answer">
<div className="faq-inner pb-5 pl-5 pr-4">
<p className="font-body text-sm text-sys-neutral/70 leading-relaxed">
                  Sistem ini tidak mengenal kegagalan permanen. Meskipun tidak ada refund, kamu diberikan akses regenerasi dokumen tanpa batas. Kamu bebas mengulangi prosesnya, mengubah input data, dan men-generate ulang CV sampai hasilnya 100% sesuai dengan yang kamu harapkan.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-sys-dark bg-grid-dark px-5 py-24 md:py-32 min-h-[80vh] flex flex-col justify-center relative border-b-8 border-sys-accent" id="launch">
<div className="w-full max-w-3xl mx-auto flex flex-col gap-10 relative z-10">
<div className="flex flex-col gap-2">
<span className="font-mono text-xs text-sys-accent uppercase tracking-widest mb-2">Final Execution</span>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter-custom leading-[1.1] text-sys-neutral">
            Semua Dokumen Siap Hari Ini. Tinggal Kamu yang Mulai.
          </h2>
<h3 className="font-body text-lg md:text-xl text-sys-neutral/80 mt-2">
            Rp147.000 sebelum slot ini penuh dan harga naik.
          </h3>
</div>
<div className="bg-[#111] p-6 border border-[#222] flex flex-col gap-4">
<p className="font-mono text-xs text-sys-neutral/50 uppercase tracking-widest border-b border-[#222] pb-2 mb-2">Output Manifest</p>
<ul className="flex flex-col gap-3">
<li className="flex items-start gap-3">
<div className="w-2 h-2 bg-sys-accent mt-1.5 shrink-0"></div>
<p className="font-body text-sm text-sys-neutral leading-relaxed">Yang kamu dapat: 5 CV per target. Unlimited Portfolio. Unlimited LinkedIn. Cover Letter. Interview Preparation Kit. Support Group. Job Matching Score.</p>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 bg-sys-accent mt-1.5 shrink-0"></div>
<p className="font-body text-sm text-sys-neutral leading-relaxed">Regenerasi tanpa batas sampai hasilnya sesuai.</p>
</li>
</ul>
</div>
<div className="flex flex-col gap-4 mt-4">
<div className="flex justify-between items-end mb-1">
<span className="font-mono text-[10px] text-sys-neutral/40 uppercase tracking-widest">Slot Status</span>
<span className="font-mono text-xs text-sys-accent">Critical</span>
</div>
<div className="w-full h-1 bg-[#222]">
<div className="h-full bg-sys-accent w-[90%]"></div>
</div>
<div className="mt-4">
<a className="btn-terminal btn-terminal-solid w-full text-base py-5 animate-glow-pulse" href="#">
              Mulai Sekarang, Rp147.000
            </a>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full bg-sys-dark/95 backdrop-blur-md p-4 border-t border-[#222] z-50 transform translate-y-full transition-transform duration-500 ease-out-expo flex flex-col items-center justify-center" id="sticky-cta">
<div className="w-full max-w-3xl mx-auto flex items-center justify-between gap-4">
<div className="hidden sm:flex flex-col">
<span className="font-display text-lg font-semibold text-sys-neutral">Rp147.000</span>
<span className="font-mono text-[10px] text-sys-accent uppercase tracking-widest">Slot hampir penuh</span>
</div>
<a className="btn-terminal btn-terminal-solid w-full sm:w-auto sm:min-w-[200px] text-sm py-3 h-auto min-h-[44px]" href="#launch">
        Mulai Sekarang
      </a>
</div>
</div>


    </>
  );
}
