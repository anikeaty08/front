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
primary: '#0F172A',
secondary: '#334155',
accent: '#64748B',
neutral: '#FFFFFF',
muted: '#F8FAFC',
darkbg: '#020617',
darkcard: '#0F172A'
},
fontFamily: {
display: ['Fraunces', 'serif'],
body: ['Plus Jakarta Sans', 'sans-serif'],
},
fontSize: {
'2xs': '0.65rem',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<main>

<section className="relative w-full bg-muted px-5 py-20 md:py-32 overflow-hidden" id="section-1">

<div className="absolute inset-0 bg-grid-pattern z-0"></div>
<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] z-0"></div>
<div className="mx-auto max-w-6xl relative z-10">

<div className="mb-16 md:mb-24 flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tighter text-primary">TLC.</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start fade-up-stagger">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<span className="flex w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-secondary tracking-wide uppercase">Tersedia Sekarang</span>
</div>
<h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter mb-6 max-w-2xl text-gradient pb-2">
              Produkmu udah jadi. Tapi bingung next stepnya gimana?
            </h1>
<p className="font-display text-xl md:text-2xl text-accent mb-8">
              begitu rasanya, kan?
            </p>
<div className="space-y-6 text-base md:text-lg text-secondary leading-relaxed max-w-xl mb-12">
<p>
                Padahal bukan soal siap. Kamu cuma gak tau harus mulai dari mana.
              </p>
<p>
                The Launch Checklist kasih kamu urutan yang jelas: <strong className="font-medium text-primary">47 langkah, dibagi 4 fase</strong>, dari hari pertama sampai seminggu setelah launch. Tinggal duplicate Notion-nya, ikutin urutannya, selesai.
              </p>
</div>
<a className="group relative inline-flex items-center justify-center rounded-full bg-primary text-white font-medium text-base px-8 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 active:scale-95 w-full sm:w-auto" href="#payment-hook">
<span>Download Sekarang — Rp 49.000</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<div className="mt-6 flex items-center gap-4 text-xs text-accent">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Notion Template</span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span>5 Email Sequence</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative w-full mt-8 lg:mt-0 lg:pl-8">

<div className="glass-panel rounded-2xl p-2 animate-float mx-auto max-w-sm w-full relative z-10 transition-transform duration-500 hover:scale-[1.02]">
<div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">

<div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="mx-auto flex items-center gap-1.5 text-xs text-accent font-medium">
<iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon>
                    The Launch Checklist
                  </div>
<div className="w-10"></div> 
</div>

<div className="p-5 md:p-6 space-y-5">
<div className="space-y-2">
<div className="h-5 w-3/4 bg-slate-100 rounded"></div>
<div className="h-3 w-1/3 bg-slate-50 rounded"></div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="space-y-4 text-sm text-secondary">

<div className="flex items-start gap-3 check-wrap cursor-pointer transition-colors">
<div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded border border-primary bg-primary flex items-center justify-center transition-colors">
<iconify-icon className="text-white" icon="solar:check-linear" width="12"></iconify-icon>
</div>
<span className="line-through decoration-accent/40 text-accent">Day 1: Set up payment gateway</span>
</div>
<div className="flex items-start gap-3 check-wrap cursor-pointer transition-colors">
<div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded border border-slate-300 check-box transition-colors"></div>
<span>Day 2: Draft pre-launch teaser</span>
</div>
<div className="flex items-start gap-3 check-wrap cursor-pointer transition-colors">
<div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded border border-slate-300 check-box transition-colors"></div>
<span>Day 3: Finalize sales page copy</span>
</div>
<div className="flex items-start gap-3 check-wrap cursor-pointer transition-colors">
<div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded border border-slate-300 check-box transition-colors"></div>
<span>Day 4: Schedule social posts</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100/60 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-white px-5 py-24 md:py-32 border-y border-slate-100 overflow-hidden" id="section-2">
<div className="mx-auto max-w-[65ch] w-full relative z-10 flex flex-col items-start fade-up-stagger">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 text-primary shadow-sm">
<iconify-icon icon="solar:hourglass-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="font-display font-semibold text-3xl md:text-4xl text-primary leading-tight tracking-tighter mb-8">
          Produkmu udah jadi 3 bulan. <br className="hidden sm:block"/>Kapan mau dijual?
        </h2>
<div className="space-y-6 text-base md:text-lg text-secondary leading-relaxed">
<p>
            Bukan karena kamu malas. Bukan karena produknya kurang bagus.
          </p>
<p>
            Tapi tiap kali mau mulai, selalu ada yang bikin berhenti. Tulisannya belum sempurna. Email belum siap. Caption belum ada. Akhirnya ditunda lagi.
          </p>
<p className="text-xl md:text-2xl font-display text-primary mt-8 mb-4">
<span className="italic text-accent mr-1">Tiga bulan berlalu.</span> Produknya masih duduk manis di folder laptop.
          </p>

