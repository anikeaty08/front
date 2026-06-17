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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Manrope', 'sans-serif'],
},
colors: {
brand: {
beige: '#F5ECE4',
dark: '#333230',
button: '#3C3937',
offwhite: '#FAFAFA',
accent: '#BFA391'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function () {
        const reveals = document.querySelectorAll('.reveal:not(.is-initialized)');
        reveals.forEach((el) => {
          el.classList.add('is-initialized');
          const text = el.textContent.trim().split(/\s+/);
          el.innerHTML = text.map((word) => {
            return '<span style="display:inline-block; overflow:hidden; vertical-align:top; margin-right:0.25em;"><span class="reveal-word" style="display:inline-block; transform:translateY(110%); opacity:0;">' + word + '</span></span>';
          }).join('');
        });

        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.reveal').forEach((el) => {
          gsap.to(el.querySelectorAll('.reveal-word'), {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true
            }
          });
        });
      })();
    
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
      

<a className="fixed bottom-6 right-6 z-50 bg-brand-accent text-white p-4 md:py-3 md:px-5 rounded-full shadow-lg shadow-brand-accent/20 flex items-center gap-2 hover:bg-[#A88B79] transition-all hover:scale-[1.02] active:scale-95 group" href="https://wa.me/48513196787" rel="noopener noreferrer" target="_blank">
<iconify-icon className="md:w-5 md:h-5" height="24" icon="tabler:brand-whatsapp" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Napisz do mnie</span>
</a>

<div className="fixed inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 lg:block pointer-events-none z-0">
<div className="absolute inset-y-0 left-4 w-px bg-brand-dark/5"></div>
<div className="absolute inset-y-0 right-4 w-px bg-brand-dark/5"></div>
<div className="absolute left-4 top-32 h-1.5 w-1.5 -translate-x-1/2 border border-brand-dark/10 bg-brand-offwhite"></div>
<div className="absolute right-4 top-32 h-1.5 w-1.5 translate-x-1/2 border border-brand-dark/10 bg-brand-offwhite"></div>
<div className="absolute left-4 bottom-32 h-1.5 w-1.5 -translate-x-1/2 border border-brand-dark/10 bg-brand-offwhite"></div>
<div className="absolute right-4 bottom-32 h-1.5 w-1.5 translate-x-1/2 border border-brand-dark/10 bg-brand-offwhite"></div>
</div>

<header className="sticky top-0 z-40 border-b border-brand-dark/5 bg-brand-beige/80 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative z-10">
<a aria-label="Maja Masuje home" className="flex items-center group" href="#top">
<img alt="Maja Masuje Logo" className="h-20 w-auto transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/680930b7-bc78-4ee4-a62b-2bfc0c04c6c2_320w.png"/>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm text-brand-dark/70 transition hover:text-brand-accent" href="#how">
            Jak to działa
          </a>
<a className="text-sm text-brand-dark/70 transition hover:text-brand-accent" href="#oferta">
            Oferta
          </a>
<a className="text-sm text-brand-dark/70 transition hover:text-brand-accent" href="#vouchery">
            Vouchery
          </a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex rounded-full bg-brand-button px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark shadow-sm shadow-brand-button/20" href="https://wa.me/48513196787" target="_blank">
            Umów wizytę
          </a>
</div>
</div>
</header>
<main className="relative z-10 flex-grow" id="top">

<section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 lg:pt-32 lg:pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/15 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
<div className="max-w-2xl relative z-10">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-brand-offwhite px-3 py-1.5 text-xs font-medium text-brand-dark/70 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-accent relative">
<span className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-75"></span>
</span>
                Szybka rezerwacja przez WhatsApp
              </div>
<h1 className="reveal font-heading text-4xl font-medium leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl is-initialized">
<span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em', paddingBottom: '0.2em', marginBottom: '-0.2em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
      Poczuj
    </span>
</span>
<span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em', paddingBottom: '0.2em', marginBottom: '-0.2em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
      ulgę
    </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em', paddingBottom: '0.2em', marginBottom: '-0.2em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
      i
    </span>
</span>
<span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em', paddingBottom: '0.2em', marginBottom: '-0.2em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
      odzyskaj
    </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em', paddingBottom: '0.2em', marginBottom: '-0.2em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
      energię.
    </span>
</span>
</h1>
<p className="mt-6 max-w-xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
                Profesjonalne masaże, które uwalniają od stresu i napięć.
                Wybierz swój zabieg i zarezerwuj termin w kilkanaście sekund –
                bez formularzy i dzwonienia.
              </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-button px-6 py-3.5 text-sm font-medium text-white transition hover:bg-brand-dark shadow-lg shadow-brand-button/10" href="#oferta">
