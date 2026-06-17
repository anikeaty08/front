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
window.__tracking = {
gtm: true,
ga4: true,
metaPixel: true,
metaCapi: true
};



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
      
<div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/78 backdrop-blur-2xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#start">
<div className="">
<div className="text-sm font-medium tracking-tight text-white">Michał Rozkres</div>
<div className="text-xs text-zinc-500">Meta Ads • praktyczne szkolenia</div>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#oferta">Oferta</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#prawda">Prawda o reklamach</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#efekty">Efekty</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#proces">Proces</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#wyniki">Wyniki</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#opinie">Opinie</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#omnie">O mnie</a>
<a className="text-sm text-zinc-400 transition duration-300 hover:text-white" href="#kontakt">Kontakt</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300 px-4 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_8px_30px_rgba(190,242,100,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(190,242,100,0.24)]" href="#kontakt">
<span>Zapisz się</span>
<iconify-icon className="" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<main className="pt-24" id="start">
<section className="relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/20 to-transparent"></div>
<div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-300/[0.05] blur-3xl"></div>
<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:px-8 lg:py-28">
<div className="lg:col-span-7">
<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-3 py-1.5 text-xs font-medium text-lime-200 shadow-[0_0_0_1px_rgba(190,242,100,0.04)]">
<iconify-icon height="16" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            Ponad 250 kont reklamowych • ponad 10 mln zł wydane w Meta Ads
          </div>
<h1 className="max-w-5xl text-4xl font-semibold tracking-tight leading-tight text-white sm:text-5xl lg:text-7xl">
            Twoje reklamy Meta nie mają „działać lepiej”. <span className="text-lime-300">Mają dowozić klientów i sprzedaż</span> bez zgadywania, co właśnie przepala budżet.
          </h1>
<p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            Większość kampanii nie przegrywa dlatego, że budżet jest za mały. Przegrywa dlatego, że są źle zrozumiane, źle oceniane i źle prowadzone. Pracuję na realnych kontach, realnych liczbach i realnych decyzjach — nie na teorii z prezentacji.
          </p>
<div className="mt-8 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.045]">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Doświadczenie</div>
<div className="mt-2 text-base font-medium text-white">250+ kont reklamowych</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.045]">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Budżet</div>
<div className="mt-2 text-base font-medium text-white">10+ mln zł wydane</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.045]">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Podejście</div>
<div className="mt-2 text-base font-medium text-white">Bez lania wody</div>
</div>
</div>
<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-start">
<div className="flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-lime-300/20 bg-lime-300 px-6 py-4 text-sm font-medium text-zinc-950 shadow-[0_16px_50px_rgba(190,242,100,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(190,242,100,0.26)]" href="#kontakt">
                Chcę ogarnąć reklamy świadomie
                <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="pl-1 text-xs text-zinc-500">Napisz, z czym masz problem — dobiorę właściwy format pracy.</div>
</div>
<div className="flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] text-sm font-medium text-white border-white/10 border rounded-2xl pt-4 pr-6 pb-4 pl-6" href="#wyniki">
                Pokaż mi realne wyniki
                <iconify-icon height="18" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="pl-1 text-xs text-zinc-500">To nie są obietnice. To wyniki z realnych kont reklamowych.</div>
</div>
</div>
<div className="mt-10 rounded-[1.75rem] border border-lime-300/15 bg-gradient-to-r from-lime-300/[0.09] via-white/[0.035] to-white/[0.02] p-5 shadow-[0_18px_60px_rgba(190,242,100,0.06)]">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="">
<div className="uppercase text-xs text-lime-200/80 tracking-[0.18em]">Moja przewaga</div>
<div className="mt-2 text-lg font-medium tracking-tight text-white">Nie uczę „jak ustawić reklamę”. Uczę, <span className="text-lime-300">jak podejmować dobre decyzje reklamowe</span>, kiedy stawką są Twoje pieniądze.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300">
                dla właścicieli firm usługowych
              </div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Wydane na kampanie</div>
<div className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">10+</div>
<div className="mt-1 text-sm text-zinc-300">mln zł realnego budżetu</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Przerobione konta</div>
<div className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">250+</div>
<div className="mt-1 text-sm text-zinc-300">różnych branż i modeli</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Efekt współpracy</div>
<div className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Mniej strat</div>
<div className="mt-1 text-sm text-zinc-300">więcej kontroli i lepsze decyzje</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative mx-auto max-w-md lg:max-w-none">
<div className="absolute -inset-4 rounded-[2rem] bg-lime-300/[0.06] blur-3xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] transition duration-500 hover:-translate-y-1">
<div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-900">
<div className="aspect-[4/5] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5875f0ac-a5bc-4e68-a131-41bb576f1a23_1600w.jpg)] bg-cover bg-center relative">
<div className="absolute inset-x-0 bottom-0 p-5">
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-white/5 bg-white/[0.02]">
<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-4 text-sm text-zinc-400 sm:grid-cols-2 xl:grid-cols-4">
<div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-white/10 hover:bg-white/[0.03]">
<iconify-icon className="text-lime-300" height="18" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Wdrożenie zamiast teorii
          </div>
