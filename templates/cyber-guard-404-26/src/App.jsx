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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      

<div className="absolute inset-0">
<div className="absolute -top-32 -left-40 h-[32rem] w-[32rem] rounded-full bg-red-700/40 blur-3xl"></div>
<div className="absolute top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-neutral-900/70 blur-3xl"></div>
<div className="absolute bottom-0 inset-x-0 h-[12rem] bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>

<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#262626_0,_transparent_55%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(120,120,120,0.18)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(120,120,120,0.15)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] mix-blend-soft-light"></div>
</div>

<main className="relative z-10 w-full max-w-5xl px-4 sm:px-6">
<div className="mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between rounded-3xl border border-red-500/25 bg-neutral-900/40 backdrop-blur-2xl shadow-[0_0_120px_rgba(0,0,0,0.85)] ring-1 ring-red-500/10">

<section className="w-full lg:w-1/2 flex flex-col items-start gap-6 px-6 sm:px-10 py-10 sm:py-14 lg:py-16">
<div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-neutral-900/60 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(248,113,113,0.8)]"></span>
<span className="text-[0.74rem] tracking-[0.16em] uppercase text-red-200/80">Guard Mode • Critical</span>
</div>
<div className="flex items-baseline gap-4">
<h1 className="text-[5.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-semibold tracking-tight leading-none bg-gradient-to-br from-neutral-50 via-red-200 to-red-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]">
            404
          </h1>
<div className="flex flex-col gap-1">
<span className="text-sm tracking-[0.22em] uppercase text-red-200/80">Ortat Error</span>
<span className="text-xs text-neutral-300/80">Kayıp rota • Session mismatch</span>
</div>
</div>
<p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed max-w-md">
          Aradığın sayfa <span className="text-red-400">güvenlik gardiyanına takıldı</span> ya da hiç var olmadı.
          Adresi kontrol et ya da ana panele geri dön.
        </p>
<div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-neutral-50 text-sm sm:text-base font-medium tracking-tight px-5 sm:px-6 py-2.5 shadow-[0_20px_60px_rgba(248,113,113,0.45)] hover:shadow-[0_18px_50px_rgba(248,113,113,0.7)] hover:from-red-500 hover:to-red-400 transition">
<span className="iconify" data-height="18" data-icon="lucide:shield-alert" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Ana Panele Dön
          </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-600/70 bg-neutral-900/60 text-neutral-100 text-sm sm:text-base font-medium tracking-tight px-4 sm:px-5 py-2.5 hover:border-red-500/70 hover:bg-neutral-900/90 transition">
<span className="iconify" data-height="18" data-icon="lucide:arrow-left" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Geri Git
          </button>
</div>

<div className="mt-4 grid grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300/80 w-full max-w-md">
<div className="rounded-2xl border border-neutral-700/70 bg-neutral-900/60 px-3 py-2.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] tracking-[0.16em] uppercase text-neutral-400">Hata Kodu</span>
<span className="rounded-full bg-red-500/15 text-[0.65rem] tracking-[0.16em] uppercase text-red-300 px-2 py-0.5">
                Guard-404
              </span>
</div>
<p className="mt-1 text-xs text-neutral-100">Route not registered / shield blocked.</p>
</div>
<div className="rounded-2xl border border-neutral-700/70 bg-neutral-900/60 px-3 py-2.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] tracking-[0.16em] uppercase text-neutral-400">Oturum</span>
<span className="inline-flex items-center gap-1 text-[0.7rem] text-red-300">
<span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.9)]"></span>
                Orta Risk
              </span>
</div>
<p className="mt-1 text-xs text-neutral-100">Kimlik doğrulama yolu doğrulanamadı.</p>
</div>
</div>
</section>

<section className="w-full lg:w-1/2 h-full border-t lg:border-l border-neutral-800/80 bg-gradient-to-br from-neutral-900/50 via-neutral-950/60 to-black/80 rounded-b-3xl lg:rounded-tr-3xl lg:rounded-bl-none flex flex-col overflow-hidden">

