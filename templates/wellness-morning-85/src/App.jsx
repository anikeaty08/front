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
      

<nav className="sticky top-0 z-40 w-full bg-[#FDFAF5]/90 backdrop-blur-md border-b border-[#DDD4C0]">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="font-heading font-medium tracking-tight text-xl focus-ring rounded-sm" href="#">
<span className="text-[#1E1848]">ENERGY</span> <span className="text-[#7A58A8]">DARIA</span>
</a>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center bg-[#7A58A8] hover:bg-[#6A4898] text-[#FFFFFF] font-medium rounded-full px-6 py-2.5 transition-colors duration-300 ease-out focus-ring text-sm" href="#zapisz-sie">
                    Zapisz się — 49 zł
                </a>
</div>
</div>
</nav>

<header className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A58A8]/10 text-[#7A58A8] text-sm font-medium mb-8">
<iconify-icon icon="solar:calendar-date-linear" width="18"></iconify-icon>
                Startujemy 22 czerwca
            </span>
<h1 className="font-heading font-medium text-4xl md:text-5xl lg:text-7xl tracking-tight text-[#1E1848] max-w-4xl mb-8 leading-tight">
                Czy chcesz poczuć swoje źródło codziennej energii?
            </h1>
<p className="text-lg md:text-xl text-[#4A4660] max-w-2xl mb-12">
<strong>Poranny Rozruch z Darią.</strong> 2 tygodnie codziennych ćwiczeń online. Zaczynamy dzień od siebie, równo o 6:16, przez zaledwie 30 minut.
            </p>
<a className="inline-flex items-center justify-center bg-[#7A58A8] hover:bg-[#6A4898] text-[#FFFFFF] font-medium rounded-full px-8 py-4 md:px-10 md:py-5 text-lg transition-colors duration-300 ease-out focus-ring shadow-sm hover:shadow-md transform hover:-translate-y-0.5" href="#zapisz-sie">
                Dołącz do Porannego Rozruchu
            </a>
<p className="text-sm text-[#4A4660] mt-4 font-medium mb-16">Na żywo • Online • Tylko 49 zł</p>

<div className="w-full max-w-5xl relative rounded-[32px] overflow-hidden shadow-soft">
<img alt="Daria prowadząca poranny rozruch online z wykorzystaniem laptopa" className="w-full h-[350px] md:h-[550px] object-cover" src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[#FDFAF5]/95 backdrop-blur-sm px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</span>
<span className="font-medium text-[#1E1848] text-sm">Zajęcia na żywo o 6:16</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EDE6D5]/60 rounded-full blur-3xl -z-10"></div>
</header>

<section className="py-24 bg-[#EDE6D5]">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="w-16 h-16 mx-auto mb-8 bg-[#FDFAF5] rounded-full flex items-center justify-center text-[#7A58A8] shadow-soft">
<iconify-icon icon="solar:cup-linear" width="32"></iconify-icon>
</div>
<h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-[#1E1848] mb-6">
                Budzisz się zmęczona, choć wypiłaś już trzecią kawę.
            </h2>
<p className="text-lg text-[#4A4660]">
                Kawa to często koło ratunkowe, a nie prawdziwe źródło energii. Tylko maskuje objawy zmęczenia, a jej efekt uśmierza na chwilę. Po godzinie przychodzi nagły spadek, a Ty znowu czujesz, że brakuje Ci sił na resztę dnia.
            </p>
</div>
</section>

<section className="py-24 bg-[#FDFAF5]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-[#1E1848] mb-8">
                Twoje ciało ma własne źródło energii.<br/>Trzeba je tylko obudzić.
            </h2>
<p className="text-lg text-[#4A4660] max-w-2xl mx-auto">
                Kilkanaście minut odpowiedniego ruchu rano reguluje Twój system dopaminowy. Zamiast chwilowego pobudzenia, zyskujesz stabilną, naturalną energię na cały dzień, bez nagłych spadków.
            </p>
</div>
</section>

<section className="py-24 bg-[#EDE6D5]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-[#1E1848] mb-4">
                    30 minut, które zmienią Twój dzień.
                </h2>
<p className="text-lg text-[#4A4660]">Przeplatamy proste ćwiczenia, aby Twoje ciało i umysł optymalnie przygotowały się do aktywnego dnia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FDFAF5] rounded-[24px] p-8 shadow-soft text-center flex flex-col items-center">
<div className="w-14 h-14 bg-[#F0D890] rounded-full flex items-center justify-center text-[#C49020] mb-6">
<iconify-icon icon="solar:body-shape-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-xl text-[#1E1848] mb-3">Ćwiczenia siłowe</h3>
<p className="text-[#4A4660]">Pobudzenie i aktywacja mięśni. Obudzisz ciało do działania i nadasz mu odpowiedni tonus na cały dzień.</p>
</div>

<div className="bg-[#FDFAF5] rounded-[24px] p-8 shadow-soft text-center flex flex-col items-center">
<div className="w-14 h-14 bg-[#7A58A8]/10 rounded-full flex items-center justify-center text-[#7A58A8] mb-6">
<iconify-icon icon="solar:stretching-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-xl text-[#1E1848] mb-3">Elementy jogi</h3>
<p className="text-[#4A4660]">Rozciągnięcie i powrót do balansu. Uwolnisz napięcia nagromadzone podczas snu i przygotujesz kręgosłup.</p>
</div>

<div className="bg-[#FDFAF5] rounded-[24px] p-8 shadow-soft text-center flex flex-col items-center">
<div className="w-14 h-14 bg-[#EDE6D5] rounded-full flex items-center justify-center text-[#1E1848] mb-6">
<iconify-icon icon="solar:wind-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-xl text-[#1E1848] mb-3">Oddech</h3>
<p className="text-[#4A4660]">Wyciszenie układu nerwowego i skupienie. Zaczniesz dzień od spokoju, a nie gonitwy myśli.</p>
</div>
</div>
<p className="text-center font-medium text-[#1E1848] mt-12 text-lg">
                Na żywo, online, z Darią — każdego dnia o 6:16.
            </p>
</div>
</section>

<section className="py-24 bg-[#FDFAF5]">
<div className="max-w-6xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
<div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden shadow-soft">
<img alt="Daria prezentująca spokojne ćwiczenia poranne na macie" className="w-full h-[400px] md:h-[500px] object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-[#1E1848] mb-8">
                        Szczegóły programu
                    </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-[#7A58A8]">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<strong className="block text-[#1E1848] text-lg font-medium">2 tygodnie codziennych sesji</strong>
<span className="text-[#4A4660]">Wyrabiamy nowy, wspierający nawyk.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#7A58A8]">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<strong className="block text-[#1E1848] text-lg font-medium">Na żywo z Darią</strong>
<span className="text-[#4A4660]">Każdego dnia spotykamy się online na wspólnej macie.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#7A58A8]">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<strong className="block text-[#1E1848] text-lg font-medium">Równo o 6:16</strong>
<span className="text-[#4A4660]">Przed pracą, zanim domownicy się obudzą. Czas tylko dla Ciebie.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#7A58A8]">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<strong className="block text-[#1E1848] text-lg font-medium">Tylko 30 minut</strong>
<span className="text-[#4A4660]">Tyle wystarczy, by poczuć różnicę. Mądrzej, nie więcej.</span>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-[#EDE6D5] rounded-[32px] p-8 md:p-12 shadow-soft">
<h2 className="font-heading font-medium text-3xl tracking-tight text-[#1E1848] mb-10 text-center md:text-left">
                    Co zyskujesz?
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full bg-[#FDFAF5] flex items-center justify-center text-[#7A58A8] shadow-sm">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#1E1848] mb-1">Energia na cały dzień</h4>
<p className="text-[#4A4660]">Stabilna i naturalna, bez nagłych skoków i spadków napięcia jak po wypiciu filiżanki kawy.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full bg-[#FDFAF5] flex items-center justify-center text-[#7A58A8] shadow-sm">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#1E1848] mb-1">Mniej stresu</h4>
<p className="text-[#4A4660]">Poranny oddech i uważny ruch skutecznie obniżają poziom kortyzolu, dając Ci przewagę od rana.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full bg-[#FDFAF5] flex items-center justify-center text-[#7A58A8] shadow-sm">
<iconify-icon icon="solar:accessibility-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#1E1848] mb-1">Zdrowy kręgosłup</h4>
<p className="text-[#4A4660]">Działanie profilaktyczne na bóle i sztywność pleców, co jest bezcenne przy siedzącym trybie pracy.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full bg-[#FDFAF5] flex items-center justify-center text-[#7A58A8] shadow-sm">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-[#1E1848] mb-1">Dzień od siebie</h4>
<p className="text-[#4A4660]">Zaczniesz ranek tylko dla siebie, co mentalnie ustawia Cię do bycia gotową na kolejne wyzwania.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFAF5]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-[#1E1848] mb-16 text-center">
                Co mówią kobiety, które ćwiczyły z Darią:
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-[#EDE6D5] rounded-[20px] p-8 shadow-soft flex flex-col">
<iconify-icon className="text-[#DDD4C0] mb-4" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-[#4A4660] mb-6 flex-grow">
                        „Tutaj ruch staje się prawdziwą przyjemnością. Instruktorzy mają profesjonalne podejście. Atmosfera jest przyjazna, motywująca i pełna pozytywnej energii.”
                    </p>
<p className="font-accent text-2xl text-[#1E1848]">Agnieszka S.</p>
</div>

<div className="bg-[#EDE6D5] rounded-[20px] p-8 shadow-soft flex flex-col">
<iconify-icon className="text-[#DDD4C0] mb-4" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-[#4A4660] mb-6 flex-grow">
                        „To nie jest tradycyjne studium fitnessu. Jest kameralnie i profesjonalnie. Inspirują do świadomego stylu życia. Każde zajęcia wzbogacają nie tylko ciało, ale i duszę.”
                    </p>
<p className="font-accent text-2xl text-[#1E1848]">Agni</p>
</div>

<div className="bg-[#EDE6D5] rounded-[20px] p-8 shadow-soft flex flex-col">
<iconify-icon className="text-[#DDD4C0] mb-4" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-[#4A4660] mb-6 flex-grow">
                        „W końcu znalazłam zajęcia, do których się nie zmuszam — które pokochałam i idę na nie z wytęsknieniem.”
                    </p>
<p className="font-accent text-2xl text-[#1E1848]">Sara O.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFAF5]" id="zapisz-sie">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight text-[#1E1848] mb-6">
                Dołącz do Porannego Rozruchu
            </h2>
<p className="text-xl text-[#4A4660] mb-10">
                2 tygodnie • Codziennie o 6:16 • Online na żywo z Darią<br/>
<strong className="text-[#1E1848]">Start: 22 czerwca 2026</strong>
</p>
<div className="bg-[#EDE6D5] rounded-[32px] p-8 md:p-12 shadow-soft mb-8 border border-[#DDD4C0]">
<div className="text-sm font-medium text-[#4A4660] uppercase tracking-wider mb-2">Inwestycja w Twoje samopoczucie</div>
<div className="font-heading text-6xl text-[#1E1848] mb-8">49 zł</div>
<a className="inline-flex items-center justify-center w-full sm:w-auto bg-[#7A58A8] hover:bg-[#6A4898] text-[#FFFFFF] font-medium rounded-full px-12 py-5 text-xl transition-colors duration-300 ease-out focus-ring shadow-md hover:shadow-lg" href="#">
                    Dołączam do Rozruchu
                </a>
<div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#4A4660]">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
                    Bezpieczna płatność. Dostęp otrzymasz mailowo.
                </div>
</div>
<p className="text-[#7A58A8] font-medium">
                Start 22 czerwca — nie czekaj na ostatnią chwilę.
            </p>
</div>
</section>

<section className="py-24 bg-[#EDE6D5]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-heading font-medium text-3xl md:text-4xl tracking-tight text-[#1E1848] mb-12 text-center">
                Masz pytania?
            </h2>
<div className="space-y-4">

<details className="group bg-[#FDFAF5] rounded-[16px] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 focus-ring rounded-[16px]">
<h3 className="font-medium text-lg text-[#1E1848] pr-4">Dla kogo jest ten program?</h3>
<span className="shrink-0 text-[#7A58A8] icon-rotate">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#4A4660]">
                        Dla każdej kobiety, która chce mieć więcej energii i obniżyć poziom stresu. Nie potrzebujesz żadnego doświadczenia w ćwiczeniach, ani niezwykłej sprawności. Poprowadzę Cię krok po kroku.
                    </div>
</details>

<details className="group bg-[#FDFAF5] rounded-[16px] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 focus-ring rounded-[16px]">
<h3 className="font-medium text-lg text-[#1E1848] pr-4">Czego potrzebuję?</h3>
<span className="shrink-0 text-[#7A58A8] icon-rotate">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#4A4660]">
                        Wygodnego ubrania, maty do ćwiczeń i 30 minut rano. Nic więcej. Żadnego skomplikowanego sprzętu.
                    </div>
</details>

<details className="group bg-[#FDFAF5] rounded-[16px] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 focus-ring rounded-[16px]">
<h3 className="font-medium text-lg text-[#1E1848] pr-4">Co jeśli nie dam rady wstać o 6:16?</h3>
<span className="shrink-0 text-[#7A58A8] icon-rotate">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#4A4660]">
                        Zachęcam do obecności na żywo – to buduje najlepszy nawyk i energię grupy. Jeśli jednak zaśpisz, otrzymasz dostęp do nagrania z danego dnia, by móc wykonać rozruch w dogodnym momencie.
                    </div>
</details>

<details className="group bg-[#FDFAF5] rounded-[16px] shadow-sm overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 focus-ring rounded-[16px]">
<h3 className="font-medium text-lg text-[#1E1848] pr-4">Czy mogę dostać zwrot?</h3>
<span className="shrink-0 text-[#7A58A8] icon-rotate">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-[#4A4660]">
                        Tak, masz prawo do rezygnacji zgodnie z regulaminem, jeśli uznasz, że ta forma ruchu nie jest dla Ciebie odpowiednia. Zależy mi na Twoim komforcie.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#FDFAF5] border-t border-[#DDD4C0] py-12 pb-28 md:pb-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-heading font-medium tracking-tight text-xl text-[#1E1848]">
                ENERGY DARIA
            </div>
<div className="flex gap-6 text-sm text-[#4A4660]">
<a className="hover:text-[#7A58A8] transition-colors focus-ring rounded-sm" href="#">Regulamin</a>
<a className="hover:text-[#7A58A8] transition-colors focus-ring rounded-sm" href="#">Polityka Prywatności</a>
<a className="hover:text-[#7A58A8] transition-colors focus-ring rounded-sm" href="#">Kontakt</a>
</div>
<div className="text-sm text-[#4A4660]">
                © 2026 Energy Daria. Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-[#FDFAF5]/95 backdrop-blur-sm border-t border-[#DDD4C0] md:hidden z-50">
<a className="flex w-full items-center justify-center bg-[#7A58A8] hover:bg-[#6A4898] transition-colors text-[#FFFFFF] font-medium rounded-full py-4 text-lg shadow-md focus-ring" href="#zapisz-sie">
            Zapisz się — 49 zł
        </a>
</div>

    </>
  );
}