<div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-white/10 hover:bg-white/[0.03]">
<iconify-icon className="text-lime-300" height="18" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Świadome decyzje reklamowe
          </div>
<div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-white/10 hover:bg-white/[0.03]">
<iconify-icon className="text-lime-300" height="18" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Konkretny proces pracy
          </div>
<div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-white/10 hover:bg-white/[0.03]">
<iconify-icon className="text-lime-300" height="18" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Doświadczenie z realnych kampanii
          </div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="max-w-3xl">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Problem</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Jeśli reklamy mają dawać klientów, musisz wiedzieć, co robisz</h2>
<p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
          Wielu właścicieli firm usługowych nie potrzebuje kolejnej obietnicy. Potrzebuje zrozumieć, dlaczego reklamy nie dowożą, gdzie uciekają pieniądze i jak odzyskać kontrolę nad pozyskiwaniem klientów.
        </p>
</div>
<div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 hover:bg-white/[0.045]">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lime-300">
<iconify-icon height="22" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Agencja jest za droga</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Chcesz klientów z reklam, ale nie chcesz płacić co miesiąc za obsługę, której efektów nie rozumiesz.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 hover:bg-white/[0.045]">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lime-300">
<iconify-icon height="22" icon="solar:shield-cross-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Nie ufasz agencjom</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Masz dość raportów, które brzmią dobrze, ale nie tłumaczą, co naprawdę działa i za co płacisz.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 hover:bg-white/[0.045]">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lime-300">
<iconify-icon height="22" icon="solar:graph-down-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Klientów jest mniej niż rok temu</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Rynek się zagęszcza, a polecenia nie wystarczają. Potrzebujesz przewidywalnego źródła zapytań.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 hover:bg-white/[0.045]">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lime-300">
<iconify-icon height="22" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Konkurencja rośnie</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Inni reklamują się częściej i odważniej. Bez sensownego systemu reklam coraz trudniej być pierwszym wyborem.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 hover:bg-white/[0.045]">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lime-300">
<iconify-icon height="22" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-white">Nie wiesz, co działa</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Panel reklamowy jest pełen danych, ale trudno z nich wyciągać trafne decyzje bez praktycznego kontekstu.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/20 hover:bg-white/[0.045]">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lime-300">
<iconify-icon height="22" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mt-5">Boisz się przepalania budżetu</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Jeden zły cel kampanii, błędna optymalizacja lub zły komunikat i pieniądze znikają szybciej niż leady.</p>
</div>
</div>
</section>
<section className="relative border-y border-white/5 bg-white/[0.02]" id="prawda">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/20 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Prawda o reklamach Meta</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Większość kampanii nie pada przez algorytm. <span className="text-lime-300">Pada przez złe decyzje.</span></h2>
<p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
              Problem zwykle nie leży w samej platformie. Leży w tym, że ludzie źle wybierają cele, źle interpretują dane i wyciągają wnioski zbyt wcześnie albo z niewłaściwych wskaźników.
            </p>
