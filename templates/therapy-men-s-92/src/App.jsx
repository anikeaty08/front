import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 backdrop-blur-md" style={{background: 'rgba(249,246,242,0.85)', borderBottom: '1px solid #e7e7e7'}}>
<div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex items-center justify-between" style={{height: '72px'}}>
<a className="font-semibold tracking-tight" href="#" style={{fontSize: '18px', color: '#141414'}}>
          Poćwiardowski
          <span style={{color: '#94e130'}}>.</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="nav-link" href="#metoda">Metoda</a>
<a className="nav-link" href="#warsztat">Warsztat</a>
<a className="nav-link" href="#program">Program roczny</a>
<a className="nav-link" href="#o-mnie">O mnie</a>
</div>
<a className="btn-secondary text-xs md:text-sm" href="#warsztat">
          Zapisz się
          <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="relative">
<div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-24">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full" style={{background: '#f4eee5', border: '1px solid #e7e7e7'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#94e130'}}></span>
<span className="caption font-medium" style={{color: '#4e4d4c'}}>
                Terapia somatyczna dla mężczyzn · od 2009
              </span>
</div>
<h1 className="display-xl font-semibold tracking-tight" style={{color: '#141414'}}>
              Ze mną odzyskasz
              <br/>
              przyjemność życia.
            </h1>
<p className="subheading mt-8 max-w-2xl" style={{color: '#262626', fontWeight: '400'}}>
              Jesteś skuteczny w pracy, masz wszystko poukładane, a w środku —
              pusto. Ciało spięte, emocje wyłączone. Wiesz, że tak dalej nie da
              się żyć.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
<a className="btn-primary" href="#warsztat">
                Zapisz się na warsztat
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="btn-ghost body inline-flex items-center gap-2" href="#metoda">
                Jak pracuję
                <iconify-icon icon="solar:arrow-down-linear" width="14"></iconify-icon>
</a>
</div>
<div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" style={{color: '#4e4d4c'}} width="18"></iconify-icon>
<span className="body" style={{color: '#4e4d4c'}}>700+ mężczyzn</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" style={{color: '#4e4d4c'}} width="18"></iconify-icon>
<span className="body" style={{color: '#4e4d4c'}}>17 lat praktyki</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:medal-ribbon-linear" style={{color: '#4e4d4c'}} width="18"></iconify-icon>
<span className="body" style={{color: '#4e4d4c'}}>
                  Lowen · ISTDP · oddech
                </span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl aspect-[4/5] flex items-end p-8 overflow-hidden">
<img alt="Marcin" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4bfd78b-97cc-4bd3-9b75-b9722b55a1be_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10">
<div className="text-white subheading font-medium">
                  Ciało wie pierwsze.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" style={{background: '#f4eee5'}}>
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<div className="micro uppercase font-medium mb-6" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
              01 — Diagnoza
            </div>
<h2 className="heading font-semibold tracking-tight" style={{color: '#141414'}}>
              Czytasz to i wiesz, że mówię o tobie.
            </h2>
<p className="body-lg mt-6" style={{color: '#4e4d4c'}}>
              Nie jesteś chory. Nie jesteś słaby. Jesteś sprawny. Tylko że ta
              sprawność zaczyna kosztować coraz więcej, a daje coraz mniej.
            </p>
</div>
<div className="lg:col-span-7">
<ul className="space-y-0">
<li className="py-6 flex gap-5 items-start" style={{borderBottom: '1px solid #e7e7e7'}}>
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{background: '#141414'}}>
<iconify-icon icon="solar:minus-linear" style={{color: '#94e130'}} width="14"></iconify-icon>
</div>
<div className="">
<div className="subheading font-medium" style={{color: '#141414'}}>
                    Czujesz się odrętwiały — nawet w rzeczach, które kiedyś
                    cieszyły.
                  </div>
<div className="body mt-1" style={{color: '#4e4d4c'}}>
                    Sukces, seks, jedzenie, dzieci — wszystko jakby przez szybę.
                  </div>
</div>
</li>
<li className="py-6 flex gap-5 items-start" style={{borderBottom: '1px solid #e7e7e7'}}>
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{background: '#141414'}}>
<iconify-icon icon="solar:minus-linear" style={{color: '#94e130'}} width="14"></iconify-icon>
</div>
<div className="">
<div className="subheading font-medium" style={{color: '#141414'}}>
                    Pchasz wszystko na zaciśniętych zębach.
                  </div>
