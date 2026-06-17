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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchLanguage(lang) {
            const contentPl = document.getElementById('content-pl');
            const contentEn = document.getElementById('content-en');
            const btnPl = document.getElementById('lang-btn-pl');
            const btnEn = document.getElementById('lang-btn-en');
            
            if (lang === 'en') {
                contentPl.classList.add('hidden');
                contentEn.classList.remove('hidden');
                
                btnEn.classList.add('text-sky-900', 'font-medium');
                btnEn.classList.remove('text-slate-400');
                
                btnPl.classList.remove('text-sky-900', 'font-medium');
                btnPl.classList.add('text-slate-400');
            } else {
                contentEn.classList.add('hidden');
                contentPl.classList.remove('hidden');
                
                btnPl.classList.add('text-sky-900', 'font-medium');
                btnPl.classList.remove('text-slate-400');
                
                btnEn.classList.remove('text-sky-900', 'font-medium');
                btnEn.classList.add('text-slate-400');
            }
        }

        // Countdown Timer Logic (Targeting May 30, 2026 15:00:00 CEST / UTC+2)
        const targetDate = new Date("2026-05-30T15:00:00+02:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update PL
            document.getElementById("cd-days-pl").innerText = days;
            document.getElementById("cd-hours-pl").innerText = hours.toString().padStart(2, '0');
            document.getElementById("cd-minutes-pl").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("cd-seconds-pl").innerText = seconds.toString().padStart(2, '0');

            // Update EN
            document.getElementById("cd-days-en").innerText = days;
            document.getElementById("cd-hours-en").innerText = hours.toString().padStart(2, '0');
            document.getElementById("cd-minutes-en").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("cd-seconds-en").innerText = seconds.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    
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
      
<main className="max-w-4xl mx-auto bg-[#fffdfa] shadow-xl shadow-sky-900/5 relative overflow-hidden rounded-sm">

<div className="sm:top-10 sm:right-10 z-50 flex gap-3 uppercase text-xs text-slate-400 tracking-[0.2em] font-['Inter'] bg-[#fffdfa]/80 border-sky-900/5 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-6 right-6 backdrop-blur-sm">
<button className="text-sky-900 font-medium transition-colors hover:text-sky-900" id="lang-btn-pl" onclick="switchLanguage('pl')">PL</button>
<span className="opacity-30">|</span>
<button className="transition-colors hover:text-sky-900" id="lang-btn-en" onclick="switchLanguage('en')">EN</button>
</div>

<img alt="Watercolor Lemons" className="absolute -top-16 -left-16 w-64 sm:w-80 opacity-90 pointer-events-none transform -rotate-12 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8159b70-4600-41de-9e82-fa21ce9f7bd8_800w.png"/>
<img alt="Watercolor Lemons" className="absolute -bottom-24 -right-24 w-80 sm:w-96 opacity-90 pointer-events-none transform rotate-[160deg] z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8159b70-4600-41de-9e82-fa21ce9f7bd8_800w.png"/>

<div className="border-[1px] sm:m-6 pointer-events-none z-10 border-sky-900/10 mt-3 mr-3 mb-3 ml-3 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="border-[1px] sm:m-8 pointer-events-none z-10 border-emerald-700/10 mt-4 mr-4 mb-4 ml-4 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="sm:px-16 sm:py-24 z-20 pt-20 pr-6 pb-16 pl-6 relative">

<div className="flex z-20 mb-10 relative justify-center">
<div className="sm:w-52 aspect-[3/4] overflow-hidden shadow-sky-900/10 w-44">
<img alt="Romantic Couple at Sunset" className="transition-all duration-1000 scale-[0.85] -rotate-6 hover:scale-[0.90] hover:-rotate-3 w-full h-full object-cover rounded-tl-[50%] rounded-br-[50%] rounded-tr-2xl rounded-bl-2xl border-4 border-white shadow-xl shadow-sky-900/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1996166-270e-43d0-9be2-da9f38d939c2_800w.jpg"/>
</div>
</div>

<div className="" id="content-pl">

<section className="text-center my-12 relative">
<span className="block uppercase text-xs font-normal text-emerald-700/70 tracking-[0.3em] mb-8">
                        Będzie ślub!
                    </span>
<h1 className="sm:text-8xl md:text-9xl leading-tight text-7xl text-sky-900 tracking-tight font-['Alex_Brush'] mb-8">
                        Natalia <span className="text-4xl sm:text-6xl mx-2 text-yellow-500/80">&amp;</span> Olek
                    </h1>
<div className="sm:text-2xl uppercase flex flex-col sm:flex-row sm:gap-6 text-xl text-sky-900 tracking-widest font-['Cormorant_Garamond'] mb-12 items-center justify-center">
<span className="">30 Maja 2026</span><span className="hidden sm:block text-emerald-600">·</span><span className="">15:00</span>
<span className="hidden sm:block text-emerald-600">·</span><span className="">Zamek Topacz</span>
</div>
<div className="max-w-2xl mr-auto ml-auto">
<p className="leading-relaxed text-lg font-light italic text-slate-600 text-center">Cieszymy się, że będziecie częścią tego wyjątkowego dnia! Chcemy, abyście czuli się swobodnie, dlatego w tym miejscu zebraliśmy kilka wskazówek i informacji, które ułatwią nam wspólne świętowanie<iconify-icon className="inline-block text-xl text-yellow-500 ml-1 translate-y-1" icon="solar:wineglass-linear" style={{strokeWidth: '1.5'}}></iconify-icon></p>
</div>

<div className="mt-14">
<p className="font-['Alex_Brush'] text-4xl sm:text-5xl text-sky-900 mb-6 text-center">Widzimy się za...</p>
<div className="flex justify-center items-center gap-4 sm:gap-8 bg-white/60 py-5 px-6 sm:px-10 border border-sky-900/5 rounded-full backdrop-blur-sm mx-auto max-w-fit shadow-sm shadow-sky-900/5">
<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-days-pl">31</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Dni</span>
</div>
<span className="text-2xl text-sky-900/20 font-light mb-4">:</span>
<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-hours-pl">17</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Godz</span>
</div>
<span className="text-2xl text-sky-900/20 font-light mb-4">:</span>
<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-minutes-pl">22</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Min</span>
</div>
<span className="text-2xl text-sky-900/20 font-light mb-4 hidden sm:inline">:</span>
<div className="flex-col items-center min-w-[3rem] sm:min-w-[4rem] hidden sm:flex">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-seconds-pl">59</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Sek</span>
</div>
</div>
</div>
</section>
<div className="h-px bg-sky-900/10 w-16 mr-auto mb-12 ml-auto"></div>

<div className="space-y-12">

<section className="">
<div className="flex flex-col mb-10 items-center">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Dzień ślubu</h2>
</div>
<div className="text-lg font-light text-slate-600 max-w-xl mr-auto ml-auto space-y-6">
<div className="flex border-sky-900/5 border-b pb-4 items-center justify-between">
<span className="font-normal text-sky-900">Data:</span>
<span className="">30 maja 2026 (sobota)</span>
</div>
<div className="flex border-sky-900/5 border-b pb-4 items-center justify-between">
<span className="font-normal text-sky-900">Miejsce:</span>
<span className="text-right">Zamek Topacz</span>
</div>
<div className="pt-6">
<div className="space-y-5">
<div className="flex gap-6 group gap-x-6 gap-y-6 items-start">
<div className="w-16 text-right font-normal text-sky-900 pt-0.5">15:00</div>
<div className="flex-1 group-last:border-0 border-sky-900/5 border-b pb-5">
<p className="text-slate-700">Ceremonia cywilna</p>
<p className="text-sm text-slate-400 mt-1 uppercase tracking-wider">Oficyna, ogród zamkowy</p>
</div>
</div><div className="flex gap-6 group gap-x-6 gap-y-6 items-start">
<div className="font-normal text-sky-900 text-right w-16 pt-0.5">16:00</div>
<div className="flex-1 group-last:border-0 border-sky-900/5 border-b pb-5">
<p className="text-slate-700">Rozpoczęcie przyjęcia weselnego</p>
<p className="uppercase text-sm text-slate-400 tracking-wider mt-1">Sala Balowa</p>
</div>
</div>
<div className="flex gap-6 group items-start">
<div className="w-16 text-right font-normal text-sky-900 pt-0.5">4:00</div>
<div className="flex-1 group-last:border-0 border-sky-900/5 border-b pb-5">
<p className="text-slate-700">Zakończenie wesela</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="h-px bg-emerald-700/10 w-12 mr-auto mb-12 ml-auto"></div>

<section className="">
<div className="flex flex-col mb-8 items-center">
<iconify-icon className="text-4xl text-emerald-600 mb-4" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Ceremonia</h2>
</div>
<div className="leading-relaxed text-lg font-light text-slate-600 text-center max-w-2xl mr-auto ml-auto space-y-4">
<p className="">Nasza ceremonia będzie <span className="font-normal text-emerald-700">ślubem cywilnym</span> – uroczystym, radosnym i pełnym emocji. Odbędzie się <span className="font-normal text-emerald-700">na świeżym powietrzu, w ogrodzie budynku Oficyna</span> na terenie Zamku Topacz.</p>
<p className="">Prosimy o punktualne przybycie – ceremonia rozpoczyna się dokładnie o godzinie <span className="font-normal text-sky-900">15:00</span> i potrwa około <span className="font-normal text-sky-900">20 minut</span>. Miejsca siedzące prosimy zostawić dla starszych gości i osób potrzebujących większego komfortu.</p>
</div>
</section>
<div className="w-12 h-px bg-sky-900/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-8">
<iconify-icon className="text-4xl text-yellow-500 mb-4" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Miejsce – Zamek Topacz</h2>
</div>
<div className="leading-relaxed text-lg font-light text-slate-600 text-center max-w-2xl mr-auto ml-auto space-y-6">
<p className="">Zamek Topacz to wyjątkowy kompleks położony w Kobierzycach, zaledwie kilkanaście minut od centrum Wrocławia. Historyczny charakter miejsca, otoczony parkiem i ogrodami, tworzy niepowtarzalną atmosferę.</p>
<div className="bg-sky-50/50 p-6 rounded-sm border border-sky-100 mt-8 transition-colors hover:bg-sky-50/80">
<p className="font-normal text-sky-900 mb-1">Zamek Topacz</p>
<p className="text-sm text-slate-500 mb-4">ul. Templariuszy 1, 55-040 Ślęza</p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-normal text-sky-700 hover:text-emerald-600 transition-colors" href="https://maps.app.goo.gl/a9AENXNN9ngHyQXo6" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> Pokaż na mapie
                                </a>
</div>
<p className="flex items-center justify-center gap-2 text-base text-slate-500 mt-6"><iconify-icon className="text-xl text-sky-700" icon="solar:signpost-linear"></iconify-icon>Na miejscu dostępny jest bezpłatny parking dla gości. Samochody mogą zostać na parkingu do niedzieli 31 maja.</p><p className="flex items-center justify-center gap-2 text-base text-slate-500 mt-6">Aby skorzystać z bezpłatnego parkingu, przed wyjazdem samochodem trzeba podejść do restauracji hotelowej i wpisać numer rejestracyjny pojazdu na dostępnym tam tablecie.</p>
</div>
</section>
<div className="h-px bg-emerald-700/10 w-12 mr-auto ml-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-8">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Noclegi</h2>
</div>
<div className="leading-relaxed text-lg font-light text-slate-600 text-center max-w-2xl mr-auto ml-auto space-y-6">
<p className="">Dla gości, którzy zgłosili potrzebę noclegu, zarezerwowaliśmy miejsca w <span className="font-normal text-sky-900">Hotelu Bielany</span>, który znajduje się zaledwie <span className="font-normal text-sky-900">5 minut jazdy samochodem</span> od Zamku Topacz – idealnie, żebyście mogli bawić się do końca bez stresu o powrót!</p>
<p className="font-light text-emerald-800 bg-emerald-50/50 border-emerald-100 border rounded-sm pt-5 pr-5 pb-5 pl-5">W razie jakichkolwiek zmian dotyczących noclegu – dajcie nam znać jak najszybciej.</p><p className="">Doba hotelowa trwa od <span className="font-normal text-sky-900">13:00</span> w dniu przyjazdu do <span className="font-normal text-sky-900">12:00</span> w dniu wyjazdu. Śniadanie w formie bufetu szwedzkiego jest serwowane w godz. <span className="font-normal text-sky-900">6:30 – 10:30</span>. Na miejscu dostępny jest bezpłatny parking dla gości hotelowych.</p>
<div className="bg-amber-50/30 p-6 rounded-sm border border-amber-100 mt-8 transition-colors hover:bg-amber-50/60">
<p className="font-normal text-sky-900 mb-1">Hotel Bielany</p>
<p className="text-sm text-slate-500 mb-4">ul. Klecińska 3, 55-040 Bielany Wrocławskie</p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-normal text-yellow-600 hover:text-yellow-700 transition-colors" href="https://maps.app.goo.gl/GautmzJEMra4GPBz6" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> Pokaż na mapie
                                </a>
</div>
</div>
</section>
<div className="w-12 h-px bg-sky-900/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-10">
<iconify-icon className="text-4xl text-emerald-600 mb-4" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Dojazd i transport</h2>
</div>
<div className="grid md:grid-cols-2 gap-12 max-w-3xl mr-auto ml-auto gap-x-12 gap-y-12">
<div className="space-y-4">
<h3 className="font-normal text-sky-900 text-xl border-b border-sky-900/5 pb-2 mb-4 tracking-tight">Na wesele</h3>
<p className="text-lg font-light text-slate-600">
                                    Goście przybywają na Zamek Topacz we własnym zakresie. Na miejscu dostępny jest bezpłatny parking.
                                </p>
<p className="text-lg font-light text-slate-600">
                                    Zamek Topacz znajduje się ok. <span className="font-normal text-sky-900">15–20 minut jazdy</span> od centrum Wrocławia.
                                </p>
<div className="flex items-start gap-3 mt-4 text-slate-500 bg-[#fafafa] p-4 rounded-sm border border-slate-100">
<iconify-icon className="text-xl text-slate-400 mt-0.5 shrink-0" icon="solar:magnifer-linear"></iconify-icon>
<p className="text-sm font-light leading-relaxed">Wyszukajcie w mapach:<br/><span className="italic font-normal text-sky-900">„Zamek Topacz, Ślęza"</span></p>
</div>
</div>
<div className="space-y-4">
<h3 className="font-normal text-sky-900 text-xl border-b border-sky-900/5 pb-2 mb-4 tracking-tight">Po weselu</h3>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="shrink-0 bg-sky-50 rounded-full mt-1 pt-2 pr-2 pb-2 pl-2">
<iconify-icon className="text-xl text-sky-600" height="20" icon="solar:bus-linear" style={{color: 'rgb(2, 132, 199)'}} width="20"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-600">Dla gości nocujących w <span className="font-normal text-sky-900">Hotelu Bielany</span> zapewniamy <span className="font-normal text-sky-900">busik kursujący między Zamkiem a hotelem</span> od godz. 23:00 do końca wesela.</p>
</div>
<div className="flex gap-4 mt-6 items-start">
<div className="shrink-0 bg-yellow-50 rounded-full mt-1 pt-2 pr-2 pb-2 pl-2">
<svg className="text-xl text-sky-600" data-icon-set="solar" data-solar="point-on-map-outline" height="20" style={{color: 'rgb(234, 179, 8)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.25 7.7c0-3.598 3.059-6.45 6.75-6.45c3.608 0 6.612 2.725 6.745 6.208l.478.16c.463.153.87.289 1.191.439c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.269v5.748c0 .61 0 1.13-.047 1.547c-.05.438-.161.87-.463 1.237a2.3 2.3 0 0 1-.62.525c-.412.237-.855.276-1.296.253c-.42-.022-.933-.107-1.534-.208l-.041-.007c-1.293-.215-1.814-.296-2.322-.254q-.278.023-.552.083c-.498.109-.976.342-2.159.933l-.122.061c-1.383.692-2.234 1.118-3.154 1.251q-.415.06-.835.06c-.928-.002-1.825-.301-3.28-.786l-.127-.043l-.384-.128l-.037-.012c-.463-.154-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.709s-.341-.707-.385-1.088c-.04-.353-.04-.78-.04-1.269v-5.02c0-.786 0-1.448.067-1.967c.07-.542.23-1.072.666-1.47a2.3 2.3 0 0 1 .42-.304c.517-.287 1.07-.27 1.605-.166q.164.032.342.078q-.1-.67-.1-1.328m.499 3.01a9 9 0 0 0-1.028-.288c-.395-.077-.525-.03-.586.004a1 1 0 0 0-.14.101c-.053.048-.138.156-.19.556c-.053.41-.055.974-.055 1.825v4.93c0 .539.001.88.03 1.138c.028.238.072.327.112.381c.039.055.109.125.326.226c.236.11.56.219 1.07.39l.384.127c1.624.541 2.279.75 2.936.752q.31 0 .617-.044c.65-.094 1.276-.397 2.82-1.17l.093-.046c1.06-.53 1.714-.857 2.417-1.01q.37-.081.747-.113c.717-.06 1.432.06 2.593.253l.1.017c.655.109 1.083.18 1.407.196c.312.016.419-.025.471-.055a.8.8 0 0 0 .207-.175c.039-.047.097-.146.132-.456c.037-.323.038-.757.038-1.42v-5.667c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.06-.019a10.7 10.7 0 0 1-1.335 3.788c-.912 1.568-2.247 2.934-3.92 3.663a3.5 3.5 0 0 1-2.794 0c-1.673-.73-3.008-2.095-3.92-3.663a11 11 0 0 1-.934-2.087M12 2.75c-2.936 0-5.25 2.252-5.25 4.95c0 1.418.437 2.98 1.23 4.341c.791 1.362 1.908 2.47 3.223 3.044c.505.22 1.089.22 1.594 0c1.316-.574 2.432-1.682 3.224-3.044c.792-1.36 1.229-2.923 1.229-4.34c0-2.699-2.314-4.951-5.25-4.951m0 4a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" fill="currentColor" fill-rule="evenodd"></path></svg></div>
<p className="text-lg font-light text-slate-600">Dla gości wracających do <span className="font-normal text-sky-900">Wrocławia</span> – polecamy aplikacje <span className="font-normal text-sky-900">Uber, Bolt, FreeNow lub klasyczne taxi (713 067 067)</span>. W razie jakichkolwiek problemów świadkowie będą służyć pomocą.</p>
</div>
</div>
</div>
</section>
<div className="h-px bg-emerald-700/10 w-12 mr-auto ml-auto"></div>

<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
<section className="md:text-left text-center">
<div className="flex flex-col md:flex-row md:justify-start mb-6 gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="text-3xl text-yellow-500" icon="solar:music-notes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl tracking-tight text-sky-900 font-normal">Muzyka i zabawa</h2>
</div>
<p className="leading-relaxed text-lg font-light text-slate-600">Nasz DJ zadba o to, żebyście nie schodzili z parkietu przez całą noc – wygodne buty taneczne to podstawa!</p>
</section>
<section className="text-center md:text-left">
<div className="flex flex-col md:flex-row md:justify-start mb-6 gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="text-3xl text-emerald-600" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="sm:text-3xl text-2xl font-normal text-sky-900 tracking-tight font-['Cormorant_Garamond']">Preferencje żywieniowe</h2>
</div>
<p className="leading-relaxed text-lg font-light text-slate-600">Jeśli macie szczególne potrzeby dietetyczne lub alergie pokarmowe, prosimy o kontakt z nami jak najwcześniej.</p>
</section>
</div>
<div className="h-px bg-sky-900/10 w-12 mr-auto ml-auto"></div>

<section className="">
<div className="flex flex-col mb-10 items-center">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Nasze chwile</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
<div className="aspect-[4/5] overflow-hidden rounded-sm border border-sky-900/5 group relative bg-sky-50">
<img alt="Couple Walking in Tropical Sandbar Lagoon" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f1271c4-736f-4005-842d-b23aafc8892f_800w.jpg"/>
</div>
<div className="aspect-[4/5] overflow-hidden rounded-sm border border-sky-900/5 group relative bg-sky-50">
<img alt="Aerial View of Couple Floating in Clear Sea" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c092a520-34d3-437d-a77d-4ca2e1d8eb2c_800w.jpg"/>
</div>
<div className="aspect-[4/5] overflow-hidden rounded-sm border border-sky-900/5 group relative bg-sky-50">
<img alt="Romantic Couple on Tropical Sandbar" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9556a1ec-9b70-44c5-9b00-beb210e5926b_800w.jpg"/>
</div>
</div>
<p className="text-sm font-light italic text-slate-400 text-center mt-8">...a więcej chwil uchwycimy na weselu!</p>
</section>
<div className="w-12 h-px bg-emerald-700/10 mx-auto"></div>

<section className="text-center pb-8">
<div className="flex flex-col mb-6 items-center">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal">Kontakt</h2>
</div>
<div className="flex flex-col text-xl text-sky-900 tracking-wide font-['Cormorant_Garamond'] mt-8 mb-4 gap-x-16 justify-center gap-y-4 sm:flex-row sm:gap-16">
<div className="w-50">
<span className="block uppercase text-xs text-emerald-700/60 tracking-widest font-['Inter'] mb-1">Natalia</span>
                                726 120 246
                            </div>
<div className="w-50 gap-x-y-4 gap-y-4">
<span className="block uppercase text-xs text-emerald-700/60 tracking-widest font-['Inter'] mb-1">Olek</span>
                                579 030 876
                            </div>
</div><div className="flex flex-col sm:flex-row sm:gap-16 text-xl text-sky-900 tracking-wide font-['Cormorant_Garamond'] gap-y-4 justify-center">
<div className="w-50">
<span className="block uppercase text-xs text-emerald-700/60 tracking-widest font-['Inter'] mb-1">Martyna 
(świadkowa)</span>
                                796 664 889
                            </div>
<div className="w-50">
<span className="block uppercase text-xs text-emerald-700/60 tracking-widest font-['Inter'] mb-1">Karol (świadek)</span>
                                792 586 430
                            </div>
</div>
</section>
</div>
</div>

<div className="hidden" id="content-en">

<section className="text-center mb-12 relative">
<span className="block text-xs tracking-[0.3em] uppercase text-emerald-700/70 mb-8 font-normal">
                        We're getting married!
                    </span>
<h1 className="font-['Alex_Brush'] text-7xl sm:text-8xl md:text-9xl text-sky-900 mb-8 leading-tight tracking-tight">
                        Natalia <span className="text-4xl sm:text-6xl mx-2 text-yellow-500/80">&amp;</span> Olek
                    </h1>
<div className="sm:text-2xl uppercase flex flex-col sm:flex-row gap-2 sm:gap-6 text-xl text-sky-900 tracking-widest font-['Cormorant_Garamond'] mb-12 gap-x-2 gap-y-2 items-center justify-center">
<span className="">May 30, 2026</span>
<span className="hidden sm:block text-emerald-600">·</span>
<span className="">3:00 PM</span><span className="hidden sm:block text-emerald-600">·</span>
<span className="">Topacz Castle</span>
</div>
<div className="max-w-2xl mx-auto">
<p className="leading-relaxed text-lg font-light italic text-slate-600 text-center">
                            We are thrilled that you will be part of this special day! We want you to feel at ease, so we've put together a few tips and details to help us celebrate together 
                            <iconify-icon className="inline-block text-xl text-yellow-500 ml-1 translate-y-1" icon="solar:wineglass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</p>
</div>

<div className="mt-14">
<p className="font-['Alex_Brush'] text-4xl sm:text-5xl text-sky-900 mb-6 text-center">See you in...</p>
<div className="flex justify-center items-center gap-4 sm:gap-8 bg-white/60 py-5 px-6 sm:px-10 border border-sky-900/5 rounded-full backdrop-blur-sm mx-auto max-w-fit shadow-sm shadow-sky-900/5">
<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-days-en">31</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Days</span>
</div>
<span className="text-2xl text-sky-900/20 font-light mb-4">:</span>
<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-hours-en">17</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Hrs</span>
</div>
<span className="text-2xl text-sky-900/20 font-light mb-4">:</span>
<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-minutes-en">22</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Min</span>
</div>
<span className="text-2xl text-sky-900/20 font-light mb-4 hidden sm:inline">:</span>
<div className="flex-col items-center min-w-[3rem] sm:min-w-[4rem] hidden sm:flex">
<span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-sky-900 tracking-tight" id="cd-seconds-en">59</span>
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700/70 mt-1 font-['Inter']">Sec</span>
</div>
</div>
</div>
</section>
<div className="w-16 h-px bg-sky-900/10 mx-auto mb-12"></div>

<div className="space-y-12">

<section className="">
<div className="flex flex-col items-center mb-10">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Wedding Day</h2>
</div>
<div className="max-w-xl mx-auto space-y-6 text-lg text-slate-600 font-light">
<div className="flex justify-between items-center border-b border-sky-900/5 pb-4">
<span className="font-normal text-sky-900">Date:</span>
<span className="">May 30, 2026 (Saturday)</span>
</div>
<div className="flex justify-between items-center border-b border-sky-900/5 pb-4">
<span className="font-normal text-sky-900">Venue:</span>
<span className="text-right">Topacz Castle</span>
</div>
<div className="pt-6">
<div className="space-y-5">
<div className="flex gap-6 items-start group">
<div className="w-16 text-right font-normal text-sky-900 pt-0.5">3:00 PM</div>
<div className="flex-1 group-last:border-0 border-sky-900/5 border-b pb-5">
<p className="text-slate-700">Civil Ceremony</p>
<p className="text-sm text-slate-400 mt-1 uppercase tracking-wider">Oficyna, castle garden</p>
</div>
</div>
<div className="flex gap-6 group gap-x-6 gap-y-6 items-start">
<div className="font-normal text-sky-900 text-right w-16 pt-0.5">4:00 PM</div>
<div className="flex-1 group-last:border-0 border-sky-900/5 border-b pb-5">
<p className="text-slate-700">Wedding reception begins</p>
<p className="uppercase text-sm text-slate-400 tracking-wider mt-1">Sala Balowa</p>
</div>
</div>
<div className="flex gap-6 items-start group">
<div className="w-16 text-right font-normal text-sky-900 pt-0.5">4:00 AM</div>
<div className="flex-1 pb-5 border-b border-sky-900/5 group-last:border-0">
<p className="text-slate-700">End of wedding</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-12 h-px bg-emerald-700/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-8">
<iconify-icon className="text-4xl text-emerald-600 mb-4" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Ceremony</h2>
</div>
<div className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed text-center space-y-4">
<p className="">
                                Our ceremony will be a <span className="font-normal text-emerald-700">civil wedding</span> – elegant, joyful, and full of emotion. It will take place <span className="font-normal text-emerald-700">outdoors, in the garden of the Oficyna building</span> at Topacz Castle.
                            </p>
<p className="">
                                Please arrive on time – the ceremony starts exactly at <span className="font-normal text-sky-900"> 3:00 PM </span>and will last approximately<span className="font-normal text-sky-900"> 20 minutes</span>. We kindly ask that seated spots be reserved for elderly guests and those who need extra comfort.
                            </p>
</div>
</section>
<div className="w-12 h-px bg-sky-900/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-8">
<iconify-icon className="text-4xl text-yellow-500 mb-4" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Venue – Topacz Castle</h2>
</div>
<div className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed text-center space-y-6">
<p className="">Topacz Castle is a unique complex located in Kobierzyce, just a few minutes from the center of Wrocław. The historical character of the place, surrounded by a park and gardens, creates an unforgettable atmosphere.</p>
<div className="bg-sky-50/50 p-6 rounded-sm border border-sky-100 mt-8 transition-colors hover:bg-sky-50/80">
<p className="font-normal text-sky-900 mb-1">Topacz Castle</p>
<p className="text-sm text-slate-500 mb-4">ul. Templariuszy 1, 55-040 Ślęza, Poland</p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-normal text-sky-700 hover:text-emerald-600 transition-colors" href="https://maps.app.goo.gl/a9AENXNN9ngHyQXo6" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> Show on map
                                </a>
</div>
<p className="flex items-center justify-center gap-2 text-base text-slate-500 mt-6">
<iconify-icon className="text-xl text-sky-700" icon="solar:signpost-linear"></iconify-icon>
                                Free parking is available for guests on site.
                            </p>
<p className="flex items-center justify-center gap-2 text-base text-slate-500 mt-6">To use the complimentary parking, please stop by the hotel restaurant before leaving and enter your car registration number on the tablet available there.</p>
</div>
</section>
<div className="w-12 h-px bg-emerald-700/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-8">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Accommodation</h2>
</div>
<div className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed text-center space-y-6">
<p className="">
                                For guests who have arranged accommodation with us, we have reserved rooms at <span className="font-normal text-sky-900">Hotel Bielany</span>, which is only a <span className="font-normal text-sky-900">5-minute drive</span> from Topacz Castle – perfect so you can party until the end without stressing about the return!
                            </p>
<p className="text-emerald-800 font-light bg-emerald-50/50 p-5 border border-emerald-100 rounded-sm">
                                Should anything change regarding your accommodation, please let us know as soon as possible.
                            </p><p className="">Check-in is available from <span className="font-normal text-sky-900">1:00 PM</span> on the day of arrival, and check-out is by <span className="font-normal text-sky-900">12:00 PM</span> on the day of departure. Breakfast is served as a buffet between <span className="font-normal text-sky-900">6:30 AM – 10:30 AM</span>. Free parking is available for hotel guests on site.</p>
<div className="bg-amber-50/30 p-6 rounded-sm border border-amber-100 mt-8 transition-colors hover:bg-amber-50/60">
<p className="font-normal text-sky-900 mb-1">Hotel Bielany</p>
<p className="text-sm text-slate-500 mb-4">ul. Klecińska 3, 55-040 Bielany Wrocławskie</p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-normal text-yellow-600 hover:text-yellow-700 transition-colors" href="https://maps.app.goo.gl/GautmzJEMra4GPBz6" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> Show on map
                                </a>
</div>
</div>
</section>
<div className="w-12 h-px bg-sky-900/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-10">
<iconify-icon className="text-4xl text-emerald-600 mb-4" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Directions &amp; Transport</h2>
</div>
<div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
<div className="space-y-4">
<h3 className="font-normal text-sky-900 text-xl border-b border-sky-900/5 pb-2 mb-4 tracking-tight">To the wedding</h3>
<p className="text-lg font-light text-slate-600">
                                    Guests arrive at Topacz Castle on their own. Free parking is available on site.
                                </p>
<p className="text-lg font-light text-slate-600">
                                    Topacz Castle is about a <span className="font-normal text-sky-900">15–20 minute drive</span> from the center of Wrocław.
                                </p>
<div className="flex items-start gap-3 mt-4 text-slate-500 bg-[#fafafa] p-4 rounded-sm border border-slate-100">
<iconify-icon className="text-xl text-slate-400 mt-0.5 shrink-0" icon="solar:magnifer-linear"></iconify-icon>
<p className="text-sm font-light leading-relaxed">Search in maps:<br/><span className="italic font-normal text-sky-900">"Zamek Topacz, Ślęza"</span></p>
</div>
</div>
<div className="space-y-4">
<h3 className="font-normal text-sky-900 text-xl border-b border-sky-900/5 pb-2 mb-4 tracking-tight">After the wedding</h3>
<div className="flex items-start gap-4">
<div className="bg-sky-50 p-2 rounded-full shrink-0 mt-1">
<iconify-icon className="text-xl text-sky-600" icon="solar:bus-linear"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-600">
                                        For guests staying at <span className="font-normal text-sky-900">Hotel Bielany</span>, we provide a <span className="font-normal text-sky-900">shuttle bus running between the Castle and the hotel</span> from 11:00 PM until end of the wedding.
                                    </p>
</div>
<div className="flex items-start gap-4 mt-6">
<div className="shrink-0 bg-yellow-50 rounded-full mt-1 pt-2 pr-2 pb-2 pl-2">
<svg className="text-xl text-sky-600" data-icon-set="solar" data-solar="point-on-map-outline" height="20" style={{color: 'rgb(234, 179, 8)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.25 7.7c0-3.598 3.059-6.45 6.75-6.45c3.608 0 6.612 2.725 6.745 6.208l.478.16c.463.153.87.289 1.191.439c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.269v5.748c0 .61 0 1.13-.047 1.547c-.05.438-.161.87-.463 1.237a2.3 2.3 0 0 1-.62.525c-.412.237-.855.276-1.296.253c-.42-.022-.933-.107-1.534-.208l-.041-.007c-1.293-.215-1.814-.296-2.322-.254q-.278.023-.552.083c-.498.109-.976.342-2.159.933l-.122.061c-1.383.692-2.234 1.118-3.154 1.251q-.415.06-.835.06c-.928-.002-1.825-.301-3.28-.786l-.127-.043l-.384-.128l-.037-.012c-.463-.154-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.709s-.341-.707-.385-1.088c-.04-.353-.04-.78-.04-1.269v-5.02c0-.786 0-1.448.067-1.967c.07-.542.23-1.072.666-1.47a2.3 2.3 0 0 1 .42-.304c.517-.287 1.07-.27 1.605-.166q.164.032.342.078q-.1-.67-.1-1.328m.499 3.01a9 9 0 0 0-1.028-.288c-.395-.077-.525-.03-.586.004a1 1 0 0 0-.14.101c-.053.048-.138.156-.19.556c-.053.41-.055.974-.055 1.825v4.93c0 .539.001.88.03 1.138c.028.238.072.327.112.381c.039.055.109.125.326.226c.236.11.56.219 1.07.39l.384.127c1.624.541 2.279.75 2.936.752q.31 0 .617-.044c.65-.094 1.276-.397 2.82-1.17l.093-.046c1.06-.53 1.714-.857 2.417-1.01q.37-.081.747-.113c.717-.06 1.432.06 2.593.253l.1.017c.655.109 1.083.18 1.407.196c.312.016.419-.025.471-.055a.8.8 0 0 0 .207-.175c.039-.047.097-.146.132-.456c.037-.323.038-.757.038-1.42v-5.667c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.06-.019a10.7 10.7 0 0 1-1.335 3.788c-.912 1.568-2.247 2.934-3.92 3.663a3.5 3.5 0 0 1-2.794 0c-1.673-.73-3.008-2.095-3.92-3.663a11 11 0 0 1-.934-2.087M12 2.75c-2.936 0-5.25 2.252-5.25 4.95c0 1.418.437 2.98 1.23 4.341c.791 1.362 1.908 2.47 3.223 3.044c.505.22 1.089.22 1.594 0c1.316-.574 2.432-1.682 3.224-3.044c.792-1.36 1.229-2.923 1.229-4.34c0-2.699-2.314-4.951-5.25-4.951m0 4a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" fill="currentColor" fill-rule="evenodd"></path></svg></div>
<p className="text-lg font-light text-slate-600">
                                        For guests returning to <span className="font-normal text-sky-900">Wrocław</span> – apps like <span className="font-normal text-sky-900">Uber, Bolt, FreeNow or taxi (713 067 067)</span> run regularly.
                                    </p>
</div>
</div>
</div>
</section>
<div className="w-12 h-px bg-emerald-700/10 mx-auto"></div>

<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
<section className="text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-3 mb-6 justify-center md:justify-start">
<iconify-icon className="text-3xl text-yellow-500" icon="solar:music-notes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl tracking-tight text-sky-900 font-normal">Music &amp; Party</h2>
</div>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                                Our DJ will make sure you don't leave the dance floor all night – comfortable dancing shoes are an absolute must!
                            </p>
</section>
<section className="text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-3 mb-6 justify-center md:justify-start">
<iconify-icon className="text-3xl text-emerald-600" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl tracking-tight text-sky-900 font-normal">Dietary requirements</h2>
</div>
<p className="leading-relaxed text-lg font-light text-slate-600">If you have any special dietary needs or food allergies, please let us know in advance.</p>
</section>
</div>
<div className="w-12 h-px bg-sky-900/10 mx-auto"></div>

<section className="">
<div className="flex flex-col items-center mb-10">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal text-center">Our moments</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
<div className="aspect-[4/5] overflow-hidden rounded-sm border border-sky-900/5 group relative bg-sky-50">
<img alt="Couple Walking in Tropical Sandbar Lagoon" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f1271c4-736f-4005-842d-b23aafc8892f_1600w.jpg"/>
</div>
<div className="aspect-[4/5] overflow-hidden rounded-sm border border-sky-900/5 group relative bg-sky-50">
<img alt="Aerial View of Couple Floating in Clear Sea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c092a520-34d3-437d-a77d-4ca2e1d8eb2c_1600w.jpg"/>
</div>
<div className="aspect-[4/5] overflow-hidden rounded-sm border border-sky-900/5 group relative bg-sky-50">
<img alt="Romantic Couple on Tropical Sandbar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9556a1ec-9b70-44c5-9b00-beb210e5926b_1600w.jpg"/>
</div>
</div>
<p className="text-sm font-light italic text-slate-400 text-center mt-8">...and we'll capture more moments at the wedding!</p>
</section>
<div className="w-12 h-px bg-emerald-700/10 mx-auto"></div>

<section className="text-center pb-8">
<div className="flex flex-col items-center mb-6">
<iconify-icon className="text-4xl text-sky-600 mb-4" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl tracking-tight text-sky-900 font-normal">Contact</h2>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 font-['Cormorant_Garamond'] text-xl tracking-wide text-sky-900">
<div>
<span className="block text-xs font-['Inter'] uppercase tracking-widest text-emerald-700/60 mb-1">Natalia</span>
                                +48 726 120 246
                            </div>
<div>
<span className="block text-xs font-['Inter'] uppercase tracking-widest text-emerald-700/60 mb-1">Olek</span>
                                +48 579 030 876
                            </div>
<div className="flex flex-col sm:flex-row sm:gap-16 text-xl text-sky-900 tracking-wide font-['Cormorant_Garamond'] gap-y-4 justify-center">
<div className="w-50">
<span className="block uppercase text-xs text-emerald-700/60 tracking-widest font-['Inter'] mb-1">Martyna 
(Maid of Honor)</span>
                                +48 796 664 889
                            </div>
<div className="w-50">
<span className="block uppercase text-xs text-emerald-700/60 tracking-widest font-['Inter'] mb-1">Karol (Best Man)</span>
                                +48 792 586 430
                            </div>
</div>
</div></section>
</div>
</div>

<div className="mt-20 flex justify-center opacity-70 gap-2">
<iconify-icon className="text-2xl text-emerald-600 -scale-x-100" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-2xl text-yellow-500" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</main>

<iconify-icon className="text-xl text-sky-700" icon="solar:signpost-linear"></iconify-icon>
    </>
  );
}
