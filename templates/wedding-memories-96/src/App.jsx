import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
<i className="w-4 h-4 fill-current" data-lucide="heart"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Linklove</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#">Home</a>
<a className="hover:text-brand-600 transition-colors" href="#">Blog</a>
<a className="text-brand-600" href="#">Memories</a>
<a className="hover:text-brand-600 transition-colors" href="#">RSVP</a>
<a className="hover:text-brand-600 transition-colors" href="#">FAQ</a>
<a className="hover:text-brand-600 transition-colors" href="#">Kontakt</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium hover:bg-brand-100 transition-colors border border-brand-200/50">
                        Zaloguj się
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>

<button className="md:hidden p-2 text-slate-500 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2 text-sm text-slate-500 mb-8 lg:mb-12">
<span className="hover:text-slate-900 cursor-pointer transition-colors">Strona główna</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-right"></i>
<span className="text-brand-600 font-medium">Aplikacja Weselna Memories</span>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-brand-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
<i className="w-6 h-6" data-lucide="infinity"></i>
</div>
<div className="h-8 w-px bg-slate-300 mx-1"></div>
<span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">Memories</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Aplikacja Weselna do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-500">Zbierania Zdjęć</span> i Filmów przez Kod QR
                    </h1>
<p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 lg:pr-10">
                        Goście skanują kod QR i przez 2 tygodnie mogą dodawać swoje zdjęcia i filmy, które pojawiają się natychmiast w galerii dla wszystkich uczestników. Automatyczna kompresja zapewnia błyskawiczne ładowanie, a Ty masz pełną kontrolę nad pamiątkami.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white text-base font-medium rounded-xl hover:bg-brand-700 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5">
<i className="w-5 h-5 transition-transform group-hover:scale-110" data-lucide="shopping-cart"></i>
<span>Zamów LinkLove Memories</span>
</button>
<div className="flex items-center gap-2 text-sm text-slate-500 px-2">
<i className="w-4 h-4 text-green-500" data-lucide="shield-check"></i>
<span>Bezpieczne przechowywanie przez 6 miesięcy</span>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-[100px] -z-10"></div>

<div className="relative mx-auto border-slate-900 bg-slate-900 border-[12px] rounded-[3rem] h-[700px] w-[360px] shadow-2xl flex flex-col overflow-hidden rotate-[-4deg] hover:rotate-0 transition-all duration-700 ease-out z-10 ring-1 ring-slate-900/5">

<div className="h-[30px] w-full bg-white absolute top-0 left-0 right-0 z-20 rounded-t-[2.5rem] flex justify-center">
<div className="h-[22px] w-[100px] bg-black rounded-b-2xl absolute top-0"></div>
</div>

<div className="flex-1 bg-slate-50 pt-10 pb-4 px-4 overflow-y-auto no-scrollbar relative flex flex-col h-full">

<div className="text-center mb-6 mt-2">
<div className="flex items-center justify-center gap-1 mb-4 opacity-80">
<i className="w-4 h-4 text-brand-600" data-lucide="infinity"></i>
<span className="text-xs font-semibold text-slate-900">Linklove</span>
<span className="text-xs text-brand-500 font-medium">| MEMORIES</span>
</div>
<h2 className="font-serif text-3xl text-slate-900 mb-1" style={{fontFamily: '\'Times New Roman\', serif', fontStyle: 'italic'}}>Janek &amp; Małgosia</h2>
<p className="text-xs text-slate-500 font-medium">15 Sierpnia 2024</p>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-4">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Podziel się swoimi wspomnieniami!</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                                    Wybierz najlepsze zdjęcia i filmy z tego wydarzenia ze swojego telefonu i prześlij je tutaj. Pomóż stworzyć wspólną galerię wspomnień!
                                </p>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-4 flex-1">
<div className="mb-4">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Komentarz <span className="text-slate-400 font-normal">(opcjonalnie)</span></label>
<input className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="np. życzenia dla Pary Młodej" type="text"/>
</div>
<div className="mb-2">
<div className="flex justify-between items-center mb-1.5">
<label className="block text-xs font-medium text-slate-700">Wrzuć zdjęcia i filmy</label>
<span className="text-[10px] text-slate-400">0/400 znaków</span>
</div>
<div className="border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 p-6 text-center hover:border-brand-400 hover:bg-brand-50/30 transition-all cursor-pointer group">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-3 group-hover:scale-110 transition-transform text-brand-600">
<i className="w-5 h-5" data-lucide="cloud-upload"></i>
</div>
<p className="text-xs font-medium text-slate-900 mb-0.5">Kliknij aby wybrać pliki</p>
<p className="text-[10px] text-slate-400">Obsługiwane formaty: zdjęcia i filmy</p>
</div>
<div className="text-right mt-1">
<span className="text-[10px] text-slate-400">0/100 plików</span>
</div>
</div>
<button className="w-full py-3 bg-slate-800 text-white text-xs font-medium rounded-lg mt-2 flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors">
<i className="w-3 h-3" data-lucide="upload"></i>
                                    Wrzuć wspomnienia
                                </button>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mt-auto">
<div className="flex justify-between items-center mb-2">
<h3 className="text-sm font-semibold text-slate-900">Galeria wspomnień</h3>
<span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">6 wspomnień</span>
</div>
<p className="text-[10px] text-slate-500 mb-3">Przeglądaj wspomnienia ze ślubu Janka i Małgosi</p>
<div className="flex gap-2 overflow-hidden">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 animate-pulse"></div>
<div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 animate-pulse delay-75"></div>
<div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 animate-pulse delay-150"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 bottom-20 bg-white p-3 rounded-xl shadow-xl border border-slate-100 animate-bounce duration-[3000ms]">
<i className="w-6 h-6 text-brand-500" data-lucide="image"></i>
</div>
<div className="absolute -left-8 top-40 bg-white p-3 rounded-xl shadow-xl border border-slate-100 animate-bounce duration-[4000ms]">
<i className="w-6 h-6 text-pink-500" data-lucide="video"></i>
</div>
</div>
</div>
</div>
</main>

<section className="py-16 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Jak działa zbieranie zdjęć z wesela przez <br className="hidden sm:block"/>
                aplikację LinkLove Memories
            </h2>
<p className="text-lg text-slate-500 mb-16 max-w-2xl mx-auto">
                3 proste kroki do zebrania wszystkich wspomnień weselnych od gości
            </p>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-brand-600 text-white text-lg font-semibold rounded-full flex items-center justify-center mb-6 ring-4 ring-brand-50 shadow-lg shadow-brand-500/20 z-10">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Zamów Aplikację</h3>
<p className="text-base text-slate-500 px-4">Wybierz pakiet i otrzymaj dostęp do panelu pary młodej.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-brand-500 text-white text-lg font-semibold rounded-full flex items-center justify-center mb-6 ring-4 ring-brand-50 shadow-lg shadow-brand-500/20 z-10">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Wydrukuj Kod QR</h3>
<p className="text-base text-slate-500 px-4">Umieść kod na stołach lub winietkach dla gości.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-brand-400 text-white text-lg font-semibold rounded-full flex items-center justify-center mb-6 ring-4 ring-brand-50 shadow-lg shadow-brand-500/20 z-10">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Zbieraj Wspomnienia</h3>
<p className="text-base text-slate-500 px-4">Ciesz się wszystkimi zdjęciami i filmami w jednej galerii.</p>
</div>
</div>
</div>
</section>


    </>
  );
}
