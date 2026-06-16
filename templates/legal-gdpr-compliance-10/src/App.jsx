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
      
<div className="min-h-screen flex flex-col justify-center py-16 px-6 md:py-24">
<main className="w-full max-w-2xl mx-auto">

<header className="mb-16 md:mb-24 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter text-neutral-900 uppercase"></div>
<div className="flex items-center gap-2 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Wersja 1.0</span>
</div>
</header>
<article className="space-y-16">

<div className="">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
                        Klauzule Informacyjne i Zgody RODO – Obsługa Rezerwacji AI
                    </h1>
</div>

<section>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 mb-4">
                        SEKCJA 1: Kto zarządza Twoimi danymi? (Administrator Danych)
                    </h2>
<p className="text-base md:text-lg leading-relaxed text-neutral-500">
                        Administratorem Danych Osobowych (ADO) pacjentów jest Gabinet Lekarski prowadzący działalność medyczną. Dane są zbierane i przetwarzane wyłącznie w celu rejestracji wizyt, przeprowadzenia wstępnego triage'u medycznego oraz realizacji świadczeń zdrowotnych.
                    </p>
</section>

<section>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 mb-4">
                        SEKCJA 2: Architektura IT i Podmioty Przetwarzające (Procesorzy)
                    </h2>
<p className="text-base md:text-lg leading-relaxed text-neutral-500 mb-6">
                        W celu zapewnienia najwyższej jakości obsługi, Gabinet korzysta z nowoczesnych technologii automatyzacji procesów. Klient przyjmuje do wiadomości i wyraża zgodę, że:
                    </p>
<ol className="list-decimal pl-5 space-y-4 marker:text-neutral-300">
<li className="text-base md:text-lg leading-relaxed text-neutral-500 pl-2">
                            Integratorem systemów IT na zlecenie gabinetu jest zewnętrzna agencja automatyzacji AI.
                        </li>
<li className="text-base md:text-lg leading-relaxed text-neutral-500 pl-2">
                            Dane są przetwarzane w bezpiecznej, wydzielonej i szyfrowanej infrastrukturze chmurowej platformy Make.com, zlokalizowanej na europejskich serwerach (strefa EU), co gwarantuje pełną zgodność z unijnymi standardami ochrony danych.
                        </li>
<li className="text-base md:text-lg leading-relaxed text-neutral-500 pl-2">
                            Narzędzie Tally.so służy wyłącznie jako przejściowy formularz do wprowadzania danych i jest skonfigurowane tak, aby natychmiastowo i trwale usuwać odpowiedzi pacjentów po ich przetworzeniu przez system automatyzacji.
                        </li>
</ol>
</section>

<section>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 mb-4">
                        SEKCJA 3: Wyraźna Zgoda na Przetwarzanie Danych przez Sztuczną Inteligencję (Tarcza OpenAI)
                    </h2>
<p className="text-base md:text-lg leading-relaxed text-neutral-500 mb-8">
                        Na podstawie art. 9 ust. 2 lit. a RODO, pacjent wyraża dobrowolną, wyraźną i jednoznaczną zgodę na przetwarzanie danych szczególnej kategorii (dane o planowanych zabiegach medycznych oraz odpowiedzi z ankiety przedmedycznej) przy użyciu algorytmów sztucznej inteligencji za pośrednictwem profesjonalnego klucza API (OpenAI API).
                    </p>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-neutral-900 shrink-0 mt-1" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base md:text-lg leading-relaxed text-neutral-500">
<span className="font-semibold text-neutral-900 block mb-1">Gwarancje bezpieczeństwa:</span>
                            Algorytmy OpenAI przetwarzają dane wyłącznie "w locie" w celu automatycznej analizy, strukturyzacji i segregacji (triage) zgłoszenia przed wizytą. Funkcja uczenia maszynowego oraz trenowania modeli na danych pacjentów została trwale i bezwzględnie wyłączona na poziomie deweloperskim projektu. Dane nie są trwale przechowywane na serwerach dostawcy AI.
                        </p>
</div>
</section>

<section>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 mb-4">
                        SEKCJA 4: Komunikacja E-mail i Odpowiedzialność za Literówki (Tarcza przed wyciekiem)
                    </h2>
<p className="text-base md:text-lg leading-relaxed text-neutral-500 mb-8">
                        Pacjent wyraża zgodę na przesyłanie automatycznych powiadomień i potwierdzeń rezerwacji, zawierających imię, nazwisko oraz otwartą nazwę wybranego zabiegu medycznego, bezpośrednio na adres e-mail wskazany przez niego w formularzu.
                    </p>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-neutral-900 shrink-0 mt-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base md:text-lg leading-relaxed text-neutral-500">
<span className="font-semibold text-neutral-900 block mb-1">Prawna odpowiedzialność za kanał komunikacji:</span>
                            Pacjent jest w pełni odpowiedzialny za prawidłowe i bezbłędne wpisanie swojego adresu e-mail w formularzu. W przypadku popełnienia błędu pisarskiego (literówki) przez pacjenta, Gabinet nie ponosi odpowiedzialności za przypadkowe ujawnienie danych osobom trzecim, wynikające z dostarczenia wiadomości pod nieprawidłowy adres.
                        </p>
</div>
</section>

<section>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 mb-4">
                        SEKCJA 5: Prawa Pacjenta
                    </h2>
<p className="text-base md:text-lg leading-relaxed text-neutral-500">
                        Pacjentowi przysługuje pełne prawo do wglądu w swoje dane, ich sprostowania, żądania ograniczenia przetwarzania, przenoszenia danych, a także prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Cofnięcie zgody może uniemożliwić automatyczną rezerwację wizyty.
                    </p>
</section>
</article>

<footer className="mt-24 pt-8 border-t border-neutral-100 flex items-center justify-between">
<div className="flex items-center gap-2.5 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Bezpieczeństwo danych zapewnione</span>
</div>
</footer>
</main>
</div>

    </>
  );
}
