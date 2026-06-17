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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
primary: '#3b82f6', // Blue 500
border: 'rgba(255,255,255,0.08)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:water-sun-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight text-white">MAZURY<span className="text-white/40">CUP</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#about">O Zawodach</a>
<a className="hover:text-white transition-colors duration-200" href="#gallery">Galeria</a>
<a className="hover:text-white transition-colors duration-200" href="#rules">Regulamin</a>
</div>
<a className="hidden md:inline-flex group items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all duration-200" href="#contact">
                Dołącz teraz
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden p-2 text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 mesh-gradient pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-200 tracking-wide">EDYCJA JESIEŃ 2024</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Puchar Wielkich Jezior.<br/>
                Mistrzostwa Spinningowe.
            </h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Dołącz do elity wędkarzy na największych jeziorach Mazur. Rywalizacja, pasja i niezapomniane emocje w walce o tytuł Mistrza Sezonu.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Zapisz się na listę
                    <iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    Zobacz relację 2023
                    <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto">
<div className="bg-background p-6 flex flex-col items-center">
<span className="text-3xl font-medium text-white tracking-tight">120+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Uczestników</span>
</div>
<div className="bg-background p-6 flex flex-col items-center">
<span className="text-3xl font-medium text-white tracking-tight">45k</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Pula Nagród</span>
</div>
<div className="bg-background p-6 flex flex-col items-center">
<span className="text-3xl font-medium text-white tracking-tight">3</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Dni Zmagań</span>
</div>
<div className="bg-background p-6 flex flex-col items-center">
<span className="text-3xl font-medium text-white tracking-tight">118</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">cm Rekord</span>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Strefa Profesjonalistów</h2>
<p className="text-zinc-400 max-w-md">Tworzymy przestrzeń dla pasjonatów wędkarstwa sportowego, gdzie liczy się technika, sprzęt i strategia.</p>
</div>
<a className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors" href="#">
                    Poznaj zasady
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:water-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Jezioro Śniardwy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Największy akwen w Polsce. Zróżnicowane dno, liczne górki podwodne i rozległe płycizny. Idealne łowisko szczupaka i okonia.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-purple-500" icon="solar:cup-star-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Nagrody Premium</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Sprzęt wędkarski topowych marek, echosondy Lowrance oraz nagrody pieniężne dla pierwszej dziesiątki.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-emerald-500" icon="solar:camera-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Relacja Live</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Pełna relacja wideo z dronów i łodzi sędziowskich. Profesjonalne zdjęcia każdej zgłoszonej ryby.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface/30 relative border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Galeria Brzeg Dolny</h2>
<p className="text-zinc-400 max-w-lg">Zobacz relację z zawodów w Brzegu Dolnym.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group border border-white/5">
<img alt="Brzeg Dolny Most Wolności" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/Nz0JG1f/brzeg-dolny-most-wolnosci-4czerwca.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<span className="text-white font-medium">Most Wolności</span>
<span className="text-zinc-400 text-xs mt-1">Brzeg Dolny</span>
</div>
</div>

<div className="rounded-xl overflow-hidden relative group border border-white/5">
<img alt="Dolnobrzeski Ośrodek Kultury" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/FbKbgwFX/Dolnobrzeski-Osrodek-Kultury-i-Urzad-Miejski.jpg"/>
</div>

<div className="rounded-xl overflow-hidden relative group border border-white/5">
<img alt="Zawodnicy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/NgjDPpFK/bez-opisu-8.jpg"/>
</div>

<div className="rounded-xl overflow-hidden relative group border border-white/5">
<img alt="Rzeka Odra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/5g9cKBWy/otwierajace-218x150.jpg"/>
</div>

<div className="rounded-xl overflow-hidden relative group border border-white/5">
<img alt="Wędkarstwo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/hFxv9VCm/otwieraj-ce-scaled-218x150.jpg"/>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                    Zobacz pełną galerię
                </button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Zarejestruj się</h2>
<p className="text-sm text-zinc-400">Liczba miejsc ograniczona. Decyduje kolejność zgłoszeń.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 ml-1">Imię</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" placeholder="Jan" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 ml-1">Nazwisko</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" placeholder="Kowalski" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 ml-1">Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 ml-1">Kategoria</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none">
<option>Spinning (z łodzi)</option>
<option>Casting (z łodzi)</option>
<option>Team (2 osoby)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-white/20 rounded bg-black/50 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors leading-tight">Akceptuję regulamin zawodów oraz wyrażam zgodę na przetwarzanie danych.</span>
</label>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-6 flex items-center justify-center gap-2" type="button">
                        Wyślij zgłoszenie
                        <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white/5 rounded border border-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:water-sun-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">MAZURY<span className="text-zinc-600">CUP</span></span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon>
</a>
</div>
<p className="text-xs text-zinc-600">© 2024 Mazury Cup. Wszelkie prawa zastrzeżone.</p>
</div>
</footer>

    </>
  );
}
