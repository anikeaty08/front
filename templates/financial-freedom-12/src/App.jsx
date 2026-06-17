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
      
<div className="mx-auto max-w-5xl px-6 py-8 md:py-12">

<header className="flex items-start justify-between gap-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">FÖ</span>
</div>
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Finansal Özgürlük Tablosu</h1>
<p className="text-sm text-white/60">Kişisel plan — 5 parçalı özet ve dağılım</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="print:hidden inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/90 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-colors" onclick="window.print()">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9V2h12v7"></path>
<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
<path d="M6 14h12v8H6z"></path>
</svg>
            Yazdır / PDF
          </button>
</div>
</header>

<div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>

<section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2 rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-5">
<div className="flex items-center gap-2 mb-3">

<svg className="h-4.5 w-4.5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m16 8-4 2-2 4 4-2 2-4z"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-white">Genel Bakış</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Hedef Yıllık Pasif Gelir</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2v4M12 18v4M2 12h4M18 12h4M12 12l3-3"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">$7.000 / yıl</p>
</div>
</div>
<div className="rounded-md bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Zaman (Hedefe Varış Ufku)</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">5 Yıl</p>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-2">Hedefler</div>
<ul className="space-y-2">
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-sm text-white/90">Acil Durum Fonu (1 yıllık asgari ücret değerinde altın)</span>
</li>
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
<path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path>
</svg>
<span className="text-sm text-white/90">Yıllık 7.000 dolarlık temettü geliri</span>
</li>
</ul>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex items-center gap-2 mb-3">

<svg className="h-4.5 w-4.5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-white">Hızlı Özet</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-md bg-white/[0.03] ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Acil Durum Fonu</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
<path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">265.250 TL</p>
</div>
</div>
<div className="rounded-md bg-white/[0.03] ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Temettü Geliri</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11-5 5 5 5"></path>
<path d="M2 16h13a4 4 0 0 0 0-8H6"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">7.000 / yıl</p>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex items-center gap-2 mb-3">

<svg className="h-4.5 w-4.5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6h7M5 6h1m3 0h1M12 12h7M5 12h1m3 0h1M12 18h7M5 18h1m3 0h1"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-white">Ayrıntılı Tablo</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-md bg-white/[0.03] ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Acil Durum Fonu</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M7 12h3M14 12h3M7 7v3M17 7v3M7 14v3M17 14v3"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">265.250 TL</p>
</div>
</div>
<div className="rounded-md bg-white/[0.03] ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Hedeflenen Temettü Geliri</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">7.000 TL / yıl</p>
</div>
</div>
<div className="rounded-md bg-white/[0.03] ring-1 ring-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-white/50 mb-1">Mevcut Pasif Gelir</div>
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5.5a3.5 3.5 0 0 0-3.5-3.5H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7.5A3.5 3.5 0 0 1 4 10.5"></path>
</svg>
<p className="text-base md:text-lg font-medium text-white">1.700 $</p>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex items-center gap-2 mb-3">

<svg className="h-4.5 w-4.5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-white">Mevcut Birikim Dağılımı</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-5">
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Acil Durum Fonu</span>
<span className="font-medium text-white">0 TL</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Yatırım Fonu</span>
<span className="font-medium text-white">20.000 TL</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Temettü Hissesi</span>
<span className="font-medium text-white">550.000 TL</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">BES</span>
<span className="font-medium text-white">40.000 TL</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Eurobond</span>
<span className="font-medium text-white">321.500 TL</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">American ETF</span>
<span className="font-medium text-white">341.500 TL</span>
</div>
<div className="my-3 h-px w-full bg-white/10"></div>
<div className="flex items-center justify-between text-base">
<span className="text-white/80">Toplam Portföy</span>
<span className="font-semibold text-white">1.273.000 TL</span>
</div>
</div>

<div className="mt-5">
<div className="text-xs uppercase tracking-wide text-white/50 mb-2">Portföy Yüzdeleri</div>
<div className="overflow-hidden rounded-md ring-1 ring-white/10">
<table className="w-full text-sm">
<thead className="bg-white/[0.04] text-white/60">
<tr>
<th className="text-left font-medium py-2.5 px-3">Enstrüman</th>
<th className="text-right font-medium py-2.5 px-3">Tutar</th>
<th className="text-right font-medium py-2.5 px-3">Dağılım</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/[0.03]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-emerald-400/80 ring-1 ring-emerald-300/40"></span>
<span>Temettü Hissesi</span>
</div>
</td>
<td className="py-2.5 px-3 text-right">550.000 TL</td>
<td className="py-2.5 px-3 text-right">43,20%</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-sky-400/80 ring-1 ring-sky-300/40"></span>
<span>American ETF</span>
</div>
</td>
<td className="py-2.5 px-3 text-right">341.500 TL</td>
<td className="py-2.5 px-3 text-right">26,83%</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-indigo-400/80 ring-1 ring-indigo-300/40"></span>
<span>Eurobond</span>
</div>
</td>
<td className="py-2.5 px-3 text-right">321.500 TL</td>
<td className="py-2.5 px-3 text-right">25,25%</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-amber-400/80 ring-1 ring-amber-300/40"></span>
<span>BES</span>
</div>
</td>
<td className="py-2.5 px-3 text-right">40.000 TL</td>
<td className="py-2.5 px-3 text-right">3,14%</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-pink-400/80 ring-1 ring-pink-300/40"></span>
<span>Yatırım Fonu</span>
</div>
</td>
<td className="py-2.5 px-3 text-right">20.000 TL</td>
<td className="py-2.5 px-3 text-right">1,57%</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-zinc-500/70 ring-1 ring-white/10"></span>
<span>Acil Durum Fonu</span>
</div>
</td>
<td className="py-2.5 px-3 text-right">0 TL</td>
<td className="py-2.5 px-3 text-right">0,00%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between mb-2">
<div className="text-xs uppercase tracking-wide text-white/50">Pasta Grafik</div>
<div className="text-xs text-white/50">Toplam: 1.273.000 TL</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