<div className="body mt-1" style={{color: '#4e4d4c'}}>
                    Funkcjonujesz z woli, nie z chęci. Wieczorem padasz. Rano
                    znowu od nowa.
                  </div>
</div>
</li>
<li className="py-6 flex gap-5 items-start" style={{borderBottom: '1px solid #e7e7e7'}}>
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{background: '#141414'}}>
<iconify-icon icon="solar:minus-linear" style={{color: '#94e130'}} width="14"></iconify-icon>
</div>
<div>
<div className="subheading font-medium" style={{color: '#141414'}}>
                    Brakuje ci słów na to, co czujesz.
                  </div>
<div className="body mt-1" style={{color: '#4e4d4c'}}>
                    „W porządku", „zmęczony", „zły" — i koniec słownika.
                  </div>
</div>
</li>
<li className="py-6 flex gap-5 items-start" style={{borderBottom: '1px solid #e7e7e7'}}>
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{background: '#141414'}}>
<iconify-icon icon="solar:minus-linear" style={{color: '#94e130'}} width="14"></iconify-icon>
</div>
<div className="">
<div className="subheading font-medium" style={{color: '#141414'}}>
                    Ciało napięte bez powodu — kark, szczęka, klatka.
                  </div>
<div className="body mt-1" style={{color: '#4e4d4c'}}>
                    Lekarz nic nie znajduje. Masaż pomaga na dwa dni.
                  </div>
</div>
</li>
<li className="py-6 flex gap-5 items-start">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{background: '#141414'}}>
<iconify-icon icon="solar:minus-linear" style={{color: '#94e130'}} width="14"></iconify-icon>
</div>
<div className="">
<div className="subheading font-medium" style={{color: '#141414'}}>
                    Jesteś sam — nawet kiedy nie jesteś.
                  </div>
<div className="body mt-1" style={{color: '#4e4d4c'}}>
                    Z żoną, z dziećmi, z kumplami z pracy. Powierzchowny
                    kontakt, brak głębi.
                  </div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="lg:py-40 pt-24 pb-24" style={{background: '#141414'}}>
<div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
<div className="micro uppercase font-medium mb-8" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
          02 — Przesunięcie
        </div>
<h2 className="display-lg font-semibold tracking-tight text-white">
          Jest różnica między
          <span className="" style={{color: 'rgb(161, 161, 161)'}}>wolą życia</span>
<br/>
          a
          <span className="" style={{color: '#94e130'}}>pragnieniem życia</span>
          .
        </h2>
<p className="subheading mt-10 max-w-2xl mx-auto" style={{color: '#a1a1a1'}}>
          Wolę znasz. Trzyma cię od dwudziestu lat. Pragnienie — czyli to, co
          naprawdę czujesz, czego naprawdę chcesz — zostało gdzieś w drodze.
          Pokażę ci, jak je odzyskać.
        </p>
</div>
</section>

<section className="py-20 lg:py-32" id="metoda">
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="max-w-3xl mb-16">
<div className="micro uppercase font-medium mb-6" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
            03 — Metoda
          </div>
<h2 className="heading font-semibold tracking-tight" style={{color: '#141414'}}>
            Nie rozmawiamy o problemie. Pracujemy w ciele, w którym ten problem
            mieszka.
          </h2>
<p className="body-lg mt-6" style={{color: '#4e4d4c'}}>
            Możesz przez dziesięć lat tłumaczyć terapeucie, dlaczego nic nie
            czujesz. Albo możesz wejść do pokoju, w którym wreszcie coś
            poczujesz. Drugie zajmuje jeden weekend.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="card">
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background: '#f4eee5'}}>
<iconify-icon icon="solar:running-2-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</div>
<span className="caption font-medium px-3 py-1 rounded-full" style={{background: '#f4eee5', color: '#4e4d4c'}}>
                Bioenergetyka Lowena
              </span>
