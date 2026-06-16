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



const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;



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
      

<nav className="sticky top-0 z-50 bg-[#f9f6f2]/90 backdrop-blur-md border-b border-[#e7e7e7]">
<div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-[#141414]" href="#">
          M/P
        </a>
<a className="text-sm font-medium text-[#141414] hover:text-[#262626] transition-colors py-0 px-1.5 flex items-center gap-2" href="#warsztat">
          Zapisz się
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden bg-[#f9f6f2]">
<div className="max-w-[1320px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div className="lg:col-span-7 z-10">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-[#141414] leading-[1.05] mb-8">
              Ze mną odzyskasz przyjemność życia.
            </h1>
<p className="font-inter text-lg text-[#262626] leading-[1.5] max-w-2xl mb-12">
              Żyjesz z zaciśniętymi zębami. Odniosłeś sukces, ale w środku
              panuje pustka. Funkcjonujesz na samej woli, bo straciłeś kontakt z
              pragnieniem. Czas odzyskać czucie.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-[#94e130] text-[#ffffff] font-medium text-base rounded-[5px] py-4 px-10 transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#warsztat">
                Zapisz się na warsztat
              </a>
</div>
</div>
<div className="lg:col-span-5 relative">

<img alt="Men's Mindfulness and Physical Therapy Workshop Collage" className="w-full aspect-[4/5] bg-[#e7e7e7] rounded-2xl object-cover border border-[#d1d1d1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ce63b98-8cf1-4f49-ae6a-d35238845c01_800w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f4eee5] border-y border-[#e7e7e7]">
<div className="max-w-[1320px] mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#141414] mb-4">
            Znasz to uczucie?
          </h2>
<p className="font-inter text-base text-[#4e4d4c]">
            Ciało wysyła sygnały długo przed tym, zanim głowa to zrozumie.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#ffffff] rounded-[10px] p-8">
<div className="w-10 h-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#141414] mb-6">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="font-inter text-base text-[#262626] leading-[1.5]">
<strong className="font-medium text-[#141414]">
                Znieczulenie na co dzień.
              </strong>
              Funkcjonujesz zadaniowo, białe knykcie na kierownicy życia.
              Odcinasz się od niewygody, ale przy okazji tracisz zdolność
              odczuwania radości.
            </p>
</div>
<div className="bg-[#ffffff] rounded-[10px] p-8">
<div className="w-10 h-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#141414] mb-6">
<iconify-icon icon="solar:bone-broken-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="font-inter text-base text-[#262626] leading-[1.5]">
<strong className="font-medium text-[#141414]">
                Napięcie bez przyczyny.
              </strong>
              Sztywny kark, zaciśnięta szczęka, płytki oddech. Twoje ciało
              zachowuje się, jakby ciągle walczyło, nawet gdy siedzisz
              bezpiecznie na kanapie.
            </p>
</div>
<div className="bg-[#ffffff] rounded-[10px] p-8">
<div className="w-10 h-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#141414] mb-6">
<iconify-icon icon="solar:chat-square-call-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="font-inter text-base text-[#262626] leading-[1.5]">
<strong className="font-medium text-[#141414]">Brak słownika.</strong>
              Kiedy ktoś pyta "co czujesz?", w głowie masz pustkę. Zamiast
              emocji, potrafisz nazwać tylko frustrację, złość lub zmęczenie.
            </p>
</div>
<div className="bg-[#ffffff] rounded-[10px] p-8">
<div className="w-10 h-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#141414] mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="font-inter text-base text-[#262626] leading-[1.5]">
<strong className="font-medium text-[#141414]">
                Izolacja w tłumie.
              </strong>
              Osiągasz cele, jesteś "ogarniętym facetem", ale w relacjach
              czujesz się samotny i niezrozumiany. Bliskość wydaje się
              zagrażająca.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#f9f6f2] pt-32 pb-32">
<div className="max-w-[1320px] mx-auto px-6 text-center">
<h2 className="md:text-5xl leading-[1.2] text-3xl font-medium text-[#141414] tracking-tighter max-w-4xl mr-auto ml-auto">Istnieje różnica między <span className="text-[#4e4d4c]">wolą życia</span> a pragnieniem życia. <br className=""/> Tę pierwszą znasz. Ja pokażę ci to drugie.</h2>
</div>
</section>

<section className="py-32 bg-[#f4eee5] border-y border-[#e7e7e7]">
<div className="max-w-[1320px] mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#141414] mb-4">
            Terapia przez ciało, nie przez rozmowę
          </h2>
<p className="font-inter text-base text-[#4e4d4c] max-w-2xl">
            Przegadałeś już swoje problemy? Intelektualne zrozumienie rzadko
            zmienia to, jak się czujesz. Zmiana musi zajść w układzie nerwowym.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#f4eee5] rounded-2xl pt-20 px-10 pb-10 border border-[#e7e7e7]">
<h3 className="text-2xl font-medium tracking-tight text-[#141414] mb-6">
              Bioenergetyka Lowena
            </h3>
<p className="font-inter text-base text-[#262626] leading-[1.5]">
              Zablokowane emocje to nic innego jak chroniczne napięcia
              mięśniowe, które tworzą fizyczny "pancerz". Pracujemy poprzez
              specyficzne pozycje, ruch i wymuszanie wibracji ciała, aby zmęczyć
              te napięcia i pozwolić zamrożonej energii wrócić do płynności.
            </p>
</div>
<div className="bg-[#f4eee5] rounded-2xl pt-20 px-10 pb-10 border border-[#e7e7e7]">
<h3 className="text-2xl font-medium tracking-tight text-[#141414] mb-6">
              Ugruntowanie i Obecność
            </h3>
<p className="font-inter text-base text-[#262626] leading-[1.5]">
              Mężczyźni często "żyją w głowie". Poprzez ukierunkowany oddech i
              techniki sprowadzające uwagę do nóg i miednicy, uczymy układ
              nerwowy, że jest bezpiecznie tu i teraz. Zamiast uciekać w
              analizę, zaczynasz po prostu być.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f9f6f2]">
<div className="max-w-[1320px] mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#141414]">
            6 wymiarów transformacji
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#ffffff] rounded-[10px] p-8 border border-[#e7e7e7]">
<iconify-icon className="text-[#141414] mb-4" icon="solar:plug-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight text-[#141414] mb-2">
              Podłączenie
            </h4>
<p className="font-inter text-sm text-[#4e4d4c] leading-[1.5]">
              Zaczynasz ponownie czuć ciało jako wsparcie, a nie maszynę do
              wykonywania zadań.
            </p>
</div>

<div className="bg-[#ffffff] rounded-[10px] p-8 border border-[#e7e7e7]">
<iconify-icon className="text-[#141414] mb-4" icon="solar:waterdrops-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight text-[#141414] mb-2">
              Spokój
            </h4>
<p className="font-inter text-sm text-[#4e4d4c] leading-[1.5]">
              Napięcie z karku i barków odpuszcza, pojawia się głęboki, powolny
              oddech.
            </p>
</div>

<div className="bg-[#ffffff] rounded-[10px] p-8 border border-[#e7e7e7]">
<iconify-icon className="text-[#141414] mb-4" icon="solar:eye-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight text-[#141414] mb-2">
              Wizja
            </h4>
<p className="font-inter text-sm text-[#4e4d4c] leading-[1.5]">
              Klarowność tego, czego naprawdę chcesz, zamiast tego, co
              "powinieneś" robić.
            </p>
</div>

<div className="bg-[#ffffff] rounded-[10px] p-8 border border-[#e7e7e7]">
<iconify-icon className="text-[#141414] mb-4" icon="solar:heart-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight text-[#141414] mb-2">
              Emocje
            </h4>
<p className="font-inter text-sm text-[#4e4d4c] leading-[1.5]">
              Pojemność na przeżywanie złości, smutku i radości bez bycia przez
              nie zalanym.
            </p>
</div>

<div className="bg-[#ffffff] rounded-[10px] p-8 border border-[#e7e7e7]">
<iconify-icon className="text-[#141414] mb-4" icon="solar:dumbbell-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight text-[#141414] mb-2">
              Siła
            </h4>
<p className="font-inter text-sm text-[#4e4d4c] leading-[1.5]">
              Ugruntowana męska energia, wynikająca z obecności, a nie z agresji
              czy presji.
            </p>
</div>

<div className="bg-[#ffffff] rounded-[10px] p-8 border border-[#e7e7e7]">
<iconify-icon className="text-[#141414] mb-4" icon="solar:hand-shake-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight text-[#141414] mb-2">
              Kontakt
            </h4>
<p className="font-inter text-sm text-[#4e4d4c] leading-[1.5]">
              Zdolność do budowania autentycznych, głębokich relacji bez lęku
              przed bliskością.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f4eee5] border-y border-[#e7e7e7]">
<div className="max-w-[1320px] mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pb-16 border-b border-[#e7e7e7]">
<div>
<div className="text-4xl font-medium tracking-tight text-[#141414] mb-2">
              700+
            </div>
<div className="font-inter text-sm text-[#4e4d4c] uppercase tracking-wide">
              Mężczyzn na warsztatach
            </div>
</div>
<div>
<div className="text-4xl font-medium tracking-tight text-[#141414] mb-2">
              17
            </div>
<div className="font-inter text-sm text-[#4e4d4c] uppercase tracking-wide">
              Lat praktyki klinicznej
            </div>
</div>
<div>
<div className="text-4xl font-medium tracking-tight text-[#141414] mb-2">
              2016
            </div>
<div className="font-inter text-sm text-[#4e4d4c] uppercase tracking-wide">
              Rok startu projektów męskich
            </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div className="bg-[#f9f6f2] rounded-[10px] p-8">
<p className="font-inter text-sm text-[#262626] leading-[1.5] mb-6">
              "Przez lata żyłem w trybie zadaniowym. Dopiero po warsztacie z
              Marcinem poczułem fizyczny ciężar, który nosiłem w klatce
              piersiowej. Puściło. Po raz pierwszy od lat mogłem wziąć pełny
              oddech i autentycznie porozmawiać z żoną bez gardy."
            </p>
<div className="font-medium text-[#141414] text-sm">
              — Tomasz, 42 lata, dyrektor IT
            </div>
</div>
<div className="bg-[#f9f6f2] rounded-[10px] p-8">
<p className="font-inter text-sm text-[#262626] leading-[1.5] mb-6">
              "Nie wierzyłem w 'terapie przez ciało'. Pojechałem zrezygnowany.
              To, co zadziało się w sali – wibracje nóg, fizyczne wyrzucenie
              złości – odblokowało mnie w sposób, jakiego lata psychoterapii
              gadanej nie potrafiły ruszyć."
            </p>
<div className="font-medium text-[#141414] text-sm">
              — Piotr, 38 lat, prawnik
            </div>
</div>
<div className="bg-[#f9f6f2] rounded-[10px] p-8">
<p className="font-inter text-sm text-[#262626] leading-[1.5] mb-6">
              "Przyszedłem kompletnie wypalony. Marcin uczy, jak poczuć granice
              własnego ciała i oprzeć się na sobie. Spokój, z którym wróciłem do
              domu, utrzymuje się do dziś. Nauczyłem się rozpoznawać napięcie,
              zanim zamieni się w wybuch."
            </p>
<div className="font-medium text-[#141414] text-sm">
              — Marek, 45 lat, przedsiębiorca
            </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="aspect-[16/9] bg-[#e7e7e7] rounded-lg flex flex-col items-center justify-center text-[#737373]">
<iconify-icon className="mb-2" icon="solar:camera-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="font-inter text-xs">[Photo: Workshop group 1]</span>
</div>
<div className="aspect-[16/9] bg-[#e7e7e7] rounded-lg flex flex-col items-center justify-center text-[#737373]">
<iconify-icon className="mb-2" icon="solar:camera-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="font-inter text-xs">[Photo: Workshop group 2]</span>
</div>
<div className="aspect-[16/9] bg-[#e7e7e7] rounded-lg flex flex-col items-center justify-center text-[#737373]">
<iconify-icon className="mb-2" icon="solar:camera-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="font-inter text-xs">[Photo: Workshop group 3]</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f9f6f2]">
<div className="max-w-[1320px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#141414] mb-8">
              Nazywam się Marcin Poćwiardowski
            </h2>
<div className="space-y-6 font-inter text-base text-[#262626] leading-[1.6]">
<p>
                Kiedyś sam żyłem wyłącznie w głowie. Byłem skuteczny, racjonalny
                i odcięty. Moim ciałem rządziło usztywnienie, a relacjami –
                kontrola. Przejście od funkcjonowania na samej woli do poczucia
                żywego pragnienia zajęło mi lata.
              </p>
<p>
                Dlatego pracuję z mężczyznami. Wiem, jak głęboko potrafimy
                zakopać nasze czucie, żeby sprostać wymaganiom świata, i wiem,
                jak fizycznie boli ten pancerz, gdy po latach staje się za
                ciasny.
              </p>
<hr className="border-[#e7e7e7] my-8"/>
<ul className="space-y-3 text-[#4e4d4c] text-sm">
<li className="flex gap-3">
<iconify-icon className="text-[#141414] shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Praktyka kliniczna od 2009 roku.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#141414] shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>
                    Pionier terapii ciała dedykowanej wyłącznie mężczyznom w
                    Polsce.
                  </span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#141414] shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>
                    Pracuję integrując Analizę Bioenergetyczną Lowena, ISTDP,
                    oddech, 5 Rytmów i Qi Gong.
                  </span>
</li>
</ul>
</div>
</div>
<div className="order-1 lg:order-2">
<img alt="Marcin Poćwiardowski" className="w-full aspect-[3/4] max-w-md mx-auto lg:ml-auto rounded-2xl object-cover border border-[#d1d1d1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4bfd78b-97cc-4bd3-9b75-b9722b55a1be_800w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f4eee5] border-y border-[#e7e7e7]" id="warsztat">
<div className="max-w-[1320px] mx-auto px-6">
<div className="bg-[#ffffff] rounded-2xl p-8 md:p-16 border border-[#e7e7e7] max-w-4xl mx-auto shadow-sm">
<div className="mb-8">
<span className="inline-block text-xs font-medium uppercase tracking-wider text-[#4e4d4c] mb-2">
              Warsztat Wstępny
            </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#141414]">
              Lowen dla Mężczyzn
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-inter">
<div>
<h4 className="text-lg font-medium text-[#141414] mb-4">
                Co się wydarzy?
              </h4>
<p className="text-sm text-[#262626] leading-[1.6] mb-6">
                Intensywny weekend nastawiony na czucie, nie na teorię. Będziemy
                pracować fizycznie z napięciami, pogłębiać oddech, konfrontować
                się z trudnymi emocjami i uczyć się oparcia we własnej miednicy
                i nogach. Poczujesz, co znaczy być w grupie mężczyzn bez
                rywalizacji.
              </p>
<h4 className="text-lg font-medium text-[#141414] mb-4">
                Dla kogo nie jest ten warsztat?
              </h4>
<p className="text-sm text-[#4e4d4c] leading-[1.6]">
                Dla osób szukających "cudownej pigułki", w aktywnym kryzysie
                psychotycznym, po świeżych urazach fizycznych uniemożliwiających
                ruch, oraz dla tych, którzy chcą tylko porozmawiać o problemach.
              </p>
</div>
<div className="bg-[#f9f6f2] p-8 rounded-[10px] flex flex-col justify-between">
<div>
<div className="text-4xl font-medium tracking-tight text-[#141414] mb-1">
                  2000 zł
                </div>
<div className="text-sm text-[#4e4d4c] mb-8">
                  Weekend (Sobota - Niedziela)
                </div>
<ul className="space-y-4 text-sm text-[#262626] mb-8">
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#141414] shrink-0 mt-0.5" icon="solar:calendar-date-linear" width="20"></iconify-icon>
<span>
                      Najbliższy termin: 15-16 Czerwca 2024
                      <br/>
<span className="text-[#737373]">
                        Warszawa (kameralna sala)
                      </span>
</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#141414] shrink-0 mt-0.5" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span>Grupa max 14 mężczyzn</span>
</li>
</ul>
</div>
<button className="w-full bg-[#94e130] text-[#ffffff] font-medium text-base rounded-[5px] py-4 px-8 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Zapisz się na warsztat
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f9f6f2]">
<div className="max-w-[1320px] mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 border border-[#e7e7e7] text-[#4e4d4c] bg-[#ffffff] text-xs px-4 py-1.5 rounded-full mb-6 font-inter">
<iconify-icon icon="solar:lock-keyhole-linear" width="14"></iconify-icon>
          Wymagane ukończenie warsztatu wstępnego
        </div>
<h2 className="text-2xl font-medium tracking-tight text-[#141414] mb-4">
          Program Roczny
        </h2>
<p className="font-inter text-base text-[#4e4d4c] max-w-2xl mx-auto mb-8">
          Dla mężczyzn gotowych na gruntowną przebudowę. 9 miesięcy, 5 zjazdów
          weekendowych, codzienna praca i męskie braterstwo. Transformacja,
          która zakorzenia się w ciele na stałe.
        </p>
<a className="inline-block text-[#141414] font-medium text-sm py-2 px-4 transition-colors hover:bg-[#e7e7e7] rounded-[5px]" href="#">
          Dowiedz się więcej i zapisz na listę
        </a>
</div>
</section>

<section className="py-32 bg-[#f4eee5] border-y border-[#e7e7e7]">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-[#141414] mb-12 text-center">
          Częste pytania
        </h2>
<div className="space-y-4 font-inter">
<details className="group bg-[#ffffff] border border-[#e7e7e7] rounded-[10px] overflow-hidden">
<summary className="cursor-pointer p-6 font-medium text-[#141414] flex justify-between items-center select-none">
              Czy muszę mieć doświadczenie terapeutyczne?
              <iconify-icon className="text-[#737373] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-[#4e4d4c] leading-[1.6]">
              Nie. Warsztat jest zaprojektowany tak, aby był dostępny zarówno
              dla osób, które spędziły lata na terapii werbalnej i utknęły, jak
              i dla mężczyzn, dla których to pierwszy kontakt z pracą nad sobą.
            </div>
</details>
<details className="group bg-[#ffffff] border border-[#e7e7e7] rounded-[10px] overflow-hidden">
<summary className="cursor-pointer p-6 font-medium text-[#141414] flex justify-between items-center select-none">
              Czy to działa online?
              <iconify-icon className="text-[#737373] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-[#4e4d4c] leading-[1.6]">
              Nie. Praca z układem nerwowym, wibracjami ciała i dynamiką grupy
              wymaga fizycznej obecności. Z tego powodu prowadzę warsztaty
              wyłącznie na żywo.
            </div>
</details>
<details className="group bg-[#ffffff] border border-[#e7e7e7] rounded-[10px] overflow-hidden">
<summary className="cursor-pointer p-6 font-medium text-[#141414] flex justify-between items-center select-none">
              Dlaczego warsztat jest tylko dla mężczyzn?
              <iconify-icon className="text-[#737373] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-[#4e4d4c] leading-[1.6]">
              Obecność kobiet (i dynamika, którą to wywołuje u mężczyzn) często
              utrudnia dotarcie do najgłębszych, najtrudniejszych męskich
              emocji, takich jak wstyd, słabość czy niekontrolowana złość. W
              męskim kręgu maski opadają szybciej.
            </div>
</details>
<details className="group bg-[#ffffff] border border-[#e7e7e7] rounded-[10px] overflow-hidden">
<summary className="cursor-pointer p-6 font-medium text-[#141414] flex justify-between items-center select-none">
              Co dokładnie robimy fizycznie?
              <iconify-icon className="text-[#737373] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-[#4e4d4c] leading-[1.6]">
              Wykorzystujemy pozycje stresowe (np. wygięcie ciała w tył),
              pogłębianie oddechu, ekspresję głosu i ruch. Nie potrzebujesz
              kondycji sportowca, ale praca bywa męcząca fizycznie.
            </div>
</details>
</div>
</div>
</section>

<section className="py-40 bg-[#f9f6f2]">
<div className="max-w-[1320px] mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#141414] mb-10 max-w-2xl mx-auto leading-[1.1]">
          Zrób pierwszy krok. Odzyskaj czucie.
        </h2>
<a className="inline-flex items-center justify-center bg-[#141414] text-[#ffffff] font-medium text-base rounded-[5px] py-4 px-10 transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#warsztat">
          Zapisz się na warsztat
        </a>
<p className="font-inter text-sm text-[#737373] mt-6">
          Liczba miejsc jest ściśle ograniczona rozmiarem sali.
        </p>
</div>
</section>

<footer className="py-12 bg-[#f4eee5] border-t border-[#e7e7e7]">
<div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between font-inter text-xs text-[#737373]">
<div className="tracking-tighter font-medium text-[#141414] text-lg mb-4 md:mb-0">
          M/P
        </div>
<div className="flex gap-6">
<a className="hover:text-[#141414] transition-colors" href="#">
            Regulamin
          </a>
<a className="hover:text-[#141414] transition-colors" href="#">
            Polityka prywatności
          </a>
<span>© 2024 Marcin Poćwiardowski</span>
</div>
</div>
</footer>

    </>
  );
}