<div className="relative mx-auto aspect-square w-48 sm:w-56 md:w-60">
<div className="absolute inset-0 rounded-full" style="background: conic-gradient(
                       rgba(52,211,153,0.9) 0% 43.2%,
                       rgba(56,189,248,0.9) 43.2% 70.03%,
                       rgba(99,102,241,0.9) 70.03% 95.28%,
                       rgba(251,191,36,0.9) 95.28% 98.42%,
                       rgba(244,114,182,0.9) 98.42% 99.99%,
                       rgba(161,161,170,0.6) 99.99% 100%
                     )"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-28 sm:h-32 md:h-36 w-28 sm:w-32 md:w-36 rounded-full bg-[#0b0f17] ring-1 ring-white/10"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="text-xs uppercase tracking-wide text-white/50">Dağılım</div>
<div className="text-lg font-semibold text-white">%100</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-emerald-400/80 ring-1 ring-emerald-300/40"></span>
<span className="text-sm text-white/80">Temettü Hissesi</span>
</div>
<span className="text-sm font-medium text-white">43,20%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-sky-400/80 ring-1 ring-sky-300/40"></span>
<span className="text-sm text-white/80">American ETF</span>
</div>
<span className="text-sm font-medium text-white">26,83%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-indigo-400/80 ring-1 ring-indigo-300/40"></span>
<span className="text-sm text-white/80">Eurobond</span>
</div>
<span className="text-sm font-medium text-white">25,25%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-amber-400/80 ring-1 ring-amber-300/40"></span>
<span className="text-sm text-white/80">BES</span>
</div>
<span className="text-sm font-medium text-white">3,14%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-pink-400/80 ring-1 ring-pink-300/40"></span>
<span className="text-sm text-white/80">Yatırım Fonu</span>
</div>
<span className="text-sm font-medium text-white">1,57%</span>
</div>
<div className="pt-2 border-t border-white/10 flex items-center justify-between">
<span className="text-sm text-white/60">Acil Durum Fonu</span>
<span className="text-sm text-white/60">0,00%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex items-center gap-2 mb-3">

<svg className="h-4.5 w-4.5 text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z"></path>
<path d="M9 3v15M15 6v15"></path>
</svg>
<h2 className="text-xl font-semibold tracking-tight text-white">Yol Haritası (5 Yıl)</h2>
</div>
<div className="rounded-lg bg-white/[0.03] ring-1 ring-white/10 p-5">
<ol className="space-y-3">
<li className="flex gap-3">

<svg className="h-4.5 w-4.5 mt-0.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 17 6-6 4 4 7-7"></path>
<path d="M14 7h7v7"></path>
</svg>
<div className="text-sm text-white/90">
                Düzenli katkı planı oluşturun; temettü ve kupon ödemelerini yeniden yatırarak bileşik getiriyi artırın.
              </div>
</li>
<li className="flex gap-3">

<svg className="h-4.5 w-4.5 mt-0.5 text-sky-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 9 5-9 5L3 7l9-5z"></path>
<path d="m3 17 9 5 9-5"></path>
<path d="m3 12 9 5 9-5"></path>
</svg>
<div className="text-sm text-white/90">
                Hisse, ETF ve Eurobond dengesini koruyarak risk/ödül profilini sürekli izleyin.
              </div>
</li>
<li className="flex gap-3">

<svg className="h-4.5 w-4.5 mt-0.5 text-violet-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2v4M8 2v4M3 10h18"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="m9 16 2 2 4-4"></path>
</svg>
<div className="text-sm text-white/90">
                6-12 ayda bir portföy yeniden dengeleme ve hedeflerle uyum kontrolü yapın.
              </div>
</li>
</ol>
</div>
</section>

<footer className="mt-10 pb-4 text-xs text-white/50">
<div className="h-px w-full bg-white/10 mb-3"></div>
<div className="flex items-center justify-between">
<span>Güncel plan — PDF çıktısı için üstteki butonu kullanın.</span>
<span className="hidden sm:block">© Finansal Özgürlük</span>
</div>
</footer>
</div>

    </>
  );
}
