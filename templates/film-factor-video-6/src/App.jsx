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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800 glass-card">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="flex flex-col w-10 shadow-lg group-hover:scale-105 transition-transform duration-300 select-none">
<div className="grid grid-cols-2 h-10 w-full">

<div className="bg-[#8e44ad] flex items-center justify-center border-r border-b border-black/10">
<span className="font-bold text-black text-sm pixel-f">F</span>
</div>

<div className="bg-[#16a34a] flex items-center justify-center border-b border-black/10 relative overflow-hidden">
<div className="w-3.5 h-2.5 flex bg-black rounded-[1px] shadow-sm items-center justify-center">
<div className="w-0 h-0 border-l-[3px] border-y-[2px] border-y-transparent border-l-white ml-0.5"></div>
</div>

<div className="absolute top-0.5 w-full flex justify-center gap-[1px] opacity-30">
<div className="w-[1px] h-[1px] bg-white"></div><div className="w-[1px] h-[1px] bg-white"></div><div className="w-[1px] h-[1px] bg-white"></div>
</div>
<div className="absolute bottom-0.5 w-full flex justify-center gap-[1px] opacity-30">
<div className="w-[1px] h-[1px] bg-white"></div><div className="w-[1px] h-[1px] bg-white"></div><div className="w-[1px] h-[1px] bg-white"></div>
</div>
</div>

<div className="bg-[#2563eb] flex items-center justify-center border-r border-black/10">
<iconify-icon className="text-white text-xs drop-shadow-sm" icon="ion:game-controller"></iconify-icon>
</div>

<div className="flex bg-[#dc2626] items-center justify-center">
<span className="font-bold text-black text-sm pixel-f">F</span>
</div>
</div>

<div className="bg-[#facc15] text-black text-[5px] font-bold text-center leading-tight py-[2px] tracking-tighter uppercase border-t border-black/10">
                        Film Factor
                    </div>
</div>
<span className="cursor-pointer text-xl font-medium tracking-tight pl-1" onclick="window.location.href='/home'" role="button">FILM FACTOR</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#work">Realizacje</a>
<a className="hover:text-white transition-colors" href="/#contact">Kontakt</a>
<a className="hover:text-white transition-colors" href="#pricing">Oferta</a>
<a className="hover:bg-zinc-700 transition-colors text-white bg-zinc-800 border-zinc-700 border rounded-lg pt-2 pr-4 pb-2 pl-4" href="/#contact">
                    Wycena
                </a>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pr-6 pb-20 pl-6">
<div className="max-w-7xl mr-auto ml-auto">

<div className="text-center mb-24 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-400 mb-8 cursor-default">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Przyjmujemy nowe projekty na Q4
      </div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tight mb-8 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
        Tworzymy wideo,<br/>które buduje autorytet.
      </h1>
<p className="text-lg text-zinc-400 font-normal leading-relaxed mb-10 max-w-2xl mx-auto tracking-wide">
        Kompleksowa produkcja wideo dla marek osobistych i firm. Od strategii, przez montaż, aż po optymalizację kanału.
        Skup się na treści, my zajmiemy się resztą.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-[rgb(0,146,78)] transition-colors flex items-center justify-center gap-2 group font-medium text-white tracking-wide bg-[rgb(0,166,88)] w-full rounded-lg pt-3 pr-8 pb-3 pl-8" href="#contact">
          Rozpocznij współpracę
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 tracking-wide" href="#work">
          Zobacz portfolio
        </a>
</div>

<div className="flex flex-wrap cursor-default select-none opacity-60 border-zinc-900 border-t mt-16 pt-8 grayscale gap-x-12 gap-y-6 justify-center">
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 scroll-mt-24" id="work">

<div className="md:col-span-2 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6 border border-zinc-700">
<iconify-icon height="24" icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-medium tracking-tight mb-2 text-white">Montaż Premium</h3>
<p className="text-zinc-400">Dynamiczny montaż dostosowany do algorytmów YouTube i Instagrama. Zatrzymujemy
              uwagę widza od pierwszej do ostatniej sekundy.</p>
</div>
</div>
</div>

<div className="md:row-span-2 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden group hover:border-zinc-700 transition-colors" id="process">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6 border border-zinc-700">
<iconify-icon height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-white">Strategia &amp; Analityka</h3>
<p className="text-zinc-400 mb-8">Nie zgadujemy. Analizujemy dane, dobieramy tematy i optymalizujemy każdy element
            pod zasięgi.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-base text-zinc-500 border-b border-zinc-800 pb-2">
<span className="">CTR Miniatury</span>
<span className="text-emerald-400">+12.5%</span>
</div>
<div className="flex items-center justify-between text-base text-zinc-500 border-b border-zinc-800 pb-2">
<span className="">Śr. Czas Oglądania</span>
<span className="text-emerald-400">+45.2%</span>
</div>
<div className="flex items-center justify-between text-base text-zinc-500">
<span>Nowi Subskrybenci</span>
<span className="text-emerald-400">+2.1K</span>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6 border border-zinc-700">
<iconify-icon height="24" icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Design Miniatur</h3>
<p className="text-zinc-400 text-base">Tworzymy klikalne miniatury, które wyróżniają się w gąszczu konkurencji.</p>
</div>
</div>

