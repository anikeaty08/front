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
      

<div className="border-white/[0.08] flex flex-col w-full border-b relative shadow-[0_25px_50px_-15px_rgba(0,0,0,0.7)]">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>

<header className="relative flex w-full max-w-lg mr-auto ml-auto pt-10 pr-6 pb-6 pl-6 items-center justify-between" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex items-center gap-4">

<div className="flex overflow-hidden bg-transparent w-24 h-24 md:w-32 md:h-32 border-white/10 border rounded-full items-center justify-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-teal-500/50">
<img alt="Zdjęcie profilowe" className="object-cover w-full h-full" src="https://i.ibb.co/GfjF1yHD/PROFILOWE-T-O-TU-1.png"/>
</div>
</div>

<div className="flex overflow-hidden bg-transparent w-24 h-24 md:w-32 md:h-32 border-white/10 border rounded-full items-center justify-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-teal-500/50">
<img alt="Logo" className="object-cover w-full h-full scale-105" src="https://i.ibb.co/ZRgQpTHM/PROFILOWE-T-O-TU-3.png"/>
</div>
</header>

<section className="relative max-w-4xl mx-auto px-6 pt-6 pb-24 text-center flex flex-col items-center">
<h1 className="md:text-5xl text-gradient-custom leading-tight text-3xl font-semibold tracking-tight max-w-3xl mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" style={{WebkitTextStroke: '1.5px rgba(0, 0, 0, 0.8)'}}>Jak zasypiać jak dziecko i to już w kilkanaście minut?</h1>

<p className="md:text-gray-300 md:text-base flex items-center gap-2 text-sm font-medium text-gray-100 mt-4 mb-4 drop-shadow-md">PODNAGŁÓWEK</p>
<div className="w-full max-w-3xl relative aspect-video bg-[#011a10] rounded-2xl border border-white/10 shadow-2xl overflow-hidden mb-6 group flex items-center justify-center">

<div className="flex flex-col transition-colors duration-500 group-hover:text-teal-400/60 cursor-pointer text-teal-500/50 bg-gradient-to-tr from-[#011a10] to-[#013220] absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<iconify-icon className="text-6xl mb-4" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-gray-400">Odtwórz nagranie</span>
</div>
</div>
</section>
</div>

<main className="flex-grow w-full relative">

<section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#024a30]/60 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 backdrop-blur-md shadow-lg">
<div className="flex gap-1 text-teal-300 text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-gray-200 text-sm leading-relaxed">"Po raz pierwszy od wielu miesięcy poczułam, jak moje ciało fizycznie opuszcza napięcie. Słucham tego w łóżku i po prostu zasypiam."</p>
<span className="text-xs text-teal-100/70 font-medium mt-auto tracking-wide uppercase">Marta</span>
</div>

<div className="bg-[#024a30]/60 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 backdrop-blur-md shadow-lg">
<div className="flex gap-1 text-teal-300 text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-gray-200 text-sm leading-relaxed">"Żadnych krzyku, żadnego motywowania. Tylko spokojny, uziemiający głos, który prowadzi mnie do bezpiecznego miejsca w mojej głowie."</p>
<span className="text-xs text-teal-100/70 font-medium mt-auto tracking-wide uppercase">Tomasz</span>
</div>

<div className="bg-[#024a30]/60 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 backdrop-blur-md shadow-lg">
<div className="flex gap-1 text-teal-300 text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-gray-200 text-sm leading-relaxed">"Dla mnie to apteczka pierwszej pomocy na dni, kiedy wszystko wydaje się zbyt głośne i zbyt szybkie. Bezcenne."</p>
<span className="text-xs text-teal-100/70 font-medium mt-auto tracking-wide uppercase">Karolina</span>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="text-center max-w-2xl mr-auto ml-auto">
<h2 className="md:text-3xl text-gradient-custom text-2xl font-semibold tracking-tight mb-10">Dlaczego to działa?</h2>
<div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed font-normal drop-shadow-sm">
<p className="">
                        Gdy jesteśmy przebodźcowani, nasz układ nerwowy przełącza się w tryb przetrwania. Tradycyjne metody często wymagają skupienia wzroku lub analizowania skomplikowanych koncepcji, co paradoksalnie dostarcza nowych bodźców.
                    </p>
<p className="">
                        To nagranie opiera się wyłącznie na dźwięku. Pozwala Ci zamknąć oczy, odciąć się od wizualnego hałasu i poprzez odpowiednie częstotliwości oraz rytm słów, łagodnie sprowadzić system nerwowy z powrotem do stanu regulacji i bezpieczeństwa.
                    </p>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-20 max-w-4xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 gap-x-20 gap-y-20">

