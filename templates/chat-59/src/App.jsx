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



      const profiles = [
        {
          name: "Tomasz Guzik",
          desc: "Właściciel agencji reklamowej, autor książek o marketingu, wdraża AI i automatyzacje w biznesie. Pomysłodawca AI Restaurant."
        },
        {
          name: "Chris Tabasco",
          desc: "Programista i współtwórca całej platformy i oprogramowania dla restauratorów. Obsługuje klientów z Polski i UK."
        },
        {
          name: "Wiktoria Portka",
          desc: "Zajmuje się pełną obsługą administracyjną i supportu. Odpisuje na Wasze maile, rozwiązuje problemy z dostępami."
        }
      ];

      let currentProfileIndex = 0;
      let isAnimating = false;

      function changeProfile(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const wrapper = document.getElementById('profile-wrapper');

        wrapper.classList.remove('opacity-100', 'translate-y-0');
        wrapper.classList.add('opacity-0', 'translate-y-4');

        setTimeout(() => {
          currentProfileIndex = (currentProfileIndex + direction + profiles.length) % profiles.length;
          document.getElementById('profile-name').innerText = profiles[currentProfileIndex].name;
          document.getElementById('profile-desc').innerText = profiles[currentProfileIndex].desc;

          wrapper.classList.remove('opacity-0', 'translate-y-4');
          wrapper.classList.add('opacity-100', 'translate-y-0');

          setTimeout(() => {
            isAnimating = false;
          }, 500);
        }, 400);
      }

      function openModal(e) {
        if (e) e.preventDefault();
        const modal = document.getElementById('register-modal');
        const content = document.getElementById('register-modal-content');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          modal.classList.remove('opacity-0');
          content.classList.remove('scale-95');
          content.classList.add('scale-100');
        }, 10);
      }

      function closeModal() {
        const modal = document.getElementById('register-modal');
        const content = document.getElementById('register-modal-content');
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="absolute top-0 inset-x-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto w-full"></nav>
<section className="relative min-h-screen w-full flex flex-col pt-32 pb-8 overflow-hidden">
<div className="absolute inset-0 z-0 bg-black overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 w-full h-full pointer-events-none">
<iframe allow="autoplay; fullscreen" className="w-full h-full border-none pointer-events-none" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/ib6nas1r5r?videoFoam=true&amp;autoplay=true&amp;muted=true&amp;endVideoBehavior=loop&amp;playbar=false&amp;playButton=false&amp;controlsVisibleOnLoad=false&amp;settingsControl=false&amp;volumeControl=false&amp;fullscreenControl=false"></iframe>
</div>
<div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0c] to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,white_20%,transparent)]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col flex-grow justify-between">
<div className="flex flex-col items-start mt-12 lg:mt-auto mb-8 gap-6 w-full">
<div className="max-w-2xl">
<p className="uppercase tracking-widest text-sm font-normal text-gray-400 mb-6 flex items-center gap-4">
              Kto za tym stoi?
              <span className="h-[1px] w-12 bg-white/20 block"></span>
</p>
<div className="transition-all duration-500 ease-in-out transform opacity-100 translate-y-0" id="profile-wrapper">
<h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-none" id="profile-name">
                Tomasz Guzik
              </h2>
<p className="text-lg text-gray-300 max-w-xl font-light leading-relaxed" id="profile-desc">
                Właściciel agencji reklamowej, autor książek o marketingu,
                wdraża AI i automatyzacje w biznesie. Pomysłodawca AI
                Restaurant.
              </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group flex items-center justify-center" onclick="changeProfile(-1)">
<iconify-icon className="text-2xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group flex items-center justify-center" onclick="changeProfile(1)">
<iconify-icon className="text-2xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="w-full flex flex-col items-start">
<h3 className="text-lg font-medium tracking-tight text-white mb-4 px-2 lg:px-4">
            Dla kogo to jest
          </h3>
<div className="relative w-full flex items-center group">
<button className="absolute left-2 lg:left-4 z-10 p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-[#0a0a0c]/80 hover:bg-[#0a0a0c] backdrop-blur-md border border-white/10 text-white transition-all duration-300 flex items-center justify-center shadow-lg" onclick="document.getElementById('food-carousel').scrollBy({left: -250, behavior: 'smooth'})">
<iconify-icon className="text-xl lg:text-2xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 lg:gap-4 pb-4 pt-2 no-scrollbar px-2 lg:px-4" id="food-carousel">
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Restauracje" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/SRNcbN0T/magnific-stworz-identyczna-grafike-tylko-w-nowym-ratio-52913.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Restauracje
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Pizzerie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/ncrqdzGT/magnific-stworz-identyczna-grafike-ale-w-nowym-formacie-52914.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Pizzerie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Hamburgerownie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/mDTH72rx/magnific-stworz-identyczna-grafike-tylko-w-nowym-ratio-52915.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Hamburgerownie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Sushi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/Hsr7wNTh/magnific-stworz-identyczna-grafike-tylko-w-nowym-ratio-52916.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Sushi
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Włoskie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/4d4YmL8W/magnific-stworz-identyczna-grafike-w-nowym-formacie-52917.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Włoskie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Domowe" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/c4trg8cm/magnific-stwrz-identyczna-grafike-w-nowym-formacie-52918.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Domowe
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Kebabownie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/c4trg8cm/magnific-stwrz-identyczna-grafike-w-nowym-formacie-52918.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Kebabownie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Kawiarnie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/tC64CGX2/magnific-stwrz-identyczna-grafike-tylko-w-nowym-ratio-52920.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-medium text-white tracking-tight leading-tight">
                    Kawiarnie
                  </h4>
</div>
</div>
</div>
<button className="absolute right-2 lg:right-4 z-10 p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-[#0a0a0c]/80 hover:bg-[#0a0a0c] backdrop-blur-md border border-white/10 text-white transition-all duration-300 flex items-center justify-center shadow-lg" onclick="document.getElementById('food-carousel').scrollBy({left: 250, behavior: 'smooth'})">
<iconify-icon className="text-xl lg:text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<div className="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="register-modal">
<div className="bg-[#0f0f13] border border-white/10 p-8 rounded-3xl w-full max-w-md scale-95 transition-transform duration-300 relative" id="register-modal-content">
<button className="absolute top-4 right-4 text-gray-400 hover:text-white flex items-center justify-center" onclick="closeModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<h3 className="text-2xl font-medium tracking-tight text-white mb-6">
          Zapisz się
        </h3>
<p className="text-gray-400 mb-6 font-light">
          Zostaw swoje dane, aby otrzymać dostęp.
        </p>
</div>
</div>


    </>
  );
}