<div className="relative pl-6 py-2 mt-8">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent rounded-full"></div>
<p className="text-secondary/80 text-sm md:text-base leading-relaxed">
              Checklist ini bukan sekadar motivasi. Ini <strong className="font-medium text-primary">sistem yang terukur</strong>. Kamu tinggal ikutin urutannya, dan launching jadi sesuatu yang bisa kamu selesaikan, bukan sesuatu yang terus kamu tunda.
            </p>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-darkbg px-5 py-24 md:py-32 overflow-hidden" id="section-3">

<div className="absolute inset-0 bg-grid-pattern-dark z-0 opacity-20"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
<div className="mx-auto max-w-4xl relative z-10 fade-up-stagger">

<div className="dark-glass-panel rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden group">
<div className="flex flex-col items-start max-w-2xl relative z-10">
<h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-neutral leading-tight tracking-tighter mb-4 text-gradient-light">
              Satu harga. Semua yang kamu butuhkan buat launching.
            </h2>
<p className="font-body text-base md:text-lg text-accent mb-12 flex items-center gap-2">
<iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon>
              Rp 49.000, sekali bayar, langsung bisa dipakai.
            </p>
<div className="w-full space-y-10 mb-12">

<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-medium text-sm">1</div>
<div>
<h4 className="text-white font-medium mb-2">The Launch Checklist</h4>
<p className="font-body text-accent text-sm md:text-base leading-relaxed">
                    47 checkpoint dalam 4 fase (Persiapan, Pre-Launch Hype, Launch Day SOP, Post-Launch Review) sebagai Notion template, duplicate langsung.
                  </p>

<div className="mt-6 bg-white/[0.03] rounded-xl p-5 border border-white/10 shadow-inner">
<div className="space-y-3 font-mono text-xs md:text-sm text-accent">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="line-through opacity-50">Fase 1: Setup Product</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:circle-linear" width="18"></iconify-icon>
<span className="text-slate-300">Fase 2: Pre-Launch Hype</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:circle-linear" width="18"></iconify-icon>
<span className="text-slate-300">Fase 3: Launch Day SOP</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full border-t border-white/10"></div>

<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 font-medium text-sm">2</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h4 className="text-white font-medium">Email Sequence</h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">Bonus</span>
</div>
<p className="font-body text-accent text-sm md:text-base leading-relaxed">
                    5 template email, dari teaser sampai last-call, tinggal isi nama dan detail produk.
                  </p>
</div>
</div>
<div className="w-full border-t border-white/10"></div>
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 font-medium text-sm">3</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h4 className="text-white font-medium">Caption Launch Pack</h4>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">Bonus</span>
</div>
<p className="font-body text-accent text-sm md:text-base leading-relaxed">
                    10 caption Instagram dan Twitter/X siap pakai. Tinggal copy-paste.
                  </p>
</div>
</div>
</div>

<div className="w-full bg-white/[0.02] rounded-xl p-5 md:p-6 mb-8 border border-white/10 flex flex-col sm:flex-row items-center sm:justify-between gap-4 transition-colors hover:bg-white/[0.04]">
<div className="flex items-center gap-3 text-accent text-sm md:text-base text-center sm:text-left">
<iconify-icon className="text-slate-400 hidden sm:block" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span>Garansi 7 hari uang kembali, tanpa syarat.</span>
</div>
<span className="font-display font-semibold text-3xl text-white tracking-tight">
                 Rp 49.000
               </span>
</div>

<div className="w-full">
<a className="group relative flex w-full items-center justify-center rounded-xl bg-white text-darkbg font-medium text-base px-8 py-5 transition-all hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#payment-hook">
<span>Download Sekarang</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-primary px-5 py-24 md:py-32 lg:py-40 overflow-hidden text-center flex flex-col items-center" id="section-4">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-slate-700/30 rounded-full blur-[100px]"></div>
</div>
<div className="mx-auto max-w-3xl relative z-10 flex flex-col items-center fade-up-stagger">
<h2 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tighter mb-6 text-gradient-light pb-2">
          Kamu udah nunda cukup lama.
        </h2>
<h3 className="font-body text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
<strong className="text-white font-medium">Rp 49.000</strong> buat ngilangin alasan terakhir kamu buat gak launching.
        </h3>
<div className="space-y-4 text-base md:text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed">
<p>
            Produknya udah ada. Checklistnya udah ada. Yang belum ada cuma kamu yang klik download. Duplicate Notion-nya hari ini, dan fase pertama bisa selesai sebelum tidur malam ini.
          </p>
</div>
<div className="w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center rounded-full bg-white text-primary font-medium text-base md:text-lg px-10 py-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95" href="#payment-hook">
<span>Download The Launch Checklist</span>
<iconify-icon className="ml-2 transition-transform group-hover:-translate-y-0.5" icon="solar:download-square-linear" width="22"></iconify-icon>
</a>
</div>
<p className="mt-6 text-xs text-slate-500 flex items-center gap-1.5">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
          Secure payment &amp; Instant access
        </p>
</div>
</section>
</main>

    </>
  );
}
