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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#F7F5EE]/80 backdrop-blur-md border-b border-[#1E293B]/5 animate-fade-in-up">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1.5 text-xl font-medium text-[#1E293B] tracking-tighter font-serif-custom" href="#">
          Przyjemna Spółka
        </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-gray-600 hover:text-[#1E293B] transition-colors" href="#ecosystem">
            Ecosystem
          </a>
<a className="text-sm font-light text-gray-600 hover:text-[#1E293B] transition-colors" href="#founders">
            Founders
          </a>
<a className="text-sm font-light text-[#1E293B] hover:text-[#C29B72] transition-colors flex items-center gap-1" href="#contact">
            Contact
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="max-w-4xl mx-auto text-center px-6 pt-20 pb-28">
<div className="inline-flex gap-2 animate-fade-in-up text-xs font-medium text-[#C29B72] bg-[#C29B72]/5 border-[#C29B72]/30 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
          Tu Możesz Odetchnąć
          <iconify-icon className="" height="12" icon="solar:wind-outline" style={{strokeWidth: '1.5', color: 'rgb(194, 155, 114)'}} width="12"></iconify-icon>
</div>
<h1 className="md:text-7xl leading-[1.1] animate-fade-in-up delay-100 text-5xl font-medium text-[#1E293B] tracking-tight font-serif-custom mb-8">
          Przestrzeń Przyjemnego
          <br className="hidden md:block"/>
<span className="italic text-[#C29B72]">Życia i Biznesu.</span>
</h1>
<p className="md:text-xl leading-relaxed animate-fade-in-up delay-200 text-lg font-light text-gray-600 max-w-2xl mr-auto ml-auto">
          Łączymy technologię, świadomy biznes, pracę somatyczną i sztukę, by
          tworzyć przestrzeń dla autentycznego rozwoju.
        </p>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6" id="ecosystem">
<h2 className="animate-fade-in-up delay-300 text-3xl font-medium tracking-tight font-serif-custom mb-10 pl-2">
          Nasz Biznesowy Ekosystem
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="block md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up delay-100" href="https://heartmade.pl" rel="noopener noreferrer" target="_blank">
<div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-slate-400 mb-8" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-2 block">
                  Modern Tech
                </span>
<h3 className="font-serif-custom text-3xl font-medium tracking-tight text-white mb-3">
                  Heartmade
                </h3>
<p className="md:text-base text-sm font-light text-slate-400 max-w-md">
                  Modern Product Management &amp; Vibe-coding. Pomagamy
                  wychodzić nowym przedsiębiorcom na świat.
                </p>
</div>
</div>
</a>

<a className="block bg-white/70 backdrop-blur-xl border border-blue-50/50 rounded-[2.5rem] p-8 group hover:-translate-y-1 transition-transform duration-500 shadow-sm shadow-blue-900/5 animate-fade-in-up delay-200" href="https://olgajurewicz.com" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-blue-300 mb-8" icon="solar:wind-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="text-xs font-medium text-blue-400/80 uppercase tracking-widest mb-2 block">
                  Somatic Work
                </span>
<h3 className="font-serif-custom text-2xl font-medium tracking-tight text-[#1E293B] mb-2">
                  Art of Breath
                </h3>
<p className="text-sm font-light text-gray-500">
                  Breathwork Mastery. Oddech jako narzędzie budowania świadomego
                  życia i rozwoju .
                </p>
</div>
</div>
</a>

<a className="block bg-[#F2E8DF] rounded-[2.5rem] p-8 group hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up delay-300" href="https://paweljurewicz.com" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-[#C07C6B] mb-8" icon="solar:hand-stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="text-xs font-medium text-[#C07C6B]/80 uppercase tracking-widest mb-2 block">
                  Bodywork
                </span>
<h3 className="font-serif-custom text-2xl font-medium tracking-tight text-[#1E293B] mb-2">
                  Holistic Massage
                </h3>
<p className="text-sm font-light text-gray-600">
                  Głęboka, transformująca praca z ciałem, przywracająca
                  naturalny przepływ Życia.
                </p>
</div>
</div>
</a>

<a className="block bg-[#EAEFEA] rounded-[2.5rem] p-8 group hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up delay-400" href="https://humantransformationlab.com" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-[#7A9E82] mb-8" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="text-xs font-medium text-[#7A9E82]/80 uppercase tracking-widest mb-2 block">
                  Research
                </span>
<h3 className="font-serif-custom text-2xl font-medium tracking-tight text-[#1E293B] mb-2">
                  Transformation Lab
                </h3>
<p className="text-gray-600 font-light text-sm">
                  Evidence-informed change. Eksperymentalne podejście do rozwoju
                  potencjału ludzkiego.
                </p>
</div>
</div>
</a>

<a className="block bg-[#F7EBEB] rounded-[2.5rem] p-8 group hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up delay-500" href="https://rozmach.art" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-[#D48C91] mb-8" icon="solar:palette-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="text-xs font-medium text-[#D48C91]/80 uppercase tracking-widest mb-2 block">
                  Creation
                </span>
<h3 className="text-2xl font-medium text-[#1E293B] tracking-tight font-serif-custom mb-2">
                  Kółko Hafciarskie
                </h3>
<p className="text-sm font-light text-gray-600">
                  Art &amp; Embroidery. Przestrzeń swobodnej ekspresji,
                  rzemiosła artystycznego i społeczności.
                </p>
</div>
</div>
</a>

<a className="block bg-[#3A2D2A] rounded-[2.5rem] p-8 group hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up delay-600" href="https://paweljurewicz.com/in-touch/" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-[#D4A59A] mb-8" icon="solar:hearts-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="uppercase block text-xs font-medium text-[#D4A59A]/80 tracking-widest mb-2">
                  Connection
                </span>
<h3 className="text-2xl font-medium text-white tracking-tight font-serif-custom mb-2">
                  In Touch
                </h3>
<p className="text-sm font-light text-gray-300">
                  Warsztaty rozwojowe dla par, szukających głębszego połączenia
                  i pójścia krok dalej w swojej relacji, łączące breathwork z
                  bodyworkiem.
                </p>
</div>
</div>
</a>

<a className="block md:col-span-2 bg-[#EFEAF2] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up delay-700" href="https://www.skool.com/heartmade-club-8724/about" rel="noopener noreferrer" target="_blank">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-[#957A9E]/10 rounded-full blur-3xl translate-y-1/4 translate-x-1/4"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[16rem]">
<iconify-icon className="text-4xl text-[#957A9E] mb-8" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<span className="text-xs font-medium text-[#957A9E]/80 uppercase tracking-widest mb-2 block">
                  Community
                </span>
<h3 className="font-serif-custom text-3xl font-medium tracking-tight text-[#1E293B] mb-3">
                  Heartmade Club
                </h3>
<p className="md:text-base text-sm font-light text-gray-600 max-w-lg">
                  Miejsce, które łączy, uczy i rozwija przedsiębiorców nowego
                  pokolenia.
                </p>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="founders">
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="aspect-[4/5] bg-[#E8E6DF] rounded-[2.5rem] p-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#C29B72]/20 via-transparent to-transparent mix-blend-multiply transition-opacity duration-700 group-hover:opacity-70"></div>

<div className="bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d597bd23-601e-4b64-a2af-6e0d9480c450_1600w.png?w=800&amp;q=80)] bg-cover rounded-[2rem]"></div>
</div>

<div className="pr-4">
<h2 className="font-serif-custom text-4xl font-medium tracking-tight text-[#1E293B] mb-8">
              Synergia dwóch światów
            </h2>
<div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
<p className="">
                Założona przez nas (
                <span className="font-normal text-[#1E293B]">Przyjemna Spółka</span>
                ), to miejsce, w którym chcemy realizować w biznesie to, czego
                doświadczamy budując świadome, uważne i pełne wzajemnej
                życzliwości życie. Łączymy ponad dekadę doświadczenia w branży
                IT z głęboką wiedzą o pracy somatycznej. Paweł wnosi ekspertyzę
                w zarządzaniu produktem cyfrowym i AI oraz bodywork, a Olga — w
                oddechowej pracy z ciałem i sztuce.
              </p>
<p className="">
                Razem budujemy ekosystem, w którym technologia i ciało nie są
                przeciwieństwami, lecz partnerami w tworzeniu życia i biznesu,
                które naprawdę chcemy prowadzić. Wierzymy, że zdrowy biznes może
                się urodzić i rozwijać tylko w przestrzeni, gdzie układ nerwowy
                jest na to przygotowany.
              </p>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-[#1E293B]/10 pt-8">
<div className="">
<p className="font-serif-custom text-lg font-medium text-[#1E293B]">
                  Paweł Jurewicz
                </p>
<p className="text-xs font-light text-gray-500 mt-1">
                  Tech &amp; Bodywork
                </p>
</div>
<div className="w-px h-8 bg-[#1E293B]/10"></div>
<div className="">
<p className="font-serif-custom text-lg font-medium text-[#1E293B]">
                  Olga Jurewicz
                </p>
<p className="text-xs font-light text-gray-500 mt-1">
                  Breath &amp; Art
                </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#1E293B]/10 bg-[#F7F5EE]">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="md:col-span-1 flex flex-col gap-4">
<span className="font-serif-custom text-xl font-medium tracking-tighter text-[#1E293B]">
              Przyjemna Spółka
            </span>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs pr-4">
              Przestrzeń autentycznego rozwoju, łącząca biznes z mądrością ciała
              i sztuką.
            </p>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Kontakt
            </span>
<div className="flex flex-col gap-3">
<span className="text-sm text-gray-600 font-light">
                Warszawa, Polska
              </span>
<a className="text-sm text-[#1E293B] hover:text-[#C29B72] font-medium transition-colors" href="mailto:kontakt@przyjemnaspolka.pl">
                kontakt@przyjemnaspolka.pl
              </a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Dane firmy
            </span>
<div className="flex flex-col gap-3">
<span className="text-sm text-gray-600 font-light">
                KRS: 0001228001
              </span>
<span className="text-sm text-gray-600 font-light">
                NIP: 7011302955
              </span>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Informacje
            </span>
<div className="flex flex-col gap-3">
<a className="text-sm text-gray-600 hover:text-[#1E293B] font-light transition-colors" href="#">
                Regulamin
              </a>
<a className="text-sm text-gray-600 hover:text-[#1E293B] font-light transition-colors" href="#">
                Polityka prywatności
              </a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row border-[#1E293B]/5 border-t pt-8 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-serif-custom text-sm font-medium tracking-tighter text-[#1E293B]">
              PS
            </span>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<span className="text-xs font-light text-gray-500">
              © 2026 Przyjemna Spółka sp. z o.o.
            </span>
</div>
<div className="text-xs text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Vibe-coded by
            <span className="text-[#1E293B] font-medium">Heartmade</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