<div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6 border border-zinc-700">
<iconify-icon className="" height="24" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Postprodukcja</h3>
<p className="text-zinc-400 text-base">Kolor, dźwięk, efekty specjalne. Jakość kinowa w formacie social media.</p>
</div>
</div>
</div>

<div className="border-y border-zinc-800 py-16 mb-24 scroll-mt-24" id="stats">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="group cursor-default">
<div className="group-hover:text-emerald-400 transition-colors text-4xl font-medium text-[#d82626] tracking-tight mb-1">
            10M+</div>
<div className="text-zinc-500 text-sm">Wygenerowanych zasięgów</div>
</div>
<div className="group cursor-default">
<div className="group-hover:text-emerald-400 transition-colors text-4xl font-medium text-[#2561e6] tracking-tight mb-1">
            500+</div>
<div className="text-zinc-500 text-sm">Zmontowanych filmów</div>
</div>
<div className="group cursor-default">
<div className="group-hover:text-emerald-400 transition-colors text-4xl font-medium text-[#9132e5] tracking-tight mb-1">
            50+</div>
<div className="text-zinc-500 text-sm">Zadowolonych klientów</div>
</div>
<div className="group cursor-default">
<div className="group-hover:text-emerald-400 transition-colors text-4xl font-medium text-[#059267] tracking-tight mb-1">
            24h</div>
<div className="text-zinc-500 text-sm">Czas reakcji</div>
</div>
</div>
</div>

<div className="mb-32 scroll-mt-24" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Wybierz swój pakiet</h2>
<p className="text-zinc-400 max-w-xl mx-auto">Dopasowane rozwiązania dla każdego etapu rozwoju. Sprawdź, co przygotowaliśmy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="flex flex-col p-6 rounded-3xl border border-red-500/20 bg-zinc-900/40 relative overflow-hidden group hover:border-red-500/40 transition-colors duration-300">
<div className="absolute top-0 inset-x-0 h-1 bg-red-600"></div>
<div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent opacity-50 pointer-events-none"></div>
<h3 className="text-2xl font-bold tracking-tight text-red-500 mb-4 pixel-f">YouTube</h3>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                    Idealne dla twórców, którzy chcą rozwijać kanał oraz zwiększać wyświetlenia
                </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Kompleksowa obsługa kanału</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Projektowanie miniaturek</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Montaż filmów (short &amp; long)</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Optymalizacja pod YouTube</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Dodawanie napisów i efektów</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Banery kanału YouTube</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Spójny styl wizualny</span>
</li>
</ul>
</div>

<div className="flex flex-col p-6 rounded-3xl border border-blue-500/20 bg-zinc-900/40 relative overflow-hidden group hover:border-blue-500/40 transition-colors duration-300">
<div className="absolute top-0 inset-x-0 h-1 bg-blue-600"></div>
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50 pointer-events-none"></div>
<h3 className="text-2xl font-bold tracking-tight text-blue-500 mb-4 pixel-f">Instagram</h3>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                    Dla marek i twórców, którzy chcą rosnąć na Instagramie
                </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Content pod Instagram &amp; Reels</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Montaż rolek (Reels)</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Tworzenie postów graficznych</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Short-form video</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Napisy, emoji, trendy</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Miniaturki do rolek</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Spójna estetyka profilu</span>
</li>
</ul>
</div>

<div className="flex flex-col p-6 rounded-3xl border border-purple-500/20 bg-zinc-900/40 relative overflow-hidden group hover:border-purple-500/40 transition-colors duration-300">
<div className="absolute top-0 inset-x-0 h-1 bg-purple-600"></div>
<div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent opacity-50 pointer-events-none"></div>
<h3 className="text-2xl font-bold tracking-tight text-purple-500 mb-4 pixel-f">Supreme</h3>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                    Najlepsza opcja dla osób budujących markę osobistą
                </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Pełny pakiet YouTube + Instagram</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Miniaturki YouTube</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Montaż filmów YouTube</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Montaż rolek (IG / Shorts)</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Posty graficzne na IG</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Banery YouTube</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Spójny branding</span>
</li>
</ul>
</div>

<div className="flex flex-col p-6 rounded-3xl border border-emerald-500/20 bg-zinc-900/40 relative overflow-hidden group hover:border-emerald-500/40 transition-colors duration-300">
<div className="absolute top-0 inset-x-0 h-1 bg-emerald-600"></div>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent opacity-50 pointer-events-none"></div>
<h3 className="text-2xl font-bold tracking-tight text-emerald-500 mb-4 pixel-f">One'n only</h3>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                    Bez pakietów - płacisz tylko za to czego potrzebujesz
                </p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Pojedyncze usługi</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Tylko montaż filmu</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Tylko rolka / short</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Tylko miniaturka YouTube</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Tylko post graficzny</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Tylko baner</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Jednorazowa poprawka wideo</span>
</li>
</ul>
</div>
</div>
</div>