</div>
<div className="lg:col-span-8">
<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="text-xs uppercase tracking-[0.2em] text-lime-300/80">01</div>
<h3 className="mt-4 text-2xl font-medium tracking-tight text-white">Większość reklam nie przegrywa na kreacji. Przegrywa na strategii.</h3>
<p className="mt-4 text-sm leading-7 text-zinc-400">Jeśli kampania ma zły cel, źle ustawioną strukturę albo jest rozliczana z niewłaściwego wyniku, nawet dobra kreacja nie uratuje budżetu.</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="text-xs uppercase tracking-[0.2em] text-lime-300/80">02</div>
<h3 className="mt-4 text-2xl font-medium tracking-tight text-white">Ludzie patrzą na liczby. <span className="text-zinc-400">Rzadko rozumieją, co te liczby znaczą.</span></h3>
<p className="mt-4 text-sm leading-7 text-zinc-400">CTR, CPM czy koszt kliknięcia nie odpowiadają jeszcze na pytanie, czy reklama dowozi pieniądze. Bez kontekstu te wskaźniki potrafią bardzo mylić.</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="text-xs uppercase tracking-[0.2em] text-lime-300/80">03</div>
<h3 className="mt-4 text-2xl font-medium tracking-tight text-white">Budżet przepala się najczęściej wtedy, gdy nikt nie wie, <span className="text-lime-300">co dokładnie poprawić.</span></h3>
<p className="mt-4 text-sm leading-7 text-zinc-400">Właściciel firmy widzi, że „coś nie działa”. Agencja mówi, żeby poczekać. Zespół testuje po omacku. I właśnie wtedy pieniądze uciekają najszybciej.</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="text-xs uppercase tracking-[0.2em] text-lime-300/80">04</div>
<h3 className="mt-4 text-2xl font-medium tracking-tight text-white">Najdroższy błąd? Mylenie aktywności z wynikiem.</h3>
<p className="mt-4 text-sm leading-7 text-zinc-400">To, że kampania „się kręci”, nie znaczy, że działa. Interakcje, ruch i zasięg nie płacą faktur. Liczy się jakość leadów, zakupy i realna rentowność.</p>
</div>
</div>
<div className="mt-5 rounded-[2rem] border border-lime-300/15 bg-gradient-to-r from-lime-300/[0.08] via-white/[0.03] to-white/[0.02] p-6 shadow-[0_18px_60px_rgba(190,242,100,0.05)]">
<div className="text-xs uppercase tracking-[0.2em] text-lime-200/80">Dlatego moja praca nie polega na „pokazaniu panelu”</div>
<div className="mt-3 text-xl font-medium tracking-tight text-white">Polega na tym, że po szkoleniu wiesz, które decyzje poprawiają wynik, a które tylko dają złudzenie działania.</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative border-y border-white/5 bg-white/[0.02]" id="oferta">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="flex max-w-3xl flex-col gap-4">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Oferta</div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Wybierz format, który odpowiada temu, czego naprawdę potrzebujesz</h2>
<p className="text-base leading-8 text-zinc-400 sm:text-lg">Nie każdy potrzebuje tego samego. Jedni chcą szybko ogarnąć konto i przestać przepalać budżet. Inni potrzebują regularnego wsparcia. Jeszcze inni chcą przeszkolić cały zespół.</p>
</div>
<div className="mt-12 grid gap-5 xl:grid-cols-3">
<article className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
<div className="flex items-center justify-between">
<div className="rounded-full border border-lime-300/15 bg-lime-300/[0.08] px-3 py-1 text-xs font-medium text-lime-200">Szybkie uporządkowanie</div>
<iconify-icon className="text-zinc-500 transition duration-300 group-hover:text-lime-300" height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Szkolenie 1:1</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Dla właściciela firmy lub osoby in-house, która chce zrozumieć swoje reklamy, poprawić błędy i szybko odzyskać kontrolę.</p>
<div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Wybierz, jeśli</div>
<div className="mt-2 text-sm leading-7 text-zinc-300">masz już kampanie lub chcesz ruszyć dobrze od początku, ale nie potrzebujesz stałego wsparcia co tydzień.</div>
</div>
<div className="mt-6 h-px w-full bg-white/8"></div>
<div className="mt-6 space-y-3 text-sm text-zinc-300">
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span className="">Indywidualna diagnoza konta i sytuacji biznesowej</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span className="">Praktyczne przejście przez strukturę kampanii, cele i optymalizację</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Wskazanie błędów, które realnie obniżają wynik</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Plan działania dopasowany do branży i budżetu</span></div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-400">
              Najlepsze dla Ciebie, jeśli chcesz szybko przestać działać po omacku.
            </div>
<div className="mt-6 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-lime-300/20 hover:bg-white/[0.07] hover:text-lime-200" href="#kontakt">
                Wybieram szkolenie 1:1
                <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="text-xs text-zinc-500">Dobre, jeśli potrzebujesz konkretu szybko i bez stałego abonamentu.</div>
</div>
</article>
<article className="group relative rounded-[2rem] border border-lime-300/20 bg-gradient-to-b from-lime-300/[0.09] to-white/[0.025] p-6 shadow-[0_24px_80px_rgba(190,242,100,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_90px_rgba(190,242,100,0.12)]">
<div className="absolute right-5 top-5 rounded-full border border-lime-300/20 bg-lime-300 px-3 py-1 text-xs font-medium text-zinc-950 shadow-[0_8px_20px_rgba(190,242,100,0.14)]">Najmocniejsza opcja</div>
<div className="mt-8 flex items-center justify-between">
<div className="rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-3 py-1 text-xs font-medium text-lime-200">Stałe wsparcie w decyzjach</div>
<iconify-icon className="text-lime-300" height="20" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Mentoring</h3>
<p className="mt-3 text-sm leading-7 text-zinc-300">Dla osób, które chcą rozwijać kampanie z kimś, kto umie czytać liczby, oceniać jakość ruchu, kreacji i decyzji biznesowych.</p>
<div className="mt-5 rounded-2xl border border-lime-300/15 bg-zinc-950/60 p-4">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Wybierz, jeśli</div>
<div className="mt-2 text-sm leading-7 text-zinc-200">chcesz nie tylko ogarnąć reklamy, ale regularnie je poprawiać, konsultować i skalować z kimś, kto zna realne konta.</div>
</div>
<div className="mt-6 h-px w-full bg-lime-300/12"></div>
<div className="mt-6 space-y-3 text-sm text-zinc-200">
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Stała praca nad kampaniami i decyzjami reklamowymi</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Konsultacje, analiza wyników i korekta działań</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Lepsze rozumienie liczb, lejków i jakości leadów</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Większa pewność przy wydawaniu budżetu reklamowego</span></div>
</div>
<div className="mt-6 rounded-2xl border border-lime-300/15 bg-zinc-950/60 p-4 text-sm text-zinc-300">
              Najlepsze dla Ciebie, jeśli chcesz rosnąć szybciej i nie zostać sam z decyzjami po szkoleniu.
            </div>
