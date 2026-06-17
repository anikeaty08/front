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
      
<div className="max-w-3xl w-full mx-auto space-y-12">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-8">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs tracking-tighter font-semibold rounded">NM</div>
<span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Internal Report</span>
</div>
<div>
<h1 className="text-3xl font-medium tracking-tight text-black">Auflistung verschwundene Ladekabel</h1>
<p className="text-zinc-500 mt-2 text-sm font-light">Dokumentation über verlorene Hardware im Novu Campus.</p>
</div>
</div>
<div className="text-right flex flex-col items-start md:items-end gap-1">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600">
<span className="iconify" data-icon="lucide:calendar-range" data-strokeWidth="1.5" data-width="12"></span>
                    6. - 16. Januar 2026
                </span>
<span className="text-xs text-zinc-400 mt-1">Erstellt: 18. Januar 2026</span>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 border border-zinc-100 rounded-lg bg-zinc-50/50">
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-2">Firma</div>
<div className="text-lg font-medium tracking-tight">Nestermind AG</div>
</div>
<div className="p-6 border border-zinc-100 rounded-lg bg-zinc-50/50">
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-2">Gesamtwert</div>
<div className="text-lg font-medium tracking-tight">CHF 132.90</div>
</div>
<div className="p-6 border border-zinc-100 rounded-lg bg-zinc-50/50">
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-2">Anzahl Artikel</div>
<div className="text-lg font-medium tracking-tight text-red-600 flex items-center gap-2">
                    3 Einheiten
                    <span className="iconify" data-icon="lucide:alert-circle" data-strokeWidth="1.5" data-width="16"></span>
</div>
</div>
</section>

<section className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-8">
<div className="absolute top-0 left-0 w-1 h-full bg-zinc-900"></div>
<h3 className="text-lg font-medium tracking-tight mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
                Umstände des Verlusts
            </h3>
<ul className="space-y-3 text-sm text-zinc-600 font-light leading-relaxed">
<li className="flex gap-3 items-start">
<span className="iconify mt-0.5 text-zinc-400" data-icon="lucide:corner-down-right" data-strokeWidth="1.5" data-width="16"></span>
<span>Unter anderem wurden Kabelwannen unter den Pulten <strong>gezielt geöffnet</strong>, in denen Kabel versteckt waren.</span>
</li>
<li className="flex gap-3 items-start">
<span className="iconify mt-0.5 text-zinc-400" data-icon="lucide:corner-down-right" data-strokeWidth="1.5" data-width="16"></span>
<span>Die beiden anderen Kabel lagen frei auf den Pulten.</span>
</li>
<li className="flex gap-3 items-start">
<span className="iconify mt-0.5 text-zinc-400" data-icon="lucide:corner-down-right" data-strokeWidth="1.5" data-width="16"></span>
<span>Es besteht ein zeitlicher Zusammenhang mit Bauarbeiten im Novu Campus am letzten Wochenende.</span>
</li>
</ul>
</section>

<section>
<h2 className="text-xl font-medium tracking-tight mb-6">Details der verschwundenen Artikel</h2>
<div className="grid grid-cols-1 gap-4">

<div className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-colors bg-white hover:shadow-sm">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<span className="iconify text-zinc-400" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-medium text-zinc-900 text-sm">Apple 96W USB-C Power Adapter</h3>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-1.5 py-0.5 rounded">MW2L3ZM/A</span>
</div>
<p className="text-xs text-zinc-500 mb-2">96 W Notebook Netzteil für MacBook Pro</p>
<a className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="https://www.digitec.ch/de/s1/product/apple-96w-usb-c-power-adapter-96-w-notebook-netzteil-45054472" target="_blank">
                                digitec.ch Link <span className="iconify" data-icon="lucide:external-link" data-width="10"></span>