</div>
<h3 className="heading-sm font-semibold" style={{color: '#141414'}}>
              Pracujemy oddechem, postawą, ruchem.
            </h3>
<p className="body-lg mt-4" style={{color: '#4e4d4c'}}>
              Twoje ciało nosi historię tego, czego nie pozwoliłeś sobie poczuć.
              Ćwiczenia Lowena rozluźniają zbroję mięśniową, którą budowałeś od
              dzieciństwa. Pod nią są emocje. Pod emocjami — żywy człowiek.
            </p>
</div>
<div className="card">
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background: '#f4eee5'}}>
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</div>
<span className="caption font-medium px-3 py-1 rounded-full" style={{background: '#f4eee5', color: '#4e4d4c'}}>
                Grupa mężczyzn
              </span>
</div>
<h3 className="heading-sm font-semibold" style={{color: '#141414'}}>
              W kręgu, gdzie nikt nie udaje, że jest twardy.
            </h3>
<p className="body-lg mt-4" style={{color: '#4e4d4c'}}>
              Trzynastu, czternastu mężczyzn w pokoju. Bez performansu. Pierwszy
              raz od lat usłyszysz, że inny facet czuje dokładnie to samo. To
              rozbraja więcej niż dziesięć książek o męskości.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" style={{background: '#f4eee5'}}>
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="max-w-3xl mb-16">
<div className="micro uppercase font-medium mb-6" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
            04 — Co się zmienia
          </div>
<h2 className="heading font-semibold tracking-tight" style={{color: '#141414'}}>
            Sześć wymiarów, w których życie się otwiera.
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="card">
<iconify-icon icon="solar:link-circle-linear" style={{color: '#94e130'}} width="28"></iconify-icon>
<h3 className="heading-sm font-semibold mt-6" style={{color: '#141414'}}>
              Podłączenie
            </h3>
<p className="body-lg mt-2" style={{color: '#4e4d4c'}}>
              Wracasz do ciała. Czujesz, że jesteś w środku siebie.
            </p>
</div>
<div className="card">
<iconify-icon icon="solar:waterdrops-linear" style={{color: '#94e130'}} width="28"></iconify-icon>
<h3 className="heading-sm font-semibold mt-6" style={{color: '#141414'}}>
              Spokój
            </h3>
<p className="body-lg mt-2" style={{color: '#4e4d4c'}}>
              Układ nerwowy przestaje pracować na 110%. Sen wraca.
            </p>
</div>
<div className="card">
<iconify-icon icon="solar:eye-linear" style={{color: '#94e130'}} width="28"></iconify-icon>
<h3 className="heading-sm font-semibold mt-6" style={{color: '#141414'}}>
              Wizja
            </h3>
<p className="body-lg mt-2" style={{color: '#4e4d4c'}}>
              Widzisz, czego naprawdę chcesz. Nie czego powinieneś chcieć.
            </p>
</div>
<div className="card">
<iconify-icon icon="solar:heart-linear" style={{color: '#94e130'}} width="28"></iconify-icon>
<h3 className="heading-sm font-semibold mt-6" style={{color: '#141414'}}>
              Emocje
            </h3>
<p className="body-lg mt-2" style={{color: '#4e4d4c'}}>
              Złość, smutek, radość, czułość — odzyskujesz pełną paletę.
            </p>
</div>
<div className="card">
<iconify-icon icon="solar:bolt-linear" style={{color: '#94e130'}} width="28"></iconify-icon>
<h3 className="heading-sm font-semibold mt-6" style={{color: '#141414'}}>
              Siła
            </h3>
<p className="body-lg mt-2" style={{color: '#4e4d4c'}}>
              Stoisz w sobie. Granice stawiasz spokojnie, bez agresji.
            </p>
</div>
<div className="card">
<iconify-icon icon="solar:hand-shake-linear" style={{color: '#94e130'}} width="28"></iconify-icon>
<h3 className="heading-sm font-semibold mt-6" style={{color: '#141414'}}>
              Kontakt
            </h3>
<p className="body-lg mt-2" style={{color: '#4e4d4c'}}>
              Z kobietą, z dziećmi, z mężczyznami — głębiej, prawdziwiej.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-12 gap-12 mb-16">