<div className="mt-6 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-lime-300/20 bg-lime-300 px-5 py-3.5 text-sm font-medium text-zinc-950 shadow-[0_12px_34px_rgba(190,242,100,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(190,242,100,0.22)]" href="#kontakt">
                Chcę mentoring
                <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="text-xs text-lime-100/70">Najlepsza opcja, jeśli zależy Ci na regularnym wzroście i trafniejszych decyzjach.</div>
</div>
</article>
<article className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
<div className="flex items-center justify-between">
<div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">Dla firmy lub zespołu</div>
<iconify-icon className="text-zinc-500 transition duration-300 group-hover:text-lime-300" height="20" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Szkolenia grupowe</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Dla firm i zespołów, które chcą wspólnego standardu pracy z Meta Ads, zamiast rozproszonej wiedzy i przypadkowych decyzji.</p>
<div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Wybierz, jeśli</div>
<div className="mt-2 text-sm leading-7 text-zinc-300">masz zespół, dział marketingu albo kilka osób decydujących o kampaniach i chcesz ujednolicić sposób pracy.</div>
</div>
<div className="mt-6 h-px w-full bg-white/8"></div>
<div className="mt-6 space-y-3 text-sm text-zinc-300">
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Program dopasowany do poziomu grupy i celu biznesowego</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Praktyczne przykłady z kampanii i omówienie błędów</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Uporządkowanie procesu tworzenia i oceny kampanii</span></div>
<div className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-300"></span><span>Większa samodzielność zespołu po szkoleniu</span></div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-400">
              Najlepsze dla Ciebie, jeśli chcesz spójności, a nie kilku różnych interpretacji tego samego panelu.
            </div>
<div className="mt-6 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-lime-300/20 hover:bg-white/[0.07] hover:text-lime-200" href="#kontakt">
                Zapytaj o szkolenie grupowe
                <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="text-xs text-zinc-500">Najlepsze, gdy kilka osób odpowiada za wynik reklam.</div>
</div>
</article>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="efekty">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Efekt</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Po szkoleniu nie klikasz na ślepo</h2>
<p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
            Celem nie jest to, żebyś znał teorię. Celem jest to, żebyś potrafił podejmować lepsze decyzje reklamowe i wiedział, co wpływa na wynik.
          </p>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-950">