<iconify-icon height="18" icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  Zobacz pakiety i ceny
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/10 bg-brand-offwhite px-6 py-3.5 text-sm font-medium text-brand-dark transition hover:bg-brand-dark/5" href="#vouchery">
<iconify-icon height="18" icon="solar:gift-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  Kup jako prezent
                </a>
</div>
<div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-dark/5 pt-8">
<div className="">
<div className="font-heading text-2xl font-medium tracking-tight text-brand-dark">
                    Setki
                  </div>
<div className="mt-1 text-xs text-brand-dark/60">
                    Zadowolonych klientów
                  </div>
</div>
<div>
<div className="font-heading text-2xl font-medium tracking-tight text-brand-dark">
                    100%
                  </div>
<div className="mt-1 text-xs text-brand-dark/60">Odprężenia</div>
</div>
<div className="">
<div className="font-heading text-2xl font-medium tracking-tight text-brand-dark">
                    5.0/5
                  </div>
<div className="mt-1 text-xs text-brand-dark/60">
                    Średnia ocen
                  </div>
</div>
</div>
</div>
<div className="relative mx-auto w-full max-w-md lg:max-w-none">
<div className="rounded-[2.5rem] p-[1px]" style={{background: 'linear-gradient(135deg, rgba(51,50,48,0.15), rgba(191,163,145,0.4), rgba(51,50,48,0.05))'}}>
<div className="relative overflow-hidden rounded-[calc(2.5rem-1px)] bg-brand-beige p-2">
<div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-brand-offwhite">
<img alt="Relaksujący masaż twarzy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80c1cd90-8764-4112-b20d-206cd554b748_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-brand-offwhite/90 p-4 backdrop-blur-md shadow-xl">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-white">
<iconify-icon height="20" icon="solar:stars-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-brand-dark">
                            Bestseller
                          </div>
<div className="text-xs text-brand-dark/60">
                            Masaż 2w1 (Ciało + Twarz)
                          </div>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
<iconify-icon height="18" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 lg:py-32 relative" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 max-w-2xl text-center md:text-left mx-auto md:mx-0">
<h2 className="reveal font-heading text-3xl font-medium tracking-tight text-brand-dark sm:text-4xl is-initialized">
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                  Prosto
                </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                  do
                </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                  celu.
                </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                  Jak
                </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                  to
                </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                  działa?
                </span>
</span>
</h2>
<p className="mt-4 text-sm leading-relaxed text-brand-dark/70 sm:text-base">
              Zarezerwuj swój moment wytchnienia w trzech prostych krokach.
            </p>
</div>
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-3xl p-[1px] group" style={{background: 'linear-gradient(180deg, rgba(51,50,48,0.08), rgba(51,50,48,0.02))'}}>
<article className="h-full rounded-[calc(1.5rem-1px)] bg-brand-offwhite p-8 transition-all hover:shadow-lg hover:shadow-brand-dark/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark/5 text-brand-dark">
<iconify-icon height="24" icon="solar:cursor-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs font-medium text-brand-accent mb-2">
                  Krok 01
                </div>
<h3 className="font-heading text-xl font-medium tracking-tight text-brand-dark">
                  Wybierz masaż
                </h3>
<p className="mt-3 text-sm leading-relaxed text-brand-dark/60">
                  Z oferty poniżej wybierz zabieg idealny dla siebie i swoich
                  potrzeb.
                </p>
</article>
</div>
<div className="rounded-3xl p-[1px]" style={{background: 'linear-gradient(180deg, rgba(51,50,48,0.08), rgba(51,50,48,0.02))'}}>
<article className="h-full rounded-[calc(1.5rem-1px)] bg-brand-offwhite p-8 transition-all hover:shadow-lg hover:shadow-brand-dark/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
<iconify-icon height="24" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs font-medium text-brand-accent mb-2">
                  Krok 02
                </div>
<h3 className="font-heading text-xl font-medium tracking-tight text-brand-dark">
                  Napisz wiadomość
                </h3>
<p className="mt-3 text-sm leading-relaxed text-brand-dark/60">
                  Wyślij krótką wiadomość na WhatsApp z propozycją terminu.
                </p>
</article>
</div>
<div className="rounded-3xl p-[1px]" style={{background: 'linear-gradient(180deg, rgba(51,50,48,0.08), rgba(51,50,48,0.02))'}}>
<article className="h-full rounded-[calc(1.5rem-1px)] bg-brand-offwhite p-8 transition-all hover:shadow-lg hover:shadow-brand-dark/5">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark/5 text-brand-dark">
<iconify-icon height="24" icon="solar:leaves-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-xs font-medium text-brand-accent mb-2">
                  Krok 03
                </div>
<h3 className="font-heading text-xl font-medium tracking-tight text-brand-dark">
                  Zrelaksuj się
                </h3>