<div className="lg:col-span-6">
<div className="micro uppercase font-medium mb-6" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
              05 — Mężczyźni, którzy już to zrobili
            </div>
<h2 className="heading font-semibold tracking-tight" style={{color: '#141414'}}>
              Nie są to słowa zachwytu. To konkretne zmiany.
            </h2>
</div>
<div className="lg:col-span-6 flex flex-col justify-end">
<div className="grid grid-cols-3 gap-4">
<div className="card text-center">
<div className="display-lg font-semibold" style={{color: '#141414', fontSize: '40px', lineHeight: '1'}}>
                  700+
                </div>
<div className="caption mt-2" style={{color: '#4e4d4c'}}>
                  mężczyzn na warsztatach
                </div>
</div>
<div className="card text-center">
<div className="display-lg font-semibold" style={{color: '#141414', fontSize: '40px', lineHeight: '1'}}>
                  17
                </div>
<div className="caption mt-2" style={{color: '#4e4d4c'}}>
                  lat praktyki
                </div>
</div>
<div className="card text-center">
<div className="display-lg font-semibold" style={{color: '#141414', fontSize: '40px', lineHeight: '1'}}>
                  2016
                </div>
<div className="caption mt-2" style={{color: '#4e4d4c'}}>
                  rok pierwszej grupy męskiej
                </div>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
<div className="md:col-span-2 rounded-[10px] aspect-[16/9] relative overflow-hidden">
<img alt="Men's Mindfulness and Physical Therapy Workshop Collage" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ce63b98-8cf1-4f49-ae6a-d35238845c01_1600w.jpg"/>
</div>
<div className="placeholder rounded-[10px] aspect-[16/9] md:aspect-auto">
<div className="text-center caption">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
<div className="mt-2">Photo: Workshop group</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="card flex flex-col" style={{padding: '40px 32px'}}>
<iconify-icon icon="solar:quote-up-linear" style={{color: '#94e130'}} width="24"></iconify-icon>
<p className="subheading mt-6 flex-1" style={{color: '#141414', fontWeight: '400', lineHeight: '1.5'}}>
              "Po piętnastu latach małżeństwa pierwszy raz potrafiłem powiedzieć
              żonie, że się boję. Nie wiedziałem, że to jest możliwe. Trzy
              miesiące później wróciliśmy do siebie."
            </p>
<div className="mt-8 pt-6" style={{borderTop: '1px solid #e7e7e7'}}>
<div className="body font-semibold" style={{color: '#141414'}}>
                Piotr, 47
              </div>
<div className="caption" style={{color: '#737373'}}>
                Inżynier, Warszawa · warsztat 2023
              </div>
</div>
</div>
<div className="card flex flex-col" style={{padding: '40px 32px'}}>
<iconify-icon icon="solar:quote-up-linear" style={{color: '#94e130'}} width="24"></iconify-icon>
<p className="subheading mt-6 flex-1" style={{color: '#141414', fontWeight: '400', lineHeight: '1.5'}}>
              "Przez dwadzieścia lat brałem antydepresanty. Po roku z Marcinem
              odstawiłem je z lekarzem. Nie obiecuję tego nikomu — mówię, że u
              mnie tak się stało."
            </p>
<div className="mt-8 pt-6" style={{borderTop: '1px solid #e7e7e7'}}>
<div className="body font-semibold" style={{color: '#141414'}}>
                Tomasz, 52
              </div>
<div className="caption" style={{color: '#737373'}}>
                Prawnik, Kraków · program roczny 2022/23
              </div>
</div>
</div>
<div className="card flex flex-col" style={{padding: '40px 32px'}}>
<iconify-icon icon="solar:quote-up-linear" style={{color: '#94e130'}} width="24"></iconify-icon>
<p className="subheading mt-6 flex-1" style={{color: '#141414', fontWeight: '400', lineHeight: '1.5'}}>
              "Nigdy nie płakałem przy obcych. W sobotę wieczorem płakałem w
              kręgu i to było jedno z najmocniejszych doświadczeń w moim życiu.
              Wróciłem do domu inny."
            </p>
<div className="mt-8 pt-6" style={{borderTop: '1px solid #e7e7e7'}}>
<div className="body font-semibold" style={{color: '#141414'}}>
                Marek, 38
              </div>
