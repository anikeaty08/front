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



      // Intersection Observer for scroll animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.fade-in-section').forEach((section) => {
          observer.observe(section);
      });

      // Modal Logic
      const modal = document.getElementById('contact-modal');
      const modalContent = document.getElementById('modal-content');

      function openModal() {
          modal.classList.remove('hidden');
          // Slight delay to allow display:block to apply before animating opacity
          setTimeout(() => {
              modal.classList.remove('opacity-0');
              modalContent.classList.remove('scale-95');
              modalContent.classList.add('scale-100');
          }, 10);
          document.body.style.overflow = 'hidden'; // Prevent background scroll
      }

      function closeModal() {
          modal.classList.add('opacity-0');
          modalContent.classList.remove('scale-100');
          modalContent.classList.add('scale-95');
          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = 'auto'; // Restore scroll
          }, 300);
      }

      function submitForm(event) {
          event.preventDefault();
          // Dummy webhook logic
          const btn = event.target.querySelector('button[type="submit"]');
          const originalText = btn.innerHTML;
          btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-lg mr-2 align-middle"></iconify-icon> Wysłano pomyślnie';
          btn.classList.replace('bg-[#0047AB]', 'bg-green-600');

          setTimeout(() => {
              closeModal();
              setTimeout(() => {
                  btn.innerHTML = originalText;
                  btn.classList.replace('bg-green-600', 'bg-[#0047AB]');
                  event.target.reset();
              }, 300);
          }, 2000);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full z-50 bg-[#0047AB] text-[#FFFFFF] text-xs py-2 px-4 flex justify-between items-center transition-transform duration-300" id="top-bar">
<div className="flex-1 text-center font-medium">
        System już działa w gabinecie medycyny estetycznej w Warszawie — Twój
        może być następny.
      </div>
<button className="text-[#FFFFFF] hover:text-[#C0C0C0] transition-colors ml-4 focus:outline-none" onclick="document.getElementById('top-bar').style.display='none'; document.getElementById('navbar').style.top='0'">
<iconify-icon className="text-sm" icon="solar:close-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<nav className="sticky top-[32px] w-full z-40 bg-[#000000]/80 backdrop-blur-md border-b border-[#FFFFFF]/10 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<iconify-icon className="text-[#0047AB] text-xl" icon="solar:git-merge-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tighter font-medium text-xl">Ductly</span>
</div>

<div className="hidden md:flex space-x-8 text-sm font-medium text-[#C0C0C0]">
<a className="hover:text-[#FFFFFF] transition-colors" href="#jak-to-dziala">
              Jak działa
            </a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#efekty">
              Efekty
            </a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#opinie">
              Opinie
            </a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#faq">
              FAQ
            </a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#kontakt">
              Kontakt
            </a>
</div>

<div className="flex items-center">
<button className="bg-[#0047AB] hover:bg-[#0047AB]/90 text-[#FFFFFF] text-sm font-medium px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(0,71,171,0.4)] hover:shadow-[0_0_25px_rgba(0,71,171,0.6)]" onclick="openModal()">
              Bezpłatna rozmowa
            </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 md:pt-32 overflow-hidden pb-8 md:pb-12">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047AB]/20 blur-[120px] rounded-full pointer-events-none pulse-glow"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="flex flex-col items-start fade-in-section">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FFFFFF] tracking-tight leading-tight mb-6">
              Twój gabinet traci 2 godziny dziennie na rejestrację.
              <span className="text-[#0047AB]">My to eliminujemy.</span>
</h1>
<p className="text-base md:text-lg text-[#C0C0C0] font-light leading-relaxed mb-8 max-w-xl">
              Budujemy systemy AI które same rejestrują pacjentów, sprawdzają
              przeciwwskazania, wysyłają przypomnienia i uzupełniają kartoteki —
              bez recepcjonistki, bez papieru, 24/7.
            </p>
<button className="group relative inline-flex items-center justify-center bg-[#0047AB] text-[#FFFFFF] font-medium text-base px-8 py-4 rounded-full transition-all overflow-hidden shadow-[0_0_20px_rgba(0,71,171,0.4)] hover:shadow-[0_0_35px_rgba(0,71,171,0.7)] hover:-translate-y-0.5" onclick="openModal()">
<span className="relative z-10">
                SPRAWDŹ ILE TRACI TWÓJ GABINET
              </span>
<div className="absolute inset-0 bg-[#FFFFFF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
<p className="mt-4 text-xs text-[#C0C0C0] flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
              Bezpłatna 30-minutowa rozmowa · Bez zobowiązań
            </p>
</div>

<div className="relative w-full h-[500px] flex items-center justify-center fade-in-section">

<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewbox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
<path d="M 200 50 L 200 450" stroke="#0047AB" stroke-opacity="0.3" strokeWidth="2"></path>
<path className="animated-path" d="M 200 50 L 200 450" stroke="#0047AB" strokeWidth="2"></path>
</svg>

<div className="absolute inset-0 flex flex-col justify-between py-6 items-center">
<div className="bg-[#000000] border border-[#0047AB]/50 shadow-[0_0_15px_rgba(0,71,171,0.2)] rounded-xl p-4 w-48 flex items-center gap-3 relative z-10">
<div className="bg-[#0047AB]/10 p-2 rounded-lg text-[#0047AB]">
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium">Ankieta online</span>
</div>
<div className="bg-[#000000] border border-[#0047AB]/50 shadow-[0_0_15px_rgba(0,71,171,0.2)] rounded-xl p-4 w-48 flex items-center gap-3 relative z-10 translate-x-12">
<div className="bg-[#0047AB]/10 p-2 rounded-lg text-[#0047AB]">
<iconify-icon className="text-xl" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium">Weryfikacja AI</span>
</div>
<div className="bg-[#000000] border border-[#0047AB]/50 shadow-[0_0_15px_rgba(0,71,171,0.2)] rounded-xl p-4 w-48 flex items-center gap-3 relative z-10 -translate-x-12">
<div className="bg-[#0047AB]/10 p-2 rounded-lg text-[#0047AB]">
<iconify-icon className="text-xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium">Kalendarz</span>
</div>
<div className="bg-[#000000] border border-[#0047AB]/50 shadow-[0_0_15px_rgba(0,71,171,0.2)] rounded-xl p-4 w-48 flex items-center gap-3 relative z-10 translate-x-12">
<div className="bg-[#0047AB]/10 p-2 rounded-lg text-[#0047AB]">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium">Przypomnienie</span>
</div>
<div className="bg-[#000000] border border-[#0047AB]/50 shadow-[0_0_15px_rgba(0,71,171,0.2)] rounded-xl p-4 w-48 flex items-center gap-3 relative z-10">
<div className="bg-[#0047AB]/10 p-2 rounded-lg text-[#0047AB]">
<iconify-icon className="text-xl" icon="solar:tablet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium">Tablet z podpisem</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-[#FFFFFF]/10 bg-[#FFFFFF]/5 py-6 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
<span className="text-sm font-medium text-[#C0C0C0]">
          Zaufały nam gabinety z Warszawy
        </span>
<div className="flex text-[#0047AB] gap-1">
<iconify-icon className="text-base" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#C0C0C0]">
          System wdrożony i działający od Stycznia 2025
        </span>
</div>
</div>

<section className="relative py-8 md:py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight mb-8">
          Czy Twoja recepcja wciąż wygląda tak?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-6 hover:bg-[#FFFFFF]/10 transition-colors">
<iconify-icon className="text-[#EF4444] text-3xl mb-4" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#C0C0C0] font-medium leading-relaxed">
              Telefon dzwoni co 10 minut z pytaniem o wolny termin
            </p>
</div>

<div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-6 hover:bg-[#FFFFFF]/10 transition-colors">
<iconify-icon className="text-[#EF4444] text-3xl mb-4" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#C0C0C0] font-medium leading-relaxed">
              Pacjenci nie przychodzą bo zapomnieli o wizycie
            </p>
</div>

<div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-6 hover:bg-[#FFFFFF]/10 transition-colors">
<iconify-icon className="text-[#EF4444] text-3xl mb-4" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#C0C0C0] font-medium leading-relaxed">
              Kartoteki i zgody podpisywane na papierze, potem przepisywane
              ręcznie
            </p>
</div>

<div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-6 hover:bg-[#FFFFFF]/10 transition-colors">
<iconify-icon className="text-[#EF4444] text-3xl mb-4" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-[#C0C0C0] font-medium leading-relaxed">
              Dane pacjentów w trzech różnych miejscach jednocześnie
            </p>
</div>
</div>
<div className="text-center max-w-2xl mx-auto">
<p className="text-base text-[#FFFFFF] font-medium bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg p-4">
            To kosztuje Twój gabinet średnio 2 godziny dziennie i kilka tysięcy
            złotych miesięcznie w zmarnowanym czasie personelu.
          </p>
</div>
</div>
</section>

<section className="relative bg-gradient-to-b from-[#000000] via-[#0047AB]/5 to-[#000000] py-8 md:py-12" id="jak-to-dziala">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight fade-in-section mb-8">
          Jak wygląda gabinet po wdrożeniu Ductly?
        </h2>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#FFFFFF]/10 -translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center mb-16 fade-in-section">
<div className="absolute left-6 md:left-1/2 w-8 h-8 bg-[#000000] border-2 border-[#0047AB] rounded-full flex items-center justify-center text-[#0047AB] text-xs font-semibold -translate-x-1/2 shadow-[0_0_10px_rgba(0,71,171,0.5)] z-10">
              1
            </div>
<div className="md:w-1/2 pl-16 md:pl-0 md:pr-12 text-left md:text-right w-full">
<div className="bg-[#0A0A1A] p-[40px] min-h-[200px] rounded-2xl flex flex-col justify-center w-full">
<h3 className="text-[22px] font-medium text-[#FFFFFF] mb-3 tracking-tight">
                  Pacjent wypełnia ankietę online
                </h3>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed">
                  Przez WhatsApp, formularz na stronie lub link wysłany SMS-em.
                  O każdej porze dnia i nocy.
                </p>
</div>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-16 fade-in-section">
<div className="absolute left-6 md:left-1/2 w-8 h-8 bg-[#000000] border-2 border-[#0047AB] rounded-full flex items-center justify-center text-[#0047AB] text-xs font-semibold -translate-x-1/2 shadow-[0_0_10px_rgba(0,71,171,0.5)] z-10">
              2
            </div>
<div className="hidden md:block md:w-1/2"></div>
<div className="md:w-1/2 pl-16 md:pl-12 text-left w-full">
<div className="bg-[#0A0A1A] p-[40px] min-h-[200px] rounded-2xl flex flex-col justify-center w-full">
<h3 className="text-[22px] font-medium text-[#FFFFFF] mb-3 tracking-tight">
                  AI weryfikuje i kwalifikuje
                </h3>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed">
                  System w kilka sekund analizuje odpowiedzi i decyduje czy
                  pacjent kwalifikuje się do zabiegu. Zero angażowania lekarza.
                </p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-16 fade-in-section">
<div className="absolute left-6 md:left-1/2 w-8 h-8 bg-[#000000] border-2 border-[#0047AB] rounded-full flex items-center justify-center text-[#0047AB] text-xs font-semibold -translate-x-1/2 shadow-[0_0_10px_rgba(0,71,171,0.5)] z-10">
              3
            </div>
<div className="md:w-1/2 pl-16 md:pl-0 md:pr-12 text-left md:text-right w-full">
<div className="bg-[#0A0A1A] p-[40px] min-h-[200px] rounded-2xl flex flex-col justify-center w-full">
<h3 className="text-[22px] font-medium text-[#FFFFFF] mb-3 tracking-tight">
                  Automatyczna rezerwacja terminu
                </h3>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed">
                  Pacjent sam wybiera termin zależnie od rodzaju zabiegu.
                  Kalendarz aktualizuje się w czasie rzeczywistym.
                </p>
</div>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-16 fade-in-section">
<div className="absolute left-6 md:left-1/2 w-8 h-8 bg-[#000000] border-2 border-[#0047AB] rounded-full flex items-center justify-center text-[#0047AB] text-xs font-semibold -translate-x-1/2 shadow-[0_0_10px_rgba(0,71,171,0.5)] z-10">
              4
            </div>
<div className="hidden md:block md:w-1/2"></div>
<div className="md:w-1/2 pl-16 md:pl-12 text-left w-full">
<div className="bg-[#0A0A1A] p-[40px] min-h-[200px] rounded-2xl flex flex-col justify-center w-full">
<h3 className="text-[22px] font-medium text-[#FFFFFF] mb-3 tracking-tight">
                  Przypomnienia bez Twojego udziału
                </h3>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed">
                  SMS i email wysyłane automatycznie 24h i 2h przed wizytą.
                  Koniec z no-show.
                </p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center fade-in-section">
<div className="absolute left-6 md:left-1/2 w-8 h-8 bg-[#000000] border-2 border-[#0047AB] rounded-full flex items-center justify-center text-[#0047AB] text-xs font-semibold -translate-x-1/2 shadow-[0_0_10px_rgba(0,71,171,0.5)] z-10">
              5
            </div>
<div className="md:w-1/2 pl-16 md:pl-0 md:pr-12 text-left md:text-right w-full">
<div className="bg-[#0A0A1A] p-[40px] min-h-[200px] rounded-2xl flex flex-col justify-center w-full">
<h3 className="text-[22px] font-medium text-[#FFFFFF] mb-3 tracking-tight">
                  Cyfrowa dokumentacja na tablecie
                </h3>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed">
                  Pacjent podpisuje kartę przeciwwskazań na tablecie w
                  gabinecie. Dane automatycznie trafiają do kartoteki i arkusza
                  — zero papieru.
                </p>
</div>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>
</div>
</div>
</section>

<section className="py-8 md:py-12" id="efekty">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight max-w-3xl mx-auto mb-8">
          Co zyskała Grażyna — właścicielka gabinetu medycyny estetycznej w
          Warszawie
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="relative bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-8 text-center overflow-hidden">
<div className="absolute inset-0 bg-[#0047AB]/10 blur-[30px] rounded-full"></div>
<h3 className="relative z-10 text-4xl md:text-5xl font-semibold text-[#0047AB] tracking-tight mb-2">
              2h dziennie
            </h3>
<p className="relative z-10 text-sm text-[#C0C0C0] font-medium">
              tyle odzyskała na rejestracji
            </p>
</div>
<div className="relative bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-8 text-center overflow-hidden">
<div className="absolute inset-0 bg-[#0047AB]/10 blur-[30px] rounded-full"></div>
<h3 className="relative z-10 text-4xl md:text-5xl font-semibold text-[#0047AB] tracking-tight mb-2">
              0 no-show
            </h3>
<p className="relative z-10 text-sm text-[#C0C0C0] font-medium">
              w ciągu pierwszego miesiąca
            </p>
</div>
<div className="relative bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-2xl p-8 text-center overflow-hidden">
<div className="absolute inset-0 bg-[#0047AB]/10 blur-[30px] rounded-full"></div>
<h3 className="relative z-10 text-4xl md:text-5xl font-semibold text-[#0047AB] tracking-tight mb-2">
              1 tydzień
            </h3>
<p className="relative z-10 text-sm text-[#C0C0C0] font-medium">
              tyle trwało wdrożenie
            </p>
</div>
</div>
<div className="max-w-4xl mx-auto bg-gradient-to-r from-[#FFFFFF]/5 to-transparent border-l-2 border-[#0047AB] p-8 rounded-r-2xl">
<iconify-icon className="text-3xl text-[#0047AB] mb-4" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl text-[#FFFFFF] font-light italic leading-relaxed mb-6">
            "Przestałam być recepcjonistką we własnym gabinecie. System działa
            sam, pacjenci są zadowoleni, a ja mam czas na to co ważne."
          </p>
<p className="text-sm font-medium text-[#C0C0C0]">
            — Grażyna, gabinet medycyny estetycznej, Warszawa
          </p>
</div>
</div>
</section>

<section className="bg-[#FFFFFF]/5 border-y border-[#FFFFFF]/10 relative py-8 md:py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight mb-8">
          Co dokładnie dostajesz?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#000000] border border-[#FFFFFF]/10 rounded-2xl p-6 hover:border-[#0047AB]/50 transition-colors group min-h-[180px] flex flex-col justify-start">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0047AB]/20 transition-colors">
<iconify-icon className="text-[#0047AB] text-2xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#FFFFFF] mb-2">
              Automatyczna rejestracja 24/7
            </h3>
<p className="text-[14px] text-[#C0C0C0] mt-2 leading-relaxed">
              Pozwól pacjentom umawiać wizyty o każdej porze. System obsłuży
              zapisy nawet w nocy.
            </p>
</div>

<div className="bg-[#000000] border border-[#FFFFFF]/10 rounded-2xl p-6 hover:border-[#0047AB]/50 transition-colors group min-h-[180px] flex flex-col justify-start">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0047AB]/20 transition-colors">
<iconify-icon className="text-[#0047AB] text-2xl" icon="solar:smart-home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#FFFFFF] mb-2">
              Weryfikacja AI pod kątem przeciwwskazań
            </h3>
<p className="text-[14px] text-[#C0C0C0] mt-2 leading-relaxed">
              Zanim pacjent zarezerwuje termin, AI sprawdza przeciwwskazania.
              Unikasz anulowanych wizyt na miejscu.
            </p>
</div>

<div className="bg-[#000000] border border-[#FFFFFF]/10 rounded-2xl p-6 hover:border-[#0047AB]/50 transition-colors group min-h-[180px] flex flex-col justify-start">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0047AB]/20 transition-colors">
<iconify-icon className="text-[#0047AB] text-2xl" icon="solar:mailbox-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#FFFFFF] mb-2">
              Przypomnienia SMS i email
            </h3>
<p className="text-[14px] text-[#C0C0C0] mt-2 leading-relaxed">
              Kilkustopniowy system przypomnień dba o frekwencję. Zmniejsz ilość
              nieobecności niemal do zera.
            </p>
</div>

<div className="bg-[#000000] border border-[#FFFFFF]/10 rounded-2xl p-6 hover:border-[#0047AB]/50 transition-colors group min-h-[180px] flex flex-col justify-start">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0047AB]/20 transition-colors">
<iconify-icon className="text-[#0047AB] text-2xl" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#FFFFFF] mb-2">
              Cyfrowe zgody i kartoteki
            </h3>
<p className="text-[14px] text-[#C0C0C0] mt-2 leading-relaxed">
              Wszystkie dokumenty pacjent podpisuje elektronicznie na tablecie.
              Koniec z toną papieru.
            </p>
</div>

<div className="bg-[#000000] border border-[#FFFFFF]/10 rounded-2xl p-6 hover:border-[#0047AB]/50 transition-colors group min-h-[180px] flex flex-col justify-start">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0047AB]/20 transition-colors">
<iconify-icon className="text-[#0047AB] text-2xl" icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#FFFFFF] mb-2">
              Integracja z Twoim kalendarzem
            </h3>
<p className="text-[14px] text-[#C0C0C0] mt-2 leading-relaxed">
              Ductly łączy się z Twoim obecnym systemem i kalendarzem. Nie
              musisz zmieniać przyzwyczajeń.
            </p>
</div>

<div className="bg-[#000000] border border-[#FFFFFF]/10 rounded-2xl p-6 hover:border-[#0047AB]/50 transition-colors group min-h-[180px] flex flex-col justify-start">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0047AB]/20 transition-colors">
<iconify-icon className="text-[#0047AB] text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-[#FFFFFF] mb-2">
              Dashboard z danymi gabinetu
            </h3>
<p className="text-[14px] text-[#C0C0C0] mt-2 leading-relaxed">
              Śledź na bieżąco statystyki wizyt i nowe zapisy. Zyskaj pełną
              kontrolę nad obłożeniem grafiku.
            </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-8 md:py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          Dla jakich gabinetów to działa?
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-6">
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Medycyna estetyczna
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:smile" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Stomatologia
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:activity" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Fizjoterapia
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:scan-face" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Dermatologia
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:baby" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Ginekologia
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:brain" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Psychologia
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:dog" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Weterynaria
            </span>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#0047AB] transition-colors">
<div className="w-12 h-12 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
<iconify-icon className="text-2xl" icon="lucide:eye" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[16px] font-medium text-[#FFFFFF]">
              Okulistyka
            </span>
</div>
</div>
<p className="text-base text-[#FFFFFF] font-light max-w-2xl mx-auto">
          Jeśli Twój gabinet przyjmuje pacjentów i ma powtarzalny proces
          rejestracji — ten system zadziała u Ciebie.
        </p>
</div>
</section>

<section className="py-8 md:py-12 bg-gradient-to-b from-[#000000] to-[#FFFFFF]/5 relative border-t border-[#FFFFFF]/10" id="opinie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight mb-8">
          Co mówią gabinety po wdrożeniu?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex text-[#F59E0B] gap-1 mb-6">
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
</div>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed mb-8 italic">
                "Z początku byłam sceptycznie nastawiona do AI w medycynie, ale
                zaryzykowaliśmy. System zredukował liczbę nieodebranych
                telefonów niemal do zera. Pacjenci chwalą sobie, że mogą umówić
                się z kanapy w niedzielę wieczorem. Oszczędzamy ponad godzinę
                dziennie."
              </p>
</div>
<div className="flex items-center gap-4">
<img alt="lek. med. Anna Szymańska" className="w-12 h-12 rounded-full object-cover border border-[#FFFFFF]/20" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<h4 className="text-[#FFFFFF] font-medium">
                  lek. med. Anna Szymańska
                </h4>
<p className="text-sm text-[#0047AB]">
                  Klinika Medycyny Estetycznej, Warszawa
                </p>
</div>
</div>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex text-[#F59E0B] gap-1 mb-6">
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
</div>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed mb-8 italic">
                "Największą bolączką były u nas 'puste przebiegi' — pacjent nie
                przychodził na wizytę, a to godzina pracy w plecy. Odkąd
                wprowadziliśmy automatyczne przypomnienia i rezerwacje przez
                Ductly, odsetek no-show spadł z 15% do zaledwie 2%."
              </p>
</div>
<div className="flex items-center gap-4">
<img alt="dr n. med. Tomasz Kamiński" className="w-12 h-12 rounded-full object-cover border border-[#FFFFFF]/20" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<h4 className="text-[#FFFFFF] font-medium">
                  dr n. med. Tomasz Kamiński
                </h4>
<p className="text-sm text-[#0047AB]">
                  Centrum Stomatologiczne, Kraków
                </p>
</div>
</div>
</div>
<div className="bg-[#0A0A1A] border border-[#FFFFFF]/10 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex text-[#F59E0B] gap-1 mb-6">
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-lg" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
</div>
<p className="text-[16px] text-[#C0C0C0] leading-relaxed mb-8 italic">
                "Prowadzę gabinet sama. W trakcie terapii nie mogę odbierać
                telefonów, przez co traciłam pacjentów. Teraz system odpisuje im
                automatycznie z linkiem do kalendarza. Mam pełen grafik bez
                przerywania zabiegów, a to bezcenne."
              </p>
</div>
<div className="flex items-center gap-4">
<img alt="mgr Marta Zielińska" className="w-12 h-12 rounded-full object-cover border border-[#FFFFFF]/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h4 className="text-[#FFFFFF] font-medium">mgr Marta Zielińska</h4>
<p className="text-sm text-[#0047AB]">
                  Prywatny Gabinet Fizjoterapii, Poznań
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#FFFFFF]/5 border-t border-[#FFFFFF]/10 relative py-8 md:py-12" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight mb-8">
          Masz pytania? Mamy odpowiedzi.
        </h2>
<div className="space-y-4">

<details className="group border border-[#FFFFFF]/10 rounded-2xl bg-[#000000] overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#FFFFFF] font-medium transition-colors hover:bg-[#FFFFFF]/5">
<span className="text-base">
                Czy muszę zmieniać systemy których już używam?
              </span>
<iconify-icon className="text-[#0047AB] text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-[#C0C0C0] leading-relaxed border-t border-[#FFFFFF]/5 mt-2 bg-[#000000]">
              Nie. Integrujemy się z tym co już masz — Google Calendar,
              jakikolwiek CRM, email. Nie musisz nic zmieniać.
            </div>
</details>

<details className="group border border-[#FFFFFF]/10 rounded-2xl bg-[#000000] overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#FFFFFF] font-medium transition-colors hover:bg-[#FFFFFF]/5">
<span className="text-base">Ile czasu zajmuje wdrożenie?</span>
<iconify-icon className="text-[#0047AB] text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-[#C0C0C0] leading-relaxed border-t border-[#FFFFFF]/5 mt-2 bg-[#000000]">
              Pierwszy działający system uruchamiamy w ciągu tygodnia. Twój
              zespół nie robi nic — my budujemy, testujemy i oddajemy gotowe.
            </div>
</details>

<details className="group border border-[#FFFFFF]/10 rounded-2xl bg-[#000000] overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#FFFFFF] font-medium transition-colors hover:bg-[#FFFFFF]/5">
<span className="text-base">Co jeśli system przestanie działać?</span>
<iconify-icon className="text-[#0047AB] text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-[#C0C0C0] leading-relaxed border-t border-[#FFFFFF]/5 mt-2 bg-[#000000]">
              Reagujemy w ciągu 2 godzin roboczych. Dostajesz też pełną
              dokumentację systemu.
            </div>
</details>

<details className="group border border-[#FFFFFF]/10 rounded-2xl bg-[#000000] overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#FFFFFF] font-medium transition-colors hover:bg-[#FFFFFF]/5">
<span className="text-base">Ile to kosztuje?</span>
<iconify-icon className="text-[#0047AB] text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-[#C0C0C0] leading-relaxed border-t border-[#FFFFFF]/5 mt-2 bg-[#000000]">
              Wdrożenie to koszt jednorazowy. Narzędzia zewnętrzne (Make.com,
              OpenAI) generują niewielkie koszty miesięczne — mówimy o tym
              szczerze przed startem.
            </div>
</details>

<details className="group border border-[#FFFFFF]/10 rounded-2xl bg-[#000000] overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#FFFFFF] font-medium transition-colors hover:bg-[#FFFFFF]/5">
<span className="text-base">
                Czy to działa dla małych gabinetów jednoosobowych?
              </span>
<iconify-icon className="text-[#0047AB] text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-[#C0C0C0] leading-relaxed border-t border-[#FFFFFF]/5 mt-2 bg-[#000000]">
              Tak — i to właśnie dla nich przynosi największy efekt. Jedna osoba
              odzyskuje czas który wcześniej szedł na administrację.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-40 relative overflow-hidden text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0047AB]/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in-section">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
          Gotowy żeby Twój gabinet przestał tracić czas na papierkową robotę?
        </h2>
<p className="text-lg text-[#C0C0C0] font-light mb-12 max-w-2xl mx-auto">
          Umów bezpłatną 30-minutową rozmowę. Pokażę Ci dokładnie jak system
          działałby w Twoim gabinecie — bez zobowiązań.
        </p>
<button className="group relative inline-flex items-center justify-center bg-[#0047AB] text-[#FFFFFF] font-medium text-base md:text-lg px-10 py-5 rounded-full transition-all overflow-hidden shadow-[0_0_30px_rgba(0,71,171,0.5)] hover:shadow-[0_0_50px_rgba(0,71,171,0.8)] hover:-translate-y-1" onclick="openModal()">
<span className="relative z-10">UMÓW BEZPŁATNĄ ROZMOWĘ</span>
<div className="absolute inset-0 bg-[#FFFFFF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#C0C0C0] font-medium">
<span className="flex items-center gap-1">
<iconify-icon className="text-[#0047AB] text-sm" icon="solar:check-circle-linear"></iconify-icon>
            Odpowiadam w ciągu 24h
          </span>
<span className="hidden sm:inline text-[#FFFFFF]/20">|</span>
<span className="flex items-center gap-1">
<iconify-icon className="text-[#0047AB] text-sm" icon="solar:check-circle-linear"></iconify-icon>
            Pierwsze efekty w 7 dni
          </span>
<span className="hidden sm:inline text-[#FFFFFF]/20">|</span>
<span className="flex items-center gap-1">
<iconify-icon className="text-[#0047AB] text-sm" icon="solar:check-circle-linear"></iconify-icon>
            Bez długich umów
          </span>
</div>
</div>
</section>

<footer className="border-t border-[#FFFFFF]/10 bg-[#000000] py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#0047AB] text-xl" icon="solar:git-merge-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tighter font-medium text-xl">Ductly</span>
</div>
<div className="flex gap-6 text-sm text-[#C0C0C0]">
<a className="hover:text-[#FFFFFF] transition-colors" href="#">
            Polityka Prywatności
          </a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#">
            Regulamin
          </a>
</div>
<div className="text-sm text-[#C0C0C0]">© 2025 Ductly</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="contact-modal">

<div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm" onclick="closeModal()"></div>

<div className="relative bg-[#050505] border border-[#FFFFFF]/10 rounded-3xl p-8 w-full max-w-md m-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform scale-95 transition-transform duration-300" id="modal-content">
<button className="absolute top-6 right-6 text-[#C0C0C0] hover:text-[#FFFFFF] transition-colors focus:outline-none" onclick="closeModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<h3 className="text-2xl font-semibold tracking-tight text-[#FFFFFF] mb-2">
          Porozmawiajmy
        </h3>
<p className="text-sm text-[#C0C0C0] mb-8">
          Zostaw kontakt, odezwiemy się w ciągu 24h aby umówić termin darmowej
          konsultacji.
        </p>
<form className="space-y-4" onsubmit="submitForm(event)">
<div>
<label className="block text-xs font-medium text-[#C0C0C0] mb-1">
              Imię i nazwisko
            </label>
<input className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#0047AB] focus:ring-1 focus:ring-[#0047AB] outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#C0C0C0] mb-1">
              Email
            </label>
<input className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#0047AB] focus:ring-1 focus:ring-[#0047AB] outline-none transition-all" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#C0C0C0] mb-1">
              Telefon
            </label>
<input className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#0047AB] focus:ring-1 focus:ring-[#0047AB] outline-none transition-all" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-[#C0C0C0] mb-1">
              Nazwa gabinetu / Specjalizacja
            </label>
<input className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#0047AB] focus:ring-1 focus:ring-[#0047AB] outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#C0C0C0] mb-1">
              Z czym tracicie najwięcej czasu?
            </label>
<textarea className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:border-[#0047AB] focus:ring-1 focus:ring-[#0047AB] outline-none transition-all resize-none" rows="3"></textarea>
</div>
<button className="w-full bg-[#0047AB] hover:bg-[#0047AB]/90 text-[#FFFFFF] font-medium text-sm py-4 rounded-xl mt-4 transition-all shadow-[0_0_15px_rgba(0,71,171,0.3)]" type="submit">
            Wyślij zapytanie
          </button>
</form>
</div>
</div>



    </>
  );
}
