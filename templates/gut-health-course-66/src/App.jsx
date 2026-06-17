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



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
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
      

<section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
<div className="lg:pr-4">
<span className="inline-flex items-center rounded-full bg-fuchsia-600 px-4 py-1.5 text-xs font-medium text-white mb-6 tracking-wide">
                        JELITOWE S.O.S
                    </span>
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                        6-etapowy proces regeneracji jelit
                    </h1>
<p className="text-xl sm:text-2xl font-medium text-gray-800 mb-8 leading-snug">
                        Dla osób, które próbowały już wszystkiego, a nadal nie widzą efektów
                    </p>
<div className="text-lg text-[#2D2D2D] space-y-4 mb-10 leading-relaxed">
<p>To nie jest kolejna obietnica „zdrowych jelit w 14 dni".</p>
<p>To skuteczny proces, który wreszcie wytłumaczy Ci, dlaczego Twoje ciało reaguje tak, jak reaguje i nauczy Cię, jak przywrócić w nim równowagę.</p>
<ul className="space-y-2 mt-4 text-[#2D2D2D]">
<li className="flex items-center gap-3">
<i className="text-[#4CAF50] shrink-0 w-5 h-5" data-lucide="check"></i>
<span>Bez restrykcji, które niszczą psychikę.</span>
</li>
<li className="flex items-center gap-3">
<i className="text-[#4CAF50] shrink-0 w-5 h-5" data-lucide="check"></i>
<span>Bez strachu przed jedzeniem.</span>
</li>
<li className="flex items-center gap-3">
<i className="text-[#4CAF50] shrink-0 w-5 h-5" data-lucide="check"></i>
<span>Bez poczucia, że coś jest z Tobą nie tak.</span>
</li>
</ul>
</div>
<div>
<a className="inline-flex justify-center items-center gap-2 rounded-full bg-[#4CAF50] px-10 py-5 text-lg font-medium text-white hover:bg-[#43A047] transition-all duration-200 shadow-sm hover:shadow-md" href="#pricing">
                            ZAMAWIAM KURS
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-md lg:max-w-none mx-auto">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 ring-1 ring-gray-900/5 bg-gray-100 relative group">

<img alt="Magda - twórczyni kursu" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#E8F5E9] rounded-full -z-10 blur-2xl opacity-70"></div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E8F5E9] rounded-full -z-10 blur-2xl opacity-70"></div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                    Dołącz do setek osób, które odzyskały równowagę i stabilizację
                </h2>
<p className="text-lg text-[#2D2D2D] leading-relaxed">
                    Nie musisz wierzyć mi na słowo. Zobacz, co piszą osoby, które też były zmęczone wzdęciami, dietami i ciągłym zaczynaniem od zera. Ich efekty to nie przypadek - to skutek przejścia przez proces Jelitowe S.O.S.
                </p>
</div>
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