<div className="caption" style={{color: '#737373'}}>
                CEO startupu, Wrocław · warsztat 2024
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" id="o-mnie" style={{background: '#f4eee5'}}>
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-5">
<div className="rounded-2xl aspect-[4/5] sticky top-24 overflow-hidden">
<img alt="Marcin Poćwiardowski" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4bfd78b-97cc-4bd3-9b75-b9722b55a1be_800w.webp"/>
</div>
</div>
<div className="lg:col-span-7">
<div className="micro uppercase font-medium mb-6" style={{color: '#000015', letterSpacing: '0.15em', fontSize: '12px'}}>
              06 — Kto prowadzi
            </div>
<h2 className="heading font-semibold tracking-tight mb-8" style={{color: '#141414'}}>
              Też tam byłem, gdzie ty jesteś teraz.
            </h2>
<div className="space-y-6 body-lg" style={{color: '#262626'}}>
<p>
                W 2007 roku stałem w łazience w hotelu na konferencji w Berlinie
                i nie wiedziałem, dlaczego płaczę. Miałem 31 lat, dobrą pracę,
                zdrową rodzinę. Wszystko, czego się uczyłem chcieć.
              </p>
<p>
                Wtedy trafiłem na pierwszą grupę bioenergetyczną. To, co tam się
                stało, zmieniło kierunek mojego życia. Dwa lata później zacząłem
                prowadzić własne grupy. To było siedemnaście lat temu.
              </p>
<p>
                Od 2016 pracuję wyłącznie z mężczyznami. Bo to mężczyźni
                przychodzili do mnie najpóźniej, najbardziej skuleni, i to oni
                najmocniej się otwierali, kiedy dostali na to przestrzeń.
              </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-4">
<div className="p-6 rounded-[10px]" style={{background: '#ffffff', border: '1px solid #e7e7e7'}}>
<div className="caption font-medium mb-2" style={{color: '#737373'}}>
                  Praktyka kliniczna
                </div>
<div className="subheading font-semibold" style={{color: '#141414'}}>
                  Od 2009
                </div>
</div>
<div className="p-6 rounded-[10px]" style={{background: '#ffffff', border: '1px solid #e7e7e7'}}>
<div className="caption font-medium mb-2" style={{color: '#737373'}}>
                  Specjalizacja
                </div>
<div className="subheading font-semibold" style={{color: '#141414'}}>
                  Tylko mężczyźni
                </div>
</div>
<div className="p-6 rounded-[10px] col-span-2" style={{background: '#ffffff', border: '1px solid #e7e7e7'}}>
<div className="caption font-medium mb-3" style={{color: '#737373'}}>
                  Wykształcenie i certyfikacje
                </div>
<div className="body" style={{color: '#141414', lineHeight: '1.7'}}>
                  Bioenergetyka Lowena · ISTDP (Intensive Short-Term Dynamic
                  Psychotherapy) · Praca z oddechem · 5 Rytmów · Qi Gong ·
                  Psychodrama
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" id="warsztat">
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="card-secondary p-10 lg:p-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-7">
<div className="micro uppercase font-medium mb-6" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
                07 — Warsztat wstępny
              </div>
<h2 className="display-lg font-semibold tracking-tight mb-6" style={{color: '#141414'}}>
                Lowen for Men.
                <br/>
                Weekend, od którego zaczyna się reszta.
              </h2>
<p className="subheading mb-12" style={{color: '#4e4d4c', fontWeight: '400'}}>
                Dwa dni. Grupa mężczyzn. Praca z ciałem, oddechem, ruchem. Bez
                teorii, bez gadania o sobie w trzeciej osobie. Wracasz w
                niedzielę wieczorem z czymś, czego nie miałeś w piątek.
              </p>
<div className="space-y-8 mb-12">
<div>
<h3 className="heading-sm font-semibold mb-4" style={{color: '#141414'}}>
                    Co się dzieje przez weekend
                  </h3>
<ul className="space-y-3 body-lg" style={{color: '#4e4d4c'}}>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#94e130', flexShrink: '0', marginTop: '4px'}} width="20"></iconify-icon>
<span>
                        Ćwiczenia bioenergetyczne — rozluźniają zbroję,
                        otwierają oddech
                      </span>
