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



var apreslyUrl = btoa(encodeURIComponent(location.href));var apreslyParentUrlValue;try {apreslyParentUrlValue = window.parent.location.href;} catch(err) {if(err.name === "SecurityError") {apreslyParentUrlValue = document.referrer;}} var apreslyParentUrl = (parent !== window) ? ("/" + btoa(encodeURIComponent(apreslyParentUrlValue))) : "";(function() {var apreslyScript = document.createElement("script");apreslyScript.type = "text/javascript";apreslyScript.async = true;apreslyScript.setAttribute("data-scriptid", "apresly-tracking-code");apreslyScript.src = "https://app.apresly.com/api/cpa/v1/cpa?identifyToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRHdWlkIjoiNjk1ZTg2ZmEtMWVlZC00MzJiLThkOTItNTQxMGY4YzU1ZDMzIiwiaWF0IjoxNzc4NTA4MzAxfQ.WC3AVxNqMbaUNf_ncQKdDWhF1nAcvN4_Ol2c0pvpFaY&pageLocation="+apreslyUrl+"&parentPageLocation="+apreslyParentUrl;var scriptBegin = document.getElementsByTagName("script")[0];scriptBegin.parentNode.insertBefore(apreslyScript, scriptBegin);})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      const popup = document.getElementById('exit-intent-popup');
      const closeBtn = document.getElementById('close-popup');
      const popupContent = popup.querySelector('div.relative');
      let hasTriggered = false;

      document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !hasTriggered) {
          hasTriggered = true;
          popup.classList.remove('opacity-0', 'pointer-events-none');
          popupContent.classList.remove('scale-95');
          popupContent.classList.add('scale-100');
        }
      });

      function closePopup() {
        popup.classList.add('opacity-0', 'pointer-events-none');
        popupContent.classList.remove('scale-100');
        popupContent.classList.add('scale-95');
      }

      closeBtn.addEventListener('click', closePopup);

      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          closePopup();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-gradient-to-br from-red-800 to-neutral-900 -z-10"></div>
<div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-red-600 rounded-full blur-[100px] opacity-40 pointer-events-none -z-10"></div>
<div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-black rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"></div>
<main className="max-w-5xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center w-full min-h-screen gap-10">

<div className="contents">
<div className="order-1 flex flex-col items-center text-center space-y-8 w-full max-w-4xl mx-auto">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight uppercase text-white drop-shadow-sm text-center mx-auto">
            Już od dawna myślisz o
            <br className="hidden md:block"/>
<span className="text-yellow-400">stronie internetowej</span>
            ,
            <br className="hidden md:block"/>
            ale nie możesz zdecydować,
            <br className="hidden md:block"/>
            jak ją wykonać?
          </h1>
<div className="h-2 w-24 bg-yellow-400 rounded-full"></div>
</div>

</div>

<div className="contents">
<div className="hidden">?</div>

<div className="order-2 w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden relative">
<div className="w-full aspect-video bg-neutral-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden" id="video-lock-container">
<div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage: 'url(\'https://img.youtube.com/vi/5KS7kV9_9vc/maxresdefault.jpg\')'}}></div>
<div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md"></div>
<div className="relative z-10 max-w-sm w-full space-y-4">
<div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 text-neutral-950 rounded-2xl shadow-lg mb-2">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase text-white">
                Odblokuj materiał
              </h3>
<p className="text-neutral-300 font-medium text-sm">
                Zostaw swój e-mail, aby uzyskać natychmiastowy dostęp do pełnego
                wideo.
              </p>
<form className="flex flex-col gap-3 mt-4" onsubmit="event.preventDefault(); const f = this; fetch('https://woolf1717.app.n8n.cloud/webhook/5d98b0b4-c153-4be9-bf44-8db92b00ee1e', { method: 'POST', body: new URLSearchParams(new FormData(f)) }).then(() =&gt; { window.location.href = 'Landing'; }).catch(() =&gt; { window.location.href = 'Landing'; });">
<input name="form_source" type="hidden" value="hero-video-permission"/>
<input className="w-full px-5 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" name="email" placeholder="Twój adres e-mail" required="" type="email"/>
<label className="flex items-start gap-2 text-xs text-neutral-400 text-left cursor-pointer">
<input className="mt-0.5 shrink-0 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors accent-yellow-400" name="consent" required="" type="checkbox"/>
<span>
                    Wyrażam zgodę na kontakt marketingowy drogą elektroniczną.
                  </span>
</label>
<button className="w-full px-6 py-3 bg-yellow-400 text-neutral-950 font-bold text-base rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all hover:-translate-y-0.5 uppercase tracking-tight" type="submit">
                  Obejrzyj wideo
                </button>
</form>
</div>
</div>
</div>

