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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
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
      
<div className="min-h-screen">

<header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-800">
<i className="h-4 w-4 text-slate-300" data-lucide="line-chart"></i>
</div>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100">2026 Yılı Yatırım Planlaması</h1>
</div>
<div className="hidden md:flex items-center gap-3 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>2026</span>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-8">

<section className="mb-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
<i className="h-4 w-4" data-lucide="target"></i>
<span>Yıllık Yatırım</span>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-100">4.800$</div>
<div className="text-xs text-slate-400">Aylık 400$ x 12</div>
</div>
<div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
<i className="h-4 w-4" data-lucide="coins"></i>
<span>Kur (USD → TL)</span>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-100">41,28 TL</div>
<div className="text-xs text-slate-400">Sabit varsayım</div>
</div>
<div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
<i className="h-4 w-4" data-lucide="piggy-bank"></i>
<span>Yıllık Toplam (TL)</span>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-100">198.144 TL</div>
<div className="text-xs text-slate-400">16.512 TL x 12</div>
</div>
</div>
</section>

<section className="mb-8">
<div className="rounded-2xl bg-slate-900/50 ring-1 ring-slate-800 overflow-hidden">
<div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-300" data-lucide="table"></i>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-100">2026 Aylık Yatırım Planı</h2>
</div>
<div className="text-xs text-slate-400">Yatırım (USD) ve TL karşılığı</div>
</div>
<div className="px-5 py-2">
<div className="w-full overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-slate-300">
<tr className="border-b border-slate-800/80">
<th className="text-left py-3 font-medium">Ay</th>
<th className="text-left py-3 font-medium">Yatırım (USD)</th>
<th className="text-left py-3 font-medium">Karşılık (TL)</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/60">
<tr>
<td className="py-3">Ocak</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Şubat</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Mart</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Nisan</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Mayıs</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Haziran</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Temmuz</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Ağustos</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Eylül</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Ekim</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Kasım</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
<tr>
<td className="py-3">Aralık</td>
<td className="py-3">400$</td>
<td className="py-3">16.512 TL</td>
</tr>
</tbody>
<tfoot>
<tr className="border-t border-slate-800/80">
<td className="py-3 font-medium text-slate-100">Toplam</td>
<td className="py-3 font-medium text-slate-100">4.800$</td>
<td className="py-3 font-medium text-slate-100">198.144 TL</td>
</tr>
</tfoot>
</table>
</div>
</div>
</div>
</section>

<section className="mb-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="flex items-center gap-2 text-slate-300 text-xs mb-2">
<i className="h-4 w-4" data-lucide="banknote"></i>
<span>Eurobond Alımı (950$ / adet)</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Toplam Biriken USD</span>
<span className="text-slate-100 font-medium">4.800$</span>
</div>
<div className="flex items-center justify-between text-sm mt-1">
<span className="text-slate-400">Alınabilecek Adet</span>
<span className="text-slate-100 font-semibold">5 adet</span>
</div>
<div className="flex items-center justify-between text-sm mt-1">
<span className="text-slate-400">Eurobond Tutarı</span>
<span className="text-slate-100 font-medium">4.750$</span>
</div>
<div className="flex items-center justify-between text-sm mt-1">
<span className="text-slate-400">Artan USD</span>
<span className="text-amber-300 font-medium">50$</span>
</div>
</div>
<div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="flex items-center gap-2 text-slate-300 text-xs mb-2">
<i className="h-4 w-4" data-lucide="badge-dollar-sign"></i>
<span>Kupon Geliri (66,25$ / adet / yıl)</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Eurobond Adedi</span>
<span className="text-slate-100 font-medium">5</span>
</div>
<div className="flex items-center justify-between text-sm mt-1">
<span className="text-slate-400">Yıllık Kupon Toplamı</span>
<span className="text-emerald-300 font-semibold">331,25$</span>
</div>
</div>
<div className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="flex items-center gap-2 text-slate-300 text-xs mb-2">
<i className="h-4 w-4" data-lucide="wallet"></i>
<span>2026 Yılı Pasif Gelir Projeksiyonu</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Mevcut Yıllık Pasif Gelir</span>
<span className="text-slate-100 font-medium">1.300$</span>
</div>
<div className="flex items-center justify-between text-sm mt-1">
<span className="text-slate-400">Eurobond Kuponu (Yeni)</span>
<span className="text-emerald-300 font-medium">331,25$</span>
</div>
<div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
<span className="text-slate-300 text-sm">2026 Toplam Pasif Gelir</span>
<span className="text-slate-100 text-lg font-semibold tracking-tight">1.631,25$</span>
</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="rounded-2xl bg-slate-900/50 ring-1 ring-slate-800 p-5">
<div className="flex items-center gap-2 mb-3">
<i className="h-4 w-4 text-slate-300" data-lucide="info"></i>
<h3 className="text-base md:text-lg font-semibold tracking-tight text-slate-100">Özet Hedefler</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="text-xs text-slate-400 mb-1">Hedeflenen Portföy Toplamı</div>
<div className="text-lg font-semibold tracking-tight text-slate-100">35.000$</div>
</div>
<div className="rounded-lg bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="text-xs text-slate-400 mb-1">Mevcut Yıllık Pasif Gelir</div>
<div className="text-lg font-semibold tracking-tight text-slate-100">1.300$</div>
</div>
<div className="rounded-lg bg-slate-900/60 ring-1 ring-slate-800 p-4">
<div className="text-xs text-slate-400 mb-1">Hedeflenen Yıllık Pasif Gelir</div>
<div className="text-lg font-semibold tracking-tight text-slate-100">2.000$</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-800 mt-10">
<div className="max-w-7xl mx-auto px-6 py-6 text-xs text-slate-500">
          Bu doküman 2026 yılı yatırım planı için hazırlanmıştır.
        </div>
</footer>
</div>


    </>
  );
}