</a>
</div>
</div>
<div className="mt-4 md:mt-0 text-right shrink-0">
<div className="text-sm font-medium">CHF 68.90</div>
<div className="text-xs text-zinc-400">1 Stück</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-colors bg-white hover:shadow-sm">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<span className="iconify text-zinc-400" data-icon="lucide:cable" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-medium text-zinc-900 text-sm">Apple USB-C zu USB-C Kabel</h3>
</div>
<p className="text-xs text-zinc-500 mb-2">1.50 m, USB 2.0, 60 W</p>
<a className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="https://www.digitec.ch/de/s1/product/apple-usb-c-usb-c-150-m-usb-20-60-w-usb-kabel-56549412" target="_blank">
                                digitec.ch Link <span className="iconify" data-icon="lucide:external-link" data-width="10"></span>
</a>
</div>
</div>
<div className="mt-4 md:mt-0 text-right shrink-0">
<div className="text-sm font-medium">CHF 43.40</div>
<div className="text-xs text-zinc-400">2 Stück à CHF 21.70</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-colors bg-white hover:shadow-sm">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
<span className="iconify text-zinc-400" data-icon="lucide:plug-zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-medium text-zinc-900 text-sm">Apple 20W USB-C Power Adapter</h3>
</div>
<p className="text-xs text-zinc-500 mb-2">20 W USB-C Ladegerät</p>
<a className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="https://www.digitec.ch/de/s1/product/apple-usb-c-power-adapter-20-w-usb-ladegeraet-55620764" target="_blank">
                                digitec.ch Link <span className="iconify" data-icon="lucide:external-link" data-width="10"></span>
</a>
</div>
</div>
<div className="mt-4 md:mt-0 text-right shrink-0">
<div className="text-sm font-medium">CHF 20.60</div>
<div className="text-xs text-zinc-400">1 Stück</div>
</div>
</div>
</div>
</section>

<section className="pt-8">
<h2 className="text-xl font-medium tracking-tight mb-6">Kostenübersicht</h2>
<div className="overflow-hidden rounded-lg border border-zinc-200">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 text-zinc-500 text-xs uppercase tracking-wider font-medium border-b border-zinc-200">
<tr>
<th className="px-6 py-3 font-medium">Position</th>
<th className="px-6 py-3 font-medium text-center w-24">Menge</th>
<th className="px-6 py-3 font-medium text-right w-32">Einzel</th>
<th className="px-6 py-3 font-medium text-right w-32">Gesamt</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 bg-white">
<tr>
<td className="px-6 py-4 font-normal text-zinc-900">Apple 96W USB-C Power Adapter</td>
<td className="px-6 py-4 text-center text-zinc-500 font-light">1x</td>
<td className="px-6 py-4 text-right text-zinc-500 font-light">68.90</td>
<td className="px-6 py-4 text-right font-medium">68.90</td>
</tr>
<tr>
<td className="px-6 py-4 font-normal text-zinc-900">Apple USB-C zu USB-C Kabel (1.5m)</td>
<td className="px-6 py-4 text-center text-zinc-500 font-light">2x</td>
<td className="px-6 py-4 text-right text-zinc-500 font-light">21.70</td>
<td className="px-6 py-4 text-right font-medium">43.40</td>
</tr>
<tr>
<td className="px-6 py-4 font-normal text-zinc-900">Apple 20W USB-C Power Adapter</td>
<td className="px-6 py-4 text-center text-zinc-500 font-light">1x</td>
<td className="px-6 py-4 text-right text-zinc-500 font-light">20.60</td>
<td className="px-6 py-4 text-right font-medium">20.60</td>
</tr>
<tr className="bg-zinc-50/50">
<td className="px-6 py-4 text-right font-medium text-zinc-900" colspan="3">Gesamtbetrag (CHF)</td>
<td className="px-6 py-4 text-right font-semibold text-black text-base">132.90</td>
</tr>
</tbody>
</table>
</div>
</section>

<footer className="pt-12 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-200"></div>
<span className="text-xs text-zinc-400 font-medium tracking-wide">CONFIDENTIAL</span>
</div>
<div className="text-xs text-zinc-500 text-right">
<p>Kontakt: Lucas Pelloni</p>
<a className="hover:text-black transition-colors underline decoration-zinc-200 underline-offset-2" href="mailto:lucas.pelloni@nestermind.com">lucas.pelloni@nestermind.com</a>
</div>
</footer>
</div>

    </>
  );
}