<div className="flex items-center justify-between border-b border-neutral-800/80 px-5 sm:px-6 py-3.5 bg-neutral-900/70 backdrop-blur-xl">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/90"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
</div>
<span className="ml-3 text-xs text-neutral-300/90 tracking-[0.14em] uppercase">
              Guard Console • ortat-error.log
            </span>
</div>
<div className="flex items-center gap-2 text-neutral-300/90">
<button className="rounded-full border border-neutral-700/70 bg-neutral-900/60 px-2.5 py-1 text-[0.7rem] flex items-center gap-1 hover:border-red-400/70 hover:text-red-100 transition">
<span className="iconify" data-height="15" data-icon="lucide:bug-play" data-width="15" style={{strokeWidth: '1.5'}}></span>
              Trace
            </button>
<button className="rounded-full border border-neutral-700/70 bg-neutral-900/60 px-2.5 py-1 text-[0.7rem] hover:border-red-400/70 hover:text-red-100 transition">
<span className="iconify" data-height="15" data-icon="lucide:radar" data-width="15" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="relative flex-1 overflow-hidden">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="h-full w-full overflow-y-auto px-5 sm:px-6 py-4 text-xs sm:text-sm font-mono text-red-100/90">
<div className="space-y-2">
<p><span className="text-neutral-500">[00:41:02]</span> <span className="text-red-400">guard</span> › route "<span className="text-red-300">/ortalama/ortat-error</span>" çözümlenemedi.</p>
<p><span className="text-neutral-500">[00:41:02]</span> <span className="text-red-400">guard</span> › policy "<span className="text-red-300">shadow-firewall</span>" isteği engelledi.</p>
<p><span className="text-neutral-500">[00:41:03]</span> <span className="text-amber-300">hint</span>  › Geri dön ya da ana panele yönlen.</p>
</div>
<div className="mt-5 border-t border-dashed border-red-900/60 pt-3 space-y-2">
<p className="text-neutral-300/90">
                • URL: <span className="text-neutral-100">/kırmızı-gardiyan/ortat</span>
</p>
<p className="text-neutral-300/90">
                • İstemci: <span className="text-neutral-100">web-guard-2025</span> • Region: <span className="text-neutral-100">eu-central</span>
</p>
<p className="text-neutral-300/90">
                • Request-ID: <span className="text-red-300">#ORTAT-404-SEC</span>
</p>
</div>
<div className="mt-5 border border-red-500/20 rounded-2xl bg-gradient-to-br from-red-900/20 via-black/60 to-neutral-900/80 px-4 py-3 space-y-1.5">
<div className="flex items-center gap-2 text-xs text-red-100">
<span className="iconify" data-height="16" data-icon="lucide:shield-check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="tracking-[0.16em] uppercase text-[0.7rem]">Ortat Guard Önerisi</span>
</div>
<p className="text-xs sm:text-sm text-neutral-100/95 leading-relaxed">
                Eğer burayı yanlışlıkla gördüysen URL’de yazım hatası olabilir. Eğer sistem sahibiysen,
                bu rota için bir <span className="text-red-300">handler</span> veya yönlendirme ekle.
              </p>
</div>
<div className="mt-4 text-[0.7rem] text-neutral-400/90">
<span className="text-neutral-500">›</span> <span className="text-neutral-300">ENTER</span> ile yeniden dene, <span className="text-neutral-300">ESC</span> ile sesi kapat.
            </div>
</div>
</div>
</section>
</div>

<footer className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-neutral-500/90">
<div className="flex items-center gap-2">
<span className="tracking-[0.24em] uppercase text-neutral-200/80 text-xs">og</span>
<span className="h-3 w-[1px] bg-neutral-700/80"></span>
<span className="text-neutral-400/90">Ortat Guard • Error Surface v2025</span>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center gap-1.5 text-neutral-400/90 hover:text-red-200 transition">
<span className="iconify" data-height="14" data-icon="lucide:terminal" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Stack trace’i göster</span>
</button>
<button className="inline-flex items-center gap-1.5 text-neutral-400/90 hover:text-red-200 transition">
<span className="iconify" data-height="14" data-icon="lucide:book-open-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Hata dokümantasyonu</span>
</button>
</div>
</footer>
</main>



    </>
  );
}