<a className="order-3 group relative inline-flex items-center justify-center gap-4 px-10 py-6 bg-yellow-400 text-neutral-950 font-bold text-xl md:text-2xl rounded-full overflow-hidden shadow-[0_0_40px_rgba(250,204,21,0.2)] hover:shadow-[0_0_60px_rgba(250,204,21,0.4)] transition-all duration-300 hover:-translate-y-1 w-full max-w-lg mx-auto uppercase tracking-tight z-20" href="landing" id="cta-button">
<span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></span>
<svg className="w-7 h-7 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-out relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
<span className="relative z-10">Zacznijmy coś świetnego!</span>
</a>
</div>
</main>
<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 bg-black/80 backdrop-blur-sm px-4" id="exit-intent-popup">
<div className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-2xl transform scale-95 transition-transform duration-300">
<button className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors" id="close-popup" type="button">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="text-center space-y-6">
<div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 text-neutral-950 rounded-2xl shadow-lg mb-2">
<i className="w-8 h-8" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white">
            Nie jesteś gotowy na rozmowę?
          </h3>
<p className="text-neutral-300 font-medium">
            Zostaw e-mail — wyślę Ci szczegóły oferty i przykłady podobnych
            wdrożeń.
          </p>
<form className="flex flex-col gap-4 mt-6" onsubmit="event.preventDefault(); const f = this; fetch('https://woolf1717.app.n8n.cloud/webhook/5d98b0b4-c153-4be9-bf44-8db92b00ee1e', { method: 'POST', body: new URLSearchParams(new FormData(f)) }); f.innerHTML = `&lt;div className='text-yellow-400 font-bold text-xl py-4'&gt;Dziękujemy! Sprawdź swoją skrzynkę.&lt;/div&gt;`;">
<input name="form_source" type="hidden" value="prevent-exit-popup"/>
<input className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" name="email" placeholder="Twój adres e-mail" required="" type="email"/>
<label className="flex items-start gap-3 text-sm text-neutral-400 text-left cursor-pointer">
<input className="mt-0.5 shrink-0 w-4 h-4 rounded border-neutral-800 bg-neutral-900 text-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors accent-yellow-400" name="consent" required="" type="checkbox"/>
<span>
                Wyrażam zgodę na kontakt marketingowy drogą elektroniczną.
              </span>
</label>
<button className="w-full px-8 py-4 bg-yellow-400 text-neutral-950 font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all hover:-translate-y-0.5 uppercase tracking-tight" type="submit">
              Wyślij szczegóły
            </button>
</form>
</div>
</div>
</div>
<div className="fixed inset-0 z-[60] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 bg-black/80 backdrop-blur-sm px-4" id="cta-popup" onclick="if(event.target === this) { this.classList.add('opacity-0', 'pointer-events-none'); this.querySelector('div').classList.replace('scale-100', 'scale-95'); }">
<div className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-2xl transform scale-95 transition-transform duration-300">
<button className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors" onclick="document.getElementById('cta-popup').classList.add('opacity-0', 'pointer-events-none'); document.querySelector('#cta-popup &gt; div').classList.replace('scale-100', 'scale-95');" type="button">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<div className="text-center space-y-6">
<div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 text-neutral-950 rounded-2xl shadow-lg mb-2">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white">
            Rozpocznijmy współpracę
          </h3>
<p className="text-neutral-300 font-medium">
            Zostaw swoje dane, a my skontaktujemy się z Tobą, aby omówić
            projekt.
          </p>
<form className="flex flex-col gap-4 mt-6" onsubmit="event.preventDefault(); const f = this; fetch('https://woolf1717.app.n8n.cloud/webhook/5d98b0b4-c153-4be9-bf44-8db92b00ee1e', { method: 'POST', body: new URLSearchParams(new FormData(f)) }); f.innerHTML = `&lt;div className='text-yellow-400 font-bold text-xl py-4'&gt;Dziękujemy! Odezwiemy się wkrótce.&lt;/div&gt;`;">
<input className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" name="name" placeholder="Twoje imię" required="" type="text"/>
<input name="form_id" type="hidden" value="cta_popup_form"/>
<input className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" name="phone" placeholder="Twój numer telefonu" required="" type="tel"/>
<textarea className="w-full px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none" name="company" placeholder="Opisz swoją firmę" required="" rows="2"></textarea>
<textarea className="w-full px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none" name="goal" placeholder="Jaki cel ma mieć Twoja strona?" required="" rows="2"></textarea>
<button className="w-full px-8 py-4 bg-yellow-400 text-neutral-950 font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all hover:-translate-y-0.5 uppercase tracking-tight" type="submit">
              Wyślij
            </button>
</form>
</div>
</div>
</div>


    </>
  );
}
