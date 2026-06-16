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
      

<div className="absolute top-0 inset-x-0 z-50 pt-12 flex justify-center">
<span className="font-semibold tracking-tighter text-2xl text-zinc-900">
        COURTNET
      </span>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="waitlist">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 aspect-square bg-lime-400/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 mb-6 group cursor-default shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
            Kapalı Beta Yakında
          </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
            Korttaki sosyal ağınız ve
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-400">
              rekabet merkeziniz.
            </span>
</h1>
<p className="text-base md:text-lg text-zinc-600 mb-10 max-w-lg leading-relaxed font-normal">
            Maç sonuçlarınızı paylaşın, rakiplerinize düello atın, bölgesel
            turnuvalara katılın ve tenis kulübünüzle bağda kalın. Tenis
            deneyiminizi dijitale taşıyın.
          </p>

<div className="w-full max-w-md bg-white/50 p-2 rounded-2xl border border-zinc-200/80 backdrop-blur-sm shadow-xl shadow-zinc-200 focus-within:border-lime-500/50 transition-colors duration-300">
<form className="flex flex-col sm:flex-row gap-2">
<input className="flex-1 bg-transparent text-zinc-900 text-sm px-4 py-3 outline-none placeholder:text-zinc-500 rounded-xl" placeholder="E-posta veya telefon numaranız" required="" type="text"/>
<button className="bg-lime-400 hover:bg-lime-500 text-zinc-950 text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] active:scale-95 flex items-center justify-center gap-2" type="submit">
                Listeye Katıl
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
<p className="text-xs text-zinc-500 mt-4 flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
            Spam yok, sadece erken erişim güncellemeleri.
          </p>
</div>

<div className="relative w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto group cursor-pointer" onclick="this.classList.toggle('is-swapped')" onmouseenter="this.classList.toggle('is-swapped')">

<div className="relative bg-white rounded-[3.2rem] border-[8px] border-black overflow-hidden shadow-2xl group-[.is-swapped]:shadow-xl shadow-zinc-200 z-20 transform transition-all duration-700 group-[.is-swapped]:-translate-x-12 lg:group-[.is-swapped]:-translate-x-20 group-[.is-swapped]:translate-y-8 group-[.is-swapped]:-rotate-6 group-[.is-swapped]:scale-[0.85] group-[.is-swapped]:opacity-70 group-[.is-swapped]:z-10">

<div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-xl w-32 mx-auto z-30"></div>

<img className="w-full h-auto block" src="https://i.imgur.com/NyLnzRG.jpeg"/>
</div>

<div className="absolute inset-0 w-full h-full bg-white rounded-[3.2rem] border-[8px] border-black overflow-hidden shadow-xl group-[.is-swapped]:shadow-2xl shadow-zinc-200 z-10 opacity-70 transform translate-x-12 lg:translate-x-20 translate-y-8 rotate-6 scale-[0.85] transition-all duration-700 group-[.is-swapped]:translate-x-0 group-[.is-swapped]:translate-y-0 group-[.is-swapped]:rotate-0 group-[.is-swapped]:scale-100 group-[.is-swapped]:opacity-100 group-[.is-swapped]:z-30">
<div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-xl w-32 mx-auto z-30"></div>
<img className="w-full h-full object-cover block" src="https://i.imgur.com/EpSuAZQ.jpeg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative border-t border-zinc-200" id="ozellikler">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-4">
            Her vuruş, her maç kayıt altında.
          </h2>
<p className="text-sm md:text-base text-zinc-600">
            Klasik WhatsApp gruplarından kurtulun. Tenis oynamak, rakip bulmak
            ve kulübünüzle etkileşime geçmek için özel olarak tasarlandı.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-3xl border border-zinc-200 hover:bg-zinc-50 hover:border-lime-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm shadow-zinc-200/50">
<div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight">
              Sosyal Akış
            </h3>
<p className="text-xs text-zinc-600 leading-relaxed">
              Maç skorlarınızı, korttaki fotoğraflarınızı paylaşın.
              Arkadaşlarınızın kiminle, nasıl bir maç çıkardığını takip edin.
            </p>
</div>

<div className="bg-white p-6 rounded-3xl border border-zinc-200 hover:bg-zinc-50 hover:border-lime-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm shadow-zinc-200/50">
<div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:swords" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight">
              Düello Sistemi
            </h3>
<p className="text-xs text-zinc-600 leading-relaxed">
              Rakiplerinize doğrudan düello daveti gönderin. Kazananı belirleyin
              ve rekabetçi sıralamanızı yükseltin.
            </p>
</div>

<div className="bg-white p-6 rounded-3xl border border-zinc-200 hover:bg-zinc-50 hover:border-lime-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm shadow-zinc-200/50">
<div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight">
              Turnuvalar &amp; Kulüpler
            </h3>
<p className="text-xs text-zinc-600 leading-relaxed">
              Kulüplere üye olun, bölgesel turnuvalara katılın. Fikstürleri ve
              sonuçları tek bir yerden takip edin.
            </p>
</div>

<div className="bg-white p-6 rounded-3xl border border-zinc-200 hover:bg-zinc-50 hover:border-lime-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm shadow-zinc-200/50">
<div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight">
              Mesajlaşma &amp; Topluluk
            </h3>
<p className="text-xs text-zinc-600 leading-relaxed">
              Yeni partnerler bulun, maç ayarlamak için doğrudan mesajlaşın ve
              tenis ağınızı genişletin.
            </p>
</div>
</div>
</div>
</section>



<footer className="py-8 bg-white border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
<p className="text-xs text-zinc-500">
          © 2023 Courtnet. Tüm hakları saklıdır.
        </p>
<p className="text-xs font-medium text-zinc-600">
          App Store ve Play Store'da yakında.
        </p>
</div>
</footer>

    </>
  );
}