<div className="">
<h2 className="text-gradient-custom md:text-left text-2xl font-semibold tracking-tight text-center mb-10">Korzyści</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-teal-400 text-xl shrink-0 mt-0.5" icon="solar:shield-check-linear"></iconify-icon>
<div className="">
<span className="block text-base font-medium text-gray-100 mb-1">Głębokie poczucie bezpieczeństwa</span>
<span className="text-sm text-gray-300 leading-relaxed">Sygnały wysyłane do układu nerwowego, które informują ciało, że może wreszcie odpuścić napięcie.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-teal-400 text-xl shrink-0 mt-0.5" icon="solar:moon-sleep-linear"></iconify-icon>
<div className="">
<span className="block text-gray-100 font-medium text-base mb-1">Poprawa jakości snu</span>
<span className="text-sm text-gray-300 leading-relaxed">Koniec z gonitwą myśli na poduszce. Płynne przejście ze stanu aktywności do głębokiego odpoczynku.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-teal-400 text-xl shrink-0 mt-0.5" icon="solar:battery-charge-linear"></iconify-icon>
<div className="">
<span className="block text-gray-100 font-medium text-base mb-1">Zatrzymanie przebodźcowania</span>
<span className="text-sm text-gray-300 leading-relaxed">Cyfrowe wyciszenie, które nie wymaga wysiłku ani nauki skomplikowanych technik medytacyjnych.</span>
</div>
</li>
</ul>
</div>

<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-gradient-custom mb-10 text-center md:text-left">Co otrzymujesz</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-0.5" icon="solar:music-note-linear"></iconify-icon>
<div>
<span className="block text-gray-100 font-medium text-base mb-1">Główne nagranie audio (45 min)</span>
<span className="text-sm text-gray-300 leading-relaxed">Pełna sesja prowadzona do odtwarzania w momentach silnego stresu i wieczorem przed snem.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<span className="block text-gray-100 font-medium text-base mb-1">Wersja "SOS" (10 min)</span>
<span className="text-sm text-gray-300 leading-relaxed">Krótki format zaprojektowany do szybkiej regulacji w ciągu intensywnego dnia pracy.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-0.5" icon="solar:download-square-linear"></iconify-icon>
<div>
<span className="block text-gray-100 font-medium text-base mb-1">Dostęp offline</span>
<span className="text-sm text-gray-300 leading-relaxed">Pliki MP3 do pobrania. Słuchaj w trybie samolotowym, bez powiadomień i przerw.</span>
</div>
</li>
</ul>
</div>
</section>

<section className="flex flex-col text-center pt-20 pr-6 pb-20 pl-6 items-center justify-center">
<p className="text-gray-300 mb-6 text-sm md:text-base max-w-md mx-auto drop-shadow-sm">
                Jeśli czujesz, że Twój układ nerwowy potrzebuje wsparcia, możesz uzyskać natychmiastowy dostęp do nagrań poniżej.
            </p>
<div className="mb-8 flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-md">29.99 zł</span>
</div>
<a className="inline-flex items-center justify-center hover:opacity-90 transition-opacity duration-300 group text-lg font-semibold text-white tracking-wide bg-red-700 rounded-full pt-5 pr-12 pb-5 pl-12 shadow-[0_0_30px_rgba(45,212,191,0.15)]" href="#">
                KUP TERAZ
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="" icon="solar:lock-password-linear"></iconify-icon> Bezpieczna płatność</span>
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:infinity-linear"></iconify-icon> Dostęp na zawsze</span>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-32">
<h3 className="text-xl font-medium text-center text-gray-300 mb-12">Więcej doświadczeń</h3>
<div className="space-y-6">

<div className="bg-gradient-to-r from-[#024a30]/60 to-transparent border-l-2 border-teal-500/50 p-8 rounded-r-2xl backdrop-blur-sm shadow-lg">
<p className="text-gray-200 text-base leading-relaxed mb-4">"Zazwyczaj sceptycznie podchodzę do 'nagrań relaksacyjnych', bo większość z nich ma irytującą muzykę albo sztuczny ton głosu. Tutaj jest zupełnie inaczej. To brzmi jak bezpieczna przestrzeń. Pomogło mi to w najtrudniejszym miesiącu mojego życia zawodowego."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 text-xs font-semibold">M</div>
<span className="text-sm text-gray-300 font-medium">Michał W.</span>
</div>
</div>

<div className="bg-gradient-to-r from-[#024a30]/60 to-transparent border-l-2 border-purple-500/50 p-8 rounded-r-2xl backdrop-blur-sm shadow-lg">
<p className="text-gray-200 text-base leading-relaxed mb-4">"Kupiłam to z myślą o problemach ze snem, a używam głównie w przerwie na lunch. Te 10 minut ratunkowe to reset dla mojego mózgu. Wracam do pracy bez tego uczucia ścisku w klatce piersiowej."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 text-xs font-semibold">A</div>
<span className="text-sm text-gray-300 font-medium">Anna P.</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-10 px-6 mt-auto bg-black/20 backdrop-blur-sm relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
<p>© 2024 Oddech. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="hover:text-gray-300 transition-colors" href="#">Regulamin</a>
<a className="hover:text-gray-300 transition-colors" href="#">Polityka prywatności</a>
<a className="hover:text-gray-300 transition-colors" href="#">Kontakt</a>
</div>
</div>
</footer>

    </>
  );
}