<div className="flex items-center gap-3 text-lime-300">
<iconify-icon height="22" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-sm font-medium">Klienci 24/7</span>
</div>
<p className="mt-3 text-sm leading-7 text-zinc-400">Zrozumiesz, jak budować kampanie nastawione na regularny dopływ zapytań lub sprzedaży.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-950">
<div className="flex items-center gap-3 text-lime-300">
<iconify-icon height="22" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-sm font-medium">Lepsze czytanie liczb</span>
</div>
<p className="mt-3 text-sm leading-7 text-zinc-400">Będziesz wiedzieć, które wskaźniki mają znaczenie i kiedy naprawdę trzeba reagować.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-950">
<div className="flex items-center gap-3 text-lime-300">
<iconify-icon height="22" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-sm font-medium">Trafniejsze decyzje</span>
</div>
<p className="mt-3 text-sm leading-7 text-zinc-400">Samodzielnie ocenisz, co poprawić w kampanii, kreacji, ofercie albo lejku.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-950">
<div className="flex items-center gap-3 text-lime-300">
<iconify-icon height="22" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-sm font-medium">Mniej błędów</span>
</div>
<p className="mt-3 text-sm leading-7 text-zinc-400">Unikniesz najczęstszych decyzji, które podnoszą koszt leada, zakupu lub kontaktu.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-950">
<div className="flex items-center gap-3 text-lime-300">
<iconify-icon height="22" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-sm font-medium">Świadomy budżet</span>
</div>
<p className="mt-3 text-sm leading-7 text-zinc-400">Będziesz wydawać pieniądze z większą kontrolą i lepszym uzasadnieniem decyzji.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-950">
<div className="flex items-center gap-3 text-lime-300">
<iconify-icon height="22" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-sm font-medium">Lepsza ocena działań marketingu</span>
</div>
<p className="mt-3 text-sm leading-7 text-zinc-400">Łatwiej ocenisz pracę osoby, zespołu lub agencji, jeśli nie chcesz wszystkiego robić samodzielnie.</p>
</div>
</div>
</div>
</section>
<section className="relative border-y border-white/5 bg-white/[0.02]" id="proces">
<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="max-w-3xl">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Proces</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Prosty proces, konkretna praca</h2>
<p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">Współpraca ma być przejrzysta. Wiesz, od czego zaczynamy, co robimy i po co to robimy.</p>
</div>
<div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-sm font-medium text-lime-300">01</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Rozmowa i diagnoza</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Krótko sprawdzamy, na jakim etapie jesteś, jaki masz cel i gdzie dziś uciekają wyniki.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-sm font-medium text-lime-300">02</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Dobór formatu</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Wybieramy szkolenie 1:1, mentoring albo format grupowy, zależnie od potrzeb i skali.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-sm font-medium text-lime-300">03</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Szkolenie krok po kroku</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Przechodzimy przez reklamy praktycznie: struktura, ustawienia, liczby, błędy i decyzje.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-sm font-medium text-lime-300">04</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Wdrożenie do działań</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Zdobyta wiedza trafia od razu do realnych kampanii, a nie do notatek, które leżą bez użycia.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="text-sm font-medium text-lime-300">05</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Konsultacja i rozwój</h3>
<p className="mt-3 text-sm leading-7 text-zinc-400">Jeśli trzeba, pracujemy dalej nad optymalizacją, analizą wyników i kolejnymi decyzjami.</p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="wyniki">
<div className="flex max-w-4xl flex-col gap-4">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Wyniki i wiarygodność</div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">To nie są obietnice. <span className="text-lime-300">To wyniki z realnych kont.</span></h2>
<p className="text-base leading-8 text-zinc-400 sm:text-lg">Te liczby nie są z prezentacji sprzedażowej. To efekt pracy na realnych budżetach, realnych kampaniach i realnej odpowiedzialności za wynik.</p>
</div>
<div className="mt-12 grid gap-4 md:grid-cols-3">
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/15">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Wydatki reklamowe</div>
<div className="mt-4 text-6xl font-semibold tracking-tight text-white sm:text-7xl">10+</div>
<p className="mt-2 text-base font-medium text-zinc-200">mln zł wydane na kampanie</p>
<p className="mt-3 text-sm leading-7 text-zinc-400">na realnych kontach Meta Ads</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/15">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Konta reklamowe</div>
<div className="mt-4 text-6xl font-semibold tracking-tight text-white sm:text-7xl">250+</div>
<p className="mt-2 text-base font-medium text-zinc-200">przeanalizowanych kont</p>
<p className="mt-3 text-sm leading-7 text-zinc-400">w różnych branżach i modelach</p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-lime-300/[0.09] to-white/[0.02] p-6 shadow-[0_22px_60px_rgba(190,242,100,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/20">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Co z tego wynika</div>
<div className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Mniej zgadywania</div>
<p className="mt-2 text-base font-medium text-zinc-100">więcej trafnych decyzji</p>
<p className="mt-3 text-sm leading-7 text-zinc-300">bo reklamy trzeba rozumieć, a nie tylko uruchamiać</p>
</div>
</div>
<div className="mt-8 rounded-[2rem] border border-lime-300/15 bg-gradient-to-r from-lime-300/[0.08] via-white/[0.03] to-white/[0.02] p-6 shadow-[0_18px_60px_rgba(190,242,100,0.05)]">
<div className="text-xs uppercase tracking-[0.2em] text-lime-200/80">Najważniejsze</div>
<div className="mt-3 text-2xl font-medium tracking-tight text-white">Nie pokazuję wyników po to, żeby wyglądały dobrze. Pokazuję je po to, żeby było jasne, że mówię z pozycji praktyka, nie obserwatora.</div>
</div>
<div className="mt-10 grid gap-5 xl:grid-cols-3">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/15">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Przykład wyniku #1</h3>
<div className="rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-3 py-1 text-xs text-lime-200">e-commerce</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Wartość konwersji</div>
<div className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">2 019 942,91 zł</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Wydatki</div>
<div className="mt-1 text-lg font-medium text-zinc-200">160 554,05 zł</div>
</div>
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Zakupy</div>
<div className="mt-1 text-lg font-medium text-zinc-200">1236</div>
</div>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-300">Skala wyniku nie przyszła z przypadku. Wynika z dobrej struktury, właściwej optymalizacji i trafnych decyzji po drodze.</div>
<div className="border-dashed bg-center text-sm text-zinc-500 text-center bg-zinc-950/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78e64289-d0c4-424c-8b38-31bd3f5ed9bb_800w.png)] bg-cover border-white/10 border rounded-2xl mt-5 pt-5 pr-5 pb-20 pl-5"></div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/15">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Przykład wyniku #2</h3>
<div className="rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-3 py-1 text-xs text-lime-200">sprzedaż</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Zakupy</div>
<div className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">2756</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Koszt zakupu</div>
<div className="mt-1 text-lg font-medium text-zinc-200">40,24 zł</div>
</div>
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Wydatki</div>
<div className="mt-1 text-lg font-medium text-zinc-200">110 912,63 zł</div>
</div>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-300">Nie liczy się to, że reklama „miała zasięg”. Liczy się to, ile kosztował realny zakup i czy model się spina.</div>
<div className="border-dashed bg-center text-sm text-zinc-500 text-center bg-zinc-950/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81517816-b258-4a6e-94b9-01cef54eca75_800w.jpg)] bg-cover border-white/10 border rounded-2xl mt-5 pt-5 pr-5 pb-20 pl-5"></div>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/15">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-white">Przykład wyniku #3</h3>
<div className="rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-3 py-1 text-xs text-lime-200">lead generation</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Kontakty z formularza</div>
<div className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">1637</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Koszt kontaktu</div>
<div className="mt-1 text-lg font-medium text-zinc-200">10,53 zł</div>
</div>
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Wydatki</div>
<div className="mt-1 text-lg font-medium text-zinc-200">17 230,33 zł</div>
</div>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-300">Dobry lead nie zaczyna się w formularzu. Zaczyna się od właściwego komunikatu, celu kampanii i jakości ruchu.</div>
<div className="border-dashed bg-center text-sm text-zinc-500 text-center bg-zinc-950/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2019a4ab-2a14-4719-ad1d-a43212018916_800w.jpg)] bg-cover border-white/10 border rounded-2xl mt-5 pt-5 pr-5 pb-20 pl-5"></div>
</div>
</div>
</section>
<section className="border-y border-white/5 relative" id="opinie">
<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="max-w-3xl">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Opinie</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Co mówią osoby po szkoleniach</h2>
<p className="leading-8 sm:text-lg text-base text-zinc-400 mt-5">Opinie opierają się na jakości pracy, metodyce i praktycznym podejściu.</p>
</div>
<div className="mt-12 grid gap-5 xl:grid-cols-12">
<div className="xl:col-span-7">
<div className="grid gap-5 md:grid-cols-2">
<article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="flex items-center gap-1 text-lime-300">
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-5 text-sm leading-7 text-zinc-300">„Bardzo starannie przygotowane metodycznie i gruntowne szkolenie na temat reklam na META. Pomocny, kompetentny i mega zaangażowany prowadzący. Widać, że jest nie tylko profesjonalistą, ale i pasjonatem tych zagadnień. Ogrom wiedzy. Gorąco polecam.”</p>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Opinia uczestnika</div>
<div className="text-xs text-zinc-600">★★★★★</div>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="flex items-center gap-1 text-lime-300">
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-5 text-sm leading-7 text-zinc-300">„Szkolenie Michała bardzo metodyczne i praktyczne. W trakcie szkolenia pokazuje, na co zwrócić uwagę i przed czym się wystrzegać, żeby nie popełnić kosztownych błędów. Szkolenie zdecydowanie na plus i czuć profesjonalizm.”</p>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Opinia uczestnika</div>
<div className="text-xs text-zinc-600">★★★★★</div>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="flex items-center gap-1 text-lime-300">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-5 text-sm leading-7 text-zinc-300">„Michał to świetny szkoleniowiec i ekspert od Meta Ads. Otwarty, zaangażowany i bardzo merytoryczny. Widać u niego realne doświadczenie, a nie teorię z prezentacji.”</p>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Opinia uczestnika</div>
<div className="text-xs text-zinc-600">★★★★★</div>
</div>
</article>
<article className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/15">
<div className="flex items-center gap-1 text-lime-300">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="mt-5 text-sm leading-7 text-zinc-300">„Najlepszy fachowiec od reklam, jakiego znam.”</p>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Opinia uczestnika</div>
<div className="text-xs text-zinc-600">★★★★★</div>
</div>
</article>
</div>
</div>
<div className="xl:col-span-5">
<div className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] border-white/10 border rounded-[2rem] pt-6 pr-6 pb-10 pl-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
<h3 className="text-xl font-medium text-white tracking-tight">Opinie</h3>
<p className="leading-7 text-sm text-zinc-400 mt-3">Tak mówią o mnie klienci.</p>
<div className="mt-6 space-y-6">
<div className="border-dashed transition duration-300 hover:-translate-y-0.5 hover:border-white/15 bg-center text-sm text-zinc-500 text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e3d3390-cc61-4bcc-bbef-b492fd31b4d3_1600w.png)] bg-cover border-white/10 border rounded-2xl pt-5 pr-5 pb-10 pl-5"></div>
<div className="border-dashed transition duration-300 hover:-translate-y-0.5 hover:border-white/15 bg-center text-sm text-zinc-500 text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c4dd55a-d763-461c-acb2-e5835181fad5_1600w.png)] bg-cover border-white/10 border rounded-2xl pt-5 pr-5 pb-11 pl-5"></div>
<div className="border-dashed transition duration-300 hover:-translate-y-0.5 hover:border-white/15 bg-center text-sm text-zinc-500 text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/059c4389-9985-492e-b9e4-4d0d36766fae_1600w.png)] bg-cover border-white/10 border rounded-2xl pt-7 pr-5 pb-11 pl-5"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28" id="omnie">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="relative max-w-md">
<div className="absolute -inset-4 rounded-[2rem] bg-lime-300/[0.04] blur-3xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1">
<div className="aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab673345-52de-47f8-90c2-592e4d425dfd_1600w.png)] bg-cover bg-center rounded-[1.5rem]"></div>
<div className="text-sm text-zinc-500 text-center bg-zinc-950/60 border-white/10 border rounded-[1.25rem] mt-3 pt-4 pr-4 pb-4 pl-4">Michał Rozkres</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">O mnie</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Praktyk, który zna reklamy z kilku perspektyw</h2>
<div className="mt-6 space-y-5 text-base leading-8 text-zinc-300">
<p className="">
              Nazywam się <span className="font-medium text-white">Michał Rozkres</span>. Od około 5 lat zajmuję się Meta Ads i marketingiem internetowym. Nie patrzę na reklamy wyłącznie z poziomu panelu. Patrzę na nie z perspektywy właściciela biznesu, osoby prowadzącej kampanie i osoby odpowiedzialnej za wynik.
            </p>
<p className="">
              Prowadziłem własne sklepy e-commerce, dzięki czemu dobrze rozumiem presję rentowności, koszty pozyskania i codzienne decyzje związane z reklamą. Pracowałem także jako freelancer, prowadząc kampanie dla klientów z różnych branż i modeli biznesowych.
            </p>
<p className="">
              Obecnie pełnię funkcję <span className="font-medium text-white">Dyrektora ds. reklamy i promocji w Grupie Strategicznej Firmowe Rewolucje</span>. Szkolę ludzi z tworzenia i prowadzenia reklam Meta Ads tak, żeby umieli je wdrażać, rozumieć i oceniać bez zgadywania.
            </p>
<p className="">
              Jeśli szukasz kogoś, kto nie będzie opowiadał marketingowych historii, tylko pokaże Ci, jak pracować z reklamami rozsądnie i skutecznie, jesteś w dobrym miejscu.
            </p>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
<div className="text-sm font-medium text-white">e-commerce</div>
<div className="mt-2 text-sm leading-7 text-zinc-400">doświadczenie po stronie biznesu i sprzedaży</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
<div className="text-sm font-medium text-white">freelance</div>
<div className="mt-2 text-sm leading-7 text-zinc-400">prowadzenie kampanii dla klientów</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
<div className="text-sm font-medium text-white">zarządzanie</div>
<div className="mt-2 text-sm leading-7 text-zinc-400">odpowiedzialność za reklamę i promocję</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
<div className="relative overflow-hidden rounded-[2rem] border border-lime-300/15 bg-gradient-to-r from-lime-300/[0.1] via-white/[0.04] to-white/[0.02] p-8 shadow-[0_24px_80px_rgba(190,242,100,0.08)] sm:p-10 transition duration-500 hover:-translate-y-1">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-300/[0.08] blur-3xl"></div>
<div className="relative max-w-3xl">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Gotowy na konkrety?</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Jeśli chcesz w końcu rozumieć swoje reklamy, <span className="text-lime-300">zacznij od jednej dobrej decyzji</span></h2>
<p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">
            Napisz, na jakim jesteś etapie. Jeśli widzę, że mogę pomóc — powiem Ci konkretnie w jakim formacie. Jeśli nie, też powiem wprost.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
<div className="flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-300 px-6 py-4 text-sm font-medium text-zinc-950 shadow-[0_14px_40px_rgba(190,242,100,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(190,242,100,0.24)]" href="#kontakt">
                Zapisz się na szkolenie
                <iconify-icon className="" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="pl-1 text-xs text-zinc-400">Krótka wiadomość wystarczy. Odpowiem, co ma sens w Twojej sytuacji.</div>
</div>
<div className="flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]" href="#oferta">
                Zobacz ofertę
                <iconify-icon className="" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<div className="pl-1 text-xs text-zinc-500">1:1, mentoring albo szkolenie grupowe — dobierz świadomie.</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16" id="kontakt">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="max-w-xl">
<div className="text-xs font-medium uppercase tracking-[0.22em] text-lime-300/80">Kontakt</div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Napisz, czego potrzebujesz</h2>
<p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
              Wypełnij formularz. Odezwę się z informacją, jaki format szkolenia będzie najlepszy w Twoim przypadku.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="mt-0.5 text-lime-300">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-white">Kontakt mailowy</div>
<div className="mt-1 text-sm text-zinc-400">kontakt@michalrozkres.pl</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="mt-0.5 text-lime-300">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-white">Telefon</div>
<div className="text-sm text-zinc-400 mt-1">+48 690 668 670</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
<div className="mt-0.5 text-lime-300">
<iconify-icon height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-white">Typ współpracy</div>
<div className="mt-1 text-sm text-zinc-400">Szkolenie 1:1, mentoring lub szkolenie grupowe</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form action="https://formspree.io/f/mkopndve" className="sm:p-8 bg-gradient-to-b from-white/[0.045] to-white/[0.025] border-white/10 border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]" data-form="lead" data-ga4-event="generate_lead" data-meta-event="Lead" method="POST">
<input name="_subject" type="hidden" value="Nowy lead ze strony Michał Rozkres"/>
<input name="source" type="hidden" value="michalrozkres.pl"/>
<div className="grid gap-4 sm:grid-cols-2">
<div className="">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="imie">Imię</label>
<input autocomplete="given-name" className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="imie" name="imie" placeholder="Twoje imię" required="" type="text"/>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="firma">Firma</label>
<input autocomplete="organization" className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="firma" name="firma" placeholder="Nazwa firmy" type="text"/>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="email">E-mail</label>
<input autocomplete="email" className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="email" name="email" placeholder="adres@email.pl" required="" type="email"/>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="telefon">Telefon</label>
<input autocomplete="tel" className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="telefon" name="telefon" placeholder="+48..." type="tel"/>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="typ">Typ szkolenia</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 pr-11 text-sm text-white outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="typ" name="typ" required="">
<option value="">Wybierz typ szkolenia</option>
<option value="Szkolenie 1:1">Szkolenie 1:1</option>
<option value="Mentoring">Mentoring</option>
<option value="Szkolenie grupowe">Szkolenie grupowe</option>
<option value="Nie wiem, potrzebuję rekomendacji">Nie wiem, potrzebuję rekomendacji</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="budzet">Budżet reklamowy / skala firmy</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 pr-11 text-sm text-white outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="budzet" name="budzet" required="">
<option value="">Wybierz zakres</option>
<option value="Do 3 tys. zł miesięcznie">Do 3 tys. zł miesięcznie</option>
<option value="3–10 tys. zł miesięcznie">3–10 tys. zł miesięcznie</option>
<option value="10–30 tys. zł miesięcznie">10–30 tys. zł miesięcznie</option>
<option value="Powyżej 30 tys. zł miesięcznie">Powyżej 30 tys. zł miesięcznie</option>
<option value="Jeszcze nie reklamuję się regularnie">Jeszcze nie reklamuję się regularnie</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-sm font-medium text-zinc-300" htmlFor="wiadomosc">Wiadomość</label>
<textarea className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-lime-300/30 focus:ring-2 focus:ring-lime-300/10" id="wiadomosc" name="wiadomosc" placeholder="Napisz krótko, czym się zajmujesz, z czym masz problem i jaki efekt chcesz osiągnąć." required="" rows="6"></textarea>
</div>
</div>
<div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<p className="max-w-md text-xs leading-6 text-zinc-500">
      Napisz konkretnie. Im lepiej opiszesz sytuację, tym trafniej podpowiem, co ma sens.
    </p>
<div className="flex flex-col gap-2">
<button className="inline-flex transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(190,242,100,0.22)] text-sm font-medium text-zinc-950 bg-lime-300 rounded-2xl pt-3.5 pr-5 pb-3.5 pl-5 shadow-[0_12px_34px_rgba(190,242,100,0.16)] gap-x-2 gap-y-2 items-center justify-center" type="submit">
        Wyślij zapytanie
        <iconify-icon className="" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="text-xs text-zinc-500">
        Bez spamu. Bez automatu. Odpowiedź od człowieka, który zna temat.
      </div>
</div>
</div>
</form>
</div>
</div>
</section>
</main>
<footer className="bg-zinc-950 border-white/10 border-t">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-medium tracking-tight text-white">Michał Rozkres</div>
<div className="text-xs text-zinc-500">Meta Ads • praktyczne szkolenia</div>
</div>
</div>
<p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            Praktyczne szkolenia Meta Ads dla właścicieli firm usługowych. Konkretnie, bez lania wody, z naciskiem na wdrożenie i świadome decyzje reklamowe.
          </p>
</div>
<div className="">
<div className="text-sm font-medium text-white">Kontakt</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-400">
<li className="">kontakt@michalrozkres.pl</li>
<li>+48 690 668 670</li>
<li>Polska</li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-white">Linki</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-400">
<li><a className="transition duration-300 hover:text-white" href="#">Polityka prywatności</a></li>
<li><a className="transition duration-300 hover:text-white" href="#oferta">Oferta</a></li>
<li><a className="transition duration-300 hover:text-white" href="#kontakt">Kontakt</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
<div>© 2026 Michał Rozkres. Wszelkie prawa zastrzeżone.</div>
<div>Meta Ads • szkolenia • praktyka</div>
</div>
</div>
</footer>

    </>
  );
}