</li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#94e130', flexShrink: '0', marginTop: '4px'}} width="20"></iconify-icon>
<span>
                        Krąg mężczyzn — rozmowa bez ścierania, bez dawania rad
                      </span>
</li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#94e130', flexShrink: '0', marginTop: '4px'}} width="20"></iconify-icon>
<span>
                        Praca indywidualna na środku grupy — kiedy będziesz
                        gotowy
                      </span>
</li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#94e130', flexShrink: '0', marginTop: '4px'}} width="20"></iconify-icon>
<span>
                        Narzędzia dla układu nerwowego, które bierzesz do domu
                      </span>
</li>
</ul>
</div>
<div className="divider"></div>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="heading-sm font-semibold mb-4" style={{color: '#141414'}}>
                      Dla kogo
                    </h3>
<p className="body-lg" style={{color: '#4e4d4c'}}>
                      Dla mężczyzn 30–60, którzy doszli do ściany. Burnout,
                      rozstanie, pustka. Gotowi zrobić coś realnego, nie kolejny
                      kurs.
                    </p>
</div>
<div>
<h3 className="heading-sm font-semibold mb-4" style={{color: '#141414'}}>
                      Dla kogo nie
                    </h3>
<p className="body-lg" style={{color: '#4e4d4c'}}>
                      Przeciwwskazanie: aktywna psychoza, ciężkie zaburzenia
                      psychiatryczne w fazie ostrej. W razie wątpliwości —
                      porozmawiamy.
                    </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="card sticky top-24" style={{background: '#ffffff'}}>
<div className="flex items-baseline justify-between mb-2">
<div className="caption font-medium" style={{color: '#737373'}}>
                    Inwestycja
                  </div>
<div className="caption font-medium px-2 py-1 rounded-full" style={{background: '#94e130', color: '#141414'}}>
                    Najbliższy termin
                  </div>
</div>
<div className="display-lg font-semibold tracking-tight" style={{color: '#141414'}}>
                  2 000 zł
                </div>
<div className="body" style={{color: '#4e4d4c', marginTop: '4px'}}>
                  za dwudniowy warsztat · grupa max 14 mężczyzn
                </div>
<div className="divider my-6"></div>
<div className="space-y-4 mb-8">
<div className="flex justify-between body">
<span style={{color: '#4e4d4c'}}>Termin</span>
<span className="font-semibold" style={{color: '#141414'}}>
                      15–16 marca 2025
                    </span>
</div>
<div className="flex justify-between body">
<span style={{color: '#4e4d4c'}}>Miejsce</span>
<span className="font-semibold" style={{color: '#141414'}}>
                      Podkowa Leśna
                    </span>
</div>
<div className="flex justify-between body">
<span style={{color: '#4e4d4c'}}>Czas</span>
<span className="font-semibold" style={{color: '#141414'}}>
                      sob 10:00 — niedz 17:00
                    </span>
</div>
<div className="flex justify-between body">
<span style={{color: '#4e4d4c'}}>W cenie</span>
<span className="font-semibold text-right" style={{color: '#141414'}}>
                      warsztat + posiłki + materiały
                    </span>
</div>
</div>
<a className="btn-primary w-full justify-center" href="#">
                  Zapisz się na warsztat
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<p className="caption mt-4 text-center" style={{color: '#737373'}}>
                  Krótka rozmowa kwalifikacyjna przed zapisem
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28" id="program" style={{background: '#141414'}}>
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full" style={{background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)'}}>
<iconify-icon icon="solar:lock-keyhole-linear" style={{color: '#94e130'}} width="14"></iconify-icon>
<span className="caption font-medium" style={{color: '#a1a1a1'}}>
                Wymagane ukończenie warsztatu wstępnego
              </span>
</div>
<h2 className="heading font-semibold tracking-tight text-white mb-6">
              Program roczny — dla mężczyzn, którzy chcą iść głębiej.
            </h2>
<p className="subheading mb-3" style={{color: '#a1a1a1', fontWeight: '400'}}>
              9 miesięcy. 5 weekendowych zjazdów. Bracia w grupie WhatsApp, do
              których możesz napisać w środę o 23:00. System buddy. Praca w
              pełnym kręgu.
            </p>