<p className="mt-3 text-sm leading-relaxed text-brand-dark/60">
                  Przyjdź do gabinetu, ułóż się wygodnie, a ja zajmę się całą
                  resztą.
                </p>
</article>
</div>
</div>
</div>
</section>

<section className="border-t border-brand-dark/5 bg-transparent py-16 sm:py-24 lg:py-32" id="oferta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between text-center md:text-left">
<div className="max-w-2xl mx-auto md:mx-0">
<h2 className="reveal font-heading text-3xl font-medium tracking-tight text-brand-dark sm:text-4xl is-initialized">
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                    Wybierz
                  </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                    swój
                  </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                    moment
                  </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                    relaksu.
                  </span>
</span>
</h2>
<p className="mt-4 text-sm leading-relaxed text-brand-dark/70">
                Dopasowane zabiegi na twarz i ciało.
              </p>
</div>
<div className="relative hidden md:block w-72 lg:w-96 shrink-0">
<div className="rounded-3xl p-[1px]" style={{background: 'linear-gradient(135deg, rgba(51,50,48,0.1), rgba(191,163,145,0.3), rgba(51,50,48,0.05))'}}>
<div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-brand-beige aspect-[2/1]">
<img alt="Terapeutyczny masaż" className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8167942-0d33-4dc3-b598-331878298ead_800w.jpg"/>
</div>
</div>
</div>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="group flex flex-col rounded-3xl border border-brand-dark/10 bg-brand-offwhite p-8 transition-all hover:border-brand-accent/40 hover:shadow-xl hover:shadow-brand-dark/5">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
<iconify-icon height="24" icon="solar:face-scan-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium tracking-tight text-brand-dark">
                  Masaż Twarzy
                </h3>
</div>
<p className="mb-8 text-sm leading-relaxed text-brand-dark/70 flex-grow">
                Głębokie odprężenie napiętych mięśni, naturalny lifting i
                rozświetlenie cery. Chwila tylko dla Ciebie.
              </p>
<div className="flex items-center justify-between border-t border-brand-dark/5 pt-6">
<div>
<div className="text-xs text-brand-dark/50">45 min</div>
<div className="font-heading text-lg font-medium text-brand-dark">
                    150 zł
                  </div>
</div>
<a className="rounded-full bg-brand-button px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-accent" href="https://wa.me/48513196787?text=Cześć,%20chciałabym%20zarezerwować%20Masaż%20Twarzy." target="_blank">
                  Rezerwuj
                </a>
</div>
</div>
<div className="group relative flex flex-col rounded-3xl border-2 border-brand-accent/30 bg-brand-dark p-8 shadow-2xl shadow-brand-dark/10 transition-all hover:border-brand-accent/60">
<div className="absolute -top-3.5 right-8 bg-brand-accent text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm">
                Bestseller
              </div>
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-dark">
<iconify-icon height="24" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  Masaż 2w1
                </h3>
</div>
<p className="mb-8 text-sm leading-relaxed text-white/70 flex-grow">
                Kompleksowe doświadczenie. Połączenie masażu ciała i twarzy,
                które pozwala na absolutne odcięcie się od świata. Najczęściej
                wybierany pakiet.
              </p>
<div className="flex items-center justify-between border-t border-white/10 pt-6">
<div>
<div className="text-xs text-white/50">90 min</div>
<div className="font-heading text-lg font-medium text-white">
                    300 zł
                  </div>
</div>
<a className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#A88B79]" href="https://wa.me/48513196787?text=Cześć,%20chciałabym%20zarezerwować%20Masaż%202w1." target="_blank">
                  Rezerwuj
                </a>
</div>
</div>
<div className="group flex flex-col rounded-3xl border border-brand-dark/10 bg-brand-offwhite p-8 transition-all hover:border-brand-accent/40 hover:shadow-xl hover:shadow-brand-dark/5">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
<iconify-icon height="24" icon="solar:body-shape-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-medium tracking-tight text-brand-dark">
                  Masaż Ciała
                </h3>
</div>
<p className="mb-8 text-sm leading-relaxed text-brand-dark/70 flex-grow">
                Redukuje stres, łagodzi ból pleców i karku. Klasyczny relaks,
                który przywraca ciału pełną harmonię.
              </p>
<div className="flex items-center justify-between border-t border-brand-dark/5 pt-6">
<div>
<div className="text-xs text-brand-dark/50">60 min</div>
<div className="font-heading text-lg font-medium text-brand-dark">
                    200 zł
                  </div>
</div>
<a className="rounded-full bg-brand-button px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-accent" href="https://wa.me/48513196787?text=Cześć,%20chciałabym%20zarezerwować%20Masaż%20Ciała." target="_blank">
                  Rezerwuj
                </a>
</div>
</div>
</div>

