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
heading: ['Outfit', 'sans-serif'],
},
colors: {
mosque: {
950: '#010f0d',
900: '#04211e',
800: '#0f3833',
gold: '#D4AF37',
accent: '#FCD34D',
text: '#E2E8F0',
}
},
animation: {
'scroll-text': 'scroll 25s linear infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // 1. Digital Clock & Date
        function updateTime() {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        }
        setInterval(updateTime, 1000);
        updateTime();

        // 2. Countdown Logic (Simulated)
        function updateCountdown() {
            const now = new Date();
            const target = new Date(now);
            target.setHours(now.getHours() + 1, 0, 0, 0); // Placeholder target
            const diff = target - now;
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById('countdown').innerText = 
                `${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
        }
        setInterval(updateCountdown, 1000);

        // 3. Book Banner Rotation
        let currentBook = 1;
        function rotateBooks() {
            const b1 = document.getElementById('book-slide-1');
            const b2 = document.getElementById('book-slide-2');
            
            if (currentBook === 1) {
                // Hide 1
                b1.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                // Show 2
                b2.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                currentBook = 2;
            } else {
                // Hide 2
                b2.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
                // Show 1
                b1.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
                currentBook = 1;
            }
        }
        setInterval(rotateBooks, 6000); // Change book every 6 seconds

    
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
      

<header className="flex z-50 bg-emerald-700/80 h-[11vh] border-white/5 border-b px-10 backdrop-blur-md items-center justify-between shrink-0">

<div className="flex items-center gap-6">
<div className="flex bg-center w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30d77bae-5a4b-4dbf-947d-4ee9b1811e49_320w.png)] bg-cover rounded-xl shadow-lg items-center justify-center border border-white/10">
<iconify-icon className="text-white text-3xl" icon="solar:mosque-bold"></iconify-icon>
</div>
<div className="">
<h1 className="uppercase text-2xl font-semibold text-white tracking-wider font-heading">associazione culturale ritrovo di meolo</h1>
<div className="flex mt-1 gap-3 items-center">
<span className="h-[1px] w-6 bg-mosque-gold/50"></span>
<p className="text-mosque-accent/80 uppercase text-xs font-medium tracking-widest">via amando diaz,2, 30020 meolo ve</p>
</div>
</div>
</div>

<div className="text-right">
<div className="text-5xl font-heading font-semibold text-white tracking-tight tabular-nums leading-none mb-1" id="clock">18:39</div>
<div className="flex items-center justify-end gap-2 text-mosque-text/70 text-base font-medium">
<span id="date-gregorian">Venerdì, 25 Ottobre</span>
<span className="text-mosque-gold">•</span>
<span id="date-hijri">14 Shawwal 1445</span>
</div>
</div>
</header>

<main className="flex-1 grid grid-cols-12 gap-6 overflow-hidden p-6 relative">

<section className="col-span-7 flex flex-col h-full">

<div className="grid grid-cols-12 px-6 py-3 bg-mosque-800/40 rounded-t-xl border-b border-white/5 text-mosque-text/60 text-xs font-semibold uppercase tracking-widest shrink-0">
<div className="col-span-4 flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Salah</div>
<div className="col-span-4 text-center">Adhān</div>
<div className="col-span-4 text-right">Iqāmah</div>
</div>

<div className="flex-1 glass-panel rounded-b-xl flex flex-col justify-between overflow-hidden">

<div className="prayer-row flex-1 grid grid-cols-12 items-center px-8 border-b border-white/5">
<div className="col-span-4 text-xl font-heading font-medium text-white">Fajr</div>
<div className="col-span-4 text-mosque-text tabular-nums text-2xl font-light font-sans text-center">05:45</div>
<div className="col-span-4 text-2xl font-semibold font-sans text-right text-mosque-accent tabular-nums">06:15</div>
</div>

<div className="prayer-row flex-1 grid grid-cols-12 items-center px-8 border-b border-white/5">
<div className="col-span-4 text-xl font-heading font-medium text-white">Dhuhr</div>
<div className="col-span-4 text-2xl font-light font-sans text-center text-mosque-text tabular-nums">12:30</div>
<div className="col-span-4 text-2xl font-semibold font-sans text-right text-mosque-accent tabular-nums">13:00</div>
</div>

<div className="prayer-row active flex-1 grid grid-cols-12 items-center px-8 border-b border-white/5 relative">
<div className="col-span-4 flex flex-col justify-center">
<span className="text-3xl font-heading font-semibold text-white">Asr</span>
<span className="text-[10px] font-bold text-mosque-gold uppercase tracking-wider mt-0.5">In Corso</span>
</div>
<div className="col-span-4 text-3xl font-light font-sans text-center text-white tabular-nums">15:45</div>
<div className="col-span-4 text-3xl font-bold font-sans text-right text-mosque-accent tabular-nums">16:15</div>
</div>

<div className="prayer-row flex-1 grid grid-cols-12 items-center px-8 border-b border-white/5">
<div className="col-span-4 text-xl font-heading font-medium text-white">Maghrib</div>
<div className="col-span-4 text-2xl font-light font-sans text-center text-mosque-text tabular-nums">18:12</div>
<div className="col-span-4 text-2xl font-semibold font-sans text-right text-mosque-accent tabular-nums">18:22</div>
</div>

<div className="prayer-row flex-1 grid grid-cols-12 items-center px-8">
<div className="col-span-4 text-xl font-heading font-medium text-white">Isha</div>
<div className="col-span-4 text-2xl font-light font-sans text-center text-mosque-text tabular-nums">19:45</div>
<div className="col-span-4 text-2xl font-semibold font-sans text-right text-mosque-accent tabular-nums">20:15</div>
</div>
</div>
</section>

<section className="col-span-5 flex flex-col gap-4 h-full">

<div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-900 to-mosque-950 border border-white/10 shadow-2xl group py-6 px-6">

<div className="absolute top-0 right-0 w-32 h-32 bg-mosque-gold/10 blur-[60px] rounded-full"></div>
<div className="flex flex-col z-10 text-center relative items-center justify-center">
<div className="flex items-center gap-2 mb-2 text-mosque-gold uppercase tracking-[0.2em] text-xs font-semibold">
<iconify-icon className="text-base" icon="solar:hourglass-line-linear"></iconify-icon> Prossima
                    </div>
<h2 className="text-5xl font-heading font-bold text-white mb-2 tracking-tight">Maghrib</h2>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-mosque-text/50 uppercase tracking-widest mb-1">Mancano</span>
<span className="text-4xl font-mono font-medium text-mosque-accent tabular-nums tracking-tight" id="countdown">01:25:40</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="glass-panel flex flex-col border-t-2 border-t-sky-400/50 rounded-xl py-4 items-center justify-center">
<div className="flex items-center gap-2 text-sky-200/80 text-[10px] font-bold uppercase tracking-widest mb-1">
<iconify-icon className="text-base" icon="solar:sun-fog-linear"></iconify-icon> Suḥūr
                    </div>
<span className="text-2xl font-sans font-medium text-white tabular-nums">04:15</span>
</div>
<div className="glass-panel flex flex-col border-t-2 border-t-orange-400/50 rounded-xl py-4 items-center justify-center">
<div className="flex items-center gap-2 text-orange-200/80 text-[10px] font-bold uppercase tracking-widest mb-1">
<iconify-icon className="text-base" icon="solar:moon-stars-linear"></iconify-icon> Iftar
                    </div>
<span className="text-2xl font-sans font-medium text-white tabular-nums">18:12</span>
</div>
</div>

<div className="flex-1 glass-panel overflow-hidden flex rounded-xl p-6 relative items-center justify-center">
<div className="w-full text-center" id="widget-slide-1">
<iconify-icon className="text-4xl text-emerald-400 mb-3" icon="solar:book-2-linear"></iconify-icon>
<p className="font-heading text-lg font-medium text-white italic leading-relaxed">
                        "E offrite la preghiera, pagate la Zakat e inchinatevi con coloro che si inchinano."
                    </p>
<p className="text-xs text-mosque-text/60 mt-2 uppercase tracking-widest">Surah Al-Baqarah 2:43</p>
</div>
</div>
</section>
</main>

<section className="h-[10vh] bg-mosque-900/90 border-t border-white/5 backdrop-blur flex items-center justify-center relative overflow-hidden shrink-0 z-40">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

<div className="book-slide absolute inset-0 flex items-center justify-center gap-8 w-full" id="book-slide-1">
<div className="flex items-center gap-5">

<div className="h-[7vh] w-[5vh] bg-amber-800 rounded-r-md border-l-2 border-white/20 shadow-lg relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<span className="text-[8px] text-amber-100/50 -rotate-90">KORAN</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="bg-mosque-gold text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Nuovo Arrivo</span>
<h4 className="text-mosque-gold/80 font-bold uppercase tracking-widest text-xs">Libro del Mese</h4>
</div>
<p className="text-white font-heading font-medium text-xl tracking-tight">Il Nobile Corano: Traduzione e Commento</p>
</div>
<button className="ml-4 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase tracking-widest text-white transition-colors">
                    Dettagli
                </button>
</div>
</div>

<div className="book-slide opacity-0 translate-y-4 absolute inset-0 flex items-center justify-center gap-8 w-full pointer-events-none" id="book-slide-2">
<div className="flex items-center gap-5">
<div className="h-[7vh] w-[5vh] bg-emerald-900 rounded-r-md border-l-2 border-white/20 shadow-lg relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
<span className="text-[8px] text-emerald-100/50 -rotate-90">DUA</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Popolare</span>
<h4 className="text-mosque-gold/80 font-bold uppercase tracking-widest text-xs">Libreria</h4>
</div>
<p className="text-white font-heading font-medium text-xl tracking-tight">Fortezza del Musulmano (Hisn al-Muslim)</p>
</div>
</div>
</div>
</section>

<footer className="h-[6vh] bg-mosque-gold shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex relative z-50 shrink-0">

<div className="flex gap-3 z-20 bg-mosque-950 px-6 relative items-center">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-white font-bold uppercase tracking-widest text-xs">Avvisi</span>
<div className="absolute -right-4 top-0 bottom-0 w-4 bg-mosque-950 transform skew-x-[-15deg]"></div>
</div>

<div className="flex-1 flex overflow-hidden text-lg font-semibold text-mosque-950 bg-emerald-700 relative items-center">
<div className="whitespace-nowrap animate-scroll-text flex gap-24 pl-10">
<span className="flex items-center gap-3 text-white"><iconify-icon icon="solar:bell-linear"></iconify-icon> Si prega di spegnere i cellulari all'ingresso.</span>
<span className="flex items-center gap-3 text-white"><iconify-icon icon="solar:book-bookmark-linear"></iconify-icon> Lezione di Tafsir ogni Sabato dopo il Maghrib.</span>
<span className="flex items-center gap-3 text-white"><iconify-icon icon="solar:heart-angle-linear"></iconify-icon> Dona generosamente per la costruzione.</span>
</div>
</div>
</footer>


<response className="" style={{}}></response>

    </>
  );
}