<p className="body-lg" style={{color: '#737373'}}>
              Od 11 500 zł (early bird) · 13 500 zł cena regularna
            </p>
</div>
<div className="lg:col-span-4 flex lg:justify-end">
<a className="btn-secondary-light" href="#" style={{background: '#ffffff', color: '#141414'}}>
              Dowiedz się więcej
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-[1100px] mx-auto px-6 lg:px-10">
<div className="mb-16">
<div className="micro uppercase font-medium mb-6" style={{color: '#94e130', letterSpacing: '0.15em', fontSize: '12px'}}>
            08 — Pytania
          </div>
<h2 className="heading font-semibold tracking-tight" style={{color: '#141414'}}>
            Co warto wiedzieć przed zapisem.
          </h2>
</div>
<div className="space-y-0" style={{borderTop: '1px solid #e7e7e7'}}>
<details className="group" style={{borderBottom: '1px solid #e7e7e7'}}>
<summary className="py-7 flex justify-between items-center gap-6">
<span className="subheading font-semibold" style={{color: '#141414'}}>
                Czy muszę mieć jakieś doświadczenie terapeutyczne?
              </span>
<iconify-icon className="faq-icon flex-shrink-0" icon="solar:add-circle-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</summary>
<div className="pb-7 body-lg" style={{color: '#4e4d4c'}}>
              Nie. Wielu mężczyzn, którzy do mnie przychodzą, nigdy nie było w
              gabinecie. To często ich pierwszy krok — i dobrze. Praca z ciałem
              nie wymaga ani wiedzy psychologicznej, ani gotowych słów na to, co
              czujesz.
            </div>
</details>
<details className="group" style={{borderBottom: '1px solid #e7e7e7'}}>
<summary className="py-7 flex justify-between items-center gap-6">
<span className="subheading font-semibold" style={{color: '#141414'}}>
                Czy to działa online?
              </span>
<iconify-icon className="faq-icon flex-shrink-0" icon="solar:add-circle-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</summary>
<div className="pb-7 body-lg" style={{color: '#4e4d4c'}}>
              Nie. Ta praca dzieje się w pokoju, w którym wszyscy oddychamy tym
              samym powietrzem. Obecność ciała innych mężczyzn jest jednym z
              najważniejszych narzędzi. Online prowadzę tylko konsultacje
              wstępne.
            </div>
</details>
<details className="group" style={{borderBottom: '1px solid #e7e7e7'}}>
<summary className="py-7 flex justify-between items-center gap-6">
<span className="subheading font-semibold" style={{color: '#141414'}}>
                Dlaczego tylko mężczyźni?
              </span>
<iconify-icon className="faq-icon flex-shrink-0" icon="solar:add-circle-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</summary>
<div className="pb-7 body-lg" style={{color: '#4e4d4c'}}>
              Bo mężczyźni inaczej się otwierają w obecności mężczyzn. Znika
              potrzeba performansu wobec kobiet, znika porównywanie się. Zostaje
              miejsce na to, czego nie powiesz nigdzie indziej. To nie jest
              ideologia — to obserwacja z 700 warsztatów.
            </div>
</details>
<details className="group" style={{borderBottom: '1px solid #e7e7e7'}}>
<summary className="py-7 flex justify-between items-center gap-6">
<span className="subheading font-semibold" style={{color: '#141414'}}>
                Czym to się różni od zwykłej terapii?
              </span>
<iconify-icon className="faq-icon flex-shrink-0" icon="solar:add-circle-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</summary>
<div className="pb-7 body-lg" style={{color: '#4e4d4c'}}>
              W klasycznej terapii rozmawiasz. U mnie — pracujesz w ciele. Można
              dwadzieścia lat opowiadać, że nic nie czujesz, i nadal nic nie
              czuć. Praca z oddechem, postawą i ruchem omija logiczny umysł i
              dociera tam, gdzie zwykła rozmowa nie sięga.
            </div>
