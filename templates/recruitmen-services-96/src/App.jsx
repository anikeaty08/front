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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
<span className="text-lg font-medium tracking-tight text-[#0F3D2E]">M. Włodarczyk-Achterkamp</span>
<a className="group flex items-center gap-2 text-slate-600 hover:text-[#0F3D2E] transition-colors text-base font-normal" href="tel:+48534775251">
<iconify-icon className="text-slate-400 group-hover:text-[#0F3D2E] transition-colors" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="hidden sm:inline">534 775 251</span>
</a>
</div>
</nav>

<header className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 flex flex-col items-start gap-8">
<div className="flex flex-wrap gap-2 text-base font-normal text-[#0F3D2E]">
<span className="bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        🇩🇪 Niemcy
                    </span>
<span className="bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        🇳🇱 Holandia
                    </span>
<span className="bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        🇵🇱 Wsparcie PL
                    </span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.15]">
                    Michalina <br className="hidden lg:block"/>Włodarczyk-Achterkamp
                </h1>
<h2 className="text-2xl lg:text-3xl text-slate-500 font-light tracking-tight leading-relaxed max-w-lg">
                    Pomagam znaleźć legalną pracę w Niemczech i Holandii. Bez chaosu. Z ludzkim podejściem.
                </h2>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3.5 rounded-lg font-normal text-lg hover:bg-[#0F3D2E]/90 transition-all shadow-[0_4px_12px_rgba(15,61,46,0.2)] hover:shadow-[0_6px_16px_rgba(15,61,46,0.25)] hover:-translate-y-0.5 tracking-tight" href="tel:+48534775251">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Zadzwoń: +48 534 775 251
                    </a>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative w-full max-w-sm ml-auto aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5 shadow-2xl">
<img "="" alt="Michalina Włodarczyk-Achterkamp" className="absolute inset-0 w-full h-full object-cover object-center block transform hover:scale-105 transition-transform duration-700" src="Michalina.jpeg"/>
</div>

<div className="absolute -z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0F3D2E]/5 to-transparent rounded-full blur-3xl"></div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 border-y border-slate-200/60">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-white ring-1 ring-slate-900/5 shadow-xl order-last lg:order-first">
<img alt="Michalina Włodarczyk-Achterkamp - O mnie" className="absolute inset-0 w-full h-full object-cover object-center block" onerror="this.onerror=null;this.src='https://placehold.co/800x1000/f8fafc/94a3b8?text=Brak+zdj%C4%99cia'" src="Michalina.jpeg"/>
</div>
<div className="flex flex-col gap-6">
<span className="text-[#0F3D2E] font-normal tracking-tight text-base uppercase">O mnie</span>
<h3 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
                        Indywidualne podejście, nie korporacyjna machina.
                    </h3>
<div className="space-y-4 text-xl tracking-tight text-slate-500 font-extralight">
<p className="leading-relaxed">
                            Nazywam się Michalina Włodarczyk-Achterkamp. Pomagam osobom wyjeżdżającym do pracy w Niemczech i Holandii przejść przez proces rekrutacji spokojnie i bez stresu.
                        </p>
<p className="leading-relaxed">
                            Stawiam na jasne zasady, bezpośredni kontakt i realne wsparcie przed oraz po wyjeździe. Wiem, że decyzja o pracy za granicą bywa trudna, dlatego moją rolą jest upewnienie się, że trafisz w dobre, sprawdzone miejsce.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-12 text-center">
                Dla kogo mam oferty pracy?
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-[#0F3D2E]/20 bg-white hover:bg-slate-50/50 transition-all hover:shadow-lg hover:shadow-slate-200/50">
<div className="w-12 h-12 bg-[#0F3D2E]/5 rounded-xl flex items-center justify-center text-[#0F3D2E] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-normal text-slate-900 block mb-1 tracking-tight">Pracownicy fizyczni</span>
<span className="text-base text-slate-500 font-light">Prace ogólnobudowlane i pomocnicze</span>
</div>
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-[#0F3D2E]/20 bg-white hover:bg-slate-50/50 transition-all hover:shadow-lg hover:shadow-slate-200/50">
<div className="w-12 h-12 bg-[#0F3D2E]/5 rounded-xl flex items-center justify-center text-[#0F3D2E] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-normal text-slate-900 block mb-1 tracking-tight">Produkcja i magazyn</span>
<span className="text-base text-slate-500 font-light">Pakowanie, sortowanie, obsługa maszyn</span>
</div>
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-[#0F3D2E]/20 bg-white hover:bg-slate-50/50 transition-all hover:shadow-lg hover:shadow-slate-200/50">
<div className="w-12 h-12 bg-[#0F3D2E]/5 rounded-xl flex items-center justify-center text-[#0F3D2E] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-normal text-slate-900 block mb-1 tracking-tight">Logistyka</span>
<span className="text-base text-slate-500 font-light">Kierowcy wózków, operatorzy</span>
</div>
<div className="group p-6 rounded-2xl border border-slate-100 hover:border-[#0F3D2E]/20 bg-white hover:bg-slate-50/50 transition-all hover:shadow-lg hover:shadow-slate-200/50">
<div className="w-12 h-12 bg-[#0F3D2E]/5 rounded-xl flex items-center justify-center text-[#0F3D2E] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-normal text-slate-900 block mb-1 tracking-tight">Fachowcy</span>
<span className="text-base text-slate-500 font-light">Elektrycy, spawacze, hydraulicy</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#0F3D2E] font-normal tracking-tight text-base uppercase mb-3 block">Proces</span>
<h3 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
                    Jak wygląda współpraca?
                </h3>
</div>
<div className="relative">
<div className="absolute left-[27px] top-8 bottom-8 w-px bg-slate-200 hidden md:block"></div>
<div className="space-y-12">
<div className="flex gap-8 items-start relative">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-slate-200 text-[#0F3D2E] flex items-center justify-center text-xl tracking-tight font-medium shadow-sm z-10">
                            1
                        </div>
<div className="pt-2">
<h4 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">Rozmowa telefoniczna</h4>
<p className="text-lg font-light text-slate-500 leading-relaxed">Krótka rozmowa o Twoim doświadczeniu i oczekiwaniach. Poznajemy się.</p>
</div>
</div>
<div className="flex gap-8 items-start relative">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-slate-200 text-[#0F3D2E] flex items-center justify-center text-xl tracking-tight font-medium shadow-sm z-10">
                            2
                        </div>
<div className="pt-2">
<h4 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">Dopasowanie oferty</h4>
<p className="text-lg font-light text-slate-500 leading-relaxed">Przedstawiam konkretne propozycje pracy dopasowane do Twoich umiejętności.</p>
</div>
</div>
<div className="flex gap-8 items-start relative">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-slate-200 text-[#0F3D2E] flex items-center justify-center text-xl tracking-tight font-medium shadow-sm z-10">
                            3
                        </div>
<div className="pt-2">
<h4 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">Formalności</h4>
<p className="text-lg font-light text-slate-500 leading-relaxed">Pomagam przygotować niezbędne dokumenty i umowę. Wszystko jasne i czytelne.</p>
</div>
</div>
<div className="flex gap-8 items-start relative">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#0F3D2E] text-white flex items-center justify-center text-xl tracking-tight font-medium shadow-lg shadow-[#0F3D2E]/20 z-10">
                            4
                        </div>
<div className="pt-2">
<h4 className="text-2xl font-medium text-slate-900 mb-2 tracking-tight">Wyjazd i wsparcie</h4>
<p className="text-lg font-light text-slate-500 leading-relaxed">Bezpieczny wyjazd i kontakt po rozpoczęciu pracy. Nie zostawiam Cię samego.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-12 text-center">
                Dlaczego warto mi zaufać?
            </h3>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
<iconify-icon className="text-[#0F3D2E] flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-xl text-slate-700 font-normal tracking-tight">Legalne zatrudnienie u sprawdzonych pracodawców</span>
</div>
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
<iconify-icon className="text-[#0F3D2E] flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-xl text-slate-700 font-normal tracking-tight">Umowa podpisywana przed wyjazdem</span>
</div>
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
<iconify-icon className="text-[#0F3D2E] flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-xl text-slate-700 font-normal tracking-tight">Jasne i przejrzyste warunki współpracy</span>
</div>
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
<iconify-icon className="text-[#0F3D2E] flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-xl text-slate-700 font-normal tracking-tight">Stały kontakt telefoniczny – odbieram telefony</span>
</div>
<div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
<iconify-icon className="text-[#0F3D2E] flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-xl text-slate-700 font-normal tracking-tight">Pomoc w formalnościach od A do Z</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F3D2E] relative overflow-hidden px-6">
<div className="absolute inset-0 opacity-10 bg-[url(default)] bg-cover bg-center"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-white">
                Szukasz pracy w Niemczech lub Holandii?
            </h2>
<p className="text-xl lg:text-2xl text-white/80 font-extralight tracking-tight max-w-2xl">
                Zadzwoń i porozmawiajmy o możliwościach. To nic nie kosztuje, a może zmienić Twoją sytuację zawodową.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-[#0F3D2E] px-8 py-4 rounded-xl font-medium text-xl tracking-tight hover:bg-slate-100 transition-colors shadow-xl mt-4" href="tel:+48534775251">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
                Zadzwoń teraz: +48 534 775 251
            </a>
</div>
</section>
<footer className="py-12 bg-white border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1 text-center md:text-left">
<span className="text-xl tracking-tight font-medium text-[#0F3D2E]">Michalina Włodarczyk-Achterkamp</span>
<span className="text-base font-light text-slate-500">Rekrutacja do Niemiec i Holandii</span>
</div>
<div className="text-base font-light text-slate-400">
                © 2024 Wszystkie prawa zastrzeżone.
            </div>
</div>
</footer>

    </>
  );
}