<div className="overflow-hidden scroll-mt-24 text-center bg-zinc-900/40 border-zinc-800 border rounded-3xl pt-12 pr-12 pb-12 pl-12 relative" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-zinc-600/20 blur-[100px] -z-10 rounded-full">
</div>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6">Gotowy na współprace?</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-10">
        Skontaktuj się z nami, aby omówić szczegóły wybranego pakietu lub stworzyć ofertę indywidualną.
      </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="hover:bg-zinc-200 transition-colors inline-block sm:w-auto font-medium text-black bg-[#16a049] w-full rounded-lg pt-3 pr-8 pb-3 pl-8" href="https://mail.google.com/mail/u/0/?pli=1#inbox">
            Napisz do nas
        </a>
<div className="w-full sm:w-auto inline-block relative">
<div className="hidden fixed inset-0 z-[999] items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onclick="if(event.target===this){this.classList.add('hidden');this.classList.remove('flex');document.body.style.overflow='';}">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative transform transition-all animate-in zoom-in-95 duration-200">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1" onclick="const p=this.closest('.fixed'); p.classList.add('hidden'); p.classList.remove('flex'); document.body.style.overflow='';" type="button">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="text-center mb-8 pt-2">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-700 text-emerald-400">
<svg className="lucide lucide-phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Skontaktuj się z nami</h3>
<p className="text-zinc-400 text-sm">Jesteśmy dostępni od poniedziałku do piątku<br/>w godzinach 9:00 - 17:00.</p>
</div>
<div className="space-y-3">
<a className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all group" href="tel:+48123456789">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-600 transition-colors border border-zinc-600 shrink-0">
<svg className="lucide lucide-phone-call" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Zadzwoń teraz</div>
<div className="text-white font-medium group-hover:text-emerald-400 transition-colors">+48 123 456 789</div>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all group" href="mailto:kontakt@filmfactor.pl">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-600 transition-colors border border-zinc-600 shrink-0">
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Napisz maila</div>
<div className="text-white font-medium group-hover:text-emerald-400 transition-colors">kontakt@filmfactor.pl</div>
</div>
</a>
</div>
<div className="mt-6 pt-5 border-t border-zinc-800 text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-medium" onclick="const p=this.closest('.fixed'); p.classList.add('hidden'); p.classList.remove('flex'); document.body.style.overflow='';" type="button">
                    Zamknij okno
                </button>
</div>
</div>
</div><div className="inline-block w-full sm:w-auto relative">
<button className="sm:w-auto hover:bg-zinc-800 transition-colors cursor-pointer font-medium text-white text-center bg-transparent w-full border-zinc-700 border rounded-lg pt-3 pr-8 pb-3 pl-8" onclick="const modal = this.nextElementSibling; modal.classList.remove('hidden'); modal.classList.add('flex'); document.body.style.overflow='hidden';" type="button">
        Zadzwoń do nas
    </button>
<div className="hidden fixed inset-0 z-[999] items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onclick="if(event.target===this){this.classList.add('hidden');this.classList.remove('flex');document.body.style.overflow='';}">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative transform transition-all animate-in zoom-in-95 duration-200">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-zinc-800" onclick="const p=this.closest('.fixed'); p.classList.add('hidden'); p.classList.remove('flex'); document.body.style.overflow='';" type="button">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="text-center mb-8 pt-2">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-700 text-emerald-400 shadow-lg shadow-emerald-500/10">
<svg className="lucide lucide-phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Kontakt</h3>
<p className="text-zinc-400 text-sm">Skontaktuj się z nami bezpośrednio.</p>
</div>
<div className="space-y-3">
<a className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all group" href="tel:+48512699076">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-600 transition-colors border border-zinc-600 shrink-0 shadow-inner">
<svg className="lucide lucide-phone-call" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Telefon</div>
<div className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate text-sm sm:text-base">+48 512 699 076</div>
</div>
<svg className="lucide lucide-arrow-up-right text-zinc-500 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all group" href="https://instagram.com/filmfactor_crew" rel="noopener noreferrer" target="_blank">
<div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-600 transition-colors border border-zinc-600 shrink-0 shadow-inner">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Instagram</div>
<div className="text-white font-medium group-hover:text-emerald-400 transition-colors truncate text-sm sm:text-base">@filmfactor_crew</div>
</div>
<svg className="lucide lucide-arrow-up-right text-zinc-500 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-6 pt-5 border-t border-zinc-800 text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-medium" onclick="const p=this.closest('.fixed'); p.classList.add('hidden'); p.classList.remove('flex'); document.body.style.overflow='';" type="button">
                    Zamknij okno
                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-900 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">

<div className="flex flex-col w-5 shadow-sm opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
<div className="grid grid-cols-2 h-5 w-full">
<div className="bg-[#8e44ad]"></div><div className="bg-[#16a34a]"></div>
<div className="bg-[#2563eb]"></div><div className="bg-[#dc2626]"></div>
</div>
<div className="bg-[#facc15] h-1"></div>
</div>
<span className="text-zinc-500 text-sm">© 2024 Film Factor</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Regulamin</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Prywatność</a>
<a className="hover:text-zinc-300 transition-colors" href="mailto:kontakt@filmfactor.com">Kontakt</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