</details>
<details className="group" style={{borderBottom: '1px solid #e7e7e7'}}>
<summary className="py-7 flex justify-between items-center gap-6">
<span className="subheading font-semibold" style={{color: '#141414'}}>
                Co konkretnie się dzieje na warsztacie?
              </span>
<iconify-icon className="faq-icon flex-shrink-0" icon="solar:add-circle-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</summary>
<div className="pb-7 body-lg" style={{color: '#4e4d4c'}}>
              Ćwiczenia bioenergetyczne (stojąc, leżąc, w parach). Praca z
              oddechem. Krąg, w którym każdy mówi z własnego doświadczenia.
              Indywidualna praca z mężczyzną na środku, kiedy sam się zgłosi.
              Cisza. Ruch. Czasem śmiech, czasem łzy. Bez teorii.
            </div>
</details>
<details className="group" style={{borderBottom: '1px solid #e7e7e7'}}>
<summary className="py-7 flex justify-between items-center gap-6">
<span className="subheading font-semibold" style={{color: '#141414'}}>
                A jeśli się rozkleję i nie dam rady?
              </span>
<iconify-icon className="faq-icon flex-shrink-0" icon="solar:add-circle-linear" style={{color: '#141414'}} width="24"></iconify-icon>
</summary>
<div className="pb-7 body-lg" style={{color: '#4e4d4c'}}>
              Rozkleisz się — i dasz radę. To jest sens tej pracy. Nikt cię tu
              do niczego nie zmusza, masz pełną zgodę, żeby wycofać się w każdej
              chwili. Ale w 17 lat nie widziałem mężczyzny, którego nie dałoby
              się złapać.
            </div>
</details>
</div>
</div>
</section>

<section className="py-20 lg:py-32" style={{background: '#141414'}}>
<div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
<h2 className="display-lg font-semibold tracking-tight text-white mb-8">
          Możesz dalej żyć z woli.
          <br/>
<span style={{color: '#94e130'}}>Albo zacząć żyć z pragnienia.</span>
</h2>
<p className="subheading mb-12 max-w-xl mx-auto" style={{color: '#a1a1a1', fontWeight: '400'}}>
          Najbliższy weekend: 15–16 marca 2025, Podkowa Leśna. 14 miejsc.
        </p>
<a className="btn-primary" href="#">
          Zapisz się na warsztat
          <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<p className="caption mt-8" style={{color: '#737373'}}>
          Nie jesteś gotowy?
          <a className="underline" href="#" style={{color: '#a1a1a1'}}>Zostaw maila</a>
          — odezwę się, kiedy będzie kolejna grupa.
        </p>
</div>
</section>

<footer className="py-16" style={{background: '#0a0a0a'}}>
<div className="max-w-[1320px] mx-auto px-6 lg:px-10">
<div className="grid md:grid-cols-3 gap-12 mb-12">
<div>
<div className="subheading font-semibold tracking-tight text-white mb-3">
              Poćwiardowski
              <span style={{color: '#94e130'}}>.</span>
</div>
<p className="body" style={{color: '#737373'}}>
              Terapia somatyczna dla mężczyzn. Warszawa i okolice.
            </p>
</div>
<div>
<div className="caption font-medium uppercase mb-4" style={{color: '#737373', letterSpacing: '0.1em'}}>
              Kontakt
            </div>
<div className="body space-y-2" style={{color: '#a1a1a1'}}>
<div>kontakt@pocwiardowski.pl</div>
<div>+48 600 000 000</div>
</div>
</div>
<div>
<div className="caption font-medium uppercase mb-4" style={{color: '#737373', letterSpacing: '0.1em'}}>
              Nawigacja
            </div>
<div className="body space-y-2">
<a className="block" href="#metoda" style={{color: '#a1a1a1'}}>Metoda</a>
<a className="block" href="#warsztat" style={{color: '#a1a1a1'}}>
                Warsztat
              </a>
<a className="block" href="#program" style={{color: '#a1a1a1'}}>
                Program roczny
              </a>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between gap-4" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
<div className="caption" style={{color: '#737373'}}>
            © 2025 Marcin Poćwiardowski. Wszystkie prawa zastrzeżone.
          </div>
<div className="caption flex gap-6" style={{color: '#737373'}}>
<a href="#">Polityka prywatności</a>
<a href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