<div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-lg leading-relaxed text-[#2D2D2D] mb-8">
                        "Przez 5 lat walczyłam z SIBO. Ciągłe antybiotyki, diety low FODMAP i frustracja. Ten program to game-changer. Pierwszy raz ktoś mi wytłumaczył, że moje ciało reaguje na stres, a nie tylko na jedzenie. Mam wreszcie płaski brzuch."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
<span className="text-gray-500 font-medium text-lg">A</span>
</div>
<div>
<div className="font-medium text-gray-900">Anna K.</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-lg leading-relaxed text-[#2D2D2D] mb-8">
                        "Bałam się jeść cokolwiek. Każdy posiłek to był stres. Jelitowe S.O.S uświadomiło mi, że moją główną przyczyną był przewlekły stan zapalny i zniszczona śluzówka. Powoli wprowadzam nowe produkty i nic mi nie jest!"
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
<span className="text-gray-500 font-medium text-lg">M</span>
</div>
<div>
<div className="font-medium text-gray-900">Marta P.</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-lg leading-relaxed text-[#2D2D2D] mb-8">
                        "Moduł o emocjach i Totalnej Biologii otworzył mi oczy. Zawsze myślałam, że to tylko biochemia, a okazało się, że moje napięcia życiowe blokowały trawienie. Wreszcie czuję energię do życia i nie planuję dnia pod toaletę."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
<span className="text-gray-500 font-medium text-lg">K</span>
</div>
<div>
<div className="font-medium text-gray-900">Katarzyna W.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-4xl text-center mb-16">
<p className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed">
                    Być może oglądasz tę stronę z myślą: „U mnie i tak nic nie działa." Znam to doskonale, bo sama zanim opracowałam ten proces toczyłam wojny ze swoim organizmem. A kluczowym jest, żeby przestać z nim walczyć, a zacząć się z nim dogadywać!
                </p>
</div>
<div className="mx-auto max-w-4xl relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-900/5 bg-gray-100 aspect-video group cursor-pointer flex items-center justify-center">
<img alt="Wideo wprowadzające" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors"></div>
<div className="relative z-10 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-[#4CAF50] ml-1" data-lucide="play"></i>
</div>
</div>
</div>
</section>

<section className="bg-[#E8F5E9] py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    Ten kurs jest dla Ciebie, jeśli:
                </h2>
</div>
<div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

<div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
<div className="bg-fuchsia-100 rounded-full p-2 shrink-0 mt-1">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Od lat zmagasz się z „problemami z brzuchem" (wzdęciami, biegunkami, zaparciami)</p>
</div>

<div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
<div className="bg-fuchsia-100 rounded-full p-2 shrink-0 mt-1">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Zostałaś zdiagnozowana z IBS, SIBO lub masz nietolerancje pokarmowe</p>
</div>

<div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
<div className="bg-fuchsia-100 rounded-full p-2 shrink-0 mt-1">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Czujesz, że w Twoim ciele toczy się ciągły stan zapalny</p>
</div>

<div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
<div className="bg-fuchsia-100 rounded-full p-2 shrink-0 mt-1">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Próbowałaś już mnóstwa diet, eliminacji i suplementów - bezskutecznie</p>
</div>

<div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
<div className="bg-fuchsia-100 rounded-full p-2 shrink-0 mt-1">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Masz wrażenie, że Twoje jelita reagują na każdą zmianę w Twoich emocjach</p>
</div>

<div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
<div className="bg-fuchsia-100 rounded-full p-2 shrink-0 mt-1">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Chcesz zacząć funkcjonować normalnie i nie walczyć ze swoim organizmem</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-10">
                To nie Twoja wina, że wcześniejsze próby nie działały
            </h2>
<div className="text-lg text-[#2D2D2D] space-y-6 mb-12 leading-relaxed text-left sm:text-center">
<p>
                    Twoje jelita nie są „wadliwe" czy „zepsute". One są zmęczone, przeciążone i żyją w ciągłym trybie walki. Ostatnie, czego potrzebują, to kolejne, restrykcyjne diety i eliminacje.
                </p>
<p>
                    Większość programów na rynku mówi Ci o tym, co powinnaś wyrzucić ze swojego talerza oraz jakie suplementy i probiotyki brać. Nie tędy droga!
                </p>
<p className="font-medium text-gray-900 bg-[#E8F5E9] p-6 rounded-2xl mt-8">
                    Jelitowe S.O.S to jedyny program na rynku, który doskonale łączy biochemię z emocjami, a dzięki temu wskaże Ci źródło problemu i mechanizmy, które za nim stoją. Kiedy zrozumiesz, co się dzieje, przestaniesz walczyć ze swoim ciałem - zaczniesz z nim współpracować.
                </p>
</div>
<a className="inline-flex justify-center items-center gap-2 rounded-full bg-[#4CAF50] px-10 py-5 text-lg font-medium text-white hover:bg-[#43A047] transition-all duration-200 shadow-sm" href="#pricing">
                ZAMAWIAM KURS
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="bg-gray-50 py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center mb-20">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    Co zmieni się w Twoim życiu po kursie Jelitowe S.O.S?
                </h2>
</div>
<div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gray-100">
<div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-6 text-[#4CAF50]">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Twój brzuch przestanie być centrum Twojego dnia</h3>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Nie będziesz dłużej w stresie analizować każdego posiłku i planować całego dnia pod swój brzuch.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gray-100">
<div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-6 text-[#4CAF50]">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Zaczniesz żyć w harmonii ze swoim organizmem</h3>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Dzięki wyregulowaniu odporności i ustabilizowaniu biologii, zobaczysz realną różnicę w funkcjonowaniu Twojego ciała.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gray-100">
<div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-6 text-[#4CAF50]">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Ustabilizujesz gospodarkę hormonalną</h3>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Kiedy jelita są w stanie zapalnym, hormony prawie nigdy nie są w równowadze. Stabilna oś jelito-mózg pomoże Ci je wyregulować.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gray-100">
<div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-6 text-[#4CAF50]">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Odzyskasz energię i chęci do życia</h3>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Koniec z mgłą mózgową i przewlekłym zmęczeniem - od teraz będziesz cieszyć się lepszą koncentracją i stabilnym nastrojem.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gray-100">
<div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-6 text-[#4CAF50]">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Zrozumiesz, jak emocje wpływają na Twoje jelita</h3>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Dzięki pracy nad swoimi emocjami zmniejszysz nawroty dolegliwości i dopełnisz całość procesu.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gray-100">
<div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-6 text-[#4CAF50]">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Przestaniesz czuć, że „nic nie działa"</h3>
<p className="text-lg text-[#2D2D2D] leading-relaxed">Zapomnisz o chaosie i sprzecznych zaleceniach - Jelitowe S.O.S to jasny i klarowny plan działania krok po kroku.</p>
</div>
</div>
<div className="mx-auto max-w-4xl text-center bg-white p-10 rounded-3xl shadow-sm ring-1 ring-gray-100">
<p className="text-2xl font-semibold text-gray-900 mb-6 leading-snug">
                    Problemy jelitowe będą wracały do Ciebie wciąż, jeśli nie wypracujesz SOLIDNEGO FUNDAMENTU.
                </p>
<p className="text-lg text-[#2D2D2D] leading-relaxed">
                    Dzięki mojemu autorskiemu programowi Jelitowe S.O.S zaczniesz pracować z całym systemem: trawieniem, mikrobiotą i reakcją jelit na stres.
                </p>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    Zobacz, jak będzie wyglądał Twój proces „dogadywania się z brzuchem":
                </h2>
</div>
<div className="space-y-6">

<div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
<div className="shrink-0 flex md:flex-col items-center gap-4 md:w-48">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl font-semibold">1</div>
<h3 className="text-xl font-semibold text-gray-900 md:text-center mt-1">Wygaszanie stanu zapalnego</h3>
</div>
<div className="flex-1 grid md:grid-cols-2 gap-8 pt-2">
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="book-open"></i> Dowiesz się:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Czym jest przewlekły stan zapalny</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak wpływa on na śluzówkę jelita</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Czym jest zonulina i dlaczego rośnie</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak interpretować CRP i kalprotektynę</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="hammer"></i> W praktyce:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wdrożysz dietę przeciwzapalną</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wyeliminujesz czynniki drażniące</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Odkryjesz zbawienne skutki naturalnych substancji przeciwzapalnych</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Nauczysz się redukować czynniki stresowe</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
<div className="shrink-0 flex md:flex-col items-center gap-4 md:w-48">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl font-semibold">2</div>
<h3 className="text-xl font-semibold text-gray-900 md:text-center mt-1">Odbudowa śluzówki</h3>
</div>
<div className="flex-1 grid md:grid-cols-2 gap-8 pt-2">
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="book-open"></i> Dowiesz się:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Czym jest śluzówka i warstwa śluzu</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak działa bariera jelitowa i jakie są konsekwencje jej uszkodzenia</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Dlaczego aż ponad 70% odporności pochodzi z jelit</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="hammer"></i> W praktyce:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wdrożysz dietę wspierającą produkcję SCFA</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Nauczysz się wdrażać skuteczną suplementację cynkiem i witaminą A</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Zastosujesz L-glutaminę i wzmocnisz erytrocyty</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Zrozumiesz, w jaki sposób wesprzeć procesy kolagenem i żelatyną</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
<div className="shrink-0 flex md:flex-col items-center gap-4 md:w-48">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl font-semibold">3</div>
<h3 className="text-xl font-semibold text-gray-900 md:text-center mt-1">Przywracanie szczelności</h3>
</div>
<div className="flex-1 grid md:grid-cols-2 gap-8 pt-2">
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="book-open"></i> Dowiesz się:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak wygaszać nadreaktywność immunologiczną</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak pracować z eliminacją celowaną</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak odbudować tolerancję pokarmową</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak przestać „walczyć z jedzeniem"</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="hammer"></i> W praktyce:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wyciągniesz organizm z trybu alarmowego</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wzmocnisz ścisłe połączenia między komórkami</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Zrozumiesz mechanizmy działania zonuliny oraz przenikania toksyn</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
<div className="shrink-0 flex md:flex-col items-center gap-4 md:w-48">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl font-semibold">4</div>
<h3 className="text-xl font-semibold text-gray-900 md:text-center mt-1">Nietolerancje i alergie</h3>
</div>
<div className="flex-1 grid md:grid-cols-2 gap-8 pt-2">
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="book-open"></i> Dowiesz się:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jaka jest realna różnica między alergią IgE a nadwrażliwością IgG</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Dlaczego nieszczelność jelit zwiększa reakcje na jedzenie</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Skąd biorą się nagłe „nietolerancje", których wcześniej nie było</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Dlaczego sama eliminacja pokarmowa nie rozwiąże problemów</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="hammer"></i> W praktyce:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wdrożysz strategię czasowej, celowanej eliminacji</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wzmocnisz ścisłe połączenia między komórkami</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Zrozumiesz mechanizmy działania zonuliny</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
<div className="shrink-0 flex md:flex-col items-center gap-4 md:w-48">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl font-semibold">5</div>
<h3 className="text-xl font-semibold text-gray-900 md:text-center mt-1">Mikrobiom i trawienie</h3>
</div>
<div className="flex-1 grid md:grid-cols-2 gap-8 pt-2">
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="book-open"></i> Dowiesz się:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jaką rolę pełnią bakterie Lactobacillus i Bifidobacterium</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak mikrobiom wpływa na produkcję witamin</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Czym są SCFA i dlaczego są kluczowym paliwem dla jelit</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak mikrobiom reguluje odporność i metabolizm</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="hammer"></i> W praktyce:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Wdrożysz celowane probiotyki</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Nauczysz się pracować z prebiotykami</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Zaczniesz bezpiecznie wprowadzać produkty fermentowane</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Ustabilizujesz perystaltykę i poprawisz komfort trawienia</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
<div className="shrink-0 flex md:flex-col items-center gap-4 md:w-48">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center text-2xl font-semibold">6</div>
<h3 className="text-xl font-semibold text-gray-900 md:text-center mt-1">Emocje i oś jelito-mózg</h3>
</div>
<div className="flex-1 grid md:grid-cols-2 gap-8 pt-2">
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="book-open"></i> Dowiesz się:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak kortyzol wpływa na przepuszczalność jelit</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Dlaczego przewlekły stres obniża produkcję ochronnego śluzu</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> Jak emocje wpływają na napięcie trzewne i objawy jelitowe</li>
<li className="flex items-start gap-2"><span className="text-fuchsia-500 font-bold mt-1">•</span> W jaki sposób oś HPA reguluje pracę jelit</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="hammer"></i> W praktyce:
                            </h4>
<ul className="space-y-3 text-lg text-[#2D2D2D]">
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Przejdziesz przez krótką medytację wprowadzającą</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Zrozumiesz swoje emocjonalne powiązania z układem pokarmowym</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Popracujesz z przekonaniami, które utrzymują ciało w napięciu</li>
<li className="flex items-start gap-2"><span className="text-[#4CAF50] font-bold mt-1">✓</span> Poznasz elementy pracy w nurcie totalnej biologii</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#E8F5E9] py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="mb-20">
<h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-12">
                    Dlaczego to, co do tej pory robiłaś nie działało?
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#E53935]" data-lucide="x"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Eliminowałaś produkty, a przez to zwiększałaś wrażliwość swoich jelit</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#E53935]" data-lucide="x"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Suplementowałaś „na czuja", bez konkretnego planu</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#E53935]" data-lucide="x"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Skupiałaś się na SKUTKU a nie na PRZYCZYNIE</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#E53935]" data-lucide="x"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Doprowadzałaś ciało do ciągłego stanu alarmowego</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto text-center mb-20">
<p className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed">
                    Jelitowe S.O.S to nie program, który dokłada Ci kolejną rzecz do zrobienia. To proces, dzięki któremu krok po kroku przejdziesz metamorfozę, która całkowicie zmieni funkcjonowanie Twojego organizmu.
                </p>
</div>

<div>
<h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-12">
                    Dlaczego Jelitowe S.O.S realnie poprowadzą Cię do zmiany?
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#4CAF50]" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Zaopiekujesz się sobą kompleksowo - od emocji po biochemię</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#4CAF50]" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Nauczysz się suplementacji i eliminacji celowanej, unikając stresu</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#4CAF50]" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Wyciszysz PRZYCZYNĘ problemu, zamiast skupiając się na skutkach</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#4CAF50]" data-lucide="check"></i>
</div>
<p className="text-lg text-[#2D2D2D]">Przejdziesz proces kompleksowo od A do Z - bez zbędnego chaosu</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 sm:py-32 border-t border-gray-200/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center text-gray-900 mb-16">
                Kim jesteśmy?
            </h2>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col sm:flex-row gap-8 items-start">
<img alt="Magda" className="w-32 h-32 sm:w-48 sm:h-48 rounded-3xl object-cover shadow-md shrink-0 border border-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<h3 className="text-2xl font-semibold text-gray-900 mb-1">Magda</h3>
<p className="text-fuchsia-600 font-medium mb-4">Twórczyni programu, specjalistka ds. zdrowia jelit</p>
<p className="text-lg text-[#2D2D2D] leading-relaxed">
                            Od lat pomagam kobietom wyjść z błędnego koła diet eliminacyjnych. Moje podejście opiera się na medycynie funkcjonalnej i szukaniu przyczyny, a nie maskowaniu objawów. Sama przeszłam drogę od diagnozy SIBO do pełnego zdrowia, dlatego wiem dokładnie, przez co przechodzisz.
                        </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-8 items-start">
<img alt="Anna" className="w-32 h-32 sm:w-48 sm:h-48 rounded-3xl object-cover shadow-md shrink-0 border border-gray-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-2xl font-semibold text-gray-900 mb-1">Anna (Gość Specjalny)</h3>
<p className="text-[#4CAF50] font-medium mb-4">Ekspertka pracy z emocjami i Totalnej Biologii</p>
<p className="text-lg text-[#2D2D2D] leading-relaxed">
                            W module specjalnym programu przeprowadzę Cię przez świat emocji, które zapisują się w Twoim ciele. Pokażę Ci, jak stres i nierozwiązane konflikty wpływają bezpośrednio na skurcze jelit i stany zapalne, oraz dam Ci narzędzia, by je uwolnić.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 pb-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-4xl text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 leading-snug">
                    Jelitowe S.O.S to nie kolejny kurs, który odłożysz na półkę. To realna poprawa Twojego życia - nawet, jeśli wcześniej próbowałaś już wszystkiego.
                </h2>
</div>
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

<div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-lg leading-relaxed text-[#2D2D2D] mb-8">
                        "Kiedyś po zjedzeniu jabłka wyglądałam jak w 6 miesiącu ciąży. Teraz jem niemal wszystko. Krok po kroku, moduł po module odbudowałam swoją barierę jelitową. Dziękuję!"
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
<span className="text-gray-500 font-medium text-lg">E</span>
</div>
<div>
<div className="font-medium text-gray-900">Ewa J.</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-lg leading-relaxed text-[#2D2D2D] mb-8">
                        "Wiedza podana w taki sposób, że wreszcie rozumiem swój organizm. Nie dostajemy gotowej rozpiski zakazów, ale uczymy się jak samodzielnie reagować na to, co mówi ciało."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
<span className="text-gray-500 font-medium text-lg">J</span>
</div>
<div>
<div className="font-medium text-gray-900">Joanna L.</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
<div className="flex gap-1 mb-6 text-amber-400">
<i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i><i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-lg leading-relaxed text-[#2D2D2D] mb-8">
                        "Moje problemy skórne i zmęczenie zniknęły wraz z uporządkowaniem jelit. Program Jelitowe S.O.S to najlepiej wydane pieniądze na moje zdrowie."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
<span className="text-gray-500 font-medium text-lg">P</span>
</div>
<div>
<div className="font-medium text-gray-900">Paulina K.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32 relative" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E9]/50 to-white/0 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="mx-auto max-w-3xl bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-fuchsia-900/5 ring-1 ring-fuchsia-100 border-t-4 border-t-fuchsia-500">
<div className="text-center mb-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6 uppercase">
                        CO OTRZYMUJESZ W PAKIECIE?
                    </h2>
<p className="text-lg text-[#2D2D2D] leading-relaxed">
                        Jelitowe S.O.S to jedyny na rynku kompleksowy program regeneracji jelit, który łączy w sobie biochemię i emocje. Stworzony z myślą o osobach z przewlekłymi problemami jelitowymi, wzdęciami i stanami zapalnymi.
                    </p>
</div>
<ul className="space-y-4 mb-12">
<li className="flex items-start gap-4">
<div className="mt-1 bg-green-50 rounded-full p-1"><i className="w-5 h-5 text-[#4CAF50]" data-lucide="check"></i></div>
<span className="text-lg text-[#2D2D2D] font-medium">6-etapowy, kompleksowy proces regulacji jelit</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-green-50 rounded-full p-1"><i className="w-5 h-5 text-[#4CAF50]" data-lucide="check"></i></div>
<span className="text-lg text-[#2D2D2D] font-medium">Ponad 500 minut nagrań wideo</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-green-50 rounded-full p-1"><i className="w-5 h-5 text-[#4CAF50]" data-lucide="check"></i></div>
<span className="text-lg text-[#2D2D2D] font-medium">Konkretna wiedza o biologii jelit i trawienia</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-green-50 rounded-full p-1"><i className="w-5 h-5 text-[#4CAF50]" data-lucide="check"></i></div>
<span className="text-lg text-[#2D2D2D] font-medium">Perspektywa emocjonalna - moduł z gościem specjalnym: Totalna Biologia</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-green-50 rounded-full p-1"><i className="w-5 h-5 text-[#4CAF50]" data-lucide="check"></i></div>
<span className="text-lg text-[#2D2D2D] font-medium">Dożywotni dostęp na platformie e-learningowej</span>
</li>
</ul>
<div className="text-center mb-10">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">TYLKO TERAZ</p>
<div className="flex items-center justify-center gap-2">
<span className="text-5xl font-semibold tracking-tight text-gray-900">497 zł</span>
</div>
</div>
<div className="text-center">
<a className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#4CAF50] px-12 py-5 text-lg font-medium text-white hover:bg-[#43A047] transition-all duration-200 shadow-lg shadow-green-600/20" href="#">
                        ZAMAWIAM KURS
                    </a>
<p className="text-sm text-gray-500 mt-4 flex justify-center items-center gap-1">
<i className="w-4 h-4" data-lucide="lock"></i> Bezpieczna płatność online
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24">
<div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm ring-1 ring-gray-100 text-[#4CAF50]">
<i className="w-10 h-10" data-lucide="shield-check"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
                Gwarancja Satysfakcji
            </h2>
<div className="text-lg text-[#2D2D2D] space-y-6 leading-relaxed text-left sm:text-center">
<p>
                    Postanowienie o wejściu w proces pracy z jelitami to coś więcej niż zakup programu Jelitowe S.O.S - to świadoma i odpowiedzialna decyzja o zmianie, a doskonale wiem, że taki krok wymaga zaufania. A ja chcę, żebyś czuła się bezpiecznie.
                </p>
<p>
                    Jestem przekonana o skuteczności tego procesu, bo opiera się on na biologii jelit, medycynie funkcjonalnej i realnej pracy z Pacjentami, jednak jeszcze bardziej wierzę w to, że krok ku zmianie powinien być podejmowany w poczuciu bezpieczeństwa.
                </p>
<p>
                    Dlatego właśnie masz 30 dni od momentu zakupu, aby spokojnie przejść przez pierwsze etapy programu, wdrożyć zalecenia i sprawdzić, jak Twój organizm reaguje. Poświęć ten czas na doświadczenie procesu, nie tylko na obejrzenie materiałów.
                </p>
<p className="font-medium text-gray-900">
                    Jeśli po rzetelnym przejściu pierwszych kroków uznasz, że to nie jest droga dla Ciebie, napisz do nas, a my bez nieprzyjemnych pytań i bez udowadniania czegokolwiek zwrócimy Ci pieniądze.
                </p>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32 border-t border-gray-100">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center text-gray-900 mb-16">
                Najczęściej zadawane pytania
            </h2>
<div className="space-y-4">

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-gray-900 text-lg">
                        Czy Jelitowe S.O.S. jest dla mnie?
                        <i className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#2D2D2D] leading-relaxed pt-2">
                        Jeśli masz wzdęcia, nieregularne wypróżnienia, SIBO, IBS, problemy skórne, zmęczenie lub rozchwiane hormony - tak. Program pracuje na poziomie przyczyny: regeneracji jelita, wyciszenia stanu zapalnego i stabilizacji mikrobioty.
                    </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-gray-900 text-lg">
                        Czy muszę wykonać szczegółowe badania przed startem?
                        <i className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#2D2D2D] leading-relaxed pt-2">
                        Nie. Program został zaprojektowany jako bezpieczny fundament odbudowy jelit. Badania mogą być pomocne, ale nie są konieczne, aby rozpocząć proces i zauważyć pierwsze efekty.
                    </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-gray-900 text-lg">
                        Czy ten program bazuje na diecie eliminacyjnej?
                        <i className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#2D2D2D] leading-relaxed pt-2">
                        Nie. To proces regeneracyjny. Celem nie jest ograniczanie jedzenia, ale poprawa trawienia, odbudowa bariery jelitowej i zwiększenie tolerancji pokarmowej.
                    </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-gray-900 text-lg">
                        Kiedy zobaczę pierwsze efekty?
                        <i className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#2D2D2D] leading-relaxed pt-2">
                        Wiele osób odczuwa poprawę w ciągu 7–14 dni (mniej wzdęć, spokojniejszy brzuch, lepsza energia). Program został zaprojektowany etapowo, aby efekt był trwały, a nie tylko chwilowy.
                    </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-gray-900 text-lg">
                        Czy jest gwarancja zwrotu pieniędzy?
                        <i className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-[#2D2D2D] leading-relaxed pt-2">
                        Tak. Jeśli przejdziesz pełne 30 dni programu, zrealizujesz wszystkie etapy zgodnie z wytycznymi i nie zauważysz widocznej poprawy, przysługuje Ci zwrot pieniędzy zgodnie z warunkami umowy zakupu. Jelitowe S.O.S to proces oparty na fizjologii, a nie na obietnicach bez pokrycia.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#4CAF50] py-24 sm:py-32">
<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-12">
                Zacznij swój proces regeneracji jelit już dziś
            </h2>
<a className="inline-flex justify-center items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-medium text-[#4CAF50] hover:bg-gray-50 transition-all duration-200 shadow-xl shadow-green-900/20" href="#pricing">
                ZAMAWIAM KURS
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>
<footer className="bg-gray-50 py-8 border-t border-gray-200 text-center">
<p className="text-sm text-gray-500">© 2024 Jelitowe S.O.S. Wszelkie prawa zastrzeżone.</p>
</footer>



    </>
  );
}