<div className="mt-8 rounded-2xl border border-brand-dark/10 bg-brand-offwhite p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
<div className="flex items-center gap-4 text-center sm:text-left">
<div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-base font-medium text-brand-dark mb-1">
                  Chcesz więcej relaksu?
                </h4>
<p className="text-sm text-brand-dark/70 leading-relaxed max-w-2xl">
                  Do każdego masażu możesz dobrać:
                  <span className="text-brand-dark font-medium">
                    Peeling całego ciała
                  </span>
                  ,
                  <span className="text-brand-dark font-medium">Aromaterapię</span>
                  lub
                  <span className="text-brand-dark font-medium">
                    Maskę nawilżającą
                  </span>
                  . Daj znać w wiadomości!
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 lg:py-32 text-center pt-16 pb-16 bg-brand-dark" id="vouchery">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-brand-accent">
<iconify-icon height="40" icon="solar:gift-bold-duotone" width="40"></iconify-icon>
</div>
<h2 className="reveal font-heading text-3xl font-normal tracking-tight text-white sm:text-5xl is-initialized">
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                Szukasz
              </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                prezentu,
              </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                który
              </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>na</span>
</span>
<span className="" style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                pewno
              </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                trafia
              </span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>w</span>
</span>
<span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.25em'}}>
<span className="reveal-word" style={{display: 'inline-block'}}>
                punkt?
              </span>
</span>
</h2>
<p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Rzeczy się psują, a chwila prawdziwego wytchnienia zostaje w pamięci
            na długo. Podaruj bliskiej osobie voucher na dowolny masaż.
            Otrzymasz go w formie eleganckiego zaproszenia – gotowego do
            wręczenia.
          </p>

<div className="mx-auto mt-12 max-w-md rounded-[2.5rem] p-[1px]" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))'}}>
<div className="overflow-hidden rounded-[calc(2.5rem-1px)] bg-brand-dark/50 border border-white/5">
<img alt="Elegancki Voucher Podarunkowy Spa" className="w-full h-auto object-cover opacity-90 transition-opacity hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dde4b5ad-a779-4dfc-81a6-d1285f587b80_800w.jpg"/>
</div>
</div>

<div className="mt-8 flex flex-col items-center justify-center">
<div className="text-sm text-white/60">Cena vouchera</div>
<div className="font-heading text-3xl font-medium tracking-tight text-white mt-1">
              300 zł
            </div>
</div>
<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="rounded-full bg-brand-accent px-8 py-4 text-sm font-medium text-white transition hover:bg-[#A88B79] flex items-center gap-2" href="https://wa.me/48513196787?text=Cześć,%20chciałabym%20kupić%20voucher%20prezentowy." target="_blank">
<iconify-icon height="20" icon="tabler:brand-whatsapp" strokeWidth="1.5" width="20"></iconify-icon>
              Zamów voucher przez WhatsApp
            </a>
</div>
</div>
</section>
</main>
<footer className="border-t border-brand-dark/10 bg-brand-beige py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-10 md:flex-row md:justify-between">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4 group" href="#top">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-dark text-white">
<iconify-icon height="16" icon="solar:lotus-linear" width="16"></iconify-icon>
</span>
<span className="font-heading font-medium tracking-tight text-brand-dark text-lg">
                majamasuje.
              </span>
</a>
<p className="text-sm text-brand-dark/60 leading-relaxed mb-6">
              Twój gabinet masażu na mapie miasta. Odzyskaj energię i zredukuj
              stres w profesjonalnych rękach.
            </p>
<div className="flex items-center gap-3 text-sm text-brand-dark/80 mb-2">
<iconify-icon className="text-brand-accent" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Elbląg</span>
</div>
<div className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-accent" height="18" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>Pon - Sob, 10:00 - 19:00</span>
</div>
</div>
<div className="flex flex-col justify-end text-left md:text-right">
<div className="text-xs font-medium uppercase tracking-[0.15em] text-brand-dark/40 mb-4">
              Kontakt
            </div>
<h4 className="text-sm font-medium text-brand-dark mb-3">
              Masz nietypowe pytanie? Pisz śmiało:
            </h4>
<a className="inline-flex items-center md:justify-end gap-2 text-base font-medium text-brand-dark hover:text-brand-accent transition-colors" href="https://wa.me/48513196787" target="_blank">
<iconify-icon height="20" icon="tabler:brand-whatsapp" strokeWidth="1.5" width="20"></iconify-icon>
              +48 513 196 787
            </a>
</div>
</div>
<div className="mt-12 flex flex-col items-center justify-between border-t border-brand-dark/5 pt-8 sm:flex-row text-xs text-brand-dark/50">
<p>© 2024 Maja Masuje. Wszelkie prawa zastrzeżone.</p>
<div className="mt-4 flex gap-4 sm:mt-0">
<span>Stworzone z myślą o Twoim relaksie.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
