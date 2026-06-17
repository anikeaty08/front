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



tailwind.config = {
theme: {
extend: {
colors: {
frater: {
50: '#FDFBF7',
100: '#F5EFE6',
200: '#EBE0D1',
300: '#D6C0A6',
400: '#B08D6B',
500: '#8B5E3C', /* Primary Brand Color */
600: '#6D482F',
700: '#543624',
800: '#3E291C',
900: '#2A1C14',
}
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed z-50 bg-[#FDFBF7]/90 w-full border-[#EBE5D9] border-b top-0 backdrop-blur-md">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center" href="#">
<img alt="Frater - Catholic Travel Agency" className="w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7d18719-dff3-47dc-b10e-8a32b8d7d986_800w.png"/>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-base font-normal text-stone-600 hover:text-[#5D4037] transition-colors" href="#wycieczki">Wycieczki</a>
<a className="text-base font-normal text-stone-600 hover:text-[#5D4037] transition-colors" href="#pielgrzymki">Pielgrzymki</a>
<a className="text-base font-normal text-stone-600 hover:text-[#5D4037] transition-colors" href="#sport-health">Sport &amp;
                Health</a>
<a className="text-base font-normal text-stone-600 hover:text-[#5D4037] transition-colors" href="#blog">Blog</a>
</div>
<div className="flex items-center gap-5">
<button className="hidden md:flex items-center gap-2 text-base font-normal text-stone-500 hover:text-[#5D4037]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
                    Szukaj
                </button>
<button className="bg-[#8C6A48] hover:bg-[#6F523B] text-white text-sm font-medium py-3 px-6 rounded-lg transition-all shadow-sm shadow-[#8C6A48]/20">
                    Kontakt
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none">
<div className="absolute right-0 top-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1548625361-12e2c889f812?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center mask-image-gradient"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent"></div>
</div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frater-100/50 border border-frater-200 text-frater-600 text-sm font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-frater-500"></span>
                    Nowy sezon pielgrzymkowy 2024/2025
                </div>
<h1 className="text-5xl md:text-7xl font-medium serif text-frater-900 tracking-tight leading-[1.1] mb-6">
                    Odkryj duchowe <br/> <span className="italic text-frater-500">ścieżki świata.</span>
</h1>
<p className="text-xl text-frater-600 font-light max-w-xl leading-relaxed mb-10">
                    Organizujemy pielgrzymki, które łączą głębokie przeżycia duchowe z komfortem podróży. Dołącz do nas i poznaj miejsca, gdzie historia spotyka się z wiarą.
                </p>
</div>

<div className="bg-white rounded-2xl shadow-xl shadow-frater-200/50 border border-frater-100 p-2 max-w-4xl mt-8">
<form className="flex flex-col md:flex-row gap-2">

<div className="flex-1 relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-frater-400 group-focus-within:text-frater-600 transition-colors">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="h-full bg-frater-50/50 hover:bg-frater-50 rounded-xl transition-colors border border-transparent hover:border-frater-200 group-focus-within:bg-white group-focus-within:ring-2 group-focus-within:ring-frater-100">
<label className="block text-xs font-medium text-frater-500 px-12 pt-2.5" htmlFor="destination">Kierunek</label>
<input className="w-full bg-transparent border-none p-0 px-12 pb-2.5 text-frater-800 placeholder-frater-300 focus:ring-0 text-base font-medium" id="destination" placeholder="Rzym, Fatima, Ziemia Święta..." type="text"/>
</div>
</div>

<div className="h-px bg-frater-100 md:hidden mx-2"></div>

<div className="flex-1 relative group md:border-l md:border-frater-100 md:pl-2">
<div className="absolute left-6 top-1/2 -translate-y-1/2 text-frater-400 group-focus-within:text-frater-600 transition-colors">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="h-full bg-frater-50/50 hover:bg-frater-50 rounded-xl transition-colors border border-transparent hover:border-frater-200 group-focus-within:bg-white group-focus-within:ring-2 group-focus-within:ring-frater-100">
<label className="block text-xs font-medium text-frater-500 px-12 pt-2.5" htmlFor="dates">Termin</label>
<input className="w-full bg-transparent border-none p-0 px-12 pb-2.5 text-frater-800 placeholder-frater-300 focus:ring-0 text-base font-medium" id="dates" placeholder="Kiedy chcesz jechać?" type="text"/>
</div>
</div>

<button className="bg-frater-800 hover:bg-frater-700 text-frater-50 h-16 md:h-auto md:w-32 rounded-xl font-medium transition-all flex flex-col items-center justify-center gap-1 shadow-lg shadow-frater-800/10" type="button">
<span className="md:hidden">Szukaj pielgrzymki</span>
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</form>
</div>

<div className="mt-6 flex flex-wrap gap-3">
<span className="text-sm text-frater-500 font-medium py-1">Popularne teraz:</span>
<button className="text-sm px-3 py-1 rounded-full bg-white border border-frater-200 text-frater-600 hover:border-frater-400 hover:text-frater-800 transition-colors">Włochy</button>
<button className="text-sm px-3 py-1 rounded-full bg-white border border-frater-200 text-frater-600 hover:border-frater-400 hover:text-frater-800 transition-colors">Medjugorie</button>
<button className="text-sm px-3 py-1 rounded-full bg-white border border-frater-200 text-frater-600 hover:border-frater-400 hover:text-frater-800 transition-colors">Santiago de Compostela</button>
</div>
</div>
</header>

<section className="py-20 border-t border-frater-200/50 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-frater-50 border border-frater-100 flex items-center justify-center text-frater-500">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="serif text-2xl font-medium text-frater-900 tracking-tight">Pełne bezpieczeństwo</h3>
<p className="text-base text-frater-500 leading-relaxed">
                        Jako licencjonowane biuro podróży zapewniamy pełne ubezpieczenie oraz opiekę doświadczonych pilotów na każdym etapie podróży.
                    </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-frater-50 border border-frater-100 flex items-center justify-center text-frater-500">
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="serif text-2xl font-medium text-frater-900 tracking-tight">Opieka duchowa</h3>
<p className="text-base text-frater-500 leading-relaxed">
                        Każda nasza grupa podróżuje z kapłanem. Zapewniamy codzienną Mszę Świętą oraz czas na modlitwę w najważniejszych sanktuariach.
                    </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-frater-50 border border-frater-100 flex items-center justify-center text-frater-500">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="serif text-2xl font-medium text-frater-900 tracking-tight">Kameralne grupy</h3>
<p className="text-base text-frater-500 leading-relaxed">
                        Stawiamy na relacje. Nasze grupy są mniejsze, co pozwala na lepszą integrację i spokojniejsze zwiedzanie miejsc kultu.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="serif text-4xl font-medium text-frater-900 tracking-tight mb-4">Wybrane Pielgrzymki</h2>
<p className="text-frater-500 font-light max-w-lg">Odwiedź miejsca uświęcone tradycją i wiarą. Przygotowaliśmy programy, które pozwolą Ci głębiej przeżyć ten czas.</p>
</div>
<a className="inline-flex items-center gap-2 text-frater-600 font-medium hover:text-frater-900 transition-colors group" href="#">
                    Zobacz wszystkie oferty
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group bg-white rounded-2xl overflow-hidden border border-frater-200 hover:border-frater-300 shadow-sm hover:shadow-xl hover:shadow-frater-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Rzym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1996&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-frater-800 uppercase tracking-wider">Bestseller</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-frater-500 flex items-center gap-1.5">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 7 dni
                            </span>
<span className="text-sm font-medium text-frater-500 flex items-center gap-1.5">
<svg className="lucide lucide-plane w-4 h-4" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg> Samolotem
                            </span>
</div>
<h3 className="serif text-2xl font-medium text-frater-900 mb-2 group-hover:text-frater-600 transition-colors">Rzym i Watykan</h3>
<p className="text-base text-frater-500 mb-6 line-clamp-2">Audiencja generalna z Papieżem, Bazylika św. Piotra oraz groby Apostołów. Poczuj serce Kościoła.</p>
<div className="flex items-center justify-between pt-6 border-t border-frater-100">
<div className="flex flex-col">
<span className="text-xs text-frater-400">Cena od</span>
<span className="font-semibold text-lg text-frater-900">2 490 PLN</span>
</div>
<button className="bg-frater-50 hover:bg-frater-100 text-frater-900 p-2.5 rounded-full transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-frater-200 hover:border-frater-300 shadow-sm hover:shadow-xl hover:shadow-frater-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Ziemia Święta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-frater-500 flex items-center gap-1.5">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 9 dni
                            </span>
<span className="text-sm font-medium text-frater-500 flex items-center gap-1.5">
<svg className="lucide lucide-plane w-4 h-4" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg> Samolotem
                            </span>
</div>
<h3 className="serif text-2xl font-medium text-frater-900 mb-2 group-hover:text-frater-600 transition-colors">Śladami Chrystusa</h3>
<p className="text-base text-frater-500 mb-6 line-clamp-2">Jerozolima, Betlejem, Nazaret. Niezapomniana podróż do Ziemi Świętej z przewodnikiem biblijnym.</p>
<div className="flex items-center justify-between pt-6 border-t border-frater-100">
<div className="flex flex-col">
<span className="text-xs text-frater-400">Cena od</span>
<span className="font-semibold text-lg text-frater-900">4 200 PLN</span>
</div>
<button className="bg-frater-50 hover:bg-frater-100 text-frater-900 p-2.5 rounded-full transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-frater-200 hover:border-frater-300 shadow-sm hover:shadow-xl hover:shadow-frater-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Santiago" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-frater-500 flex items-center gap-1.5">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 10 dni
                            </span>
<span className="text-sm font-medium text-frater-500 flex items-center gap-1.5">
<svg className="lucide lucide-footprints w-4 h-4" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg> Trekking
                            </span>
</div>
<h3 className="serif text-2xl font-medium text-frater-900 mb-2 group-hover:text-frater-600 transition-colors">Szlak Santiago</h3>
<p className="text-base text-frater-500 mb-6 line-clamp-2">Droga św. Jakuba – Camino de Santiago. Ostatnie 100km pieszo do Composteli. Certyfikat Compostela.</p>
<div className="flex items-center justify-between pt-6 border-t border-frater-100">
<div className="flex flex-col">
<span className="text-xs text-frater-400">Cena od</span>
<span className="font-semibold text-lg text-frater-900">3 150 PLN</span>
</div>
<button className="bg-frater-50 hover:bg-frater-100 text-frater-900 p-2.5 rounded-full transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-frater-900 text-frater-50 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<svg className="lucide lucide-quote w-12 h-12 text-frater-500 mx-auto mb-8 opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h2 className="serif text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                "Świat jest książką i ci, którzy nie podróżują, czytają tylko jedną stronę."
            </h2>
<p className="text-frater-300 text-lg mb-10">— św. Augustyn</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
<input className="w-full bg-frater-800 border border-frater-700 rounded-lg px-4 py-3 text-frater-100 placeholder-frater-500 focus:outline-none focus:border-frater-500 focus:ring-1 focus:ring-frater-500" placeholder="Twój adres email" type="email"/>
<button className="w-full sm:w-auto px-6 py-3 bg-frater-500 hover:bg-frater-400 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                    Zapisz się
                </button>
</div>
<p className="text-xs text-frater-500 mt-4">Otrzymuj informacje o nowych terminach i promocjach.</p>
</div>
</section>

<footer className="bg-white border-t border-frater-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="serif text-xl font-bold text-frater-800">FRATER</span>
</div>
<p className="text-base text-frater-500 mb-6">
                        Twoje zaufane biuro podróży w odkrywaniu duchowego dziedzictwa świata.
                    </p>
<div className="flex gap-4">
<a className="text-frater-400 hover:text-frater-600 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-frater-400 hover:text-frater-600 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-frater-400 hover:text-frater-600 transition-colors" href="#"><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
<div>
<h4 className="font-semibold text-frater-900 mb-4">Oferta</h4>
<ul className="space-y-3">
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Pielgrzymki zagraniczne</a></li>
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Pielgrzymki krajowe</a></li>
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Dla parafii</a></li>
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Last Minute</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-frater-900 mb-4">Informacje</h4>
<ul className="space-y-3">
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">O nas</a></li>
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Ubezpieczenia</a></li>
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Dokumenty do pobrania</a></li>
<li><a className="text-base text-frater-500 hover:text-frater-800 transition-colors" href="#">Polityka prywatności</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-frater-900 mb-4">Kontakt</h4>
<ul className="space-y-3">
<li className="text-base text-frater-500 flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 shrink-0 mt-0.5 text-frater-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            ul. Pielgrzymia 12/400-123 Warszawa
                        </li>
<li className="text-base text-frater-500 flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5 shrink-0 text-frater-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            +48 123 456 789
                        </li>
<li className="text-base text-frater-500 flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5 shrink-0 text-frater-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            biuro@frater.pl
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-frater-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-frater-400">
<p>© 2024 Frater Catholic Travel Agency. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="hover:text-frater-600" href="#">Regulamin</a>
<a className="hover:text-frater-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
