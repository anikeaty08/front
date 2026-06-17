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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const form = document.getElementById("reservationForm");
      const input = document.getElementById("formInput");
      const label = document.getElementById("inputLabel");
      const button = document.getElementById("ctaButton");
      const progressPanel = document.getElementById("progressPanel");
      const stepLabel = document.getElementById("stepLabel");
      const stepTitle = document.getElementById("stepTitle");
      const progressBar = document.getElementById("progressBar");
      const successMessage = document.getElementById("successMessage");
      const infoText = document.getElementById("infoText");
      const infoIcon = document.getElementById("infoIcon");
      const dots = [
        document.getElementById("dot1"),
        document.getElementById("dot2"),
        document.getElementById("dot3")
      ];

      let step = 1;

      function updateDots(activeStep) {
        dots.forEach((dot, index) => {
          if (index < activeStep) {
            dot.className = "h-2 w-2 rounded-full bg-emerald-400";
          } else {
            dot.className = "h-2 w-2 rounded-full bg-white/20";
          }
        });
      }

      function goToStep(nextStep) {
        step = nextStep;
        input.value = "";
        successMessage.classList.add("hidden");

        if (step === 2) {
          progressPanel.classList.remove("hidden");
          stepLabel.textContent = "Krok 2 z 3";
          stepTitle.textContent = "Uzupełnij dane";
          progressBar.className = "h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500";
          updateDots(2);

          label.textContent = "Imię i nazwisko";
          input.type = "text";
          input.autocomplete = "name";
          input.placeholder = "Imię i nazwisko";
          button.textContent = "Zatwierdź";
          if (infoText) infoText.innerHTML = "Wpisz prawdziwe imię i nazwisko. Jest nam to potrzebne do późniejszego wystawienia certyfikatu jeśli się zdecydujesz wziąć udział w szkoleniu.";
          if (infoIcon) infoIcon.setAttribute("icon", "lucide:info");
          input.focus();
        }

        if (step === 3) {
          progressPanel.classList.remove("hidden");
          stepLabel.textContent = "Krok 3 z 3";
          stepTitle.textContent = "Potwierdź rezerwację";
          progressBar.className = "h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500";
          updateDots(3);

          label.textContent = "Adres E-mail";
          input.type = "email";
          input.autocomplete = "email";
          input.placeholder = "Adres E-mail";
          button.textContent = "Zarezerwuj";
          if (infoText) infoText.innerHTML = "Zaraz zostaniesz automatycznie przekierowany do whatsapp. Jeśli nie posiadasz tej aplikacji to skontaktujemy się telefonicznie.";
          if (infoIcon) infoIcon.setAttribute("icon", "ic:baseline-whatsapp");
          input.focus();
        }
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (step === 1) {
          goToStep(2);
          return;
        }

        if (step === 2) {
          goToStep(3);
          return;
        }

        successMessage.classList.remove("hidden");
        button.textContent = "Zarezerwowano";
        input.blur();
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
      
<main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
<section className="w-full max-w-2xl">
<div className="mx-auto w-full rounded-[1.75rem] border border-white/10 bg-[#0b0c0f]/70 p-3 shadow-2xl shadow-black/40 backdrop-blur sm:p-4" id="card">
<div className="mb-4 hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-3 sm:p-4" id="progressPanel">
<div className="mb-3 flex items-center justify-between gap-4">
<div>
<p className="text-xs font-medium text-white/55" id="stepLabel">
                  Krok 2 z 3
                </p>
<h1 className="mt-1 text-xl font-medium tracking-tight text-white sm:text-2xl" id="stepTitle">
                  Uzupełnij dane
                </h1>
</div>
<div aria-label="Postęp formularza" className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400" id="dot1"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400" id="dot2"></span>
<span className="h-2 w-2 rounded-full bg-white/20" id="dot3"></span>
</div>
</div>
<div className="h-1.5 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500" id="progressBar"></div>
</div>
</div>
<form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center" id="reservationForm">
<label className="sr-only" htmlFor="formInput" id="inputLabel">
              Wpisz numer telefonu
            </label>
<div className="relative flex w-full flex-1 items-center">
<input autocomplete="tel" className="min-h-14 w-full rounded-full border border-white/10 bg-[#07080a] pl-[138px] pr-5 text-xl font-normal tracking-tight text-white outline-none transition placeholder:text-[#767680] focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/10 sm:min-h-16 sm:pl-[148px] sm:pr-6 sm:text-2xl" id="formInput" placeholder="Wpisz numer telefonu" type="tel"/>
<div className="absolute inset-y-[1px] left-[1px] flex items-center pl-4 sm:pl-5 pr-1 pointer-events-none bg-white/5 rounded-l-full" id="countryCodeSelect">
<select className="pointer-events-auto h-full bg-transparent text-white/90 focus:outline-none focus:ring-0 appearance-none pl-1 pr-6 cursor-pointer text-lg sm:text-xl border-none outline-none [&amp;&gt;option]:bg-[#0b0c0f] [&amp;&gt;option]:text-white" name="countryCode" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.3rem center', backgroundSize: '0.7rem auto'}}>
<option selected="" value="+48">🇵🇱 +48</option>
<option value="+49">🇩🇪 +49</option>
<option value="+44">🇬🇧 +44</option>
<option value="+33">🇫🇷 +33</option>
<option value="+39">🇮🇹 +39</option>
<option value="+34">🇪🇸 +34</option>
<option value="+420">🇨🇿 +420</option>
<option value="+421">🇸🇰 +421</option>
<option value="+43">🇦🇹 +43</option>
<option value="+31">🇳🇱 +31</option>
<option value="+32">🇧🇪 +32</option>
<option value="+41">🇨🇭 +41</option>
<option value="+46">🇸🇪 +46</option>
<option value="+47">🇳🇴 +47</option>
<option value="+45">🇩🇰 +45</option>
<option value="+358">🇫🇮 +358</option>
<option value="+351">🇵🇹 +351</option>
<option value="+353">🇮🇪 +353</option>
</select>
<div className="h-6 w-px bg-white/10 ml-2"></div>
</div>
</div>
<button className="min-h-14 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 px-6 text-xl font-medium tracking-tight text-white shadow-2xl shadow-emerald-500/15 transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/25 active:scale-[0.99] sm:min-h-16 sm:min-w-48 sm:px-8 sm:text-2xl" id="ctaButton" type="submit">
              Zarezerwuj
            </button>
</form>
<div className="mt-4 flex items-start gap-3 rounded-[1.25rem] border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm font-normal leading-relaxed text-emerald-50">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#07110c] shadow-lg shadow-emerald-500/20">
<iconify-icon height="26" icon="ic:baseline-whatsapp" id="infoIcon" width="26"></iconify-icon>
</div>
<p id="infoText">
              Po wpisaniu numeru telefonu zostaniesz automatycznie przekierowany
              do Whatsapp.
              <br/>
              Jeśli nie posiadasz WhatsApp, skontaktujemy się z Tobą
              telefonicznie.
            </p>
</div>
<div className="mt-4 hidden rounded-[1.25rem] border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm font-normal text-emerald-100" id="successMessage">
            Dziękujemy. Twoja rezerwacja została przyjęta.
          </div>
</div>
</section>
</main>


    </>
  );
}
