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
      
window._wq = window._wq || [];
_wq.push({
id: "djbctqysxk",
options: {
autoPlay: true,
muted: true,
loop: true,
endVideoBehavior: "loop",
controlsVisibleOnLoad: false,
playbar: false,
fullscreenButton: false,
settingsControl: false,
smallPlayButton: false,
volumeControl: false
}
});
_wq.push({
id: "1e625vv5pt",
options: {
autoPlay: true,
muted: true,
loop: true,
endVideoBehavior: "loop",
controlsVisibleOnLoad: false,
playbar: false,
fullscreenButton: false,
settingsControl: false,
smallPlayButton: false,
volumeControl: false
}
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
    


      function updateTimer() {
        const now = new Date();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const remMinutes = 14 - (minutes % 15);
        const remSeconds = 59 - seconds;
        const minEl = document.getElementById('timer-minutes');
        const secEl = document.getElementById('timer-seconds');
        if (minEl) minEl.textContent = remMinutes.toString().padStart(2, '0');
        if (secEl) secEl.textContent = remSeconds.toString().padStart(2, '0');
      }
      setInterval(updateTimer, 1000);
      updateTimer();
      if (window.lucide) { window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
    


      if (window.lucide) { window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
    


      document.getElementById('open-webinar-form')?.addEventListener('click', () => {
        const modal = document.getElementById('webinar-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
      document.getElementById('close-webinar-form')?.addEventListener('click', () => {
        const modal = document.getElementById('webinar-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
      document.getElementById('webinar-modal')?.addEventListener('click', (e) => {
        if(e.target.id === 'webinar-modal') {
          const modal = document.getElementById('webinar-modal');
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
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
      
<div className="bg-video-wrapper hidden md:block">
<wistia-player aspect="1.791044776119403" autoplay="true" controls="false" end-video-behavior="loop" fullscreen-button="false" loop="true" media-id="djbctqysxk" muted="true" playbar="false"></wistia-player>
</div>
<div className="bg-video-wrapper block md:hidden">
<wistia-player autoplay="true" controls="false" end-video-behavior="loop" fullscreen-button="false" loop="true" media-id="1e625vv5pt" muted="true" playbar="false"></wistia-player>
</div>
<div className="fixed inset-0 z-[-5] bg-black/40 pointer-events-none"></div>
<div className="fixed inset-0 z-[-5] bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-transparent pointer-events-none"></div>
<main className="relative z-10 flex-1 flex flex-col w-full h-full min-h-screen p-6 pb-28 md:p-12 md:pb-12 lg:p-16 lg:pb-16">
<div className="w-full flex justify-start max-w-[1600px] mx-auto -mt-4 md:-mt-10 lg:-mt-14">
<img alt="Logo" className="h-40 sm:h-48 md:h-64 lg:h-80 w-auto object-contain object-left max-w-full -ml-12 sm:-ml-14 md:-ml-6 lg:-ml-8" src="https://i.postimg.cc/CMqvNprz/RATOWALAM-64.png"/>
</div>
<div className="w-full max-w-[1600px] mx-auto mt-10 md:mt-20 mb-auto">
<div className="max-w-4xl space-y-8 relative">
<div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent hidden md:block"></div>
<div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-2.5 sm:p-6 shadow-2xl w-full max-w-[240px] sm:max-w-[420px] mb-6 sm:mb-8">
<div className="flex items-start gap-2.5 sm:gap-4">
<div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 sm:mt-0.5">
<i className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-emerald-400" data-lucide="trophy"></i>
</div>
<div className="space-y-1 sm:space-y-2">
<h3 className="text-white font-medium text-base sm:text-2xl tracking-tight">
                  Gratulacje!
                </h3>
<p className="text-zinc-400 text-[10px] sm:text-base leading-relaxed">
                  Jesteś wśród 4% osób, które przeszły przez cały system i
                  zaufały! Nagroda znajduje się poniżej.
                </p>
<p className="text-emerald-400 text-[7px] sm:text-[10px] font-medium uppercase tracking-wider leading-tight">
                  TĄ STRONĘ WIDZI TYLKO KILKADZIESIĄT OSÓB MIESIĘCZNIE
                </p>
</div>
</div>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight uppercase max-w-4xl">
            BEZPŁATNY WEBINAR
            <br className="hidden md:block"/>
            Z GRAFIK I FILMÓW
            <span className="text-emerald-500">AI</span>
</h1>
<p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-normal leading-relaxed max-w-2xl mt-4 md:mt-0">
            Poznaj 30 nieznanych narzędzi AI, które praktycy wykorzystują w
            swojej pracy biznesowej. Zdobądź umiejętności z przyszłości.
          </p>
<div className="flex items-center gap-4 pt-6">
<div className="flex items-center gap-1 sm:gap-2 md:gap-3 text-white w-full max-w-full overflow-hidden">
<div className="flex flex-col items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700/80 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shadow-lg shrink-0">
<span className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white" id="timer-days">
                  00
                </span>
<span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-0.5 font-normal">
                  Dni
                </span>
</div>
<div className="flex flex-col mb-1 text-emerald-500 gap-1 md:gap-1.5 mx-0.5 sm:mx-1 shrink-0">
<div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex flex-col items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700/80 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shadow-lg shrink-0">
<span className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white" id="timer-hours">
                  00
                </span>
<span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-0.5 font-normal">
                  Godzin
                </span>
</div>
<div className="flex flex-col mb-1 text-emerald-500 gap-1 md:gap-1.5 mx-0.5 sm:mx-1 shrink-0">
<div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex flex-col items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700/80 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shadow-lg shrink-0">
<span className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white" id="timer-minutes">
                  15
                </span>
<span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-0.5 font-normal">
                  Minut
                </span>
</div>
<div className="flex flex-col mb-1 text-emerald-500 gap-1 md:gap-1.5 mx-0.5 sm:mx-1 shrink-0">
<div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex flex-col items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700/80 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shadow-lg shrink-0">
<span className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white" id="timer-seconds">
                  00
                </span>
<span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-0.5 font-normal">
                  Sekund
                </span>
</div>
</div>
</div>
<div className="w-full mt-8 md:mt-12 md:max-w-[460px] pointer-events-auto relative z-20">
<button className="w-full px-8 py-4 sm:py-5 bg-gradient-to-r from-[#38d996] to-[#18b8a5] hover:opacity-90 text-white font-semibold rounded-2xl text-lg sm:text-xl transition-all shadow-[0_0_30px_rgba(56,217,150,0.25)] hover:shadow-[0_0_40px_rgba(56,217,150,0.45)] uppercase tracking-wide flex items-center justify-center gap-3" id="open-webinar-form">
<i className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" data-lucide="ticket"></i>
              ODBIERZ BEZPŁATNY BILET
            </button>
</div>
</div>
</div>
</main>



<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" id="webinar-modal">
<div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 p-2 sm:p-4 rounded-2xl shadow-2xl w-full max-w-[460px] relative">
<button className="absolute -top-12 right-0 sm:-right-12 text-zinc-400 hover:text-white p-2 transition-colors" id="close-webinar-form">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<div className="wj-embed-wrapper" data-webinar-hash="x6rm2smg">

</div>
</div>
</div>


    </>
  );
}
