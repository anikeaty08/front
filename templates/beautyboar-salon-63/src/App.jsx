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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EBE5DA] h-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
<div className="flex justify-between items-center h-full">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold text-[#2D5A27] tracking-tighter" href="#">BeautyBoard</a>
</div>
<div className="flex items-center gap-5">
<button className="relative p-2 text-[#5D554A] hover:text-[#2D5A27] hover:bg-[#F2EFE9] rounded-full transition-all">
<iconify-icon icon="solar:bell-bing-linear" width="22"></iconify-icon>
<span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#FDFBF7]">2</span>
</button>
<div className="flex items-center gap-3 cursor-pointer group">
<span className="text-sm font-medium text-[#2A241E] hidden sm:block group-hover:text-[#2D5A27] transition-colors">Ola</span>
<div className="h-8 w-8 rounded-full bg-[#EBE5DA] text-[#2A241E] flex items-center justify-center text-xs font-semibold overflow-hidden border border-[#D4CCC0]">
<img alt="Ola" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</header>
<main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow space-y-6">

<section className="bg-white rounded-xl border border-[#EBE5DA] shadow-sm p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">

<div className="flex items-center gap-2 text-[#2A241E] font-medium text-sm whitespace-nowrap">
<iconify-icon className="text-[#9CA3AF]" icon="solar:calendar-linear" width="18"></iconify-icon>
                Środa, 18 czerwca 2025
            </div>

<div className="flex-1 w-full max-w-xl lg:px-8 lg:border-x border-[#F2EFE9] py-2 lg:py-0">
<div className="flex justify-between items-end mb-1.5">
<span className="text-xs font-semibold text-[#2A241E] uppercase tracking-wide">Wizyty: 3/8</span>
<span className="text-xs text-[#5D554A] font-medium">37,5%</span>
</div>
<div className="h-2 w-full bg-[#F2EFE9] rounded-full overflow-hidden">
<div className="h-full bg-[#2D5A27] rounded-full" style={{width: '37.5%'}}></div>
</div>
<p className="text-[11px] text-[#9CA3AF] mt-1.5 font-medium">3 zrealizowane · 4 zaplanowane · 1 anulowana</p>
</div>

<div className="flex items-center gap-5 text-xs overflow-x-auto hide-scrollbar shrink-0 pt-2 lg:pt-0">
<div className="flex items-center gap-1.5 whitespace-nowrap">
<iconify-icon className="text-[#C5A059]" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[#5D554A]">Następna wizyta za:</span> <span className="font-semibold text-[#2A241E]">30 min</span>
</div>
<div className="w-px h-4 bg-[#EBE5DA] hidden sm:block"></div>
<div className="flex items-center gap-1.5 whitespace-nowrap">
<iconify-icon className="text-[#C5A059]" icon="solar:wallet-linear" width="16"></iconify-icon>
<span className="text-[#5D554A]">Przychód:</span> <span className="font-semibold text-[#2A241E]">400 zł</span>
</div>
<div className="w-px h-4 bg-[#EBE5DA] hidden sm:block"></div>
<div className="flex items-center gap-1.5 whitespace-nowrap">
<iconify-icon className="text-[#C5A059]" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-[#5D554A]">Nowi klienci dziś:</span> <span className="font-semibold text-[#2A241E]">1</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<section className="bg-white rounded-xl border border-[#EBE5DA] shadow-sm flex flex-col h-full">
<div className="px-5 py-4 border-b border-[#EBE5DA] flex justify-between items-center bg-[#FCFCFA] rounded-t-xl">
<h2 className="text-sm font-semibold text-[#2A241E] flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:bell-bing-linear" width="18"></iconify-icon>
                        Najbliższa wizyta
                    </h2>
<span className="bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide">za 30 min</span>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-2xl font-semibold text-[#2A241E] font-playfair mb-1 tracking-tight">Jan Nowak</h3>
<p className="text-sm font-medium text-[#2D5A27] mb-4">Strzyżenie męskie</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm mb-5">
<div>
<span className="text-xs text-[#9CA3AF] block mb-0.5">Godzina</span>
<span className="font-medium text-[#2A241E] flex items-center gap-1.5"><iconify-icon className="text-[#C5A059]" icon="solar:clock-circle-linear"></iconify-icon> 11:30 – 12:00</span>
</div>
<div>
<span className="text-xs text-[#9CA3AF] block mb-0.5">Czas trwania</span>
<span className="font-medium text-[#2A241E]">30 min</span>
</div>
<div>
<span className="text-xs text-[#9CA3AF] block mb-0.5">Cena</span>
<span className="font-medium text-[#2A241E]">60 zł</span>
</div>
<div>
<span className="text-xs text-[#9CA3AF] block mb-0.5">Status</span>
<span className="inline-flex bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-0.5 rounded text-xs font-medium">Nieopłacone</span>
</div>
</div>
<div className="bg-[#F9F9F9] rounded-lg p-3 border border-dashed border-[#EBE5DA] mb-6 flex gap-2 items-start flex-1">
<iconify-icon className="text-[#9CA3AF] mt-0.5 shrink-0" icon="solar:document-text-linear" width="16"></iconify-icon>
<p className="text-[13px] text-[#5D554A] leading-relaxed italic">
                            Preferuje krótkie boki, uczulenie na niektóre kosmetyki — unikać produktu X. Stały klient od 2023.
                        </p>
</div>
<div className="mt-auto">
<div className="flex gap-3 mb-3">
<button className="flex-1 bg-[#2D5A27] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#23461F] transition-colors flex items-center justify-center gap-2 shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon> Zadzwoń
                            </button>
<button className="flex-1 bg-white border border-[#EBE5DA] text-[#5D554A] text-sm font-medium py-2.5 rounded-lg hover:bg-[#F9F7F2] transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon> Napisz SMS
                            </button>
</div>
<p className="text-xs text-center text-[#9CA3AF]">Tel: +48 600 123 456</p>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-[#EBE5DA] shadow-sm flex flex-col h-full">
<div className="px-5 py-4 border-b border-[#EBE5DA] bg-[#FCFCFA] rounded-t-xl">
<h2 className="text-sm font-semibold text-[#2A241E]">Zarezerwowany czas</h2>
</div>
<div className="p-5 flex-1 flex flex-col justify-center">
<div className="mb-8">
<div className="flex justify-between items-end mb-2">
<span className="text-xl font-semibold text-[#2A241E] tracking-tight">6h 15min <span className="text-sm font-normal text-[#9CA3AF]">/ 8h</span></span>
<span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded text-[11px] font-medium">
                                Powyżej średniej <iconify-icon icon="solar:check-circle-bold" width="12"></iconify-icon>
</span>
</div>
<div className="h-3 w-full bg-[#F2EFE9] rounded-full overflow-hidden mb-2">
<div className="h-full bg-[#C5A059] rounded-full" style={{width: '78%'}}></div>
</div>
<p className="text-sm text-[#5D554A] font-medium">Wykorzystanie: 78%</p>
</div>
<div className="mt-auto border-t border-[#F2EFE9] pt-5">
<p className="text-xs font-semibold text-[#2A241E] mb-3 uppercase tracking-wide">Wolne sloty dziś:</p>
<div className="flex flex-wrap gap-2">
<button className="group px-3 py-1.5 rounded-full bg-white border border-[#EBE5DA] hover:border-green-300 hover:bg-green-50 transition-all flex items-center gap-1.5 text-sm font-medium text-[#2A241E] shadow-sm" title="Kliknij, aby zablokować lub udostępnić do rezerwacji">
<span className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse"></span> 11:00 <span className="text-xs text-[#9CA3AF] font-normal group-hover:text-green-600">(30 min)</span>
</button>
<button className="group px-3 py-1.5 rounded-full bg-white border border-[#EBE5DA] hover:border-green-300 hover:bg-green-50 transition-all flex items-center gap-1.5 text-sm font-medium text-[#2A241E] shadow-sm" title="Kliknij, aby zablokować lub udostępnić do rezerwacji">
<span className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse"></span> 14:15 <span className="text-xs text-[#9CA3AF] font-normal group-hover:text-green-600">(15 min)</span>
</button>
<button className="group px-3 py-1.5 rounded-full bg-white border border-[#EBE5DA] hover:border-green-300 hover:bg-green-50 transition-all flex items-center gap-1.5 text-sm font-medium text-[#2A241E] shadow-sm" title="Kliknij, aby zablokować lub udostępnić do rezerwacji">
<span className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse"></span> 16:00 <span className="text-xs text-[#9CA3AF] font-normal group-hover:text-green-600">(90 min)</span>
</button>
</div>
</div>
</div>
</section>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<section className="lg:col-span-7 bg-white rounded-xl border border-[#EBE5DA] shadow-sm">
<div className="px-5 py-4 border-b border-[#EBE5DA] flex justify-between items-center bg-[#FCFCFA] rounded-t-xl cursor-pointer hover:bg-[#F9F7F2] transition-colors">
<h2 className="text-sm font-semibold text-[#2A241E] flex items-center gap-2">
<iconify-icon className="text-[#C5A059]" icon="solar:calendar-date-linear" width="18"></iconify-icon>
                        Harmonogram dnia
                    </h2>
<button className="text-[#9CA3AF] hover:text-[#2A241E] transition-colors flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-4 sm:p-5 space-y-3 relative">

<div className="hidden sm:block absolute left-[39px] top-6 bottom-6 w-px bg-[#EBE5DA]"></div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<iconify-icon className="text-[#EBE5DA] bg-white z-10" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="bg-[#FCFCFA] border border-[#EBE5DA] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-70">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-[#9CA3AF] w-12 shrink-0">09:00</div>
<div>
<p className="text-sm font-medium text-[#5D554A] line-through decoration-[#9CA3AF]/40">Maria W. <span className="font-normal mx-1 text-[#9CA3AF]">—</span> Manicure hybrydowy</p>
<p className="text-xs text-[#9CA3AF] mt-0.5">45 min</p>
</div>
</div>
<div className="text-xs font-medium text-[#2D5A27] flex items-center gap-1 shrink-0 bg-[#FDFBF7] px-2 py-1 rounded border border-[#EBE5DA]">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Zapłacono (65 zł)
                            </div>
</div>
</div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<iconify-icon className="text-[#EBE5DA] bg-white z-10" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="bg-[#FCFCFA] border border-[#EBE5DA] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-70">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-[#9CA3AF] w-12 shrink-0">10:00</div>
<div>
<p className="text-sm font-medium text-[#5D554A] line-through decoration-[#9CA3AF]/40">Ewa K. <span className="font-normal mx-1 text-[#9CA3AF]">—</span> Strzyżenie damskie</p>
<p className="text-xs text-[#9CA3AF] mt-0.5">60 min</p>
</div>
</div>
<div className="text-xs font-medium text-[#2D5A27] flex items-center gap-1 shrink-0 bg-[#FDFBF7] px-2 py-1 rounded border border-[#EBE5DA]">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Zapłacono (80 zł)
                            </div>
</div>
</div>

<div className="relative py-2 sm:pl-12">
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-blue-100"></div>
<div className="relative z-10 flex justify-center">
<span className="bg-blue-50 text-blue-600 border border-blue-200 px-4 py-1 rounded-full text-[10px] font-semibold tracking-widest flex items-center gap-2 shadow-sm animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> TERAZ <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
</span>
</div>
</div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<iconify-icon className="text-green-300 bg-white rounded-full z-10" icon="solar:clock-circle-bold" width="18"></iconify-icon>
</div>
<div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-green-700 w-12 shrink-0">11:00</div>
<div>
<p className="text-sm font-medium text-green-800">Wolny slot</p>
<p className="text-xs text-green-600 mt-0.5">30 min</p>
</div>
</div>
<button className="text-xs font-medium text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shrink-0 w-fit">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Zarezerwuj
                            </button>
</div>
</div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border-[3px] border-white ring-1 ring-yellow-200 z-10"></div>
</div>
<div className="bg-white border-2 border-yellow-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-[#2A241E] w-12 shrink-0">11:30</div>
<div>
<p className="text-sm font-semibold text-[#2A241E]">Jan Nowak <span className="font-normal mx-1 text-[#9CA3AF]">—</span> <span className="font-medium text-[#5D554A]">Strzyżenie męskie</span></p>
<p className="text-xs text-[#9CA3AF] mt-0.5">30 min</p>
</div>
</div>
<div className="text-[11px] font-medium text-yellow-800 bg-yellow-100 border border-yellow-200 px-2 py-1 rounded flex items-center gap-1 shrink-0 w-fit">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Nieopłacone
                            </div>
</div>
</div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<div className="w-3 h-3 rounded-full bg-yellow-400 ring-2 ring-white z-10"></div>
</div>
<div className="bg-white border border-[#EBE5DA] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-sm transition-shadow">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-[#2A241E] w-12 shrink-0">14:30</div>
<div>
<p className="text-sm font-semibold text-[#2A241E]">Anna K. <span className="font-normal mx-1 text-[#9CA3AF]">—</span> <span className="font-medium text-[#5D554A]">Strzyżenie + koloryzacja</span></p>
<p className="text-xs text-[#9CA3AF] mt-0.5">120 min</p>
</div>
</div>
<div className="text-[11px] font-medium text-yellow-800 bg-yellow-100 border border-yellow-200 px-2 py-1 rounded flex items-center gap-1 shrink-0 w-fit">
                                Nieopłacone
                            </div>
</div>
</div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<iconify-icon className="text-red-200 bg-white rounded-full z-10" icon="solar:close-circle-bold" width="18"></iconify-icon>
</div>
<div className="bg-red-50/50 border border-red-100 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-80">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-red-400 w-12 shrink-0 line-through">16:00</div>
<div>
<p className="text-sm font-medium text-[#5D554A] line-through decoration-red-300">Karolina M. <span className="font-normal mx-1 text-[#9CA3AF]">—</span> Modelowanie</p>
</div>
</div>
<div className="text-[11px] font-medium text-red-600 bg-red-100 border border-red-200 px-2 py-1 rounded flex items-center gap-1 shrink-0 w-fit">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Anulowano
                            </div>
</div>
</div>

<div className="relative sm:pl-12 group">
<div className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-[40px] justify-center">
<div className="w-3 h-3 rounded-full bg-yellow-400 ring-2 ring-white z-10"></div>
</div>
<div className="bg-white border border-[#EBE5DA] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-sm transition-shadow">
<div className="flex items-start sm:items-center gap-3">
<div className="text-sm font-semibold text-[#2A241E] w-12 shrink-0">17:30</div>
<div>
<p className="text-sm font-semibold text-[#2A241E]">Maja N. <span className="font-normal mx-1 text-[#9CA3AF]">—</span> <span className="font-medium text-[#5D554A]">Pedicure klasyczny</span></p>
<p className="text-xs text-[#9CA3AF] mt-0.5">60 min</p>
</div>
</div>
<div className="text-[11px] font-medium text-yellow-800 bg-yellow-100 border border-yellow-200 px-2 py-1 rounded flex items-center gap-1 shrink-0 w-fit">
                                Nieopłacone
                            </div>
</div>
</div>
</div>
</section>

<section className="lg:col-span-5 bg-white rounded-xl border border-[#EBE5DA] shadow-sm flex flex-col">
<div className="px-5 py-4 border-b border-[#EBE5DA] bg-[#FCFCFA] rounded-t-xl flex items-center justify-between">
<h2 className="text-sm font-semibold text-[#2A241E]">Przychód dnia</h2>
<span className="text-lg">💰</span>
</div>
<div className="p-5 flex-1 flex flex-col">

<div className="text-center py-4 mb-4">
<div className="flex items-end justify-center gap-2 mb-3">
<span className="text-4xl font-playfair font-semibold text-[#2A241E] tracking-tight">400 zł</span>
<span className="text-lg text-[#9CA3AF] mb-1">/ 650 zł</span>
</div>
<div className="h-2.5 w-full bg-[#F2EFE9] rounded-full overflow-hidden mb-3 max-w-xs mx-auto">
<div className="h-full bg-[#2D5A27] rounded-full relative" style={{width: '61.5%'}}>
<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
</div>
</div>
<p className="text-xs text-[#5D554A] font-medium">Do celu brakuje: <span className="text-[#2A241E] font-semibold">250 zł</span> (jeszcze 4 wizyty)</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-auto">

<div className="bg-[#FCFCFA] border border-[#EBE5DA] rounded-lg p-4 flex flex-col justify-between hover:border-green-200 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Wczoraj (wt. 17.06)</span>
<iconify-icon className="text-[#EBE5DA]" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-xs text-[#5D554A] mb-0.5 line-through decoration-[#9CA3AF]/40">350 zł</p>
<p className="text-lg font-semibold text-[#2A241E]">400 zł</p>
</div>
<div className="text-sm font-medium text-[#2D5A27] flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
<iconify-icon icon="solar:chart-up-linear" width="16"></iconify-icon>
                                    +50 zł (+14,3%)
                                </div>
</div>
</div>

<div className="bg-[#FCFCFA] border border-[#EBE5DA] rounded-lg p-4 flex flex-col justify-between hover:border-red-100 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Tydzień temu (śr. 11.06)</span>
<iconify-icon className="text-[#EBE5DA]" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-xs text-[#5D554A] mb-0.5 line-through decoration-[#9CA3AF]/40">520 zł</p>
<p className="text-lg font-semibold text-[#2A241E]">400 zł</p>
</div>
<div className="text-sm font-medium text-red-600 flex items-center gap-1 bg-red-50 px-2 py-1 rounded">
<iconify-icon icon="solar:chart-down-linear" width="16"></iconify-icon>
                                    -120 zł (-23%)
                                </div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
